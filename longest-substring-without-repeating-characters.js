// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// note: this seems like a really inefficient solution 


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const letters = s.split('')
    const l = letters.length 
    var max = 0 
    
    letters.forEach((letter, index) => {
        var newArray = letters.slice(index, l);
        var found = new Map();
        var count = 0;
        
        for (letter of newArray) {
            if (found.has(letter)) {
                break 
            }
            found.set(letter, 0)
            count += 1
        }
        
        if (count > max) {
            max = count 
        }
        
    })
    
    return max
};
