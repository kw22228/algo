const str = 'gooG';

function solution(str) {
    // let reverse = str.split('').reverse().join('');

    // return str.toLowerCase() == reverse.toLowerCase() ? 'Yes' : 'No';

    let answer = 'Yes';
    const lowStr = str.toLowerCase();
    const len = lowStr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (lowStr[i] !== lowStr[len - 1 - i]) answer = 'No';
    }

    return answer;
}

console.log(solution(str));
