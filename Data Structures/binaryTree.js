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

//-------------------------------------------------PreOrder Traversal----------------------------------------------
function preOrderTraversalDFS(root) {
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

function preOrderTraversalBFS(root) {
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

console.log(preOrderTraversalDFS(apple));
console.log(preOrderTraversalBFS(apple));

function preOrderTraversalforRegeneration(root) {
    let result = [];

    dfs(root);
    return result;

    function dfs(node) {
        if (!node) {
            result.push(null);
            return;
        }

        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
}

console.log(preOrderTraversalforRegeneration(apple));

function constructBinaryTreeFromPreOrderArray(arr) {
    let index = 0;

    return constructTree(arr);

    function constructTree(arr) {
        if (index >= arr.length || arr[index] === null) {
            index++;
            return null;
        }

        let node = new Node(arr[index]);
        index++;
        node.left = constructTree(arr);
        node.right = constructTree(arr);

        return node;
    }
}
const preorderedArray = [10, 20, 40, null, null, 50, null, null, 30, 60, null, null, 70, null, null];
const constructedPreorderTree = constructBinaryTreeFromPreOrderArray(preorderedArray);

console.log(constructedPreorderTree);
console.log(preOrderTraversalforRegeneration(constructedPreorderTree));

//-------------------------------------------------InOrder Traversal----------------------------------------------

function inOrderTraversalDFS(root) {
    let result = [];

    dfs(root);
    return result;

    function dfs(node) {
        if (!node) return;

        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
}

function inOrderTraversalBFS(root) {
    let result = [],
        current,
        stack = [];

    current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }

    return result;
}

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

// 40 20 50 10 60 30 70

console.log(inOrderTraversalDFS(apple));
console.log(inOrderTraversalBFS(apple));

function constructBinaryTreeFromInOrderArray(inOrderArr) {
    let index = 0;

    function constructTree(start, end) {
        if (start > end) {
            return null;
        }

        let mid = Math.floor((start + end) / 2);
        let node = new Node(inOrderArr[mid]);
        index++;

        node.left = constructTree(start, mid - 1);
        node.right = constructTree(mid + 1, end);

        return node;
    }

    return constructTree(0, inOrderArr.length - 1);
}

const inOrderArray = [40, 20, 50, 10, 60, 30, 70];
const constructedInOrderTree = constructBinaryTreeFromInOrderArray(inOrderArray);
console.log(constructedInOrderTree);

//-------------------------------------------------PostOrder Traversal----------------------------------------------
function postOrderTraversalDFS(root) {
    let result = [];

    dfs(root);
    return result;

    function dfs(node) {
        if (!node) return;

        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }
}

function postOrderTraversalBFS(root) {
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

    while (tempStack.length > 0) {
        result.push(tempStack.pop());
    }
    return result;
}

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

// 40 50 20 60 70 30 10

console.log(postOrderTraversalDFS(apple));
console.log(postOrderTraversalBFS(apple));

function constructBinaryTreeFromPostOrderArray(postOrderArr) {
    let index = postOrderArr.length - 1;

    return constructTree();

    function constructTree() {
        if (index < 0) {
            return null;
        }

        let value = postOrderArr[index];
        index--;
        if (value === null) {
            return null;
        }

        let node = new Node(value);

        node.right = constructTree();
        node.left = constructTree();

        return node;
    }
}
const postOrderArray = [40, 50, 20, 60, 70, 30, 10];
const constructedPostOrderTree = constructBinaryTreeFromPostOrderArray(postOrderArray);
console.log(constructedPostOrderTree);
