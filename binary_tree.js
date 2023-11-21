class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    removeNode(value) {
        if (this.root === null) {
            return null;
        }

        const findMinNode = (node) => {
            if (node.left === null) {
                return node;
            }
            return findMinNode(node.left);
        };

        const removeNodeHelper = (node, value) => {
            if (node === null) {
                return null;
            }

            if (value < node.value) {
                node.left = removeNodeHelper(node.left, value);
            } else if (value > node.value) {
                node.right = removeNodeHelper(node.right, value);
            } else {
                if (node.left === null && node.right === null) {
                    node = null;
                } else if (node.left === null) {
                    node = node.right;
                } else if (node.right === null) {
                    node = node.left;
                } else {
                    const minRightNode = findMinNode(node.right);
                    node.value = minRightNode.value;
                    node.right = removeNodeHelper(node.right, minRightNode.value);
                }
            }

            return node;
        };

        this.root = removeNodeHelper(this.root, value);
    }
    
}

// Usage example:
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
