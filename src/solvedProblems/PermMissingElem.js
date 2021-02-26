function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let N = A.length;
  
  let set = new Set();
  
  for (let item of A) {
      set.add(item);
  }

  for (let i=1; i<=N+1; i++) {
      if (!set.has(i)) {
          return i;
      }
  }
}