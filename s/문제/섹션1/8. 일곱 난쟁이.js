const heights = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(heights) {
    // const endPoint = heights.length - 1;
    // let a = 0;
    // let b = 1;

    // while (true) {
    //     const sevenHeights = heights.filter((height, index) => index !== a && index !== b);
    //     const sum = sevenHeights.reduce((pre, cur) => pre + cur, 0);

    //     if (sum === 100) return sevenHeights;

    //     if (b === endPoint) {
    //         a += 1;
    //         b = a + 1;
    //     } else {
    //         b++;
    //     }
    // }
    const total = heights.reduce((pre, cur) => pre + cur, 0);
    for (let i = 0; i < heights.length - 1; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            if (total - (heights[i] + heights[j]) === 100) {
                heights.splice(j, 1);
                heights.splice(i, 1);

                return heights;
            }
        }
    }
}

console.log(solution(heights));
