/**
 * Comprehensive Computational Thinking Summary — inline markdown content.
 * Compiled from all lecture materials, syllabus chapters, and student summaries
 * covering problem-solving strategies, algorithms, Big O notation, search and
 * sorting algorithms, graph theory, and Python examples for the VU Computational Thinking course.
 */
export const computationalThinkingSummary = `
## Chapter 1: What Is Computational Thinking?

### 1.1 Definition
- **Computational thinking (CT)**: a set of problem-solving methods that involves not only solving problems but also *formulating* them
- By formulating a problem, we develop a step-by-step solution that can be used to program a computer to solve complex problems
- CT is not about thinking *like* a computer, but about thinking in ways that allow us to *instruct* a computer

### 1.2 Key Idea
- CT bridges the gap between human reasoning and computer execution
- The goal is to express solutions as precise, repeatable steps
- CT is relevant to **all disciplines**, not just computer science — from biology to economics

### 1.3 Core Pillars of CT
| Pillar | Description |
|--------|-------------|
| **Decomposition** | Breaking a complex problem into smaller, manageable sub-problems |
| **Pattern Recognition** | Identifying similarities or trends within and across problems |
| **Abstraction** | Focusing on the important details while ignoring irrelevant information |
| **Algorithm Design** | Creating a step-by-step solution to each sub-problem |

### 1.4 Abstraction
- **Abstraction** means removing unnecessary detail so you can focus on what matters
- Example: a map is an abstraction of the real world — it omits buildings' interior layouts but keeps roads and distances
- In programming, abstraction allows us to use functions without knowing their internal implementation

### 1.5 Decomposition
- **Decomposition** is breaking a problem into parts that are easier to understand, solve, and test independently
- Example: building a website can be decomposed into designing the layout, writing the HTML, styling with CSS, and adding interactivity with JavaScript

---

## Chapter 2: Solution Strategies

### 2.1 Easy vs. Efficient Solution Strategies
- Not all strategies are equally efficient; choosing the right one matters
- An **easy** strategy may be simple to understand but slow for large inputs
- An **efficient** strategy may require more thought but scales much better

### 2.2 Five Steps to Solve a Problem
| Step | Description |
|------|-------------|
| 1 | **Understand** the problem thoroughly |
| 2 | **Choose** the right solution strategy |
| 3 | **Solve** the problem using the chosen strategy |
| 4 | **Check** whether the strategy worked — if not, go back to step 2 |
| 5 | **Verify** the solution — check for miscalculations, test reasonableness |

### 2.3 Planning Your Steps
- Before writing any code, **plan your steps** on paper or in pseudocode
- Identify: What are the **inputs**? What is the desired **output**? What **process** connects them?
- Example — computing BMI:
  - Input: weight (kg), height (m)
  - Process: BMI = weight / height²
  - Output: BMI value and classification (underweight, normal, overweight, obese)

---

## Chapter 3: Examples of Solution Strategies

### 3.1 Guess and Check
- Just try something and see if it works
- Best for problems that are **not too complex** and where you have an overview

### 3.2 Go Through All the Possibilities
- Used when the **number of possibilities is limited**
- Systematically check every option

### 3.3 Divide the Problem into Subproblems
- Breaking a problem into smaller parts makes it easier to solve
- Three approaches (can be combined):

| Approach | Description |
|----------|-------------|
| **Simplifying** | Reduce the problem to a simpler version |
| **Back reasoning** | Work backward from the desired outcome |
| **Exclusion** | Eliminate impossible options |

### 3.4 Use of Formulas or Equations
- Apply known mathematical formulas and equations to solve the problem
- Example: using the HOMA-IR formula to assess insulin resistance:
  - HOMA-IR = (fasting insulin × fasting glucose) / 405

### 3.5 Discover a Structure or Pattern
- Look at similar problems to identify a recurring structure or pattern

### 3.6 Make a Model
- Simplify the problem by omitting complex aspects
- Examples: draw a diagram, create a picture, build a simplified representation

### 3.7 Brute Force
- Relies on **sheer computing power** to try all possibilities
- Does **not** use any algorithm or heuristic to speed up the process
- Often used when no faster algorithm is known

### 3.8 Divide-and-Conquer
- Three major steps:
  1. **Divide**: split the problem into sub-problems of the same type
  2. **Conquer**: solve sub-problems recursively
  3. **Combine**: merge the sub-solutions into a final solution
- Ideally suited for **parallel computations** (each sub-problem can run on its own processor)

---

## Chapter 4: Algorithms and Pseudocode

![A Turing machine — the theoretical foundation of all computation](/assets/images/turing-machine-diagram.svg)

### 4.1 Why Algorithms Matter
- Algorithms are the **pillar of computer science**
- Even for non-CS students: computer programs are integrated into daily life
- Algorithm design techniques can be seen as **problem-solving strategies**
- Donald Knuth: *"A person does not really understand something until after teaching it to a computer, i.e., expressing it as an algorithm."*

### 4.2 What Is an Algorithm?
- **Algorithm**: an effective method of solving a problem that consists of a **finite number** of steps or instructions
- An algorithm **always works** if we follow the steps; a solution strategy does not necessarily always work
- **All algorithms are solution strategies**, but not all solution strategies are algorithms

### 4.3 Properties of Algorithms
| Property | Description |
|----------|-------------|
| **Input** | Takes input values from a specified set |
| **Output** | Produces output values (the solution) from the input |
| **Definiteness** | Steps must be precisely defined — no ambiguity |
| **Correctness** | Must produce the correct output for each valid input |
| **Finiteness** | Must terminate after a finite number of steps |
| **Effectiveness** | Each step must be performable correctly in reasonable time |
| **Generality** | Must work for all problems of the desired form, not just specific inputs |

### 4.4 Pseudocode
- **Pseudocode**: an English-like syntax that describes what a program should do
- Detailed yet readable; not tied to a specific programming language
- **Advantages**:
  - Catching errors at the pseudocode stage is less costly than debugging later
  - Can be reviewed by a team to ensure it matches design specifications

**Example — counting people in a classroom**:
\`\`\`
1| Let NumberOfPerson = 0
2| FOR each person in the classroom
3|     set NumberOfPerson = NumberOfPerson + 1
\`\`\`

**Example — BMI calculation pseudocode**:
\`\`\`
1| READ weight, height
2| SET bmi = weight / (height * height)
3| IF bmi < 18.5 THEN PRINT "Underweight"
4| ELSE IF bmi < 25 THEN PRINT "Normal"
5| ELSE IF bmi < 30 THEN PRINT "Overweight"
6| ELSE PRINT "Obese"
\`\`\`

### 4.5 From Pseudocode to Python
- Python is commonly used to implement algorithms because of its readable syntax
- **BMI Calculator in Python**:
\`\`\`python
weight = float(input("Enter weight in kg: "))
height = float(input("Enter height in m: "))
bmi = weight / (height ** 2)

if bmi < 18.5:
    print("Underweight")
elif bmi < 25:
    print("Normal weight")
elif bmi < 30:
    print("Overweight")
else:
    print("Obese")
\`\`\`

- **HOMA-IR Calculator in Python**:
\`\`\`python
insulin = float(input("Fasting insulin (micro U/mL): "))
glucose = float(input("Fasting glucose (mg/dL): "))
homa_ir = (insulin * glucose) / 405
print(f"HOMA-IR = {homa_ir:.2f}")
\`\`\`

---

## Chapter 5: Data Representation

### 5.1 Binary (Base 2)
- Computers store and process data using **binary** — only two digits: 0 and 1
- Each binary digit is called a **bit**; 8 bits = 1 **byte**
- Conversion from decimal to binary: repeatedly divide by 2 and record remainders
- Example: 13 in decimal = **1101** in binary (8 + 4 + 0 + 1)

### 5.2 Hexadecimal (Base 16)
- Uses digits 0–9 and letters A–F (where A=10, B=11, ..., F=15)
- Compact representation of binary: each hex digit represents exactly **4 bits**
- Example: binary 1010 1111 = hex **AF**
- Commonly used for memory addresses and color codes (e.g., #FF5733)

### 5.3 Boolean Logic
- **Boolean values**: True (1) and False (0)
- **Fundamental operations**:

| Operation | Symbol | Description |
|-----------|--------|-------------|
| **AND** | A ∧ B | True only if both A and B are True |
| **OR** | A ∨ B | True if at least one of A or B is True |
| **NOT** | ¬A | Inverts the value: True becomes False and vice versa |
| **XOR** | A ⊕ B | True if exactly one of A or B is True |

- **Logic gates** are the physical implementation of Boolean operations in hardware circuits
- Complex digital systems (CPUs, memory) are built from combinations of simple logic gates

![Logic gate symbols — AND, OR, NOT, NAND, NOR, XOR](/assets/images/logic-gates-overview.png)

---

## Chapter 6: Big O Notation and Complexity Analysis

### 6.1 What Is Big O?
- **Big O notation**: classifies algorithms based on how they respond to changes in input size
- Describes the **asymptotic behavior** of functions as input grows to infinity
- Provides an **upper bound** on the growth rate
- The **order** of a function = its growth rate

**Example**: If T(n) = 5n² - 2n + 10, the n² term dominates → **T(n) = O(n²)**

![Big-O complexity comparison — growth rates of common complexity classes](/assets/images/big-o-complexity-comparison.svg)

### Key Complexity Classes
| Notation | Name | Growth |
|----------|------|--------|
| O(1) | Constant | Does not grow |
| O(log n) | Logarithmic | Grows very slowly |
| O(n) | Linear | Grows proportionally |
| O(n log n) | Linearithmic | Slightly faster than linear |
| O(n²) | Quadratic | Grows with the square |
| O(n^c) | Polynomial | Grows with a power of n |
| O(c^n) | Exponential | Grows extremely fast |

### Important Distinctions
- **O(n^c) vs O(c^n)**: exponential O(c^n) grows **much faster** than polynomial O(n^c), regardless of c
- **Superpolynomial**: grows faster than any power of n
- **Sub-exponential**: grows slower than any exponential c^n
- **Logarithm bases don't matter**: O(log₂ n) = O(log₁₀ n) because different bases differ only by a constant factor

### 6.2 Performance vs. Time Complexity
- **Performance** depends on machine, compiler, etc.; **time complexity** depends on the algorithm itself
- Time complexity measures how resource requirements **scale** with input size
- **Basic operations** (each counts as 1):
  - One arithmetic operation (+, *, /)
  - One assignment (x = 5)
  - One test/comparison (x == 5)
  - One read or write of a primitive type
- **Constant time**: functions that perform the same number of operations regardless of input
- **Worst-case T(n)**: the maximum number of operations for input size n
- **Linear-time**: if problem size doubles → operations double

### 6.3 The Frequency Count Method
- A systematic way to compute T(n) by counting how many times each statement executes
- **Example** — computing the sum of an array:
\`\`\`
sum(A, n):
    s = 0              ← executes 1 time
    for i = 1 to n:    ← loop runs n times
        s = s + A[i]   ← executes n times
    return s            ← executes 1 time
\`\`\`
- T(n) = 1 + n + n + 1 = **2n + 2** → **O(n)**

### 6.4 Determining Complexities

#### Sequence of Statements
- k simple statements → total time = O(1) (constant)

#### If-Else
- Worst-case = the **slower** of the two branches
- Example: if-block is O(1), else-block is O(N) → overall **O(N)**

#### Single Loops
- Loop iterating n times with O(1) body → **O(n)**
- Loop with step size 2 (i = i + 2): runs n/2 times → still **O(n)**

#### Nested Loops
- Outer loop: n iterations, inner loop: m iterations → **O(n x m)**
- Both loops iterate n times → **O(n²)**

#### Statements with Function Calls
- Include the called function's complexity in the total
- Example: loop 1..n calling g(j) where g has O(k) → total is 1 + 2 + ... + n = **O(n²)**

### 6.5 Practical Comparison
- For a genetic database with n = 64 records:
  - **Linear search**: up to 64 comparisons
  - **Binary search**: at most log₂(64) = **6 comparisons**
- This difference becomes dramatic as n grows: for n = 1,000,000, linear search needs up to 1,000,000 comparisons while binary search needs at most 20

---

## Chapter 7: Search Algorithms

### Introduction
- **Search algorithm**: finds an item with specified properties among a collection
- Unlike sorting algorithms, searching has no stability issues

### 7.1 Linear Search (Sequential Search)
- **Strategy**: Brute force
- **How it works**: sequentially check each element until the key is found or the list is exhausted
- **Prerequisite**: none — the list does **not** need to be sorted
- **Efficiency**: only efficient for small lists (n ≤ 8)

**Pseudocode**:
\`\`\`
FOR each element in the list
    IF element equals the key
        RETURN location
RETURN "not found"
\`\`\`

**Complexity**:
| Case | Comparisons | Big O |
|------|-------------|-------|
| Best | 1 (key is first) | O(1) |
| Worst | n (key is last or absent) | O(n) |
| Average/Expected | approximately n | O(n) |

### 7.2 Binary Search (Half-Interval Search)
- **Strategy**: Divide-and-Conquer
- **Prerequisite**: the list **must be sorted**
- **How it works**:
  1. Compare search key K with middle element A[m]
  2. If K = A[m] → found, stop
  3. If K > A[m] → eliminate first half, search second half recursively
  4. If K < A[m] → eliminate second half, search first half recursively
- Reduces the search space by **half** each step

![Binary Search Tree](/assets/svgi/bst.svg)

- **When not to use**: when the collection is **frequently updated** (maintaining sort order is costly)

**Complexity**:
| Case | Comparisons | Big O |
|------|-------------|-------|
| Best | 1 (key is the middle element) | O(1) |
| Worst | ceil(log₂(n+1)) | O(log n) |
| Average | approximately log₂(n) | O(log n) |

### Linear vs. Binary Search Comparison
| Feature | Linear Search | Binary Search |
|---------|--------------|---------------|
| Strategy | Brute force | Divide-and-Conquer |
| Sorted list required? | No | Yes |
| Best case | O(1) | O(1) |
| Worst case | O(n) | O(log n) |
| Average case | O(n) | O(log n) |
| Best for | Small or unsorted lists | Large, sorted, rarely updated lists |

---

## Chapter 8: Sorting Algorithms

### 8.1 Bubble Sort

![Bubble sort — elements "bubble" into their correct positions](/assets/images/bubble-sort-animation.gif)

- **How it works**: repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order
- After the first pass, the largest element is guaranteed to act like a "bubble" and rise to its correct final position at the end
- Each subsequent pass places the next-largest element in its correct position
- A list of n elements requires at most **n - 1 passes**

**Detailed Example** — sorting [11, 22, 7, 19, 5]:
- Pass 1: compare and swap adjacent pairs → [11, 7, 19, 5, **22**] (22 bubbles to end)
- Pass 2: → [7, 11, 5, **19**, 22] (19 in place)
- Pass 3: → [7, 5, **11**, 19, 22] (11 in place)
- Pass 4: → [**5**, **7**, 11, 19, 22] (fully sorted)

**Complexity Analysis**:
- Pass 1: n-1 comparisons, Pass 2: n-2 comparisons, ..., Pass n-1: 1 comparison
- Total comparisons = (n-1) + (n-2) + ... + 1 = **n(n-1)/2**
- This is **O(n²)**

| Case | Time Complexity |
|------|----------------|
| Best (already sorted, with optimization) | O(n) |
| Worst (reverse sorted) | O(n²) |
| Average | O(n²) |

**Python Implementation**:
\`\`\`python
def bubbleSort(A):
    n = len(A)
    for i in range(n - 1):
        for j in range(0, n - i - 1):
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]
\`\`\`

**Optimized Bubble Sort** (with early termination):
\`\`\`python
def bubbleSortOptimized(A):
    n = len(A)
    for i in range(n - 1):
        swapped = False
        for j in range(0, n - i - 1):
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]
                swapped = True
        if not swapped:
            break  # List is already sorted
\`\`\`
- The \`swapped\` flag allows the algorithm to stop early if no swaps occurred during a pass, giving **O(n)** best-case performance on already-sorted lists

### 8.2 Selection Sort
- **How it works**: repeatedly selects the smallest element from the unsorted portion and moves it to the end of the sorted portion
- Divides the array into two parts: a **sorted** portion (left) and an **unsorted** portion (right)
- In each pass, find the minimum of the unsorted portion and swap it with the first unsorted element

**Complexity**:
| Case | Time Complexity |
|------|----------------|
| Best | O(n²) |
| Worst | O(n²) |
| Average | O(n²) |

- Selection sort always performs O(n²) comparisons regardless of input order
- **Advantage**: minimizes the number of **swaps** (at most n-1 swaps), useful when writes are expensive

### 8.3 Insertion Sort
- **How it works**: builds the sorted array one element at a time by inserting each new element into its correct position within the already-sorted portion
- Similar to how you sort playing cards in your hand

**Complexity**:
| Case | Time Complexity |
|------|----------------|
| Best (already sorted) | O(n) |
| Worst (reverse sorted) | O(n²) |
| Average | O(n²) |

- Very efficient for **small** or **nearly sorted** datasets
- **Stable** sorting algorithm: preserves the relative order of equal elements

### 8.4 Merge Sort
- **How it works**: a **Divide and Conquer** algorithm that recursively divides the list into halves until each sublist has 1 element, then merges them back together in sorted order
- Invented by **John von Neumann** in 1945

![Merge Sort Component](/assets/svgi/merge-sort.svg)

- **Number of passes**: a list of *n* elements takes exactly log₂(n) passes or levels of merging
- At each level, merging all sublists takes O(n) work → total: **O(n log n)**

**Complexity**:
| Case | Time Complexity |
|------|----------------|
| Best | O(n log n) |
| Worst | O(n log n) |
| Average | O(n log n) |

- **Space complexity**: O(n) — requires additional memory for the temporary merged arrays
- **Stable**: yes — equal elements maintain their original relative order

### 8.5 Quicksort
- **How it works**: also a Divide and Conquer algorithm; picks an element as a "pivot" and partitions the array around the pivot so smaller elements are before it and larger elements are after it
- Also known as **partition-exchange sort**

**Partitioning Process**:
1. Choose a **pivot** element (commonly the first, last, or median element)
2. Use two pointers: **i** scanning left-to-right and **j** scanning right-to-left
3. **i** moves right until it finds an element ≥ pivot; **j** moves left until it finds an element ≤ pivot
4. If i < j, swap A[i] and A[j]; repeat
5. When i ≥ j, swap the pivot with A[j] — the pivot is now in its final sorted position
6. Recursively apply quicksort to the left and right sub-arrays

**Complexity**:
| Case | Time Complexity |
|------|----------------|
| Best | O(n log n) |
| Worst (pivot is always min or max) | O(n²) |
| Average | O(n log n) |

- **In-place**: yes — does not require significant extra memory
- **Not stable**: equal elements may change relative order
- Worst case occurs when the pivot is always the smallest or largest element (e.g., already sorted input with first-element pivot)

### 8.6 Sorting Algorithm Comparison
| Algorithm | Best | Average | Worst | Stable? | In-Place? |
|-----------|------|---------|-------|---------|-----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | Yes | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | No | Yes |
| Insertion Sort | O(n) | O(n²) | O(n²) | Yes | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | Yes | No |
| Quicksort | O(n log n) | O(n log n) | O(n²) | No | Yes |

### 8.7 Classification of Sorting Algorithms
- **By time complexity**: O(n²) algorithms (bubble, selection, insertion) vs. O(n log n) algorithms (merge sort, quicksort)
- **By stability**: stable (bubble, insertion, merge) vs. unstable (selection, quicksort, heap sort)
- **By space**: in-place (bubble, selection, insertion, quicksort) vs. not in-place (merge sort)
- **By recursion**: recursive (merge sort, quicksort) vs. non-recursive/iterative (bubble, selection, insertion)

---

## Chapter 9: Graph Algorithms

### 9.1 Graph Terminology
- A **graph** G = (V, E) consists of a set of **vertices** V and a set of **edges** E
- **Vertices (Nodes)**: the fundamental units/points of the graph
- **Edges**: the connections between the vertices
- **Directed graph (digraph)**: edges have a direction (arrows); (u, v) is different from (v, u)
- **Undirected graph**: edges have no direction; {u, v} = {v, u}
- **Weighted graph**: each edge has an associated numerical weight or cost

![Weighted Graph](/assets/svgi/weighted-graph.svg)

- **Degree** of a vertex: the number of edges connected to it
  - In a directed graph: **in-degree** (edges coming in) and **out-degree** (edges going out)
- **Simple Graph**: has NO self-loops and NO parallel (multiple) edges between the same two vertices; it is undirected
- **Complete Graph (K_n)**: a simple graph where every vertex is connected to every other vertex exactly once. Total edges = n(n-1)/2
- **Handshaking Lemma**: the sum of the degrees of all vertices equals twice the number of edges (sum of deg(v) = 2|E|)
- **Adjacency**: two vertices are adjacent if they are connected by an edge

### 9.2 Eulerian and Hamiltonian Paths
- **Eulerian Path**: a path that traverses every *edge* exactly once
  - Exists if and only if the graph has exactly 0 or 2 vertices of odd degree
- **Eulerian Circuit**: an Eulerian path that starts and ends on the same vertex
  - Exists if and only if *every* vertex has an even degree
- **Hamiltonian Path**: a path that visits every *vertex* exactly once
  - Finding a Hamiltonian path is a much harder computational problem (NP-complete) than finding an Eulerian path
- **Hamiltonian Circuit**: a Hamiltonian path that returns to the starting vertex

### 9.3 Trees and Spanning Trees
- A **tree** is an undirected graph that is connected and acyclic (contains no cycles)
- A tree with n vertices always has exactly **n - 1** edges
- A **spanning tree** of a graph is a subgraph that includes all the vertices of the original graph and is a tree
- Any connected graph with n vertices has a spanning tree with exactly n - 1 edges

### 9.4 Minimum Spanning Tree (MST)
- In a weighted graph, the MST is the spanning tree with the minimum possible total edge weight

**Kruskal's Algorithm**:
1. Sort all edges by weight (ascending)
2. Pick the smallest edge that does **not** create a cycle
3. Repeat until all vertices are connected (n - 1 edges added)
- Time complexity: O(E log E) where E is the number of edges

**Prim's Algorithm**:
1. Start from an arbitrary vertex
2. Add the cheapest edge connecting a vertex **in** the tree to a vertex **outside** the tree
3. Repeat until all vertices are included
- Time complexity: O(E log V) with a priority queue

- Both Kruskal's and Prim's use the **greedy technique**: at each step, make the locally optimal choice

### 9.5 Shortest Path — Dijkstra's Algorithm
- **Dijkstra's Algorithm**: finds the shortest path from a starting vertex to all other vertices in a weighted graph
- **Steps**:
  1. Set the distance to the source vertex to 0 and all others to infinity
  2. Mark all vertices as unvisited; set the source as the current vertex
  3. For the current vertex, consider all unvisited neighbors and calculate their tentative distances
  4. If the newly calculated distance is less than the current known distance, update it
  5. Mark the current vertex as visited (its distance is now final)
  6. Select the unvisited vertex with the smallest tentative distance as the new current vertex
  7. Repeat until all vertices are visited
- **Limitation**: Dijkstra's algorithm assumes adding an edge always increases total cost. It cannot produce correct results when the graph contains **negative edge weights** (Bellman-Ford is needed instead)

---

## Chapter 10: The Greedy Technique

### 10.1 What Is a Greedy Algorithm?
- A **greedy algorithm** makes the **locally optimal choice** at each step, hoping to find a global optimum
- It never reconsiders previous choices — each decision is **irrevocable**

### 10.2 Requirements for a Greedy Choice
| Requirement | Description |
|-------------|-------------|
| **Feasible** | The choice must satisfy the problem's constraints |
| **Locally optimal** | It must be the best choice available at the current step |
| **Irrevocable** | Once made, the choice cannot be changed or undone |

### 10.3 Classic Example: Change-Making Problem
- Given coin denominations (e.g., 25c, 10c, 5c, 1c), make change for a given amount using the **fewest coins**
- Greedy approach: always pick the **largest coin** that does not exceed the remaining amount
- Example: 48 cents → 25 + 10 + 10 + 1 + 1 + 1 = 6 coins
- **Note**: the greedy approach does not always yield the optimal solution for arbitrary coin sets

### 10.4 Greedy Algorithms in This Course
- **Kruskal's Algorithm** (MST): greedily picks the cheapest edge
- **Prim's Algorithm** (MST): greedily expands the tree with the cheapest crossing edge
- **Dijkstra's Algorithm** (shortest path): greedily selects the nearest unvisited vertex

---

## Chapter 11: Recursion and Mathematical Induction

### 11.1 Recursion
- **Recursion**: a technique where a function calls itself to solve smaller instances of the same problem
- Every recursive function MUST have a **base case** to terminate
- Without a base case, the function causes **infinite recursion** and a stack overflow error

**Structure of a recursive function**:
\`\`\`
function solve(problem):
    if problem is simple enough:    ← BASE CASE
        return direct solution
    else:                           ← RECURSIVE CASE
        break problem into smaller sub-problem
        return solve(sub-problem)
\`\`\`

**Example — Factorial in Python**:
\`\`\`python
def factorial(n):
    if n == 0 or n == 1:   # Base case
        return 1
    else:                   # Recursive case
        return n * factorial(n - 1)
\`\`\`

**Example — Fibonacci in Python**:
\`\`\`python
def fibonacci(n):
    if n <= 0:
        return 0           # Base case
    elif n == 1:
        return 1           # Base case
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)  # Recursive case
\`\`\`

- The Fibonacci implementation above has **O(2^n)** time complexity due to redundant calculations — this can be improved with **memoization** or an iterative approach

### 11.2 Recursion vs. Iteration
| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| Mechanism | Function calls itself | Uses loops (for, while) |
| Memory | Uses call stack (risk of stack overflow) | Uses constant extra space |
| Readability | Often more elegant and concise | Can be more straightforward |
| Performance | May be slower due to function call overhead | Generally faster |

### 11.3 Mathematical Induction
- A proof technique used to prove statements P(n) for all natural numbers:
  1. **Base case**: show P(1) is true
  2. **Inductive step**: assume P(k) is true (the *induction hypothesis*), then show that P(k+1) must also be true
- If both steps succeed, the statement holds for **all** natural numbers n ≥ 1
- **Connection to recursion**: induction proves correctness the same way recursion solves problems — by reducing to a base case

---

## Chapter 12: Data Structures Basics

### 12.1 What Is a Data Structure?
- A **data structure** is a way of organizing and storing data so that it can be accessed and modified efficiently
- The choice of data structure affects the **time complexity** of operations

### 12.2 Common Data Structures

**Arrays / Lists**:
- Ordered collection of elements accessed by index
- Python lists: \`A = [10, 20, 30, 40]\`
- Access by index: O(1); search: O(n); insert/delete: O(n)

**Stacks** (LIFO — Last In, First Out):

![Stack data structure — push and pop operations](/assets/images/stack-data-structure.svg)

- Elements are added and removed from the **top** only
- Operations: push (add), pop (remove), peek (view top)
- Example use: undo functionality, expression evaluation

**Queues** (FIFO — First In, First Out):
- Elements are added at the **rear** and removed from the **front**
- Operations: enqueue (add), dequeue (remove)
- Example use: scheduling, breadth-first search

**Dictionaries / Hash Maps**:
- Store **key-value** pairs for fast lookup
- Python dict: \`d = {"name": "Alice", "age": 25}\`
- Average lookup, insert, delete: O(1)

### 12.3 Choosing the Right Data Structure
| Need | Best Structure |
|------|---------------|
| Fast access by position | Array / List |
| Fast lookup by key | Dictionary / Hash Map |
| LIFO processing | Stack |
| FIFO processing | Queue |
| Hierarchical data | Tree |
| Relationships between entities | Graph |

---

## Additional Topics

### Modeling
- Modeling involves creating a simplified representation (like a map or diagram with a weighted graph) to reason about complex situations (e.g., finding the cheapest combinations of train and bike routes)
- A good model captures the **essential features** of a problem while ignoring irrelevant details

### Python Implementation: Automatic Diagnostic System
- A practical example from the lectures combining lists, loops, and conditionals:
\`\`\`python
symptoms = ["fever", "cough", "headache", "fatigue"]
patient_symptoms = []

for s in symptoms:
    answer = input(f"Do you have {s}? (yes/no): ")
    if answer.lower() == "yes":
        patient_symptoms.append(s)

if "fever" in patient_symptoms and "cough" in patient_symptoms:
    print("Possible diagnosis: Flu")
elif "headache" in patient_symptoms and "fatigue" in patient_symptoms:
    print("Possible diagnosis: Stress")
else:
    print("No clear diagnosis — consult a doctor")
\`\`\`

### Key Takeaways
- **Computational Thinking** is about formulating problems and expressing solutions as algorithms
- Always **plan before coding**: understand the problem, choose a strategy, write pseudocode, then implement
- **Big O notation** lets you compare algorithm efficiency independent of hardware
- Choose the right **search algorithm**: linear for small/unsorted data, binary for large/sorted data
- Choose the right **sorting algorithm**: simple O(n²) sorts for small data, O(n log n) sorts for large data
- **Graph algorithms** (Dijkstra's, Kruskal's, Prim's) solve real-world optimization problems using the greedy technique
- **Recursion** is powerful but must always have a base case to avoid infinite loops
- The right **data structure** can dramatically improve algorithm performance
`;
