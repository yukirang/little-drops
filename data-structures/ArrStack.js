class Stack {
  constructor() {
    this.stackArr = [];
  }
  peek() {
    return this.stackArr[this.stackArr.length - 1];
  }
  push(value) {
    return this._stackArr.push(value);
  }
  pop() {
    return this._stackArr.pop();
  }
  isEmpty() {
    return this.stackArr.length === 0;
  }
  search(value) {
    return this.stackArr.indexOf(value);
  }
  remove(value) {
    for (let i = 0; i < this.stackArr.length; i++) {
      if (this.stackArr[i] === value) {
        return this.stackArr.splice(index, 1);
      }
    }
    return false;
  }
  removeAt(index) {
    return this.stackArr.splice(index, 1);
  }
  clear() {
    this.stackArr.length = 0;
  }
  size() {
    return this.stackArr.length;
  }
  getArray() {
    return this.stackArr;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push('ok');
myStack.push('233');
myStack.push(3);
console.log(myStack.isEmpty());
myStack.remove(3);
myStack.removeAt(3);
