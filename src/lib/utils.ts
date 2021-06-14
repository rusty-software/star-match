// Given an array of numbers, returns the sum of the contents of the array
export const sum = (arr: number[]): number => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

// Given a min and max, returns an array of numbers between min and max (inclusive)
export const arrayFromRange = (min: number, max: number): number[] => {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
};

// Given a min and max, returns a random number (inclusive) from the range
export const randIntInclusive = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Given an array of numbers and a max, returns a random sum from the set of available sums
export const randomSumIn = (arr: number[], max: number): number => {
  const sets: number[][] = [[]];
  const sums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const candidateSet = sets[j].concat(arr[i]);
      const candidateSum = sum(candidateSet);
      if (candidateSum <= max) {
        sets.push(candidateSet);
        sums.push(candidateSum);
      }
    }
  }
  return sums[randIntInclusive(0, sums.length - 1)];
};
