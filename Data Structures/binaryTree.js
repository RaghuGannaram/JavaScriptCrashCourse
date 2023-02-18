function Node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

let apple = new Node(10);
apple.left = new Node(20);
apple.right = new Node(30);
apple.left.left = new Node(40);
apple.left.right = new Node(50);
apple.right.left = new Node(60);
apple.right.right = new Node(70);

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

console.log(apple);
console.log(typeof apple);
console.log(apple instanceof Node);

//------------BFS | Level Order Traversal| Time Complexity = O(n) | Space COmplexity = O(n)-----------------------------------
function levelOrderTraversal(root) {
	let current,
		result = [],
		queue = [],
		count = 0;

	if (!root) {
		return result;
	}

	queue.push(root);

	while (queue.length > 0) {
		++count;
		current = queue.shift();
		result.push(current.val);
		current.left !== null && queue.push(current.left);
		current.right !== null && queue.push(current.right);
	}
	console.log(count);
	return result;
}

console.log(levelOrderTraversal(apple));

//------------DFS | PreOrder Traversal| Time Complexity = O(n) | Space COmplexity = O(n)------------------------------------
function preOrderTraversal1(root) {
	let result = [];

	dfs(root);

	return result;

	function dfs(node) {
		if (!node) return;

		result.push(node.val);
		dfs(node.left);
		dfs(node.right);
	}
}

function preOrderTraversal2(root) {
	let current = null,
		result = [],
		stack = [];

	if (!root) return result;

	stack.push(root);

	while (stack.length > 0) {
		current = stack.pop();

		result.push(current.val);

		current.right && stack.push(current.right);
		current.left && stack.push(current.left);
	}
	return result;
}

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

//10 20 40 50 30 60 70

console.log(preOrderTraversal1(apple));
console.log(preOrderTraversal2(apple));

//------------DFS | InOrder Traversal| Time Complexity = O(n) | Space COmplexity = O(n)-------------------------------------------

function inOrderTraversal1(root) {
	let result = [],
		count = 0;

	dfs(root);

	console.log(count);
	return result;

	function dfs(node) {
		++count;
		if (!node) {
			return;
		}
		dfs(node.left);
		result.push(node.val);
		dfs(node.right);
	}
}

function inOrderTraversal2(root) {
	let result = [],
		stack = [];

	if (!root) return result;

	while (root !== null || stack.length > 0) {
		if (root !== null) {
			stack.push(root);
			root = root.left;
		} else {
			root = stack.pop();
			result.push(root.val);
			root = root.right;
		}
	}
	return result;
}

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

// 40 20 50 10 60 30 70

console.log(inOrderTraversal1(apple));
console.log(inOrderTraversal2(apple));

//------------DFS | PostOrder Traversal| Time Complexity = O(n) | Space COmplexity = O(n)-----------------------------------------------
function postOrderTraversal1(root) {
	let result = [],
		count = 0;

	dfs(root);

	console.log(count);
	return result;

	function dfs(node) {
		++count;
		if (!node) {
			return;
		}
		dfs(node.left);
		dfs(node.right);
		result.push(node.val);
	}
}

function postOrderTraversal2(root) {
	let current = null,
		result = [],
		tempStack = [],
		stack = [];
		
	if (!root) return result;

	stack.push(root);

	while (stack.length > 0) {
		current = stack.pop();

		tempStack.push(current.val);

		current.left && stack.push(current.left);
		current.right && stack.push(current.right);
	}

	while(tempStack.length>0){
			result.push(tempStack.pop())
	}
	return result;
}

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

// 40 50 20 60 70 3 0 10

console.log(postOrderTraversal1(apple));
console.log(postOrderTraversal2(apple));
