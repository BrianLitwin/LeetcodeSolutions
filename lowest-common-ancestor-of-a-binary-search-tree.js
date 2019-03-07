// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
};

function isEqual(n1, n2) {
    if (n1 === null && n2 === null) {
        return true 
    }
    
    if (n1 === null || n2 === null) {
        return false 
    }
    
    
  
    return n1.val == n2.valu && 
      isEqual(n1.left, n2.left) && 
      isEqual(n1.right, n2.right)
}
