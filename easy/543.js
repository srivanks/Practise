function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var diameterOfBinaryTree = function (root) {
    let max = Number.MIN_SAFE_INTEGER;

    function util(root) {
        if (!root) return 0;
        let lH = util(root.left);
        let rH = util(root.right);
        max = Math.max(max, lH + rH);
        return Math.max(lH, rH) + 1;
    }

    util(root);
    return max === Number.MIN_SAFE_INTEGER ? 0 : max;
};

let r = new TreeNode(1);
r.left = new TreeNode(2);
r.right = new TreeNode(3);
r.left.left = new TreeNode(4);
r.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(r));