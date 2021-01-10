import Comparator from "../../utils/comparator/Comparator";
import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    this.head = null;

    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {
    // Make new node to be a head
    const newNode = new LinkedListNode(value, this.head); // value는 있고 다음꺼는 아직 없는 상태
    this.head = newNode;

    // If there is no tail yet, let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    // if there is no head yet, let's make new node a head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete;
}
