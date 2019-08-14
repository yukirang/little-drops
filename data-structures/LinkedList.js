class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  _findNode(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  append(value) {
    const newNode = new Node(value);
    // empty
    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    // empty
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // index Over Range
    if (index > this.length || index < 0) return null;
    // empty
    if (index === 0) return this.prepend(value);

    const pre = this._findNode(index - 1);
    const aft = pre.next;
    const newNode = new Node(value);

    pre.next = newNode;
    newNode.next = aft;
    this.length++;
    return this;
  }

  remove(index) {
    let temp = this.head.value;
    // empty or index over range
    if (this.length === 0 || index > this.length - 1 || index < 0) return null;
    // only one node in linked list
    if (this.length === 1) {
      this.clear();
      return temp;
    }
    // remove head node
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const pre = this._findNode(index - 1);
      temp = pre.next.value;
      // remove tail node
      if (index === this.length - 1) this.tail = pre;
      pre.next = pre.next.next;
    }
    this.length--;
    return temp;
  }

  removeFirst() {
    return this.remove(0);
  }

  removeLast() {
    return this.remove(this.length - 1);
  }

  reverse() {
    if (this.length > 1) {
      let pre = null;
      let current = this.head;
      let aft;
      this.tail = this.head;
      while (current) {
        aft = current.next;
        current.next = pre;
        pre = current;
        current = aft;
      }
      this.head = pre;
    }
    return this;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  get(index) {
    // empty or index over range
    if (this.length === 0 || index > this.length - 1 || index < 0) return null;

    return this._findNode(index).value;
  }

  getFirst() {
    return this.head.value;
  }
  getLast() {
    return this.tail.value;
  }

  contains(value) {
    let current = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  indexOf(value) {
    let current = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      if (current.value === value) return i;
      current = current.next;
    }
    return -1;
  }

  getListArr() {
    const listArr = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      listArr.push(current.value);
      current = current.next;
    }
    return listArr;
  }

  size() {
    return this.length;
  }
}

//Example
let myLinkedList = new LinkedList();
myLinkedList.append(5);
myLinkedList.append('hello');
myLinkedList.prepend(1);
myLinkedList.insert(2, 3);
myLinkedList.insert(0, 25);
myLinkedList.insert(5, 20);
console.log(myLinkedList.getListArr());

myLinkedList.reverse();
console.log(myLinkedList.getListArr());

console.log(myLinkedList.get(2));
console.log(myLinkedList.getFirst());
console.log(myLinkedList.getLast());
console.log(myLinkedList.contains('hello'));
console.log(myLinkedList.indexOf('16'));

myLinkedList.removeFirst();
myLinkedList.removeLast();
console.log(myLinkedList.getListArr());
console.log(myLinkedList.size());

myLinkedList.clear();
console.log(myLinkedList.isEmpty());
