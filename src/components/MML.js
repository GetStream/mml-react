import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import { Parse } from '../parser'
import { Loader as LoaderComponent } from './Loader'
import { Error as ErrorComponent } from './Error'
import { Success as SuccessComponent } from './Success'
import { MMLContainer } from './MMLContainer'

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

  return (
    <MMLContainer hasData={tree.hasData()} error={state.mml_error}>
      {tree.toReact(tree)}
    </MMLContainer>
  )
}

MML.propTypes = {
  source: PropTypes.string,
  action: PropTypes.func
}
