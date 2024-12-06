function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; 
  }
  return a / b; 
}

function fooSolution(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero values explicitly
  } else {
    return a / b;
  }
}

console.log(fooSolution(1, 0)); // Returns 0
console.log(fooSolution(0, 1)); // Returns 0
console.log(fooSolution(10, 2)); // Returns 5