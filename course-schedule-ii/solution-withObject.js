/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 
var findOrder = function(numCourses, prerequisites) {
    var workingGraph = {}; 
    var key = (n) => { return n.toString() }
    
    for (var i = 0; i < numCourses; i++) {
        workingGraph[key(i)] = new Set(); 
    }
    
    for (req of prerequisites) {
        workingGraph[key(req[0])].add(req[1]);
    }
    
    var answer = [];
    var sources = [];
    console.log(workingGraph)
    
    var process = (node) => {
        sources.push(node);
        answer.push(node);
        delete workingGraph[key(node)];
    }
    
    var getSources = () => {
        for (var node in workingGraph) {
            if (workingGraph[node].size === 0) {
                process(node)
            }
        }
    }
    
    getSources();
    
    function proc(sources) {
        for (var index in sources) {
            const s = parseInt(sources[0])
            for (var n in workingGraph) {
                if (workingGraph[n].has(s)) {
                    workingGraph[n].delete(s)
                    if(workingGraph[key(n)].size === 0) {
                       process(n)
                    }
                }
            }
            sources.shift();
        }
    }
    
    while (sources.length > 0) {
        proc(sources)
    }
    console.log(answer)
    
    return Object.keys(workingGraph).length === 0 ? answer : []; 
    
};
