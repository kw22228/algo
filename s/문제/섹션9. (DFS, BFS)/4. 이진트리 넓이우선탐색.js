function solution() {
    const answer = [];

    const queue = [];
    queue.push(1);

    while (queue.length) {
        const v = queue.shift();
        answer.push(v);

        for (let x of [v * 2, v * 2 + 1]) {
            if (x > 7) continue;

            queue.push(x);
        }
    }

    return answer;
}

console.log(solution());
