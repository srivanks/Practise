function Node(val) {
    this.data = val;
    this.left = this.right = null;
}

function previousNodes(root) {
    if (!root) {
        return null;
    }
    let left = previousNodes(root.left);
    let right = previousNodes(root.right);

    console.log('Current node is:: ', root && root.data, 'left node is :: ', left && left.data);
    console.log('=====================')
    console.log('Current node is:: ', root && root.data, 'right node is :: ', right && right.data);
    console.log('*********************')


    return root;
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

previousNodes(root);