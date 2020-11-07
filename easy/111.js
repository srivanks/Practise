function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var minDepth = function (root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 1;
    }
    if (!root.left) {
        return 1 + minDepth(root.right);
    }
    if (!root.right) {
        return 1 + minDepth(root.left);
    }

    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(minDepth(root));