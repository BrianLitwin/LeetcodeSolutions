
https://leetcode.com/problems/course-schedule-ii/

Notes -  
Sources: 
CTCI p. 250 
ADM p. 179 
ITA p. 612 
Relies on the graph being directed and acyclic (DAG)
The idea is to prune nodes w/ no dependencies, repeat

* Create a directed graph using a dict/map/array
* prune nodes w/ no incoming edges/dependencies and repeat 
