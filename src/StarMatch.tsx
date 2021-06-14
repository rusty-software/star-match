import {
  arrayFromRange,
  randIntInclusive,
  randomSumIn,
  sum,
} from "./lib/utils";
import { useState } from "react";
import { Digit } from "./components/Digit";
import { StarsDisplay } from "./components/StarsDisplay";
import { DigitStatus } from "./components/DigitStatus";
import { PlayAgain } from "./components/PlayAgain";

export const StarMatch = () => {
  const [stars, setStars] = useState(randIntInclusive(1, 9));
  const [availableNums, setAvailableNums] = useState(arrayFromRange(1, 9));
  const [candidateNums, setCandidateNums] = useState([] as number[]);

  const invalidCandidates = sum(candidateNums) > stars;
  const gameWon = availableNums.length === 0;

  const resetGame = () => {
    setStars(randIntInclusive(1, 9));
    setAvailableNums(arrayFromRange(1, 9));
    setCandidateNums([] as number[]);
  };

  const numberStatus = (i: number): DigitStatus => {
    if (!availableNums.includes(i)) {
      return DigitStatus.Used;
    }
    if (candidateNums.includes(i)) {
      return invalidCandidates ? DigitStatus.Wrong : DigitStatus.Candidate;
    }
    return DigitStatus.Available;
  };

  const handleDigitClick = (digit: number, currentStatus: DigitStatus) => {
    if (currentStatus === DigitStatus.Used) {
      return;
    }

    const newCandidateNums =
      currentStatus === DigitStatus.Available
        ? candidateNums.concat(digit)
        : candidateNums.filter((i) => i !== digit);
    if (sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (i) => !newCandidateNums.includes(i)
      );
      setStars(randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([] as number[]);
    }
  };

  return (
    <div className="game">
      <div className="help">
        Pick one or more numbers that sum to the number of stars currently
        shown.
      </div>
      <div className="body">
        <div className="left">
          {gameWon ? (
            <PlayAgain clickHandler={resetGame} />
          ) : (
            <StarsDisplay starCount={stars} />
          )}
        </div>
        <div className="right">
          {arrayFromRange(1, 9).map((i) => (
            <Digit
              key={i}
              digit={i}
              status={numberStatus(i)}
              clickHandler={handleDigitClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};
