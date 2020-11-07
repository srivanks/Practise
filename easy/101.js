function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var isSymmetric = function (root) {

    function isSymmetricUtil(node1, node2) {
        if (!node1 && !node2) {
            return true;
        }
        if (!node1 || !node2) {
            return false;
        }
        if (node1.val !== node2.val) {
            return false;
        }
        return isSymmetricUtil(node1.left, node2.right) && isSymmetricUtil(node1.right, node2.left);
    }

    return isSymmetricUtil(root, root);
};

let r = new TreeNode(1);
r.left = new TreeNode(2);
r.right = new TreeNode(2);
r.right.left = new TreeNode(4);
r.right.right = new TreeNode(3);
r.left.left = new TreeNode(3);
r.left.right = new TreeNode(4);

console.log(isSymmetric(r));