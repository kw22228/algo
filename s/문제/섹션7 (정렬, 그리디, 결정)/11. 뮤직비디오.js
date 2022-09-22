const songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const m = 3;

function solution(songs, m) {
    let answer;

    let lt = Math.max(...songs);
    let rt = songs.reduce((pre, cur) => pre + cur, 0);

    function count(songs, mid) {
        let count = 1;
        let sum = 0;

        for (let x of songs) {
            if (sum + x > mid) {
                count++;
                sum = x;
            } else sum += x;
        }

        return count;
    }

    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2, 10);
        if (count(songs, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else lt = mid + 1;
    }

    return answer;
}
console.log(solution(songs, m));
