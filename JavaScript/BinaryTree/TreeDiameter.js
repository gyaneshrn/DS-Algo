/***
 * Impleament program to calculate diameter of binary tree
 */

const diameterOfBinaryTree = (root) => {
  const DFS = (node) => {
    if (node == null) {
      return 0;
    }

    let left = DFS(node.left);
    let right = DFS(node.right);
    max = Math.max(max, 1 + left + right);
    return 1 + Math.max(left + right);
  };
  let max = 0;
  DFS(root);
  return max;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(11);
root.right.left.right = new TreeNode(13);
root.right.left.right.right = new TreeNode(15);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(6);
root.left.left.left.right = new TreeNode(7);
root.left.left.left.right.right = new TreeNode(8);

const start = performance.now();
console.log(diameterOfBinaryTree(root));
const end = performance.now();
const time = end - start;
console.log("execution time ::" + time + " ms");
