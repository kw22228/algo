class Queue {
    #queue;
    #front = -1; // 데이터를 삭제 (pop)
    #rear = -1; // 데이터를 추가 (push)
    #queueSize;
    constructor(queueSize) {
        this.queueSize = queueSize;
        this.#queue = new Array(queueSize).fill(null);
    }

    enqueue(data) {
        if (this.isFull()) return 'Queue is full';

        this.#rear++;
        this.#queue[this.#rear] = data;

        return true;
    }

    dequeue() {
        if (this.isEmpty()) return 'Queue is Empty';

        this.#front++;
        this.#queue[this.#front] = null;
    }

    isEmpty() {
        return this.#front === this.#rear;
    }
    isFull() {
        return this.#rear === this.#queueSize;
    }

    get() {
        return {
            queue: this.#queue,
            toString: `front: ${this.#front},  rear: ${this.#rear}`,
        };
    }
}

const q = new Queue(5);

q.enqueue('1');
q.enqueue('2');
q.enqueue('3');
q.enqueue('4');
q.enqueue('5');

q.dequeue();
q.dequeue();

console.log(q.get());
