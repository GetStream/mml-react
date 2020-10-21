import React, { useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import formatDate from 'date-fns/format'
import { isSameDay, addDays } from 'date-fns'
import { Virtuoso } from 'react-virtuoso'
import ScrollContainer from './ScrollContainer'
import DatePickerSelect from './DatePickerSelect'

/**
 * Get item data
 *
 * @param {typeof DatePickerDate.propTypes & { idx: number }} props
 */
function getItem(props) {
  const { idx, format, interval } = props
  const value = transformIdxToValue(props)

  return {
    idx,
    interval,
    value,
    displayValue: formatDate(value, format)
  }
}

/**
 * Transform given idx in date
 * @param {typeof DatePickerDate.propTypes & { idx: number }} props
 */
function transformIdxToValue(props) {
  const { idx, value, interval } = props
  let newValue = addDays(value, idx * interval)
  return newValue
}

/**
 * Generate item component
 *
 * @param {ReturnType<getItem>} item
 * @param {Date} selected
 * @param {(item: ReturnType<getItem>) => any} handleClick
 */
function DatePickerDateItem(item, selected, handleClick) {
  const { idx, value, displayValue, interval } = item
  let isSelected

  if (interval === 1) {
    isSelected = isSameDay(selected, value)
  } else if (interval > 1) {
    isSelected = isSameDay(selected, addDays(value, interval))
  }

  let className = `mml-datepicker__item mml-datepicker__item--day`

  if (isSelected) {
    className += ' mml-datepicker__item--selected'
  }

  return (
    <div
      className={className}
      index={idx}
      // title={formatDate(value, 'dd/MM/yyyy')}
      onClick={() => handleClick(item)}
    >
      {displayValue}
    </div>
  )
}

/**
 * DatePicker date
 *
 * @param {typeof DatePickerDate.propTypes} props
 */
export default function DatePickerDate(props) {
  return (
    <DatePickerSelect {...props} Item={DatePickerDateItem} getItem={getItem} />
  )
}

DatePickerDate.propTypes = {
  filter: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  interval: PropTypes.number
}
