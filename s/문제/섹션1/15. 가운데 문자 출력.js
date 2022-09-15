const str = 'goodness';

function solution(str) {
    const strArr = str.split('');
    const centerIndex = Math.floor(strArr.length / 2);

    return strArr.length % 2 === 0
        ? strArr[centerIndex - 1] + strArr[centerIndex]
        : strArr[centerIndex];
}

console.log(solution(str));
