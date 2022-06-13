const i = {
    data: 'i',
    children: [],
};
const h = {
    data: 'h',
    children: [],
};
const e = {
    data: 'e',
    children: [],
};
const g = {
    data: 'g',
    children: [h, i],
};
const d = {
    data: 'd',
    children: [e],
};
const c = {
    data: 'c',
    children: [],
};
const f = {
    data: 'f',
    children: [g],
};
const b = {
    data: 'b',
    children: [c, d],
};
const a = {
    data: 'a',
    children: [b, f],
};

const treeRoot = a;

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
