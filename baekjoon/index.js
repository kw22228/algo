function solution(input) {}

const input = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', line => {
        input.push(line);
    })
    .on('close', () => {
        console.log(solution(input));
        process.exit();
    });
