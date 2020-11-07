function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function (head) {
    if (!head) {
        return false;
    }
    let slow = head;
    let fast = head.next;

    while (slow && fast) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next && fast.next.next;
    }
    return -1;
};

let head = new ListNode(1);
let x = new ListNode(2);
head.next = x;
// head.next.next = new ListNode(0);
// head.next.next.next = new ListNode(-4);
// head.next.next.next.next = x;

console.log(hasCycle(head));
