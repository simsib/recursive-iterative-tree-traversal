const data = require('./DataFeed.js');

let stack = [];
function IterateOverTree(root) {
    let level = 0;
    root = {node:root,level:0};
    while (root !== undefined) {
        console.log(FormatValue(root.node.value,root.level));

        root.node.nodes.forEach((node=>{
            stack.push({node:node,level:root.level+1});
        }));
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
// side effect: reverses the tree
IterateOverTree(data);
