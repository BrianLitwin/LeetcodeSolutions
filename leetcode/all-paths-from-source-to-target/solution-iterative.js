/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    var paths = [[0]];
    var a = [];
 
    while (paths.length > 0) {
        var path_ref = paths.pop()
        graph[path_ref[path_ref.length - 1]].forEach(function(index) {
            var path = path_ref.slice()
            path.push(index);
            if (index == graph.length - 1) {
                a.push(path)
            } else {
                paths.push(path);   
            }
        })
    }
    
    return a; 
};

