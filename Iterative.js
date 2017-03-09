const data = require('./DataFeed.js');
const helper = require('./Helper.js');
console.log(helper);
let stack = [];
function IterateOverTree(root) {
    let level = 0;
    root = {node:root,level:0};
    while (root !== undefined) {
        console.log(helper.FormatValue(root.node.value,root.level));
        let tmp = [];
        root.node.nodes.forEach((node=>{
            tmp.push({node:node,level:root.level+1});
        }));
        // because of reversing nodes
        stack.push(...tmp.reverse());
        root = stack.pop();
    }
};


// MAIN
IterateOverTree(data);
