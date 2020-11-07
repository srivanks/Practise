function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var rangeSumBST = function (root, L, R) {
    if (!root) return 0;
    if (root.val < L) return rangeSumBST(root.right, L, R);
    if (root.val >= L && root.val <= R) return root.val
        + rangeSumBST(root.right, L, R)
        + rangeSumBST(root.left, L, R);
    if (root.val > R) return rangeSumBST(root.left, L, R);
};

function rangeSumBST2(root, L, R) {
    if (root == null) {
        return 0;
    }
    let sum = 0;
    if (root.val > L) {
        sum += rangeSumBST2(root.left, L, R);
    }
    if (root.val < R) {
        sum += rangeSumBST2(root.right, L, R);
    }
    if (root.val >= L && root.val <= R) {
        sum += root.val;
    }
    return sum;
}


function rangeSumBST3(root, L, R) {
    let sum = 0;

    function util(root, L, R) {
        if (root == null) {
            return;
        }
        if (root.val >= L && root.val <= R) {
            sum += root.val;
        }
        util(root.left, L, R, sum);
        util(root.right, L, R, sum);
    }

    util(root, L, R, sum);
    return sum;
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(18);

console.log(rangeSumBST(root, 7, 15));
console.log(rangeSumBST2(root, 7, 15));
console.log(rangeSumBST3(root, 7, 15, 0));
