const a = 'bacaAacba';
const b = 'abc'; // b의 길이가 더작음

function solution(a, b) {
    function compareMaps(map1, map2) {
        if (map1.size !== map2.size) return false;
        for (let [k, v] of map1) {
            if (!map2.has(k) || map2.get(k) !== v) return false;
        }

        return true;
    }

    let answer = 0;
    const map1 = new Map();
    const map2 = new Map();
    const len = b.length;

    //작은 array 해쉬 만들기.
    for (let x of b) {
        if (!map1.has(x)) map1.set(x, 1);
        else map1.set(x, map1.get(x) + 1);
    }

    //첫번째 윈도우 만든 후 비교,
    for (let i = 0; i < len; i++) {
        if (!map2.has(a[i])) map2.set(a[i], 1);
        else map2.set(a[i], map2.get(a[i]) + 1);
    }
    if (compareMaps(map1, map2)) answer++;

    //slide window
    for (let i = len; i < a.length; i++) {
        map2.set(a[i - len], map2.get(a[i - len]) - 1);
        if (map2.get(a[i - len]) === 0) map2.delete(a[i - len]);

        if (!map2.has(a[i])) map2.set(a[i], 1);
        else map2.set(a[i], map2.get(a[i]) + 1);

        if (compareMaps(map1, map2)) answer++;
    }

    return answer;
}

console.log(solution(a, b));
