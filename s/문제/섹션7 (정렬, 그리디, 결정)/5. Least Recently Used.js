/*
    LRU : 가장 마지막에 사용한 것 (가장 최근에 쓰이지 않은 것.)
    
    Cache Miss: 만약 캐시메모리의 사이즈가 다 차있는 상태에서, 캐시작업이아닌 다른 작업이 들어오면 
                새로 들어온 작업은 캐시메모리의 맨앞에 들어오구, 맨마지막(쓰이지 않은 작업)은 캐시 메모리에서 사라진다.
    
    Cache Hit: 해야할 작업이 캐시에 있는 작업이라면, 해당 작업은 캐시메모리의 맨앞으로 옮겨지고 해당작업의 앞에 있던 작업은 한칸씩 뒤로 밀린다.
*/

const size = 5;
const work = [1, 2, 3, 2, 6, 2, 3, 5, 7];

function solution(size, work) {
    const cache = [];
    const len = work.length;

    for (let i = 0; i < len; i++) {
        let target = work[i];
        let idx = cache.indexOf(target);

        if (idx === -1) {
            if (cache.length === size) cache.pop();
            cache.unshift(target);
        } else {
            let j;
            for (j = idx - 1; j >= 0; j--) {
                cache[j + 1] = cache[j];
            }
            cache[j + 1] = target;
        }
    }

    return cache;
}

console.log(solution(size, work));
