function IterateOverTree(root) {
    let level = -1;
    let stack = [];
    let result = [];
    root = { node: root, level: level };
    while (root !== undefined) {
        if (root.level !== -1) {
            result.push(
                {
                    id: root.node.id,
                    value: root.node.value,
                    level: root.level
                });
        }
        root.node.nodes
            .slice(0)   // because reverse does a reverse on reference
            .reverse() // because my stack works like that
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

export function Preprocess(tree) {
    console.info(`Using iterative method!`);
    return IterateOverTree(tree);
}

