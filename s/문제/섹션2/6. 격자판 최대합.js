let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];

function solution(arr) {
    let sum = 0;

    //1. 가로 합
    const answer1 = [];
    arr.forEach((a, index) => {
        sum = a.reduce((pre, cur) => pre + cur, 0);
        answer1.push(sum);
    });

    //2. 세로 합
    const answer2 = Array.from({ length: arr[0].length }, () => Number(0));
    arr.forEach((a, index) => {
        a.forEach((n, i) => {
            answer2[i] += n;
        });
    });

    //3, 대각선
    const answer3 = [];

    const answer = [...answer1, ...answer2];

    console.log(answer);
}

console.log(solution(arr));
