import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  let pos = 50;
  let counter = 0;
  for (const line of inp.split("\n")) {
    const d = line[0] === "R" ? 1 : -1;
    const n = +line.slice(1);

    // calculate min rotation distance to pass 0 from current position
    let r = d === 1 ? (100 - pos) % 100 : pos % 100;
    if (r === 0) r = 100;
    if (n >= r) {
      counter += 1 + (((n - r) / 100) >> 0);
    }
    pos = (pos + d * n) % 100;
    if (pos < 0) pos += 100;
  }

  if (exp != null && counter !== exp) {
    throw new Error(`${counter} !== ${exp}`);
  } else {
    return counter;
  }
};

console.log("Test 1:", main(input0, 6));
console.log("Test 2:", main(input1));
