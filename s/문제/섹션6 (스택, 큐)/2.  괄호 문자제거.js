const str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

function solution(str) {
    // let answer = '';
    // let open = 0;

    // for (let x of str) {
    //     if (x === '(') open++;
    //     else if (x === ')') open--;
    //     else {
    //         if (open === 0) answer += x;
    //     }
    // }

    // return answer;

    // Stack
    let answer = '';
    const stack = [];

    for (let x of str) {
        if (x === ')') {
            while (stack.pop() !== '(');
        } else {
            stack.push(x);
        }
    }

    return stack.join('');
}

console.log(solution(str));
