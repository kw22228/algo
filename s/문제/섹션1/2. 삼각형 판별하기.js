function solution(...args) {
    const sorted = args.sort((a, b) => a - b);

    return sorted[0] + sorted[1] > sorted[2];
}

console.log(solution(6, 7, 11));
