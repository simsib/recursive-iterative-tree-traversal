const data = require('./DataFeed.js');
const helper = require('./Helper.js');

function LoopNodes(root, level = -1) {
    if (root.value !== undefined) {
        console.log(helper.FormatValue(root.value, level));
    }
    if (root.nodes.length > -1) {
        level++;
        root.nodes.slice(0).forEach((node) => {
            LoopNodes(node, level);
        });
    }
    return;
};

// MAIN
LoopNodes(data);