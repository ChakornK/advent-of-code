import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const main = (inp, exp = null) => {
  const layers = inp
    .split("\n")
    .filter((_, i) => i % 2 == 0)
    .map((line) => line.split(""));

  let beams = layers.shift().map((e) => +(e === "S"));

  while (layers.length > 0) {
    const l = layers.shift();
    for (let i = 0; i < l.length; i++) {
      if (l[i] === "^" && beams[i]) {
        const old = beams[i];
        beams[i] = 0;
        beams[i - 1] += old;
        beams[i + 1] += old;
      }
    }
  }

  const total = beams.reduce((a, b) => a + b, 0);

  if (exp != null && total !== exp) {
    throw new Error(`${total} !== ${exp}`);
  } else {
    return total;
  }
};

console.log("Test 1:", main(input0, 40));
console.log("Test 2:", main(input1));
