/**
 * @param {ListNode} l1
 * @param {ListNode} l2
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

var addTwoNumbers = function (l1, l2) {
	return add(l1, l2, 0);

	function add(l1, l2, carry) {
		if (!l1 && !l2 && !carry) {
			return null;
		}
		const v1 = (l1 && l1.val) || 0;
		const v2 = (l2 && l2.val) || 0;
		const sum = v1 + v2 + carry;
		return { val: sum % 10, next: add(l1 && l1.next, l2 && l2.next, sum % 10 === sum ? 0 : 1) };
	}
};

let head1 = generateLinkedList([2, 4, 3]);
let head2 = generateLinkedList([5, 6, 4]);

console.log(addTwoNumbers(head1, head2));
