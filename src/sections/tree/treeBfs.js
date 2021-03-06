/**
 * Поиск в ширину
 */

 const i = {
    id: 'i',
    children: [],
};
const h = {
    id: 'h',
    children: [],
};
const e = {
    id: 'e',
    children: [],
};
const g = {
    id: 'g',
    children: [h, i],
};
const d = {
    id: 'd',
    children: [e],
};
const c = {
    id: 'c',
    children: [],
};
const f = {
    id: 'f',
    children: [g],
};
const b = {
    id: 'b',
    children: [c, d],
};
const a = {
    id: 'a',
    children: [b, f],
};

const rootNode = a;

function traverseTree() {
    let currentNode = null;
    const nextNodes = [rootNode];

    while (nextNodes.length !== 0) {
        currentNode = nextNodes.shift();

        if (currentNode.id === 'h') {
            return currentNode;
        }

        nextNodes.push(...currentNode.children);
    }

    return null;
}

console.log(traverseTree());
