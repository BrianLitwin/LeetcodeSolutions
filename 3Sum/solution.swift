
class Solution {
    func threeSum(_ nums: [Int]) -> [[Int]] {
        guard nums.count > 2 else { return [] }
        var res = [[Int]]()
        var found = Set<String>()
        var nums = nums.sorted()
        
        for p1 in 0..<nums.count - 2 {
            var p2 = p1 + 1 
            var p3 = nums.count - 1 
            
            while p2 < p3 {
                var sum = nums[p1] + nums[p2] + nums[p3]
                if sum == 0 {
                    var key = "\(nums[p1]) \(nums[p2]) \(nums[p3])"
                    if !found.contains(key) {
                        found.insert(key)
                        res.append([nums[p1], nums[p2], nums[p3]])
                    }
                
                p2 += 1 
                p3 -= 1
                } else if sum < 0 {
                    p2 += 1 
                } else {
                    p3 -= 1
                }
            }
        }
        
        return res 
    }
}

