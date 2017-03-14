export default class Tree {
    constructor(name, nodes = []) {
        this.name = name;
        this.nodes = nodes.slice();
  }
  addNewNode(node){
      this.nodes = [...this.nodes,node];
  }
}