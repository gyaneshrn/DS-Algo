const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    let newNode;
    if (!this.head) {
      newNode = new Node(val);
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    newNode = new Node(val);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  sort(left, right) {
    let result;
    if (!left) {
      return right;
    }
    if (!right) {
      return left;
    }

    if (left.val <= right.val) {
      result = left;
      left.next = this.sort(left.next, right);
    } else {
      result = right;
      right.next = this.sort(right.next, left);
    }

    return result;
  }

  mergeSort(head) {
    if (!head || !head.next) {
      return head;
    }

    const middle = this.getMiddle(head);
    const middleRight = middle.next;
    middle.next = null;

    const left = this.mergeSort(head);
    const right = this.mergeSort(middleRight);
    console.log("left", JSON.stringify(left));
    console.log("right", JSON.stringify(right));
    return sort(left, right);
  }

  getMiddle(node) {
    if (!node) {
      return node;
    }
    let fastPtr = node.next;
    let slowPtr = node;
    while (fastPtr !== null) {
      fastPtr = fastPtr.next;
      if (fastPtr !== null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
      }
    }
    return slowPtr;
  }

  printList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log("Traversing current node", currentNode);
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);

// console.log(list);
// list.printList();
const nList = list.mergeSort(list.head);
// console.log(nList);
