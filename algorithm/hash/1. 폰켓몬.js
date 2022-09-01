const nums = [3, 1, 2, 3];

function solution(nums) {
    const max = nums.length / 2;
    const size = new Set(nums).size;

    return max > size ? size : max;
}

console.log(solution(nums));

/*
    max : 2   size: 3       2
    max : 3   size: 3       3
    max : 3   size: 2       2
*/
