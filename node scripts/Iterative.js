const data = require('./DataFeed.js');
const helper = require('./Helper.js');

function IterateOverTree(root) {
    let stack = [];
    let result = [];
    root = { node: root, level: -1 };
    while (root !== undefined) {
        if (root.node.value !== undefined) {
            result.push(helper.FormatValue(root.node.value, root.level));
        }
        stack.push(
            ...(root.node.nodes
                .slice(0)
                .reverse()
                .map(x => {
                    console.log(x);
                    return {
                        node: x,
                        level: root.level + 1
                    }
                })));
        root = stack.pop();
    }
    return result;
};

// MAIN
let result = IterateOverTree(data);
result.forEach(x=>console.log(x));