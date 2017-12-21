let input = require("./input.day7").input;

/*
input = [
  "pbga (66)",
  "xhth (57)",
  "ebii (61)",
  "havc (66)",
  "ktlj (57)",
  "fwft (72) -> ktlj, cntj, xhth",
  "qoyq (66)",
  "padx (45) -> pbga, havc, qoyq",
  "tknk (41) -> ugml, padx, fwft",
  "jptl (61)",
  "ugml (68) -> gyxo, ebii, jptl",
  "gyxo (61)",
  "cntj (57)"
];
*/
buildInput = input => {
  return input.map(element => {
    let [leftPart, rightPart] = [...element.split(" -> ")];

    let [name, weight] = leftPart.split(" ");
    let next = rightPart ? rightPart.split(", ") : [];

    let program = {
      name,
      weight: Number(weight.replace("(", "").replace(")", "")),
      next
    };

    return program;
  });
};

//Build tree nodes
let treeNodes = buildInput(input);

//Find tree root
let root = treeNodes
  .map(element => {
    element.hasParent =
      treeNodes.filter(elt => elt.next.indexOf(element.name) > -1).length > 0;
    return element;
  })
  .filter(element => !element.hasParent)[0];

console.log("root =>", root);
console.log("--------------------------------------------");
//Build nodes balanced weight
computeNodeBalancedWeight = (nodeName, level) => {
  let nodeIdx = treeNodes.findIndex(elt => elt.name === nodeName);
  let node = treeNodes[nodeIdx];

  treeNodes[nodeIdx].level = level;

  let weight = node.weight;
  if (node.next && node.next.length !== 0) {
    weight = node.next.reduce(
      (accumulator, currentValue) =>
        accumulator + computeNodeBalancedWeight(currentValue, level + 1),
      node.weight
    );
  }

  treeNodes[nodeIdx].balancedWeight = weight;

  if (node.next && node.next.length !== 0) {
    treeNodes[nodeIdx].nextBalancedWeight = node.next.map(
      elt1 => treeNodes.find(elt2 => elt2.name === elt1).balancedWeight
    );
    treeNodes[nodeIdx].wellBalanced = treeNodes[
      nodeIdx
    ].nextBalancedWeight.every(
      elt => elt === treeNodes[nodeIdx].nextBalancedWeight[0]
    );
  } else {
    treeNodes[nodeIdx].wellBalanced = true;
  }

  return weight;
};

computeNodeBalancedWeight(root.name, 0);

//
console.log(treeNodes);
console.log("--------------------------------------------");
console.log(treeNodes.filter(elt => !elt.wellBalanced));
console.log("--------------------------------------------");
console.log(treeNodes.find(elt => elt.name === "fabacam"));
