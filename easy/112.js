function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var hasPathSum = function (root, sum) {
    if (!root) {
        return (sum === 0);
    }
    if (!root.left && !root.right)
        return (sum === root.val);
    let currentSum = sum - root.val;
    if (hasPathSum(root.left, currentSum)) {
        return true;
    }
    if (hasPathSum(root.right, currentSum)) {
        return true;
    }
    return false;
};

let root = new TreeNode(5);
root.right = new TreeNode(4);
root.right.right = new TreeNode(11);
root.right.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(2);
root.left = new TreeNode(8);
root.left.right = new TreeNode(4);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(1);

console.log(hasPathSum(root, 22));