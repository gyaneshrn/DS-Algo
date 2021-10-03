/***
 * Implement Stack using linked list.
 *
 */
class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = null;
  }

  push(val) {
    let temp = new Node(val);
    if (temp == null) {
      return this.top;
    }
    temp.data = val;
    temp.next = null;
    if (this.size < 1 && this.top == null) {
      this.top = temp;
      this.top.next = null;
      this.size = 1;
    } else {
      const curr = this.top;
      temp.next = this.top;
      this.top = temp;
      this.size += 1;
    }
  }
  isEmpty() {
    return this.top == null;
  }

  pop() {
    let curr = this.top;
    if (this.size === 0) {
      return;
    }

    if (this.size === 1) {
      head = null;
      size = 0;
      return curr;
    }

    this.top = curr.next;
    this.size -= 1;
    return curr;
  }

  printStack() {
    let curr = this.top;
    while ((curr && curr.data) || curr.next !== null) {
      console.log(`Current item on stack is ${curr.data}`);
      console.log(`NEXT item on stack is `, curr.next);
      curr = curr.next;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.printStack();
console.log("lets pop");
// stack.pop();
// stack.printStack();
