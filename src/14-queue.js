// const ListNode = require('../extensions/list-node');
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

// function ListNode(x) {
// this.value = x;
// this.next = null;
// }

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = new ListNode();
    this.tail = this.head;
    this.count = 0;
  }

  get size() {
    return this.count;
  }

  enqueue(el) {
    this.tail.value = el;
    this.tail.next = new ListNode();
    this.tail = this.tail.next;
    this.count++;
  }

  dequeue() {
    const val = this.head.value;
    this.head = this.head.next;
    this.count--;
    return val;
  }
}

module.exports = Queue;
