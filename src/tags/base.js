import { getNodeText } from '../utils'
/**
 * MMLTag - The base MML Tag
 */
export class MMLTag {
  static data = false

  static validChildren = 'all'
  static validAttributes = {}
  static requiredAttributes = []

  constructor(tagName, node, children) {
    this.tagName = tagName
    this.node = node
    this.attr = this.node.attributes
    this.children = children
  }

  getText() {
    return getNodeText(this.node)
  }

  initialState() {
    return {}
  }

  // This moved to proptypes at the react level
  validate() {
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
  static data = true
}
