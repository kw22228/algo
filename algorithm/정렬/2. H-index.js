const citations = [3, 0, 6, 1, 5];

function solution(citations) {
    // let max = Math.max(...citations);
    // const arr = [];

    // function cit(arr, max) {
    //     let up = 0;
    //     let down = 0;

    //     arr.forEach(n => {
    //         if (n >= max) up++;
    //         else down++;
    //     });

    //     return {
    //         citation: max,
    //         up,
    //         down,
    //     };
    // }

    // for (let i = max; i >= 0; i--) {
    //     arr.push(cit(citations, i));
    // }

    // console.log(arr);

    let count = 0;

    citations.forEach(citation => {
        if (citation >= 3) count++;
    });

    return count;
}

console.log(solution(citations));
