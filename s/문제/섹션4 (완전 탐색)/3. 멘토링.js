/*
    1. [멘토, 멘티] 멘토 > 멘티

    테스트횟수 만큼 돌아야함(3바퀴)

    2. 테스트횟수에서 전부다 멘토 > 멘티 여야 answer++;
    
*/
const arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];

function solution(test) {
    let answer = 0;
    let m = test.length; //세로
    let n = test[0].length; // 가로

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let count = 0;
            //탐색
            for (let k = 0; k < m; k++) {
                let pi = 0;
                let pj = 0;
                for (let s = 0; s < n; s++) {
                    if (test[k][s] === i) pi = s;
                    if (test[k][s] === j) pj = s;
                }

                if (pi < pj) count++;
            }

            if (count === m) answer++;
        }
    }

    return answer;
}

console.log(solution(arr));
