const BinarySearchingTree = require('./BinarySearchingTree');

const tree = new BinarySearchingTree();

const inputs = [42, 41, 50, 10, 40, 45, 75];
tree.insert('42');
tree.insert('41');
tree.insert('50');
tree.insert('10');
tree.insert('40');
tree.insert('45');
tree.insert('75');

console.log(tree.left);

// for (let i of inputs) {
//   tree.insert(i);
// }

// console.log(tree.root.right);

// tree.print();