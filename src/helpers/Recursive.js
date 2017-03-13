function LoopNodes(root, level, items) {
    if (level !== -1) {
        items.push({ value: root.value, level });
    }
    if (root.nodes.length > 0) {
        level++;
        root.nodes
            .slice(0)   // because reverse does a reverse on reference
            .forEach((node) => {
                LoopNodes(node, level, items);
            });
    }
    return;
};
export function Preprocess(tree) {
    console.info(`Using recursive method!`);

    let items = [];
    // -1 offset for main root element
    LoopNodes(tree, -1, items);
    return items;
}