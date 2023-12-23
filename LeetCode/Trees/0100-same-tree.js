/**
	@title 100. Same Tree
	@difficulty easy
    @url https://leetcode.com/problems/same-tree/
    
	@description
		Given the roots of two binary trees p and q, write a function to check if they are the same or not.
		Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

	@param {TreeNode} p
	@param {TreeNode} q
	@return {boolean}
 */

var isSameTreeRecursive = function (p, q) {
    return travel(p, q);

    function travel(root1, root2) {
        if (!root1 && !root2) {
            return true;
        }
        
        if (!root1 || !root2 || root1.val !== root2.val) {
            return false;
        }

        return travel(root1.left, root2.left) && travel(root1.right, root2.right);
    }
};
