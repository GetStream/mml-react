import React, { useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import formatDate from 'date-fns/format'
import { isSameDay, isWithinInterval, addDays, addMinutes } from 'date-fns'
import { Virtuoso } from 'react-virtuoso'

/**
 * Get item data
 *
 * @param {typeof DatePickerScroller.propTypes & { idx: number }} props
 */
function getItem(props) {
  const { idx, type, format, value, dateInterval, timeInterval } = props
  const date = transformIdxToDate(props)
  let selected = value === date

  if (dateInterval === 1) {
    selected = isSameDay(date, value)
  } else if (dateInterval > 1) {
    selected = isSameDay(date, addDays(value, dateInterval))
  }

  if (type === 'time') {
    selected = isWithinInterval(date, {
      start: date,
      end: addMinutes(date, timeInterval)
    })
  }

  return {
    idx,
    type,
    selected,
    date,
    dateString: formatDate(date, format)
  }
}

/**
 * Transform given idx in date
 * @param {typeof DatePickerScroller.propTypes & { idx: number }} props
 */
function transformIdxToDate(props) {
  const { idx, type, value, dateInterval, timeInterval } = props
  let newDate = addDays(value, idx * dateInterval)

  if (type === 'time') {
    newDate = addMinutes(newDate, idx * timeInterval)
  }
  return newDate
}

/**
 * Generate item component
 *
 * @param {ReturnType<getItem>} item
 * @param {(item: ReturnType<getItem>) => any} handleClick
 */
function GenerateItem(item, handleClick) {
  const { idx, type, selected, dateString } = item

  let className = `mml-datepicker__item mml-datepicker__item--${type}`

  if (selected) {
    className += ' mml-datepicker__item--selected'
  }

  return (
    <div className={className} index={idx} onClick={() => handleClick(item)}>
      {dateString}
    </div>
  )
}

/**
 * Custom scroll container to hide scrollbar with simple css
 */
function ScrollContainer({
  className,
  style,
  reportScrollTop,
  scrollTo,
  children
}) {
  const elRef = useRef(null)

  scrollTo(scrollTop => {
    elRef.current.scrollTo({ top: scrollTop })
  })

  return (
    <div
      className="mml-scroller"
      ref={elRef}
      onScroll={e => reportScrollTop(e.target.scrollTop)}
      tabIndex={0}
    >
      <div className="mml-scrollable">{children}</div>
    </div>
  )
}

/**
 * DatePicker scroller
 *
 * @param {typeof DatePickerScroller.propTypes} props
 */
export default function DatePickerScroller(props) {
  const { filter, onChange } = props
  const [total, setTotal] = useState(0)
  const items = useRef([])
  const loading = useRef(false)
  const perPage = 40
  let lastPageIdx = 0

  /**
   *
   * @param {ReturnType<getItem>} item
   */
  function handleClick(item) {
    if (onChange) onChange(item.date)
  }

  const loadMore = useCallback(() => {
    if (loading.current) {
      return
    }
    loading.current = true

    for (let idx = total; idx < total + total + perPage; idx++) {
      const newItem = getItem({ ...props, idx: idx + perPage * lastPageIdx })

      if (!filter || (filter && filter(newItem.date))) {
        items.current = [...items.current, newItem]
      }
    }
    lastPageIdx++

    loading.current = false

    setTotal(items.current.length)
  }, [])

  useEffect(() => {
    loadMore()
  }, [])

  return (
    <Virtuoso
      ScrollContainer={ScrollContainer}
      overscan={500}
      totalCount={total}
      item={index => GenerateItem(items.current[index], handleClick)}
      endReached={() => loadMore()}
      footer={() => {
        return <div style={{ padding: '2rem', textAlign: 'center' }}></div>
      }}
    />
  )
}

DatePickerScroller.propTypes = {
  /** @type {"date" | "time"} */
  type: PropTypes.oneOf(['date', 'time']),
  filter: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  dateInterval: PropTypes.number,
  timeInterval: PropTypes.number
}
