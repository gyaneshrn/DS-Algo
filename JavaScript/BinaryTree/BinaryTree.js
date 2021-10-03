class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

function InOrderTraversal(node) {
  if (node == null) {
    return node;
  }
  InOrderTraversal(node.left);
  console.log(">>> Inorder value", node.data);
  InOrderTraversal(node.right);
}

function PostOrderTraversal(node) {
  if (node == null) {
    return node;
  }
  PostOrderTraversal(node.left);
  PostOrderTraversal(node.right);
  console.log(">>>> Post Order value:", node.data);
}

function PreOrderTraversal(node) {
  if (node == null) {
    return node;
  }
  console.log(">>>> Pre Order value <<<<:", node.data);
  PreOrderTraversal(node.left);
  PreOrderTraversal(node.right);
}

const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);

InOrderTraversal(node);
PostOrderTraversal(node);
PreOrderTraversal(node);
