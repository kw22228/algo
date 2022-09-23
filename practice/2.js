const n = 3;

function solution(n) {
    let answer = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i + 1; j++) {
            answer += '*';
        }

        answer += '\n';
    }

    return answer;
}

console.log(solution(n));
