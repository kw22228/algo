const number = '1231234';
const k = 3;

function solution(number, k) {
    let answer = '';
    let answerStack = [0];
    let deleteCount = -1;

    for (let i = 0; i < number.length; i++) {
        while (deleteCount < k && number[i] > answerStack[answerStack.length - 1]) {
            answerStack.pop();
            deleteCount++;
        }
        if (answerStack.length < number.length - k) answerStack.push(number[i]);
    }

    answer = answerStack.join('');

    return answer;
}

console.log(solution(number, k));
