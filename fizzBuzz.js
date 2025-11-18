/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const fizzy = [];
  let fizcat = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0) {
        fizcat.push("Fizz");
      }
      if (i % 5 === 0) {
        fizcat.push("Buzz");
      }
      fizzy.push(fizcat.join(""));
      fizcat = [];
    } else {
      fizzy.push(i.toString());
    }
  }
  return fizzy;
};
