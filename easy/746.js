let g = [];
var minCostClimbingStairs = function (cost, start, result) {

    let dp = Array(cost.length).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};

let cost = [10, 15, 25];
console.log(minCostClimbingStairs(cost, -1, 0));
