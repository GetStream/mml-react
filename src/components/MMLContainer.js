import React, { useState } from 'react'

import { Loader as LoaderComponent } from './Loader'
import { Error as ErrorComponent } from './Error'
import { Success as SuccessComponent } from './Success'
import { MMLContext } from './context'

export function useMML() {
  const [state, setState] = useState({})

  return [state, setState]
}

export function MMLContainer({
  source,
  converterConfig,
  children,
  hasData = false,
  error = null,
  Loader = LoaderComponent,
  Error = ErrorComponent,
  Success = SuccessComponent,
  ...props
}) {
  const [state, setState] = useMML()

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
      await props.onAction(data)
      // TODO: always merge existing state...
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
