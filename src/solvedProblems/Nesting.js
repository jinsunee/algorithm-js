// 100%
function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sArray = S.split('');
  const stack = [];

  for (let s of sArray) {
      if (s === '(') {
          stack.push(s);
          continue;
      } 

      if (stack.length === 0) {
          return 0;
      }

      stack.pop();
  }

  if(stack.length > 0) {
      return 0;
  }

  return 1;
}