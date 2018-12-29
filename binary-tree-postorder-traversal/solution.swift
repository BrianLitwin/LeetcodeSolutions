class Solution {
    func postorderTraversal(_ root: TreeNode?) -> [Int] {        
        var res = [Int]()
        var stack = [TreeNode]()
        var node = root 
        
        while !stack.isEmpty || node != nil {
            if node != nil {
                res.insert(node!.val, at: 0)
                stack.append(node!)
                node = node!.right 
                
            } else {
                node = stack.removeLast().left 
            }
        }
        
        return res 
    }
}


