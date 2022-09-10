const fiboArr = [0]; //메모이제이션
function fiboWithMemoization(n) {
    if (n < 3) {
        fiboArr[n] = 1;
    }

    if (!fiboArr[n]) {
        fiboArr[n] = fiboWithMemoization(n - 1) + fiboWithMemoization(n - 2);
    }

    return fiboArr[n];
}

console.log(fiboWithMemoization(10));

console.log(fiboArr);
