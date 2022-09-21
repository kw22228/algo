/*
    1. ( 를 만났을때 stack에 push해준다.
    2. ) 를 만났을때 판별
        - i - 1의 자리가 ( 일경우, 레이저이다. 따라서 나머지 스택에있는 ( 들은 잘린 막대기 수.
        - i - 1의 자리가 ) 일경우, 막대기가 끝남, 따라서 pop해주고 막대기 수 +1.  
*/

const a = '()(((()())(())()))(())';

function solution(a) {
    let answer = 0;
    const stack = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '(') stack.push(a[i]);
        else {
            stack.pop();
            if (a[i - 1] === '(') answer += stack.length;
            else answer++;
        }
    }

    return answer;
}

console.log(solution(a));
