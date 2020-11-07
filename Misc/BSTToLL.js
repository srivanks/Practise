/**
 * @return {null}
 */
function BSTtoLL(root) {
    let gHead = null;
    let head = null;

    function BSTtoLLUtil(root) {
        if (!root) {
            return;
        }
        BSTtoLLUtil(root.left);
        if (!gHead) {
            head = gHead = root;
        } else {
            gHead.right = root;
            root.left = null;
            gHead = gHead.right;
        }
        BSTtoLLUtil(root.right);
    }

    BSTtoLLUtil(root);
    return head;
}


function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

let r = new TreeNode(8);
r.left = new TreeNode(4);
r.left.left = new TreeNode(2);
r.left.right = new TreeNode(6);
r.right = new TreeNode(12);
r.right.left = new TreeNode(10);
r.right.right = new TreeNode(14);

let head = BSTtoLL(r);
// console.log(head);
r = null; //heap root
let cr = null;

function sortedLLtoMinHeap(h, r) {
    if (!h) {
        return null;
    }
    let q = [];
    r = h;
    h = h.right;
    q.push(r);
    console.log(r);
    while (h) {
        let n = q.pop();
        let left = h;
        h = h.right;
        q.push(left);
        n.left = left;
        if (h) {
            let right = h;
            h = h.right;
            q.push(right);
            n.right = right;
        }
    }
    return r;
}

console.log(sortedLLtoMinHeap(head, r));