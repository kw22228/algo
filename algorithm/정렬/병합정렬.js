/*
O(nLogn);
가장 빠른 정렬.

//분할
[5, 10, 66, 77, 54, 32, 11, 15]
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]

//정복
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]

*/

let arr = [5, 10, 66, 77, 54, 32, 11, 15];

function mergeSort(arr) {
    const arrLength = arr.length;
    let result = [];

    if (arrLength <= 1) {
        return arr;
    }

    const pointer = parseInt(arrLength / 2, 10);
    const first = mergeSort(arr.slice(0, pointer));
    const second = mergeSort(arr.slice(pointer));

    while (first.length !== 0 && second.length !== 0) {
        result.push(first[0] < second[0] ? first.shift() : second.shift());
    }

    while (first.length !== 0) {
        result.push(first.shift());
    }

    while (second.length !== 0) {
        result.push(second.shift());
    }

    return result;
}

console.log(mergeSort(arr));
