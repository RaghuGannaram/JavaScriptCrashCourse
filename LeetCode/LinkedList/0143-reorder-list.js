/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

function generateLinkedList(arr) {
	return generate(arr);

	function generate(list) {
		if (!list.length) return null;

		let node = new ListNode(list.shift());
		node.next = generate(list);
		return node;
	}
}

var reorderList = function (head) {
	let slow = head,
		fast = head,
		tail;

	while (fast.next && fast.next.next) {
		fast = fast.next.next;
		slow = slow.next;
	}
	tail = reverse(slow.next);
	slow.next = null;

	merge(head, tail);

	function merge(l1, l2) {
		if (!l1 || !l2) {
			return !l1 ? l2 : l1;
		}
		let t1 = l1.next,
			t2 = l2.next;

		l1.next = l2;
		l2.next = merge(t1, t2);

		return l1;
	}

	function reverse(head) {
		let current = head,
			prev = null,
			next;
		while (current) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		return prev;
	}
};

let head = generateLinkedList([1, 2, 3, 4]);
reorderList(head);
console.log(head);
