import type { QuizQuestion } from '../types';

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                HOW TO WRITE EFFECTIVE QUIZ QUESTIONS (MCQ)                  ║
 * ║              Research-based guidelines for future contributors             ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Sources: University of Waterloo, UConn, University of Melbourne, NC State,
 *          BYU, University of Manchester, and NIH educational testing research.
 *
 * ── STRUCTURE ──────────────────────────────────────────────────────────────────
 *
 *   Every MCQ has two parts:
 *     1. STEM    — the question/prompt that presents the problem
 *     2. OPTIONS — one correct answer + 2-4 plausible distractors
 *
 * ── THE STEM ───────────────────────────────────────────────────────────────────
 *
 *   ✓ Write a clear, self-contained question — students should understand the
 *     problem WITHOUT reading the options first.
 *   ✓ Prefer question format ("What is...?") over incomplete statements.
 *   ✓ Use positive wording. If you must use negatives (NOT, EXCEPT), bold or
 *     capitalize them so they're impossible to miss.
 *   ✓ Include all necessary info in the stem, but cut irrelevant details.
 *   ✓ Each question should test ONE specific concept or learning objective.
 *   ✗ Avoid trick questions — test understanding, not reading comprehension.
 *   ✗ Avoid double negatives ("Which is NOT an incorrect statement?").
 *
 * ── THE CORRECT ANSWER ─────────────────────────────────────────────────────────
 *
 *   ✓ There must be exactly ONE clearly best answer.
 *   ✓ The correct answer should be indistinguishable from distractors in length,
 *     grammar, and level of detail.
 *   ✓ Randomize the position of the correct answer across questions — don't
 *     always put it in the same slot.
 *
 * ── DISTRACTORS (WRONG ANSWERS) ────────────────────────────────────────────────
 *
 *   ✓ Make distractors PLAUSIBLE — they should look reasonable to someone who
 *     hasn't fully mastered the material. Use common misconceptions and typical
 *     student errors as inspiration.
 *   ✓ Keep all options homogeneous: similar length, same grammatical structure,
 *     same level of specificity.
 *   ✓ Options must be mutually exclusive — no overlapping answers.
 *   ✓ 3-4 total options is ideal. Research shows 3 well-crafted options can be
 *     as effective as 5, since it's hard to write more than 2 good distractors.
 *   ✗ Avoid "All of the above" and "None of the above" — they reward guessing
 *     strategies over actual understanding.
 *   ✗ Avoid absolutes ("always", "never", "all", "none") in distractors —
 *     students know few things are universally true and will eliminate them.
 *   ✗ Don't repeat words from the stem only in the correct answer — if a keyword
 *     appears in the right answer, it should appear in distractors too.
 *
 * ── THE EXPLANATION ────────────────────────────────────────────────────────────
 *
 *   ✓ Explain WHY the correct answer is right AND why the most tempting
 *     distractor is wrong. This turns each question into a learning moment.
 *   ✓ Keep explanations concise but informative — 1-3 sentences.
 *
 * ── HIGHER-ORDER THINKING ──────────────────────────────────────────────────────
 *
 *   ✓ Go beyond pure recall ("What is X?") — ask students to APPLY concepts
 *     to scenarios, COMPARE alternatives, or ANALYZE trade-offs.
 *   ✓ Use real-world vignettes or "what would happen if..." prompts.
 *   ✓ A good mix: ~40% easy (recall), ~40% medium (application), ~20% hard
 *     (analysis/evaluation).
 *
 * ── QUICK CHECKLIST BEFORE ADDING A QUESTION ───────────────────────────────────
 *
 *   □ Does the stem make sense on its own (without reading the options)?
 *   □ Is there exactly one clearly correct answer?
 *   □ Are distractors plausible (based on real misconceptions)?
 *   □ Are all options similar in length, grammar, and detail?
 *   □ Does the explanation teach something useful?
 *   □ Is the difficulty tag accurate (easy / medium / hard)?
 *   □ Is the id unique (format: quiz-{courseAbbrev}-{number})?
 */

export const quizQuestions: QuizQuestion[] = [
    // ========== MAS — Prolog & Agent Theory ==========
    {
        id: 'quiz-mas-1',
        courseId: 'multi-agent-systems',
        question: 'What does the Prolog query `?- X = 4+3.` return?',
        options: ['X = 7', 'X = 4+3', 'false', 'error'],
        correctIndex: 1,
        explanation:
            'The `=` operator performs unification, not arithmetic evaluation. It matches the term 4+3 as-is. To get X = 7, you would use `X is 4+3`.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-2',
        courseId: 'multi-agent-systems',
        question: 'What does `?- not(A=4).` return in Prolog?',
        options: ['true', 'false', 'A = 4', 'error'],
        correctIndex: 1,
        explanation:
            'not/1 (negation as failure) succeeds only if its argument cannot be proven. Since A is unbound, A can be unified with 4, so `A=4` succeeds — therefore `not(A=4)` fails and returns false.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-3',
        courseId: 'multi-agent-systems',
        question:
            'In Prolog, what search strategy is used to explore rules?',
        options: [
            'Breadth-first, left-to-right',
            'Depth-first, top-to-bottom and left-to-right',
            'Random selection',
            'Best-first with heuristics',
        ],
        correctIndex: 1,
        explanation:
            'Prolog uses backward chaining with depth-first search. Rules are tried in the order they appear (top-to-bottom), and subgoals within a rule are resolved left-to-right.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-4',
        courseId: 'multi-agent-systems',
        question:
            'What is "floundering" in Prolog?',
        options: [
            'When a query runs infinitely',
            'When negation is called with unbound variables',
            'When two rules conflict',
            'When a fact cannot be found',
        ],
        correctIndex: 1,
        explanation:
            'Floundering occurs when negation (not/1 or \\+) is called with unbound variables. Since unification with an unbound variable almost always succeeds, the negation will fail unexpectedly. Always bind variables before negation.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-5',
        courseId: 'multi-agent-systems',
        question:
            'In MARBEL, which percept handler should be used for a percept that is sent only once at the start?',
        options: ['replace', 'update', 'add', 'insert'],
        correctIndex: 2,
        explanation:
            'The `add` handler is used for "send once" percepts — it adds the percept to the belief base once. `update` is for "on-change" percepts, and `replace` is for "send always" percepts.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-6',
        courseId: 'multi-agent-systems',
        question:
            'Which of the following is NOT a characteristic of an intelligent agent according to Wooldridge & Jennings?',
        options: ['Reactive', 'Pro-active', 'Deterministic', 'Social'],
        correctIndex: 2,
        explanation:
            'The four characteristics are: Reactive (responds to changes), Pro-active (takes initiative), Social (communicates and cooperates), and Autonomous (controls its own processes). Deterministic is an environment property, not an agent characteristic.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-7',
        courseId: 'multi-agent-systems',
        question:
            'What does Prolog\'s "incompleteness" mean?',
        options: [
            'Prolog cannot represent all types of knowledge',
            'Prolog\'s depth-first search may miss solutions in infinite branches',
            'Prolog cannot handle lists',
            'Prolog cannot solve recursive problems',
        ],
        correctIndex: 1,
        explanation:
            'Prolog\'s proof search is incomplete: depth-first search can get trapped in infinite branches, preventing it from finding valid solutions that exist on other branches. This is a fundamental limitation of the search strategy, not the language itself.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mas-8',
        courseId: 'multi-agent-systems',
        question:
            'What is the advantage of tail recursion with accumulators in Prolog?',
        options: [
            'It runs faster because of parallel execution',
            'It uses constant stack space by carrying partial results',
            'It automatically handles negation',
            'It enables backward chaining',
        ],
        correctIndex: 1,
        explanation:
            'Tail recursion with accumulators carries partial results through an extra argument instead of building up stack frames. This means constant stack space usage rather than O(n) stack frames for a list of length n.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-9',
        courseId: 'multi-agent-systems',
        question:
            'What does `?- X+2 is 5.` return in Prolog?',
        options: ['X = 3', 'true', 'false', 'error'],
        correctIndex: 2,
        explanation:
            'The left side of `is` must be a variable or number, not a compound term like X+2. Since X+2 is a term (not evaluated), it cannot be unified with the number 5, so this returns false.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mas-10',
        courseId: 'multi-agent-systems',
        question:
            'In MARBEL, what does the module option `exit=noaction` do?',
        options: [
            'Exits the module immediately',
            'Never exits the module',
            'Exits only when no action can be performed',
            'Exits after performing one action',
        ],
        correctIndex: 2,
        explanation:
            'exit=noaction means the module exits only when no rule applies (no action can be performed). exit=always exits after any action, and exit=never keeps looping through rules indefinitely.',
        difficulty: 'medium',
    },

    // ========== DSA ==========
    {
        id: 'quiz-dsa-1',
        courseId: 'data-structures-algorithms-ai',
        question: 'What is the time complexity of accessing an element in an array by index?',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
        correctIndex: 2,
        explanation:
            'Arrays store elements contiguously in memory. Given the base address, element size, and index, the memory address can be computed with a single formula: address = base + size × (index - start). This is a constant-time operation.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dsa-2',
        courseId: 'data-structures-algorithms-ai',
        question:
            'Which data structure follows a LIFO (Last-In, First-Out) policy?',
        options: ['Queue', 'Stack', 'Linked List', 'Binary Search Tree'],
        correctIndex: 1,
        explanation:
            'A stack follows LIFO — the most recently inserted element is removed first. The classic example is Ctrl+Z (undo). A queue follows FIFO (first in, first out).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dsa-3',
        courseId: 'data-structures-algorithms-ai',
        question: 'What is the worst-case time complexity of QuickSort?',
        options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'],
        correctIndex: 2,
        explanation:
            'QuickSort has O(n²) worst-case complexity, which occurs when the pivot is consistently the smallest or largest element (e.g., already sorted input with first-element pivot). However, its average case is O(n log n), making it fast in practice.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dsa-4',
        courseId: 'data-structures-algorithms-ai',
        question:
            'In a min-heap, which property must always be maintained?',
        options: [
            'Every child is smaller than its parent',
            'Every parent is smaller than or equal to its children',
            'The tree is always perfectly balanced',
            'All leaves are at the same level',
        ],
        correctIndex: 1,
        explanation:
            'In a min-heap, every parent node has a value ≤ its children. The minimum element is always at the root. The tree is a complete binary tree (filled level by level), but not necessarily perfectly balanced.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dsa-5',
        courseId: 'data-structures-algorithms-ai',
        question:
            'What is the time complexity of BFS and DFS on a graph with V vertices and E edges?',
        options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V × E)'],
        correctIndex: 2,
        explanation:
            'Both BFS and DFS visit every vertex once (O(V)) and examine every edge once (O(E)), giving O(V + E) total. This assumes an adjacency list representation; with an adjacency matrix, it would be O(V²).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dsa-6',
        courseId: 'data-structures-algorithms-ai',
        question: 'Which sorting algorithm is stable AND has O(n log n) worst-case time?',
        options: ['QuickSort', 'HeapSort', 'MergeSort', 'Insertion Sort'],
        correctIndex: 2,
        explanation:
            'MergeSort is both stable (preserves relative order of equal elements) and O(n log n) in the worst case. QuickSort is unstable and O(n²) worst-case. HeapSort is O(n log n) but unstable. Insertion Sort is stable but O(n²).',
        difficulty: 'hard',
    },
    {
        id: 'quiz-dsa-7',
        courseId: 'data-structures-algorithms-ai',
        question:
            'What is the key difference between row-major and column-major order for storing a matrix?',
        options: [
            'Row-major stores one row after another; column-major stores one column after another',
            'Row-major is faster than column-major',
            'Column-major uses less memory',
            'They produce different matrix values',
        ],
        correctIndex: 0,
        explanation:
            'In row-major order, elements are stored row by row in a contiguous array. In column-major order, they are stored column by column. Both store the same data — only the memory layout differs, which can affect cache performance.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dsa-8',
        courseId: 'data-structures-algorithms-ai',
        question:
            'Dijkstra\'s algorithm fails on graphs with:',
        options: [
            'Cycles',
            'Negative edge weights',
            'More than 100 vertices',
            'Directed edges',
        ],
        correctIndex: 1,
        explanation:
            'Dijkstra\'s algorithm assumes all edge weights are non-negative. With negative weights, it can produce incorrect shortest paths because it greedily finalizes distances. Use Bellman-Ford for graphs with negative weights.',
        difficulty: 'medium',
    },

    // ========== Linear Algebra & Calculus ==========
    {
        id: 'quiz-lac-1',
        courseId: 'linear-algebra-calculus',
        question: 'What is lim(x→-1) (x²-1)/(x+1)?',
        options: ['0', '-2', '2', 'Does not exist'],
        correctIndex: 1,
        explanation:
            'Direct substitution gives 0/0 (indeterminate). Factor: x²-1 = (x-1)(x+1). Cancel (x+1): lim(x→-1) (x-1) = -1-1 = -2.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-lac-2',
        courseId: 'linear-algebra-calculus',
        question: 'What is lim(x→9) (√x - 3)/(x - 9)?',
        options: ['1/3', '1/6', '0', '3'],
        correctIndex: 1,
        explanation:
            'Rationalize: multiply by (√x+3)/(√x+3). Numerator becomes x-9, denominator becomes (x-9)(√x+3). Cancel (x-9): 1/(√9+3) = 1/6.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-lac-3',
        courseId: 'linear-algebra-calculus',
        question:
            'What is lim(x→∞) (3x³ - 5x² + 7)/(8 + 2x - 5x³)?',
        options: ['0', '3/5', '-3/5', '∞'],
        correctIndex: 2,
        explanation:
            'Both numerator and denominator have degree 3. Divide by x³: (3 - 5/x + 7/x³)/(8/x³ + 2/x² - 5) → 3/(-5) = -3/5 as x→∞.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-lac-4',
        courseId: 'linear-algebra-calculus',
        question:
            'What is lim(x→2) |x-2|/(x-2)?',
        options: ['1', '-1', '0', 'Does not exist'],
        correctIndex: 3,
        explanation:
            'From the right (x>2): |x-2| = x-2, so the limit is 1. From the left (x<2): |x-2| = -(x-2), so the limit is -1. Since left ≠ right, the limit does not exist.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-lac-5',
        courseId: 'linear-algebra-calculus',
        question:
            'A function f is continuous at x=a if and only if:',
        options: [
            'f(a) is defined',
            'lim(x→a) f(x) exists',
            'f(a) is defined, lim(x→a) f(x) exists, and lim(x→a) f(x) = f(a)',
            'f(a) ≠ 0',
        ],
        correctIndex: 2,
        explanation:
            'Continuity requires all three conditions: (1) f(a) must be defined, (2) the limit must exist, and (3) the limit must equal the function value. If any condition fails, f has a discontinuity at a.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-lac-6',
        courseId: 'linear-algebra-calculus',
        question:
            'To apply the Intermediate Value Theorem to show f has a root in [a,b], what must be true?',
        options: [
            'f must be differentiable and f(a)·f(b) < 0',
            'f must be continuous and f(a) and f(b) must have opposite signs',
            'f must be a polynomial',
            'f must be monotonically increasing',
        ],
        correctIndex: 1,
        explanation:
            'The IVT requires: (1) f is continuous on [a,b], and (2) f(a) and f(b) have opposite signs. Then there exists c in (a,b) where f(c)=0. Differentiability is not required — only continuity.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-lac-7',
        courseId: 'linear-algebra-calculus',
        question: 'A matrix A is diagonalizable if and only if:',
        options: [
            'A is symmetric',
            'A has n linearly independent eigenvectors',
            'All eigenvalues are positive',
            'A is invertible',
        ],
        correctIndex: 1,
        explanation:
            'An n×n matrix is diagonalizable if it has n linearly independent eigenvectors. Then A = PDP⁻¹ where D is diagonal (eigenvalues) and P has eigenvectors as columns. Symmetric matrices are always diagonalizable, but this is not the only case.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-lac-8',
        courseId: 'linear-algebra-calculus',
        question:
            'What is the gradient of f(x,y) = x²y + 3y²?',
        options: [
            '(2xy, x² + 6y)',
            '(2x + y, x + 6y)',
            '(x²y, 3y²)',
            '(2xy + 3y², x² + 6y)',
        ],
        correctIndex: 0,
        explanation:
            'The gradient is the vector of partial derivatives: ∂f/∂x = 2xy, ∂f/∂y = x² + 6y. So ∇f = (2xy, x² + 6y). The gradient points in the direction of steepest ascent.',
        difficulty: 'medium',
    },

    // ========== Machine Learning ==========
    {
        id: 'quiz-ml-1',
        courseId: 'machine-learning',
        question:
            'What happens when the learning rate in gradient descent is too large?',
        options: [
            'The model converges faster',
            'The loss oscillates or diverges',
            'The model underfits',
            'No effect on training',
        ],
        correctIndex: 1,
        explanation:
            'A learning rate that is too large causes the optimization to overshoot the minimum, leading to oscillating or diverging loss values. The ideal learning rate is small enough to converge but large enough to make reasonable progress.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ml-2',
        courseId: 'machine-learning',
        question: 'L2 regularization adds what to the loss function?',
        options: [
            'Sum of absolute values of weights',
            'Sum of squared weights',
            'Number of non-zero weights',
            'Maximum weight value',
        ],
        correctIndex: 1,
        explanation:
            'L2 regularization (weight decay) adds λ·Σw² to the loss. This penalizes large weights, encouraging smaller, more distributed weights. L1 regularization uses absolute values (Σ|w|) and tends to produce sparse (zero) weights.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ml-3',
        courseId: 'machine-learning',
        question:
            'A model with high training accuracy but low test accuracy is likely suffering from:',
        options: ['Underfitting', 'Overfitting', 'Label noise', 'Class imbalance'],
        correctIndex: 1,
        explanation:
            'High training accuracy + low test accuracy = overfitting. The model has memorized the training data (including noise) instead of learning general patterns. Remedies include more data, regularization, dropout, or a simpler model.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ml-4',
        courseId: 'machine-learning',
        question:
            'In a decision tree, which metric is commonly used to determine the best split?',
        options: [
            'Mean Squared Error',
            'Information Gain (or Gini impurity)',
            'Gradient magnitude',
            'Learning rate',
        ],
        correctIndex: 1,
        explanation:
            'Decision trees use information gain (based on entropy reduction) or Gini impurity to select the feature and threshold that best separates the classes at each node. The split that maximizes purity is chosen.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ml-5',
        courseId: 'machine-learning',
        question:
            'What does backpropagation compute?',
        options: [
            'The forward pass output',
            'The gradients of the loss with respect to each weight',
            'The optimal learning rate',
            'The final predictions',
        ],
        correctIndex: 1,
        explanation:
            'Backpropagation efficiently computes ∂L/∂w for every weight w in the network using the chain rule. These gradients are then used by the optimizer (e.g., SGD, Adam) to update weights in the direction that reduces the loss.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ml-6',
        courseId: 'machine-learning',
        question:
            'Which ensemble method trains models sequentially, with each model focusing on the errors of its predecessors?',
        options: ['Bagging', 'Random Forest', 'Boosting', 'Stacking'],
        correctIndex: 2,
        explanation:
            'Boosting (e.g., AdaBoost, Gradient Boosting) trains models sequentially — each new model corrects the mistakes of previous ones. Bagging/Random Forest trains models independently in parallel on bootstrapped samples.',
        difficulty: 'medium',
    },

    // ========== Knowledge & Data ==========
    {
        id: 'quiz-kd-1',
        courseId: 'knowledge-and-data',
        question: 'An RDF triple consists of:',
        options: [
            'Table, row, column',
            'Subject, predicate, object',
            'Key, value, type',
            'Node, edge, weight',
        ],
        correctIndex: 1,
        explanation:
            'RDF (Resource Description Framework) represents knowledge as triples: subject-predicate-object. For example: (Amsterdam, isCapitalOf, Netherlands). Subjects and predicates are URIs; objects can be URIs or literals.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-2',
        courseId: 'knowledge-and-data',
        question:
            'What is the main difference between RDFS and OWL?',
        options: [
            'RDFS is for queries, OWL is for storage',
            'RDFS defines lightweight schemas; OWL adds complex constraints and reasoning',
            'They are completely interchangeable',
            'OWL replaced RDFS',
        ],
        correctIndex: 1,
        explanation:
            'RDFS (RDF Schema) provides basic vocabulary for class hierarchies (subClassOf, domain, range). OWL (Web Ontology Language) extends this with powerful constructs like cardinality constraints, property restrictions, and logical expressions enabling automated reasoning.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-3',
        courseId: 'knowledge-and-data',
        question:
            'In SPARQL, what does the SELECT clause do?',
        options: [
            'Defines the data source',
            'Specifies which variables to return from the query',
            'Filters out invalid triples',
            'Creates new triples',
        ],
        correctIndex: 1,
        explanation:
            'SELECT specifies which bound variables from the WHERE pattern should be returned in the query results. The WHERE clause defines the graph pattern to match. Other query forms include CONSTRUCT, ASK, and DESCRIBE.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-4',
        courseId: 'knowledge-and-data',
        question:
            'What is a "Knowledge Graph"?',
        options: [
            'A bar chart of knowledge metrics',
            'A graph database that stores interconnected descriptions of entities using RDF or similar formalisms',
            'A neural network architecture',
            'A hierarchical folder structure',
        ],
        correctIndex: 1,
        explanation:
            'A Knowledge Graph represents real-world entities and their relationships as a graph of interconnected nodes and edges. It uses formalisms like RDF to enable querying, integration, and reasoning over linked data from multiple sources.',
        difficulty: 'easy',
    },

    // ========== Probability & Statistics ==========
    {
        id: 'quiz-ps-1',
        courseId: 'probability-statistics',
        question: 'Bayes\' rule states that P(A|B) equals:',
        options: [
            'P(A) × P(B)',
            'P(B|A) × P(A) / P(B)',
            'P(A) / P(B)',
            'P(A ∩ B)',
        ],
        correctIndex: 1,
        explanation:
            'Bayes\' rule: P(A|B) = P(B|A)·P(A)/P(B). It relates the posterior P(A|B) to the likelihood P(B|A), prior P(A), and evidence P(B). This is fundamental to probabilistic reasoning in AI.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ps-2',
        courseId: 'probability-statistics',
        question:
            'A type I error in hypothesis testing occurs when:',
        options: [
            'We fail to reject a true null hypothesis',
            'We reject a true null hypothesis',
            'The sample size is too small',
            'The test statistic is negative',
        ],
        correctIndex: 1,
        explanation:
            'Type I error (false positive): rejecting H₀ when it is actually true. The probability of a Type I error is α (significance level). Type II error (false negative): failing to reject H₀ when it is actually false.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ps-3',
        courseId: 'probability-statistics',
        question:
            'If X ~ Binomial(n, p), what is E[X]?',
        options: ['np', 'np(1-p)', 'n/p', '1/p'],
        correctIndex: 0,
        explanation:
            'For a Binomial distribution with n trials and success probability p: E[X] = np (expected number of successes). The variance is Var(X) = np(1-p).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ps-4',
        courseId: 'probability-statistics',
        question:
            'The Central Limit Theorem states that:',
        options: [
            'All distributions are normal',
            'The mean of a sample equals the population mean',
            'The sample mean of i.i.d. random variables approaches a normal distribution as n increases',
            'Variance always decreases with sample size',
        ],
        correctIndex: 2,
        explanation:
            'The CLT states that the distribution of the sample mean converges to a normal distribution as the sample size n→∞, regardless of the underlying distribution (assuming finite mean and variance). This is why the normal distribution appears everywhere.',
        difficulty: 'medium',
    },

    // ========== Computational Thinking ==========
    {
        id: 'quiz-ct-1',
        courseId: 'computational-thinking',
        question:
            'Which of the following is a defining property of an algorithm?',
        options: [
            'It must be written in Python',
            'Each step must be precisely defined and unambiguous',
            'It must use recursion',
            'It must run in less than one second',
        ],
        correctIndex: 1,
        explanation:
            'An algorithm is a finite sequence of well-defined, unambiguous instructions. The language, speed, and use of recursion are implementation details — not defining properties.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-2',
        courseId: 'computational-thinking',
        question:
            'Suppose an algorithm takes T(n) = 3n³ + 2n² + 9 time. What is the Big O notation of T(n)?',
        options: ['O(log n)', 'O(n)', 'O(n²)', 'O(n³)'],
        correctIndex: 3,
        explanation:
            'Big O keeps only the dominant (fastest-growing) term and drops constants. 3n³ dominates 2n² and 9 for large n, so T(n) ∈ O(n³).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-3',
        courseId: 'computational-thinking',
        question: 'What is the worst-case Big O notation for linear search?',
        options: ['O(log n)', 'O(1)', 'O(n log n)', 'O(n)'],
        correctIndex: 3,
        explanation:
            'Linear search checks each element one by one. In the worst case you inspect all n elements before finding the target (or confirming it is absent), giving O(n).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-4',
        courseId: 'computational-thinking',
        question:
            'What is the worst-case time complexity of binary search on a sorted list of n elements?',
        options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
        correctIndex: 2,
        explanation:
            'Binary search halves the search space with each comparison. For n elements the maximum number of comparisons is log₂(n), giving O(log n). It requires the list to be sorted beforehand.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-5',
        courseId: 'computational-thinking',
        question:
            'How many comparisons does linear search make on average if the target appears exactly once in a list of n elements?',
        options: ['n(n-1)/2', '(n+1)/2n', '(n+1)/2', 'n+1'],
        correctIndex: 2,
        explanation:
            'If the target is equally likely to be at any position 1 through n, the average number of comparisons is (1+2+…+n)/n = (n+1)/2.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-6',
        courseId: 'computational-thinking',
        question:
            'John translates geographical directions into a map to calculate driving distance. Which solution strategy is he using?',
        options: [
            'Use formulas/equations',
            'Explore all possibilities',
            'Modeling',
            'Discover a structure or pattern',
        ],
        correctIndex: 2,
        explanation:
            'Modeling means creating a simplified representation (like a map or diagram) of a real-world situation so you can reason about it more easily.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-7',
        courseId: 'computational-thinking',
        question:
            'A 10 km long train traveling at 10 km/h enters a 10 km long tunnel. How many hours until the entire train has exited?',
        options: ['1 hour', '1.5 hours', '2 hours', '2.5 hours'],
        correctIndex: 2,
        explanation:
            'The front must travel the full tunnel length (10 km) plus the train length (10 km) = 20 km. At 10 km/h this takes 20/10 = 2 hours.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-8',
        courseId: 'computational-thinking',
        question: 'Which data type would store the value 5.67?',
        options: ['String', 'Integer', 'Float', 'Boolean'],
        correctIndex: 2,
        explanation:
            'A float (floating-point number) stores decimal values. An integer stores whole numbers, a string stores text, and a boolean stores true/false.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-9',
        courseId: 'computational-thinking',
        question:
            'Which of these operator symbols is NOT correctly written?',
        options: [
            'equal to: ==',
            'not equal to: !=',
            'less than or equal to: =<',
            'greater than or equal to: >=',
        ],
        correctIndex: 2,
        explanation:
            'The correct symbol for "less than or equal to" is <=, not =<. The other symbols (==, !=, >=) are standard in most programming languages.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-10',
        courseId: 'computational-thinking',
        question: 'What is the last step in the problem-solving process?',
        options: [
            'Understand the problem',
            'Choose a solution strategy',
            'Execute the strategy',
            'Check the solution',
        ],
        correctIndex: 3,
        explanation:
            'The problem-solving steps are: (1) understand the problem, (2) choose a strategy, (3) execute the strategy, and (4) check the solution. Verification is always the final step.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-11',
        courseId: 'computational-thinking',
        question: 'How many edges does a complete graph K₈ have?',
        options: ['7', '8', '27', '28'],
        correctIndex: 3,
        explanation:
            'A complete graph Kₙ has n(n-1)/2 edges. For K₈: 8×7/2 = 28 edges. Every vertex connects to every other vertex exactly once.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-12',
        courseId: 'computational-thinking',
        question: 'What is an Eulerian path?',
        options: [
            'A path that visits all vertices exactly once',
            'A path that traverses all edges exactly once',
            'The shortest path between two vertices',
            'A path that forms a spanning tree',
        ],
        correctIndex: 1,
        explanation:
            'An Eulerian path traverses every edge of a connected graph exactly once. It exists if and only if the graph has exactly 0 or 2 vertices of odd degree. A path visiting all vertices exactly once is a Hamiltonian path.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-13',
        courseId: 'computational-thinking',
        question:
            'If you have a list of 16 numbers, how many passes (levels of merging) does merge sort require?',
        options: ['2', '4', '8', '16'],
        correctIndex: 1,
        explanation:
            'Merge sort recursively halves the list. For 16 elements: 16→8→4→2→1, which is log₂(16) = 4 passes (levels of merging).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-14',
        courseId: 'computational-thinking',
        question:
            'Which property describes a sorting algorithm that preserves the relative order of equal elements?',
        options: [
            'In-place',
            'Adaptive',
            'Stable',
            'Deterministic',
        ],
        correctIndex: 2,
        explanation:
            'Stability means equal elements keep their original relative order. Merge sort and insertion sort are stable; quicksort and heap sort are not. In-place refers to memory usage, not ordering.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-15',
        courseId: 'computational-thinking',
        question:
            "Which algorithm technique is used in Kruskal's algorithm for the minimum spanning tree?",
        options: ['Brute force', 'Divide and conquer', 'Greedy', 'Dynamic programming'],
        correctIndex: 2,
        explanation:
            "Kruskal's algorithm uses a greedy approach: it sorts all edges by weight and adds the cheapest edge that doesn't create a cycle, repeating until the tree spans all vertices.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-16',
        courseId: 'computational-thinking',
        question:
            'In a 4×4 grid, how many routes are there from the top-left corner to the bottom-right corner (moving only right or down)?',
        options: ['56', '70', '84', '126'],
        correctIndex: 1,
        explanation:
            'You must make 4 moves right and 4 moves down (8 moves total). The number of routes is C(8,4) = 8!/(4!×4!) = 70.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-ct-17',
        courseId: 'computational-thinking',
        question:
            'Which solution strategy does merge sort use?',
        options: [
            'Guess and check',
            'Greedy approach',
            'Divide and conquer',
            'Exhaustive search',
        ],
        correctIndex: 2,
        explanation:
            'Merge sort divides the list into halves (divide), sorts each half recursively (conquer), and merges the sorted halves (combine). This is the textbook divide-and-conquer pattern.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-18',
        courseId: 'computational-thinking',
        question: 'Which of the following can a simple graph be?',
        options: [
            'A directed graph with self-loops',
            'A multigraph with parallel edges',
            'A connected undirected graph',
            'A graph where an edge connects a vertex to itself',
        ],
        correctIndex: 2,
        explanation:
            'A simple graph has no self-loops and no parallel edges. It can be connected (a path exists between every pair of vertices) and is always undirected. This distinguishes it from directed graphs and multigraphs.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-19',
        courseId: 'computational-thinking',
        question: 'What is the primary purpose of a flowchart?',
        options: [
            'To compile source code into machine code',
            'To visually represent the steps of an algorithm',
            'To measure the time complexity of a program',
            'To convert pseudocode into a programming language',
        ],
        correctIndex: 1,
        explanation:
            'A flowchart is a visual diagram that shows the sequence of steps, decisions, and loops in an algorithm. It uses standard shapes: rectangles for processes, diamonds for decisions, and arrows for flow.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-20',
        courseId: 'computational-thinking',
        question:
            'What is the main benefit of writing pseudocode before actual code?',
        options: [
            'Pseudocode executes faster than compiled programs',
            'It allows you to plan logic without syntax constraints',
            'It generates test cases for your program automatically',
            'It guarantees your program will have no bugs',
        ],
        correctIndex: 1,
        explanation:
            'Pseudocode is language-independent and lets you plan the algorithm\'s logic without syntax distractions. Once the logic is correct, translating to any programming language is straightforward.',
        difficulty: 'easy',
    },

    // ── Additional Computational Thinking questions ────────────────────────────
    {
        id: 'quiz-ct-21',
        courseId: 'computational-thinking',
        question:
            'After one full pass of bubble sort on the list [5, 3, 8, 1, 2], which element is guaranteed to be in its correct final position?',
        options: ['5', '3', '8', '1'],
        correctIndex: 2,
        explanation:
            'Bubble sort compares adjacent pairs and swaps them if they are out of order. After one complete pass, the largest element "bubbles up" to the last position. In this list, 8 is the largest and will be in its final position.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-22',
        courseId: 'computational-thinking',
        question:
            'What is the worst-case time complexity of bubble sort on a list of n elements?',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
        correctIndex: 2,
        explanation:
            'In the worst case (reverse-sorted list), bubble sort makes n-1 passes and up to n-1 comparisons per pass, giving approximately n² comparisons total — O(n²).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-23',
        courseId: 'computational-thinking',
        question:
            'A function calls itself to solve smaller versions of the same problem. What is this technique called?',
        options: ['Iteration', 'Recursion', 'Abstraction', 'Decomposition'],
        correctIndex: 1,
        explanation:
            'Recursion is when a function calls itself with a smaller input until it reaches a base case. Iteration uses loops instead. Both abstraction and decomposition are general problem-solving strategies, not programming techniques.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-24',
        courseId: 'computational-thinking',
        question:
            'What happens if a recursive function has no base case?',
        options: [
            'It returns 0 by default',
            'It runs once and terminates',
            'It calls itself indefinitely (infinite recursion)',
            'It automatically switches to iteration',
        ],
        correctIndex: 2,
        explanation:
            'Without a base case, the function has no stopping condition and will keep calling itself. In practice this causes a stack overflow error because each call uses memory on the call stack.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-25',
        courseId: 'computational-thinking',
        question:
            "How does Prim's algorithm differ from Kruskal's algorithm for finding a minimum spanning tree?",
        options: [
            "Prim's grows a single tree from a starting vertex; Kruskal's adds cheapest edges globally",
            "Prim's sorts all edges first; Kruskal's starts from a vertex",
            "Prim's uses divide and conquer; Kruskal's uses brute force",
            "Prim's can only handle directed graphs; Kruskal's handles undirected graphs",
        ],
        correctIndex: 0,
        explanation:
            "Prim's algorithm grows a tree one vertex at a time from a starting node, always adding the cheapest edge that connects a new vertex. Kruskal's algorithm sorts all edges globally and adds the cheapest edge that doesn't form a cycle. Both are greedy and produce the same MST.",
        difficulty: 'hard',
    },
    {
        id: 'quiz-ct-26',
        courseId: 'computational-thinking',
        question:
            'In a flowchart, which shape represents a decision (yes/no question)?',
        options: ['Rectangle', 'Diamond', 'Parallelogram', 'Oval'],
        correctIndex: 1,
        explanation:
            'Diamonds represent decisions with two or more branches (e.g., yes/no). Rectangles are for processes, parallelograms for input/output, and ovals for start/end terminals.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-27',
        courseId: 'computational-thinking',
        question:
            'Which of the following is a Hamiltonian path?',
        options: [
            'A path that crosses every edge exactly once',
            'A path that visits every vertex exactly once',
            'The shortest path in a weighted graph',
            'A path that always returns to its starting vertex',
        ],
        correctIndex: 1,
        explanation:
            'A Hamiltonian path visits every vertex exactly once. This is different from an Eulerian path (which crosses every edge exactly once). Finding Hamiltonian paths is much harder computationally — it is an NP-complete problem.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-28',
        courseId: 'computational-thinking',
        question:
            "Dijkstra's algorithm cannot produce correct results when the graph contains:",
        options: [
            'Cycles',
            'More than 10 vertices',
            'Negative edge weights',
            'Unconnected components',
        ],
        correctIndex: 2,
        explanation:
            "Dijkstra's algorithm assumes that adding an edge can never decrease the total path cost. With negative weights this assumption breaks, and the algorithm may miss shorter paths. Bellman-Ford is used instead for graphs with negative weights.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-29',
        courseId: 'computational-thinking',
        question:
            'You are trying to find a word in a dictionary that has 1024 pages. Using binary search, what is the maximum number of pages you need to check?',
        options: ['10', '32', '100', '512'],
        correctIndex: 0,
        explanation:
            'Binary search halves the search space each step. log₂(1024) = 10, so you need at most 10 checks. This is why binary search is so powerful — 10 steps to search through 1024 items!',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-30',
        courseId: 'computational-thinking',
        question:
            'Which sorting algorithm works by repeatedly selecting the smallest element from the unsorted portion and placing it at the end of the sorted portion?',
        options: ['Bubble sort', 'Selection sort', 'Merge sort', 'Quicksort'],
        correctIndex: 1,
        explanation:
            'Selection sort scans the unsorted portion for the minimum element and swaps it into position. Bubble sort swaps adjacent elements, merge sort divides and merges, and quicksort partitions around a pivot.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-31',
        courseId: 'computational-thinking',
        question:
            'A graph has 6 vertices. Every vertex has degree 2. How many edges does the graph have?',
        options: ['4', '6', '8', '12'],
        correctIndex: 1,
        explanation:
            'The Handshaking Lemma states that the sum of all vertex degrees equals twice the number of edges: Σdeg = 2|E|. Here 6×2 = 12 = 2|E|, so |E| = 6 edges.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-32',
        courseId: 'computational-thinking',
        question:
            'An Eulerian circuit exists in a connected undirected graph when:',
        options: [
            'Every vertex has an even degree',
            'Every vertex has an odd degree',
            'Exactly two vertices have an odd degree',
            'The graph has at least one cycle',
        ],
        correctIndex: 0,
        explanation:
            'An Eulerian circuit (a closed path traversing every edge exactly once) exists if and only if every vertex has even degree. If exactly two vertices have odd degree, an Eulerian path (not circuit) exists instead.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-ct-33',
        courseId: 'computational-thinking',
        question:
            'You want to prove that a statement P(n) holds for all natural numbers n ≥ 1. Which proof technique starts by showing P(1) is true and then proves "if P(k) then P(k+1)"?',
        options: [
            'Proof by contradiction',
            'Proof by exhaustion',
            'Mathematical induction',
            'Proof by counterexample',
        ],
        correctIndex: 2,
        explanation:
            'Mathematical induction proves a base case (P(1)) and an inductive step (P(k) → P(k+1)). Together these guarantee P(n) for all n ≥ 1. Proof by contradiction assumes the opposite and derives a contradiction instead.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-34',
        courseId: 'computational-thinking',
        question:
            'Lisa wants to find the cheapest combination of bus, train, and bike routes to get from home to university. Which solution strategy is she most likely using?',
        options: [
            'Guess and check',
            'Modeling with a weighted graph',
            'Proof by induction',
            'Discovering a pattern',
        ],
        correctIndex: 1,
        explanation:
            'Finding cheapest routes between locations is a classic graph problem. By modeling stations/stops as vertices and routes as weighted edges (with cost as weight), Lisa can use algorithms like Dijkstra\'s to find the optimal path.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-35',
        courseId: 'computational-thinking',
        question:
            'What is the time complexity of merge sort in the worst case?',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
        correctIndex: 1,
        explanation:
            'Merge sort always divides the list in half (log n levels) and does O(n) work at each level to merge. This gives O(n log n) in all cases — best, average, and worst. This is better than bubble sort or selection sort\'s O(n²).',
        difficulty: 'easy',
    },

    // ========== English Language Test ==========
    {
        id: 'quiz-elt-1',
        courseId: 'english-language-test',
        question:
            'Which of the following is a verb in the sentence: "The students quickly reviewed their notes before the exam"?',
        options: ['students', 'quickly', 'reviewed', 'notes'],
        correctIndex: 2,
        explanation:
            '"Reviewed" is the verb — it describes the action the students performed. "Students" and "notes" are nouns, and "quickly" is an adverb modifying the verb.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-2',
        courseId: 'english-language-test',
        question:
            'What tense is used in the sentence: "She has been studying for three hours"?',
        options: [
            'Simple present',
            'Present continuous',
            'Present perfect',
            'Present perfect continuous',
        ],
        correctIndex: 3,
        explanation:
            '"Has been studying" is the present perfect continuous tense: has/have + been + verb-ing. It describes an action that started in the past and is still ongoing. Present perfect would be "She has studied" (without the continuous aspect).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-elt-3',
        courseId: 'english-language-test',
        question:
            'Which sentence demonstrates correct subject–verb agreement?',
        options: [
            'The group of students are presenting tomorrow',
            'The group of students is presenting tomorrow',
            'The group of students have been presenting tomorrow',
            'The group of students were presenting tomorrow',
        ],
        correctIndex: 1,
        explanation:
            'The subject is "the group" (singular collective noun), not "students". Therefore the verb must be singular: "is". The prepositional phrase "of students" does not change the number of the subject.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-elt-4',
        courseId: 'english-language-test',
        question:
            'Which word is an adverb in the sentence: "She speaks English fluently"?',
        options: ['She', 'speaks', 'English', 'fluently'],
        correctIndex: 3,
        explanation:
            '"Fluently" is an adverb — it modifies the verb "speaks" by describing how she speaks. Adverbs often (but not always) end in "-ly" and modify verbs, adjectives, or other adverbs.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-5',
        courseId: 'english-language-test',
        question: 'Choose the correct article: "She is ___ university student."',
        options: ['a', 'an', 'the', 'no article needed'],
        correctIndex: 0,
        explanation:
            'Use "a" before words that begin with a consonant SOUND. "University" starts with a /juː/ sound (a consonant sound), not a vowel sound, so "a" is correct — not "an". Compare: "an umbrella" (vowel sound) vs. "a university" (consonant sound).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-6',
        courseId: 'english-language-test',
        question: 'Which sentence uses the apostrophe correctly?',
        options: [
            "The dog wagged it's tail.",
            "Its a beautiful day outside.",
            "The children's toys were scattered.",
            "The student's are all present.",
        ],
        correctIndex: 2,
        explanation:
            '"Children\'s" is correct — the apostrophe shows possession (the toys belonging to the children). "It\'s" = "it is" (contraction), "its" = possessive. "Student\'s" with an apostrophe before "are" is incorrect because the apostrophe would imply possession or contraction, not a plural.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-7',
        courseId: 'english-language-test',
        question: 'Which word is a preposition in the sentence: "The book on the table belongs to me"?',
        options: ['book', 'on', 'table', 'belongs'],
        correctIndex: 1,
        explanation:
            '"On" is a preposition — it shows the relationship between "book" and "table" (location/position). Prepositions are small words like in, on, at, to, from, with, between, etc., that link nouns to other parts of the sentence.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-8',
        courseId: 'english-language-test',
        question:
            'What is the past participle of the irregular verb "to write"?',
        options: ['writed', 'wrote', 'written', 'writing'],
        correctIndex: 2,
        explanation:
            'Write → wrote (past simple) → written (past participle). The past participle is used with "have/has/had" in perfect tenses (e.g. "I have written") and in passive voice (e.g. "The essay was written"). "Writed" is not a word.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-9',
        courseId: 'english-language-test',
        question:
            'Which sentence correctly uses a semicolon?',
        options: [
            'I love programming; it challenges my mind.',
            'I love programming; and it challenges my mind.',
            'I love; programming it challenges my mind.',
            'I love programming, it challenges my mind.',
        ],
        correctIndex: 0,
        explanation:
            'A semicolon connects two closely related independent clauses (complete sentences) without a conjunction. Option D is a comma splice (incorrect). Option B is wrong because semicolons don\'t need "and" — the semicolon replaces the conjunction.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-elt-10',
        courseId: 'english-language-test',
        question:
            'Which word is spelled correctly?',
        options: ['accomodate', 'accommodate', 'acommodate', 'acomodate'],
        correctIndex: 1,
        explanation:
            '"Accommodate" is one of the most frequently misspelled English words. It has two c\'s and two m\'s. A mnemonic: it\'s big enough to accommodate both double-c and double-m.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-11',
        courseId: 'english-language-test',
        question:
            '"Neither the professor nor the students ___ ready for the test." Fill in the blank.',
        options: ['is', 'was', 'are', 'has been'],
        correctIndex: 2,
        explanation:
            'With "neither...nor", the verb agrees with the subject closest to it — here "the students" (plural), so "are" is correct. If it were "Neither the students nor the professor ___ ready", the answer would be "is" (matching "professor").',
        difficulty: 'medium',
    },
    {
        id: 'quiz-elt-12',
        courseId: 'english-language-test',
        question:
            'What type of word is "beautiful" in the sentence: "The beautiful sunset amazed everyone"?',
        options: ['Noun', 'Adverb', 'Adjective', 'Conjunction'],
        correctIndex: 2,
        explanation:
            '"Beautiful" is an adjective — it modifies (describes) the noun "sunset". Adjectives answer questions like "what kind?" or "which one?" about a noun.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-13',
        courseId: 'english-language-test',
        question:
            'Which sentence uses the correct conditional form?',
        options: [
            'If I would have studied, I would have passed.',
            'If I had studied, I would have passed.',
            'If I have studied, I would have passed.',
            'If I studied, I would have passed.',
        ],
        correctIndex: 1,
        explanation:
            'This is a third conditional (past unreal): "If + past perfect, would have + past participle." It expresses regret about something that didn\'t happen. "If I would have studied" is a common error — never use "would" in the if-clause of a conditional.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-elt-14',
        courseId: 'english-language-test',
        question:
            'Which of these is a conjunction?',
        options: ['quickly', 'although', 'between', 'beautiful'],
        correctIndex: 1,
        explanation:
            '"Although" is a subordinating conjunction — it connects a dependent clause to an independent clause (e.g., "Although it rained, we went outside"). "Quickly" is an adverb, "between" is a preposition, and "beautiful" is an adjective.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-15',
        courseId: 'english-language-test',
        question:
            'Choose the word that best completes the sentence: "The research findings are ___ with previous studies."',
        options: ['constant', 'consistent', 'persistant', 'insistent'],
        correctIndex: 1,
        explanation:
            '"Consistent with" is the correct collocation meaning "in agreement with." "Constant" means unchanging (not the right context), "persistent" (not "persistant") means continuing to exist, and "insistent" means demanding firmly.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-elt-16',
        courseId: 'english-language-test',
        question:
            'What is the difference between "affect" and "effect"?',
        options: [
            '"Affect" is a noun, "effect" is a verb',
            '"Affect" is typically a verb (to influence), "effect" is typically a noun (a result)',
            'They mean exactly the same thing',
            '"Affect" is British English, "effect" is American English',
        ],
        correctIndex: 1,
        explanation:
            '"Affect" is usually a verb meaning "to influence" (e.g., "The weather affects my mood"). "Effect" is usually a noun meaning "a result" (e.g., "The effect was dramatic"). Mnemonic: Affect = Action (verb), Effect = End result (noun).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-elt-17',
        courseId: 'english-language-test',
        question:
            'Which linking phrase would best introduce a contrasting point in an academic text?',
        options: ['Furthermore,', 'In addition,', 'However,', 'Similarly,'],
        correctIndex: 2,
        explanation:
            '"However" signals contrast or opposition. "Furthermore" and "In addition" add supporting information, and "Similarly" shows agreement/comparison. Knowing these transition words helps with both structuring and reading comprehension.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-18',
        courseId: 'english-language-test',
        question:
            'In the sentence "The professor, who has published several papers, will give the lecture," what role does the clause "who has published several papers" serve?',
        options: [
            'It is the main clause of the sentence',
            'It is a relative clause providing additional information',
            'It is a conditional clause',
            'It is a noun clause acting as the object',
        ],
        correctIndex: 1,
        explanation:
            '"Who has published several papers" is a non-restrictive (non-essential) relative clause — it gives extra information about the professor but can be removed without changing the core meaning. The commas signal it is non-essential.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-elt-19',
        courseId: 'english-language-test',
        question:
            'Which of the following words has a silent letter?',
        options: ['bridge', 'knowledge', 'strong', 'simple'],
        correctIndex: 1,
        explanation:
            'In "knowledge", the "k" is silent — it is pronounced /ˈnɒlɪdʒ/. This pattern (silent "k" before "n") also applies to words like "knee", "knife", and "knight". The other words have no silent letters.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-20',
        courseId: 'english-language-test',
        question:
            'Which phrase is appropriate for an academic presentation?',
        options: [
            '"So basically, like, the results show..."',
            '"I would like to draw your attention to the following results..."',
            '"Check this out, the results are pretty cool..."',
            '"You guys won\'t believe what the results show..."',
        ],
        correctIndex: 1,
        explanation:
            'Academic English requires formal register. Phrases like "I would like to draw your attention to..." demonstrate appropriate academic language. The other options use informal language (filler words, slang) that is inappropriate in academic contexts.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-21',
        courseId: 'english-language-test',
        question:
            'What is the plural of "analysis"?',
        options: ['analysises', 'analyses', 'analysi', 'analysis\'s'],
        correctIndex: 1,
        explanation:
            '"Analysis" comes from Greek and follows the Greek pluralization pattern: -is → -es. So analysis → analyses. Similar examples: thesis → theses, hypothesis → hypotheses, crisis → crises.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-22',
        courseId: 'english-language-test',
        question:
            'Identify the sentence with correct comma usage:',
        options: [
            'After the lecture the students went to the library.',
            'After the lecture, the students went to the library.',
            'After, the lecture the students went to the library.',
            'After the lecture the students, went to the library.',
        ],
        correctIndex: 1,
        explanation:
            'A comma is needed after an introductory phrase or clause ("After the lecture,"). This helps the reader parse the sentence structure. Without the comma, the reader might momentarily misread "the lecture the students" as a unit.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-23',
        courseId: 'english-language-test',
        question:
            'Which sentence is in the passive voice?',
        options: [
            'The researcher collected the data.',
            'The data was collected by the researcher.',
            'The researcher is collecting the data.',
            'The researcher has collected the data.',
        ],
        correctIndex: 1,
        explanation:
            'Passive voice uses the form "be + past participle": "was collected." The subject ("The data") receives the action rather than performing it. The other sentences are all in active voice — the subject ("The researcher") performs the action.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-24',
        courseId: 'english-language-test',
        question:
            '"I ___ to the gym every morning before university." Which verb form completes this sentence?',
        options: ['am going', 'go', 'have gone', 'went'],
        correctIndex: 1,
        explanation:
            'The simple present tense "go" is correct because the sentence describes a habitual/regular action ("every morning"). "Am going" (present continuous) would describe something happening right now, "have gone" (present perfect) implies completion, and "went" (simple past) describes a past action.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-elt-25',
        courseId: 'english-language-test',
        question:
            'Which option correctly completes the sentence: "There are ___ students in the classroom than yesterday"?',
        options: ['less', 'fewer', 'lesser', 'least'],
        correctIndex: 1,
        explanation:
            '"Fewer" is used for countable nouns (students, books, items). "Less" is used for uncountable nouns (water, time, money). Since "students" can be counted, "fewer" is correct. This is one of the most common English usage errors.',
        difficulty: 'medium',
    },
];
