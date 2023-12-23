/**
    @title 1721. Swapping Nodes in a Linked List
    @difficulty Medium
    @url https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

    @description
        You are given the head of a linked list, and an integer k.

        Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

    @params {ListNode} head
    @params {number} k
    @return {ListNode}
 */

var swapNodes1 = function (head, k) {
    let length = getLength(head),
        kc,
        current,
        pos,
        valk,
        valkc;

    kc = length - k + 1;

    current = head;
    pos = 1;

    while (current) {
        if (pos === k) valk = current.val;
        if (pos === kc) valkc = current.val;
        pos++;
        current = current.next;
    }

    current = head;
    pos = 1;

    while (current) {
        if (pos === k) current.val = valkc;
        if (pos === kc) current.val = valk;
        pos++;
        current = current.next;
    }

    return head;

    function getLength(head) {
        let length = 0;

        while (head) {
            length++;
            head = head.next;
        }

        return length;
    }
};

var swapNodes2 = function (head, k) {
    let length = getLength(head),
        kc,
        current,
        pos,
        kNode,
        kcNode;
    kc = length - k + 1;

    current = head;
    pos = 1;

    while (current) {
        if (pos === k) kNode = current;
        if (pos === kc) kcNode = current;
        pos++;
        current = current.next;
    }

    [kNode.val, kcNode.val] = [kcNode.val, kNode.val];

    return head;

    function getLength(head) {
        let length = 0;

        while (head) {
            length++;
            head = head.next;
        }

        return length;
    }
};
