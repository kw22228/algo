const arr = [1, 3, 5, 6, 7, 10];

function solution(arr) {
    // let answer = 'No';
    // const max = Math.max(...arr);
    // const ch = Array.from({ length: max }, () => 0);
    // const len = arr.length;
    // const arr1 = [];
    // function DFS(p) {
    //     if (p === len) {
    //         const tmp = [];
    //         for (let i = 1; i <= max; i++) {
    //             if (ch[i] === 1) tmp.push(i);
    //         }
    //         if (tmp.length > 0) arr1.push(tmp);
    //     } else {
    //         ch[arr[p]] = 1;
    //         DFS(p + 1);
    //         ch[arr[p]] = 0;
    //         DFS(p + 1);
    //     }
    // }
    // DFS(0);
    // for (let i = 0; i < arr1.length; i++) {
    //     const arr2 = arr.filter(x => arr1[i].indexOf(x) === -1);
    //     const sum1 = arr1[i].reduce((pre, cur) => pre + cur, 0);
    //     const sum2 = arr2.reduce((pre, cur) => pre + cur, 0);
    //     if (sum1 + sum2) return 'Yes';
    // }
    // return answer;

    let answer = 'No';
    let flag = true;
    const len = arr.length;
    const total = arr.reduce((pre, cur) => pre + cur, 0);

    function DFS(v, sum) {
        if (!flag) return;
        if (v === len) {
            if (total - sum === sum) {
                answer = 'Yes';
                flag = false;
            }
        } else {
            DFS(v + 1, sum + arr[v]); //포함할때,
            DFS(v + 1, sum); //포함하지 않을 때,
        }
    }

    DFS(0, 0);
    return answer;
}

console.log(solution(arr));
