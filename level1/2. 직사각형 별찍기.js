process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(' ');
    const a = Number(n[0]);
    const b = Number(n[1]);
});

let answer = '';
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        answer += '*';
    }
    answer += '\n';
}

console.log(answer);
