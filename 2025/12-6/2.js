import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  // transpose input
  const lines = inp.split("\n").map((ln) => ln.split(""));
  const transponsed = [];
  while (lines.length > 0) {
    const line = lines.shift();
    for (const i in line) {
      transponsed[i] = [...(transponsed[i] || []), line[i]];
    }
  }
  const ops = transponsed.reduce(
    (a, b) => {
      if (b.every((x) => x === " ")) {
        a.push([]);
        return a;
      }

      const op = b.pop();
      const n = +b.join("").trim();
      switch (op) {
        case "*":
          a[a.length - 1].push("*");
          break;
        case "+":
          a[a.length - 1].push("+");
          break;
        default:
          break;
      }
      a[a.length - 1].push(n);
      return a;
    },
    [[]]
  );

  const res = ops.map((c) => {
    const [op, ...nums] = c;
    const p = op === "*" ? (a, b) => a * b : (a, b) => +a + +b;
    return nums.reduce(p, op === "*" ? 1 : 0);
  });

  const sum = res.reduce((a, b) => a + b);

  if (exp != null && sum !== exp) {
    throw new Error(`${sum} !== ${exp}`);
  } else {
    return sum;
  }
};

console.log("Test 1:", main(input0, 3263827));
console.log("Test 2:", main(input1));
