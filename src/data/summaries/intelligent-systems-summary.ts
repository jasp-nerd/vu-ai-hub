export const intelligentSystemsSummary = String.raw`
# Intelligent Systems: Comprehensive Course Summary

This comprehensive summary encompasses the 13 foundational lectures of the course, structured to provide a deep understanding of discrete mathematics, search environments, logic, knowledge representation, probability, and machine learning.

---

## Part I: Foundations & Problem Solving (Lectures 1 & 2)

### L1: Introduction to Intelligent Systems and Discrete Mathematics

Intelligent Systems involve software and hardware that simulate intelligent behavior to perform tasks traditionally requiring human intelligence. They range from simple rule-based systems to complex adaptive AI systems. Examples include **AlphaGo** (DeepMind's Go-playing AI using deep learning and tree search), **self-driving cars** (autonomous vehicles processing sensor data in real-time), and **voice assistants** (Siri, Google Assistant interpreting natural language via NLP).

The bedrock of algorithmic reasoning in AI originates from **Discrete Mathematics**:

#### Set Theory
Sets are collections of distinct objects, fundamental for organizing and categorizing data in AI.
*   **Elements:** Objects contained in a set (e.g., $\{1, 2, 3\}$).
*   **Finite and Infinite Sets:** Finite sets have a limited number of elements (e.g., $\{1, 2, 3\}$), while infinite sets continue indefinitely (e.g., the set of natural numbers $\mathbb{N}$).
*   **Subsets:** A set $A$ is a subset of $B$ if all elements of $A$ are also in $B$:
    $$ A \subseteq B \iff \forall x (x \in A \rightarrow x \in B) $$
*   **Power Set:** $\mathcal{P}(S)$ is the set of all subsets of $S$. If $S = \{a, b\}$, then:
    $$ \mathcal{P}(S) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\} $$
    The cardinality of a power set is $|\mathcal{P}(S)| = 2^{|S|}$.
*   **Set Operations:**
    *   **Union:** $A \cup B = \{x \mid x \in A \text{ or } x \in B\}$
    *   **Intersection:** $A \cap B = \{x \mid x \in A \text{ and } x \in B\}$
    *   **Difference:** $A \setminus B = \{x \mid x \in A \text{ and } x \notin B\}$
    *   **Complement:** $\overline{A} = \{x \in U \mid x \notin A\}$ where $U$ is the universal set.
*   **Venn Diagrams** visually represent relationships, overlaps, and differences between sets.

#### Relations and Tuples
Relations describe connections between elements of two or more sets. A tuple is an ordered list of elements.
*   **Ordered Pairs:** $(a, b)$, where order matters: $(a, b) \neq (b, a)$ unless $a = b$.
*   **$n$-Tuples:** An ordered list with $n$ elements, e.g., a 3-tuple $(x, y, z)$. Training data in ML is often structured as tuples (feature, label).
*   **Cartesian Product:** $A \times B = \{(a, b) \mid a \in A, b \in B\}$.

#### Graph Theory
A graph is a mathematical structure used to model pairwise relations between objects.
*   **Definition:** A graph $G = (V, E)$ consists of vertices (nodes) $V$ and edges (connections) $E$.
*   **Types of Graphs:**
    *   **Undirected Graph:** Edges have no direction; relationships are bidirectional.
    *   **Directed Graph (Digraph):** Edges have a direction, indicating one-way relationships.
    *   **Weighted Graph:** Edges carry weights representing costs or distances.
*   **Adjacency Matrix:** A matrix representation of a graph where cell $(i, j) = 1$ if an edge exists between vertex $i$ and vertex $j$, and $0$ otherwise. For weighted graphs, the cell stores the weight.
*   **Trees:** A special type of graph that is connected and acyclic (contains no loops). Every tree with $n$ vertices has exactly $n - 1$ edges.
*   **Practical Applications:** Network analysis (social networks, internet structure), pathfinding algorithms (GPS navigation), logistics, and state-space representations.

---

### L2: State Spaces and Search Algorithms

#### Agents and Decision-Making
An agent perceives its environment through **sensors** and acts upon it using **actuators**.
*   **Levels of Abstraction:**
    1. **Functional:** Behavior as a function mapping sensor inputs to actions.
    2. **Programmatic:** Implementation within a system.
    3. **Architectural:** Underlying operational infrastructure.
*   **Agent Types:**
    *   **Simple Reflex Agents:** Rely on condition-action rules without internal state. React directly to current percepts.
    *   **Model-Based Reflex Agents:** Maintain an internal state to handle partially observable environments.
    *   **Goal-Based Agents:** Optimize actions to achieve specific future goals, accounting for internal states and future action mappings.
*   **PEAS Framework** (Performance, Environment, Actuators, Sensors): Defines the task environment for an agent. Understanding PEAS helps design effective agents.

#### State-Space Representations
A mathematical model where nodes represent states and edges represent actions.
*   **Purpose:** Abstract real environments to simplify problem-solving and enable generic algorithms.
*   **Components:** Initial state, successor function (actions), goal test, path cost.
*   **Examples:** Robotic vacuum cleaners using simplified maps, geographic navigation (Romanian cities problem).

#### Search Algorithms
Navigate state-space graphs to find solutions efficiently.

**Tree Search Process:**
1. Initialize with the root node (initial state).
2. Expand nodes using a successor function until reaching the goal or exhausting possibilities.

**Performance Metrics:**
*   **Completeness:** Can it always find a solution if one exists?
*   **Optimality:** Does it find the least-cost solution?
*   **Time Complexity:** Number of nodes expanded.
*   **Space Complexity:** Memory required for node storage.

#### Uninformed (Blind) Search Strategies
These traverse the state space without domain-specific insight.

*   **Breadth-First Search (BFS):**

![Breadth-First Search — nodes explored level by level](/assets/images/bfs-tree-traversal.svg)

    *   Uses a **FIFO queue** (frontier).
    *   Explores all nodes at the current depth before moving deeper.
    *   **Complete:** Yes (if branching factor $b$ is finite).
    *   **Optimal:** Yes, if all step costs are equal.
    *   **Time Complexity:** $O(b^d)$ where $d$ is the depth of the shallowest goal.
    *   **Space Complexity:** $O(b^d)$ -- stores all nodes at the current level.
    *   Main drawback: **high memory consumption**.

*   **Depth-First Search (DFS):**

![Depth-First Search — nodes explored depth-first before backtracking](/assets/images/dfs-tree-traversal.svg)
    *   Uses a **LIFO stack** (frontier).
    *   Explores as deep as possible along one branch before backtracking.
    *   **Complete:** No -- can get stuck in infinite loops on graphs with cycles.
    *   **Optimal:** No -- may find a deeper (more expensive) solution first.
    *   **Time Complexity:** $O(b^m)$ where $m$ is the maximum depth.
    *   **Space Complexity:** $O(bm)$ -- only stores nodes along the current path.
    *   Main advantage: **low memory footprint**.

*   **Depth-Limited Search (DLS):**
    *   DFS with a predetermined depth limit $l$ to mitigate infinite loop issues.
    *   **Complete:** Only if $l \geq d$.
    *   **Optimal:** No.

*   **Iterative Deepening Search (IDS):**
    *   Repeatedly applies DLS with increasing depth limits: $l = 0, 1, 2, \ldots$
    *   Combines DFS's space efficiency with BFS's completeness and optimality.
    *   **Complete:** Yes. **Optimal:** Yes (with uniform step costs).
    *   **Time Complexity:** $O(b^d)$. **Space Complexity:** $O(bd)$.
    *   Despite re-expanding nodes, the overhead is minimal because most nodes are at the deepest level.

---

## Part II: Informed and Adversarial Search (Lectures 3 & 4)

### L3: Informed Search

Informed search introduces **heuristics** -- domain-specific "rules of thumb" that estimate the cost to reach the goal, improving efficiency over blind search.

#### Common Heuristics
*   **Manhattan Distance:** Sum of horizontal and vertical distances on a grid: $h(n) = |x_1 - x_2| + |y_1 - y_2|$.
*   **Straight-Line Distance (SLD):** Euclidean distance, often optimistic (admissible): $h(n) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$.

#### Best-First Search
Expands the most promising node based on heuristic $h(n)$. Prone to loops and backtracking inefficiency.

#### Greedy Best-First Search
*   Chooses the node with the **lowest $h(n)$** without considering cumulative path costs.
*   **Incomplete** (can loop). **Non-optimal** (heuristic may be misleading).
*   Fast in practice but unreliable for guaranteeing shortest paths.

#### Beam Search and Hill Climbing
*   **Beam Search:** Limits the number of expanded nodes to $k$, sacrificing optimality for efficiency.
*   **Hill Climbing:** Moves toward the local optimum but risks getting stuck at local maxima, plateaus, or ridges.

#### A* Search Algorithm
The gold standard for informed search. Calculates path utility via:

![A* Search — pathfinding with heuristic costs on a grid](/assets/images/a-star-pathfinding.svg)

$$ f(n) = g(n) + h(n) $$
where $g(n)$ is the exact cumulative cost to reach $n$ and $h(n)$ is the estimated cost from $n$ to the goal.

*   **Admissibility:** For A* to guarantee optimality, $h(n)$ must be *admissible* -- it must **never overestimate** the true remaining cost $h^*(n)$:
    $$ 0 \leq h(n) \leq h^*(n) \quad \forall n $$
*   **Monotonicity (Consistency):** A heuristic is consistent if for every node $n$ and successor $n'$:
    $$ h(n) \leq c(n, a, n') + h(n') $$
    Consistency implies admissibility. Ensures heuristics never overestimate costs along any path segment.
*   **Properties:** Complete and optimal with admissible heuristics. High computational cost (keeps all nodes in memory).
*   **Trade-offs:** A* is optimal but expensive. Choose algorithms based on the problem's requirements -- optimality, efficiency, or memory constraints.

---

### L4: Adversarial Search (Games)

Environments featuring multi-agent conflict, subdivided by:
*   **Deterministic vs. Stochastic:** Deterministic games depend solely on player actions; stochastic games involve randomness (e.g., dice rolls).
*   **Perfect vs. Imperfect Information:** Perfect information implies full visibility of the game state (e.g., chess); imperfect information involves hidden elements (e.g., Schnapsen card game).

#### Game Components Analogized with Search
*   Initial state = Starting game position.
*   Successor functions = Possible moves.
*   Terminal test = Endgame conditions.
*   Utility function = Value of terminal states (+1 win, -1 loss, 0 draw).

#### The Minimax Algorithm

![Minimax game tree — MAX and MIN players alternating choices](/assets/images/minimax-game-tree.svg)

*   A decision-making algorithm where **MAX** aims to maximize its score and **MIN** aims to minimize it.
*   **Steps:** Explore the game tree from terminal nodes upward, alternating between maximizing and minimizing scores.
*   **Properties:** Complete and optimal under assumptions of rational play.
*   **Limitation:** Computational complexity grows exponentially with depth, limiting practicality for complex games like chess.

#### Alpha-Beta Pruning
Optimizes Minimax by eliminating branches that cannot affect the final decision:

![Alpha-Beta Pruning — eliminating branches that cannot affect the outcome](/assets/images/alpha-beta-pruning.svg)

*   $\alpha$: **MAX's best option** (guaranteed lower bound) found so far along the path.
*   $\beta$: **MIN's best option** (guaranteed upper bound) found so far along the path.
*   **Pruning condition:** If $\alpha \geq \beta$, the subtree is pruned -- further exploration will not change the outcome.
*   **Mnemonic:** *"Alpha trims Above, Beta trims Below."*
*   **Benefit:** Can effectively halve the search depth (e.g., exploring 12 moves ahead in chess instead of 6 with the same computation).

#### Imperfect Information and Advanced Techniques
*   **Heuristic Evaluation:** When exhaustive tree generation is infeasible, use evaluation functions to approximate utility at non-terminal states.
*   **Monte Carlo Sampling:** Selects a subset of scenarios for evaluation, reducing computational complexity.
*   **Random Rollouts:** Simulates games randomly to approximate win probabilities.
*   **Case Study -- AlphaGo:** Combines Minimax, alpha-beta pruning, Monte Carlo Tree Search, and deep neural networks to defeat top human Go players.

---

## Part III: Logic and Knowledge Representation (Lectures 5, 6, 7)

### L5: Logical Agents and Propositional Logic

Logic provides the formal framework for agents to represent knowledge and make decisions, even when information is incomplete.

#### The Wumpus World
A canonical AI example: an agent navigates a grid to find gold while avoiding pits and the Wumpus monster.
*   **Partial Observability:** The agent relies on percepts like "stench" (Wumpus nearby) or "breeze" (pit nearby).
*   **Knowledge Base (KB):** Stores rules and percepts using propositional logic.
*   Propositions like $\lnot B_{1,1}$ (no breeze in square [1,1]) guide safe decisions.

#### Propositional Logic: Syntax and Semantics
A formal system with three components:
*   **Syntax:** Rules for writing well-formed formulae using operators.
*   **Semantics:** Meaning of formulae, evaluated as true (1) or false (0).
*   **Calculus:** Rules for manipulating formulae to infer truth.

**Logical Operators:**
*   **Negation** ($\lnot$): Reverses truth value. $\lnot P$ is true when $P$ is false.
*   **Conjunction / AND** ($\land$): True only if both propositions are true.
*   **Disjunction / OR** ($\lor$): True if at least one proposition is true.
*   **Implication** ($\rightarrow$): $P \rightarrow Q$ is false **only** when $P$ is true and $Q$ is false.
*   **Biconditional** ($\Leftrightarrow$): True when both propositions have the same truth value.

**Truth Table for Implication ($P \rightarrow Q$):**

| $P$ | $Q$ | $P \rightarrow Q$ |
|-----|-----|--------------------|
| T   | T   | T                  |
| T   | F   | F                  |
| F   | T   | T                  |
| F   | F   | T                  |

#### Knowledge Bases and Models
*   **Knowledge Base (KB):** A collection of sentences known to be true.
*   **Model:** A truth assignment to all propositional variables. A model $m$ *satisfies* a sentence $\alpha$ if $\alpha$ is true under $m$.
*   **Satisfiability:** A sentence is satisfiable if at least one model makes it true.
*   **Validity (Tautology):** A sentence is valid if it is true under **all** possible truth assignments.
*   **Entailment ($KB \models \alpha$):** A sentence $\alpha$ is entailed by $KB$ if $\alpha$ is true in **every** model where $KB$ is true.

---

### L6: Propositional Logic 2 -- CNF and SAT Solving

#### Conjunctive Normal Form (CNF)
A standardized way to write logical sentences for efficient algorithmic processing.
*   **Definition:** A conjunction (AND) of clauses, where each clause is a disjunction (OR) of literals.
*   **Example:** $(\lnot A \lor B) \land (\lnot B \lor A) \land C$
*   **Set Notation:** Uses sets and commas instead of $\land$ symbols: $\{\{\lnot A, B\}, \{\lnot B, A\}, \{C\}\}$.

**CNF Conversion Steps:**
1. Eliminate biconditionals: $(\alpha \Leftrightarrow \beta) \equiv (\alpha \rightarrow \beta) \land (\beta \rightarrow \alpha)$
2. Eliminate implications: $(\alpha \rightarrow \beta) \equiv (\lnot \alpha \lor \beta)$
3. Move negation inward using De Morgan's laws.
4. Distribute $\lor$ over $\land$.

#### The DPLL Algorithm (Davis-Putnam-Logemann-Loveland)
A systematic procedure for determining the satisfiability of a propositional formula in CNF.
*   **Steps:**
    1. Start with no variable assignments.
    2. Incrementally assign values to propositions.
    3. Use **unit clause propagation** to simplify: if a clause has only one unassigned literal, that literal must be true.
    4. **Backtrack** if a partial assignment leads to a false clause.
*   **Variants:**
    *   **Variant 1:** Begins with $P = 0$, uses unit clauses, backtracks as necessary.
    *   **Variant 2:** Prioritizes variables occurring most frequently in the smallest clauses.
    *   **Variant 3:** Prioritizes variables with more positive occurrences.

---

### L7: Rule-Based Reasoning and Knowledge Graphs

#### Rule-Based Reasoning
A different approach to proving entailment ($KB \models \alpha$?), complementing truth-table enumeration and DPLL.

**Inference Rules** are logical forms that take premises, analyze their syntax, and return conclusions. Key rules:
*   **Modus Ponens:** From $\alpha \Rightarrow \beta$ and $\alpha$, conclude $\beta$.
    $$ \frac{\alpha \Rightarrow \beta, \quad \alpha}{\beta} $$
    *Important:* This is an inference rule, **not** the same as the tautology $((\alpha \rightarrow \beta) \land \alpha) \rightarrow \beta$.
*   **And-Elimination:** From a conjunction, any conjunct can be inferred.
    $$ \frac{\alpha \land \beta}{\alpha} \quad \text{or} \quad \frac{\alpha \land \beta}{\beta} $$
*   **Biconditional Elimination:**
    $$ \frac{\alpha \Leftrightarrow \beta}{(\alpha \Rightarrow \beta) \land (\beta \Rightarrow \alpha)} $$

**Logical Equivalences (usable as rewrite rules):**
*   Commutativity: $(\alpha \land \beta) \equiv (\beta \land \alpha)$; $(\alpha \lor \beta) \equiv (\beta \lor \alpha)$
*   Associativity: $((\alpha \land \beta) \land \gamma) \equiv (\alpha \land (\beta \land \gamma))$
*   Double-Negation Elimination: $\lnot(\lnot \alpha) \equiv \alpha$
*   Contraposition: $(\alpha \Rightarrow \beta) \equiv (\lnot \beta \Rightarrow \lnot \alpha)$
*   Implication Elimination: $(\alpha \Rightarrow \beta) \equiv (\lnot \alpha \lor \beta)$
*   De Morgan's Laws: $\lnot(\alpha \land \beta) \equiv (\lnot \alpha \lor \lnot \beta)$; $\lnot(\alpha \lor \beta) \equiv (\lnot \alpha \land \lnot \beta)$
*   Distributivity: $(\alpha \land (\beta \lor \gamma)) \equiv ((\alpha \land \beta) \lor (\alpha \land \gamma))$; $(\alpha \lor (\beta \land \gamma)) \equiv ((\alpha \lor \beta) \land (\alpha \lor \gamma))$

#### Forward Chaining (Forward Checking)
Data-driven approach to prove $KB \models \alpha$:
1. Write down all facts derivable from the KB by exhaustively applying all inference rules.
2. This set of derived facts is called the **closure** ($KB^*$).
3. If $\alpha \in KB^*$, then $KB \vdash_f \alpha$, which implies $KB \models \alpha$.
4. If $\alpha \notin KB^*$ after exhaustive derivation, then $\alpha$ is **not** entailed.

**Soundness and Completeness:** Forward chaining in propositional logic is both sound (only derives true conclusions) and complete (derives all entailed conclusions).

#### Backward Chaining
Goal-driven approach: starts from the query $\alpha$ and works backward to determine whether the KB supports it. Often preferable when the branching factor in the reverse direction is lower.

#### Knowledge Graphs and Ontologies
Facilitate associations between objects in AI and the Semantic Web.
*   **Ontology:** An explicit specification of shared conceptualizations within a domain. Components include instances, classes, attributes, and relations.
*   **RDF (Resource Description Framework):** Models knowledge using **subject-predicate-object triples:**
    *   Class membership: ex:Netherlands rdf:type ex:EuropeanCountry
    *   Subclass relations: ex:EuropeanCountry rdfs:subClassOf ex:Country
*   **RDFS (RDF Schema):** Vocabulary for defining class hierarchies and property constraints.

#### Knowledge Engineering Process
1. Define domain and scope.
2. Enumerate terms and develop taxonomy.
3. Define properties and classes.
4. Create instances and test for anomalies.

#### SPARQL
A query language for retrieving structured data from knowledge graphs:
*   Queries triple patterns against RDF data stores.
*   Supports filtering, aggregation, and pattern matching.
*   Enables reasoning by traversing class hierarchies and property chains.

#### Entailment and Reasoning with RDFS
Implements reasoning using tools like OWL reasoners for RDF and RDFS entailments, allowing inference of new triples from existing knowledge.

---

## Part IV: Uncertainty and Probability (Lectures 8 & 9)

### L8: Vagueness and Uncertain Knowledge

Differentiating between semantic blurring (vagueness) and empirical ignorance (uncertainty).

#### Vagueness and Fuzzy Logic
Classical (Boolean) logic assigns binary truth values. But many real-world concepts resist crisp boundaries (e.g., "warm" vs. "hot", "tall" vs. "short").

**Fuzzy Sets and Membership Functions:**
*   Instead of binary membership ($\in$ or $\notin$), fuzzy sets assign a **degree of membership** $f_A(x) \in [0, 1]$.
*   A membership function $f_A : X \rightarrow [0, 1]$ maps each element $x$ to its degree of belonging to fuzzy set $A$.

**Fuzzy Set Operations:**
*   **Complement (Negation):**
    $$ f_{\lnot A}(x) = 1 - f_A(x) $$
*   **Union (OR):**
    $$ f_{A \cup B}(x) = \max(f_A(x), f_B(x)) $$
*   **Intersection (AND):**
    $$ f_{A \cap B}(x) = \min(f_A(x), f_B(x)) $$
*   **Subset relation:**
    $$ A \subseteq B \iff \forall x: f_A(x) \leq f_B(x) $$

**Composition of Fuzzy Relations:**
$$ f_{R;S}(\langle x, z \rangle) = \max_{y \in Y} \min(f_R(\langle x, y \rangle), f_S(\langle y, z \rangle)) $$

**Semantics of Fuzzy Logic (for propositional connectives):**
*   $v(\lnot A) = 1 - v(A)$
*   $v(A \lor B) = \max(v(A), v(B))$
*   $v(A \land B) = \min(v(A), v(B))$
*   $v(A \rightarrow B) = \min(1, 1 - v(A) + v(B))$

#### Uncertainty and Probability Theory
Quantifies incomplete insight when we do not have vague boundaries but rather **lack of knowledge** about which outcome will occur.
*   **Frequentism:** Probability derived from long-run frequency of events (historical ratios).
*   **Bayesianism:** Probability as subjective degree of belief, updated with evidence using Bayes' theorem.

---

### L9: Probabilities and Bayesian Networks

#### Foundational Probability Concepts

**Sample Space ($\Omega$):**
The set of all possible single outcomes of an experiment.
*   Coin flip: $\Omega = \{\text{heads}, \text{tails}\}$
*   Die roll: $\Omega = \{1, 2, 3, 4, 5, 6\}$
*   Two dice: $\Omega = \{(1,1), (1,2), \ldots, (6,6)\}$ (36 outcomes)

**Events:**
Subsets of the sample space representing all possible outcomes of interest.
*   "Roll an even number": $E = \{2, 4, 6\}$
*   "Roll a 3": $E = \{3\}$
*   The set of all possible events is the power set of $\Omega$.

**Basic Axioms of Probability:**
$$ 0 \leq P(A) \leq 1 \qquad P(\Omega) = 1 \qquad P(\emptyset) = 0 $$
$$ P(A \cup B) = P(A) + P(B) - P(A \cap B) $$

**Derived Formulas:**
*   $P(A) + P(\lnot A) = 1$
*   $P(A) = P(A \cap B) + P(A \cap \lnot B)$
*   If $A \subseteq B$, then $P(A) \leq P(B)$

#### Probability Distributions
A probability distribution gives a value for all possible variable assignments.
*   Denoted with bold **P** for the full distribution (vector of values).
*   The values of a probability vector **must always sum to 1**.
*   Example: $\mathbf{P}(\text{Cavity}) = \langle 0.2, 0.8 \rangle$ means $P(\text{cavity}) = 0.2$ and $P(\lnot\text{cavity}) = 0.8$.

**Joint Probability Distribution:**
For any proposition $\phi$, sum the atomic events (rows in the joint table) where it is true:
$$ P(\phi) = \sum_{\omega : \omega \models \phi} P(\omega) $$

**Inference by Enumeration:** To compute any probability, sum the relevant entries from the full joint probability table.

#### Conditional Probability
$$ P(A|B) = \frac{P(A \cap B)}{P(B)} \quad \text{valid if } P(B) \neq 0 $$
Can be rewritten as the **Product Rule:**
$$ P(A \cap B) = P(A|B) \cdot P(B) $$

**Example:** Given $\Omega = \{1, 2, 3, 4, 5, 6\}$ for a fair die, $P(\{3\} \mid \text{odd}) = \frac{P(\{3\}, \text{odd})}{P(\text{odd})} = \frac{1/6}{3/6} = \frac{1}{3}$.

#### Independence and Conditional Independence
*   **Independence:** $A$ and $B$ are independent if $P(A \cap B) = P(A) \cdot P(B)$, equivalently $P(A|B) = P(A)$.
*   **Conditional Independence:** $A$ and $B$ are conditionally independent given $C$ if $P(A \cap B | C) = P(A|C) \cdot P(B|C)$.

#### Bayes' Theorem
Vital for inverting conditional probabilities -- computing cause from effect:
$$ P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)} $$
Where $P(B)$ can be expanded using the law of total probability:
$$ P(B) = P(B|A) \cdot P(A) + P(B|\lnot A) \cdot P(\lnot A) $$

#### Chain Rule of Probability
Enables decomposition of joint distributions over multiple variables:
$$ P(X_1, X_2, \ldots, X_n) = P(X_1) \cdot P(X_2|X_1) \cdot P(X_3|X_1, X_2) \cdots P(X_n|X_1, \ldots, X_{n-1}) $$
$$ = \prod_{i=1}^{n} P(X_i | X_1, X_2, \ldots, X_{i-1}) $$

#### Bayesian Networks
A **Directed Acyclic Graph (DAG)** that compactly represents the joint probability distribution by encoding conditional independence assumptions.
*   Each node represents a random variable.
*   Each directed edge represents a direct probabilistic dependency.
*   Each node stores a **Conditional Probability Table (CPT)** giving $P(X_i | \text{Parents}(X_i))$.

**Key Formula -- Joint Distribution from a Bayesian Network:**
$$ P(X_1, X_2, \ldots, X_n) = \prod_{i=1}^{n} P(X_i | \text{Parents}(X_i)) $$

This factorization massively reduces storage: instead of $2^n$ entries for the full joint distribution of $n$ binary variables, a Bayesian network typically requires far fewer parameters due to the conditional independence structure.

---

## Part V: Machine Learning Theory (Lectures 10, 11, 12, 13)

### L10: Machine Learning 1 -- Classification Basics

Machine learning enables agents to learn from data rather than being explicitly programmed.

#### Learning Paradigms
*   **Supervised Learning:** Learning from labeled data (input-output pairs). Goal: predict labels for unseen inputs.
*   **Unsupervised Learning:** Finding patterns in data without pre-existing labels (e.g., clustering, dimensionality reduction).
*   **Semi-Supervised Learning:** Uses a small amount of labeled data with a large amount of unlabeled data.
*   **Reinforcement Learning:** Learning optimal actions through trial and error, receiving rewards or penalties (e.g., training a game-playing agent).

#### Classification
Supervised discrete prediction where the goal is to assign a class label to an input.
*   **Binary Classification:** Two classes (e.g., spam / not spam).
*   **Multiclass Classification:** More than two mutually exclusive classes.
*   **Multilabel Classification:** Each instance can belong to multiple classes simultaneously.

#### Naive Bayes Classifier
Applies Bayes' theorem with the strong **conditional independence assumption** -- all features are independent given the class label:
$$ \hat{y} = \arg\max_{c} P(C = c) \prod_{i=1}^{n} P(F_i = f_i | C = c) $$

*   $P(C = c)$ is the **prior probability** of class $c$.
*   $P(F_i = f_i | C = c)$ is the **likelihood** of feature $f_i$ given class $c$.

**Laplace (Add-One) Smoothing:** Prevents zero-probability collapse when a feature value was never observed in training for a particular class:
$$ \hat{\theta}_i = \frac{x_i + 1}{N + d} $$
where $x_i$ is the count of feature $i$, $N$ is the total count, and $d$ is the number of distinct values (vocabulary size).

#### k-Nearest Neighbors (k-NN)
A non-parametric, instance-based learning algorithm.
*   **Method:** Assign a label to a new data point based on the majority vote of its $k$ nearest labeled neighbors.
*   **Distance Metrics:** Euclidean distance, Manhattan distance, or others.
*   **Choosing $k$:** Small $k$ is sensitive to noise (overfitting); large $k$ smooths boundaries (underfitting). Often use odd $k$ for binary classification to avoid ties.
*   **No explicit training phase** -- all computation happens at prediction time (lazy learning).

---

### L11: Machine Learning 2 -- Evaluation and Text Features

#### Text Feature Engineering
Transforming raw text into numerical feature vectors for ML algorithms.

**Preprocessing Pipeline:**
1. **Tokenization:** Split text into individual words/tokens.
2. **Stop-word Removal:** Remove common words with little discriminative value (e.g., "the", "is", "and").
3. **Stemming/Lemmatization:** Reduce words to their root form (e.g., "running" -> "run").

**TF-IDF (Term Frequency - Inverse Document Frequency):**
$$ \text{tf-idf}(t, d) = \text{tf}(t, d) \times \text{idf}(t) $$
*   $\text{tf}(t, d)$: Number of occurrences of term $t$ in document $d$.
*   $\text{idf}(t) = \log\left(\frac{|C|}{|\{d \in C : t \in d\}|}\right)$: Logarithm of total documents divided by documents containing term $t$.
*   TF-IDF upweights terms that are frequent in a document but rare across the corpus (high discriminative power).

#### Distance and Similarity Metrics

**Euclidean Distance:** For two vectors $\mathbf{q}$ and $\mathbf{p}$:
$$ d(\mathbf{q}, \mathbf{p}) = \sqrt{\sum_{i=1}^{n} (q_i - p_i)^2} $$

**Hamming Distance:** Count of positions where corresponding elements differ (for categorical or binary data).

**Cosine Similarity:** Measures angular orientation between two $n$-dimensional vectors $\mathbf{A}$ and $\mathbf{B}$:
$$ \cos(\theta) = \frac{\mathbf{A} \cdot \mathbf{B}}{||\mathbf{A}|| \cdot ||\mathbf{B}||} = \frac{\sum_{i=1}^{n} A_i B_i}{\sqrt{\sum_{i=1}^{n} A_i^2} \cdot \sqrt{\sum_{i=1}^{n} B_i^2}} $$
*   Range: $[-1, 1]$, where $1$ means identical direction, $0$ means orthogonal, $-1$ means opposite.
*   Particularly useful for text similarity because it is invariant to document length.

#### Model Evaluation

**Confusion Matrix** for binary classification:

|                | Predicted Positive | Predicted Negative |
|----------------|--------------------|--------------------|
| Actual Positive | TP (True Positive) | FN (False Negative) |
| Actual Negative | FP (False Positive) | TN (True Negative) |

**Key Metrics:**
*   **Accuracy:** $\frac{TP + TN}{TP + TN + FP + FN} = \frac{TP + TN}{N}$
    Overall correctness, but misleading on imbalanced datasets.
*   **Error Rate:** $\frac{FP + FN}{N} = 1 - \text{Accuracy}$
*   **Precision (Positive Predictive Value):** $\frac{TP}{TP + FP}$
    Of all predicted positives, how many were actually positive? (Avoiding false alarms.)
*   **Recall (Sensitivity / True Positive Rate):** $\frac{TP}{TP + FN}$
    Of all actual positives, how many were correctly identified? (Capturing all positives.)
*   **F1-Score:** Harmonic mean of precision and recall:
    $$ F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}} $$

**Precision vs. Recall Trade-off:** Increasing one often decreases the other. The choice depends on the application:
*   High recall is critical when missing positives is costly (e.g., disease screening).
*   High precision is critical when false alarms are costly (e.g., spam filtering).

---

### L12: Machine Learning 3 -- Regression, Optimization, and Complexity

#### Regression
Predicting continuous (numerical) output values, rather than discrete class labels.

**Design Matrix:** A matrix $\mathbf{X}$ where each row is a data point and each column is a feature. Used to structure input data for regression and other ML models.

**Linear Regression:**
Models the relationship between input features and output as a linear function:
$$ f_p(x) = w_0 + w_1 x_1 + w_2 x_2 + \ldots + w_n x_n = \mathbf{w}^T \mathbf{x} $$

**Sum of Squared Errors (SSE):**
Given data points $x_1, \ldots, x_n$ with expected outcomes $y_1, \ldots, y_n$ and model predictions $f_p(x_1), \ldots, f_p(x_n)$:
$$ \text{SSE}(p) = \sum_{i=1}^{n} (f_p(x_i) - y_i)^2 $$
The goal is to find parameters $p$ (weights) that minimize this error.

**Mean Squared Error (MSE):** Normalized version:
$$ \text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (f_p(x_i) - y_i)^2 $$

#### Overfitting vs. Underfitting
*   **Underfitting (High Bias):** Model is too simple to capture the underlying pattern. Poor performance on both training and test data.
*   **Overfitting (High Variance):** Model is too complex and memorizes training noise. Excellent training performance but poor generalization to new data.
*   **Occam's Razor:** Prefer the simplest model that adequately explains the data.
*   **Bias-Variance Trade-off:** Finding the sweet spot between model complexity and generalization ability.

#### Gradient Descent
An iterative optimization algorithm that minimizes a loss function by moving in the direction of steepest descent:
$$ w_{t+1} = w_t - \eta \cdot \nabla L(w_t) $$
where $\eta$ is the **learning rate** and $\nabla L(w_t)$ is the gradient of the loss function at $w_t$.

*   **Batch Gradient Descent:** Computes the gradient using the entire training dataset per update. Stable but slow for large datasets.
*   **Stochastic Gradient Descent (SGD):** Computes the gradient using a single randomly selected data point per update. Faster but noisier.
*   **Mini-Batch Gradient Descent:** Computes the gradient using a small random subset (mini-batch) of data. Balances stability and speed.

**Learning Rate Considerations:**
*   Too large: overshoots the minimum, may diverge.
*   Too small: converges very slowly.
*   In practice, learning rate schedules or adaptive methods are used.

#### Linear Separability and Hyperplanes
*   A **hyperplane** is a linear decision boundary that separates classes in feature space.
*   Data is **linearly separable** if a hyperplane can perfectly separate the classes.
*   **Support Vector Machines (SVMs):** Find the maximum-margin hyperplane -- the decision boundary that maximizes the distance to the nearest data points from each class.

---

### L13: Machine Learning 4 -- Neural Networks and Clustering

#### Clustering (Unsupervised Learning)

**k-Means Clustering:**
An iterative algorithm for partitioning data into $k$ clusters:
1. **Initialize:** Randomly select $k$ centroids.
2. **Assign:** Assign each data point to the nearest centroid.
3. **Update:** Recompute each centroid as the mean of its assigned points.
4. **Repeat** steps 2-3 until centroids stabilize (convergence).

*   **Sensitivity to initialization:** Different initial centroids can produce different results. Common mitigation: run multiple times with different initializations.
*   **Choosing $k$:** Often determined by domain knowledge, the elbow method, or silhouette analysis.

**Silhouette Coefficient:**
Evaluates clustering quality for each data point, ranging from $-1$ to $1$:
*   Near $+1$: Well-clustered (close to own cluster, far from others).
*   Near $0$: On the boundary between clusters.
*   Near $-1$: Likely assigned to the wrong cluster.

#### Artificial Neural Networks (ANNs)

**The Perceptron (Single Neuron):**
The fundamental building block. Computes a weighted sum of inputs, adds a bias, and applies an activation function:
$$ z = \mathbf{w} \cdot \mathbf{x} + b = \sum_{i=1}^{n} w_i x_i + b $$
$$ a = \sigma(z) $$

**Activation Functions:**
*   **Sigmoid:** Maps input to $(0, 1)$, useful for binary classification:
    $$ \sigma(z) = \frac{1}{1 + e^{-z}} $$
*   **ReLU (Rectified Linear Unit):** $\text{ReLU}(z) = \max(0, z)$. Computationally efficient; commonly used in hidden layers.
*   **Softmax:** Converts a vector of raw scores into a probability distribution over $n$ classes:
    $$ P(C = c \mid \mathbf{x}) = \frac{e^{z_c}}{\sum_{j=1}^{n} e^{z_j}} $$
    Outputs sum to 1, making it suitable for multiclass classification.

**Multi-Layer Neural Networks:**
*   **Input Layer:** Receives the feature vector.
*   **Hidden Layer(s):** Intermediate layers that learn increasingly abstract representations. Each neuron applies: $z = \mathbf{w} \cdot \mathbf{x} + b$, then activation $a = \sigma(z)$.
*   **Output Layer:** Produces the final prediction (sigmoid for binary, softmax for multiclass).

**Training Neural Networks -- Backpropagation:**
*   **Forward Pass:** Input propagates through the network to produce a prediction.
*   **Loss Computation:** Compare prediction to the true label using a loss function (e.g., cross-entropy, MSE).
*   **Backward Pass (Backpropagation):** Compute the gradient of the loss with respect to each weight using the chain rule, propagating from the output layer back through the hidden layers.
*   **Weight Update:** Adjust weights using gradient descent: $w \leftarrow w - \eta \cdot \frac{\partial L}{\partial w}$.

**Key Concepts:**
*   Non-linearity from activation functions allows neural networks to learn complex, non-linear decision boundaries that a single perceptron cannot represent.
*   **Universal Approximation Theorem:** A neural network with a single hidden layer (of sufficient width) can approximate any continuous function.
*   **Vanishing/Exploding Gradients:** Deep networks can suffer from gradients becoming extremely small or large during backpropagation, hindering training.

#### Modern NLP and Transformer Architecture
The transition from recurrent architectures (RNNs, LSTMs) to the **Transformer** model revolutionized NLP.

**Self-Attention Mechanism:**
$$ \text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right) V $$
*   $Q$ (Query), $K$ (Key), $V$ (Value) are learned linear projections of the input.
*   $d_k$ is the dimension of the key vectors (scaling factor prevents large dot products).
*   Self-attention allows each token to attend to all other tokens in the sequence, capturing long-range dependencies without sequential processing.

**GPT (Generative Pre-trained Transformer):**
*   Pre-trained on vast unsupervised text corpora using next-token prediction.
*   Fine-tuned on specific tasks using supervised data.
*   Predicts probabilistic sequences leveraging the transformer architecture.

---

## Part VI: Ethics in AI

AI ethics appears as an open question on the exam, requiring reflection on the societal implications of intelligent systems.

**Key Considerations:**
*   **Bias and Fairness:** ML models can perpetuate or amplify biases present in training data, leading to discriminatory outcomes in hiring, lending, criminal justice, etc.
*   **Transparency and Explainability:** Complex models (deep neural networks) often act as "black boxes." Stakeholders need to understand how decisions are made.
*   **Privacy:** AI systems often require large amounts of personal data. Balancing utility with individual privacy rights is critical.
*   **Accountability:** When AI systems make errors (e.g., autonomous vehicle accidents), determining responsibility is challenging.
*   **Autonomy and Control:** As AI systems become more capable, ensuring human oversight and the ability to intervene remains essential.
*   **Societal Impact:** Job displacement through automation, concentration of power, and the digital divide are ongoing concerns.

The true power of intelligent systems lies not just in their technical capability, but in how we use them to benefit society, address real-world problems, and make informed, ethical decisions.

---

## Quick Reference: Key Formulas

| Topic | Formula |
|-------|---------|
| A* Evaluation | $f(n) = g(n) + h(n)$ |
| Admissibility | $0 \leq h(n) \leq h^*(n)$ |
| Conditional Probability | $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ |
| Bayes' Rule | $P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)}$ |
| Chain Rule | $P(X_1, \ldots, X_n) = \prod_{i=1}^{n} P(X_i \mid X_1, \ldots, X_{i-1})$ |
| Bayesian Network | $P(X_1, \ldots, X_n) = \prod_{i=1}^{n} P(X_i \mid \text{Parents}(X_i))$ |
| Naive Bayes | $\hat{y} = \arg\max_c P(C=c) \prod_i P(F_i=f_i \mid C=c)$ |
| Laplace Smoothing | $\hat{\theta}_i = \frac{x_i + 1}{N + d}$ |
| Cosine Similarity | $\cos(\theta) = \frac{\mathbf{A} \cdot \mathbf{B}}{\|\mathbf{A}\| \|\mathbf{B}\|}$ |
| Euclidean Distance | $d(\mathbf{q},\mathbf{p}) = \sqrt{\sum_i (q_i - p_i)^2}$ |
| TF-IDF | $\text{tf-idf} = \text{tf}(t,d) \times \log\frac{|C|}{|\{d \in C : t \in d\}|}$ |
| Accuracy | $\frac{TP + TN}{N}$ |
| Precision | $\frac{TP}{TP + FP}$ |
| Recall | $\frac{TP}{TP + FN}$ |
| F1-Score | $F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$ |
| SSE | $\sum_i (f_p(x_i) - y_i)^2$ |
| Gradient Descent | $w_{t+1} = w_t - \eta \nabla L(w_t)$ |
| Sigmoid | $\sigma(z) = \frac{1}{1 + e^{-z}}$ |
| Softmax | $P(C=c \mid \mathbf{x}) = \frac{e^{z_c}}{\sum_j e^{z_j}}$ |
| Attention | $\text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right) V$ |
| Fuzzy Negation | $f_{\lnot A}(x) = 1 - f_A(x)$ |
| Fuzzy Union | $f_{A \cup B}(x) = \max(f_A(x), f_B(x))$ |
| Fuzzy Intersection | $f_{A \cap B}(x) = \min(f_A(x), f_B(x))$ |
| Fuzzy Implication | $v(A \rightarrow B) = \min(1, 1 - v(A) + v(B))$ |
`;
