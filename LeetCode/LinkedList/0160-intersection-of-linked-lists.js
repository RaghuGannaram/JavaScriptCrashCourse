/**
    @title 160. Intersection of Two Linked Lists
    @difficulty Easy
    @url https://leetcode.com/problems/intersection-of-two-linked-lists/

    @description
        Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

        For example, the following two linked lists begin to intersect at node c1:

        It is guaranteed that there are no cycles anywhere in the entire linked structure.

        Note that the linked lists must retain their original structure after the function returns.

    @param {ListNode} headA
    @param {ListNode} headB
    @return {ListNode}
 */

var getIntersectionNode1 = function (headA, headB) {
    let list1 = headA,
        list2 = headB;

    while (list1 !== list2) {
        list1 = list1 ? list1.next : headB;
        list2 = list2 ? list2.next : headA;
    }

    return list1;
};

var getIntersectionNode2 = function (headA, headB) {
    let currentA = headA,
        currentB = headB;

    while (currentA) {
        currentB = headB;
        while (currentB) {
            if (currentA === currentB) {
                return currentA;
            }
            currentB = currentB.next;
        }
        currentA = currentA.next;
    }
    return null;
};
