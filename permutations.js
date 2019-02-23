// https://leetcode.com/problems/permutations/
// CTCI 8.7

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    generatePermute(nums, [], result);
    
    return result;
};

var generatePermute = function(nums, currentResult, finalResult) {
    if(nums.length === 0) {
        finalResult.push(currentResult.slice());
        return;
    }
    
    nums.forEach((num, i) => {
        var newNums = nums.slice()
        newNums.splice(i, 1)
        var newCurrentResult = currentResult.slice()
        newCurrentResult.push(num)
        generatePermute(newNums, newCurrentResult, finalResult)
    })
}
