/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    var path = [];
    var paths = [];
    getPaths(graph, 0, path, paths);
    return paths; 
};

function getPaths(graph, index, path, paths) {
    var path = path.slice(); 
    path.push(index)
    
    if (index == (graph.length - 1)) {
        paths.push(path);
        return; 
    };

    graph[index].forEach(function(i) { 
        getPaths(graph, i, path, paths)
    });
}; 

