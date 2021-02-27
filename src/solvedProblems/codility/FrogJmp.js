function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  if ((Y-X)%D > 0) {
      return Math.floor((Y-X)/D) + 1;
  }

  return Math.floor((Y-X)/D);
}