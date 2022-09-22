const arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
];

function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];
    for (let x of arr) {
        T_line.push([x[0], 's']); //들어오는 시간
        T_line.push([x[1], 'e']); //나가는 시간
    }

    // 시간순으로 정렬 (시간이 같은경우 나가는 시간이 먼저 와야함.)
    T_line.sort((a, b) => (a[0] === b[0] ? a[1].charCodeAt() - b[1].charCodeAt() : a[0] - b[0]));

    let count = 0;
    for (let x of T_line) {
        if (x[1] === 's') {
            count++;
            answer = Math.max(answer, count);
        } else {
            count--;
        }
    }

    return answer;
}

console.log(solution(arr));
