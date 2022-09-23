const arr = [81, 58, 42, 33, 61];
const c = 259;

function solution(arr, c) {
    let answer = Number.MIN_SAFE_INTEGER;
    const len = arr.length;

    function DFS(v, sum) {
        if (sum > c) return;
        if (v === len) {
            answer = Math.max(answer, sum);
        } else {
            DFS(v + 1, sum + arr[v]);
            DFS(v + 1, sum);
        }
    }

    DFS(0, 0);

    return answer;
}

console.log(solution(arr, c));
