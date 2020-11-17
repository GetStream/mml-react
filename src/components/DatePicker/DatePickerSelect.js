import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Virtuoso } from 'react-virtuoso';

/**
 * Custom scroll container to hide scrollbar with simple css
 */
function MMLScroll({ className, style, reportScrollTop, scrollTo, children }) {
  const ref = React.useRef(null);

  scrollTo((scrollTop) => ref.current && ref.current.scrollTo(scrollTop));

  return (
    <div className="mml-scroller" ref={ref} onScroll={(e) => reportScrollTop(e.currentTarget.scrollTop)} tabIndex={0}>
      <div className="mml-scroller__inner">{children}</div>
    </div>
  );
}

/**
 * DatePicker select
 *
 * @param {typeof DatePickerSelect.propTypes} props
 */
export default function DatePickerSelect(props) {
  const { filter, onChange, value, getItem, Item } = props;
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(value);
  const items = useRef([]);
  const perPage = 40;
  let lastPageIdx = 0;

  /**
   * Handle item click
   *
   * @param {ReturnType<getItem>} item
   */
  function handleClick(item) {
    setSelected(item.value);
    if (onChange) onChange(item.value);
  }

  const loadMore = useCallback(() => {
    for (let idx = total; idx < total + total + perPage; idx++) {
      const newItem = getItem({ ...props, idx: idx + perPage * lastPageIdx });

      if (!filter || (filter && filter(newItem.value))) {
        items.current = [...items.current, newItem];
      }
    }
    lastPageIdx++;
    setTotal(items.current.length);
  }, [filter, getItem, lastPageIdx, props, total]);

  useEffect(() => {
    loadMore();
  }, []); // eslint-disable-line

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
}

DatePickerSelect.propTypes = {
  Item: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired,
  filter: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  interval: PropTypes.number,
};
