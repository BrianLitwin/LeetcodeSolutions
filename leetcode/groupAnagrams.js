// https://leetcode.com/problems/group-anagrams/submissions/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    function sortLetters(s) {
        return s.split('').sort().join('')
    }
    
    var answer = {};
    
    strs.forEach((s) => {
        const sorted = sortLetters(s).toString()
        answer[sorted] = answer[sorted] ? answer[sorted].concat(s) : [s]
    })
    console.log(answer)
    
    var retAnswer = []
    for (var item in answer) {
        retAnswer.push(answer[item])
    }
    
    return retAnswer
};
