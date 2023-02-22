/**
 * @param {ListNode} list1
 * @param {ListNode} list2
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

var mergeTwoLists1 = function (list1, list2) {
	return merge(list1, list2);

	function merge(l1, l2) {
		if (!l1 || !l2) {
			return !l1 ? l2 : l1;
		}
		if (l1.val <= l2.val) {
			return {
				val: l1.val,
				next: merge(l1.next, l2),
			};
		} else {
			return {
				val: l2.val,
				next: merge(l1, l2.next),
			};
		}
	}
};

var mergeTwoLists2 = function (list1, list2) {
	let head = new ListNode(),
		current;
	current = head;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			current.next = new ListNode(list1.val);
			current = current.next;
			list1 = list1.next;
		} else {
			current.next = new ListNode(list2.val);
			current = current.next;
			list2 = list2.next;
		}
	}
	if (list1 || list2) {
		current.next = list1 ? list1 : list2;
	}

	return head.next ? head.next : null;
};

let head1 = generateLinkedList([1, 2, 4]);
let head2 = generateLinkedList([1, 3, 4]);

console.log(mergeTwoLists1(head1, head2));
