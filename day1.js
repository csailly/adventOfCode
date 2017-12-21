let input = require("./input.day5").input;

let decode_1 = input => {
  let newInput = (input + input.charAt(0)).split("");

  let reducer = (accumulator, currentValue, index, array) => {
    if (index === array.length - 1) return accumulator;
    if (array[index + 1] === currentValue)
      return accumulator + parseInt(currentValue);
    return accumulator;
  };

  let result = newInput.reduce(reducer, 0);
  return result;
};

let decode_2 = (input, aheadNbr) => {
  let newInput = (input + input.substring(0, aheadNbr)).split("");

  let reducer = (accumulator, currentValue, index, array) => {
    if (index === array.length - aheadNbr) return accumulator;
    if (array[index + aheadNbr] === currentValue)
      return accumulator + parseInt(currentValue);
    return accumulator;
  };

  let result = newInput.reduce(reducer, 0);
  return result;
};

let test1_1 = "1122";
let test1_2 = "1111";
let test1_3 = "1234";
let test1_4 = "91212129";

let test2_1 = "1212";
let test2_2 = "1221";
let test2_3 = "123425";
let test2_4 = "123123";
let test2_5 = "12131415";

console.log(test1_1 + " => " + decode_2(test1_1, 1) + " expected 3");
console.log(test1_2 + " => " + decode_2(test1_2, 1) + " expected 4");
console.log(test1_3 + " => " + decode_2(test1_3, 1) + " expected 0");
console.log(test1_4 + " => " + decode_2(test1_4, 1) + " expected 9");
console.log(input + " => " + decode_2(input, 1));

console.log(
  test2_1 + " => " + decode_2(test2_1, test2_1.length / 2) + " expected 6"
);
console.log(
  test2_2 + " => " + decode_2(test2_2, test2_2.length / 2) + " expected 0"
);
console.log(
  test2_3 + " => " + decode_2(test2_3, test2_3.length / 2) + " expected 4"
);
console.log(
  test2_4 + " => " + decode_2(test2_4, test2_4.length / 2) + " expected 12"
);
console.log(
  test2_5 + " => " + decode_2(test2_5, test2_5.length / 2) + " expected 4"
);
console.log(input + " => " + decode_2(input, input.length / 2));
