/*
    해시는 hashTable을 이용하여 데이터를 저장함.
    이떄 hashMethod를 이용하여 고유한 숫자값을 만들어 index로 사용한다.(음수도 포함)
    요 hashMethod에 의해 반환된 고유의 숫자값(index)을 hashCode라고 한다.

    해시를 만드는 방법 여러가지.
    첫번째, hashCode를 구한뒤 hashCode를 테이블 크기로 나머지 연산 한값. (테이블 크기 배수에서 충돌이 일어남)
*/

function hashCode(key) {
    let hash = 0;
    for (var i = 0; i < key.length; i++) {
        let code = key.charCodeAt(i);
        hash = (hash << 5) - hash + code;
        hash = hash & hash; //비트로 반환(&: 두 연산이 모두 1이면 1반환)
    }

    return hash;
}

const key = 'name';

console.log(hashCode(key));
