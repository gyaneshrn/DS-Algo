const Node = require("./Node");

class LinkedListLoop {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  printList() {
    let curr = this.head;
    while (curr !== null) {
      curr = curr.next;
    }
  }
  createLoop() {
    this.tail.next = this.head.next.next;
  }

  detectLoopIn() {
    let node = this.head;
    let slow = node,
      fast = node;
    while (slow !== null && fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        slow = this.head;
        while (slow.next !== fast.next) {
          slow = slow.next;
          fast = fast.next;
        }
        fast.next = null;
      }
    }
  }
}

const node = new LinkedListLoop();
node.add(2);
node.add(3);
node.add(4);
node.add(5);
node.add(6);
node.add(7);

//let's create loop
node.createLoop();

// break loop
node.detectLoopIn();

console.log("print list >>>", node.printList());
