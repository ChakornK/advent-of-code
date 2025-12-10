import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  const c = inp.split("\n").map((line) => line.split(",").map((n) => +n));

  let maxA = 0;
  for (let i = 0; i < c.length; i++) {
    for (let j = i + 1; j < c.length; j++) {
      const a = (Math.abs(c[i][0] - c[j][0]) + 1) * (Math.abs(c[i][1] - c[j][1]) + 1);
      if (a > maxA) {
        maxA = a;
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

console.log("Test 1:", main(input0, 50));
console.log("Test 2:", main(input1));
