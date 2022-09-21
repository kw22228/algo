const a = 'abaCC';
const b = 'Caaab';

function solution(a, b) {
    const map = new Map();
    let answer = 'Yes';

    for (let x of a) {
        if (!map.has(x)) map.set(x, 1);
        else map.set(x, map.get(x) + 1);
    }

    for (let x of b) {
        if (!map.has(x) || (map.has(x) && map.get(x) === 0)) return 'No';
        map.set(x, map.get(x) - 1);
    }

    return answer;
}

console.log(solution(a, b));
