const i = {
    data: 'i',
    edges: [],
};
const h = {
    data: 'h',
    edges: [],
};
const e = {
    data: 'e',
    edges: [],
};
const g = {
    data: 'g',
    edges: [{ nextNode: h, weight: 4 }, { nextNode: i, weight: 8 }],
};
const d = {
    data: 'd',
    edges: [{ nextNode: e, weight: 1 }],
};
const c = {
    data: 'c',
    edges: [],
};
const f = {
    data: 'f',
    edges: [{ nextNode: g, weight: 7 }],
};
const b = {
    data: 'b',
    edges: [{ nextNode: c, weight: 11 }, { nextNode: d, weight: 2 }],
};
const a = {
    data: 'a',
    edges: [{ nextNode: b, weight: 7 }, { nextNode: h, weight: 100 }, { nextNode: f, weight: 5 }],
};

i.edges.push({ nextNode: f, weight: 10 });
c.edges.push({ nextNode: a, weight: 5 });

const startingNode = a;

function traverseGraph() {
    let currentNode = startingNode;
    const nextNodes = [currentNode];

    while (nextNodes.length !== 0) {
        currentNode = nextNodes.shift();
        currentNode.visited = true;

        if (currentNode.data === 'h') {
            let pathNode = currentNode;
            const path = [];

            while(pathNode) {
                path.unshift(pathNode);
                pathNode = pathNode.parent;
            }

            return path;
        }

        const edgesToAdd = currentNode.edges
            .filter(nextEdge => !nextEdge.nextNode.visited)
            .map(nextEdge => {
                nextEdge.nextNode.parent = currentNode;

                return nextEdge.nextNode;
            });

        nextNodes.push(...edgesToAdd);
    }

    return null;
}

console.log(traverseGraph());
