const fibonacci = (n) => {
  let fib = [];
  if(n<=2){
    if(n===1){
      fib.push(0);
    }
    else{
      fib.push(0,1);
    }
    return fib;
  }
  if(n>2){
    fib=[0,1];
    for(i=2; i<n; i++){
      fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
  }
}

console.log(fibonacci(5));