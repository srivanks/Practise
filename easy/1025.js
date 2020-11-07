var divisorGame = function (N) {
    if (N <= 1) {
        return false;
    }
    for (let x = 1; x < N; x++) {
        if (N % x === 0) {
            if (!divisorGame(N - x)) {
                return true;
            }
        }
    }
    return false;
};

var divisorGameDP = function (N) {
    let dp = Array(N + 1).fill(false);
    dp[0] = false;
    dp[1] = false;
    for (let i = 2; i <= N; i++) {
        for (let x = 1; x < i; x++) {
            if (i % x === 0) {
                dp[i] = !dp[i - x];
                break;
            }
        }
    }
    return dp[N];
};

// console.log(divisorGame(3));
console.log(divisorGameDP(2));