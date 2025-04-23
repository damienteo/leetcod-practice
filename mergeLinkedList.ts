// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // create new blank listnode to hold the merge result
  const list3 = new ListNode(-1);

  // create a variable to hold the latest number to compare against;
  let current = list3;

  // compare elements in list2 against elements in list1
  // Add new elements as required
  // should be able to jump across lists as required

  while (list1 !== null && list2 !== null) {
    //Ascending order
    if (list1.val < list2.val) {
      // Add on to result
      // Replace the reference for the list
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  // Add on the remaining list if one list is longer than the other
  current.next = list1 !== null ? list1 : list2;

  return list3.next;
}
