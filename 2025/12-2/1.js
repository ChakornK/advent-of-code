import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  const ranges = inp.split(",").map((r) => r.split("-"));

  const reg = /^(\d+)\1$/;

  let sum = 0;
  for (const range of ranges) {
    for (let i = +range[0]; i < +range[1]; i++) {
      const s = "" + i;
      if (s.length % 2 !== 0) continue;
      if (reg.test(s)) {
        sum += i;
      }
    }
  }

  if (exp != null && sum !== exp) {
    throw new Error(`${sum} !== ${exp}`);
  } else {
    return sum;
  }
};

console.log("Test 1:", main(input0, 1227775532));
console.log("Test 2:", main(input1));
