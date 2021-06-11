import { arrayFromRange, randIntInclusive } from "./lib/utils";
import { useState } from "react";

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
  const [stars, setStars] = useState(randIntInclusive(1, 9));

  return (
    <div className="game">
      <div className="help">
        Pick one or more numbers that sum to the number of stars currently
        shown.
      </div>
      <div className="body">
        <div className="left">
          {arrayFromRange(1, stars).map((currentStar) => (
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
