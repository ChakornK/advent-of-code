import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  const w = inp.split("\n")[0].length;
  const a = inp.split("\n").map((l) => l.split(""));

  let total = 0;
  for (let y = 0; y < a.length; y++) {
    for (let x = 0; x < w; x++) {
      const check = (xn, yn) => {
        if (xn < 0 || xn >= w || yn < 0 || yn >= a.length) return false;
        return a[yn][xn] === "@";
      };
      if (!check(x, y)) continue;
      const count = [
        check(x - 1, y - 1),
        check(x, y - 1),
        check(x + 1, y - 1),
        check(x - 1, y),
        check(x + 1, y),
        check(x - 1, y + 1),
        check(x, y + 1),
        check(x + 1, y + 1),
      ].reduce((p, c) => (c ? p + 1 : p), 0);
      if (count < 4) total++;
    }
  }

  if (exp != null && total !== exp) {
    throw new Error(`${total} !== ${exp}`);
  } else {
    return total;
  }
};

console.log("Test 1:", main(input0, 13));
console.log("Test 2:", main(input1));
