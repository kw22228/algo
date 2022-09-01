const clothes = [
    ['crow_mask', 'face'],
    ['blue', 'face'],
    ['black', 'face'],
];
function solution(clothes) {
    const obj = {};
    clothes.forEach(item => {
        if (!obj.hasOwnProperty(item[1])) {
            obj[item[1]] = [];
        }
        obj[item[1]].push(item[0]);
    });

    return (
        Object.values(obj)
            .map(value => value.length + 1)
            .reduce((pre, cur) => pre * cur, 1) - 1
    );
}

console.log(solution(clothes));

/*
    (a + 1) * (b + 1) * (c + 1) - 1
*/
