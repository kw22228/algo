let arr = [5, 10, 66, 77, 54, 32, 11, 15];
let sortArr = [];

function getInsertIndex(sortArr, shift) {
    for (let i in sortArr) {
        if (sortArr[i] > shift) {
            return parseInt(i, 10);
        }
    }

    return sortArr.length;
}

while (true) {
    if (arr.length === 0) break;

    const shift = arr.shift();
    const index = getInsertIndex(sortArr, shift);

    sortArr.splice(index, 0, shift);
}

console.log(sortArr);
