const str = '352+*9-';

function solution(str) {
    let answer;
    const stack = [];
    for (let x of str) {
        if (!isNaN(x)) stack.push(Number(x));
        else {
            const n1 = stack.pop();
            const n2 = stack.pop();

            if (x === '+') stack.push(n2 + n1);
            if (x === '-') stack.push(n2 - n1);
            if (x === '*') stack.push(n2 * n1);
            if (x === '/') stack.push(n2 / n1);
        }
    }

    return stack[0];
}

console.log(solution(str));
