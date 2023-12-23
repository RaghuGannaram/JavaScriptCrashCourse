/**
    @title 147. Insertion Sort List
    @difficulty Medium
    @url https://leetcode.com/problems/insertion-sort-list/

    @description
        Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

        The steps of the insertion sort algorithm:

        Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
        At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
        It repeats until no input elements remain.
        
    @param {ListNode} head
    @return {ListNode}
 */

var insertionSortList = function (head) {
    let dummy = new ListNode(-5001),
        prev = head,
        current = head.next,
        temp;
    dummy.next = head;

    while (current) {
        if (current.val > prev.val) {
            prev = current;
            current = current.next;
            continue;
        }

        temp = dummy;

        while (current.val > temp.next.val) {
            temp = temp.next;
        }

        prev.next = current.next;
        current.next = temp.next;
        temp.next = current;
        current = prev.next;
    }

    return dummy.next;
};
console.log(!![])