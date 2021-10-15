class Node {
  constructor(key = val, val = null) {
    this.key = key;
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}

class LRU {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = 4;
    this.cache = {};
  }

  put(key, value) {
    let newnode;
    if (this.cache[key] === undefined) newnode = new Node(key, value);
    if (this.size === this.maxSize) {
      delete this.cache[this.tail.key];
      this.head = newnode;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
      return this;
    }
    this.head.prev = newnode;
    newnode.next = this.head;
    this.head = newnode;
    this.size++;

    this.cache[key] = newnode;
    return this;
  }

  get(key) {
    if (!this.cache[key]) return undefined;
    if (foundNode === this.head) return this.cache[key];

    let foundNode = this.cache[key];
    let previous = foundNode.prev;
    let next = foundNode.next;
    if (foundNode.next === this.tail) {
      previous.next = null;
      this.tail = previous;
    } else {
      previous.next = next;
      next.prev = previous;
    }
    this.head.prev = foundNode;
    foundNode.next = this.head;
    foundNode.prev = null;
    this.head = foundNode;
    return foundNode;
  }
}
