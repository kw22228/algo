# 트리

-   노드로 이루어진 자료구조로 스택이나 큐같은 선형 구조가 아닌 비선형 자료구조이다.
-   트리는 계층적 관계를 표현한다.

1. 트리는 하나의 루트 노드를 가진다.
2. 루트노드는 0개 이상의 노드를 가진다.
3. 자식노드 또한 0개 이상의 노드를 가진다.
4. 노드들과 노드들을 연결하는 간선 (Edge)들로 구성되어있다. (간선 = 노드 - 1)
5. 트리에는 사이클(cycle)과 self-loop가 존재 할 수 없다.

루트 노드(root node) : 부모가 없는 노드로 트리는 단 하나의 루트 노드를 가진다. (ex : A- 루트노드)
단말 노드(leaf node) : 자식이 없는 노드로 terminal 노드라고도 부른다. (ex : C, D, E - 단말 노드)
내부 노드(internal node) : 단말 노드가 아닌 노드(ex : A, B - 내부 노드)
간선(edge) : 노드를 연결하는 선
형제(sibling) : 같은 부모 노드를 갖는 노드들 (ex : D-E, B-C : 형제)
노드의 깊이(depth) : 루트 노드에서 어떤 노드에 도달하기 위해 거쳐야 하는 간선의 수(ex : D의 depth : 2)
노드의 레벨(level) : 트리의 특정 깊이를 가지는 노드의 집합 ( ex : level 1- {B, C} )
노드의 차수(degree) : 자식 노드의 개수 (  ex : B의 degree - 2, C의 degree - 0)
트리의 차수(degree of tree) : 트리의 최대 차수 ( ex : 위 트리의 차수는 2이다)

### 트리 종류

1. 이진트리(binary tree)

-   각노드가 최대 두개의 자식을 갖는 트리. (각노드의 자식노드가 0 ~ 2개)

2. 완전 이진트리(Complete Binary Tree)

-   완전 이진트리는 마지막 노드를 제외하고 모든 레벨이 완전히 채워져있다(각 노드당 자식노드 2개씩)
-   마지막 레벨은 완전히 차있지 않아도 되지만, 노드가 왼쪽에서 오른쪽으로 채워져야함(왼쪽은 없고 오른쪽에 있을 수 없음.)
-   마지막 레벨 h에서 1~2h~1개의 노드를 가질 수 있음.
-   완전 이진트리는 배열을 사용해 효율적으로 표현가능.

3. 전 이진트리(Full Binary Tree)

-   모든 노드가 0개 또는 2개의 자식노드를 가지고있다. (1개 안됨.)

4. 포화 이진트리(Perfect Binary Tree)

-   모든 레벨이 노드로 가득 차있는 트리.
-   전 이진트리의 성질도 가지고있다. 즉, 모든 노드가 0개 혹은 2개의 자식노드를 가짐. (가장 하이레벨 노드들은 leaf노드가 될 수 있음.)

### 이진 탐색 트리(Binary Search Tree)

-   이진 트리이면서 추가적인 속성을 가진다.
-   이진 탐색트리의 노드에 저장된 키는 유일하다.
-   부모의 키가 왼쪽 자식 노드의 키보다 크다.
-   부모의 키가 오른쪽 자식 노드의 키보다 작다.
-   왼쪽과 오른쪽의 서브트리들도 이진 탐색 트리이다.

    ```javascript
            5
        3       7
     1     4       10
    ```

[탐색] 최대높이: h // O(h)

1. 루트 노드의 키와 찾고자 하는 값을 비교. 찾고자 하는 값이면 탐색 종료
2. 찾고자 하는 값이 루트보다 작다면 왼쪽 서브트리로 탐색 진행.
3. 찾고자 하는 값이 루트보다 크다면 오른쪽 서브트리로 탐색 진행.
4. 답을 끝레벨 까지 찾지 못한다면 그대로 종료.

```javascript
function binaryTreeSearch(root, searchKey) {
    if (!root) return null; // 값을 찾지 못함.

    if (searchKey === root.key) return root; // 값을 찾음
    else if (searchKey < root.key) {
        binaryTreeSearch(root.left(), searchKey); // 탐색값보다 root가 작을때 왼쪽 서브트리 재탐색
    } else if (searchKey > root.key) {
        binaryTreeSearch(root.right(), searchKey); //탐색값보다 root가 클때 오른쪽 서브트리 재탐색
    }
}
```

[삽입] -> 탐색과 과정이 비슷 (트리안에서 중복된 키값 존재 불가.)

1. 삽입할 값을 루트 노드와 비교해서 같다면 오류 발생.
2. 삽입할 값이 루트 노드의 키보다 작다면 왼쪽 서브트리를 탐색하여 비어있다면 추가, 비어있지 않으면 다시 값을 비교
3. 삽입할 값이 루트 노드의 키보다 크다면 오른쪽 서브트리를 탐색하여 비어있다면 추가, 비어있지 않으면 다시 값을 비교

```javascript
// 삽입값 6   (5의 자식노드(오른쪽)로 온다.)
              7
        3           8
    1       5           10
               6
```

[삭제] -> 삽입과 동일하나 값이 노드와 같으면 삭제. 같지않으면 크기비교후 노드위치 옮긴다.

1. 삭제할 노드의 서브 트리가 하나일 경우.
   해당 노드를 삭제후 그 삭제된 노드의 자식노드와 삭제된 노드의 부모노드를 연결해준다.

2. 삭제할 노드의 서브 트리가 두개일 경우.

-   (왼쪽 서브트리 경우) 삭제할 노드 왼쪽 서브트리의 가장 큰 자손을 해당 노드의 자리로 올린다.
-   (오른쪽 서브트리 경우) 삭제할 노드 오른쪽 서브트리의 가장 작은 자손을 해당 노드의 자리로 올린다.

### 트리의 순회

L : Left
V : Visit
R : Right

-   V가 기준.

*   중위 순회(Inorder)
    LVR탐색이 이루어짐.
    왼쪽 서브트리 -> 루트 노드 -> 오른쪽 서브트리

    ```javascript
    function Inorder(root) {
        inorder(root.left());
        console.log(root.data);
        inorder(root.rigth());
    }
    ```

*   전위 순회(Preorder)
    VLR탐색 이루어짐
    루트 노드 -> 왼쪽 서브트리 -> 오른쪽 서브트리

    ```javascript
    function Preorder(root) {
        console.log(root.data);
        inorder(root.left());
        inorder(root.rigth());
    }
    ```

*   후위 순회(Postorder)
    LRV탐색이 이루어짐.
    왼쪽 서브트리 -> 오른쪽 서브트리 -> 루트 노드
    ```javascript
    function Postorder(root) {
        inorder(root.left());
        inorder(root.rigth());
        console.log(root.data);
    }
    ```
