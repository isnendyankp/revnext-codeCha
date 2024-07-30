// LeetCode URL: https://leetcode.com/problems/two-sum/
// Description: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// This solution is not efficient, but it is a good starting point.
// We iterate through the array and for each element, we iterate through the rest of the array to find the pair that sums up to the target.
// We return the indices of the pair when we find it.
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (num + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Solution 2: Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)
// This solution is more efficient than the brute force solution.
// We iterate through the array and for each element, we calculate the difference between the target and the element.
// We check if the difference is in the hash map. If it is, we return the indices of the element and the difference.
// If the difference is not in the hash map, we add the element to the hash map.
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(num, i);
  }
}

// penjelasan:
// - Buat variabel map yang diisi dengan Map
// - Looping dari index ke-0 sampai panjang array nums
// - Di dalam looping, buat variabel num yang diisi dengan nums[i]
// - Buat variabel diff yang diisi dengan target dikurangi num
// - Cek apakah map memiliki diff
// - Jika ya, maka kembalikan [map.get(diff), i]
// - Jika tidak, maka tambahkan num ke map
// - Kembalikan [map.get(diff), i] jika diff ada di map

// Test Cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

// LeetCode Submission
// You can copy the solution function and paste it into the LeetCode editor to submit it.
// The function signature will look like this:
// var twoSum = function(nums, target) {
// };

// You can also test the solution by running the following command in the terminal:
// node twosum.js

// Note: The solution is not limited to the examples provided. You can test it with other inputs as well.

// Feel free to share your solutions and optimizations.


// My solution;
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const a = nums[i];
        for(let b = i + 1; b < nums.length; b++) {
            if (a + nums[b] === target) {
                return [i, b];
            }
        }
    }
};

// Penjelasan:

// - Buat variabel a yang diisi dengan nilai nums[i]
// - Looping dari index ke-1 sampai panjang array nums
// - Di dalam looping, cek apakah a ditambah nums[b] sama dengan target
// - Jika ya, maka kembalikan [i, b]
// - Kembalikan [0, 1] jika tidak ada hasil yang ditemukan
// - Jika tidak ada hasil yang ditemukan, maka kembalikan [0, 1]
// - Jika ada hasil yang ditemukan, maka kembalikan [i, b]
// - Kembalikan [0, 1] jika tidak ada hasil yang ditemukan
// - Kembalikan [i, b] jika ada hasil yang ditemukan
// - Kembalikan [0, 1] jika tidak ada hasil yang ditemukan
// - Kembalikan [i, b] jika ada hasil yang ditemukan
// - Kembalikan [0, 1] jika tidak ada hasil yang ditemukan
// - Kembalikan [i, b] jika ada hasil yang ditemukan
// - Kembalikan [0, 1] jika tidak ada hasil yang ditemukan
// - Kembalikan [i, b] jika ada hasil yang ditemukan