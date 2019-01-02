Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @BrianLitwin Sign out
1
0 0 BrianLitwin/LeetcodeSolutions
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
LeetcodeSolutions/binary-tree-postorder-traversal/solution.js
3dd9b28  4 minutes ago
@BrianLitwin BrianLitwin updates
     
34 lines (27 sloc)  609 Bytes

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var array = [];
    var n = root; 
    var answer = [];
    
    while (n != null || array.length > 0) {
        if (n != null) {
            array.push(n);
            answer.unshift(n.val);
            n = n.right; 
            
        } else {
            const last = array.pop();
            n = last.left 
        }
        
    }
    
    return answer;
};

© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.
