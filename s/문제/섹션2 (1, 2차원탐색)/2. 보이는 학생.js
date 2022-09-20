const arr = [130, 135, 148, 140, 145, 150, 150, 153];

function solution(arr) {
    const answer = [];
    let pin = Number.MIN_SAFE_INTEGER;

    arr.forEach(n => {
        if (pin < n) {
            answer.push(n);
            pin = n;
        }
    });

    return answer.length;
}

console.log(solution(arr));
