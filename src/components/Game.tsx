import { arrayFromRange, sum } from "../lib/utils";
import { GameStatus } from "../GameStatus";
import { DigitStatus } from "./DigitStatus";
import { PlayAgain } from "./PlayAgain";
import { StarsDisplay } from "./StarsDisplay";
import { Digit } from "./Digit";
import { useGameState } from "./hooks";

export interface GameProps {
  newGame: () => void;
}
export const Game = (props: GameProps) => {
  const { newGame } = props;

  const { stars, availableNums, candidateNums, timeRemaining, setGameState } =
    useGameState();

  const invalidCandidates = sum(candidateNums) > stars;

  const gameStatus =
    availableNums.length === 0
      ? GameStatus.Won
      : timeRemaining === 0
      ? GameStatus.Lost
      : GameStatus.Active;

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
    if (
      gameStatus !== GameStatus.Active ||
      currentStatus === DigitStatus.Used
    ) {
      return;
    }

    const newCandidateNums =
      currentStatus === DigitStatus.Available
        ? candidateNums.concat(digit)
        : candidateNums.filter((i) => i !== digit);
    setGameState(newCandidateNums);
  };

  let gameDisplay;
  switch (gameStatus) {
    case GameStatus.Won:
      gameDisplay = (
        <PlayAgain clickHandler={newGame} gameStatus={gameStatus} />
      );
      break;
    case GameStatus.Lost:
      gameDisplay = (
        <PlayAgain clickHandler={newGame} gameStatus={gameStatus} />
      );
      break;
    default:
      gameDisplay = <StarsDisplay starCount={stars} />;
  }

  return (
    <div className="game">
      <div className="help">
        Pick one or more numbers that sum to the number of stars currently
        shown.
      </div>
      <div className="body">
        <div className="left">{gameDisplay}</div>
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
      <div className="timer">Time Remaining: {timeRemaining}</div>
    </div>
  );
};
