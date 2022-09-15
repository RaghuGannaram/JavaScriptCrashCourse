class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;

function printLinkedList1(head) {
	let current = head;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
}

function printLinkedList2(head) {
	if (head === null) return;
	console.log(head.val);
	printLinkedList2(head.next);
}

console.log(printLinkedList2(a));

function copyToArray1(head) {
	let current = head;
	let values = [];

	while (current !== null) {
		values.push(current.val);
		current = current.next;
	}
	return values;
}

function copyToArray2(head) {
	let values = [];
	fillArr(head, values);
	return values;
}
function fillArr(head, values) {
	if (head === null) return;
	values.push(head.val);
	fillArr(head.next, values);
}

console.log(copyToArray2(a));

console.log(a.next.next.next.next.next);
