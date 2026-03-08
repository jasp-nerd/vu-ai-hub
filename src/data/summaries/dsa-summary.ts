/**
 * Comprehensive Data Structures and Algorithms for AI Summary — inline markdown content.
 * Compiled from VU lecture slides covering: asymptotic notation (Big-O, Big-Omega, Big-Theta),
 * sorting algorithms (bubble sort, insertion sort, selection sort, merge sort, quicksort,
 * heapsort, bucket sort), data structures (arrays, linked lists, stacks, queues, rooted trees,
 * hash tables), binary heaps, binary search trees (BST, AVL concepts), graph theory fundamentals,
 * BFS and DFS, topological sorting, minimum spanning trees (Prim's, Kruskal's), Dijkstra's
 * algorithm, A* search, and dynamic programming (rod cutting, optimal BST, knapsack).
 */
export const dsaSummary = `
## Part 1 — Foundations: Algorithms and Complexity

---

### 1. What Is an Algorithm?

An **algorithm** is a well-defined computational procedure that takes some value (or set of values) as **input** and produces some value (or set of values) as **output**. It must:

- Be **finite** (terminates after a finite number of steps)
- Be **definite** (each step is precisely defined)
- Produce **correct output** for every valid input

---

### 2. Asymptotic Notation

Asymptotic notation describes the **growth rate** of functions and is used to classify algorithm efficiency.

#### Big-O (Upper Bound)

$$O(g(n)) = \\{ f(n) : \\exists\\, c > 0,\\, n_0 > 0 \\text{ such that } 0 \\le f(n) \\le c \\cdot g(n) \\;\\forall\\, n \\ge n_0 \\}$$

- \`f(n) = O(g(n))\` means \`f\` grows **at most** as fast as \`g\`.

#### Big-Omega (Lower Bound)

$$\\Omega(g(n)) = \\{ f(n) : \\exists\\, c > 0,\\, n_0 > 0 \\text{ such that } 0 \\le c \\cdot g(n) \\le f(n) \\;\\forall\\, n \\ge n_0 \\}$$

- \`f(n) = \\Omega(g(n))\` means \`f\` grows **at least** as fast as \`g\`.

#### Big-Theta (Tight Bound)

$$\\Theta(g(n)) = O(g(n)) \\cap \\Omega(g(n))$$

- \`f(n) = \\Theta(g(n))\` means \`f\` grows **exactly** as fast as \`g\` (up to constants).

#### Common Growth Rates (Slowest to Fastest)

| Notation | Name |
|---|---|
| \`O(1)\` | Constant |
| \`O(log n)\` | Logarithmic |
| \`O(n)\` | Linear |
| \`O(n log n)\` | Linearithmic |
| \`O(n^2)\` | Quadratic |
| \`O(n^3)\` | Cubic |
| \`O(2^n)\` | Exponential |
| \`O(n!)\` | Factorial |

---

## Part 2 — Sorting Algorithms

---

### 3. Elementary Sorting

#### Bubble Sort

Repeatedly swaps adjacent elements if they are in the wrong order.

\`\`\`
BubbleSort(A):
  for i = 1 to A.length - 1
    for j = A.length downto i + 1
      if A[j] < A[j-1]
        swap A[j] and A[j-1]
\`\`\`

- **Time**: \`O(n^2)\` worst and average case
- **Space**: \`O(1)\` (in-place)
- **Stable**: Yes

#### Insertion Sort

Builds the sorted array one element at a time by inserting each element into its correct position.

\`\`\`
InsertionSort(A):
  for j = 2 to A.length
    key = A[j]
    i = j - 1
    while i > 0 and A[i] > key
      A[i+1] = A[i]
      i = i - 1
    A[i+1] = key
\`\`\`

- **Time**: \`O(n^2)\` worst case, \`O(n)\` best case (already sorted)
- **Space**: \`O(1)\`
- **Stable**: Yes

#### Selection Sort

Finds the minimum element from the unsorted part and puts it at the beginning.

\`\`\`
SelectionSort(A):
  for i = 1 to A.length - 1
    min = i
    for j = i + 1 to A.length
      if A[j] < A[min]
        min = j
    swap A[i] and A[min]
\`\`\`

- **Time**: \`O(n^2)\` in all cases
- **Space**: \`O(1)\`
- **Stable**: No

---

### 4. Merge Sort (Divide and Conquer)

Divides the array in half, recursively sorts each half, then merges the two sorted halves.

\`\`\`
MergeSort(A, p, r):
  if p < r
    q = floor((p + r) / 2)
    MergeSort(A, p, q)
    MergeSort(A, q+1, r)
    Merge(A, p, q, r)
\`\`\`

**Recurrence**: \`T(n) = 2T(n/2) + Theta(n)\`

**Solution**: \`T(n) = Theta(n log n)\`

- **Time**: \`Theta(n log n)\` in all cases
- **Space**: \`O(n)\` (not in-place, needs auxiliary array for merge)
- **Stable**: Yes

---

### 5. QuickSort

Partitions the array around a **pivot** element, then recursively sorts the two partitions.

\`\`\`
QuickSort(A, p, r):
  if p < r
    q = Partition(A, p, r)
    QuickSort(A, p, q-1)
    QuickSort(A, q+1, r)

Partition(A, p, r):
  x = A[r]           // pivot is last element
  i = p - 1
  for j = p to r - 1
    if A[j] <= x
      i = i + 1
      swap A[i] and A[j]
  swap A[i+1] and A[r]
  return i + 1
\`\`\`

- **Time**: \`O(n^2)\` worst case (sorted input with bad pivot), \`O(n log n)\` expected/average
- **Space**: \`O(log n)\` (in-place, stack space for recursion)
- **Stable**: No

---

### 6. Bucket Sort

Distributes elements into buckets, sorts each bucket (e.g., with insertion sort), then concatenates.

\`\`\`
BucketSort(A):
  n = A.length
  create n empty buckets B[0..n-1]
  for i = 1 to n
    insert A[i] into bucket B[floor(n * A[i])]
  for i = 0 to n - 1
    sort bucket B[i] with insertion sort
  concatenate B[0], B[1], ..., B[n-1]
\`\`\`

- **Assumption**: Input uniformly distributed in \`[0, 1)\`
- **Time**: \`O(n)\` expected for uniform distribution, \`O(n^2)\` worst case
- **Space**: \`O(n)\`

---

### 7. Sorting Algorithm Comparison

| Algorithm | Best | Average | Worst | Space | Stable |
|---|---|---|---|---|---|
| Bubble Sort | \`O(n)\` | \`O(n^2)\` | \`O(n^2)\` | \`O(1)\` | Yes |
| Insertion Sort | \`O(n)\` | \`O(n^2)\` | \`O(n^2)\` | \`O(1)\` | Yes |
| Selection Sort | \`O(n^2)\` | \`O(n^2)\` | \`O(n^2)\` | \`O(1)\` | No |
| Merge Sort | \`O(n log n)\` | \`O(n log n)\` | \`O(n log n)\` | \`O(n)\` | Yes |
| QuickSort | \`O(n log n)\` | \`O(n log n)\` | \`O(n^2)\` | \`O(log n)\` | No |
| HeapSort | \`O(n log n)\` | \`O(n log n)\` | \`O(n log n)\` | \`O(1)\` | No |
| Bucket Sort | \`O(n)\` | \`O(n)\` | \`O(n^2)\` | \`O(n)\` | Yes |

---

## Part 3 — Data Structures

---

### 8. Arrays

- **Fixed size**, contiguous memory
- **Access** by index: \`O(1)\`
- **Search** (unsorted): \`O(n)\`
- **Insert/Delete**: \`O(n)\` (shifting required)

---

### 9. Linked Lists

A sequence of **nodes**, each containing data and a pointer to the next node.

**Types**:
- **Singly linked**: each node points to the next
- **Doubly linked**: each node points to both next and previous
- **Circular**: last node points back to the first

**Operations**:
| Operation | Singly Linked | Doubly Linked |
|---|---|---|
| Access by index | \`O(n)\` | \`O(n)\` |
| Insert at head | \`O(1)\` | \`O(1)\` |
| Insert at tail | \`O(n)\` / \`O(1)\` with tail ptr | \`O(1)\` |
| Delete (given node) | \`O(n)\` | \`O(1)\` |
| Search | \`O(n)\` | \`O(n)\` |

---

### 10. Stacks and Queues

#### Stack (LIFO — Last In, First Out)

- **Push**: add to top — \`O(1)\`
- **Pop**: remove from top — \`O(1)\`
- **Peek/Top**: view top element — \`O(1)\`

#### Queue (FIFO — First In, First Out)

- **Enqueue**: add to rear — \`O(1)\`
- **Dequeue**: remove from front — \`O(1)\`

---

### 11. Hash Tables

Store key-value pairs using a **hash function** \`h(k)\` that maps keys to array indices (slots).

#### Collision Resolution

- **Chaining**: each slot holds a linked list of elements that hash to that index
- **Open Addressing**: probe for the next open slot (linear probing, quadratic probing, double hashing)

#### Performance

| Operation | Average (good hash) | Worst Case |
|---|---|---|
| Search | \`O(1)\` | \`O(n)\` |
| Insert | \`O(1)\` | \`O(n)\` |
| Delete | \`O(1)\` | \`O(n)\` |

**Load factor**: \`alpha = n / m\` where \`n\` = number of elements, \`m\` = number of slots. A good hash table keeps \`alpha\` small.

---

### 12. Rooted Trees

A **rooted tree** is a connected, acyclic graph with a designated root node.

- **Parent**: the node directly above
- **Child**: a node directly below
- **Leaf**: a node with no children
- **Depth**: distance (edges) from the root
- **Height**: longest path from the node to a leaf

**Representations**:
- **Left-child, right-sibling** representation for arbitrary branching
- **Array representation** for complete binary trees (used in heaps)

---

## Part 4 — Binary Heaps

---

### 13. Binary Heap Definition

A **binary heap** is a **nearly complete binary tree** stored as an array, satisfying the **heap property**.

#### Array Representation

For a node at index \`i\` (1-indexed):
- **Parent**: \`floor(i/2)\`
- **Left child**: \`2i\`
- **Right child**: \`2i + 1\`

#### Heap Properties

- **Max-Heap**: \`H[Parent(i)] >= H[i]\` for all nodes \`i\` (largest element at root)
- **Min-Heap**: \`H[Parent(i)] <= H[i]\` for all nodes \`i\` (smallest element at root)

#### Heap Height

A heap with \`n\` elements has height \`h = floor(log2 n)\`.

Number of elements in a heap of height \`h\`:
- **Minimum**: \`2^h\` (just one node at the last level)
- **Maximum**: \`2^(h+1) - 1\` (complete tree)

---

### 14. Heap Operations

#### Max-Heapify (Sift Down)

Restores the max-heap property by "floating down" a violating node.

\`\`\`
MaxHeapify(A, i):
  l = Left(i)
  r = Right(i)
  largest = i
  if l <= A.heap-size and A[l] > A[largest]
    largest = l
  if r <= A.heap-size and A[r] > A[largest]
    largest = r
  if largest != i
    swap A[i] and A[largest]
    MaxHeapify(A, largest)
\`\`\`

- **Time**: \`O(log n)\`

#### Build-Max-Heap

Converts an unordered array into a max-heap by calling MaxHeapify bottom-up.

\`\`\`
BuildMaxHeap(A):
  A.heap-size = A.length
  for i = floor(A.length / 2) downto 1
    MaxHeapify(A, i)
\`\`\`

- **Time**: \`O(n)\` (not \`O(n log n)\` — tighter analysis shows linear)

#### Heap-Extract-Max

Removes and returns the maximum element.

\`\`\`
HeapExtractMax(A):
  max = A[1]
  A[1] = A[A.heap-size]
  A.heap-size -= 1
  MaxHeapify(A, 1)
  return max
\`\`\`

- **Time**: \`O(log n)\`

#### Heap-Insert (Max-Heap Insert)

Inserts a new element and "bubbles up" to restore the heap property.

\`\`\`
MaxHeapInsert(A, key):
  A.heap-size += 1
  A[A.heap-size] = -infinity
  HeapIncreaseKey(A, A.heap-size, key)

HeapIncreaseKey(A, i, key):
  A[i] = key
  while i > 1 and A[Parent(i)] < A[i]
    swap A[i] and A[Parent(i)]
    i = Parent(i)
\`\`\`

- **Time**: \`O(log n)\`

---

### 15. HeapSort

Uses a max-heap to sort in ascending order.

\`\`\`
HeapSort(A):
  BuildMaxHeap(A)
  for i = A.length downto 2
    swap A[1] and A[i]
    A.heap-size -= 1
    MaxHeapify(A, 1)
\`\`\`

- **Time**: \`O(n log n)\` in all cases
- **Space**: \`O(1)\` (in-place)
- **Stable**: No

---

## Part 5 — Binary Search Trees (BSTs)

---

### 16. BST Property

For every node \`x\` in the tree:
- All keys in the **left** subtree of \`x\` are **<= x.key**
- All keys in the **right** subtree of \`x\` are **>= x.key**

Formally: if \`y\` is in the left subtree of \`x\`, then \`y.key <= x.key\`; if \`z\` is in the right subtree, then \`z.key >= x.key\`.

**In-order traversal** of a BST visits keys in **sorted (non-decreasing) order**.

---

### 17. BST Operations

All operations run in \`O(h)\` time, where \`h\` is the height of the tree.

#### Search

\`\`\`
TreeSearch(x, k):
  if x == NIL or k == x.key
    return x
  if k < x.key
    return TreeSearch(x.left, k)
  else
    return TreeSearch(x.right, k)
\`\`\`

#### Minimum and Maximum

\`\`\`
TreeMinimum(x):
  while x.left != NIL
    x = x.left
  return x

TreeMaximum(x):
  while x.right != NIL
    x = x.right
  return x
\`\`\`

#### Successor

The successor of node \`x\` is the node with the smallest key greater than \`x.key\`.

\`\`\`
TreeSuccessor(x):
  if x.right != NIL
    return TreeMinimum(x.right)
  y = x.parent
  while y != NIL and x == y.right
    x = y
    y = y.parent
  return y
\`\`\`

#### Insert

\`\`\`
TreeInsert(T, z):
  y = NIL
  x = T.root
  while x != NIL
    y = x
    if z.key < x.key
      x = x.left
    else
      x = x.right
  z.parent = y
  if y == NIL
    T.root = z
  else if z.key < y.key
    y.left = z
  else
    y.right = z
\`\`\`

#### Delete

Three cases when deleting node \`z\`:
1. **No children** (leaf): simply remove \`z\`
2. **One child**: replace \`z\` with its child
3. **Two children**: find \`z\`'s successor \`y\` (minimum of right subtree), replace \`z\`'s key with \`y\`'s key, then delete \`y\` (which has at most one child)

#### BST Complexity

| Operation | Average | Worst (Skewed) | Balanced |
|---|---|---|---|
| Search | \`O(log n)\` | \`O(n)\` | \`O(log n)\` |
| Insert | \`O(log n)\` | \`O(n)\` | \`O(log n)\` |
| Delete | \`O(log n)\` | \`O(n)\` | \`O(log n)\` |
| Min/Max | \`O(log n)\` | \`O(n)\` | \`O(log n)\` |

A **balanced BST** (e.g., AVL tree, Red-Black tree) guarantees \`h = O(log n)\`.

---

### 18. AVL Trees (Balanced BSTs)

An **AVL tree** is a BST where for every node, the heights of the left and right subtrees differ by at most 1.

**Balance factor** = height(left subtree) - height(right subtree). Must be in \`{-1, 0, 1}\`.

**Rotations** are used to restore balance after insertions/deletions:
- **Left rotation**: when right-heavy
- **Right rotation**: when left-heavy
- **Left-Right rotation**: left child is right-heavy
- **Right-Left rotation**: right child is left-heavy

All operations remain \`O(log n)\`.

---

## Part 6 — Graph Theory Fundamentals

---

### 19. Graph Definitions

A **simple graph** \`G = (V, E)\` consists of:
- \`V\`: a set of **vertices** (nodes)
- \`E\`: a set of **edges** (pairs of vertices)

#### Types of Graphs

- **Undirected graph**: edges are unordered pairs \`{u, v}\`
- **Directed graph (digraph)**: edges are ordered pairs \`(u, v)\` (arcs)
- **Weighted graph**: each edge has an associated weight/cost
- **Simple graph**: no self-loops, no multiple edges between the same pair

#### Key Terminology

- **Adjacent**: two vertices connected by an edge
- **Degree** of a vertex: number of edges incident to it
  - In directed graphs: **in-degree** (incoming edges) and **out-degree** (outgoing edges)
- **Path**: a sequence of vertices where each consecutive pair is connected by an edge
- **Walk**: like a path but vertices/edges may repeat
- **Trail**: a walk with no repeated edges
- **Cycle**: a path that starts and ends at the same vertex
- **Connected graph**: there is a path between every pair of vertices
- **DAG**: Directed Acyclic Graph — a directed graph with no cycles

#### Handshaking Lemma

In any undirected graph:

$$\\sum_{v \\in V} \\deg(v) = 2|E|$$

The sum of all vertex degrees equals twice the number of edges.

---

### 20. Graph Representations

#### Adjacency Matrix

A \`|V| x |V|\` matrix \`A\` where \`A[i][j] = 1\` if edge \`(i,j)\` is in \`E\`, else \`0\`.

- **Space**: \`O(V^2)\`
- **Edge lookup**: \`O(1)\`
- **Best for**: dense graphs

#### Adjacency List

An array of \`|V|\` linked lists; \`Adj[v]\` contains all vertices adjacent to \`v\`.

- **Space**: \`O(V + E)\`
- **Edge lookup**: \`O(deg(v))\`
- **Best for**: sparse graphs

---

## Part 7 — Graph Traversal

---

### 21. Breadth-First Search (BFS)

BFS explores vertices in **layers** — first all vertices at distance 1 from the source, then distance 2, etc. Uses a **queue**.

\`\`\`
BFS(G, s):
  for each vertex u in V - {s}
    u.color = WHITE
    u.d = infinity
    u.parent = NIL
  s.color = GRAY
  s.d = 0
  s.parent = NIL
  Q = empty queue
  Enqueue(Q, s)
  while Q is not empty
    u = Dequeue(Q)
    for each v in Adj[u]
      if v.color == WHITE
        v.color = GRAY
        v.d = u.d + 1
        v.parent = u
        Enqueue(Q, v)
    u.color = BLACK
\`\`\`

**Colors**:
- **White**: undiscovered
- **Gray**: discovered but not fully explored (in the queue)
- **Black**: fully explored (all neighbors discovered)

**Properties**:
- Finds **shortest paths** (fewest edges) from source \`s\`
- \`v.d\` stores the shortest distance from \`s\` to \`v\`
- **Time**: \`O(V + E)\`
- **Space**: \`O(V)\`

---

### 22. Depth-First Search (DFS)

DFS explores as **deep** as possible before backtracking. Uses a **stack** (or recursion).

#### Iterative DFS

\`\`\`
DFS(G, s):
  for each vertex u in V
    u.explored = false
  S = empty stack
  Push(S, s)
  while S is not empty
    v = Pop(S)
    if not v.explored
      v.explored = true
      for each w in Adj[v]
        if not w.explored
          Push(S, w)
\`\`\`

#### Recursive DFS

\`\`\`
DFS(G):
  for each vertex u in V
    u.color = WHITE
  for each vertex u in V
    if u.color == WHITE
      DFS-Visit(G, u)

DFS-Visit(G, u):
  u.color = GRAY
  for each v in Adj[u]
    if v.color == WHITE
      v.parent = u
      DFS-Visit(G, v)
  u.color = BLACK
\`\`\`

**Properties**:
- **Time**: \`O(V + E)\`
- **Space**: \`O(V)\`
- Does **not** find shortest paths
- Useful for: cycle detection, topological sorting, connected components

---

### 23. BFS vs. DFS Comparison

| Property | BFS | DFS |
|---|---|---|
| Data structure | Queue | Stack |
| Exploration order | Layer by layer | Deep first |
| Shortest paths | Yes (unweighted) | No |
| Time complexity | \`O(V + E)\` | \`O(V + E)\` |
| Space complexity | \`O(V)\` | \`O(V)\` |
| Cycle detection | Yes | Yes |
| Topological sort | No | Yes |

---

## Part 8 — Topological Sorting

---

### 24. Topological Order

A **topological ordering** of a directed graph \`G = (V, E)\` is an assignment \`f: V -> {1, 2, ..., |V|}\` such that for every directed edge \`(v, w)\` in \`E\`:

$$f(v) < f(w)$$

- A topological ordering exists **if and only if** the graph is a **DAG** (Directed Acyclic Graph).
- Every DAG has at least one topological ordering.
- Topological ordering is **not necessarily unique**.

---

### 25. Topological Sort Algorithm (DFS-based)

\`\`\`
TopoSort(G):
  curLabel = |V|
  for each vertex v in V
    v.explored = false
  for each vertex v in V
    if not v.explored
      DFS-Topo(G, v)

DFS-Topo(G, v):
  v.explored = true
  for each edge (v, w) in E
    if not w.explored
      DFS-Topo(G, w)
  f(v) = curLabel
  curLabel = curLabel - 1
\`\`\`

**Key insight**: Assign labels in **reverse** — the vertex that finishes DFS last gets label 1, etc. The label \`curLabel\` starts at \`|V|\` and decrements each time a vertex finishes.

- **Time**: \`O(V + E)\`
- **Applications**: task scheduling, build systems, prerequisite ordering

---

## Part 9 — Minimum Spanning Trees

---

### 26. Spanning Tree Definition

Given a connected, undirected, weighted graph \`G = (V, E)\`, a **spanning tree** \`T\` is a subgraph that:
- Contains **all vertices** of \`G\`
- Is a **tree** (connected and acyclic)
- Has exactly \`|V| - 1\` edges

A **Minimum Spanning Tree (MST)** is a spanning tree with the **smallest total edge weight**.

---

### 27. Prim's Algorithm

**Greedy approach**: grow the MST one vertex at a time, always adding the **cheapest edge** that connects a vertex in the tree to a vertex outside.

\`\`\`
Prim(G, w, r):
  for each u in V
    u.key = infinity
    u.parent = NIL
  r.key = 0
  Q = V   // min-priority queue by key
  while Q is not empty
    u = ExtractMin(Q)
    for each v in Adj[u]
      if v in Q and w(u,v) < v.key
        v.parent = u
        v.key = w(u,v)
\`\`\`

- **Time**: \`O(E log V)\` with a binary heap priority queue; \`O(E + V log V)\` with Fibonacci heap
- **Approach**: vertex-based, grows a single tree

---

### 28. Kruskal's Algorithm

**Greedy approach**: sort all edges by weight, then add edges in order, skipping any edge that would create a cycle.

\`\`\`
Kruskal(G, w):
  A = empty set
  for each vertex v in V
    MakeSet(v)
  sort edges of E by weight w in non-decreasing order
  for each edge (u,v) in sorted E
    if FindSet(u) != FindSet(v)
      A = A union {(u,v)}
      Union(u, v)
  return A
\`\`\`

Uses a **Union-Find (Disjoint Set)** data structure:
- **MakeSet(v)**: create a set containing only \`v\`
- **FindSet(v)**: return the representative of the set containing \`v\`
- **Union(u,v)**: merge the sets containing \`u\` and \`v\`

- **Time**: \`O(E log E)\` = \`O(E log V)\` (dominated by sorting)
- **Approach**: edge-based, builds a forest that eventually connects

---

### 29. Prim's vs. Kruskal's

| Property | Prim's | Kruskal's |
|---|---|---|
| Strategy | Grow one tree | Merge forest |
| Data structure | Priority queue | Union-Find |
| Better for | Dense graphs | Sparse graphs |
| Time | \`O(E log V)\` | \`O(E log V)\` |
| Edge selection | Cheapest crossing edge | Cheapest overall edge |

---

## Part 10 — Shortest Path Algorithms

---

### 30. Dijkstra's Algorithm

Finds the **shortest path** from a single source vertex \`s\` to all other vertices in a **weighted graph with non-negative edge weights**.

\`\`\`
Dijkstra(G, w, s):
  for each vertex v in V
    v.d = infinity
    v.explored = false
  s.d = 0
  Q = priority queue with all vertices (key = v.d)
  while Q is not empty
    u = ExtractMin(Q)
    u.explored = true
    for each v in Adj[u]
      if not v.explored
        if u.d + w(u,v) < v.d
          v.d = u.d + w(u,v)
          v.parent = u
          DecreaseKey(Q, v, v.d)
\`\`\`

**Relaxation**: For edge \`(u, v)\` with weight \`w(u,v)\`:

$$d_{score} = len(u) + l_{u,v}$$

If \`d_score < len(v)\`, update \`len(v) = d_score\`.

**Properties**:
- **Greedy**: always processes the vertex with smallest tentative distance
- **Correctness**: requires **non-negative** edge weights
- **Time**: \`O((V + E) log V)\` with binary heap; \`O(V^2)\` with array
- **Space**: \`O(V)\`

---

### 31. A* Search Algorithm

An extension of Dijkstra's that uses a **heuristic** \`h(v, t)\` to guide the search toward the target \`t\`, reducing the number of explored nodes.

\`\`\`
AStar(G, w, s, t):
  for each vertex v in V
    v.d = infinity
    v.explored = false
  s.d = 0
  Q = priority queue (key = v.d + h(v, t))
  Insert(Q, s)
  while Q is not empty
    u = ExtractMin(Q)
    if u == t
      return u.d    // found shortest path to target
    u.explored = true
    for each v in Adj[u]
      if not v.explored
        newDist = u.d + w(u,v)
        if newDist < v.d
          v.d = newDist
          v.parent = u
          InsertOrUpdate(Q, v, newDist + h(v, t))
  return infinity   // no path exists
\`\`\`

**Key difference from Dijkstra**: the priority queue sorts by \`f(v) = g(v) + h(v, t)\` where:
- \`g(v)\`: actual distance from \`s\` to \`v\`
- \`h(v, t)\`: heuristic estimate from \`v\` to \`t\`

#### Manhattan Distance Heuristic

For grid-based problems:

$$h(v, t) = |row_v - row_t| + |col_v - col_t|$$

**Properties**:
- **Admissible heuristic**: never overestimates the true distance (\`h(v,t) <=\` actual distance)
- **Consistent heuristic**: \`h(u,t) <= w(u,v) + h(v,t)\` for all edges \`(u,v)\`
- With admissible and consistent heuristic, A* finds the optimal (shortest) path
- **Early termination**: stops as soon as the target is extracted from the priority queue
- **Time**: \`O((V + E) log V)\` worst case (same as Dijkstra), but typically explores far fewer nodes

---

### 32. Dijkstra vs. A*

| Property | Dijkstra | A* |
|---|---|---|
| Goal | Single source to all | Single source to single target |
| Priority key | \`g(v)\` | \`g(v) + h(v, t)\` |
| Heuristic | None | Required |
| Termination | All vertices processed | Target found |
| Nodes explored | More (expands in all directions) | Fewer (guided by heuristic) |
| Optimality | Yes (non-negative weights) | Yes (admissible heuristic) |

---

## Part 11 — Dynamic Programming

---

### 33. Dynamic Programming Principles

Dynamic Programming (DP) solves problems by breaking them into **overlapping subproblems** and storing results to avoid redundant computation.

**Two key ingredients**:
1. **Optimal substructure**: an optimal solution contains optimal solutions to subproblems
2. **Overlapping subproblems**: the same subproblems are solved repeatedly in a naive recursive approach

**Approaches**:
- **Top-down (memoization)**: recursive with caching
- **Bottom-up (tabulation)**: iterative, fills a table from smallest subproblems up

---

### 34. Rod Cutting Problem

Given a rod of length \`n\` and a price table \`p[i]\` for rod pieces of length \`i = 1, ..., n\`, find the maximum revenue \`r_n\` obtainable by cutting the rod.

**Optimal substructure**:

$$r_n = \\max_{1 \\le i \\le n}(p_i + r_{n-i})$$

#### Naive Recursive Solution

\`\`\`
CutRod(p, n):
  if n == 0
    return 0
  q = -infinity
  for i = 1 to n
    q = max(q, p[i] + CutRod(p, n - i))
  return q
\`\`\`

- **Time**: \`O(2^n)\` — exponential due to redundant subproblem computation

#### Bottom-Up DP Solution

\`\`\`
BottomUpCutRod(p, n):
  r[0] = 0
  for j = 1 to n
    q = -infinity
    for i = 1 to j
      q = max(q, p[i] + r[j - i])
    r[j] = q
  return r[n]
\`\`\`

- **Time**: \`O(n^2)\`
- **Space**: \`O(n)\`

#### Extended Version (Tracking Cuts)

\`\`\`
ExtendedBottomUpCutRod(p, n):
  r[0] = 0
  for j = 1 to n
    q = -infinity
    for i = 1 to j
      if q < p[i] + r[j - i]
        q = p[i] + r[j - i]
        s[j] = i          // first piece of optimal cut
    r[j] = q
  return r and s

PrintCutRodSolution(p, n):
  (r, s) = ExtendedBottomUpCutRod(p, n)
  while n > 0
    print s[n]
    n = n - s[n]
\`\`\`

The array \`s[j]\` stores the size of the first piece to cut for a rod of length \`j\`.

---

### 35. Optimal Binary Search Tree

Given keys \`k_1 < k_2 < ... < k_n\` with search probabilities \`p_1, p_2, ..., p_n\` and dummy keys \`d_0, d_1, ..., d_n\` (representing gaps between keys) with probabilities \`q_0, q_1, ..., q_n\`, find the BST that **minimizes the expected search cost**.

**Expected search cost**:

$$E[\\text{search cost}] = \\sum_{i=1}^{n} (\\text{depth}(k_i) + 1) \\cdot p_i + \\sum_{i=0}^{n} (\\text{depth}(d_i) + 1) \\cdot q_i$$

**Key insight**: The optimal BST is **not necessarily** the one with the smallest height. Keys searched more frequently should be placed closer to the root.

**DP recurrence**: Let \`e[i,j]\` be the expected cost of an optimal BST for keys \`k_i, ..., k_j\`:

$$e[i, j] = \\min_{i \\le r \\le j} \\{ e[i, r-1] + e[r+1, j] + w(i, j) \\}$$

where \`w(i, j) = sum of p_l for l=i..j + sum of q_l for l=i-1..j\` is the total probability weight.

Base case: \`e[i, i-1] = q_{i-1}\`

- **Time**: \`O(n^3)\`
- **Space**: \`O(n^2)\`

---

### 36. 0/1 Knapsack Problem

Given \`n\` items, each with weight \`w_i\` and value \`v_i\`, and a knapsack of capacity \`W\`, find the subset of items that maximizes total value without exceeding capacity.

**DP formulation**: Let \`K[i, w]\` be the maximum value achievable using items \`1, ..., i\` with capacity \`w\`.

$$K[i, w] = \\begin{cases} 0 & \\text{if } i = 0 \\text{ or } w = 0 \\\\\\\\ K[i-1, w] & \\text{if } w_i > w \\\\\\\\ \\max(K[i-1, w],\\; v_i + K[i-1, w - w_i]) & \\text{otherwise} \\end{cases}$$

\`\`\`
Knapsack(v, w, n, W):
  for i = 0 to n
    K[i, 0] = 0
  for w = 0 to W
    K[0, w] = 0
  for i = 1 to n
    for j = 1 to W
      if w[i] > j
        K[i, j] = K[i-1, j]
      else
        K[i, j] = max(K[i-1, j], v[i] + K[i-1, j - w[i]])
  return K[n, W]
\`\`\`

- **Time**: \`O(nW)\` — pseudo-polynomial (polynomial in the numeric value of \`W\`, not its size)
- **Space**: \`O(nW)\`, can be optimized to \`O(W)\` using a single row

---

## Quick Reference — Complexity Cheat Sheet

---

### Data Structure Operations

| Structure | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array | \`O(1)\` | \`O(n)\` | \`O(n)\` | \`O(n)\` |
| Linked List | \`O(n)\` | \`O(n)\` | \`O(1)\` | \`O(1)\` |
| Stack | \`O(n)\` | \`O(n)\` | \`O(1)\` | \`O(1)\` |
| Queue | \`O(n)\` | \`O(n)\` | \`O(1)\` | \`O(1)\` |
| Hash Table | — | \`O(1)\` avg | \`O(1)\` avg | \`O(1)\` avg |
| BST (balanced) | — | \`O(log n)\` | \`O(log n)\` | \`O(log n)\` |
| Binary Heap | — | \`O(n)\` | \`O(log n)\` | \`O(log n)\` |

### Graph Algorithm Complexities

| Algorithm | Time | Space | Notes |
|---|---|---|---|
| BFS | \`O(V + E)\` | \`O(V)\` | Shortest paths (unweighted) |
| DFS | \`O(V + E)\` | \`O(V)\` | Cycle detection, topo sort |
| Topological Sort | \`O(V + E)\` | \`O(V)\` | DAGs only |
| Prim's MST | \`O(E log V)\` | \`O(V)\` | Dense: use adjacency matrix |
| Kruskal's MST | \`O(E log V)\` | \`O(V)\` | Sparse: use union-find |
| Dijkstra | \`O((V+E) log V)\` | \`O(V)\` | Non-negative weights |
| A* | \`O((V+E) log V)\` | \`O(V)\` | Admissible heuristic |

### DP Problem Complexities

| Problem | Time | Space |
|---|---|---|
| Rod Cutting (bottom-up) | \`O(n^2)\` | \`O(n)\` |
| 0/1 Knapsack | \`O(nW)\` | \`O(nW)\` |
| Optimal BST | \`O(n^3)\` | \`O(n^2)\` |
`;
