function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2).split('');

  let maxValue = 0, count = 0;

  for (let b of binary) {
      if (b === '1') {
          if (maxValue < count) {
              maxValue = count;
          }
          count = 0;
          continue;
      }

      // 0
      count++;
  }

  return maxValue;
}

solution(42);