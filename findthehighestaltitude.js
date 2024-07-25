// Find The Highest Altitude - LeetCode
// Problem:
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
// Example 1:
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
// Example 2:
// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
// Constraints:

// n == gain.length
// 1 <= n <= 100
// -100 <= gain[i] <= 100

// Solution 1: Brute Force
// Time Complexity: O(n)
// Space Complexity: O(1)
// This solution is not efficient, but it is a good starting point.
// We iterate through the array and calculate the altitude at each point.
// We keep track of the highest altitude seen so far and return it at the end.
function findTheHighestAltitude(gain) {
  let altitude = 0;
  let highestAltitude = 0;
  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    highestAltitude = Math.max(highestAltitude, altitude);
  }
  return highestAltitude;
}

// Penjelasan code diatas:
// - Buat variabel altitude dan highestAltitude dengan nilai 0
// - Looping sebanyak gain.length
// - Tambahkan altitude dengan gain[i]
// - Simpan nilai tertinggi dari altitude dan highestAltitude
// - Return highestAltitude
