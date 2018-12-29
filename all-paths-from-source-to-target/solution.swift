
// Iterative 
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

// Recursive 
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
