function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right)
}

var isUnivalTree = function (root) {
    if (!root) {
        return true;
    }

    function isUnivalTreeUtil(root, val) {
        if (!root) {
            return true;
        }
        if (root.val !== val) {
            return false;
        }
        return isUnivalTreeUtil(root.left, val) && isUnivalTreeUtil(root.right, val);
    }

    return isUnivalTreeUtil(root, root.val)
};

let r = new TreeNode(1);
r.left = new TreeNode(1);
r.right = new TreeNode(1);
r.left.left = new TreeNode(1);
r.left.right = new TreeNode(1);
r.right.right = new TreeNode(1);

console.log(isUnivalTree(r));