const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
    let answer = 0;
    const basket = [];
    const len = board.length;

    moves.forEach(move => {
        for (let i = 0; i < len; i++) {
            const target = board[i][move - 1];

            if (target > 0) {
                if (basket[basket.length - 1] !== target) basket.push(target);
                else {
                    answer += 2;
                    basket.pop();
                }

                board[i][move - 1] = 0;
                return;
            }
        }
    });
    return answer;
}

console.log(solution(board, moves));
