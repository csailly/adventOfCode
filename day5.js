const input = require("./input.day5").input;

const test_input1 = [0, 3, 0, 1, -3];

code1 = input => {
  let inputCpy = [...input];
  let step = 0;
  let index = 0;

  while (index < inputCpy.length) {
    let offset = inputCpy[index];
    inputCpy[index] = offset + 1;
    index += offset;
    step++;
  }
  return step;
};

console.log(code1(input));

code2 = input => {
  let inputCpy = [...input];
  let step = 0;
  let index = 0;

  while (index < inputCpy.length) {
    let offset = inputCpy[index];
    inputCpy[index] = offset + (offset >= 3 ? -1 : 1);
    index += offset;
    step++;
  }
  return step;
};

console.log(code2(input));
