function IterateOverTree(root) {
    let level = 0;
    let stack = [];
    let result = [];
    root = { node: root, level: 0 };
    while (root !== undefined) {
        result.push(
            {
                value: root.node.value,
                level: root.level
            });
        root.node.nodes
            .reverse()
            .forEach((node => {
                stack.push(
                    {
                        node: node,
                        level: root.level + 1
                    });
            }));
        root = stack.pop();
    }
    return result;
};

function Preprocess(items) {
    return IterateOverTree(items);
}

export default Preprocess;