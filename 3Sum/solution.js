/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    var keys = new Set([]);
    var answers = [];

    nums.sort(function(a, b){ 
        return a - b
    })

    for (var n1 = 0; n1 < nums.length - 1; n1++) {
        n2 = n1 + 1; 
        n3 = nums.length - 1
        
        while (n2 < n3) {
            let sum = nums[n1] + nums[n2] + nums[n3];
            if (sum === 0) {
                let key = `${nums[n1]}/${nums[n2]}/${nums[n3]}`
                if (!keys.has(key)) {
                    answers.push([nums[n1], nums[n2], nums[n3]]);
                    keys.add(key);
                }
                n2++; 
                n3--;
            } else if (sum < 0) {
                n2++; 
            } else {
                n3--; 
            }
        }
    }
    
    return answers;
};


