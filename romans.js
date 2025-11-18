/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 100,
  };
  let t = s.split("");
  let m = 0;
  for (i = 0; i < t.length; i++) {
    if (t[i + 1] === "V" || t[i + 1] === "X") {
    }
    m = m + symbols[t[i]];
  }
  console.log(m);
};

romanToInt("IV");
