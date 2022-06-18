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

const startingNode = a;

// take the shortest sub-path in the `nextNodes`
function getNodeFromQueue(nextNodes, distances) {
    let nextNodeId = null;
    let resultIndex = -1;

    for (let i = 0; i < nextNodes.length; i++) {
        if (distances.get(nextNodes[i].id) < distances.get(nextNodeId)) {
            nextNodeId = nextNodes[i].id;
            resultIndex = i;
        }
    }

    const [nextNode] = nextNodes.splice(resultIndex, 1);

    return nextNode;
}

function traverseGraph() {
    let currentNode = startingNode;
    const nextNodes = [currentNode];
    const distances = new Map([[startingNode.id, 0]]);

    while (nextNodes.length !== 0) {
        currentNode = getNodeFromQueue(nextNodes, distances);
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

        for (const nextEdge of currentNode.edges) {
            const { nextNode } = nextEdge;
            const newDistance = distances.get(currentNode.id) + nextEdge.weight;

            // has another path to `nextNode`, need to select the shortest
            if (distances.has(nextNode.id)) {
                const knownDistance = distances.get(nextNode.id);

                // the new path is shorter, than the known
                if (knownDistance > newDistance) {
                    distances.set(nextNode.id, newDistance);
                    nextNode.parent = currentNode;
                }

            // the first known path to `nextNode`
            } else {
                distances.set(nextNode.id, newDistance);
                nextNode.parent = currentNode;
            }

            if (!nextEdge.nextNode.visited) {
                nextNodes.push(nextEdge.nextNode);
            }
        }
    }

    return null;
}

console.log(traverseGraph());
