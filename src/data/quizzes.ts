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
        correctIndex: 3,
        explanation:
            'The `is/2` predicate requires the right-hand side to be fully instantiated for evaluation. Here the right side is `5` (fine), but the left side `X+2` is a compound term, not a simple variable. SWI-Prolog throws an `instantiation_error` because it cannot evaluate the arithmetic expression on the left.',
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

    // ========== Introduction to Artificial Intelligence ==========
    // Based on the official course summary covering all 11 lectures
    {
        id: 'quiz-iai-1',
        courseId: 'intro-ai',
        question:
            'Which technique is commonly used to handle missing data during data wrangling?',
        options: [
            'Filtering out all rows with any missing values',
            'Imputation (filling in estimated values)',
            'Aggregating columns together',
            'Normalising numeric ranges',
        ],
        correctIndex: 1,
        explanation:
            'Imputation replaces missing values with reasonable estimates (e.g., mean, median, or predicted values). The course summary lists "Trim, Impute, Ignore, Cap/Limit, and Transform" as strategies for dealing with missing data.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-2',
        courseId: 'intro-ai',
        question:
            'What is the "problem of induction" and how does it relate to machine learning?',
        options: [
            'It asks how we reason from stated rules; ML solved this problem completely',
            'It asks how we reason correctly from past experiences; the question of why ML works is an instance of this problem',
            'It asks why computers can process data faster than humans; ML is unrelated',
            'It asks how we reason from stated rules; the question of why ML works is an instance of this problem',
        ],
        correctIndex: 1,
        explanation:
            'The problem of induction (Hume) asks how we can justify reasoning from observed examples to general conclusions. Machine learning generalises from training data, so the question of why ML works is a modern instance of this philosophical problem.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-3',
        courseId: 'intro-ai',
        question:
            'Which of the following terms is NOT related to Knowledge Representation?',
        options: [
            'Ontology',
            'Description Logics',
            'Neural networks',
            'Semantics',
        ],
        correctIndex: 2,
        explanation:
            'The summary explains that Knowledge Representation uses formal structures like ontologies, description logics, and semantics. Neural networks belong to the statistical/machine learning approach, not KR.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-4',
        courseId: 'intro-ai',
        question:
            'According to the course, what are the four functionalities of Hybrid Intelligence (CARE)?',
        options: [
            'Computing, Analysing, Reasoning, Engineering',
            'Collaborative, Adaptive, Responsible, Explainable',
            'Classifying, Abstracting, Regressing, Evaluating',
            'Creative, Autonomous, Reactive, Efficient',
        ],
        correctIndex: 1,
        explanation:
            'The Hybrid Intelligence lecture introduces the CARE framework: Collaborative (using Theory of Mind), Adaptive (using Reinforcement Learning), Responsible (explicit norms & values), and Explainable (using knowledge graphs for explanations).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-5',
        courseId: 'intro-ai',
        question:
            'What is a systematic literature review?',
        options: [
            'A quantitative review using only statistical analyses',
            'A summary of existing systematic methods in a field',
            'A rigorous method to identify, critically evaluate, and synthesise existing studies',
            'A method to organise existing work based on a coherent narrative',
        ],
        correctIndex: 2,
        explanation:
            'The summary defines a systematic review as involving "explicit and rigorous methods to identify, critically evaluate, and synthesise relevant studies." Option D describes a narrative review, and option A describes a meta-analysis.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-6',
        courseId: 'intro-ai',
        question:
            'What can you NOT do using the command line (terminal)?',
        options: [
            'Manipulate files and directories',
            'Create sequences of commands to execute automatically',
            'Communicate with remote servers',
            'Perform Graphical User Interface (GUI) tasks like drag-and-drop',
        ],
        correctIndex: 3,
        explanation:
            'The command line is text-based and excels at file manipulation, scripting, and server communication (SSH). However, it cannot perform GUI tasks like drag-and-drop or visual layout editing.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-7',
        courseId: 'intro-ai',
        question:
            'In the context of data wrangling, what does "MNAR" (Missing Not at Random) mean?',
        options: [
            'The missing data is entirely random and unrelated to any variable',
            'The missingness depends on other observed variables but not on the missing value itself',
            'The missing data is directly related to the value of the missing data itself',
            'The data was never collected in the first place',
        ],
        correctIndex: 2,
        explanation:
            'The summary gives the example: "Older individuals might not report their age because they fear disqualification from aid." The missingness is tied to the value itself (their age), making it MNAR. MCAR = completely random; MAR = depends on other observed variables.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-8',
        courseId: 'intro-ai',
        question:
            'Verification in software engineering is the process of checking whether:',
        options: [
            'The system meets the actual needs of the users (effectiveness)',
            'The system meets the specified requirements (correctness)',
            'The system can be tested or not',
            'The system runs faster than alternatives',
        ],
        correctIndex: 1,
        explanation:
            'The summary states: "Verification is about ensuring that a system behaves according to its specified requirements." Validation checks whether the system meets actual user needs. The mnemonic: Verification = "Did we build the system right?", Validation = "Did we build the right system?"',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-9',
        courseId: 'intro-ai',
        question:
            'What is the difference between "ethics in design" and "ethics by design" as discussed in the AI Ethics lecture?',
        options: [
            'Ethics in design = hard-coded ethical rules; ethics by design = AI that reasons about ethics dynamically',
            'They are two names for the same approach',
            'Ethics in design applies only to hardware; ethics by design applies only to software',
            'Ethics in design = following regulations; ethics by design = ignoring regulations',
        ],
        correctIndex: 0,
        explanation:
            'The summary explains: "Ethics in Design refers to constructing ethical rules within the AI system (e.g., Asimov\'s Laws). Ethics by Design involves building AI systems that can reason about ethical decisions dynamically, rather than following hard-coded rules."',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-10',
        courseId: 'intro-ai',
        question:
            'Which statement best describes "Hybrid Intelligence"?',
        options: [
            'AI systems that combine multiple machine learning algorithms',
            'AI that collaborates with people, enhancing human capabilities instead of replacing them',
            'Hardware that combines CPUs and GPUs for faster computation',
            'AI that can switch between supervised and unsupervised learning',
        ],
        correctIndex: 1,
        explanation:
            'The Hybrid Intelligence lecture defines it as "AI that collaborates with people, instead of replacing them." The course summary adds it is where "human intelligence is amplified by AI, rather than AI replacing human decision-making."',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-11',
        courseId: 'intro-ai',
        question:
            'What is "Narrow AI" (Weak AI)?',
        options: [
            'AI that has been deliberately limited to prevent harm',
            'AI designed to perform a specific task but does not possess general intelligence',
            'AI systems that only work with small datasets',
            'AI that can only perform computational tasks slowly',
        ],
        correctIndex: 1,
        explanation:
            'The course summary defines Narrow AI as "AI systems designed to perform a specific task" like speech recognition (Siri/Alexa) or recommendation engines. It contrasts with General AI (can perform any intellectual task) and Superintelligence (surpasses all human intelligence).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-12',
        courseId: 'intro-ai',
        question:
            'What is the "Chinese Room" argument in the philosophy of AI?',
        options: [
            'It proves that AI systems can truly understand language',
            'It argues that a system can follow rules to produce correct outputs without genuinely understanding meaning',
            'It demonstrates that only Chinese-speaking individuals can build AI',
            'It is a benchmark test for evaluating machine translation',
        ],
        correctIndex: 1,
        explanation:
            'John Searle\'s Chinese Room argument: even if someone inside a room uses a rulebook to produce perfect Chinese responses, they don\'t understand Chinese. The summary notes this "challenges the idea that AI can ever truly be intelligent or conscious."',
        difficulty: 'hard',
    },
    {
        id: 'quiz-iai-13',
        courseId: 'intro-ai',
        question:
            'What are the five key properties used to guide the data wrangling process?',
        options: [
            'Speed, accuracy, precision, recall, F1-score',
            'Structure, granularity, faithfulness, temporality, scope',
            'Input, processing, output, storage, networking',
            'Cleaning, transforming, loading, analysing, visualising',
        ],
        correctIndex: 1,
        explanation:
            'The data wrangling lecture identifies five key properties: Structure (shape of data), Granularity (level of detail), Faithfulness (accuracy vs reality), Temporality (time-related issues), and Scope (completeness). These guide every wrangling decision.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-14',
        courseId: 'intro-ai',
        question:
            'Which of the following is an example of supervised learning?',
        options: [
            'An agent exploring a maze through trial and error',
            'A system trained on labelled images to classify new images as cats or dogs',
            'A system grouping customers based on purchase behaviour without predefined categories',
            'A robot learning to walk by receiving rewards for forward movement',
        ],
        correctIndex: 1,
        explanation:
            'Supervised learning uses labelled training data. The summary describes it as learning where "the algorithm learns from labeled data — both input data and the corresponding correct output." Options A/D describe reinforcement learning; C describes unsupervised clustering.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-15',
        courseId: 'intro-ai',
        question:
            'What is the key difference between overfitting and underfitting in machine learning?',
        options: [
            'Overfitting uses too much data; underfitting uses too little',
            'Overfitting means the model is too simple; underfitting means it is too complex',
            'Overfitting: the model learns noise in training data and fails on new data; underfitting: the model is too simple to capture underlying patterns',
            'There is no meaningful difference between them',
        ],
        correctIndex: 2,
        explanation:
            'The summary states: "Overfitting occurs when a model learns the training data too well, including noise and details that do not generalize to new data. Underfitting happens when the model is too simple and fails to capture the underlying patterns."',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-16',
        courseId: 'intro-ai',
        question:
            'What does the Turing Test evaluate?',
        options: [
            'Whether an AI can perform mathematical calculations faster than humans',
            'Whether a machine can exhibit intelligent behaviour indistinguishable from a human in conversation',
            'Whether an AI system is energy-efficient',
            'Whether an AI can pass a university exam',
        ],
        correctIndex: 1,
        explanation:
            'The summary defines the Turing Test as: "a human judge, a machine VS a human conversing in natural language, all separated. If the judge cannot tell the machine from the human, the machine passes the test." It does NOT define intelligence, only how to recognise it.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-17',
        courseId: 'intro-ai',
        question:
            'In the context of embodied AI, intelligence emerges from the interaction of:',
        options: [
            'Only software algorithms',
            'Environment, body (hardware), and brain (software)',
            'Only the amount of training data available',
            'The number of sensors on the robot',
        ],
        correctIndex: 1,
        explanation:
            'The summary states: "intelligence is not merely a function of the brain (software) but also depends on the body (hardware) interacting with its environment." The formula given is: Environment + Body + Brain → Behaviour.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-18',
        courseId: 'intro-ai',
        question:
            'What is the "Symbol Grounding Problem" in AI?',
        options: [
            'The difficulty of storing large symbol tables efficiently',
            'How a computer can understand the meaning of symbols without real-world sensory experience',
            'The challenge of writing code without syntax errors',
            'How to convert machine code into human-readable language',
        ],
        correctIndex: 1,
        explanation:
            'The summary explains: "How can a computer ever know anything about the \'real\' world? Symbols can only refer to other symbols. How can a computer ever know what is \'red\', or \'heavy\' or \'sad\'?" This is why some argue that simulated intelligence ≠ real intelligence.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-iai-19',
        courseId: 'intro-ai',
        question:
            'What is the difference between deductive and inductive reasoning in AI?',
        options: [
            'Deductive goes from general rules to specific conclusions; inductive goes from specific examples to general rules',
            'Deductive uses data; inductive uses logic',
            'They are two names for the same type of reasoning',
            'Deductive reasoning cannot be implemented in computers',
        ],
        correctIndex: 0,
        explanation:
            'The summary states: "Deductive reasoning: AI produces new statements based on existing facts" (general → specific). "Inductive reasoning: AI generalizes from specific examples to produce broad rules" (specific → general). Machine learning is fundamentally inductive.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-20',
        courseId: 'intro-ai',
        question:
            'What is "intersectionality" as discussed in the Diversity & Inclusion lecture?',
        options: [
            'The intersection of two computer networks',
            'The concept that multiple aspects of identity (race, gender, class) combine to create unique experiences of advantage or disadvantage',
            'Where two or more AI algorithms are combined',
            'The point where a decision tree branches',
        ],
        correctIndex: 1,
        explanation:
            'Coined by Kimberlé Crenshaw (1989), intersectionality recognises that combinations of identity aspects determine the degree of inclusion and exclusion. The summary emphasises that "focusing only on one aspect of identity overlooks the full complexity."',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-21',
        courseId: 'intro-ai',
        question:
            'What is a major ethical concern with AI systems making decisions in healthcare?',
        options: [
            'AI systems are too slow for medical applications',
            'Bias in training data could lead to unfair or harmful decisions for certain patient groups',
            'Healthcare professionals do not understand technology',
            'AI always makes better decisions than human doctors',
        ],
        correctIndex: 1,
        explanation:
            'The summary discusses AI bias under "The Ugly Side of AI": AI can perpetuate social biases because "the training data used contains inherent biases." The Prosecutor\'s Fallacy example shows how conditional probabilities can lead to racial profiling.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-22',
        courseId: 'intro-ai',
        question:
            'Which of the following best describes a "knowledge graph"?',
        options: [
            'A bar chart displaying knowledge metrics',
            'A network where nodes represent entities and edges represent relationships between them',
            'A table storing knowledge in rows and columns',
            'A hierarchical tree of file directories',
        ],
        correctIndex: 1,
        explanation:
            'The summary defines a knowledge graph as "a network where nodes represent entities (people, places, objects) and edges represent the relationships between them." Google uses one to power its search engine.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-23',
        courseId: 'intro-ai',
        question:
            'What is reinforcement learning?',
        options: [
            'Learning from labelled datasets with input-output pairs',
            'Finding patterns in data without any labels',
            'Learning by interacting with an environment and receiving rewards or penalties',
            'Copying the weights of another neural network',
        ],
        correctIndex: 2,
        explanation:
            'The summary defines reinforcement learning as when "the model learns by interacting with its environment and receiving feedback, often used in game-playing AI (e.g., AlphaGo)." It is distinct from supervised learning (labelled data) and unsupervised learning (no labels).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-24',
        courseId: 'intro-ai',
        question:
            'In evolutionary algorithms, what are the "two pillars of evolution"?',
        options: [
            'Training and testing',
            'Variation (mutation/recombination) and selection',
            'Input and output',
            'Hardware and software',
        ],
        correctIndex: 1,
        explanation:
            'The Embodied Intelligence lecture identifies variation (increasing diversity through mutation and recombination) and selection (decreasing diversity by keeping the fittest). Together they drive evolution: variation creates novelty, selection pushes towards quality.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-25',
        courseId: 'intro-ai',
        question:
            'What is "Neuro-Symbolic AI"?',
        options: [
            'AI that studies the human nervous system',
            'An approach combining neural networks (learning from data) with symbolic reasoning (logic and knowledge)',
            'A type of brain-computer interface',
            'Neural networks designed only for processing symbols like text',
        ],
        correctIndex: 1,
        explanation:
            'The summary describes Neuro-Symbolic AI as combining "symbolic reasoning (using knowledge and logic) with neural networks to create hybrid AI systems that can both learn from data and reason with it." It aims for systems that "think fast and slow" like humans.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-26',
        courseId: 'intro-ai',
        question:
            'According to the course, how is the final grade for Introduction to AI composed?',
        options: [
            'MC Exam 50%, Group Project 50%',
            'MC Exam 30%, Group Project 40%, Poster 5%, Video 5%, Diversity & Team Assignment 10%, Attendance 10%',
            'MC Exam 30%, Group Project 40%, Poster 5%, Video 5%, Diversity & Team Assignment 10%',
            'MC Exam 40%, Group Project 30%, Individual Report 30%',
        ],
        correctIndex: 2,
        explanation:
            'The summary lists: MC Exam (30%), Group Project (40%), Poster (5%), Video (5%), and Diversity & Team Assignment (10%), summing to 90% with the remaining percentage implied by participation components.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-27',
        courseId: 'intro-ai',
        question:
            'What are the four steps to solving problems with AI as outlined in the course?',
        options: [
            'Code, Test, Deploy, Monitor',
            'Identify the Problem, Understand the Context, Model Your Solution, Realise the Solution',
            'Collect Data, Train Model, Test Model, Deploy Model',
            'Research, Design, Implement, Publish',
        ],
        correctIndex: 1,
        explanation:
            'The course follows a problem-driven approach with four steps: (1) Identify the Problem, (2) Understand the Context (research theory), (3) Model Your Solution (build a computational model), and (4) Realise the Solution (apply and evaluate in the real world).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-28',
        courseId: 'intro-ai',
        question:
            'What are Asimov\'s Three Laws of Robotics?',
        options: [
            '1: A robot must obey humans. 2: A robot must protect itself. 3: A robot must be efficient.',
            '1: Don\'t harm humans (or allow harm through inaction). 2: Obey humans (unless it conflicts with Law 1). 3: Protect own existence (unless it conflicts with Laws 1 or 2).',
            '1: A robot must be intelligent. 2: A robot must be autonomous. 3: A robot must pass the Turing Test.',
            '1: A robot must learn from data. 2: A robot must adapt. 3: A robot must explain its decisions.',
        ],
        correctIndex: 1,
        explanation:
            'Asimov\'s Laws are a classic example of "ethics in design" (hard-coded rules). The key principle is the strict priority ordering: human safety > human commands > self-preservation.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-29',
        courseId: 'intro-ai',
        question:
            'What ethical dilemma does the "Trolley Problem" illustrate in the context of AI?',
        options: [
            'Whether AI should be open-source or proprietary',
            'How an autonomous system should choose between two harmful outcomes',
            'Whether robots should pay taxes',
            'How to distribute computing resources fairly',
        ],
        correctIndex: 1,
        explanation:
            'The summary uses the Trolley Problem to discuss how self-driving cars must decide between harmful options (e.g., "swerving to hit one person versus staying on course and hitting five"). It raises questions about who is responsible — developers, manufacturers, or users.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-30',
        courseId: 'intro-ai',
        question:
            'What does "human-in-the-loop" mean in the context of autonomous AI systems?',
        options: [
            'Humans must physically be inside the AI system',
            'Human decision-makers are involved at critical points of the AI\'s decision-making process',
            'AI systems must be designed to look like humans',
            'Humans must approve every single computation an AI makes',
        ],
        correctIndex: 1,
        explanation:
            'The summary explains human-in-the-loop in the context of autonomous weapons: "human decision-makers are involved in critical points of the AI\'s decision-making process." It ensures human oversight without requiring approval for every action.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-31',
        courseId: 'intro-ai',
        question:
            'What is the "Prosecutor\'s Fallacy" as discussed in the AI Ethics lecture?',
        options: [
            'Assuming AI systems are always correct',
            'Confusing the probability of evidence given guilt with the probability of guilt given evidence',
            'Thinking that more data always leads to better AI',
            'Believing that AI cannot be biased',
        ],
        correctIndex: 1,
        explanation:
            'The summary explains: "If the accused were guilty, the probability of evidence is high" does NOT mean "given the evidence, the accused is probably guilty." This abuse of conditional probability (p(black|criminal) vs p(criminal|black)) underlies racial profiling.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-iai-32',
        courseId: 'intro-ai',
        question:
            'What is the CPU (Central Processing Unit) composed of?',
        options: [
            'RAM and ROM',
            'ALU (Arithmetic Logic Unit) and CU (Control Unit)',
            'HDD and SSD',
            'Input and Output devices',
        ],
        correctIndex: 1,
        explanation:
            'The summary states the CPU "consists of two major units: ALU (Arithmetic Logic Unit) which handles mathematical calculations and logical decisions, and CU (Control Unit) which manages the execution of instructions."',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-33',
        courseId: 'intro-ai',
        question:
            'What is the key difference between RAM and storage (HDD/SSD)?',
        options: [
            'RAM is slower but permanent; storage is fast but temporary',
            'RAM is temporary (volatile) and fast; storage is permanent (non-volatile) and slower',
            'They serve the same purpose but have different names',
            'RAM stores programs; storage stores only media files',
        ],
        correctIndex: 1,
        explanation:
            'The summary explains: "RAM is volatile, meaning data is lost when the computer is turned off" while "Hard drives and solid-state drives provide long-term storage — data stored here is retained even after power loss." RAM is faster for active processing.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-34',
        courseId: 'intro-ai',
        question:
            'What is the difference between a CLI (Command Line Interface) and a GUI (Graphical User Interface)?',
        options: [
            'CLI uses text commands; GUI uses graphical elements like icons and windows',
            'CLI is only for Mac; GUI is only for Windows',
            'CLI is newer technology than GUI',
            'There is no practical difference; they do the same things',
        ],
        correctIndex: 0,
        explanation:
            'The summary defines CLI as requiring "users to type commands (e.g., Linux Bash)" and GUI as allowing "users to interact with the system through graphical elements like icons and windows (e.g., macOS, Windows)." CLI is preferred for automation and remote access.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-35',
        courseId: 'intro-ai',
        question:
            'In the Diversity & Inclusion lecture, what does Leary\'s Rose (Interpersonal Circumplex) model describe?',
        options: [
            'Stages of software development',
            'Interpersonal behaviours along axes of Dominance/Submission and Cooperation/Opposition',
            'Different types of machine learning algorithms',
            'Phases of project management',
        ],
        correctIndex: 1,
        explanation:
            'Leary\'s Rose divides behaviours into quadrants: "Dominance vs. Submission" (taking charge vs following) and "Cooperation vs. Opposition" (working toward common goals vs prioritising own interests). It helps educators manage group dynamics.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-36',
        courseId: 'intro-ai',
        question:
            'What are Tuckman\'s stages of group development?',
        options: [
            'Planning, Coding, Testing, Deploying',
            'Forming, Storming, Norming, Performing',
            'Collecting, Cleaning, Analysing, Reporting',
            'Observing, Hypothesising, Testing, Concluding',
        ],
        correctIndex: 1,
        explanation:
            'The Diversity & Inclusion lecture uses Tuckman\'s stages — Forming (coming together), Storming (conflict), Norming (establishing rules), and Performing (productive work) — to guide students through group work dynamics.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-37',
        courseId: 'intro-ai',
        question:
            'What is "abductive reasoning" in AI?',
        options: [
            'Reasoning from general rules to specific conclusions',
            'Reasoning from specific examples to general rules',
            'Creating the most likely explanation for a given observation',
            'Following predefined logical rules step by step',
        ],
        correctIndex: 2,
        explanation:
            'The summary defines abductive reasoning as when "AI creates the most likely explanation for an observation." Example: if a patient has symptoms A and B, AI concludes they likely have disease X. It differs from deductive (general → specific) and inductive (specific → general).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-38',
        courseId: 'intro-ai',
        question:
            'What are "heuristics" in AI problem-solving?',
        options: [
            'Guaranteed optimal solutions to any problem',
            'Practical methods that find "good enough" solutions when exact methods are too complex',
            'Mathematical proofs of algorithm correctness',
            'Random guesses at a solution',
        ],
        correctIndex: 1,
        explanation:
            'The summary explains: "When exact methods for finding the best solution are too complex, AI can use heuristics. These are practical methods that may not find the optimal solution but provide a solution that is \'good enough.\'"',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-39',
        courseId: 'intro-ai',
        question:
            'What is a Randomized Controlled Trial (RCT) used for in the context of AI validation?',
        options: [
            'Testing if an AI algorithm runs faster on random data',
            'Comparing outcomes between a group using the intervention and a control group that does not',
            'Randomly selecting which AI model to deploy',
            'Testing AI systems with random inputs to find bugs',
        ],
        correctIndex: 1,
        explanation:
            'The summary states: "External validation is best achieved by means of a Randomized Controlled Trial." The experimental group uses the intervention (e.g., an app) while the control group does not, allowing comparison of outcomes.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-40',
        courseId: 'intro-ai',
        question:
            'What does the p-value indicate in statistical analysis of an AI intervention?',
        options: [
            'The percentage of users who liked the system',
            'The probability of observing the results if no real difference exists (i.e., by chance)',
            'The processing power needed to run the test',
            'The proportion of data that was missing',
        ],
        correctIndex: 1,
        explanation:
            'The summary explains: "The primary output of statistical tests is the p-value. It indicates the probability of observing the difference if no difference exists." A low p-value suggests the intervention has a significant effect, not due to random chance.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-41',
        courseId: 'intro-ai',
        question:
            'What is a Likert scale used for in user experience evaluation?',
        options: [
            'Measuring the speed of an AI system',
            'Rating user satisfaction on a scale (e.g., 1-5 or "strongly disagree" to "strongly agree")',
            'Sorting users into experimental and control groups',
            'Calculating the statistical significance of results',
        ],
        correctIndex: 1,
        explanation:
            'The summary states that "Questionnaires are often employed to measure these aspects, usually using a Likert scale, where users rate their satisfaction with the app\'s ease of use, design, and overall effectiveness."',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-42',
        courseId: 'intro-ai',
        question:
            'What is the difference between acceptability, usability, and feasibility in user experience evaluation?',
        options: [
            'They are three names for the same concept',
            'Acceptability = willingness to use; Usability = ease of use; Feasibility = whether the intervention can actually be carried out',
            'Acceptability = cost; Usability = speed; Feasibility = accuracy',
            'They only apply to hardware, not software',
        ],
        correctIndex: 1,
        explanation:
            'The summary defines: "Acceptability: factors that affect willingness to use. Usability: design factors affecting the user experience of operating the application. Feasibility: whether the intervention can actually be carried out or not."',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-43',
        courseId: 'intro-ai',
        question:
            'How does the k-Nearest Neighbours (k-NN) algorithm work?',
        options: [
            'It builds a decision tree from the training data',
            'It finds the k closest data points to a new instance and assigns the most common class among them',
            'It trains a neural network with k layers',
            'It randomly selects k data points and averages their values',
        ],
        correctIndex: 1,
        explanation:
            'The summary explains k-NN as a "lazy learner" that "doesn\'t build an explicit model during training. For each new instance, k-NN checks the k closest points in the training dataset and assigns the most common class." A smaller k is more sensitive; a larger k is more robust.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-44',
        courseId: 'intro-ai',
        question:
            'How does a decision tree classify data?',
        options: [
            'By randomly assigning data to categories',
            'By splitting data into subsets based on feature values at each node until leaf nodes are pure',
            'By calculating the distance between all data points',
            'By using a neural network hidden inside the tree',
        ],
        correctIndex: 1,
        explanation:
            'The summary describes: "A decision tree splits the data into subsets based on feature values. Each node represents a feature, and each branch represents a decision. The tree grows by splitting recursively until each leaf node is \'pure\' (all data points belong to the same class)."',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-45',
        courseId: 'intro-ai',
        question:
            'What is the "bias-variance tradeoff" in machine learning?',
        options: [
            'Balancing speed and accuracy of an algorithm',
            'Balancing model simplicity (high bias, underfitting) against model sensitivity to data (high variance, overfitting)',
            'Choosing between biased and unbiased datasets',
            'Trading off training time against inference time',
        ],
        correctIndex: 1,
        explanation:
            'The summary states: "Bias refers to errors due to overly simplistic models (leading to underfitting). Variance refers to the model\'s sensitivity to small fluctuations in training data (leading to overfitting). Achieving the right balance is key to building robust ML models."',
        difficulty: 'hard',
    },
    {
        id: 'quiz-iai-46',
        courseId: 'intro-ai',
        question:
            'Which of the following is NOT a practical use case of knowledge graphs mentioned in the course?',
        options: [
            'Powering search engines (e.g., Google)',
            'Recommendation systems (e.g., Netflix, Amazon)',
            'Scientific research in bioinformatics and healthcare',
            'Generating images from text descriptions',
        ],
        correctIndex: 3,
        explanation:
            'The summary lists three practical uses: search engines (Google\'s Knowledge Graph), recommendation systems (Netflix, Amazon), and scientific research (bioinformatics, healthcare). Image generation from text (like DALL-E) uses deep learning, not knowledge graphs.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-47',
        courseId: 'intro-ai',
        question:
            'What is the motherboard in a computer?',
        options: [
            'The main software program that runs the computer',
            'The main circuit board that connects all internal components (CPU, memory, storage)',
            'An external device for connecting peripherals',
            'The operating system kernel',
        ],
        correctIndex: 1,
        explanation:
            'The summary defines the motherboard as "the main circuit board that connects all the internal components (CPU, memory, storage)." It serves as the central hub through which all hardware components communicate.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-48',
        courseId: 'intro-ai',
        question:
            'What is "morphological intelligence" in the context of evolving robots?',
        options: [
            'Intelligence that comes only from software improvements',
            'The evolution of a robot\'s body structure to facilitate learning and performance',
            'A type of machine learning algorithm',
            'The ability to change shape at will',
        ],
        correctIndex: 1,
        explanation:
            'The summary describes morphological intelligence as when "the structure and form of the robot\'s body evolve to facilitate learning and performance, highlighting the importance of the physical form in developing intelligence." Bodies evolve to become better at learning.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-iai-49',
        courseId: 'intro-ai',
        question:
            'What is Lamarckism in the context of robot evolution, and how does it differ from Darwinism?',
        options: [
            'Lamarckism: traits acquired during lifetime can be passed to offspring; Darwinism: only inherited traits are passed on',
            'They are two names for the same concept',
            'Lamarckism uses neural networks; Darwinism uses decision trees',
            'Darwinism is faster than Lamarckism',
        ],
        correctIndex: 0,
        explanation:
            'The summary explains that in robot evolution, Lamarckism means "traits acquired during the lifetime (through learning) can be passed on to offspring." Research showed "Lamarck beats Darwin" — Lamarckian evolution produces better-performing robots.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-iai-50',
        courseId: 'intro-ai',
        question:
            'What is the "Intentional Stance" (Daniel Dennett) in the Philosophy of Mind?',
        options: [
            'The belief that AI should always have clear intentions programmed in',
            'The idea that we attribute human qualities like intentions and consciousness to systems because it is useful, even if they may not truly have them',
            'A programming paradigm for building intentional AI systems',
            'The legal requirement for AI systems to declare their intentions',
        ],
        correctIndex: 1,
        explanation:
            'The summary explains Dennett\'s view: "we often attribute human qualities like intentions or emotions to machines because it is useful, even though machines may not have these qualities in reality." Intelligence and consciousness are \'attributed\' and \'gradual.\'',
        difficulty: 'hard',
    },

    // ========== Introduction to Psychology ==========
    {
        id: 'quiz-psy-1',
        courseId: 'intro-psychology',
        question: 'Psychological science is primarily the study of which three things?',
        options: [
            'Mind, brain, and behavior',
            'Brain, behavior, and culture',
            'Emotions, cognition, and behavior',
            'Mind, body, and emotions',
        ],
        correctIndex: 0,
        explanation:
            'Psychological science is defined as the study of mind, brain, and behavior. Mind refers to mental activity from biological brain processes, and behavior describes the totality of observable actions.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-2',
        courseId: 'intro-psychology',
        question: 'What is the key feature of "amiable skepticism" in critical thinking?',
        options: [
            'Accepting all evidence equally without judgment',
            'Quickly accepting conclusions that feel intuitive',
            'Careful examination of how well evidence supports a conclusion',
            'Dismissing research that contradicts personal experience',
        ],
        correctIndex: 2,
        explanation:
            'Amiable skepticism requires a careful examination of how well evidence supports a conclusion. It is a core component of critical thinking in psychological science.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-3',
        courseId: 'intro-psychology',
        question: 'Which cognitive bias involves ignoring evidence that contradicts pre-existing beliefs?',
        options: [
            'Availability heuristic',
            'Confirmation bias',
            'Anchoring bias',
            'Illusory correlation',
        ],
        correctIndex: 1,
        explanation:
            'Confirmation bias is the tendency to ignore evidence that contradicts one\'s pre-existing beliefs. It is one of the most common biases in thinking identified by psychological science.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-4',
        courseId: 'intro-psychology',
        question: 'What is functionalism in psychology?',
        options: [
            'The idea that the mind is too complex to understand as individual parts',
            'The idea that the mind evolved to solve specific problems in the environment',
            'The theory that behavior is independent of biological evolution',
            'The approach of studying only observable behavior without considering mental processes',
        ],
        correctIndex: 1,
        explanation:
            'Functionalism is the idea that the mind evolved to solve specific environmental problems. Human mental activity, behavior, and culture are guided by evolution and environmental challenges.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-5',
        courseId: 'intro-psychology',
        question: 'The nature/nurture debate in psychology concerns whether psychological characteristics are:',
        options: [
            'Conscious or unconscious processes',
            'Biologically innate or acquired through experience',
            'Studied best through qualitative or quantitative methods',
            'Functions of the mind or functions of the body',
        ],
        correctIndex: 1,
        explanation:
            'The nature/nurture debate questions whether psychological characteristics are biologically innate or acquired through education, experience, and culture. Today we know nature and nurture interact and cannot be separated.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-6',
        courseId: 'intro-psychology',
        question: 'What is the basic unit of the nervous system?',
        options: [
            'The synapse',
            'The neuron',
            'The brain stem',
            'The myelin sheath',
        ],
        correctIndex: 1,
        explanation:
            'Neurons (nerve cells) are the basic units of the nervous system. They receive and send electrical and chemical messages, and are linked together in neural networks.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-7',
        courseId: 'intro-psychology',
        question: 'What is the resting membrane potential of a neuron approximately equal to?',
        options: [
            '+70 millivolts',
            '0 millivolts',
            '-70 millivolts',
            '-140 millivolts',
        ],
        correctIndex: 2,
        explanation:
            'A neuron at rest is polarized with a resting membrane potential of approximately -70 millivolts, meaning the inside is more negatively charged than the outside.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-8',
        courseId: 'intro-psychology',
        question: 'Which neurotransmitter is primarily associated with reward and motivation?',
        options: [
            'Acetylcholine',
            'Serotonin',
            'Dopamine',
            'GABA',
        ],
        correctIndex: 2,
        explanation:
            'Dopamine is primarily associated with reward, motivation, and motor control over voluntary movement. The brain\'s reward system relies heavily on dopamine signaling.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-9',
        courseId: 'intro-psychology',
        question: 'What is the function of GABA in the nervous system?',
        options: [
            'Enhancement of action potentials and learning',
            'Motor control over muscles',
            'Inhibition of action potentials and anxiety reduction',
            'Pain reduction and reward',
        ],
        correctIndex: 2,
        explanation:
            'GABA (gamma-aminobutyric acid) is the primary inhibitory neurotransmitter. It inhibits action potentials and plays a role in anxiety reduction.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-10',
        courseId: 'intro-psychology',
        question: 'How do agonist drugs affect neurotransmission?',
        options: [
            'They decrease the amount of neurotransmitter or block its receptors',
            'They enhance neurotransmitter activity by mimicking it or increasing its availability',
            'They destroy the synapse between neurons',
            'They permanently alter the structure of receptors',
        ],
        correctIndex: 1,
        explanation:
            'Agonist drugs enhance neurotransmitter activity. They can increase how much neurotransmitter is produced, block its reuptake, or mimic the neurotransmitter by binding to its receptors.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-11',
        courseId: 'intro-psychology',
        question: 'Which brain imaging technique measures the brain\'s electrical activity?',
        options: [
            'PET (Positron Emission Tomography)',
            'fMRI (Functional Magnetic Resonance Imaging)',
            'EEG (Electroencephalography)',
            'TMS (Transcranial Magnetic Stimulation)',
        ],
        correctIndex: 2,
        explanation:
            'EEG (electroencephalography) measures the brain\'s electrical activity. PET uses radioactive tracers, fMRI measures blood flow changes, and TMS disrupts normal brain activity to infer function.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-12',
        courseId: 'intro-psychology',
        question: 'Which lobe of the cerebral cortex is primarily responsible for vision?',
        options: [
            'Frontal lobe',
            'Parietal lobe',
            'Temporal lobe',
            'Occipital lobe',
        ],
        correctIndex: 3,
        explanation:
            'The occipital lobe is primarily responsible for vision. The frontal lobe handles thought, planning, and personality; the parietal lobe handles touch and spatial relations; the temporal lobe handles hearing and memory.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-13',
        courseId: 'intro-psychology',
        question: 'What is the role of the corpus callosum?',
        options: [
            'Controlling balance and coordination',
            'Connecting the brain\'s two hemispheres',
            'Relaying sensory information to the cortex',
            'Regulating hormones throughout the body',
        ],
        correctIndex: 1,
        explanation:
            'The corpus callosum is a thick band of nerve fibers that connects the brain\'s two hemispheres, allowing them to communicate. Cutting it results in split-brain patients.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-14',
        courseId: 'intro-psychology',
        question: 'In split-brain patients, the left hemisphere\'s tendency to construct explanations for behavior is called:',
        options: [
            'The narrator',
            'The interpreter',
            'The analyzer',
            'The rationalizer',
        ],
        correctIndex: 1,
        explanation:
            'The left hemisphere\'s propensity to construct a world that makes sense, creating explanations for behavior even without complete information, is called the interpreter.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-15',
        courseId: 'intro-psychology',
        question: 'Which subcortical structure is primarily associated with memory?',
        options: [
            'Amygdala',
            'Hypothalamus',
            'Hippocampus',
            'Thalamus',
        ],
        correctIndex: 2,
        explanation:
            'The hippocampus is the subcortical structure primarily associated with memory formation and storage. The amygdala processes threat and fear, the hypothalamus regulates vital functions, and the thalamus relays sensory information.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-16',
        courseId: 'intro-psychology',
        question: 'Which division of the autonomic nervous system prepares the body for action ("fight or flight")?',
        options: [
            'Somatic nervous system',
            'Parasympathetic division',
            'Sympathetic division',
            'Central nervous system',
        ],
        correctIndex: 2,
        explanation:
            'The sympathetic division of the autonomic nervous system prepares the body for action (fight or flight), while the parasympathetic division returns the body to its resting state.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-17',
        courseId: 'intro-psychology',
        question: 'What is epigenetics?',
        options: [
            'The study of how mutations change DNA sequences',
            'The study of how genetic expression can be changed by experience and environment',
            'The study of dominant and recessive gene inheritance',
            'The study of chromosomal disorders and their effects',
        ],
        correctIndex: 1,
        explanation:
            'Epigenetics is the study of how genetic expression may change due to experience and environmental contexts, without altering the DNA sequence itself.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-18',
        courseId: 'intro-psychology',
        question: 'What is brain plasticity?',
        options: [
            'The brain\'s inability to change after critical periods',
            'The brain\'s capacity to continually change in response to a person\'s environment',
            'The process of myelination in developing brains',
            'The physical rigidity of the brain\'s protective skull',
        ],
        correctIndex: 1,
        explanation:
            'Plasticity is the brain\'s capacity to continually change in response to a person\'s environment. Although brain plasticity decreases with age, the brain retains the ability to rewire itself throughout life.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-19',
        courseId: 'intro-psychology',
        question: 'Which phenomenon illustrates how selective attention can be?',
        options: [
            'Sensory adaptation',
            'Change blindness',
            'Subliminal perception',
            'Signal detection',
        ],
        correctIndex: 1,
        explanation:
            'Change blindness illustrates how selective an individual\'s attention can be — we often do not notice large changes in an environment because we fail to pay attention.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-20',
        courseId: 'intro-psychology',
        question: 'What is the difference between controlled and automatic processing?',
        options: [
            'Controlled processing is unconscious; automatic processing requires concentration',
            'Controlled processing requires concentration; automatic processing occurs with little conscious effort',
            'Both require equal amounts of conscious effort',
            'Automatic processing only occurs during sleep',
        ],
        correctIndex: 1,
        explanation:
            'Controlled processing requires a great deal of concentration, while automatic processing happens with little conscious effort for highly practiced tasks. This frees up consciousness for other tasks.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-21',
        courseId: 'intro-psychology',
        question: 'What is "flow" in psychology?',
        options: [
            'The continuous stream of sensory information processed by the brain',
            'A state of altered consciousness where a person is completely absorbed in an engaging activity',
            'The movement of neurotransmitters across the synaptic cleft',
            'The pattern of brain waves during deep sleep',
        ],
        correctIndex: 1,
        explanation:
            'Flow is a state of altered consciousness where people become completely absorbed in what they are doing. It is experienced as a positive state and occurs during engaging activities.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-22',
        courseId: 'intro-psychology',
        question: 'Which brain waves are associated with deep, slow-wave sleep (stages 3-4)?',
        options: [
            'Beta waves',
            'Alpha waves',
            'Theta waves',
            'Delta waves',
        ],
        correctIndex: 3,
        explanation:
            'Delta waves are large, slow brain waves associated with deep, slow-wave sleep (stages 3-4). Beta waves are for alert wakefulness, alpha waves for relaxation before sleep, and theta waves for stage 1 sleep.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-23',
        courseId: 'intro-psychology',
        question: 'What characterizes REM sleep?',
        options: [
            'Large, slow delta brain waves and deep relaxation',
            'Rapid eye movements, body paralysis, and dreaming',
            'Sleep spindles and K-complexes in brain activity',
            'Complete unconsciousness with no brain activity',
        ],
        correctIndex: 1,
        explanation:
            'REM sleep is marked by a return to short, fast brain waves (similar to wakefulness), rapid eye movements, body paralysis, and dreaming.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-24',
        courseId: 'intro-psychology',
        question: 'According to the activation-synthesis hypothesis, why do we dream?',
        options: [
            'Dreams reveal repressed unconscious wishes and desires',
            'Dreams are the mind\'s attempt to make sense of random brain activity during sleep',
            'Dreams serve to consolidate memories from the previous day',
            'Dreams are caused by external stimuli reaching the sleeping brain',
        ],
        correctIndex: 1,
        explanation:
            'The activation-synthesis hypothesis posits that dreams are the product of the mind\'s efforts to make sense of random brain activity during sleep, rather than revealing unconscious conflicts as Freud believed.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-25',
        courseId: 'intro-psychology',
        question: 'Which category of psychoactive drugs activates GABA receptors and decreases behavioral and mental activity?',
        options: [
            'Stimulants',
            'Depressants',
            'Opioids',
            'Hallucinogens',
        ],
        correctIndex: 1,
        explanation:
            'Depressants (including alcohol, barbiturates, and benzodiazepines) decrease behavioral and mental activity by activating GABA receptors. Stimulants increase activity, opioids reduce pain, and hallucinogens alter perceptions.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-26',
        courseId: 'intro-psychology',
        question: 'What is the absolute threshold in sensation?',
        options: [
            'The maximum stimulus intensity a person can tolerate',
            'The minimum amount of stimulus intensity needed to detect a stimulus 50% of the time',
            'The difference between two stimuli that can just barely be noticed',
            'The point at which sensory receptors stop responding to a stimulus',
        ],
        correctIndex: 1,
        explanation:
            'The absolute threshold is the minimum amount of stimulus intensity needed to activate a sensory receptor and detect the stimulus on 50% of trials.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-27',
        courseId: 'intro-psychology',
        question: 'What is the difference between sensation and perception?',
        options: [
            'Sensation is conscious experience; perception is the detection of physical stimuli',
            'Sensation is the detection of physical stimuli; perception is the conscious experience of those stimuli',
            'They are the same process with different names',
            'Sensation requires attention; perception does not',
        ],
        correctIndex: 1,
        explanation:
            'Sensation is the detection of physical stimuli in the environment, while perception is our conscious experience of those stimuli. Sensation is the raw input; perception is how the brain interprets it.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-28',
        courseId: 'intro-psychology',
        question: 'In signal detection theory, what is a "false alarm"?',
        options: [
            'Correctly identifying that a signal is present',
            'Failing to detect a signal that is present',
            'Reporting a signal when none is present',
            'Correctly identifying that no signal is present',
        ],
        correctIndex: 2,
        explanation:
            'In signal detection theory, a false alarm occurs when someone reports detecting a signal when none is actually present. A hit is correctly detecting a signal, a miss is failing to detect one, and a correct rejection is correctly reporting no signal.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-29',
        courseId: 'intro-psychology',
        question: 'The visual processing stream that processes "what" information about objects is called:',
        options: [
            'The dorsal stream',
            'The ventral stream',
            'The optic chiasm',
            'The retinal pathway',
        ],
        correctIndex: 1,
        explanation:
            'The ventral stream processes "what" information about objects (identification), while the dorsal stream processes "where" information about locations.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-psy-30',
        courseId: 'intro-psychology',
        question: 'Gestalt principles of perception (proximity, similarity, closure, continuity) explain how we:',
        options: [
            'Detect the absolute threshold of stimuli',
            'Organize perceptual information into meaningful wholes',
            'Adapt to unchanging sensory stimuli',
            'Distinguish between different wavelengths of light',
        ],
        correctIndex: 1,
        explanation:
            'Gestalt principles explain how the brain organizes perceptual information into meaningful wholes and objects. They include proximity, similarity, continuity, closure, and common fate.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-31',
        courseId: 'intro-psychology',
        question: 'What are the three types of learning?',
        options: [
            'Classical, operant, and cognitive',
            'Non-associative, associative, and social (watching others)',
            'Habituation, sensitization, and reinforcement',
            'Visual, auditory, and kinesthetic',
        ],
        correctIndex: 1,
        explanation:
            'The three major types of learning are non-associative (habituation and sensitization), associative (classical and operant conditioning), and social learning (learning by watching others).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-32',
        courseId: 'intro-psychology',
        question: 'In classical conditioning, what happens during extinction?',
        options: [
            'The unconditioned stimulus is permanently forgotten',
            'The conditioned stimulus is presented without the unconditioned stimulus until the conditioned response stops',
            'A new conditioned stimulus replaces the original one',
            'The organism becomes habituated to the unconditioned stimulus',
        ],
        correctIndex: 1,
        explanation:
            'Extinction occurs when the conditioned stimulus (CS) is repeatedly presented without the unconditioned stimulus (US), and the conditioned response gradually diminishes and stops.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-33',
        courseId: 'intro-psychology',
        question: 'What does the Rescorla-Wagner model emphasize about learning?',
        options: [
            'Learning depends on the total number of CS-US pairings',
            'Learning depends on how unexpected or surprising the unconditioned stimulus is (prediction error)',
            'Learning occurs at the same rate regardless of expectations',
            'Learning only occurs through direct experience, not observation',
        ],
        correctIndex: 1,
        explanation:
            'The Rescorla-Wagner model emphasizes prediction error: the strength of association between stimuli depends on how unexpected the unconditioned stimulus is. Positive prediction error strengthens the association, negative prediction error weakens it.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-psy-34',
        courseId: 'intro-psychology',
        question: 'What is the difference between positive and negative reinforcement?',
        options: [
            'Positive reinforcement is good; negative reinforcement is punishment',
            'Positive reinforcement adds a pleasurable stimulus; negative reinforcement removes an aversive stimulus — both increase behavior',
            'Positive reinforcement increases behavior; negative reinforcement decreases behavior',
            'They are the same concept described from different perspectives',
        ],
        correctIndex: 1,
        explanation:
            'Both positive and negative reinforcement INCREASE the likelihood of a behavior. Positive reinforcement adds a pleasurable stimulus (e.g., a treat), while negative reinforcement removes an aversive stimulus (e.g., turning off an alarm).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-35',
        courseId: 'intro-psychology',
        question: 'Which schedule of reinforcement is most resistant to extinction?',
        options: [
            'Fixed ratio',
            'Fixed interval',
            'Variable ratio',
            'Continuous reinforcement',
        ],
        correctIndex: 2,
        explanation:
            'Variable ratio schedules (reinforcement after an unpredictable number of responses) are most resistant to extinction. This is why gambling is so addictive — the reward comes at unpredictable intervals.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-36',
        courseId: 'intro-psychology',
        question: 'In operant conditioning, what is "shaping"?',
        options: [
            'Punishing incorrect behaviors until only the correct behavior remains',
            'Reinforcing successive approximations of a desired behavior',
            'Conditioning an animal to respond to a specific stimulus',
            'Eliminating unwanted behaviors through extinction',
        ],
        correctIndex: 1,
        explanation:
            'Shaping is the process of reinforcing successive approximations of the desired behavior. It is used when the target behavior is not performed spontaneously and needs to be built up gradually.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-37',
        courseId: 'intro-psychology',
        question: 'How does dopamine relate to learning from rewards?',
        options: [
            'Dopamine only fires when rewards are consumed',
            'Dopamine release increases after positive prediction error and decreases after negative prediction error',
            'Dopamine is only involved in punishment, not reward',
            'Dopamine levels remain constant regardless of reward expectations',
        ],
        correctIndex: 1,
        explanation:
            'Dopamine provides a neurobiological basis for learning from prediction errors. Dopamine release increases after positive prediction error (unexpected reward) and decreases after negative prediction error (expected reward missing).',
        difficulty: 'hard',
    },
    {
        id: 'quiz-psy-38',
        courseId: 'intro-psychology',
        question: 'What is the difference between explicit and implicit memory?',
        options: [
            'Explicit memory is short-term; implicit memory is long-term',
            'Explicit memory requires conscious effort to declare; implicit memory is expressed without conscious awareness',
            'Explicit memory stores facts; implicit memory stores emotions',
            'There is no meaningful difference between them',
        ],
        correctIndex: 1,
        explanation:
            'Explicit (declarative) memories require conscious effort to recall (episodic events and semantic facts). Implicit memories are expressed without conscious awareness (procedural skills, priming, classical conditioning).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-39',
        courseId: 'intro-psychology',
        question: 'What is the difference between retrograde and anterograde amnesia?',
        options: [
            'Retrograde is inability to form new memories; anterograde is inability to access old memories',
            'Retrograde is inability to access memories before brain damage; anterograde is inability to form new memories after brain damage',
            'Both refer to the same type of memory loss',
            'Retrograde affects implicit memory; anterograde affects explicit memory',
        ],
        correctIndex: 1,
        explanation:
            'Retrograde amnesia is the inability to access memories created before brain damage. Anterograde amnesia is the inability to create new memories after brain damage. Patient H.M. famously had severe anterograde amnesia.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-40',
        courseId: 'intro-psychology',
        question: 'According to the levels of processing model, which type of encoding leads to the best memory recall?',
        options: [
            'Visual encoding (how the word looks)',
            'Acoustic encoding (how the word sounds)',
            'Semantic encoding (what the word means)',
            'All types of encoding produce equal recall',
        ],
        correctIndex: 2,
        explanation:
            'According to the levels of processing model, deeper processing leads to better memory. Semantic encoding (processing meaning) produces the best recall, followed by acoustic (sound), then visual (appearance).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-41',
        courseId: 'intro-psychology',
        question: 'What is long-term potentiation (LTP)?',
        options: [
            'The strengthening of synaptic connections through repeated stimulation',
            'The gradual weakening of neural pathways over time',
            'The formation of new neurons in the hippocampus',
            'The transfer of memories from short-term to long-term storage',
        ],
        correctIndex: 0,
        explanation:
            'Long-term potentiation (LTP) is the strengthening of synaptic connections that may occur during memory consolidation. Intense and frequent stimulation of a presynaptic neuron increases the probability that the postsynaptic neuron will fire.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-psy-42',
        courseId: 'intro-psychology',
        question: 'What are flashbulb memories?',
        options: [
            'Memories that are extremely accurate and never change',
            'Vivid, persistent memories of shocking and consequential events',
            'Memories formed only during childhood that persist into adulthood',
            'Memories that are recalled through sensory cues like smells or sounds',
        ],
        correctIndex: 1,
        explanation:
            'Flashbulb memories are vivid, persistent memories of shocking and consequential events. Emotion and stress hormones enhance consolidation via the amygdala influencing the hippocampus. However, they are not necessarily more accurate than other memories.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-43',
        courseId: 'intro-psychology',
        question: 'What is proactive interference?',
        options: [
            'When new information interferes with the ability to remember old information',
            'When old information interferes with the ability to learn new information',
            'When two memories are combined into a single false memory',
            'When retrieval of one memory blocks retrieval of all related memories',
        ],
        correctIndex: 1,
        explanation:
            'Proactive interference occurs when previously learned (old) information interferes with the ability to remember new information. Retroactive interference is the opposite — new information interferes with old memories.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-44',
        courseId: 'intro-psychology',
        question: 'What is source misattribution?',
        options: [
            'Forgetting information due to lack of attention during encoding',
            'Misremembering the time, place, person, or circumstances associated with a memory',
            'Confusing the meaning of two similar concepts',
            'The inability to recall a memory that is on the tip of your tongue',
        ],
        correctIndex: 1,
        explanation:
            'Source misattribution is a memory distortion that occurs when people misremember the source of a memory — the time, place, person, or circumstances involved. The false fame effect and cryptomnesia are examples.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-45',
        courseId: 'intro-psychology',
        question: 'What is the difference between analogical and symbolic representations in thinking?',
        options: [
            'Analogical representations are abstract; symbolic ones are visual',
            'Analogical representations are images with physical qualities; symbolic representations are abstract with no physical relationship',
            'They are identical types of mental representations',
            'Analogical representations are used for language; symbolic ones are used for spatial reasoning',
        ],
        correctIndex: 1,
        explanation:
            'Analogical representations are mental images that contain characteristics of actual objects (like a mental map). Symbolic representations are abstract with no relationship to physical qualities (like the word "dog" representing a dog).',
        difficulty: 'hard',
    },
    {
        id: 'quiz-psy-46',
        courseId: 'intro-psychology',
        question: 'According to the prototype model, how do we categorize objects?',
        options: [
            'By comparing them to every example we\'ve ever seen',
            'By comparing them to the most typical example (prototype) of the category',
            'By checking if they meet a strict set of defining features',
            'By randomly assigning them to the most recent category encountered',
        ],
        correctIndex: 1,
        explanation:
            'The prototype model states that we form a concept around a category and choose a prototype — the most typical example — that best represents the concept. We then categorize new items by comparing them to this prototype.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-47',
        courseId: 'intro-psychology',
        question: 'What is loss aversion?',
        options: [
            'The tendency to avoid any kind of decision when options are complex',
            'The tendency for potential losses to have a greater psychological impact than equivalent gains',
            'The fear of losing one\'s memory over time',
            'A bias toward choosing familiar options over new ones',
        ],
        correctIndex: 1,
        explanation:
            'Loss aversion is the finding that potential losses affect decision making more than potential gains of the same size. A loss of $1,000 feels psychologically worse than a gain of $1,000 feels good.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-48',
        courseId: 'intro-psychology',
        question: 'What is functional fixedness in problem solving?',
        options: [
            'The inability to solve problems without explicit instructions',
            'The tendency to think of objects only in terms of their typical functions',
            'A cognitive deficit caused by damage to the prefrontal cortex',
            'The inability to switch between different problem-solving strategies',
        ],
        correctIndex: 1,
        explanation:
            'Functional fixedness is a cognitive bias where people think of objects only in terms of their typical functions, preventing creative problem solving. Overcoming it often leads to insight — the sudden realization of a solution.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-49',
        courseId: 'intro-psychology',
        question: 'What is the difference between "maximizers" and "satisficers" in decision making?',
        options: [
            'Maximizers make faster decisions; satisficers deliberate longer',
            'Maximizers seek the perfect choice; satisficers seek a "good enough" choice — and satisficers tend to be happier',
            'Maximizers are more creative; satisficers are more analytical',
            'There is no meaningful difference in their outcomes',
        ],
        correctIndex: 1,
        explanation:
            'Maximizers seek the perfect choice among all options, while satisficers seek a choice that meets their minimum requirements. Research shows maximizers tend to make objectively better choices but are less happy with them.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-psy-50',
        courseId: 'intro-psychology',
        question: 'Spontaneous recovery in classical conditioning refers to:',
        options: [
            'The initial learning of a conditioned response through CS-US pairings',
            'The reappearance of a previously extinguished conditioned response after a rest period',
            'The generalization of a conditioned response to similar stimuli',
            'The strengthening of a conditioned response through additional training',
        ],
        correctIndex: 1,
        explanation:
            'Spontaneous recovery occurs when, after a period of time following extinction, the conditioned stimulus is presented alone and produces a weak conditioned response. This shows that extinction does not erase the original learning.',
        difficulty: 'medium',
    },
    // ========== Intelligent Systems ==========
    {
        id: 'quiz-is-1',
        courseId: 'intelligent-systems',
        question: 'Which of the following is a key characteristic of a Goal-Based Agent?',
        options: [
            'It relies solely on condition-action rules without internal state.',
            'It optimizes actions to achieve specific future goals.',
            'It cannot operate in partially observable environments.',
            'It randomly selects actions from the state space.'
        ],
        correctIndex: 1,
        explanation: 'Unlike simple reflex agents, goal-based agents consider future states and optimize their actions to achieve a specific goal.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-2',
        courseId: 'intelligent-systems',
        question: 'In the PEAS framework used to define agent environments, what do the letters stand for?',
        options: [
            'Performance, Environment, Actuators, Sensors',
            'Program, Evaluation, Actions, States',
            'Percepts, Environment, Algorithms, Sensors',
            'Performance, Evaluation, Actuators, Systems'
        ],
        correctIndex: 0,
        explanation: 'PEAS stands for Performance (measure of success), Environment (where the agent operates), Actuators (how it affects the environment), and Sensors (how it perceives the environment).',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-3',
        courseId: 'intelligent-systems',
        question: 'What is a primary disadvantage of Depth-First Search (DFS) in state-space graphs?',
        options: [
            'It has high space complexity compared to BFS.',
            'It requires a heuristic function to operate.',
            'It is vulnerable to getting stuck in infinite loops.',
            'It expands all nodes at a given depth before moving deeper.'
        ],
        correctIndex: 2,
        explanation: 'DFS explores as far as possible down one branch. If the state space is infinite or contains cycles, DFS can get stuck exploring an infinite path without ever finding the goal.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-4',
        courseId: 'intelligent-systems',
        question: 'Iterative Deepening Search (IDS) combines the benefits of which two search algorithms?',
        options: [
            'A* Search and Breadth-First Search',
            'Depth-First Search and Breadth-First Search',
            'Depth-Limited Search and Greedy Best-First Search',
            'Uniform Cost Search and Depth-First Search'
        ],
        correctIndex: 1,
        explanation: 'IDS iteratively increases the depth limit of a depth-first search, combining the low space complexity of DFS with the completeness and optimality (for uniform costs) of BFS.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-5',
        courseId: 'intelligent-systems',
        question: 'In informed search, what defines an "admissible" heuristic?',
        options: [
            'It always overestimates the cost to reach the goal.',
            'It never overestimates the true cost to reach the goal.',
            'It limits the number of expanded nodes to a constant k.',
            'It is guaranteed to run in polynomial time.'
        ],
        correctIndex: 1,
        explanation: 'An admissible heuristic is optimistic; it never overestimates the actual cost to reach the goal. This property ensures that A* search using this heuristic will find an optimal solution.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-6',
        courseId: 'intelligent-systems',
        question: 'Which of the following describes the evaluation function used in A* search?',
        options: [
            'f(n) = h(n)',
            'f(n) = g(n) * h(n)',
            'f(n) = g(n) + h(n)',
            'f(n) = g(n)'
        ],
        correctIndex: 2,
        explanation: 'In A* search, f(n) evaluates a node by summing g(n), the exact cost to reach the node so far, and h(n), the estimated cost from the node to the goal.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-7',
        courseId: 'intelligent-systems',
        question: 'Which adversarial search optimization can reduce the number of nodes evaluated from O(b^d) to O(b^(d/2)) in the best case?',
        options: [
            'Beam Search',
            'Iterative Deepening',
            'Alpha-Beta Pruning',
            'Monte Carlo Sampling'
        ],
        correctIndex: 2,
        explanation: 'Alpha-beta pruning eliminates branches in the game tree that cannot possibly affect the final decision, effectively doubling the search depth achievable in the same time under optimal ordering.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-8',
        courseId: 'intelligent-systems',
        question: 'In the context of Minimax, what does the "beta" parameter track during Alpha-Beta pruning?',
        options: [
            'The best (minimum) score currently guaranteed for the MIN player.',
            'The best (maximum) score currently guaranteed for the MAX player.',
            'The heuristic value of the current terminal node.',
            'The depth of the search tree.'
        ],
        correctIndex: 0,
        explanation: 'During pruning, alpha tracks the highest value found so far for the MAX player, while beta tracks the lowest value found so far for the MIN player. If alpha >= beta, pruning occurs.',
        difficulty: 'hard'
    },
    {
        id: 'quiz-is-9',
        courseId: 'intelligent-systems',
        question: 'Why are heuristics often used in adversarial search for complex games instead of exploring to terminal nodes?',
        options: [
            'Because the Minimax algorithm requires heuristics to function correctly.',
            'Because exhaustive evaluation to terminal nodes is frequently computationally infeasible due to game complexity.',
            'Because heuristics always provide the exact utility of a state, unlike terminal nodes.',
            'Because Alpha-Beta pruning only works with heuristic evaluation functions.'
        ],
        correctIndex: 1,
        explanation: 'For games with large branching factors and depths (like chess or Go), searching the entire tree to terminal nodes is practically impossible. Heuristics approximate the utility of non-terminal states to allow decision-making.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-10',
        courseId: 'intelligent-systems',
        question: 'What challenge does "imperfect information" introduce in adversarial games like Schnapsen?',
        options: [
            'The game state is completely visible, leading to an infinite search tree.',
            'Players must reason under uncertainty because hidden elements are present.',
            'The utility function cannot be calculated at terminal nodes.',
            'The game rules change stochastically during playtime.'
        ],
        correctIndex: 1,
        explanation: 'Imperfect information means players do not have full visibility of the game state (e.g., opponents\' hidden cards), requiring them to reason probabilistically or use sampling techniques over possible states.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-11',
        courseId: 'intelligent-systems',
        question: 'In propositional logic, when is an implication statement (A → B) evaluated as false?',
        options: [
            'Only when A is true and B is false.',
            'When both A and B are false.',
            'When A is false and B is true.',
            'When both A and B are true.'
        ],
        correctIndex: 0,
        explanation: 'An implication (A → B) is false ONLY if the antecedent (A) is true but the consequent (B) is false. In all other cases, the implication evaluates to true.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-12',
        courseId: 'intelligent-systems',
        question: 'What does it mean if a logical knowledge base (KB) "entails" a sentence α?',
        options: [
            'The sentence α is logically equivalent to the KB.',
            'The sentence α is false in all models where the KB is true.',
            'The sentence α is true in all models where the KB is true.',
            'The sentence α can be derived from the KB only if it is in CNF.'
        ],
        correctIndex: 2,
        explanation: 'Entailment (KB ⊨ α) means that every model (truth assignment) that makes the knowledge base true also makes the sentence α true. α logically follows from the KB.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-13',
        courseId: 'intelligent-systems',
        question: 'What is Clause Normal Form (CNF) in propositional logic?',
        options: [
            'A sentence expressed as a disjunction of conjunctions (ORs of ANDs).',
            'A sentence expressed as a conjunction of disjunctions (ANDs of ORs).',
            'A sentence that uses only implication and negation operators.',
            'A sentence where all variables are existentially quantified.'
        ],
        correctIndex: 1,
        explanation: 'CNF standardizes logical sentences into a specific format: a conjunction (AND) of clauses, where each clause is a disjunction (OR) of literals. This format is required by many SAT-solving algorithms like DPLL.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-14',
        courseId: 'intelligent-systems',
        question: 'Which algorithm is commonly used for determining the satisfiability of propositional logic formulas in CNF through partial assignments and backtracking?',
        options: [
            'A* Search',
            'Minimax',
            'DPLL (Davis-Putnam-Logemann-Loveland)',
            'k-Means'
        ],
        correctIndex: 2,
        explanation: 'The DPLL algorithm determines the satisfiability of CNF formulas by systematically making partial Truth assignments, utilizing unit clauses, and backtracking when a conflict is found.',
        difficulty: 'hard'
    },
    {
        id: 'quiz-is-15',
        courseId: 'intelligent-systems',
        question: 'In the context of modeling, what is an Ontology?',
        options: [
            'A hardware architecture for logical agents.',
            'An explicit specification of shared conceptualizations within a domain.',
            'A probabilistic model for continuous random variables.',
            'The algorithm used to convert sentences to Clause Normal Form.'
        ],
        correctIndex: 1,
        explanation: 'An ontology is a formal representation of a domain\'s knowledge, defining the concepts, instances, classes, attributes, and the relationships connecting them.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-16',
        courseId: 'intelligent-systems',
        question: 'What structure does the Resource Description Framework (RDF) use to model knowledge?',
        options: [
            'Binary search trees',
            'Subject-predicate-object triples',
            'If-then-else rules',
            'Multi-dimensional tensors'
        ],
        correctIndex: 1,
        explanation: 'RDF models knowledge graphs using statements formed as "triples": a subject (the entity), a predicate (the relationship or attribute), and an object (another entity or a literal value).',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-17',
        courseId: 'intelligent-systems',
        question: 'How does fuzzy logic differ from traditional propositional logic?',
        options: [
            'Fuzzy logic cannot be implemented in software.',
            'Fuzzy logic allows propositions to have degrees of truth (membership) between 0 and 1.',
            'Fuzzy logic only deals with uncertainty caused by missing data, not vagueness.',
            'Fuzzy logic uses Bayes\' theorem to update beliefs.'
        ],
        correctIndex: 1,
        explanation: 'Unlike propositional logic which restricts truth values to strictly True (1) or False (0), fuzzy logic models vagueness by allowing continuous degrees of membership between 0 and 1.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-18',
        courseId: 'intelligent-systems',
        question: 'Which paradigm interprets probabilities as a reflection of subjective belief or uncertainty about a single event rather than long-run frequencies?',
        options: [
            'Frequentism',
            'Bayesianism',
            'Determinism',
            'Ontologism'
        ],
        correctIndex: 1,
        explanation: 'The Bayesian paradigm treats probability as a measure of subjective belief or uncertainty given current knowledge, which can be updated as new evidence is observed, unlike frequentism which relies on observed frequencies over many trials.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-19',
        courseId: 'intelligent-systems',
        question: 'What is the sum of the probabilities of all atomic events in a sample space?',
        options: [
            'It depends on the number of events.',
            '0',
            '1',
            'Infinity'
        ],
        correctIndex: 2,
        explanation: 'By definition of a probability space, the probabilities of all mutually exclusive and exhaustive atomic events must sum to exactly 1.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-20',
        courseId: 'intelligent-systems',
        question: 'According to Bayes\' Theorem, P(A|B) can be calculated if you know which of the following?',
        options: [
            'P(B|A), P(A), and P(B)',
            'Only P(A) and P(B)',
            'Only P(B|A) and P(A)',
            'P(A|B) must be observed empirically and cannot be calculated.'
        ],
        correctIndex: 0,
        explanation: 'Bayes\' Theorem states that P(A|B) = (P(B|A) * P(A)) / P(B). It requires the likelihood P(B|A), the prior P(A), and the evidence probability P(B).',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-21',
        courseId: 'intelligent-systems',
        question: 'What is the primary advantage of modeling a domain using a Bayesian Network?',
        options: [
            'It allows for perfect predictions without any initial prior probabilities.',
            'It reduces data requirements and simplifies joint probability calculations by exploiting conditional independence.',
            'It eliminates vagueness by converting fuzzy sets into discrete probabilities.',
            'It guarantees finding the global minimum error in classification tasks.'
        ],
        correctIndex: 1,
        explanation: 'Bayesian Networks graphically represent conditional dependencies. By identifying pairs of variables that are conditionally independent, the network drastically reduces the number of parameters needed to define the full joint probability distribution.',
        difficulty: 'hard'
    },
    {
        id: 'quiz-is-22',
        courseId: 'intelligent-systems',
        question: 'What mathematical rule is used in Bayesian Networks to compute the joint probability of all variables as the product of conditional probabilities?',
        options: [
            'The Union Rule',
            'The Subsumption Rule',
            'The Chain Rule',
            'The Resolution Rule'
        ],
        correctIndex: 2,
        explanation: 'The Chain Rule of probability allows a joint probability distribution to be factored into a product of conditional probabilities: P(A,B,C) = P(A|B,C)P(B|C)P(C). Bayesian Networks simplify this further using independence assumptions.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-23',
        courseId: 'intelligent-systems',
        question: 'What defines a classification problem in machine learning?',
        options: [
            'Predicting a continuous numerical value for a data point.',
            'Grouping data points based on their similarity without prior labels.',
            'Sorting data items based on specific ranking criteria.',
            'Assigning a discrete class label to a data point based on its input features.'
        ],
        correctIndex: 3,
        explanation: 'Classification is a supervised learning task where an algorithm learns from labeled training data to predict discrete categorical labels for new, unseen data points.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-24',
        courseId: 'intelligent-systems',
        question: 'Why is the Naive Bayes Classifier considered "naive"?',
        options: [
            'Because it can only perform binary classification.',
            'Because it assumes that all features are conditionally independent given the class, which rarely holds perfectly in reality.',
            'Because it does not utilize training data, making naive guesses.',
            'Because it ignores prior probabilities and only uses likelihoods.'
        ],
        correctIndex: 1,
        explanation: 'The "naive" assumption of Naive Bayes is that the presence of one feature does not affect the likelihood of another feature given the class label. While often false, the classifier still performs surprisingly well in practice.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-25',
        courseId: 'intelligent-systems',
        question: 'What is the purpose of Laplace Smoothing in a Naive Bayes classifier?',
        options: [
            'To reduce the dimensionality of the feature space limit overfitting.',
            'To average adjacent features and reduce noise in continuous data.',
            'To assign small non-zero probabilities to unseen features, preventing zero probabilities from nullifying the entire calculation.',
            'To transform non-linear boundaries into linear hyperplanes.'
        ],
        correctIndex: 2,
        explanation: 'If a feature was not observed in the training data for a specific class, its probability estimate would be zero. Because Naive Bayes implies multiplying probabilities, a single zero cancels the entire formula. Laplace smoothing adds a small constant to avoid this.',
        difficulty: 'hard'
    },
    {
        id: 'quiz-is-26',
        courseId: 'intelligent-systems',
        question: 'How does the k-Nearest Neighbor (k-NN) algorithm classify a new, unseen data point?',
        options: [
            'By solving a linear regression equation based on the training points.',
            'By finding its majority class among the k closest training examples in the feature space.',
            'By calculating the conditional probability using Bayes\' theorem.',
            'By building a decision tree based on information gain.'
        ],
        correctIndex: 1,
        explanation: 'k-NN is a non-parametric instance-based learning algorithm. It measures the distance from the new point to all training points, selects the k closest neighbors, and assigns the class label most frequent among those neighbors.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-27',
        courseId: 'intelligent-systems',
        question: 'Which of the following is an example of Unsupervised Learning?',
        options: [
            'Predicting stock market prices using historical data.',
            'Identifying spam emails using tagged examples.',
            'Grouping customers into distinct segments based on purchasing behavior.',
            'Training an agent to play chess via rewards for winning.'
        ],
        correctIndex: 2,
        explanation: 'Customer segmentation is a clustering task. Since the input data does not have predefined labels (the segments are discovered by the algorithm based on data patterns), it is unsupervised learning.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-28',
        courseId: 'intelligent-systems',
        question: 'When extracting features from text, what does TF-IDF conceptually measure?',
        options: [
            'The similarity angle between two text documents.',
            'The importance of a word, weighting it higher if it appears frequently in a document but rarely across the entire corpus.',
            'The chronological order of words in a sentence.',
            'The grammatical correctness of a phrase relative to training labels.'
        ],
        correctIndex: 1,
        explanation: 'Term Frequency-Inverse Document Frequency (TF-IDF) scores words based on frequency. It increases with high occurrence in the specific document (TF) but decreases if the word is common across all documents (IDF), filtering out common stopwords.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-29',
        courseId: 'intelligent-systems',
        question: 'In a classification evaluation confusion matrix, what does a False Positive (FP) represent?',
        options: [
            'A true negative correctly identified by the model.',
            'A true positive incorrectly missed by the model.',
            'An instance incorrectly predicted as positive when it is actually negative.',
            'An instance correctly predicted as positive.'
        ],
        correctIndex: 2,
        explanation: 'A false positive (also known as a Type I error) occurs when the model predicts the positive class, but the ground truth label is actually negative.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-30',
        courseId: 'intelligent-systems',
        question: 'If a model fits the training data perfectly (fitting the noise) but performs poorly on the unseen test set, the model is likely:',
        options: [
            'Underfitting',
            'Overfitting',
            'Converging correctly',
            'Undergoing early stopping'
        ],
        correctIndex: 1,
        explanation: 'Overfitting happens when a model is too complex and learns the random noise or specific quirks of the training data rather than the underlying generalized pattern, resulting in poor performance on new data.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-31',
        courseId: 'intelligent-systems',
        question: 'What does Occam’s Razor recommend in the context of model class selection?',
        options: [
            'Always use the neural network with the most layers.',
            'Use the simplest hypothesis that adequately explains the data.',
            'Increase the number of features until error is zero.',
            'Only use linear classifiers.'
        ],
        correctIndex: 1,
        explanation: 'Occam\'s Razor is a philosophical principle applied to machine learning indicating preference for simpler models. Simple models are less prone to overfitting and generalize better than unnecessarily complex ones when describing the same data.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-32',
        courseId: 'intelligent-systems',
        question: 'What is the goal of the Gradient Descent optimization algorithm?',
        options: [
            'To maximize the sum of squared errors.',
            'To discover the exact probabilistic structure of a Bayesian network.',
            'To iteratively find the parameters that minimize an error or loss function by taking steps in the opposite direction of the gradient.',
            'To randomly sample hyperplanes until a maximum margin is found.'
        ],
        correctIndex: 2,
        explanation: 'Gradient descent computes the gradient (derivative) of the loss function with respect to the model parameters, then updates the parameters by moving in the direction of steepest descent to minimize the error.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-33',
        courseId: 'intelligent-systems',
        question: 'What is a key difference between Batch Gradient Descent and Stochastic Gradient Descent (SGD)?',
        options: [
            'SGD is guaranteed to find the global minimum, whereas Batch is not.',
            'Batch Gradient Descent uses a random subset of data, whereas SGD uses the entire dataset for each update.',
            'SGD updates parameters using a single example or a small mini-batch per iteration, making it faster but noisier than using the full dataset.',
            'SGD is only used for unsupervised learning.'
        ],
        correctIndex: 2,
        explanation: 'Batch training computes gradients using the entire dataset before making one parameter update. SGD updates the parameters much more frequently using randomly selected subsets (or individuals), leading to faster, although erratic, convergence.',
        difficulty: 'hard'
    },
    {
        id: 'quiz-is-34',
        courseId: 'intelligent-systems',
        question: 'In the k-Means clustering algorithm, how are cluster centers updated during each iteration?',
        options: [
            'They are moved to the boundaries of the dataset.',
            'They are recomputed as the mean (average) position of all newly assigned points in the cluster.',
            'They are assigned randomly at every step.',
            'They are calculated using TF-IDF.'
        ],
        correctIndex: 1,
        explanation: 'After all data points are assigned to the nearest current cluster center, k-Means recalculates the new center (centroid) by computing the mean vector of all data points currently belonging to that cluster.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-35',
        courseId: 'intelligent-systems',
        question: 'What does a high Silhouette Coefficient (close to 1) indicate in evaluating clustering?',
        options: [
            'Data points are poorly grouped and overlapping.',
            'Data points have high intra-cluster similarity and low inter-cluster similarity, indicating well-defined clusters.',
            'The algorithm failed to converge.',
            'There are too many clusters.'
        ],
        correctIndex: 1,
        explanation: 'The Silhouette score measures how similar an object is to its own cluster (cohesion) compared to other clusters (separation). A score near 1 means the clusters are dense and well-separated from each other.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-36',
        courseId: 'intelligent-systems',
        question: 'Why must activation functions, such as the Sigmoid function, be added to neurons in an Artificial Neural Network?',
        options: [
            'To prevent the network from overfitting.',
            'To map the output into a probability space.',
            'To introduce non-linearity, allowing the network to model complex relationships that are not linearly separable.',
            'To speed up the backpropagation algorithm.'
        ],
        correctIndex: 2,
        explanation: 'Without non-linear activation functions, a neural network, regardless of how many layers it has, fundamentally behaves as a single layer linear regression model. Activation functions allow networks to approximate any complex function.',
        difficulty: 'hard'
    },
    {
        id: 'quiz-is-37',
        courseId: 'intelligent-systems',
        question: 'In a neural network used for multiclass classification, which activation function is typically applied to the final output layer to produce a probability distribution across all classes?',
        options: [
            'ReLU',
            'Softmax',
            'Sigmoid',
            'Tanh'
        ],
        correctIndex: 1,
        explanation: 'The Softmax function normalizes a vector of raw scores (logits) into a probability distribution consisting of probabilities proportional to the exponentials of the input numbers, ensuring they all sum to 1.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-38',
        courseId: 'intelligent-systems',
        question: 'What is the primary role of the Backpropagation algorithm in training Artificial Neural Networks?',
        options: [
            'To compute the forward pass output of the network.',
            'To calculate the gradients of the loss function with respect to the network weights using the chain rule.',
            'To select the optimal number of hidden layers.',
            'To initialize the weights to small random numbers.'
        ],
        correctIndex: 1,
        explanation: 'Backpropagation efficiently computes the gradient (derivative) of the error for every weight in the network, working backward from the output layer to the input. The optimizer then uses these gradients to update the weights.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-39',
        courseId: 'intelligent-systems',
        question: 'What key innovation defines the Transformer architecture used in modern NLP models like GPT?',
        options: [
            'It utilizes recurrent loops to remember past states.',
            'It relies solely on convolutional layers to process text.',
            'It employs a self-attention mechanism that allows the model to weigh the relevance of different parts of the input sequence simultaneously.',
            'It replaces gradients with genetic algorithms for optimization.'
        ],
        correctIndex: 2,
        explanation: 'Transformers discarded recurrence (like RNNs) in favor of the self-attention mechanism, which evaluates the contextual relationship of every word to every other word in a sequence entirely in parallel, greatly improving capability and training efficiency.',
        difficulty: 'hard'
    },
    {
        id: 'quiz-is-40',
        courseId: 'intelligent-systems',
        question: 'During text generation, what is Beam Search used for?',
        options: [
            'To replace missing words with exact database lookups.',
            'To explore and keep track of the top-k most probable sequence of words rather than just greedily choosing the single best word at each step.',
            'To search for keywords within a training corpus.',
            'To prune decision trees during regression.'
        ],
        correctIndex: 1,
        explanation: 'Beam Search is a heuristic search algorithm used in seq2seq models. Instead of picking the one most likely next word (greedy search), it maintains a "beam" of k possible sequences, improving overall sequence quality.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-41',
        courseId: 'intelligent-systems',
        question: 'In propositional logic, if sentence A is "True" and sentence B is "False", what is the truth value of the disjunction (A ∨ B)?',
        options: [
            'False',
            'Unknown',
            'True',
            'Satisfiable'
        ],
        correctIndex: 2,
        explanation: 'The disjunction operator (OR, denoted by ∨) evaluates to True if at least one of the connected propositions is True.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-42',
        courseId: 'intelligent-systems',
        question: 'When an agent evaluates its environments based on the PEAS criteria, what does the "S" typically represent?',
        options: [
            'Sensors – how the agent perceives its environment.',
            'State – the internal memory loop of the agent.',
            'Search – the algorithm used to find solutions.',
            'Semantics – the meaning of logical operators.'
        ],
        correctIndex: 0,
        explanation: 'In the PEAS framework, S stands for Sensors, which are the mechanisms the agent uses to gather data or "percepts" from the environment.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-43',
        courseId: 'intelligent-systems',
        question: 'In graph theory applied to state-space representations, what defines a "Tree"?',
        options: [
            'A graph with weights on its edges.',
            'A completely disconnected set of nodes.',
            'A connected graph that contains no cycles or loops.',
            'A graph where every node is connected to every other node.'
        ],
        correctIndex: 2,
        explanation: 'In graph terminology, a tree is a special type of undirected graph that is both connected (a path exists between any two nodes) and acyclic (contains no loops).',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-44',
        courseId: 'intelligent-systems',
        question: 'What is the "fringe" (or frontier) in the context of search algorithms?',
        options: [
            'The set of nodes representing the shortest path.',
            'The data structure that stores the unexpanded nodes waiting to be explored.',
            'The nodes that have already been evaluated and discarded.',
            'The heuristic estimation of remaining distance.'
        ],
        correctIndex: 1,
        explanation: 'The fringe (often implemented as a queue, stack, or priority queue) holds the "leaf" nodes of the search tree that have been discovered but not yet expanded by the search algorithm.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-is-45',
        courseId: 'intelligent-systems',
        question: 'Why might Breadth-First Search (BFS) be unsuitable for problems with a high branching factor and deep goal states?',
        options: [
            'It is guaranteed to be incomplete.',
            'It prioritizes heuristic evaluation over depth.',
            'It requires massive amounts of memory because space complexity scales exponentially with depth.',
            'It cannot find the shortest path in uniform cost scenarios.'
        ],
        correctIndex: 2,
        explanation: 'BFS keeps every node in memory at the current depth level. In trees with a high branching factor b at depth d, it stores O(b^d) nodes, often exhausting available memory before finding a deep goal.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-46',
        courseId: 'intelligent-systems',
        question: 'Given the A* evaluation function $f(n) = g(n) + h(n)$, what is the strict mathematical condition for a heuristic $h(n)$ to be considered admissible if the optimal cost is $h^*(n)$?',
        options: [
            '$h(n) \\ge h^*(n)$',
            '$0 \\le h(n) \\le h^*(n)$',
            '$h(n) = g(n) + h^*(n)$',
            '$h(n) \\le 0$'
        ],
        correctIndex: 1,
        explanation: 'An admissible heuristic never overestimates the true cost to reach the goal. Therefore, its returned value must be between 0 and the actual optimal path cost $h^*(n)$.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-47',
        courseId: 'intelligent-systems',
        question: 'According to Bayes Theorem, which equation correctly represents the posterior probability $P(A|B)$?',
        options: [
            '$P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$',
            '$P(A|B) = P(A) \\times P(B)$',
            '$P(A|B) = \\frac{P(A \\cap B)}{P(A)}$',
            '$P(A|B) = \\sum_{i} P(B|A_i)P(A_i)$'
        ],
        correctIndex: 0,
        explanation: 'Bayes Theorem states that the posterior probability $P(A|B)$ is equal to the likelihood $P(B|A)$ multiplied by the prior $P(A)$, divided by the marginal probability $P(B)$.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-48',
        courseId: 'intelligent-systems',
        question: 'In a Naive Bayes Classifier, how is the prediction equation formulated due to the "naive" conditional independence assumption?',
        options: [
            '$\\hat{y} = \\arg\\max_{y} P(y) \\times P(x_1, x_2, \\dots, x_n)$',
            '$\\hat{y} = \\arg\\max_{y} P(y) \\prod_{i=1}^{n} P(x_i | y)$',
            '$\\hat{y} = \\sum_{i=1}^{n} w_i x_i + b$',
            '$\\hat{y} = \\frac{P(A|y)P(y)}{P(A)}$'
        ],
        correctIndex: 1,
        explanation: 'Because the features are assumed conditionally independent given the class, the joint probability $P(x_1, \dots, x_n | y)$ simplifies to the product of individual probabilities $\prod P(x_i | y)$.',
        difficulty: 'hard'
    },
    {
        id: 'quiz-is-49',
        courseId: 'intelligent-systems',
        question: 'In a standard Artificial Neural Network dense layer, if $W$ is the weight matrix, $X$ is the input vector, and $b$ is the bias vector, what is the formula for the pre-activation outputs $Z$?',
        options: [
            '$Z = \\max(0, W \\cdot X)$',
            '$Z = W^T X + b$',
            '$Z = W \\cdot X + b$',
            '$Z = \\frac{1}{1 + e^{-(W \\cdot X)}}$'
        ],
        correctIndex: 2,
        explanation: 'The standard forward pass computation before applying the non-linear activation function is the linear combination of inputs with their respective weights, added to the bias: $Z = W \\cdot X + b$.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-is-50',
        courseId: 'intelligent-systems',
        question: 'What is the core mathematical calculation performed in the Self-Attention mechanism of a Transformer model?',
        options: [
            '$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$',
            '$\\text{Attention}(Q, K, V) = Q \\cdot K \\cdot V + b$',
            '$\\text{Attention}(Q, K, V) = \\max(0, QK^T) V$',
            '$\\frac{\\partial \\mathcal{L}}{\\partial W} = \\frac{\\partial \\mathcal{L}}{\\partial y} \\frac{\\partial y}{\\partial z} \\frac{\\partial z}{\\partial W}$'
        ],
        correctIndex: 0,
        explanation: 'The self-attention calculation measures the similarity between the Queries ($Q$) and Keys ($K$) using dot-product, scales it down by $\\sqrt{d_k}$, applies softmax, and multiplies by the Values ($V$).',
        difficulty: 'hard'
    },

    // ========== Project Intelligent Systems ==========
    {
        id: 'quiz-pis-1',
        courseId: 'project-intelligent-systems',
        question: 'In Schnapsen, how many cards are in the deck?',
        options: ['32', '20', '52', '24'],
        correctIndex: 1,
        explanation: 'Schnapsen uses a reduced deck of 20 cards: Aces, 10s, Kings, Queens, and Jacks in four suits (Hearts, Diamonds, Spades, Clubs).',
        difficulty: 'easy'
    },
    {
        id: 'quiz-pis-2',
        courseId: 'project-intelligent-systems',
        question: 'What is the point target a player must reach to win a hand of Schnapsen?',
        options: ['21 points', '100 points', '66 points', '50 points'],
        correctIndex: 2,
        explanation: 'A player wins a hand of Schnapsen by being the first to reach 66 points through winning tricks and/or declaring marriages.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-pis-3',
        courseId: 'project-intelligent-systems',
        question: 'What is a "marriage" in Schnapsen?',
        options: [
            'Playing two cards of the same rank',
            'Declaring a King-Queen pair of the same suit',
            'Winning two consecutive tricks',
            'Exchanging the trump Jack for the face-up trump card'
        ],
        correctIndex: 1,
        explanation: 'A marriage in Schnapsen is declaring a King-Queen pair of the same suit. A trump marriage is worth 40 points, and a non-trump marriage is worth 20 points.',
        difficulty: 'easy'
    },
    {
        id: 'quiz-pis-4',
        courseId: 'project-intelligent-systems',
        question: 'In Schnapsen, what distinguishes Phase 1 from Phase 2 of the game?',
        options: [
            'Phase 1 uses all 20 cards, Phase 2 uses only 10',
            'Phase 1 has imperfect information (talon remains), Phase 2 has perfect information (talon exhausted)',
            'Phase 1 is played with trumps, Phase 2 is played without',
            'Phase 1 has no marriages, Phase 2 allows marriages'
        ],
        correctIndex: 1,
        explanation: 'In Phase 1 the talon (stock) still has cards face down, creating imperfect information. Once the talon is exhausted, Phase 2 begins with perfect information — all remaining cards are known.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-pis-5',
        courseId: 'project-intelligent-systems',
        question: 'Which AI technique is most suitable for Phase 2 of Schnapsen (perfect information)?',
        options: [
            'Monte Carlo sampling',
            'Naive Bayes classification',
            'Minimax with alpha-beta pruning',
            'K-means clustering'
        ],
        correctIndex: 2,
        explanation: 'Phase 2 has perfect information (all cards are known), making it ideal for adversarial search algorithms like minimax with alpha-beta pruning that can compute optimal moves by exploring the full game tree.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-pis-6',
        courseId: 'project-intelligent-systems',
        question: 'What does the RDeep bot strategy do in the Schnapsen engine?',
        options: [
            'Uses deep reinforcement learning to learn optimal play',
            'Samples random possible game states and uses minimax to evaluate moves',
            'Uses a recurrent neural network to predict opponent cards',
            'Applies depth-first search on the full game tree'
        ],
        correctIndex: 1,
        explanation: 'RDeep uses Monte Carlo sampling: it randomly assigns unknown cards to create possible game states, then applies minimax to evaluate each possible move. By averaging over many samples, it estimates which move is best despite imperfect information.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-pis-7',
        courseId: 'project-intelligent-systems',
        question: 'How many game points does a player earn if their opponent has won no tricks at all?',
        options: [
            '1 game point',
            '2 game points',
            '3 game points',
            '4 game points'
        ],
        correctIndex: 2,
        explanation: 'If the opponent has won no tricks at all, you earn 3 game points. If the opponent scored less than 33 points you earn 2 game points. Otherwise you earn 1 game point.',
        difficulty: 'medium'
    },
    {
        id: 'quiz-pis-8',
        courseId: 'project-intelligent-systems',
        question: 'What format should the research paper for the IS project follow?',
        options: [
            'IEEE conference format',
            'APA 7th edition',
            'Springer Lecture Notes in Computer Science (LNCS)',
            'ACM SIGCHI format'
        ],
        correctIndex: 2,
        explanation: 'The research paper must follow the Springer Lecture Notes in Computer Science (LNCS) format, which is a standard academic format for computer science publications.',
        difficulty: 'easy'
    },

    // Logic and Sets questions removed — replaced by PracticeQuestion format in practiceQuestions.ts

    // ========== Dynamic Modelling (Modelling Human Behaviour) ==========
    {
        id: 'quiz-dm-1',
        courseId: 'modelling-human-behaviour',
        question:
            'Which task is NOT relevant in the conceptualisation phase of creating a model?',
        options: [
            'Defining the scope of the model',
            'Deciding on the representation of the model concepts',
            'Determining relations between concepts',
            'Formulating expectations about the model behaviour',
        ],
        correctIndex: 1,
        explanation:
            'Conceptualisation involves defining the scope, identifying concepts, determining relations, and formulating expected patterns. Deciding on the representation (numerical vs. logical) is part of the formalisation phase, not conceptualisation.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-2',
        courseId: 'modelling-human-behaviour',
        question:
            'A limited growth function can be formalised as Amount(t+dt) = Amount(t) + a * ((C - Amount(t)) / C). What is the maximum value that the concept Amount could reach?',
        options: ['1', '10', 'C', 'Amount(t)'],
        correctIndex: 2,
        explanation:
            'In logistic (limited) growth, the gain factor (C - Amount(t)) / C approaches 0 as Amount(t) approaches C. Therefore, the amount asymptotically approaches the capacity C and can never exceed it.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-3',
        courseId: 'modelling-human-behaviour',
        question:
            'Choose the right word to fill in the blank: "The model of an E. coli bacterium is a model at the _______ level."',
        options: ['individual', 'collective', 'cognitive', 'physiological'],
        correctIndex: 3,
        explanation:
            'The E. coli model describes internal chemical pathways (glucose indicator, enzymes, CRPcAMP) — these are physiological-level processes, not cognitive or collective.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-4',
        courseId: 'modelling-human-behaviour',
        question:
            'Which statement about "characteristic patterns" is NOT correct?',
        options: [
            'They are meant to help developers of intelligent systems understand the meaning of the model',
            'They are meant to evaluate whether the model behaves as expected',
            'They are formulated during the design phase of a model',
            'They preferably specify effects between concepts that are not directly connected',
        ],
        correctIndex: 0,
        explanation:
            'Characteristic patterns (expected patterns / model properties) are formulated during the design phase and used during evaluation to check if the model produces the expected behaviour. They are NOT primarily meant to help developers of intelligent systems understand the model — that is a side effect, not their purpose.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-5',
        courseId: 'modelling-human-behaviour',
        question:
            'How could you extend the model of the Aplysia sea hare to include a realistic process of "forgetting" the learned behaviour?',
        options: [
            'By setting the value of "synapse strength" to 0 after 5 touches on the siphon',
            'By removing the connection between the "intermediate neuron" and the "moto-neuron"',
            'By introducing a decay factor that reduces the value of the concept "synapse strength" every time step with a few percent',
            'By introducing a concept "forget" that grows over time',
        ],
        correctIndex: 2,
        explanation:
            'Forgetting is a gradual process where learned associations weaken over time. A decay factor that reduces synapse strength by a small percentage each time step models this realistically — the behaviour fades gradually rather than disappearing abruptly.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-6',
        courseId: 'modelling-human-behaviour',
        question:
            'Which of the following statements does NOT hold for the model of honeybees?',
        options: [
            'Over time, bees are less willing to do tasks that they did not do often',
            'Concepts at the behavioural level influence concepts at the collective level',
            'Every bee is in principle able to do every task',
            'Bees always choose the task that is most urgent',
        ],
        correctIndex: 3,
        explanation:
            'Bees choose the task with the highest RELATIVE urgency (urgency divided by the norm), not simply the most urgent task in absolute terms. The norms are personal and change over time, so the same absolute urgency can lead different bees to different roles.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-7',
        courseId: 'modelling-human-behaviour',
        question:
            'There are two approaches for modelling social processes (e.g. the spread of a disease). Which sentence is correct?',
        options: [
            'The two approaches are population-based and individual-based; an advantage of population-based is that it allows modelling larger societies',
            'The two approaches are population-based and individual-based; a disadvantage of population-based is that it is computationally more intensive',
            'The two approaches are collective-level and behavioural-level; an advantage of collective-level is that it is computationally more efficient',
            'The two approaches are collective-level and behavioural-level; an advantage of behavioural-level is that it can be used for different types of behaviour',
        ],
        correctIndex: 0,
        explanation:
            'The two approaches are population-based (collective) and individual-based. Population-based models represent groups as aggregate numbers (Susceptibles, Infectives, Recovered), making them computationally efficient and scalable to large populations. Individual-based models track each person separately — more precise but harder to scale.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-8',
        courseId: 'modelling-human-behaviour',
        question:
            'A schematic illustration shows: concept1 and concept2 both point to concept3, concept3 and concept4 point to concept5. In the BDI model, which assignment of names is correct?',
        options: [
            'concept1 = belief; concept3 = intention; concept5 = action',
            'concept1 = intention; concept3 = preparation; concept5 = action',
            'concept1 = desire; concept2 = belief; concept4 = intention',
            'concept1 = desire; concept3 = intention; concept4 = belief',
        ],
        correctIndex: 3,
        explanation:
            'In the BDI model: desire and belief feed into intention, and intention together with belief lead to action. So concept1 = desire, concept2 = belief (both feed into concept3 = intention), concept4 = belief, concept5 = action.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-dm-9',
        courseId: 'modelling-human-behaviour',
        question:
            'What is the key characteristic of intelligent behaviour?',
        options: [
            'Intelligent behaviour can only be performed by animals that have (some) cognitions',
            'Intelligent behaviour should be modelled with a logical formalism',
            'Intelligent behaviour requires knowledge about the world',
            'Intelligent behaviour requires a complex environment',
        ],
        correctIndex: 2,
        explanation:
            'Intelligent behaviour fundamentally requires knowledge about the world — whether through beliefs, observations, or learned representations. This knowledge enables an agent to make informed decisions. It does not strictly require cognition (systems can be intelligent), a specific formalism, or a complex environment.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-10',
        courseId: 'modelling-human-behaviour',
        question:
            'Which concept is essential to model "adaptive" behaviour, but is NOT required for modelling "reactive" behaviour?',
        options: [
            'Sensory representation',
            'Intention',
            'Sensitivity',
            'Desire',
        ],
        correctIndex: 2,
        explanation:
            'Adaptive behaviour changes through experience, which requires a "sensitivity" parameter that adjusts based on past experiences. Reactive behaviour (stimulus-response and delayed response) does not need sensitivity — it responds based on current or remembered stimuli without learning.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-dm-11',
        courseId: 'modelling-human-behaviour',
        question:
            'A model that describes how the facial expression of a person is determined by a specific picture that is presented to this person is an example of:',
        options: [
            'Stimulus-response behaviour',
            'Delayed response behaviour',
            'Adaptive behaviour',
            'Motivation-based behaviour',
        ],
        correctIndex: 0,
        explanation:
            'The person sees a picture (stimulus) and immediately shows a facial expression (response). There is no memory of past stimuli, no learning involved, and no goal-driven reasoning — it is a direct stimulus-response pattern.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-12',
        courseId: 'modelling-human-behaviour',
        question:
            'What is a correct statement about the "mind extended in the world" model (i.e. the example with Little Thumb)?',
        options: [
            'Complex mental states are required to model the process of dropping pebbles and finding the way back',
            'The model does not include internal mental states because the process is very simple',
            'The model does not include internal mental states because the pebbles act as a replacement for beliefs',
            'Complex mental states are needed because the external world is very complex',
        ],
        correctIndex: 2,
        explanation:
            'In the "extended mind" approach, the environment acts as external memory. Little Thumb does not need an internal map or complex beliefs because the pebbles in the world serve as a replacement for those internal states — the world itself stores the information needed to navigate.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-13',
        courseId: 'modelling-human-behaviour',
        question:
            'What is NOT an essential characteristic of an intelligent agent?',
        options: [
            'It is situated in an environment',
            'It receives incoming communication from humans',
            'It is able to perform autonomous actions',
            'It has goals',
        ],
        correctIndex: 1,
        explanation:
            'An intelligent agent must be situated in an environment, have goals, and be able to act autonomously. Receiving communication from humans is NOT essential — agents can interact with other agents or operate independently in an environment without human communication.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-14',
        courseId: 'modelling-human-behaviour',
        question:
            'Which predicate does NOT belong to the set of standard predicates for agent models?',
        options: [
            'observed(A:AGENT, I:INFO_ELEMENT)',
            'prepare(A:AGENT, Ac:ACTION)',
            'to_be_communicated(A:AGENT, I:INFO_ELEMENT)',
            'desire(A:AGENT, I:INFO_ELEMENT)',
        ],
        correctIndex: 1,
        explanation:
            'The standard agent predicates include: sr (sensory representation), ps (preparation state), belief, desire, observed, to_be_observed, performed, communicated_from_to, and to_be_communicated. "prepare" is not a standard predicate — the correct one is "ps" (preparation state).',
        difficulty: 'hard',
    },
    {
        id: 'quiz-dm-15',
        courseId: 'modelling-human-behaviour',
        question:
            'What is NOT a valid way of embedding a domain model within an intelligent system?',
        options: [
            'As an analysis model',
            'As a conceptual model',
            'As an adaptation model',
            'As a support model',
        ],
        correctIndex: 1,
        explanation:
            'A domain model can be embedded in an intelligent system as an analysis model (derive assessments from observations), a support model (determine actions to achieve goals), or an adaptation model (adjust based on new info). A "conceptual model" is a design artifact — it is not a way to embed a model within an operational system.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-16',
        courseId: 'modelling-human-behaviour',
        question:
            'When we use a numerical representation in which the values can only be 0 or 1, how can you represent the Boolean statement: NOT (A OR B)?',
        options: [
            '0 - (A * B)',
            '1 - MAX(A, B)',
            '(A * B) - 1',
            '1 - MIN(A, B)',
        ],
        correctIndex: 1,
        explanation:
            'In binary numerical representation: OR is MAX(A, B), and NOT is (1 - X). So NOT (A OR B) = 1 - MAX(A, B). For example, if A=1 and B=0: OR = MAX(1,0) = 1, NOT(1) = 0. If A=0 and B=0: OR = MAX(0,0) = 0, NOT(0) = 1.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-17',
        courseId: 'modelling-human-behaviour',
        question:
            'Choose the answer that correctly fills in the blanks: "When you implement a model in the L2-Python environment, you define the __1__ in the __2__ and the __3__ in the __4__."',
        options: [
            '1: start values; 2: scenario file; 3: parameter values; 4: rules file',
            '1: scenarios; 2: main file; 3: parameter values; 4: main file',
            '1: start values; 2: main file; 3: predicates; 4: rules file',
            '1: start values; 2: scenario file; 3: predicates; 4: rules file',
        ],
        correctIndex: 3,
        explanation:
            'In the L2-Python framework: start values and parameter values are defined in the scenario file, and the predicates (rules that define the dynamic relationships) are defined in the rules file.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-18',
        courseId: 'modelling-human-behaviour',
        question:
            'Which concepts are all relevant in an analysis model?',
        options: [
            'Desire, assessment, belief',
            'Propose, assessment, desire',
            'Belief, assume, desire',
            'Action, belief, assessment',
        ],
        correctIndex: 0,
        explanation:
            'An analysis model derives conclusions from observations. Its key concepts are: desire (what you want to assess), belief (derived knowledge from observations), and assessment (the conclusion reached). "Propose" and "assume" belong to support models, not analysis models.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-19',
        courseId: 'modelling-human-behaviour',
        question:
            'How do you decide whether to use forward or backward reasoning in an analysis model?',
        options: [
            'You determine whether there are more causes (choose backward) or more effects (choose forward)',
            'You choose the direction that is the easiest to implement in your system',
            'It follows automatically from the position of the observations and the desire in your model',
            'You always have to do both: first backward reasoning to causes, then forward to effects',
        ],
        correctIndex: 2,
        explanation:
            'In an analysis model, the reasoning direction is determined by the structure of the model itself — specifically where the observations and the desire (assessment goal) are positioned. If observations are at the "cause" end and the desire at the "effect" end, you reason forward, and vice versa. In contrast, for support models, you choose the direction that is easiest to implement.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-dm-20',
        courseId: 'modelling-human-behaviour',
        question:
            'Which concepts are all relevant in a support model?',
        options: [
            'Desire, assessment, belief',
            'Belief, action, observed',
            'Proposed, assumed, desire',
            'Action, belief, assessment',
        ],
        correctIndex: 2,
        explanation:
            'A support model determines what actions to take to achieve a desired state. Its key concepts are: proposed (suggested actions), assumed (expected effects of those actions), and desire (the goal state). "Assessment" belongs to analysis models, not support models.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-21',
        courseId: 'modelling-human-behaviour',
        question:
            'Which of the following is NOT one of the four activities in the modelling and simulation cycle?',
        options: [
            'Conceptualisation',
            'Optimisation',
            'Simulation',
            'Evaluation',
        ],
        correctIndex: 1,
        explanation:
            'The four activities are: Conceptualisation, Formalisation, Simulation, and Evaluation. "Optimisation" is not part of this cycle. Conceptualisation and Formalisation belong to the design phase; Simulation and Evaluation belong to the analysis phase.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-22',
        courseId: 'modelling-human-behaviour',
        question:
            'In the E. coli model, what happens when both glucose AND lactose are externally present?',
        options: [
            'Both glucose and lactose are imported simultaneously',
            'Only lactose is imported because it requires less energy',
            'Only glucose is imported because CRPcAMP is absent, blocking lactose import',
            'Neither is imported because they inhibit each other',
        ],
        correctIndex: 2,
        explanation:
            'When glucose is externally present, CRPcAMP is absent inside the cell. Since the lactose import enzyme requires CRPcAMP to be produced, lactose import is blocked. Glucose always takes priority — this is a hierarchical decision mechanism.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-23',
        courseId: 'modelling-human-behaviour',
        question:
            'What does exponential growth look like when formalised?',
        options: [
            'Amount(t+dt) = Amount(t) + c',
            'Amount(t+dt) = Amount(t) * alpha',
            'Amount(t+dt) = Amount(t) + alpha * ((C - Amount(t)) / C)',
            'Amount(t+dt) = C - Amount(t)',
        ],
        correctIndex: 1,
        explanation:
            'Exponential growth multiplies the current amount by a constant factor alpha each time step. Linear growth adds a constant c. Logistic growth includes a capacity-limiting term (C - Amount(t)) / C.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-24',
        courseId: 'modelling-human-behaviour',
        question:
            'In the Aplysia learning model, what is the initial strength of synapse S2 (between sensory neuron SN2 and the motor neuron MN)?',
        options: [
            '4 (maximum strength)',
            '2 (half strength)',
            '0 (no connection)',
            '1 (minimal connection)',
        ],
        correctIndex: 2,
        explanation:
            'Initially, synapse S2 has strength 0 — there is no functional connection between SN2 (siphon touch sensor) and MN. This is why siphon touch alone does not cause a contraction before training. Through repeated paired training (siphon touch + tail shock), S2 gradually increases to a maximum of 4.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-25',
        courseId: 'modelling-human-behaviour',
        question:
            'Which statement correctly describes the difference between "numerical" and "logical" representations in dynamic modelling?',
        options: [
            'Numerical uses variables with values; logical uses true/false propositions with IF-THEN rules',
            'Numerical is used for simple models; logical is used for complex models',
            'Numerical is used in L2-Python; logical is used in Excel',
            'Numerical representation cannot handle binary (0/1) values',
        ],
        correctIndex: 0,
        explanation:
            'In numerical representation, concepts are variables with numerical values (integer, real, 0/1) and relations are calculation rules. In logical representation, concepts are propositions (true/false) and relations are IF-THEN rules specifying truth-value dependencies. Both can handle simple and complex models, and Excel can use both approaches.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-26',
        courseId: 'modelling-human-behaviour',
        question:
            'In the honeybee colony model, what determines which role an individual bee takes on?',
        options: [
            'A central controller assigns roles based on colony needs',
            'Bees are born into fixed roles and never change',
            'The bee selects the role with the highest relative urgency based on its personal norms',
            'Bees randomly select a role each time step',
        ],
        correctIndex: 2,
        explanation:
            'Each bee maintains personal norms for each environmental aspect. It calculates urgency (deviation from norm) and relative urgency (urgency / norm) for each aspect. The bee takes on the role corresponding to the highest relative urgency. This decentralised mechanism produces emergent self-organisation without any central controller.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-27',
        courseId: 'modelling-human-behaviour',
        question:
            'In the SIR epidemic model at the population level, what does the concept "RelevantContacts" represent?',
        options: [
            'The total number of people in the population',
            'The number of contacts per day between any two people',
            'The number of contacts per day between an infective person and a susceptible person',
            'The recovery rate of infected individuals',
        ],
        correctIndex: 2,
        explanation:
            'RelevantContacts represents the number of contacts per day that are between infective and susceptible individuals — these are the only contacts that can lead to new infections. It is calculated as ContactFrequency * (Infectives / TotalPopulation).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-28',
        courseId: 'modelling-human-behaviour',
        question:
            'What is the formula for the contagion strength from a sender B to a receiver A in the emotion contagion model?',
        options: [
            'gamma_BA = epsilon_B + alpha_BA + delta_A',
            'gamma_BA = epsilon_B * alpha_BA * delta_A',
            'gamma_BA = (epsilon_B + delta_A) / alpha_BA',
            'gamma_BA = epsilon_B * delta_A - alpha_BA',
        ],
        correctIndex: 1,
        explanation:
            'The contagion strength is the product of three factors: the expressiveness of the sender (epsilon_B), the channel strength from B to A (alpha_BA), and the openness of the receiver (delta_A). If any of these is zero, there is no contagion.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-29',
        courseId: 'modelling-human-behaviour',
        question:
            'How is the emotion level of person A updated in the emotion contagion model?',
        options: [
            'It is replaced by the group average emotion level',
            'It becomes a weighted average of its old value and the average emotion impact from others',
            'It increases by a fixed amount each time step',
            'It is set to the maximum emotion level observed in the group',
        ],
        correctIndex: 1,
        explanation:
            'The new emotion level is: q_A(t+dt) = (1-gamma) * q_A + gamma * q_A*, which is a weighted average of the old emotion level and the average impact from others. The parameter gamma controls how much influence others have — if gamma is small, the person is resistant to contagion.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-30',
        courseId: 'modelling-human-behaviour',
        question:
            'A mouse remembers that food was placed behind a cup at position p2, even though a screen now blocks the view. When the screen is removed, it goes directly to p2. This is an example of:',
        options: [
            'Stimulus-response behaviour',
            'Delayed response behaviour',
            'Motivation-based behaviour',
            'Adaptive behaviour',
        ],
        correctIndex: 1,
        explanation:
            'The mouse responds based on a remembered stimulus (food at p2) rather than a currently visible one — the screen blocks its view but it still goes to p2 because it stored the sensory representation. This is delayed response behaviour (Type B), which requires memory/sensory representation.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-31',
        courseId: 'modelling-human-behaviour',
        question:
            'A hungry mouse actively searches for food even when no food stimulus is visible. This is an example of:',
        options: [
            'Stimulus-response behaviour',
            'Delayed response behaviour',
            'Motivation-based behaviour',
            'Extended mind behaviour',
        ],
        correctIndex: 2,
        explanation:
            'The mouse acts proactively based on an internal motivation (hunger/desire for food), not in response to an external stimulus. This is motivation-based behaviour (Type C), driven by desires and intentions rather than direct sensory input.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-32',
        courseId: 'modelling-human-behaviour',
        question:
            'In the Aplysia model, under what condition does the motor neuron (MN) become activated?',
        options: [
            'Only when SN1 (tail shock sensor) is active',
            'Only when SN2 (siphon touch sensor) is active with maximum synapse strength',
            'When SN1 is active, OR when SN2 is active AND synapse S2 has reached strength 4',
            'When both SN1 and SN2 are active simultaneously',
        ],
        correctIndex: 2,
        explanation:
            'AMN(t+dt) = 1 if ASN1(t) = 1 (tail shock pathway always works) OR if S2(t) = 4 AND ASN2(t) = 1 (siphon touch pathway only works after full training). The two pathways provide alternative routes to activate the motor neuron.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-33',
        courseId: 'modelling-human-behaviour',
        question:
            'What is the key difference between a "model property" and a "model parameter"?',
        options: [
            'A property is a constant; a parameter changes over time',
            'A property is a hypothesis about expected model behaviour; a parameter is an adjustable input value',
            'A property is defined during simulation; a parameter is defined during conceptualisation',
            'A property describes a single concept; a parameter describes a relation',
        ],
        correctIndex: 1,
        explanation:
            'A model property (characteristic pattern) is a hypothesis or expectation about how the model should behave — used during evaluation to check correctness. A parameter is an adjustable input value (like blood volume or pill size) that can be changed to explore different scenarios.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-34',
        courseId: 'modelling-human-behaviour',
        question:
            'Which statement about stochastic variables in dynamic models is correct?',
        options: [
            'Stochastic variables always produce the same simulation trace',
            'Stochastic variables are determined by probability, so multiple simulation runs may produce different traces',
            'Stochastic variables can only be used in population-based models',
            'Stochastic variables eliminate the need for evaluation',
        ],
        correctIndex: 1,
        explanation:
            'Stochastic variables introduce randomness — their values are determined by probability distributions. This means running the same model multiple times can produce different traces, all reflecting valid scenarios. Multiple runs are needed to draw reliable conclusions.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-35',
        courseId: 'modelling-human-behaviour',
        question:
            'In a numerical (0/1) representation, how do you formalise the AND operation between two concepts A and B?',
        options: [
            'C(t+dt) = MAX(A(t), B(t))',
            'C(t+dt) = A(t) * B(t)',
            'C(t+dt) = A(t) + B(t)',
            'C(t+dt) = MIN(A(t), B(t))',
        ],
        correctIndex: 1,
        explanation:
            'With binary values (0/1): AND = multiplication (A*B), because 1*1=1, 1*0=0, 0*1=0, 0*0=0. OR = MAX(A,B). Note that MIN(A,B) also gives the same result as A*B for binary values, but the standard formulation in this course uses multiplication.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-36',
        courseId: 'modelling-human-behaviour',
        question:
            'Which of the following is an advantage of the individual-based approach over the population-based approach for modelling epidemics?',
        options: [
            'It is computationally more efficient',
            'It can model larger populations more easily',
            'It more faithfully represents reality by tracking each individual separately',
            'It does not require stochastic variables',
        ],
        correctIndex: 2,
        explanation:
            'The individual-based approach models each person separately with their own infection state, location, and contacts. This is more faithful to reality but computationally expensive. Population-based models are more efficient but abstract away individual differences. Individual-based models typically DO require stochastic variables.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-37',
        courseId: 'modelling-human-behaviour',
        question:
            'What does the "environmental complexity thesis" state?',
        options: [
            'Simple environments always produce simple behaviour',
            'The more complex the environment, the more sophisticated the behaviour and mental representations needed',
            'Complex environments can only be modelled using logical representations',
            'Environmental complexity has no impact on the type of behaviour model needed',
        ],
        correctIndex: 1,
        explanation:
            'The environmental complexity thesis states: more complex environment -> more sophisticated behaviour required to cope -> more complex mental representations and capabilities needed. This helps explain why some organisms need only reactive behaviour while others require motivation-based or adaptive behaviour.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-38',
        courseId: 'modelling-human-behaviour',
        question:
            'Which of the following is NOT a valid purpose of using dynamic models?',
        options: [
            'Studying processes that are too expensive to study in reality',
            'Performing "what if" simulations to explore scenarios',
            'Proving mathematically that a real-world process is correct',
            'Building intelligent systems that can mimic human behaviour',
        ],
        correctIndex: 2,
        explanation:
            'Models are simplifications of reality and cannot "prove" that a real-world process is correct. They can help study phenomena that are expensive, time-consuming, hard to measure, or unethical to study directly. They can also be used for "what if" simulations and as a basis for intelligent systems.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-39',
        courseId: 'modelling-human-behaviour',
        question:
            'In the honeybee model, what happens to a bee\'s norm for an aspect when the bee is performing the role that addresses that aspect?',
        options: [
            'The norm increases over time',
            'The norm stays constant',
            'The norm slowly decreases over time',
            'The norm is reset to zero',
        ],
        correctIndex: 2,
        explanation:
            'When a bee performs a role addressing a certain aspect (e.g., foraging for food), the norm for that aspect slowly decreases. This means the bee becomes more "used to" that role and more likely to keep performing it — leading to specialisation over time.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-dm-40',
        courseId: 'modelling-human-behaviour',
        question:
            'What is the difference between "validation" and "evaluation" in the context of dynamic modelling?',
        options: [
            'They are the same thing — both terms refer to checking the model against reality',
            'Validation checks if the model was built correctly; evaluation compares simulation results with expectations',
            'Validation is done during design; evaluation is done during analysis',
            'Validation uses hypotheses; evaluation uses mathematical proofs',
        ],
        correctIndex: 1,
        explanation:
            'Validation checks whether the model correctly represents reality (is the model built right?). Evaluation compares simulation results with expected patterns/hypotheses (does the model behave as expected?). Both are part of the analysis phase, but they serve different purposes.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-dm-41',
        courseId: 'modelling-human-behaviour',
        question:
            'In the semi-formal notation used for behaviour modelling, what is the general structure of a rule?',
        options: [
            'WHILE condition DO action',
            'FOR all TIMEPOINTS: IF condition THEN effect (at next time step)',
            'REPEAT action UNTIL condition',
            'IF condition THEN action ELSE alternative',
        ],
        correctIndex: 1,
        explanation:
            'The semi-formal notation used in this course follows the pattern: "FOR all TIMEPOINTS: IF <condition> THEN <effect> (at next time step)". This captures the dynamic nature of the model — conditions at the current time point determine effects at the next time point.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-42',
        courseId: 'modelling-human-behaviour',
        question:
            'Which of the following correctly describes "formalization of concepts" in the E. coli model?',
        options: [
            'All concepts are represented as real-valued variables between 0 and 100',
            'Most concepts are binary (0/1) except mass which is real-valued',
            'All concepts are represented as Boolean true/false propositions',
            'Concepts use a mix of integer values from 0 to 10',
        ],
        correctIndex: 1,
        explanation:
            'In the E. coli model, most concepts (external glucose, lactose indicator, enzyme presence, etc.) are binary — either present (1) or absent (0). The exception is mass (M), which is a real-valued variable that grows continuously based on food intake.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-43',
        courseId: 'modelling-human-behaviour',
        question:
            'What is the role of CRPcAMP in the E. coli food intake model?',
        options: [
            'It directly imports glucose into the cell',
            'It acts as an indicator that glucose is absent, enabling lactose import',
            'It breaks down lactose inside the cell',
            'It measures the total mass of the bacterium',
        ],
        correctIndex: 1,
        explanation:
            'CRPcAMP is a chemical substance that is only present inside the cell when external glucose is absent (below 0.1 mmol/l). It serves as an "absence of glucose" indicator. The lactose import enzyme can only be produced when CRPcAMP is present — this ensures glucose always takes priority over lactose.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-44',
        courseId: 'modelling-human-behaviour',
        question:
            'In the Aplysia model, synapse strength S1 (between SN1 and MN) is:',
        options: [
            'Initially 0 and increases through training',
            'Constant at strength 4 — it never changes',
            'Variable, depending on how often the tail is shocked',
            'Initially 4 and decreases through habituation',
        ],
        correctIndex: 1,
        explanation:
            'Synapse S1 (tail shock to motor neuron pathway) has a constant strength of 4. This means a tail shock ALWAYS causes contraction — this pathway does not need learning. Only S2 (siphon touch pathway) changes through training, starting at 0 and increasing to a maximum of 4.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-45',
        courseId: 'modelling-human-behaviour',
        question:
            'Which of the following describes "negative growth" in a dynamic model?',
        options: [
            'The amount increases at a decreasing rate',
            'The loss is larger than the gain, so the amount decreases over time',
            'The gain factor becomes negative, which is impossible',
            'The amount oscillates between positive and negative values',
        ],
        correctIndex: 1,
        explanation:
            'Negative growth occurs when the loss exceeds the gain in each time step, causing the amount to decrease. This can happen in linear, exponential, or other patterns. It does not mean the gain factor itself is negative — rather, the net change (gain - loss) is negative.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-46',
        courseId: 'modelling-human-behaviour',
        question:
            'An intelligent agent uses a domain model to predict what will happen if it recommends a stress-reduction therapy to a person. This is an example of using the domain model as:',
        options: [
            'An analysis model',
            'A support model',
            'An adaptation model',
            'A validation model',
        ],
        correctIndex: 1,
        explanation:
            'A support model uses a domain model to determine the effects of proposed actions. Here, the agent proposes a therapy (action) and uses the domain model to predict its effects on the person\'s stress level. This is forward reasoning in a support model: proposed action -> predicted effects.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-47',
        courseId: 'modelling-human-behaviour',
        question:
            'An intelligent agent observes that a person has high alcohol consumption and cardiovascular disease, and concludes that the person is likely lonely. This is an example of:',
        options: [
            'Forward reasoning in a support model',
            'Backward reasoning in an analysis model',
            'Forward reasoning in an analysis model',
            'Backward reasoning in a support model',
        ],
        correctIndex: 1,
        explanation:
            'The agent starts from observations (high alcohol, cardiovascular disease) and reasons backward through the domain model to reach an assessment (loneliness). This is backward reasoning in an analysis model — going from observable effects back to their underlying cause.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-dm-48',
        courseId: 'modelling-human-behaviour',
        question:
            'Which statement about the "trace" of a simulation is correct?',
        options: [
            'A trace is a single value showing the final state of the model',
            'A trace is a sequence of states of the model at subsequent time points',
            'A trace is a graphical representation that must always be a line chart',
            'A trace can only be generated from numerical models, not logical ones',
        ],
        correctIndex: 1,
        explanation:
            'A simulation trace (also called a simulation run) is a sequence of states of the model at subsequent time points. It shows how all concept values evolve over time. Traces can be visualised as graphs or as truth-value tables (state traces), and can be generated from both numerical and logical models.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-dm-49',
        courseId: 'modelling-human-behaviour',
        question:
            'In the context of behaviour modelling, what distinguishes the "external (observer) viewpoint" from the "internal (cognitive) viewpoint"?',
        options: [
            'The external view uses numerical models; the internal view uses logical models',
            'The external view describes input/output behaviour; the internal view describes cognitive states that generate the behaviour',
            'The external view is more accurate; the internal view is always an approximation',
            'The external view is used for animals; the internal view is used for humans only',
        ],
        correctIndex: 1,
        explanation:
            'The external (observer) viewpoint describes behaviour in terms of observable inputs (stimuli) and outputs (actions) without claiming anything about internal functioning. The internal (cognitive) viewpoint models the actual cognitive states (beliefs, desires, intentions, sensory representations) that the subject uses to generate its behaviour.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-dm-50',
        courseId: 'modelling-human-behaviour',
        question:
            'Which statement about the relationship between an intelligent agent and a domain model is INCORRECT?',
        options: [
            'The agent can use a domain model to predict what the effect of its actions will be',
            'Both humans and intelligent agents use a model inside to reason about their actions',
            'The intelligent agent always applies forward reasoning to interpret observations',
            'The agent can use a domain model to assess the current state of the human it is supporting',
        ],
        correctIndex: 2,
        explanation:
            'An intelligent agent does NOT always use forward reasoning. It can use backward reasoning (from desired conclusion to needed observations) in analysis models, and forward reasoning (from actions to effects) in support models. The choice depends on the task and model structure. Agents can and do use both directions.',
        difficulty: 'hard',
    },

    // ========== HCI — Human-Computer Interaction for AI ==========
    {
        id: 'quiz-hci-1',
        courseId: 'human-computer-interaction',
        question: 'When did the mouse first become available outside the research lab as part of a commercial product?',
        options: [
            '1968, with Engelbart\'s NLS system',
            '1973, with the Xerox Alto',
            '1981, with the Xerox Star',
            '1984, with the Apple Macintosh',
        ],
        correctIndex: 2,
        explanation:
            'The Xerox Star (1981) was the first commercially available computer with a GUI and a mouse. Engelbart demonstrated the mouse in 1968 but that was a research demo, and the Alto (1973) was never commercially sold.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-2',
        courseId: 'human-computer-interaction',
        question: 'What did Vannevar Bush propose in his 1945 article "As We May Think"?',
        options: [
            'The first programming language',
            'The memex — a device for storing and linking documents',
            'The graphical user interface',
            'The first computer mouse',
        ],
        correctIndex: 1,
        explanation:
            'Vannevar Bush proposed the memex (memory extender) in 1945 — a conceptual device that would allow users to store, link, and retrieve documents. It foreshadowed hypertext and the World Wide Web.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-3',
        courseId: 'human-computer-interaction',
        question: 'According to Miller\'s Law, what is the capacity of short-term (working) memory?',
        options: [
            '3 +/- 1 items',
            '5 +/- 1 items',
            '7 +/- 2 items',
            '12 +/- 3 items',
        ],
        correctIndex: 2,
        explanation:
            'Miller\'s Law (1956) states that short-term memory can hold approximately 7 +/- 2 items (i.e., between 5 and 9 chunks of information). This capacity can be increased through chunking — grouping items into meaningful units.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-4',
        courseId: 'human-computer-interaction',
        question: 'In HCI, what is the difference between "slips" and "mistakes"?',
        options: [
            'Slips are caused by the system; mistakes are caused by the user',
            'Slips involve the correct intention but wrong action; mistakes involve the wrong intention',
            'Slips occur with novices; mistakes occur with experts',
            'Slips are recoverable; mistakes are not',
        ],
        correctIndex: 1,
        explanation:
            'A slip occurs when the user has the correct intention but performs the wrong action (e.g., pressing the wrong key). A mistake occurs when the user forms the wrong intention (e.g., choosing an incorrect strategy). Both can occur with any user.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-5',
        courseId: 'human-computer-interaction',
        question: 'What does WIMP stand for in the context of graphical user interfaces?',
        options: [
            'Windows, Icons, Menus, Pointer',
            'Widgets, Input, Mapping, Protocols',
            'Windows, Interaction, Modelling, Processing',
            'Web, Interface, Markup, Presentation',
        ],
        correctIndex: 0,
        explanation:
            'WIMP stands for Windows, Icons, Menus, Pointer. It describes the standard GUI paradigm that emerged in the 1980s with systems like the Xerox Star and Apple Macintosh.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-6',
        courseId: 'human-computer-interaction',
        question: 'What is the typical simple reaction time for a human?',
        options: [
            '~100 ms',
            '~276 ms',
            '~565 ms',
            '~1000 ms',
        ],
        correctIndex: 1,
        explanation:
            'Simple reaction time (one stimulus, one response) is approximately 276 ms. This is faster than physical matching (~482 ms) and class matching (~565 ms), which require additional cognitive processing.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-7',
        courseId: 'human-computer-interaction',
        question: 'What is the formula for visual search reaction time?',
        options: [
            'RT = 276 + 20N ms',
            'RT = 498 + 41N ms',
            'RT = 200 + 150 log2(N + 1) ms',
            'RT = 1000 / N ms',
        ],
        correctIndex: 1,
        explanation:
            'Visual search reaction time follows RT = 498 + 41N ms, where N is the number of items in the display. This linear relationship means each additional item adds approximately 41 ms to the search time.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-8',
        courseId: 'human-computer-interaction',
        question: 'What is the difference between space multiplexing and time multiplexing?',
        options: [
            'Space multiplexing uses one control for multiple functions; time multiplexing uses dedicated controls',
            'Space multiplexing gives each function its own control; time multiplexing uses one control for multiple functions at different times',
            'Space multiplexing is for touch input; time multiplexing is for keyboard input',
            'Space multiplexing operates synchronously; time multiplexing operates asynchronously',
        ],
        correctIndex: 1,
        explanation:
            'Space multiplexing assigns a dedicated physical control to each function (e.g., a cockpit with many switches). Time multiplexing uses one control for multiple functions at different times (e.g., a smartphone touchscreen that shows different virtual buttons).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-9',
        courseId: 'human-computer-interaction',
        question: 'What is Control-Display (CD) gain?',
        options: [
            'The speed at which a display refreshes',
            'The ratio of display movement to control movement',
            'The resolution of the input device',
            'The latency between input and display response',
        ],
        correctIndex: 1,
        explanation:
            'CD gain is the ratio of display movement to control movement. High CD gain means a small control movement produces a large display movement (fast but imprecise). Low CD gain means a large control movement produces a small display change (slow but precise).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-10',
        courseId: 'human-computer-interaction',
        question: 'What type of sensing does the IBM/Lenovo ThinkPad TrackPoint use?',
        options: [
            'Position sensing (absolute)',
            'Displacement sensing (relative)',
            'Force sensing (isometric)',
            'Capacitive sensing',
        ],
        correctIndex: 2,
        explanation:
            'The TrackPoint is an isometric (force-sensing) device. It does not physically move; instead, it senses the direction and magnitude of force applied. The cursor velocity is proportional to the force, making it a first-order (rate) control device.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-11',
        courseId: 'human-computer-interaction',
        question: 'What is zero-order (position) control?',
        options: [
            'The input controls the acceleration of the output',
            'The input controls the velocity of the output',
            'The input position directly corresponds to the output position',
            'The input has no effect on the output position',
        ],
        correctIndex: 2,
        explanation:
            'In zero-order (position) control, the position of the input device directly maps to the position of the output (e.g., a touchscreen where your finger position is the cursor position). In first-order (velocity) control, the input controls the rate of movement instead.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-12',
        courseId: 'human-computer-interaction',
        question: 'What is Warrick\'s principle?',
        options: [
            'Users prefer larger targets on touchscreens',
            'The display should move in the same direction as the side of the control nearest to the display',
            'Reaction time increases logarithmically with the number of choices',
            'Error rate decreases with practice following a power function',
        ],
        correctIndex: 1,
        explanation:
            'Warrick\'s principle states that the display should move in the same direction as the side of the control closest to the display. This is a specific population stereotype that helps predict user expectations for control-display mappings.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-13',
        courseId: 'human-computer-interaction',
        question: 'What type of research method establishes cause and effect?',
        options: [
            'Observational',
            'Correlational',
            'Experimental',
            'Survey-based',
        ],
        correctIndex: 2,
        explanation:
            'Only experimental research establishes cause and effect, because the researcher manipulates independent variables while controlling other factors. Observational and correlational methods can identify associations but cannot prove causation.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-14',
        courseId: 'human-computer-interaction',
        question: 'A temperature rating scale where users mark "cold", "warm", or "hot" is an example of which measurement scale?',
        options: [
            'Nominal',
            'Ordinal',
            'Interval',
            'Ratio',
        ],
        correctIndex: 1,
        explanation:
            'A rating of cold/warm/hot has a natural order (cold < warm < hot) but the intervals between categories are not necessarily equal. This makes it an ordinal scale. It would only be interval if the differences between categories were known to be equal.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-15',
        courseId: 'human-computer-interaction',
        question: 'In an experiment comparing three input devices, the input device type is:',
        options: [
            'A dependent variable',
            'An independent variable',
            'A control variable',
            'A confounding variable',
        ],
        correctIndex: 1,
        explanation:
            'The input device type is the independent variable (IV) — it is the factor manipulated by the researcher. The dependent variable (DV) would be the measured outcome (e.g., task completion time). A control variable would be something held constant (e.g., screen size).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-16',
        courseId: 'human-computer-interaction',
        question: 'What is "informed consent" in the context of HCI research?',
        options: [
            'Getting permission from the university to use their equipment',
            'Informing participants about the purpose, procedures, risks, and their right to withdraw',
            'Asking participants to sign a non-disclosure agreement',
            'Publishing the research results in a peer-reviewed journal',
        ],
        correctIndex: 1,
        explanation:
            'Informed consent requires that participants are told the purpose, procedures, and risks of the study, and that they understand they can withdraw at any time without penalty. It is a fundamental ethical requirement for research with human participants.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-17',
        courseId: 'human-computer-interaction',
        question: 'What is the main advantage of a within-subjects experimental design?',
        options: [
            'No risk of order effects',
            'Individual differences are controlled because each participant serves as their own baseline',
            'It requires more participants for statistical power',
            'It eliminates the need for counterbalancing',
        ],
        correctIndex: 1,
        explanation:
            'In a within-subjects design, each participant experiences all conditions, so individual differences (age, skill, etc.) are controlled. The main disadvantage is order effects (learning, fatigue), which must be mitigated through counterbalancing.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-18',
        courseId: 'human-computer-interaction',
        question: 'What is the purpose of a Latin square in experimental design?',
        options: [
            'To randomly assign participants to groups',
            'To ensure each condition appears in each ordinal position exactly once across participants',
            'To calculate the sample size needed for an experiment',
            'To balance the number of male and female participants',
        ],
        correctIndex: 1,
        explanation:
            'A Latin square is a counterbalancing technique that ensures each condition appears in each position (first, second, third, etc.) exactly once. A balanced Latin square goes further, ensuring each condition also appears after every other condition exactly once.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-19',
        courseId: 'human-computer-interaction',
        question: 'What is the difference between internal validity and external validity?',
        options: [
            'Internal validity = reliability; external validity = accuracy',
            'Internal validity = results are caused by the IV; external validity = results generalize to other settings',
            'Internal validity = consistent results; external validity = peer-reviewed results',
            'Internal validity = lab setting; external validity = field setting',
        ],
        correctIndex: 1,
        explanation:
            'Internal validity is the degree to which the observed effect is truly caused by the independent variable (not confounds). External validity is the degree to which results can be generalized to other populations, settings, and times. There is often a trade-off between the two.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-20',
        courseId: 'human-computer-interaction',
        question: 'In a study where Android users and iPhone users rate their satisfaction on a 1-5 Likert scale, which statistical test is most appropriate?',
        options: [
            'Independent t-test',
            'Paired t-test',
            'Mann-Whitney U test',
            'Wilcoxon Signed-Rank test',
        ],
        correctIndex: 2,
        explanation:
            'This is a between-subjects design (two separate groups: Android vs. iPhone) with 2 conditions and ordinal data (Likert scale). Since Likert data is ordinal (non-parametric), the appropriate test is the Mann-Whitney U test (the non-parametric equivalent of the independent t-test).',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-21',
        courseId: 'human-computer-interaction',
        question: 'What does the null hypothesis (H0) typically state?',
        options: [
            'There is a significant difference between conditions',
            'The independent variable has a large effect',
            'There is no difference between conditions',
            'The experiment was poorly designed',
        ],
        correctIndex: 2,
        explanation:
            'The null hypothesis (H0) states that there is no effect or no difference between conditions. When p < 0.05, we reject H0 in favor of the alternative hypothesis (H1). When p > 0.05, we fail to reject H0 (but we do NOT "accept" H0).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-22',
        courseId: 'human-computer-interaction',
        question: 'When p > 0.05, the correct interpretation is:',
        options: [
            'We accept the null hypothesis',
            'The independent variable has no effect',
            'We fail to reject the null hypothesis — there is insufficient evidence for H1',
            'The experiment must be repeated',
        ],
        correctIndex: 2,
        explanation:
            'When p > 0.05, we "fail to reject H0" — this means there is insufficient evidence to support the alternative hypothesis. It does NOT mean we accept H0, because absence of evidence is not evidence of absence. The effect might exist but our study lacked the power to detect it.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-23',
        courseId: 'human-computer-interaction',
        question: 'What is a Type I error?',
        options: [
            'Failing to detect a real effect (false negative)',
            'Finding an effect that does not exist (false positive)',
            'Using the wrong statistical test',
            'Having too few participants in the study',
        ],
        correctIndex: 1,
        explanation:
            'A Type I error (false positive) occurs when we reject H0 even though it is true — finding a non-existing effect. Its probability equals alpha (typically 0.05). A Type II error (false negative) is failing to detect a real effect, with probability beta.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-24',
        courseId: 'human-computer-interaction',
        question: 'What is statistical power?',
        options: [
            'The probability of making a Type I error',
            'The probability of correctly rejecting a false null hypothesis (1 - beta)',
            'The number of participants in a study',
            'The effect size of the independent variable',
        ],
        correctIndex: 1,
        explanation:
            'Statistical power = 1 - beta, where beta is the probability of a Type II error. Higher power means a greater chance of detecting a real effect. Power can be increased by using larger sample sizes, larger effect sizes, or a higher alpha level.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-25',
        courseId: 'human-computer-interaction',
        question: 'What does the F-statistic in ANOVA represent?',
        options: [
            'The ratio of within-group variance to between-group variance',
            'The ratio of between-group variance to within-group variance',
            'The total variance in the dataset',
            'The probability of a Type II error',
        ],
        correctIndex: 1,
        explanation:
            'The F-statistic = variance between groups / variance within groups. A large F means the differences between group means are large relative to random variation within groups, suggesting the independent variable has an effect.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-26',
        courseId: 'human-computer-interaction',
        question: 'Which non-parametric test is used for a within-subjects design with 3 or more conditions?',
        options: [
            'Kruskal-Wallis test',
            'Mann-Whitney U test',
            'Friedman test',
            'Chi-Square test',
        ],
        correctIndex: 2,
        explanation:
            'The Friedman test is the non-parametric alternative to repeated-measures ANOVA (within-subjects, 3+ conditions). Kruskal-Wallis is for between-subjects with 3+ groups. Mann-Whitney U is for between-subjects with 2 groups. Chi-Square is for frequency data.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-27',
        courseId: 'human-computer-interaction',
        question: 'What are the degrees of freedom for a chi-square test on a 3x4 contingency table?',
        options: [
            '12',
            '6',
            '7',
            '11',
        ],
        correctIndex: 1,
        explanation:
            'For a chi-square test on a contingency table, df = (r - 1)(c - 1) = (3 - 1)(4 - 1) = 2 x 3 = 6. The degrees of freedom depend on the number of rows (r) and columns (c) in the table.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-28',
        courseId: 'human-computer-interaction',
        question: 'What is an interaction effect in a two-way ANOVA?',
        options: [
            'When both independent variables have a significant main effect',
            'When the effect of one independent variable depends on the level of another',
            'When participants interact with the experimental apparatus',
            'When two dependent variables are correlated',
        ],
        correctIndex: 1,
        explanation:
            'An interaction effect occurs when the effect of one independent variable differs depending on the level of another IV. For example, device type might affect speed differently for novice vs. expert users. Interaction effects are distinct from main effects.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-29',
        courseId: 'human-computer-interaction',
        question: 'According to Cohen\'s d, which of the following represents a large effect size?',
        options: [
            'd >= 0.10',
            'd >= 0.20',
            'd >= 0.50',
            'd >= 0.80',
        ],
        correctIndex: 3,
        explanation:
            'Cohen\'s d effect size benchmarks: d >= 0.20 is small, d >= 0.50 is medium, d >= 0.80 is large. Effect size tells you how practically important a finding is, beyond just statistical significance.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-30',
        courseId: 'human-computer-interaction',
        question: 'What is the Shannon formulation of Fitts\' Law (Index of Difficulty)?',
        options: [
            'ID = log2(2A / W)',
            'ID = log2(A / W + 1)',
            'ID = A / W',
            'ID = log2(A * W)',
        ],
        correctIndex: 1,
        explanation:
            'The Shannon formulation (MacKenzie, 1992) is ID = log2(A/W + 1), where A = amplitude (distance) and W = width of the target. This is preferred over Fitts\' original formula ID = log2(2A/W) because it better matches Shannon\'s information theorem and always gives non-negative values.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-31',
        courseId: 'human-computer-interaction',
        question: 'In Fitts\' Law, what does "throughput" (TP) measure?',
        options: [
            'The number of targets hit per second',
            'The speed-accuracy trade-off as a single measure (IDe / MT)',
            'The total time to complete all trials',
            'The error rate for a given target width',
        ],
        correctIndex: 1,
        explanation:
            'Throughput (TP = IDe / MT) combines speed and accuracy into a single measure, expressed in bits per second (bps). It uses the effective index of difficulty (IDe), which accounts for actual endpoint variability, divided by movement time. Higher throughput = better performance.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-32',
        courseId: 'human-computer-interaction',
        question: 'What is the effective target width (We) in Fitts\' Law?',
        options: [
            'The physical width of the target',
            'We = 4.133 x SDx, based on actual endpoint variability',
            'The target width multiplied by the number of errors',
            'The distance from the target center to its edge',
        ],
        correctIndex: 1,
        explanation:
            'The effective target width We = 4.133 x SDx, where SDx is the standard deviation of selection coordinates along the axis of movement. This adjusts the nominal target width to reflect actual user performance, capturing the speed-accuracy trade-off.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-33',
        courseId: 'human-computer-interaction',
        question: 'According to the Hick-Hyman Law, what happens to reaction time as the number of equally probable choices increases?',
        options: [
            'Reaction time increases linearly with the number of choices',
            'Reaction time increases logarithmically with the number of choices',
            'Reaction time decreases as more choices are provided',
            'Reaction time remains constant regardless of the number of choices',
        ],
        correctIndex: 1,
        explanation:
            'The Hick-Hyman Law states that RT = a + b * log2(n + 1), where n = number of choices. Reaction time increases logarithmically, not linearly, meaning each doubling of choices adds a constant amount of time (~150 ms per bit).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-34',
        courseId: 'human-computer-interaction',
        question: 'In the Hick-Hyman Law RT = a + b * log2(n + 1), what are the approximate values of a and b?',
        options: [
            'a = 50 ms, b = 50 ms/bit',
            'a = 200 ms, b = 150 ms/bit',
            'a = 500 ms, b = 300 ms/bit',
            'a = 1000 ms, b = 500 ms/bit',
        ],
        correctIndex: 1,
        explanation:
            'In the Hick-Hyman Law, a (base reaction time) is approximately 200 ms, and b (time per bit of information) is approximately 150 ms per bit. The "+1" in log2(n+1) accounts for temporal uncertainty (the option of not responding).',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-35',
        courseId: 'human-computer-interaction',
        question: 'In the KLM (Keystroke-Level Model), what is the average time for the Mental operator (M)?',
        options: [
            '0.40 seconds',
            '0.80 seconds',
            '1.10 seconds',
            '1.35 seconds',
        ],
        correctIndex: 3,
        explanation:
            'The Mental operator (M) in KLM represents the time for mental preparation before an action and is estimated at 1.35 seconds. Other operator times: K (keystroke) = 0.08-1.20s, P (pointing) = 1.10s, H (homing) = 0.40s, B (button press) = 0.10s.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-36',
        courseId: 'human-computer-interaction',
        question: 'What is the KLM Homing operator (H) and how long does it take?',
        options: [
            'Moving the cursor to home position; 0.10s',
            'Moving the hand from keyboard to mouse (or vice versa); 0.40s',
            'Pressing the Home key on the keyboard; 0.08s',
            'Returning to the start screen; 1.10s',
        ],
        correctIndex: 1,
        explanation:
            'The Homing operator (H) in KLM represents the time to move the hand between the keyboard and the mouse (or any other device). It takes approximately 0.40 seconds.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-37',
        courseId: 'human-computer-interaction',
        question: 'Using the KLM, calculate the time to delete a desktop icon: (1) mentally prepare, (2) point to icon, (3) click to select, (4) point to delete, (5) click delete, (6) mentally confirm, (7) point to OK, (8) click OK. Use M=1.35s, P=1.10s, B=0.10s.',
        options: [
            '4.60 seconds',
            '5.30 seconds',
            '6.00 seconds',
            '6.30 seconds',
        ],
        correctIndex: 3,
        explanation:
            'T = 2M + 3P + 3B = 2(1.35) + 3(1.10) + 3(0.10) = 2.70 + 3.30 + 0.30 = 6.30 seconds. This is a standard KLM calculation: 2 mental operators, 3 pointing operations, and 3 button clicks.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-38',
        courseId: 'human-computer-interaction',
        question: 'What does Fitts\' Law predict?',
        options: [
            'The error rate for a given interface design',
            'The time to acquire a target based on its distance and size',
            'The number of keystrokes needed to complete a task',
            'The cognitive load of a given task',
        ],
        correctIndex: 1,
        explanation:
            'Fitts\' Law predicts movement time (MT) to acquire a target based on the distance (amplitude A) and size (width W) of the target. MT = a + b * log2(A/W + 1). Larger, closer targets are faster to acquire.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-39',
        courseId: 'human-computer-interaction',
        question: 'In Buxton\'s three-state model, a standard mouse is classified as which type of device?',
        options: [
            'A 1-state device (State 1 only)',
            'A 2-state device (State 1 and State 2)',
            'A 3-state device (State 0, State 1, and State 2)',
            'A 2-state device (State 0 and State 2)',
        ],
        correctIndex: 1,
        explanation:
            'A mouse is a 2-state device: State 1 (tracking — cursor follows mouse movement) and State 2 (dragging — button held down while moving). A mouse cannot detect State 0 (out of range) because it is always in contact with the surface.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-40',
        courseId: 'human-computer-interaction',
        question: 'In Buxton\'s three-state model, which device can distinguish all three states (out of range, tracking, and dragging)?',
        options: [
            'A standard mouse',
            'A touchscreen',
            'A stylus/pen tablet',
            'An isometric joystick',
        ],
        correctIndex: 2,
        explanation:
            'A stylus/pen tablet is a 3-state device: State 0 (pen above tablet, out of tracking range), State 1 (pen near surface, tracking without contact), State 2 (pen pressed on surface, dragging/selecting). A mouse lacks State 0; a touchscreen lacks State 1.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-41',
        courseId: 'human-computer-interaction',
        question: 'According to Guiard\'s model of bimanual control, what role does the non-preferred hand play?',
        options: [
            'Fine, precise movements following the preferred hand',
            'Leading, coarse movements that set the frame of reference',
            'No role — it remains idle during interaction',
            'Providing force feedback to the user',
        ],
        correctIndex: 1,
        explanation:
            'In Guiard\'s bimanual model, the non-preferred hand (e.g., left for right-handers) leads the action and provides coarse positioning that sets the reference frame. The preferred hand follows with fine, precise movements within that frame. Example: holding paper (left) while writing (right).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-42',
        courseId: 'human-computer-interaction',
        question: 'In the Key-Action Model (KAM), which category do the Shift, Ctrl, and Alt keys belong to?',
        options: [
            'Symbol keys',
            'Executive keys',
            'Modifier keys',
            'Function keys',
        ],
        correctIndex: 2,
        explanation:
            'The KAM classifies keyboard keys into three categories: Symbol keys (produce visible characters), Executive keys (trigger actions like Enter, Backspace, Delete), and Modifier keys (change the meaning of other keys, like Shift, Ctrl, Alt).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-43',
        courseId: 'human-computer-interaction',
        question: 'What does KSPC (Keystrokes Per Character) measure?',
        options: [
            'The total number of keys on a keyboard',
            'The efficiency of a text entry method',
            'The speed of typing in words per minute',
            'The error rate per keystroke',
        ],
        correctIndex: 1,
        explanation:
            'KSPC measures the average number of keystrokes needed to produce one character. An optimal KSPC is 1.0 (one keystroke per character). Higher KSPC indicates less efficient text entry, such as multi-tap on a phone keypad where KSPC > 1.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-44',
        courseId: 'human-computer-interaction',
        question: 'What does the Power Law of Learning predict?',
        options: [
            'Performance degrades exponentially over time',
            'Learning is linear — equal improvement with each practice trial',
            'Improvement is rapid at first, then gradually slows following Tn = T1 * n^a',
            'Performance plateaus immediately after the first trial',
        ],
        correctIndex: 2,
        explanation:
            'The Power Law of Learning states that performance improves with practice following a power function: Tn = T1 * n^a. This means improvement is fastest early on and gradually decelerates, though it never completely stops.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-45',
        courseId: 'human-computer-interaction',
        question: 'What is the purpose of the abstract in an HCI research paper?',
        options: [
            'To explain why an effect was observed',
            'To describe what was done and what was found',
            'To list all references used in the paper',
            'To propose future research directions',
        ],
        correctIndex: 1,
        explanation:
            'The abstract (~150 words) should describe what was done and what was found. It should NOT explain why an effect was observed — that analysis belongs in the Discussion section. The abstract gives readers a quick summary to decide if the paper is relevant.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-46',
        courseId: 'human-computer-interaction',
        question: 'Which of the following is NOT a standard subsection of the Method section in an HCI paper?',
        options: [
            'Participants',
            'Apparatus',
            'Hypotheses',
            'Procedure',
        ],
        correctIndex: 2,
        explanation:
            'The standard Method subsections are: Participants, Apparatus, Procedure, and Design. Hypotheses are typically stated in the Introduction, not in the Method section. The Method describes HOW the study was conducted in enough detail to replicate it.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-47',
        courseId: 'human-computer-interaction',
        question: 'What is ecological validity?',
        options: [
            'Whether the study is about ecological/environmental topics',
            'Whether the experimental setting resembles real-world conditions',
            'Whether the study can be replicated by other researchers',
            'Whether the statistical tests used are appropriate',
        ],
        correctIndex: 1,
        explanation:
            'Ecological validity is the degree to which an experimental setting resembles the real-world conditions the study aims to generalize to. High ecological validity means the lab setup closely mirrors actual usage scenarios, making results more applicable to real life.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-48',
        courseId: 'human-computer-interaction',
        question: 'A touchscreen is best described as which type of input device in Buxton\'s three-state model?',
        options: [
            'A 3-state device (State 0, 1, and 2)',
            'A 2-state device (State 0 and State 2)',
            'A 2-state device (State 1 and State 2)',
            'A 1-state device (State 2 only)',
        ],
        correctIndex: 1,
        explanation:
            'A touchscreen is a 2-state device with State 0 (not touching — out of range) and State 2 (touching/dragging). It skips State 1 (tracking without contact) because the finger cannot hover and track without touching the screen.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-49',
        courseId: 'human-computer-interaction',
        question: 'Which effect size measure is most appropriate for reporting ANOVA results?',
        options: [
            'Cohen\'s d',
            'Pearson\'s r',
            'Omega squared (omega^2)',
            'Odds ratio (OR)',
        ],
        correctIndex: 2,
        explanation:
            'Omega squared (omega^2) is the appropriate effect size measure for ANOVA. Cohen\'s d is used for independent t-tests, Pearson\'s r for correlation analysis, R^2 for multiple regression, and odds ratio for logistic regression.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-50',
        courseId: 'human-computer-interaction',
        question: 'In a Wizard of Oz setup, what happens?',
        options: [
            'The system is fully autonomous and tested without human intervention',
            'A human operator secretly controls the system while the participant believes it is autonomous',
            'Participants are asked to imagine interacting with a non-existent system',
            'The researcher observes participants from behind a one-way mirror',
        ],
        correctIndex: 1,
        explanation:
            'In a Wizard of Oz setup, a human operator (the "wizard") secretly controls the system\'s responses while the participant believes they are interacting with a fully functional system. This allows researchers to test interaction designs before building the actual system.',
        difficulty: 'medium',
    },
];

