const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  //добавляем доп. ноду для перебора листа через .next
  let addNode = new ListNode(0);
  addNode.next = l;
  let addList = addNode;


  while (addList.next) {
    if (addList.next.value === k) { //если значение совпадает с заданным
      addList.next = addList.next.next; //то устанавливаем ссылку на следующий элемент после k, т.о. k-удаляется
    } else {
      addList = addList.next; //иначе переходим на следующий элемент
    }
  }

  let res = addNode.next;

  return res;
}

module.exports = {
  removeKFromList
};
