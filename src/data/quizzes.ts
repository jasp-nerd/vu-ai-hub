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
    // --- Prolog basics (5 Qs) ---
    {
        id: 'quiz-mas-1',
        courseId: 'multi-agent-systems',
        question: 'What does the Prolog query `?- X = 4+3.` return?',
        options: ['X = 7', 'X = 4+3', 'false', 'error'],
        correctIndex: 1,
        explanation:
            'The `=` operator performs unification, not arithmetic evaluation. It unifies X with the compound term +(4,3). To get X = 7, you would use `X is 4+3`, which evaluates the right-hand side arithmetically.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-2',
        courseId: 'multi-agent-systems',
        question: 'Which of the following is NOT a valid Prolog term type?',
        options: ['Atom', 'Variable', 'Compound term', 'Class'],
        correctIndex: 3,
        explanation:
            'Prolog terms are: atoms (lowercase constants), numbers, variables (uppercase or underscore), and compound terms (functor with arguments). "Class" is not a Prolog term type; it belongs to object-oriented languages.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-3',
        courseId: 'multi-agent-systems',
        question: 'Given the facts `parent(tom, bob). parent(bob, ann).` and the rule `grandparent(X, Z) :- parent(X, Y), parent(Y, Z).`, what does `?- grandparent(tom, ann).` return?',
        options: ['false', 'true', 'ann', 'error'],
        correctIndex: 1,
        explanation:
            'Prolog matches grandparent(tom, ann) with the rule head, setting X=tom, Z=ann. It then tries parent(tom, Y), finding Y=bob. Then parent(bob, ann) succeeds. So the query returns true.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-4',
        courseId: 'multi-agent-systems',
        question: 'What does `?- f(a, g(X)) = f(a, g(b)).` return in Prolog?',
        options: ['false', 'X = b', 'X = g(b)', 'error'],
        correctIndex: 1,
        explanation:
            'Unification of compound terms requires the same functor and arity, then unifies corresponding arguments. f/2 matches f/2, a=a succeeds, g(X)=g(b) requires X=b. So the result is X = b.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-5',
        courseId: 'multi-agent-systems',
        question: 'What is the result of `?- A is 5+5.` in Prolog?',
        options: ['A = 5+5', 'A = 10', 'false', 'error'],
        correctIndex: 1,
        explanation:
            'The `is/2` operator evaluates the arithmetic expression on the right-hand side and unifies the result with the left. 5+5 evaluates to 10, so A = 10. This is different from `=`, which would give A = 5+5 (the unevaluated term).',
        difficulty: 'easy',
    },
    // --- Search trees (5 Qs) ---
    {
        id: 'quiz-mas-6',
        courseId: 'multi-agent-systems',
        question: 'In Prolog, what search strategy is used to explore clauses?',
        options: [
            'Breadth-first, left-to-right',
            'Depth-first, top-to-bottom and left-to-right',
            'Random selection of clauses',
            'Best-first with heuristic evaluation',
        ],
        correctIndex: 1,
        explanation:
            'Prolog uses backward chaining with depth-first search. Clauses are tried in the order they appear in the program (top-to-bottom), and subgoals within a rule body are resolved left-to-right.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-7',
        courseId: 'multi-agent-systems',
        question: 'Given:\n```prolog\na(X) :- x(X), y(X), z(X).\nx(n). x(p).\ny(n). y(p).\nz(p).\n```\nWhat does `?- a(Y).` return?',
        options: ['Y = n', 'Y = p', 'false', 'Y = n ; Y = p'],
        correctIndex: 1,
        explanation:
            'Prolog tries x(Y) first: Y=n. Then y(n) succeeds, but z(n) fails (no z(n) fact). Prolog backtracks to try x(Y) with Y=p. Then y(p) succeeds and z(p) succeeds. So Y = p is the first (and only) answer.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-8',
        courseId: 'multi-agent-systems',
        question: 'In a Prolog search tree, which are the three possible outcomes for a branch?',
        options: [
            'Success, failure, timeout',
            'Success, failure, infinite loop',
            'True, false, undefined',
            'Match, no match, partial match',
        ],
        correctIndex: 1,
        explanation:
            'Every branch in a Prolog search tree ends in one of three ways: success (all goals satisfied), failure (a goal cannot be satisfied, triggering backtracking), or infinite loop (the branch never terminates, typically due to left-recursion or cycles).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-9',
        courseId: 'multi-agent-systems',
        question: 'What does Prolog\'s "incompleteness" mean?',
        options: [
            'Prolog cannot represent all types of knowledge',
            'Prolog\'s depth-first search may miss solutions trapped behind infinite branches',
            'Prolog cannot process lists of arbitrary length',
            'Prolog cannot handle more than two subgoals per rule',
        ],
        correctIndex: 1,
        explanation:
            'Prolog\'s proof search is sound but incomplete: depth-first search can get trapped in an infinite branch, preventing it from ever reaching valid solutions on other branches. This is a limitation of the search strategy, not of the logic itself.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mas-10',
        courseId: 'multi-agent-systems',
        question: 'If the recursive rule `r(X,Y) :- f(X,Z), r(Z,Y).` appears BEFORE the base case `r(X,Y) :- f(X,Y).`, what risk does this create?',
        options: [
            'Compilation error',
            'Prolog always tries the recursive branch first, potentially causing infinite loops',
            'The base case is never loaded',
            'Results are returned in reverse order',
        ],
        correctIndex: 1,
        explanation:
            'Since Prolog tries clauses top-to-bottom, listing the recursive rule first means Prolog always attempts recursion before checking the base case. If the recursive chain forms a cycle (e.g., via a cycle in the facts), this leads to an infinite loop.',
        difficulty: 'hard',
    },
    // --- Prolog programming (6 Qs) ---
    {
        id: 'quiz-mas-11',
        courseId: 'multi-agent-systems',
        question: 'What is the result of `?- [H|T] = [a, b, c].` in Prolog?',
        options: ['H = a, T = [b, c]', 'H = [a], T = [b, c]', 'H = a, T = b, c', 'false'],
        correctIndex: 0,
        explanation:
            'The [H|T] notation splits a list into its head (first element) and tail (remaining list). For [a, b, c], H unifies with a, and T unifies with [b, c].',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-12',
        courseId: 'multi-agent-systems',
        question: 'What does `?- not(A=4).` return in Prolog?',
        options: ['true', 'false', 'A = 4', 'error'],
        correctIndex: 1,
        explanation:
            'not/1 (negation as failure) succeeds only if its argument cannot be proven. Since A is an unbound variable, A can be unified with 4, so A=4 succeeds. Therefore not(A=4) fails and returns false. This is a classic example of floundering.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-13',
        courseId: 'multi-agent-systems',
        question: 'What is "floundering" in Prolog?',
        options: [
            'When a query runs infinitely due to left-recursion',
            'When negation is called with unbound variables, producing unexpected results',
            'When two clauses have identical heads',
            'When a fact cannot be found in the knowledge base',
        ],
        correctIndex: 1,
        explanation:
            'Floundering occurs when negation (not/1 or \\+) is called with unbound variables. Since an unbound variable can unify with anything, the goal inside the negation succeeds, so the negation fails unexpectedly. The fix is to always bind variables before using them in negation.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-14',
        courseId: 'multi-agent-systems',
        question: 'What is the advantage of tail recursion with accumulators over simple (left) recursion in Prolog?',
        options: [
            'It runs in parallel across multiple cores',
            'It uses constant O(1) stack space instead of O(n) stack frames',
            'It automatically prevents infinite loops',
            'It allows negative numbers in computations',
        ],
        correctIndex: 1,
        explanation:
            'In simple recursion, stack frames accumulate until the base case, then results are computed on the way back. Tail recursion with accumulators carries partial results forward, so each recursive call replaces the previous stack frame, using O(1) stack space.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-15',
        courseId: 'multi-agent-systems',
        question: 'Given the cut operator in:\n```prolog\nmax(X, Y, X) :- X >= Y, !.\nmax(_, Y, Y).\n```\nWhat type of cut is this, and why?',
        options: [
            'Red cut — removing it changes the program\'s results',
            'Green cut — it only removes unnecessary computation without changing results',
            'Forced cut — it is required for the program to compile',
            'Blue cut — it optimizes memory allocation',
        ],
        correctIndex: 0,
        explanation:
            'This is a red cut because removing it changes the program\'s results. Without the cut, querying max(5, 3, M) produces two answers: M=5 (clause 1) and M=3 (clause 2, since max(_, Y, Y) has no guard). The cut prevents the spurious second answer. For a green cut, the second clause would need an explicit guard: max(X, Y, Y) :- X < Y.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mas-16',
        courseId: 'multi-agent-systems',
        question: 'What does `?- X+2 is 5.` return in Prolog?',
        options: ['X = 3', 'true', 'false', 'error'],
        correctIndex: 2,
        explanation:
            'The `is/2` operator evaluates the right-hand side (5, which is fine) and tries to unify it with the left-hand side. But X+2 is the compound term +(X,2), not a simple variable. The unification +(X,2) = 5 fails because a compound term cannot unify with a number. The result is false.',
        difficulty: 'hard',
    },
    // --- Agent theory (5 Qs) ---
    {
        id: 'quiz-mas-17',
        courseId: 'multi-agent-systems',
        question: 'Which of the following is NOT a characteristic of an intelligent agent according to Wooldridge & Jennings?',
        options: ['Reactive', 'Pro-active', 'Deterministic', 'Social'],
        correctIndex: 2,
        explanation:
            'The four characteristics of an intelligent agent are: Reactive (responds to environmental changes), Pro-active (takes initiative toward goals), Social (communicates and cooperates), and Autonomous (controls its own actions). Deterministic describes an environment property, not an agent characteristic.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-18',
        courseId: 'multi-agent-systems',
        question: 'An environment where the agent can see the complete state at each point in time is called:',
        options: [
            'Deterministic',
            'Fully observable',
            'Static',
            'Discrete',
        ],
        correctIndex: 1,
        explanation:
            'A fully observable environment gives the agent access to the complete state through its sensors. Partially observable means incomplete or noisy information. This is distinct from determinism (predictable action outcomes) and static/dynamic (whether the environment changes independently).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-19',
        courseId: 'multi-agent-systems',
        question: 'What is a "durative action" in agent theory?',
        options: [
            'An action that has no effect on the environment',
            'An action that takes time to complete and may receive feedback during execution',
            'An action that can only be performed once',
            'An action triggered by another agent',
        ],
        correctIndex: 1,
        explanation:
            'A durative action takes time to complete, as opposed to an instantaneous action. During execution, the agent may receive feedback, the action may fail, or a new action request may arrive. This requires the agent to handle interruption, queuing, or cancellation.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-20',
        courseId: 'multi-agent-systems',
        question: 'Why must an agent continuously monitor the environment through percepts?',
        options: [
            'Because the agent has no memory of previous states',
            'Because dynamic and stochastic environments can change independently of the agent',
            'Because the environment is always fully observable',
            'Because actions always succeed in predictable ways',
        ],
        correctIndex: 1,
        explanation:
            'Continuous monitoring is essential because: (1) dynamic environments change independently, (2) stochastic action outcomes are unpredictable, (3) other agents may modify the environment, and (4) durative actions may fail or be interrupted.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-21',
        courseId: 'multi-agent-systems',
        question: 'The challenge in agent design of balancing responsiveness to environmental changes with pursuing long-term goals is described as the tension between:',
        options: [
            'Observability and determinism',
            'Reactivity and pro-activity',
            'Autonomy and sociality',
            'Discreteness and continuity',
        ],
        correctIndex: 1,
        explanation:
            'The key design challenge is balancing reactivity (responding to changes) with pro-activity (pursuing goals). Too reactive and the agent is purely stimulus-driven; too pro-active and it ignores important environmental changes.',
        difficulty: 'medium',
    },
    // --- MARBEL (7 Qs) ---
    {
        id: 'quiz-mas-22',
        courseId: 'multi-agent-systems',
        question: 'In MARBEL, which file extension is used for the main configuration that defines the agent, launch policy, and percept handlers?',
        options: ['.pl', '.mod2g', '.mas2g', '.agent'],
        correctIndex: 2,
        explanation:
            'The .mas2g file is the main configuration file. It defines which agent program files to use, how percepts are handled (add/update/replace), and the launch policy. The .mod2g files contain action rule modules, and .pl files contain the Prolog knowledge base.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-23',
        courseId: 'multi-agent-systems',
        question: 'In MARBEL, which percept handler should be used for a percept that is sent every cycle regardless of changes?',
        options: ['add', 'update', 'replace', 'insert'],
        correctIndex: 2,
        explanation:
            'The `replace` handler is for "send always" percepts that arrive every cycle. It replaces all matching percepts each cycle. `add` is for "send once" percepts, and `update` is for "send on-change" percepts that are sent only when the value changes.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mas-24',
        courseId: 'multi-agent-systems',
        question: 'In MARBEL, what does the module option `exit=noaction` do?',
        options: [
            'Exits the module immediately after entering it',
            'Never exits the module under any circumstance',
            'Exits only when no action rule is applicable',
            'Exits after performing exactly one action',
        ],
        correctIndex: 2,
        explanation:
            'exit=noaction means the module exits only when no rule applies (no action can be performed). exit=always exits after executing any single action, and exit=never keeps looping through rules indefinitely.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-25',
        courseId: 'multi-agent-systems',
        question: 'Why must predicates used in MARBEL percept handling be declared as `:- dynamic` in the .pl file?',
        options: [
            'To make them visible to other agents',
            'Because their truth values change at runtime via insert/delete operations',
            'To enable pattern matching on those predicates',
            'To allow them to have more than two arguments',
        ],
        correctIndex: 1,
        explanation:
            'Dynamic declarations are mandatory for any predicate that is modified at runtime, whether by percept handlers (add/update/replace) or by explicit insert/delete operations in action rules. Without the declaration, Prolog would treat them as static and refuse modification.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-26',
        courseId: 'multi-agent-systems',
        question: 'In a MARBEL module with `order=linear`, why might a rule NOT need to explicitly check `not(conditionX)` if the preceding rule already checks `conditionX`?',
        options: [
            'Because Prolog automatically adds negation to subsequent rules',
            'Because linear order means if the preceding rule matched conditionX, it would have fired, so reaching this rule implies conditionX is false',
            'Because MARBEL removes duplicate conditions automatically',
            'Because all conditions in a module are mutually exclusive by default',
        ],
        correctIndex: 1,
        explanation:
            'With order=linear, rules are tried top-to-bottom. If rule N-1 checks conditionX and would have fired if true, then reaching rule N implies conditionX is false. The explicit not(conditionX) check is therefore redundant.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mas-27',
        courseId: 'multi-agent-systems',
        question: 'In MARBEL, what does the `+` operator do in an action rule like `if at(0) then getCoffee + insert(has(coffee)).`?',
        options: [
            'Adds two numbers together',
            'Combines an environment action with a belief update',
            'Creates a logical disjunction between two conditions',
            'Sends two percepts simultaneously',
        ],
        correctIndex: 1,
        explanation:
            'The `+` operator combines an environment action (getCoffee) with a belief update (insert(has(coffee))). This allows the agent to perform an action and update its beliefs in a single rule. insert() adds beliefs, delete() removes them.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mas-28',
        courseId: 'multi-agent-systems',
        question: 'A robot agent receives `at/1` percepts only when its position changes. In the .mas2g file, which handler is most appropriate?',
        options: [
            'add at/1 — because the location is added once',
            'update at/1 — because the percept is sent on-change',
            'replace at/1 — because the location should be refreshed every cycle',
            'insert at/1 — because the belief needs to be inserted',
        ],
        correctIndex: 1,
        explanation:
            'Since the at/1 percept is sent only when the value changes (on-change), the correct handler is `update`. It removes the old at/1 value from the belief base and adds the new one. `add` would keep accumulating old positions, and `replace` expects the percept every cycle.',
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
    // --- Module 1: Formal systems, propositional logic, knowledge graphs (~5 Qs) ---
    {
        id: 'quiz-kd-1',
        courseId: 'knowledge-and-data',
        question: 'What are the three components of a formal logic (formal system)?',
        options: [
            'Syntax, semantics, and calculus',
            'Classes, properties, and instances',
            'Subject, predicate, and object',
            'TBox, ABox, and RBox',
        ],
        correctIndex: 0,
        explanation:
            'A formal logic consists of: syntax (which expressions are well-formed), semantics (what expressions mean with respect to interpretations), and calculus (how to determine meaning for legal expressions, e.g., truth tables, inference rules).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-2',
        courseId: 'knowledge-and-data',
        question: 'In propositional logic, a formula that is true under every possible valuation is called a:',
        options: [
            'Contradiction',
            'Tautology',
            'Model',
            'Satisfiable formula',
        ],
        correctIndex: 1,
        explanation:
            'A tautology is true under every possible truth value assignment. A contradiction is false under every valuation. A model is a specific valuation that makes a formula true. A satisfiable formula is true under at least one valuation.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-3',
        courseId: 'knowledge-and-data',
        question: 'To check whether KB ENTAILS formula F using truth tables, what must hold?',
        options: [
            'F is true in at least one row where KB is true',
            'KB is true in every row of the truth table',
            'In every row where KB is true, F must also be true',
            'F and KB must have the same truth table column',
        ],
        correctIndex: 2,
        explanation:
            'Semantic entailment (KB |= F) holds if and only if every valuation that makes KB true also makes F true. A single row where KB is true but F is false is a counterexample that disproves entailment.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-4',
        courseId: 'knowledge-and-data',
        question: 'Which of the following best describes a knowledge graph?',
        options: [
            'A neural network trained on knowledge base completions',
            'A graph-based, heterogeneous, interpretable, and semantic representation of data published on the Web',
            'A hierarchical file system for organizing structured data',
            'A relational database with foreign key constraints',
        ],
        correctIndex: 1,
        explanation:
            'A knowledge graph is heterogeneous (accommodates different data types), interpretable (others can correctly interpret data), semantic (makes meaning explicit), graph-based (nodes and edges), and Web-accessible. It uses formalisms like RDF for querying, integration, and reasoning.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-5',
        courseId: 'knowledge-and-data',
        question: 'What distinguishes data, information, and knowledge according to the course?',
        options: [
            'Data is structured, information is unstructured, knowledge is semi-structured',
            'Data consists of individual facts out of context; information is data in context; knowledge is information combined with rules and understanding',
            'They are interchangeable terms for the same concept',
            'Data is quantitative, information is qualitative, knowledge is procedural',
        ],
        correctIndex: 1,
        explanation:
            'The course defines a clear hierarchy: data = individual facts out of context, information = data placed in a relevant context, knowledge = information retained with understanding of its significance plus rules. Data preparation accounts for roughly 80% of a data scientist\'s work.',
        difficulty: 'easy',
    },
    // --- Module 2: RDF, URIs, Turtle, Linked Data, blank nodes (~7 Qs) ---
    {
        id: 'quiz-kd-6',
        courseId: 'knowledge-and-data',
        question: 'In an RDF triple (subject, predicate, object), which positions can a literal appear in?',
        options: [
            'Subject and object',
            'Object only',
            'Subject, predicate, and object',
            'Predicate only',
        ],
        correctIndex: 1,
        explanation:
            'Literals can only appear in the object position of an RDF triple. Subjects must be URIs or blank nodes. Predicates must be URIs only (never blank nodes or literals). This is a fundamental constraint of the RDF data model.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-7',
        courseId: 'knowledge-and-data',
        question: 'What role do blank nodes play in RDF?',
        options: [
            'They represent NULL values like in SQL databases',
            'They are anonymous resources acting as existential quantifiers ("there exists some resource...")',
            'They mark triples that should be deleted',
            'They represent predicates with unknown URIs',
        ],
        correctIndex: 1,
        explanation:
            'Blank nodes represent resources without a URI. They act as existential quantifiers: "there exists some resource with these properties." In Turtle they are written as _:label or inline with [...]. When merging graphs, blank node labels are local to each graph and must be renamed to avoid clashes.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-8',
        courseId: 'knowledge-and-data',
        question: 'In Turtle syntax, what does the semicolon (;) indicate?',
        options: [
            'End of the RDF statement',
            'The next triple shares the same subject (different predicate-object)',
            'A comment follows on this line',
            'The next triple shares the same subject AND predicate (different object)',
        ],
        correctIndex: 1,
        explanation:
            'The semicolon (;) means the next predicate-object pair shares the same subject. The comma (,) means the next object shares both the same subject AND predicate. The period (.) terminates a statement. These shortcuts reduce repetition in Turtle files.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-9',
        courseId: 'knowledge-and-data',
        question: 'Consider this Turtle snippet:\n```turtle\nex:s1 a dbr:Student ;\n    ex:hasVUnetID "as344" ;\n    ex:studiesAt ex:UvA, ex:VU .\n```\nHow many RDF triples does this produce?',
        options: [
            '2',
            '3',
            '4',
            '5',
        ],
        correctIndex: 2,
        explanation:
            'This produces 4 triples: (1) ex:s1 rdf:type dbr:Student, (2) ex:s1 ex:hasVUnetID "as344", (3) ex:s1 ex:studiesAt ex:UvA, and (4) ex:s1 ex:studiesAt ex:VU. The semicolons reuse the subject, and the comma reuses both subject and predicate.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-10',
        courseId: 'knowledge-and-data',
        question: 'In Turtle, what does the keyword `a` abbreviate?',
        options: [
            'rdfs:subClassOf',
            'owl:sameAs',
            'rdf:type',
            'rdfs:label',
        ],
        correctIndex: 2,
        explanation:
            'In Turtle syntax, `a` is shorthand for rdf:type, which asserts class membership. For example, `ex:s1 a dbr:Student .` is equivalent to `ex:s1 rdf:type dbr:Student .`',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-11',
        courseId: 'knowledge-and-data',
        question: 'When converting a relational table to RDF, what does a column header typically become?',
        options: [
            'A literal value in the object position',
            'A class via rdf:type',
            'A property (predicate)',
            'A blank node',
        ],
        correctIndex: 2,
        explanation:
            'In table-to-RDF conversion: row identifiers become URI resources (subjects), column headers become properties (predicates), cell values become literals or URI resources (objects), and the table name typically becomes a class (via rdf:type).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-12',
        courseId: 'knowledge-and-data',
        question: 'Which statement about URIs in RDF is correct?',
        options: [
            'A URI is the resource itself',
            'Each resource can have at most one URI',
            'Multiple URIs can denote the same resource, and HTTP URIs have global scope',
            'URIs can only identify Web pages, not abstract concepts',
        ],
        correctIndex: 2,
        explanation:
            'URIs identify (denote) resources but are not the resources themselves. Multiple URIs can refer to the same resource. HTTP URIs have global scope (unique throughout the Web) and are also dereferenceable addresses. Almost anything can be a resource, including abstract concepts.',
        difficulty: 'medium',
    },
    // --- Module 3: RDFS, class hierarchies, SPARQL (~8 Qs) ---
    {
        id: 'quiz-kd-13',
        courseId: 'knowledge-and-data',
        question: 'What does the RDFS entailment rule rdfs2 (domain rule) allow you to derive?',
        options: [
            'If `s p o` and `p rdfs:range X`, then `o rdf:type X`',
            'If `s p o` and `p rdfs:domain X`, then `s rdf:type X`',
            'If `A rdfs:subClassOf B` and `s rdf:type A`, then `s rdf:type B`',
            'If `p rdfs:subPropertyOf q` and `s p o`, then `s q o`',
        ],
        correctIndex: 1,
        explanation:
            'Rule rdfs2: if `s p o` and `p rdfs:domain X`, derive `s rdf:type X`. The domain tells us the class of subjects that use this property. The range rule (rdfs3) derives object types. Rule rdfs9 handles subclass type propagation. Rule rdfs7 handles subproperty substitution.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-14',
        courseId: 'knowledge-and-data',
        question: 'Given:\n```turtle\nex:hasMother rdfs:domain ex:Person .\nex:hasMother rdfs:range ex:Woman .\nex:bob ex:hasMother ex:alice .\n```\nWhich triples can be derived using RDFS entailment?',
        options: [
            'ex:bob rdf:type ex:Woman and ex:alice rdf:type ex:Person',
            'ex:bob rdf:type ex:Person and ex:alice rdf:type ex:Woman',
            'ex:alice rdf:type ex:Person only',
            'No new triples can be derived',
        ],
        correctIndex: 1,
        explanation:
            'By rdfs2 (domain): the subject ex:bob gets type ex:Person. By rdfs3 (range): the object ex:alice gets type ex:Woman. A common exam mistake is swapping domain (applies to subjects) and range (applies to objects).',
        difficulty: 'hard',
    },
    {
        id: 'quiz-kd-15',
        courseId: 'knowledge-and-data',
        question: 'Which property of rdfs:subClassOf is used to derive `s rdf:type C` from `s rdf:type A` and `A rdfs:subClassOf B` and `B rdfs:subClassOf C`?',
        options: [
            'rdfs9 (subclass type propagation) and rdfs11 (subClassOf transitivity)',
            'rdfs2 (domain rule) only',
            'rdfs7 (subproperty substitution) only',
            'rdfs5 (subPropertyOf transitivity)',
        ],
        correctIndex: 0,
        explanation:
            'First, rdfs11 derives A rdfs:subClassOf C (transitivity of subClassOf). Then rdfs9 derives s rdf:type C from s rdf:type A and A rdfs:subClassOf C. These two rules work together for hierarchical type inference.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-kd-16',
        courseId: 'knowledge-and-data',
        question: 'Which SPARQL query form returns a boolean (true/false) result?',
        options: ['SELECT', 'CONSTRUCT', 'DESCRIBE', 'ASK'],
        correctIndex: 3,
        explanation:
            'ASK returns true if the graph pattern has at least one match, false otherwise. SELECT returns a table of variable bindings. CONSTRUCT builds a new RDF graph from a template. DESCRIBE returns an RDF graph describing a resource.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-17',
        courseId: 'knowledge-and-data',
        question: 'What does the OPTIONAL keyword do in a SPARQL query?',
        options: [
            'Makes the entire query optional (returns empty if no match)',
            'Includes results even when the optional pattern does not match (left join semantics)',
            'Removes duplicate results from the output',
            'Limits the number of results returned',
        ],
        correctIndex: 1,
        explanation:
            'OPTIONAL acts like a left join: results are included whether or not the optional pattern matches. If the pattern matches, variables are bound; otherwise they are unbound (null). Required WHERE patterns must match for a result to be included at all.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-18',
        courseId: 'knowledge-and-data',
        question: 'What does the following SPARQL query return?\n```sparql\nSELECT ?city (COUNT(?student) AS ?num)\nWHERE {\n    ?student ex:studiesAt ?uni .\n    ?uni ex:locatedIn ?city .\n}\nGROUP BY ?city\nORDER BY DESC(?num)\nLIMIT 5\n```',
        options: [
            'All cities where students study, sorted alphabetically',
            'The top 5 cities by number of students, in descending order',
            'The 5 most recent students and their cities',
            'All students grouped by city without a limit',
        ],
        correctIndex: 1,
        explanation:
            'The query counts students per city using GROUP BY, sorts in descending order of count using ORDER BY DESC(?num), and returns only the top 5 results using LIMIT 5. This is a standard aggregation pattern in SPARQL.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-19',
        courseId: 'knowledge-and-data',
        question: 'In SPARQL, what does the SERVICE keyword enable?',
        options: [
            'Starting a background process for long-running queries',
            'Querying a remote SPARQL endpoint within a local query (federated query)',
            'Caching query results for faster retrieval',
            'Defining custom functions for FILTER expressions',
        ],
        correctIndex: 1,
        explanation:
            'The SERVICE keyword enables federated queries by sending part of a query to a remote SPARQL endpoint. For example, `SERVICE <http://dbpedia.org/sparql> { ... }` queries DBpedia within a local query. This is fundamental to the Linked Data vision of distributed querying.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-kd-20',
        courseId: 'knowledge-and-data',
        question: 'What is the difference between a SPARQL CONSTRUCT query and a SELECT query?',
        options: [
            'CONSTRUCT returns a table; SELECT returns a graph',
            'CONSTRUCT returns a new RDF graph built from a template; SELECT returns a table of variable bindings',
            'CONSTRUCT modifies the triple store; SELECT only reads it',
            'They return the same results in different formats',
        ],
        correctIndex: 1,
        explanation:
            'CONSTRUCT uses a template to build a new RDF graph from matched patterns (e.g., deriving new triples). SELECT returns tabular variable bindings. Neither modifies the triple store (that requires INSERT/DELETE). They serve fundamentally different purposes.',
        difficulty: 'medium',
    },
    // --- Module 4: OWL, restrictions, open/closed world, reasoning (~8 Qs) ---
    {
        id: 'quiz-kd-21',
        courseId: 'knowledge-and-data',
        question: 'What does the Open World Assumption (OWA) in OWL mean?',
        options: [
            'All ontologies must be publicly accessible',
            'If a statement is not present, it is considered false',
            'If a statement is not explicitly present or derivable, it is unknown (not assumed false)',
            'Ontologies must be published as open-source software',
        ],
        correctIndex: 2,
        explanation:
            'Under OWA, absence of a statement means "unknown," not "false." This contrasts with the Closed World Assumption (CWA) in databases where missing data is treated as false. OWA is essential for the Web where information is inherently incomplete.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-22',
        courseId: 'knowledge-and-data',
        question: 'If a property is declared as owl:TransitiveProperty, and we have `ex:a ex:p ex:b` and `ex:b ex:p ex:c`, what can be inferred?',
        options: [
            'ex:c ex:p ex:a (symmetry)',
            'ex:a ex:p ex:c (transitivity)',
            'ex:a owl:sameAs ex:c',
            'Nothing additional can be inferred',
        ],
        correctIndex: 1,
        explanation:
            'OWL rule 5: if p is transitive and p(a,b) and p(b,c), then p(a,c). Classic examples include ancestorOf, locatedIn, and subClassOf. Transitivity is distinct from symmetry (which would infer the reverse direction).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-23',
        courseId: 'knowledge-and-data',
        question: 'What does owl:equivalentClass between classes A and B mean?',
        options: [
            'A and B have the same URI',
            'A rdfs:subClassOf B (one direction only)',
            'A rdfs:subClassOf B AND B rdfs:subClassOf A (bidirectional subclass)',
            'A and B are disjoint',
        ],
        correctIndex: 2,
        explanation:
            'owl:equivalentClass means A is a subclass of B AND B is a subclass of A — they have exactly the same instances. This is strictly stronger than rdfs:subClassOf (which is one-directional). It does not mean they share the same URI.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-24',
        courseId: 'knowledge-and-data',
        question: 'In OWL, what happens when a property is declared as owl:FunctionalProperty and we have both `ex:x ex:p ex:y` and `ex:x ex:p ex:z`?',
        options: [
            'The second triple is rejected',
            'An error is raised',
            'OWL infers ex:y owl:sameAs ex:z',
            'Both triples are silently ignored',
        ],
        correctIndex: 2,
        explanation:
            'A FunctionalProperty means each subject has at most one value. If p(x,y) and p(x,z) both hold, OWL infers y owl:sameAs z (they must be the same individual). This differs from databases, which would reject the duplicate.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-25',
        courseId: 'knowledge-and-data',
        question: 'Given:\n```turtle\nex:VegPizza owl:equivalentClass [\n    rdf:type owl:Restriction ;\n    owl:onProperty ex:hasTopping ;\n    owl:allValuesFrom ex:VegTopping\n] .\nex:myPizza a ex:VegPizza .\nex:myPizza ex:hasTopping ex:pepperoni .\n```\nWhat does OWL infer?',
        options: [
            'ex:myPizza is not a VegPizza',
            'ex:pepperoni rdf:type ex:VegTopping',
            'The ontology is immediately inconsistent',
            'Nothing can be inferred under OWA',
        ],
        correctIndex: 1,
        explanation:
            'owl:allValuesFrom means ALL hasTopping values of a VegPizza must be VegTopping instances. Since myPizza is a VegPizza and has pepperoni as a topping, the reasoner concludes pepperoni must be a VegTopping. If pepperoni were also declared as NOT a VegTopping, then the ontology would become inconsistent.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-kd-26',
        courseId: 'knowledge-and-data',
        question: 'Given:\n```turtle\nex:EurCitizen rdfs:subClassOf [\n    rdf:type owl:Restriction ;\n    owl:onProperty ex:citizenOf ;\n    owl:someValuesFrom ex:EurCountry\n] .\nex:john ex:citizenOf ex:netherlands .\nex:netherlands a ex:EurCountry .\n```\nCan we derive `ex:john rdf:type ex:EurCitizen`?',
        options: [
            'Yes, because john has citizenship of a European country',
            'No, because someValuesFrom on a superclass is a necessary condition of membership, not a sufficient one',
            'Yes, because the restriction uses rdfs:subClassOf',
            'No, because someValuesFrom requires all values to match',
        ],
        correctIndex: 1,
        explanation:
            'The restriction says every EurCitizen has at least one citizenOf that is a EurCountry (necessary condition). Having such citizenship does not make someone an EurCitizen. To infer class membership, you would need owl:equivalentClass instead of rdfs:subClassOf. This is a critical exam distinction.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-kd-27',
        courseId: 'knowledge-and-data',
        question: 'Given: ex:A owl:disjointWith ex:B, ex:x rdf:type ex:A, ex:x rdf:type ex:B. What is the result?',
        options: [
            'ex:x is classified as owl:Nothing',
            'The ontology is inconsistent',
            'OWL removes one of the type assertions',
            'ex:A owl:equivalentClass ex:B is derived',
        ],
        correctIndex: 1,
        explanation:
            'Disjoint classes share no individuals. An individual typed as both disjoint classes creates a logical contradiction, making the ontology inconsistent. A reasoner would flag this. Under OWA, this is a genuine error, not just a missing assertion.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-28',
        courseId: 'knowledge-and-data',
        question: 'Which of the following can RDFS NOT express, but OWL can?',
        options: [
            'Class hierarchies with rdfs:subClassOf',
            'Property domain and range declarations',
            'Disjointness between classes, cardinality restrictions, and property transitivity',
            'Instance typing with rdf:type',
        ],
        correctIndex: 2,
        explanation:
            'RDFS supports class hierarchies, domain/range, and instance typing. However, it cannot express disjointness, cardinality constraints, property characteristics (symmetric, transitive, functional), class restrictions, or equality. OWL adds all of these, built on Description Logics.',
        difficulty: 'medium',
    },
    // --- Module 5: Ontology engineering, SKOS, data integration (~7 Qs) ---
    {
        id: 'quiz-kd-29',
        courseId: 'knowledge-and-data',
        question: 'What is an ontology in the context of knowledge engineering?',
        options: [
            'A programming language for building knowledge bases',
            'An explicit specification of a shared conceptualization that holds in a particular context',
            'A database schema written in SQL',
            'A visualization of all entities in a knowledge graph',
        ],
        correctIndex: 1,
        explanation:
            'The standard definition: an ontology is an explicit (formalized) specification of a shared (agreed upon by a community) conceptualization (abstract domain model) that holds in a particular context (specific domain/purpose).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-30',
        courseId: 'knowledge-and-data',
        question: 'What is the difference between TBox and ABox in a knowledge base?',
        options: [
            'TBox stores queries; ABox stores results',
            'TBox contains class definitions and axioms (schema); ABox contains instance data (facts)',
            'TBox is for OWL; ABox is for RDFS only',
            'TBox is public; ABox is private',
        ],
        correctIndex: 1,
        explanation:
            'TBox (Terminological) contains class definitions, property definitions, and axioms (the schema/vocabulary). ABox (Assertional) contains instance data and individual assertions (the data/facts). Together they form the complete knowledge base.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-31',
        courseId: 'knowledge-and-data',
        question: 'What is the key difference between skos:broader and rdfs:subClassOf?',
        options: [
            'They are semantically identical and interchangeable',
            'skos:broader covers is-a, part-of, and topic-implication relations; rdfs:subClassOf strictly means set-theoretic class inclusion',
            'rdfs:subClassOf is informal; skos:broader has formal model-theoretic semantics',
            'skos:broader can only relate instances, not concepts',
        ],
        correctIndex: 1,
        explanation:
            'skos:broader is more generic: it covers generic (is-a), mereological (part-of, location), and topic-implication relations. rdfs:subClassOf strictly means every member of the subclass is a member of the superclass. Example: "Amsterdam skos:broader Netherlands" works, but "Amsterdam rdfs:subClassOf Netherlands" does not.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-kd-32',
        courseId: 'knowledge-and-data',
        question: 'In the ontology development methodology, what are "competency questions"?',
        options: [
            'Questions used to test whether students understand the ontology',
            'Questions the ontology should be able to answer, used to determine scope and evaluate completeness',
            'SPARQL queries that must return results within 1 second',
            'Questions that verify the ontology has no inconsistencies',
        ],
        correctIndex: 1,
        explanation:
            'Competency questions define the scope of the ontology by specifying what questions it should be able to answer. They are created in step 1 (determine domain and scope) and used throughout development to evaluate whether the ontology is complete and fit for purpose.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-33',
        courseId: 'knowledge-and-data',
        question: 'Which SKOS property represents a preferred human-readable label for a concept?',
        options: [
            'skos:broader',
            'skos:prefLabel',
            'skos:related',
            'skos:definition',
        ],
        correctIndex: 1,
        explanation:
            'skos:prefLabel provides the preferred label for a concept (e.g., the main term in a thesaurus). skos:altLabel provides alternative labels (synonyms). skos:broader and skos:narrower express hierarchical relations. skos:related expresses associative (non-hierarchical) relations.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-kd-34',
        courseId: 'knowledge-and-data',
        question: 'When aligning two ontologies that describe overlapping domains, which OWL construct is used to assert that two individuals from different ontologies are the same real-world entity?',
        options: [
            'owl:equivalentClass',
            'owl:sameAs',
            'rdfs:subClassOf',
            'owl:differentFrom',
        ],
        correctIndex: 1,
        explanation:
            'owl:sameAs asserts that two URIs denote the same individual (individual-individual mapping). owl:equivalentClass is for class-class mappings. rdfs:subClassOf expresses a subset relationship. owl:differentFrom asserts two URIs denote different individuals.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-kd-35',
        courseId: 'knowledge-and-data',
        question: 'In the ontology engineering methodology, what is the principle of "minimal ontological commitment"?',
        options: [
            'Use the fewest number of classes possible',
            'Only commit to the weakest claims needed to support your use case, avoiding over-constraining the domain',
            'Reuse as many external ontologies as possible',
            'Ontologies should contain no more than 100 axioms',
        ],
        correctIndex: 1,
        explanation:
            'Minimal ontological commitment means making only the claims about the domain that are truly necessary. Over-commitment makes statements that are too strong and may exclude valid interpretations (e.g., "all birds can fly" excludes penguins). Under-commitment makes the ontology too vague to be useful.',
        difficulty: 'hard',
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
        question:
            'What is the last step in the five-step problem-solving process?',
        options: [
            'Choose a solution strategy',
            'Check whether the strategy worked',
            'Execute the strategy',
            'Verify the solution for correctness and reasonableness',
        ],
        correctIndex: 3,
        explanation:
            'The five problem-solving steps are: (1) understand the problem, (2) choose a strategy, (3) solve/execute the strategy, (4) check whether the strategy worked (if not, go back to step 2), and (5) verify the solution — check for miscalculations and test reasonableness. Verification is the final step, distinct from step 4 which checks whether the overall approach worked.',
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
        difficulty: 'medium',
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
        difficulty: 'medium',
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
        difficulty: 'medium',
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
        difficulty: 'medium',
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
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-36',
        courseId: 'computational-thinking',
        question: 'Which of the following is NOT one of the four core pillars of Computational Thinking?',
        options: [
            'Decomposition',
            'Pattern Recognition',
            'Compilation',
            'Abstraction',
        ],
        correctIndex: 2,
        explanation:
            'The four pillars of Computational Thinking are Decomposition, Pattern Recognition, Abstraction, and Algorithm Design. Compilation is the process of converting source code to machine code and is not a CT pillar.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-37',
        courseId: 'computational-thinking',
        question: 'What is the decimal value of the binary number 1101?',
        options: ['11', '12', '13', '15'],
        correctIndex: 2,
        explanation:
            'Binary 1101 = 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13. Each position represents a power of 2, starting from 2⁰ on the right.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-38',
        courseId: 'computational-thinking',
        question: 'How many bits are in one byte?',
        options: ['2', '4', '8', '16'],
        correctIndex: 2,
        explanation:
            'One byte consists of 8 bits. A bit is a single binary digit (0 or 1), and a byte is the standard unit of data storage in computing.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-39',
        courseId: 'computational-thinking',
        question: 'What is the result of the Boolean expression TRUE AND FALSE?',
        options: ['TRUE', 'FALSE', 'NULL', 'Undefined'],
        correctIndex: 1,
        explanation:
            'The AND operation returns TRUE only when both operands are TRUE. Since one operand is FALSE, the result is FALSE.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-40',
        courseId: 'computational-thinking',
        question: 'Which Boolean operation returns TRUE when exactly one of its two inputs is TRUE?',
        options: ['AND', 'OR', 'NOT', 'XOR'],
        correctIndex: 3,
        explanation:
            'XOR (exclusive OR) returns TRUE when exactly one input is TRUE and the other is FALSE. AND requires both TRUE, OR requires at least one, and NOT is a unary operator.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-41',
        courseId: 'computational-thinking',
        question: 'What is the time complexity of the following code?\n\nfor i in range(n):\n    for j in range(n):\n        print(i + j)',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
        correctIndex: 2,
        explanation:
            'The outer loop runs n times and the inner loop also runs n times for each iteration. The total operations are n × n = n², giving O(n²). This is the standard pattern for nested loops.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-42',
        courseId: 'computational-thinking',
        question: 'Which data structure uses a Last-In, First-Out (LIFO) access pattern?',
        options: ['Queue', 'Stack', 'Dictionary', 'Array'],
        correctIndex: 1,
        explanation:
            'A stack follows LIFO: the last element pushed is the first popped. A queue follows FIFO (First-In, First-Out). Dictionaries use key-based access, and arrays use index-based access.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-ct-43',
        courseId: 'computational-thinking',
        question: 'Which data structure would be most appropriate for implementing a print job scheduler where jobs are processed in the order they arrive?',
        options: ['Stack', 'Queue', 'Dictionary', 'Binary search tree'],
        correctIndex: 1,
        explanation:
            'A queue (FIFO — First In, First Out) processes elements in arrival order, ideal for scheduling tasks like print jobs. A stack would process the most recent job first.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-44',
        courseId: 'computational-thinking',
        question: 'What is the worst-case time complexity of quicksort, and when does it occur?',
        options: [
            'O(n log n), when the list is random',
            'O(n²), when the pivot is always the smallest or largest element',
            'O(n), when the list is already sorted',
            'O(log n), when using the median as pivot',
        ],
        correctIndex: 1,
        explanation:
            'Quicksort degrades to O(n²) when the pivot is always the minimum or maximum (e.g., already-sorted input with first-element pivot). One partition is empty and the other has n-1 elements, preventing effective division.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-ct-45',
        courseId: 'computational-thinking',
        question: 'Which sorting algorithm is NOT stable?',
        options: ['Bubble sort', 'Insertion sort', 'Merge sort', 'Quicksort'],
        correctIndex: 3,
        explanation:
            'Quicksort is not stable — equal elements may change their relative order during partitioning. Bubble sort, insertion sort, and merge sort are all stable algorithms.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-46',
        courseId: 'computational-thinking',
        question: 'A connected graph with 7 vertices has a spanning tree. How many edges does that spanning tree have?',
        options: ['5', '6', '7', '8'],
        correctIndex: 1,
        explanation:
            'A spanning tree of a graph with n vertices always has exactly n - 1 edges. For 7 vertices: 7 - 1 = 6 edges. A spanning tree includes all vertices, is connected, and has no cycles.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-47',
        courseId: 'computational-thinking',
        question: 'Which sorting algorithm has a best-case time complexity of O(n) because it can detect that the input is already sorted?',
        options: ['Selection sort', 'Merge sort', 'Insertion sort', 'Quicksort'],
        correctIndex: 2,
        explanation:
            'Insertion sort achieves O(n) on already-sorted input because each element is compared only once and no shifts are needed. Selection sort always performs O(n²) comparisons. Merge sort always takes O(n log n).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-ct-48',
        courseId: 'computational-thinking',
        question: 'What does the brute force solution strategy rely on?',
        options: [
            'Mathematical formulas to find the answer directly',
            'Dividing the problem into smaller sub-problems',
            'Sheer computing power to try all possibilities without heuristics',
            'Making locally optimal choices at each step',
        ],
        correctIndex: 2,
        explanation:
            'Brute force relies on raw computing power to exhaustively try all possibilities. It is used when no faster algorithm is known. Option B describes divide-and-conquer, and option D describes the greedy technique.',
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
        difficulty: 'hard',
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
        difficulty: 'medium',
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
            'The course grade is composed of: MC Exam (30%), Group Project (40%), Poster (5%), Video (5%), and Diversity & Team Assignment (10%). These are the five graded components listed in the course manual.',
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
        difficulty: 'easy',
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
        difficulty: 'medium',
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
        difficulty: 'medium',
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
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-51',
        courseId: 'intro-ai',
        question: 'What does "rationality" mean in the context of AI agents?',
        options: [
            'The agent must have complete knowledge of all facts',
            'The agent chooses actions that optimise the chance of achieving its goals given available information',
            'The agent always produces the mathematically optimal result',
            'The agent must explain all decisions in natural language',
        ],
        correctIndex: 1,
        explanation:
            'Rationality means selecting actions to maximise expected goal achievement based on available percepts and knowledge. It does not require omniscience or guaranteed optimality.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-52',
        courseId: 'intro-ai',
        question: 'Which search algorithm uses a heuristic and guarantees finding the optimal path when the heuristic is admissible?',
        options: [
            'Depth-First Search (DFS)',
            'Breadth-First Search (BFS)',
            'A* search',
            'Random search',
        ],
        correctIndex: 2,
        explanation:
            'A* search combines actual cost from start with a heuristic estimate of remaining cost. When the heuristic never overestimates (is admissible), A* guarantees the optimal path.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-53',
        courseId: 'intro-ai',
        question: 'In conversational AI, what is "grounding" in dialogue?',
        options: [
            'Connecting a robot physically to the ground',
            'The process by which participants establish shared understanding',
            'Training a language model on ground-truth labels',
            'Removing bias from training data',
        ],
        correctIndex: 1,
        explanation:
            'Grounding in dialogue refers to the ongoing process where participants update and confirm their mutual understanding through clarification questions and confirmations.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-54',
        courseId: 'intro-ai',
        question: 'What is "bias laundering" in the context of AI ethics?',
        options: [
            'A technique to remove all bias from datasets',
            'When automation wraps historical human biases in a veneer of objectivity',
            'A legal process for auditing AI systems',
            'A method of cleaning biased training data by resampling',
        ],
        correctIndex: 1,
        explanation:
            'Bias laundering occurs when automating a process gives existing human biases an appearance of objectivity. An AI trained on biased historical data perpetuates bias while appearing "objective."',
        difficulty: 'hard',
    },
    {
        id: 'quiz-iai-55',
        courseId: 'intro-ai',
        question: 'What is the "reality gap" in evolutionary robotics?',
        options: [
            'The gap between battery life in simulation versus reality',
            'The performance difference when solutions evolved in simulation are deployed on physical robots',
            'The time delay between designing and manufacturing a robot',
            'The difference between intended and actual selling price',
        ],
        correctIndex: 1,
        explanation:
            'The reality gap refers to performance differences when simulation-evolved policies are deployed on real robots, due to unmodelled physics, noise, and sensor imperfections.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-56',
        courseId: 'intro-ai',
        question: 'Which best describes "backpropagation" in neural networks?',
        options: [
            'Collecting training data by tracing back to original sources',
            'An algorithm that adjusts weights by propagating error gradients backward from the output layer',
            'Removing layers from a network to reduce complexity',
            'Sending data backward through the network to generate new inputs',
        ],
        correctIndex: 1,
        explanation:
            'Backpropagation computes how much each weight contributed to prediction error, then adjusts weights to reduce it. Gradients flow backward from output through hidden layers.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-iai-57',
        courseId: 'intro-ai',
        question: 'What is "one-hot encoding" used for in data wrangling?',
        options: [
            'Encrypting sensitive data for privacy',
            'Converting categorical variables into binary columns',
            'Normalising numeric features to a 0-1 range',
            'Reducing features through dimensionality reduction',
        ],
        correctIndex: 1,
        explanation:
            'One-hot encoding converts each category into a separate binary column (1 if the data point belongs to that category, 0 otherwise). This differs from normalisation or label encoding.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-iai-58',
        courseId: 'intro-ai',
        question: 'The Hawthorne effect is a threat to validity because:',
        options: [
            'Participants change behaviour because they know they are being observed',
            'Participants drop out at different rates across groups',
            'Measurement instruments change over the study',
            'Participants are not randomly assigned to groups',
        ],
        correctIndex: 0,
        explanation:
            'The Hawthorne effect occurs when participants alter behaviour due to awareness of being observed, regardless of the actual intervention.',
        difficulty: 'medium',
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
            'The idea that the mind evolved to solve specific problems in the environment',
            'The idea that the mind is too complex to understand as individual parts',
            'The theory that behavior is independent of biological evolution',
            'The approach of studying only observable behavior without considering mental processes',
        ],
        correctIndex: 0,
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
            'The neuron',
            'The synapse',
            'The brain stem',
            'The myelin sheath',
        ],
        correctIndex: 0,
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
            'They enhance neurotransmitter activity by mimicking it or increasing its availability',
            'They decrease the amount of neurotransmitter or block its receptors',
            'They destroy the synapse between neurons',
            'They permanently alter the structure of receptors',
        ],
        correctIndex: 0,
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
            'Regulating hormones throughout the body',
            'Relaying sensory information to the cortex',
            'Connecting the brain\'s two hemispheres',
        ],
        correctIndex: 3,
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
            'The study of how genetic expression can be changed by experience and environment',
            'The study of how mutations change DNA sequences',
            'The study of dominant and recessive gene inheritance',
            'The study of chromosomal disorders and their effects',
        ],
        correctIndex: 0,
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
            'Signal detection',
            'Subliminal perception',
            'Change blindness',
        ],
        correctIndex: 3,
        explanation:
            'Change blindness illustrates how selective an individual\'s attention can be — we often do not notice large changes in an environment because we fail to pay attention.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-20',
        courseId: 'intro-psychology',
        question: 'What is the difference between controlled and automatic processing?',
        options: [
            'Controlled processing requires concentration; automatic processing occurs with little conscious effort',
            'Controlled processing is unconscious; automatic processing requires concentration',
            'Both require equal amounts of conscious effort',
            'Automatic processing only occurs during sleep',
        ],
        correctIndex: 0,
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
            'Dreams are the mind\'s attempt to make sense of random brain activity during sleep',
            'Dreams reveal repressed unconscious wishes and desires',
            'Dreams serve to consolidate memories from the previous day',
            'Dreams are caused by external stimuli reaching the sleeping brain',
        ],
        correctIndex: 0,
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
            'Hallucinogens',
            'Opioids',
            'Depressants',
        ],
        correctIndex: 3,
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
            'Sensation is the detection of physical stimuli; perception is the conscious experience of those stimuli',
            'Sensation is conscious experience; perception is the detection of physical stimuli',
            'They are the same process with different names',
            'Sensation requires attention; perception does not',
        ],
        correctIndex: 0,
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
            'The conditioned stimulus is presented without the unconditioned stimulus until the conditioned response stops',
            'The unconditioned stimulus is permanently forgotten',
            'A new conditioned stimulus replaces the original one',
            'The organism becomes habituated to the unconditioned stimulus',
        ],
        correctIndex: 0,
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
            'Variable ratio schedules (reinforcement after an unpredictable number of responses) are most resistant to extinction. This is why gambling is so addictive — the reward comes after an unpredictable number of responses, making it hard to detect that reinforcement has stopped.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-36',
        courseId: 'intro-psychology',
        question: 'In operant conditioning, what is "shaping"?',
        options: [
            'Punishing incorrect behaviors until only the correct behavior remains',
            'Eliminating unwanted behaviors through extinction',
            'Conditioning an animal to respond to a specific stimulus',
            'Reinforcing successive approximations of a desired behavior',
        ],
        correctIndex: 3,
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
            'Explicit memory requires conscious effort to declare; implicit memory is expressed without conscious awareness',
            'Explicit memory is short-term; implicit memory is long-term',
            'Explicit memory stores facts; implicit memory stores emotions',
            'There is no meaningful difference between them',
        ],
        correctIndex: 0,
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
            'When old information interferes with the ability to learn new information',
            'When new information interferes with the ability to remember old information',
            'When two memories are combined into a single false memory',
            'When retrieval of one memory blocks retrieval of all related memories',
        ],
        correctIndex: 0,
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
            'By randomly assigning them to the most recent category encountered',
            'By checking if they meet a strict set of defining features',
            'By comparing them to the most typical example (prototype) of the category',
        ],
        correctIndex: 3,
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
    {
        id: 'quiz-psy-51',
        courseId: 'intro-psychology',
        question: 'Which method of fixing belief is considered most reliable because it is empirical and self-correcting?',
        options: [
            'Personal experience and intuition',
            'Appeal to authority',
            'A priori reasoning from first principles',
            'The scientific method',
        ],
        correctIndex: 3,
        explanation:
            'The scientific method is the most reliable way to fix beliefs because it is empirical (based on observation) and self-correcting (built-in error detection through replication and peer review).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-52',
        courseId: 'intro-psychology',
        question: 'A researcher claims that "therapy reduces anxiety symptoms." What type of claim is this?',
        options: [
            'A frequency claim',
            'An association claim',
            'A causal claim',
            'A descriptive claim',
        ],
        correctIndex: 2,
        explanation:
            'This is a causal claim because it asserts that one variable (therapy) causes a change in another (anxiety symptoms). Causal claims require experimental evidence with random assignment.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-53',
        courseId: 'intro-psychology',
        question: 'In an experiment, the variable that is manipulated by the researcher is called the:',
        options: [
            'Dependent variable',
            'Confounding variable',
            'Control variable',
            'Independent variable',
        ],
        correctIndex: 3,
        explanation:
            'The independent variable (IV) is manipulated by the researcher. The dependent variable (DV) is the measured outcome. Confounding variables are uncontrolled alternatives, and control variables are held constant.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-54',
        courseId: 'intro-psychology',
        question: 'Which type of validity asks whether findings can be generalized to other people, settings, and times?',
        options: [
            'Construct validity',
            'Internal validity',
            'External validity',
            'Statistical validity',
        ],
        correctIndex: 2,
        explanation:
            'External validity concerns whether results generalize beyond the specific study. Construct validity asks if we measured what we claimed. Internal validity asks if causal conclusions are justified.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-55',
        courseId: 'intro-psychology',
        question: 'Which type of validity is most relevant when evaluating whether an experiment supports a causal claim?',
        options: [
            'External validity',
            'Statistical validity',
            'Internal validity',
            'Construct validity',
        ],
        correctIndex: 2,
        explanation:
            'Internal validity is the confidence that changes in the DV are truly caused by the IV, not confounds. Random assignment and control groups increase internal validity.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-56',
        courseId: 'intro-psychology',
        question: 'A correlation of r = -0.85 between two variables indicates:',
        options: [
            'A weak negative relationship',
            'A strong positive relationship',
            'No meaningful relationship',
            'A strong negative relationship',
        ],
        correctIndex: 3,
        explanation:
            'The sign indicates direction (negative = inverse relationship). The absolute value indicates strength (0.85 is close to 1.00 = strong). Negative correlations are not weaker than positive ones.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-57',
        courseId: 'intro-psychology',
        question: 'Ice cream sales and drowning rates are positively correlated. A researcher concludes eating ice cream causes drowning. What flaw is this?',
        options: [
            'The directionality problem',
            'The third variable problem: hot weather likely causes both',
            'The sample size is too small',
            'The correlation coefficient must be negative',
        ],
        correctIndex: 1,
        explanation:
            'This is the third variable problem: an unmeasured variable (hot weather) causes both. Correlation does not imply causation because of both the directionality problem and the third variable problem.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-58',
        courseId: 'intro-psychology',
        question: 'What are the three criteria for establishing a causal claim?',
        options: [
            'Reliability, validity, and generalizability',
            'Covariance, temporal precedence, and internal validity (ruling out confounds)',
            'Large sample size, random sampling, and statistical significance',
            'Replication, peer review, and operational definitions',
        ],
        correctIndex: 1,
        explanation:
            'The three criteria are: (1) covariance — X and Y must be related; (2) temporal precedence — cause before effect; (3) internal validity — alternative explanations ruled out. Only true experiments satisfy all three.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-psy-59',
        courseId: 'intro-psychology',
        question: 'In a between-subjects design, each participant experiences:',
        options: [
            'All levels of the independent variable',
            'Only one level of the independent variable',
            'The baseline phase followed by the treatment phase',
            'Both the control and experimental conditions',
        ],
        correctIndex: 1,
        explanation:
            'In a between-subjects design, each participant is assigned to only one condition. This eliminates order effects but introduces the risk of pre-existing group differences, addressed by random assignment.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-60',
        courseId: 'intro-psychology',
        question: 'What is the main advantage of a within-subjects design?',
        options: [
            'Each participant serves as their own control, eliminating individual differences between groups',
            'It prevents participants from being influenced by previous conditions',
            'It allows smaller independent variables',
            'It increases external validity',
        ],
        correctIndex: 0,
        explanation:
            'In a within-subjects design, each participant experiences all conditions, serving as their own control. This eliminates individual differences and increases statistical power. The main disadvantage is order effects.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-61',
        courseId: 'intro-psychology',
        question: 'An experiment uses a 3 x 2 factorial design. How many conditions does it have?',
        options: [
            '3',
            '5',
            '6',
            '8',
        ],
        correctIndex: 2,
        explanation:
            'In a factorial design, total conditions = levels of Factor A x levels of Factor B = 3 x 2 = 6. Every level of each factor is combined with every level of the other.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-62',
        courseId: 'intro-psychology',
        question: 'In a factorial design, an interaction effect means that:',
        options: [
            'Both independent variables have significant main effects',
            'The effect of one IV depends on the level of the other IV',
            'The dependent variable does not change across conditions',
            'The two independent variables are confounded',
        ],
        correctIndex: 1,
        explanation:
            'An interaction occurs when the effect of one factor depends on the level of another. For example, a drug might improve performance in young adults but not older adults.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-63',
        courseId: 'intro-psychology',
        question: 'A disadvantage of quasi-experimental designs compared to true experiments is:',
        options: [
            'They cannot measure dependent variables',
            'They have lower internal validity because random assignment is not possible',
            'They can only be used with animal subjects',
            'They require larger sample sizes',
        ],
        correctIndex: 1,
        explanation:
            'Quasi-experiments select rather than manipulate the IV, so random assignment is impossible. This compromises internal validity because pre-existing group differences cannot be ruled out.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-64',
        courseId: 'intro-psychology',
        question: 'Which scale of measurement has equal intervals AND a true zero point?',
        options: [
            'Nominal scale',
            'Ordinal scale',
            'Interval scale',
            'Ratio scale',
        ],
        correctIndex: 3,
        explanation:
            'A ratio scale has equal intervals and a meaningful true zero (e.g., weight, reaction time). An interval scale has equal intervals but no true zero (e.g., Celsius temperature, IQ scores).',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-65',
        courseId: 'intro-psychology',
        question: 'What distinguishes genotype from phenotype?',
        options: [
            'Genotype is observable; phenotype is genetic code',
            'Genotype is the genetic constitution; phenotype is the set of observable characteristics',
            'Genotype refers to dominant genes only',
            'Genotype changes throughout life; phenotype is fixed at birth',
        ],
        correctIndex: 1,
        explanation:
            'Genotype refers to the genetic constitution (DNA sequence), while phenotype refers to observable characteristics resulting from the interaction of genotype with environment.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-66',
        courseId: 'intro-psychology',
        question: 'Which type of photoreceptors are responsible for color vision and fine detail?',
        options: [
            'Rods',
            'Cones',
            'Ganglion cells',
            'Bipolar cells',
        ],
        correctIndex: 1,
        explanation:
            'Cones handle color vision and fine detail in bright light. There are three types (short, medium, long wavelength). Rods handle dim-light and peripheral vision but do not detect color.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-67',
        courseId: 'intro-psychology',
        question: 'A child sees the same toy repeatedly and gradually loses interest. This is an example of:',
        options: [
            'Extinction',
            'Sensitization',
            'Stimulus generalization',
            'Habituation',
        ],
        correctIndex: 3,
        explanation:
            'Habituation is decreased response to a repeated stimulus that provides no new information. It is distinct from extinction (conditioned stimuli) and sensitization (increased response in threatening contexts).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-68',
        courseId: 'intro-psychology',
        question: 'The serial position effect predicts you are most likely to remember:',
        options: [
            'Words in the middle of a list',
            'Words at the beginning and end of a list',
            'Only the last few words',
            'Words that are emotionally neutral',
        ],
        correctIndex: 1,
        explanation:
            'The serial position effect shows superior recall for items at the beginning (primacy effect, transferred to LTM) and end (recency effect, still in working memory). Middle items are recalled least.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-69',
        courseId: 'intro-psychology',
        question: 'Max knows one friendly New Zealander and concludes all New Zealanders are friendly. This judgment is based on:',
        options: [
            'The representativeness heuristic',
            'The availability heuristic',
            'Framing effects',
            'Confirmation bias',
        ],
        correctIndex: 0,
        explanation:
            'The representativeness heuristic involves judging a category based on similarity to a prototype or single example. The availability heuristic involves judging likelihood by how easily examples come to mind.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-70',
        courseId: 'intro-psychology',
        question: 'A measure that consistently produces the same results but does not measure what it claims to has:',
        options: [
            'High reliability and high validity',
            'High reliability but low validity',
            'Low reliability and high validity',
            'Low reliability and low validity',
        ],
        correctIndex: 1,
        explanation:
            'Reliability is consistency; validity is accuracy. A measure can be reliable but not valid (consistent but measuring the wrong thing). Reliability is necessary but not sufficient for validity.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-71',
        courseId: 'intro-psychology',
        question: 'What is sensory adaptation?',
        options: [
            'Detecting stimuli below the absolute threshold',
            'Sensory receptors stop responding to an unchanging stimulus',
            'The brain reorganizing after sensory deprivation',
            'Increased sensitivity after repeated exposure',
        ],
        correctIndex: 1,
        explanation:
            'Sensory adaptation occurs when receptors become less responsive to an unchanging stimulus over time (e.g., not noticing clothes on your skin). This allows focus on new or changing stimuli.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-psy-72',
        courseId: 'intro-psychology',
        question: 'A researcher measures "stress" by recording cortisol levels. Cortisol level is best described as:',
        options: [
            'The conceptual variable',
            'The operational definition of stress',
            'The dependent variable only',
            'A confounding variable',
        ],
        correctIndex: 1,
        explanation:
            'An operational definition specifies the concrete, measurable way a conceptual variable is assessed. "Stress" is the abstract concept; "cortisol level" is the operational definition that makes it measurable.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-73',
        courseId: 'intro-psychology',
        question: 'In a reversal design (ABAB), removing and reintroducing the treatment demonstrates:',
        options: [
            'That the sample size is sufficient',
            'That behavior changes are caused by the treatment rather than external factors',
            'That participants remain blind to the condition',
            'That individual differences are eliminated',
        ],
        correctIndex: 1,
        explanation:
            'In ABAB designs, if behavior changes with treatment and returns to baseline without it, this strengthens the causal claim. The effect is demonstrated twice, increasing confidence.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-psy-74',
        courseId: 'intro-psychology',
        question: 'Variability within a species is best described as:',
        options: [
            'An unwanted by-product of genetic mutation',
            'An essential condition for natural selection',
            'A barrier to successful reproduction',
            'A result of environmental damage to DNA',
        ],
        correctIndex: 1,
        explanation:
            'Variability is essential for natural selection — without heritable variation, there would be no differences for selection to act upon. Variation from random mutations provides raw material for adaptation.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-psy-75',
        courseId: 'intro-psychology',
        question: 'In shadowing, a participant repeats back:',
        options: [
            'Text they are reading aloud',
            'Words heard in one ear while ignoring the other ear',
            'Sentences from a written questionnaire',
            'Their own internal thoughts during meditation',
        ],
        correctIndex: 1,
        explanation:
            'Shadowing is a selective attention task where participants repeat an auditory message in one ear while ignoring a different message in the other ear, demonstrating the limits of attention.',
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
        difficulty: 'medium'
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
        difficulty: 'medium'
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
        difficulty: 'medium'
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
        difficulty: 'medium'
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
        difficulty: 'medium'
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
    {
        id: 'quiz-is-51',
        courseId: 'intelligent-systems',
        question: 'Given a set S = {a, b, c}, how many elements does its power set contain?',
        options: ['3', '6', '8', '9'],
        correctIndex: 2,
        explanation:
            'The power set of a set with n elements contains 2^n subsets. Since |S| = 3, |P(S)| = 2^3 = 8.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-is-52',
        courseId: 'intelligent-systems',
        question: 'In an adjacency matrix for an undirected graph, which property must always hold?',
        options: [
            'The matrix is upper triangular',
            'The matrix is symmetric',
            'All diagonal entries must be 1',
            'The sum of each row equals the total number of vertices',
        ],
        correctIndex: 1,
        explanation:
            'In an undirected graph, an edge between vertex i and j means both (i,j)=1 and (j,i)=1, making the matrix symmetric.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-is-53',
        courseId: 'intelligent-systems',
        question: 'BFS uses which data structure for its frontier, and in what order does it expand nodes?',
        options: [
            'A LIFO stack; most recently added first',
            'A priority queue; lowest heuristic first',
            'A FIFO queue; earliest added first, level by level',
            'A hash set; random order',
        ],
        correctIndex: 2,
        explanation:
            'BFS uses a FIFO queue. The first node added is the first expanded, ensuring all nodes at depth d are processed before depth d+1.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-is-54',
        courseId: 'intelligent-systems',
        question: 'If A* search uses h(n) = 0 for all nodes, which algorithm does it become?',
        options: [
            'Depth-First Search',
            'Greedy Best-First Search',
            'Uniform Cost Search',
            'Hill Climbing',
        ],
        correctIndex: 2,
        explanation:
            'When h(n) = 0, f(n) = g(n) + 0 = g(n). A* then expands by lowest path cost, which is Uniform Cost Search.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-is-55',
        courseId: 'intelligent-systems',
        question: 'In a Minimax tree, the root MAX node has two MIN children. Left MIN has terminals 3 and 5. Right MIN has terminals 2 and 8. What is the root value?',
        options: ['2', '3', '5', '8'],
        correctIndex: 1,
        explanation:
            'Left MIN picks min(3,5)=3. Right MIN picks min(2,8)=2. Root MAX picks max(3,2)=3.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-is-56',
        courseId: 'intelligent-systems',
        question: 'What is the correct CNF conversion of A → B?',
        options: [
            'A ∧ B',
            '¬A ∨ B',
            'A ∨ ¬B',
            '¬A ∧ ¬B',
        ],
        correctIndex: 1,
        explanation:
            'The standard equivalence: A → B ≡ ¬A ∨ B. This is already a single clause in CNF.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-is-57',
        courseId: 'intelligent-systems',
        question: 'In DPLL, what happens when a unit clause is encountered?',
        options: [
            'The clause is removed and ignored',
            'The algorithm backtracks',
            'The literal must be set to make the clause true (unit propagation)',
            'A new variable is introduced',
        ],
        correctIndex: 2,
        explanation:
            'Unit propagation: when a clause has one unassigned literal, that literal must be set to true to satisfy the clause. This forced assignment can cascade.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-is-58',
        courseId: 'intelligent-systems',
        question: 'Forward chaining in propositional logic:',
        options: [
            'Starts from the goal and works backward',
            'Starts from known facts and repeatedly applies rules until the query is derived',
            'Evaluates all possible truth assignments',
            'Converts KB to CNF and applies DPLL',
        ],
        correctIndex: 1,
        explanation:
            'Forward chaining is data-driven: it begins with known facts, applies inference rules (like Modus Ponens), and continues until the query is found or no new facts arise.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-is-59',
        courseId: 'intelligent-systems',
        question: 'In fuzzy logic, if v(P) = 0.7 and v(Q) = 0.4, what is v(P ∧ Q)?',
        options: ['0.7', '0.4', '0.3', '1.1'],
        correctIndex: 1,
        explanation:
            'In fuzzy logic, conjunction (AND) is the minimum: v(P ∧ Q) = min(0.7, 0.4) = 0.4.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-is-60',
        courseId: 'intelligent-systems',
        question: 'What is the key difference between vagueness and uncertainty in AI?',
        options: [
            'Vagueness deals with imprecise concept boundaries; uncertainty deals with lack of knowledge about outcomes',
            'Vagueness is modeled by Bayesian networks; uncertainty by fuzzy logic',
            'Vagueness applies only to numbers; uncertainty to categories',
            'They are interchangeable terms',
        ],
        correctIndex: 0,
        explanation:
            'Vagueness arises from imprecise semantic boundaries (handled by fuzzy logic), while uncertainty arises from incomplete knowledge (handled by probability theory).',
        difficulty: 'medium',
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
        difficulty: 'hard',
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
        difficulty: 'hard',
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
            'The Mental operator (M) in KLM represents the time for mental preparation before an action and is estimated at 1.35 seconds. Other operator times: K (keystroke) = 0.12-1.20s depending on typing skill, P (pointing) = 1.10s, H (homing) = 0.40s, B (button press) = 0.10s.',
        difficulty: 'hard',
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
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-51',
        courseId: 'human-computer-interaction',
        question: 'In an eye-tracking typing system, the eye functions as:',
        options: [
            'Input only (reading the screen)',
            'Output only (controlling the cursor)',
            'Both input and output (perceiving the screen and controlling cursor position)',
            'Neither input nor output',
        ],
        correctIndex: 2,
        explanation:
            'The eye serves dual roles: as a sensor (perceiving screen content) and as a responder (controlling cursor through gaze direction). 35% of students incorrectly chose "input only" on the exam.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-52',
        courseId: 'human-computer-interaction',
        question: 'According to Fitts\' Law, which menu type allows the fastest target acquisition?',
        options: [
            'Linear (vertical) menu',
            'Rectangular (grid) menu',
            'Pie (radial) menu',
            'All menu types are equally fast',
        ],
        correctIndex: 2,
        explanation:
            'Pie menus are fastest because items surround the cursor, minimizing amplitude (A) while maximizing target width (W) through wedge-shaped regions. Ranking: pie > rectangular > linear.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-53',
        courseId: 'human-computer-interaction',
        question: 'What distinguishes an isotonic from an isometric input device?',
        options: [
            'Isotonic devices are wireless; isometric require a cable',
            'Isotonic devices move freely; isometric sense force without physical movement',
            'Isotonic use absolute positioning; isometric use relative',
            'Isotonic are for 2D; isometric for 3D',
        ],
        correctIndex: 1,
        explanation:
            'Isotonic devices (e.g., mouse) move freely through space. Isometric devices (e.g., TrackPoint) sense force direction and magnitude without physical movement.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-54',
        courseId: 'human-computer-interaction',
        question: 'Why do hover effects not work on standard touchscreens?',
        options: [
            'Touchscreens lack processing power for hover animations',
            'Touchscreens skip State 1 (tracking without contact) — they only have State 0 and State 2',
            'The HTML standard does not support hover on mobile',
            'Touchscreens use absolute positioning incompatible with hover',
        ],
        correctIndex: 1,
        explanation:
            'In Buxton\'s three-state model, touchscreens are 2-state devices with only State 0 (not touching) and State 2 (touching). State 1 (tracking without contact, needed for hover) is skipped.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-hci-55',
        courseId: 'human-computer-interaction',
        question: 'What is the SUS (System Usability Scale)?',
        options: [
            'A method for measuring display dimensions',
            'A 10-item questionnaire producing a usability score from 0 to 100',
            'A software tool for running A/B tests',
            'A scale measuring system response time',
        ],
        correctIndex: 1,
        explanation:
            'The SUS is a standardized 10-item questionnaire yielding a composite score between 0 and 100, providing a quick and reliable measure of perceived usability.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-hci-56',
        courseId: 'human-computer-interaction',
        question: 'In a normal distribution, approximately what percentage of data falls within ±2 standard deviations?',
        options: ['68%', '85%', '95%', '99%'],
        correctIndex: 2,
        explanation:
            'In a normal distribution: ~68% within ±1 SD, ~95% within ±2 SD, ~99.7% within ±3 SD. The 95% rule relates to the commonly used alpha = 0.05 confidence level.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-57',
        courseId: 'human-computer-interaction',
        question: 'What is a "mode error" in interaction design?',
        options: [
            'Choosing the wrong input device for a task',
            'Performing an action correct for one mode but the system is in a different mode',
            'An error in the statistical mode of collected data',
            'An error from unexpected light/dark mode switching',
        ],
        correctIndex: 1,
        explanation:
            'A mode error occurs when the same input produces different outputs depending on the current mode, and the user acts as if in the wrong mode. Good design minimizes modes or provides clear mode indicators.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-hci-58',
        courseId: 'human-computer-interaction',
        question: 'After a significant one-way ANOVA with four groups, what should you do next?',
        options: [
            'Conclude all groups differ from each other',
            'Run a post hoc test (e.g., Bonferroni or Tukey HSD) to find which pairs differ',
            'Re-run ANOVA with only two groups at a time',
            'Increase sample size and repeat the experiment',
        ],
        correctIndex: 1,
        explanation:
            'A significant ANOVA says at least one group mean differs, but not which pairs. Post hoc tests perform pairwise comparisons while correcting for multiple comparisons.',
        difficulty: 'medium',
    },

    // ========== Project Conversational Agents ==========
    // --- Git/GitHub (~3 Qs) ---
    {
        id: 'quiz-pca-1',
        courseId: 'project-conversational-agents',
        question: 'What does `git checkout -b feature-nlu` do?',
        options: [
            'Deletes the branch named feature-nlu',
            'Creates a new branch named feature-nlu and switches to it',
            'Merges the feature-nlu branch into main',
            'Pushes the feature-nlu branch to the remote',
        ],
        correctIndex: 1,
        explanation:
            'The `-b` flag creates a new branch and `checkout` switches to it. This is equivalent to running `git branch feature-nlu` followed by `git checkout feature-nlu`. It is the standard way to start working on a new feature.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-2',
        courseId: 'project-conversational-agents',
        question: 'A merge conflict occurs when:',
        options: [
            'Two team members push to different branches',
            'The same lines in a file have been modified differently in two branches being merged',
            'A .gitignore file is missing from the repository',
            'The remote repository is ahead of the local by one commit',
        ],
        correctIndex: 1,
        explanation:
            'Merge conflicts happen when Git cannot automatically reconcile changes because the same lines were modified differently in both branches. The developer must manually resolve conflicts by editing the affected files, then staging and committing the resolution.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-3',
        courseId: 'project-conversational-agents',
        question: 'Which files should typically be added to .gitignore in a Python ML project?',
        options: [
            'Source code files (.py) and documentation (.md)',
            'Model checkpoints (.pt), virtual environments (venv/), and IDE settings (.idea/)',
            'Requirements files (requirements.txt) and README.md',
            'All test files and configuration files',
        ],
        correctIndex: 1,
        explanation:
            'Large binary files (model checkpoints), environment-specific directories (venv/, __pycache__/), IDE configurations (.idea/, .vscode/), and sensitive files (.env) should be in .gitignore. Source code, documentation, and requirements files should be tracked.',
        difficulty: 'easy',
    },
    // --- ML Basics (~4 Qs) ---
    {
        id: 'quiz-pca-4',
        courseId: 'project-conversational-agents',
        question: 'In a supervised learning pipeline, what is the purpose of the training/validation/test split?',
        options: [
            'Training data trains the model; validation tunes hyperparameters; test provides final unbiased evaluation',
            'All three sets are used interchangeably for training',
            'Validation is used to train; test is used to tune; training is used for final evaluation',
            'Only the training set is necessary; validation and test sets are optional',
        ],
        correctIndex: 0,
        explanation:
            'The training set optimizes model parameters. The validation set tunes hyperparameters and prevents overfitting during development. The test set provides a final, unbiased evaluation of model performance on unseen data. Using the test set for tuning leads to optimistic estimates.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-5',
        courseId: 'project-conversational-agents',
        question: 'A model with high training accuracy but low test accuracy is most likely suffering from:',
        options: ['Underfitting', 'Overfitting', 'Data corruption', 'Feature scaling issues'],
        correctIndex: 1,
        explanation:
            'High training accuracy + low test accuracy = overfitting. The model has memorized the training data (including noise) instead of learning generalizable patterns. Remedies include more data, regularization, dropout, data augmentation, or a simpler model.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-6',
        courseId: 'project-conversational-agents',
        question: 'Which evaluation metric is the harmonic mean of precision and recall?',
        options: ['Accuracy', 'AUC-ROC', 'F1-Score', 'Mean Squared Error'],
        correctIndex: 2,
        explanation:
            'F1-Score = 2 * (precision * recall) / (precision + recall). It balances precision (of predicted positives, how many are correct) and recall (of actual positives, how many are found). It is especially useful for imbalanced datasets where accuracy can be misleading.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-7',
        courseId: 'project-conversational-agents',
        question: 'In the context of NLU for the recipe agent, what is "classification"?',
        options: [
            'Sorting recipes alphabetically by name',
            'Assigning a user utterance to one of several predefined intent categories',
            'Splitting the dataset into training and test sets',
            'Converting audio signals to text',
        ],
        correctIndex: 1,
        explanation:
            'Classification maps an input (user utterance) to one of several predefined categories (intents like addFilter, farewell, deny). The NLU model performs intent classification to understand what the user wants to do, enabling the dialogue manager to respond appropriately.',
        difficulty: 'easy',
    },
    // --- Deep Neural Networks (~4 Qs) ---
    {
        id: 'quiz-pca-8',
        courseId: 'project-conversational-agents',
        question: 'In a neural network, what does backpropagation compute?',
        options: [
            'The forward pass output for each layer',
            'The gradients of the loss function with respect to each weight',
            'The optimal learning rate',
            'The number of epochs needed for convergence',
        ],
        correctIndex: 1,
        explanation:
            'Backpropagation uses the chain rule to compute the gradient of the loss with respect to each weight in the network. These gradients tell the optimizer (e.g., Adam, SGD) how to adjust weights to minimize the loss function.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-9',
        courseId: 'project-conversational-agents',
        question: 'What is the role of a loss function in training a neural network?',
        options: [
            'It determines the architecture of the network',
            'It measures the difference between predicted and ground truth labels, guiding weight updates',
            'It selects which data samples to use for training',
            'It converts text to numerical representations',
        ],
        correctIndex: 1,
        explanation:
            'The loss function quantifies how wrong the model predictions are compared to the ground truth. During training, the optimizer minimizes this loss by adjusting weights. Common loss functions include CrossEntropyLoss (classification) and MSELoss (regression).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-10',
        courseId: 'project-conversational-agents',
        question: 'The Transformer architecture (Vaswani et al., 2017) introduced which key mechanism?',
        options: [
            'Recurrent connections between layers',
            'Convolutional filters for sequence processing',
            'Self-attention, allowing the model to relate all tokens simultaneously',
            'Decision tree ensembles for classification',
        ],
        correctIndex: 2,
        explanation:
            'The Transformer\'s key innovation is self-attention, which computes relationships between all tokens in a sequence simultaneously using Query, Key, and Value matrices. This enables parallelism and long-range dependencies, forming the basis for BERT, GPT, and Whisper.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-11',
        courseId: 'project-conversational-agents',
        question: 'Which category of pretrained Transformer is BERT?',
        options: [
            'Decoder-only (like GPT)',
            'Encoder-only (bidirectional)',
            'Encoder-Decoder (like T5)',
            'Convolutional Neural Network',
        ],
        correctIndex: 1,
        explanation:
            'BERT is an encoder-only Transformer that processes the entire input bidirectionally. This makes it ideal for understanding tasks (classification, NLU). Decoder-only models (GPT) are for generation. Encoder-decoder models (T5, Whisper) handle sequence-to-sequence tasks like translation and ASR.',
        difficulty: 'medium',
    },
    // --- Dialogue Systems Pipeline (~5 Qs) ---
    {
        id: 'quiz-pca-12',
        courseId: 'project-conversational-agents',
        question: 'What is the correct order of components in the dialogue system pipeline?',
        options: [
            'NLU -> ASR -> DM -> TTS -> NLG',
            'ASR -> NLU -> DM -> NLG -> TTS',
            'TTS -> ASR -> NLG -> NLU -> DM',
            'DM -> NLU -> ASR -> NLG -> TTS',
        ],
        correctIndex: 1,
        explanation:
            'The pipeline processes user speech as: ASR (speech to text) -> NLU (text to intent+slots) -> DM (decides next action) -> NLG (generates response text) -> TTS (text to speech). Each component transforms the signal for the next stage.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-13',
        courseId: 'project-conversational-agents',
        question: 'What does the ASR component do in the dialogue pipeline?',
        options: [
            'Classifies user intent from text',
            'Converts spoken audio into text (speech-to-text)',
            'Generates natural language responses',
            'Manages the dialogue state and decides next actions',
        ],
        correctIndex: 1,
        explanation:
            'ASR (Automatic Speech Recognition) converts the user\'s spoken audio into text. In this project, Whisper (OpenAI) or Google STT can be used. The ASR output is then passed to the NLU component for intent classification and slot filling.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-14',
        courseId: 'project-conversational-agents',
        question: 'What is Whisper (OpenAI)?',
        options: [
            'A text-to-speech system using WaveNet',
            'An encoder-decoder Transformer trained on 680,000 hours of audio for speech recognition',
            'A rule-based grammar system for intent matching',
            'A Bootstrap component library for web interfaces',
        ],
        correctIndex: 1,
        explanation:
            'Whisper is an encoder-decoder Transformer ASR model trained on 680,000 hours of supervised audio data. It takes log-Mel spectrograms as input and outputs text transcripts. It is integrated into the SIC-v2 pipeline used in the project.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-15',
        courseId: 'project-conversational-agents',
        question: 'In the conversational agent architecture, what role does the Dialogue Manager (DM) play?',
        options: [
            'It converts audio to text',
            'It decides the next action based on the current dialogue state, beliefs, and user intent',
            'It generates the final speech output',
            'It trains the NLU model on new data',
        ],
        correctIndex: 1,
        explanation:
            'The DM receives the parsed intent and entities from the NLU, maintains the dialogue state, and decides what action to take next (e.g., ask a clarifying question, provide a recommendation). In this project, the DM is implemented as a MARBEL agent using Prolog.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-16',
        courseId: 'project-conversational-agents',
        question: 'In Dialogflow, what happens when no intent meets the ML classification threshold?',
        options: [
            'The system crashes',
            'The fallback intent is triggered',
            'The highest-scoring intent is returned regardless',
            'The utterance is silently ignored',
        ],
        correctIndex: 1,
        explanation:
            'When no intent\'s confidence score meets the threshold (default 0.3), Dialogflow triggers the fallback intent. This allows the agent to handle unrecognized inputs gracefully, e.g., by asking the user to rephrase.',
        difficulty: 'medium',
    },
    // --- NLU with BERT (~5 Qs) ---
    {
        id: 'quiz-pca-17',
        courseId: 'project-conversational-agents',
        question: 'The NLU model in this project performs two tasks simultaneously. What are they?',
        options: [
            'Speech recognition and text-to-speech',
            'Intent classification and slot filling',
            'Sentiment analysis and summarization',
            'Translation and paraphrasing',
        ],
        correctIndex: 1,
        explanation:
            'The BERT-based NLU model jointly performs: (1) intent classification using the [CLS] token representation, and (2) slot filling using per-token hidden states. Both classifiers share the same BERT encoder, making the model efficient.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-18',
        courseId: 'project-conversational-agents',
        question: 'In BIO format for slot labeling, what does the annotation `B-cuisine I-cuisine O O B-mealType` indicate for the input "Italian pasta for a lunch"?',
        options: [
            '"Italian pasta" is a cuisine entity, "lunch" is a mealType entity',
            '"Italian" begins a cuisine entity, "pasta" continues it, "lunch" begins a mealType entity',
            'All words are outside any entity',
            '"Italian" is a mealType, "lunch" is a cuisine',
        ],
        correctIndex: 1,
        explanation:
            'BIO format: B-{slot} marks the beginning of an entity, I-{slot} marks continuation (inside), and O marks words outside any entity. So "Italian" begins a cuisine slot, "pasta" continues it, "for" and "a" are outside, and "lunch" begins a mealType slot.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-19',
        courseId: 'project-conversational-agents',
        question: 'What is the difference between BERT pretraining and fine-tuning?',
        options: [
            'Pretraining uses labeled data; fine-tuning uses unlabeled data',
            'Pretraining learns general language representations from large unlabeled text; fine-tuning adapts the model to a specific downstream task with labeled data',
            'Pretraining trains on images; fine-tuning trains on text',
            'They are the same process applied at different learning rates',
        ],
        correctIndex: 1,
        explanation:
            'Pretraining uses self-supervised tasks (Masked Language Model, Next Sentence Prediction) on large unlabeled corpora to learn general language representations. Fine-tuning then adapts the pretrained model to a specific task (like intent classification) using task-specific labeled data.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-20',
        courseId: 'project-conversational-agents',
        question: 'For intent classification, which part of BERT\'s output is used?',
        options: [
            'The hidden states of all tokens averaged together',
            'The pooled output from the [CLS] token representation',
            'The embedding of the last token only',
            'The attention weights from the first layer',
        ],
        correctIndex: 1,
        explanation:
            'Intent classification uses the pooled output from the [CLS] token, which serves as an aggregate representation of the entire input. This is fed through a linear classification layer that maps to the number of intent classes. Slot filling, by contrast, uses per-token hidden states.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-21',
        courseId: 'project-conversational-agents',
        question: 'Why does the BERT tokenizer sometimes split a single word into multiple subword tokens?',
        options: [
            'To reduce the vocabulary size by handling rare words as combinations of common subwords',
            'Because BERT can only process single-character inputs',
            'To increase the sequence length for better attention scores',
            'Because English words are inherently ambiguous',
        ],
        correctIndex: 0,
        explanation:
            'BERT uses WordPiece tokenization, which splits rare or unknown words into known subword units. This keeps the vocabulary manageable while handling any input text. When words are split, special care is needed to align slot labels with subword tokens during training.',
        difficulty: 'hard',
    },
    // --- Hugging Face (~2 Qs) ---
    {
        id: 'quiz-pca-22',
        courseId: 'project-conversational-agents',
        question: 'In the Hugging Face transformers library, what does `BertModel.from_pretrained("bert-base-uncased")` do?',
        options: [
            'Trains a new BERT model from scratch on the given dataset',
            'Downloads and loads a pretrained BERT model with its learned weights',
            'Creates an empty BERT architecture without any weights',
            'Converts a TensorFlow model to PyTorch format',
        ],
        correctIndex: 1,
        explanation:
            'from_pretrained() downloads the model architecture and pretrained weights from Hugging Face Hub. "bert-base-uncased" specifies the specific model variant (base size, case-insensitive). This allows you to start from learned representations and fine-tune for your task.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-23',
        courseId: 'project-conversational-agents',
        question: 'After modifying the NLU model code in the social-interaction-cloud package, what must you do before the changes take effect?',
        options: [
            'Restart the computer',
            'Reinstall the package using `pip install .`',
            'Clear the browser cache',
            'Delete the __pycache__ directory and restart Python',
        ],
        correctIndex: 1,
        explanation:
            'Since the NLU model is part of the social-interaction-cloud Python package, any code changes require reinstalling via `pip install .` from the package directory. Simply restarting Python is not sufficient because the package is installed, not imported from source.',
        difficulty: 'medium',
    },
    // --- HTML/Bootstrap (~3 Qs) ---
    {
        id: 'quiz-pca-24',
        courseId: 'project-conversational-agents',
        question: 'In Bootstrap, what does the class `col-md-4` mean in a grid layout?',
        options: [
            'The column takes up 4 pixels of width',
            'The column spans 4 out of 12 grid columns on medium-sized screens and larger',
            'The column has a margin of 4 pixels on all sides',
            'The column contains exactly 4 items',
        ],
        correctIndex: 1,
        explanation:
            'Bootstrap uses a 12-column grid system. col-md-4 means the element spans 4/12 (one-third) of the container width on medium screens and larger. On smaller screens, the column may stack vertically. This enables responsive layouts without custom CSS.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-25',
        courseId: 'project-conversational-agents',
        question: 'What is the purpose of the `<meta name="viewport" ...>` tag in the HTML head?',
        options: [
            'It sets the page title in the browser tab',
            'It ensures the page scales correctly on mobile devices (responsive design)',
            'It links to an external CSS stylesheet',
            'It defines the character encoding for the document',
        ],
        correctIndex: 1,
        explanation:
            'The viewport meta tag controls how the page is displayed on mobile devices. Setting width=device-width and initial-scale=1.0 ensures the page adapts to the device screen width rather than rendering at a desktop width and shrinking. It is essential for responsive design.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-26',
        courseId: 'project-conversational-agents',
        question: 'Which Bootstrap component is used to display recipe information as individual visual units with a title, text, and optional image?',
        options: [
            'Modal',
            'Card',
            'Navbar',
            'Progress bar',
        ],
        correctIndex: 1,
        explanation:
            'Bootstrap Cards are flexible content containers with options for headers, footers, images, and body text. In the recipe agent, cards display recipe names, cuisine badges, and duration information. They can be arranged in a responsive grid using row and col-md-* classes.',
        difficulty: 'easy',
    },
    // --- Prolog (~4 Qs) ---
    {
        id: 'quiz-pca-27',
        courseId: 'project-conversational-agents',
        question: 'In Prolog, what does the query `?- member(pasta, [garlic, pasta, tomato]).` return?',
        options: [
            'false',
            'true',
            'pasta',
            'error',
        ],
        correctIndex: 1,
        explanation:
            'member/2 checks if an element is in a list. It matches the head of the list recursively: first checks pasta=garlic (fails), then recurses to [pasta, tomato], checks pasta=pasta (succeeds). So the query returns true.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-pca-28',
        courseId: 'project-conversational-agents',
        question: 'Given the Prolog rule:\n```prolog\nhas_ingredient(Recipe, Ing) :-\n    recipe(Recipe, Ingredients, _),\n    member(Ing, Ingredients).\n```\nWhat does this rule express?',
        options: [
            'A recipe is created from an ingredient',
            'Recipe has ingredient Ing if Recipe has an Ingredients list and Ing is a member of that list',
            'The ingredient replaces the recipe',
            'All recipes must contain at least one ingredient',
        ],
        correctIndex: 1,
        explanation:
            'The rule states: Recipe has_ingredient Ing if there exists a recipe/3 fact where the second argument (Ingredients) is a list, and Ing is a member of that list. The underscore (_) ignores the third argument. This is pattern matching combined with list membership.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-29',
        courseId: 'project-conversational-agents',
        question: 'What is unification in Prolog?',
        options: [
            'Evaluating arithmetic expressions',
            'Making two terms identical by finding appropriate variable substitutions',
            'Combining two Prolog programs into one',
            'Converting Prolog facts to Python dictionaries',
        ],
        correctIndex: 1,
        explanation:
            'Unification is Prolog\'s fundamental operation: two terms unify if they can be made identical through variable substitutions. Variables unify with any term, atoms unify only if identical, and compound terms unify if they have the same functor, arity, and their arguments unify recursively.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-pca-30',
        courseId: 'project-conversational-agents',
        question: 'In Prolog, what happens during backtracking?',
        options: [
            'The program exits with an error',
            'Prolog undoes variable bindings and tries the next alternative clause to satisfy a goal',
            'The knowledge base is permanently modified',
            'All variables are reset to zero',
        ],
        correctIndex: 1,
        explanation:
            'When a goal fails, Prolog backtracks: it undoes the most recent variable bindings and tries the next matching clause for the most recent choice point. This depth-first search with backtracking continues until a solution is found or all alternatives are exhausted.',
        difficulty: 'medium',
    },

    // ========== ML — Machine Learning (VU) ==========
    {
        id: 'quiz-mlvu-1',
        courseId: 'machine-learning',
        question: 'Which of the following contains only unsupervised machine learning methods and tasks?',
        options: [
            'Clustering, Linear regression, and Generative modeling',
            'k-Means, Clustering, and Density estimation',
            'Classification, Clustering, and Expectation-Maximization',
            'Logistic regression, Density estimation, and Clustering',
        ],
        correctIndex: 1,
        explanation:
            'Unsupervised learning involves finding patterns in data without labels. Linear and Logistic regression are supervised because they require targets, while Classification is a supervised task.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-2',
        courseId: 'machine-learning',
        question: 'In machine learning conceptual spaces, which of the following is true regarding the feature space?',
        options: [
            'Every point in the feature space represents a loss function.',
            'Every point in the feature space represents a single feature of an instance.',
            'Every point in the feature space represents a single instance in the dataset.',
            'Every point in the feature space represents a parameter set for a model.',
        ],
        correctIndex: 2,
        explanation:
            'In the feature space, each dimension corresponds to a feature, and each point corresponds to a single instance. The model space is where points represent specific models or parameter configurations.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-3',
        courseId: 'machine-learning',
        question: 'The ALVINN system (1995) used a grayscale camera to predict steering wheel positions. In this setup, what are the features?',
        options: [
            'The pixel values of the camera frames',
            'The different car models used in the system',
            'The individual frames produced by the camera',
            'The specific angles of the steering wheel',
        ],
        correctIndex: 0,
        explanation:
            'The instances are the individual frames (observations), and the features are the specific pixel values used by the classifier to make predictions.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-4',
        courseId: 'machine-learning',
        question: 'What is the relationship between a loss landscape and its gradient at a specific point?',
        options: [
            'The gradient points toward the region where loss is lowest.',
            'The gradient points in the direction where the loss increases the fastest.',
            'The gradient represents the lowest possible value on the loss surface.',
            'The gradient points in the direction where the loss decreases the fastest.',
        ],
        correctIndex: 1,
        explanation:
            'By definition, the gradient points in the direction of the steepest ascent. We subtract the gradient (gradient descent) to move toward lower loss.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-5',
        courseId: 'machine-learning',
        question: 'Under what condition is random search typically preferred over gradient descent?',
        options: [
            'When the model has multiple layers requiring backpropagation.',
            'When the user needs to be certain they have found a global minimum.',
            'When the loss surface is smooth and differentiable.',
            'When the model is not differentiable.',
        ],
        correctIndex: 3,
        explanation:
            'Gradient descent requires calculating derivatives (gradients). If a model is non-differentiable, gradient-based methods cannot be applied, making random search or evolutionary methods necessary.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-6',
        courseId: 'machine-learning',
        question: 'Why is a convex loss surface highly desirable in machine learning optimization?',
        options: [
            'It allows the model to escape local maxima efficiently.',
            'It ensures that there are no local minima other than the global minimum.',
            'It makes the backpropagation algorithm significantly faster.',
            'It guarantees that the gradient is always equal to zero.',
        ],
        correctIndex: 1,
        explanation:
            "Convexity implies that any local minimum is also the global minimum, which simplifies optimization because the solver won't get stuck in suboptimal 'valleys'.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-7',
        courseId: 'machine-learning',
        question: 'A researcher trains a k-NN classifier, trying $k=1$ to $k=20$. They report the best test set accuracy as the final performance estimate. What is the fundamental mistake?',
        options: [
            'The researcher should have used a logarithmic range for k.',
            'The test set should have been larger than the training set.',
            'By reusing the test set to select k, the estimate is likely overfit and inflated.',
            'A grid search is required for k-NN instead of a linear search.',
        ],
        correctIndex: 2,
        explanation:
            "Choosing hyperparameters using the test set 'leaks' information. One should use a validation set for selection and a separate test set for the final, unbiased estimate.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-8',
        courseId: 'machine-learning',
        question: 'In a spam classifier where false negatives and false positives have very different consequences, why might accuracy be a poor metric?',
        options: [
            'Because the problem involves high class imbalance.',
            'Because the problem involves high cost imbalance.',
            'Because the data arrives irregularly in an online setting.',
            'Because accuracy cannot be computed from a confusion matrix.',
        ],
        correctIndex: 1,
        explanation:
            "If deleting a legitimate email (false positive) is much 'more expensive' than missing a spam email, simple accuracy is misleading because it treats all errors as equal.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-9',
        courseId: 'machine-learning',
        question: 'Why did chaining multiple perceptrons fail to create more powerful networks in the 1960s?',
        options: [
            'Early computers lacked the GPU power to calculate outputs.',
            'Chained perceptrons suffered from the vanishing gradient problem.',
            'The perceptron is a linear function, and a composition of linear functions is still linear.',
            'Chaining perceptrons is equivalent to hypothesis boosting, which is impossible.',
        ],
        correctIndex: 2,
        explanation:
            'A network of linear layers without non-linear activations (like ReLU) collapses into a single linear transformation, offering no more representational power than a single layer.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-10',
        courseId: 'machine-learning',
        question: "In a Support Vector Machine (SVM), what defines the 'support vectors'?",
        options: [
            'The weights $w^T$ that multiply the input features.',
            'The points that are allowed to fall inside the margin during training.',
            'The data points from each class that are closest to the decision boundary.',
            'The bias parameter $b$ that shifts the decision boundary.',
        ],
        correctIndex: 2,
        explanation:
            "Support vectors are the critical data points that lie on the edge of the margin. They 'support' the position and orientation of the hyperplane.",
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-11',
        courseId: 'machine-learning',
        question: 'What is the primary difference between lazy and eager execution in deep learning frameworks?',
        options: [
            'Lazy execution builds the graph for each pass; eager execution keeps it static.',
            'Eager execution uses backpropagation; lazy execution uses numeric approximation.',
            'Lazy execution keeps the graph static; eager execution builds it for each forward pass.',
            'Eager execution computes gradients via random search; lazy execution is symbolic.',
        ],
        correctIndex: 2,
        explanation:
            "Static/Lazy execution (like early TensorFlow) compiles the graph once for efficiency. Eager execution (like PyTorch) executes operations immediately as they are called.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-12',
        courseId: 'machine-learning',
        question: 'Why is the ReLU activation function often preferred over Sigmoid for hidden nodes in deep networks?',
        options: [
            "ReLU's derivative is mostly 0 or 1, which helps prevent vanishing gradients.",
            'Sigmoid functions are non-differentiable at the origin.',
            'ReLU causes more vanishing gradients, which stabilizes early training.',
            'Sigmoid functions are incompatible with the gradient descent algorithm.',
        ],
        correctIndex: 0,
        explanation:
            "Sigmoid saturates at 0 and 1, where the gradient is near zero. ReLU stays at 1 for all positive values, allowing gradients to flow more easily through many layers.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-13',
        courseId: 'machine-learning',
        question: 'How do modern machine learning frameworks handle local derivatives of high-dimensional tensors without exhausting memory?',
        options: [
            'They approximate the local derivative using the EM algorithm.',
            'They store only the product of the upstream derivative and the local derivative.',
            'They use random search to avoid computing derivatives entirely.',
            'They compute the product of the downstream derivative and the local derivative.',
        ],
        correctIndex: 1,
        explanation:
            "Instead of storing a massive 3-tensor (Jacobian), they immediately multiply the incoming gradient (upstream) by the local derivative, storing only the resulting vector/matrix.",
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-14',
        courseId: 'machine-learning',
        question: 'Which GAN variant is specifically designed to allow non-deterministic outputs based on input (e.g., colorizing a photo with different possible colors)?',
        options: [
            'Vanilla GAN',
            'CycleGAN',
            'StyleGAN',
            'Conditional GAN',
        ],
        correctIndex: 3,
        explanation:
            "Conditional GANs (cGANs) provide extra information (like a grayscale photo) to both the generator and discriminator, allowing the generator to produce various plausible 'continuations' for that specific input.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-15',
        courseId: 'machine-learning',
        question: "Standard decision trees often split until leaves are 'pure.' What is the default solution to prevent the resulting overfitting?",
        options: [
            'Adding more features to the data to allow for more complex splits.',
            'Using a validation set to prune nodes that do not improve performance.',
            'Removing all features so that the tree becomes a single leaf.',
            'Switching to a linear classifier to ensure a simpler decision boundary.',
        ],
        correctIndex: 1,
        explanation:
            'Pruning involves removing branches that provide little predictive power on unseen data (validation set), which simplifies the model and improves generalization.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-16',
        courseId: 'machine-learning',
        question: 'Why is gradient descent particularly difficult to apply in reinforcement learning?',
        options: [
            'Backpropagation is impossible if the model outputs a probability distribution.',
            'The loss surface is perfectly flat in most reinforcement learning tasks.',
            'There is typically a non-differentiable step between the model output and the reward.',
            'Reinforcement learning requires symbolic computation rather than numeric gradients.',
        ],
        correctIndex: 2,
        explanation:
            "The environment's reward signal is often a 'black box' or a discrete event. Since we cannot differentiate through the environment, we can't use standard backpropagation for the reward directly.",
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-17',
        courseId: 'machine-learning',
        question: 'What is the relationship between cross-entropy $H(p, q)$ and KL divergence $KL(p, q)$?',
        options: [
            'Cross-entropy is KL divergence with the entropy $H(p)$ added back in.',
            'Cross-entropy is the bits wasted by using $p$ as a compressor for $q$.',
            'KL divergence is cross-entropy with the entropy $H(q)$ subtracted.',
            'KL divergence is cross-entropy with the entropy $H(p)$ added.',
        ],
        correctIndex: 0,
        explanation:
            'The formula is $H(p, q) = H(p) + KL(p, q)$. KL divergence measures the \'extra\' bits required beyond the optimal entropy $H(p)$ when using $q$ as the model.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-18',
        courseId: 'machine-learning',
        question: 'In the context of the EM algorithm and VAEs, what does the Evidence Lower Bound (ELBO) represent?',
        options: [
            'It is a bound showing that $p(x|\\theta)$ is always less than the KL divergence.',
            'It shows that $L(q, \\theta)$ is a lower bound on the log-likelihood we wish to maximize.',
            'It is a technique to eliminate expectations that are too expensive to compute.',
            'It is the exact log-likelihood of the data given the model parameters.',
        ],
        correctIndex: 1,
        explanation:
            'Because the true log-likelihood is often intractable, we maximize the ELBO. Since ELBO is a lower bound, increasing it pushes the true log-likelihood upward.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-19',
        courseId: 'machine-learning',
        question: "What makes self-attention a 'set-to-set' operation rather than a 'sequence-to-sequence' operation by default?",
        options: [
            'It cannot handle sequences longer than 512 tokens.',
            "It is permutation equivariant, meaning it doesn't 'see' the order of tokens.",
            'It requires a fixed-length input and produces a fixed-length output.',
            'It uses a weighted sum which only allows information to flow forward.',
        ],
        correctIndex: 1,
        explanation:
            "Standard self-attention treats all inputs equally regardless of position. Shuffling the input shuffles the output identically, proving it doesn't naturally use sequence order without position embeddings.",
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-20',
        courseId: 'machine-learning',
        question: 'In self-attention, the dot product is often scaled by $\\frac{1}{\\sqrt{k}}$. What is $k$?',
        options: [
            'The number of heads in the multi-head attention.',
            'The length of the input sequence.',
            'The dimension of the input embedding vectors.',
            'The number of layers in the transformer block.',
        ],
        correctIndex: 2,
        explanation:
            "Scaling by the square root of the dimension $k$ keeps the dot product values from growing too large, which prevents the softmax from saturating and keeps gradients healthy.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-21',
        courseId: 'machine-learning',
        question: "In the 'dictionary' analogy of attention, what role does the 'Key' play?",
        options: [
            'It is the vector that is ultimately summed to produce the output.',
            'It is the vector used to match against the Query to determine weights.',
            'It is the specific token at the position for which we are computing output.',
            'It is a learned parameter matrix that projects the hidden state.',
        ],
        correctIndex: 1,
        explanation:
            'Queries are matched against Keys to calculate similarity (weights). These weights are then applied to the Values.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-22',
        courseId: 'machine-learning',
        question: 'Why does multi-head attention project the data into a lower dimensionality (e.g., $k/h$) for each head?',
        options: [
            'To ensure that the total number of parameters is similar to single-head attention.',
            'To force the model to learn more complex non-linear relations.',
            'To reduce the sequence length so the model can look further back.',
            'To prevent the vanishing gradient problem in deep transformer stacks.',
        ],
        correctIndex: 0,
        explanation:
            'By splitting the dimension $k$ into $h$ heads of size $k/h$, the total computational cost and parameter count remain roughly the same as one large head, but with more representational diversity.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-23',
        courseId: 'machine-learning',
        question: "What is the primary function of a 'Residual Connection' in a transformer block?",
        options: [
            'To allow gradients to bypass layers during early training.',
            'To normalize the variance of the hidden layers to 1.',
            'To ensure the model is permutation equivariant.',
            'To project the input tokens into a higher-dimensional space.',
        ],
        correctIndex: 0,
        explanation:
            "Residual (skip) connections add the input of a block to its output. This creates a 'short circuit' for gradients, helping training converge in very deep networks.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-24',
        courseId: 'machine-learning',
        question: 'How do position embeddings break the permutation equivariance of self-attention?',
        options: [
            'They sort the tokens based on their importance before processing.',
            'They add a unique vector to each token based on its index in the sequence.',
            'They mask out future tokens so the model can only look backward.',
            'They use a convolution layer to capture local neighborhood structures.',
        ],
        correctIndex: 1,
        explanation:
            "By adding a unique vector to the word embedding based on its position, identical words at different positions now have different vector representations, allowing the model to 'see' the order.",
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-25',
        courseId: 'machine-learning',
        question: 'What is the main bottleneck that makes long sequences difficult for standard transformers?',
        options: [
            'The linear layers in the feed-forward network.',
            'The number of parameters in the embedding layer.',
            'The $l \\times l$ attention weight matrix which grows quadratically.',
            'The vanishing gradients through the residual connections.',
        ],
        correctIndex: 2,
        explanation:
            "Self-attention requires computing weights between every pair of tokens. This $O(l^2)$ complexity means doubling the sequence length quadruples the memory and computation required.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-26',
        courseId: 'machine-learning',
        question: 'Which tokenization method merges common character pairs recursively to find an optimal middle ground between word and character levels?',
        options: [
            'Global Max-pooling',
            'Sub-word tokenization (e.g., Bytepair)',
            'Positional Encoding',
            'One-hot encoding',
        ],
        correctIndex: 1,
        explanation:
            "Sub-word tokenization (like BPE or WordPiece) builds a vocabulary of common chunks, allowing it to handle rare words via smaller pieces while keeping common words as single tokens.",
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-27',
        courseId: 'machine-learning',
        question: "In BERT's pre-training, what is the 'Masked Language Modeling' (MLM) task?",
        options: [
            'Predicting the next token in a sequence given all previous tokens.',
            'Predicting the original identity of tokens that have been corrupted or hidden.',
            'Determining if two sentences were originally adjacent in the corpus.',
            'Translating a sentence from a masked language to a target language.',
        ],
        correctIndex: 1,
        explanation:
            "BERT 'masks' 15% of tokens and tries to predict them. This forces the model to use bidirectional context (both left and right) to understand the sentence structure.",
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-28',
        courseId: 'machine-learning',
        question: "What does it mean for a transformer to be 'causal' in an autoregressive setting?",
        options: [
            'It uses a reward model to align with human values.',
            'It is only allowed to look at current and previous tokens to predict the next one.',
            'It determines the underlying cause-and-effect relationships in the text.',
            'It requires a 1024-dimensional output vector to compute log-loss.',
        ],
        correctIndex: 1,
        explanation:
            "Causal masking sets weights of future tokens to $-\\infty$ (effectively 0 after softmax), ensuring the model doesn't 'cheat' by looking at the word it is supposed to predict.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-29',
        courseId: 'machine-learning',
        question: "In GPT-2, what was the significance of the 'Unicorn' article generated by the model?",
        options: [
            'It proved that the model had achieved human-level sentience.',
            'It demonstrated that the model could maintain long-term coherence over multiple paragraphs.',
            'It showed that the model was immune to producing misinformation.',
            'It was the first time a model successfully used sub-word tokenization.',
        ],
        correctIndex: 1,
        explanation:
            "Unlike previous RNN-based models that forgot context quickly, GPT-2's output remained internally consistent (remembering names and themes) over a long passage.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-30',
        courseId: 'machine-learning',
        question: "What is 'in-context learning' as observed in large models like GPT-3?",
        options: [
            "Finetuning the model's weights on a small task-specific dataset.",
            "Updating the bias parameters $b$ based on the user's current location.",
            'The model recognizing and continuing a pattern of examples provided in the prompt.',
            "Using a search engine plugin to augment the model's internal weights.",
        ],
        correctIndex: 2,
        explanation:
            "GPT-3 can 'learn' a task just by seeing a few examples in the text prompt (few-shot), without any actual updates to its neural network weights via backpropagation.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-31',
        courseId: 'machine-learning',
        question: "The 'Attention is All You Need' paper introduced the original transformer for what specific task?",
        options: [
            'Unsupervised Sentiment Classification',
            'Autoregressive Chatbot Dialogue',
            'Supervised Machine Translation',
            'In-context Logic Puzzles',
        ],
        correctIndex: 2,
        explanation:
            'The original transformer was designed to translate between languages, which is why it originally had both an encoder (for source) and a decoder (for target).',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-32',
        courseId: 'machine-learning',
        question: "In the RLHF process, what is the purpose of the 'Reward Model'?",
        options: [
            'To generate a wide variety of possible responses for the human to rank.',
            'To provide a differentiable approximation of human ranking preferences.',
            'To mask out harmful tokens before they reach the final user interface.',
            'To calculate the cross-entropy loss between the prompt and the completion.',
        ],
        correctIndex: 1,
        explanation:
            'Humans rank outputs, and the reward model learns to mimic those rankings. We then use reinforcement learning to train the main LLM to maximize the score given by this reward model.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-33',
        courseId: 'machine-learning',
        question: "Why does GPT-4 often fail to correctly count letters in a word like 'ketchup' unless specifically prompted?",
        options: [
            "The model's vocabulary is too small to include common condiments.",
            "The word is represented as a single token, so the model doesn't 'see' the letters.",
            'The instruction tuning purposefully degrades performance on simple tasks.',
            'Causal masking prevents the model from looking at the start of the word.',
        ],
        correctIndex: 1,
        explanation:
            "Tokens are chunks of characters. If 'ketchup' is one token, the model only sees an ID (e.g., 11236) and must 'remember' from its training which letters are associated with that ID.",
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-34',
        courseId: 'machine-learning',
        question: "What is the 'Stochastic Parrot' position in the debate over AI intelligence?",
        options: [
            'The belief that LLMs are sentient but hide it to avoid being shut down.',
            'The view that LLMs merely rehash training data without true understanding.',
            'The theory that models learn logic via reinforcement from human feedback.',
            'The idea that the Turing test is the only valid measure of intelligence.',
        ],
        correctIndex: 1,
        explanation:
            "This position argues that because models are trained on so much data, their 'intelligent' output is just a probabilistic collage of things already said by humans.",
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-35',
        courseId: 'machine-learning',
        question: "What is 'Augmentation' in the context of Large Language Models?",
        options: [
            'Increasing the number of parameters from 175B to 1 trillion.',
            'Allowing the model to trigger and use external tools like Python or search engines.',
            'Adding more human annotators to the RLHF pipeline.',
            'Feeding the model the same prompt multiple times to average the results.',
        ],
        correctIndex: 1,
        explanation:
            "Augmentation (or tool use/plugins) lets the model overcome internal limitations (like math or up-to-date facts) by generating commands for external services.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-36',
        courseId: 'machine-learning',
        question: 'In Layer Normalization within a transformer, where is the normalization applied?',
        options: [
            'Across the entire batch for a single feature.',
            'Individually to each vector across its own feature dimensions.',
            'Across all tokens in a sequence for a single head.',
            'Only to the weights of the $K, Q, V$ matrices.',
        ],
        correctIndex: 1,
        explanation:
            'Batch norm normalizes across the batch (samples). Layer norm normalizes the values within a single vector (features), making it more suitable for varying sequence lengths.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-37',
        courseId: 'machine-learning',
        question: "In the equation for self-attention, why is the row-wise softmax applied to $W'$?",
        options: [
            'To ensure that the weights for each output token sum to 1.',
            "To convert the dot products into the model's final output classes.",
            'To prevent the gradients from vanishing during the backward pass.',
            'To project the keys and queries into the same Euclidean space.',
        ],
        correctIndex: 0,
        explanation:
            "Each row of the weight matrix corresponds to one output token's relationship with all input tokens. Softmaxing the row ensures a valid weighted sum (mixture) of inputs.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-38',
        courseId: 'machine-learning',
        question: 'What happens to a simple self-attention layer if we treat the weights $W$ as constant?',
        options: [
            'It becomes a non-linear activation function like Sigmoid.',
            'It becomes a linear operation, providing clean non-vanishing gradients.',
            'It becomes a set of 8 separate heads working in parallel.',
            'It loses the ability to look far back into the sequence.',
        ],
        correctIndex: 1,
        explanation:
            'A weighted sum with constant weights is a linear transformation. The power of self-attention comes from $W$ being a dynamic function of the input, making the whole layer non-linear.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-39',
        courseId: 'machine-learning',
        question: "The concept of 'Emergence' suggests that certain LLM abilities...",
        options: [
            'Are programmed explicitly by researchers using Python scripts.',
            'Appear suddenly only when models reach a massive parameter scale.',
            'Are lost when the model is transitioned from BERT to GPT architecture.',
            'Depend entirely on the choice of sub-word tokenization used.',
        ],
        correctIndex: 1,
        explanation:
            "Emergent properties (like multi-step reasoning) often appear only in models with tens of billions of parameters, showing a 'phase change' in capability.",
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-40',
        courseId: 'machine-learning',
        question: "How did GPT-3 filter 'high-quality' text from a general web crawl for its 800Gb training set?",
        options: [
            'Manual review by an army of human annotators.',
            'Using links that received a certain number of upvotes on Reddit as a baseline.',
            "Training a classifier to distinguish 'high-quality' text from unfiltered data.",
            'Selecting only articles that were written in LaTeX format.',
        ],
        correctIndex: 2,
        explanation:
            'They used a smaller set of known high-quality links (Reddit-sourced) to train a filter, which then processed a much larger, messy web crawl to find similar quality text.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-41',
        courseId: 'machine-learning',
        question: "What is the 'Chain Rule' used for in the context of backpropagation?",
        options: [
            'To sum the losses of multiple different training instances.',
            'To calculate the derivative of a composite function by multiplying local derivatives.',
            'To choose the first feature for a split in a decision tree.',
            'To normalize the input features to have zero mean and unit variance.',
        ],
        correctIndex: 1,
        explanation:
            'Backpropagation is essentially the multivariate chain rule applied to a computation graph, allowing the error to flow from the output back to each parameter.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-42',
        courseId: 'machine-learning',
        question: "In a Naive Bayes classifier, how do we typically handle 'unseen' feature values during training?",
        options: [
            'By removing the instances with unseen values entirely.',
            'By using random search to guess the missing probability.',
            'By adding pseudo-observations (smoothing) to ensure non-zero counts.',
            'By switching to a Support Vector Machine which handles missing data naturally.',
        ],
        correctIndex: 2,
        explanation:
            'Laplace smoothing (adding 1 to all counts) prevents a single zero-probability from zeroing out the entire calculation for a class.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-43',
        courseId: 'machine-learning',
        question: 'Which component of the Transformer block is the ONLY one that propagates information across the time dimension?',
        options: [
            'The Layer Normalization step.',
            'The Feed-forward layer (MLP).',
            'The Self-attention mechanism.',
            'The Residual Connection.',
        ],
        correctIndex: 2,
        explanation:
            "MLP and LayerNorm act on each token vector independently. Only Self-attention looks at other tokens to update the current one's representation.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-44',
        courseId: 'machine-learning',
        question: 'When computing entropy $H(p)$, what is the conventional value for $0 \\cdot \\log_2(0)$?',
        options: [
            'The value is undefined.',
            'The value is set to 1.',
            'The value is set to 0.',
            'The value is set to $-\\infty$.',
        ],
        correctIndex: 2,
        explanation:
            'In information theory, $0 \\log 0$ is defined as 0 because the limit as $x \\to 0$ of $x \\log x$ is 0.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-45',
        courseId: 'machine-learning',
        question: "Why did BERT include a 'Next Sentence Prediction' (NSP) task using the [CLS] token?",
        options: [
            'To train the model to translate between different languages.',
            'To force the model to represent the meaning of the entire sequence in a single token.',
            'To prevent the model from looking ahead in autoregressive tasks.',
            'To ensure the model could handle sequences longer than 512 tokens.',
        ],
        correctIndex: 1,
        explanation:
            'The [CLS] token was designed to capture a sequence-level summary, though later research suggested that MLM alone often produces good enough representations for this.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-46',
        courseId: 'machine-learning',
        question: "In recommender systems, what is 'implicit feedback'?",
        options: [
            'User-provided star ratings (1 to 5).',
            'Associations assumed from user behavior (e.g., clicking or purchasing).',
            'Manually crafted item features provided by experts.',
            'Temporal data indicating the exact time a user logged in.',
        ],
        correctIndex: 1,
        explanation:
            'Explicit feedback is when users give a score. Implicit feedback is when we infer interest from their actions, which is more abundant but noisier.',
        difficulty: 'easy',
    },
    {
        id: 'quiz-mlvu-47',
        courseId: 'machine-learning',
        question: 'In the context of the loss function $L = \\frac{1}{2} \\sum_i (y_i - t_i)^2$, what does the $\\frac{1}{2}$ accomplish?',
        options: [
            'It ensures the loss is always positive.',
            'It cancels out the power of 2 during differentiation.',
            'It represents the assuming a Laplace distribution of errors.',
            'It normalizes the loss over the number of instances.',
        ],
        correctIndex: 1,
        explanation:
            'The derivative of $x^2$ is $2x$. The $\\frac{1}{2}$ is a mathematical convenience so that the derivative $\\frac{\\partial L}{\\partial y}$ is simply $(y - t)$.',
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-48',
        courseId: 'machine-learning',
        question: "What is 'Instruction Tuning' as discovered by Google researchers?",
        options: [
            'Finetuning a model on various tasks described in natural language instructions.',
            'Providing the model with a manual describing how to perform backpropagation.',
            'Limiting the model\'s parameters to 8 billion to optimize inference speed.',
            'Using a rule-based system to force the model to follow logical constraints.',
        ],
        correctIndex: 0,
        explanation:
            "By training on many instructed tasks (e.g., 'summarize this'), the model enters an 'instruction following mode' and generalizes to tasks it hasn't seen before.",
        difficulty: 'medium',
    },
    {
        id: 'quiz-mlvu-49',
        courseId: 'machine-learning',
        question: 'Which of these is NOT a common reason to prefer squaring the error in a loss function?',
        options: [
            "It ensures that positive and negative differences don't cancel out.",
            'It makes large errors count more heavily toward the total loss.',
            'It is a consequence of assuming normally distributed errors in MLE.',
            'It ensures that points closest to the decision boundary weigh most heavily.',
        ],
        correctIndex: 3,
        explanation:
            'Squared error (least squares) weighs large outliers heavily. Focusing on points near the boundary is characteristic of Support Vector Machines or specific log losses.',
        difficulty: 'hard',
    },
    {
        id: 'quiz-mlvu-50',
        courseId: 'machine-learning',
        question: 'How do Variational Autoencoders (VAEs) differ from regular autoencoders?',
        options: [
            'They use a discriminator to distinguish real from fake data.',
            'They produce a distribution in the latent space rather than a single point.',
            'They are purely deterministic and lack a sampling step.',
            'They cannot be trained using standard gradient descent.',
        ],
        correctIndex: 1,
        explanation:
            'VAEs map input to parameters of a distribution (mean and variance). A latent vector is then sampled, and a KL loss ensures the latent space follows a standard normal distribution.',
        difficulty: 'hard',
    },
];

