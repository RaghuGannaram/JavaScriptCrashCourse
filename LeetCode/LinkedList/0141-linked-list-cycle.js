/**
	@title 141. Linked List Cycle
	@difficulty Easy
	@url https://leetcode.com/problems/linked-list-cycle/

	@description
		Given a linked list, determine if it has a cycle in it.

		To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

	@param {ListNode} head
	@return {boolean}

 */

var hasCycle1 = function (head) {
    while (head) {
        if (head.visited) {
            return true;
        }
        head.visited = true;
        head = head.next;
    }
    return false;
};

var hasCycle2 = function (head) {
    if (!head) return false;

    let slow = head,
        fast = head.next;

    while (fast && fast.next) {
        if (slow === fast) return true;

        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};

let head = generateLinkedList();
console.log(hasCycle1(head));
