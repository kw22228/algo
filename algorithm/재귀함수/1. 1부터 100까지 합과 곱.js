let sum = 0;
let multiple = 1;

for (let i = 1; i < 6; i++) {
    sum += i;
    multiple *= i;
}
//O(n);

console.log(sum);
console.log(multiple);

function f(n) {
    if (n <= 1) return 1;

    return n + f(n - 1);
}
console.log(f(100));
