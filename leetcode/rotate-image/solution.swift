func rotate(_ matrix: inout [[Int]]) {
    for row in 0..<matrix.count/2 {
        let last = matrix.count - 1 - row
        
        for col in row..<last {
            let offset = col - row
            
            // store the top item
            let top = matrix[row][col]
            
            // top is now left
            matrix[row][col] = matrix[last - offset][row]
            // left is now bottom
            matrix[last - offset][row] = matrix[last][last - offset]
            // bottom is now right
            matrix[last][last - offset] = matrix[col][last]
            // right is now top
            matrix[col][last] = top
        }
    }
}


