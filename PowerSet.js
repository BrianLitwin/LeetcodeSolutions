/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

var answer = []; 
  answer.push([])
  for (var i = 0; i < nums.length; i++) {
    getPowerSet(nums, answer, i)
  }
 return answer
};

function getPowerSet(nums, arr, index) {
  var length = arr.length 
  for (var i = 0; i < length; i++) {
  var item = arr[i]
  var newArr = item.concat(nums[index])
    arr.push(newArr)
  }
}
