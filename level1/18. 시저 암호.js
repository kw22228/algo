const s = 'a B z';
const n = 4;

function solution(s, n) {
    return s
        .split('')
        .map(e => {
            if (e === ' ') return e;

            const asc = e.charCodeAt(0);
            return (asc + n > 90 && asc <= 90) || asc + n > 122
                ? String.fromCharCode(asc + n - 26)
                : String.fromCharCode(asc + n);
        })
        .join('');
}

console.log(solution(s, n));
