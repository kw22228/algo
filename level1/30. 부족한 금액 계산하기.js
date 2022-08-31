const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
    let totalM = 0;
    for (let i = 1; i <= count; i++) {
        totalM += price * i;
    }

    return totalM > money ? totalM - money : 0;
}

console.log(solution(price, money, count));
