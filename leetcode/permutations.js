// https://leetcode.com/problems/permutations/
// CTCI 8.7

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const getPerms = (nums, cur, ans) => {
    if (nums.length === 0) {
        ans.push(cur)
    }    

   nums.forEach((num, i) => {
        const newArr = nums.slice()
        newArr.splice(i, 1)
        getPerms(newArr, cur.concat(num), ans)
   }) 
}

var permute = function(nums) {
    var ans = []
    getPerms(nums, [], ans)
    return ans 
};
