/* eslint-disable no-console */
// Check if a string is a palindrome, which means going forward and backward is the same
// return a boolean

function isPalindrome(str) {
  const together = str.split(' ').join('');
  for (let i = 0; i < together.length - 1; i++) {
    if (together[i] !== together[together.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('lol poop'));
console.log(isPalindrome('aabd'));
console.log(isPalindrome('tiff'));
console.log(isPalindrome('poop'));
