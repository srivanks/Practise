function ListNode(val) {
    this.val = val;
    this.next = null;
}

var detectCycle = function (head) {
    var fast = head, slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            break;
        }
    }

    if (!fast || !fast.next) {
        return null;
    }

    while (head != slow) {
        head = head.next;
        slow = slow.next;
    }

    return slow;
};

let head = new ListNode(1);
let x = new ListNode(2);
head.next = x;
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = x;

console.log(detectCycle(head));
