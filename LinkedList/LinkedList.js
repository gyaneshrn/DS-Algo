const Node = require("./Node");

console.log(new Node());
class LinkedList {
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

  swap(x, y) {
    if (x === y) return;
    let prevXNode, currXNode, prevYNode, currYNode;
    let curr = this.head;
    while (curr !== null) {
      if (curr.next !== null && curr.next.node === x) {
        prevXNode = curr;
      }
      if (curr.node === x) {
        currXNode = curr;
      }
      if (curr.next !== null && curr.next.node === y) {
        prevYNode = curr;
      }
      if (curr.node === y) {
        currYNode = curr;
      }
      curr = curr.next;
    }

    if (prevXNode && prevYNode) {
      let tempX = currXNode.next;

      prevXNode.next = currYNode;
      currXNode.next = currYNode.next;

      prevYNode.next = currXNode;
      currYNode.next = tempX.next;
    }
  }

  rotate(n) {
    let curr =  this.head;
    let count = 0;
    while(count < n && curr !== null){
      curr = curr.next;
      count++;
    }
    let lastNode = curr;

    while(curr.next !== null) {
      curr = curr.next;

      this.head = lastNode
    }
  }
  addAtLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;

    this.length++;
    return this;
  }

  find(index) {
    let current;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      for (let i = this.length; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }
  addAtIndex(index, val) {
    if (index < 0 || index > this.length) return this;
    if (index === 0) {
      this.add(val);
      return;
    }
    if (index === this.length) {
      this.addAtLast(val);
      return;
    }

    let pre = this.find(index),
      newNode = new Node(val),
      temp = pre.next;

    pre.next = newNode;
    newNode.next = temp;
    newNode.prev = pre;
    this.length++;
  }

  print() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.node);
      curr = curr.next;
    }
    console.log("Length of lisnked..list", this.length);
  }
}

const a = new LinkedList();
a.add(1);
a.add(2);
a.add(3);
a.add(4);
a.add(5);
a.add(6);
a.add(7);

console.log(a.print());
a.swap(3, 6);

console.log("after swap list ::");
a.print();

// console.log(a);
