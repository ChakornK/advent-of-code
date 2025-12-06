import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  let pos = 50;
  let counter = 0;
  for (const line of inp.split("\n")) {
    const d = line.slice(0, 1);
    const n = +line.slice(1) * (d === "R" ? 1 : -1);
    pos = (pos + n) % 100;
    if (pos < 0) {
      pos += 100;
    }
    if (pos === 0) counter++;
  }
  if (exp != null && counter !== exp) {
    throw new Error(`${counter} !== ${exp}`);
  } else {
    return counter;
  }
};

console.log("Test 1:", main(input0, 3));
console.log("Test 2:", main(input1));
