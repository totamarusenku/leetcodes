/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyIndex = 0;
  let sellIndex = 0;
  for (i = 0; i < prices.length; i++) {
    if (prices[buyIndex + i] < prices[buyIndex + i + 1]) {
      buyIndex = i + 1;
    }
  }
  console.log(buyIndex, sellIndex);
};

maxProfit([7, 1, 5, 3, 6, 4]);
