var rob = function (nums) {
    let memo = new Array(nums.length).fill(0);
    return calculate(nums, 0, memo);
};

var calculate = function (nums, start, memo) {
    if (start > nums.length || !nums[start]) {
        return 0;
    }
    if (memo[start]) {
        return memo[start];
    }
    let include = nums[start] + calculate(nums, start + 2, memo);
    let exclude = calculate(nums, start + 1, memo);
    memo[start] = Math.max(include, exclude);
    return memo[start];
}

console.log(rob([1, 2, 1, 1]));