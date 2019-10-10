function eulerSolve(input) {
   if (input < 2) {
     return 1;
   }else{
     return fibonacci(input-2) + fibonacci(input-1);
   }
  
}

console.log(eulerSolve(100));