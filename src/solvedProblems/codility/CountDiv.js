function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A === B) {
      return A%K === 0 ? 1 : 0;
  }

  let left = 0, right = 0;
  for (left=A; left<=B; left++) {
      if (left%K === 0) {
          break;
      }
  }

   for (right=B; right>=A; right--) {
      if (right%K === 0) {
          break;
      }
  }

  return Math.abs((left/K) - (right/K)) + 1;
}