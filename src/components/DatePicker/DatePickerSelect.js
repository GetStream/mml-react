import React, { useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Virtuoso } from 'react-virtuoso'
import ScrollContainer from './ScrollContainer'

/**
 * DatePicker select
 *
 * @param {typeof DatePickerSelect.propTypes} props
 */
export default function DatePickerSelect(props) {
  const { filter, onChange, value, getItem, Item } = props
  const [total, setTotal] = useState(0)
  const [selected, setSelected] = useState(value)
  const items = useRef([])
  const perPage = 40
  let lastPageIdx = 0

  /**
   * Handle item click
   *
   * @param {ReturnType<getItem>} item
   */
  function handleClick(item) {
    setSelected(item.value)
    if (onChange) onChange(item.value)
  }

  const loadMore = useCallback(() => {
    for (let idx = total; idx < total + total + perPage; idx++) {
      const newItem = getItem({ ...props, idx: idx + perPage * lastPageIdx })

      if (!filter || (filter && filter(newItem.value))) {
        items.current = [...items.current, newItem]
      }
    }
    lastPageIdx++
    setTotal(items.current.length)
  }, [])

  useEffect(() => {
    loadMore()
  }, [])

  return (
    <Virtuoso
      ScrollContainer={ScrollContainer}
      overscan={200}
      totalCount={total}
      item={index => Item(items.current[index], selected, handleClick)}
      endReached={() => loadMore()}
      footer={() => {
        return <div style={{ padding: '2rem' }}></div>
      }}
    />
  )
}

DatePickerSelect.propTypes = {
  Item: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired,
  filter: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  interval: PropTypes.number
}
