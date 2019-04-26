/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (const row of matrix) {
        if (row[row.length - 1] < target) { 
            continue 
        } 
        
        if (binarySearch(row, 0, row.length - 1, target)) { 
            return true 
        }
    }   
    
    return false 
};


function binarySearch(arr, start, end, targ) {
    const mid = Math.round((start + end) / 2 )

    if (start > end) {
        return false     
    } else if (arr[mid] == targ) {
        return true 
    } else if (arr[mid] < targ) {
        return binarySearch(arr, mid + 1, end, targ)
    } else {
        return binarySearch(arr, start, mid - 1, targ)
    }
}
