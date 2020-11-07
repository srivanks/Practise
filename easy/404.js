function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function sumOfLeftLeaves(root) {
    return sumOfLeftLeavesUtil(root, false);
}

var sumOfLeftLeavesUtil = function (root, isLeft) {
    if (!root) return 0;
    if (isLeft && !root.left && !root.right) return root.val;

    return sumOfLeftLeavesUtil(root.left, true) + sumOfLeftLeavesUtil(root.right, false);
};


let root = new TreeNode(1);
root.right = new TreeNode(20);
root.right.right = new TreeNode(7);
root.right.left = new TreeNode(15);
root.left = new TreeNode(9);

console.log(sumOfLeftLeaves(root, false));
