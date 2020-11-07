function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var levelOrderBottom = function (root) {
    let q = [];
    let res = [];
    q.push(root);
    res.push([root.val]);
    while (q.length > 0) {
        let n = q.pop();
        let temp = [];
        if (n.left) {
            q.push(n.left);
            temp.push(n.left.val)
        }
        if (n.right) {
            q.push(n.right);
            temp.push(n.right.val);
        }
        if (temp.length > 0) {
            res.unshift(temp);
        }
    }
    return res;
};

let r = new TreeNode(3);
r.left = new TreeNode(9);
r.right = new TreeNode(20);
r.right.right = new TreeNode(7);
r.right.left = new TreeNode(15);

console.log(levelOrderBottom(r));