const x = -4;
const n = 2;

function solution(x, n) {
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer.push((i + 1) * x);
    }

    return answer;
}

console.log(solution(x, n));
