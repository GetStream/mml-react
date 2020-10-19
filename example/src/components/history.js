import { useState, useCallback } from 'react'
import qs from 'query-string'

function goToQuery(value) {
  const { protocol, host, pathname } = window.location
  const newurl = protocol + '//' + host + pathname + value
  window.history.pushState({ path: newurl }, '', newurl)
}

export function getQueryValue(key, query = window.location.search) {
  const values = qs.parse(query)
  return values[key]
}

export function getQueryString(key, value, query = window.location.search) {
  const values = qs.parse(query)
  return (
    `?` +
    qs.stringify({
      ...values,
      [key]: value
    })
  )
}

export function setQuery(key, value, query = window.location.search) {
  goToQuery(getQueryString(key, value, query))
}

export function useQuery(key, initialValue) {
  const [value, setValue] = useState(getQueryValue(key) || initialValue)
  const onSetValue = useCallback(
    newValue => {
      setValue(newValue)
      setQuery(key, newValue)
    },
    [key]
  )

  return [value, onSetValue]
}
