/**
 * @param {Node} head
 * @return {Node}
 */

class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.random = null;
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
var copyRandomList = function (head) {
	let current = head,
		copy,
		map = new Map();

	map.set(null, null);

	while (current) {
		map.set(current, new ListNode(current.val));
		current = current.next;
	}
	current = head;

	while (current) {
		copy = map.get(current);
		copy.next = map.get(current.next);
		copy.random = map.get(current.random);
		current = current.next;
	}
	console.log(map);
	return map.get(head);
};

let head = generateLinkedList([1, 20, 3, 40]);
console.log(copyRandomList(head));
