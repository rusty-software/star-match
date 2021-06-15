import { useEffect, useState } from "react";
import {
  arrayFromRange,
  randIntInclusive,
  randomSumIn,
  sum,
} from "../lib/utils";

export interface GameState {
  stars: number;
  availableNums: number[];
  candidateNums: number[];
  timeRemaining: number;
  setGameState: (newCandidateNums: number[]) => void;
}

export const useGameState = (): GameState => {
  const [stars, setStars] = useState(randIntInclusive(1, 9));
  const [availableNums, setAvailableNums] = useState(arrayFromRange(1, 9));
  const [candidateNums, setCandidateNums] = useState([] as number[]);
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining > 0 && availableNums.length > 0) {
      const timeoutId = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  });

  const setGameState = (newCandidateNums: number[]) => {
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

  return { stars, availableNums, candidateNums, timeRemaining, setGameState };
};
