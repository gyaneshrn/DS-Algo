/***
 * Implement Level Order Traversal
 */

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
    this.level = null;
  }
}

function BFSTraversal(tree) {
  let out = [];
  let queue = [];
  queue.push(node);
  console.log({ queue });
  while (queue.length) {
    // get each elemnt from array;
    const el = queue.shift();
    if (el.left) {
      queue.push(el.left);
    }
    if (el.right) {
      queue.push(el.right);
    }
    out.push(el.data);
  }
  return out;
}

const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);

console.log(BFSTraversal(node));
