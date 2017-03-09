function LoopNodes(root, level = 0, items) {
    items.push({ value: root.value, level });
    if (root.nodes.length > 0) {
        level++;
        root.nodes
            .reverse()
            .forEach((node) => {
                LoopNodes(node, level, items);
            });
    }
    return;
};
function Preprocess(nodes) {
    let items = [];
    LoopNodes(nodes, 0, items);
    return items;
}
export default Preprocess;