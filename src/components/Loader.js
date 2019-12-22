import React from 'react'

export function Loader({ loading = false, ...props }) {
  if (loading) {
    return <div>...</div>
  }
  return null
}
