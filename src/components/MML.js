import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import { Parse } from '../parser'
import { Loader as LoaderComponent } from './Loader'
import { Error as ErrorComponent } from './Error'
import { Success as SuccessComponent } from './Success'
import { MMLContext } from '../'

export function useMML() {
  const [state, setState] = useState({})

  return [state, setState]
}

export function MML({
  source,
  converterConfig,
  Loader = LoaderComponent,
  Error = ErrorComponent,
  Success = SuccessComponent,
  ...props
}) {
  const [state, setState] = useMML()
  const [prevSource, setPrevSource] = useState(null)

  const [tree, initialState] = useMemo(() => {
    const tree = Parse(source)
    if (converterConfig) {
      tree.converterConfig = converterConfig
    }
    let initialState
    try {
      // get initial state for all input elements in MML
      const treeState = tree.initialState()
      initialState = {
        ...treeState,
        error: '',
        loading: false,
        success: '',
        mml_error: ''
      }
    } catch (e) {
      initialState = {
        mml_error:
          "This chat message has invalid formatting and can't be shown",
        loading: false,
        success: ''
      }
    }
    return [tree, initialState]
  }, [source, converterConfig])

  if (source !== prevSource) {
    setState({ ...state, ...initialState })
    setPrevSource(source)
  }

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

  if (state.mml_error) {
    return <div className="mml-container">{state.mml_error}</div>
  }

  const context = {
    ...state,
    changeValue,
    setValue
  }

  if (tree.hasData()) {
    return (
      <MMLContext.Provider value={context}>
        <div className="mml-container">
          <form onSubmit={handleSubmit}>
            {tree.toReact(tree)}
            <Loader loading={state.loading} />
            <Success success={state.success} />
            <Error error={state.error} />
          </form>
        </div>
      </MMLContext.Provider>
    )
  } else {
    return (
      <MMLContext.Provider handleAction={handleAction}>
        <div className="mml-container">{tree.toReact(tree)}</div>
      </MMLContext.Provider>
    )
  }
}

MML.propTypes = {
  source: PropTypes.string,
  action: PropTypes.func
}
