const str = 'KKHSSSSSSSE';

function solution(str) {
    const answer = [];
    let c = '';
    let n = 1;

    str.split('').forEach(s => {
        if (s === c) {
            n++;
            return;
        }

        if (c && n > 1) answer.push(n);
        answer.push(s);
        c = s;
        n = 1;
    });

    return answer.join('');
}

console.log(solution(str));
