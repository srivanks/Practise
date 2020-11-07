//[0, 0, 1, 0, 1, 1, 1, 0, 1, 1]
function go(a) {
    let start = 0;
    let sawZero = false;
    let changes = -1;
    let end = a.length - 1;
    let length = 0;
    let cur = 0;
    while (start <= end) {
        if (a[start] === 0) {
            if (sawZero) {
                cur = 1;
                length = 1;
                start++;
                sawZero = false;
            } else {
                sawZero = true;
                changes = start;
                cur = 1;
                start++;
                length = Math.max(length, cur);
            }
        } else {
            cur++;
            start++;
        }
    }
}


console.log(go([0, 0, 1, 0, 1, 1, 1, 0, 1, 1]));