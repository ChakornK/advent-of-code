import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  let [r, l] = inp.split("\n\n").map((a) => a.split("\n"));
  r = r.map((a) => a.split("-").map((n) => +n));
  l = l.map((a) => +a);

  let count = 0;

  for (const ingredient of l) {
    let spoiled = true;
    for (const range of r) {
      if (range[0] <= ingredient && range[1] >= ingredient) {
        spoiled = false;
        break;
      }
    }
    if (!spoiled) {
      count++;
    }
  }

  if (exp != null && count !== exp) {
    throw new Error(`${count} !== ${exp}`);
  } else {
    return count;
  }
};

console.log("Test 1:", main(input0, 3));
console.log("Test 2:", main(input1));
