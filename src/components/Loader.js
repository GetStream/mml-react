import React from 'react'
import PropTypes from 'prop-types'

/**
 * Loading indicator for MML
 */
export function Loader({ loading = false, ...props }) {
  if (loading) {
    return <div>...</div>
  }
  return null
}

Loader.propTypes = {
  /** Loading boolean */
  loading: PropTypes.bool
}
