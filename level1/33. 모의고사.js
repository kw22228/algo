/*
    1.      1, 2, 3, 4, 5
    2.      2, 1, 2, 3,  2, 4, 2, 5
    3.      3, 3, 1, 1, 2, 2, 4, 4, 5, 5
*/

const answers = [1, 3, 2, 4, 2];

function solution(answers) {
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const getCorrectCount = person =>
        answers.filter((answer, index) => answer === person[index % person.length]).length;

    const result = [getCorrectCount(person1), getCorrectCount(person2), getCorrectCount(person3)];
    const maxScore = Math.max(...result);

    const answerArr = [];
    for (let i = 0; i < result.length; i++) {
        maxScore === result[i] && answerArr.push(i + 1);
    }
    return answerArr;
}

console.log(solution(answers));
