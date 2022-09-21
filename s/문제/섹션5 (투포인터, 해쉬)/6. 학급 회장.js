const str = 'BACBACCACCBDEDE';

function solution(str) {
    const map = new Map();

    for (let x of str) {
        if (!map.has(x)) {
            map.set(x, 0);
        } else {
            map.set(x, map.get(x) + 1);
        }
    }

    let max = Number.MIN_SAFE_INTEGER;
    let answer = '';
    for (let [k, v] of map) {
        if (max < v) {
            answer = k;
            max = v;
        }
    }

    return answer;
}

console.log(solution(str));
