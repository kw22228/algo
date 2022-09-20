const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

function solution(arr) {
    function isPrime(num) {
        if (num < 2) return false;
        // if (num === 2) return true;

        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) return false;
        }

        return true;
    }

    const answer = [];
    arr.forEach(x => {
        const reverse = parseInt(x.toString().split('').reverse().join(''), 10);

        if (isPrime(reverse)) answer.push(reverse);
    });

    return answer;
}

console.log(solution(arr));
