/**
    @title 148. Sort List
    @difficulty Medium
    @url https://leetcode.com/problems/sort-list/

    @description
        Sort a linked list in O(n log n) time using constant space complexity.
        
    @param {ListNode} head
    @return {ListNode}
 */

var sortList1 = function (head) {
    let arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    arr.sort((a, b) => a - b);

    let result = new ListNode();
    let temp = result;

    for (let val of arr) {
        temp.next = new ListNode(val);
        temp = temp.next;
    }

    return result.next;
};

var sortList2 = function (head) {
    if (!head || !head.next) return head;

    let slow = head,
        fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null;

    return merge(sortList(head), sortList(mid));
};

function merge(left, right) {
    let current,
        head = new ListNode();
    current = head;

    while (left && right) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    current.next = left ? left : right;

    return head.next;
}
