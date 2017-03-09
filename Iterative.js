const data = require('./DataFeed.js');

let stack = [];
function IterateOverTree(root) {
    let level = 0;
    root = {node:root,level:0};
    while (root !== undefined) {
        console.log(FormatValue(root.node.value,root.level));
        let tmp = [];
        root.node.nodes.forEach((node=>{
            tmp.push({node:node,level:root.level+1});
        }));
        // because of reversing nodes
        stack.push(...tmp.reverse());
        root = stack.pop();
    }
};

function FormatValue(value, level) {
    let tmp = "";
    for (let i = level; i > 0; i--) {
        tmp += "  ";
    }
    return `${tmp} - ${value}`;
}

// MAIN
IterateOverTree(data);
