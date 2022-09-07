/*
    [[60, 50], [30, 70], [60, 30], [80, 40]]
    60  30  60  80      80
    50  70  30  40      70

    [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]
    10  12  8   14  5       14
    7   3   15  7   15      15


*/

const sizes = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
];

function solution(sizes) {
    const sortSizes = sizes.map(size => (size[0] < size[1] ? [size[1], size[0]] : size));

    const width = sortSizes.map(size => size[0]);
    const heigth = sortSizes.map(size => size[1]);

    return Math.max(...width) * Math.max(...heigth);
}

console.log(solution(sizes));
