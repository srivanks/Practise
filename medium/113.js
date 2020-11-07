function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var pathSum = function (root, sum) {
    let gl = [];
    let res = [];
    let targetSum = 0;

    function pathSumUtil(root, sum, res, targetSum) {
        if (!root) {
            return res;
        }

        res.push(root.val);
        targetSum += root.val;

        if (!root.left && !root.right && sum === targetSum) {
            gl.push([...res]);
        }

        pathSumUtil(root.left, sum, res, targetSum);
        pathSumUtil(root.right, sum, res, targetSum);
        res.pop();

        return res;
    }

    pathSumUtil(root, sum, res, targetSum);
    return gl;
};

let r = new TreeNode(5);
r.left = new TreeNode(4);
r.right = new TreeNode(8);
r.right.right = new TreeNode(4);
r.right.left = new TreeNode(13);
r.right.right.right = new TreeNode(1);
r.right.right.left = new TreeNode(5);
r.left.left = new TreeNode(11);
r.left.left.left = new TreeNode(7);
r.left.left.right = new TreeNode(2);

let sum = 22;
console.log(pathSum(r, sum));