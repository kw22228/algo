const arr = [1, 2, 3, 4, 5];

function Combinations(arr, selectNumber) {
    const result = [];
    if (selectNumber === 1) return arr.map(n => [n]);

    arr.forEach((number, index, arr) => {
        const rest = arr.slice(index + 1);

        const combis = Combinations(rest, selectNumber - 1);

        const attached = combis.map(combi => [number, ...combi]);

        result.push(...attached);
    });

    return result;
}

console.log(Combinations(arr, 2));
