import type { CourseTip } from '../types';

export const tips: CourseTip[] = [
  // ========== DSA ==========
  {
    id: 'tip-dsa-1',
    courseId: 'data-structures-algorithms-ai',
    content:
      'Always start by trying direct substitution when analyzing time complexity. Count the number of basic operations inside each loop, then multiply by how many times each loop runs. When loops are nested, multiply their counts together.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-dsa-2',
    courseId: 'data-structures-algorithms-ai',
    content:
      'Think of stacks as "undo buttons" (LIFO — last in, first out) and queues as "waiting lines" (FIFO — first in, first out). This simple mental model will help you pick the right data structure for any problem.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-dsa-3',
    courseId: 'data-structures-algorithms-ai',
    content:
      'For graph problems, draw out the graph by hand first. Label the vertices and edges, then trace through the algorithm step by step. BFS uses a queue (level-by-level), DFS uses a stack (deep-dive). Drawing the traversal order prevents silly mistakes on exams.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-dsa-4',
    courseId: 'data-structures-algorithms-ai',
    content:
      'The CLRS textbook (Introduction to Algorithms) is dense but invaluable. Focus on understanding the pseudocode and proofs of correctness rather than memorizing. The exam tests understanding, not memorization.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-dsa-5',
    courseId: 'data-structures-algorithms-ai',
    content:
      'When comparing sorting algorithms: Insertion Sort is great for small/nearly-sorted arrays, Merge Sort guarantees O(n log n) but uses extra space, Quick Sort is fast in practice but O(n²) worst-case, and Heap Sort is O(n log n) in-place. Know the trade-offs!',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-dsa-6',
    courseId: 'data-structures-algorithms-ai',
    content:
      'The MIT OpenCourseWare algorithms playlist on YouTube is an incredible free resource. The visual explanations of graph algorithms, dynamic programming, and complexity analysis complement the CLRS textbook perfectly. Highly recommended for building intuition.',
    author: 'AI @ VU Student',
  },

  // ========== MAS (discontinued 2026-2027) ==========
  {
    id: 'tip-mas-1',
    courseId: 'multi-agent-systems',
    content:
      'The #1 Prolog mistake: confusing `=` (unification) and `is` (arithmetic). `X = 3+4` gives X = 3+4 (a term, NOT 7!), while `X is 3+4` gives X = 7. Write this on a sticky note next to your screen.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-mas-2',
    courseId: 'multi-agent-systems',
    content:
      'When tracing Prolog search trees, always go top-to-bottom (rule order) and left-to-right (subgoal order). Mark each branch as Success, Failure, or Infinite. This systematic approach prevents getting lost in complex queries.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-mas-3',
    courseId: 'multi-agent-systems',
    content:
      'For MARBEL programming: remember the file structure — .mas2g (config + percept handlers), .mod2g (action rules), .pl (Prolog knowledge base). Percept handlers: `add` for send-once, `update` for on-change, `replace` for send-always.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-mas-4',
    courseId: 'multi-agent-systems',
    content:
      'Accumulators in Prolog enable tail recursion and prevent stack overflow. The pattern: wrapper predicate calls helper with initial accumulator (usually 0 or []), base case unifies accumulator with result, recursive case updates accumulator and continues.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-mas-5',
    courseId: 'multi-agent-systems',
    content:
      'Watch out for floundering! Never use `not(X)` or `\\+(X)` with unbound variables. Always ensure variables are bound before negation. For example, `holding(X) :- block(X), not(on(X, table))` is safe because `block(X)` binds X first.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-mas-6',
    courseId: 'multi-agent-systems',
    content:
      'I hope by the time you\'re reading this they don\'t still make you use MARBEL, otherwise good luck. Set up your development environment (Eclipse, MARBEL plugin, SWI-Prolog) in the very first week. Don\'t wait until an assignment deadline to discover your setup doesn\'t work — debugging environment issues is painful and time-consuming.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-mas-7',
    courseId: 'multi-agent-systems',
    content:
      'The exam isn\'t too hard if you\'ve been keeping up with the material. Focus on Prolog fundamentals (unification, search trees, backtracking) and MARBEL concepts (beliefs, goals, modules, percept handling). The study guide covers the exact exam structure — use it.',
    author: 'AI @ VU Student',
  },

  // ========== Linear Algebra & Calculus ==========
  {
    id: 'tip-lac-1',
    courseId: 'linear-algebra-calculus',
    content:
      'For limits: ALWAYS try direct substitution first. If you get a real number, you\'re done. If you get 0/0, it\'s indeterminate — use factoring (polynomials), rationalization (square roots), or simplification (complex fractions). If you get k/0 (k≠0), check one-sided limits.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-lac-2',
    courseId: 'linear-algebra-calculus',
    content:
      'For limits at infinity: divide every term by the highest power of x. Terms like 1/x and 1/x² vanish. Then compare degrees: same degree → ratio of leading coefficients, bottom bigger → 0, top bigger → ±∞.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-lac-3',
    courseId: 'linear-algebra-calculus',
    content:
      'The conjugate trick is essential: (√a - √b)(√a + √b) = a - b. Use this whenever you see √ – √ forms in limits. Multiply numerator and denominator by the conjugate to eliminate the square roots.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-lac-4',
    courseId: 'linear-algebra-calculus',
    content:
      'For continuity at a boundary point x=a of a piecewise function: set the left-hand limit equal to the right-hand limit and solve. This is a common exam question — practice finding the parameter (like m or k) that makes the function continuous.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-lac-5',
    courseId: 'linear-algebra-calculus',
    content:
      'Eigenvalue problems follow a recipe: (1) solve det(A - λI) = 0 for eigenvalues, (2) for each eigenvalue, solve (A - λI)x = 0 for eigenvectors. Practice the determinant calculation until it\'s automatic — it unlocks diagonalization.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-lac-6',
    courseId: 'linear-algebra-calculus',
    content:
      'This is one of the hardest exams in Year 2. If you haven\'t had this material before, you really need to attend the lectures — the professor\'s explanations and examples are essential. The exam closely follows the style of lecture examples and exercises.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-lac-7',
    courseId: 'linear-algebra-calculus',
    content:
      'YouTube videos (3Blue1Brown, the course playlist) are great for building intuition, but watching alone is NOT enough. You have to actually sit down with pen and paper and work through the exercises. The exam requires showing full working — there\'s no multiple choice. If you haven\'t practiced writing out solutions by hand, you will struggle.',
    author: 'AI @ VU Student',
  },

  // ========== Machine Learning ==========
  {
    id: 'tip-ml-1',
    courseId: 'machine-learning',
    content:
      'The exam is 1/3 recall, 1/3 combination, 1/3 application — so pure memorisation only gets you a third of the marks. For the application questions, practice doing full backpropagation by hand (forward pass → compute loss → backward pass with chain rule), computing entropy/information gain for decision tree splits, and deriving Naive Bayes posteriors with Laplace smoothing. The weekly exercises at mlvu.github.io are the single best prep: if you can do those fluently, the exam will feel familiar.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ml-2',
    courseId: 'machine-learning',
    content:
      'Build a "model zoo" cheat sheet mapping each model family to its loss function, optimisation method, and key hyperparameter. For example: Logistic Regression → cross-entropy loss → gradient descent → learning rate; SVM → hinge loss → quadratic programming → C (regularisation); Decision Tree → entropy/Gini → greedy splits → max depth. This mental map helps you instantly identify what\'s being asked in exam questions and connects the entire course into one coherent framework rather than 14 isolated lectures.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ml-3',
    courseId: 'machine-learning',
    content:
      'For the project report: treat it like a real research paper from day one. The rubric heavily weights "Writing" and "Description of Methods" — meaning clear structure, proper citations (10+ references required), and demonstrating you understand the algorithm beyond just calling sklearn.fit(). A common mistake is spending weeks on code but only 2 days on the report. Flip that: outline your report structure in week 2, write your methods section before you even finish coding, and leave the final week for polishing results and validation. Groups that score 9+ almost always have strong writing, not just strong models.',
    author: 'AI @ VU Student',
  },

  // ========== Knowledge & Data ==========
  {
    id: 'tip-kd-1',
    courseId: 'knowledge-and-data',
    content:
      'Think of RDF as "subject-predicate-object" sentences. Every piece of knowledge is a triple: (Amsterdam, isCapitalOf, Netherlands). SPARQL queries these triples using pattern matching — it\'s like SQL but for graphs.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-kd-2',
    courseId: 'knowledge-and-data',
    content:
      'The weekly practical assignments build on each other and form the foundation for the final project. Don\'t fall behind — if you skip week 2\'s assignment, weeks 3-5 become much harder because they assume you have the earlier skills.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-kd-3',
    courseId: 'knowledge-and-data',
    content:
      'For the exam: understand the difference between RDF (data model), RDFS (lightweight schema/vocabulary), and OWL (full ontology language). RDF just describes data, RDFS adds class hierarchies, OWL adds complex constraints and reasoning.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-kd-4',
    courseId: 'knowledge-and-data',
    content:
      'Submit your assignments on time — late submissions get -1 point if within 24 hours, and 0 if later. The assignments build on each other, so falling behind makes everything harder.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-kd-5',
    courseId: 'knowledge-and-data',
    content:
      'Start the group project early and coordinate with your team from day one. You need to build an ontology with 10+ classes, 5+ properties, and 2+ restrictions, integrate external data, and write an 8-12 page report. This takes more time than you think.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-kd-6',
    courseId: 'knowledge-and-data',
    content:
      'For 2 of the 5 practical assignments, you will have a mandatory one-on-one coding interview with a TA. They will ask you to explain your SPARQL queries, your OWL axioms, and your reasoning. Make sure you actually understand what you wrote — copying solutions without understanding will be exposed immediately.',
    author: 'AI @ VU Student',
  },

  // ========== Probability & Statistics ==========
  {
    id: 'tip-ps-1',
    courseId: 'probability-statistics',
    content:
      'The midterm is 30% and covers Chapters 1, 3, and part of Chapter 4 — but the final is 70% and covers EVERYTHING. This means you need to nail the early chapters twice: once for the midterm and once for the final. A strong midterm score gives you a huge buffer. Pro tip: re-do the midterm exam as practice the week before the final — it\'s the most realistic preview you\'ll get for the Chapter 1-4 portion.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ps-2',
    courseId: 'probability-statistics',
    content:
      'Create a "distribution decision tree" for yourself: Is the RV discrete or continuous? → If discrete, are we counting successes in n trials (Binomial), waiting for first success (Geometric), waiting for r-th success (Negative Binomial), or counting rare events (Poisson)? → If continuous, is it bounded (Uniform), measuring time between events (Exponential), or a natural phenomenon (Normal)? Half the exam is recognising which distribution applies — if you can identify it quickly, the rest is just plugging into formulas on the formula sheet.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ps-3',
    courseId: 'probability-statistics',
    content:
      'Chapter 8 (Statistical Inference) is worth the most on the final and is where most students lose marks. The key insight: confidence intervals and hypothesis tests are two sides of the same coin — rejecting H₀: μ = μ₀ at level α is equivalent to μ₀ falling outside the (1-α) confidence interval. Master the pivot method for CIs (find a quantity whose distribution is known and doesn\'t depend on unknown parameters), and for hypothesis testing always follow the 5-step recipe: (1) state H₀/H₁, (2) choose significance level α, (3) compute test statistic, (4) find critical region or p-value, (5) decide. The formula sheet gives you all the formulas — you just need to know which one to pick.',
    author: 'AI @ VU Student',
  },

  // ========== Conversational Agents (XB_0182, formerly XB_0101) ==========
  {
    id: 'tip-pca-1',
    courseId: 'conversational-agents',
    content:
      'Start by building your ontology (knowledge base) properly — a well-structured ontology makes the rest of the project much easier. Think about what attributes recipes have (ingredients, cuisine, dietary restrictions) and how they relate to user preferences.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pca-2',
    courseId: 'conversational-agents',
    content:
      'For the NLU pipeline: train with diverse phrasings for each intent. Users will say "I don\'t want spicy food" and "no spicy dishes please" and "skip the hot stuff" — your model needs to handle all of these. More training data = better accuracy.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pca-3',
    courseId: 'conversational-agents',
    content:
      'The extensions component (30% of your grade) is where you can really shine. Consider adding: exclusion filters ("I don\'t want X"), visual recipe cards, dietary restriction support, or multi-turn conversation memory. Pick something that genuinely improves the user experience.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pca-4',
    courseId: 'conversational-agents',
    content:
      'I hope by the time you take this course they don\'t use MARBEL anymore, otherwise good luck. The MARBEL/Prolog integration can be incredibly frustrating, but it\'s the same for everyone.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pca-5',
    courseId: 'conversational-agents',
    content:
      'In the first week, carefully read ALL the project information — every document, every requirement, every deadline. It is very easy to get lost at the beginning, and if you don\'t start on time you\'ll discover last-minute that you\'ve missed something important or done something wrong.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pca-6',
    courseId: 'conversational-agents',
    content:
      'Don\'t panic if your conversational agent isn\'t working properly — it\'s not working for anyone. Everyone is dealing with the same struggle. Focus on understanding the concepts and documenting your approach well in the report, which is worth 35% of your grade.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pca-7',
    courseId: 'conversational-agents',
    content:
      'Don\'t be afraid to ask the TAs anything — they are there to help. But find a TA who actually knows the material well. If your assigned TA can\'t help, don\'t hesitate to go to a different working group and ask a different TA. Some TAs are much more knowledgeable than others.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pca-8',
    courseId: 'conversational-agents',
    content:
      'The exam for this course is not hard at all. It\'s 30 multiple choice questions based on the lectures and the preliminaries page. If you attended the lectures and read the background material, you\'ll be fine.',
    author: 'AI @ VU Student',
  },

  // ========== Intelligent Systems ==========
  {
    id: 'tip-is-1',
    courseId: 'intelligent-systems',
    content:
      'A* search = best-first search with f(n) = g(n) + h(n). The key insight: if your heuristic h(n) is admissible (never overestimates), A* is guaranteed to find the optimal solution. Practice on grid-world examples with Manhattan distance as the heuristic.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-is-2',
    courseId: 'intelligent-systems',
    content:
      'For minimax with alpha-beta pruning: draw the full game tree first, then assign values bottom-up. Alpha-beta pruning eliminates branches that can\'t influence the final decision. This can reduce the search from O(b^d) to O(b^(d/2)) in the best case.',
    author: 'AI @ VU Student',
  },

  // ========== Logic and Sets ==========
  {
    id: 'tip-ls-0',
    courseId: 'logic-sets-ai',
    content:
      'The quiz on this page only scratches the surface — it\'s meant to give you an idea of the topics, not to fully prepare you. To really get ready for the exam, practice as much as you can with the old practice exams. That\'s how you\'ll know exactly what\'s waiting for you on the final. And don\'t just watch videos — grab a pen and paper and actually work through the problems yourself. That is how you truly learn. Otherwise it won\'t stick in your head and you will come nowhere.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ls-1',
    courseId: 'logic-sets-ai',
    content:
      'For mathematical induction proofs: (1) prove the base case, (2) assume P(k) is true (induction hypothesis), (3) prove P(k+1) using the assumption. The most common mistake is forgetting to clearly state the induction hypothesis. Write it out explicitly.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ls-2',
    courseId: 'logic-sets-ai',
    content:
      'When converting to CNF or DNF: first eliminate implications (P→Q becomes ¬P∨Q), then push negations inward using De Morgan\'s laws (¬(P∧Q) = ¬P∨¬Q), then distribute as needed. Practice this procedure until it\'s mechanical.',
    author: 'AI @ VU Student',
  },

  // ========== Computational Thinking ==========
  {
    id: 'tip-ct-1',
    courseId: 'computational-thinking',
    content:
      'Computational Thinking is one of the easiest courses in the entire bachelor — it\'s truly introductory. As long as you keep up with the weekly material and submit assignments on time, you\'ll do great. Don\'t overthink it!',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ct-2',
    courseId: 'computational-thinking',
    content:
      'This is one of the very first courses you\'ll take, which makes it the perfect opportunity to team up with new classmates. Form a study group early — you\'ll explore new friendships while learning together, and those connections often last the entire bachelor.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ct-3',
    courseId: 'computational-thinking',
    content:
      'Start the group project early! The project topic changes slightly each year, but the format is always the same: design an algorithm, write pseudocode and flowcharts, implement it in Python, and give a short presentation. The project itself isn\'t hard, but the report needs to be thorough — groups that start in the last week always rush and lose easy marks.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ct-4',
    courseId: 'computational-thinking',
    content:
      'Practice drawing flowcharts and writing pseudocode by hand — these show up on both the quizzes and assignments. Use standard shapes: rectangles for processes, diamonds for decisions, parallelograms for input/output.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ct-5',
    courseId: 'computational-thinking',
    content:
      'The two supervised quizzes are short multiple-choice and true/false questions. They\'re only worth 15% together, so don\'t stress — just review the syllabus chapters and video lectures. If you attended the lectures, you already know most of the answers.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ct-6',
    courseId: 'computational-thinking',
    content:
      'Attending lectures isn\'t strictly necessary for this course — everything you need is in the syllabus and the video lectures. If you prefer self-study, check out Aniel\'s Lectures on YouTube (youtube.com/@anielslectures) for clear explanations of the exact topics covered. Between the syllabus, the video lectures, and YouTube, you can easily ace this course at your own pace.',
    author: 'AI @ VU Student',
  },

  // ========== English Language Test ==========
  {
    id: 'tip-elt-1',
    courseId: 'english-language-test',
    content:
      'Don\'t overthink this test — if you\'re comfortable reading and writing in English, you\'ll be fine. The test is designed at high school graduate level. That said, do a quick 30-minute refresher on grammar TERMINOLOGY the day before. You might know English perfectly but still blank on "What is a subordinating conjunction?" or "Name this tense." Knowing the labels is half the battle.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-elt-2',
    courseId: 'english-language-test',
    content:
      'The pass threshold is 67% — that\'s 134 out of 200 questions. Scoring below this means you\'ll need to attend a mandatory refresher course. It\'s not the end of the world, but it\'s extra time you could spend on actual courses. Watch a couple of YouTube videos on verb tenses and parts of speech the night before — that alone should put you well over the threshold.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-elt-3',
    courseId: 'english-language-test',
    content:
      'The trickiest sections tend to be: (1) identifying verb tenses by name (present perfect continuous, past simple, etc.), (2) subject–verb agreement with tricky subjects (collective nouns, "neither...nor"), and (3) commonly confused word pairs (affect/effect, fewer/less, its/it\'s). If you review just these three areas, you\'ll dodge the most common mistakes.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-elt-4',
    courseId: 'english-language-test',
    content:
      'You have up to 2 hours and 45 minutes for 200 questions, but most people finish in 1.5–2 hours. That\'s plenty of time — don\'t rush. Read each question carefully, especially the ones about punctuation and articles. Many questions have one option that "feels right" but is technically incorrect.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-elt-5',
    courseId: 'english-language-test',
    content:
      'Quick refresher: the 8 parts of speech are Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, and Interjection. The 12 tenses are 3 times (past, present, future) × 4 aspects (simple, continuous, perfect, perfect continuous). Articles are "a", "an", and "the". If you know these categories cold, the terminology questions become free marks.',
    author: 'AI @ VU Student',
  },

  // ========== Crowdsourced from WhatsApp (2025–2026) ==========
  // --- Computational Thinking ---
  {
    id: 'tip-ct-7',
    courseId: 'computational-thinking',
    content:
      'Make sure you know Kruskal\'s algorithm thoroughly — it IS in the syllabus and appears on Quiz 2, even though some students assume it won\'t be tested. Don\'t skip graph theory week just because the earlier weeks felt easy.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ct-8',
    courseId: 'computational-thinking',
    content:
      'A trick that worked for many students: use ChatGPT to summarize each syllabus chapter into key bullet points, then study from those summaries. Students reported that ~90% of Quiz 2 questions were directly answerable from a well-made summary. Of course, still read the original material — the summaries just help you focus.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ct-9',
    courseId: 'computational-thinking',
    content:
      'Your practicum group IS your project group — they\'re the same thing. So when you\'re assigned to (or choose) a practicum group, you\'re also choosing who you\'ll do the 40% group project with. Pick wisely, or at least introduce yourself early!',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ct-10',
    courseId: 'computational-thinking',
    content:
      'Don\'t skip the Week 1 videos even if they aren\'t immediately available on day one. They get uploaded in the first few days, and falling behind in week 1 cascades into everything else. Set up Canvas notifications so you get pinged when new content drops.',
    author: 'AI @ VU Class of 2028',
  },

  // --- Introduction to AI ---
  {
    id: 'tip-iai-1',
    courseId: 'intro-ai',
    content:
      'The tutor groups (workgroups) in Introduction to AI are MANDATORY — you must attend them to pass the course. This catches students off guard because not all Year 1 courses have mandatory attendance. Check Canvas as soon as the course opens and sign up for a group immediately, or you\'ll be randomly assigned to whatever slot is left.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-iai-2',
    courseId: 'intro-ai',
    content:
      'Canvas group sign-up deadlines for Intro to AI can close on the very first day — sometimes even the day before the course officially starts. Go to Canvas → People → Groups and register the moment it opens. Missing the deadline means you get randomly assigned, which might land you in an inconvenient timeslot.',
    author: 'AI @ VU Class of 2028',
  },

  // --- Logic and Sets for AI ---
  {
    id: 'tip-ls-3',
    courseId: 'logic-sets-ai',
    content:
      'The Logic and Sets midterm typically covers the first three chapters of BOTH the Logic part and the Sets part. Don\'t make the mistake of studying only one half. Also, students confirmed with TAs that the Canvas lecture recordings for the Sets portion are up-to-date and match the physical lectures — so they\'re safe to use for studying.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ls-4',
    courseId: 'logic-sets-ai',
    content:
      'Attending the working groups (tutorials) is highly recommended — that\'s where you actually practice the material and can ask TAs for help. Lectures are recorded, so missing one isn\'t the end of the world. One big advantage of this course: the Canvas page is very well organized with all the information you need neatly laid out. Use that to your advantage when studying and keeping track of what\'s been covered.',
    author: 'AI @ VU Class of 2028',
  },

  // --- Introduction to Psychology ---
  {
    id: 'tip-psy-1',
    courseId: 'intro-psychology',
    content:
      'Be careful with the Psychology exam grading — there\'s a correction formula that penalizes random guessing. This means you may need more raw correct answers than you\'d expect to reach a 5.5. Don\'t guess randomly on questions you have no clue about; it can actually lower your score. Leave answers blank if you\'re totally unsure (check the specific exam rules first).',
    author: 'AI @ VU Class of 2028',
  },

  // --- Intro Python Programming ---
  {
    id: 'tip-py-0',
    courseId: 'intro-python-ai',
    content:
      'If you\'ve done Python before, this course will feel easy. But if you\'re new to programming and have never coded before, be prepared — this course can be very challenging. Do NOT skip the lectures, make your assignments on time, and don\'t slack off. Also, appreciate Mauricio — he\'s a great teacher who genuinely wants the best for you.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-py-1',
    courseId: 'intro-python-ai',
    content:
      'While Jupyter Notebooks are commonly used in this course, students strongly recommend also installing VS Code. It\'s much more stable for opening project folders and exporting your work. Incorrect IDE setup (not opening the right folder) is a surprisingly common cause of file path errors and failed submissions.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-py-2',
    courseId: 'intro-python-ai',
    content:
      'ALWAYS include type hints and docstrings in your Python exam code — even in __init__ methods and class definitions. This was announced on Discord but not in the rubric, and students who missed it lost points. Treat it as a rule: every function gets type hints and a docstring, no exceptions.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-py-3',
    courseId: 'intro-python-ai',
    content:
      'A syntax error in your exam code means 0 points for that exercise — no partial credit. If you can\'t finish a function, at least make sure the code runs without errors. Add a comment or print statement explaining what it should do. Working but incomplete code scores better than code that crashes.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-py-4',
    courseId: 'intro-python-ai',
    content:
      'The Python weekly assignments are technically non-mandatory (they\'re bonus points toward your grade). However, they\'re the best practice for the exam, so treat them as mandatory. Students who skipped them consistently underperformed on the final.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-py-5',
    courseId: 'intro-python-ai',
    content:
      'Late submissions lose 1 point per day. Canvas locks submissions after the deadline, but the professor sometimes reopens them briefly. If you miss a deadline, email the TA immediately — don\'t assume it\'s over. Also, for exam error handling: only add try/except when the assignment explicitly asks for it.',
    author: 'AI @ VU Class of 2028',
  },

  // --- Computational Thinking (additional) ---
  {
    id: 'tip-ct-11',
    courseId: 'computational-thinking',
    content:
      'The CT quiz is 20 multiple-choice questions in 45 minutes. Professor Bhulai confirmed the real quiz is the same difficulty as the mock quiz on Canvas. Do the mock first (you get 2 attempts) — if you find it easy, you\'re ready. Focus especially on chapters 5 and 6 (searching/sorting) and Big O notation.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ct-12',
    courseId: 'computational-thinking',
    content:
      'For CT assignments, always explain your reasoning (\"motivation\") alongside your answer. The rubric awards separate points for correct answers vs correct motivation. Simply writing the final answer without explaining how you got there will cost you up to half the marks on each problem.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ct-13',
    courseId: 'computational-thinking',
    content:
      'For pseudocode in CT, you CAN use BREAK, RETURN, and CONTINUE keywords — TAs confirmed this is acceptable. Use "=" for assignment (not "==") and add "//" comments to clarify your intent. Also, the solution strategy heading (e.g. "Divide and Conquer") only needs to be named if the rubric explicitly includes a row for it.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ct-14',
    courseId: 'computational-thinking',
    content:
      'CT quiz rooms are assigned by surname ranges (e.g. "A–BAL" means surnames starting from A up to names starting with BAL). Check Canvas announcements carefully for your room — the quiz is held in the NU Building, 6th floor. Don\'t confuse it with your usual practical room!',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ct-15',
    courseId: 'computational-thinking',
    content:
      'CT assignments cannot be resubmitted for regrading. If you get a low score, it sticks. Contact your TA on Slack (not email) for the fastest response about assignment questions — TAs are most responsive there.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-ct-16',
    courseId: 'computational-thinking',
    content:
      'For the CT group presentation, you must attend BOTH timeslots (15:30–17:45), not just your own slot. When you\'re not presenting, you\'re grading other groups. At least 2 members from your group must be present. The poster is printed for you — you don\'t need to print it yourself.',
    author: 'AI @ VU Class of 2028',
  },

  // --- Introduction to AI (additional) ---
  {
    id: 'tip-iai-3',
    courseId: 'intro-ai',
    content:
      'The Intro to AI literature assignment is 1–3 pages (excluding references). The final group project report is ~12 pages total. Don\'t confuse the two — students regularly panic thinking the first weekly assignment is 12 pages. Any citation style (APA, IEEE, etc.) is fine as long as you\'re consistent throughout.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-iai-4',
    courseId: 'intro-ai',
    content:
      'In the Intro to AI project, if you still have workgroup sessions left to attend, you can skip only up to 2. If you\'ve attended all sessions so far, the last one is optional. The weekly assignments all build toward your final report, so don\'t treat them as standalone tasks.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-iai-5',
    courseId: 'intro-ai',
    content:
      'The Intro to AI exam is worth 30% and is based on the lecture content (slides). The workgroup project (report + poster presentation) makes up 70%. For the exam, focus on understanding the lecture slides — the workgroups are mainly for the group project, not exam prep.',
    author: 'AI @ VU Class of 2028',
  },

  // --- Introduction to Psychology (additional) ---
  {
    id: 'tip-psy-2',
    courseId: 'intro-psychology',
    content:
      'Psychology is very reading-heavy but here\'s the shortcut: focus on the lecture slides first, use the textbook readings only when you don\'t understand a concept from the slides. Previous students confirmed the exam is primarily based on slide content. Use Crash Course Psychology on YouTube to supplement your understanding — the videos are excellent for visual learners.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-psy-3',
    courseId: 'intro-psychology',
    content:
      'The VU Mentor Program has a GitHub repo (github.com/VU-Mentor-Program) with free Psychology summaries and study notes from previous years. They also host free exam prep sessions with snacks. Check their WhatsApp community for event announcements. These materials are unofficial but widely used and helpful.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-psy-4',
    courseId: 'intro-psychology',
    content:
      'For Psychology exam prep: import the lecture summary into AI tools like studley.ai (free) to generate flashcards, mock quizzes, and practice tests. You can also paste the mock exam into ChatGPT and ask it to generate similar questions. The more practice questions you do, the better you\'ll perform.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-psy-5',
    courseId: 'intro-psychology',
    content:
      'The PDF textbooks for Intro to Psychology are available for free on Canvas under Modules. You don\'t need to buy the physical book. Previous students also shared them via Google Drive — check if the link is still active in the group chat.',
    author: 'AI @ VU Class of 2028',
  },

  // --- Intelligent Systems (additional) ---
  {
    id: 'tip-is-3',
    courseId: 'intelligent-systems',
    content:
      'The IS final exam covers lectures 8 through 13 (the midterm covered 1–7). If you scored a 5 or above on the midterm, you can take the final. For studying: go back over the practical booklets/docs you filled in during the weeks — the exam questions are similar in style. Also, PRACTICE EXAMS are your absolute best resource for this course. They give you a perfect idea of what to expect, and often the question formats are almost identical.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-is-4',
    courseId: 'intelligent-systems',
    content:
      'In IS assignments, always check Discord for clarifications — TAs post important corrections there that may not appear on Canvas. For example, in one assignment a code snippet\'s P(...) placeholder needed to be commented out rather than filled in, which was only announced on Discord. Additionally, GO TO THE WORKING GROUPS. You really need them to master the material, and as a bonus, attending 6 out of 7 gives you a +0.3 boost to your final grade.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-is-5',
    courseId: 'intelligent-systems',
    content:
      'IS assignment late submissions receive a -1 penalty per day and Canvas locks after the deadline. You can also reuse code from previous assignments (e.g. statistical test code). Work in CNF notation for knowledge base tasks: there is no AND operator — each clause is a separate line, and OR is represented by commas within a clause.',
    author: 'AI @ VU Class of 2028',
  },

  // --- General VU Tips ---
  {
    id: 'tip-gen-1',
    courseId: 'computational-thinking',
    content:
      'Old exams are your best study tool. Check vu.brunet.app (the old exam database), the CS Hub Notion page, and the VU Mentor Program GitHub for past exams and summaries. These three resources together cover nearly every course.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-gen-2',
    courseId: 'intro-ai',
    content:
      'Your VU email (initials.surname@student.vu.nl) is critical — always email TAs and professors from it, or your message ends up in spam. Use the same password as your Canvas/VU dashboard. Download the Outlook app so you don\'t miss important announcements.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-gen-3',
    courseId: 'intro-psychology',
    content:
      'For exam logistics: arrive at least 15 minutes early. You cannot enter an exam room after 30 minutes past the start time. Bring valid ID. Check Canvas announcements for your room assignment (sorted by surname). Exams are in the Hoofdgebouw (Main Building) or NU Building — don\'t go to the wrong one!',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-gen-4',
    courseId: 'intro-python-ai',
    content:
      'If you\'re on Windows: many terminal assignments (like the Basics of Computers wordcloud) use Linux commands that don\'t work on Windows CMD. Install WSL (Windows Subsystem for Linux) by typing "wsl --install" in PowerShell. Mac users can just use Terminal directly since macOS is Unix-based.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-gen-5',
    courseId: 'logic-sets-ai',
    content:
      'Google is offering students in the Netherlands a free year of Gemini Pro AI (normally €22/month). Go to gemini.google/students, verify with your personal Google account, and immediately cancel auto-renew — you keep the full year for free. Great for study assistance, research, and writing help.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-gen-6',
    courseId: 'intelligent-systems',
    content:
      'Course registration deadlines for the next period are strict. Check the "intekenmodule" (course registration module) early — missing the deadline means you can\'t take the course. Also use rooster.vu.nl for your complete schedule including exam dates.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-gen-7',
    courseId: 'computational-thinking',
    content:
      'The Overleaf and Basics of Computers assignments together count for 10% of your CT grade. They\'re graded pass/fail (0, 1, or 2 points). You must pass both to pass the course. Don\'t skip them thinking they don\'t matter — they do.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-gen-8',
    courseId: 'intro-python-ai',
    content:
      'Public transport strikes and weather disruptions happen often in the Netherlands. Download the 9292 app (Dutch transit planner) and check it before heading to campus, especially during exam periods. If trains are cancelled, metros and trams within Amsterdam usually still run. Always screenshot cancellations as evidence if you miss an exam.',
    author: 'AI @ VU Class of 2028',
  },

  // --- Introduction to AI (from chat + course materials) ---
  {
    id: 'tip-iai-6',
    courseId: 'intro-ai',
    content:
      'The Intro to AI project is HYPOTHETICAL — you do NOT build a real AI system. You propose a research question, explain how you would solve it using AI concepts from the lectures, and present it in a poster and final report (~12 pages). Think of it as a theoretical research proposal, not a coding assignment.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-iai-7',
    courseId: 'intro-ai',
    content:
      'For the weekly group assignments in Intro to AI: only ONE person from your group needs to submit on Canvas. Make sure you agree in advance who submits to avoid last-minute confusion. All weekly assignments build toward your final group report, so keep them organized.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-iai-8',
    courseId: 'intro-ai',
    content:
      'The literature assignment for Intro to AI is 1–3 pages (EXCLUDING the reference page). The final report is ~12 pages including everything. Don\'t confuse the two — many students panic thinking the first assignment is 12 pages long. Reference pages never count toward the page limit.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-iai-9',
    courseId: 'intro-ai',
    content:
      'Intro to AI lecture slides can be found on Canvas → Files (organized by week) or Canvas → Modules. Workgroup slides are published on Thursdays each week, or ask your TA on Slack. Not all lectures are recorded — if it\'s not mentioned on Canvas or in the lecture, assume it isn\'t recorded.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-iai-10',
    courseId: 'intro-ai',
    content:
      'The Intro to AI course covers a broad range of AI subfields through guest lectures: machine learning, knowledge representation, hybrid intelligence, ethics & philosophy of mind, embodied/evolving intelligence, verification & validation, and data wrangling. Focus on understanding the big picture from each guest lecture — the exam tests breadth, not depth.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-iai-11',
    courseId: 'intro-ai',
    content:
      'A mock exam for Intro to AI exists and covers the key topics from the lectures. Practice with it before the real exam — the style of multiple-choice questions is very similar. Ask your TA or check Canvas/Files for the mock exam PDF.',
    author: 'AI @ VU Student',
  },

  // --- English Language Test (from chat) ---
  {
    id: 'tip-elt-6',
    courseId: 'english-language-test',
    content:
      'For the English Language Test: you\'re assigned to exam rooms based on surname ranges (e.g. A–K in one set of rooms, L–Z in another). Check Canvas announcements for your specific room. If you miss the morning slot, there are multiple time blocks throughout the day — call the VU Taalcentrum immediately to see if you can attend a later block.',
    author: 'AI @ VU Class of 2028',
  },

  // ========== Project Intelligent Systems ==========
  {
    id: 'tip-pis-1',
    courseId: 'project-intelligent-systems',
    content:
      'Learn how to play Schnapsen before the project starts — understanding the game intuitively will make designing bot strategies much easier. Watch a few YouTube tutorials and play some practice rounds online. It turns out to be simpler than most people expect!',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pis-2',
    courseId: 'project-intelligent-systems',
    content:
      'Find your project partner early. You work in pairs for the entire project and need to write a ~12-page research paper together. Pick someone you communicate well with and who has complementary strengths (e.g. one person stronger at coding, another at writing).',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pis-3',
    courseId: 'project-intelligent-systems',
    content:
      'Start your bot implementation early — the Schnapsen game engine has a learning curve. Get familiar with the codebase, run the example bots (RandBot, RDeepBot), and understand how moves, tricks, and game states work before designing your own strategy.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pis-4',
    courseId: 'project-intelligent-systems',
    content:
      'Run large numbers of simulated games (at least 1,000, ideally 10,000+) to get statistically meaningful results. Use fixed random seeds for reproducibility. Always test your bots against baselines (RandBot, RDeepBot) — not just against each other.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pis-5',
    courseId: 'project-intelligent-systems',
    content:
      'Think carefully about your research question before diving into code. Good questions compare specific strategies (e.g. "Does an aggressive trick-taking approach outperform a conservative one against Monte Carlo-based opponents?"). Avoid vague questions like "Which bot is best?".',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pis-6',
    courseId: 'project-intelligent-systems',
    content:
      'For the research paper, follow the Springer LNCS format strictly. Include clear sections: Introduction, Background, Research Question, Experimental Setup, Results, Discussion, and Conclusion. Add flowcharts or diagrams of your bot\'s decision logic — they make the paper much more readable.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pis-7',
    courseId: 'project-intelligent-systems',
    content:
      'Consider both win rates AND point margins when analysing results. A bot that wins 60% of games but only by 1 game point each time may be less effective than one that wins 55% but frequently scores 3 game points (opponent has no tricks). Use statistical tests like chi-square to validate your findings.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pis-8',
    courseId: 'project-intelligent-systems',
    content:
      'There is NO resit for this course — take it seriously from day one. The individual test in the final week covers your understanding of your own project and the AI techniques you used, so make sure you understand every part of your bot\'s implementation even if your partner wrote some of the code.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pis-9',
    courseId: 'project-intelligent-systems',
    content:
      'For the individual coding assignment, the AssignmentBot has specific conditions and actions that form a decision tree. Use the check_implementation.py script to validate your bot\'s behavior against the server — it will tell you exactly which conditions or actions are wrong.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pis-10',
    courseId: 'project-intelligent-systems',
    content:
      'Interesting bot ideas to explore: combine rule-based logic with ML (e.g. use a neural net to decide when to switch from aggressive to passive play), use Monte Carlo tree search with different sampling depths, or build a bot that adapts its strategy based on the opponent\'s observed behavior during the game.',
    author: 'AI @ VU Student',
  },
  // ========== Academic Writing (BETA) ==========
  {
    id: 'tip-aw-1',
    courseId: 'academic-writing',
    content:
      'Start each assignment early and treat it as a draft of your final essay. Assignment 1 becomes your introduction, Assignment 2 expands it, Assignment 3 is your conclusion — by the time the final paper is due, you already have most of it written and just need to add body paragraphs and polish.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-aw-2',
    courseId: 'academic-writing',
    content:
      'Use the Academic Phrasebank (phrasebank.manchester.ac.uk) when you are stuck on how to phrase something formally. It has ready-made sentence starters for introducing topics, comparing sources, hedging claims, and concluding — all organized by function.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-aw-3',
    courseId: 'academic-writing',
    content:
      'After writing a draft, read only your title, thesis statement, topic sentences, and conclusion in sequence. If this "axis" tells a coherent story on its own, your structure is solid. If something feels disconnected, that is the paragraph you need to rework.',
    author: 'AI @ VU Student',
  },
  // ========== History of AI ==========
  {
    id: 'tip-hoai-1',
    courseId: 'history-of-ai',
    content:
      'The exam requires essay-style answers, not bullet points. Practice writing short, structured essays that tell a story — state your argument, provide historical examples from both the lectures and the book, and tie it together with a conclusion. The exam explicitly penalizes "just a few buzzwords."',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hoai-2',
    courseId: 'history-of-ai',
    content:
      'The lectures and the book tell different but complementary stories — lectures emphasize the European perspective while Campbell-Kelly focuses on the American narrative. For C-questions on the exam, you need to combine both. Keep a side-by-side comparison as you study.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hoai-3',
    courseId: 'history-of-ai',
    content:
      'Take the assignments seriously even though they are group work — if your best 4 assignments average a 6 or higher, you earn a bonus point on the exam (you skip the NO BONUS question and start with 2 points instead of 1). That one point can make a real difference.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hoai-4',
    courseId: 'history-of-ai',
    content:
      'Attend the seminars even though they are optional. The book has a lot of reading (~40 hours) and the recap sessions help you focus on what matters. The book recap sessions in particular help you distill the key arguments from each pair of chapters before the assignment deadline.',
    author: 'AI @ VU Student',
  },
  // ========== Applied Programming for AI ==========
  {
    id: 'tip-ap-1',
    courseId: 'applied-programming-ai',
    content:
      'Start the project proposal in week 1 immediately — it sets the direction for everything else. Write clear user stories with acceptance criteria, because your TAs will hold you to them during weekly check-ins and the final demo.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ap-2',
    courseId: 'applied-programming-ai',
    content:
      'Actually follow TDD: write your pytest tests first, commit them, then implement the feature. The graders check your Git history for this exact workflow. If you implement first and write tests after, it will show in your commits and cost you points.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ap-3',
    courseId: 'applied-programming-ai',
    content:
      'Set up your Flask/Django project structure and virtual environment on day one of week 2. Make sure everyone on your team can run the backend locally before you start splitting up features. A shared requirements.txt and a proper .gitignore save hours of debugging later.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ap-4',
    courseId: 'applied-programming-ai',
    content:
      'Use feature branches religiously — each team member works on their own branch per feature and merges into a dev branch. The coding interview will ask you about your specific contributions, and your Git activity (commits, branches, PRs) is part of your individual grade.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ap-5',
    courseId: 'applied-programming-ai',
    content:
      'For the frontend week, you build it individually and can use free-tier GenAI tools (Copilot, Cursor student, Claude Code free). Do NOT use paid tiers — that is explicitly forbidden. Write a solid GenAI report documenting exactly which prompts you used and what you changed manually, since that report is 10% of your grade.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ap-6',
    courseId: 'applied-programming-ai',
    content:
      'Test your REST API endpoints with Postman or RapidAPI before connecting the frontend. Make sure all your CRUD operations, query filters (you need at least 3), and data cleaning logic work independently. This makes week 3 frontend integration much smoother.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ap-7',
    courseId: 'applied-programming-ai',
    content:
      'Do not underestimate the coding interview — it is pass/fail with no resit, and failing it means failing the entire course regardless of your other grades. You must be able to explain every line of code you contributed. Push your work on time every week, because late pushes automatically result in a fail.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ap-8',
    courseId: 'applied-programming-ai',
    content:
      'Communication is on Discord only — emails and Canvas messages will not be answered. Join the server early and change your username to your real email. When you are stuck, check Discord first before asking your TA.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ap-9',
    courseId: 'applied-programming-ai',
    content:
      'Add docstrings to all your functions and classes, and use type hints for all parameters and return values. These are explicit requirements in the project description and easy points to lose if you skip them.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ap-10',
    courseId: 'applied-programming-ai',
    content:
      'For the final demo, practice presenting your app as if it were a real product going to production. The grading rubric evaluates content coverage, motivation, live demo usage, oral communication, and your ability to answer questions. Make sure every team member can speak to the full project, not just their own part.',
    author: 'AI @ VU Student',
  },

  // --- Human-Computer Interaction ---
  {
    id: 'tip-hci-1',
    courseId: 'human-computer-interaction',
    content:
      'The HCI exam is a digital TestVision exam with close-ended questions (multiple choice, true/false, fill-in-the-blank). It uses chance correction, so random guessing won\'t help — only answer if you\'re reasonably confident. The exam covers chapters 1–8 of the textbook. Focus especially on measurement scales (NOIR), statistical test selection, Fitts\' Law, KLM calculations, and the Wizard of Oz paradigm — these come up every year.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-2',
    courseId: 'human-computer-interaction',
    content:
      'You MUST complete Assignments 1 & 2 (graded Complete/Incomplete) to be eligible for the exam, and Assignments 3 & 4 to be eligible for the group project report grade. Late submissions get a -0.5 point penalty, and after 24 hours you can\'t submit at all. Don\'t risk losing exam eligibility over a formative assignment.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-3',
    courseId: 'human-computer-interaction',
    content:
      'For the group project, you design a human-agent interaction using the Furhat social robot (or the Virtual Furhat tool if hardware isn\'t available). Choose your theme early (Education, Healthcare, or Customer Service) and start your literature review immediately — finding 3-4 relevant papers takes longer than you think. Define a clear, testable research question before building anything.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-4',
    courseId: 'human-computer-interaction',
    content:
      'The lo-fi prototype phase is more important than it seems. Film a short video (max 5 minutes) demonstrating your concept and run a pilot study with at least 3 peers. The feedback you get here saves you from major design flaws in the hi-fi version. Don\'t skip this step — it\'s also required for Assignment 4.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-5',
    courseId: 'human-computer-interaction',
    content:
      'For the final report (max 5 pages), follow the scientific paper structure exactly: Title, Abstract, Introduction, Method (Participants, Apparatus, Procedure, Design), Results & Discussion, Conclusion, References. Include all supporting materials (raw data, code, consent forms, videos) as supplementary files — these are worth 20 of the 100 points.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-6',
    courseId: 'human-computer-interaction',
    content:
      'Memorize the statistical test selection table: between-subjects with 2 conditions → independent t-test (parametric) or Mann-Whitney U (non-parametric); within-subjects with 2 conditions → paired t-test or Wilcoxon; 3+ conditions → ANOVA or Kruskal-Wallis/Friedman. Likert scale data is ordinal, so use non-parametric tests. This single table covers a large chunk of exam questions.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-7',
    courseId: 'human-computer-interaction',
    content:
      'Practice KLM calculations by hand before the exam. Know the operator times: K=0.28s (average), B=0.10s, P=1.10s, H=0.40s, M=1.35s. A typical exam question gives you a task sequence and asks you to compute the total time. Write out each step, identify the operator, and sum up. The exam prep materials have worked examples — study those.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-8',
    courseId: 'human-computer-interaction',
    content:
      'Practical sessions are mandatory — you can miss at most 1 out of 5. Missing more means you fail the course entirely, regardless of your exam or project grade. These sessions are in weeks 6–8 and involve working on your Furhat robot project with your group.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-9',
    courseId: 'human-computer-interaction',
    content:
      'For the group project, recruit your 8+ user study participants early. You need signed consent forms from each participant before testing. Design your consent form using the template from the practicals. Also, include a statement of contribution from each group member in the report — this is how they detect free-riding.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-10',
    courseId: 'human-computer-interaction',
    content:
      'The textbook (MacKenzie, "Human-Computer Interaction: An Empirical Research Perspective") is available for free online through the VU library using your VUnetID via ProQuest Ebook Central. You don\'t need to buy a physical copy. The lecture slides are excellent but not recorded, so attend lectures and take good notes.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-11',
    courseId: 'human-computer-interaction',
    content:
      'If you use AI tools (ChatGPT, Copilot, etc.) for your project report, you must include a "Statement of Technology Use" disclosing exactly how you used them. The report is checked with Turnitin for plagiarism. All suspected cases are reported to the exam committee — don\'t risk it.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-hci-12',
    courseId: 'human-computer-interaction',
    content:
      'For the group project, divide roles clearly from the start: someone for literature review, someone for prototype development (Kotlin/Furhat SDK), someone for study design and data collection, and someone for statistical analysis and writing. Meet regularly and use a shared document. Groups of 4 work best when everyone has a defined responsibility.',
    author: 'AI @ VU Student',
  },

  // ========== Information Management ==========
  {
    id: 'tip-im-1',
    courseId: 'information-management',
    content:
      'The midterm exam is the hardest, and covers mostly only book content, so make sure to focus on that. The final is pretty easy, as it is 90% just drawing/completing graphs.',
    author: 'AI @ VU Student',
  },

  // ========== Databases ==========
  {
    id: 'tip-databases-1',
    courseId: 'databases',
    content:
      'Do the homework yourself. Really. It is tempting to let AI write your SQL and your normalisation steps, but the exam is closed book and the tasks look almost exactly like the homework. If you actually worked through the exercises by hand you will walk in already knowing how to answer, and you will do great. If you outsourced them you will sit there recognising the question and having no idea how to start.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-databases-2',
    courseId: 'databases',
    content:
      'The homework is also your ticket to the exam: you need 55 points (70%) to qualify for the exam or the resit, and 75 points (90%) gets you a +0.5 bonus on top of a passing grade. Qualification from a previous year does not carry over, so you have to earn it again.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-databases-3',
    courseId: 'databases',
    content:
      'Sign up for both an A and a B exercise group on Canvas. The A classes cover the exercise sheet for that week and the B classes are there for you to work on the homework with TAs in the room who can nudge you when you get stuck. The last A class of the course goes through the example exam, which is the single most useful session of the block.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-databases-4',
    courseId: 'databases',
    content:
      'Attribute closure is the one skill worth drilling until it is boring. Candidate keys, canonical covers, BCNF violations and the whole synthesis algorithm all reduce to computing X+ correctly. That is roughly a third of the exam points.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-databases-5',
    courseId: 'databases',
    content:
      'For the SQL section, learn to translate English quantifiers into patterns. "Knows everybody in Paris" becomes "there is no person in Paris that this person does not know", which is a double NOT EXISTS. "Does not take baking classes" is a single NOT EXISTS. Use NOT EXISTS rather than NOT IN, because one NULL in the subquery makes NOT IN silently return nothing.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-databases-6',
    courseId: 'databases',
    content:
      'For transactions, write out the conflicting operation pairs before you draw anything. Two operations conflict when they are from different transactions, touch the same item, and at least one is a write. Then the precedence graph almost draws itself, and a cycle means not conflict-serialisable.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-databases-7',
    courseId: 'databases',
    content:
      'Do not skip multi-granularity locking or the database API slides. There is usually a question on which of S, X, IS and IX conflict with each other, and an open question on SQL injection and how prepared statements prevent it. Both are cheap points that people lose because those parts have no lecture video.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-databases-8',
    courseId: 'databases',
    content:
      'The exam runs in iSubmit, so know the tool before you sit down. Remember your iSubmit password, use the Save button constantly while drawing E/R diagrams, and press Verify Submission on the manually graded tasks. Most tasks give partial points and immediate feedback, so never leave one blank.',
    author: 'AI @ VU Student',
  },

  // ========== The Law of Artificial Intelligence ==========
  {
    id: 'tip-law-of-ai-1',
    courseId: 'law-of-ai',
    content:
      'Take this course. It is one of the most enjoyable things in the programme and the professor is genuinely great: engaging, sharp, and happy to talk. Go up to him after a lecture or send him a message. Those conversations are worth more than most of the reading.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-law-of-ai-2',
    courseId: 'law-of-ai',
    content:
      'The course is easy without being empty. The professor rewrites the material every year to keep up with what is actually happening in AI regulation, so it stays current and you end up learning a lot without it ever feeling like a grind.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-law-of-ai-3',
    courseId: 'law-of-ai',
    content:
      'Lectures are fun but not mandatory. If you skip one, drop the slides and the mandatory readings into an AI tool and have it write you a summary. That covers the lecture side of the exam fine.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-law-of-ai-4',
    courseId: 'law-of-ai',
    content:
      'Do go to the seminars though. What gets discussed there shows up on the exam and there is no way to study it afterwards, because it only exists in the room. This is the one part of the course you cannot catch up on later.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-law-of-ai-5',
    courseId: 'law-of-ai',
    content:
      'Because the material is refreshed every year, be careful with old summaries and question banks from previous cohorts. The structure stays similar but the examples, readings and emphasis move. Work from this year\'s slides and this year\'s mock exam.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-law-of-ai-6',
    courseId: 'law-of-ai',
    content:
      'The two things that come back constantly: Lessig\'s four modalities (law, social norms, market, architecture) and the risk pyramid of the AI Act. If you can name the four modalities and say which one is doing the work in a given scenario, and you can place a system in the right risk tier, you have covered a lot of ground.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-law-of-ai-7',
    courseId: 'law-of-ai',
    content:
      'Keep high-risk AI systems and general-purpose AI models apart in your head. High-risk classification runs mostly on what the system is used for. The GPAI regime under Articles 51 to 55 runs on what the model can do. Mixing those two up is the classic exam trap.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-law-of-ai-8',
    courseId: 'law-of-ai',
    content:
      'Do the mock exam closed book about a week before the real one, then go back and work out why each wrong option is wrong. The distractors are built from real provisions, so understanding why they miss teaches you the Act better than rereading it.',
    author: 'AI @ VU Student',
  },

  // ========== Text Mining for AI ==========
  {
    id: 'tip-text-mining-1',
    courseId: 'text-mining-ai',
    content:
      'This is a genuinely fun course and the most relevant one in the bachelor if you care about NLP. Everything behind LLMs and chatbots starts here: tokenisation, embeddings, sequence labelling, classification, fine-tuning. If you want to understand why the tools you use every day work the way they do, this is the course that gets you closest.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-text-mining-2',
    courseId: 'text-mining-ai',
    content:
      'Lectures are not mandatory and honestly not needed. Feed the slides and the compulsory readings to an AI tool, get summaries out, and study from those. The exam is multiple choice over exactly that material, so it works well.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-text-mining-3',
    courseId: 'text-mining-ai',
    content:
      'The Canvas self-test quizzes are your only exam practice. The syllabus says outright that there will be no separate practice exam and that the quiz questions are similar to the real ones. Do all six, then redo the ones you got wrong a few days later.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-text-mining-4',
    courseId: 'text-mining-ai',
    content:
      'Sort out your group in week 1. You need four people, you sign up through the Groups tab on Canvas, and if you have not joined a group by the deadline the staff assume you dropped the course. You keep the same group for all four lab assignments and the final poster project, so pick people who will show up.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-text-mining-5',
    courseId: 'text-mining-ai',
    content:
      'The lab assignments carry no weight in your grade but you cannot pass without completing them. You get at most two resubmissions across the whole course, with a one-week deadline, so do not burn them early. If someone in the group did not contribute, they have to redo that assignment on their own.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-text-mining-6',
    courseId: 'text-mining-ai',
    content:
      'Both components need at least a 5 on their own and the average has to be 5.5. The exam is 60% and the poster project is 40%, so a great project cannot rescue a failed exam and vice versa. Give the poster real time instead of throwing it together in the last week.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-text-mining-7',
    courseId: 'text-mining-ai',
    content:
      'Install Anaconda and set up a clean virtual environment before the first lab. Old Python and package versions cause install conflicts that eat an entire lab session. There is also a command-line self-test on Canvas: take it early, because without basic terminal skills the labs are painful.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-text-mining-8',
    courseId: 'text-mining-ai',
    content:
      'A lot of exam questions are precise definition contrasts rather than deep reasoning. Dependency versus constituency parsing, NER versus NEC, inflection versus derivation, inline versus stand-off annotation, gold versus silver versus bronze data. Make flashcards for those pairs and you pick up easy points.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-text-mining-9',
    courseId: 'text-mining-ai',
    content:
      'Check where your exam actually is. It has been held off campus at the Emergohal in Amstelveen rather than at VU, which is about a 30 minute bike ride, and it runs in TestVision on a browser. Confirm the location and start time on Canvas the night before and leave extra travel time.',
    author: 'AI @ VU Student',
  },
];
