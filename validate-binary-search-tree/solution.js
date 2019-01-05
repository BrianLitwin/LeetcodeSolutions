/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

return validate(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)

function validate(node, max, min) {
    
    if (node === null) {
        return true 
    }
    
    var valid = () => {
        return node.val < max && node.val > min 
    } 
    
    var leftIsValid = () => { 
        return validate(node.left, node.val, min)
    }
    
    var rightIsValid = () => {
        return validate(node.right, max, node.val)
    }
    
    const isValid = valid() && leftIsValid() && rightIsValid()  
    return isValid;
  }
    
}
