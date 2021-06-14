import { GameStatus } from "../GameStatus";

export interface PlayAgainProps {
  clickHandler: () => void;
  gameStatus: GameStatus;
}

export const PlayAgain = (props: PlayAgainProps) => {
  const { clickHandler, gameStatus } = props;

  return (
    <div>
      <div
        className="message"
        style={{ color: gameStatus === GameStatus.Won ? "green" : "red" }}
      >
        {gameStatus === GameStatus.Won ? "Congratulations!" : "Nice try!"}
      </div>
      <button className="game-done" onClick={clickHandler}>
        Play Again!
      </button>
    </div>
  );
};
