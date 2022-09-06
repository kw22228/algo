export default class TreeNode {
    #data;
    #left;
    #rigth;
    constructor(data) {
        this.#data = data;
        this.#left = null;
        this.#rigth = null;
    }

    set data(data) {
        this.#data = data;
    }
    get data() {
        return this.#data;
    }

    set left(left) {
        this.#left = left;
    }
    get left() {
        return this.#left;
    }

    set rigth(rigth) {
        this.#rigth = rigth;
    }
    get rigth() {
        return this.#rigth;
    }
}
