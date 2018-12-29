class Solution {
    var answers = [[Int]]()
    
    func combinationSum2(_ candidates: [Int], _ target: Int) -> [[Int]] {
        var currentArray = [Int]()
        cS(0, candidates.sorted(), target, &currentArray)
        return answers
    }
    
    func cS(
        _ index: Int,
        _ candidates: [Int],
        _ sum: Int,
        _ currentArray: inout [Int]
        ) {

        if sum == 0 {
            answers.append(currentArray)
        } 
        
        for i in index..<candidates.count {
            guard candidates[i] <= sum else { break }
            
            if i > 0 && candidates[i] == candidates[i - 1] && i != index {
                continue
            }
            
            currentArray.append(candidates[i])
            cS(i + 1, candidates, sum - candidates[i], &currentArray)
            currentArray.removeLast()
        }
    }
}



