function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const set = new Set();

  for (let item of A) {
      set.add(item);
  }

  let i = 0;
  while(true) {
      if (!set.has(++i)) {
          break;
      }
  }

  return i;
}