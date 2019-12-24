import React, { useContext } from 'react'
import { MMLContext } from './context'

export function Column({ children, attributes, ...props }) {
  const mmlContext = useContext(MMLContext)

  const width = attributes.width ? attributes.width : 12
  const offset = attributes.offset ? attributes.offset : 0
  let classNames = `mml-col-${width}`
  if (offset) {
    classNames = classNames + ` mml-offset-${offset}`
  }

  const align = attributes.align ? attributes.align : 'left'
  classNames = classNames + ` mml-align-${align}`

  return <div className={classNames}>{children}</div>
}
