function catalanNumbers(n) {
    let res = 0;
    if (n <= 1) {
        return 1;
    }
    for (let i = 0; i < n; i++) {
        res += catalanNumbers(i) * catalanNumbers(n - i - 1);
    }
    return res;
}

console.log(catalanNumbers(9));