function Permutation(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map(n => [n]);

    arr.forEach((number, index, arr) => {
        const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];

        const permutations = Permutation(rest, selectNumber - 1);

        const attached = permutations.map(permut => [number, ...permut]);

        results.push(...attached);
    });

    return results;
}
