/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// could use an array too 

var findOrder = function(numCourses, prerequisites) {
    var workingGraph = []
    
    for (var i = 0; i < numCourses; i++) {
        workingGraph[i] = new Set(); 
    }
    
    for (req of prerequisites) {
        workingGraph[req[0]].add(req[1]);
    }
    
    var answer = [];
    var sources = []; 
    
    var processNode = (node) => {
        sources.push(node);
        answer.push(node);
        workingGraph[node] = null; 
    }
    
    for (i in workingGraph) {
        if (workingGraph[i].size === 0 ) {
            processNode(i)
        }
    }
    

    function processSources(sources) {
        for (var index in sources) {
            const s = parseInt(sources[0])
            for (i in workingGraph) {
                if (workingGraph[i] !== null && workingGraph[i]) {
                    workingGraph[i].delete(s)
                    if(workingGraph[i].size === 0) {
                       processNode(i)
                    }
                }
            }
            sources.shift();
        }
    }
    
    while (sources.length > 0) {
        processSources(sources)
    }
    
    for (node of workingGraph) {
        if (node != null) {
            return []; 
        }
    }
    
    return answer; 
};
