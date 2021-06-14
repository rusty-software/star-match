import { arrayFromRange, randIntInclusive, sum } from "./lib/utils";
import { useState } from "react";
import { Digit } from "./components/Digit";
import { StarsDisplay } from "./components/StarsDisplay";
import { DigitStatus } from "./components/DigitStatus";

export const StarMatch = () => {
  const [stars, setStars] = useState(randIntInclusive(1, 9));
  const [availableNums, setAvailableNums] = useState(arrayFromRange(1, 9));
  const [candidateNums, setCandidateNums] = useState([] as number[]);

  const invalidCandidates = sum(candidateNums) > stars;

  const numberStatus = (i: number): DigitStatus => {
    if (!availableNums.includes(i)) {
      return DigitStatus.Used;
    }
    if (candidateNums.includes(i)) {
      return invalidCandidates ? DigitStatus.Wrong : DigitStatus.Candidate;
    }
    return DigitStatus.Available;
  };

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
            <Digit key={i} digit={i} status={numberStatus(i)} />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};
