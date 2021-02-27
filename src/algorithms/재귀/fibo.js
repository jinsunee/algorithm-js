// 피보나치 수열
// 무한한 숫자들의 목록인데, 1부터 시작하고 이떄 각 수는 이전 두수의 합니다.
// 1, 1, 2, 3, 5, 8, 13, 21, 33, 54 ...

// Q. 피보나치 수열의 n번째 수를 return 하기

// 1. 반복문
// 시간 복잡도 : O(n), for문
// 공간 복잡도 : O(n), 큰 이유는 배열 arr을 써야했기 때문.
function fiboForLoop(n) {
  if (n <= 1) {
    return 1;
  }

  // 어쩌피 index = 1, 2는 확정
  const arr = [0, 1, 1];

  for (let i=3; i<=n; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }

  return arr[n];
}


// 2. 재귀호출 
// 시간 복잡도 : n 번을 호출하면 n-1, n-2 각각 두개씩 호출하니까 -> O(2^n)
// 공간 복잡도 : 크게 생각할 것 없을듯...?
function recursiveFibo(n) {
  if (n <= 2) {
    return 1;
  }

  return recursiveFibo(n-1) + recursiveFibo(n-2);
}

console.log(recursiveFibo(6));
