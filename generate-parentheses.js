// https://leetcode.com/problems/generate-parentheses/
// CTCI 8.9 


/**
 * @param {number} n
 * @return {string[]
 
 The idea is that there are two options at every step: at a L or R paren. 
 You can only add an R if the number of L's is greater than the number of R's. 
 
 */

var generateParenthesis = function(n) {
    var answer = [];
    getParens(n, 0, 0, [], answer)
    return answer 
};

function getParens(max, l, r, arr, answer) {
  if (r < l && r < max) {
    var array = arr.slice()
    array.push(")")
    getParens(max, l, r + 1, array, answer)
  }

  if (l < max) {
    var array = arr.slice()
    array.push("(")
    getParens(max, l + 1, r, array, answer)
  }

  if (l === max && r === max) {
    answer.push(arr.join(""))
  }
}
