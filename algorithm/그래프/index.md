# 그래프

### BFS (넓이 우선 탐색) - Queue

-   가까운 정점(형제 노드)을 먼저 방분하고, 먼 정점은 나중에 방문한다.

```javascript
            0
        1       2
      3   4   5   6
           7
```

0 -> 1 -> 2 -> 3 -> 4 -> 5-> 6 -> 7 순서대로 방문

```javascript

Queue       Current     방문경로
[E]           []          []
[]            [E]         []
[D, A]        []          [E]
[A]           [D]         []
[A, F]        []          [E,D]

[F]           [A]         [E,D]
[F,C,B]       []          [E,D,A]

[C,B]         [F]         [E,D,A]
[C,B]         []          [E,D,A,F]
[B]           [C]         [E,D,A,F]
[B]           []          [E,D,A,F,C]
[]            [B]         [E,D,A,F,C]
[]            []          [E,D,A,F,C,B]


```

### DFS (깊이 우선 탐색) - Stack

-   현재 정점에서 한방향으로 가면서 검사하는 것.
-   막힌 정점은 포기하고 마지막에 따라온 간선으로 되돌아가서 다시 탐색.

```javascript
            E
        D       A
    F         C   B

1. E D F
2. E A C
3. E A B
```

```javascript

Stack       Current         방문 경로
[E]           []              []
[]            [E]             []
[A, D]        []              [E]
[A]           [D]             [E]
[A, F]        []              [E,D]
[A]           [F]             [E,D]
[A]           []              [E,D,F]

[]            [A]             [E,D,F]
[B,C]         []              [E,D,F,A]
[B]           [C]             [E,D,F,A]
[B]           []              [E,D,F,A,C]

[]            [B]             [E,D,F,A,C]
[]            []              [E,D,F,A,C,B]
```
