function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isBalanced = function (root) {
    let isBalanced = true;

    function util(root) {
        if (!root) return 0;

        let l = util(root.left);

        let r = util(root.right);

        if (Math.abs(l - r) > 1) {
            isBalanced = false;
        }

        return Math.max(l, r) + 1;
    }

    util(root);
    return isBalanced;
};

let r = new TreeNode(3);
r.left = new TreeNode(9);
r.right = new TreeNode(20);
r.right.left = new TreeNode(15);
r.right.right = new TreeNode(7);

console.log(isBalanced(r))