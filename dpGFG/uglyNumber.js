function ugly(num, start, result, k) {
    if (start % 2 === 0 || start % 3 === 0 || start % 5 === 0) {
        console.log('Number tested:: ', start);
        k++;
        console.log('Count:: ', k);
        if (num === k) {
            console.log(start);
            return start;
        }
    }
    start += 1;
    ugly(num, start++, result, k);
}

let num = 150;
console.log(ugly(num, 1, 1, 1));