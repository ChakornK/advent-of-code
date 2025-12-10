/**
 * !!!
 * This solution only passes on the example input, not on the full input.
 * !!!
 */

import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  const c = inp.split("\n").map((line) => line.split(",").map((n) => +n));

  const pInShape = (p) => {
    const [x, y] = p;
    let intersections = 0;
    for (let i = 0; i < c.length; i++) {
      const [l1x, l1y] = c[i];
      const [l2x, l2y] = c[(i + 1) % c.length];
      if (l1x === l2x && (l1y >= y !== l2y >= y || l1y === y || l2y === y)) {
        if (x === l1x) {
          return true;
        }
        if (x < l1x) {
          intersections++;
        }
      }
    }
    return intersections % 2 === 1;
  };

  let maxA = 0;
  for (let i = 0; i < c.length; i++) {
    for (let j = i + 1; j < c.length; j++) {
      const p1 = c[i];
      const p2 = [c[i][0], c[j][1]];
      const p3 = c[j];
      const p4 = [c[j][0], c[i][1]];
      if (pInShape(p1) && pInShape(p2) && pInShape(p3) && pInShape(p4)) {
        const a = (Math.abs(p1[0] - p3[0]) + 1) * (Math.abs(p1[1] - p3[1]) + 1);
        if (a > maxA) {
          maxA = a;
        }
      }
    }
  }

  const res = maxA;

  if (exp != null && res !== exp) {
    throw new Error(`${res} !== ${exp}`);
  } else {
    return res;
  }
};

console.log("Test 1:", main(input0, 24));
console.log("Test 2:", main(input1));
