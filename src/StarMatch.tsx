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

export const StarMatch = () => {
  const starCount = 5;

  const foo = arrayFromRange(1, starCount);

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars.
      </div>
      <div className="body">
        <div className="left">
          {foo.map((currentStar) => (
            <Star />
          ))}
        </div>
        <div className="right">
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};
