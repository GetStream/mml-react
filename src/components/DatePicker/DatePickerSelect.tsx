import React, { useState, useRef, useCallback, useEffect, FC } from 'react';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';
import { Dayjs } from 'dayjs';
import { DatePickerProps } from './DatePicker';

export type DatePickerSelectProps = DatePickerSelectReadyProps & {
  itemClassName?: string;
  // Item: (item: DatePickerItemData, selectedIdx: null | number, handleClick: () => void) => ReactNode;
  getItemData: (props: DatePickerSelectItemProps) => DatePickerItemData;
};

/**
 * Basic shape of DatePickerSelect extended by wrapper components as DatePickerDate and DatePickerTime
 */
export type DatePickerSelectReadyProps = Pick<DatePickerProps, 'icalFilter' | 'allowPast'> & {
  value: Dayjs;
  format: string;
  interval: number;
  onChange: (value: Dayjs) => void;
};

/**
 * Inside Virtuoso select items need an idx to indicate their position
 */
export type DatePickerSelectItemProps = {
  interval: number;
  format: string;
  idx: number;
  value: Dayjs;
};

/**
 * The data needed by each datepicker select item
 */
export type DatePickerItemData = {
  idx: number;
  value: Dayjs;
  isSelected: (currentValue: Dayjs) => boolean;
  displayValue: string;
};

const ITEMS_PER_PAGE = 40;
const VERTICAL_COMPENSATION = 3;
const INITIAL_INDEX = ITEMS_PER_PAGE;

/**
 * DatePicker select
 */
export const DatePickerSelect: FC<DatePickerSelectProps> = (props) => {
  const { onChange, icalFilter, getItemData, itemClassName, interval, format, value } = props;

  // Generate date items
  const generateItems = useCallback(
    (quantity: number, firstIndex: number) => {
      return Array(quantity)
        .fill(true)
        .map((_, idx) => getItemData({ interval, format, value, idx: firstIndex + idx }))
        .filter((newItem) => !icalFilter || (icalFilter && icalFilter(newItem.value)));
    },
    [interval, format, value, icalFilter, getItemData],
  );

  const [items, setItems] = useState<DatePickerItemData[]>(generateItems(ITEMS_PER_PAGE * 2, -ITEMS_PER_PAGE));
  const [firstItemIndex, setFirstItemIndex] = useState(INITIAL_INDEX);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const virtuoso = useRef<VirtuosoHandle>(null);

  // handle item click
  const handleClick = useCallback(
    (item: DatePickerItemData) => {
      onChange(item.value);

      let nextFirstItemIdx = firstItemIndex - INITIAL_INDEX - ITEMS_PER_PAGE;
      const missingTopItems = nextFirstItemIdx - item.idx + VERTICAL_COMPENSATION;

      // prepend date items, when the selected date's index is too low we prepend
      // some date options so that it will remain vertically centered in the middle
      if (missingTopItems >= 0) {
        nextFirstItemIdx -= missingTopItems;
        setFirstItemIndex(() => firstItemIndex - missingTopItems);
        setItems((items) => [...generateItems(missingTopItems, nextFirstItemIdx), ...items]);
      }
      setSelectedIdx(item.idx);
      console.log('handleClick: nextFirstItemIdx', nextFirstItemIdx);
    },
    [setItems, generateItems, firstItemIndex, onChange],
  );

  // Load/generate date items in a batch and append it
  const appendItems = useCallback(
    (lastItemIndex) => {
      setItems((items) => {
        console.log('useCallback: appendItems', lastItemIndex, items);
        return [...items, ...generateItems(ITEMS_PER_PAGE, lastItemIndex)];
      });
    },
    [setItems, generateItems],
  );

  // Load/generate date items in a batch and prepend it, @see https://git.io/JIUuo
  const prependItems = useCallback(() => {
    const nextFirstItemIdx = firstItemIndex - INITIAL_INDEX - ITEMS_PER_PAGE;
    setFirstItemIndex(() => firstItemIndex - ITEMS_PER_PAGE);
    setItems((items) => {
      console.log('useCallback: prependItems nextFirstItemIdx', nextFirstItemIdx, items);
      return [...generateItems(ITEMS_PER_PAGE, nextFirstItemIdx), ...items];
    });
    // console.log("useCallback: prependItems nextFirstItemIdx", nextFirstItemIdx, firstItemIndex - ITEMS_PER_PAGE);
    return false;
  }, [setItems, generateItems, firstItemIndex]);

  // on mount we need to check if there is a selected value and save its idx in state
  useEffect(() => {
    let initialSelectedIdx = null;
    if (value) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].isSelected(value)) {
          initialSelectedIdx = items[i].idx;
          break;
        }
      }
    }
    setSelectedIdx(initialSelectedIdx);
    console.log('effect: onmount initialSelectedIdx', initialSelectedIdx);
  }, []); // eslint-disable-line

  console.log('render: items', items);
  return (
    <Virtuoso
      ref={virtuoso}
      overscan={200}
      firstItemIndex={firstItemIndex}
      initialTopMostItemIndex={INITIAL_INDEX - VERTICAL_COMPENSATION}
      data={items}
      itemContent={(_, item) => (
        <div
          className={
            itemClassName + ` mml-datepicker__item ${item.idx === selectedIdx ? 'mml-datepicker__item--selected' : ''}`
          }
          onClick={() => handleClick(item)}
        >
          {item.displayValue}
        </div>
      )}
      endReached={appendItems}
      startReached={prependItems}
    />
  );
};
