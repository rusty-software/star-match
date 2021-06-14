import { arrayFromRange, randIntInclusive } from "./lib/utils";
import { useState } from "react";
import { Digit } from "./components/Digit";
import { StarsDisplay } from "./components/StarsDisplay";

const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
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
          <StarsDisplay starCount={stars} />
        </div>
        <div className="right">
          {arrayFromRange(1, 9).map((i) => (
            <Digit key={i} digit={i} />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};
