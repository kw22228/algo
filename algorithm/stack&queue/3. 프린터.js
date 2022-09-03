const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

function solution(priorities, location) {
    let answer = 0;
    const priorityTypes = [...priorities].sort((a, b) => b - a);
    const prioritiesObj = priorities.map((priority, index) => ({
        location: index,
        priority,
    }));

    console.log(prioritiesObj);

    while (true) {
        if (prioritiesObj[0].priority === priorityTypes[0]) {
            answer++;
            if (prioritiesObj[0].location === location) return answer;
            prioritiesObj.shift();
            priorityTypes.shift();
        } else {
            const shift = prioritiesObj.shift();
            prioritiesObj.push(shift);
        }
    }
}

console.log(solution(priorities, location));
