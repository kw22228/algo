const coins = [1, 2, 5];
const m = 15;

function solution(m, coins) {
    const dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);

    dy[0] = 0;
    for (let i = 1; i < coins.length; i++) {
        for (let j = coins[i]; j <= m; j++) {
            dy[j] = Math.min(dy[j], dy[j - coins[i]] + 1);
        }
    }
    return dy[m];
}

console.log(solution(m, coins));
