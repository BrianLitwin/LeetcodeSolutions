/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.left = nil
 *         self.right = nil
 *     }
 * }
 */
class Solution {
    func preorderTraversal(_ root: TreeNode?) -> [Int] {
        var n = root 
        var nodes = [TreeNode]()
        var a = [Int]()
        
        while n != nil || nodes.isEmpty == false {
            if let node = n {
                nodes.append(node)
                a.append(node.val)
                n = node.left 
                
            } else {
                n = nodes.removeLast().right 
            }
        }
        
        return a
    }
}
