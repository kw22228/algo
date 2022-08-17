const x = 10;

function solution(x) {
    return (
        x %
            String(x)
                .split('')
                .reduce((cur, n) => (cur += Number(n)), 0) ===
        0
    );
}

console.log(solution(x));
