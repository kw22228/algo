const arr = [12, 77, 38, 41, 53, 92, 85];

function solution(arr) {
    const odd = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);
    const oddSum = odd.reduce((pre, cur) => pre + cur, 0);

    console.log(oddSum);
    console.log(odd[0]);
}

solution(arr);
