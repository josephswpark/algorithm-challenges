/* eslint-disable no-console */
// prompt: Given a sequence of integers as an array,
// determine whether it is possible to obtain a strictly increasing sequence by
// removing no more than one element from the array.

// function solution(seq) {
//   var x = 0;
//   for (let i = 1; i < seq.length; i++) {
//     if (seq[i] <= seq[i - 1]) {
//       x++;
//     }
//     if (x > 1) {
//       return false;
//     }
//     if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) {
//       return true;
//     }
//   }
// }

function solution(seq) {
  var bad = 0;
  for (var i = 1; i < seq.length; i++) {
    if (seq[i] <= seq[i - 1]) {
      bad++;
      if (bad > 1) return false;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
    }
  }
  return true;
}
console.log(solution([1, 3, 2, 1]));
console.log(solution([1, 3, 2]));
console.log(solution([1, 2, 1, 2]));
console.log(solution([3, 6, 5, 8, 10, 20, 15]));
