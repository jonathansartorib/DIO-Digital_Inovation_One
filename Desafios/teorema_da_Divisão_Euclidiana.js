//teoria da divisao Euclidiana

let line = gets().split(" ");
const a = parseInt(line[0]);
const b = parseInt(line[1]);
let q = parseInt(a/b);
let r = a - b*q;

if (r < 0) {
  r += Math.abs(b);
  
  q = (a-r)/b;  
}

console.log(parseInt(q) + " " + parseInt(r));