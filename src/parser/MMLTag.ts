import { Element as XmlElement, Text as XmlText } from '@rgrove/parse-xml';

/**
 * MMLTag - Xml tag converted to this MMLTag
 */
export class MMLTag {
  name: string;
  node: XmlElement | XmlText;
  attributes: Record<string, string>;
  children?: MMLTag[];
  key?: string;

  constructor(name: string, node: XmlElement | XmlText, children?: MMLTag[]) {
    this.name = name;
    this.node = node;
    this.attributes = (this.node as XmlElement).attributes || {};
    this.children = children;
  }

  getText() {
    if (this.node.type === 'text') return this.node.text;
    else if (this.node.children && this.node.children.length) return (this.node.children[0] as XmlText).text;
    return '';
  }

  initialState() {
    const { name, value } = this.attributes;
    if (name) return { [name]: value };
    return {};
  }
}
