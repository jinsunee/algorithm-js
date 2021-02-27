// 88%

// function solution(N, A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let rtn = Array(N+1).fill(0); // 0으로 배열 초기화

//   let max = 0;

//   for (let i=0, length = A.length; i<length; i++) {
//       let X = A[i];
//       if (1 <= X && X <= N) {
//           if (max < ++rtn[X]) {
//               max = rtn[X];
//           }
          
//           continue;
//       }

//       if (X === N+1) {
//           rtn.fill(max);
//       }
//   }

  
//   return rtn.slice(1);
// }

// 100%
function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let rtn = Array(N).fill(0); // 0으로 배열 초기화

  if (A.indexOf(N+1) === -1) {
      for (let item of A) {
          ++rtn[item-1];
      }

      return rtn;
  }

  for (let i=0, length = A.length, max = 0, flag = false; i<length; i++) {
      let X = A[i];
      if (1 <= X && X <= N) {
          flag = true;
          if (max < ++rtn[X-1]) {
              max = rtn[X-1];
          }
          
          continue;
      }

      if (X === N+1 && flag) { // flag가 가장 중요한데, 연달아 N+1이 나온다면 어쩌피 그 배열의 요소의 최댓값을 갱신하는거니까 안해줘도 된다. 88%에서 100%이 된 이유!!!
          flag = false; 
          rtn.fill(max);
      }
  }

  
  return rtn;
}
