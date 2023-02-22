/**
 * @param {ListNode} head
 * @return {boolean}
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
	if (head === null || head.next === null) return false;

	let slow = head;
	let fast = head.next;

	while (fast !== null) {
		slow = slow.next;
		if (fast.next === null) return false;
		fast = fast.next.next;
		if (fast === slow) return true;
	}
	return false;
};

let head = generateLinkedList();
console.log(hasCycle1(head));
