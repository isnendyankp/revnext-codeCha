// Palindrome Number - LeetCode
// Problem:
// Given an integer x, return true if x is a palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
// Example 1:
// Input: x = 121
// Output: true
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:
// Input: x = -101
// Output: false
// Constraints:

// -231 <= x <= 231 - 1
// Follow up: Could you solve it without converting the integer to a string?

// Solution 1: Convert to String
// Time Complexity: O(n)
// Space Complexity: O(n)
// This solution converts the integer to a string and then checks if the string is a palindrome.
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  const str = x.toString();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Penjelasan code diatas:
// - Jika x < 0, maka return false
// - Konversi x menjadi string
// - Buat variabel left dan right dengan nilai 0 dan str.length - 1
// - Looping selama left < right
// - Jika str[left] !== str[right], maka return false
// - Tambahkan left dan kurangi right
// - Return true jika looping selesai