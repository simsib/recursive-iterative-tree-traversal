export default class TreeNode {
    constructor(id,value, nodes = []) {
        this.id = id;
        this.value = value;
        this.nodes = nodes.slice();
    }
    addNewNode(node) {
        this.nodes = [...this.nodes,node];
    }
}