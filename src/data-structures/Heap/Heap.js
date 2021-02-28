class Heap {
  constructor() {
    this.items = [];
  }
  
  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
  }

  parentIndex(index) {
    return Math.floor((index-1) / 2);
  }

  leftIndex(index) {
    return index * 2 + 1;
  }

  rightIndex(index) {
    return index * 2 + 2;
  }
  
  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.items[this.leftIndex(index)];
  }

  rightChild(index) {
    return this.items[this.rightIndex(index)];
  }

  peek() {
    return this.items[0];
  }
  
  size() {
    return this.items.length;
  }
}

module.exports = Heap;








