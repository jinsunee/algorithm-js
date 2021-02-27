function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const rtn = [];
  const arraySize = A.length;

  for (let i=0; i<arraySize; i++) {
      if ((i+K) >= arraySize) {
          rtn[(i+K) % arraySize] = A[i];
      } else {
          rtn[i+K] = A[i];
      } 
  }

  return rtn;
}