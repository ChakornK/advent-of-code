import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  let total = 0;
  const maxDigit = (arr) => Math.max(...arr.map((n) => parseInt(n)));
  for (const pack of inp.split("\n")) {
    let digits = pack.split("");
    let n = "";
    while (n.length < 12) {
      const high = "" + maxDigit(digits.slice(0, digits.length - (11 - n.length)));
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

console.log("Test 1:", main(input0, 3121910778619));
console.log("Test 2:", main(input1));
