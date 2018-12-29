class Solution {
    func maxDepth(_ root: TreeNode?) -> Int {
        var md = 0
        getMax(root, 1, &md)
        return md
    }
    
    func getMax(_ n: TreeNode?, _ depth: Int, _ maxDepth: inout Int) {
        guard let n = n else { return }
        
        //when you find a leaf, recalc max depth 
        if n.left == nil && n.right == nil {
            maxDepth = max(depth, maxDepth)
        }
        
        getMax(n.left, depth + 1, &maxDepth)
        getMax(n.right, depth + 1, &maxDepth)
    }
}
