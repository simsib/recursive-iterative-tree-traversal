const data = require('./DataFeed.js');
const helper = require('./Helper.js');
let stack = [];
function IterateOverTree(root) {
    let level = 0;
    root = {node:root,level:0};
    while (root !== undefined) {
        console.log(helper.FormatValue(root.node.value,root.level));
        root.node.nodes.reverse().forEach((node=>{
            stack.push({node:node,level:root.level+1});
        }));
        root = stack.pop();
    }
};

// MAIN
IterateOverTree(data);
