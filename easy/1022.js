function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sumRootToLeaf = function (root) {
    let result = [];
    let sum = 0;

    function util(root, result) {
        if (!root) {
            return 0;
        }
        result.push(root.val);
        if (!root.left && !root.right) {
            sum += parseInt(result.join(''), 2);
        }
        util(root.left, result);
        util(root.right, result);
        result.pop();
    }

    util(root, result);
    return sum;
};


function sumRootToLeafEff(root, val) {
    if (!root) {
        return 0;
    }
    val = val * 2 + root.val;

    if (root.left === root.right) {
        return val;
    }

    return sumRootToLeafEff(root.left, val) + sumRootToLeafEff(root.right, val);
}

let r = new TreeNode(1);
r.left = new TreeNode(0);
r.left.left = new TreeNode(0);
r.left.right = new TreeNode(1);
r.right = new TreeNode(1);
r.right.right = new TreeNode(1);
r.right.left = new TreeNode(0);

console.log(sumRootToLeaf(r));

console.log(sumRootToLeafEff(r, 0));
