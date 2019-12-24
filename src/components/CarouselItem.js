import React, { useContext } from 'react'
import { MMLContext } from './context'

export function CarouselItem({ children, attributes, ...props }) {
  return (
    <div className="mml-carousel-item" {...attributes}>
      {children}
    </div>
  )
}
