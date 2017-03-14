const data = require('./DataFeed.js');
const helper = require('./Helper.js');
let stack = [];
function IterateOverTree(root) {
    root = { node: root, level: -1 };
    while (root !== undefined) {
        if (root.node.value !== undefined) {
            console.log(helper.FormatValue(root.node.value, root.level));
        }
        root.node.nodes
            .slice(0)
            .reverse()
            .forEach((node => {
                stack.push({ node: node, level: root.level + 1 });
            }));
        root = stack.pop();
    }
};

// MAIN
IterateOverTree(data);
