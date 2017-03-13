export default class TreeNode {
    constructor(value, nodes = []) {
        this.value = value;
        this.nodes = nodes.slice();
    }
    addNewNode(node) {
        this.nodes = [...this.nodes, node];
    }
}