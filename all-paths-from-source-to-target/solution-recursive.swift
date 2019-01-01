class Solution {
    func allPathsSourceTarget(_ graph: [[Int]]) -> [[Int]] {
        guard !graph.isEmpty else { return [] }
        var res = [[Int]]()
        findPaths(0, graph.count - 1, [0], graph, &res)
        return res
    }
    
    func findPaths(_ i: Int, _ target: Int, _ path: [Int], _ graph: [[Int]], _ res: inout [[Int]]) {
        if i == target {
            res.append(path)
            return 
        }
        
        guard !graph[i].isEmpty else { return }
        
        for neighbor in graph[i] {
            findPaths(neighbor, target, path + [neighbor], graph, &res)
        }
    }
}


class Solution {
    func allPathsSourceTarget(_ graph: [[Int]]) -> [[Int]] {
        return add(graph, 0, [0], [[Int]]())
    }
    
    func add(
        _ graph: [[Int]], 
        _ index: Int, 
        _ path: [Int], 
        _ allPaths: [[Int]]
    ) -> [[Int]] {
        
        var allPaths = allPaths 
        
        for i in graph[index] {
            let newPath = path + [i]
            
            if i == graph.count - 1 {
                allPaths.append(newPath)
            }
            
            allPaths = add(graph, i, newPath, allPaths)
        }
        return allPaths 
    }
    
}


