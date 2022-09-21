const len = 8;
const n = 3;

function solution(len, n) {
    const queue = Array.from({ length: len }, (_, i) => i + 1);

    while (queue.length > 1) {
        for (let i = 0; i < n; i++) {
            const shift = queue.shift();
            if (i !== n - 1) queue.push(shift);
        }
    }

    return queue[0];
}

console.log(solution(len, n));
