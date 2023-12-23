/**
    @title 86. Middle of the Linked List
    @difficulty Easy
    @url https://leetcode.com/problems/middle-of-the-linked-list/

    @description
        Given the head of a singly linked list, return the middle node of the linked list.

        If there are two middle nodes, return the second middle node.

    @params {ListNode} head
    @return {ListNode}
 */

var middleNode = function (head) {
    let slow = head,
        fast = head;

    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};
