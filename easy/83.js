function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteDuplicates = function (head) {
    if (!head) {
        return null;
    }
    let arr = [head.val];
    let dummy = new ListNode(head.val);
    let tail = dummy;
    while (head) {
        if (arr.indexOf(head.val) === -1) {
            arr.push(head.val);
            tail.next = head;
            tail = tail.next;
        }
        head = head.next;
    }
    tail.next = null;
    return dummy;
};


let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

function main() {
    let dummy = deleteDuplicates(head);
    while (dummy) {
        console.log(dummy.val);
        dummy = dummy.next;
    }
}

main();
