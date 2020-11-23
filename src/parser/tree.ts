import { ReactElement } from 'react';
import { Element as XmlElement } from '@rgrove/parse-xml';

import { MMLTag } from './MMLTag';
import { converters as defaultConverters, ConvertorType } from './converters';

/**
 * Tree - The tree object for MML tags
 */
export class Tree {
  node: XmlElement;
  children: MMLTag[];
  converters: Record<string, ConvertorType>;
  name?: string;

  constructor(node: XmlElement, children: MMLTag[], customConvertors?: Record<string, ConvertorType>) {
    this.node = node;
    this.children = children;
    this.converters = { ...defaultConverters, ...customConvertors };
    this.name = node.attributes.name;
  }

  /**
   * convert all nodes to react and maintain the hierarchy
   */
  toReact(parent: Tree | MMLTag = this) {
    const reactNodes: ReactElement[] = [];

    (parent.children || []).forEach((child, i) => {
      const converter = this.converters[child.name];
      if (!converter) {
        throw Error(
          `Converter not found for tag ${child.name}, Available converters are ${Object.keys(this.converters)}`,
        );
      }

      const children = this.toReact(child);
      child.key = `tag-${child.name}-position-${i}`;
      reactNodes.push(converter(child, children));
    });

    return reactNodes;
  }

  /**
   * get initial state for all children
   */
  initialState() {
    let state: Record<string, any> = {};
    if (this.name) state.mml_name = this.name;

    (function gatherState(nodes: MMLTag[]) {
      nodes.forEach((node) => {
        state = { ...state, ...node.initialState() };
        if (node.children) gatherState(node.children);
      });
    })(this.children);

    return state;
  }
}
