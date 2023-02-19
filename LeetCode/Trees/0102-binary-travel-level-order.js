/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

function insertLevelOrder(arr, index = 0) {
	let root = null;
	if (index < arr.length) {
		if (arr[index]) {
			if (arr[index]) {
				root = new TreeNode(arr[index]);
				root.left = insertLevelOrder(arr, 2 * index + 1);
				root.right = insertLevelOrder(arr, 2 * index + 2);
			}
		}
	}
	return root;
}

var levelOrder1 = function (root) {
	let result = [],
		queue = [],
		level,
		next;

	if (!root) {
		return result;
	}

	queue.push(root);

	while (queue.length > 0) {
		level = [];
		next = [];
		for (let node of queue) {
			level.push(node.val);
			node.left && next.push(node.left);
			node.right && next.push(node.right);
		}
		result.push(level);
		queue = next;
	}
	return result;
};

var levelOrder2 = function (root) {
	let result = [],
		queue = [],
		current,
		level,
		l;

	if (!root) return result;

	queue.push(root);

	while (queue.length > 0) {
		level = [];
		l = queue.length;
		for (let i = 0; i < l; i++) {
			current = queue.shift();
			current.left && queue.push(current.left);
			current.right && queue.push(current.right);
			level.push(current.val);
		}
		result.push(level);
	}
	return result;
};

let root = insertLevelOrder([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder1(root));
