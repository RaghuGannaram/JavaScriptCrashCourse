/**
 * @param {ListNode} head
 * @param {number} n
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

function generateArray(head) {
	let result = [];
	while (head) {
		result.push(head.val);
		head = head.next;
	}
	return result;
}

var removeNthFromEnd1 = function (head, n) {
	let i = 0,
		current = head,
		prev = null,
		pos = getLength(head) - n;

	if (pos === 0) {
		head = head.next;
		return head;
	}

	while (current) {
		if (pos === i) {
			prev.next = current.next;
			return head;
		}
		prev = current;
		current = current.next;
		i++;
	}

	function getLength(head) {
		let l = 0;
		while (head) {
			l++;
			head = head.next;
		}
		return l;
	}
	return head;
};

var removeNthFromEnd2 = function (head, n) {
	let current = head,
		pos = getLength(head) - n;

	if (pos === 0) {
		head = head.next;
		return head;
	}

	for (let i = 0; i < pos - 1; i++) {
		current = current.next;
	}

	current.next = current.next.next;

	function getLength(head) {
		let l = 0;
		while (head) {
			l++;
			head = head.next;
		}
		return l;
	}
	return head;
};

let head = generateLinkedList([1, 2, 3, 4, 5]);
let result = removeNthFromEnd1(head, 2);
console.log(generateArray(result));
