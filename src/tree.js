import React from 'react'
import { ButtonInner } from './tags/data/button'

import { Input } from './components/Input'
import { ButtonList } from './components/ButtonList'
import { Calendar } from './components/Calendar'
import { Scheduler } from './components/Scheduler'
import { Text } from './components/Text'
import { MD } from './components/MD'
import { Row } from './components/Row'
import { Column } from './components/Column'
import { Image } from './components/Image'
import { Icon } from './components/Icon'
import { Carousel } from './components/Carousel'
import { CarouselItem } from './components/CarouselItem'
import { Number } from './components/Number'

/**
 * Tree - The tree object for MML tags
 */
export class Tree {
  constructor(node, children, converterConfig) {
    this.node = node
    this.name = node.attributes.name
    this.children = children
    this.converterConfig = {
      button: tag => {
        return (
          <ButtonInner text={tag.getText()} attributes={tag.node.attributes} />
        )
      },
      buttonlist: tag => {
        const children = this.childrenToReact(tag)
        return (
          <ButtonList attributes={tag.node.attributes} children={children} />
        )
      },
      input: tag => {
        return <Input attributes={tag.node.attributes} />
      },
      add_to_calendar: tag => {
        return <Calendar attributes={tag.node.attributes} />
      },
      column: tag => {
        const children = this.childrenToReact(tag)
        return <Column attributes={tag.node.attributes} children={children} />
      },
      row: tag => {
        const children = this.childrenToReact(tag)
        return <Row attributes={tag.node.attributes} children={children} />
      },
      icon: tag => {
        return <Icon attributes={tag.node.attributes} />
      },
      image: tag => {
        return <Image attributes={tag.node.attributes} />
      },
      md: tag => {
        return <MD text={tag.getText()} attributes={tag.node.attributes} />
      },
      text: tag => {
        return <Text text={tag.getText()} attributes={tag.node.attributes} />
      },
      scheduler: tag => {
        const initialDate = new Date(tag.attr.value)
        return (
          <Scheduler
            selected={rc.state[this.attr.name]}
            interval={this.attr.interval}
            duration={this.attr.duration}
            full_day={this.attr.full_day}
            ical_availability={this.attr.ical_availability}
            onChange={rc.handleAction.bind(rc, this.attr)}
          />
        )
      },
      carousel: tag => {
        const children = this.childrenToReact(tag)
        return <Carousel children={children} />
      },
      item: tag => {
        const children = this.childrenToReact(tag)
        return <CarouselItem children={children} />
      },
      number: tag => {
        return <Number attributes={tag.node.attributes} />
      }
    }
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
        reactNode = c.toReact(rc)
      }
      reactChildren.push(reactNode)
    }

    return reactChildren
  }

  toReact(rc) {
    const reactChildren = []
    for (const c of this.children) {
      console.log(c.tagName)
      const converter = this.converterConfig[c.tagName]
      let reactNode
      if (converter) {
        reactNode = converter(c)
      } else {
        reactNode = c.toReact(rc)
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
