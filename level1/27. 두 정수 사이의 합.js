const a = 3;
const b = 5;

function solution(a, b) {
    let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i;
    }

    return answer;
}

console.log(solution(a, b));
