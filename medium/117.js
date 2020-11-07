function TreeNode(val) {
    this.val = val;
    this.left = this.right = this.next = null;
}

var connect = function (root) {
    function util(root) {
    }

    util(root);
    return root;
};

let r = new TreeNode(1);
r.left = new TreeNode(2);
r.left.left = new TreeNode(4);
r.left.right = new TreeNode(5);
r.right = new TreeNode(3);
r.right.left = new TreeNode(6);
r.right.right = new TreeNode(7);

console.log(connect(r));