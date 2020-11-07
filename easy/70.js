var climbStairs = function (n) {

    let dp = Array(n + 1).fill(-1);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};


var climbStairs2 = function (n) {
    if (n === 1) return 1;
    if (n === 3) return 2;
    let x = climbStairs(n - 1);
    let y = climbStairs(n - 3)
    console.log(x, y)
};
console.log(climbStairs2(7));

// console.log(climbStairs(3));