class Stack {
    #stack = [];
    #stackSize;
    #top = -1;

    constructor(stackSize) {
        this.#stackSize = stackSize;
        if (stackSize) this.#stack = new Array(stackSize).fill(null);
    }

    push(data) {
        if (this.isFull()) return 'Stack is Full.';

        this.#top++;
        this.#stack[this.#top] = data;

        return true;
    }

    pop() {
        if (this.isEmpty()) return 'Stack is Empty.';

        this.#stack[this.#top] = null;
        this.#top--;

        return true;
    }

    isEmpty() {
        return this.#top === -1;
    }

    isFull() {
        return this.#top === this.#stackSize - 1;
    }

    getLog() {
        return {
            stack: this.#stack,
            top: this.#top,
        };
    }
}

const stack = new Stack(5);

stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
stack.push('5');

stack.pop();
stack.pop();
stack.pop();

console.log(stack.getLog());
