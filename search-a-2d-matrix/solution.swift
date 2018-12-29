class Solution {
    func searchMatrix(_ matrix: [[Int]], _ target: Int) -> Bool {
        if matrix.isEmpty || matrix[0].isEmpty { return false }
        
        for row in matrix {
            if row[0] > target { continue }
            if bs(row, 0, row.count - 1, target) { return true }
        }
        
        return false
    }
    
    func bs(_ array: [Int], _ start: Int, _ end: Int, _ target: Int) -> Bool {
        guard start < end else { return array[start] == target }
        let middle = (start + end) / 2
        if array[middle] == target { return true }
        if array[middle] > target {
            return bs(array, 0, middle, target)
        } else {
            return bs(array, middle + 1, end, target)
        }
    }
}
