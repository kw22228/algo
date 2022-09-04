let arr = [10, 11, 9, 2, 3, 6, 5, 4];
const sortArr = [];

function getMin(arr) {
    return arr.reduce((pre, cur) => (pre > cur ? cur : pre), arr[0]);
}

function getIndex(arr, n) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) index = i;
    }

    return index;
}

function customSplice(arr, startIndex, count) {
    let spliceArr = [];
    const start = startIndex;
    const end = startIndex + count - 1;

    for (let i = 0; i < arr.length; i++) {
        if (i < start || i > end) spliceArr.push(arr[i]);
    }

    return spliceArr;
}

while (true) {
    if (arr.length === 0) break;
    const min = getMin(arr);
    sortArr.push(min);

    arr = customSplice(arr, getIndex(arr, min), 1);
}

console.log(sortArr);
