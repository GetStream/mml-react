import React, { useContext } from 'react'
import { MMLContext } from '../'

export function ButtonList({ attributes, children, ...props }) {
  const mmlContext = useContext(MMLContext)

  return <div className="mml-selectlist">{children}</div>
}
