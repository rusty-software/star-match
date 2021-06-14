import { DigitStatus } from "./DigitStatus";

interface DigitProps {
  digit: number;
  status: DigitStatus;
  clickHandler: (digit: number, status: DigitStatus) => void;
}

const colors = new Map([
  [DigitStatus.Available, "lightgray"],
  [DigitStatus.Candidate, "deepskyblue"],
  [DigitStatus.Used, "lightgreen"],
  [DigitStatus.Wrong, "lightcoral"],
]);

export const Digit = (props: DigitProps) => {
  const { digit, status, clickHandler } = props;
  return (
    <button
      className="number"
      style={{ backgroundColor: colors.get(status) }}
      onClick={() => clickHandler(digit, status)}
    >
      {digit}
    </button>
  );
};
