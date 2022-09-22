const heights = [120, 125, 152, 130, 135, 135, 143, 127, 160];

function solution(heights) {
    const len = heights.length;
    const sorted = heights.slice().sort((a, b) => a - b);
    const answer = [];

    for (let i = 0; i < len; i++) {
        if (heights[i] !== sorted[i]) answer.push(i + 1);
    }

    return answer;
}

console.log(solution(heights));
