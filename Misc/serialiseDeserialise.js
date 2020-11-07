function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


function serialise(r, s) {
    if (!r) {
        s.push('#');
        return;
    }
    s.push(r.val);
    serialise(r.left, s);
    serialise(r.right, s);
}

function deserialise(r, s, start, l) {
    if (start > l) {
        return;
    }
    if (s[start] === '#') {
        return null;
    }
    r = new TreeNode(s[start]);
    start++;
    deserialise(r.left, s, start, l);
    start++;
    deserialise(r.right, s, start, l);
    return r;
}


let r = new TreeNode(1);
r.left = new TreeNode(2);
r.left.left = new TreeNode(4);
r.left.right = new TreeNode(5);
r.left.left.left = new TreeNode(6);
r.right = new TreeNode(3);

let serial = [];
serialise(r, serial);
console.log(serial);

let rr = null;
deserialise(rr, serial, 0, serial.length - 1);
console.log(rr);
