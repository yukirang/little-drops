class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (newNode.value < current.value) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
      //Or: recursively find node and insert.
    }
    return this;
  }

  search(value) {
    const result = this._findNode(this.root, value);
    return result ? true : false;
  }

  remove(value) {
    if (this.root === null) return false;

    let current = this.root;
    let parent = null;

    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else if (currentNode.value === value) {
        //Node finded

        //1. Node without right child (including leaf node)
        if (current.right === null) {
          if (parent === null) {
            // root node
            this.root = current.left;
          } else if (value < parent.value) {
            parent.left = current.left;
          } else {
            parent.right = current.left;
          }
          return current;

          //2. Node without left child but with right child
        } else if (current.left === null) {
          if (parent === null) {
            // root node
            this.root = current.right;
          } else if (value < parent.value) {
            parent.left = current.right;
          } else {
            parent.right = current.right;
          }
          return current;

          //3. Fufilled Node
        } else if (current.left !== null && current.right !== null) {
          // Find a successor, which is the left most node in current subtree
          const successor = this._getSuccessor(current);

          if (parent === null) {
            // root node
            this.root = successor;
          }

          // 3.1 Node is left child of its parent
          else if (value < parent.value) {
            parent.left = successor;
            // 3.2 Node is right child of its parent
          } else {
            parent.right = successor;
          }
        }
        return true;
      }
    }
    return false;
  }

  _findNode(current, value) {
    if (current === null) return false;
    if (value === current.value) return current;
    return value < current.value
      ? this._findNode(current.left, value)
      : this._findNode(current.right, value);
  }

  _getSuccessor(current) {
    let parent = current;
    let successor = current.left;

    //Find the left most node in current subtree
    while (successor.left !== null) {
      parent = successor;
      successor = successor.left;
    }

    //Dealing with the change of successor and its parent
    parent.left = successor.right;
    successor.left = current.left;
    successor.right = current.right;

    return successor;
  }
}
