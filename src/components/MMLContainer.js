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
  const [state, setState] = useState(data)

  async function handleSubmit(event) {
    event.preventDefault()
    console.log('submit', state)
    const data = []
    const pairs = Object.keys(state).map((key, index) => {
      return { name: key, value: state[key] }
    })
    data.push(...pairs)

    setState({ ...state, loading: true, error: '', success: '' })
    try {
      await onSubmit(data)
      setState({
        ...state,
        loading: false,
        error: '',
        success: 'submitted'
      })
    } catch (e) {
      setState({ ...state, loading: false, error: 'something is broken' })
    }
  }

  // expose helpers for form elements to change the state
  function setValue(name, value) {
    setState({ ...state, [name]: value })
  }
  function changeValue(name, delta) {
    let currentValue = state[name] || 0
    currentValue = currentValue * 1
    const newValue = currentValue + delta
    setState({ ...state, [name]: newValue })
  }

  if (error) {
    return <div className="mml-container">{error}</div>
  }

  const context = {
    ...state,
    changeValue,
    setValue
  }

  if (hasData) {
    return (
      <MMLContext.Provider value={context}>
        <div className="mml-container">
          <form onSubmit={handleSubmit}>
            {children}
            <Loader loading={state.loading} />
            <Success success={state.success} />
            <Error error={state.error} />
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
  Loader: PropTypes.element,
  /** The error component */
  Error: PropTypes.element,
  /** The success message component */
  Success: PropTypes.element
}
