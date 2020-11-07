function bellNumbers(n, start, res, cc) {
    if (start === n + 1) {
        console.log(res);
        cc.push(res);
        return;
    }
    for (let i = start; i <= n; i++) {
        res.push(i);
        bellNumbers(n, i + 1, res, cc);
        res.pop();
    }
}

let cc = [];
bellNumbers(3, 1, [], cc);
console.log(cc);