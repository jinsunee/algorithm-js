function merge (array, sort = 'asc') {
  const N = array.length;

  if (N <= 1) {
    return array; // 배열 크기가 1일 경우는 이미 정렬됐다고 보고, 0일 경우는 정렬할 필요가 없다.
  }

  const middle = Math.floor(N/2),
        leftArray = array.slice(0, middle),
        rightArray = array.slice(middle);

  if (sort === 'asc') {
    return mergeSortAsc(merge(leftArray, sort), merge(rightArray, sort));
  }
  return mergeSortDesc(merge(leftArray, sort), merge(rightArray, sort));
}

function mergeSortAsc(leftA, rightA) {
  let rtn = [], leftIndex = 0, rightIndex = 0;
  
  while(leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      rtn.push(leftA[leftIndex++]);
    } else {
      rtn.push(rightA[rightIndex++]);
    }
  }

  const remainLeftA = leftA.slice(leftIndex);
  const remainRightA = rightA.slice(rightIndex);

  return rtn.concat(remainLeftA).concat(remainRightA);
}

function mergeSortDesc(leftA, rightA) {
  let rtn = [], leftIndex = 0, rightIndex = 0;
  
  while(leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] > rightA[rightIndex]) {
      rtn.push(leftA[leftIndex++]);
    } else {
      rtn.push(rightA[rightIndex++]);
    }
  }

  const remainLeftA = leftA.slice(leftIndex);
  const remainRightA = rightA.slice(rightIndex);

  return rtn.concat(remainLeftA).concat(remainRightA);
}

module.exports = merge;