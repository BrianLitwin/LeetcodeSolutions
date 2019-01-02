
class Solution {
    func isValidBST(_ root: TreeNode?) -> Bool {
        var valid = true 
        return isvalid(root, Int.min, Int.max, &valid)
        return valid 
    }
    
    func isvalid(_ node: TreeNode?, 
                 _ min: Int, 
                 _ max: Int, 
                 _ valid: inout Bool
        ) -> Bool {
        guard valid == true else { return false }
        guard let node = node else { return true }
        if node.val >= max || node.val <= min { return false }
        let left = isvalid(node.left, min, node.val, &valid)
        let right = isvalid(node.right, node.val, max, &valid)
        guard left && right else { 
            valid = false 
            return false 
        }
        return true 
    }
    
}

