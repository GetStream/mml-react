import React from 'react'

export function Error({ error = '', ...props }) {
  if (error) {
    return <span className="mml-error">{error}</span>
  }
  return null
}
