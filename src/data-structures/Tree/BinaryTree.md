# Tree (이진 트리, Binary Tree)

## constructor

- root값 삽입 없을 때

  ```
  function BinaryTree() {
    this.value = null;
  }
  ```

- root값 있을 때
  ```
  function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  ```
