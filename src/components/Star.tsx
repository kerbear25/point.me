import React from 'react';

type StarProps = {
  hideCursorOnHover?: boolean;
  hovered?: boolean;
  marked: boolean;
  onClick?: (starId: number) => void;
  onHover?: (starId: number) => void;
  starId: number;
};

const Star = ({
  hideCursorOnHover,
  hovered,
  marked,
  onClick,
  onHover,
  starId,
}: StarProps) => {
  const goldenYellow = '#f5c518';
  return (
    <span
      className={`text-3xl ${
        hideCursorOnHover ? 'cursor-default' : 'cursor-pointer'
      }`}
      data-star-id={starId}
      onClick={() => onClick && onClick(starId)}
      onMouseEnter={() => onHover && onHover(starId)}
      role="button"
      style={{ color: hovered || marked ? goldenYellow : 'gray' }} // Change the color based on hovered or marked state
    >
      {hovered || marked ? '\u2605' : '\u2606'}
    </span>
  );
};

Star.displayName = 'Star';
export default Star;
