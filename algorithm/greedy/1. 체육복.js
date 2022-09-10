const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

function solution(n, lost, reserve) {
    const sortedLost = lost.sort((a, b) => a - b);
    const sortedReserve = reserve.sort((a, b) => a - b);

    sortedLost.forEach(l => {
        if (sortedReserve.indexOf(l) !== -1) {
            const index = sortedReserve.indexOf(l);
            sortedReserve[index] = null;
        } else if (sortedReserve.indexOf(l - 1) !== -1) {
            const index = sortedReserve.indexOf(l - 1);
            sortedReserve[index] = null;
        } else if (sortedReserve.indexOf(l + 1) !== -1) {
            const index = sortedReserve.indexOf(l + 1);
            sortedReserve[index] = null;
        } else {
            n--;
        }
    });

    return n;
}
console.log(solution(n, lost, reserve));
