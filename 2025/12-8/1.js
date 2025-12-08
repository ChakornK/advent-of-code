import fs from "node:fs";

const input0 = fs.readFileSync("./input0.txt", "utf-8");
const input1 = fs.readFileSync("./input1.txt", "utf-8");

const d = (x1, y1, z1, x2, y2, z2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);

const main = (inp, limit, exp = null) => {
  const b = inp.split("\n").map((line) => line.split(",").map((n) => +n));

  let paths = [];
  for (let i = 0; i < b.length; i++) {
    const c1 = b[i];
    for (let j = i + 1; j < b.length; j++) {
      const c2 = b[j];
      const dist = d(...c1, ...c2);
      paths.push({
        c1,
        c2,
        dist,
      });
    }
  }
  paths.sort((a, b) => a.dist - b.dist);
  paths = paths.map((p) => [p.c1.join(","), p.c2.join(",")]);

  let connections = paths.slice(0, limit);
  let prevLen = -1;
  while (connections.length != prevLen) {
    prevLen = connections.length;
    for (let i = 0; i < connections.length; i++) {
      const path = connections.shift();
      if (connections.length == 0) {
        connections.push(path);
      } else {
        const t = connections.findIndex((cs) => cs.some((c) => path.includes(c)));
        if (t < 0) {
          connections.push(path);
        } else {
          connections[t] = [...new Set([...connections[t], ...path])];
        }
      }
    }
  }

  const res = connections
    .map((c) => c.length)
    .toSorted((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a * b, 1);

  if (exp != null && res !== exp) {
    throw new Error(`${res} !== ${exp}`);
  } else {
    return res;
  }
};

console.log("Test 1:", main(input0, 10, 40));
console.log("Test 2:", main(input1, 1000));
