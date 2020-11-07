function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }
    return p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right);
}


let r = new TreeNode(1);
r.right = new TreeNode(2);
r.left = new TreeNode(3);

let s = new TreeNode(1);
s.right = new TreeNode(2);
s.left = new TreeNode(39);

console.log(isSameTree(r, s));