
class Solution {
    func uniquePaths(_ m: Int, _ n: Int) -> Int {
        guard m > 0 && n > 0 else { return 0 }
        
        var row = Array.init(repeating: 1, count: m)
        var grid = Array.init(repeating: row, count: n)
        
        for i in 1..<n {
            for j in 1..<m {
                let prev = grid[i][j - 1]
                let t = grid[i - 1][j]
                grid[i][j] = prev + t
            }
        }
        return grid.last!.last!
    }
}

