const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class ListNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const addNode = new ListNode(data);

    if (!this.head) {
      this.head = addNode;
      return;
    }

    let current = this.head;

    while (current) {
      if (addNode.data < current.data) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = addNode;
          break;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = addNode;
          break;
        }
      }
    }
  }

  has(data) {
    let current = this.head;

    if (!current) {
      return false;
    }

    while (current) {
      if (current.data === data) {
        return true;
      }

      if (current.data < data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return false;
  }

  find(data) {
    let current = this.head;

    if (!current) {
      return null;
    }

    while (current) {
      if (current.data === data) {
        return current;
      }

      if (current.data < data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return null;
  }

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}

module.exports = {
  BinarySearchTree
};