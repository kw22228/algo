const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
    const answer = [];
    const musicMap = new Map();

    genres.forEach((genre, index) => {
        if (!musicMap.has(genre)) musicMap.set(genre, 0);

        musicMap.set(genre, musicMap.get(genre) + plays[index]);
    });

    const sortArr = [...musicMap].sort(([, a], [, b]) => b - a).map(item => item[0]);

    sortArr.forEach(item => {
        const genreIndexArr = [];
        genres.forEach((genre, index) => {
            if (genre === item) genreIndexArr.push([index, plays[index]]);
        });
        const sortGenreIndexarr = genreIndexArr.sort(([, a], [, b]) => b - a).slice(0, 2);
        sortGenreIndexarr.forEach(([index]) => answer.push(index));
    });

    return answer;
}

console.log(solution(genres, plays));
