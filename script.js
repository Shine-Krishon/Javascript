let m = 5;
let n = 7;
let sum = 0;

if (m > n) {
  console.log(0);
} else {
  for (let i = m; i <= n; i++) {
    sum += i * i * i;
  }
  console.log(sum);
}
