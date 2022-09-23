const coins = [1, 2, 5];
const m = 15;

function solution(coins, m) {
    let answer = Number.MAX_SAFE_INTEGER;
    const len = coins.length;

    function DFS(v, sum) {
        if (sum > 15) return;
        if (v > answer) return;
        if (sum === 15) {
            answer = Math.min(answer, v);
        } else {
            for (let i = 0; i < len; i++) {
                DFS(v + 1, sum + coins[i]);
            }
        }
    }

    DFS(0, 0);

    return answer;
}

console.log(solution(coins, m));
