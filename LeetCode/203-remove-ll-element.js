class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

function createLL(arr) {
	let head = null;

	for (let current, i = 0; i < arr.length; i++) {
		let node = new Node(arr[i]);
		if (!head) {
			head = node;
			current = head;
		} else {
			current.next = node;
			current = current.next;
		}
	}
	return head;
}

function retriveLL(head) {
	let arr = [];
	let current = head;

	while (current !== null) {
		arr.push(current.val);
		current = current.next;
	}
	return arr;
}

//-------------------------------------------------------------------------------------------------

var removeElements = function (head, val) {
	let current = head;
	let prev = null;

	while (current) {
		if (head.val == val) {
			head = head.next;
		} else if (current.val == val) {
			prev.next = current.next;
			current = current.next;
			continue;
		}

		prev = current;
		current = current.next;
	}

	return head;
};

let ll = createLL([1, 6, 6, 3, 4, 5, 6]);
let result = removeElements(ll, 6);
console.log(retriveLL(result));
