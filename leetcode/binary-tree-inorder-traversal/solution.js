/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [];
    var n = root; 
    var a = [];
    
    while (n != null || stack.length > 0) {
        if (n != null) {
            stack.push(n)
            n = n.left
            
        } else {
            var last = stack.pop()
            a.push(last.val)
            n = last.right 
        }
    }
    
    return a;
};
