import parseXml from '@rgrove/parse-xml';
import { tags } from './tags';
import { Tree } from './tree';

/**
 * SourceToXML - Takes an MML string and converts it to XML nodes
 *
 * @param {string} source MML tag string
 *
 * @returns {array} an Array of XML nodes
 */
export function SourceToXML(source) {
  let src = source;
  // the wrapping MML tags are optional, for parsing simplicity we automatically add them if they are not already there
  if (!src.startsWith('<mml')) src = `<mml>${source}</mml>`;

  // emulate HTML handling of & escaping
  const unescapedAmps = /&(?!amp;|lt;|gt;)/g;
  src = src.replace(unescapedAmps, '&amp;');

  // convert the string to XML nodes
  // this library is relatively lightweight and doesn't do a ton of validation
  return [parseXml(src)];
}

/**
 * XMLtoMMLTree - Takes an array of XML nodes and converts it into an MML Tree
 *
 * @param {type} XMLNodes an array of XML nodes
 *
 * @returns {MMLTree} The MML tree
 */
export function XMLtoMMLTree(XMLNodes) {
  let tree;

  function convertNodes(nodes) {
    const MMLNodes = [];
    for (const n of nodes) {
      let children;
      if (n.children) {
        children = convertNodes(n.children);
      }

      // structured way of looking up mml tags...
      let tagName = n.name;
      if (n.name === 'mml') {
        tree = new Tree(n, children);
        continue;
      }
      // skip the document level element...
      if (n.type === 'document') {
        return children;
      }
      if (n.type === 'text') {
        if (n.text.trim().length > 0) {
          tagName = 'text';
        } else {
          // skip empty text nodes
          continue;
        }
      }

      const TagClass = tags[tagName];

      if (TagClass) {
        const tag = new TagClass(tagName, n, children);
        MMLNodes.push(tag);
      } else {
        console.log('unrecognized element', tagName, Object.keys(tags));
      }
    }
    return MMLNodes;
  }
  convertNodes(XMLNodes);

  return tree;
}

/**
 * Takes an MML string and returns an MML Tree
 *
 * @param {string} source MML tag string
 *
 *  @returns {Tree} An MML Tree
 */
export function Parse(source) {
  const XMLNodes = SourceToXML(source);
  return XMLtoMMLTree(XMLNodes);
}
