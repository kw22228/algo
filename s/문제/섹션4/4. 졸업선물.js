/*
    1회에 한에 상품가격 반값으로 사용가능.(제일 큰 값에 쓰자)
    [상품가격, 배송비]
*/
const arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];
const money = 28;

function solution(arr, money) {
    let answer = 0;
    const sorted = arr.sort((a, b) => a[0] - b[0]);
}

console.log(solution(arr, money));
