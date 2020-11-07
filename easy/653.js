function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var dfs = function (root, k, set) {
    if (!root) {
        return false;
    }
    if (set.indexOf(k - root.val) > -1) {
        return true;
    }
    set.push(root.val);
    return dfs(root.right, k, set) || dfs(root.left, k, set);
}

var findTarget = function (root, k) {
    return dfs(root, k, [])
};

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);

console.log(findTarget(root, 9));
