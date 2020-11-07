function iSS(n, k, result, start) {
    if (k === 0) {
        console.log(result);
        return;
    }
    for (let i = start; i <= n; i++) {
        result.push(i);
        iSS(n, k - 1, result, i + 1);
        result.pop();
    }
}

iSS(5, 3, [], 1);

// n = first n natural numbers
// k = size of the subsequence