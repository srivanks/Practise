function go(a) {
    let mid = 0;
    let start = 0;
    let pivot = 1;
    let end = a.length - 1;

    while (mid <= end) {
        if (a[mid] < pivot) { // 0
            [a[start], a[mid]] = [a[mid], a[start]];
            start++;
            mid++;
        } else if (a[mid] > pivot) {// 2
            [a[end], a[mid]] = [a[mid], a[end]];
            end--;
        } else {// 1
            mid++;
        }
    }
    return a;
}

console.log(go([0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]));