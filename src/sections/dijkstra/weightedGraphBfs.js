/**
 * Поиск пути в ширину во взвешенном графе
 */

const i = {
    id: 'i',
    edges: [],
};
const h = {
    id: 'h',
    edges: [],
};
const e = {
    id: 'e',
    edges: [],
};
const g = {
    id: 'g',
    edges: [{ nextNode: h, weight: 4 }, { nextNode: i, weight: 8 }],
};
const d = {
    id: 'd',
    edges: [{ nextNode: e, weight: 1 }],
};
const c = {
    id: 'c',
    edges: [],
};
const f = {
    id: 'f',
    edges: [{ nextNode: g, weight: 7 }],
};
const b = {
    id: 'b',
    edges: [{ nextNode: c, weight: 11 }, { nextNode: d, weight: 2 }],
};
const a = {
    id: 'a',
    edges: [{ nextNode: b, weight: 7 }, { nextNode: h, weight: 100 }, { nextNode: f, weight: 5 }],
};

i.edges.push({ nextNode: f, weight: 10 });
c.edges.push({ nextNode: a, weight: 5 });
// уже добавлено в edges выше
// a.edges.push({ nextNode: h, weight: 100 }); 

const startingNode = a;

function traverseGraph() {
    let currentNode = startingNode;
    const nextNodes = [currentNode];

    while (nextNodes.length !== 0) {
        currentNode = nextNodes.shift();
        currentNode.visited = true;

        if (currentNode.id === 'h') {
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
