import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const maxDigit = (arr) => Math.max(...arr.map((n) => parseInt(n)));

const main = (inp, exp = null) => {
  let total = 0;
  for (const pack of inp.split("\n")) {
    let digits = pack.split("");
    let n = "";
    while (n.length < 2) {
      const high = "" + maxDigit(digits.slice(0, digits.length - (1 - n.length)));
      n += high;
      digits = digits.slice(digits.indexOf(high) + 1);
    }
    total += +n;
  }

  if (exp != null && total !== exp) {
    throw new Error(`${total} !== ${exp}`);
  } else {
    return total;
  }
};

console.log("Test 1:", main(input0, 357));
console.log("Test 2:", main(input1));
