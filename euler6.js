function solve(input) {
  let sumsquare = 0;
  let regsum = 0;
  for (let i = 0; i < input + 1; i++) {
    sumsquare += i * i;
    regsum += i;
  }
 return (regsum*regsum) - sumsquare;
}

console.log(solve(100));