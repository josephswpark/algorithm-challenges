/* eslint-disable no-console */
const price1 = [7, 1, 5, 3, 6, 4];
const price2 = [7, 6, 4, 3, 1];
const price3 = [1];
const price4 = [1, 1, 1, 1];
const price5 = [7, 1, 4, 3, 1];

function maxProfit(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}

console.log(maxProfit(price1)); // equal 5
console.log(maxProfit(price2)); // equal 0
console.log(maxProfit(price3)); // equal 0
console.log(maxProfit(price4)); // equal 0
console.log(maxProfit(price5)); // equal 3
