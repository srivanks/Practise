// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// [-2, -1, 1, 5, 4, 6, 7, 1, 5]
var maxSubArray = function (nums) {
    let dp = Array(nums.length).fill(null);
    dp[0] = nums[0]; // -2
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        result = Math.max(result, dp[i]);
    }
    return result;
};


let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));


