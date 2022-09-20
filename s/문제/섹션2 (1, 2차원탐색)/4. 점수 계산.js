const sheet = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

function solution(sheet) {
    let plus = 0;
    return sheet.reduce((pre, cur) => {
        if (cur === 0) {
            plus = 0;
            return pre;
        }
        plus++;
        return pre + plus;
    }, 0);
}

console.log(solution(sheet));
