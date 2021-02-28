const Heap = require('./Heap');

// Min Heap : 부모가 자식이랑 같거나 작아야한다.
class MinHeap extends Heap {
  constructor() {
    super();
  }
  
  print() {
    console.log(this.items);
  }

  // add: 배열의 맨 뒤에 삽입한 후, 아래부터 위로 만들어나가기
  add(item) {
    this.items.push(item);
    this.bubbleUp();

    return this.print();
  }
  
  // poll: root값을 뺀 후, 위로 올려가면서 아래로 정렬해나가기. 그리고 마지막에 처음에 빼둔 root 값 return.
  poll() {
    const root = this.items[0];
    const last = this.items.pop();
    this.items[0] = last;
    this.bubbleDown();
    return root;
  }

  // 아래부터 위로 만들어나가기
  bubbleUp() {
    // 마지막에 있는 배열 아이템의 부모 확인
    if (this.size() === 1) {
      return;
    }

    // 부모랑 비교 -> 
    let index = this.size() - 1; // 마지막 자식부터 시작
    
    while (this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  } 

  // 위에서부터 아래로 정렬해나가기
  bubbleDown() {
    // root 부터 시작
    let index = 0;
    while((this.leftChild(index) && this.leftChild(index) < this.items[index])) {
      let smallestIndex = this.leftIndex(index);
      
      if (this.rightChild(index) && this.rightChild(index) < this.items[index]) {
        if (this.items[smallestIndex] > this.rightChild(index)) {
          smallestIndex = this.rightIndex(index);
        }
      }

      this.swap(smallestIndex, index);
      index = smallestIndex;
    }
  }
}

module.exports = MinHeap;