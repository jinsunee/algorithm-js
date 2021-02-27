function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = new Map();

  for (let i=0; i< A.length; i++) {
      if (map.has(A[i])) {
          map.set(A[i], map.get(A[i])+1);
          continue;
      }

      map.set(A[i], 1);
  }
  
  for (let m of map.keys()) {
      if (map.get(m)%2 === 1) {
          return m;
      }
  }
}