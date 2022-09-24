const arr = [2, 4, 5, 8, 12];
const k = 3; // 3개 뽑기
const m = 6; // 6의 배수

function solution(arr, k, m) {
    let answer = 0;

    const len = arr.length;

    function DFS(v, s, sum) {
        if (v === k) {
            if (sum % m === 0) answer++;
        } else {
            for (let i = s; i < len; i++) {
                DFS(v + 1, i + 1, sum + arr[i]);
            }
        }
    }

    DFS(0, 0, 0);
    return answer;
}

console.log(solution(arr, k, m));
