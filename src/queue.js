const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const addNode = new ListNode(value); //создаём ноду

    if (!this.head) {                    //если у нас нет в очереди элементов
      this.head = this.tail = addNode;   //то добавляем первый элемент - он же и последний
    } else {
      this.tail.next = addNode;          //создаём ссылку между последним элементом и новым
      this.tail = addNode;               //меняем последний укзатель на новый элемент
    }
  }

  dequeue() {
    let value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}

module.exports = {
  Queue
};
