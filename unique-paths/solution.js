/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var matrix = []; 
    
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        
        for (var j = 0; j < m; j++) {
            var set = (c) => { matrix[i][j] = c}
            if (i === 0 || j === 0) {
                set(1)
            } else {
                set(0)
            }
        }
    }
    
    console.log(matrix)
    
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < m; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1] 
        }
    }
    
    return matrix[n - 1][m - 1]
};
