const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

function solution(n, lost, reserve) {
    // const sortedLost = lost.sort((a, b) => a - b);
    // const sortedReserve = reserve.sort((a, b) => a - b);

    // sortedLost.forEach(l => {
    //     if (sortedReserve.indexOf(l) !== -1) {
    //         const index = sortedReserve.indexOf(l);
    //         sortedReserve[index] = null;
    //     } else if (sortedReserve.indexOf(l - 1) !== -1) {
    //         const index = sortedReserve.indexOf(l - 1);
    //         sortedReserve[index] = null;
    //     } else if (sortedReserve.indexOf(l + 1) !== -1) {
    //         const index = sortedReserve.indexOf(l + 1);
    //         sortedReserve[index] = null;
    //     } else {
    //         n--;
    //     }
    // });

    // return n;

    const answer = Array(n).fill(1);

    reserve.forEach((r, i) => {
        answer[r - 1]++;
    });

    lost.forEach((r, i) => {
        answer[r - 1]--;
    });

    for (let i = 0, len = answer.length; i < len; i++) {
        if (answer[i] === 0 || answer[i] === 1) continue;

        if (i !== 0 && answer[i - 1] === 0) {
            answer[i - 1]++;
            answer[i]--;
        }

        if (answer[i] > 1 && i + 1 !== len && answer[i + 1] === 0) {
            answer[i + 1]++;
            answer[i]--;
        }
    }

    return answer.filter(a => a > 0).length;
}
console.log(solution(n, lost, reserve));
