function checkDiv() {
  
  for (let i = 2520; i < 300000000; i+=) 
    if (i % 19 != 0 | i % 17 !=0) {
      break; 
    }
     else if (check2(i)) {
       return i;
     }
  }
  
}

function check2(num) {
  for (let j = 20; j > 1; j--) {
    if (num % j != 0) {
      console.log(num + " not divisible by " + j)
      return false;
    }
    else if (j === 2) {
      return true;
    }
  }
  
}

console.log(checkDiv());