// const tree = {
//     root: {
//         value: 5,
//         left: {
//             value: 3,
//             left: {
//                 value: 1,
//                 left: null,
//                 right: null,
//             },
//             right: {
//                 value: 4,
//                 left: null,
//                 right: null,
//             },
//         },
//         right: {
//             value: 8,
//             left: {
//                 value: 6,
//                 left: null,
//                 rigth: null,
//             },
//             right: {
//                 value: 10,
//                 left: null,
//                 right: null,
//             },
//         },
//     },
// };
// console.log(tree.root.left.left.value);

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        let root = new Node(data);
        this.root = root;
        this.dataCount = 0;
    }

    length() {
        return this.dataCount;
    }

    insert(data) {
        let newNode = new Node(data);
        let iterableNode = this.root;

        while (iterableNode) {
            if (data === iterableNode.data) return; //중복된 값 삽입 x
            if (data < iterableNode.data) {
                if (!iterableNode.left) {
                    iterableNode.left = newNode;
                    this.dataCount++;

                    return;
                }
                iterableNode = iterableNode.left;
            }
            if (data > iterableNode.data) {
                if (!iterableNode.right) {
                    iterableNode.right = newNode;
                    this.dataCount++;

                    return;
                }
                iterableNode = iterableNode.right;
            }
        }
    }

    //깊이 우선 탐색 (Stack)
    DFS() {
        let result = [];
        let stack = [this.root];

        while (stack.length !== 0) {
            let current = stack.pop();
            if (current.right) {
                stack.push(current.right);
            }
            if (current.left) {
                stack.push(current.left);
            }

            result.push(current.data);
        }

        return result;
    }

    //넓이 우선 탐색(Queue)
    BFS() {
        let result = [];
        let queue = [this.root];

        while (queue.length !== 0) {
            let current = queue.shift();
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }

            result.push(current.data);
        }

        return result;
    }
}

const tree = new Tree(10);

tree.insert(1);
tree.insert(3);
tree.insert(11);
tree.insert(20);
tree.insert(5);

console.log(tree);

console.log(tree.DFS());
console.log(tree.BFS());
