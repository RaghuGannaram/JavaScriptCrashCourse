/**
	@title 235. Lowest Common Ancestor of a Binary Search Tree
	@difficulty Easy
	@url https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

	@description
		Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
		According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q 
		as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”	

	@param {TreeNode} root
	@param {TreeNode} p
	@param {TreeNode} q
	@return {TreeNode}
 */

var lowestCommonAncestorRecursive = function (root, p, q) {
    return dfs(root, p, q);

    function dfs(node, p, q) {
        if (p.val < node.val && q.val < node.val) {
            return dfs(node.left, p, q);
        }

        if (p.val > node.val && q.val > node.val) {
            return dfs(node.right, p, q);
        }

        return node;
    }
};

var lowestCommonAncestorIterative = function (root, p, q) {
    let node = root;

    while (node !== null) {
        if (p.val < node.val && q.val < node.val) {
            node = node.left;
            continue;
        }

        if (p.val > node.val && q.val > node.val) {
            node = node.right;
            continue;
        }

        break;
    }

    return node;
};
