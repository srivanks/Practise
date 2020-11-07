var constructRectangle = function (area) {
    let a = Math.ceil(Math.sqrt(area));
    while (area % a !== 0) {
        a--;
    }
    return [area / a, a];
};

console.log(constructRectangle(3))