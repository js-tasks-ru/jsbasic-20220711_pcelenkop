function factorial(n) {
  let result = 1;
  while (n > 1) {
      result = result * n;
      n -= 1;
  }
  return result; 
}