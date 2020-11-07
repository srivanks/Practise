function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var trimBST = function (root, L, R) {
    if (!root) return null;
    if (root.val < L) return trimBST(root.right, L, R);
    if (root.val > R) return trimBST(root.left, L, R);
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);

    return root;
};

let r = new TreeNode(3);
r.left = new TreeNode(0);
r.right = new TreeNode(4);
r.left.right = new TreeNode(2);
r.left.right.left = new TreeNode(1);

console.log(trimBST(r, 1, 3));