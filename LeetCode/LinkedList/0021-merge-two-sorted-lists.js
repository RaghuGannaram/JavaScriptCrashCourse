/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  return merge(list1, list2);

  function merge(l1, l2) {
      if (!l1 || !l2) {
          return !l1 ? l2 : l1;
      }
      if (l1.val <= l2.val) {
          return {
              val: l1.val,
              next: merge(l1.next, l2)
          }
      } else {
          return {
              val: l2.val,
              next: merge(l1, l2.next)
          }
      }
  }
};