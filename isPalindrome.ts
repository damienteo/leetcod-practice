// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

function isPalindrome(x: number): boolean {
  //   const string = x.toString();
  //   const nextString = x.toString().split("").reverse().join("");
  //   return string === nextString;

  // How to solve it without converting the integer into a string

  if (x === 0) return true;

  // account for obvious false cases:
  // - negative numbers
  // - ends in 0, since the numbers will not start with 0
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  // Now we need to go down the numbers in x

  // new number to append numbers from x:
  let reversed = 0;
  let nextX = x;

  // To make sure we get to half the numbers in nextX,
  // stop only when reserved has more number places than nextX
  while (reversed < nextX) {
    // add the last digit of number to reversed
    reversed = reversed * 10 + (nextX % 10); //add a number place and the remainder from x, which is the right most digit

    // remove number from nextX, by dividing and rounding down the number
    nextX = Math.floor(nextX / 10);

    // if (reversed === nextX) return true
    console.log({ nextX, reversed });
  }

  return reversed === nextX || Math.floor(reversed / 10) === nextX;
}
