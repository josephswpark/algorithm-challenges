/* eslint-disable no-console */
// input: year = 1905, 1700, 1850
// output: 20, 17, 19

function getCentury(year) {
  return Math.ceil(year / 100);
}

console.log(getCentury(1950));
console.log(getCentury(1700));
