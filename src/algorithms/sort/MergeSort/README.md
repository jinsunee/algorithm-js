# Merge Sort (병합정렬)

1. 크기가 N인 배열을 크기가 1이 될 때까지 devide
2. 그 devide된 배열 두개는 mergeSort라는 함수에 들어가서 정렬된채로 나온다.

## merge

```
function merge(array) {
  if (array.length <= 1) {
    return array;
  }

  // mergeSort는 반으로 나뉘어진 두개의 배열 받아서 정렬된 하나의 배열로 리턴한다.
  return mergeSort(merge(왼쪽), merge(오른쪽));
}
```

## mergeSort

```
function mergeSort (leftA, rightB) {
  // leftA와 rightA는 각각 정렬된 배열
  // 따라서 이 배열들의 첫번쨰 아이템은 가장 작은 수(오름차순 정렬일 경우) 혹은 가장 큰 수(내림차순 정렬일 경우)이므로, 첫번째에 있는 아이템만 고려한다.

  let rtn = [], leftIndex = 0, rightIndex = 0;
  while([한 배열이라도 끝내면 반복문 나가야함.]) {
    if (왼쪽 첫번째 < 오른쪽 첫번째) { // 오름차순이라고 가정
      rtn.push(leftA[left++]);
    } else {
      rtn.push(rightA[right++]);
    }
  }

  return rtn.concat(leftA 남은 배열).concat(rightA 남은 배열);
}
```
