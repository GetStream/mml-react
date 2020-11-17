import React, { FC } from 'react';

export type ProgressProps = {
  size?: number;
  strokeWidth?: number;
  color?: string;
};

export const Progress: FC<ProgressProps> = ({ size = 36, strokeWidth = 2, color = '#ccc' }) => {
  const fullSize = size + strokeWidth;

  return (
    <svg
      width={fullSize}
      height={fullSize}
      viewBox={`0 0 ${fullSize} ${fullSize}`}
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width={strokeWidth}>
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

export default React.memo(Progress);
