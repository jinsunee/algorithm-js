const MinHeap = require('./MinHeap');
const MaxHeap = require('./MaxHeap');

const newMinHeap = new MinHeap();

newMinHeap.add(50);
newMinHeap.add(10);
newMinHeap.add(1);
newMinHeap.add(9);
newMinHeap.add(20);
newMinHeap.add(100);
newMinHeap.add(25);

console.log('out', newMinHeap.poll());
console.log('out', newMinHeap.poll());
console.log('out', newMinHeap.poll());
console.log('out', newMinHeap.poll());
console.log('out', newMinHeap.poll());
console.log('out', newMinHeap.poll());
console.log('out', newMinHeap.poll());

const newMaxHeap = new MaxHeap();
newMaxHeap.add(50);
newMaxHeap.add(10);
newMaxHeap.add(1);
newMaxHeap.add(9);
newMaxHeap.add(20);
newMaxHeap.add(100);
newMaxHeap.add(25);

console.log('out', newMaxHeap.poll());
console.log('out', newMaxHeap.poll());
console.log('out', newMaxHeap.poll());
console.log('out', newMaxHeap.poll());
console.log('out', newMaxHeap.poll());
console.log('out', newMaxHeap.poll());
console.log('out', newMaxHeap.poll());