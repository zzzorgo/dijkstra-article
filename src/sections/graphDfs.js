const i = {
    data: 'i',
    neighbors: [],
};
const h = {
    data: 'h',
    neighbors: [],
};
const e = {
    data: 'e',
    neighbors: [],
};
const g = {
    data: 'g',
    neighbors: [h, i],
};
const d = {
    data: 'd',
    neighbors: [e],
};
const c = {
    data: 'c',
    neighbors: [],
};
const f = {
    data: 'f',
    neighbors: [g],
};
const b = {
    data: 'b',
    neighbors: [c, d],
};
const a = {
    data: 'a',
    neighbors: [b, f],
};


const startingNode = a;

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