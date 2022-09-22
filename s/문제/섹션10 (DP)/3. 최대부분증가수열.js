const arr = [5, 3, 7, 8, 6, 2, 9, 4];

function solution(arr) {
    let answer = 0;
    const len = arr.length;
    const dy = Array.from({ length: len }, () => 0);

    dy[0] = 1;
    for (let i = 1; i < len; i++) {
        let max = 0;

        for (let j = i - 1; j >= 0; j--) {
            // dy[j] > max ==> arr[j]보다 작은 숫자일때,
            // 그곳의 수열 갯수가 가장 큰것을 더해주면됨.
            if (arr[j] < arr[i] && dy[j] > max) {
                max = dy[j];
            }
        }
        dy[i] = max + 1;
        answer = Math.max(answer, dy[i]);
    }

    return answer;
}

console.log(solution(arr));
