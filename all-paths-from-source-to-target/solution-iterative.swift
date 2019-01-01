class Solution {
    func allPathsSourceTarget(_ graph: [[Int]]) -> [[Int]] {
        guard graph.count > 0 else { return [] }
        var paths = [[0]]
        var res = [[Int]]()
        
        while let path = paths.popLast() {
            for neighbor in graph[path.last!] {
                let newPath = path + [neighbor]
                if neighbor == graph.count - 1 {
                    res.append(newPath)
                } else {
                    paths.append(newPath)
                }
            }
        }
        
        return res
    }
}
