const node9 = {
    data: '9',
    children: [],
};
const node8 = {
    data: '8',
    children: [],
};
const node7 = {
    data: '7',
    children: [],
};
const node6 = {
    data: '6',
    children: [node8, node9],
};
const node5 = {
    data: '5',
    children: [node7],
};
const node4 = {
    data: 'target data',
    children: [],
};
const node3 = {
    data: '3',
    children: [node6],
};
const node2 = {
    data: '2',
    children: [node4, node5],
};
const treeRoot = {
    data: '1',
    children: [node2, node3],
};

function traverseTree() {
    let currentNode = null;
    const nextNodes = [treeRoot];

    while (nextNodes.length !== 0) {
        currentNode = nextNodes.pop();
        console.log(currentNode)

        if (currentNode.data === 'target data') {
            return currentNode;
        }

        nextNodes.push(...currentNode.children);
    }

    return null;
}

console.log(traverseTree());
