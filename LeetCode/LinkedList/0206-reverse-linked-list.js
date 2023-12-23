/**
	@title 206. Reverse Linked List
	@difficulty Easy
	@url https://leetcode.com/problems/reverse-linked-list/

	@description
		Given the head of a singly linked list, reverse the list, and return the reversed list.

	@params {ListNode} head
	@return {ListNode}
 */

var reverseList = function (head) {
    let prev = null,
        next;

    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};

let head = generateLinkedList([1, 2, 3, 4, 5]);
console.log(reverseList(head));
