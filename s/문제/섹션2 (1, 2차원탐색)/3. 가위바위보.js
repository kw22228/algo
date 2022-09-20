/*
    1: 가위
    2: 바위
    3: 보
*/
const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];

function solution(a, b) {
    return a.map((n, index) => {
        const diff = n - b[index];

        switch (Math.abs(diff)) {
            case 0:
                return 'D';
            case 1:
                return n > b[index] ? 'A' : 'B';
            case 2:
                return n < b[index] ? 'A' : 'B';
        }
    });
}

console.log(solution(a, b));
