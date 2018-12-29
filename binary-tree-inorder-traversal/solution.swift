
class Solution {
    func inorderTraversal(_ root: TreeNode?) -> [Int] {
        var result = [Int]()
        var stack = [TreeNode]()
        var node = root 
        
        while !stack.isEmpty || node != nil {
            // check to see if the node is nil 
            // if its not nil, we keep traversing 
            // if it is nil, we start going backwards by popping from the stack 
            // keep node one ahead of stack 
            
            if let strongNode = node {
                stack.append(strongNode)
                node = strongNode.left 
                
            } else {
                
                let strongNode = stack.removeLast()
                result.append(strongNode.val)
                node = strongNode.right 
                
            }   
        }
        
        return result 
    }
}

