const data = require('./DataFeed.js');
function LoopNodes(root, level=0) {
    console.log(FormatValue(root.value,level)); 
    if (root.nodes.length > 0) {
        level++;
        root.nodes.forEach((node)=>{
            LoopNodes(node,level);
        });
    }
    return;
};

function FormatValue(value,level){
    let tmp = "";
    for (let i = level; i > 0; i--){
        tmp += "  ";
    }
    return `${tmp} - ${value}`;
}


// MAIN
LoopNodes(data);
