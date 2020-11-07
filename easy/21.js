function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function (l1, l2) {
    let current = new ListNode(-1);
    let tail = current;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if (l1) {
        tail.next = l1;
    }
    if (l2) {
        tail.next = l2;
    }
    return current.next;
};

function inPlaceMerge(l1, l2) {
    let head;
    let tail;
    if (l1.val <= l2.val) {
        head = tail = l1;
        l1 = l1.next;
    } else {
        head = tail = l2;
        l2 = l2.next;
    }
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l2;
            l1 = l1.next;
        } else {
            tail.next = l1;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    return head;
}

function main() {
    let l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(4);

    let l2 = new ListNode(1);
    l2.next = new ListNode(3);
    l2.next.next = new ListNode(4);

    let merged = mergeTwoLists(l1, l2);

    while (merged) {
        console.log(merged.val);
        merged = merged.next;
    }
}

main();