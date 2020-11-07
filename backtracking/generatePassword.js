function generatePassword(n, map, result) {
    if (n === 0) {
        //print password
        console.log(result.join(''));
        return;
    }
    for (let i = 0; i < n; i++) {
        let item = map[Math.floor(Math.random() * map.length)];
        result.push(item);
        generatePassword(n - 1, map, result);
        result.pop();
    }
}

let map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
    'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
    '!', '@', '#', '$', '%', '^'];

generatePassword(5, map, [], 0);