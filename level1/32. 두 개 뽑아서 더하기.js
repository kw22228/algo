const numbers = [5, 0, 2, 7];

function solution(numbers) {
    const sumArr = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sumArr.push(numbers[i] + numbers[j]);
        }
    }

    return [...new Set(sumArr)].sort((a, b) => (a > b ? 1 : -1));
}

console.log(solution(numbers));
