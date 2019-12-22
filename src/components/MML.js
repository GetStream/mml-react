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

  function computeTreeState(source, converterConfig) {
    const tree = Parse(source)
    if (converterConfig) {
      tree.converterConfig = converterConfig
    }
    // computing the initial state is expensive, so we do it here
    let initialState
    try {
      // get initial state for all input elements in MML
      const treeState = tree.initialState()
      console.log('treeState', treeState)
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
    console.log('writing state', { ...state, ...initialState })
    setState({ ...state, ...initialState })
    return tree
  }
  // compute the tree, changes when the source changes
  const tree = useMemo(() => computeTreeState(source, converterConfig), [
    source,
    converterConfig
  ])
  // get the initial state from the tree

  async function handleSubmit(event) {
    event.preventDefault()
    const data = []
    const pairs = Object.keys(state).map((key, index) => {
      return { name: key, value: state[key] }
    })
    data.push(...pairs)

    console.log('submitting state', state)

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

  function handleAction(attr, event) {
    if (typeof event === Date) {
      // this is the datepicker...
      const data = {}
      data[attr.name] = selectedDate
      setState(...state, data)
    } else if (attr.url && attr.url.length) {
      window.location.href = sanitizeUrl(attr.url)
    } else {
      const data = {}
      data[attr.name] = attr.value || event.target.value
      setState(...state, data)
    }
  }

  if (state.mml_error) {
    return <div className="mml-container">{state.mml_error}</div>
  }

  if (tree.hasData()) {
    return (
      <MMLContext.Provider handleAction={handleAction}>
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
