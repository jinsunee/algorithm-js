function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const set = new Set();

  for (let item of A) {
      set.add(item);
  }

  for (let i=1, length = A.length; i<=length; i++) {
      if (!set.has(i)) {
          return 0;
      }
  }

  return 1;
}