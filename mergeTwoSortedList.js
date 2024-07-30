// Merge Two Sorted Lists - LeetCode
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1);
    let head = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    head.next = l1 || l2;
    return dummy.next;
};

// Penjelasan:
// - Buat variabel dummy yang diisi dengan ListNode bernilai -1
// - Buat variabel head yang diisi dengan dummy
// - Looping selama l1 dan l2 tidak null
// - Di dalam looping, cek apakah nilai l1 lebih kecil dari nilai l2
// - Jika ya, maka next dari head adalah l1 dan l1 adalah l1.next
// - Jika tidak, maka next dari head adalah l2 dan l2 adalah l2.next
// - head adalah head.next
// - head.next adalah l1 atau l2
// - Kembalikan dummy.next
// - ListNode adalah sebuah class yang merepresentasikan node dalam linked list
// - Setiap node memiliki properti val yang merepresentasikan nilai dari node tersebut
// - Setiap node memiliki properti next yang merepresentasikan node selanjutnya dalam linked list
// - Setiap node memiliki method constructor yang digunakan untuk membuat node baru
// - Setiap node memiliki method toString yang digunakan untuk mengubah node menjadi string
// - Setiap node memiliki method fromArray yang digunakan untuk membuat linked list dari array
// - Setiap node memiliki method toArray yang digunakan untuk membuat array dari linked list
// - Setiap node memiliki method fromString yang digunakan untuk membuat linked list dari string
