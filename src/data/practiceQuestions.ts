import type { PracticeQuestion } from '../types';

export const practiceQuestions: PracticeQuestion[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 1: SEMANTIC ENTAILMENT (5 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-se-1',
    courseId: 'logic-sets-ai',
    topic: 'Semantic Entailment',
    difficulty: 'hard',
    question: `Determine whether the following semantic entailment holds:

$$(p \\to (q \\oplus r)) \\land ((q \\mid \\neg r) \\lor p) \\models \\neg q \\leftrightarrow r$$

where $\\oplus$ denotes exclusive or and $\\mid$ denotes the Sheffer stroke (NAND).

If the entailment does **not** hold, provide a counterexample (a valuation that makes the premises true but the conclusion false).`,
    answer: `This semantic entailment **does not hold**.

We construct the truth table for all 8 valuations of $p, q, r$. The key columns are the conjunction of premises (LHS) and the conclusion (RHS).

| $p$ | $q$ | $r$ | $q \\oplus r$ | $p \\to (q \\oplus r)$ | $\\neg r$ | $q \\mid \\neg r$ | $(q \\mid \\neg r) \\lor p$ | LHS | $\\neg q$ | $\\neg q \\leftrightarrow r$ |
|---|---|---|---|---|---|---|---|---|---|---|
| T | T | T | F | F | F | T | T | F | F | F |
| T | T | F | T | T | T | F | T | T | F | T |
| T | F | T | T | T | F | T | T | T | T | T |
| T | F | F | F | F | T | T | T | F | T | F |
| **F** | **T** | **T** | **F** | **T** | **F** | **T** | **T** | **T** | **F** | **F** |
| F | T | F | T | T | T | F | F | F | F | T |
| F | F | T | T | T | F | T | T | T | T | T |
| **F** | **F** | **F** | **F** | **T** | **T** | **T** | **T** | **T** | **T** | **F** |

**Counterexamples:** In rows 5 and 8 the LHS is T but the RHS is F.

- Row 5: $p = F, q = T, r = T$ makes the premises true and conclusion false.
- Row 8: $p = F, q = F, r = F$ makes the premises true and conclusion false.

Therefore the semantic entailment does not hold.`,
  },
  {
    id: 'ls-se-2',
    courseId: 'logic-sets-ai',
    topic: 'Semantic Entailment',
    difficulty: 'easy',
    question: `Determine whether the following semantic entailment holds:

$$p \\lor (q \\to \\neg p) \\models p \\lor \\neg q$$

If it does not hold, provide a counterexample.`,
    answer: `We build the truth table:

| $p$ | $q$ | $q \\to \\neg p$ | $p \\lor (q \\to \\neg p)$ | $p \\lor \\neg q$ |
|---|---|---|---|---|
| T | T | F | T | T |
| T | F | T | T | T |
| F | T | T | T | **F** |
| F | F | T | T | T |

**Counterexample:** In row 3, $p = F, q = T$: the premise $p \\lor (q \\to \\neg p) = T$ but the conclusion $p \\lor \\neg q = F$.

The semantic entailment **does not hold**.`,
  },
  {
    id: 'ls-se-3',
    courseId: 'logic-sets-ai',
    topic: 'Semantic Entailment',
    difficulty: 'easy',
    question: `Determine whether the following semantic entailment holds:

$$p \\lor \\neg q \\models p \\lor (q \\to \\neg p)$$

If it does not hold, provide a counterexample.`,
    answer: `We build the truth table:

| $p$ | $q$ | $q \\to \\neg p$ | $p \\lor (q \\to \\neg p)$ | $p \\lor \\neg q$ |
|---|---|---|---|---|
| T | T | F | T | T |
| T | F | T | T | T |
| F | T | T | T | F |
| F | F | T | T | T |

We need to check: whenever $p \\lor \\neg q$ is true, is $p \\lor (q \\to \\neg p)$ also true?

Looking at the table, $p \\lor (q \\to \\neg p)$ is a **tautology** (always T in every row). Therefore the entailment trivially holds, since the conclusion is always true regardless of the premises.

The semantic entailment **holds**.`,
  },
  {
    id: 'ls-se-4',
    courseId: 'logic-sets-ai',
    topic: 'Semantic Entailment',
    difficulty: 'medium',
    question: `Determine whether the following semantic entailment holds:

$$p \\to (\\neg q \\lor r),\\; \\neg r \\models q \\to \\neg p$$

If the entailment does not hold, provide a counterexample.`,
    answer: `We build the truth table with 8 rows for $p, q, r$:

| $p$ | $q$ | $r$ | $\\neg q \\lor r$ | $p \\to (\\neg q \\lor r)$ | $\\neg r$ | Premises both T? | $q \\to \\neg p$ |
|---|---|---|---|---|---|---|---|
| T | T | T | T | T | F | No | F |
| T | T | F | F | F | T | No | F |
| T | F | T | T | T | F | No | T |
| T | F | F | T | T | T | **Yes** | T |
| F | T | T | T | T | F | No | T |
| F | T | F | F | T | T | **Yes** | T |
| F | F | T | T | T | F | No | T |
| F | F | F | T | T | T | **Yes** | T |

In every row where both premises are true (rows 4, 6, and 8), the conclusion $q \\to \\neg p$ is also true.

The semantic entailment **holds**.`,
  },
  {
    id: 'ls-se-5',
    courseId: 'logic-sets-ai',
    topic: 'Semantic Entailment',
    difficulty: 'hard',
    question: `Is the Sheffer stroke $\\mid$ (NAND) associative? That is, does the following semantic equivalence hold?

$$(\\phi \\mid \\psi) \\mid \\chi \\equiv \\phi \\mid (\\psi \\mid \\chi)$$

Prove it via a truth table, or provide a counterexample.`,
    answer: `We compute both sides for all valuations. Recall that $A \\mid B = \\neg(A \\land B)$.

| $\\phi$ | $\\psi$ | $\\chi$ | $\\phi \\mid \\psi$ | $(\\phi \\mid \\psi) \\mid \\chi$ | $\\psi \\mid \\chi$ | $\\phi \\mid (\\psi \\mid \\chi)$ |
|---|---|---|---|---|---|---|
| T | T | T | F | T | F | T |
| T | T | F | F | T | T | F |
| T | F | T | T | F | T | F |
| T | F | F | T | T | T | F |
| F | T | T | T | F | F | T |
| F | T | F | T | T | T | T |
| F | F | T | T | F | T | T |
| F | F | F | T | T | T | T |

The columns for $(\\phi \\mid \\psi) \\mid \\chi$ and $\\phi \\mid (\\psi \\mid \\chi)$ differ in rows 2, 3, 4, and 5.

**Counterexample:** $\\phi = T, \\psi = T, \\chi = F$: $(T \\mid T) \\mid F = F \\mid F = T$ but $T \\mid (T \\mid F) = T \\mid T = F$.

The Sheffer stroke is **not associative**.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 2: CNF CONVERSION (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-cnf-1',
    courseId: 'logic-sets-ai',
    topic: 'CNF Conversion',
    difficulty: 'medium',
    question: `Construct a formula in CNF that is semantically equivalent to

$$(p \\lor r) \\lor (\\neg(p \\land q) \\to r)$$

using the **truth table method**.`,
    answer: `**Step 1:** Build the truth table.

| $p$ | $q$ | $r$ | $p \\lor r$ | $p \\land q$ | $\\neg(p \\land q)$ | $\\neg(p \\land q) \\to r$ | Full formula |
|---|---|---|---|---|---|---|---|
| T | T | T | T | T | F | T | T |
| T | T | F | T | T | F | T | T |
| T | F | T | T | F | T | T | T |
| T | F | F | T | F | T | F | T |
| F | T | T | T | F | T | T | T |
| F | T | F | F | F | T | F | **F** |
| F | F | T | T | F | T | T | T |
| F | F | F | F | F | T | F | **F** |

**Step 2:** The formula is false in rows 6 and 8. For the CNF, we negate these rows:

- Row 6: $p = F, q = T, r = F \\Rightarrow$ clause $(p \\lor \\neg q \\lor r)$
- Row 8: $p = F, q = F, r = F \\Rightarrow$ clause $(p \\lor q \\lor r)$

**CNF:** $(p \\lor \\neg q \\lor r) \\land (p \\lor q \\lor r)$`,
  },
  {
    id: 'ls-cnf-2',
    courseId: 'logic-sets-ai',
    topic: 'CNF Conversion',
    difficulty: 'medium',
    question: `Determine a semantically equivalent CNF of the formula

$$\\neg((p \\lor q) \\to r) \\land (\\neg p \\to r)$$

by applying the **algorithm CNF** (step by step: IMPL-FREE, NNF, DISTR).`,
    answer: `Applying the CNF algorithm step by step:

**Step 1 -- IMPL-FREE:** Replace $\\to$ with $\\neg ... \\lor ...$

$$\\neg(\\neg(p \\lor q) \\lor r) \\land (\\neg\\neg p \\lor r)$$

**Step 2 -- NNF:** Push negations inward using De Morgan and double negation.

$$= (\\neg\\neg(p \\lor q) \\land \\neg r) \\land (p \\lor r)$$
$$= ((p \\lor q) \\land \\neg r) \\land (p \\lor r)$$

**Step 3 -- DISTR:** The formula is already a conjunction of clauses:

$$(p \\lor q) \\land \\neg r \\land (p \\lor r)$$

This is in CNF: a conjunction of three clauses.

**Tautology check:** None of the clauses contain both a variable and its negation, so this CNF is **not** a tautology.`,
  },
  {
    id: 'ls-cnf-3',
    courseId: 'logic-sets-ai',
    topic: 'CNF Conversion',
    difficulty: 'hard',
    question: `Apply the CNF algorithm to convert the following formula to CNF:

$$\\neg((p \\lor q) \\to r) \\lor (\\neg p \\land r)$$

Show every step (IMPL-FREE, NNF, DISTR).`,
    answer: `**Step 1 -- IMPL-FREE:**

$$\\neg(\\neg(p \\lor q) \\lor r) \\lor (\\neg p \\land r)$$

**Step 2 -- NNF:** Push negation inward:

$$= (\\neg\\neg(p \\lor q) \\land \\neg r) \\lor (\\neg p \\land r)$$
$$= ((p \\lor q) \\land \\neg r) \\lor (\\neg p \\land r)$$

**Step 3 -- DISTR:** Distribute $\\lor$ over $\\land$:

$$= ((p \\lor q) \\lor (\\neg p \\land r)) \\land (\\neg r \\lor (\\neg p \\land r))$$

Apply distribution again to each conjunct:

First conjunct: $((p \\lor q) \\lor \\neg p) \\land ((p \\lor q) \\lor r)$

Second conjunct: $(\\neg r \\lor \\neg p) \\land (\\neg r \\lor r)$

**Final CNF:**

$$(p \\lor q \\lor \\neg p) \\land (p \\lor q \\lor r) \\land (\\neg r \\lor \\neg p) \\land (\\neg r \\lor r)$$

Note: The clause $(p \\lor q \\lor \\neg p)$ is a tautology (contains $p$ and $\\neg p$), and $(\\neg r \\lor r)$ is also a tautology. These can be simplified away, but the above is a valid CNF.`,
  },
  {
    id: 'ls-cnf-4',
    courseId: 'logic-sets-ai',
    topic: 'CNF Conversion',
    difficulty: 'easy',
    question: `Using the CNF algorithm, show that the formula

$$(p \\land \\neg q) \\to \\neg(q \\to p)$$

is semantically equivalent to $\\neg p \\lor q$.

Show each step of the algorithm.`,
    answer: `**Step 1 -- IMPL-FREE:** Replace both implications:

$$(p \\land \\neg q) \\to \\neg(q \\to p)$$
$$= \\neg(p \\land \\neg q) \\lor \\neg(\\neg q \\lor p)$$

**Step 2 -- NNF:** Apply De Morgan's laws and double negation:

$$= (\\neg p \\lor \\neg\\neg q) \\lor (\\neg\\neg q \\land \\neg p)$$
$$= (\\neg p \\lor q) \\lor (q \\land \\neg p)$$

**Step 3 -- DISTR:** We can distribute, but let us first simplify using absorption:

$(\\neg p \\lor q) \\lor (q \\land \\neg p)$

By absorption: $A \\lor (B \\land A)$ where $A$ contains $\\neg p$ and $q$, this simplifies to $\\neg p \\lor q$.

Alternatively, apply distribution: $(\\neg p \\lor q \\lor q) \\land (\\neg p \\lor q \\lor \\neg p) = (\\neg p \\lor q) \\land (\\neg p \\lor q) = \\neg p \\lor q$.

**Result:** The CNF is $\\neg p \\lor q$, which is the same as the target formula.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 3: DPLL ALGORITHM (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-dpll-1',
    courseId: 'logic-sets-ai',
    topic: 'DPLL Algorithm',
    difficulty: 'medium',
    question: `Apply the DPLL procedure to the CNF

$$(p \\lor \\neg r) \\land (q \\lor \\neg r) \\land (\\neg p \\lor \\neg q) \\land (q \\lor r)$$

to check whether it is satisfiable. Explain in detail how the procedure comes to a result. Unless there is a unit clause or a pure literal, branch first on $p$, then on $q$, then on $r$; always try $\\top$ before $\\bot$.

If the formula is satisfiable, provide a model.`,
    answer: `**Initial formula:** $(p \\lor \\neg r) \\land (q \\lor \\neg r) \\land (\\neg p \\lor \\neg q) \\land (q \\lor r)$

No unit clauses or pure literals exist.

**Branch on $p = \\top$:** Clauses containing $p$ positively become true; remove $\\neg p$ from remaining clauses:

$$(q \\lor \\neg r) \\land \\neg q \\land (q \\lor r)$$

Now $\\neg q$ is a **unit clause**, so set $q = \\bot$. Remove clauses with $\\neg q$; remove $q$ from remaining:

$$\\neg r \\land r$$

This is **unsatisfiable** ($\\neg r \\land r$ is a contradiction).

**Backtrack: $p = \\bot$.** Remove clauses with $\\neg p$; remove $p$ from remaining:

$$\\neg r \\land (q \\lor \\neg r) \\land (q \\lor r)$$

$\\neg r$ is a **unit clause**, so set $r = \\bot$. Remove clauses with $\\neg r$; remove $r$ from remaining:

$$q$$

$q$ is a **unit clause**, so set $q = \\top$. The formula reduces to $\\top$.

**Result:** The formula is **satisfiable** with model $p = \\bot, q = \\top, r = \\bot$.`,
  },
  {
    id: 'ls-dpll-2',
    courseId: 'logic-sets-ai',
    topic: 'DPLL Algorithm',
    difficulty: 'medium',
    question: `Apply the DPLL procedure to the CNF

$$(p \\lor q) \\land (\\neg p \\lor \\neg r) \\land (\\neg q \\lor \\neg r) \\land (\\neg p \\lor r)$$

to check whether it is satisfiable. Branch first on $p$, then $q$, then $r$; try $\\top$ before $\\bot$.

If satisfiable, provide a model.`,
    answer: `**Initial formula:** $(p \\lor q) \\land (\\neg p \\lor \\neg r) \\land (\\neg q \\lor \\neg r) \\land (\\neg p \\lor r)$

No unit clauses or pure literals.

**Branch on $p = \\top$:**

$$(\\neg r) \\land (\\neg q \\lor \\neg r) \\land r$$

We have unit clauses $\\neg r$ and $r$. Setting $r = \\bot$ from $\\neg r$ gives the remaining clause $r$, which becomes $\\bot$. Setting $r = \\top$ from $r$ gives $\\neg r$ becoming $\\bot$. Either way: **contradiction**.

**Backtrack: $p = \\bot$:**

$$q \\land (\\neg q \\lor \\neg r) \\land r$$

$q$ is a **unit clause** $\\Rightarrow$ set $q = \\top$:

$$\\neg r \\land r$$

**Contradiction** again.

Wait -- $r$ is also a unit clause. But we already have $\\neg r$ from simplifying. So both lead to contradiction.

Actually, let's re-derive. With $p = \\bot$: remove clauses containing $\\neg p$ (clauses 2 and 4 are removed). Remove $p$ from remaining clauses:

$$q \\land (\\neg q \\lor \\neg r)$$

$q$ is a unit clause $\\Rightarrow q = \\top$. Remove clause $q$, remove $\\neg q$ from remaining:

$$\\neg r$$

$\\neg r$ is a unit clause $\\Rightarrow r = \\bot$.

Formula reduces to $\\top$.

**Result:** Satisfiable with model $p = \\bot, q = \\top, r = \\bot$.`,
  },
  {
    id: 'ls-dpll-3',
    courseId: 'logic-sets-ai',
    topic: 'DPLL Algorithm',
    difficulty: 'hard',
    question: `Apply the DPLL procedure to the CNF

$$(p \\lor \\neg q) \\land (\\neg p \\lor q) \\land (\\neg q \\lor r) \\land (\\neg r \\lor s) \\land (\\neg s)$$

to check whether it is satisfiable. Unless there is a unit clause or pure literal, branch first on $p$, then $q$, then $r$, then $s$; always try $\\top$ before $\\bot$.`,
    answer: `**Initial formula:** $(p \\lor \\neg q) \\land (\\neg p \\lor q) \\land (\\neg q \\lor r) \\land (\\neg r \\lor s) \\land (\\neg s)$

$\\neg s$ is a **unit clause** $\\Rightarrow$ set $s = \\bot$. Remove clause $\\neg s$; remove $s$ from remaining:

$$(p \\lor \\neg q) \\land (\\neg p \\lor q) \\land (\\neg q \\lor r) \\land \\neg r$$

$\\neg r$ is a **unit clause** $\\Rightarrow$ set $r = \\bot$. Remove clause $\\neg r$; remove $r$ from remaining:

$$(p \\lor \\neg q) \\land (\\neg p \\lor q) \\land \\neg q$$

$\\neg q$ is a **unit clause** $\\Rightarrow$ set $q = \\bot$. Remove clauses containing $\\neg q$; remove $q$ from remaining:

$$\\neg p$$

$\\neg p$ is a **unit clause** $\\Rightarrow$ set $p = \\bot$.

Formula reduces to $\\top$.

**Result:** The formula is **satisfiable** with model $p = \\bot, q = \\bot, r = \\bot, s = \\bot$.

Note: The entire procedure was driven by unit propagation -- no branching was needed.`,
  },
  {
    id: 'ls-dpll-4',
    courseId: 'logic-sets-ai',
    topic: 'DPLL Algorithm',
    difficulty: 'easy',
    question: `Apply the DPLL procedure to the CNF

$$(p \\lor q \\lor r) \\land (p \\lor \\neg q \\lor \\neg r) \\land \\neg p$$

to check whether it is satisfiable. Branch first on $p$, then $q$, then $r$; try $\\top$ before $\\bot$.`,
    answer: `**Initial:** $(p \\lor q \\lor r) \\land (p \\lor \\neg q \\lor \\neg r) \\land \\neg p$

$\\neg p$ is a **unit clause** $\\Rightarrow$ set $p = \\bot$. Remove clause $\\neg p$; remove $p$ from remaining:

$$(q \\lor r) \\land (\\neg q \\lor \\neg r)$$

No unit clauses or pure literals.

**Branch on $q = \\top$:** Remove clause $(q \\lor r)$; remove $\\neg q$ from remaining:

$$\\neg r$$

Unit clause $\\neg r \\Rightarrow r = \\bot$. Formula becomes $\\top$.

**Result:** Satisfiable with model $p = \\bot, q = \\top, r = \\bot$.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 4: KNIGHTS & KNAVES / ISLAND PUZZLES (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-kk-1',
    courseId: 'logic-sets-ai',
    topic: 'Knights & Knaves',
    difficulty: 'medium',
    question: `On the island of liars and truth speakers, everybody is either a liar (who always lies) or a truth speaker (who always speaks the truth). You meet islanders A, B, and C.

- A says: "Either B or C is a truth speaker." (exclusive or, i.e., $\\oplus$)
- B says: "A and C are both liars."

Determine, via a truth table, who of A, B, and C is a truth speaker and who is a liar.`,
    answer: `Let $t_A, t_B, t_C$ be propositional variables that are true iff A, B, C are truth speakers respectively.

**Formalizing the statements:**

- A says "$t_B \\oplus t_C$". Since A is a truth speaker iff his statement is true: $t_A \\leftrightarrow (t_B \\oplus t_C)$.
- B says "$\\neg t_A \\land \\neg t_C$". So: $t_B \\leftrightarrow (\\neg t_A \\land \\neg t_C)$.

We need both biconditionals to be true simultaneously:

| $t_A$ | $t_B$ | $t_C$ | $t_B \\oplus t_C$ | $t_A \\leftrightarrow (t_B \\oplus t_C)$ | $\\neg t_A \\land \\neg t_C$ | $t_B \\leftrightarrow (\\neg t_A \\land \\neg t_C)$ | Both T? |
|---|---|---|---|---|---|---|---|
| T | T | T | F | F | F | F | No |
| T | T | F | T | T | F | F | No |
| T | F | T | T | T | F | T | **Yes** |
| T | F | F | F | F | F | T | No |
| F | T | T | F | T | F | F | No |
| F | T | F | T | F | T | T | No |
| F | F | T | T | F | F | T | No |
| F | F | F | F | T | T | F | No |

Only row 3 satisfies both conditions: **A is a truth speaker, B is a liar, C is a truth speaker**.

**Verification:** A (truth speaker) says "exactly one of B, C is a truth speaker" -- indeed C is a truth speaker and B is not ($\\oplus$ satisfied). B (liar) says "A and C are both liars" -- this is false, which is consistent since B is a liar.`,
  },
  {
    id: 'ls-kk-2',
    courseId: 'logic-sets-ai',
    topic: 'Knights & Knaves',
    difficulty: 'medium',
    question: `On the island of liars and truth speakers, you meet islanders A and B.

- A says: "If I am a liar, then B is a truth speaker."
- B says: "Exactly one of us two is a liar."

Determine via a truth table whether A and B are truth speakers or liars.`,
    answer: `Let $t_A, t_B$ denote truth speaker status.

**Formalizing:**
- A says: $\\neg t_A \\to t_B$. So: $t_A \\leftrightarrow (\\neg t_A \\to t_B)$.
- B says: $t_A \\oplus t_B$. So: $t_B \\leftrightarrow (t_A \\oplus t_B)$.

| $t_A$ | $t_B$ | $\\neg t_A \\to t_B$ | $t_A \\oplus t_B$ | $t_A \\leftrightarrow (\\neg t_A \\to t_B)$ | $t_B \\leftrightarrow (t_A \\oplus t_B)$ | Both T? |
|---|---|---|---|---|---|---|
| T | T | T | F | T | F | No |
| T | F | T | T | T | F | No |
| F | T | T | T | F | T | No |
| F | F | F | F | T | T | **Yes** |

Only row 4 works: **Both A and B are liars**.

**Verification:** A (liar) says "if I am a liar then B is a truth speaker", i.e., "if F then F" = T. But A is a liar so this statement should be false... Let's re-check: $\\neg t_A \\to t_B = T \\to F = F$, and $t_A \\leftrightarrow F = F \\leftrightarrow F = T$. Correct. B (liar) says "exactly one of us is a liar" which is false (both are liars), consistent with B being a liar.`,
  },
  {
    id: 'ls-kk-3',
    courseId: 'logic-sets-ai',
    topic: 'Knights & Knaves',
    difficulty: 'hard',
    question: `On the island of liars and truth speakers, you meet islanders Xander, Yara, and Zain.

- Xander says: "Yara is a liar."
- Yara says: "I am the same as Zain." (i.e., both truth speakers or both liars)
- Zain says: "Xander is a truth speaker."

Determine by means of logical reasoning or a truth table whether each islander is a truth speaker or a liar.`,
    answer: `Let $t_X, t_Y, t_Z$ be truth speaker variables.

**Formalizing:**
- Xander: $t_X \\leftrightarrow \\neg t_Y$
- Yara: $t_Y \\leftrightarrow (t_Y \\leftrightarrow t_Z)$
- Zain: $t_Z \\leftrightarrow t_X$

**Logical reasoning approach:**

**Case 1:** Assume $t_X = T$ (Xander is truthful).
- Then $\\neg t_Y$ is true, so $t_Y = F$ (Yara is a liar).
- Yara says "I am the same as Zain." Since Yara is a liar, this is false, meaning they are NOT the same, so $t_Z \\neq t_Y$, meaning $t_Z = T$.
- Zain says "Xander is a truth speaker." Since $t_Z = T$, this must be true, and indeed $t_X = T$. **Consistent!**

**Case 2:** Assume $t_X = F$ (Xander is a liar).
- Then $\\neg t_Y$ is false (since Xander lies), so $t_Y = T$.
- Yara (truth speaker) says "I am the same as Zain," so $t_Z = T$.
- Zain (truth speaker) says "Xander is a truth speaker," but $t_X = F$. **Contradiction!**

**Conclusion:** Xander is a **truth speaker**, Yara is a **liar**, Zain is a **truth speaker**.`,
  },
  {
    id: 'ls-kk-4',
    courseId: 'logic-sets-ai',
    topic: 'Knights & Knaves',
    difficulty: 'hard',
    question: `On the island of liars and truth speakers, you face two islanders, Abraham and Bethel. You know that one is a truth speaker and the other is a liar, but you do not know who is who. A road forks in front of you: one path leads to treasure and the other to peril. Both islanders know each other's nature and where the paths lead.

You may ask **one** yes-or-no question to **one** of them. What question should you ask, and which path should you then take?`,
    answer: `**The key insight** is to ask a question that "neutralizes" the unknown identity of the islander, so that both a truth speaker and a liar would give the same answer.

**The question:** Ask either islander: *"Would the other islander tell me that this path (pointing to one) leads to the treasure?"*

**Analysis:**

**If you ask the truth speaker:**
- The truth speaker knows the liar would lie about the correct path.
- If the path you point to leads to treasure, the liar would say "No." The truth speaker honestly reports this: "No."
- If the path leads to peril, the liar would say "Yes." The truth speaker honestly reports: "Yes."

**If you ask the liar:**
- The liar knows the truth speaker would give the correct answer.
- If the path leads to treasure, the truth speaker would say "Yes." The liar lies about this: "No."
- If the path leads to peril, the truth speaker would say "No." The liar lies: "Yes."

**In both cases:** "No" means the path leads to treasure, "Yes" means it leads to peril. **Take the opposite of the answer** -- if they say "No," take that path; if they say "Yes," take the other path.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 5: SET OPERATIONS & ALGEBRA (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-set-1',
    courseId: 'logic-sets-ai',
    topic: 'Set Operations & Algebra',
    difficulty: 'medium',
    question: `Prove the following set-theoretic identity using the **algebra of sets**. Name all rules you apply.

$$(A \\cap B) \\cap (A \\Delta B) = \\emptyset$$

where $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A)$ denotes the symmetric difference.`,
    answer: `**Proof using algebra of sets:**

$$(A \\cap B) \\cap (A \\Delta B)$$

**Definition of $\\Delta$:**
$$= (A \\cap B) \\cap ((A \\setminus B) \\cup (B \\setminus A))$$

**Distributivity** ($\\cap$ over $\\cup$):
$$= ((A \\cap B) \\cap (A \\setminus B)) \\cup ((A \\cap B) \\cap (B \\setminus A))$$

**Definition of $\\setminus$** (i.e., $X \\setminus Y = X \\cap Y'$):
$$= ((A \\cap B) \\cap (A \\cap B')) \\cup ((A \\cap B) \\cap (B \\cap A'))$$

**Associativity and commutativity:**
$$= (A \\cap A \\cap B \\cap B') \\cup (A \\cap A' \\cap B \\cap B)$$

**Idempotence** ($A \\cap A = A$) and **complement** ($B \\cap B' = \\emptyset$):
$$= (A \\cap \\emptyset) \\cup (\\emptyset \\cap B)$$

**Domination** ($X \\cap \\emptyset = \\emptyset$):
$$= \\emptyset \\cup \\emptyset$$

**Identity** ($\\emptyset \\cup \\emptyset = \\emptyset$):
$$= \\emptyset \\qquad \\blacksquare$$`,
  },
  {
    id: 'ls-set-2',
    courseId: 'logic-sets-ai',
    topic: 'Set Operations & Algebra',
    difficulty: 'medium',
    question: `Prove using the algebra of sets:

$$A \\setminus (B \\cap C) = (A \\cap B') \\cup (A \\cap C')$$

Name all rules applied.`,
    answer: `**Proof:**

$$A \\setminus (B \\cap C)$$

**Definition of $\\setminus$:**
$$= A \\cap (B \\cap C)'$$

**De Morgan's Law:**
$$= A \\cap (B' \\cup C')$$

**Distributivity** ($\\cap$ over $\\cup$):
$$= (A \\cap B') \\cup (A \\cap C') \\qquad \\blacksquare$$`,
  },
  {
    id: 'ls-set-3',
    courseId: 'logic-sets-ai',
    topic: 'Set Operations & Algebra',
    difficulty: 'hard',
    question: `Prove using the algebra of sets:

$$(A' \\setminus B) \\cap (C' \\setminus B) = (A \\cup C)' \\setminus B$$

Name all rules applied at each step.`,
    answer: `**Proof (starting from the left-hand side):**

$$(A' \\setminus B) \\cap (C' \\setminus B)$$

**Definition of $\\setminus$** (applied twice):
$$= (A' \\cap B') \\cap (C' \\cap B')$$

**Associativity and commutativity** of $\\cap$:
$$= A' \\cap C' \\cap B' \\cap B'$$

**Idempotence** ($B' \\cap B' = B'$):
$$= A' \\cap C' \\cap B'$$

**De Morgan's Law** ($A' \\cap C' = (A \\cup C)'$):
$$= (A \\cup C)' \\cap B'$$

**Definition of $\\setminus$** (in reverse):
$$= (A \\cup C)' \\setminus B \\qquad \\blacksquare$$`,
  },
  {
    id: 'ls-set-4',
    courseId: 'logic-sets-ai',
    topic: 'Set Operations & Algebra',
    difficulty: 'easy',
    question: `Let $A = \\{1, 2, 3, 4\\}$, $B = \\{2, 4, 6\\}$, and $C = \\{1, 3, 5\\}$.

Compute:
1. $A \\cup B$
2. $A \\cap C$
3. $A \\setminus B$
4. $B \\Delta C$ (symmetric difference)
5. $\\mathcal{P}(\\{1, 2\\})$ (power set)`,
    answer: `1. $A \\cup B = \\{1, 2, 3, 4, 6\\}$

2. $A \\cap C = \\{1, 3\\}$

3. $A \\setminus B = \\{1, 3\\}$ (elements in $A$ but not in $B$)

4. $B \\Delta C = (B \\setminus C) \\cup (C \\setminus B) = \\{2, 4, 6\\} \\cup \\{1, 3, 5\\} = \\{1, 2, 3, 4, 5, 6\\}$

   (Since $B$ and $C$ are disjoint, the symmetric difference is just $B \\cup C$.)

5. $\\mathcal{P}(\\{1, 2\\}) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$

   (The power set has $2^2 = 4$ elements.)`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 6: RELATIONS (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-rel-1',
    courseId: 'logic-sets-ai',
    topic: 'Relations',
    difficulty: 'medium',
    question: `Given the set $V = \\{n, o, p, q, r, s\\}$ with the relations:

$$A = \\{\\langle n, p \\rangle, \\langle n, s \\rangle, \\langle o, o \\rangle, \\langle p, n \\rangle, \\langle q, r \\rangle, \\langle q, s \\rangle\\}$$

$$B = \\{\\langle n, n \\rangle, \\langle n, q \\rangle, \\langle q, r \\rangle\\}$$

(a) Is relation $A$ reflexive? Why or why not?
(b) Is relation $A$ transitive? Why or why not?
(c) Is relation $B$ anti-symmetric? Why or why not?`,
    answer: `**(a) $A$ is NOT reflexive.**

Reflexivity requires $\\langle x, x \\rangle \\in A$ for ALL $x \\in V$. While $\\langle o, o \\rangle \\in A$, the following self-loops are missing:

$$\\{\\langle n, n \\rangle, \\langle p, p \\rangle, \\langle q, q \\rangle, \\langle r, r \\rangle, \\langle s, s \\rangle\\}$$

**(b) $A$ is NOT transitive.**

Transitivity requires: if $\\langle x, y \\rangle \\in A$ and $\\langle y, z \\rangle \\in A$, then $\\langle x, z \\rangle \\in A$.

Counterexample: $\\langle p, n \\rangle \\in A$ and $\\langle n, s \\rangle \\in A$, but $\\langle p, s \\rangle \\notin A$.

Also: $\\langle p, n \\rangle \\in A$ and $\\langle n, p \\rangle \\in A$, but $\\langle p, p \\rangle \\notin A$ and $\\langle n, n \\rangle \\notin A$.

**(c) $B$ IS anti-symmetric.**

Anti-symmetry requires: for all $x \\neq y$, if $\\langle x, y \\rangle \\in B$ then $\\langle y, x \\rangle \\notin B$.

The non-diagonal pairs in $B$ are $\\langle n, q \\rangle$ and $\\langle q, r \\rangle$. We check:
- $\\langle n, q \\rangle \\in B$ but $\\langle q, n \\rangle \\notin B$ -- OK
- $\\langle q, r \\rangle \\in B$ but $\\langle r, q \\rangle \\notin B$ -- OK

No violations found, so $B$ is anti-symmetric.`,
  },
  {
    id: 'ls-rel-2',
    courseId: 'logic-sets-ai',
    topic: 'Relations',
    difficulty: 'medium',
    question: `In the set $V = \\{1, 2, 3, 4\\}$, consider the relations:

$$R = \\{\\langle 1, 2 \\rangle, \\langle 1, 3 \\rangle, \\langle 1, 4 \\rangle, \\langle 2, 2 \\rangle, \\langle 2, 3 \\rangle, \\langle 2, 4 \\rangle, \\langle 3, 3 \\rangle\\}$$
$$S = \\{\\langle 1, 1 \\rangle, \\langle 2, 3 \\rangle, \\langle 3, 4 \\rangle\\}$$

(a) Write down the matrix representation of $R$.
(b) Is $R$ transitive? Is $R$ reflexive?
(c) Compute $S \\circ R$ (the composition "$S$ after $R$") and list all its elements.`,
    answer: `**(a) Matrix representation of $R$:**

$$M_R = \\begin{pmatrix} 0 & 1 & 1 & 1 \\\\ 0 & 1 & 1 & 1 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$$

Rows/columns correspond to elements 1, 2, 3, 4.

**(b)**

$R$ is **NOT reflexive**: $\\langle 1, 1 \\rangle \\notin R$ and $\\langle 4, 4 \\rangle \\notin R$.

$R$ **IS transitive**: We check all cases $\\langle x, y \\rangle \\in R$ and $\\langle y, z \\rangle \\in R$:
- $\\langle 1, 2 \\rangle$ and $\\langle 2, 3 \\rangle \\Rightarrow \\langle 1, 3 \\rangle \\in R$ ✓
- $\\langle 1, 2 \\rangle$ and $\\langle 2, 4 \\rangle \\Rightarrow \\langle 1, 4 \\rangle \\in R$ ✓
- $\\langle 1, 3 \\rangle$ and $\\langle 3, 3 \\rangle \\Rightarrow \\langle 1, 3 \\rangle \\in R$ ✓
- $\\langle 2, 3 \\rangle$ and $\\langle 3, 3 \\rangle \\Rightarrow \\langle 2, 3 \\rangle \\in R$ ✓
- All other chains also check out.

**(c) Composition $S \\circ R$:**

$S \\circ R = \\{\\langle x, z \\rangle : \\exists y \\text{ with } \\langle x, y \\rangle \\in R \\text{ and } \\langle y, z \\rangle \\in S\\}$

- $\\langle 1, 2 \\rangle \\in R, \\langle 2, 3 \\rangle \\in S \\Rightarrow \\langle 1, 3 \\rangle$
- $\\langle 1, 3 \\rangle \\in R, \\langle 3, 4 \\rangle \\in S \\Rightarrow \\langle 1, 4 \\rangle$
- $\\langle 2, 2 \\rangle \\in R, \\langle 2, 3 \\rangle \\in S \\Rightarrow \\langle 2, 3 \\rangle$
- $\\langle 2, 3 \\rangle \\in R, \\langle 3, 4 \\rangle \\in S \\Rightarrow \\langle 2, 4 \\rangle$
- $\\langle 3, 3 \\rangle \\in R, \\langle 3, 4 \\rangle \\in S \\Rightarrow \\langle 3, 4 \\rangle$

$$S \\circ R = \\{\\langle 1, 3 \\rangle, \\langle 1, 4 \\rangle, \\langle 2, 3 \\rangle, \\langle 2, 4 \\rangle, \\langle 3, 4 \\rangle\\}$$`,
  },
  {
    id: 'ls-rel-3',
    courseId: 'logic-sets-ai',
    topic: 'Relations',
    difficulty: 'easy',
    question: `Let $R$ be a relation on $\\{a, b, c\\}$ defined by:

$$R = \\{\\langle a, a \\rangle, \\langle a, b \\rangle, \\langle b, a \\rangle, \\langle b, b \\rangle, \\langle c, c \\rangle\\}$$

Determine whether $R$ is:
1. Reflexive
2. Symmetric
3. Transitive
4. Anti-symmetric`,
    answer: `**1. Reflexive: YES.**

$\\langle a, a \\rangle, \\langle b, b \\rangle, \\langle c, c \\rangle$ are all in $R$. Every element relates to itself.

**2. Symmetric: YES.**

For every $\\langle x, y \\rangle \\in R$ with $x \\neq y$, check $\\langle y, x \\rangle \\in R$:
- $\\langle a, b \\rangle \\in R$ and $\\langle b, a \\rangle \\in R$ ✓

No other non-diagonal pairs exist.

**3. Transitive: YES.**

Check all chains: $\\langle a, b \\rangle$ and $\\langle b, a \\rangle \\Rightarrow \\langle a, a \\rangle \\in R$ ✓. $\\langle b, a \\rangle$ and $\\langle a, b \\rangle \\Rightarrow \\langle b, b \\rangle \\in R$ ✓. All other combinations check out.

**4. Anti-symmetric: NO.**

$\\langle a, b \\rangle \\in R$ and $\\langle b, a \\rangle \\in R$ but $a \\neq b$. This violates anti-symmetry.

**Note:** Since $R$ is reflexive, symmetric, and transitive, it is an **equivalence relation**.`,
  },
  {
    id: 'ls-rel-4',
    courseId: 'logic-sets-ai',
    topic: 'Relations',
    difficulty: 'hard',
    question: `Given $V = \\{a, b, c, d, e\\}$ and $W = \\{1, 2, 3, 4, 5\\}$ with relations:

$$R = \\{(a,a), (a,d), (b,b), (c,c), (c,d), (d,a), (d,c), (d,e), (e,e)\\}$$
$$S = \\{(a,2), (b,3), (d,3), (d,5), (e,4)\\}$$

(a) Is $R$ transitive? Is $R$ anti-symmetric?
(b) Compute the composition $S \\circ R$ and give its matrix representation.`,
    answer: `**(a) Transitivity of $R$:**

$R$ is **NOT transitive**. Counterexample: $(a, d) \\in R$ and $(d, c) \\in R$, but $(a, c) \\notin R$.

Also: $(a, d) \\in R$ and $(d, e) \\in R$, but $(a, e) \\notin R$.

**Anti-symmetry of $R$:**

$R$ is **NOT anti-symmetric**. Counterexample: $(a, d) \\in R$ and $(d, a) \\in R$, but $a \\neq d$.

Also: $(c, d) \\in R$ and $(d, c) \\in R$, but $c \\neq d$.

**(b) Composition $S \\circ R$:**

$S \\circ R = \\{\\langle x, z \\rangle : \\exists y$ with $(x, y) \\in R$ and $(y, z) \\in S\\}$

- $(a, a) \\in R, (a, 2) \\in S \\Rightarrow (a, 2)$
- $(a, d) \\in R, (d, 3) \\in S \\Rightarrow (a, 3)$
- $(a, d) \\in R, (d, 5) \\in S \\Rightarrow (a, 5)$
- $(b, b) \\in R, (b, 3) \\in S \\Rightarrow (b, 3)$
- $(c, c) \\in R$, but $(c, ?) \\notin S$ -- no contribution from $(c,c)$
- $(c, d) \\in R, (d, 3) \\in S \\Rightarrow (c, 3)$
- $(c, d) \\in R, (d, 5) \\in S \\Rightarrow (c, 5)$
- $(d, a) \\in R, (a, 2) \\in S \\Rightarrow (d, 2)$
- $(d, e) \\in R, (e, 4) \\in S \\Rightarrow (d, 4)$
- $(d, c) \\in R$, but $(c, ?) \\notin S$
- $(e, e) \\in R, (e, 4) \\in S \\Rightarrow (e, 4)$

$$S \\circ R = \\{(a,2),(a,3),(a,5),(b,3),(c,3),(c,5),(d,2),(d,4),(e,4)\\}$$

**Matrix** (rows: $a,b,c,d,e$; columns: $1,2,3,4,5$):

$$\\begin{pmatrix} 0 & 1 & 1 & 0 & 1 \\\\ 0 & 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 & 1 \\\\ 0 & 1 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 & 0 \\end{pmatrix}$$`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 7: PARTIAL ORDERS & HASSE DIAGRAMS (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-po-1',
    courseId: 'logic-sets-ai',
    topic: 'Partial Orders & Hasse Diagrams',
    difficulty: 'medium',
    question: `Let $P$ be the following subset of $\\{\\text{Morning}, \\text{Afternoon}, \\text{Evening}, \\text{Night}\\}^2$:

$$P = \\{\\langle M, M \\rangle, \\langle M, A \\rangle, \\langle A, M \\rangle, \\langle A, A \\rangle, \\langle E, E \\rangle, \\langle E, N \\rangle, \\langle N, E \\rangle\\}$$

Consider the **Cartesian ordering** on $P$ induced by $M \\leq A \\leq E \\leq N$.

Determine all **minimal** and **maximal** elements. Is there a **minimum**? Is there a **maximum**?`,
    answer: `In the Cartesian order on pairs, $\\langle a_1, a_2 \\rangle \\leq \\langle b_1, b_2 \\rangle$ iff $a_1 \\leq b_1$ AND $a_2 \\leq b_2$.

First, let us determine which elements of $P$ are comparable:

- $MM \\leq MA$ (since $M \\leq M$ and $M \\leq A$) ✓
- $MM \\leq AM$ (since $M \\leq A$ and $M \\leq M$) ✓
- $MM \\leq AA$ ✓
- $MA \\leq AA$ ✓
- $AM \\leq AA$ ✓
- $MM \\leq EE, EN, NE$ ✓
- $EE \\leq EN$ (since $E \\leq E$ and $E \\leq N$) ✓
- $EE \\leq NE$ ($E \\leq N$ and $E \\leq E$) ✓
- $EN$ and $NE$ are **incomparable** ($E \\leq N$ but $N \\not\\leq E$; $N \\leq N$ but $E \\not\\leq N$ for second component: wait, $N \\not\\leq E$ for first, $E \\not\\leq N$ reversed).

Actually: Is $EN \\leq NE$? Need $E \\leq N$ (yes) and $N \\leq E$ (no). Not comparable.
Is $NE \\leq EN$? Need $N \\leq E$ (no). Not comparable.

The Hasse diagram has structure:
- $MM$ at bottom, connecting up to $MA$ and $AM$
- $MA$ and $AM$ both connect up to $AA$
- $AA$ connects up to $EE$
- $EE$ connects up to $EN$ and $NE$

**Minimal element:** $MM$ -- it is also the **minimum** (unique smallest element, comparable to all others and $\\leq$ all of them).

**Maximal elements:** $EN$ and $NE$ -- neither is $\\leq$ the other.

**Maximum:** There is **no maximum** because $EN$ and $NE$ are incomparable.`,
  },
  {
    id: 'ls-po-2',
    courseId: 'logic-sets-ai',
    topic: 'Partial Orders & Hasse Diagrams',
    difficulty: 'easy',
    question: `Consider the power set $\\mathcal{P}(\\{x, y, z\\})$ ordered by set inclusion $\\subseteq$.

1. List all elements of $\\mathcal{P}(\\{x, y, z\\})$.
2. What is the minimum? What is the maximum?
3. What are the elements that are immediately above (cover) $\\{x\\}$ in the Hasse diagram?`,
    answer: `**1.** $\\mathcal{P}(\\{x, y, z\\}) = \\{\\emptyset, \\{x\\}, \\{y\\}, \\{z\\}, \\{x,y\\}, \\{x,z\\}, \\{y,z\\}, \\{x,y,z\\}\\}$

This has $2^3 = 8$ elements.

**2.** The **minimum** is $\\emptyset$ (the empty set is a subset of every set).

The **maximum** is $\\{x, y, z\\}$ (every set is a subset of the full set).

**3.** The elements immediately above $\\{x\\}$ in the Hasse diagram are those sets that contain $\\{x\\}$ as a subset and have exactly one more element:

$$\\{x, y\\}, \\quad \\{x, z\\}$$

These are the **covers** of $\\{x\\}$: sets $S$ such that $\\{x\\} \\subset S$ and there is no set $T$ with $\\{x\\} \\subset T \\subset S$.`,
  },
  {
    id: 'ls-po-3',
    courseId: 'logic-sets-ai',
    topic: 'Partial Orders & Hasse Diagrams',
    difficulty: 'hard',
    question: `Consider $A = \\{1, 2\\}$ and $B = \\mathcal{P}(A) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1,2\\}\\}$, with $B$ ordered by set inclusion and $A$ ordered by $\\leq$.

Let $C = B \\setminus \\{\\emptyset\\} = \\{\\{1\\}, \\{2\\}, \\{1,2\\}\\}$.

For the **Cartesian order** on $C \\times A$:
1. List the minimal and maximal elements.
2. Is there a largest element? Is there a smallest element?`,
    answer: `In the Cartesian order on $C \\times A$: $\\langle S_1, a_1 \\rangle \\leq \\langle S_2, a_2 \\rangle$ iff $S_1 \\subseteq S_2$ AND $a_1 \\leq a_2$.

The elements of $C \\times A$ are:
$\\langle\\{1\\}, 1\\rangle, \\langle\\{1\\}, 2\\rangle, \\langle\\{2\\}, 1\\rangle, \\langle\\{2\\}, 2\\rangle, \\langle\\{1,2\\}, 1\\rangle, \\langle\\{1,2\\}, 2\\rangle$

The ordering on $C$: $\\{1\\} \\subseteq \\{1,2\\}$ and $\\{2\\} \\subseteq \\{1,2\\}$, but $\\{1\\}$ and $\\{2\\}$ are incomparable.

**Minimal elements:** Elements with no element strictly below them.
- $\\langle\\{1\\}, 1\\rangle$: nothing is $\\leq$ it except itself (since $\\{1\\}$ and $\\{2\\}$ are incomparable, no element with $\\{2\\}$ is below it).
- $\\langle\\{2\\}, 1\\rangle$: similarly minimal.
- $\\langle\\{1\\}, 2\\rangle$: $\\langle\\{1\\}, 1\\rangle \\leq \\langle\\{1\\}, 2\\rangle$, so NOT minimal.

**Minimal elements: $\\langle\\{1\\}, 1\\rangle$ and $\\langle\\{2\\}, 1\\rangle$.**

**Maximal elements:** Elements with nothing strictly above them.
- $\\langle\\{1,2\\}, 2\\rangle$: everything comparable is $\\leq$ it.
- $\\langle\\{1,2\\}, 1\\rangle$: $\\langle\\{1,2\\}, 1\\rangle \\leq \\langle\\{1,2\\}, 2\\rangle$, so NOT maximal.

**Maximal element: $\\langle\\{1,2\\}, 2\\rangle$ (unique).**

**Largest element:** $\\langle\\{1,2\\}, 2\\rangle$ is comparable to and $\\geq$ every other element? Check: $\\langle\\{1\\}, 1\\rangle \\leq \\langle\\{1,2\\}, 2\\rangle$ ✓, $\\langle\\{2\\}, 1\\rangle \\leq \\langle\\{1,2\\}, 2\\rangle$ ✓. Yes -- it is the **largest element (maximum)**.

**Smallest element:** Would need to be $\\leq$ every element. $\\langle\\{1\\}, 1\\rangle$ is not $\\leq \\langle\\{2\\}, 1\\rangle$ (since $\\{1\\} \\not\\subseteq \\{2\\}$). No element is $\\leq$ all others. **There is no smallest element (no minimum).**`,
  },
  {
    id: 'ls-po-4',
    courseId: 'logic-sets-ai',
    topic: 'Partial Orders & Hasse Diagrams',
    difficulty: 'medium',
    question: `Consider the set $S = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$ ordered by the divisibility relation $|$ (where $a | b$ means $a$ divides $b$).

1. What are the minimal and maximal elements?
2. Is there a minimum? A maximum?
3. Find $\\text{LUB}(\\{2, 3\\})$ (least upper bound) and $\\text{GLB}(\\{6, 10\\})$ (greatest lower bound).`,
    answer: `**The divisibility order on $S$:**

- $1$ divides everything, so $1 \\leq$ all elements.
- $30$ is divisible by $1, 2, 3, 5, 6, 10, 15$ -- so everything $\\leq 30$.
- $6 = 2 \\times 3$, $10 = 2 \\times 5$, $15 = 3 \\times 5$.

**1. Minimal elements:** Elements with nothing strictly below them in $S$.

$1$ has nothing below it. Every other element has $1$ below it. So the only **minimal element is $1$**.

**Maximal elements:** $30$ has nothing above it. Everything else divides $30$. So the only **maximal element is $30$**.

**2.** Since $1$ is comparable to all elements and $\\leq$ all of them, $1$ is the **minimum**.

Since $30$ is comparable to all elements and $\\geq$ all of them, $30$ is the **maximum**.

**3. LUB($\\{2, 3\\}$):**

Upper bounds of $\\{2, 3\\}$ are elements divisible by both 2 and 3: $6, 30$.

The least among these is $6$.

$$\\text{LUB}(\\{2, 3\\}) = 6$$

**GLB($\\{6, 10\\}$):**

Lower bounds of $\\{6, 10\\}$ are elements that divide both 6 and 10: $1, 2$.

The greatest among these is $2$.

$$\\text{GLB}(\\{6, 10\\}) = 2$$`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 8: EQUIVALENCE RELATIONS & CLASSES (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-eq-1',
    courseId: 'logic-sets-ai',
    topic: 'Equivalence Relations & Classes',
    difficulty: 'medium',
    question: `Define the relation $R$ on $\\mathbb{Z}$ (the integers) by:

$$x \\; R \\; y \\iff x \\equiv y \\pmod{3}$$

(i.e., $3$ divides $x - y$).

1. Prove that $R$ is an equivalence relation.
2. List the equivalence classes and give three example elements in each.`,
    answer: `**1. Proof that $R$ is an equivalence relation:**

We must show $R$ is reflexive, symmetric, and transitive.

**Reflexive:** For all $x \\in \\mathbb{Z}$: $x - x = 0$, and $3 \\mid 0$. So $x \\; R \\; x$. ✓

**Symmetric:** Suppose $x \\; R \\; y$, i.e., $3 \\mid (x - y)$. Then $x - y = 3k$ for some integer $k$. So $y - x = -3k = 3(-k)$, meaning $3 \\mid (y - x)$, i.e., $y \\; R \\; x$. ✓

**Transitive:** Suppose $x \\; R \\; y$ and $y \\; R \\; z$. Then $3 \\mid (x - y)$ and $3 \\mid (y - z)$. So $x - y = 3k$ and $y - z = 3l$. Adding: $x - z = 3(k + l)$, so $3 \\mid (x - z)$, i.e., $x \\; R \\; z$. ✓

**2. The equivalence classes:**

$$[0]_R = \\{\\ldots, -6, -3, 0, 3, 6, 9, \\ldots\\}$$
$$[1]_R = \\{\\ldots, -5, -2, 1, 4, 7, 10, \\ldots\\}$$
$$[2]_R = \\{\\ldots, -4, -1, 2, 5, 8, 11, \\ldots\\}$$

These three classes partition $\\mathbb{Z}$ into three disjoint, exhaustive parts.`,
  },
  {
    id: 'ls-eq-2',
    courseId: 'logic-sets-ai',
    topic: 'Equivalence Relations & Classes',
    difficulty: 'medium',
    question: `Let $V = \\{1, 2, 3, 4, 5, 6\\}$ and define relation $R$ on $V$ by:

$$R = \\{(1,1),(1,3),(1,5),(3,1),(3,3),(3,5),(5,1),(5,3),(5,5),(2,2),(2,4),(4,2),(4,4),(6,6)\\}$$

1. Verify that $R$ is an equivalence relation by checking the three properties.
2. List the equivalence classes.
3. What is the corresponding partition of $V$?`,
    answer: `**1. Verification:**

**Reflexive:** $(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)$ are all in $R$. ✓

**Symmetric:** Check all non-diagonal pairs:
- $(1,3) \\in R$ and $(3,1) \\in R$ ✓
- $(1,5) \\in R$ and $(5,1) \\in R$ ✓
- $(3,5) \\in R$ and $(5,3) \\in R$ ✓
- $(2,4) \\in R$ and $(4,2) \\in R$ ✓

**Transitive:** The elements $\\{1, 3, 5\\}$ are all pairwise related, forming a "clique." Similarly $\\{2, 4\\}$ form a clique, and $\\{6\\}$ is alone. Within each clique, transitivity holds trivially (all pairs exist). Across cliques, there are no pairs, so transitivity is vacuously satisfied. ✓

**2. Equivalence classes:**

$$[1]_R = [3]_R = [5]_R = \\{1, 3, 5\\}$$
$$[2]_R = [4]_R = \\{2, 4\\}$$
$$[6]_R = \\{6\\}$$

**3. The partition of $V$:**

$$\\{\\{1, 3, 5\\}, \\{2, 4\\}, \\{6\\}\\}$$

Note: $\\#V = 3 + 2 + 1 = 6$ ✓ (summation formula for partitions).`,
  },
  {
    id: 'ls-eq-3',
    courseId: 'logic-sets-ai',
    topic: 'Equivalence Relations & Classes',
    difficulty: 'medium',
    question: `On the set of all propositional formulas over variables $p$ and $q$, define:

$$\\phi \\; R \\; \\psi \\iff \\phi \\equiv \\psi \\quad \\text{(semantic equivalence)}$$

1. Is $R$ an equivalence relation? Briefly justify.
2. To which equivalence class does $p \\to q$ belong? Give two other formulas in the same class.
3. How many distinct equivalence classes are there in total?`,
    answer: `**1.** Yes, $R$ (semantic equivalence) is an equivalence relation:

- **Reflexive:** $\\phi \\equiv \\phi$ for every formula (same truth table). ✓
- **Symmetric:** If $\\phi \\equiv \\psi$ then $\\psi \\equiv \\phi$ (truth tables are identical in both directions). ✓
- **Transitive:** If $\\phi \\equiv \\psi$ and $\\psi \\equiv \\chi$, then $\\phi$ and $\\chi$ have the same truth table as $\\psi$, so $\\phi \\equiv \\chi$. ✓

**2.** $p \\to q$ has the truth table: T, F, T, T (for $pq = TT, TF, FT, FF$).

Two other formulas with the same truth table:
- $\\neg p \\lor q$ (by the standard equivalence $p \\to q \\equiv \\neg p \\lor q$)
- $\\neg(p \\land \\neg q)$ (by De Morgan / contrapositive reasoning)

**3.** With 2 propositional variables, there are $2^2 = 4$ rows in the truth table, and each row can be T or F independently. So there are $2^4 = 16$ distinct truth functions, hence **16 equivalence classes**.

One class contains all tautologies (e.g., $p \\lor \\neg p$), one contains all contradictions (e.g., $p \\land \\neg p$), and 14 contain contingent formulas.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 9: FUNCTIONS (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-fn-1',
    courseId: 'logic-sets-ai',
    topic: 'Functions',
    difficulty: 'easy',
    question: `For each of the following functions, determine whether it is **injective**, **surjective**, and/or **bijective**.

1. $f : \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(x) = 2x + 1$
2. $g : \\mathbb{R} \\to \\mathbb{R}$ defined by $g(x) = x^2$
3. $h : \\{1, 2, 3\\} \\to \\{a, b, c\\}$ defined by $h(1) = b, h(2) = a, h(3) = c$`,
    answer: `**1. $f(x) = 2x + 1$ from $\\mathbb{Z} \\to \\mathbb{Z}$:**

**Injective?** YES. If $f(x_1) = f(x_2)$, then $2x_1 + 1 = 2x_2 + 1 \\Rightarrow x_1 = x_2$.

**Surjective?** NO. For example, $2 \\in \\mathbb{Z}$ has no preimage: $2x + 1 = 2 \\Rightarrow x = 1/2 \\notin \\mathbb{Z}$. The range only contains odd integers.

**Bijective?** NO (not surjective).

**2. $g(x) = x^2$ from $\\mathbb{R} \\to \\mathbb{R}$:**

**Injective?** NO. $g(2) = g(-2) = 4$ but $2 \\neq -2$.

**Surjective?** NO. $-1 \\in \\mathbb{R}$ has no preimage since $x^2 \\geq 0$ for all $x \\in \\mathbb{R}$.

**Bijective?** NO.

**3. $h : \\{1, 2, 3\\} \\to \\{a, b, c\\}$:**

**Injective?** YES. Each element maps to a distinct output: $h(1) = b, h(2) = a, h(3) = c$ -- all different.

**Surjective?** YES. Every element of $\\{a, b, c\\}$ is in the range: $a = h(2), b = h(1), c = h(3)$.

**Bijective?** YES (both injective and surjective).`,
  },
  {
    id: 'ls-fn-2',
    courseId: 'logic-sets-ai',
    topic: 'Functions',
    difficulty: 'medium',
    question: `Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{a, b, c\\}$.

1. Can there exist an **injective** function $f: A \\to B$? Explain.
2. Can there exist a **surjective** function $g: A \\to B$? Explain and give an example.
3. How many total functions from $A$ to $B$ exist?`,
    answer: `**1. Injective function $f: A \\to B$?**

**NO.** An injective function requires that no two elements of $A$ map to the same element of $B$. Since $|A| = 4 > 3 = |B|$, by the **Pigeonhole Principle**, at least two elements of $A$ must map to the same element of $B$. So no injective function can exist.

**2. Surjective function $g: A \\to B$?**

**YES.** A surjective function requires every element of $B$ to be hit. Since $|A| \\geq |B|$, this is possible.

Example: $g(1) = a, g(2) = b, g(3) = c, g(4) = a$.

Every element of $B$ appears in the range. ✓

**3. Total number of functions:**

Each of the 4 elements in $A$ can map to any of the 3 elements in $B$ independently. So:

$$|B|^{|A|} = 3^4 = 81$$

There are **81** total functions from $A$ to $B$.`,
  },
  {
    id: 'ls-fn-3',
    courseId: 'logic-sets-ai',
    topic: 'Functions',
    difficulty: 'hard',
    question: `Let $f: A \\to B$ and $g: B \\to C$ be functions.

Prove or disprove:
1. If $g \\circ f$ is injective, then $f$ is injective.
2. If $g \\circ f$ is surjective, then $g$ is surjective.
3. If $g \\circ f$ is injective, then $g$ is injective.`,
    answer: `**1. If $g \\circ f$ is injective, then $f$ is injective. -- TRUE.**

**Proof:** Suppose $f(x_1) = f(x_2)$. Then $g(f(x_1)) = g(f(x_2))$, i.e., $(g \\circ f)(x_1) = (g \\circ f)(x_2)$. Since $g \\circ f$ is injective, $x_1 = x_2$. Therefore $f$ is injective. $\\blacksquare$

**2. If $g \\circ f$ is surjective, then $g$ is surjective. -- TRUE.**

**Proof:** Let $c \\in C$ be arbitrary. Since $g \\circ f$ is surjective, there exists $a \\in A$ such that $(g \\circ f)(a) = c$, i.e., $g(f(a)) = c$. Setting $b = f(a) \\in B$, we have $g(b) = c$. So for every $c \\in C$, there exists $b \\in B$ with $g(b) = c$. Thus $g$ is surjective. $\\blacksquare$

**3. If $g \\circ f$ is injective, then $g$ is injective. -- FALSE.**

**Counterexample:** Let $A = \\{1\\}$, $B = \\{a, b\\}$, $C = \\{x\\}$. But wait, this makes $g$ map to one element, so $g \\circ f$ maps $\\{1\\} \\to \\{x\\}$ which is injective, but $g(a) = g(b) = x$ so $g$ is not injective.

More explicitly: $f(1) = a$, $g(a) = x$, $g(b) = x$. Then $(g \\circ f)(1) = x$ -- trivially injective (only one element in domain). But $g$ is not injective since $g(a) = g(b)$ with $a \\neq b$. $\\blacksquare$`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 10: OBDDs (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-obdd-1',
    courseId: 'logic-sets-ai',
    topic: 'OBDDs',
    difficulty: 'medium',
    question: `Consider the formula $x \\lor y$.

1. Draw the full binary decision tree with variable ordering $[x, y]$ (where dashed edges represent 0/false and solid edges represent 1/true).
2. Apply reduction rules C1, C2, C3 to obtain the reduced OBDD. State which rule you apply at each step.`,
    answer: `**1. Full binary decision tree for $x \\lor y$ with order $[x, y]$:**

\`\`\`
        x
       / \\
      0   1
     /     \\
    y       y
   / \\     / \\
  0   1   0   1
  |   |   |   |
 [0] [1] [1] [1]
\`\`\`

Leaves from left to right: $x=0,y=0 \\Rightarrow 0$; $x=0,y=1 \\Rightarrow 1$; $x=1,y=0 \\Rightarrow 1$; $x=1,y=1 \\Rightarrow 1$.

**2. Applying reduction rules:**

**Rule C1 (Collapse identical leaves):** Merge the three $[1]$ leaves into one $[1]$ leaf, and keep the one $[0]$ leaf. Now we have two leaf nodes: $[0]$ and $[1]$.

After C1:
\`\`\`
        x
       / \\
      0   1
     /     \\
    y       y
   / \\     / \\
  0   1   0   1
  |   |    \\ /
 [0] [1]  [1]
\`\`\`

**Rule C3 (Remove duplicate non-leaves):** The right $y$-node has 0-edge $\\to [1]$ and 1-edge $\\to [1]$. Actually, both its edges go to $[1]$, so first apply **C2**: it is superfluous (both edges to same node). Eliminate it, redirect the 1-edge of $x$ directly to $[1]$.

After C2:
\`\`\`
     x
    / \\
   0   1
  /     \\
 y     [1]
/ \\
0  1
|  |
[0][1]
\`\`\`

This is the **reduced OBDD** for $x \\lor y$. No further rules apply (the $y$-node has different children, and no duplicate non-leaves exist).`,
  },
  {
    id: 'ls-obdd-2',
    courseId: 'logic-sets-ai',
    topic: 'OBDDs',
    difficulty: 'hard',
    question: `Consider the formula $(x \\land y) \\lor (\\neg x \\land y)$.

1. Build the full binary decision tree with variable ordering $[x, y]$.
2. Apply the OBDD reduction rules (C1, C2, C3) step by step to obtain the reduced OBDD.
3. What simpler formula does the reduced OBDD represent?`,
    answer: `**1. Full binary decision tree for $(x \\land y) \\lor (\\neg x \\land y)$:**

The truth table is:
| $x$ | $y$ | $(x \\land y) \\lor (\\neg x \\land y)$ |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Tree with ordering $[x, y]$:
\`\`\`
        x
       / \\
      0   1
     /     \\
    y       y
   / \\     / \\
  0   1   0   1
  |   |   |   |
 [0] [1] [0] [1]
\`\`\`

**2. Reduction:**

**Rule C1:** Collapse identical leaves. Merge the two $[0]$'s into one and the two $[1]$'s into one:

\`\`\`
        x
       / \\
      0   1
     /     \\
    y       y
   / \\     / \\
  0   1   0   1
  |    \\ /    |
 [0]  [1]   [0]  -- wait, they share
\`\`\`

After C1, both $y$-nodes have 0-edge to $[0]$ and 1-edge to $[1]$.

**Rule C3 (Remove duplicate non-leaves):** Both $y$-nodes have the same variable ($y$), same 0-child ($[0]$), and same 1-child ($[1]$). Merge them into a single $y$-node:

\`\`\`
      x
     / \\
    0   1
     \\ /
      y
     / \\
    0   1
    |   |
   [0] [1]
\`\`\`

**Rule C2 (Eliminate superfluous non-leaves):** Now $x$ has both its 0-edge and 1-edge going to the same $y$-node. So $x$ is superfluous. Eliminate it:

\`\`\`
    y
   / \\
  0   1
  |   |
 [0] [1]
\`\`\`

**3.** The reduced OBDD is just the variable $y$ -- the formula $(x \\land y) \\lor (\\neg x \\land y)$ is equivalent to simply $y$.`,
  },
  {
    id: 'ls-obdd-3',
    courseId: 'logic-sets-ai',
    topic: 'OBDDs',
    difficulty: 'medium',
    question: `State the three reduction rules C1, C2, and C3 for converting a binary decision diagram (BDD) into a reduced ordered BDD (OBDD).

For each rule, briefly explain what it does and when it applies.`,
    answer: `**Rule C1: Collapse identical leaves.**

If the BDD contains multiple leaf nodes with the same value (both labeled 0, or both labeled 1), merge them into a single leaf node. Redirect all edges that pointed to the duplicates to point to the single merged leaf.

*When it applies:* Whenever there are two or more leaf nodes with the same label.

**Rule C2: Eliminate superfluous non-leaves.**

If a non-leaf node $n$ has both its outgoing edges (0-edge and 1-edge) pointing to the **same** node $n'$, then $n$ is redundant -- the value of $n$'s variable does not affect the outcome. Eliminate $n$ and redirect all of $n$'s incoming edges to $n'$.

*When it applies:* Whenever a decision node has identical children (both edges lead to the same node).

**Rule C3: Remove duplicate non-leaves.**

If two non-leaf nodes are associated with the **same variable** and their 0-edges point to the same node AND their 1-edges point to the same node, then they represent the same sub-function. Merge them into one node and redirect all incoming edges accordingly.

*When it applies:* Whenever two internal nodes with the same variable label have identical left children and identical right children.

**A BDD is reduced** when none of C1, C2, or C3 can be applied. A reduced OBDD uniquely represents a Boolean function (given a fixed variable ordering).`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 11: BOOLEAN ALGEBRA (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-ba-1',
    courseId: 'logic-sets-ai',
    topic: 'Boolean Algebra',
    difficulty: 'easy',
    question: `List the axioms (laws) of Boolean algebra for the operators $+$ (OR), $\\cdot$ (AND), and $'$ (complement), and their names. Also state the correspondence between Boolean algebra notation and propositional logic notation.`,
    answer: `**Axioms of Boolean Algebra:**

| Law | First form | Second form (dual) |
|---|---|---|
| **Commutativity** | $x + y = y + x$ | $x \\cdot y = y \\cdot x$ |
| **Associativity** | $x + (y + z) = (x + y) + z$ | $x \\cdot (y \\cdot z) = (x \\cdot y) \\cdot z$ |
| **Idempotence** | $x + x = x$ | $x \\cdot x = x$ |
| **Distributivity** | $x + (y \\cdot z) = (x+y) \\cdot (x+z)$ | $x \\cdot (y + z) = (x \\cdot y) + (x \\cdot z)$ |
| **Complement** | $x + x' = 1$ | $x \\cdot x' = 0$ |
| **De Morgan** | $(x + y)' = x' \\cdot y'$ | $(x \\cdot y)' = x' + y'$ |
| **Identity** | $x + 0 = x$ | $x \\cdot 1 = x$ |
| **Domination** | $x + 1 = 1$ | $x \\cdot 0 = 0$ |
| **Involution** | $(x')' = x$ | |

**Correspondence:**

| Boolean Algebra | Propositional Logic | Set Theory |
|---|---|---|
| $+$ | $\\lor$ | $\\cup$ |
| $\\cdot$ | $\\land$ | $\\cap$ |
| $'$ | $\\neg$ | complement $'$ |
| $0$ | $\\bot$ (false) | $\\emptyset$ |
| $1$ | $\\top$ (true) | $U$ (universe) |`,
  },
  {
    id: 'ls-ba-2',
    courseId: 'logic-sets-ai',
    topic: 'Boolean Algebra',
    difficulty: 'medium',
    question: `Using the axioms of Boolean algebra, prove that if $y \\cdot x = z \\cdot x$ and $y \\cdot x' = z \\cdot x'$, then $y = z$.`,
    answer: `**Proof:**

Starting from $y$:

$$y = y \\cdot 1 \\qquad \\text{(Identity)}$$

$$= y \\cdot (x + x') \\qquad \\text{(Complement: } x + x' = 1\\text{)}$$

$$= y \\cdot x + y \\cdot x' \\qquad \\text{(Distributivity)}$$

$$= z \\cdot x + z \\cdot x' \\qquad \\text{(By assumptions)}$$

$$= z \\cdot (x + x') \\qquad \\text{(Distributivity)}$$

$$= z \\cdot 1 \\qquad \\text{(Complement)}$$

$$= z \\qquad \\text{(Identity)}$$

Therefore $y = z$. $\\blacksquare$`,
  },
  {
    id: 'ls-ba-3',
    courseId: 'logic-sets-ai',
    topic: 'Boolean Algebra',
    difficulty: 'hard',
    question: `A CNF is a conjunction of clauses (where each clause is a disjunction of literals).

1. Explain the criterion for determining whether a CNF is a tautology.
2. Apply this criterion to determine whether the following CNF is a tautology:

$$(p \\lor \\neg q \\lor r) \\land (\\neg p \\lor q) \\land (p \\lor q \\lor \\neg r)$$`,
    answer: `**1. Criterion for a CNF to be a tautology:**

A CNF $C_1 \\land C_2 \\land \\cdots \\land C_n$ is a tautology if and only if **every clause** $C_i$ is a tautology.

A clause (disjunction of literals) $\\ell_1 \\lor \\ell_2 \\lor \\cdots \\lor \\ell_k$ is a tautology if and only if it contains **complementary literals**, i.e., there exists a propositional variable $v$ such that both $v$ and $\\neg v$ appear in the clause.

This is because: a disjunction is only false if every disjunct is false, but if both $v$ and $\\neg v$ are present, at least one must be true under any valuation.

**2. Applying the criterion:**

**Clause 1:** $(p \\lor \\neg q \\lor r)$
- Contains $p$ (positive), $\\neg q$ (negative), $r$ (positive).
- No variable appears both positively and negatively.
- **Not a tautology.**

Since the very first clause is not a tautology, we can already conclude that the CNF is **not a tautology**.

(For completeness: Clause 2 $(\\neg p \\lor q)$ also lacks complementary pairs. Clause 3 $(p \\lor q \\lor \\neg r)$ also lacks complementary pairs.)`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 12: MATHEMATICAL INDUCTION (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-ind-1',
    courseId: 'logic-sets-ai',
    topic: 'Mathematical Induction',
    difficulty: 'easy',
    question: `Prove by mathematical induction that for all $n \\in \\mathbb{N}$ with $n \\geq 1$:

$$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$$`,
    answer: `**Proof by mathematical induction.**

**Base case ($n = 1$):**

$$\\text{LHS} = \\sum_{i=1}^{1} i = 1$$

$$\\text{RHS} = \\frac{1 \\cdot 2}{2} = 1$$

LHS = RHS. ✓

**Induction hypothesis (IH):** Assume the statement holds for some $n = k \\geq 1$:

$$\\sum_{i=1}^{k} i = \\frac{k(k+1)}{2}$$

**Induction step:** Prove the statement for $n = k + 1$:

$$\\sum_{i=1}^{k+1} i = \\left(\\sum_{i=1}^{k} i\\right) + (k+1)$$

$$= \\frac{k(k+1)}{2} + (k+1) \\qquad \\text{(by IH)}$$

$$= \\frac{k(k+1) + 2(k+1)}{2}$$

$$= \\frac{(k+1)(k+2)}{2}$$

$$= \\frac{(k+1)((k+1)+1)}{2}$$

This is exactly the formula with $n = k+1$. ✓

By the principle of mathematical induction, the formula holds for all $n \\geq 1$. $\\blacksquare$`,
  },
  {
    id: 'ls-ind-2',
    courseId: 'logic-sets-ai',
    topic: 'Mathematical Induction',
    difficulty: 'medium',
    question: `Prove by mathematical induction that for all $n \\in \\mathbb{N}$:

$$\\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$$`,
    answer: `**Proof by mathematical induction.**

**Base case ($n = 0$):**

$$\\text{LHS} = \\sum_{i=0}^{0} 2^i = 2^0 = 1$$

$$\\text{RHS} = 2^{0+1} - 1 = 2 - 1 = 1$$

LHS = RHS. ✓

**Induction hypothesis (IH):** Assume for some $n = k \\geq 0$:

$$\\sum_{i=0}^{k} 2^i = 2^{k+1} - 1$$

**Induction step:** Prove for $n = k + 1$:

$$\\sum_{i=0}^{k+1} 2^i = \\left(\\sum_{i=0}^{k} 2^i\\right) + 2^{k+1}$$

$$= (2^{k+1} - 1) + 2^{k+1} \\qquad \\text{(by IH)}$$

$$= 2 \\cdot 2^{k+1} - 1$$

$$= 2^{k+2} - 1$$

$$= 2^{(k+1)+1} - 1$$

This matches the formula for $n = k+1$. ✓

By mathematical induction, the formula holds for all $n \\geq 0$. $\\blacksquare$`,
  },
  {
    id: 'ls-ind-3',
    courseId: 'logic-sets-ai',
    topic: 'Mathematical Induction',
    difficulty: 'hard',
    question: `Prove by mathematical induction that for all $n \\in \\mathbb{N}$ with $n \\geq 1$:

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$`,
    answer: `**Proof by mathematical induction.**

**Base case ($n = 1$):**

$$\\text{LHS} = 1^2 = 1$$

$$\\text{RHS} = \\frac{1 \\cdot 2 \\cdot 3}{6} = \\frac{6}{6} = 1$$

LHS = RHS. ✓

**Induction hypothesis (IH):** Assume for some $k \\geq 1$:

$$\\sum_{i=1}^{k} i^2 = \\frac{k(k+1)(2k+1)}{6}$$

**Induction step:** Prove for $n = k + 1$:

$$\\sum_{i=1}^{k+1} i^2 = \\left(\\sum_{i=1}^{k} i^2\\right) + (k+1)^2$$

$$= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2 \\qquad \\text{(by IH)}$$

Factor out $(k+1)$:

$$= (k+1) \\left[\\frac{k(2k+1)}{6} + (k+1)\\right]$$

$$= (k+1) \\cdot \\frac{k(2k+1) + 6(k+1)}{6}$$

Expand the numerator:

$$k(2k+1) + 6(k+1) = 2k^2 + k + 6k + 6 = 2k^2 + 7k + 6$$

Factor: $2k^2 + 7k + 6 = (k+2)(2k+3)$.

Therefore:

$$= \\frac{(k+1)(k+2)(2k+3)}{6}$$

$$= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}$$

This matches the formula for $n = k+1$. ✓

By mathematical induction, the formula holds for all $n \\geq 1$. $\\blacksquare$`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 13: PARSE TREES (1 question)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-pt-1',
    courseId: 'logic-sets-ai',
    topic: 'Parse Trees',
    difficulty: 'easy',
    question: `Draw the parse tree for the formula:

$$p \\wedge q \\vee \\neg r \\to p$$

Identify the main connective and all sub-formulas. Remember that operator priority (from strongest to weakest binding) is: $\\neg$, $\\wedge$, $\\vee$, $\\oplus$, $\\to$, $\\leftrightarrow$.`,
    answer: `First, add implicit parentheses according to operator priority:

$$((p \\wedge q) \\vee (\\neg r)) \\to p$$

**Main connective:** $\\to$ (implication) — it has the lowest binding strength and is not inside parentheses.

**Parse tree:**

\`\`\`
         →
        / \\
       ∨    p
      / \\
     ∧    ¬
    / \\   |
   p   q   r
\`\`\`

**Sub-formulas (from leaves to root):**
1. $p$, $q$, $r$ (atomic)
2. $\\neg r$
3. $p \\wedge q$
4. $(p \\wedge q) \\vee \\neg r$
5. $((p \\wedge q) \\vee \\neg r) \\to p$ (the full formula)`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 14: TRUTH TABLES & SEMANTIC PROPERTIES (1 question)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-tt-1',
    courseId: 'logic-sets-ai',
    topic: 'Truth Tables & Semantic Properties',
    difficulty: 'medium',
    question: `Construct the truth table for the formula:

$$((p \\to q) \\wedge (q \\to r)) \\to (p \\to r)$$

Classify this formula as a tautology, contradiction, contingency, or satisfiable. Justify your answer.`,
    answer: `**Truth table:**

| $p$ | $q$ | $r$ | $p \\to q$ | $q \\to r$ | $(p \\to q) \\wedge (q \\to r)$ | $p \\to r$ | Full formula |
|---|---|---|---|---|---|---|---|
| T | T | T | T | T | T | T | T |
| T | T | F | T | F | F | F | T |
| T | F | T | F | T | F | T | T |
| T | F | F | F | T | F | F | T |
| F | T | T | T | T | T | T | T |
| F | T | F | T | F | F | T | T |
| F | F | T | T | T | T | T | T |
| F | F | F | T | T | T | T | T |

The formula is **T** in every row.

**Classification:** This is a **tautology** (valid formula). It is true under every valuation. It is also satisfiable (trivially, since every tautology is satisfiable).

This formula represents the **hypothetical syllogism** (transitivity of implication): if $p$ implies $q$ and $q$ implies $r$, then $p$ implies $r$.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 15: DNF CONVERSION (1 question)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-dnf-1',
    courseId: 'logic-sets-ai',
    topic: 'DNF Conversion',
    difficulty: 'medium',
    question: `Using the **truth table method**, construct a formula in DNF that is semantically equivalent to:

$$(p \\to q) \\wedge (q \\to r)$$`,
    answer: `**Step 1: Build the truth table.**

| $p$ | $q$ | $r$ | $p \\to q$ | $q \\to r$ | $(p \\to q) \\wedge (q \\to r)$ |
|---|---|---|---|---|---|
| T | T | T | T | T | **T** |
| T | T | F | T | F | F |
| T | F | T | F | T | F |
| T | F | F | F | T | F |
| F | T | T | T | T | **T** |
| F | T | F | T | F | F |
| F | F | T | T | T | **T** |
| F | F | F | T | T | **T** |

**Step 2:** The formula is true in rows 1, 5, 7, and 8. For each true row, form a conjunction:

- Row 1: $p = T, q = T, r = T \\Rightarrow p \\wedge q \\wedge r$
- Row 5: $p = F, q = T, r = T \\Rightarrow \\neg p \\wedge q \\wedge r$
- Row 7: $p = F, q = F, r = T \\Rightarrow \\neg p \\wedge \\neg q \\wedge r$
- Row 8: $p = F, q = F, r = F \\Rightarrow \\neg p \\wedge \\neg q \\wedge \\neg r$

**DNF:** $(p \\wedge q \\wedge r) \\vee (\\neg p \\wedge q \\wedge r) \\vee (\\neg p \\wedge \\neg q \\wedge r) \\vee (\\neg p \\wedge \\neg q \\wedge \\neg r)$`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 16: SHEFFER STROKE (1 question)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-ss-1',
    courseId: 'logic-sets-ai',
    topic: 'Sheffer Stroke',
    difficulty: 'medium',
    question: `The Sheffer stroke (NAND) $\\phi \\mid \\psi \\equiv \\neg(\\phi \\wedge \\psi)$ is functionally complete.

Express the following using **only** the Sheffer stroke $\\mid$:

1. $\\neg p$
2. $p \\wedge q$
3. $p \\vee q$
4. $p \\to q$`,
    answer: `**1. Negation:** $\\neg p \\equiv p \\mid p$

Verification: $p \\mid p = \\neg(p \\wedge p) = \\neg p$. ✓

**2. Conjunction:** $p \\wedge q \\equiv (p \\mid q) \\mid (p \\mid q)$

Verification: $(p \\mid q) \\mid (p \\mid q) = \\neg(p \\mid q) = \\neg\\neg(p \\wedge q) = p \\wedge q$. ✓

**3. Disjunction:** $p \\vee q \\equiv (p \\mid p) \\mid (q \\mid q)$

Verification: $(p \\mid p) \\mid (q \\mid q) = \\neg p \\mid \\neg q = \\neg(\\neg p \\wedge \\neg q) = p \\vee q$ (by De Morgan). ✓

**4. Implication:** $p \\to q \\equiv p \\mid (q \\mid q)$

Verification: $p \\mid (q \\mid q) = p \\mid \\neg q = \\neg(p \\wedge \\neg q) = \\neg p \\vee q = p \\to q$. ✓`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TOPIC 17: PREDICATE LOGIC (2 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ls-pl-1',
    courseId: 'logic-sets-ai',
    topic: 'Predicate Logic',
    difficulty: 'medium',
    question: `Translate the following English sentences into predicate logic formulas, using the predicates $S(x)$ = "$x$ is a student", $P(x)$ = "$x$ passes the exam", and $L(x, y)$ = "$x$ likes $y$".

1. Every student passes the exam.
2. Some student does not pass the exam.
3. There is a student who likes every other student.
4. No student likes every student.`,
    answer: `**1.** "Every student passes the exam."

$$\\forall x\\, (S(x) \\to P(x))$$

**2.** "Some student does not pass the exam."

$$\\exists x\\, (S(x) \\wedge \\neg P(x))$$

Note: This is the negation of (1): $\\neg \\forall x\\, (S(x) \\to P(x)) \\equiv \\exists x\\, (S(x) \\wedge \\neg P(x))$.

**3.** "There is a student who likes every other student."

$$\\exists x\\, (S(x) \\wedge \\forall y\\, ((S(y) \\wedge y \\neq x) \\to L(x, y)))$$

**4.** "No student likes every student."

$$\\neg \\exists x\\, (S(x) \\wedge \\forall y\\, (S(y) \\to L(x, y)))$$

Equivalently: $\\forall x\\, (S(x) \\to \\exists y\\, (S(y) \\wedge \\neg L(x, y)))$.`,
  },
  {
    id: 'ls-pl-2',
    courseId: 'logic-sets-ai',
    topic: 'Predicate Logic',
    difficulty: 'hard',
    question: `Given the model $\\mathcal{M}$ with domain $D = \\{a, b, c\\}$ and interpretations:
- $P^{\\mathcal{M}} = \\{a, c\\}$
- $Q^{\\mathcal{M}} = \\{b\\}$
- $R^{\\mathcal{M}} = \\{(a, b), (b, c), (c, a)\\}$

Determine the truth value of each formula in $\\mathcal{M}$:
1. $\\forall x\\, (P(x) \\vee Q(x))$
2. $\\exists x\\, (P(x) \\wedge Q(x))$
3. $\\forall x\\, \\exists y\\, R(x, y)$
4. $\\exists x\\, \\forall y\\, R(x, y)$`,
    answer: `**1.** $\\forall x\\, (P(x) \\vee Q(x))$

Check each element:
- $x = a$: $P(a) \\vee Q(a) = T \\vee F = T$ ✓
- $x = b$: $P(b) \\vee Q(b) = F \\vee T = T$ ✓
- $x = c$: $P(c) \\vee Q(c) = T \\vee F = T$ ✓

All elements satisfy the formula. **TRUE.**

**2.** $\\exists x\\, (P(x) \\wedge Q(x))$

- $x = a$: $T \\wedge F = F$
- $x = b$: $F \\wedge T = F$
- $x = c$: $T \\wedge F = F$

No element satisfies both $P$ and $Q$. **FALSE.**

**3.** $\\forall x\\, \\exists y\\, R(x, y)$

For each $x$, does there exist a $y$ such that $R(x, y)$?
- $x = a$: $R(a, b) = T$ ✓ (take $y = b$)
- $x = b$: $R(b, c) = T$ ✓ (take $y = c$)
- $x = c$: $R(c, a) = T$ ✓ (take $y = a$)

**TRUE.**

**4.** $\\exists x\\, \\forall y\\, R(x, y)$

Is there an $x$ related to every $y$?
- $x = a$: $R(a, a) = F$. No.
- $x = b$: $R(b, a) = F$. No.
- $x = c$: $R(c, b) = F$. No.

**FALSE.**

Note: This illustrates that $\\forall x\\, \\exists y\\, R(x,y)$ does NOT imply $\\exists x\\, \\forall y\\, R(x,y)$.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 1 — DATA TYPES & VARIABLES (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-1',
    courseId: 'intro-python-ai',
    topic: 'Data Types & Variables',
    difficulty: 'medium',
    question: `Write a function \`convert_types(items)\` that takes a list of strings and returns a new list where each element is converted to:
- \`int\` if it represents a whole number (e.g. \`"42"\`)
- \`float\` if it represents a decimal number (e.g. \`"3.14"\`)
- \`str\` if it cannot be converted (e.g. \`"hello"\`)

**Example:**

\`\`\`python
convert_types(["42", "3.14", "hello", "0", "2.0"])
# → [42, 3.14, "hello", 0, 2.0]
\`\`\`

**Hint:** Think about how you can distinguish between integers and floats before attempting conversion. What happens if a conversion fails?`,
    answer: `\`\`\`python
def convert_types(items):
    result = []
    for item in items:
        try:
            if '.' in item:
                result.append(float(item))
            else:
                result.append(int(item))
        except ValueError:
            result.append(item)
    return result
\`\`\`

**How it works:**

1. We iterate over each string in the input list.
2. If the string contains a \`'.'\`, we attempt to convert it to a \`float\`.
3. If there is no \`'.'\`, we attempt to convert it to an \`int\`.
4. If either conversion raises a \`ValueError\` (e.g. for \`"hello"\`), we keep the original string.

**Key concepts:**
- **try/except** for safe type conversion (EAFP — Easier to Ask Forgiveness than Permission)
- Checking for \`'.'\` to distinguish float-like strings from int-like strings
- Building a new list rather than modifying the input (no side effects)`,
  },
  {
    id: 'pq-py-2',
    courseId: 'intro-python-ai',
    topic: 'Data Types & Variables',
    difficulty: 'easy',
    question: `Write a function \`string_stats(text)\` that takes a string and returns a dictionary with three keys:
- \`"upper"\`: the number of uppercase letters
- \`"lower"\`: the number of lowercase letters
- \`"spaces"\`: the number of spaces

**Example:**

\`\`\`python
string_stats("Hello World")
# → {"upper": 2, "lower": 8, "spaces": 1}

string_stats("ABC def  ")
# → {"upper": 3, "lower": 3, "spaces": 3}
\`\`\`

**Hint:** Python strings have built-in methods \`.isupper()\` and \`.islower()\` that check individual characters.`,
    answer: `\`\`\`python
def string_stats(text):
    upper = 0
    lower = 0
    spaces = 0
    for char in text:
        if char.isupper():
            upper += 1
        elif char.islower():
            lower += 1
        elif char == ' ':
            spaces += 1
    return {"upper": upper, "lower": lower, "spaces": spaces}
\`\`\`

**How it works:**

1. Initialize three counters to zero.
2. Loop through every character in the string.
3. Use \`.isupper()\` to check for uppercase letters, \`.islower()\` for lowercase letters, and \`== ' '\` for spaces.
4. Return a dictionary with the three counts.

**Key concepts:**
- Iterating over characters in a string with \`for char in text\`
- String methods \`.isupper()\` and \`.islower()\` return \`True\`/\`False\` for individual characters
- Building and returning a dictionary literal`,
  },
  {
    id: 'pq-py-3',
    courseId: 'intro-python-ai',
    topic: 'Data Types & Variables',
    difficulty: 'medium',
    question: `Write a function \`swap_case_at(text, index)\` that takes a string and an index, and returns a new string with the case of the character at that index swapped (upper → lower, lower → upper).

If the index is out of range, or the character at that index is not a letter, return the original string unchanged.

**Examples:**

\`\`\`python
swap_case_at("Hello", 0)   # → "hello"
swap_case_at("Hello", 1)   # → "HEllo"
swap_case_at("Hello", 10)  # → "Hello"   (out of range)
swap_case_at("Hi 5", 2)    # → "Hi 5"    (space, not a letter)
\`\`\`

**Hint:** Remember that strings in Python are immutable — you cannot change a character in place. You need to build a new string.`,
    answer: `\`\`\`python
def swap_case_at(text, index):
    if index < 0 or index >= len(text):
        return text
    if not text[index].isalpha():
        return text

    char = text[index]
    if char.isupper():
        swapped = char.lower()
    else:
        swapped = char.upper()

    return text[:index] + swapped + text[index + 1:]
\`\`\`

**How it works:**

1. First check if \`index\` is within bounds. If not, return the original string.
2. Check if the character at the index is a letter using \`.isalpha()\`. If not, return original.
3. Swap the case: if uppercase, make lowercase and vice versa.
4. Build the new string using **slicing**: everything before the index + the swapped character + everything after the index.

**Key concepts:**
- Strings are **immutable** in Python — you cannot do \`text[index] = 'x'\`
- String slicing: \`text[:index]\` gives characters before, \`text[index + 1:]\` gives characters after
- \`.isalpha()\`, \`.isupper()\`, \`.islower()\`, \`.upper()\`, \`.lower()\` are useful string methods`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 2 — CONDITIONALS & LOOPS (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-4',
    courseId: 'intro-python-ai',
    topic: 'Conditionals & Loops',
    difficulty: 'medium',
    question: `Write a function \`summer_clothes(temp, sunny=False, rainy=False, windy=False)\` that determines whether you should wear summer clothes based on the following rules:

1. The **base threshold** is 20°C — if the effective temperature is ≥ 20, wear summer clothes.
2. If it is **sunny**, add a bonus of **+5** to the effective temperature.
3. If it is **windy** OR **rainy**, subtract a penalty of **-5** from the effective temperature.
4. **Rain cancels the sunny bonus** — if it is both sunny and rainy, do NOT add the +5 sunny bonus.
5. If it is **both rainy AND windy**, **never** wear summer clothes (return \`False\` immediately, regardless of temperature).

The function should return \`True\` if you should wear summer clothes, \`False\` otherwise.

**Examples:**

\`\`\`python
summer_clothes(18, sunny=True, rainy=False, windy=False)  # → True  (18 + 5 = 23 ≥ 20)
summer_clothes(25, sunny=False, rainy=True, windy=True)    # → False (both rainy & windy)
summer_clothes(22, sunny=True, rainy=True, windy=False)    # → False (22 - 5 = 17, no sunny bonus because rainy)
summer_clothes(30, sunny=False, rainy=False, windy=True)   # → True  (30 - 5 = 25 ≥ 20)
\`\`\``,
    answer: `\`\`\`python
def summer_clothes(temp, sunny=False, rainy=False, windy=False):
    # Rule 5: both rainy and windy → never summer clothes
    if rainy and windy:
        return False

    effective_temp = temp

    # Rule 2 & 4: sunny bonus only if NOT raining
    if sunny and not rainy:
        effective_temp += 5

    # Rule 3: wind or rain penalty
    if windy or rainy:
        effective_temp -= 5

    # Rule 1: threshold check
    return effective_temp >= 20
\`\`\`

**How it works:**

1. **Check rule 5 first** — if both rainy and windy, return \`False\` immediately. This must be checked before any other logic.
2. Apply the sunny bonus (+5) only if it is sunny AND not rainy (rule 4 cancels rule 2 when raining).
3. Apply the wind/rain penalty (-5) if either is true.
4. Compare the effective temperature against the threshold (20).

**Key concepts:**
- **Order of checks matters** — the "never" rule must be checked first
- **Default parameter values** (\`sunny=False\`) make the function flexible
- Combining boolean conditions with \`and\`, \`or\`, \`not\``,
  },
  {
    id: 'pq-py-5',
    courseId: 'intro-python-ai',
    topic: 'Conditionals & Loops',
    difficulty: 'medium',
    question: `Write two functions:

1. \`is_prime(n)\` — returns \`True\` if \`n\` is a prime number, \`False\` otherwise.
2. \`primes_up_to(limit)\` — returns a tuple of (list_of_primes, sum_of_primes) for all primes up to and including \`limit\`.

**Examples:**

\`\`\`python
is_prime(7)    # → True
is_prime(1)    # → False
is_prime(4)    # → False

primes_up_to(10)  # → ([2, 3, 5, 7], 17)
primes_up_to(20)  # → ([2, 3, 5, 7, 11, 13, 17, 19], 77)
\`\`\`

**Hint:** A prime number is greater than 1 and divisible only by 1 and itself. You can check divisibility by testing all numbers from 2 to n-1.`,
    answer: `\`\`\`python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


def primes_up_to(limit):
    primes = []
    total = 0
    for num in range(2, limit + 1):
        if is_prime(num):
            primes.append(num)
            total += num
    return (primes, total)
\`\`\`

**How it works:**

**\`is_prime(n)\`:**
1. If \`n < 2\`, it is not prime (by definition, primes are ≥ 2).
2. Loop from 2 to \`n - 1\`. If any number divides \`n\` evenly (\`n % i == 0\`), then \`n\` is not prime.
3. If no divisor is found, \`n\` is prime.

**\`primes_up_to(limit)\`:**
1. Loop through all numbers from 2 to \`limit\` (inclusive).
2. Use \`is_prime()\` to check each number.
3. Build a list of primes and keep a running sum.
4. Return both as a tuple.

**Key concepts:**
- **Function reuse** — \`primes_up_to\` calls \`is_prime\`
- **Tuples** for returning multiple values
- The modulo operator \`%\` for divisibility checking
- Note: This is an O(n²) approach; a more efficient version would only check up to \\(\\sqrt{n}\\)`,
  },
  {
    id: 'pq-py-6',
    courseId: 'intro-python-ai',
    topic: 'Conditionals & Loops',
    difficulty: 'easy',
    question: `Write a function \`multiplication_table(a, b, c)\` that prints a multiplication table.

For each \`i\` in the range \`[a, b)\` (inclusive of \`a\`, exclusive of \`b\`):
- For each \`j\` in the range \`[1, c)\` (from 1, exclusive of \`c\`):
  - Print \`"i * j = result"\`
- After printing all multiplications for a given \`i\`, print the value of \`i\` alone on a new line.

**Example:**

\`\`\`python
multiplication_table(2, 4, 3)
\`\`\`

**Output:**
\`\`\`
2 * 1 = 2
2 * 2 = 4
2
3 * 1 = 3
3 * 2 = 6
3
\`\`\``,
    answer: `\`\`\`python
def multiplication_table(a, b, c):
    for i in range(a, b):
        for j in range(1, c):
            print(f"{i} * {j} = {i * j}")
        print(i)
\`\`\`

**How it works:**

1. The outer loop iterates \`i\` from \`a\` to \`b - 1\` (range is exclusive of the end).
2. The inner loop iterates \`j\` from \`1\` to \`c - 1\`.
3. For each combination, we print the multiplication using an **f-string**.
4. After the inner loop completes for each \`i\`, we print \`i\` alone.

**Key concepts:**
- **Nested for loops** — the inner loop runs completely for each iteration of the outer loop
- **f-strings** (\`f"..."\`) for clean string formatting
- \`range(a, b)\` is **inclusive** of \`a\` and **exclusive** of \`b\`
- The \`print(i)\` is inside the outer loop but outside the inner loop — indentation matters!`,
  },
  {
    id: 'pq-py-7',
    courseId: 'intro-python-ai',
    topic: 'Conditionals & Loops',
    difficulty: 'medium',
    question: `Write a function \`capitalize_name(name)\` that capitalizes specific letters in a name:

- If the name has **4 or more characters**, capitalize the **1st** and **4th** characters (indices 0 and 3), and lowercase the rest.
- If the name has **fewer than 4 characters**, return the entire name in uppercase.

**Examples:**

\`\`\`python
capitalize_name("macdonald")  # → "MacDonald"
capitalize_name("mcduck")     # → "McdUck"
capitalize_name("bob")        # → "BOB"
capitalize_name("al")         # → "AL"
\`\`\`

**Hint:** Use \`enumerate()\` to track both the index and character as you iterate.`,
    answer: `\`\`\`python
def capitalize_name(name):
    if len(name) < 4:
        return name.upper()

    result = ""
    for i, char in enumerate(name):
        if i == 0 or i == 3:
            result += char.upper()
        else:
            result += char.lower()
    return result
\`\`\`

**How it works:**

1. First check the length: if fewer than 4 characters, return the whole name uppercased.
2. For longer names, iterate with \`enumerate()\` to get both the index \`i\` and the character \`char\`.
3. At indices 0 and 3, uppercase the character; at all other indices, lowercase it.
4. Build the result string by concatenation.

**Key concepts:**
- \`enumerate()\` gives you \`(index, value)\` pairs — very useful when you need both
- String building via concatenation (\`result += char\`)
- \`.upper()\` and \`.lower()\` string methods work on individual characters too`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 3 — FUNCTIONS & SCOPE (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-8',
    courseId: 'intro-python-ai',
    topic: 'Functions & Scope',
    difficulty: 'medium',
    question: `Write two functions:

1. \`do_twice(func, arg)\` — calls \`func(arg)\` two times.
2. \`chop(t)\` — removes the first element of a list **in place** (modifies the original list) and returns \`None\`.

Then show what happens when you run:

\`\`\`python
my_list = [1, 2, 3, 4, 5]
do_twice(chop, my_list)
print(my_list)
\`\`\`

**Expected output:**

\`\`\`
[3, 4, 5]
\`\`\`

**Hint:** Think about why \`chop\` can modify \`my_list\` even though it is called inside \`do_twice\`. What does "passed by reference" mean for mutable objects?`,
    answer: `\`\`\`python
def do_twice(func, arg):
    func(arg)
    func(arg)


def chop(t):
    del t[0]


my_list = [1, 2, 3, 4, 5]
do_twice(chop, my_list)
print(my_list)  # [3, 4, 5]
\`\`\`

**How it works:**

1. \`do_twice\` is a **higher-order function** — it takes another function as an argument and calls it twice.
2. \`chop\` uses \`del t[0]\` to remove the first element of the list **in place**.
3. When \`do_twice(chop, my_list)\` runs:
   - First call: \`chop([1, 2, 3, 4, 5])\` → list becomes \`[2, 3, 4, 5]\`
   - Second call: \`chop([2, 3, 4, 5])\` → list becomes \`[3, 4, 5]\`

**Key concepts:**
- **Lists are mutable** — when you pass a list to a function, the function can modify the original list. This is because Python passes a reference to the list object, not a copy.
- **Higher-order functions** — functions that accept other functions as arguments
- \`del t[0]\` removes the first element in-place, unlike \`t[1:]\` which creates a new list
- \`chop\` returns \`None\` implicitly (it modifies the list as a side effect)`,
  },
  {
    id: 'pq-py-9',
    courseId: 'intro-python-ai',
    topic: 'Functions & Scope',
    difficulty: 'easy',
    question: `Write two functions:

1. \`almost_passing(grade)\` — returns \`True\` if the grade is in the range [5.3, 5.5) (i.e., at least 5.3 but strictly less than 5.5). These students "almost passed."
2. \`find_almost_passing(grades)\` — takes a list of numeric grades and returns a tuple \`(count, indices)\` where \`count\` is the number of almost-passing grades and \`indices\` is a list of their positions in the input list.

**Examples:**

\`\`\`python
almost_passing(5.4)   # → True
almost_passing(5.5)   # → False (not strictly less than 5.5)
almost_passing(5.0)   # → False

find_almost_passing([8.0, 5.4, 6.1, 5.3, 4.0, 5.49])
# → (3, [1, 3, 5])
\`\`\``,
    answer: `\`\`\`python
def almost_passing(grade):
    return 5.3 <= grade < 5.5


def find_almost_passing(grades):
    indices = []
    count = 0
    for i, grade in enumerate(grades):
        if almost_passing(grade):
            count += 1
            indices.append(i)
    return (count, indices)
\`\`\`

**How it works:**

**\`almost_passing(grade)\`:**
- Uses Python's **chained comparison**: \`5.3 <= grade < 5.5\` checks both conditions in one expression.
- This is equivalent to \`grade >= 5.3 and grade < 5.5\` but more readable.

**\`find_almost_passing(grades)\`:**
- Uses \`enumerate()\` to get both the index and the grade as we loop.
- Calls \`almost_passing()\` on each grade (function reuse).
- Builds a list of indices and keeps a running count.
- Returns both as a tuple.

**Key concepts:**
- **Chained comparisons** (\`a <= x < b\`) — a Pythonic way to check ranges
- **\`enumerate()\`** for getting index-value pairs
- **Function decomposition** — splitting logic into small, reusable functions`,
  },
  {
    id: 'pq-py-10',
    courseId: 'intro-python-ai',
    topic: 'Functions & Scope',
    difficulty: 'medium',
    question: `Write two functions:

1. \`count_word_vowels(word)\` — returns the number of vowels (a, e, i, o, u, both upper- and lowercase) in a word.
2. \`more_vowels(word, word_list)\` — takes a word and a list of words, and returns a new list containing only the words from \`word_list\` that have **more vowels** than the input \`word\`.

**Examples:**

\`\`\`python
count_word_vowels("hello")       # → 2
count_word_vowels("AEIOU")       # → 5

more_vowels("hi", ["hello", "sky", "a", "queue", "gym"])
# → ["hello", "queue"]
# "hi" has 1 vowel; "hello" has 2, "sky" has 0, "a" has 1, "queue" has 4, "gym" has 0
\`\`\``,
    answer: `\`\`\`python
def count_word_vowels(word):
    count = 0
    for char in word:
        if char in "aeiouAEIOU":
            count += 1
    return count


def more_vowels(word, word_list):
    target_count = count_word_vowels(word)
    result = []
    for w in word_list:
        if count_word_vowels(w) > target_count:
            result.append(w)
    return result
\`\`\`

**How it works:**

**\`count_word_vowels(word)\`:**
- Iterates through each character in the word.
- Checks if the character is in the string \`"aeiouAEIOU"\` — this handles both lower- and uppercase vowels.
- The \`in\` operator on a string checks for membership (substring of length 1).

**\`more_vowels(word, word_list)\`:**
- First counts the vowels in the target \`word\`.
- Then loops through \`word_list\`, keeping only words with a higher vowel count.
- **Reuses** \`count_word_vowels()\` — no duplicated logic.

**Key concepts:**
- \`char in "aeiouAEIOU"\` — the \`in\` operator for string membership
- Function reuse: \`more_vowels\` calls \`count_word_vowels\` for both the target word and each candidate
- Building and returning a filtered list`,
  },
  {
    id: 'pq-py-11',
    courseId: 'intro-python-ai',
    topic: 'Functions & Scope',
    difficulty: 'easy',
    question: `Write a function \`apply_to_each(numbers, func)\` that takes a list of numbers and a function, applies the function to each element, and returns a new list with the results.

**Do not use \`map()\`.**

Then demonstrate your function by calling it with a **lambda** that squares each number.

**Examples:**

\`\`\`python
apply_to_each([1, 2, 3, 4], lambda x: x ** 2)
# → [1, 4, 9, 16]

apply_to_each([10, 20, 30], lambda x: x + 1)
# → [11, 21, 31]

apply_to_each([-3, 0, 3], abs)
# → [3, 0, 3]
\`\`\``,
    answer: `\`\`\`python
def apply_to_each(numbers, func):
    result = []
    for num in numbers:
        result.append(func(num))
    return result


# Demo with lambda:
squared = apply_to_each([1, 2, 3, 4], lambda x: x ** 2)
print(squared)  # [1, 4, 9, 16]
\`\`\`

**How it works:**

1. Create an empty result list.
2. Loop through each number in the input list.
3. Call \`func(num)\` — since \`func\` is a parameter, it can be any function.
4. Append the result to the output list.

**Key concepts:**
- **Higher-order functions** — \`apply_to_each\` takes a function as an argument
- **Lambda expressions** — \`lambda x: x ** 2\` is an anonymous (unnamed) function
- This is essentially what Python's built-in \`map()\` does, but we build it manually to understand the concept
- You can pass **any callable** — lambdas, named functions (like \`abs\`), or even methods`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 4 — LISTS & LIST COMPREHENSIONS (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-12',
    courseId: 'intro-python-ai',
    topic: 'Lists & List Comprehensions',
    difficulty: 'easy',
    question: `Julia wrote the following code using a regular loop:

\`\`\`python
result = []
for i in range(10):
    if i % 2 == 0:
        result.append((i, True))
    else:
        result.append((i, False))
\`\`\`

Rewrite Julia's loop as a **single list comprehension** that produces the same result: a list of tuples \`(number, is_even_boolean)\` for numbers 0 through 9.

**Expected output:**

\`\`\`python
[(0, True), (1, False), (2, True), (3, False), (4, True),
 (5, False), (6, True), (7, False), (8, True), (9, False)]
\`\`\`

**Hint:** You do not need an \`if/else\` in the comprehension — think about what \`i % 2 == 0\` evaluates to on its own.`,
    answer: `\`\`\`python
result = [(i, i % 2 == 0) for i in range(10)]
\`\`\`

**How it works:**

The expression \`i % 2 == 0\` is a **boolean expression** — it evaluates to \`True\` when \`i\` is even and \`False\` when \`i\` is odd. There is no need for an explicit \`if/else\`; the boolean expression itself IS the value.

- When \`i = 0\`: \`0 % 2 == 0\` → \`True\` → tuple is \`(0, True)\`
- When \`i = 1\`: \`1 % 2 == 0\` → \`False\` → tuple is \`(1, False)\`
- And so on...

**Key concepts:**
- **List comprehension syntax**: \`[expression for variable in iterable]\`
- Comparison operators (\`==\`) return **boolean values** (\`True\`/\`False\`) that can be used directly
- Tuples can be created inline inside comprehensions: \`(i, i % 2 == 0)\`
- This is more Pythonic than the explicit loop with \`if/else\``,
  },
  {
    id: 'pq-py-13',
    courseId: 'intro-python-ai',
    topic: 'Lists & List Comprehensions',
    difficulty: 'medium',
    question: `Write a function \`unique_strings(items)\` that takes a list of strings and returns a new list containing only the unique strings, **preserving the order of their first occurrence**.

You may use a \`set\` internally for tracking, but the **output must be a list** (not a set, since sets are unordered).

**Examples:**

\`\`\`python
unique_strings(["apple", "banana", "apple", "cherry", "banana", "date"])
# → ["apple", "banana", "cherry", "date"]

unique_strings(["a", "b", "a", "a", "c", "b"])
# → ["a", "b", "c"]
\`\`\`

**Hint:** Think about using a set as a "seen" tracker for O(1) lookups, while building a separate list for the ordered result.`,
    answer: `\`\`\`python
def unique_strings(items):
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result
\`\`\`

**How it works:**

1. Maintain a \`seen\` set that tracks which strings we have already encountered.
2. Maintain a \`result\` list that stores the unique strings in order.
3. For each string in the input:
   - If it is NOT in \`seen\`, add it to both \`seen\` and \`result\`.
   - If it IS in \`seen\`, skip it (it is a duplicate).
4. Return \`result\`.

**Why not just use \`set(items)\`?**
Converting to a set removes duplicates, but sets are **unordered** — you lose the original order. By using a set only for lookup and a list for output, we get both uniqueness and order preservation.

**Key concepts:**
- **Sets** have O(1) membership testing (\`in\` operator), making this solution efficient
- \`set.add()\` to insert elements into a set
- Preserving insertion order requires a separate list
- This is a common Python pattern for "unique with order"`,
  },
  {
    id: 'pq-py-14',
    courseId: 'intro-python-ai',
    topic: 'Lists & List Comprehensions',
    difficulty: 'easy',
    question: `Write a function \`filter_and_transform(numbers)\` that takes a list of integers and returns a new list containing the **squares** of all **positive odd numbers** from the input.

Use a **list comprehension**.

**Examples:**

\`\`\`python
filter_and_transform([1, -2, 3, 4, -5, 6, 7])
# → [1, 9, 49]
# Positive odd numbers are 1, 3, 7 → their squares are 1, 9, 49

filter_and_transform([-1, 0, 2, 4])
# → []
# No positive odd numbers
\`\`\``,
    answer: `\`\`\`python
def filter_and_transform(numbers):
    return [n ** 2 for n in numbers if n > 0 and n % 2 != 0]
\`\`\`

**How it works:**

The list comprehension has three parts:
- \`n ** 2\` — the **expression** (what to compute for each element)
- \`for n in numbers\` — the **iteration** (loop over input list)
- \`if n > 0 and n % 2 != 0\` — the **filter** (only include elements that match)

Step by step for \`[1, -2, 3, 4, -5, 6, 7]\`:
- \`1\`: positive (\`1 > 0\`) and odd (\`1 % 2 != 0\`) → include \`1 ** 2 = 1\`
- \`-2\`: not positive → skip
- \`3\`: positive and odd → include \`3 ** 2 = 9\`
- \`4\`: positive but even → skip
- \`-5\`: not positive → skip
- \`6\`: positive but even → skip
- \`7\`: positive and odd → include \`7 ** 2 = 49\`

**Key concepts:**
- **List comprehension with filter**: \`[expr for x in iterable if condition]\`
- Combining conditions with \`and\`
- \`n % 2 != 0\` checks for odd numbers
- \`n > 0\` checks for positive numbers`,
  },
  {
    id: 'pq-py-15',
    courseId: 'intro-python-ai',
    topic: 'Lists & List Comprehensions',
    difficulty: 'easy',
    question: `Write a function \`words_longer_than(words, min_length)\` that takes a list of words and a minimum length, and returns a new list containing only the words **longer than** \`min_length\`, converted to **uppercase**.

Use a **list comprehension**.

**Examples:**

\`\`\`python
words_longer_than(["hi", "hello", "hey", "wonderful", "ok"], 3)
# → ["HELLO", "WONDERFUL"]

words_longer_than(["cat", "dog", "elephant"], 2)
# → ["CAT", "DOG", "ELEPHANT"]
\`\`\``,
    answer: `\`\`\`python
def words_longer_than(words, min_length):
    return [word.upper() for word in words if len(word) > min_length]
\`\`\`

**How it works:**

- \`for word in words\` — iterate over each word in the list
- \`if len(word) > min_length\` — only include words whose length **exceeds** \`min_length\` (strictly greater than)
- \`word.upper()\` — transform the selected words to uppercase

For \`["hi", "hello", "hey", "wonderful", "ok"]\` with \`min_length=3\`:
- \`"hi"\`: length 2, not > 3 → skip
- \`"hello"\`: length 5, > 3 → include as \`"HELLO"\`
- \`"hey"\`: length 3, not > 3 (must be strictly greater) → skip
- \`"wonderful"\`: length 9, > 3 → include as \`"WONDERFUL"\`
- \`"ok"\`: length 2, not > 3 → skip

**Key concepts:**
- List comprehension combining **transformation** (\`.upper()\`) and **filtering** (\`if len(...) > ...\`)
- \`len()\` returns the length of a string
- \`.upper()\` converts a string to uppercase (returns a new string)`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 5 — DICTIONARIES & TUPLES (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-16',
    courseId: 'intro-python-ai',
    topic: 'Dictionaries & Tuples',
    difficulty: 'medium',
    question: `Write a function \`calculate_average_scores(students)\` that takes a nested dictionary of student scores and returns a dictionary of average scores rounded to 2 decimal places.

The input dictionary has the format:
\`\`\`python
{
    "Alice": {"math": 85, "english": 92, "science": 78},
    "Bob": {"math": 70, "english": 88, "science": 95},
    ...
}
\`\`\`

The output should map each student name to their average score:
\`\`\`python
{"Alice": 85.0, "Bob": 84.33}
\`\`\`

**Example:**

\`\`\`python
data = {
    "Alice": {"math": 85, "english": 92, "science": 78},
    "Bob": {"math": 70, "english": 88, "science": 95},
    "Charlie": {"math": 100, "english": 75}
}
calculate_average_scores(data)
# → {"Alice": 85.0, "Bob": 84.33, "Charlie": 87.5}
\`\`\``,
    answer: `\`\`\`python
def calculate_average_scores(students):
    averages = {}
    for name, subjects in students.items():
        avg = sum(subjects.values()) / len(subjects)
        averages[name] = round(avg, 2)
    return averages
\`\`\`

**How it works:**

1. Create an empty dictionary for the results.
2. Use \`.items()\` to iterate over each \`(name, subjects)\` pair in the input dictionary.
3. \`subjects\` is itself a dictionary (e.g., \`{"math": 85, "english": 92, "science": 78}\`).
4. \`subjects.values()\` gives the scores: \`[85, 92, 78]\`.
5. \`sum(subjects.values()) / len(subjects)\` computes the average.
6. \`round(avg, 2)\` rounds to 2 decimal places.

**Key concepts:**
- **Nested dictionaries** — a dictionary whose values are themselves dictionaries
- \`.items()\` returns key-value pairs for iteration
- \`.values()\` returns just the values of a dictionary
- \`sum()\` and \`len()\` for computing averages
- \`round(value, ndigits)\` for rounding`,
  },
  {
    id: 'pq-py-17',
    courseId: 'intro-python-ai',
    topic: 'Dictionaries & Tuples',
    difficulty: 'medium',
    question: `Write two functions:

1. \`get_student_info(student_id, data)\` — looks up a student by ID in a dictionary. Returns the student's info dict if found, or \`None\` if the ID does not exist.

2. \`top_n_students(people, n)\` — takes a dictionary of \`{name: score}\` and an integer \`n\`, and returns a list of the top \`n\` students sorted by score in **descending order**. Each element should be a tuple \`(name, score)\`.

**Examples:**

\`\`\`python
database = {
    101: {"name": "Alice", "grade": "A"},
    102: {"name": "Bob", "grade": "B"},
}
get_student_info(101, database)  # → {"name": "Alice", "grade": "A"}
get_student_info(999, database)  # → None

scores = {"Alice": 92, "Bob": 87, "Charlie": 95, "Diana": 88}
top_n_students(scores, 2)  # → [("Charlie", 95), ("Alice", 92)]
top_n_students(scores, 3)  # → [("Charlie", 95), ("Alice", 92), ("Diana", 88)]
\`\`\``,
    answer: `\`\`\`python
def get_student_info(student_id, data):
    if student_id in data:
        return data[student_id]
    return None


def top_n_students(people, n):
    sorted_students = sorted(
        people.items(),
        key=lambda item: item[1],
        reverse=True
    )
    return sorted_students[:n]
\`\`\`

**How it works:**

**\`get_student_info\`:**
- Uses the \`in\` operator to check if the key exists in the dictionary before accessing it.
- Returns \`None\` if the key is not found (avoids a \`KeyError\`).
- Alternatively, you could use \`data.get(student_id)\` which returns \`None\` by default.

**\`top_n_students\`:**
- \`people.items()\` returns pairs like \`[("Alice", 92), ("Bob", 87), ...]\`.
- \`sorted()\` with \`key=lambda item: item[1]\` sorts by the **score** (second element of each tuple).
- \`reverse=True\` sorts in **descending** order (highest first).
- \`[:n]\` slices the first \`n\` elements from the sorted list.

**Key concepts:**
- **Dictionary membership check**: \`key in dict\`
- \`sorted()\` with a **lambda key function** for custom sorting
- \`reverse=True\` for descending sort
- **Slicing** (\`[:n]\`) to get the first n elements`,
  },
  {
    id: 'pq-py-18',
    courseId: 'intro-python-ai',
    topic: 'Dictionaries & Tuples',
    difficulty: 'hard',
    question: `Write a function \`word_histogram(text)\` that takes a string of text and returns a tuple of two items:

1. A **set** of words that appear exactly once (unique words)
2. A **dictionary** mapping each word to its frequency count

Use \`re.findall(r"[a-zA-Z]+", text)\` to extract words (this handles punctuation). Convert all words to lowercase before counting.

**Example:**

\`\`\`python
import re

word_histogram("The cat sat on the mat. The cat was happy.")
# → (
#     {"sat", "on", "mat", "was", "happy"},        # words appearing exactly once
#     {"the": 3, "cat": 2, "sat": 1, "on": 1,
#      "mat": 1, "was": 1, "happy": 1}             # frequency dict
# )
\`\`\``,
    answer: `\`\`\`python
import re


def word_histogram(text):
    words = re.findall(r"[a-zA-Z]+", text)
    words = [w.lower() for w in words]

    # Build frequency dictionary
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1

    # Find unique words (appearing exactly once)
    unique = set()
    for word, count in freq.items():
        if count == 1:
            unique.add(word)

    return (unique, freq)
\`\`\`

**How it works:**

1. **Extract words**: \`re.findall(r"[a-zA-Z]+", text)\` finds all sequences of letters, ignoring punctuation and spaces.
2. **Normalize**: Convert all words to lowercase so "The" and "the" are counted as the same word.
3. **Count frequencies**: Use the \`.get(word, 0) + 1\` pattern:
   - \`freq.get(word, 0)\` returns the current count if the word exists, or \`0\` if it does not.
   - Adding 1 increments the count.
   - This avoids \`KeyError\` for new words.
4. **Find uniques**: Iterate over the frequency dictionary and collect words with count == 1 into a set.

**Key concepts:**
- \`re.findall()\` for extracting patterns from text
- The \`.get(key, default)\` method — safer than \`dict[key]\` for missing keys
- \`freq[word] = freq.get(word, 0) + 1\` — the standard counting pattern
- Sets for collecting unique items
- Returning a tuple of different data structures`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 6 — OOP (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-19',
    courseId: 'intro-python-ai',
    topic: 'OOP',
    difficulty: 'easy',
    question: `Create a class \`Artist\` with the following attributes and methods:

**Attributes (set in \`__init__\`):**
- \`name\` (str) — the artist's name
- \`country\` (str) — country of origin
- \`tags\` (set) — a set of genre tags (e.g., \`{"rock", "indie"}\`)
- \`listeners\` (int) — number of monthly listeners

**Methods:**
- \`__str__\` — returns a string in the format: \`"Artist: <name> (<country>) - <listeners> listeners"\`

Create two instances of \`Artist\` and print them.

**Example:**

\`\`\`python
a1 = Artist("Radiohead", "UK", {"rock", "alternative", "electronic"}, 15000000)
a2 = Artist("Stromae", "Belgium", {"pop", "hip-hop", "electronic"}, 9000000)
print(a1)  # Artist: Radiohead (UK) - 15000000 listeners
print(a2)  # Artist: Stromae (Belgium) - 9000000 listeners
\`\`\``,
    answer: `\`\`\`python
class Artist:
    def __init__(self, name, country, tags, listeners):
        self.name = name
        self.country = country
        self.tags = tags
        self.listeners = listeners

    def __str__(self):
        return f"Artist: {self.name} ({self.country}) - {self.listeners} listeners"


# Create two instances:
a1 = Artist("Radiohead", "UK", {"rock", "alternative", "electronic"}, 15000000)
a2 = Artist("Stromae", "Belgium", {"pop", "hip-hop", "electronic"}, 9000000)

print(a1)  # Artist: Radiohead (UK) - 15000000 listeners
print(a2)  # Artist: Stromae (Belgium) - 9000000 listeners
\`\`\`

**How it works:**

1. **\`__init__\`** is the **constructor** — it is called when you create a new instance with \`Artist(...)\`.
2. \`self\` refers to the instance being created. \`self.name = name\` stores the argument as an attribute of the object.
3. **\`__str__\`** is a **dunder method** (double underscore) that Python calls when you use \`print()\` or \`str()\` on an object.
4. The f-string in \`__str__\` formats the output nicely.

**Key concepts:**
- **Classes** define blueprints for objects
- **\`self\`** always refers to the current instance
- **\`__init__\`** initializes the object's state
- **\`__str__\`** controls how the object is displayed as a string
- **Sets** (\`{"rock", "indie"}\`) store unordered, unique elements — useful for tags/genres`,
  },
  {
    id: 'pq-py-20',
    courseId: 'intro-python-ai',
    topic: 'OOP',
    difficulty: 'medium',
    question: `Create two classes:

1. **\`MusicLibrary\`** — a general music library with:
   - Attribute \`artists\` (list) — initialized as an empty list
   - Method \`add_artist(artist)\` — adds an Artist object to the list
   - Method \`__str__\` — returns \`"MusicLibrary with <n> artists"\`

2. **\`GenreLibrary(MusicLibrary)\`** — a subclass that only accepts artists of a specific genre:
   - Additional attribute \`genre\` (str) — the genre this library is for
   - **Override** \`add_artist(artist)\` — only adds the artist if \`self.genre\` is in the artist's \`tags\` set. If not, print \`"<name> is not a <genre> artist"\`.

Use the \`Artist\` class from the previous question.

**Example:**

\`\`\`python
rock_lib = GenreLibrary("rock")
a1 = Artist("Radiohead", "UK", {"rock", "alternative"}, 15000000)
a2 = Artist("Stromae", "Belgium", {"pop", "hip-hop"}, 9000000)

rock_lib.add_artist(a1)  # Added
rock_lib.add_artist(a2)  # Prints: "Stromae is not a rock artist"
print(rock_lib)           # MusicLibrary with 1 artists
\`\`\``,
    answer: `\`\`\`python
class MusicLibrary:
    def __init__(self):
        self.artists = []

    def add_artist(self, artist):
        self.artists.append(artist)

    def __str__(self):
        return f"MusicLibrary with {len(self.artists)} artists"


class GenreLibrary(MusicLibrary):
    def __init__(self, genre):
        super().__init__()
        self.genre = genre

    def add_artist(self, artist):
        if self.genre in artist.tags:
            super().add_artist(artist)
        else:
            print(f"{artist.name} is not a {self.genre} artist")
\`\`\`

**How it works:**

**\`MusicLibrary\`:**
- Simple class with a list of artists, an \`add_artist\` method, and a \`__str__\` method.

**\`GenreLibrary(MusicLibrary)\`:**
- Inherits from \`MusicLibrary\` — it gets all the parent's methods and attributes.
- \`super().__init__()\` calls the parent's \`__init__\`, which initializes \`self.artists = []\`.
- **Overrides** \`add_artist\`: checks if the library's genre is in the artist's tags (\`self.genre in artist.tags\`).
- If the genre matches, it calls \`super().add_artist(artist)\` to use the parent's method.
- If not, it prints a rejection message.

**Key concepts:**
- **Inheritance**: \`class GenreLibrary(MusicLibrary)\` — GenreLibrary IS-A MusicLibrary
- **\`super()\`** — accesses the parent class's methods
- **Method overriding** — the subclass provides its own version of \`add_artist\`
- **\`in\` on sets** — \`self.genre in artist.tags\` checks set membership`,
  },
  {
    id: 'pq-py-21',
    courseId: 'intro-python-ai',
    topic: 'OOP',
    difficulty: 'hard',
    question: `Create two classes:

1. **\`BankAccount\`** with:
   - Attributes: \`owner\` (str), \`balance\` (float, default 0)
   - Method \`deposit(amount)\` — adds amount to balance. Raises \`ValueError\` if amount ≤ 0.
   - Method \`withdraw(amount)\` — subtracts amount from balance. Raises \`ValueError\` if amount ≤ 0 or if amount > balance (insufficient funds).
   - Method \`__str__\` — returns \`"<owner>'s account: $<balance:.2f>"\`

2. **\`SavingsAccount(BankAccount)\`** with:
   - Additional attribute: \`interest_rate\` (float, e.g. 0.05 for 5%)
   - Method \`apply_interest()\` — increases the balance by \`balance * interest_rate\`
   - **Override** \`withdraw\` — always raises \`ValueError("Withdrawals not allowed from savings account")\`

**Example:**

\`\`\`python
acc = BankAccount("Alice", 100)
acc.deposit(50)
print(acc)            # Alice's account: $150.00
acc.withdraw(30)
print(acc)            # Alice's account: $120.00

savings = SavingsAccount("Bob", 1000, 0.05)
savings.apply_interest()
print(savings)        # Bob's account: $1050.00
savings.withdraw(10)  # ValueError: Withdrawals not allowed from savings account
\`\`\``,
    answer: `\`\`\`python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self.balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount

    def __str__(self):
        return f"{self.owner}'s account: \${self.balance:.2f}"


class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0, interest_rate=0.0):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate

    def apply_interest(self):
        self.balance += self.balance * self.interest_rate

    def withdraw(self, amount):
        raise ValueError("Withdrawals not allowed from savings account")
\`\`\`

**How it works:**

**\`BankAccount\`:**
- Uses a default parameter \`balance=0\` so you can create an account with or without an initial balance.
- \`deposit\` and \`withdraw\` both validate input by raising \`ValueError\` for invalid amounts.
- \`withdraw\` also checks for sufficient funds.
- \`__str__\` uses \`:.2f\` format specifier to always show 2 decimal places.

**\`SavingsAccount(BankAccount)\`:**
- Inherits from \`BankAccount\` and calls \`super().__init__(owner, balance)\` to initialize the parent's attributes.
- Adds \`interest_rate\` as a new attribute.
- \`apply_interest()\` increases the balance by the interest amount.
- **Overrides** \`withdraw\` to always raise a \`ValueError\` — savings accounts do not allow withdrawals.

**Key concepts:**
- **Inheritance and \`super()\`** for code reuse
- **\`raise ValueError(...)\`** for input validation
- **Method overriding** — the subclass completely replaces the parent's \`withdraw\`
- **Default parameters** in \`__init__\`
- **f-string formatting** with \`:.2f\` for currency display`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 7 — FILE I/O & CSV (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-22',
    courseId: 'intro-python-ai',
    topic: 'File I/O & CSV',
    difficulty: 'medium',
    question: `Write a function \`read_poem(path)\` that reads a text file containing a poem and returns a cleaned list of all words in the poem.

The function should:
1. Open and read the file line by line
2. Remove all punctuation from each line (keep only letters and spaces)
3. Split each line into words
4. Convert all words to lowercase
5. Return a flat list of all words

You may use \`re.sub(r"[^a-zA-Z\\\\s]", "", line)\` to remove punctuation.

**Example:**

Given a file \`poem.txt\`:
\`\`\`
Roses are red,
Violets are blue!
Python is great.
\`\`\`

\`\`\`python
read_poem("poem.txt")
# → ["roses", "are", "red", "violets", "are", "blue", "python", "is", "great"]
\`\`\``,
    answer: `\`\`\`python
import re


def read_poem(path):
    words = []
    with open(path, 'r') as f:
        for line in f:
            cleaned = re.sub(r"[^a-zA-Z\\s]", "", line)
            line_words = cleaned.lower().split()
            words.extend(line_words)
    return words
\`\`\`

**How it works:**

1. **\`with open(path, 'r') as f\`** — opens the file for reading. The \`with\` statement ensures the file is properly closed when we are done, even if an error occurs.
2. **\`for line in f\`** — iterates over the file line by line (memory-efficient for large files).
3. **\`re.sub(r"[^a-zA-Z\\\\s]", "", line)\`** — removes all characters that are NOT letters or whitespace. The regex \`[^a-zA-Z\\\\s]\` matches any character that is not a letter or space, and replaces it with an empty string.
4. **\`.lower().split()\`** — converts to lowercase and splits on whitespace into a list of words.
5. **\`.extend()\`** — adds all words from the current line to the main list (unlike \`.append()\`, which would add a sub-list).

**Key concepts:**
- **\`with\` statement** — context manager for safe file handling
- **\`re.sub()\`** — regex substitution for text cleaning
- \`.split()\` with no arguments splits on any whitespace and removes empty strings
- \`.extend()\` vs \`.append()\` — extend flattens, append nests`,
  },
  {
    id: 'pq-py-23',
    courseId: 'intro-python-ai',
    topic: 'File I/O & CSV',
    difficulty: 'medium',
    question: `Write a function \`read_csv_artists(path)\` that reads a CSV file of music artists and returns a list of dictionaries.

The CSV file has headers: \`name,country,tags,listeners\`

Where:
- \`tags\` are semicolon-separated (e.g., \`"rock;indie;alternative"\`)
- \`listeners\` is an integer

Each artist should be represented as a dictionary:
\`\`\`python
{"name": str, "country": str, "tags": set, "listeners": int}
\`\`\`

Use \`csv.DictReader\` to read the file.

**Example CSV file (\`artists.csv\`):**
\`\`\`
name,country,tags,listeners
Radiohead,UK,rock;alternative;electronic,15000000
Stromae,Belgium,pop;hip-hop;electronic,9000000
\`\`\`

\`\`\`python
read_csv_artists("artists.csv")
# → [
#     {"name": "Radiohead", "country": "UK",
#      "tags": {"rock", "alternative", "electronic"}, "listeners": 15000000},
#     {"name": "Stromae", "country": "Belgium",
#      "tags": {"pop", "hip-hop", "electronic"}, "listeners": 9000000}
# ]
\`\`\``,
    answer: `\`\`\`python
import csv


def read_csv_artists(path):
    artists = []
    with open(path, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            artist = {
                "name": row["name"],
                "country": row["country"],
                "tags": set(row["tags"].split(";")),
                "listeners": int(row["listeners"])
            }
            artists.append(artist)
    return artists
\`\`\`

**How it works:**

1. **\`csv.DictReader(f)\`** — reads each row as an \`OrderedDict\` (dictionary) where keys are the column headers from the first row.
2. For each row:
   - \`row["name"]\` and \`row["country"]\` are used as-is (strings).
   - \`row["tags"].split(";")\` splits \`"rock;alternative;electronic"\` into \`["rock", "alternative", "electronic"]\`, then \`set(...)\` converts it to a set.
   - \`int(row["listeners"])\` converts the string \`"15000000"\` to an integer.
3. Each artist dictionary is appended to the results list.

**Key concepts:**
- **\`csv.DictReader\`** — reads CSV rows as dictionaries (much cleaner than \`csv.reader\`)
- **\`split(";")\`** — splits a string by a delimiter into a list
- **\`set()\`** — converts a list to a set (removes duplicates, enables fast membership tests)
- **\`int()\`** — type conversion from string to integer
- All CSV values are strings by default — you must convert types manually`,
  },
  {
    id: 'pq-py-24',
    courseId: 'intro-python-ai',
    topic: 'File I/O & CSV',
    difficulty: 'easy',
    question: `Write a function \`write_report(students, path)\` that takes a dictionary of student grades and writes a report to a text file.

The input dictionary maps student names to their grade (float). The report should:
1. Write one line per student in the format: \`"<name>: <grade>"\` (grade with 2 decimal places)
2. At the end, write a blank line followed by \`"Class average: <average>"\` (also 2 decimal places)

**Example:**

\`\`\`python
grades = {"Alice": 8.5, "Bob": 7.25, "Charlie": 9.0}
write_report(grades, "report.txt")
\`\`\`

**Contents of \`report.txt\`:**
\`\`\`
Alice: 8.50
Bob: 7.25
Charlie: 9.00

Class average: 8.25
\`\`\``,
    answer: `\`\`\`python
def write_report(students, path):
    with open(path, 'w') as f:
        for name, grade in students.items():
            f.write(f"{name}: {grade:.2f}\\n")

        avg = sum(students.values()) / len(students)
        f.write(f"\\nClass average: {avg:.2f}\\n")
\`\`\`

**How it works:**

1. **\`open(path, 'w')\`** — opens the file for **writing**. The \`'w'\` mode creates the file if it does not exist, or overwrites it if it does.
2. **\`for name, grade in students.items()\`** — iterate over each name-grade pair.
3. **\`f.write(f"...")\`** — writes formatted text to the file. Note: \`write()\` does NOT add a newline automatically (unlike \`print()\`), so we include \`\\n\` explicitly.
4. **\`{grade:.2f}\`** — the \`:.2f\` format specifier displays the float with exactly 2 decimal places.
5. We write an extra \`\\n\` before the average line to create a blank line separator.

**Key concepts:**
- **\`open(path, 'w')\`** — write mode (creates or overwrites the file)
- **\`f.write()\`** vs \`print()\` — \`write\` does not add newlines automatically
- **f-string formatting** with \`:.2f\` for 2 decimal places
- **\`with\` statement** ensures the file is properly closed and data is flushed to disk`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 8 — ERROR HANDLING (2 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-25',
    courseId: 'intro-python-ai',
    topic: 'Error Handling',
    difficulty: 'medium',
    question: `Write a function \`safe_divide(a, b)\` that divides \`a\` by \`b\` with proper error handling:

- If \`b\` is zero, catch the \`ZeroDivisionError\` and return the string \`"Cannot divide by zero"\`.
- If either \`a\` or \`b\` is not a number (e.g., a string), catch the \`TypeError\` and return the string \`"Both arguments must be numbers"\`.
- In a \`finally\` block, **always** print \`"Division attempted"\` regardless of whether an error occurred.
- If no error occurs, return the result of the division.

**Examples:**

\`\`\`python
safe_divide(10, 3)      # prints "Division attempted", returns 3.333...
safe_divide(10, 0)      # prints "Division attempted", returns "Cannot divide by zero"
safe_divide("10", 2)    # prints "Division attempted", returns "Both arguments must be numbers"
\`\`\``,
    answer: `\`\`\`python
def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        return "Cannot divide by zero"
    except TypeError:
        return "Both arguments must be numbers"
    else:
        return result
    finally:
        print("Division attempted")
\`\`\`

**How it works:**

1. The \`try\` block contains the code that might raise an exception (\`a / b\`).
2. If \`b == 0\`, Python raises \`ZeroDivisionError\`, which we catch and return a message.
3. If \`a\` or \`b\` is not a number (e.g., a string), Python raises \`TypeError\` when trying to divide, which we catch.
4. The \`else\` block runs **only if no exception was raised** — we return the result here.
5. The \`finally\` block runs **always**, regardless of whether an exception occurred or not. It even runs after a \`return\` statement!

**Key concepts:**
- **try/except/else/finally** — the full error-handling pattern:
  - \`try\`: code that might fail
  - \`except\`: handle specific exceptions
  - \`else\`: runs if no exception occurred
  - \`finally\`: runs no matter what (cleanup code)
- **Multiple except clauses** — you can catch different exceptions differently
- \`finally\` is guaranteed to execute — useful for cleanup (closing files, releasing resources)`,
  },
  {
    id: 'pq-py-26',
    courseId: 'intro-python-ai',
    topic: 'Error Handling',
    difficulty: 'medium',
    question: `Write a function \`validate_and_convert(items)\` that takes a list of strings and attempts to convert each to an integer.

The function should return a tuple of two lists:
- \`successes\`: a list of successfully converted integers
- \`failures\`: a list of strings that could not be converted

Do not crash on invalid input — use try/except inside a loop.

**Examples:**

\`\`\`python
validate_and_convert(["1", "hello", "3", "world", "5"])
# → ([1, 3, 5], ["hello", "world"])

validate_and_convert(["42", "100"])
# → ([42, 100], [])

validate_and_convert(["abc", "def"])
# → ([], ["abc", "def"])
\`\`\``,
    answer: `\`\`\`python
def validate_and_convert(items):
    successes = []
    failures = []
    for item in items:
        try:
            successes.append(int(item))
        except ValueError:
            failures.append(item)
    return (successes, failures)
\`\`\`

**How it works:**

1. Initialize two empty lists: one for successful conversions and one for failures.
2. Loop through each string in the input list.
3. **Inside the loop**, use try/except:
   - Try to convert the string to an integer with \`int(item)\`.
   - If it works, append the integer to \`successes\`.
   - If it raises a \`ValueError\` (e.g., \`int("hello")\` fails), append the original string to \`failures\`.
4. Return both lists as a tuple.

**Key concepts:**
- **EAFP (Easier to Ask Forgiveness than Permission)** — a Python philosophy. Instead of checking *whether* a string is a valid integer before converting (LBYL — Look Before You Leap), we just try the conversion and handle the error if it fails.
- **try/except inside a loop** — we handle errors per-item so one bad item does not stop the entire process
- \`ValueError\` is the specific exception raised when \`int()\` receives a string that is not a valid integer
- Returning a tuple of two lists to communicate both success and failure results`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 9 — ALGORITHMS (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-27',
    courseId: 'intro-python-ai',
    topic: 'Algorithms',
    difficulty: 'medium',
    question: `Implement an **iterative binary search** function \`binary_search(arr, target)\` that:

- Takes a **sorted** list \`arr\` and a \`target\` value
- Returns the **index** of the target if found, or \`-1\` if not found
- Must use the iterative approach (no recursion)

**Examples:**

\`\`\`python
binary_search([1, 3, 5, 7, 9, 11, 13], 7)    # → 3
binary_search([1, 3, 5, 7, 9, 11, 13], 4)    # → -1
binary_search([2, 4, 6, 8, 10], 2)            # → 0
binary_search([2, 4, 6, 8, 10], 10)           # → 4
binary_search([], 5)                           # → -1
\`\`\`

**Hint:** Use two pointers (\`low\` and \`high\`) that narrow the search range by half in each iteration.`,
    answer: `\`\`\`python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1
\`\`\`

**How it works:**

1. Start with \`low = 0\` and \`high = len(arr) - 1\` — the full range of the array.
2. While \`low <= high\` (there is still a range to search):
   - Calculate the middle index: \`mid = (low + high) // 2\` (integer division).
   - If \`arr[mid] == target\`: found it! Return \`mid\`.
   - If \`arr[mid] < target\`: the target must be in the right half. Set \`low = mid + 1\`.
   - If \`arr[mid] > target\`: the target must be in the left half. Set \`high = mid - 1\`.
3. If the loop ends without finding the target, return \`-1\`.

**Time complexity:** O(log n) — each iteration halves the search space. For a list of 1,000,000 elements, binary search needs at most ~20 comparisons, compared to 1,000,000 for linear search.

**Key concepts:**
- **Binary search** requires the input to be **sorted**
- **\`//\`** is integer (floor) division — essential for computing the middle index
- The loop invariant is: if the target exists, it is in \`arr[low..high]\`
- **O(log n)** time complexity vs O(n) for linear search`,
  },
  {
    id: 'pq-py-28',
    courseId: 'intro-python-ai',
    topic: 'Algorithms',
    difficulty: 'medium',
    question: `Write two recursive functions:

1. \`factorial(n)\` — returns \`n!\` (n factorial). \`factorial(0) = 1\`.
2. \`fibonacci(n)\` — returns the nth Fibonacci number. \`fibonacci(0) = 0\`, \`fibonacci(1) = 1\`.

**Examples:**

\`\`\`python
factorial(0)   # → 1
factorial(5)   # → 120  (5 * 4 * 3 * 2 * 1)

fibonacci(0)   # → 0
fibonacci(1)   # → 1
fibonacci(6)   # → 8    (0, 1, 1, 2, 3, 5, 8)
fibonacci(10)  # → 55
\`\`\`

For each function, identify:
- What is the **base case**?
- What is the **recursive case**?
- What is the time complexity?`,
    answer: `\`\`\`python
def factorial(n):
    # Base case
    if n == 0:
        return 1
    # Recursive case
    return n * factorial(n - 1)


def fibonacci(n):
    # Base cases
    if n == 0:
        return 0
    if n == 1:
        return 1
    # Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2)
\`\`\`

**How \`factorial\` works:**

- **Base case:** \`factorial(0) = 1\` (by definition, 0! = 1)
- **Recursive case:** \`factorial(n) = n * factorial(n - 1)\`
- Example trace: \`factorial(4) = 4 * factorial(3) = 4 * 3 * factorial(2) = 4 * 3 * 2 * factorial(1) = 4 * 3 * 2 * 1 * factorial(0) = 4 * 3 * 2 * 1 * 1 = 24\`
- **Time complexity: O(n)** — makes n recursive calls.

**How \`fibonacci\` works:**

- **Base cases:** \`fibonacci(0) = 0\`, \`fibonacci(1) = 1\`
- **Recursive case:** \`fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)\`
- Example trace: \`fibonacci(4) = fibonacci(3) + fibonacci(2) = (fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0)) = ((1 + 0) + 1) + (1 + 0) = 3\`
- **Time complexity: O(2^n)** — very slow! Each call branches into two more calls. This creates an exponential number of redundant computations. For \`fibonacci(30)\`, this means over a billion operations.

**Key concepts:**
- Every recursive function needs a **base case** (stopping condition) and a **recursive case**
- Without a base case, recursion would continue forever (stack overflow)
- Fibonacci's naive recursion is O(2^n) — this can be improved with **memoization** or an **iterative** approach`,
  },
  {
    id: 'pq-py-29',
    courseId: 'intro-python-ai',
    topic: 'Algorithms',
    difficulty: 'hard',
    question: `Write two functions:

1. \`has_duplicates(lst)\` — returns \`True\` if the list contains any duplicate elements, \`False\` otherwise. Use a **dictionary** to track seen elements (do not use \`set()\`).

2. \`selection_sort(lst)\` — sorts a list of numbers in ascending order using the **selection sort** algorithm. Returns a new sorted list. Do **not** use \`sorted()\` or \`.sort()\`.

**Examples:**

\`\`\`python
has_duplicates([1, 2, 3, 4])       # → False
has_duplicates([1, 2, 3, 2])       # → True
has_duplicates(["a", "b", "a"])    # → True

selection_sort([64, 25, 12, 22, 11])  # → [11, 12, 22, 25, 64]
selection_sort([3, 1, 4, 1, 5])       # → [1, 1, 3, 4, 5]
selection_sort([])                     # → []
\`\`\`

**Hint for selection sort:** Repeatedly find the minimum element from the unsorted portion and move it to the sorted portion.`,
    answer: `\`\`\`python
def has_duplicates(lst):
    seen = {}
    for item in lst:
        if item in seen:
            return True
        seen[item] = True
    return False


def selection_sort(lst):
    arr = lst[:]  # Make a copy to avoid modifying the original
    n = len(arr)

    for i in range(n):
        # Find the index of the minimum element in arr[i:]
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j

        # Swap the minimum element with the first unsorted element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

    return arr
\`\`\`

**How \`has_duplicates\` works:**

1. Use a dictionary \`seen\` to track elements we have encountered.
2. For each element in the list:
   - If it is already in \`seen\`, we found a duplicate — return \`True\`.
   - Otherwise, add it to \`seen\`.
3. If we finish the loop without finding duplicates, return \`False\`.
4. **Time complexity: O(n)** — dictionary lookup (\`in\`) is O(1) on average.

**How \`selection_sort\` works:**

1. Make a copy of the list (\`lst[:]\`) so we do not modify the original.
2. For each position \`i\` from 0 to n-1:
   - Find the index of the minimum element in the unsorted portion (\`arr[i:]\`).
   - Swap the minimum element with the element at position \`i\`.
3. After each iteration, \`arr[0:i+1]\` is sorted.
4. **Time complexity: O(n^2)** — two nested loops. Not efficient for large lists, but simple to understand and implement.

**Key concepts:**
- **Dictionary as a seen-tracker** — O(1) average lookup time
- **Selection sort** — simple but O(n^2) sorting algorithm
- **Tuple swap**: \`arr[i], arr[min_idx] = arr[min_idx], arr[i]\` — Pythonic way to swap values
- \`lst[:]\` creates a **shallow copy** of the list`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 10 — DATA ANALYSIS (2 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-30',
    courseId: 'intro-python-ai',
    topic: 'Data Analysis',
    difficulty: 'hard',
    question: `Write a function \`wild_cat_stats(cats)\` that analyzes a nested dictionary of wild cat data and returns a dictionary with three keys:

- \`"total_population"\`: the sum of all populations
- \`"best_hunter"\`: the name of the cat with the highest \`"hunt_success_rate"\`
- \`"most_common_prey"\`: the prey that appears most frequently across all cats

**Input format:**
\`\`\`python
cats = {
    "Lion": {
        "population": 23000,
        "hunt_success_rate": 0.25,
        "prey": ["zebra", "wildebeest", "buffalo"]
    },
    "Cheetah": {
        "population": 7100,
        "hunt_success_rate": 0.58,
        "prey": ["gazelle", "impala", "hare"]
    },
    "Leopard": {
        "population": 50000,
        "hunt_success_rate": 0.38,
        "prey": ["impala", "monkey", "hare"]
    }
}
\`\`\`

**Expected output:**
\`\`\`python
wild_cat_stats(cats)
# → {
#     "total_population": 80100,
#     "best_hunter": "Cheetah",
#     "most_common_prey": "impala"  (or "hare" — both appear twice)
# }
\`\`\``,
    answer: `\`\`\`python
def wild_cat_stats(cats):
    total_population = 0
    best_hunter = None
    best_rate = -1
    prey_count = {}

    for name, info in cats.items():
        # Accumulate total population
        total_population += info["population"]

        # Track best hunter
        if info["hunt_success_rate"] > best_rate:
            best_rate = info["hunt_success_rate"]
            best_hunter = name

        # Count prey frequencies
        for prey in info["prey"]:
            prey_count[prey] = prey_count.get(prey, 0) + 1

    # Find most common prey
    most_common_prey = None
    max_count = 0
    for prey, count in prey_count.items():
        if count > max_count:
            max_count = count
            most_common_prey = prey

    return {
        "total_population": total_population,
        "best_hunter": best_hunter,
        "most_common_prey": most_common_prey
    }
\`\`\`

**How it works:**

1. **Total population**: Simply sum up the \`"population"\` value from each cat's dictionary.
2. **Best hunter**: Track the highest \`"hunt_success_rate"\` seen so far, updating the best name whenever we find a higher rate.
3. **Most common prey**: Use the \`.get(key, 0) + 1\` pattern to build a frequency dictionary of all prey items, then find the prey with the highest count.

All three aggregations are computed in a **single loop** through the cats dictionary, making this efficient.

**Key concepts:**
- **Nested dictionary traversal** — \`cats.items()\` gives outer level, then \`info["prey"]\` goes deeper
- **Multiple aggregations in one loop** — summing, max-tracking, and counting simultaneously
- **\`.get(key, default)\`** pattern for safe counting
- **Finding the max** by tracking the best value and its key as you iterate`,
  },
  {
    id: 'pq-py-31',
    courseId: 'intro-python-ai',
    topic: 'Data Analysis',
    difficulty: 'medium',
    question: `Write two functions that work with a list of \`Artist\` objects (using the Artist class from previous questions):

1. \`calculate_popularity_per_tag(artists)\` — returns a dictionary mapping each tag to the **total number of listeners** across all artists that have that tag.

2. \`get_most_popular_tag(tag_popularity)\` — takes the dictionary from function 1 and returns the tag with the highest total listeners.

**Example:**

\`\`\`python
artists = [
    Artist("Radiohead", "UK", {"rock", "alternative"}, 15000000),
    Artist("Nirvana", "USA", {"rock", "grunge"}, 20000000),
    Artist("Stromae", "Belgium", {"pop", "electronic"}, 9000000),
    Artist("Daft Punk", "France", {"electronic", "dance"}, 18000000),
]

tag_pop = calculate_popularity_per_tag(artists)
# → {"rock": 35000000, "alternative": 15000000, "grunge": 20000000,
#     "pop": 9000000, "electronic": 27000000, "dance": 18000000}

get_most_popular_tag(tag_pop)
# → "rock"
\`\`\``,
    answer: `\`\`\`python
def calculate_popularity_per_tag(artists):
    tag_popularity = {}
    for artist in artists:
        for tag in artist.tags:
            tag_popularity[tag] = tag_popularity.get(tag, 0) + artist.listeners
    return tag_popularity


def get_most_popular_tag(tag_popularity):
    best_tag = None
    best_count = 0
    for tag, count in tag_popularity.items():
        if count > best_count:
            best_count = count
            best_tag = tag
    return best_tag
\`\`\`

**How it works:**

**\`calculate_popularity_per_tag\`:**
1. Initialize an empty dictionary for tag totals.
2. For each artist, loop through their tags (a nested loop — outer over artists, inner over tags).
3. For each tag, add the artist's listener count to the running total using \`.get(tag, 0) + artist.listeners\`.
4. This means each artist contributes their full listener count to EVERY tag they have.

**\`get_most_popular_tag\`:**
1. Iterate over the tag-popularity dictionary.
2. Track the tag with the highest listener count.
3. Return the best tag.

Alternatively, you could use:
\`\`\`python
def get_most_popular_tag(tag_popularity):
    return max(tag_popularity, key=tag_popularity.get)
\`\`\`

**Key concepts:**
- **Nested loop over objects and their attributes** — iterating over a list of objects, then over a collection attribute of each object
- **\`.get(key, 0)\`** pattern for accumulating totals in a dictionary
- **Finding the maximum** by iterating with tracking, or using \`max()\` with a key function
- Working with **object attributes** (\`artist.tags\`, \`artist.listeners\`) inside loops`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 10 — TESTING (2 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-32',
    courseId: 'intro-python-ai',
    topic: 'Testing',
    difficulty: 'medium',
    question: `Write a file \`test_calculator.py\` that tests the following functions using **pytest**:

\`\`\`python
# calculator.py
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b

def is_even(n):
    return n % 2 == 0
\`\`\`

Write at least 5 test functions covering:
- Normal cases for \`add\` and \`divide\`
- Edge case: dividing by zero (use \`pytest.raises\`)
- Testing \`is_even\` with both even and odd numbers

**Hint:** Remember that test function names must start with \`test_\` and you need to import \`pytest\` to use \`pytest.raises\`.`,
    answer: `\`\`\`python
import pytest
from calculator import add, divide, is_even


def test_add_positive():
    assert add(2, 3) == 5


def test_add_negative():
    assert add(-1, -1) == -2


def test_divide_normal():
    assert divide(10, 2) == 5.0


def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)


def test_is_even_true():
    assert is_even(4) is True


def test_is_even_false():
    assert is_even(7) is False
\`\`\`

**How it works:**

1. Each test function starts with \`test_\` so pytest can discover it.
2. \`assert\` checks that the expected value matches the actual result.
3. \`pytest.raises(ZeroDivisionError)\` is a **context manager** that verifies the code inside the \`with\` block raises the specified exception.
4. We test normal cases, edge cases, and both True/False branches of \`is_even\`.

**Key concepts:**
- **pytest** naming conventions: files start with \`test_\`, functions start with \`test_\`
- **\`assert\`** for checking expected outcomes
- **\`pytest.raises\`** for testing that exceptions are raised
- Testing both positive and negative cases`,
  },
  {
    id: 'pq-py-33',
    courseId: 'intro-python-ai',
    topic: 'Testing',
    difficulty: 'medium',
    question: `Given the following \`Jar\` class:

\`\`\`python
class Jar:
    def __init__(self, capacity=12):
        if not isinstance(capacity, int) or capacity < 0:
            raise ValueError("Capacity must be a non-negative integer")
        self._capacity = capacity
        self._size = 0

    def deposit(self, n):
        if self._size + n > self._capacity:
            raise ValueError("Exceeds capacity")
        self._size += n

    def withdraw(self, n):
        if n > self._size:
            raise ValueError("Not enough cookies")
        self._size -= n

    @property
    def capacity(self):
        return self._capacity

    @property
    def size(self):
        return self._size
\`\`\`

Write a \`test_jar.py\` file with tests for:
- Creating a Jar with default capacity
- Creating a Jar with invalid capacity (negative number)
- Depositing and checking size
- Withdrawing more than available
- The \`capacity\` and \`size\` properties`,
    answer: `\`\`\`python
import pytest
from jar import Jar


def test_default_capacity():
    jar = Jar()
    assert jar.capacity == 12
    assert jar.size == 0


def test_invalid_capacity():
    with pytest.raises(ValueError):
        Jar(-1)


def test_deposit():
    jar = Jar(10)
    jar.deposit(5)
    assert jar.size == 5


def test_deposit_exceeds_capacity():
    jar = Jar(5)
    with pytest.raises(ValueError):
        jar.deposit(10)


def test_withdraw():
    jar = Jar(10)
    jar.deposit(5)
    jar.withdraw(3)
    assert jar.size == 2


def test_withdraw_too_many():
    jar = Jar(10)
    jar.deposit(3)
    with pytest.raises(ValueError):
        jar.withdraw(5)
\`\`\`

**Key concepts:**
- **\`pytest.raises\`** as a context manager for testing exceptions
- Testing both valid operations and error conditions
- The \`@property\` decorator allows accessing \`jar.capacity\` and \`jar.size\` without parentheses
- Each test function should test ONE specific behavior`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PYTHON: TOPIC 11 — WHILE LOOPS & SET OPERATIONS (2 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'pq-py-34',
    courseId: 'intro-python-ai',
    topic: 'Conditionals & Loops',
    difficulty: 'medium',
    question: `Write a function \`guess_number(secret)\` that simulates a number-guessing game using a **while loop**.

The function should:
1. Start with \`low = 1\` and \`high = 100\`
2. In each iteration, guess the middle number: \`guess = (low + high) // 2\`
3. If \`guess == secret\`, return the number of guesses it took
4. If \`guess < secret\`, set \`low = guess + 1\`
5. If \`guess > secret\`, set \`high = guess - 1\`

**Examples:**

\`\`\`python
guess_number(50)   # returns a small number (the count of guesses)
guess_number(1)    # returns 7 or fewer guesses
guess_number(100)  # returns 7 or fewer guesses
\`\`\`

**Hint:** This is binary search implemented with a while loop. It should never need more than 7 guesses for numbers 1-100.`,
    answer: `\`\`\`python
def guess_number(secret):
    low = 1
    high = 100
    guesses = 0

    while low <= high:
        guess = (low + high) // 2
        guesses += 1

        if guess == secret:
            return guesses
        elif guess < secret:
            low = guess + 1
        else:
            high = guess - 1

    return guesses  # Should not reach here for valid input
\`\`\`

**How it works:**

1. Initialize \`low\` and \`high\` to cover the full range [1, 100].
2. The **while loop** continues as long as there is a valid range to search.
3. Each iteration narrows the range by half.
4. When \`guess == secret\`, we return the count.

**Key concepts:**
- **While loops** run as long as the condition is True
- The loop variable (\`low\`/\`high\`) must be updated to avoid infinite loops
- Binary search needs at most ceil(log2(100)) = 7 guesses`,
  },
  {
    id: 'pq-py-35',
    courseId: 'intro-python-ai',
    topic: 'Dictionaries & Tuples',
    difficulty: 'easy',
    question: `Given two sets of student enrollments:

\`\`\`python
math_students = {"Alice", "Bob", "Charlie", "Diana"}
science_students = {"Bob", "Diana", "Eve", "Frank"}
\`\`\`

Write expressions using **set operations** to find:
1. Students enrolled in **both** courses
2. Students enrolled in **either** course (or both)
3. Students in math but **not** in science
4. Students in **exactly one** course (not both)

For each, state which set operator you used and show the result.`,
    answer: `\`\`\`python
math_students = {"Alice", "Bob", "Charlie", "Diana"}
science_students = {"Bob", "Diana", "Eve", "Frank"}

# 1. Students in BOTH courses (intersection)
both = math_students & science_students
# {"Bob", "Diana"}

# 2. Students in EITHER course (union)
either = math_students | science_students
# {"Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"}

# 3. Students in math but NOT science (difference)
math_only = math_students - science_students
# {"Alice", "Charlie"}

# 4. Students in EXACTLY ONE course (symmetric difference)
exactly_one = math_students ^ science_students
# {"Alice", "Charlie", "Eve", "Frank"}
\`\`\`

**Key concepts:**
- \`&\` (intersection): elements in both sets
- \`|\` (union): elements in either set
- \`-\` (difference): elements in first set but not second
- \`^\` (symmetric difference): elements in one set but not both
- Sets are **unordered**, so the output order may vary`,
  },
  {
    id: 'pq-py-36',
    courseId: 'intro-python-ai',
    topic: 'Dictionaries & Tuples',
    difficulty: 'easy',
    question: `Given the following dictionary of hex color codes:

\`\`\`python
colors = {
    "red": "#ff0000",
    "green": "#008000",
    "blue": "#0000ff",
}
\`\`\`

Write a **dictionary comprehension** that creates a new dictionary \`m_colors\` where the values have the \`#\` symbol removed. Then write a second dictionary comprehension that **inverts** the original dictionary (swaps keys and values).

**Expected output:**
\`\`\`python
m_colors = {"red": "ff0000", "green": "008000", "blue": "0000ff"}
inverted = {"#ff0000": "red", "#008000": "green", "#0000ff": "blue"}
\`\`\``,
    answer: `\`\`\`python
colors = {
    "red": "#ff0000",
    "green": "#008000",
    "blue": "#0000ff",
}

# Remove the '#' from values
m_colors = {name: value[1:] for name, value in colors.items()}
# {"red": "ff0000", "green": "008000", "blue": "0000ff"}

# Invert the dictionary (swap keys and values)
inverted = {value: name for name, value in colors.items()}
# {"#ff0000": "red", "#008000": "green", "#0000ff": "blue"}
\`\`\`

**How it works:**

1. **Dictionary comprehension syntax:** \`{key_expr: value_expr for var in iterable}\`
2. \`value[1:]\` slices the string from index 1 onward, removing the \`#\` character.
3. Inverting swaps the key and value positions in the comprehension.

**Key concepts:**
- **Dictionary comprehensions** create dictionaries concisely, similar to list comprehensions
- **String slicing** (\`[1:]\`) to remove a prefix character
- **\`.items()\`** returns key-value pairs for iteration`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DATA STRUCTURES AND ALGORITHMS — COMPLEXITY ANALYSIS (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dsa-complexity-1',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Complexity Analysis',
    difficulty: 'easy',
    question: `Determine the Big-O time complexity of the following pseudocode. Show your reasoning step by step.

\`\`\`
Algorithm Mystery(A, n):
  count = 0
  for i = 1 to n
    for j = 1 to n
      for k = 1 to 10
        count = count + A[i] + A[j]
  return count
\`\`\`

What is the time complexity in terms of $n$? Does the innermost loop affect the asymptotic complexity?`,
    answer: `**Step-by-step analysis:**

1. **Outermost loop** (\`i = 1 to n\`): runs $n$ times.
2. **Middle loop** (\`j = 1 to n\`): runs $n$ times for each value of \`i\`.
3. **Innermost loop** (\`k = 1 to 10\`): runs exactly **10 times** (a constant) for each pair \`(i, j)\`.

**Total operations:**

$$T(n) = \\sum_{i=1}^{n} \\sum_{j=1}^{n} \\sum_{k=1}^{10} c = n \\cdot n \\cdot 10 \\cdot c = 10cn^2$$

Since $10c$ is a constant, we have:

$$T(n) = O(n^2)$$

**Answer:** The time complexity is $O(n^2)$.

The innermost loop does **not** affect the asymptotic complexity because it runs a constant number of times (10). Constants are absorbed into the Big-O notation. If the innermost loop ran \`k = 1 to n\`, the complexity would be $O(n^3)$.`,
  },
  {
    id: 'dsa-complexity-2',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Complexity Analysis',
    difficulty: 'medium',
    question: `Solve the following recurrence relation using the Master Theorem:

$$T(n) = 4T(n/2) + n^2$$

with base case $T(1) = 1$.

State which case of the Master Theorem applies and why. Then give the asymptotic solution for $T(n)$.`,
    answer: `**The Master Theorem** applies to recurrences of the form:

$$T(n) = aT(n/b) + f(n)$$

Here we have $a = 4$, $b = 2$, and $f(n) = n^2$.

**Step 1: Compute** $n^{\\log_b a}$

$$\\log_b a = \\log_2 4 = 2$$

So $n^{\\log_b a} = n^2$.

**Step 2: Compare** $f(n)$ with $n^{\\log_b a}$

We have $f(n) = n^2$ and $n^{\\log_b a} = n^2$.

Since $f(n) = \\Theta(n^{\\log_b a})$, this is **Case 2** of the Master Theorem.

**Step 3: Apply Case 2**

When $f(n) = \\Theta(n^{\\log_b a})$:

$$T(n) = \\Theta(n^{\\log_b a} \\log n) = \\Theta(n^2 \\log n)$$

**Answer:** $T(n) = \\Theta(n^2 \\log n)$.`,
  },
  {
    id: 'dsa-complexity-3',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Complexity Analysis',
    difficulty: 'hard',
    question: `Consider two algorithms for the same problem:

**Algorithm A** runs in $O(n^2 \\log n)$ time and $O(1)$ extra space.

**Algorithm B** runs in $O(n \\log^2 n)$ time and $O(n)$ extra space.

(a) For large $n$, which algorithm is asymptotically faster? Justify your answer rigorously.

(b) Is there a value of $n$ below which Algorithm A might be preferable in practice? Explain.

(c) If memory is severely constrained (e.g., an embedded system), which algorithm would you choose and why?`,
    answer: `**(a) Asymptotic comparison:**

We compare the growth rates by examining their ratio:

$$\\frac{n^2 \\log n}{n \\log^2 n} = \\frac{n}{\\log n}$$

Since $\\displaystyle\\lim_{n \\to \\infty} \\frac{n}{\\log n} = \\infty$, we have:

$$n^2 \\log n \\gg n \\log^2 n \\text{ as } n \\to \\infty$$

Therefore **Algorithm B** is asymptotically faster.

**(b) Practical considerations for small $n$:**

Yes. Asymptotic notation hides constant factors. If Algorithm A has a small constant $c_A$ and Algorithm B has a large constant $c_B$ (e.g., due to complex operations or poor cache behavior), then for small $n$, $c_A \\cdot n^2 \\log n < c_B \\cdot n \\log^2 n$ is possible. The exact crossover point depends on implementation details and hardware.

**(c) Memory-constrained environments:**

**Algorithm A** would be the better choice because it uses $O(1)$ extra space (in-place), meaning it needs only a fixed number of additional variables regardless of input size. Algorithm B requires $O(n)$ extra space, which could be prohibitive on systems with limited RAM. This illustrates the classic **time-space tradeoff** in algorithm design.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DATA STRUCTURES AND ALGORITHMS — SORTING (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dsa-sorting-1',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Sorting',
    difficulty: 'easy',
    question: `Trace through **Insertion Sort** on the array $A = [5, 2, 4, 6, 1, 3]$.

Show the state of the array after each iteration of the outer loop (i.e., after each element is inserted into its correct position). Use 1-indexed arrays where the outer loop runs from $j = 2$ to $n$.`,
    answer: `**Insertion Sort pseudocode (for reference):**
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

**Trace:**

| Iteration | key | Comparisons and shifts | Array after insertion |
|---|---|---|---|
| Initial | — | — | $[5, 2, 4, 6, 1, 3]$ |
| $j = 2$ | $2$ | $5 > 2$: shift 5 right | $[\\mathbf{2}, 5, 4, 6, 1, 3]$ |
| $j = 3$ | $4$ | $5 > 4$: shift; $2 < 4$: stop | $[2, \\mathbf{4}, 5, 6, 1, 3]$ |
| $j = 4$ | $6$ | $5 < 6$: stop (no shifts) | $[2, 4, 5, \\mathbf{6}, 1, 3]$ |
| $j = 5$ | $1$ | $6,5,4,2$ all $> 1$: shift all | $[\\mathbf{1}, 2, 4, 5, 6, 3]$ |
| $j = 6$ | $3$ | $6,5,4$ all $> 3$: shift; $2 < 3$: stop | $[1, 2, \\mathbf{3}, 4, 5, 6]$ |

**Final sorted array:** $[1, 2, 3, 4, 5, 6]$

**Key observations:**
- When $j = 4$, the key (6) is already larger than all elements to its left, so no shifts occur.
- When $j = 5$, the key (1) is smaller than everything, requiring 4 shifts — worst case for that iteration.
- Total comparisons: $1 + 2 + 1 + 4 + 4 = 12$.`,
  },
  {
    id: 'dsa-sorting-2',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Sorting',
    difficulty: 'medium',
    question: `(a) Write pseudocode for the **Merge** procedure used in Merge Sort. The procedure \`Merge(A, p, q, r)\` merges two sorted subarrays $A[p..q]$ and $A[q{+}1..r]$ into a single sorted subarray $A[p..r]$.

(b) What is the time complexity of the Merge procedure and why?

(c) Using the recurrence $T(n) = 2T(n/2) + \\Theta(n)$, explain why Merge Sort runs in $\\Theta(n \\log n)$ time.`,
    answer: `**(a) Merge pseudocode:**

\`\`\`
Merge(A, p, q, r):
  n1 = q - p + 1
  n2 = r - q
  create arrays L[1..n1+1] and R[1..n2+1]

  for i = 1 to n1
    L[i] = A[p + i - 1]
  for j = 1 to n2
    R[j] = A[q + j]

  L[n1 + 1] = infinity    // sentinel
  R[n2 + 1] = infinity    // sentinel

  i = 1
  j = 1
  for k = p to r
    if L[i] <= R[j]
      A[k] = L[i]
      i = i + 1
    else
      A[k] = R[j]
      j = j + 1
\`\`\`

**(b) Time complexity of Merge:**

The Merge procedure runs in $\\Theta(n)$ where $n = r - p + 1$:

- **Copying** to temporary arrays: $\\Theta(n_1 + n_2) = \\Theta(n)$
- **Merging loop** (\`for k = p to r\`): exactly $n$ iterations, each doing $O(1)$ work
- **Total:** $\\Theta(n)$

**(c) Why Merge Sort is $\\Theta(n \\log n)$:**

The recurrence $T(n) = 2T(n/2) + \\Theta(n)$ fits the Master Theorem with $a = 2$, $b = 2$, $f(n) = \\Theta(n)$.

$n^{\\log_b a} = n^{\\log_2 2} = n$

Since $f(n) = \\Theta(n^{\\log_b a})$, this is **Case 2**: $T(n) = \\Theta(n \\log n)$.

**Intuitive explanation:** At each recursion level, the total merge work across all subproblems is $\\Theta(n)$. There are $\\log_2 n$ levels, so total work is $\\Theta(n \\log n)$.`,
  },
  {
    id: 'dsa-sorting-3',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Sorting',
    difficulty: 'hard',
    question: `Consider the **Partition** procedure (Lomuto scheme) where the pivot is the last element:

\`\`\`
Partition(A, p, r):
  x = A[r]
  i = p - 1
  for j = p to r - 1
    if A[j] <= x
      i = i + 1
      swap A[i] and A[j]
  swap A[i+1] and A[r]
  return i + 1
\`\`\`

(a) Trace the Partition procedure on $A = [3, 8, 2, 5, 1, 4, 7, 6]$ with $p = 1$ and $r = 8$ (1-indexed). Show $i$, $j$, and the array state after each swap.

(b) What input causes QuickSort's **worst-case** $O(n^2)$ performance with this pivot scheme? Why?

(c) How can we mitigate this worst case?`,
    answer: `**(a) Trace of Partition on** $[3, 8, 2, 5, 1, 4, 7, 6]$:

**Pivot** $x = A[8] = 6$, initial $i = 0$.

| $j$ | $A[j]$ | $A[j] \\leq 6$? | Action | $i$ | Array |
|---|---|---|---|---|---|
| — | — | — | Initial | 0 | $[3, 8, 2, 5, 1, 4, 7, 6]$ |
| 1 | 3 | Yes | $i{=}1$, swap $A[1]{\\leftrightarrow}A[1]$ | 1 | $[3, 8, 2, 5, 1, 4, 7, 6]$ |
| 2 | 8 | No | — | 1 | $[3, 8, 2, 5, 1, 4, 7, 6]$ |
| 3 | 2 | Yes | $i{=}2$, swap $A[2]{\\leftrightarrow}A[3]$ | 2 | $[3, 2, 8, 5, 1, 4, 7, 6]$ |
| 4 | 5 | Yes | $i{=}3$, swap $A[3]{\\leftrightarrow}A[4]$ | 3 | $[3, 2, 5, 8, 1, 4, 7, 6]$ |
| 5 | 1 | Yes | $i{=}4$, swap $A[4]{\\leftrightarrow}A[5]$ | 4 | $[3, 2, 5, 1, 8, 4, 7, 6]$ |
| 6 | 4 | Yes | $i{=}5$, swap $A[5]{\\leftrightarrow}A[6]$ | 5 | $[3, 2, 5, 1, 4, 8, 7, 6]$ |
| 7 | 7 | No | — | 5 | $[3, 2, 5, 1, 4, 8, 7, 6]$ |

**Final swap:** $A[i{+}1] = A[6] \\leftrightarrow A[8]$:

$$A = [3, 2, 5, 1, 4, \\mathbf{6}, 7, 8]$$

**Return** $i + 1 = 6$. Pivot 6 is at position 6; everything left of it is $\\leq 6$, everything right is $> 6$.

**(b) Worst-case input:**

With pivot = last element, the worst case is an **already sorted** array (ascending or descending). For $[1,2,3,4,5]$:
- Pivot 5: left has 4 elements, right has 0
- Pivot 4: left has 3 elements, right has 0
- And so on...

The recurrence becomes $T(n) = T(n{-}1) + \\Theta(n)$, giving $T(n) = \\Theta(n^2)$.

**(c) Mitigations:**

1. **Randomized pivot:** Choose a random element as pivot — makes worst case extremely unlikely.
2. **Median-of-three:** Use the median of the first, middle, and last elements.
3. **Shuffle the input** randomly before sorting.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DATA STRUCTURES AND ALGORITHMS — DATA STRUCTURES (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dsa-ds-1',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Data Structures',
    difficulty: 'easy',
    question: `An initially empty stack $S$ is subjected to the following sequence of operations:

\`\`\`
Push(S, 4)
Push(S, 7)
Push(S, 2)
Pop(S)
Push(S, 8)
Push(S, 1)
Pop(S)
Pop(S)
Push(S, 3)
\`\`\`

(a) Show the contents of the stack after **each** operation (top of stack on the right).

(b) What value does each Pop return?

(c) What are the final contents of the stack from bottom to top?`,
    answer: `**(a) and (b) Step-by-step trace:**

A stack is **LIFO** (Last In, First Out). We show the stack with the top on the right.

| Operation | Returned | Stack (bottom to top) |
|---|---|---|
| Initial | — | $[]$ |
| Push(S, 4) | — | $[4]$ |
| Push(S, 7) | — | $[4, 7]$ |
| Push(S, 2) | — | $[4, 7, 2]$ |
| Pop(S) | **2** | $[4, 7]$ |
| Push(S, 8) | — | $[4, 7, 8]$ |
| Push(S, 1) | — | $[4, 7, 8, 1]$ |
| Pop(S) | **1** | $[4, 7, 8]$ |
| Pop(S) | **8** | $[4, 7]$ |
| Push(S, 3) | — | $[4, 7, 3]$ |

**Pop return values:** 2, then 1, then 8.

**(c) Final contents:** $[4, 7, 3]$ — with 4 at the bottom and 3 at the top.

**Key concept:** Each Push and Pop operation takes $O(1)$ time. Pop always removes and returns the most recently pushed element that has not yet been popped.`,
  },
  {
    id: 'dsa-ds-2',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Data Structures',
    difficulty: 'medium',
    question: `(a) Write pseudocode for inserting a new key into a **Min-Heap** (stored as a 1-indexed array). Your procedure should maintain the min-heap property: $H[\\text{Parent}(i)] \\leq H[i]$ for all nodes $i$.

(b) Trace the insertion of key $3$ into the following min-heap (given as an array):

$$H = [2, 5, 4, 8, 7, 6]$$

Show the heap as a tree before and after insertion, and indicate each swap made during the "bubble-up" process.

(c) What is the time complexity of the insert operation? Justify your answer.`,
    answer: `**(a) Min-Heap Insert pseudocode:**

\`\`\`
MinHeapInsert(H, key):
  H.heap-size = H.heap-size + 1
  H[H.heap-size] = infinity       // placeholder
  HeapDecreaseKey(H, H.heap-size, key)

HeapDecreaseKey(H, i, key):
  H[i] = key
  while i > 1 and H[Parent(i)] > H[i]
    swap H[i] and H[Parent(i)]
    i = Parent(i)

Parent(i):
  return floor(i / 2)
\`\`\`

**(b) Trace of inserting key 3:**

**Before insertion** — $H = [2, 5, 4, 8, 7, 6]$ as a tree:

\`\`\`
         2
       /   \\
      5     4
     / \\   /
    8   7 6
\`\`\`

**Step 1:** Add key 3 at the next available position (index 7):

$H = [2, 5, 4, 8, 7, 6, 3]$

\`\`\`
         2
       /   \\
      5     4
     / \\   / \\
    8   7 6   3
\`\`\`

**Step 2:** Bubble up — compare $H[7] = 3$ with $H[\\text{Parent}(7)] = H[3] = 4$. Since $3 < 4$, swap:

$H = [2, 5, 3, 8, 7, 6, 4]$

\`\`\`
         2
       /   \\
      5     3
     / \\   / \\
    8   7 6   4
\`\`\`

**Step 3:** Compare $H[3] = 3$ with $H[\\text{Parent}(3)] = H[1] = 2$. Since $3 > 2$, stop.

**Final heap:** $H = [2, 5, 3, 8, 7, 6, 4]$

**(c) Time complexity:**

The insert operation is $O(\\log n)$ because:
- Adding the element at the end is $O(1)$.
- The bubble-up process traverses at most one root-to-leaf path, which has length equal to the height of the heap.
- A binary heap with $n$ elements has height $\\lfloor \\log_2 n \\rfloor$.
- Each level requires $O(1)$ work (one comparison and possibly one swap).
- Therefore the total time is $O(\\log n)$.`,
  },
  {
    id: 'dsa-ds-3',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Data Structures',
    difficulty: 'hard',
    question: `Consider the following Binary Search Tree (BST):

\`\`\`
        15
       /  \\
      6    18
     / \\   / \\
    3   7 17  20
     \\   \\
      4   13
         /
        9
\`\`\`

(a) **Insert** the key $10$ into this BST. Draw the resulting tree.

(b) **Delete** the key $15$ (the root) from the tree obtained in part (a). Use the standard BST deletion algorithm where you replace the deleted node with its **in-order successor**. Draw the resulting tree and explain each step.

(c) What is the in-order traversal of the final tree (after both operations)?`,
    answer: `**(a) Inserting key 10:**

Starting at root 15: $10 < 15 \\to$ go left.
At 6: $10 > 6 \\to$ go right.
At 7: $10 > 7 \\to$ go right.
At 13: $10 < 13 \\to$ go left.
At 9: $10 > 9 \\to$ go right.
Node 9 has no right child, so insert 10 as right child of 9.

\`\`\`
        15
       /  \\
      6    18
     / \\   / \\
    3   7 17  20
     \\   \\
      4   13
         /
        9
         \\
          10
\`\`\`

**(b) Deleting key 15 (root):**

Node 15 has **two children**, so we use the in-order successor to replace it.

**Step 1:** Find the in-order successor of 15. The in-order successor is the **minimum node in the right subtree**. Go to 18, then left to 17. Node 17 has no left child, so 17 is the in-order successor.

**Step 2:** Replace 15's key with 17.

**Step 3:** Delete node 17 from its original position. Node 17 is a leaf (no children), so simply remove it.

Resulting tree:

\`\`\`
        17
       /  \\
      6    18
     / \\     \\
    3   7    20
     \\   \\
      4   13
         /
        9
         \\
          10
\`\`\`

**(c) In-order traversal of the final tree:**

In-order traversal visits: left subtree, root, right subtree.

$$3, 4, 6, 7, 9, 10, 13, 17, 18, 20$$

**Verification:** The in-order traversal produces keys in sorted (non-decreasing) order, which confirms the BST property is maintained after both operations.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DATA STRUCTURES AND ALGORITHMS — GRAPH ALGORITHMS (4 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dsa-graphs-1',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Graph Algorithms',
    difficulty: 'easy',
    question: `Trace **Breadth-First Search (BFS)** starting from vertex $A$ on the following undirected graph. Adjacency lists are in alphabetical order.

\`\`\`
A --- B --- E
|         / |
|        /  |
C --- D --- F
\`\`\`

Edges: $\\{A{-}B,\\; A{-}C,\\; B{-}E,\\; C{-}D,\\; D{-}E,\\; D{-}F,\\; E{-}F\\}$

Show:
(a) The order in which vertices are **discovered** (enqueued).
(b) The **distance** $d$ (number of edges from $A$) for each vertex.
(c) The BFS tree (parent pointers).`,
    answer: `**BFS Trace from source $A$** (processing neighbors in alphabetical order):

| Step | Dequeue | Discover (enqueue) | Queue after step |
|---|---|---|---|
| 0 | — | $A$ ($d=0$) | $[A]$ |
| 1 | $A$ | $B$ ($d=1$), $C$ ($d=1$) | $[B, C]$ |
| 2 | $B$ | $E$ ($d=2$) | $[C, E]$ |
| 3 | $C$ | $D$ ($d=2$) | $[E, D]$ |
| 4 | $E$ | $F$ ($d=3$) | $[D, F]$ |
| 5 | $D$ | — (all neighbors discovered) | $[F]$ |
| 6 | $F$ | — (all neighbors discovered) | $[]$ |

Note: When $B$ is dequeued, its neighbors are $A$ (already discovered) and $E$ (new). When $C$ is dequeued, its neighbors are $A$ (discovered) and $D$ (new). When $E$ is dequeued, its neighbors $B$, $D$ are discovered but $F$ is new.

**(a) Discovery order:** $A, B, C, E, D, F$

**(b) Distances:**

| Vertex | $A$ | $B$ | $C$ | $D$ | $E$ | $F$ |
|---|---|---|---|---|---|---|
| $d$ | 0 | 1 | 1 | 2 | 2 | 3 |

**(c) BFS tree (parent pointers):**

| Vertex | $A$ | $B$ | $C$ | $D$ | $E$ | $F$ |
|---|---|---|---|---|---|---|
| Parent | NIL | $A$ | $A$ | $C$ | $B$ | $E$ |

\`\`\`
    A
   / \\
  B   C
  |   |
  E   D
  |
  F
\`\`\`

BFS guarantees that \`d[v]\` is the **shortest path distance** (fewest edges) from $A$ to $v$.`,
  },
  {
    id: 'dsa-graphs-2',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Graph Algorithms',
    difficulty: 'medium',
    question: `Perform **Depth-First Search (DFS)** on the following **directed** graph, starting from vertex $A$. Process adjacency lists in alphabetical order. If DFS from $A$ does not reach all vertices, restart from the earliest unvisited vertex alphabetically.

\`\`\`
A -> B, A -> D
B -> E
C -> A, C -> F
D -> B
E -> D
F -> F
\`\`\`

(a) Record **discovery** and **finish** times for each vertex (using a global clock starting at 1).

(b) Classify each edge as a **tree edge**, **back edge**, **forward edge**, or **cross edge**.`,
    answer: `**DFS Trace** (processing neighbors in alphabetical order):

Start DFS-Visit from $A$ (time clock starts at 1):

| Action | Vertex | Time | Notes |
|---|---|---|---|
| Discover | $A$ | $d[A]=1$ | Visit $A$, first neighbor $B$ |
| Discover | $B$ | $d[B]=2$ | Visit $B$, first neighbor $E$ |
| Discover | $E$ | $d[E]=3$ | Visit $E$, first neighbor $D$ |
| Discover | $D$ | $d[D]=4$ | Visit $D$, neighbor $B$ is gray (back edge) |
| Finish | $D$ | $f[D]=5$ | Backtrack to $E$ |
| Finish | $E$ | $f[E]=6$ | Backtrack to $B$ |
| Finish | $B$ | $f[B]=7$ | Backtrack to $A$, next neighbor $D$ (already black, forward edge) |
| Finish | $A$ | $f[A]=8$ | DFS from $A$ complete |

$C$ is still white, so restart DFS-Visit from $C$:

| Action | Vertex | Time | Notes |
|---|---|---|---|
| Discover | $C$ | $d[C]=9$ | Visit $C$, first neighbor $A$ is black (cross edge) |
| Discover | $F$ | $d[F]=10$ | Next neighbor $F$, visit $F$; neighbor $F$ is gray (back edge / self-loop) |
| Finish | $F$ | $f[F]=11$ | Backtrack to $C$ |
| Finish | $C$ | $f[C]=12$ | Done |

**(a) Discovery and finish times:**

| Vertex | $A$ | $B$ | $C$ | $D$ | $E$ | $F$ |
|---|---|---|---|---|---|---|
| $d$ | 1 | 2 | 9 | 4 | 3 | 10 |
| $f$ | 8 | 7 | 12 | 5 | 6 | 11 |

**(b) Edge classification:**

| Edge | Type | Reason |
|---|---|---|
| $A \\to B$ | **Tree** | $B$ is white when explored from $A$ |
| $A \\to D$ | **Forward** | $D$ is black and $d[A] < d[D]$ (descendant in DFS tree) |
| $B \\to E$ | **Tree** | $E$ is white when explored from $B$ |
| $C \\to A$ | **Cross** | $A$ is black and $d[C] > f[A]$ (no ancestor/descendant relation) |
| $C \\to F$ | **Tree** | $F$ is white when explored from $C$ |
| $D \\to B$ | **Back** | $B$ is gray when explored from $D$ (ancestor in DFS tree) |
| $E \\to D$ | **Tree** | $D$ is white when explored from $E$ |
| $F \\to F$ | **Back** | $F$ is gray when exploring itself (self-loop is a back edge) |

**Key rules:**
- **Tree edge:** destination is white
- **Back edge:** destination is gray (indicates a cycle)
- **Forward edge:** destination is black with $d[\\text{src}] < d[\\text{dst}]$
- **Cross edge:** destination is black with $d[\\text{src}] > d[\\text{dst}]$`,
  },
  {
    id: 'dsa-graphs-3',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Graph Algorithms',
    difficulty: 'medium',
    question: `Apply **Dijkstra's algorithm** to find the shortest paths from source vertex $S$ to all other vertices in the following weighted directed graph:

\`\`\`
S --2--> A --3--> D
|        ^        ^
|        |        |
5        1        2
|        |        |
v        |        |
B --1--> C --4--> E
\`\`\`

Edges and weights: $S{\\to}A: 2$, $S{\\to}B: 5$, $B{\\to}C: 1$, $C{\\to}A: 1$, $A{\\to}D: 3$, $C{\\to}E: 4$, $E{\\to}D: 2$

Show the state of the distance array and the vertex extracted at each step.`,
    answer: `**Dijkstra's Algorithm Trace** from source $S$:

**Initialization:** $d[S]=0$, $d[A]=\\infty$, $d[B]=\\infty$, $d[C]=\\infty$, $d[D]=\\infty$, $d[E]=\\infty$.

Priority queue $Q$ contains all vertices keyed by $d$ values.

| Step | Extract-Min | Relax edges | Updated distances |
|---|---|---|---|
| 1 | $S$ ($d=0$) | $S{\\to}A$: $0+2=2 < \\infty$ \\newline $S{\\to}B$: $0+5=5 < \\infty$ | $d[A]=2$, $d[B]=5$ |
| 2 | $A$ ($d=2$) | $A{\\to}D$: $2+3=5 < \\infty$ | $d[D]=5$ |
| 3 | $B$ ($d=5$) | $B{\\to}C$: $5+1=6 < \\infty$ | $d[C]=6$ |
| 4 | $D$ ($d=5$) | No outgoing edges from $D$ | — |
| 5 | $C$ ($d=6$) | $C{\\to}A$: $6+1=7 > 2$ (no update) \\newline $C{\\to}E$: $6+4=10 < \\infty$ | $d[E]=10$ |
| 6 | $E$ ($d=10$) | $E{\\to}D$: $10+2=12 > 5$ (no update) | — |

**Final shortest distances from $S$:**

| Vertex | $S$ | $A$ | $B$ | $C$ | $D$ | $E$ |
|---|---|---|---|---|---|---|
| $d$ | $0$ | $2$ | $5$ | $6$ | $5$ | $10$ |

**Shortest path tree (parent pointers):**

| Vertex | $S$ | $A$ | $B$ | $C$ | $D$ | $E$ |
|---|---|---|---|---|---|---|
| Parent | NIL | $S$ | $S$ | $B$ | $A$ | $C$ |

**Shortest paths:**
- $S \\to A$: $S \\to A$ (cost 2)
- $S \\to B$: $S \\to B$ (cost 5)
- $S \\to C$: $S \\to B \\to C$ (cost 6)
- $S \\to D$: $S \\to A \\to D$ (cost 5)
- $S \\to E$: $S \\to B \\to C \\to E$ (cost 10)`,
  },
  {
    id: 'dsa-graphs-4',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Graph Algorithms',
    difficulty: 'hard',
    question: `Apply **Kruskal's algorithm** to find the Minimum Spanning Tree (MST) of the following undirected weighted graph with vertices $\\{A, B, C, D, E, F\\}$:

| Edge | Weight |
|---|---|
| $A{-}B$ | 4 |
| $A{-}C$ | 2 |
| $B{-}C$ | 1 |
| $B{-}D$ | 5 |
| $C{-}D$ | 8 |
| $C{-}E$ | 10 |
| $D{-}E$ | 2 |
| $D{-}F$ | 6 |
| $E{-}F$ | 3 |

Show each step: the edge considered, whether it is added or rejected (and why), and the state of the Union-Find sets. Give the total MST weight.`,
    answer: `**Kruskal's Algorithm Trace:**

**Step 0:** Sort edges by weight: $B{-}C(1),\\; A{-}C(2),\\; D{-}E(2),\\; E{-}F(3),\\; A{-}B(4),\\; B{-}D(5),\\; D{-}F(6),\\; C{-}D(8),\\; C{-}E(10)$.

Initialize Union-Find: each vertex in its own set: $\\{A\\}, \\{B\\}, \\{C\\}, \\{D\\}, \\{E\\}, \\{F\\}$.

| Step | Edge | Weight | Action | Reason | Sets after |
|---|---|---|---|---|---|
| 1 | $B{-}C$ | 1 | **Add** | $B$ and $C$ in different sets | $\\{A\\}, \\{B,C\\}, \\{D\\}, \\{E\\}, \\{F\\}$ |
| 2 | $A{-}C$ | 2 | **Add** | $A$ and $C$ in different sets | $\\{A,B,C\\}, \\{D\\}, \\{E\\}, \\{F\\}$ |
| 3 | $D{-}E$ | 2 | **Add** | $D$ and $E$ in different sets | $\\{A,B,C\\}, \\{D,E\\}, \\{F\\}$ |
| 4 | $E{-}F$ | 3 | **Add** | $E$ and $F$ in different sets | $\\{A,B,C\\}, \\{D,E,F\\}$ |
| 5 | $A{-}B$ | 4 | **Reject** | $A$ and $B$ already in same set (would create cycle) | unchanged |
| 6 | $B{-}D$ | 5 | **Add** | $B$ and $D$ in different sets | $\\{A,B,C,D,E,F\\}$ |

**Stop:** We have $|V| - 1 = 5$ edges in the MST. All vertices are connected.

**MST edges:** $\\{B{-}C,\\; A{-}C,\\; D{-}E,\\; E{-}F,\\; B{-}D\\}$

**Total MST weight:** $1 + 2 + 2 + 3 + 5 = 13$

**MST visualization:**

\`\`\`
A --2-- C --1-- B --5-- D --2-- E --3-- F
\`\`\`

**Key observations:**
- Edges $A{-}B(4)$, $C{-}D(8)$, $C{-}E(10)$, and $D{-}F(6)$ were not needed.
- $A{-}B$ was rejected because $A$ and $B$ were already connected through $C$.
- The algorithm processed only 6 of 9 edges before finding the MST.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DATA STRUCTURES AND ALGORITHMS — DYNAMIC PROGRAMMING (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dsa-dp-1',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Dynamic Programming',
    difficulty: 'easy',
    question: `Fill in the DP table for the **0/1 Knapsack Problem** with the following items and knapsack capacity $W = 5$:

| Item | Weight | Value |
|---|---|---|
| 1 | 2 | 3 |
| 2 | 3 | 4 |
| 3 | 4 | 5 |
| 4 | 1 | 2 |

Use the recurrence:

$$K[i, w] = \\begin{cases} 0 & \\text{if } i = 0 \\text{ or } w = 0 \\\\ K[i{-}1, w] & \\text{if } w_i > w \\\\ \\max(K[i{-}1, w],\\; v_i + K[i{-}1, w - w_i]) & \\text{otherwise} \\end{cases}$$

Show the complete table and state the maximum value achievable.`,
    answer: `**DP Table $K[i, w]$:**

|  | $w=0$ | $w=1$ | $w=2$ | $w=3$ | $w=4$ | $w=5$ |
|---|---|---|---|---|---|---|
| $i=0$ | 0 | 0 | 0 | 0 | 0 | 0 |
| $i=1$ (wt=2, val=3) | 0 | 0 | 3 | 3 | 3 | 3 |
| $i=2$ (wt=3, val=4) | 0 | 0 | 3 | 4 | 4 | 7 |
| $i=3$ (wt=4, val=5) | 0 | 0 | 3 | 4 | 5 | 7 |
| $i=4$ (wt=1, val=2) | 0 | 2 | 3 | 5 | 6 | 7 |

**How key cells are computed:**

- $K[1,2] = \\max(K[0,2],\\; 3 + K[0,0]) = \\max(0, 3) = 3$
- $K[2,5] = \\max(K[1,5],\\; 4 + K[1,2]) = \\max(3, 4+3) = 7$
- $K[3,4] = \\max(K[2,4],\\; 5 + K[2,0]) = \\max(4, 5) = 5$
- $K[4,3] = \\max(K[3,3],\\; 2 + K[3,2]) = \\max(4, 2+3) = 5$
- $K[4,4] = \\max(K[3,4],\\; 2 + K[3,3]) = \\max(5, 2+4) = 6$

**Maximum value:** $K[4, 5] = 7$

**Optimal selection:** Backtrack from $K[4,5]$:
- $K[4,5] = K[3,5] = 7$, so item 4 is **not** included.
- $K[3,5] = K[2,5] = 7$, so item 3 is **not** included.
- $K[2,5] = 4 + K[1,2] = 7 \\neq K[1,5] = 3$, so item 2 **is** included. Remaining capacity: $5 - 3 = 2$.
- $K[1,2] = 3 + K[0,0] = 3 \\neq K[0,2] = 0$, so item 1 **is** included.

**Optimal items:** Items 1 and 2 (total weight $2+3=5$, total value $3+4=7$).`,
  },
  {
    id: 'dsa-dp-2',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Dynamic Programming',
    difficulty: 'medium',
    question: `Consider the **Rod Cutting Problem**: given a rod of length $n$ and a price table, find the maximum revenue obtainable by cutting the rod into pieces.

Price table:

| Length $i$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Price $p_i$ | 1 | 5 | 8 | 9 | 10 |

(a) Write the **recurrence relation** for the optimal revenue $r_n$ and explain why this problem has **optimal substructure**.

(b) Compute $r_1, r_2, r_3, r_4, r_5$ using the bottom-up approach.

(c) For $n = 5$, what are the optimal cuts?`,
    answer: `**(a) Recurrence relation:**

$$r_n = \\max_{1 \\leq i \\leq n} (p_i + r_{n-i})$$

with base case $r_0 = 0$.

**Optimal substructure:** If we make a first cut of length $i$, the remaining rod has length $n - i$. The revenue from the remaining piece must itself be optimal (i.e., $r_{n-i}$), otherwise we could improve the total revenue. Thus an optimal solution to the whole problem contains an optimal solution to a subproblem.

**Overlapping subproblems:** Computing $r_n$ naively requires computing $r_k$ for various $k < n$ multiple times. For instance, both $r_4$ and $r_3$ need $r_2$. This redundancy makes DP beneficial.

**(b) Bottom-up computation:**

**$r_1$:** $\\max(p_1 + r_0) = 1 + 0 = 1$. Optimal: no cut.

**$r_2$:** $\\max(p_1 + r_1,\\; p_2 + r_0) = \\max(1+1,\\; 5+0) = \\max(2, 5) = 5$. Optimal: piece of length 2.

**$r_3$:** $\\max(p_1 + r_2,\\; p_2 + r_1,\\; p_3 + r_0) = \\max(1+5,\\; 5+1,\\; 8+0) = \\max(6, 6, 8) = 8$. Optimal: piece of length 3.

**$r_4$:** $\\max(p_1 + r_3,\\; p_2 + r_2,\\; p_3 + r_1,\\; p_4 + r_0) = \\max(1+8,\\; 5+5,\\; 8+1,\\; 9+0) = \\max(9, 10, 9, 9) = 10$. Optimal: two pieces of length 2.

**$r_5$:** $\\max(p_1 + r_4,\\; p_2 + r_3,\\; p_3 + r_2,\\; p_4 + r_1,\\; p_5 + r_0) = \\max(1+10,\\; 5+8,\\; 8+5,\\; 9+1,\\; 10+0) = \\max(11, 13, 13, 10, 10) = 13$.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $r_n$ | 0 | 1 | 5 | 8 | 10 | 13 |

**(c) Optimal cuts for $n = 5$:**

$r_5 = 13$ is achieved by $p_2 + r_3 = 5 + 8 = 13$ or equivalently $p_3 + r_2 = 8 + 5 = 13$.

Both give the same decomposition: **cut into pieces of length 2 and 3** (revenue $5 + 8 = 13$).`,
  },
  {
    id: 'dsa-dp-3',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Dynamic Programming',
    difficulty: 'hard',
    question: `You are given a staircase with $n$ steps. You can climb either 1, 2, or 3 steps at a time. Each step $i$ has a **cost** $c[i]$ associated with stepping on it. You start at the ground (step 0, cost 0) and want to reach step $n$ with **minimum total cost**.

(a) Identify this as a DP problem by explaining the **optimal substructure** and **overlapping subproblems**.

(b) Write the **recurrence relation** for $\\text{minCost}(i)$, the minimum cost to reach step $i$.

(c) Write **pseudocode** for a bottom-up DP solution.

(d) Trace your algorithm on $n = 5$ with costs $c[1..5] = [10, 15, 20, 5, 30]$.`,
    answer: `**(a) DP properties:**

**Optimal substructure:** To reach step $i$ optimally, the last move was from step $i{-}1$, $i{-}2$, or $i{-}3$. Whichever step we came from, the path to that step must also be optimal (otherwise we could improve the total). So an optimal solution to the problem of reaching step $i$ contains an optimal solution to a smaller subproblem.

**Overlapping subproblems:** $\\text{minCost}(5)$ depends on $\\text{minCost}(4)$, $\\text{minCost}(3)$, and $\\text{minCost}(2)$. But $\\text{minCost}(4)$ also depends on $\\text{minCost}(3)$ and $\\text{minCost}(2)$. These subproblems are solved multiple times in a naive recursion.

**(b) Recurrence relation:**

$$\\text{minCost}(0) = 0$$

$$\\text{minCost}(i) = c[i] + \\min\\begin{cases} \\text{minCost}(i-1) & \\text{if } i \\geq 1 \\\\ \\text{minCost}(i-2) & \\text{if } i \\geq 2 \\\\ \\text{minCost}(i-3) & \\text{if } i \\geq 3 \\end{cases}$$

**(c) Pseudocode:**

\`\`\`
MinCostStairs(c, n):
  // c[1..n] are the step costs
  dp[0] = 0
  for i = 1 to n
    dp[i] = c[i] + dp[i-1]
    if i >= 2
      dp[i] = min(dp[i], c[i] + dp[i-2])
    if i >= 3
      dp[i] = min(dp[i], c[i] + dp[i-3])
  return dp[n]
\`\`\`

Time complexity: $O(n)$. Space complexity: $O(n)$ (can be reduced to $O(1)$ by keeping only 3 previous values).

**(d) Trace on** $c = [10, 15, 20, 5, 30]$:

| $i$ | $c[i]$ | From $i{-}1$ | From $i{-}2$ | From $i{-}3$ | $dp[i]$ |
|---|---|---|---|---|---|
| 0 | — | — | — | — | $0$ |
| 1 | 10 | $10 + 0 = 10$ | — | — | $10$ |
| 2 | 15 | $15 + 10 = 25$ | $15 + 0 = 15$ | — | $15$ |
| 3 | 20 | $20 + 15 = 35$ | $20 + 10 = 30$ | $20 + 0 = 20$ | $20$ |
| 4 | 5 | $5 + 20 = 25$ | $5 + 15 = 20$ | $5 + 10 = 15$ | $15$ |
| 5 | 30 | $30 + 15 = 45$ | $30 + 20 = 50$ | $30 + 15 = 45$ | $45$ |

**Minimum cost to reach step 5:** $dp[5] = 45$.

**Optimal path (backtrack):**
- Step 5: came from step 4 (or step 2, both give 45; take step 4 via $i{-}1$)
- Step 4: came from step 1 (via $i{-}3$, cost 15)
- Step 1: came from step 0 (via $i{-}1$, cost 10)

**Path:** $0 \\to 1 \\to 4 \\to 5$ with costs $0 + 10 + 5 + 30 = 45$.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DATA STRUCTURES AND ALGORITHMS — ADVANCED (2 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dsa-advanced-1',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Advanced',
    difficulty: 'medium',
    question: `Perform a **topological sort** on the following Directed Acyclic Graph (DAG) using the DFS-based algorithm. Process vertices in alphabetical order when choosing which unvisited vertex to start from, and process adjacency lists in alphabetical order.

\`\`\`
A -> B, A -> C
B -> D
C -> D, C -> E
D -> F
E -> F
\`\`\`

Show the DFS finish order and the resulting topological ordering. Verify that every edge goes from an earlier to a later vertex in your ordering.`,
    answer: `**DFS-based Topological Sort Trace:**

We use the algorithm that assigns labels in reverse finish order: \`curLabel\` starts at $|V| = 6$ and decrements each time a vertex finishes.

**Start DFS-Visit from $A$** (first unvisited, alphabetically):

| Action | Vertex | Notes |
|---|---|---|
| Discover $A$ | $A$ | Neighbors: $B, C$. Visit $B$ first. |
| Discover $B$ | $B$ | Neighbors: $D$. Visit $D$. |
| Discover $D$ | $D$ | Neighbors: $F$. Visit $F$. |
| Discover $F$ | $F$ | No unvisited neighbors. |
| **Finish** $F$ | $F$ | $f(F) = 6$ (label 6) |
| **Finish** $D$ | $D$ | $f(D) = 5$ (label 5) |
| **Finish** $B$ | $B$ | $f(B) = 4$ (label 4). Back to $A$, visit $C$. |
| Discover $C$ | $C$ | Neighbors: $D$ (visited), $E$. Visit $E$. |
| Discover $E$ | $E$ | Neighbors: $F$ (visited). |
| **Finish** $E$ | $E$ | $f(E) = 3$ (label 3) |
| **Finish** $C$ | $C$ | $f(C) = 2$ (label 2) |
| **Finish** $A$ | $A$ | $f(A) = 1$ (label 1) |

All vertices visited. No restart needed.

**Finish order** (first to last finished): $F, D, B, E, C, A$

**Topological ordering** (reverse of finish order, or equivalently by label):

$$A \\to C \\to E \\to B \\to D \\to F$$

| Vertex | $A$ | $C$ | $E$ | $B$ | $D$ | $F$ |
|---|---|---|---|---|---|---|
| Topo position | 1 | 2 | 3 | 4 | 5 | 6 |

**Verification** (every edge must go from earlier to later):

| Edge | From position | To position | Valid? |
|---|---|---|---|
| $A \\to B$ | 1 | 4 | Yes |
| $A \\to C$ | 1 | 2 | Yes |
| $B \\to D$ | 4 | 5 | Yes |
| $C \\to D$ | 2 | 5 | Yes |
| $C \\to E$ | 2 | 3 | Yes |
| $D \\to F$ | 5 | 6 | Yes |
| $E \\to F$ | 3 | 6 | Yes |

All edges go forward in the ordering, confirming it is a valid topological sort.`,
  },
  {
    id: 'dsa-advanced-2',
    courseId: 'data-structures-algorithms-ai',
    topic: 'Advanced',
    difficulty: 'hard',
    question: `Apply the **A* search algorithm** to find the shortest path from $S$ to $G$ on the following 4x4 grid. The agent can move up, down, left, or right (no diagonals). Each move costs 1. Cells marked \`X\` are walls (impassable).

\`\`\`
S . . .
. X X .
. . . .
. X . G
\`\`\`

Grid coordinates: $S = (0,0)$, $G = (3,3)$.

Use the **Manhattan distance** as the heuristic: $h(v, G) = |row_v - row_G| + |col_v - col_G|$.

Show the priority queue state (sorted by $f = g + h$) and the vertex extracted at each step. Give the final shortest path and its cost.`,
    answer: `**Setup:**

Grid (row, col), 0-indexed:
\`\`\`
(0,0)S  (0,1).  (0,2).  (0,3).
(1,0).  (1,1)X  (1,2)X  (1,3).
(2,0).  (2,1).  (2,2).  (2,3).
(3,0).  (3,1)X  (3,2).  (3,3)G
\`\`\`

Walls at: $(1,1)$, $(1,2)$, $(3,1)$.

**A* Trace** ($f(v) = g(v) + h(v)$ where $h$ = Manhattan distance to $G = (3,3)$):

| Step | Extract | $g$ | $h$ | $f$ | Expand neighbors (update if better) |
|---|---|---|---|---|---|
| 0 | $(0,0)$ | 0 | 6 | 6 | $(0,1)$: $g{=}1, h{=}5, f{=}6$; $(1,0)$: $g{=}1, h{=}5, f{=}6$ |
| 1 | $(0,1)$ | 1 | 5 | 6 | $(0,2)$: $g{=}2, h{=}4, f{=}6$ |
| 2 | $(1,0)$ | 1 | 5 | 6 | $(2,0)$: $g{=}2, h{=}4, f{=}6$ |
| 3 | $(0,2)$ | 2 | 4 | 6 | $(0,3)$: $g{=}3, h{=}3, f{=}6$ |
| 4 | $(2,0)$ | 2 | 4 | 6 | $(2,1)$: $g{=}3, h{=}3, f{=}6$ |
| 5 | $(0,3)$ | 3 | 3 | 6 | $(1,3)$: $g{=}4, h{=}2, f{=}6$ |
| 6 | $(2,1)$ | 3 | 3 | 6 | $(2,2)$: $g{=}4, h{=}2, f{=}6$ |
| 7 | $(1,3)$ | 4 | 2 | 6 | $(2,3)$: $g{=}5, h{=}1, f{=}6$ |
| 8 | $(2,2)$ | 4 | 2 | 6 | $(2,3)$: $g{=}5$ (already $5$, no update); $(3,2)$: $g{=}5, h{=}1, f{=}6$ |
| 9 | $(2,3)$ | 5 | 1 | 6 | $(3,3)$: $g{=}6, h{=}0, f{=}6$ |
| 10 | $(3,3)$ | 6 | 0 | 6 | **Goal reached!** |

**Shortest path cost:** $6$

**Shortest path** (backtracking via parent pointers): There are two optimal paths of length 6, one through the top:

$$S(0,0) \\to (0,1) \\to (0,2) \\to (0,3) \\to (1,3) \\to (2,3) \\to G(3,3)$$

And one through the bottom:

$$S(0,0) \\to (1,0) \\to (2,0) \\to (2,1) \\to (2,2) \\to (3,2) \\to G(3,3)$$

Both have cost 6. The one returned depends on tie-breaking order.

**Key observations:**
- Notice that $f = 6$ for every extracted node. This is because the Manhattan distance is a **perfect heuristic** for this grid (all moves cost 1, no shortcuts). The heuristic exactly estimates the true distance for nodes on optimal paths.
- A* with an admissible and consistent heuristic guarantees finding the optimal path. Manhattan distance satisfies both properties on grids with uniform movement cost.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  LINEAR ALGEBRA AND CALCULUS — LIMITS (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'lac-limits-1',
    courseId: 'linear-algebra-calculus',
    topic: 'Limits',
    difficulty: 'easy',
    question: `Compute the following limit using algebraic simplification:

$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - x - 6}$$

Show all steps. If direct substitution yields an indeterminate form, explain what technique you use and why.`,
    answer: `**Step 1: Try direct substitution.**

$$\\frac{3^2 - 9}{3^2 - 3 - 6} = \\frac{9 - 9}{9 - 3 - 6} = \\frac{0}{0}$$

This is the indeterminate form $0/0$, so we need algebraic simplification.

**Step 2: Factor numerator and denominator.**

Numerator: $x^2 - 9 = (x - 3)(x + 3)$ (difference of squares)

Denominator: $x^2 - x - 6 = (x - 3)(x + 2)$ (factor by finding roots: $x = 3$ and $x = -2$)

**Step 3: Cancel the common factor.**

$$\\frac{x^2 - 9}{x^2 - x - 6} = \\frac{(x-3)(x+3)}{(x-3)(x+2)} = \\frac{x+3}{x+2} \\quad \\text{for } x \\neq 3$$

**Step 4: Evaluate the simplified expression.**

$$\\lim_{x \\to 3} \\frac{x+3}{x+2} = \\frac{3+3}{3+2} = \\frac{6}{5}$$

$$\\boxed{\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - x - 6} = \\frac{6}{5}}$$

**Note:** Canceling $(x-3)$ is valid because in a limit as $x \\to 3$, we consider $x$ values *near* 3 but *not equal to* 3, so $x - 3 \\neq 0$.`,
  },
  {
    id: 'lac-limits-2',
    courseId: 'linear-algebra-calculus',
    topic: 'Limits',
    difficulty: 'medium',
    question: `Compute the following limit using the conjugate (rationalization) technique:

$$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$$

Show all steps clearly.`,
    answer: `**Step 1: Try direct substitution.**

$$\\frac{\\sqrt{4} - 2}{4 - 4} = \\frac{2 - 2}{0} = \\frac{0}{0}$$

Indeterminate form, so we need to simplify.

**Step 2: Multiply by the conjugate.**

The conjugate of $\\sqrt{x} - 2$ is $\\sqrt{x} + 2$. Multiply numerator and denominator:

$$\\frac{\\sqrt{x} - 2}{x - 4} \\cdot \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2} = \\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{(x - 4)(\\sqrt{x} + 2)}$$

**Step 3: Simplify the numerator.**

Using the difference of squares: $(\\sqrt{x} - 2)(\\sqrt{x} + 2) = x - 4$.

$$= \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)}$$

**Step 4: Cancel the common factor** $(x - 4)$:

$$= \\frac{1}{\\sqrt{x} + 2} \\quad \\text{for } x \\neq 4$$

**Step 5: Evaluate.**

$$\\lim_{x \\to 4} \\frac{1}{\\sqrt{x} + 2} = \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$$

$$\\boxed{\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} = \\frac{1}{4}}$$

**Note:** This limit is actually the derivative of $f(x) = \\sqrt{x}$ at $x = 4$ by definition: $f'(4) = \\lim_{x \\to 4} \\frac{f(x) - f(4)}{x - 4} = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4}$.`,
  },
  {
    id: 'lac-limits-3',
    courseId: 'linear-algebra-calculus',
    topic: 'Limits',
    difficulty: 'hard',
    question: `Consider the piecewise function:

$$f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & \\text{if } x < 2 \\\\ ax + b & \\text{if } 2 \\leq x \\leq 5 \\\\ \\frac{x^2 - 3x - 10}{x - 5} & \\text{if } x > 5 \\end{cases}$$

Find the values of $a$ and $b$ that make $f$ continuous on all of $\\mathbb{R}$. Verify your answer by checking all three conditions for continuity at each boundary point.`,
    answer: `For $f$ to be continuous everywhere, it must be continuous at the boundary points $x = 2$ and $x = 5$.

**At $x = 2$:**

**Left limit** ($x < 2$): Simplify $\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2$ for $x \\neq 2$.

$$\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^-} (x + 2) = 4$$

**Function value:** $f(2) = 2a + b$ (using the middle piece).

**Right limit** ($x > 2$, still in middle piece): $\\lim_{x \\to 2^+} f(x) = 2a + b$.

For continuity: $2a + b = 4$ ... (Equation 1)

**At $x = 5$:**

**Right limit** ($x > 5$): Simplify $\\frac{x^2 - 3x - 10}{x - 5} = \\frac{(x-5)(x+2)}{x-5} = x + 2$ for $x \\neq 5$.

$$\\lim_{x \\to 5^+} f(x) = \\lim_{x \\to 5^+} (x + 2) = 7$$

**Function value:** $f(5) = 5a + b$ (using the middle piece).

**Left limit** ($x < 5$, still in middle piece): $\\lim_{x \\to 5^-} f(x) = 5a + b$.

For continuity: $5a + b = 7$ ... (Equation 2)

**Solve the system:**

Subtract Equation 1 from Equation 2:

$$(5a + b) - (2a + b) = 7 - 4$$
$$3a = 3$$
$$a = 1$$

Substitute back: $2(1) + b = 4 \\implies b = 2$.

$$\\boxed{a = 1, \\quad b = 2}$$

**Verification at $x = 2$:**
1. $f(2) = 1(2) + 2 = 4$ -- defined.
2. $\\lim_{x \\to 2^-} (x+2) = 4$ and $\\lim_{x \\to 2^+} (x+2) = 4$, so the two-sided limit is $4$ -- exists.
3. $\\lim_{x \\to 2} f(x) = 4 = f(2)$ -- limit equals function value. Continuous at $x=2$.

**Verification at $x = 5$:**
1. $f(5) = 1(5) + 2 = 7$ -- defined.
2. $\\lim_{x \\to 5^-} (x+2) = 7$ and $\\lim_{x \\to 5^+} (x+2) = 7$, so the two-sided limit is $7$ -- exists.
3. $\\lim_{x \\to 5} f(x) = 7 = f(5)$ -- limit equals function value. Continuous at $x=5$.

The middle piece becomes $f(x) = x + 2$, which matches both boundary pieces. In fact, $f(x) = x + 2$ for all $x$.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  LINEAR ALGEBRA AND CALCULUS — DERIVATIVES (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'lac-derivatives-1',
    courseId: 'linear-algebra-calculus',
    topic: 'Derivatives',
    difficulty: 'easy',
    question: `Compute the derivatives of the following functions. State which differentiation rule(s) you use in each case.

(a) $f(x) = 3x^5 - 2x^3 + 7x - 4$

(b) $g(x) = (2x + 1)(x^2 - 3)$

(c) $h(x) = (5x^2 - 1)^4$`,
    answer: `**(a)** Using the **power rule** ($\\frac{d}{dx} x^r = rx^{r-1}$) and **sum/constant multiple rules**:

$$f'(x) = 3 \\cdot 5x^4 - 2 \\cdot 3x^2 + 7 \\cdot 1 - 0 = 15x^4 - 6x^2 + 7$$

$$\\boxed{f'(x) = 15x^4 - 6x^2 + 7}$$

**(b)** Using the **product rule** ($(fg)' = f'g + fg'$):

Let $f(x) = 2x + 1$ and $g(x) = x^2 - 3$.
- $f'(x) = 2$
- $g'(x) = 2x$

$$g'(x) = f'(x) \\cdot g(x) + f(x) \\cdot g'(x) = 2(x^2 - 3) + (2x+1)(2x)$$

$$= 2x^2 - 6 + 4x^2 + 2x = 6x^2 + 2x - 6$$

$$\\boxed{g'(x) = 6x^2 + 2x - 6}$$

**Verification by expanding first:** $g(x) = 2x^3 - 6x + x^2 - 3 = 2x^3 + x^2 - 6x - 3$, so $g'(x) = 6x^2 + 2x - 6$. Matches.

**(c)** Using the **chain rule** ($(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)$):

Let $u = 5x^2 - 1$, so $h(x) = u^4$.
- Outer: $\\frac{d}{du} u^4 = 4u^3$
- Inner: $\\frac{du}{dx} = 10x$

$$h'(x) = 4(5x^2 - 1)^3 \\cdot 10x = 40x(5x^2 - 1)^3$$

$$\\boxed{h'(x) = 40x(5x^2 - 1)^3}$$`,
  },
  {
    id: 'lac-derivatives-2',
    courseId: 'linear-algebra-calculus',
    topic: 'Derivatives',
    difficulty: 'medium',
    question: `Let $f(x, y) = x^3 y^2 + 2xy^3 - 5x^2 + y$.

(a) Compute the partial derivatives $\\frac{\\partial f}{\\partial x}$ and $\\frac{\\partial f}{\\partial y}$.

(b) Compute the gradient $\\nabla f$ at the point $(1, -1)$.

(c) In which direction does $f$ increase most rapidly at $(1, -1)$? What is the rate of increase in that direction?`,
    answer: `**(a) Partial derivatives:**

To find $\\frac{\\partial f}{\\partial x}$, differentiate with respect to $x$ while treating $y$ as a constant:

$$\\frac{\\partial f}{\\partial x} = 3x^2 y^2 + 2y^3 - 10x$$

To find $\\frac{\\partial f}{\\partial y}$, differentiate with respect to $y$ while treating $x$ as a constant:

$$\\frac{\\partial f}{\\partial y} = 2x^3 y + 6xy^2 + 1$$

**(b) Gradient at $(1, -1)$:**

$$\\frac{\\partial f}{\\partial x}(1, -1) = 3(1)^2(-1)^2 + 2(-1)^3 - 10(1) = 3 - 2 - 10 = -9$$

$$\\frac{\\partial f}{\\partial y}(1, -1) = 2(1)^3(-1) + 6(1)(-1)^2 + 1 = -2 + 6 + 1 = 5$$

$$\\boxed{\\nabla f(1, -1) = \\begin{bmatrix} -9 \\\\ 5 \\end{bmatrix}}$$

**(c) Direction of steepest ascent:**

$f$ increases most rapidly in the direction of the gradient $\\nabla f$. At $(1, -1)$, this direction is:

$$\\mathbf{u} = \\frac{\\nabla f}{\\|\\nabla f\\|} = \\frac{1}{\\sqrt{(-9)^2 + 5^2}} \\begin{bmatrix} -9 \\\\ 5 \\end{bmatrix} = \\frac{1}{\\sqrt{81 + 25}} \\begin{bmatrix} -9 \\\\ 5 \\end{bmatrix} = \\frac{1}{\\sqrt{106}} \\begin{bmatrix} -9 \\\\ 5 \\end{bmatrix}$$

The **rate of increase** in that direction (the maximum directional derivative) is:

$$\\|\\nabla f(1, -1)\\| = \\sqrt{81 + 25} = \\sqrt{106} \\approx 10.30$$`,
  },
  {
    id: 'lac-derivatives-3',
    courseId: 'linear-algebra-calculus',
    topic: 'Derivatives',
    difficulty: 'hard',
    question: `Let $\\mathbf{f} : \\mathbb{R}^2 \\to \\mathbb{R}^3$ be defined by:

$$\\mathbf{f}(x, y) = \\begin{bmatrix} x^2 y \\\\ \\sin(xy) \\\\ e^x + y^2 \\end{bmatrix}$$

(a) Compute the **Jacobian matrix** $D\\mathbf{f}(x, y)$.

(b) Evaluate the Jacobian at the point $(0, 1)$.

(c) If $\\mathbf{g}(t) = (t^2, t+1)$, use the chain rule for maps to find $D(\\mathbf{f} \\circ \\mathbf{g})(t)$ at $t = 0$.`,
    answer: `**(a) Jacobian matrix:**

For $\\mathbf{f} : \\mathbb{R}^2 \\to \\mathbb{R}^3$ with components $f_1 = x^2 y$, $f_2 = \\sin(xy)$, $f_3 = e^x + y^2$:

$$D\\mathbf{f}(x, y) = \\begin{bmatrix} \\frac{\\partial f_1}{\\partial x} & \\frac{\\partial f_1}{\\partial y} \\\\[6pt] \\frac{\\partial f_2}{\\partial x} & \\frac{\\partial f_2}{\\partial y} \\\\[6pt] \\frac{\\partial f_3}{\\partial x} & \\frac{\\partial f_3}{\\partial y} \\end{bmatrix} = \\begin{bmatrix} 2xy & x^2 \\\\ y\\cos(xy) & x\\cos(xy) \\\\ e^x & 2y \\end{bmatrix}$$

**(b) At $(0, 1)$:**

$$D\\mathbf{f}(0, 1) = \\begin{bmatrix} 2(0)(1) & 0^2 \\\\ 1 \\cdot \\cos(0) & 0 \\cdot \\cos(0) \\\\ e^0 & 2(1) \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 1 & 0 \\\\ 1 & 2 \\end{bmatrix}$$

**(c) Chain rule:** $D(\\mathbf{f} \\circ \\mathbf{g})(t) = D\\mathbf{f}(\\mathbf{g}(t)) \\cdot D\\mathbf{g}(t)$.

First, $\\mathbf{g}(t) = (t^2, t+1)$, so:

$$D\\mathbf{g}(t) = \\begin{bmatrix} \\frac{d}{dt}(t^2) \\\\[4pt] \\frac{d}{dt}(t+1) \\end{bmatrix} = \\begin{bmatrix} 2t \\\\ 1 \\end{bmatrix}$$

At $t = 0$: $\\mathbf{g}(0) = (0, 1)$ and $D\\mathbf{g}(0) = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$.

Now multiply:

$$D(\\mathbf{f} \\circ \\mathbf{g})(0) = D\\mathbf{f}(0, 1) \\cdot D\\mathbf{g}(0) = \\begin{bmatrix} 0 & 0 \\\\ 1 & 0 \\\\ 1 & 2 \\end{bmatrix} \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 2 \\end{bmatrix}$$

$$\\boxed{D(\\mathbf{f} \\circ \\mathbf{g})(0) = \\begin{bmatrix} 0 \\\\ 0 \\\\ 2 \\end{bmatrix}}$$

This is a $3 \\times 1$ matrix (the Jacobian of the composed map $\\mathbb{R} \\to \\mathbb{R}^3$), which makes sense dimensionally: $(3 \\times 2)(2 \\times 1) = 3 \\times 1$.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  LINEAR ALGEBRA AND CALCULUS — LINEAR SYSTEMS (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'lac-systems-1',
    courseId: 'linear-algebra-calculus',
    topic: 'Linear Systems',
    difficulty: 'easy',
    question: `Solve the following system of linear equations using row reduction. Show the augmented matrix, each row operation, the echelon form, and the reduced echelon form.

$$\\begin{cases} x_1 + 2x_2 + x_3 = 9 \\\\ 2x_1 + 4x_2 + 3x_3 = 21 \\\\ 3x_1 + 7x_2 + 2x_3 = 22 \\end{cases}$$`,
    answer: `**Augmented matrix:**

$$\\begin{bmatrix} 1 & 2 & 1 & 9 \\\\ 2 & 4 & 3 & 21 \\\\ 3 & 7 & 2 & 22 \\end{bmatrix}$$

**Step 1:** $R_2 \\leftarrow R_2 - 2R_1$ and $R_3 \\leftarrow R_3 - 3R_1$:

$$\\begin{bmatrix} 1 & 2 & 1 & 9 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 1 & -1 & -5 \\end{bmatrix}$$

**Step 2:** Swap $R_2 \\leftrightarrow R_3$:

$$\\begin{bmatrix} 1 & 2 & 1 & 9 \\\\ 0 & 1 & -1 & -5 \\\\ 0 & 0 & 1 & 3 \\end{bmatrix}$$

This is now in **echelon form** (three pivots in columns 1, 2, 3).

**Step 3:** Back-substitute to get **reduced echelon form**.

$R_2 \\leftarrow R_2 + R_3$:

$$\\begin{bmatrix} 1 & 2 & 1 & 9 \\\\ 0 & 1 & 0 & -2 \\\\ 0 & 0 & 1 & 3 \\end{bmatrix}$$

$R_1 \\leftarrow R_1 - R_3$:

$$\\begin{bmatrix} 1 & 2 & 0 & 6 \\\\ 0 & 1 & 0 & -2 \\\\ 0 & 0 & 1 & 3 \\end{bmatrix}$$

$R_1 \\leftarrow R_1 - 2R_2$:

$$\\begin{bmatrix} 1 & 0 & 0 & 10 \\\\ 0 & 1 & 0 & -2 \\\\ 0 & 0 & 1 & 3 \\end{bmatrix}$$

**Reduced echelon form** achieved.

**Solution:** $x_1 = 10$, $x_2 = -2$, $x_3 = 3$.

**Verification:** $1(10) + 2(-2) + 1(3) = 10 - 4 + 3 = 9$ (correct), $2(10) + 4(-2) + 3(3) = 20 - 8 + 9 = 21$ (correct), $3(10) + 7(-2) + 2(3) = 30 - 14 + 6 = 22$ (correct).`,
  },
  {
    id: 'lac-systems-2',
    courseId: 'linear-algebra-calculus',
    topic: 'Linear Systems',
    difficulty: 'medium',
    question: `For each of the following augmented matrices (already in echelon form), determine whether the system has **0, 1, or infinitely many solutions**. Justify your answer by identifying pivot positions and free variables.

(a) $\\begin{bmatrix} 1 & 3 & -2 & 5 \\\\ 0 & 1 & 4 & 7 \\\\ 0 & 0 & 0 & 3 \\end{bmatrix}$

(b) $\\begin{bmatrix} 1 & -1 & 2 & 0 & 4 \\\\ 0 & 0 & 1 & 3 & 2 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}$

(c) $\\begin{bmatrix} 2 & 0 & 6 \\\\ 0 & 1 & -3 \\\\ 0 & 0 & 0 \\end{bmatrix}$`,
    answer: `**(a)** $\\begin{bmatrix} 1 & 3 & -2 & 5 \\\\ 0 & 1 & 4 & 7 \\\\ 0 & 0 & 0 & 3 \\end{bmatrix}$

The last row represents the equation $0x_1 + 0x_2 + 0x_3 = 3$, i.e., $0 = 3$. This is a **contradiction**.

The rightmost column (column 4) is a pivot column in row 3.

**Answer: 0 solutions** (the system is **inconsistent**).

**(b)** $\\begin{bmatrix} 1 & -1 & 2 & 0 & 4 \\\\ 0 & 0 & 1 & 3 & 2 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}$

This is a system with 4 variables ($x_1, x_2, x_3, x_4$) and the augmented column is column 5.

Pivots are in columns 1 and 3 (the leading entries). There is no row of the form $[0\\;0\\;0\\;0\\;b]$ with $b \\neq 0$, so the system is **consistent**.

- **Basic variables:** $x_1$ (column 1), $x_3$ (column 3)
- **Free variables:** $x_2$ (column 2), $x_4$ (column 4)

Since there are free variables, the system has **infinitely many solutions** (a 2-parameter family).

From the echelon form: $x_3 + 3x_4 = 2 \\Rightarrow x_3 = 2 - 3x_4$, and $x_1 - x_2 + 2x_3 = 4 \\Rightarrow x_1 = 4 + x_2 - 2(2 - 3x_4) = x_2 + 6x_4$.

**(c)** $\\begin{bmatrix} 2 & 0 & 6 \\\\ 0 & 1 & -3 \\\\ 0 & 0 & 0 \\end{bmatrix}$

This is a system with 2 variables ($x_1, x_2$) and augmented column is column 3.

Pivots are in columns 1 and 2. No contradiction row. No free variables (every variable column is a pivot column).

**Answer: Exactly 1 solution** (unique).

From the matrix: $2x_1 = 6 \\Rightarrow x_1 = 3$ and $x_2 = -3$.`,
  },
  {
    id: 'lac-systems-3',
    courseId: 'linear-algebra-calculus',
    topic: 'Linear Systems',
    difficulty: 'hard',
    question: `Determine whether the following vectors in $\\mathbb{R}^4$ are **linearly independent**:

$$v_1 = \\begin{bmatrix} 1 \\\\ 2 \\\\ -1 \\\\ 3 \\end{bmatrix}, \\quad v_2 = \\begin{bmatrix} 2 \\\\ 5 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\quad v_3 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 2 \\\\ -5 \\end{bmatrix}$$

Use the matrix method: form the matrix $A = [v_1 \\; v_2 \\; v_3]$ and row reduce. Explain your conclusion.`,
    answer: `**Form the matrix** with vectors as columns:

$$A = \\begin{bmatrix} 1 & 2 & 0 \\\\ 2 & 5 & 1 \\\\ -1 & 0 & 2 \\\\ 3 & 1 & -5 \\end{bmatrix}$$

The vectors are linearly independent if and only if $Ax = 0$ has only the trivial solution, which happens when every column is a pivot column.

**Row reduce:**

$R_2 \\leftarrow R_2 - 2R_1$, $R_3 \\leftarrow R_3 + R_1$, $R_4 \\leftarrow R_4 - 3R_1$:

$$\\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 2 & 2 \\\\ 0 & -5 & -5 \\end{bmatrix}$$

$R_3 \\leftarrow R_3 - 2R_2$, $R_4 \\leftarrow R_4 + 5R_2$:

$$\\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$$

**Echelon form** has pivots in columns 1 and 2 only. Column 3 is a **free variable** column.

Since there are only 2 pivots for 3 columns, the system $Ax = 0$ has a nontrivial solution.

$$\\boxed{\\text{The vectors are linearly dependent.}}$$

**Finding the dependence relation:** From the echelon form:
- $x_2 + x_3 = 0 \\Rightarrow x_2 = -x_3$
- $x_1 + 2x_2 = 0 \\Rightarrow x_1 = -2x_2 = 2x_3$

Let $x_3 = 1$: then $x_1 = 2$, $x_2 = -1$. So:

$$2v_1 - v_2 + v_3 = 0 \\quad \\text{i.e.,} \\quad v_3 = -2v_1 + v_2$$

**Verification:** $-2\\begin{bmatrix}1\\\\2\\\\-1\\\\3\\end{bmatrix} + \\begin{bmatrix}2\\\\5\\\\0\\\\1\\end{bmatrix} = \\begin{bmatrix}0\\\\1\\\\2\\\\-5\\end{bmatrix} = v_3$. Confirmed.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  LINEAR ALGEBRA AND CALCULUS — MATRIX OPERATIONS (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'lac-matrices-1',
    courseId: 'linear-algebra-calculus',
    topic: 'Matrix Operations',
    difficulty: 'easy',
    question: `Let $A = \\begin{bmatrix} 1 & 3 \\\\ 2 & 5 \\end{bmatrix}$ and $B = \\begin{bmatrix} 4 & -1 \\\\ 0 & 2 \\end{bmatrix}$.

(a) Compute $AB$.

(b) Compute $BA$. Is $AB = BA$?

(c) Find $A^{-1}$ using the $2 \\times 2$ inverse formula.

(d) Verify that $A A^{-1} = I$.`,
    answer: `**(a) $AB$:**

$$AB = \\begin{bmatrix} 1 & 3 \\\\ 2 & 5 \\end{bmatrix} \\begin{bmatrix} 4 & -1 \\\\ 0 & 2 \\end{bmatrix}$$

$$= \\begin{bmatrix} 1(4)+3(0) & 1(-1)+3(2) \\\\ 2(4)+5(0) & 2(-1)+5(2) \\end{bmatrix} = \\begin{bmatrix} 4 & 5 \\\\ 8 & 8 \\end{bmatrix}$$

**(b) $BA$:**

$$BA = \\begin{bmatrix} 4 & -1 \\\\ 0 & 2 \\end{bmatrix} \\begin{bmatrix} 1 & 3 \\\\ 2 & 5 \\end{bmatrix} = \\begin{bmatrix} 4(1)+(-1)(2) & 4(3)+(-1)(5) \\\\ 0(1)+2(2) & 0(3)+2(5) \\end{bmatrix} = \\begin{bmatrix} 2 & 7 \\\\ 4 & 10 \\end{bmatrix}$$

$AB \\neq BA$. **Matrix multiplication is not commutative.**

**(c) $A^{-1}$:**

For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, the inverse is $A^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$.

$$\\det(A) = ad - bc = 1(5) - 3(2) = 5 - 6 = -1 \\neq 0$$

So $A$ is invertible:

$$A^{-1} = \\frac{1}{-1} \\begin{bmatrix} 5 & -3 \\\\ -2 & 1 \\end{bmatrix} = \\begin{bmatrix} -5 & 3 \\\\ 2 & -1 \\end{bmatrix}$$

**(d) Verification:**

$$AA^{-1} = \\begin{bmatrix} 1 & 3 \\\\ 2 & 5 \\end{bmatrix} \\begin{bmatrix} -5 & 3 \\\\ 2 & -1 \\end{bmatrix} = \\begin{bmatrix} -5+6 & 3-3 \\\\ -10+10 & 6-5 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = I$$

Verified.`,
  },
  {
    id: 'lac-matrices-2',
    courseId: 'linear-algebra-calculus',
    topic: 'Matrix Operations',
    difficulty: 'medium',
    question: `Compute the determinant of the following matrix using **cofactor expansion**. Choose the row or column that minimizes computation and explain your choice.

$$A = \\begin{bmatrix} 2 & 0 & 1 \\\\ 3 & -1 & 0 \\\\ 1 & 4 & 5 \\end{bmatrix}$$`,
    answer: `**Choosing the best row/column:**

We look for the row or column with the most zeros to minimize computation.
- Row 1: one zero (position $(1,2)$)
- Row 2: one zero (position $(2,3)$)
- Column 2: no zeros but has a $0$ in position $(1,2)$
- Column 3: one zero (position $(2,3)$)

Row 1 or row 2 both have one zero. Let's expand along **Row 1** (the first row):

$$\\det(A) = a_{11} C_{11} + a_{12} C_{12} + a_{13} C_{13}$$

where $C_{ij} = (-1)^{i+j} \\det(A_{ij})$.

**Term 1:** $a_{11} = 2$, $C_{11} = (-1)^{1+1} \\det \\begin{bmatrix} -1 & 0 \\\\ 4 & 5 \\end{bmatrix} = (+1)((-1)(5) - (0)(4)) = -5$

$$a_{11} C_{11} = 2(-5) = -10$$

**Term 2:** $a_{12} = 0$, so $a_{12} C_{12} = 0$ (no computation needed!)

**Term 3:** $a_{13} = 1$, $C_{13} = (-1)^{1+3} \\det \\begin{bmatrix} 3 & -1 \\\\ 1 & 4 \\end{bmatrix} = (+1)((3)(4) - (-1)(1)) = 12 + 1 = 13$

$$a_{13} C_{13} = 1(13) = 13$$

**Result:**

$$\\det(A) = -10 + 0 + 13 = 3$$

$$\\boxed{\\det(A) = 3}$$

Since $\\det(A) = 3 \\neq 0$, the matrix $A$ is **invertible**.`,
  },
  {
    id: 'lac-matrices-3',
    courseId: 'linear-algebra-calculus',
    topic: 'Matrix Operations',
    difficulty: 'hard',
    question: `Let $A$ be an $n \\times n$ matrix. Prove the following statement:

**If** $A^2 = A$ (i.e., $A$ is idempotent), **then** either $\\det(A) = 0$ or $\\det(A) = 1$.

Use properties of determinants. Then give an example of a $2 \\times 2$ matrix (other than $I$ and the zero matrix) satisfying $A^2 = A$, and verify your result.`,
    answer: `**Proof:**

Given: $A^2 = A$.

Take the determinant of both sides:

$$\\det(A^2) = \\det(A)$$

By the multiplicative property of determinants ($\\det(AB) = \\det(A)\\det(B)$):

$$\\det(A) \\cdot \\det(A) = \\det(A)$$

$$(\\det(A))^2 = \\det(A)$$

$$(\\det(A))^2 - \\det(A) = 0$$

$$\\det(A)(\\det(A) - 1) = 0$$

Therefore $\\det(A) = 0$ or $\\det(A) = 1$. $\\blacksquare$

**Note:** By the Invertible Matrix Theorem, $\\det(A) = 0$ means $A$ is singular, and $\\det(A) = 1$ means $A$ is invertible. If $A$ is invertible and $A^2 = A$, multiply both sides by $A^{-1}$: $A = I$. So the only invertible idempotent matrix is the identity.

**Example:** Let

$$A = \\begin{bmatrix} 1 & 0 \\\\ 1 & 0 \\end{bmatrix}$$

**Verify** $A^2 = A$:

$$A^2 = \\begin{bmatrix} 1 & 0 \\\\ 1 & 0 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 1(1)+0(1) & 1(0)+0(0) \\\\ 1(1)+0(1) & 1(0)+0(0) \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 1 & 0 \\end{bmatrix} = A \\;\\checkmark$$

**Verify determinant:**

$$\\det(A) = 1(0) - 0(1) = 0 \\;\\checkmark$$

This confirms our result: $\\det(A) \\in \\{0, 1\\}$, and in this case $\\det(A) = 0$ (the matrix is singular).`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  LINEAR ALGEBRA AND CALCULUS — EIGENVALUES AND DIAGONALIZATION (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'lac-eigen-1',
    courseId: 'linear-algebra-calculus',
    topic: 'Eigenvalues and Diagonalization',
    difficulty: 'easy',
    question: `Find the **eigenvalues** of the matrix:

$$A = \\begin{bmatrix} 4 & -2 \\\\ 1 & 1 \\end{bmatrix}$$

by solving the characteristic equation $\\det(A - \\lambda I) = 0$. Show all steps.`,
    answer: `**Step 1:** Form $A - \\lambda I$:

$$A - \\lambda I = \\begin{bmatrix} 4 - \\lambda & -2 \\\\ 1 & 1 - \\lambda \\end{bmatrix}$$

**Step 2:** Compute the characteristic polynomial:

$$\\det(A - \\lambda I) = (4 - \\lambda)(1 - \\lambda) - (-2)(1)$$

$$= (4 - \\lambda)(1 - \\lambda) + 2$$

$$= 4 - 4\\lambda - \\lambda + \\lambda^2 + 2$$

$$= \\lambda^2 - 5\\lambda + 6$$

**Step 3:** Solve $\\lambda^2 - 5\\lambda + 6 = 0$:

Factor: $(\\lambda - 2)(\\lambda - 3) = 0$

$$\\boxed{\\lambda_1 = 2, \\quad \\lambda_2 = 3}$$

**Quick check using trace and determinant:**
- $\\text{tr}(A) = 4 + 1 = 5 = \\lambda_1 + \\lambda_2 = 2 + 3$ (correct)
- $\\det(A) = 4(1) - (-2)(1) = 6 = \\lambda_1 \\lambda_2 = 2 \\cdot 3$ (correct)

**Note:** For $2 \\times 2$ matrices, the characteristic polynomial is always $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$. This shortcut is very useful on exams.`,
  },
  {
    id: 'lac-eigen-2',
    courseId: 'linear-algebra-calculus',
    topic: 'Eigenvalues and Diagonalization',
    difficulty: 'medium',
    question: `Find all **eigenvalues and eigenvectors** of the matrix:

$$A = \\begin{bmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 2 & 0 & 1 \\end{bmatrix}$$

For each eigenvalue, find a basis for its eigenspace.`,
    answer: `**Step 1: Find eigenvalues** via $\\det(A - \\lambda I) = 0$.

$$A - \\lambda I = \\begin{bmatrix} 1-\\lambda & 0 & 2 \\\\ 0 & 3-\\lambda & 0 \\\\ 2 & 0 & 1-\\lambda \\end{bmatrix}$$

Expand along row 2 (two zeros make this efficient):

$$\\det(A - \\lambda I) = (3 - \\lambda) \\det \\begin{bmatrix} 1-\\lambda & 2 \\\\ 2 & 1-\\lambda \\end{bmatrix}$$

$$= (3 - \\lambda)[(1-\\lambda)^2 - 4]$$

$$= (3 - \\lambda)(1 - 2\\lambda + \\lambda^2 - 4)$$

$$= (3 - \\lambda)(\\lambda^2 - 2\\lambda - 3)$$

$$= (3 - \\lambda)(\\lambda - 3)(\\lambda + 1)$$

$$= -(\\lambda - 3)^2(\\lambda + 1)$$

**Eigenvalues:** $\\lambda_1 = 3$ (multiplicity 2) and $\\lambda_2 = -1$ (multiplicity 1).

**Step 2: Find eigenvectors for $\\lambda_1 = 3$:**

Solve $(A - 3I)x = 0$:

$$A - 3I = \\begin{bmatrix} -2 & 0 & 2 \\\\ 0 & 0 & 0 \\\\ 2 & 0 & -2 \\end{bmatrix}$$

$R_3 \\leftarrow R_3 + R_1$, then $R_1 \\leftarrow -\\frac{1}{2}R_1$:

$$\\begin{bmatrix} 1 & 0 & -1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$$

Free variables: $x_2$ and $x_3$. From row 1: $x_1 = x_3$.

General solution: $x = x_2 \\begin{bmatrix} 0\\\\1\\\\0 \\end{bmatrix} + x_3 \\begin{bmatrix} 1\\\\0\\\\1 \\end{bmatrix}$

**Eigenspace basis for $\\lambda = 3$:** $\\left\\{ \\begin{bmatrix}0\\\\1\\\\0\\end{bmatrix}, \\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix} \\right\\}$ (dimension 2)

**Step 3: Find eigenvectors for $\\lambda_2 = -1$:**

Solve $(A + I)x = 0$:

$$A + I = \\begin{bmatrix} 2 & 0 & 2 \\\\ 0 & 4 & 0 \\\\ 2 & 0 & 2 \\end{bmatrix}$$

Row reduce: $R_3 \\leftarrow R_3 - R_1$, scale:

$$\\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$$

Free variable: $x_3$. From rows: $x_1 = -x_3$, $x_2 = 0$.

General solution: $x = x_3 \\begin{bmatrix} -1\\\\0\\\\1 \\end{bmatrix}$

**Eigenspace basis for $\\lambda = -1$:** $\\left\\{ \\begin{bmatrix}-1\\\\0\\\\1\\end{bmatrix} \\right\\}$ (dimension 1)

**Summary:**

| Eigenvalue | Multiplicity | Eigenspace basis | Eigenspace dimension |
|---|---|---|---|
| $\\lambda = 3$ | 2 | $\\{(0,1,0)^T,\\; (1,0,1)^T\\}$ | 2 |
| $\\lambda = -1$ | 1 | $\\{(-1,0,1)^T\\}$ | 1 |

Total independent eigenvectors: $2 + 1 = 3 = n$, so $A$ is diagonalizable.`,
  },
  {
    id: 'lac-eigen-3',
    courseId: 'linear-algebra-calculus',
    topic: 'Eigenvalues and Diagonalization',
    difficulty: 'hard',
    question: `Determine whether the matrix

$$A = \\begin{bmatrix} 2 & 1 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$$

is diagonalizable. If so, find an invertible matrix $P$ and a diagonal matrix $D$ such that $A = PDP^{-1}$. If not, explain why.`,
    answer: `**Step 1: Find eigenvalues.**

$A$ is upper triangular, so the eigenvalues are the diagonal entries:

$$\\lambda_1 = 2 \\text{ (multiplicity 2)}, \\quad \\lambda_2 = 3 \\text{ (multiplicity 1)}$$

**Step 2: Find eigenspaces.**

**For $\\lambda = 2$:** Solve $(A - 2I)x = 0$:

$$A - 2I = \\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$

This is already in echelon form. Pivots in columns 2 and 3. Free variable: $x_1$.

From the matrix: $x_2 = 0$, $x_3 = 0$, $x_1$ is free.

Eigenspace: $\\text{span}\\left\\{\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}\\right\\}$, dimension $= 1$.

**For $\\lambda = 3$:** Solve $(A - 3I)x = 0$:

$$A - 3I = \\begin{bmatrix} -1 & 1 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$$

From row 2: $x_2 = 0$. From row 1: $-x_1 + x_2 = 0 \\Rightarrow x_1 = 0$. Free variable: $x_3$.

Eigenspace: $\\text{span}\\left\\{\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix}\\right\\}$, dimension $= 1$.

**Step 3: Check diagonalizability.**

Total independent eigenvectors: $1 + 1 = 2 < 3 = n$.

$$\\boxed{A \\text{ is NOT diagonalizable.}}$$

**Explanation:** The eigenvalue $\\lambda = 2$ has algebraic multiplicity 2 but geometric multiplicity 1 (eigenspace dimension is only 1). For diagonalizability, we need the geometric multiplicity to equal the algebraic multiplicity for every eigenvalue. Since $1 < 2$ for $\\lambda = 2$, we cannot find 3 linearly independent eigenvectors, so $A$ is not diagonalizable.

**Intuition:** The $1$ in position $(1,2)$ of $A$ prevents diagonalizability. If it were $0$, $A$ would already be diagonal. Matrices of the form $\\begin{bmatrix} a & 1 \\\\ 0 & a \\end{bmatrix}$ (with a repeated eigenvalue and a $1$ on the superdiagonal) are the canonical examples of non-diagonalizable matrices.`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  LINEAR ALGEBRA AND CALCULUS — VECTOR SPACES AND ORTHOGONALITY (3 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'lac-spaces-1',
    courseId: 'linear-algebra-calculus',
    topic: 'Vector Spaces and Orthogonality',
    difficulty: 'medium',
    question: `Let $W = \\left\\{ \\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix} \\in \\mathbb{R}^3 : a - 2b + c = 0 \\right\\}$.

(a) Prove that $W$ is a **subspace** of $\\mathbb{R}^3$ by verifying the three subspace conditions.

(b) Find a **basis** for $W$.

(c) What is $\\dim(W)$?`,
    answer: `**(a) Subspace verification:**

**Condition 1: Zero vector.** Check if $\\mathbf{0} = (0, 0, 0)^T \\in W$:

$0 - 2(0) + 0 = 0$. Yes, $\\mathbf{0} \\in W$. $\\checkmark$

**Condition 2: Closed under addition.** Let $\\mathbf{u} = (a_1, b_1, c_1)^T$ and $\\mathbf{v} = (a_2, b_2, c_2)^T$ be in $W$. Then $a_1 - 2b_1 + c_1 = 0$ and $a_2 - 2b_2 + c_2 = 0$.

For $\\mathbf{u} + \\mathbf{v} = (a_1 + a_2,\\; b_1 + b_2,\\; c_1 + c_2)^T$:

$(a_1 + a_2) - 2(b_1 + b_2) + (c_1 + c_2) = (a_1 - 2b_1 + c_1) + (a_2 - 2b_2 + c_2) = 0 + 0 = 0$

So $\\mathbf{u} + \\mathbf{v} \\in W$. $\\checkmark$

**Condition 3: Closed under scalar multiplication.** Let $\\mathbf{u} = (a, b, c)^T \\in W$ and $k \\in \\mathbb{R}$. Then $a - 2b + c = 0$.

For $k\\mathbf{u} = (ka, kb, kc)^T$:

$ka - 2(kb) + kc = k(a - 2b + c) = k \\cdot 0 = 0$

So $k\\mathbf{u} \\in W$. $\\checkmark$

Therefore $W$ is a subspace of $\\mathbb{R}^3$.

**(b) Finding a basis:**

The constraint $a - 2b + c = 0$ means $a = 2b - c$. Let $b$ and $c$ be free parameters:

$$\\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix} = \\begin{bmatrix} 2b - c \\\\ b \\\\ c \\end{bmatrix} = b \\begin{bmatrix} 2 \\\\ 1 \\\\ 0 \\end{bmatrix} + c \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}$$

**Basis for $W$:**

$$\\mathcal{B} = \\left\\{ \\begin{bmatrix} 2 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}$$

These vectors are linearly independent (neither is a scalar multiple of the other) and span $W$.

**(c) Dimension:**

$$\\dim(W) = 2$$

This makes sense: $W$ is defined by one linear equation in $\\mathbb{R}^3$, so it is a plane through the origin with dimension $3 - 1 = 2$.

**Alternative viewpoint:** $W = \\text{Nul}(A)$ where $A = \\begin{bmatrix} 1 & -2 & 1 \\end{bmatrix}$. By the Rank Theorem: $\\text{rank}(A) + \\text{nullity}(A) = 3$, so $\\text{nullity}(A) = 3 - 1 = 2$.`,
  },
  {
    id: 'lac-spaces-2',
    courseId: 'linear-algebra-calculus',
    topic: 'Vector Spaces and Orthogonality',
    difficulty: 'medium',
    question: `Apply the **Gram-Schmidt process** to orthogonalize the following basis for a subspace of $\\mathbb{R}^3$:

$$x_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad x_2 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\quad x_3 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix}$$

Show all dot product computations and produce the orthogonal basis $\\{v_1, v_2, v_3\\}$.`,
    answer: `**Step 1:** Set $v_1 = x_1$:

$$v_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$$

**Step 2:** Compute $v_2 = x_2 - \\frac{x_2 \\cdot v_1}{v_1 \\cdot v_1} v_1$:

$$x_2 \\cdot v_1 = (1)(1) + (0)(1) + (1)(0) = 1$$

$$v_1 \\cdot v_1 = 1^2 + 1^2 + 0^2 = 2$$

$$v_2 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix} - \\frac{1}{2} \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1/2 \\\\ -1/2 \\\\ 1 \\end{bmatrix}$$

**Check orthogonality:** $v_1 \\cdot v_2 = (1)(1/2) + (1)(-1/2) + (0)(1) = 0$ $\\checkmark$

**Step 3:** Compute $v_3 = x_3 - \\frac{x_3 \\cdot v_1}{v_1 \\cdot v_1} v_1 - \\frac{x_3 \\cdot v_2}{v_2 \\cdot v_2} v_2$:

$$x_3 \\cdot v_1 = (0)(1) + (1)(1) + (1)(0) = 1$$

$$x_3 \\cdot v_2 = (0)(1/2) + (1)(-1/2) + (1)(1) = 1/2$$

$$v_2 \\cdot v_2 = (1/2)^2 + (-1/2)^2 + 1^2 = 1/4 + 1/4 + 1 = 3/2$$

$$v_3 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix} - \\frac{1}{2} \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix} - \\frac{1/2}{3/2} \\begin{bmatrix} 1/2 \\\\ -1/2 \\\\ 1 \\end{bmatrix}$$

$$= \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix} - \\begin{bmatrix} 1/2 \\\\ 1/2 \\\\ 0 \\end{bmatrix} - \\frac{1}{3} \\begin{bmatrix} 1/2 \\\\ -1/2 \\\\ 1 \\end{bmatrix}$$

$$= \\begin{bmatrix} 0 - 1/2 - 1/6 \\\\ 1 - 1/2 + 1/6 \\\\ 1 - 0 - 1/3 \\end{bmatrix} = \\begin{bmatrix} -2/3 \\\\ 2/3 \\\\ 2/3 \\end{bmatrix}$$

**Check orthogonality:**
- $v_1 \\cdot v_3 = (1)(-2/3) + (1)(2/3) + (0)(2/3) = 0$ $\\checkmark$
- $v_2 \\cdot v_3 = (1/2)(-2/3) + (-1/2)(2/3) + (1)(2/3) = -1/3 - 1/3 + 2/3 = 0$ $\\checkmark$

**Orthogonal basis:**

$$\\boxed{v_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad v_2 = \\begin{bmatrix} 1/2 \\\\ -1/2 \\\\ 1 \\end{bmatrix}, \\quad v_3 = \\begin{bmatrix} -2/3 \\\\ 2/3 \\\\ 2/3 \\end{bmatrix}}$$

**Tip:** To avoid fractions, you can scale $v_2$ by $2$ to get $(1, -1, 2)^T$ and $v_3$ by $3/2$ to get $(-1, 1, 1)^T$. Scaling does not affect orthogonality.`,
  },
  {
    id: 'lac-spaces-3',
    courseId: 'linear-algebra-calculus',
    topic: 'Vector Spaces and Orthogonality',
    difficulty: 'hard',
    question: `Let $W = \\text{Span}\\left\\{ u_1, u_2 \\right\\}$ where

$$u_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad u_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\\\ 1 \\end{bmatrix}$$

and let $y = \\begin{bmatrix} 3 \\\\ 5 \\\\ 2 \\\\ 4 \\end{bmatrix}$.

(a) Verify that $\\{u_1, u_2\\}$ is an **orthogonal** set.

(b) Compute the **orthogonal projection** $\\hat{y} = \\text{proj}_W\\, y$.

(c) Compute the **residual** $z = y - \\hat{y}$ and verify that $z$ is orthogonal to both $u_1$ and $u_2$.

(d) What is $\\|y - \\hat{y}\\|$, the distance from $y$ to $W$?`,
    answer: `**(a) Verify orthogonality:**

$$u_1 \\cdot u_2 = (1)(0) + (0)(1) + (1)(0) + (0)(1) = 0$$

Since $u_1 \\cdot u_2 = 0$, the set $\\{u_1, u_2\\}$ is orthogonal. $\\checkmark$

**(b) Orthogonal projection:**

Since $\\{u_1, u_2\\}$ is an orthogonal basis for $W$:

$$\\hat{y} = \\frac{y \\cdot u_1}{u_1 \\cdot u_1} u_1 + \\frac{y \\cdot u_2}{u_2 \\cdot u_2} u_2$$

Compute the dot products:

$$y \\cdot u_1 = 3(1) + 5(0) + 2(1) + 4(0) = 5$$

$$u_1 \\cdot u_1 = 1 + 0 + 1 + 0 = 2$$

$$y \\cdot u_2 = 3(0) + 5(1) + 2(0) + 4(1) = 9$$

$$u_2 \\cdot u_2 = 0 + 1 + 0 + 1 = 2$$

Therefore:

$$\\hat{y} = \\frac{5}{2} \\begin{bmatrix} 1\\\\0\\\\1\\\\0 \\end{bmatrix} + \\frac{9}{2} \\begin{bmatrix} 0\\\\1\\\\0\\\\1 \\end{bmatrix} = \\begin{bmatrix} 5/2\\\\0\\\\5/2\\\\0 \\end{bmatrix} + \\begin{bmatrix} 0\\\\9/2\\\\0\\\\9/2 \\end{bmatrix}$$

$$\\boxed{\\hat{y} = \\begin{bmatrix} 5/2 \\\\ 9/2 \\\\ 5/2 \\\\ 9/2 \\end{bmatrix}}$$

**(c) Residual:**

$$z = y - \\hat{y} = \\begin{bmatrix} 3 - 5/2 \\\\ 5 - 9/2 \\\\ 2 - 5/2 \\\\ 4 - 9/2 \\end{bmatrix} = \\begin{bmatrix} 1/2 \\\\ 1/2 \\\\ -1/2 \\\\ -1/2 \\end{bmatrix}$$

**Verify orthogonality:**

$$z \\cdot u_1 = (1/2)(1) + (1/2)(0) + (-1/2)(1) + (-1/2)(0) = 1/2 - 1/2 = 0 \\;\\checkmark$$

$$z \\cdot u_2 = (1/2)(0) + (1/2)(1) + (-1/2)(0) + (-1/2)(1) = 1/2 - 1/2 = 0 \\;\\checkmark$$

So $z \\in W^\\perp$ as expected from the Orthogonal Decomposition Theorem.

**(d) Distance from $y$ to $W$:**

$$\\|z\\| = \\sqrt{(1/2)^2 + (1/2)^2 + (-1/2)^2 + (-1/2)^2} = \\sqrt{4 \\cdot 1/4} = \\sqrt{1} = 1$$

$$\\boxed{\\text{dist}(y, W) = \\|y - \\hat{y}\\| = 1}$$

By the Best Approximation Theorem, $\\hat{y}$ is the unique closest point in $W$ to $y$.`,
  },
];
