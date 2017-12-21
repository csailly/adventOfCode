const input = require("./input.day9").input;

removeCanceledChars = input => input.replace(/!./g, "");

cleanGarbages = input =>
  input.replace(/<([^>]+)>/g, (correspondance, p1) => {
    return "<" + p1.length + ">";
  });

computeScore = input => {
  let tmp = input.split("");
  let score = 0;
  let stack = [];
  for (var i = 0, len = tmp.length; i < len; i++) {
    if (tmp[i] === "{") {
      stack.push(1);
      score += stack.length;
    } else if (tmp[i] === "}") {
      stack.pop();
    }
  }
  return score;
};

garbagesSizes = input => {
  return input
    .match(/<[^>]+>/g)
    .map(elt => Number(elt.replace("<", "").replace(">", "")));
};

log = message => {
  console.log(message);
};

log("------------------------------");

let a = "{{<!!a>},{<!!bc>},{<!!d>},{<!!efg>}}";
let b = removeCanceledChars(a);
let c = cleanGarbages(b);
let e = computeScore(c);
let f = garbagesSizes(c);
log(a);
log("removeCanceledChars => " + b);
log("cleanGarbages       => " + c);
log("computeScore        => " + e);
log("garbagesSizes       => " + f);
log("------------------------------");

log(computeScore("{{{},{},{{}}}}"));

log("------------------------------");

let cleanedInput = cleanGarbages(removeCanceledChars(input));
log(cleanedInput);
log(computeScore(cleanedInput));
log(garbagesSizes(cleanedInput).reduce((acc, current) => acc + current));
