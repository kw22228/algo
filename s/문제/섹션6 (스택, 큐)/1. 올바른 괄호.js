// )()(
const brackets = '(()(()))(()';

function solution(brackets) {
    // let open = 0;
    // for (let x of brackets) {
    //     open = x === '(' ? open + 1 : open - 1;
    //     if (open < 0) return 'No';
    // }
    // return open === 0 ? 'Yes' : 'No';
    //

    // Stack (push, pop)
    const stack = [];
    for (let x of brackets) {
        if (x === '(') stack.push(x);
        else {
            if (stack.length === 0) return 'No';
            stack.pop();
        }
    }

    return stack.length === 0 ? 'Yes' : 'No';
}

console.log(solution(brackets));
