const data = require('./DataFeed.js');
const helper = require('./Helper.js');

function LoopNodes(root, level=0) {
    console.log(helper.FormatValue(root.value,level)); 
    if (root.nodes.length > 0) {
        level++;
        root.nodes.forEach((node)=>{
            LoopNodes(node,level);
        });
    }
    return;
};

// MAIN
LoopNodes(data);