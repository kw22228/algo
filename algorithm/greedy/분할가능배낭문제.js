const test = [
    [1, 60, 10],
    [2, 100, 20],
    [3, 120, 30],
];

function fractionalKnapsack(item, limitWeigth) {
    // 무게대비 가치 순으로 정렬
    const sortedItem = item.sort((a, b) => b[1] / b[2] - a[1] / a[2]);
    let result = 0;

    sortedItem.forEach(item => {
        if (limitWeigth > 0) {
            if (limitWeigth >= item[2]) {
                //물건 무게가 제한보다 낮을 경우

                limitWeigth -= item[2];
                result += item[1];
            } else {
                //물건무게가 제한에 걸릴 경우.

                result += (item[1] / item[2]) * limitWeigth;
                limitWeigth = 0;
            }
        } else {
            return;
        }
    });

    return result;
}

// array, 무게제한
console.log(fractionalKnapsack(test, 50));
