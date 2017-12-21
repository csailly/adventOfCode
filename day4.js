const input = require("./input.day4").input;

const simpleReducer = (accumulator, currentValue) => accumulator + currentValue;

const result1 = input
  .map(row => {
    const array = row.split(" ");
    const set = new Set(array);
    return array.length === set.size ? 1 : 0;
  })
  .reduce(simpleReducer);

console.log(result1);

//Row => split to array
// sort each element string
//create set from array
// compare set size to array size
// same => return 1
// different => return 0

const result2 = input
  .map(row => {
    const array = row.split(" ").map(element =>
      element
        .split("")
        .sort()
        .join("")
    );
    const set = new Set(array);
    return array.length === set.size ? 1 : 0;
  })
  .reduce(simpleReducer);

console.log(result2);
