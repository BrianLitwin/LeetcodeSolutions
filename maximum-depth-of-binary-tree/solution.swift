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

//Iterative 
class Solution {
    func maxDepth(_ root: TreeNode?) -> Int {
        guard let root = root else { return 0 }
        var queue = [root]
        var depth = 0 
        
        while !queue.isEmpty {
            queue.forEach { node in 
                queue.remove(at: 0)
                if let left = node.left {
                    queue.append(left)
                }
                if let right = node.right {
                    queue.append(right)
                }
            }
            depth += 1 
        }
        
        return depth 
    }
}


// Rercursive 
class Solution {
     func maxDepth(_ root: TreeNode?) -> Int {
        return getDepth(root, 0)
    }
    
    func getDepth(_ node: TreeNode?, _ d: Int) -> Int {
        guard let node = node else { return d }
        return max(getDepth(node.left, d + 1), getDepth(node.right, d + 1))
    }
}

