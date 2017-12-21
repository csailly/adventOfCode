const input = require("./input.day2").input;

const min = (a, b) => {
  return Math.min(a, b);
};

const max = (a, b) => {
  return Math.max(a, b);
};

const simpleReducer = (accumulator, currentValue) => accumulator + currentValue;

decodeRow_1 = row => {
  return row.reduce(max) - row.reduce(min);
};

decodeMatrix_1 = matrix => {
  const result = matrix.map(row => decodeRow_1(row)).reduce(simpleReducer);
  return result;
};

decodeRow_2 = row => {
  let result = 0;
  row
    .sort((a, b) => {
      return a - b;
    })
    .reverse()
    .forEach((value1, index, array) => {
      array.slice(index + 1).forEach(value2 => {
        if (value1 % value2 === 0) {
          result = value1 / value2;
          return;
        }
      });
    });
  return result;
};

decodeMatrix_2 = matrix => {
  const result = matrix.map(row => decodeRow_2(row)).reduce(simpleReducer);

  return result;
};

const test1_input1 = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];
const test2_input1 = [[5, 9, 2, 8], [9, 4, 7, 3], [3, 8, 6, 5]];

console.log("Expected 18, result => ", decodeMatrix_1(test1_input1));
console.log(decodeMatrix_1(input));

console.log("Expected 9, result => ", decodeMatrix_2(test2_input1));
console.log(decodeMatrix_2(input));
