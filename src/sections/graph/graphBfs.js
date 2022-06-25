/**
 * Поиск в ширину
 */

const i = {
    id: 'i',
    neighbors: [],
};
const h = {
    id: 'h',
    neighbors: [],
};
const e = {
    id: 'e',
    neighbors: [],
};
const g = {
    id: 'g',
    neighbors: [h, i],
};
const d = {
    id: 'd',
    neighbors: [e],
};
const c = {
    id: 'c',
    neighbors: [],
};
const f = {
    id: 'f',
    neighbors: [g],
};
const b = {
    id: 'b',
    neighbors: [c, d],
};
const a = {
    id: 'a',
    neighbors: [b, f],
};

i.neighbors.push(f);
c.neighbors.push(a);
a.neighbors.push(h);

const startingNode = a;

function traverseGraphDfs() {
    let currentNode = null;
    const nextNodes = [startingNode];

    while (nextNodes.length !== 0) {
        currentNode = nextNodes.shift();
        currentNode.visited = true;

        if (currentNode.id === 'h') {
            return currentNode;
        }

        const nodesToAdd = currentNode.neighbors
            .filter(nextNode => !nextNode.visited);

        nextNodes.push(...nodesToAdd);
    }

    return null;
}

console.log(traverseGraphDfs());
