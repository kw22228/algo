const progress = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

function solution(progress, speeds) {
    const answer = [];
    const endDate = [];

    progress.forEach((item, index) => {
        endDate.push(Math.ceil((100 - item) / speeds[index]));
    });

    let delayDate = endDate[0];

    answer.push(0);
    endDate.forEach(date => {
        if (date <= delayDate) {
            answer[answer.length - 1] += 1;
        } else {
            answer.push(1);
            delayDate = date;
        }
    });

    return answer;
}

console.log(solution(progress, speeds));

/*
    7 3 9

    5 10 1 1 20

    10

    1 3 1
*/
