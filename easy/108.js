function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function (nums) {
    return sortedArrayToBSTUtil(nums, 0, nums.length - 1);
}

function sortedArrayToBSTUtil(nums, start, end) {
    if (start > end) {
        return null;
    }

    let mid = Math.ceil((start + end) / 2);
    let node = new TreeNode(nums[mid]);

    node.left = sortedArrayToBSTUtil(nums, start, mid - 1);
    node.right = sortedArrayToBSTUtil(nums, mid + 1, end);

    return node;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));