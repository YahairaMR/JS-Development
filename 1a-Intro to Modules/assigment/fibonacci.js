// Declare the fibonacci function here:

const fibonacci = (n) => {
  const results = [0, 1];

  for (let i = 2; i < n; i++) {
    // results[2] = results[0] + results[1]
    let next = results[i - 2] + results[i - 1];
    results.push(next);
  }

  // variable solution
  // solution that's not as good, since it doesn't utilize array

  //   let a = 0
  //   let b = 1

  //   for (let i = 2; i < n; i++) {
  //     let next = a + b

  //     results.push(next)
  //     a = b // set a = to the next number in the sequence which is b
  //     b = next // same thing with b
  //   }

  /*      
    a   b   next
[0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
*/

  return results;
};

// Export the fibonacci function here:
module.exports = fibonacci;
