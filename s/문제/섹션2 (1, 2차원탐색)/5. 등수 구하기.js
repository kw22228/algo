const score = [87, 92, 92, 100, 76];
// [ 4, 2, 2, 1, 5]

function solution(score) {
    // const sorted = score
    //     .map((s, index) => {
    //         return {
    //             score: s,
    //             index,
    //         };
    //     })
    //     .sort((a, b) => b.score - a.score);

    // const answer = [];
    // let rate = 0;
    // sorted.forEach((sort, index, origin) => {
    //     if (!(index !== 0 && sort.score === origin[index - 1].score)) {
    //         rate = answer.filter(a => a).length + 1;
    //     }
    //     answer[sort.index] = rate;
    // });

    // return answer;
    const len = score.length;
    const answer = Array.from({ length: len }, () => 1);

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (score[i] < score[j]) answer[i]++;
        }
    }

    return answer;
}

console.log(solution(score));
