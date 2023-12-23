/**
    @title 61. Rotate List
    @difficulty Medium
    @url https://leetcode.com/problems/rotate-list/

    @description
        Given the head of a linked list, rotate the list to the right by k places.

    @param {ListNode} head
    @param {number} k
    @return {ListNode}
 */

var rotateRight = function (head, k) {
    if (!head) return head;

    let length = 1,
        tail = head,
        current = head,
        res = null;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k = k % length;

    if (k === 0) return head;

    for (let i = 0; i < length - k - 1; i++) {
        current = current.next;
    }

    res = current.next;
    current.next = null;

    tail.next = head;

    return res;
};
