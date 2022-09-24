const s = 5;
const e = 14;

function solution(s, e) {
    let answer = Number.MAX_SAFE_INTEGER;

    const jump = [-1, 1, 5];
    const ch = Array.from({ length: 10001 }, () => 0);
    const queue = [];

    queue.push(s);
    ch[s] = 1;
    let v = 0;

    while (queue.length) {
        const x = queue.shift();
        for (let nx of jump) {
        }
    }

    return answer;
}

console.log(solution(s, e));
