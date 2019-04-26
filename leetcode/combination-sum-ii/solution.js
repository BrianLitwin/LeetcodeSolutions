/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var paths = []
    var keys = new Set()
    iterate(0, candidates, target, [], paths, keys)
    return paths
};

function iterate(index, nums, target, path, paths, keys) {
  
    if (target === 0) {
        const key = path.sort().reduce((string, next) => { return string + next}, "")
        console.log( key)
        if (!keys.has(key)) {
            paths.push(path)
            keys.add(key)
        }
    }
    
    for (var i = index; i < nums.length; i++) {
        if (target < 0) { 
            break 
        }
        
        iterate(i + 1, nums, target - nums[i], path.concat([nums[i]]), paths, keys)
    }
}
