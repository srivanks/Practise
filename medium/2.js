function LinkedList(data) {
    this.data = data;
    this.next = null;
}

function addLinkedList(l1, l2) {
    let l3 = new LinkedList(-1);
    let head = null;
    let sum = 0;
    let carry = 0;
    while (l1 && l2) {
        if (!head) {
            head = l3;
        } else {
            l3.next = new LinkedList(-1);
            l3 = l3.next;
        }
        sum = l1.data + l2.data;
        if (sum >= 10) {
            sum = sum - 10;
            l3.data = sum + carry;
            carry = 1;
        } else {
            l3.data = sum + carry;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    return head;
}

function printList(l) {
    let res = [];
    while (l) {
        res.push(l.data);
        l = l.next;
    }
    return res;
}

let l1 = new LinkedList(2);
l1.next = new LinkedList(4);
l1.next.next = new LinkedList(3);

let l2 = new LinkedList(5);
l2.next = new LinkedList(6);
l2.next.next = new LinkedList(4);

console.log(addLinkedList(l1, l2));
// printList(l3);
