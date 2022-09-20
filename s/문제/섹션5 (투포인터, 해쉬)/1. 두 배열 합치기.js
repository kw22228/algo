const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

function solution(arr1, arr2) {
    // const answer = [...arr1];
    // arr2.forEach(arr => answer.push(arr));

    // return answer.sort();

    // return [...arr1, ...arr2].sort((a, b) => a - b);

    const answer = [];
    const n = arr1.length; // 3
    const m = arr2.length; // 5

    let p1 = 0;
    let p2 = 0;

    //순서대로 넣다가 하나의 배열이 끝나면 끝.
    while (p1 < n && p2 < m) {
        if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++]);
    }

    while (p1 < n) answer.push(arr1[p1++]);
    while (p2 < m) answer.push(arr2[p2++]);

    return answer;
}

console.log(solution(arr1, arr2));
