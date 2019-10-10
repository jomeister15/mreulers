function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib (n - 2)
}

function eulerSolve(input) {
  let arr = []
  let sum = 0;
  for (let i = 0; i<input; i++) {
    if (fib(i) > 4000000) {
      console.log("oh");
      break;
    }
    if (fib(i) % 2) {
      sum += fib(i);
    }
  }
  return sum;
}


console.log(eulerSolve(150));