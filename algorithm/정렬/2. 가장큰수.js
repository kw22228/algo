const numbers = [3, 30, 34, 5, 9];

function solution(numbers) {
    const maxNum = numbers.map(n => String(n)).sort((a, b) => b + a - (a + b));

    return maxNum[0] === '0' ? '0' : maxNum.join('');
}

console.log(solution(numbers));
