/**
	@title 19. Remove Nth Node From End of List
	@difficulty Medium
	@url https://leetcode.com/problems/remove-nth-node-from-end-of-list/

	@description
		Given the head of a linked list, remove the nth node from the end of the list and return its head.

	@params {ListNode} head
	@params {number} n
	@return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
    let length = getLength(head),
        pos,
        prev = null,
        current = head;

    pos = length - n;

    if (pos === 0) {
        head = head.next;
        return head;
    }

    for (let i = 1; i <= pos; i++) {
        prev = current;
        current = current.next;
    }

    prev.next = current.next;

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
