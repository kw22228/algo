const arr = [11, 7, 5, 6, 10, 9];

function solution(arr) {
    // const len = arr.length;

    // for (let i = 1; i < len; i++) {
    //     let tmp = arr[i];
    //     let j;
    //     for (j = i - 1; j >= 0; j--) {
    //         if (arr[j] > tmp) arr[j + 1] = arr[j];
    //         else break;
    //     }

    //     arr[j + 1] = tmp;
    // }

    // return arr;

    const len = arr.length;

    for (let i = 1; i < arr.length; i++) {
        let target = arr[i];
        let j;

        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > target) arr[j + 1] = arr[j];
            else break;
        }

        arr[j + 1] = target;
    }

    return arr;
}

console.log(solution(arr));
