function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function areIdentical(r1, r2) {
    if (!r1 && !r2)
        return true;

    if (r1 || r2)
        return false;
    return (r1.val === r2.val
        && areIdentical(r1.left, r2.left)
        && areIdentical(r1.right, r2.right));
}

var isSubtree = function (s, t) {
    if (s == null)
        return true;
    if (t == null)
        return false;
    if (areIdentical(s, t))
        return true;
    return isSubtree(s.left, t.left)
        || isSubtree(s.right, t.right);
};

let s = new TreeNode(3);
s.left = new TreeNode(4);
s.left.left = new TreeNode(1);
s.right = new TreeNode(5);
s.right.left = new TreeNode(2);

let t = new TreeNode(3);
t.left = new TreeNode(1);
t.right = new TreeNode(2);

console.log(isSubtree(s, t));