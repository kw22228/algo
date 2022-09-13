import TreeNode from './treeNode.js';

export default class InsertNode {
    #root;
    constructor() {
        this.#root = null;
    }

    set root(root) {
        this.#root = root;
    }
    get root() {
        return this.#root;
    }

    insert(data) {
        let node = new TreeNode(data);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while (current) {
            //중복된 삽입값 제외
            if (data === current.data) {
                return;
            }

            //삽입값이 현재 데이터보다 작으면 left 트리에 삽입, 값이 있다면 node옮김
            if (data < current.data) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            }

            //삽입값이 현재 데이터보다 크면 right 트리에 삽입, 값이 있다면 node옮김
            if (data > current.data) {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }
}
