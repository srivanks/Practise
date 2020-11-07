function main(arr, sum) {
    let dic = [];

    for (let i = 0; i < arr.length; i++) {
        let next = sum - arr[i];
        if (dic.includes(next)) {
            console.log(arr.indexOf(next), i);
        }
        dic.push(arr[i]);
    }
}

main([2, 7, 11, 15], 9);
