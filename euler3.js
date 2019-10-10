function primeFactor(input) {
  let primeArr = [];
  let divisor = 1;
  while (divisor < Math.sqrt(input) + 1) {
       if (input % divisor === 0) {
         primeArr.push(divisor);
         primeArr.push(input / divisor);
       }
    divisor++;
  }
  console.log(primeArr);
  var sortedArr = primeArr.sort((a, b) => a - b);
  console.log(sortedArr);
  
  for (let i = sortedArr.length; i > 0; i--) {
    if (isPrime(sortedArr[i])) {
      return sortedArr[i];
    }
  }
  
}

function isPrime(input) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (input > 1);
}



console.log(primeFactor(600851475143));