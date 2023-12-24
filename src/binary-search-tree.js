const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class ListNode {
  constructor(value) {
    this.value = value;
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
      if (addNode.value < current.value) {
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
    if (current.value === data) {
      return true;
    }

    while (current) {
      if (current.value < data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
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