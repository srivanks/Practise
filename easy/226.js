function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function inorder(root) {
    if (!root) {
        return;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}


var invertTree = function (root) {
    if (root == null) {
        return [];
    }

    let t = root.left;
    root.left = root.right;
    root.right = t;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

let r = new TreeNode(4);
r.left = new TreeNode(2);
r.right = new TreeNode(7);
r.right.left = new TreeNode(6);
r.right.right = new TreeNode(9);
r.left.left = new TreeNode(1);
r.left.right = new TreeNode(3);

let x = invertTree(r);
console.log(x);
