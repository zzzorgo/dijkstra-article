const nodeI = {
    data: 'i',
    neighbors: [],
};
const nodeH = {
    data: 'h',
    neighbors: [],
};
const nodeE = {
    data: 'e',
    neighbors: [],
};
const nodeG = {
    data: 'g',
    neighbors: [nodeH, nodeI],
};
const nodeD = {
    data: 'd',
    neighbors: [nodeE],
};
const nodeC = {
    data: 'c',
    neighbors: [],
};
const nodeF = {
    data: 'f',
    neighbors: [nodeG],
};
const nodeB = {
    data: 'b',
    neighbors: [nodeC, nodeD],
};
const nodeA = {
    data: 'a',
    neighbors: [nodeB, nodeF],
};


const startingNode = nodeA;

function traverseGraph() {
    let currentNode = null;
    const nextNodes = [startingNode];

    while (nextNodes.length !== 0) {
        currentNode = nextNodes.pop();
        console.log(currentNode.data)
        currentNode.visited = true;

        if (currentNode.data === 'target data') {
            return currentNode;
        }

        const nodesToAdd = currentNode.neighbors
            .filter(nextNode => !nextNode.visited);

        nextNodes.push(...nodesToAdd);
    }

    return null;
}

traverseGraph()