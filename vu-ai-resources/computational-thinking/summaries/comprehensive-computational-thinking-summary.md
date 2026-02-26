# Comprehensive Computational Thinking Summary — Chapters 1–6

## Chapter 1: What Is Computational Thinking?

### 1.1 Definition
- **Computational thinking (CT)**: a set of problem-solving methods that involves not only solving problems but also *formulating* them
- By formulating a problem, we develop a step-by-step solution that can be used to program a computer to solve complex problems

### 1.2 Key Idea
- CT bridges the gap between human reasoning and computer execution
- The goal is to express solutions as precise, repeatable steps

---

## Chapter 2: Solution Strategies

### 2.1 Easy vs. Efficient Solution Strategies
- Not all strategies are equally efficient; choosing the right one matters

### 2.2 Five Steps to Solve a Problem
| Step | Description |
|------|-------------|
| 1 | **Understand** the problem thoroughly |
| 2 | **Choose** the right solution strategy |
| 3 | **Solve** the problem using the chosen strategy |
| 4 | **Check** whether the strategy worked — if not, go back to step 2 |
| 5 | **Verify** the solution — check for miscalculations, test reasonableness |

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

## Chapter 4: Algorithms

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
- Example — counting people in a classroom:
```
1| Let NumberOfPerson = 0
2| for each person in the classroom
3|     set NumberOfPerson = NumberOfPerson + 1
```
- **Advantages**:
  - Catching errors at the pseudocode stage is less costly than debugging later
  - Can be reviewed by a team to ensure it matches design specifications

---

## Chapter 5: Big O Notation

### 5.1 What Is Big O?
- **Big O notation**: classifies algorithms based on how they respond to changes in input size
- Describes the **asymptotic behavior** of functions as input grows to infinity
- Provides an **upper bound** on the growth rate
- The **order** of a function = its growth rate

**Example**: If T(n) = 5n² − 2n + 10, the n² term dominates → **T(n) = O(n²)**

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

### 5.2 Understanding Big O
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

### 5.3 Determining Complexities

#### Sequence of Statements
- k simple statements → total time = O(1) (constant)

#### If-Else
- Worst-case = the **slower** of the two branches
- Example: if-block is O(1), else-block is O(N) → overall **O(N)**

#### Loops
- Loop iterating n times with O(1) body → **O(n)**

#### Nested Loops
- Outer loop: n iterations, inner loop: m iterations → **O(n × m)**
- Both loops iterate n times → **O(n²)**

#### Statements with Function Calls
- Include the called function's complexity in the total
- Example: loop 1..n calling g(j) where g has O(k) → total is 1 + 2 + ... + n = **O(n²)**

---

## Chapter 6: Search Algorithms

### Introduction
- **Search algorithm**: finds an item with specified properties among a collection
- Unlike sorting algorithms, searching has no stability issues

### 6.1 Linear Search (Sequential Search)
- **Strategy**: Brute force
- **How it works**: sequentially check each element until the key is found or the list is exhausted
- **Prerequisite**: none — the list does **not** need to be sorted
- **Efficiency**: only efficient for small lists (n ≤ 8)

**Pseudocode**:
```
FOR each element in the list
    check if element equals the key
    IF found → stop and return location
    ELSE → continue
```

**Complexity**:
| Case | Comparisons | Big O |
|------|-------------|-------|
| Best | 1 (key is first) | O(1) |
| Worst | n (key is last or absent) | O(n) |
| Average/Expected | ≈ n | O(n) |

### 6.2 Binary Search (Half-Interval Search)
- **Strategy**: Divide-and-Conquer
- **Prerequisite**: the list **must be sorted**
- **How it works**:
  1. Compare search key K with middle element A[m]
  2. If K = A[m] → found, stop
  3. If K > A[m] → eliminate first half, search second half recursively
  4. If K < A[m] → eliminate second half, search first half recursively
- Reduces the search space by **half** each step
- **When not to use**: when the collection is **frequently updated** (maintaining sort order is costly)

**Complexity**:
| Case | Comparisons | Big O |
|------|-------------|-------|
| Best | 1 (key is the middle element) | O(1) |
| Worst | ⌈log₂(n+1)⌉ | O(log n) |
| Average | ≈ log₂(n) | O(log n) |

### Linear vs. Binary Search Comparison
| Feature | Linear Search | Binary Search |
|---------|--------------|---------------|
| Strategy | Brute force | Divide-and-Conquer |
| Sorted list required? | No | Yes |
| Best case | O(1) | O(1) |
| Worst case | O(n) | O(log n) |
| Average case | O(n) | O(log n) |
| Best for | Small or unsorted lists | Large, sorted, rarely updated lists |
