/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0 
    }
    var arr = [root]
    var d = 0; 
    
    while (arr.length > 0) {
        var i; 
        var count = arr.length 
        
        for (i = 0; i < count; i++) {
            var node = arr[i]; 
            console.log(node.left !== null)
            if (node.left !== null) {
                arr.push(node.left)
            }
            if (node.right !== null) {
                arr.push(node.right)
            }
        }
        
        for (var a = 0; a < i; a++) {
            arr.shift()
        }
        
        d++; 
    }
    
    return d; 
};
