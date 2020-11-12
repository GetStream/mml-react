import React from 'react';

/**
 * Custom scroll container to hide scrollbar with simple css
 */
export default function Scroller({ className, style, reportScrollTop, scrollTo, children }) {
  const elRef = React.useRef(null);

  scrollTo((scrollTop) => {
    elRef.current.scrollTo({ top: scrollTop });
  });

  return (
    <div className="mml-scroller" ref={elRef} onScroll={(e) => reportScrollTop(e.target.scrollTop)} tabIndex={0}>
      <div className="mml-scroller__inner">{children}</div>
    </div>
  );
}
