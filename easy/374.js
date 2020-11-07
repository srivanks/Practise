var search = function (start, end) {
    if (start > end) return -1;
    if (guess(start) === 0) {
        return start;
    }
    if (guess(end) === 0) {
        return end;
    }

    let mid = Math.ceil((start + end) / 2);
    if (guess(mid) === 0) {
        return mid;
    } else if (guess(mid) === -1) {
        return search(start, mid);
    } else {
        return search(mid + 1, end);
    }
}

var guessNumber = function (n) {
    return search(1, n);
};

guessNumber(n);