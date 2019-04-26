/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var cache = {};
    return climb(n, cache)
};

function climb(n, cache) {
    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1; 
    } else if (cache.hasOwnProperty(n)) {
        return cache[n];
    } else {
        cache[n] =  climb(n - 1, cache) + climb(n - 2, cache);
        return cache[n]; 
    }
}
