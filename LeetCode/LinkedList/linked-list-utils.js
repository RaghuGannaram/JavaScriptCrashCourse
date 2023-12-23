class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    generateLinkedListFromArray(arr) {
        for (const value of arr) {
            this.addNode(value);
        }
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeHead() {
        if (!this.head) {
            return null;
        }

        const removedValue = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        return removedValue;
    }

    removeTail() {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        let removedValue;

        if (current === this.tail) {
            removedValue = current.value;
            this.head = null;
            this.tail = null;
            return removedValue;
        }

        while (current.next !== this.tail) {
            current = current.next;
        }

        removedValue = current.next.value;
        current.next = null;
        this.tail = current;

        return removedValue;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.generateLinkedListFromArray([1, 2, 3, 4, 5]);

console.log(linkedList)

console.log("Original Linked List:");
linkedList.print();

console.log("\nRemoving Head:");
linkedList.removeHead();
linkedList.print();

console.log("\nRemoving Tail:");
linkedList.removeTail();
linkedList.print();
