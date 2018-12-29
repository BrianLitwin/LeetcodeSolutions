

/* From Carthage  */


/// Returns an array containing the topologically sorted nodes of the provided
/// directed graph, or nil if the graph contains a cycle or is malformed.
///
/// The sort is performed using
/// [Khan's Algorithm](https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm).
///
/// The provided graph should be encoded as a dictionary where:
/// - The keys are the nodes of the graph
/// - The values are the set of nodes that the key node has a incoming edge from
///
/// For example, the following graph:
/// ```
/// A <-- B
/// ^     ^
/// |     |
/// C <-- D
/// ```
/// should be encoded as:
/// ```
/// [ A: Set([B, C]), B: Set([D]), C: Set([D]), D: Set() ]
/// ```
/// and would be sorted as:
/// ```
/// [D, B, C, A]
/// ```
///
/// Nodes that are equal from a topological perspective are sorted by the
/// strict total order as defined by `Comparable`.
public func topologicalSort<Node: Comparable>(_ graph: [Node: Set<Node>]) -> [Node]? {
	// Maintain a list of nodes with no incoming edges (sources).
	var sources = graph
		.filter { _, incomingEdges in incomingEdges.isEmpty }
		.map { node, _ in node }

	// Maintain a working graph with all sources removed.
	var workingGraph = graph
	for node in sources {
		workingGraph.removeValue(forKey: node)
	}

	var sorted: [Node] = []

	while !sources.isEmpty {
		sources.sort(by: >) // not 100% why the sort ?
		let lastSource = sources.removeLast()
		sorted.append(lastSource)

		for (node, var incomingEdges) in workingGraph where incomingEdges.contains(lastSource) {
			incomingEdges.remove(lastSource)
			workingGraph[node] = incomingEdges

			if incomingEdges.isEmpty {
				sources.append(node)
				workingGraph.removeValue(forKey: node)
			}
		}
	}

	return workingGraph.isEmpty ? sorted : nil
}

