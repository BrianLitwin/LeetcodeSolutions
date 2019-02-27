// https://leetcode.com/problems/generate-parentheses/
// CTCI 8.9 


/**
 * @param {number} n
 * @return {string[]}
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
