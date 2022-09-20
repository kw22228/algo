// 소수 구하기
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }

    return true;
}