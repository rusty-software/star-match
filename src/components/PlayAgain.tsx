export interface PlayAgainProps {
  clickHandler: () => void;
}

export const PlayAgain = (props: PlayAgainProps) => {
  const { clickHandler } = props;

  return (
    <div>
      <button className="game-done" onClick={clickHandler}>
        Play Again!
      </button>
    </div>
  );
};
