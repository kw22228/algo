const s = '((()(())';

function solution(s) {
    let open = 0;

    for (let i = 0, length = s.length; i < length; i++) {
        s[i] === '(' ? open++ : open--;
        if (open < 0) return false;
        if (open > length) return false;
    }

    return open === 0 ? true : false;
}

console.log(solution(s));
