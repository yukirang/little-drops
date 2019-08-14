import LinkedList from './LinkedList';

class Stack {
  constructor() {
    this.stackList = new LinkedList();
  }
  peek() {
    return this.stackList.getFirst();
  }
  push(value) {
    return this.stackList.prepend();
  }
  pop() {
    return this.stackList.removeFirst();
  }
  isEmpty() {
    return this.stackList.isEmpty();
  }
  search(value) {
    return this.stackList.indexOf(value);
  }
  remove(value) {
    return this.stackList.remove(value);
  }
  removeAt(index) {
    return this.stackList.removeAt();
  }
  clear() {
    this.stackList.clear();
  }
  size() {
    return this.stackList.size();
  }
  getArray() {
    return this.stackList.getListArr();
  }
}
