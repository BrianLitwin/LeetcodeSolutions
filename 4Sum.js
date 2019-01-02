/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var answers = []; 
    var keys = new Set(); 
    
    var ascending = function(a, b) {
        return a -b;
    }; 
    
    nums.sort(ascending); 
    
    var getElements = function(...indices) {
        var array = [];
        indices.forEach(function(e) { array.push(nums[e]) })
        return array; 
    }
    
    var getSum = function(elements) {
        return elements.reduce(function(sum, n) {
            return sum + n; 
        }); 
    }
    
    var threeSum = function(e1, target) {
        var retAnswer = [];
        for (var n1 = e1 + 1; n1 < nums.length - 2; n1++) {
            var n2 = n1 + 1; 
            var n3 = nums.length - 1; 
            
            while (n2 < n3) {
                const elements = getElements(e1, n1, n2, n3); 
                const sum = getSum(elements);  
                if (sum === target) {
                    retAnswer.push(elements)
                    n2++; 
                    n3--; 
                    
                } else if (sum < target) {
                    n2++; 
                    
                } else {
                    n3--; 
                    
                }
            }
        }
        return retAnswer 
    }
    
    var stringify = function(arr) {
        return arr.reduce(function(string, e){
            return string + e.toString(); 
        })
    }
    
    for (var n1 = 0; n1 < nums.length - 3; n1++) {
        var retAnswers = threeSum(n1, target)
        for (answer of retAnswers) {
            const key = stringify(answer);
            if (!keys.has(key)) {
                keys.add(key); 
                answers.push(answer); 
            }
        }
    }
    
    return answers; 
};
