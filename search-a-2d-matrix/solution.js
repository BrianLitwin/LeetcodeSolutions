/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 ) {
        return false; 
    }
    
    var len = matrix[0].length
    
    var bs = (row) => {
        return binarySearch(row, target, 0, len - 1)
    }
    
    for (var i in matrix) {
        if (matrix[i][len - 1] >= target) {
            return bs(matrix[i]); 
        } 
    }
    return false 
};

function binarySearch(nums, targ, start, end) {
    if (start > end ) {
        return false 
    }
    
    const mid = parseInt((start + end) / 2)
    
    var searchLeft = () => {
        return binarySearch(nums, targ, start, mid - 1)
    }
    
    var searchRight = () => {
        return binarySearch(nums, targ, mid + 1, end)
    }
    
    if (nums[mid] === targ) {
        return true; 
    } else if (nums[mid] > targ) {
        return searchLeft()
    } else if (nums[mid] < targ) {
        return searchRight()
    } else {
        return false 
    }
}
