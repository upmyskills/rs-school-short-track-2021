/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.stackElements = [];
  }

  push(element) {
    // throw new Error('Not implemented');
    this.stackElements.push(element);
  }

  pop() {
    // throw new Error('Not implemented');
    return this.stackElements.pop();
  }

  peek() {
    // throw new Error('Not implemented');
    return this.stackElements[this.stackElements.length - 1];
  }
}

// const stack = new Stack();

// stack.push(5);
// stack.push(6);
// stack.push(7);

// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());

// g.push(2);
// g.push('2');
// g.push(3);
// g.push('6');
// let k = g.peek();
// g.push('0');
// k = g.peek();
// g.pop();
// g.pop();
// g.pop();
// g.pop();

// console.log(k, g);

module.exports = Stack;
