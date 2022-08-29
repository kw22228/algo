const s = 'Zbcdefg';

function solution(s) {
    return s.split('').sort((a, b) => {
        if (a > b) return -1;
    });
}

console.log(solution(s));
