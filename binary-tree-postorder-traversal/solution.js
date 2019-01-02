
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
var postorderTraversal = function(root) {
    var array = [];
    var n = root; 
    var answer = [];
    
    while (n != null || array.length > 0) {
        if (n != null) {
            array.push(n);
            answer.unshift(n.val);
            n = n.right; 
            
        } else {
            const last = array.pop();
            n = last.left 
        }
        
    }
    
    return answer;
};

