/**
    @title 2130. Maximum Twin Sum of a Linked List
    @difficulty Easy
    @url https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

    @description
        You are given the head of a singly linked-list. The list can be represented as:

        L0 → L1 → … → Ln - 1 → Ln
        Reorder the list to be on the following form:

        L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
        You may not modify the values in the list's nodes. Only nodes themselves may be changed.

    @params {ListNode} head
    @return {ListNode}
 */

var pairSum1 = function (head) {
    let res = 0,
        arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        res = Math.max(res, arr[i] + arr[arr.length - 1 - i]);
    }

    return res;
};

var pairSum2 = function (head) {
    let res = 0,
        slow = head,
        fast = head,
        list1,
        list2;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    list1 = head;
    list2 = reverse(slow);
    slow = null;

    while (list1 && list2) {
        res = Math.max(res, list1.val + list2.val);
        list1 = list1.next;
        list2 = list2.next;
    }

    return res;

    function reverse(head) {
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
};
