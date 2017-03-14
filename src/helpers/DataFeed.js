import TreeNode from './TreeNode.js';
import Tree from './Tree.js';
let id = 1;
let node1 = new TreeNode(id++, 69, []);
let node2 = new TreeNode(id++, 1, []);
let node3 = new TreeNode(id++, 3, []);
let node4 = new TreeNode(id++, 4, [
    new TreeNode(id++,20, []), 
    new TreeNode(id++,30, []), 
    new TreeNode(id++,49, []), 
    new TreeNode(id++,50, []), 
    new TreeNode(id++,60, []), 
    new TreeNode(id++,70, [])]);
let node5 = new TreeNode(id++, 5, [
    new TreeNode(id++,"lorem", []), 
    new TreeNode(id++,"lorem ipsum", []), 
    new TreeNode(id++,"dolor", []), 
    new TreeNode(id++,"meow", []), 
    new TreeNode(id++,"whoop", []), 
    new TreeNode(id++,"ijasa", [])]);
let node6 = new TreeNode(id++,6, []);
let node7 = new TreeNode(id++,"gg0", []);
node1.addNewNode(node2);
node1.addNewNode(node3);
node2.addNewNode(node4);
node2.addNewNode(node5);
node2.addNewNode(node6);
let tree = new Tree("My Tree", [node1, node7]);

function find(id) {
    if (id===null)
    {
        return tree;
    }
    let stack = [];
    let node = tree;
    let found = false;
    while (node !== undefined && !found) {
        node.nodes
            .forEach((node => {
                stack.push(node);
            }));
        node = stack.pop();
        if (node.id && node.id === id) {
            found = true;
        }
    }
    return node;
}


function addNewNode(node,value){
    node.addNewNode(new TreeNode(id++,value));
}

export default {
    Data: tree,
    Find: find,
    AddNewNode: addNewNode
};