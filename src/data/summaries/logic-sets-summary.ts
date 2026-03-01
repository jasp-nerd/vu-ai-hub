/**
 * Comprehensive Logic & Sets for AI Summary — inline markdown content.
 * Compiled from the Athena midterm crash course (Day 1: Propositional Logic — Truth Tables,
 * Parse Trees, Semantic Equivalence, Semantic Entailment, Island Puzzles, DNF/CNF, DPLL,
 * Sheffer Stroke; Day 2: Set Operations, Venn Diagrams, Algebra of Sets, Relations,
 * Ordering Relations, Hasse Diagrams) covering weeks 1–4, and the Athena endterm crash course
 * (Day 1: Logic Circuits, OBDDs, Predicate Logic, Models; Day 2: Equivalence Relations &
 * Classes, Functions, Induction) covering weeks 5–7 of the VU Logic and Sets for AI course.
 */
export const logicSetsSummary = `
## Midterm — Propositional Logic (Weeks 1–3)

---

### 1. Propositional Logic: Syntax

#### Propositional Formulas
The propositional logic language is built from two ingredients:
- **Propositional variables**: $p, q, r, \\ldots$ (each can be true or false)
- **Connectives**: operators that combine formulas

#### Connectives
| Symbol | Name | English | Type |
|--------|------|---------|------|
| $\\wedge$ | Conjunction | "and" | Binary |
| $\\vee$ | Disjunction | "or" | Binary |
| $\\oplus$ | Exclusive or | "either ... or ..." | Binary |
| $\\neg$ | Negation | "not" | Unary |
| $\\rightarrow$ | Implication | "if ... then ..." | Binary |
| $\\leftrightarrow$ | Bi-implication | "if and only if" | Binary |

Together, variables and connectives form **formulas**, e.g.:
- $(p \\wedge q) \\vee \\neg r) \\rightarrow p$
- $(p \\vee q)$
- $r$ (a single variable is also a formula)

#### Operator Priority (Binding Strength)
From strongest to weakest binding:
1. $\\neg$ (negation) — binds tightest
2. $\\wedge$ (conjunction)
3. $\\vee$ (disjunction)
4. $\\oplus$ (exclusive or)
5. $\\rightarrow$ (implication)
6. $\\leftrightarrow$ (bi-implication) — binds loosest

> **Exam tip:** When in doubt about grouping, add parentheses according to the priority above. For example, $p \\wedge q \\vee r$ is read as $(p \\wedge q) \\vee r$.

---

### 2. Truth Tables & Semantics

![Truth tables for AND, OR, and NOT operations](/assets/images/truth-table-and-or-not.png)

#### Truth Values
- A formula ($\\phi$, $\\psi$, $\\chi$) can be either **true (T)** or **false (F)**
- The truth value of a compound formula is determined by the truth values of its parts

#### Truth Tables for All Connectives

**Conjunction** ($\\wedge$): true only when **both** are true

| $\\phi$ | $\\psi$ | $\\phi \\wedge \\psi$ |
|---|---|---|
| T | T | **T** |
| T | F | F |
| F | T | F |
| F | F | F |

**Disjunction** ($\\vee$): true when **at least one** is true

| $\\phi$ | $\\psi$ | $\\phi \\vee \\psi$ |
|---|---|---|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | **F** |

**Exclusive or** ($\\oplus$): true when **exactly one** is true

| $\\phi$ | $\\psi$ | $\\phi \\oplus \\psi$ |
|---|---|---|
| T | T | F |
| T | F | **T** |
| F | T | **T** |
| F | F | F |

**Implication** ($\\rightarrow$): false **only** when $\\phi$ is true and $\\psi$ is false

| $\\phi$ | $\\psi$ | $\\phi \\rightarrow \\psi$ |
|---|---|---|
| T | T | T |
| T | F | **F** |
| F | T | T |
| F | F | T |

**Bi-implication** ($\\leftrightarrow$): true when both sides have the **same** truth value

| $\\phi$ | $\\psi$ | $\\phi \\leftrightarrow \\psi$ |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

**Negation** ($\\neg$): flips the truth value

| $\\phi$ | $\\neg\\phi$ |
|---|---|
| T | F |
| F | T |

#### Building a Truth Table for a Complex Formula
1. List all propositional variables as columns
2. Create rows for all $2^n$ combinations of T/F (where $n$ = number of variables)
3. Add columns for each sub-formula, working from innermost to outermost
4. Compute the final column for the full formula

> **Exam tip:** For $n$ variables you need $2^n$ rows. With 2 variables: 4 rows; with 3 variables: 8 rows.

---

### 3. Parse Trees

![Abstract syntax tree — showing the hierarchical structure of an expression](/assets/images/abstract-syntax-tree.svg)

#### What Is a Parse Tree?
- A **parse tree** is a tree representation of the structure of a formula
- The **root** is the main connective (lowest priority, outermost)
- The **leaves** are the propositional variables
- Each internal node is a connective; its children are the sub-formulas it connects

#### How to Build a Parse Tree
1. Identify the **main connective** (the one with lowest binding that is not inside parentheses)
2. That connective becomes the root
3. Recursively build parse trees for the left and right sub-formulas
4. Single variables are leaves

#### Example
For $(p \\wedge q) \\vee \\neg r$:
- Main connective: $\\vee$
- Left subtree: $p \\wedge q$ (root $\\wedge$, leaves $p$ and $q$)
- Right subtree: $\\neg r$ (root $\\neg$, leaf $r$)

> **Exam tip:** Parse trees help identify sub-formulas and are essential for evaluating truth tables step by step.

---

### 4. Semantic Equivalence

#### Definition
Two formulas $\\phi$ and $\\psi$ are **semantically equivalent** ($\\phi \\equiv \\psi$) if and only if they have the **same truth value** under every possible valuation (i.e., identical truth table columns).

#### How to Prove Semantic Equivalence
- **Method 1 — Truth table:** Build truth tables for both formulas and verify all rows match
- **Method 2 — Algebraic rewriting:** Use known equivalence laws to transform one formula into the other

#### Boolean Algebra Laws (Axioms of $\\equiv$ for $\\wedge, \\vee, \\neg$)

**Commutativity:**
- $\\phi \\vee \\psi \\equiv \\psi \\vee \\phi$
- $\\phi \\wedge \\psi \\equiv \\psi \\wedge \\phi$

**Associativity:**
- $\\phi \\vee (\\psi \\vee \\chi) \\equiv (\\phi \\vee \\psi) \\vee \\chi$
- $\\phi \\wedge (\\psi \\wedge \\chi) \\equiv (\\phi \\wedge \\psi) \\wedge \\chi$

**Distributivity:**
- $\\phi \\vee (\\psi \\wedge \\chi) \\equiv (\\phi \\vee \\psi) \\wedge (\\phi \\vee \\chi)$
- $\\phi \\wedge (\\psi \\vee \\chi) \\equiv (\\phi \\wedge \\psi) \\vee (\\phi \\wedge \\chi)$

**Idempotence:**
- $\\phi \\vee \\phi \\equiv \\phi$
- $\\phi \\wedge \\phi \\equiv \\phi$

**Complement:**
- $\\phi \\vee \\neg\\phi \\equiv \\top$
- $\\phi \\wedge \\neg\\phi \\equiv \\bot$

**De Morgan's Laws:**
- $\\neg(\\phi \\vee \\psi) \\equiv \\neg\\phi \\wedge \\neg\\psi$
- $\\neg(\\phi \\wedge \\psi) \\equiv \\neg\\phi \\vee \\neg\\psi$

**Identity:**
- $\\phi \\vee \\bot \\equiv \\phi$
- $\\phi \\wedge \\top \\equiv \\phi$

**Domination:**
- $\\phi \\vee \\top \\equiv \\top$
- $\\phi \\wedge \\bot \\equiv \\bot$

**Involution (Double Negation):**
- $\\neg\\neg\\phi \\equiv \\phi$

#### Connective Rewrite Rules
| Original | Rewritten |
|----------|-----------|
| $\\phi \\rightarrow \\psi$ | $\\neg\\phi \\vee \\psi$ |
| $\\phi \\leftrightarrow \\psi$ | $(\\phi \\wedge \\psi) \\vee (\\neg\\phi \\wedge \\neg\\psi)$ |
| $\\phi \\oplus \\psi$ | $(\\phi \\vee \\psi) \\wedge \\neg(\\phi \\wedge \\psi)$ |

> **Exam tip:** When proving equivalence algebraically, state which law you apply at each step.

---

### 5. Semantic Entailment

#### Key Definitions
| Concept | Definition |
|---------|------------|
| **Tautology** (valid) | A formula that is true under **every** valuation |
| **Contradiction** | A formula that is false under **every** valuation |
| **Satisfiable** | A formula that is true under **at least one** valuation |
| **Contingent** | A formula that is neither a tautology nor a contradiction |

#### Semantic Entailment ($\\models$)
A set of formulas $\\Gamma$ **semantically entails** $\\phi$ (written $\\Gamma \\models \\phi$) if and only if: every valuation that makes **all** formulas in $\\Gamma$ true also makes $\\phi$ true.

#### How to Check Semantic Entailment
1. Build a combined truth table for all formulas in $\\Gamma$ and for $\\phi$
2. Find all rows where **every** formula in $\\Gamma$ is true
3. Check whether $\\phi$ is also true in **all** of those rows
4. If yes: $\\Gamma \\models \\phi$. If any such row has $\\phi$ false: $\\Gamma \\not\\models \\phi$

#### Connection to Tautology
$\\{\\phi_1, \\phi_2, \\ldots, \\phi_n\\} \\models \\psi$ if and only if $(\\phi_1 \\wedge \\phi_2 \\wedge \\ldots \\wedge \\phi_n) \\rightarrow \\psi$ is a **tautology**.

> **Exam tip:** On the exam, clearly identify which rows satisfy all premises, then check the conclusion.

---

### 6. Island of Liars and Truth Speakers

#### The Setup
- On an island, every inhabitant is either a **truth speaker** (always tells the truth) or a **liar** (always lies)
- Given statements by inhabitants, determine who is what

#### Formalization Strategy
1. Assign a propositional variable to each person: $p$ = "person P is a truth speaker"
2. If person P says statement $S$:
   - If P is a truth speaker ($p$ is true), then $S$ is true
   - If P is a liar ($p$ is false), then $S$ is false
   - This gives: $p \\leftrightarrow S$
3. Combine all such bi-implications and solve (e.g., with a truth table)

> **Exam tip:** The key insight is that a person's statement is true if and only if they are a truth speaker: $\\text{person} \\leftrightarrow \\text{statement}$.

---

### 7. DNF & CNF (Normal Forms)

#### Definitions
- A **literal** is a variable ($p$) or its negation ($\\neg p$)
- **DNF (Disjunctive Normal Form)**: a disjunction of conjunctions of literals
  - Example: $(p \\wedge q) \\vee (\\neg p \\wedge r) \\vee (q \\wedge \\neg r)$
- **CNF (Conjunctive Normal Form)**: a conjunction of disjunctions of literals
  - Example: $(p \\vee q) \\wedge (\\neg p \\vee r) \\wedge (q \\vee \\neg r)$

#### Converting to DNF/CNF
1. Eliminate $\\rightarrow$ and $\\leftrightarrow$ using rewrite rules
2. Push negations inward using De Morgan's laws and double negation
3. Apply distributivity to reach the desired form:
   - For **DNF**: distribute $\\wedge$ over $\\vee$
   - For **CNF**: distribute $\\vee$ over $\\wedge$

#### DNF from Truth Table
- Look at all rows where the formula is **true**
- For each such row, create a conjunction of all variables (positive if T, negated if F)
- Take the disjunction of all these conjunctions

#### CNF from Truth Table
- Look at all rows where the formula is **false**
- For each such row, create a disjunction of all variables (negated if T, positive if F)
- Take the conjunction of all these disjunctions

> **Exam tip:** DNF from truth table = read the TRUE rows; CNF from truth table = read the FALSE rows (with flipped literals).

---

### 8. DPLL Algorithm

#### Purpose
The **DPLL (Davis-Putnam-Logemann-Loveland)** algorithm determines whether a formula in CNF is **satisfiable**.

#### Key Concepts
- A CNF formula is a set of **clauses** (disjunctions of literals)
- A clause is **satisfied** if at least one literal in it is true
- The formula is satisfied if **all** clauses are satisfied
- An **empty clause** ($\\square$) is always false (contradiction)

#### DPLL Steps
1. **Unit propagation**: if a clause has only one literal (a **unit clause**), that literal must be true. Set it to true and simplify:
   - Remove all clauses containing that literal (they are satisfied)
   - Remove the negation of that literal from remaining clauses
2. **Pure literal elimination**: if a variable appears only positive (or only negative) across all clauses, set it to make those literals true
3. **Branching**: pick an unassigned variable $p$, try $p = T$ and $p = F$ recursively
4. **Backtrack** if a contradiction (empty clause) is reached

#### Outcome
- If all clauses are satisfied: **SAT** (satisfiable) — return the assignment
- If an empty clause appears with no way to backtrack: **UNSAT** (unsatisfiable)

> **Exam tip:** Always apply unit propagation and pure literal elimination before branching. Show each simplification step clearly.

---

### 9. Sheffer Stroke (NAND)

#### Definition
The **Sheffer stroke** $\\phi \\mid \\psi$ (NAND) is defined as:

$$\\phi \\mid \\psi \\equiv \\neg(\\phi \\wedge \\psi)$$

| $\\phi$ | $\\psi$ | $\\phi \\mid \\psi$ |
|---|---|---|
| T | T | F |
| T | F | T |
| F | T | T |
| F | F | T |

#### Functional Completeness
The Sheffer stroke is **functionally complete**: every Boolean function can be expressed using only $\\mid$:
- $\\neg\\phi \\equiv \\phi \\mid \\phi$
- $\\phi \\wedge \\psi \\equiv (\\phi \\mid \\psi) \\mid (\\phi \\mid \\psi)$
- $\\phi \\vee \\psi \\equiv (\\phi \\mid \\phi) \\mid (\\psi \\mid \\psi)$

> **Exam tip:** To express any formula with only NAND, first rewrite to use only $\\wedge$, $\\vee$, $\\neg$, then replace each using the identities above.

---

## Midterm — Set Theory (Weeks 1–3)

---

### 10. Sets: Fundamentals

#### Definition
A **set** is an unordered collection of elements with no duplicates.

#### Notation
- **Enumeration**: $A = \\{1, 4, 2, 6\\}$
- **Set-builder**: $\\text{MultiplesOf2} := \\{2k : k \\text{ a natural number}\\} = \\{0, 2, 4, \\ldots\\}$

#### Standard Number Sets
| Symbol | Name |
|--------|------|
| $\\mathbb{N}$ | Natural numbers $\\{0, 1, 2, \\ldots\\}$ |
| $\\mathbb{Z}$ | Integers $\\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$ |
| $\\mathbb{R}$ | Real numbers |

#### Element and Subset
- $a \\in A$: $a$ is an element of $A$
- $a \\notin A$: $a$ is not an element of $A$
- $A \\subseteq B$: all elements of $A$ are elements of $B$ (subset)
- $A \\nsubseteq B$: at least one element of $A$ is not in $B$

#### Set Equality
$A = B$ if and only if $A \\subseteq B$ and $B \\subseteq A$

#### Special Sets
- **Empty set**: $\\emptyset$ or $\\{\\}$ -- has no elements; $\\emptyset \\subseteq A$ for every set $A$
- **Universe**: $U$ -- the "universal set" containing all objects under discussion; $A \\subseteq U$ for every set $A$
- **Cardinality**: $\\#A$ or $|A|$ = number of distinct elements. Example: $\\#\\{4,3,3,1,3,2\\} = \\#\\{1,2,3,4\\} = 4$

#### Power Set
The **power set** $\\mathcal{P}(A)$ is the set of all subsets of $A$.
- If $|A| = n$, then $|\\mathcal{P}(A)| = 2^n$
- Example: $\\mathcal{P}(\\{1,2\\}) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1,2\\}\\}$

---

### 11. Set Operations & Venn Diagrams

![Venn diagram — A union B](/assets/images/venn-diagram-union.svg)
![Venn diagram — A intersect B](/assets/images/venn-diagram-intersection.svg)

#### Operations
| Operation | Notation | Definition | Logic analogue |
|-----------|----------|------------|----------------|
| **Complement** | $A'$ | $\\{x \\in U : x \\notin A\\}$ | Negation ($\\neg$) |
| **Union** | $A \\cup B$ | $\\{x \\in U : x \\in A \\text{ or } x \\in B\\}$ | Disjunction ($\\vee$) |
| **Intersection** | $A \\cap B$ | $\\{x \\in U : x \\in A \\text{ and } x \\in B\\}$ | Conjunction ($\\wedge$) |
| **Difference** | $A \\setminus B$ | $\\{x \\in A : x \\notin B\\} = A \\cap B'$ | — |
| **Symmetric difference** | $A \\triangle B$ | $(A \\cup B) \\cap (A \\cap B)' = (A \\setminus B) \\cup (B \\setminus A)$ | Exclusive or ($\\oplus$) |

#### Venn Diagram Proofs
To show a set equality $X = Y$ using Venn diagrams:
1. For each side of the equality, draw a Venn diagram for the simplest sub-expression
2. Build up step by step, shading the appropriate region at each stage
3. Compare the final shaded regions for both sides -- they must be identical

> **Exam tip:** When proving set equalities on the exam, you can use Venn diagrams OR algebraic proofs using set algebra laws.

---

### 12. Algebra of Sets

The algebraic laws for sets mirror the Boolean algebra laws for logic:

**Commutativity:**
- $A \\cup B = B \\cup A$
- $A \\cap B = B \\cap A$

**Associativity:**
- $A \\cup (B \\cup C) = (A \\cup B) \\cup C$
- $A \\cap (B \\cap C) = (A \\cap B) \\cap C$

**Distributivity:**
- $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$
- $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$

**Idempotence:**
- $A \\cup A = A$
- $A \\cap A = A$

**Complement:**
- $A \\cup A' = U$
- $A \\cap A' = \\emptyset$

**De Morgan's Laws:**
- $(A \\cup B)' = A' \\cap B'$
- $(A \\cap B)' = A' \\cup B'$

**Identity:**
- $A \\cup \\emptyset = A$
- $A \\cap U = A$

**Domination:**
- $A \\cup U = U$
- $A \\cap \\emptyset = \\emptyset$

**Involution:**
- $(A')' = A$

> **Exam tip:** These laws are identical in structure to the propositional logic equivalences. Replace $\\vee$ with $\\cup$, $\\wedge$ with $\\cap$, $\\neg$ with $'$, $\\top$ with $U$, $\\bot$ with $\\emptyset$.

---

### 13. Relations

#### Definition
A **(binary) relation** $R$ from set $A$ to set $B$ is a subset $R \\subseteq A \\times B$.
- If $\\langle a, b \\rangle \\in R$, we write $a\\,R\\,b$
- A relation on a set $A$ means $R \\subseteq A \\times A$

#### Properties of Relations (on a set $A$)
| Property | Formal Definition | Intuition |
|----------|-------------------|-----------|
| **Reflexive** | $\\forall a \\in A: a\\,R\\,a$ | Every element is related to itself |
| **Irreflexive** | $\\forall a \\in A: \\neg(a\\,R\\,a)$ | No element is related to itself |
| **Symmetric** | $\\forall a,b: a\\,R\\,b \\Rightarrow b\\,R\\,a$ | If $a$ relates to $b$, then $b$ relates to $a$ |
| **Antisymmetric** | $\\forall a,b: (a\\,R\\,b \\wedge b\\,R\\,a) \\Rightarrow a = b$ | Mutual relation implies equality |
| **Transitive** | $\\forall a,b,c: (a\\,R\\,b \\wedge b\\,R\\,c) \\Rightarrow a\\,R\\,c$ | Relatedness chains together |

#### Relation Representations
- **Set of pairs**: $R = \\{\\langle a, b \\rangle, \\langle c, d \\rangle, \\ldots\\}$
- **Matrix**: rows = elements of $A$, columns = elements of $B$; entry is 1 if related, 0 otherwise
- **Directed graph**: nodes are elements, arrows show the relation

> **Exam tip:** To check properties, systematically verify all required pairs. For antisymmetric, look for pairs where $a\\,R\\,b$ AND $b\\,R\\,a$ with $a \\neq b$ — if any exist, it is NOT antisymmetric.

---

### 14. Ordering Relations

#### Partial Order
A relation $R$ on a set $A$ is a **partial order** if it is:
- **Reflexive**
- **Antisymmetric**
- **Transitive**

A set with a partial order is called a **partially ordered set (poset)**, written $(A, \\leq)$.

#### Total (Linear) Order
A partial order where **every** pair of elements is comparable:
$\\forall a, b \\in A: a \\leq b \\text{ or } b \\leq a$

#### Strict Partial Order
A relation that is **irreflexive**, **antisymmetric**, and **transitive** (e.g., $<$ instead of $\\leq$).

#### Hasse Diagrams
A **Hasse diagram** is a simplified visualization of a partial order:
1. Draw elements as nodes arranged bottom-to-top (smaller elements lower)
2. Draw an edge from $a$ up to $b$ if $a < b$ and there is no $c$ with $a < c < b$ (i.e., $b$ **covers** $a$)
3. Omit self-loops (reflexivity) and transitive edges — they are implied

#### Special Elements in a Poset
| Element | Definition |
|---------|------------|
| **Minimum** | $a$ such that $a \\leq x$ for all $x \\in A$ |
| **Maximum** | $a$ such that $x \\leq a$ for all $x \\in A$ |
| **Minimal** | $a$ such that no $x \\in A$ satisfies $x < a$ |
| **Maximal** | $a$ such that no $x \\in A$ satisfies $a < x$ |

- A minimum/maximum is unique if it exists
- There can be multiple minimal/maximal elements

#### Cartesian and Lexicographic Order
- **Cartesian order** on $A \\times B$: $(a_1, b_1) \\leq (a_2, b_2)$ iff $a_1 \\leq a_2$ **and** $b_1 \\leq b_2$
- **Lexicographic order** on $A \\times B$: $(a_1, b_1) \\leq (a_2, b_2)$ iff $a_1 < a_2$, **or** ($a_1 = a_2$ and $b_1 \\leq b_2$) — like dictionary ordering

> **Exam tip:** In Hasse diagrams, the minimum sits at the very bottom with paths to everything. If two elements are incomparable, neither is above the other.

---

## Endterm — Advanced Logic (Weeks 5–7)

---

### 15. Logic Circuits

![Half-adder logic circuit — combining AND, OR, and NOT gates](/assets/images/half-adder-logic-circuit.svg)

#### What Is a Logic Circuit?
- A **logic circuit** is a graphical representation of a **Boolean function**
- It has **inputs** (propositional variables) and a single **output** (the result)
- Reads like a **parse tree**: follow the wires from inputs through gates to the output

#### Standard Gates
| Gate | Symbol | Meaning |
|------|--------|---------|
| **AND** | $\\wedge$ | True when *both* inputs are true |
| **OR** | $\\vee$ | True when *at least one* input is true |
| **NOT** | $\\neg$ | Flips the truth value |

#### Reading a Circuit
1. Identify the **output gate** (closest to the output wire)
2. Trace back through each gate, building the formula recursively
3. Example circuit with inputs $\\phi$ and $\\psi$:

$$
(\\phi \\lor \\psi) \\land (\\neg\\phi \\land \\psi)
$$

#### Drawing a Circuit from a Formula
1. **Rewrite** the formula so it only uses $\\wedge$, $\\vee$, $\\neg$
   - Key equivalence: $\\phi \\leftrightarrow \\psi \\equiv (\\phi \\wedge \\psi) \\vee (\\neg\\phi \\wedge \\neg\\psi)$
2. **Identify** the connective with the **lowest priority** (outermost) — this becomes the gate closest to the output
3. Build the tree outward from the output gate

> **Exam tip:** Always rewrite to basic connectives first, then identify operator priority to build the circuit from output to inputs.

---

### 16. OBDDs (Ordered Binary Decision Diagrams)

#### What Is an OBDD?
- An **OBDD** is a compact, canonical representation of a Boolean function
- It is a directed acyclic graph with:
  - **Decision nodes** labelled with variables (ordered top-to-bottom)
  - **Two terminal nodes**: $0$ (false) and $1$ (true)
  - Each decision node has a **low edge** (dashed, variable = 0) and a **high edge** (solid, variable = 1)

#### Reduction Rules
To obtain a **reduced OBDD**, repeatedly apply:

| Rule | Description |
|------|-------------|
| **C1 -- Collapse identical leaves** | Merge all $0$-leaves into one and all $1$-leaves into one |
| **C2 -- Eliminate superfluous non-leaves** | If both outgoing edges of a node point to the same child, remove the node and redirect incoming edges to that child |
| **C3 -- Remove duplicate non-leaves** | If two nodes have the same variable and identical low/high children (point to the same nodes), merge them |

> Apply these rules until no more can be applied — the result is the **reduced OBDD**.

#### Quantifiers on OBDDs
- **Existential quantifier** $\\exists x$: eliminate variable $x$ by taking the **disjunction** (OR) of the two cofactors

$$\\exists x\\, F = F[x \\leftarrow 0] \\lor F[x \\leftarrow 1]$$

- **Universal quantifier** $\\forall x$: eliminate variable $x$ by taking the **conjunction** (AND) of the two cofactors

$$\\forall x\\, F = F[x \\leftarrow 0] \\land F[x \\leftarrow 1]$$

#### Computing Quantifiers on an OBDD
1. Find the node for the quantified variable
2. Replace it with the OR (for $\\exists$) or AND (for $\\forall$) of its two subtrees
3. **Reduce** the resulting OBDD using C1--C3

> **Exam tip:** After applying a quantifier, always reduce the OBDD again.

---

### 17. Predicate Logic

#### From Propositional to Predicate Logic
- **Propositional logic**: deals with simple true/false propositions ($p$, $q$, $r$)
- **Predicate logic** (first-order logic): adds **variables**, **quantifiers**, **predicates**, and **functions**

#### Key Components
| Component | Notation | Example |
|-----------|----------|---------|
| **Constant** | $a, b, c$ | A specific object in the domain |
| **Variable** | $x, y, z$ | Ranges over objects in the domain |
| **Predicate** | $P(x)$, $R(x,y)$ | A property or relation |
| **Function** | $f(x)$, $g(x,y)$ | Maps objects to objects |
| **Universal quantifier** | $\\forall x$ | "For all $x$ ..." |
| **Existential quantifier** | $\\exists x$ | "There exists an $x$ such that ..." |

#### Quantifier Rules
- $\\forall x\\, P(x)$: $P$ holds for **every** element in the domain
- $\\exists x\\, P(x)$: $P$ holds for **at least one** element in the domain
- Negation:
  - $\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x)$
  - $\\neg \\exists x\\, P(x) \\equiv \\forall x\\, \\neg P(x)$

#### Predicate Logic Equivalences
| Equivalence | Valid? |
|-------------|--------|
| $\\exists x\\,(\\phi \\vee \\psi) \\equiv \\exists x\\, \\phi \\vee \\exists x\\, \\psi$ | Yes |
| $\\forall x\\,(\\phi \\wedge \\psi) \\equiv \\forall x\\, \\phi \\wedge \\forall x\\, \\psi$ | Yes |
| $\\exists x\\, \\exists y\\, \\phi \\equiv \\exists y\\, \\exists x\\, \\phi$ | Yes |
| $\\forall x\\, \\forall y\\, \\phi \\equiv \\forall y\\, \\forall x\\, \\phi$ | Yes |

#### Important Non-Equivalences
| Statement | Valid? |
|-----------|--------|
| $\\exists x\\,(C(x) \\wedge D(x)) \\equiv \\exists x\\, C(x) \\wedge \\exists x\\, D(x)$ | **No** |
| $\\forall x\\,(C(x) \\vee D(x)) \\equiv \\forall x\\, C(x) \\vee \\forall x\\, D(x)$ | **No** |
| $\\forall x\\, \\exists y\\, K(x,y) \\equiv \\exists y\\, \\forall x\\, K(x,y)$ | **No** |

> **Exam tip:** Be careful: you can distribute $\\exists$ over $\\vee$ and $\\forall$ over $\\wedge$, but NOT $\\exists$ over $\\wedge$ or $\\forall$ over $\\vee$. Also, you cannot swap $\\forall\\exists$ to $\\exists\\forall$.

---

### 18. Models (Semantics of Predicate Logic)

#### What Is a Model?
- A **model** (or **interpretation**) $\\mathcal{M}$ specifies:
  1. A **domain** $D$ (non-empty set of objects)
  2. An **interpretation** of every constant, function symbol, and predicate symbol

#### Evaluating Formulas in a Model
- Given a model $\\mathcal{M}$ and a variable assignment $\\mu$:
  - $\\mathcal{M}, \\mu \\models P(t_1, \\ldots, t_n)$ iff the tuple of interpreted terms is in the interpretation of $P$
  - $\\mathcal{M}, \\mu \\models \\forall x\\, \\phi$ iff for **every** $d \\in D$, $\\mathcal{M}, \\mu[x \\mapsto d] \\models \\phi$
  - $\\mathcal{M}, \\mu \\models \\exists x\\, \\phi$ iff for **some** $d \\in D$, $\\mathcal{M}, \\mu[x \\mapsto d] \\models \\phi$

#### Validity, Satisfiability, and Logical Consequence
| Concept | Definition |
|---------|------------|
| **Valid** (tautology) | True in **every** model |
| **Satisfiable** | True in **at least one** model |
| **Unsatisfiable** | True in **no** model |
| **Logical consequence** $\\Gamma \\models \\phi$ | Every model satisfying all formulas in $\\Gamma$ also satisfies $\\phi$ |

---

## Endterm — Sets & Proofs (Weeks 5–7)

---

### 19. Equivalence Relations & Equivalence Classes

#### Equivalence Relation -- Definition
A relation $R$ on a set $A$ is an **equivalence relation** if and only if it is:

| Property | Formal | Meaning |
|----------|--------|---------|
| **Reflexive** | $\\forall a \\in A: a\\,R\\,a$ | Every element is related to itself |
| **Symmetric** | $\\forall a,b \\in A: a\\,R\\,b \\Rightarrow b\\,R\\,a$ | If $a$ is related to $b$, then $b$ is related to $a$ |
| **Transitive** | $\\forall a,b,c \\in A: (a\\,R\\,b \\wedge b\\,R\\,c) \\Rightarrow a\\,R\\,c$ | Relatedness chains together |

#### Equivalence Classes
- The **equivalence class** of an element $a \\in A$ under $\\equiv$ is:

$$[a] := \\{x \\in A : x \\equiv a\\}$$

- All elements within an equivalence class are related to each other
- The equivalence classes of $A$ form a **partition** of $A$ (they divide $A$ into non-overlapping parts that cover all of $A$)

#### System of Representatives
- A **system of representatives** is a set containing exactly **one element from each equivalence class**
- Example: if the classes are $\\{[a_1], [a_2], [a_3]\\}$, a system of representatives is $\\{a_1, a_2, a_3\\}$

#### Worked Example (Modular Arithmetic)
Given $A = \\{0,1,2,3,4,5\\}$ and the relation $\\langle a,b \\rangle\\, R\\, \\langle c,d \\rangle$ iff $a \\equiv c \\pmod{3}$:
- Pairs like $\\langle 0,0 \\rangle$, $\\langle 3,0 \\rangle$, $\\langle 0,3 \\rangle$, $\\langle 3,3 \\rangle$ form one equivalence class
- Pick one representative from each class to form the system of representatives

> **Exam tip:** Systematically check all pairs -- for each pair, find all other pairs related to it. Group them into classes.

---

### 20. Functions

#### Definition
A **function** $f: A \\to B$ assigns to each element $a \\in A$ exactly one element $b \\in B$.

- $A$ = **domain**
- $B$ = **codomain**
- $f(A)$ = **range** (image) -- the set of all actual output values

#### Injectivity, Surjectivity, Bijectivity
| Property | Definition | Intuition |
|----------|------------|-----------|
| **Injective** (one-to-one) | $f(a_1) = f(a_2) \\Rightarrow a_1 = a_2$ | No two inputs share an output; unique ID assignment |
| **Surjective** (onto) | $\\forall b \\in B,\\, \\exists a \\in A: f(a) = b$ | Every element in the codomain is hit; every seat is occupied |
| **Bijective** | Both injective and surjective | Perfect one-to-one correspondence |

#### Function Composition
- $(g \\circ f)(x) = g(f(x))$ -- apply $f$ first, then $g$
- Read right-to-left: $g \\circ f$ means "first $f$, then $g$"

#### Inverse Functions
- If $f: A \\to B$ is bijective, then $f^{-1}: B \\to A$ exists
- $f^{-1}$ undoes $f$: $f^{-1}(f(a)) = a$

#### Composition with Inverses -- Example
Given $f(x) = \\dfrac{1}{x^2 - 1}$ and $\\text{mul}_3(x) = 3x$:

$$
(f \\circ \\text{mul}_3^{-1})(x) = f\\!\\left(\\frac{x}{3}\\right) = \\frac{1}{\\left(\\frac{x}{3}\\right)^2 - 1}
$$

> **Exam tip:** To compose with an inverse, first find the inverse function, then substitute.

---

### 21. Mathematical Induction

#### The Principle
To prove a statement $S(n)$ holds for all $n \\geq a$:

| Step | Name | What to do |
|------|------|------------|
| 1 | **Base case** | Prove $S(a)$ is true |
| 2 | **Induction step** | Let $m \\geq a$ be arbitrary. Assume $S(m)$ is true (**induction hypothesis**, IH). Prove $S(m+1)$. |

This is the **domino effect**: once the first domino falls (base case) and each domino knocks over the next (induction step), all dominoes fall.

#### Template for an Induction Proof
1. **State** what you want to prove: "For all $n \\geq a$, $S(n)$"
2. **Base case**: verify $S(a)$ directly
3. **Induction step**:
   - Let $m \\geq a$ be arbitrary
   - **Induction hypothesis (IH)**: assume $S(m)$ is true
   - Show that $S(m+1)$ follows from IH
4. **Conclusion**: by the principle of induction, $S(n)$ holds for all $n \\geq a$

#### Worked Example: Sum of Powers of 2
**Claim:** For all $n \\in \\mathbb{N}$, $\\displaystyle\\sum_{k=0}^{n} 2^k = 2^{n+1} - 1$

**Base case** ($n = 0$):
$$\\sum_{k=0}^{0} 2^k = 2^0 = 1 \\qquad \\text{and} \\qquad 2^{0+1} - 1 = 2 - 1 = 1 \\quad \\checkmark$$

**Induction step:**
Let $m \\geq 0$. Assume $\\displaystyle\\sum_{k=0}^{m} 2^k = 2^{m+1} - 1$ (IH).

Then:
$$\\sum_{k=0}^{m+1} 2^k = \\underbrace{\\sum_{k=0}^{m} 2^k}_{= 2^{m+1}-1 \\text{ (by IH)}} + 2^{m+1} = 2^{m+1} - 1 + 2^{m+1}$$

And from the right-hand side:
$$2^{(m+1)+1} - 1 = 2 \\cdot 2^{m+1} - 1 = 2^{m+1} + 2^{m+1} - 1$$

Both sides are equal. $\\square$

#### Induction on Sequences
- Induction can also be used to prove properties of **recursively defined sequences**
- If $a_{n+1}$ is defined in terms of $a_n$, induction is the natural proof technique
- The IH gives you information about $a_m$; use the recursive definition to derive information about $a_{m+1}$

> **Exam tip:** In the induction step, always clearly state the IH. Then manipulate the expression for $S(m+1)$ until you can apply the IH. Show both sides match.

---

## Key Formulas & Quick Reference

### Propositional Logic Equivalences (for Circuit Conversion)
| Original | Rewritten |
|----------|-----------|
| $\\phi \\rightarrow \\psi$ | $\\neg\\phi \\vee \\psi$ |
| $\\phi \\leftrightarrow \\psi$ | $(\\phi \\wedge \\psi) \\vee (\\neg\\phi \\wedge \\neg\\psi)$ |
| $\\phi \\oplus \\psi$ (XOR) | $(\\phi \\vee \\psi) \\wedge \\neg(\\phi \\wedge \\psi)$ |

### OBDD Quantifier Summary
| Quantifier | Operation |
|------------|-----------|
| $\\exists x\\, F$ | $F[x:=0] \\lor F[x:=1]$ |
| $\\forall x\\, F$ | $F[x:=0] \\land F[x:=1]$ |

### Set Operations Summary
| Operation | Notation | Formal |
|-----------|----------|--------|
| Complement | $A'$ | $\\{x \\in U : x \\notin A\\}$ |
| Union | $A \\cup B$ | $\\{x : x \\in A \\text{ or } x \\in B\\}$ |
| Intersection | $A \\cap B$ | $\\{x : x \\in A \\text{ and } x \\in B\\}$ |
| Difference | $A \\setminus B$ | $\\{x \\in A : x \\notin B\\}$ |
| Symmetric Diff. | $A \\triangle B$ | $(A \\setminus B) \\cup (B \\setminus A)$ |

### Relation Properties Checklist
| Property | Check |
|----------|-------|
| Reflexive | Every element related to itself? |
| Symmetric | $a\\,R\\,b \\Rightarrow b\\,R\\,a$ always? |
| Antisymmetric | $a\\,R\\,b \\wedge b\\,R\\,a \\Rightarrow a = b$? |
| Transitive | $a\\,R\\,b \\wedge b\\,R\\,c \\Rightarrow a\\,R\\,c$? |

### Function Properties Checklist
| Check | How |
|-------|-----|
| **Injective?** | Different inputs $\\Rightarrow$ different outputs |
| **Surjective?** | Every element in codomain is an output |
| **Bijective?** | Both of the above |

### Induction Checklist
| Step | Verify |
|------|--------|
| Base case | Does $S(a)$ hold? |
| IH stated? | "Assume $S(m)$" clearly written |
| IH used? | Mark where IH is applied in the proof |
| $S(m+1)$ shown? | Both sides match |

### DPLL Quick Reference
| Step | Action |
|------|--------|
| Unit propagation | Single-literal clause forces assignment |
| Pure literal | Variable appears in only one polarity |
| Branch | Pick variable, try T then F |
| Backtrack | Empty clause reached, undo last branch |

### Normal Forms Quick Reference
| Form | Structure | From truth table |
|------|-----------|-----------------|
| DNF | $\\bigvee(\\text{conjunctions of literals})$ | Read TRUE rows |
| CNF | $\\bigwedge(\\text{disjunctions of literals})$ | Read FALSE rows (flip literals) |
`;
