interface DigitProps {
  digit: number;
}

export const Digit = (props: DigitProps) => {
  const { digit } = props;
  return (
    <button
      className="number"
      onClick={() => {
        console.log("clicked:", digit);
      }}
    >
      {digit}
    </button>
  );
};
