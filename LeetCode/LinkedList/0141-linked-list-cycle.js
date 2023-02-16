/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

  while (head) {
      if (head.visited) {
          return true;
      } else {
          head.visited = true;
          head = head.next;
      }
  }
  return false;
};