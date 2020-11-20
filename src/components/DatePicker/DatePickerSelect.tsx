import React, { useState, useRef, useCallback, useEffect, FC } from 'react';
import { Virtuoso, TScrollContainer, VirtuosoProps } from 'react-virtuoso';
import { DatePickerProps } from './DatePicker';

export type DatePickerSelectProps = DatePickerSelectReadyProps & {
  Item: (
    item: DatePickerItemData,
    selected: Date,
    handleClick: (item: DatePickerItemData) => void,
  ) => ReturnType<VirtuosoProps['item']>;
  getItemData: (props: DatePickerSelectItemProps) => DatePickerItemData;
};

/**
 * Basic shape of DatePickerSelect extended by wrapper components as DatePickerDate and DatePickerTime
 */
export type DatePickerSelectReadyProps = Pick<DatePickerProps, 'filter' | 'onChange' | 'allowPast'> & {
  value: Date;
  format: string;
  interval: number;
};

/**
 * Inside Virtuoso select items need an idx to indicate their position
 */
export type DatePickerSelectItemProps = DatePickerSelectReadyProps & {
  idx: number;
};

/**
 * The data needed by each datepicker select item
 */
export type DatePickerItemData = {
  idx: number;
  interval: number;
  value: Date;
  displayValue: string;
};

/**
 * Custom scroll container to hide scrollbar with simple css
 */
const MMLScroll: TScrollContainer = ({ reportScrollTop, scrollTo, children }) => {
  const ref = React.useRef(null);

  // @ts-ignore
  scrollTo((scrollTop) => ref.current && ref.current.scrollTo(scrollTop));

  return (
    <div className="mml-scroller" ref={ref} onScroll={(e) => reportScrollTop(e.currentTarget.scrollTop)} tabIndex={0}>
      <div className="mml-scroller__inner">{children}</div>
    </div>
  );
};

/**
 * DatePicker select
 */
export const DatePickerSelect: FC<DatePickerSelectProps> = (props) => {
  const { filter, onChange, value, getItemData, Item } = props;
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(value);
  const items = useRef([]);
  const perPage = 40;
  let lastPageIdx = 0;

  /**
   * Handle item click
   */
  function handleClick(item: DatePickerItemData) {
    setSelected(item.value);
    if (onChange) onChange(item.value);
  }

  const loadMore = useCallback(() => {
    for (let idx = total; idx < total + total + perPage; idx++) {
      const newItem = getItemData({ ...props, idx: idx + perPage * lastPageIdx });

      if (!filter || (filter && filter(newItem.value))) {
        // @ts-ignore
        if (items.current) items.current = [...items.current, newItem];
      }
    }
    lastPageIdx++;
    setTotal(items.current.length);
  }, [filter, getItemData, lastPageIdx, props, total]);

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <Virtuoso
      ScrollContainer={MMLScroll} // TODO: is this really needed? we can leverage css maybe
      overscan={200}
      totalCount={total}
      item={(index) => Item(items.current[index], selected, handleClick)}
      endReached={() => loadMore()}
      footer={() => {
        return <div style={{ padding: '2rem' }}></div>;
      }}
    />
  );
};
