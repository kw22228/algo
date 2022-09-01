class HashTable {
    #size;
    #keys;
    #values;
    #limit;

    constructor(size) {
        this.#size = size;
        this.#keys = this.initArray(size);
        this.#values = this.initArray(size);
        this.#limit = 0;
    }

    initArray(size) {
        // const arr = [];
        // for (let i = 0; i < size; i++) {
        //     arr.push(null);
        // }
        return Array(size).fill(null);
    }

    put(key, value) {
        if (this.#limit >= this.#size) throw 'hash table is full';

        let hashedIndex = this.hash(key); // 키가 정수인지 확인해서, 키 값 리턴

        // -- 선형 탐사 코드 -- //
        // keys[hasedIndex]가 비어 있지 않다면, hashedIndex++하면서 빈 곳 찾기

        //빈 index를 찾았으면 key와 value값 넣고 limit 증가
        this.#keys[hashedIndex] = key;
        this.#values[hashedIndex] = value;
        this.#limit++;
    }

    // -- get 함수 코드 -- //
    get(key) {
        // key 테이블에서 맞는 key 값 찾기.. 같은 해시 함수, 선형탐사 코드 이용
        // -----------------------------------------------------------------//
        // 이차 탐사
        let hashedIndex = this.hash(key);
        let squareIndex = 1;
    }

    hash(key) {
        // -- 키가 정수 인지 확인 한 후, 소수해싱을 통해 key값 반환 -- //
    }
}

const hash = new HashTable(10);
