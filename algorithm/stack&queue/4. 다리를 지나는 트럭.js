/*
    bridge_length   다리에 올라갈 수 있는 트럭 수
    weight          다리가 견딜 수 있는 무게
    truck_weights   트럭 별 무게
*/
const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

function solution(bridge_length, weight, truck_weights) {
    // let timer = 0;
    // const truckLength = truck_weights.length;
    // const moveArr = [];
    // const arriveArr = [];

    // function moveTruck(weight) {
    //     this._timer = 1;
    //     this._weight = weight;

    //     return {
    //         plus: () => this._timer++,
    //         getTimer: () => this._timer,
    //         getWeight: () => this._weight,
    //     };
    // }

    // while (true) {
    //     if (arriveArr.length === truckLength) return timer;

    //     timer++;

    //     for (let i = 0; i < moveArr.length; i++) {
    //         moveArr[i].plus();

    //         if (moveArr[i].getTimer() === bridge_length) {
    //             const moveShift = moveArr.shift();
    //             arriveArr.push(moveShift.getWeight());
    //         }
    //     }

    //     if (truck_weights.length > 0) {
    //         const moveArrWeight = moveArr.reduce((pre, cur) => (pre += cur.getWeight()), 0);

    //         if (moveArrWeight + truck_weights[0] <= weight) {
    //             const truckShift = truck_weights.shift();
    //             moveArr.push(new moveTruck(truckShift));
    //         }
    //     }
    // }

    const bridge = new Array(bridge_length).fill(0);
    let timer = 0;
}

console.log(solution(bridge_length, weight, truck_weights));
