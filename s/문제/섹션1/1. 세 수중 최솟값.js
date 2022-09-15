function solution(...args) {
    let answer = args[0];
    args.forEach(arg => {
        if (answer > arg) {
            answer = arg;
        }
    });

    return answer;
}
console.log(solution(51, 53, 25, 21));
