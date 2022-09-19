const str = 'g0en2T0s8eSoft';

function solution(str) {
    const newStr = str.replace(/[^0-9]/g, '');

    return parseInt(newStr, 10);
}

console.log(solution(str));
