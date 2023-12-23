/**
    @title 203. Remove Linked List Elements
    @difficulty Easy
    @url https://leetcode.com/problems/remove-linked-list-elements/

    @description
        Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

    @params {ListNode} head
    @params {number} val
    @return {ListNode}
 */

var removeElements = function (head, val) {
    while (head && head.val === val) head = head.next;

    let current = head,
        prev = null;

    while (current) {
        if (current.val === val) prev.next = current.next;
        else prev = current;
        current = current.next;
    }

    return head;
};
