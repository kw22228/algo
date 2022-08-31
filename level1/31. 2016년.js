const a = 1;
const b = 2;

function solution(a, b) {
    const date = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let totalD = b - 1;
    for (let i = 1; i <= a - 1; i++) {
        if (i === 2) {
            totalD += 29;
        } else if (i <= 7) {
            totalD += i % 2 === 0 ? 30 : 31;
        } else {
            totalD += i % 2 === 0 ? 31 : 30;
        }
    }

    return date[totalD % 7];
}

console.log(solution(a, b));

/*
    1 1 => FRI

    윤년 => 2월 29일 까지 있음
    
    5월 24일까지 몇일 지났는지 ?
    4월 까지 

*/
