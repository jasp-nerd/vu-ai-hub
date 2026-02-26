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

  // ========== MAS ==========
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

  // ========== Machine Learning ==========
  {
    id: 'tip-ml-1',
    courseId: 'machine-learning',
    content:
      'Gradient descent intuition: imagine rolling a ball downhill on a loss landscape. The learning rate controls step size — too big and you overshoot, too small and training takes forever. Start with 0.001 and adjust from there.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ml-2',
    courseId: 'machine-learning',
    content:
      'The bias-variance tradeoff is central to ML. High bias = underfitting (model too simple), high variance = overfitting (model memorizes training data). Regularization (L1/L2) helps control variance at the cost of slightly more bias.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ml-3',
    courseId: 'machine-learning',
    content:
      'For the practical assignment: start early and understand the data before writing code. Visualize your features, check for missing values, and establish a baseline model first. Then iterate with more complex approaches.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ml-4',
    courseId: 'machine-learning',
    content:
      'The mlvu.github.io website has all the lecture materials and is genuinely one of the best ML resources available. Watch the videos and do the exercises — they\'re directly aligned with the exam content.',
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

  // ========== Probability & Statistics ==========
  {
    id: 'tip-ps-1',
    courseId: 'probability-statistics',
    content:
      'Bayes\' rule is just the product rule rearranged: P(A|B) = P(B|A)·P(A)/P(B). To remember it: "the probability of the hypothesis given the evidence equals the likelihood times the prior, divided by the evidence." This formula appears everywhere in AI.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ps-2',
    courseId: 'probability-statistics',
    content:
      'The free online textbook at probabilitycourse.com mirrors the course perfectly. Each chapter has worked examples and practice problems. Do these before the exam — the exam problems are very similar in style.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-ps-3',
    courseId: 'probability-statistics',
    content:
      'For hypothesis testing: always write out H₀ and H₁ first, then determine the test statistic, find the critical region or p-value, and make your decision. This structured approach prevents errors and earns full marks even if the final answer is wrong.',
    author: 'AI @ VU Student',
  },

  // ========== Project Conversational Agents ==========
  {
    id: 'tip-pca-1',
    courseId: 'project-conversational-agents',
    content:
      'Start by building your ontology (knowledge base) properly — a well-structured ontology makes the rest of the project much easier. Think about what attributes recipes have (ingredients, cuisine, dietary restrictions) and how they relate to user preferences.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pca-2',
    courseId: 'project-conversational-agents',
    content:
      'For the NLU pipeline: train with diverse phrasings for each intent. Users will say "I don\'t want spicy food" and "no spicy dishes please" and "skip the hot stuff" — your model needs to handle all of these. More training data = better accuracy.',
    author: 'AI @ VU Student',
  },
  {
    id: 'tip-pca-3',
    courseId: 'project-conversational-agents',
    content:
      'The extensions component (30% of your grade) is where you can really shine. Consider adding: exclusion filters ("I don\'t want X"), visual recipe cards, dietary restriction support, or multi-turn conversation memory. Pick something that genuinely improves the user experience.',
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
      'The IS final exam covers lectures 8 through 13 (the midterm covered 1–7). If you scored a 5 or above on the midterm, you can take the final. For studying: go back over the practical booklets/docs you filled in during the weeks — the exam questions are similar in style.',
    author: 'AI @ VU Class of 2028',
  },
  {
    id: 'tip-is-4',
    courseId: 'intelligent-systems',
    content:
      'In IS assignments, always check Discord for clarifications — TAs post important corrections there that may not appear on Canvas. For example, in one assignment a code snippet\'s P(...) placeholder needed to be commented out rather than filled in, which was only announced on Discord.',
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
    id: 'tip-elt-1',
    courseId: 'english-language-test',
    content:
      'For the English Language Test: you\'re assigned to exam rooms based on surname ranges (e.g. A–K in one set of rooms, L–Z in another). Check Canvas announcements for your specific room. If you miss the morning slot, there are multiple time blocks throughout the day — call the VU Taalcentrum immediately to see if you can attend a later block.',
    author: 'AI @ VU Class of 2028',
  },
];

