import { converterConfig as ReactConverterConfig } from '../components/converterConfig';

/**
 * Tree - The tree object for MML tags
 */
export class Tree {
  constructor(node, children, converterConfig) {
    this.node = node;
    this.name = node.attributes.name;
    this.children = children;
    this.converterConfig = converterConfig || ReactConverterConfig;
  }

  /**
   * Recursively convert nodes to react
   */
  toReact(parentTag = {}) {
    const reactNodes = [];

    const childTags = parentTag.children || [];
    let count = 0;
    for (const childTag of childTags) {
      count += 1;
      const converter = this.converterConfig[childTag.tagName];
      if (!converter) {
        throw Error(
          `Converter not found for tag ${childTag.tagName}, Available converters are ${Object.keys(
            this.converterConfig,
          )}`,
        );
      }
      childTag.key = `tag-${childTag.tagName}-position-${count}`;
      const children = this.toReact(childTag);
      const reactNode = converter(childTag, children);

      reactNodes.push(reactNode);
    }

    return reactNodes;
  }

  hasData() {
    let data = false;

    function checkForData(nodes) {
      for (const n of nodes) {
        if (n.constructor.data) {
          data = true;
        }
        if (n.children) {
          checkForData(n.children);
        }
      }
    }
    checkForData([this]);
    return data;
  }

  validateTree() {
    const errors = [];

    function runValidation(nodes) {
      for (const n of nodes) {
        const nodeErrors = n.validate();
        errors.push(...nodeErrors);
        if (n.children) {
          runValidation(n.children);
        }
      }
    }
    runValidation([this]);
    return errors;
  }

  validate() {
    const errors = [];
    if (!this.children || this.children.length === 0) {
      errors.append('mml tag is empty');
    }
    return errors;
  }

  initialState() {
    // get initial state for all children
    let state = {};

    if (this.name) {
      state.mml_name = this.name;
    }

    function gatherState(nodes) {
      for (const n of nodes) {
        state = { ...state, ...n.initialState() };
        if (n.children) {
          gatherState(n.children);
        }
      }
    }
    gatherState(this.children);
    return state;
  }
}
