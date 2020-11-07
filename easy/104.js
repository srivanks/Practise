function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));