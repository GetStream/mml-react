import { converterConfig as ReactConverterConfig } from './components/converterConfig'

/**
 * Tree - The tree object for MML tags
 */
export class Tree {
  constructor(node, children, converterConfig) {
    this.node = node
    this.name = node.attributes.name
    this.children = children
    this.converterConfig = converterConfig || ReactConverterConfig
  }

  // TODO: Merge with toReact
  childrenToReact(tag) {
    const reactChildren = []
    for (const c of tag.children) {
      const converter = this.converterConfig[c.tagName]
      let reactNode
      if (converter) {
        reactNode = converter(c)
      } else {
        throw Error(
          `Converter not found for tag ${
            c.tagName
          }, Available converters are ${Object.keys(this.converterConfig)}`
        )
      }
      reactChildren.push(reactNode)
    }

    return reactChildren
  }

  toReact(rc) {
    const reactChildren = []
    for (const c of this.children) {
      const converter = this.converterConfig[c.tagName]
      let reactNode
      if (converter) {
        reactNode = converter(c)
      } else {
        throw Error(
          `Converter not found for tag ${
            c.tagName
          }, Available converters are ${Object.keys(this.converterConfig)}`
        )
      }
      reactChildren.push(reactNode)
    }

    return reactChildren
  }

  hasData() {
    let data = false

    function checkForData(nodes) {
      for (const n of nodes) {
        if (n.constructor.data) {
          data = true
        }
        if (n.children) {
          checkForData(n.children)
        }
      }
    }
    checkForData([this])
    return data
  }

  validateTree() {
    const errors = []

    function runValidation(nodes) {
      for (const n of nodes) {
        const nodeErrors = n.validate()
        errors.push(...nodeErrors)
        if (n.children) {
          runValidation(n.children)
        }
      }
    }
    runValidation([this])
    return errors
  }

  validate() {
    const errors = []
    if (!this.children || this.children.length === 0) {
      errors.append('mml tag is empty')
    }
    return errors
  }

  initialState() {
    // get initial state for all children
    let state = {}

    if (this.name) {
      state.mml_name = this.name
    }

    function gatherState(nodes) {
      for (const n of nodes) {
        state = { ...state, ...n.initialState() }
        if (n.children) {
          gatherState(n.children)
        }
      }
    }
    gatherState(this.children)
    return state
  }
}
