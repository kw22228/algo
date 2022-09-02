class Stack {
    #arr = [];

    constructor(arr) {
        if (arr) this.#arr = arr;
    }

    //기존 배열 복사한 새로운 배열
    getBuffer() {
        return this.#arr.slice();
    }

    isEmpty() {
        return this.#arr.length === 0;
    }
}

const stack1 = new Stack();

function StackAccessNthTopNode(stack, n) {
    if (n <= 0) throw 'Error';

    const bufferArr = stack.getBuffer();

    const bufferStack = new Stack(bufferArr);

    while (--n !== 0) {
        bufferStack.pop();
    }

    return bufferStack.pop();
}
