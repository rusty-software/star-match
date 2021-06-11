const utils = {
  // Given an array of numbers, returns the sum of the contents of the array
  sum: (arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0),

  // Given a min and max, returns an array of numbers between min and max (inclusive)
  range: (min: number, max: number) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // Given a min and max, returns a random number (inclusive) from the range
  random: (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min,

  // Given an array of numbers and a max, returns a random sum from the set of available sums
  randomSumIn: (arr: number[][], max: number) => {
    const sets: number[][] = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

export const StarMatch = () => {
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars.
      </div>
      <div className="body">
        <div className="left">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
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
