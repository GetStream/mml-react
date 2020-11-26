import { ReactElement } from 'react';
import { Element as XmlElement } from '@rgrove/parse-xml';

import { MMLTag } from './MMLTag';
import { converters as defaultConverters, ConvertorType } from './converters';

export type TreeType = 'card' | undefined;

/**
 * Tree - The tree object for MML tags
 */
export class Tree {
  node: XmlElement;
  children: MMLTag[];
  converters: Record<string, ConvertorType>;
  name?: string;
  /** The type attribute of <mml> determine how its inner content is visually displayed */
  type: TreeType;

  constructor(node: XmlElement, children: MMLTag[], customConvertors?: Record<string, ConvertorType>) {
    this.node = node;
    this.children = children;
    this.converters = { ...defaultConverters, ...customConvertors };
    this.name = node.attributes.name;
    this.type = node.attributes.type === 'card' ? 'card' : undefined;
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
}
