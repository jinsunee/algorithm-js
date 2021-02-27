# Brackets

https://app.codility.com/programmers/lessons/6-sorting/distinct/

66%

```
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = S.split('');

    const stack = [];
    const map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');

    for (let a of arr) {
        if (a === '(' || a === '{' || a === '[') {
            stack.push(a);
            continue;
        }

        const lastItem = stack.pop();

        if (a !== map.get(lastItem)) {
            return 0;
        }

    }

    return 1;
}
```

100%

```
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = S.split('');

    const stack = [];
    const map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');

    for (let a of arr) {
        if (a === '(' || a === '{' || a === '[') {
            stack.push(a);
            continue;
        }

        const lastItem = stack.pop();

        if (a !== map.get(lastItem)) {
            return 0;
        }
    }

    if (stack.length >= 1) {
        return 0;
    }

    return 1;
}
```
