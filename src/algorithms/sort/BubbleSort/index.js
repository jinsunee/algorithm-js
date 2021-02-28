// 오름차순.

// sort: desc, asc
function bubbleSort(array, sort = 'asc') {
  let N = array.length;

  if (N <= 1) {
    return array;
  }

  if (sort === 'asc') {
    for (let i=N-1; i>0; i--) {
      for (let j=1; j<=i; j++) {
        if (array[j-1] >= array[j]) {
          [array[j-1], array[j]] = [array[j], array[j-1]];
        }
      }
    }

    return array;
  } 

  for (let i=N-1; i>0; i--) {
    for (let j=1; j<=i; j++) {
      if (array[j-1] <= array[j]) {
        [array[j-1], array[j]] = [array[j], array[j-1]];
      }
    }
  }

  return array;
}

module.exports = bubbleSort;