const n = 10;
function solution(n) {
    let answer = 0;

    function isPrime(x) {
        let flag = true;
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) flag = false;
        }

        return flag;
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) answer++;
    }

    return answer;
}

console.log(solution(n));
