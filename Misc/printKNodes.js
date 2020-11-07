function Node(val) {
    this.data = val;
    this.left = this.right = null;
}

function pathLength(root, node) {
    if (!root) {
        return -1;
    }
    if (root.data === node.data) {
        return 0;
    }

    let left = 1 + pathLength(root.left, node);
    let right = 1 + pathLength(root.right, node);

    if (left === -1 && right === -1) {
        return -1;
    }
    return Math.max(left, right);
}

function searchUpOrDownTheTree(r, t, prev, k, goDown) {
    if (!r) return;
    if (k === 0) {
        console.log(r.data);
    }
    if (goDown) {
        searchUpOrDownTheTree(r.left, t, prev, k - 1, goDown);
        searchUpOrDownTheTree(r.right, t, prev, k - 1, goDown);
    } else {
        if (r.left !== prev) {
            searchUpOrDownTheTree(r.left, t, prev, k - 1, goDown);
        }
        if (r.right !== prev) {
            searchUpOrDownTheTree(r.right, t, prev, k - 1, goDown);
        }
    }
}

function searchForNodesAtDistanceK(r, t, k, n) {
    if (!r) return;

    let left = null;
    let right = null;

    if (r.data === t.data) {
        searchUpOrDownTheTree(r, t, null, n, true);
        return r;
    }

    left = searchForNodesAtDistanceK(r.left, t, k - 1, n);
    right = searchForNodesAtDistanceK(r.right, t, k - 1, n);

    if (left) {
        searchUpOrDownTheTree(r, t, left, n - k, false);
        return r;
    }
    if (right) {
        searchUpOrDownTheTree(r, t, right, n - k, false);
        return r;
    }
    return null;
}

function pkNodes(r, t, distance) {
    let pl = pathLength(r, t) - 1;
    // console.log(pl);
    searchForNodesAtDistanceK(r, t, pl, distance);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.left.left = new Node(9);
root.left.right = new Node(5);
root.left.right.left = new Node(6);
root.left.right.right = new Node(7);
root.left.right.right.right = new Node(10);
root.left.right.right.right.left = new Node(11);
root.right.right = new Node(8);


console.log(pkNodes(root, root.left.right, 3));