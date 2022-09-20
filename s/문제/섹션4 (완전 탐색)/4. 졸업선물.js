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
const total = 28;

function solution(arr, total) {
    let answer = Number.MIN_SAFE_INTEGER;
    const sorted = arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    const len = sorted.length;

    for (let i = 0; i < len; i++) {
        // 할인권 사용 후 남은 돈
        let money = total - (sorted[i][0] / 2 + sorted[i][1]);
        let count = 1;

        //나머지 구매
        for (let j = 0; j < len; j++) {
            if (j !== i) {
                //상품 가격
                const price = sorted[j][0] + sorted[j][1];

                //상품가격+배송비가 남은 돈 보다 크지 않다면.
                if (price <= money) {
                    money -= price;
                    count++;
                }
            }

            if (answer < count) answer = count;
        }
    }

    return answer;
}

console.log(solution(arr, total));
