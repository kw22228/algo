const arr = [128, 460, 603, 40, 521, 137, 123];

function solution(arr) {
    // let newArr = [];
    // let answer = 0;

    // arr.forEach(s => {
    //     const sum = s
    //         .toString()
    //         .split('')
    //         .reduce((pre, cur) => pre + parseInt(cur, 10), 0);
    //     newArr.push({
    //         origin: s,
    //         sum,
    //     });
    // });

    // const sorted = newArr.sort((a, b) => b.sum - a.sum);
    // const max = sorted[0].sum;

    // const maxs = sorted.filter(sort => sort.sum === max);
    // maxs.forEach(max => {
    //     if (answer < max.origin) answer = max.origin;
    // });

    // return answer;

    let answer = 0;
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach(x => {
        let tmp = x;
        let sum = 0;

        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }

        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) answer = x;
        }
    });

    return answer;
}

console.log(solution(arr));
