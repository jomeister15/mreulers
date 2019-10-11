function palinProd(input) {
  let arr = [];
  let currHigh = 0;
  for (let i = input; i < 999; i++) {
    for (let j = i; j < 999; j++) {
      if (palinCheck(i * j)) {
        if (i * j > currHigh) {
          currHigh = i * j
        }
      }
    }
  }
  return currHigh;
}

function palinCheck(num) {
  var digits = (""+num).split("");
  var j = digits.length - 1;
  for (let i = 0; i < j; i++) {
    if (digits[i] != digits[j]) {
      return false
      break;
    }
    j--;
  }
  return true
}

console.log(palinProd(910));