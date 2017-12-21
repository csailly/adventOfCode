const input = require("./input.day6").input;

const nbBanks = input.length;
const inputTrace = input.join("-");

let maxBlocksValue = Math.max(...input);
let maxBlocksIndex = input.indexOf(maxBlocksValue);

let newInput = [...input];
let remainingBlocksToRedistribute;
let currentIdx;
let newInputTrace;
let ended = false;
let step = 0;

let banksSnapshots = new Map();
banksSnapshots.set(inputTrace, 0);

while (!ended) {
  step++;
  maxBlocksValue = Math.max(...newInput);
  maxBlocksIndex = newInput.indexOf(maxBlocksValue);
  remainingBlocksToRedistribute = maxBlocksValue;
  currentIdx = maxBlocksIndex;
  newInput[currentIdx++] = 0;
  while (remainingBlocksToRedistribute--) {
    if (currentIdx >= nbBanks) {
      currentIdx = 0;
    }
    newInput[currentIdx] = newInput[currentIdx] + 1;
    currentIdx++;
  }
  newInputTrace = newInput.join("-");
  ended = banksSnapshots.has(newInputTrace);
  if (!ended) {
    banksSnapshots.set(newInputTrace, step);
  }
}

console.log(
  step,
  banksSnapshots.get(newInputTrace),
  step - banksSnapshots.get(newInputTrace)
);
