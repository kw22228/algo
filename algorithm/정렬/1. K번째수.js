const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];

function solution(array, commands) {
    return commands.reduce(
        (answer, command) => [
            ...answer,
            array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1],
        ],
        []
    );
}

console.log(solution(array, commands));
