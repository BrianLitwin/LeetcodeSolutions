
int maxDepth(struct TreeNode* root) {
    return max_d(root, 0);
}

int max_d(struct TreeNode *node, int depth) {
    if (node == NULL) {
        return depth; 
    }
    
    int rightDepth = max_d(node->right, depth + 1);
    int leftDepth = max_d(node->left, depth + 1);
    
    if (rightDepth >= leftDepth) {
        return rightDepth; 
    } else {
        return leftDepth; 
    }
    
}
