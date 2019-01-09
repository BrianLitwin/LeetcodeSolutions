/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) { return false }
    var paths = [];
    var currentPaths = [[root]]; 
    
    while (currentPaths.length > 0) {
        const count = currentPaths.length 
        
        for (var i = 0; i < count; i++) {
            const path = currentPaths[0]
            const last = path[path.length - 1]
            if (isLeaf(last)) {
                paths.push(path)
            }
            if (last.left !== null) {
                currentPaths.push(path.concat([last.left]))
            }  
            if (last.right !== null) {
                currentPaths.push(path.concat([last.right]))
            }
            currentPaths.shift()
        }
    }
    
    for (path of paths) {
        const s = path.reduce((sum, next) => {
            return sum + next.val 
        }, 0)
        
        if (s === sum) {
            return true 
        }
    }
    
    return false 
};

var isLeaf = (node) => {
    return node.left == null && node.right == null; 
}
