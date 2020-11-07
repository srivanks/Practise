function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var increasingBST = function (root) {
    let dummy = new TreeNode(-1);
    let prev = dummy;

    function iBSTUtil(root) {
        if (!root) {
            return;
        }

        iBSTUtil(root.left);
        root.left = null;
        prev.right = root;
        prev = root;

        iBSTUtil(root.right);
    }

    iBSTUtil(root);
    return dummy.right;
};

function increasingBSTStack(root) {
    let result = new TreeNode(0);
    let ans = result;

    let stack = [];

    while (root || stack.length > 0) {
        while (root !== null) {
            stack.unshift(root);
            root = root.left;
        }
        if (stack.length > 0) {
            root = stack.shift();
            ans.right = new TreeNode(root.val);
            ans = ans.right;
            root = root.right;
        }
    }
    return result.right;
}

let r = new TreeNode(5);
r.left = new TreeNode(3);
r.right = new TreeNode(6);
r.left.left = new TreeNode(2);
r.left.right = new TreeNode(4);
r.left.left.left = new TreeNode(1);
r.right.right = new TreeNode(8);
r.right.right.right = new TreeNode(9);
r.right.right.left = new TreeNode(7);

// console.log(increasingBST(r))
console.log(increasingBSTStack(r))