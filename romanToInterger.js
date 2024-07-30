// Roman to Integer - LeetCode
// Problem:
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// Solution 1: Brute Force
// Time Complexity: O(n)
// Space Complexity: O(1)
// This solution is not efficient, but it is a good starting point.
// We iterate through the roman numeral string and calculate the integer value.
// We keep track of the previous value to handle the subtraction cases.
// We return the final integer value at the end.
function romanToInt(s) {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const current = romanToIntMap[s[i]];
    if (current < prev) {
      result -= current;
    } else {
      result += current;
    }
    prev = current;
  }
  return result;
}

// Penjelasan code diatas:
// - Buat variabel romanToIntMap yang berisi map dari roman numeral ke integer
// - Buat variabel result dan prev dengan nilai 0
// - Looping sebanyak s.length
// - Jika current < prev, maka result -= current
// - Jika tidak, maka result += current
// - Simpan nilai current ke prev
// - Return result
// Test case
console.log(romanToInt("III")); // 3