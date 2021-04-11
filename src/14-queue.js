const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.queueList = null;
  }

  get size() {
    // throw new Error('Not implemented');
    return this.queueList;
  }

  enqueue(el) {
    // throw new Error('Not implemented');
    const queue = new ListNode(el);
    queue.value = el;

    if (!this.queueList) {
      this.queueList = queue;
    } else {
      let currentPos = this.queueList;
      while (currentPos.next) {
        currentPos = currentPos.next;
      }
      currentPos.next = queue;
    }

    // console.log(this.queueList);
  }

  dequeue() {
    // throw new Error('Not implemented');
    const val = this.queueList.value;
    const tmp = this.queueList.next;
    this.queueList = tmp;
    return val;
  }
}

// const que = new Queue();

// que.enqueue(4);
// que.enqueue(5);
// que.enqueue(6);
// que.dequeue();

module.exports = Queue;
