var maxDepth = function(root) {
    if (root === null) {
        return 0 
    }
    var arr = [root]
    var d = 0; 
    
    while (arr.length > 0) {
        const count = arr.length 
        var i = 0;
        while (i < count) {
            const node = arr[0]
            
            if (node.left !== null) {
                arr.push(node.left)
            }
            if (node.right !== null) {
                arr.push(node.right)
            }
            arr.shift()
            i++;
        }
        
        d++; 
    }
    return d
};
