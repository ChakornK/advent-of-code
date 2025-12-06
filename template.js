import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  const res = 0;

  if (exp != null && res !== exp) {
    throw new Error(`${res} !== ${exp}`);
  } else {
    return res;
  }
};

console.log("Test 1:", main(input0, 0));
console.log("Test 2:", main(input1));
