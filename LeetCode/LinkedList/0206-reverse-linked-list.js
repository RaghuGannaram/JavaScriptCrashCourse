/**
 * @param {ListNode} head
 * @return {ListNode}
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
