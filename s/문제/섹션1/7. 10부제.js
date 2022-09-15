const day = 3;
const carNumbers = [25, 23, 11, 47, 53, 17, 33];

function solution(day, carNumbers) {
    return carNumbers.filter(carNumber => carNumber % 10 === day).length;
}

console.log(solution(day, carNumbers));
