/*
    servey : 질문마다 판단하는 지표를 담은 1차원 배열
    choices : 질문마다 선택한 선택지를 담은 1차원 배열

    1, 7    3점
    2, 6    2점
    3, 5    1점
    4       0점
*/

const survey = ['TR', 'RT', 'TR'];
const choices = [7, 1, 3];

function solution(survey, choices) {
    const obj = {};
    const question = ['RT', 'CF', 'JM', 'AN'];

    survey.forEach(item => {
        item.split('').forEach(e => (obj[e] = 0));
    });

    choices.forEach((choice, index) => {
        if (choice === 4) return;

        const [a, b] = survey[index].split('');
        const objIndex = choice > 4 ? b : a;
        const score = choice === 1 || choice === 7 ? 3 : choice === 2 || choice === 6 ? 2 : 1;

        obj[objIndex] += score;
    });

    console.log(obj);

    return question.map(([a, b]) => (obj[a] < obj[b] ? b : a)).join('');
}

console.log(solution(survey, choices));
