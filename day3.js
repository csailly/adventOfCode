buildMatrix = (maxValue, valueFunc) => {
  let matrix = new Map();
  let x = 0,
    y = 0;

  let i = 1;

  let coord = { x, y };
  let value = 1;
  matrix.set(JSON.stringify(coord), value);
  let prevCoord = coord;
  let prevValue = value;
  do {
    if (i % 2 !== 0) {
      for (let j = 0; j < i; j++) {
        //droite
        let coord = { x: prevCoord.x + 1, y: prevCoord.y };
        let value = valueFunc(prevValue, coord, matrix);
        matrix.set(JSON.stringify(coord), value);
        prevCoord = { ...coord };
        prevValue = value;
        if (value >= maxValue) return { matrix, value, coord };
      }
      for (let j = 0; j < i; j++) {
        //haut
        let coord = { x: prevCoord.x, y: prevCoord.y + 1 };
        let value = valueFunc(prevValue, coord, matrix);
        matrix.set(JSON.stringify(coord), value);
        prevCoord = { ...coord };
        prevValue = value;
        if (value >= maxValue) return { matrix, value, coord };
      }
    } else {
      for (let j = 0; j < i; j++) {
        //gauche
        let coord = { x: prevCoord.x - 1, y: prevCoord.y };
        let value = valueFunc(prevValue, coord, matrix);
        matrix.set(JSON.stringify(coord), value);
        prevCoord = { ...coord };
        prevValue = value;
        if (value >= maxValue) return { matrix, value, coord };
      }
      for (let j = 0; j < i; j++) {
        //bas
        let coord = { x: prevCoord.x, y: prevCoord.y - 1 };
        let value = valueFunc(prevValue, coord, matrix);
        matrix.set(JSON.stringify(coord), value);
        prevCoord = { ...coord };
        prevValue = value;
        if (value >= maxValue) return { matrix, value, coord };
      }
    }
    i++;
  } while (prevValue <= maxValue);
  return { matrix, value, coord };
};

getValue1 = (previousValue, coord, matrix) => {
  return previousValue + 1;
};

getValue2 = (previousValue, coord, matrix) => {
  let value =
    (matrix.get(JSON.stringify({ x: coord.x + 1, y: coord.y })) || 0) +
    (matrix.get(JSON.stringify({ x: coord.x + 1, y: coord.y + 1 })) || 0) +
    (matrix.get(JSON.stringify({ x: coord.x + 1, y: coord.y - 1 })) || 0) +
    (matrix.get(JSON.stringify({ x: coord.x, y: coord.y + 1 })) || 0) +
    (matrix.get(JSON.stringify({ x: coord.x, y: coord.y - 1 })) || 0) +
    (matrix.get(JSON.stringify({ x: coord.x - 1, y: coord.y })) || 0) +
    (matrix.get(JSON.stringify({ x: coord.x - 1, y: coord.y + 1 })) || 0) +
    (matrix.get(JSON.stringify({ x: coord.x - 1, y: coord.y - 1 })) || 0);
  return value;
};

let res1 = buildMatrix(361527, getValue1);
let res2 = buildMatrix(361527, getValue2);

console.log(res1.value, res1.coord);
console.log(res2.value, res2.coord);
