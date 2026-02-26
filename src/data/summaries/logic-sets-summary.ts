/**
 * Comprehensive Logic & Sets for AI Summary — inline markdown content.
 * Compiled from the Athena crash course (Day 1: Logic Circuits, OBDDs, Predicate Logic, Models;
 * Day 2: Equivalence Relations & Classes, Functions, Induction) covering weeks 5–7
 * of the VU Logic and Sets for AI course.
 */
export const logicSetsSummary = `
## Day 1 — Logic (Weeks 5–7)

---

### 1. Logic Circuits

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

### 2. OBDDs (Ordered Binary Decision Diagrams)

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
| **C1 — Merge leaves** | Collapse all $0$-leaves into one and all $1$-leaves into one |
| **C2 — Merge isomorphic nodes** | If two nodes have the same variable and identical low/high children, merge them |
| **C3 — Remove redundant nodes** | If a node's low and high edges both point to the same child, remove the node |

> Apply these rules until no more can be applied — the result is the **reduced OBDD**.

#### Quantifiers on OBDDs
- **Existential quantifier** $\\exists x$: eliminate variable $x$ by taking the **disjunction** (OR) of the two cofactors

$$\\exists x\\, F = F[x \\leftarrow 0] \\lor F[x \\leftarrow 1]$$

- **Universal quantifier** $\\forall x$: eliminate variable $x$ by taking the **conjunction** (AND) of the two cofactors

$$\\forall x\\, F = F[x \\leftarrow 0] \\land F[x \\leftarrow 1]$$

#### Computing Quantifiers on an OBDD
1. Find the node for the quantified variable
2. Replace it with the OR (for $\\exists$) or AND (for $\\forall$) of its two subtrees
3. **Reduce** the resulting OBDD using C1–C3

> **Exam tip:** After applying a quantifier, always reduce the OBDD again.

---

### 3. Predicate Logic

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
| **Universal quantifier** | $\\forall x$ | "For all $x$ …" |
| **Existential quantifier** | $\\exists x$ | "There exists an $x$ such that …" |

#### Quantifier Rules
- $\\forall x\\, P(x)$: $P$ holds for **every** element in the domain
- $\\exists x\\, P(x)$: $P$ holds for **at least one** element in the domain
- Negation:
  - $\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x)$
  - $\\neg \\exists x\\, P(x) \\equiv \\forall x\\, \\neg P(x)$

---

### 4. Models (Semantics of Predicate Logic)

#### What Is a Model?
- A **model** (or **interpretation**) $\\mathcal{M}$ specifies:
  1. A **domain** $D$ (non-empty set of objects)
  2. An **interpretation** of every constant, function symbol, and predicate symbol

#### Evaluating Formulas in a Model
- Given a model $\\mathcal{M}$ and a variable assignment $\\mu$:
  - $\\mathcal{M}, \\mu \\models P(t_1, \\ldots, t_n)$ iff the tuple of interpreted terms is in the interpretation of $P$
  - $\\mathcal{M}, \\mu \\models \\forall x\\, \\phi$ iff for **every** $d \\in D$, $\\mathcal{M}, \\mu[x \\mapsto d] \\models \\phi$
  - $\\mathcal{M}, \\mu \\models \\exists x\\, \\phi$ iff for **some** $d \\in D$, $\\mathcal{M}, \\mu[x \\mapsto d] \\models \\phi$

#### Important Semantic Equivalences
| Equivalence | Rule |
|-------------|------|
| $\\forall x\\,(P(x) \\wedge Q(x))$ | $\\equiv \\forall x\\, P(x) \\wedge \\forall x\\, Q(x)$ |
| $\\exists x\\,(P(x) \\vee Q(x))$ | $\\equiv \\exists x\\, P(x) \\vee \\exists x\\, Q(x)$ |
| $\\neg \\forall x\\, P(x)$ | $\\equiv \\exists x\\, \\neg P(x)$ |
| $\\neg \\exists x\\, P(x)$ | $\\equiv \\forall x\\, \\neg P(x)$ |

#### Validity, Satisfiability, and Logical Consequence
| Concept | Definition |
|---------|------------|
| **Valid** (tautology) | True in **every** model |
| **Satisfiable** | True in **at least one** model |
| **Unsatisfiable** | True in **no** model |
| **Logical consequence** $\\Gamma \\models \\phi$ | Every model satisfying all formulas in $\\Gamma$ also satisfies $\\phi$ |

---

## Day 2 — Sets (Weeks 5–7)

---

### 5. Equivalence Relations & Equivalence Classes

#### Equivalence Relation — Definition
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

> **Exam tip:** Systematically check all pairs — for each pair, find all other pairs related to it. Group them into classes.

---

### 6. Functions

#### Definition
A **function** $f: A \\to B$ assigns to each element $a \\in A$ exactly one element $b \\in B$.

- $A$ = **domain**
- $B$ = **codomain**
- $f(A)$ = **range** (image) — the set of all actual output values

#### Injectivity, Surjectivity, Bijectivity
| Property | Definition | Intuition |
|----------|------------|-----------|
| **Injective** (one-to-one) | $f(a_1) = f(a_2) \\Rightarrow a_1 = a_2$ | Every $x \\in A$ maps to a **unique** $b \\in B$; no two inputs share an output |
| **Surjective** (onto) | $\\forall b \\in B,\\, \\exists a \\in A: f(a) = b$ | Every $b \\in B$ is hit; range $=$ codomain |
| **Bijective** | Both injective and surjective | Perfect one-to-one correspondence |

#### Function Composition
- $(g \\circ f)(x) = g(f(x))$ — apply $f$ first, then $g$
- Read right-to-left: $g \\circ f$ means "first $f$, then $g$"

#### Inverse Functions
- If $f: A \\to B$ is bijective, then $f^{-1}: B \\to A$ exists
- $f^{-1}$ undoes $f$: $f^{-1}(f(a)) = a$

#### Composition with Inverses — Example
Given $f(x) = \\dfrac{1}{x^2 - 1}$ and $\\text{mul}_3(x) = 3x$:

$$
(f \\circ \\text{mul}_3^{-1})(x) = f\\!\\left(\\frac{x}{3}\\right) = \\frac{1}{\\left(\\frac{x}{3}\\right)^2 - 1}
$$

> **Exam tip:** To compose with an inverse, first find the inverse function, then substitute.

---

### 7. Mathematical Induction

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
`;
