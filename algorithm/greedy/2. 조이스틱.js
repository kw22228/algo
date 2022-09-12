/*
    위 - 다음알파벳
    아래 - 이전 알파벳
    왼쪽 - 커서를 왼쪽으로 이동
    오른쪽 - 커서를 오른쪽으로 이동
*/

const name = 'JAN';

function solution(name) {
    // const str = new Array(name.length).fill('A');
    // let cursor = 0;
    // let count = 0;
    // while (true) {
    //     if (str.join('') === name) return count;
    //     let asc = str[cursor].charCodeAt();
    //     //글자가 만들어졌을경우.
    //     if (name[cursor] === str[cursor]) {
    //         if (name[cursor + 1] === 'A') cursor = cursor === 0 ? name.length - 1 : cursor - 1;
    //         else cursor++;
    //         count++;
    //     } else {
    //         // ++로해야 이득.
    //         if (name[cursor].charCodeAt() <= 78) {
    //             str[cursor] = String.fromCharCode(++asc);
    //             count++;
    //         } else {
    //             str[cursor] = String.fromCharCode(asc === 65 ? 90 : --asc);
    //             count++;
    //         }
    //     }
    // }
    // return count;
}

console.log(solution(name));
