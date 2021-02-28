const BinaryTreeNode = require('./BinaryTreeNode');

class BinarySearchingTree {
  // 생성자
  constructor() {
    this.root = null;
  }







  
  insert(data) 
  { 
      // Creating a node and initailising  
      // with data  
      var newNode = new BinaryTreeNode(data); 
                        
      // root is null then node will 
      // be added to the tree and made root. 
      if(this.root === null) 
          this.root = newNode; 
      else
    
          // find the correct position in the  
          // tree and add the node 
          this.insertNode(this.root, newNode); 
  } 
    
  // Method to insert a node in a tree 
  // it moves over the tree to find the location 
  // to insert a node with a given data  
  insertNode(node, newNode) 
  { 
      // if the data is less than the node 
      // data move left of the tree  
      if(newNode.data < node.data) 
      { 
          // if left is null insert node here 
          if(node.left === null) 
              node.left = newNode; 
          else
    
              // if left is not null recur until  
              // null is found 
              this.insertNode(node.left, newNode);  
      } 
    
      // if the data is more than the node 
      // data move right of the tree  
      else
      { 
          // if right is null insert node here 
          if(node.right === null) 
              node.right = newNode; 
          else
    
              // if right is not null recur until  
              // null is found 
              this.insertNode(node.right,newNode); 
      } 
  } 














  
   /**
   * @param {BinaryTreeNode} data
   * @return {void}
   */
  // insert(data) {
  //   if(this.root === null) {
  //     this.root = new BinaryTreeNode(data);
  //     return;
  //   }

  //   function insertNode(node, newNode) {
      
  //   }
  // }

  // pre-order
  traversePreOrder() {
    if (!this.root) {
      console.log('Empty!!');
      return;
    }

  }

  // post-order
  traversePostOrder() {
    if (!this.root) {
      console.log('Empty!!');
      return;
    }

  }

  // in-order
  traverseInOrder() {
    if (!this.root) {
      console.log('Empty!!');
      return;
    }
    
  }
}

module.exports = BinarySearchingTree;