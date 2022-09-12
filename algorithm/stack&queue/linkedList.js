// singled Linked List

const list = {
    head: {
        value: 90,
        next: {
            value: 10,
            next: {
                value: 89,
                next: {
                    value: 100,
                    next: null,
                },
            },
        },
    },
};

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let head = new Node('head');
        this.head = head;
        this.tail = head;

        this.currentNode = undefined;
        this.dataCount = 0;
    }

    get FullData() {
        const arr = [];
        let iterateCurrentNode = this.head.next;

        for (let i = 0; i < this.dataCount; i++) {
            arr.push(iterateCurrentNode.data);
            iterateCurrentNode = iterateCurrentNode.next;
        }

        return arr;
    }

    length() {
        return this.dataCount;
    }

    append(data) {
        let newNode = new Node(data);

        this.tail.next = newNode;
        this.tail = newNode;
        this.dataCount++;
    }

    toString() {
        let iterateCurrentNode = this.head.next;

        let s = '';
        for (let i = 0; i < this.dataCount; i++) {
            s += `${iterateCurrentNode.data} `;
            iterateCurrentNode = iterateCurrentNode.next;
        }
        return s.trim();
    }

    insert(index, data) {
        let iterateCurrentNode = this.head.next;

        for (let i = 0; i < index - 1; i++) {
            iterateCurrentNode = iterateCurrentNode.next;
        }
        let newNode = new Node(data);
        newNode.next = iterateCurrentNode.next;
        iterateCurrentNode.next = newNode;

        this.dataCount++;
    }
}

const node = new LinkedList();
node.append(10);
node.append(20);
node.append(200);
node.append(100);
node.append(50);
node.append(1);

node.insert(2, 300);

console.log(node);
console.log(node.length());

console.log(node.toString());
console.log(node.FullData);
