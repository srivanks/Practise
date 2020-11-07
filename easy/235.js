function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var lowestCommonAncestor = function (root, p, q) {

    if (!p || !q) {
        return null;
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

console.log(lowestCommonAncestor(root, root.left, root.left.right));
// console.log(lowestCommonAncestor(root, root.left, root.right).val);