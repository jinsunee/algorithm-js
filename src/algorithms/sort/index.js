const bubbleSort = require('./BubbleSort');

console.log('Bubble');
console.log(bubbleSort([6, 1, 2, 3, 4, 5]));
console.log(bubbleSort([6, 1, 2, 3, 4, 5], 'desc'));
console.log('-----------------------');

const merge = require('./MergeSort');
console.log('merge');
console.log(merge([6, 1, 2, 3, 4, 5]));
console.log(merge([6, 1, 2, 3, 4, 5], 'desc'));