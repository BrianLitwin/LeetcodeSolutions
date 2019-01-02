 
class Solution {
    func isBalanced(_ root: TreeNode?) -> Bool {
        var bal = true 
        _ = depth(root, 0, &bal)
        return bal
    }

    func depth(_ node: TreeNode?, _ d: Int, _ bal: inout Bool) -> Int {
        guard bal else { return d }
        guard let node = node else { return d }
        let l = depth(node.left, d + 1, &bal)
        let r = depth(node.right, d + 1, &bal)
        if abs(l - r) > 1 {
            bal = false 
        }
        return max(l, r)
    }
}

