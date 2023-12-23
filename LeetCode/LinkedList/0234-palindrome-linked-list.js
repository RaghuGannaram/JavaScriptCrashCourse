/**
    @title 234. Palindrome Linked List
    @difficulty Easy
    @url https://leetcode.com/problems/palindrome-linked-list/

    @description
        Given the head of a singly linked list, return true if it is a palindrome.

    @params {ListNode} head
    @return {boolean}
 */

var isPalindrome = function (head) {
    let list1,
        list2,
        slow = head,
        fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    list1 = head;
    list2 = reverseList(slow);

    while (list1 && list2) {
        if (list1.val !== list2.val) return false;
        list1 = list1.next;
        list2 = list2.next;
    }

    return true;
};

function reverseList(head) {
    let prev = null,
        next;

    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
}
