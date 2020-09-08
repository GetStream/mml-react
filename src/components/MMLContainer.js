import React, { useState } from 'react'

import { Loader as LoaderComponent } from './Loader'
import { Error as ErrorComponent } from './Error'
import { Success as SuccessComponent } from './Success'
import { MMLContext } from './context'
import PropTypes from 'prop-types'

export function MMLContainer({
  children,
  onSubmit,
  data,
  hasData = false,
  error = null,
  Loader = LoaderComponent,
  Error = ErrorComponent,
  Success = SuccessComponent,
  ...props
}) {
  const [contextState, setContextState] = useState(data)

  async function handleSubmit(event) {
    event.preventDefault()
    const data = []
    const pairs = Object.keys(contextState).map((key, index) => {
      return { name: key, value: contextState[key] }
    })
    data.push(...pairs)

    setContextState({ ...contextState, loading: true, error: '', success: '' })
    try {
      await onSubmit(data)
      setContextState({
        ...contextState,
        loading: false,
        error: '',
        success: 'submitted'
      })
    } catch (e) {
      setContextState({
        ...contextState,
        loading: false,
        error: 'something is broken'
      })
    }
  }

  // expose helpers for form elements to change the contextState
  function setValue(name, value) {
    setContextState(prevContextState => {
      return { ...prevContextState, [name]: value }
    })
  }
  function changeValue(name, delta) {
    let currentValue = contextState[name] || 0
    currentValue = currentValue * 1
    const newValue = currentValue + delta
    setContextState({ ...contextState, [name]: newValue })
  }

  if (error) {
    return <div className="mml-container">{error}</div>
  }

  const context = {
    ...contextState,
    changeValue,
    setValue
  }

  if (hasData) {
    return (
      <MMLContext.Provider value={context}>
        <div className="mml-container">
          <form onSubmit={handleSubmit}>
            {children}
            <Loader loading={contextState.loading} />
            <Success success={contextState.success} />
            <Error error={contextState.error} />
          </form>
        </div>
      </MMLContext.Provider>
    )
  } else {
    return (
      <MMLContext.Provider value={context}>
        <div className="mml-container">{children}</div>
      </MMLContext.Provider>
    )
  }
}

MMLContainer.propTypes = {
  /** The submit callback whenever a form is submitted, submit is expected to return a promise */
  onSubmit: PropTypes.func,
  /** Render an error message if needed */
  error: PropTypes.string,
  /** If the child nodes contain data input elements */
  hasData: PropTypes.bool,
  /** The child nodes */
  children: PropTypes.node,

  /** The Loader component */
  Loader: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** The error component */
  Error: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** The success message component */
  Success: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
}
