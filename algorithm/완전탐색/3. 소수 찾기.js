const numbers = '011';

function solution(numbers) {
    let answer = 0;
    const result = [];
    function Permutation(arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map(n => [n]);

        arr.forEach((number, index, arr) => {
            const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];

            const permutations = Permutation(rest, selectNumber - 1);

            const attached = permutations.map(permut => [number, ...permut]);

            results.push(...attached);
        });

        return results.map(result => result.join(''));
    }

    function isPrime(number) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return number >= 2;
    }

    for (let i = 0; i < numbers.length; i++) {
        result.push(Permutation(numbers.split(''), i + 1));
    }

    const setResult = [...new Set(result.flat(2).map(n => parseInt(n, 10)))];

    setResult.forEach(set => {
        isPrime(set) && answer++;
    });

    return answer;
}

console.log(solution(numbers));
