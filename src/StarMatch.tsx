import { arrayFromRange } from "./lib/utils";

const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

const Star = () => {
  return <div className="star" />;
};

interface DigitProps {
  digit: number;
}

const Digit = (props: DigitProps) => {
  const { digit } = props;
  return <button className="number">{digit}</button>;
};

export const StarMatch = () => {
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars.
      </div>
      <div className="body">
        <div className="left">
          {arrayFromRange(1, 9).map((currentStar) => (
            <Star />
          ))}
        </div>
        <div className="right">
          {arrayFromRange(1, 9).map((i) => (
            <Digit digit={i} />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};
