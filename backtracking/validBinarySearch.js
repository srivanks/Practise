function TreeNode(val) {
    this.data = val;
    this.left = this.right = null;
}

function validBinarySearch(root) {
    if (!root) {
        return false;
    }
    if (root.left && root.left.data > root.data) {
        return false;
    }
    if (root.right && root.right.data < root.data) {
        return false;
    }
    let left = validBinarySearch(root.left);
    let right = validBinarySearch(root.right);
    return left && right;
}

let tree = new TreeNode(80);
tree.data = new TreeNode(4);
tree.data.left = new TreeNode(2);
tree.data.right = new TreeNode(5);
tree.data.left.left = new TreeNode(1);
tree.data.left.right = new TreeNode(3);

console.log(validBinarySearch(root));