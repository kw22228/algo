function solution(...args) {
    let answer = args[0];
    args.forEach(arg => {
        if (answer > arg) {
            answer = arg;
        }
    });

    return answer;
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));
