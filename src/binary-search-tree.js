const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {

  }
  //добавление элемента
  add(data) {
    //присвой нашему корню результат выполнения функции addWithin
    //ф-я addWithin добавляет внутрь какого-то поддерива this.root некое значение
    this.root = addWithin(this.root, data);

    function addWithin(node, data) {
      //если у нас узла нет, то мы добавляем новый узел
      if (!node) {
        return new Node(data);
      }

      //если мы нашли место для нашего элемента,а значения равны, то возвращаем ткущий узел
      if (node.data === data) {
        return node;
      }

      //проверяем в какую сторону положить новый элемент.
      //Если меньше текущей вершины, то слева, если больше, то справа
      //Элемент будет равен результату выполнения ф-ции addWithin
      //за счёт этих проверок addWithin будет обновлять текущие узлы
      //и когда мы дойдём до места с отсутствующии узлом, то мы добавим новый
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data)
      }

      return node;
    }

  }

  has(data) {
    //ищим узел сначала в главном дереве
    return searchWithin(this.root, data);

    function searchWithin(node, data) {
      //если у нас нет узла, хотя мы шли по верному направлению, то возвращаем false
      if (!node) {
        return false;
      }

      //если мы нашли наше значение то возвращаем true
      if (node.data === data) {
        return true;
      }

      //если условия выше не выполнены,
      //то пробуем искать в следующих узлах

      return data < node.dats ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
    }
  }

  find(data) {

  }

  remove(data) {
    //кладём в корень то, что получится после всех пребразований
    //т.е. удалим в поддереве узел со значением data
    this.root = removeWithin(this.root, data);


    //1. если нет узла, то оставляем null
    //2. осуществляем поиск нашего значения слева/справа
    //3. удаляем из поддерева искомое значение data
    //4. новое дерево, которое получится после удаления
    // искомого элемента положить в переменную
    // node.left/node.right
    // и return ложим этот узел наверх 
    function removeWithin(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeWithin(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeWithin(node.right, data);
        return node;
      } else {
        //если элементы равны 

        //и не имеют правого и левого потомк
        //то можно этот элемент удалить и вернуть null
        if (!node.left && !node.right) {
          return null;
        }

        //имеют только правого потомка
        if (!node.left) {
          node = node.right;
          return node;
        }

        //имеют только левого потомка
        //на место найденного узла добавляем дерево левого потомка
        // старый узел как бы исчезает
        if (!node.right) {
          node = node.left;
          return node;
        }

        //есть оба поддерева и левый, и правый
        //нужно найти минимум из поддерева
        //перемещаемся до тех пор, пока не дойдёт до мининум
        //и подставить его в текущий узел

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        //удали из правого поддерева минимальный элемент
        //т.е. мы пытаемс дважды совершить удалеие
        //сначала удаляем сам узел, перемещая его поотомка,
        // а потом его птомка
        node.right = removeWithin(node.right, minRight.data);


        //возвращаем текущий узел, который после рекурси подымится наверх
        //и так пройдёт по всему дереву до корня
        return node;

      }
    }

  }

  min() {

    //если нет элементов, то вернёт underfined
    if (!this.root) {
      return;
    }

    //ищим минимальный элемент до тех пор, пока не найдём
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    //проверяем,есть элементы справа
    if (!this.root) {
      return;
    }

    //делаем проход по правой части до минимального эл-та
    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};