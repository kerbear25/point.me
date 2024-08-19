type StarProps = {
  marked: boolean;
  starId: number;
  hideCursorOnHover?: boolean; // Optional prop to hide cursor on hover
};

const Star = ({ marked, starId, hideCursorOnHover = false }: StarProps) => {
  return (
    <span
      data-star-id={starId}
      className={`text-3xl ${
        hideCursorOnHover ? 'cursor-default' : 'cursor-pointer'
      }`}
      role="button"
    >
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

Star.displayName = 'Star';
export default Star;
