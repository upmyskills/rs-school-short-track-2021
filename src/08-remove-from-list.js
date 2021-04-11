/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(list, killIt) {
  // throw new Error('Not implemented');
  // const numbers = /[0-9]+/gi;
  // return JSON.stringify(list).match(numbers).map((num) => +num).filter((num) => num !== killIt);
  let cur = list;
  const del = killIt;
  const deleteEnt = (ent) => removeKFromList(ent, del);

  if (cur.value === killIt) cur = cur.next;
  if (!cur.next) return cur;

  cur.next = deleteEnt(cur.next);
  return cur;
}

module.exports = removeKFromList;
