import { Element as XmlElement, Text as XmlText } from '@rgrove/parse-xml';

/**
 * MMLTag - The base MML Tag
 */
export class MMLTag {
  tagName: string;
  node: XmlElement | XmlText;
  children?: MMLTag[];
  attributes: Record<string, string>;
  key?: string;

  static data = false;

  static validChildren = 'all';
  static validAttributes = {};
  static requiredAttributes = [];

  constructor(tagName: string, node: XmlElement | XmlText, children?: MMLTag[]) {
    this.tagName = tagName;
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
    return {};
  }

  // This moved to proptypes at the react level
  validate() {
    return [];
    /*
    const errors = []
    if (this.constructor.validChildren !== 'all' && this.children) {
      for (const c of this.children) {
        if (!(c.tagName in this.validChildren)) {
          errors.push(
            `Tag ${this.tagName} doesn't support child tags of type ${c.tagName}`
          )
        }
      }
    } else if (!this.constructor.validChildren && this.children) {
      errors.push(`Tag ${this.tagName} doesn't support child tags`)
    }

    for (const a of Object.keys(this.node.attributes)) {
      if (!(a in this.constructor.validAttributes)) {
        errors.push(`Unrecognized attribute ${a} for tag ${this.tagName}`)
      }
    }
    for (const a of this.constructor.requiredAttributes) {
      if (!(a in this.node.attributes)) {
        errors.push(`Attribute ${a} is required for tag ${this.tagName}`)
      }
    }

    return errors */
  }
}

/**
 * MMLDataTag - Extend this MML tag for any type of data input
 * @extends MMLTag
 */
export class MMLDataTag extends MMLTag {
  static data = true;
}
