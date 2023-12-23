/**
	@title 21. Merge Two Sorted Lists
	@difficulty Easy
	@url https://leetcode.com/problems/merge-two-sorted-lists/

	@description
		Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

	@params {ListNode} l1
	@params {ListNode} l2
	@return {ListNode}
 */

var mergeTwoLists1 = function (list1, list2) {
    return merge(list1, list2);

    function merge(l1, l2) {
        if (!l1 || !l2) {
            return !l1 ? l2 : l1;
        }
        if (l1.val <= l2.val) {
            return {
                val: l1.val,
                next: merge(l1.next, l2),
            };
        } else {
            return {
                val: l2.val,
                next: merge(l1, l2.next),
            };
        }
    }
};

var mergeTwoLists2 = function (list1, list2) {
    let head = new ListNode(),
        current;
    current = head;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = new ListNode(list1.val);
            current = current.next;
            list1 = list1.next;
        } else {
            current.next = new ListNode(list2.val);
            current = current.next;
            list2 = list2.next;
        }
    }
    if (list1 || list2) {
        current.next = list1 ? list1 : list2;
    }

    return head.next;
};
