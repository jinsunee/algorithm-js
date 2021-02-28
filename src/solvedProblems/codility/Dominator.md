# Dominator

41%

```
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const map = new Map();
    let length = A.length;

    for (let i=0; i<length; i++) {
        if (map.has(A[i])) {
            const newArray = [...map.get(A[i]), i];
            map.set(A[i], newArray);
            continue;
        }

        map.set(A[i], [i]);
    }

    const mapAsc = new Map([...map].sort((a,b) => {
        return b[1].length - a[1].length;
    }));

    const indexes = mapAsc.values().next().value;

    if (indexes.length >= (A.length / 2)) {
        return indexes.pop();
    }

    return -1;
}
```

66%

Timeout erorrs ㅠㅠ 로직 혹은 알맞지않은 자료구조를 가져다쓴 것 같기도.... 뭔가 잘못된 것 같다.

```
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const map = new Map();
    let length = A.length;

    if (length === 0) {
        return -1;
    }

    for (let i=0; i<length; i++) {
        if (map.has(A[i])) {
            const newArray = [...map.get(A[i]), i];
            map.set(A[i], newArray);
            continue;
        }

        map.set(A[i], [i]);
    }

    const mapAsc = new Map([...map].sort((a,b) => {
        return b[1].length - a[1].length;
    }));

    const indexes = mapAsc.values().next().value;

    if (indexes.length > (A.length / 2)) {
        return indexes.pop();
    }

    return -1;
}
```

91%
위 코드 보다 개선한점 : 아예 for문 안에서 (map.get(A[i]) > N/2) 이렇게 과반수 이상인지 체크 -> 그러면 불필요한 연산을 줄여준다.
91퍼센트인 이유? : 1개일 때도 -1을 리턴하게 했다. 이러면 안되나보다.. 1개의 과반수는 1개인가보다. 잘못 이해했다.

```
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    if (N < 1) {
        return -1;
    }

    const map = new Map();

    for (let i=0; i<N; i++) {
        if (map.has(A[i])) {
            map.set(A[i], map.get(A[i])+1);
        } else {
            map.set(A[i], 1);
        }

        if (map.get(A[i]) > N/2) {
            return i;
        }
    }

    return -1;
}
```

100%

```
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    if (N === 0) {
        return -1;
    }

    if (N === 1) {
        return 0;
    }

    const map = new Map();

    for (let i=0; i<N; i++) {
        if (map.has(A[i])) {
            map.set(A[i], map.get(A[i])+1);
        } else {
            map.set(A[i], 1);
        }

        if (map.get(A[i]) > N/2) {
            return i;
        }
    }

    return -1;
}
```

map으로도 빠르게 찾을 수 있지만 javascript에서는 배열도 가능!
이게 더 코드가 깔끔하긴 하네..

```
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    if (N === 0) {
        return -1;
    }

    if (N === 1) {
        return 0;
    }

    const rtn = [];

    for (let i=0; i<N; i++) {
        if (rtn[A[i]]) {
            rtn[A[i]] += 1;
        } else {
            rtn[A[i]] = 1;
        }

        if (rtn[A[i]] > N/2) {
            return i;
        }
    }

    return -1;
}
```
