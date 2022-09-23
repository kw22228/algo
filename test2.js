function filter(a, callback) {
    if (typeof callback !== 'function') {
        throw new Error('콜백 함수가 있어야함!!');
    }

    const list = [];
    for (let i = 0; i < a.length; i++) {
        if (callback(a[i])) list.push(a[i]);
    }
    return list;
}

const a = [1, 2, 3, 4, 5];
function b(v) {
    return v;
}
filter(a, 'b');

// filter(a, function (v) {
//     console.log(v);
// });

// function isNumber(num) {
//     return Number.isNaN(num);
// }

// const a = 'asdf';
// if (isNumber(a)) { // isNumber(a) => false 나옴
//     console.log('숫자 맞음.');
// } else {
//     console.log('숫자 아님.');
// }
