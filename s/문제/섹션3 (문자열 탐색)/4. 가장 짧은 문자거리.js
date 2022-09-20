const str = 'tteachermode';
const t = 'e';
function solution(str, t) {
    const answer = [];
    let pin = 1000;

    //정순
    for (let i = 0; i < str.length; i++) {
        if (str[i] === t) {
            pin = 0;
            answer.push(pin);
        } else {
            pin++;
            answer.push(pin);
        }
    }

    //역순
    p = 1000;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === t) {
            pin = 0;
        } else {
            pin++;
            answer[i] = answer[i] > pin ? pin : answer[i];
            // answer[i] = Math.min(answer[i], p);
        }
    }

    return answer;
}

console.log(solution(str, t));
