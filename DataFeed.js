const TreeNode = require('./TreeNode.js');

let node1 = new TreeNode(69,[]);
let node2 = new TreeNode(1,[]);
let node3 = new TreeNode(3,[]);
let node4 = new TreeNode(4,[new TreeNode(20,[]),new TreeNode(30,[]),new TreeNode(49,[]),new TreeNode(50,[]),new TreeNode(60,[]),new TreeNode(70,[])]);
let node5 = new TreeNode(5,[new TreeNode("lorem",[]),new TreeNode("lorem ipsum",[]),new TreeNode("dolor",[]),new TreeNode("meow",[]),new TreeNode("whoop",[]),new TreeNode("ijasa",[])]);
let node6 = new TreeNode(6,[]);
node1.addNewNode(node2);
node1.addNewNode(node3);
node2.addNewNode(node4);
node2.addNewNode(node5);
node2.addNewNode(node6);


module.exports = node1;