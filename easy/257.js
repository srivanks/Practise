function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var binaryTreePaths = function (root) {
    let gl = [];
    let res = [];

    function binaryTreeUtil(r, res) {
        if (!r) return;
        res.push(r.val);
        binaryTreeUtil(r.left, res);
        if (!r.left && !r.right) {
            gl.push(res.join('->'));
        }
        binaryTreeUtil(r.right, res);
        res.pop();
    }

    binaryTreeUtil(root, res);
    return gl;
};

let r = new TreeNode(1);
r.right = new TreeNode(3);
r.left = new TreeNode(2);
r.left.right = new TreeNode(5);

console.log(binaryTreePaths(r));