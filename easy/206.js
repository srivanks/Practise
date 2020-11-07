function ListNode(data) {
    this.val = data;
    this.next = null;
}

var reverseList = function (head) {
    if (!head.next) {
        return head;
    }
    let x = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return x;
};


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let x = reverseList(head);
console.log(x)