/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  let prev = null, next;

  while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
  }

  return prev

};