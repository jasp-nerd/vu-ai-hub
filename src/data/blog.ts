import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'surviving-first-year',
    title: 'Surviving Your First Year in the AI Bachelor',
    date: '2026-02-15',
    author: 'AI @ VU Team',
    excerpt:
      'Everything I wish I knew before starting the AI bachelor at VU Amsterdam. From managing your workload to finding your study rhythm.',
    content: `Starting the AI bachelor at VU Amsterdam is exciting but can also be overwhelming. Here's what I wish someone had told me before I started.

## The workload is real

The AI bachelor is one of the more demanding programs at VU. You'll be juggling logic and math (Logic and Sets for AI), programming (Python), psychology, and AI-specific content — often all at the same time. Don't underestimate the time commitment.

**My advice:** Treat university like a job. Be on campus from 9 to 5, attend all lectures, and use the gaps between classes to work on assignments. If you do this consistently, you'll rarely need to work evenings or weekends.

## Form a study group early

This is probably the single best thing you can do. Find 3-4 people in your first week and commit to working together. You'll:

- Learn faster by explaining concepts to each other
- Stay motivated when things get tough
- Have people to split the workload on group projects
- Actually enjoy the process more

## Don't skip the math

It's tempting to focus on the "cool" AI stuff and neglect the foundations. Don't. Logic and Sets for AI, Computational Thinking, and programming fundamentals are the foundation of everything you'll do later — machine learning, intelligent systems, computer vision, NLP. If you build a shaky foundation now, you'll pay for it in year 2 and 3.

## Use the university resources

VU offers a lot of support that many students don't know about or don't use:

- **Study advisors** — They're there to help, not to judge. If you're struggling, talk to them early
- **Math support center** — Free drop-in tutoring for logic and math courses
- **Student psychologists** — Mental health matters, especially during exam periods
- **Career services** — Start thinking about internships from year 2

## Take care of yourself

This sounds obvious but it's easy to forget when deadlines pile up. Sleep enough, exercise, eat properly, and maintain a social life outside of your studies. Burning out in year 1 is more common than you'd think.

The AI bachelor is challenging but also incredibly rewarding. You'll learn things that are genuinely shaping the future. Embrace the difficulty — that's where the growth happens.`,
    tags: ['first-year', 'advice', 'student-life'],
  },
  {
    id: 'post-2',
    slug: 'exam-preparation-strategies',
    title: 'How I Prepare for Exams (and Actually Retain Things)',
    date: '2026-02-01',
    author: 'AI @ VU Team',
    excerpt:
      'A practical guide to exam preparation strategies that work for technical courses. Active recall, spaced repetition, and practice problems.',
    content: `After 2+ years of exams in the AI bachelor, I've refined my exam preparation strategy. Here's what actually works for technical courses.

## Start early with active recall

The biggest mistake students make is passive studying — rereading slides, highlighting notes, watching lecture recordings. This feels productive but barely works.

Instead, use **active recall**: close your notes and try to explain concepts from memory. Write down everything you remember about a topic, then check what you missed. This is uncomfortable but extremely effective.

## Spaced repetition for definitions and formulas

For courses with lots of definitions, theorems, or formulas (Logic and Sets for AI, Modelling Human Behaviour), use spaced repetition:

1. Make flashcards (Anki is great for this)
2. Review them on a schedule — new cards daily, old cards at increasing intervals
3. Start 3-4 weeks before the exam, not 3-4 days

## Practice problems are non-negotiable

For math and programming courses, doing practice problems is the single most important preparation activity. Aim to:

- Complete all assigned problem sets (even ungraded ones)
- Work through past exams under timed conditions
- Solve problems without looking at solutions first — struggle is where learning happens

## The "explain it to a friend" test

If you can explain a concept clearly to someone who doesn't understand it, you truly know it. Study groups are perfect for this. Take turns being the "teacher" for different topics.

## Exam day tips

- Get a good night's sleep (cramming the night before rarely helps for technical courses)
- Arrive early and do a quick review of key formulas
- Read all questions before starting — do the ones you're most confident about first
- Show your work clearly, even if you're not sure — partial credit adds up
- If you're stuck, move on and come back later with fresh eyes`,
    tags: ['exams', 'study-tips', 'productivity'],
  },
  {
    id: 'post-3',
    slug: 'second-year-guide-dsa',
    title: "A Second-Year Student's Guide to Data Structures & Algorithms",
    date: '2026-02-20',
    author: 'AI @ VU Team',
    excerpt:
      'Key data structures, algorithm analysis tips, and common exam patterns for DSA — one of the most challenging courses in the AI bachelor.',
    content: `Data Structures & Algorithms (DSA) is the course that separates casual coders from computer scientists. Here's how to approach it strategically.

## Understand the "Why" Before the "How"

DSA isn't about memorizing algorithms — it's about understanding *why* they work and *when* to use them. Before diving into code, ask yourself:
- What problem does this data structure solve?
- What are the trade-offs compared to alternatives?
- When would I choose this over something simpler?

For example, a hash table gives O(1) average lookup but O(n) worst-case. A balanced BST gives O(log n) guaranteed. Which you choose depends on whether you need worst-case guarantees.

## The Big-O Hierarchy

Commit this to memory:

**O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)**

When analyzing code:
- **Single loop over n elements** → O(n)
- **Nested loops** → O(n²) (usually)
- **Dividing the problem in half each step** → O(log n)
- **Divide-and-conquer with linear merge** → O(n log n)

## Sorting Algorithms: Know the Trade-Offs

| Algorithm | Best | Average | Worst | Stable? | In-Place? |
|-----------|------|---------|-------|---------|-----------|
| Insertion Sort | O(n) | O(n²) | O(n²) | ✓ | ✓ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | ✓ | ✗ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | ✗ | ✓ |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | ✗ | ✓ |

The exam loves asking "which sorting algorithm would you use for X scenario?" Understanding these trade-offs is key.

## Graphs: The Exam Favorite

Graph problems appear on nearly every DSA exam. Master these:

1. **BFS** (Breadth-First Search) — Uses a queue, finds shortest path in unweighted graphs
2. **DFS** (Depth-First Search) — Uses a stack/recursion, useful for topological sort and cycle detection
3. **Dijkstra's** — Shortest path with non-negative weights (greedy)
4. **Prim's/Kruskal's** — Minimum spanning trees

**Pro tip:** Always draw the graph by hand and trace through the algorithm step by step. This prevents errors and helps you understand what's happening.

## Exam Strategy

The DSA course has two midterm exams plus assignments. For the exams:
- Practice writing pseudocode by hand (no IDE autocomplete to save you!)
- Work through past exams under timed conditions
- Focus on understanding correctness proofs — the exam tests "prove this works" as much as "make this work"
- The assignments are only 30% of your grade but they build the skills you need for the exams`,
    tags: ['dsa', 'second-year', 'algorithms', 'study-guide'],
  },
  {
    id: 'post-4',
    slug: 'surviving-multi-agent-systems',
    title: 'Surviving Multi-Agent Systems: A Prolog & MARBEL Primer',
    date: '2026-02-22',
    author: 'AI @ VU Team',
    excerpt:
      'How to approach Multi-Agent Systems — from Prolog fundamentals and common pitfalls to MARBEL agent programming and exam preparation.',
    content: `Multi-Agent Systems (MAS) is unlike any other course you've taken. It combines logic programming (Prolog), agent theory, and practical agent development (MARBEL). Here's how to navigate it.

## Prolog: A Different Way of Thinking

If you've only programmed in Python or Java, Prolog will feel alien. There are no for-loops, no assignments, no mutable state. Instead:
- You declare **facts** and **rules**
- You ask **queries** that Prolog tries to prove
- Prolog searches for solutions using **backward chaining** with **depth-first search**

The biggest mental shift: you describe *what* is true, not *how* to compute it.

## The #1 Prolog Mistake (and How to Avoid It)

**Confusing \`=\` (unification) and \`is\` (arithmetic evaluation).**

\`\`\`
?- X = 4+3.
X = 4+3.      ← NOT 7! It's just the term "4+3"

?- X is 4+3.
X = 7.        ← Now it evaluates the arithmetic
\`\`\`

This single distinction accounts for a huge number of exam errors. Remember:
- \`=\` matches terms structurally (pattern matching)
- \`is\` evaluates the right side arithmetically

## Recursion and Accumulators

Prolog uses recursion instead of loops. The efficient pattern uses an **accumulator** — an extra argument that carries the partial result:

\`\`\`prolog
% Inefficient (builds up stack)
length([], 0).
length([_|T], N) :- length(T, N1), N is N1 + 1.

% Efficient (tail recursive with accumulator)
length(L, N) :- length_acc(L, 0, N).
length_acc([], Acc, Acc).
length_acc([_|T], Acc, N) :- Acc1 is Acc + 1, length_acc(T, Acc1, N).
\`\`\`

Practice converting standard recursion to tail recursion — it's a common exam question.

## MARBEL Agent Programming

The practical part of MAS involves programming agents in MARBEL. The key files:

| File | Purpose |
|------|---------|
| .mas2g | Configuration, percept handlers |
| .mod2g | Action rules (if-then) |
| .pl | Prolog knowledge base |

Remember the percept handler types:
- **add** — for percepts sent once (e.g., color at startup)
- **update** — for percepts that change (e.g., robot position)
- **replace** — for percepts sent every cycle (e.g., sensor data)

## Exam Tips

The MAS exam is roughly: Prolog queries (~10 pts), search trees (~10 pts), concepts (~10 pts), Prolog programming (~20 pts), agent theory (~8 pts), MARBEL (~40 pts).

- **MARBEL is worth the most** — practice reading and modifying agent code
- For Prolog queries, work through them by hand, step by step
- Know the agent environment properties (observable, deterministic, static, etc.)
- Practice search trees: trace through Prolog's execution order systematically`,
    tags: ['mas', 'prolog', 'second-year', 'study-guide'],
  },
  {
    id: 'post-5',
    slug: 'math-behind-ai',
    title: 'The Math Behind AI: What You Actually Need to Know',
    date: '2026-02-24',
    author: 'AI @ VU Team',
    excerpt:
      'How Linear Algebra, Calculus, and Probability & Statistics connect to Machine Learning — and why those math courses matter more than you think.',
    content: `Many AI students see math courses as obstacles rather than foundations. Here's why they're directly relevant to everything you'll do in machine learning and beyond.

## Linear Algebra → The Language of Data

Machine Learning operates on vectors and matrices. Every image is a matrix of pixels, every dataset is a matrix of features, every neural network layer is a matrix multiplication.

**Key connections:**
- **Matrix multiplication** — Every layer of a neural network: output = W·x + b
- **Eigenvalues & eigenvectors** — Principal Component Analysis (PCA) for dimensionality reduction
- **Vector operations** — Cosine similarity, dot products for measuring word/document similarity
- **Matrix decomposition** — SVD is used in recommendation systems, image compression, and NLP

When you're computing eigenvalues in Linear Algebra, you're learning the foundation of PCA — one of the most-used techniques in data science.

## Calculus → How Models Learn

Gradient descent — the algorithm that trains nearly every modern ML model — is pure calculus.

**Key connections:**
- **Derivatives** — The gradient ∇L tells us how to adjust weights to reduce the loss
- **Chain rule** — Backpropagation is just the chain rule applied recursively through a neural network
- **Partial derivatives** — Gradients in multiple dimensions (∂L/∂w for every weight w)
- **Limits & continuity** — Understanding when optimization is well-defined

The gradient of f(x,y) = x²y + 3y² is ∇f = (2xy, x² + 6y). In ML, replace x and y with model weights, and f with the loss function — that's exactly how neural networks learn.

## Probability & Statistics → Making Decisions Under Uncertainty

AI deals with uncertain information. You never have perfect data, and models always have some error.

**Key connections:**
- **Bayes' rule** — The foundation of Bayesian machine learning, spam filters, medical diagnosis
- **Probability distributions** — Understanding your data (normal, binomial, Poisson distributions)
- **Hypothesis testing** — "Is my model significantly better?" requires p-values and confidence intervals
- **Expected value & variance** — Risk assessment, decision making, reinforcement learning reward functions
- **The Central Limit Theorem** — Why averaging works and why larger datasets give better estimates

## The Big Picture

In the AI bachelor, the math courses come in Year 1, and the applications come in Year 2-3. It might feel disconnected while you're computing limits or solving systems of equations, but every one of those skills has a direct application:

| Math Concept | AI Application |
|---|---|
| Matrix multiplication | Neural network forward pass |
| Eigenvalues | PCA, spectral clustering |
| Gradient (∂f/∂x) | Training any model (gradient descent) |
| Chain rule | Backpropagation |
| Bayes' rule | Probabilistic models, classification |
| Distributions | Data modeling, generative models |
| Hypothesis testing | Model evaluation, A/B testing |

## Practical Advice

1. **Don't skip the intuition.** 3Blue1Brown's "Essence of Linear Algebra" and "Essence of Calculus" videos are incredible for building visual understanding
2. **Connect math to code.** When you learn matrix multiplication, implement it in NumPy. When you learn derivatives, implement gradient descent from scratch
3. **Review before ML.** Before Machine Learning starts, spend a weekend reviewing gradients, matrix operations, and Bayes' rule — it pays off enormously`,
    tags: ['math', 'machine-learning', 'linear-algebra', 'calculus', 'probability'],
  },
  {
    id: 'post-6',
    slug: 'computational-thinking-easiest-start',
    title: 'Why Computational Thinking Is the Easiest Way to Start Your AI Journey',
    date: '2026-02-25',
    author: 'AI @ VU Team',
    excerpt:
      'Computational Thinking is one of the friendliest courses in the AI bachelor. Here\'s what you\'ll learn, how the course works, and why you really don\'t need to stress.',
    content: `If you're about to start the AI bachelor at VU Amsterdam and feeling nervous — take a breath. Computational Thinking (X_400475) is genuinely one of the most approachable courses you'll encounter in the entire program. Here's everything you need to know.

## What the course actually covers

The course is structured in 5 weeks, each building on the last:

| Week | Topics | Syllabus Chapters |
|------|--------|-------------------|
| 1 | Solution strategies (modeling, formulas, guess & check), mathematical proof | Ch. 1, 2, 3 |
| 2 | Algorithms, flowcharts, recursion, pseudocode, intro to Python | Ch. 4 |
| 3 | Linear search, binary search, time complexity & Big O notation | Ch. 5, 6 |
| 4 | Sorting algorithms: bubble sort, merge sort, quicksort | Ch. 7 |
| 5 | Graph theory: Dijkstra's, Prim's, Kruskal's algorithms | Ch. 8, 9, 10 |

That's it. Five weeks, ten chapters, and a group project. The material is introductory — no prior programming experience is expected.

## Why it's easy (really)

**The grading is generous:**
- 45% individual practicum assignments (follow the lecture material closely)
- 40% group project (the topic changes each year, but always involves designing and presenting an algorithm)
- 15% two supervised quizzes (short MC + T/F questions)

The quizzes are multiple choice and true/false. If you've watched the video lectures and read the syllabus chapters, you'll recognise every single question. Many students score 90-100% on these.

**The assignments are guided:** Each week's assignment directly applies what was covered in lectures. There are no trick questions or surprise topics.

**The project is fun:** The group project asks your team to design an algorithm for a real-world scenario (the exact topic changes each year). You'll write pseudocode, create flowcharts, implement it in Python, and give a short presentation. Start early and it's genuinely enjoyable.

## Tips from students who've been there

1. **Watch the video lectures before the live sessions.** This is a flipped classroom — the videos ARE the primary teaching. Lectures are for Q&A and working through cases.

2. **Practice flowcharts and pseudocode by hand.** These appear on quizzes and assignments. Standard shapes: rectangles (process), diamonds (decision), parallelograms (I/O).

3. **Don't skip graph theory week.** Weeks 1-4 feel easy, and students sometimes relax for week 5. But graphs (Dijkstra, Prim, Kruskal) are heavier and show up on the final quiz.

4. **Start the group project in week 3, not week 5.** Groups that wait until the last week always rush the report and lose easy marks on documentation.

5. **You don't need to attend every lecture.** Everything is in the syllabus and video lectures. If you prefer self-study, check out [Aniel's Lectures on YouTube](https://www.youtube.com/@anielslectures) for clear explanations of the exact topics covered.

6. **Use this course to make friends.** It's one of the very first courses you'll take. Team up with new people, explore study groups — these friendships often last the entire bachelor.

## Helpful YouTube resources

- **Big O Notation:** Search for "Big O Notation Full Course" on YouTube — freeCodeCamp has an excellent beginner-friendly video
- **Sorting Algorithms:** Look for visual explanations of bubble sort, merge sort, and quicksort
- **Graph Algorithms:** freeCodeCamp's "Graph Algorithms for Beginners" is a great 2-hour overview
- **Kruskal's & Dijkstra's:** Search for visual walkthroughs — seeing the algorithms step-by-step makes them click

## The bottom line

Computational Thinking is designed to ease you into algorithmic thinking. It's not trying to break you — it's trying to build your foundation. Keep up with the weekly material, start the project early, and you'll walk out with a great grade and some new friends. Enjoy it!`,
    tags: ['computational-thinking', 'first-year', 'study-guide', 'beginner'],
  },
  {
    id: 'post-7',
    slug: 'first-week-survival-guide',
    title: 'Your First Week Survival Guide: Canvas, Groups \u0026 the Stuff Nobody Tells You',
    date: '2026-02-25',
    author: 'AI @ VU Team',
    excerpt:
      'The things that tripped up the most students in their first week — from Canvas group sign-ups to timetable syncing. Don\'t learn these the hard way.',
    content: `Your first week in the AI bachelor is less about algorithms and more about logistics. Based on real experiences from the Class of 2028, here are the things that catch new students off guard — and how to handle them like a pro.

## Sync your timetable IMMEDIATELY

Before anything else, go to [rooster.vu.nl](https://rooster.vu.nl), find your schedule, and click the sync button in the top right corner. This lets you subscribe your Google Calendar, Outlook, or Apple Calendar to your VU schedule. It auto-updates when rooms or times change — which happens more often than you'd think.

Don't rely on checking the website manually. You *will* miss a room change or a cancelled session eventually.

## Canvas group sign-ups close FAST

This is the #1 thing that catches new students off guard. Several courses require you to sign up for tutor groups, practicum groups, or project groups through Canvas → People → Groups. Here's the problem: **deadlines can close on the very first day of teaching, or even the day before.**

For **Introduction to AI**, tutor groups are mandatory — if you miss sign-up, you get randomly assigned to whatever slot is left. For **Computational Thinking**, your practicum group IS your project group (worth 40% of your grade), so you're essentially choosing your project partners.

**Action item:** The moment a course appears on Canvas, check the Groups section and sign up. Set a calendar reminder for the day courses go live.

## Join the Mentor Program

The VU Mentor Program is a free, university-funded initiative specifically for first-year students. They organize:

- **Study prep sessions** before exams
- **Game nights** and social events
- **Peer mentoring** with students who've been through Year 1

This is one of the best-kept secrets of the program. It costs nothing and instantly connects you with people who know the ropes. Combine this with the **Librae Community** (which organizes social events like café meetups) and **STORM** (the AI study association), and you'll have a solid social network before October.

## Don't skip Week 1 videos

This applies especially to Computational Thinking. The course uses a flipped classroom format: you watch videos at home, then work through cases in class. The Week 1 videos might not be uploaded on Day 1 — they sometimes appear a day or two into the period.

Students who waited for "everything to be ready" before starting found themselves behind by the end of Week 1. Turn on Canvas notifications so you get pinged the moment new content drops, and watch videos as soon as they're available.

## Course-specific gotchas

A few things that surprised students in Period 1:

- **Introduction to Psychology** has a guessing penalty on exams. Random guessing can actually *lower* your score. Check the exam instructions carefully.
- **Introduction to AI** tutor groups are mandatory for passing — this isn't the case for every course, so it catches people off guard.
- **Computational Thinking** Quiz 2 is harder than Quiz 1 for most students. Make sure you know Kruskal's algorithm — it's in the syllabus and it's tested.

## Set up your tools early

- **VS Code** — While Jupyter is used in some courses, VS Code is more stable for managing project folders. Install it alongside Jupyter.
- **Python** — Get Anaconda installed before courses start. You'll need it for multiple courses.
- **Canvas notifications** — Turn these on. Seriously. Important announcements about group deadlines, schedule changes, and assignment clarifications come through Canvas.

## The bottom line

Your first week is about systems, not studying. Get your calendar synced, sign up for groups, join the Mentor Program, and set up your tools. Do these things in Week 1 and you'll spend the rest of the period actually learning instead of scrambling to catch up on logistics.`,
    tags: ['first-year', 'first-week', 'logistics', 'advice'],
  },
];
