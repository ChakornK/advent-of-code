import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  let [r, l] = inp.split("\n\n").map((a) => a.split("\n"));
  r = r.map((a) => a.split("-").map((n) => +n));
  l = l.map((a) => +a);

  let union = r;
  let prevUnion = [];
  do {
    prevUnion = union;
    union = union.reduce((acc, [a, b]) => {
      const t = acc.findIndex(([c, d]) => {
        const check1 = a <= c && c <= b && b <= d;
        const check2 = c <= a && a <= d && d <= b;
        const check3 = a <= c && b >= d;
        const check4 = a >= c && b <= d;
        return check1 || check2 || check3 || check4;
      });
      if (t !== -1) {
        acc[t] = [Math.min(acc[t][0], a), Math.max(acc[t][1], b)];
      } else {
        acc.push([a, b]);
      }
      return acc;
    }, []);
  } while (prevUnion.toString() !== union.toString());
  const count = union.reduce((acc, [a, b]) => acc + b - a + 1, 0);

  if (exp != null && count !== exp) {
    throw new Error(`${count} !== ${exp}`);
  } else {
    return count;
  }
};

console.log("Test 1:", main(input0, 14));
console.log("Test 2:", main(input1));
