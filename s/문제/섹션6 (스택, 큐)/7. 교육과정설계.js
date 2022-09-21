const essential = 'CBA';
const schedule = 'CBDAGE';

function solution(essential, schedule) {
    const arr = essential.split('');
    for (let x of schedule) {
        if (x === arr[0]) arr.shift();
    }

    return arr.length === 0 ? 'Yes' : 'No';
}

console.log(solution(essential, schedule));
