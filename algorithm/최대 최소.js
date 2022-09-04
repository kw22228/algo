const arr = [10, 20, 30, , 2, 3, 5, 9, 11];
const a = [...arr];
a.sort((a, b) => a - b);

const min = a[0];
const max = a[a.length - 1];
console.log(min, max);

let max2 = 0;
let min2 = a[0];
for (let variouble of a) {
    if (max2 < variouble) max2 = variouble;
    else min2 = variouble;
}

console.log(max2, min2);

// -------------------------------------------------------------------

const maxReduce = arr.reduce((pre, cur) => (pre < cur ? cur : pre), 0);
const minReduce = arr.reduce((pre, cur) => (pre > cur ? cur : pre), arr[0]);
console.log(maxReduce, minReduce);
