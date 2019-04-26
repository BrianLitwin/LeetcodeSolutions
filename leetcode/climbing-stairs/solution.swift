class Solution {
    func climbStairs(_ n: Int) -> Int {
        var cache = Array.init(repeating: 0, count: n + 1)
        return helper(n, &cache)
    }
    
    func helper(_ n: Int, _ cache: inout [Int]) -> Int {
        switch n {
            case 0: return 1 
            case -1: return 0 
            default: 
                if cache[n] != 0 {
                    return cache[n]
                } else {
                    cache[n] = helper(n - 1, &cache) + helper(n - 2, &cache)
                    return cache[n]
                }
            
        }
    }   
}
