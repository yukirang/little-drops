class Graph {
  constructor() {
    this.totalNodes = 0;
    this.taotalEdges = 0;
    this.adjacentList = {};
  }

  addVertex(vertex) {
    this.adjacentList[vertex] = [];
    this.totalNodes++;
    return this;
  }

  addEdge(vert1, vert2) {
    if (this.adjacentList[vert1] && this.adjacentList[vert2]) {
      this.adjacentList[vert1].push(vert2);
      this.adjacentList[vert2].push(vert1);
    } else {
      return false;
    }
    this.taotalEdges++;
    return this;
  }
  showRelations() {
    const vertexes = Object.keys(this.adjacentList);

    for (let vertex of vertexes) {
      let relations = '';
      let edges = this.adjacentList[vertex];
      for (let vertex of edges) {
        relations += `${vertex} `;
      }
      console.log(`${vertex} ---> ${relations}`);
    }
  }
}

// Example
var myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '6');
console.log(myGraph.addEdge('6', '5'));

myGraph.showRelations();
