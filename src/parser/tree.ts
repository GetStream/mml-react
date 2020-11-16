import { ReactElement } from 'react';
import { Element as XmlElement } from '@rgrove/parse-xml';

import { MMLTag } from './tags';
import { converterConfig as ReactConverterConfig } from '../components/converterConfig';

export type Convertor = (tag: MMLTag, children?: ReactElement[]) => ReactElement;

/**
 * Tree - The tree object for MML tags
 */
export class Tree {
  node: XmlElement;
  children: MMLTag[];
  converterConfig: Record<string, Convertor>;
  name?: string;

  constructor(node: XmlElement, children: MMLTag[], converterConfig?: Record<string, Convertor>) {
    this.node = node;
    this.children = children;
    this.converterConfig = converterConfig || ReactConverterConfig;
    this.name = node.attributes.name;
  }

  /**
   * Recursively convert nodes to react
   */
  toReact(parent: Tree | MMLTag = this) {
    const reactNodes: ReactElement[] = [];

    (parent.children || []).forEach((child, i) => {
      const converter = this.converterConfig[child.tagName];
      if (!converter) {
        throw Error(
          `Converter not found for tag ${child.tagName}, Available converters are ${Object.keys(this.converterConfig)}`,
        );
      }

      const children = this.toReact(child);
      child.key = `tag-${child.tagName}-position-${i}`;
      reactNodes.push(converter(child, children));
    });

    return reactNodes;
  }

  hasData() {
    let data = false;

    function checkForData(nodes: MMLTag[]) {
      nodes.forEach((node) => {
        //@ts-expect-error
        if (node.constructor.data) data = true; // FIXME: does not exist?
        if (node.children) checkForData(node.children);
      });
    }
    checkForData(this.children);
    return data;
  }

  validateTree() {
    const errors: string[] = [];
    const err = this.validate();
    if (err) errors.push(err);

    (function runValidation(nodes: MMLTag[]) {
      nodes.forEach((node) => {
        const err = node.validate();
        if (err) errors.push(...err);
        if (node.children) runValidation(node.children);
      });
    })(this.children);

    return errors;
  }

  validate() {
    if (!this.children || this.children.length === 0) return 'mml tag is empty';
    return '';
  }

  initialState() {
    // get initial state for all children
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
