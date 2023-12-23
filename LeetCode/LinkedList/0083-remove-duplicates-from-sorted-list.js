/**
    @title  83. Remove Duplicates from Sorted List
    @difficulty Easy
    @url https://leetcode.com/problems/remove-duplicates-from-sorted-list/

    @description    
        Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

    @params {ListNode} head
    @return {ListNode}
 */

var deleteDuplicates = function (head) {
    let current = head,
        prev = null;

    while (current) {
        if (prev?.val === current.val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }

    return head;
};
