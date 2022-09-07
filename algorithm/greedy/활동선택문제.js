const activity = [
    [1, 1, 3],
    [2, 2, 5],
    [3, 4, 7],
    [4, 1, 8],
    [5, 5, 9],
    [6, 8, 10],
    [7, 9, 11],
    [8, 11, 14],
    [9, 13, 16],
];

const arr = ['1', '2'];

function Greedy(activity) {
    const result = [];
    const sortedAct = activity.sort((a, b) => a[2] - b[2]);

    let last = 0;
    sortedAct.forEach(act => {
        if (last < act[1]) {
            last = act[2];
            result.push(act);
        }
    });

    return result.map(r => r[0]);
}

console.log(Greedy(activity));
