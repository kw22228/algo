const phone_number = '01033334444';

function solution(phone_number) {
    // return phone_number
    //     .split('')
    //     .reduce((cur, e, i, arr) => (cur += i >= arr.length - 4 ? e : '*'), '');

    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution(phone_number));
