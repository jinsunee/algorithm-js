# MaxProductOfThree

## 생각해보기

return 되는 경우의 수 && 3개의 수를 곱한 값이 최대가 되어야한다.

- 양수 :
  - 전부 양수(a>0, b>0, c>0)
  - 두개만 음수(a>0, b<0, c<0)
- 0 : 꼭 0이 포함되어야 하는 경우?? 음수 3개랑 0의 조합이라던지,,,,
- 음수 : 음수로만 이루어져있는 경우
  - 1개만 음수
  - 3개 전부 음수

44%

```
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const tmp = A.map((item, index) => ({
      index,
      item,
  }));

  tmp.sort((a, b) => b.item - a.item);

  const rtn = tmp.map(t => t.item);

  if (rtn[0]*rtn[1]*rtn[2] < 0 && rtn[0] > 0) {
    return rtn[0]*rtn[rtn.length-2]*rtn[rtn.length-1];
  }

  return rtn[0]*rtn[1]*rtn[2];
}

console.log(solution([-5, 5, -5, 4]));
```

100%
어떤 알고리즘이 있는게 아니라 모든 예외처리를 해줘야했던 문제였다...
다른 사람의 코드를 봤는데 아래처럼 left따로, right따로 계산해서 가장 큰거를 그때마다 비교...

```
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sortA = A;
    const N = A.length;
    let left, right, triplet;

    sortA.sort(function(a, b) {
        return a - b;
    });

    if(sortA[N-1] <= 0) {
        triplet = sortA[N-3] * sortA[N-2] * sortA[N-1];
    }
    else {
        left = sortA[0] * sortA[1] * sortA[N-1];
        right = sortA[N-3] * sortA[N-2] * sortA[N-1];
        if(left > right) {
            triplet = left;
        }else {
            triplet = right;
        }
    }

    return triplet;
}
```
