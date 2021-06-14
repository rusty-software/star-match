import { DigitStatus } from "./DigitStatus";

interface DigitProps {
  digit: number;
  status: DigitStatus;
}

const colors = new Map([
  [DigitStatus.Available, "lightgray"],
  [DigitStatus.Candidate, "deepskyblue"],
  [DigitStatus.Used, "lightgreen"],
  [DigitStatus.Wrong, "lightcoral"],
]);

export const Digit = (props: DigitProps) => {
  const { digit, status } = props;
  return (
    <button
      className="number"
      style={{ backgroundColor: colors.get(status) }}
      onClick={() => {
        console.log("clicked:", digit);
      }}
    >
      {digit}
    </button>
  );
};
