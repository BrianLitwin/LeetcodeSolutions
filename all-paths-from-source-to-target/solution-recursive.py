class Solution(object):
    def allPathsSourceTarget(self, graph):
        """
        :type graph: List[List[int]]
        :rtype: List[List[int]]
        """
        paths = []
        path = []
        iterate(0, graph, path, paths)
        return paths
        
def iterate(i, graph, path, paths): 
    newPath = path[:]
    newPath.append(i)
    
    if i == len(graph) - 1: 
        paths.append(newPath)
    else: 
        for node in graph[i]:
            iterate(node, graph, newPath, paths)
        
