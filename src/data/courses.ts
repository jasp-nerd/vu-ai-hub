import type { Course } from '../types';

export const courses: Course[] = [
  // ========== YEAR 1 — Mandatory ==========
  {
    id: 'computational-thinking',
    slug: 'computational-thinking',
    name: 'Computational Thinking',
    code: 'X_400475',
    year: 1,
    period: 1,
    credits: '3EC',
    description:
      'Foundations of computational thinking: solution strategies, algorithms (search, sorting, graph), and problem-solving for AI. One of the most accessible and beginner-friendly courses in the programme.',
    overview: `Computational Thinking is one of the friendliest introductions to the AI bachelor programme. Over just five weeks, you'll learn different solution strategies (modeling, formulas, guess and check), fundamental algorithms (linear search, binary search, bubble sort, merge sort, quicksort), and graph algorithms (Dijkstra's, Prim's, Kruskal's). The course uses a flipped-classroom format: you watch short video lectures at home and then work through real-world cases and exercises during the live sessions. No prior programming experience is needed — Python basics are introduced gently alongside the algorithmic concepts. Weekly practicum assignments let you apply what you've learned immediately, and the course concludes with a fun group project where you design, implement, and present an algorithm for a real-world scenario. The supervised quizzes are short multiple-choice and true/false tests that closely follow the syllabus, so if you keep up with the weekly material you'll do great.`,
    objectives:
      'Knowledge and understanding: at the end of the course, students will be familiar with basic knowledge of some solution strategies (e.g., guest and check, modeling, formulas,) and algorithms (search algorithms, sorting algorithms, and graph algorithms) to solve problems. Students will also have knowledge of creating algorithms. Applying knowledge and understanding: students will be able to implement basic solutions strategies, search algorithms, sorting algorithms, and graph algorithms. Making judgements: students will be able to choose the right solution strategy and apply that to solve problems. Communication skills: students will be able to write a project report and give an oral presentation of their project to peers. Learning skills: students will be trained in analyzing problems, translating algorithms to flowchart, and writing pseudocodes to implement algorithms.',
    assessment:
      'The final grade is based on the individual practicum assignments (45%), group project assignment (40%), and two supervised quizzes (15% together) on campus (15%). For all three parts separately, the average grade should be at least a 5.5 to pass the course. During the project presentations, questions are asked that are considered during the project\'s grading. This means that grades within a group may vary from person to person. You CANNOT redo the practical assignments or the project if you have not passed them or if you have not completed them. If the average grade of the practical assignments or the project is less than 5.5, you will fail the course and must retake the course next year.',
    teachingMethods: '(video) lectures, practical sessions, project, presentations, self-study',
    literature: 'Syllabus and video lectures/clips',
    prerequisites: '',
    difficulty: 2,
    tags: ['foundations', 'programming', 'required'],
    workgroupInfo: {
      mandatory: false,
      detail: 'Practicum sessions are not mandatory to attend, but your practicum group IS your project group (worth 40%). Sign up for a group on Canvas — you cannot switch later.',
    },
  },
  {
    id: 'english-language-test',
    slug: 'english-language-test',
    name: 'English Language Test',
    code: 'VU_ELT',
    year: 1,
    period: 1,
    credits: '0EC',
    description:
      'Assessment of English proficiency for the English-taught AI bachelor program.',
    overview: `The VU English Language Proficiency Test is a mandatory digital test for all first-year bachelor students in English-taught programmes. It takes place in September in the DigiTenT at the VU campus.

The test consists of 200 closed questions (multiple choice and fill-in-the-blank) covering eight topic areas:
• **Grammar** — parts of speech, verb tenses, subject–verb agreement, articles, prepositions, conditionals
• **Spelling and punctuation** — commonly misspelled words, apostrophes, commas, semicolons, colons
• **Structuring** — sentence and paragraph organisation, logical connectors, cohesion
• **Vocabulary/usage** — academic and general word choice, collocations, commonly confused words
• **Phrasing** — natural English expressions, formal vs. informal register, idiomatic language
• **Reading comprehension** — understanding main ideas, inferring meaning from context, identifying tone
• **Pronunciation** — word stress, vowel sounds, silent letters (tested via written phonetic/audio questions)
• **Classroom English** — academic phrases used in lectures, discussions, and presentations

Most students finish in 1.5–2 hours (maximum: 2 hours 45 minutes). If you score above 67% you pass directly. A score of 67% or below ("Low" level) means you must attend a refresher course, so a quick review of grammar terminology and spelling rules is worth the small effort.

The test is designed at a level expected of a high school graduate starting an academic career — you are NOT expected to prepare extensively. If you are comfortable reading and speaking English, you should be fine. That said, knowing the *names* of grammar concepts (e.g. "present perfect continuous", "subordinating conjunction") can trip you up if you've never formally studied grammar terminology. A short refresher is recommended.`,
    objectives:
      'At VU Amsterdam, having a strong command of the language of your study programme is crucial to your academic success. Therefore, all first-year Bachelor students must take a Dutch or English language proficiency test at the beginning of their studies. The required test depends on the language of instruction for your Bachelor\'s programme.',
    assessment: 'The language proficiency test is a digital test consisting of 200 closed questions. Scoring above 67% means you pass directly. A score of 67% or below requires attending a refresher course.',
    teachingMethods: 'The language proficiency test will take place in September in the DigiTenT at the VU campus. No formal teaching — it is a one-time test. If you score Low, you will attend a refresher course afterwards.',
    literature: '',
    prerequisites: '',
    difficulty: 1,
    tags: ['language', 'required'],
  },
  {
    id: 'intro-ai',
    slug: 'introduction-to-artificial-intelligence',
    name: 'Introduction to Artificial Intelligence',
    code: 'X_401089',
    year: 1,
    period: 1,
    credits: '3EC',
    description:
      'Overview of AI: concepts, history, applications, and main subfields including machine learning, knowledge representation, and intelligent systems.',
    overview: `The course combines general lectures surveying the richness of Artificial Intelligence (AI), methodology lectures on conducting AI research, and individual working group sessions where academic skills and AI topics are discussed. Guest lectures cover machine learning, knowledge representation, hybrid intelligence, ethics & philosophy of mind, embodied intelligence, verification & validation, and data wrangling. Students work in groups on a hypothetical AI project: choosing a problem, conducting a literature review, proposing an AI-based solution, and presenting it as both a report and a poster. The goal is to provide a broad introduction to AI and basic academic skills for studying AI at the Bachelor's level.`,
    objectives:
      'After completing this course, students will have: a basic understanding of a number of subfields of AI; (Knowledge and understanding) a good understanding of the academic skills required in studying AI; (Applying knowledge and understanding) some basic skills in writing a project proposal (Communication) a solid understanding of how the degree program in AI is structured. (Lifelong learning skills) some experience with reflecting on the role of AI in society (Making judgements)',
    assessment:
      'Assessment is based on: a group project including a final report (~12 pages) and poster presentation (approximately 70%), and a written MCQ exam based on lecture content (approximately 30%). Weekly assignments (literature review, project proposal sections) all contribute to the final group report. For students who failed, there is an opportunity to resit by resubmitting reflections or improving the group report.',
    teachingMethods:
      'General Lectures on subfields of AI (2x per week); Guest lectures from researchers in specific AI areas; Working groups (weekly mandatory tutor sessions for project work); 1 session on how to deal with diversity in the classroom',
    literature: '',
    prerequisites: '',
    difficulty: 2,
    tags: ['ai', 'foundations', 'required'],
    workgroupInfo: {
      mandatory: true,
      maxAbsences: 2,
      detail: 'Tutor groups (workgroups) are mandatory — you must attend to pass the course. You can miss at most 2 sessions. Sign up for a group on Canvas immediately; the deadline can close on the first day of teaching.',
    },
  },
  {
    id: 'intro-psychology',
    slug: 'introduction-to-psychology-and-its-methods',
    name: 'Introduction to Psychology and its Methods',
    code: 'XB_0069',
    year: 1,
    period: 1,
    credits: '6EC',
    description:
      'Foundations of psychology and research methods: cognition, perception, and empirical approaches relevant to human-centred AI.',
    overview: `This course consists of two parts. In the first part (weeks 1–4, 8 lectures), you get an overview of psychology with an emphasis on its biological and cognitive dimensions: What is the genetic and biological basis of behavior? What is consciousness? How do we see, learn, remember, and think? The concept of intelligence is also covered. In the second part (weeks 5–7, 6 lectures), research methods are discussed so you can evaluate research from a methodological perspective. Topics include: scientific reasoning, validity, measurement scales, reliability, descriptive, correlational, and experimental research, within-subjects and between-subjects designs, factorial designs, small-N designs, and quasi-experimental designs. The course is taught by Dr. Duru G. Özkan from the Department of Behavioural and Movement Sciences (Cognitive Psychology). There are no prerequisites — this is a true introductory course open to all first-year AI students.`,
    objectives:
      'Understand main theories and concepts in psychology, including perception, cognition, behavior, and learning. Identify and describe various research methods used in psychology, such as experiments, correlational studies, surveys, and observational studies. Understand basic principles of psychological measurement and assessment, including reliability, validity, and different types of scales (nominal, ordinal, interval, ratio). Understand how empirical research allows us to deduce things about the mind. Understand the differences between common misconceptions and psychological research.',
    assessment: 'Multiple-choice exam with 56 questions. Grades are chance-corrected (cut-off of 35/56 = passing grade of 5.5). There is one resit opportunity.',
    teachingMethods: '14 lectures across 7 weeks (2 per week): 8 lectures on psychology topics, 6 lectures on research methodology. Canvas provides guided self-study questions for each topic. Estimated workload: 24.5 hours lectures, 2.5 hours exam, 141 hours independent study.',
    literature:
      'Phelps, E.A., Berkman, E.T., & Gazzaniga, M.S. (2022). Psychological Science (7th edition). Norton. Morling, B. (2020). Research Methods in Psychology: Evaluating a World of Information (4th edition). Norton.',
    prerequisites: '',
    difficulty: 2,
    tags: ['psychology', 'foundations', 'required'],
    workgroupInfo: {
      mandatory: false,
      detail: 'This course does not have tutor groups or mandatory workgroups. Assessment is based on multiple-choice exams only.',
    },
  },
  {
    id: 'intelligent-systems',
    slug: 'intelligent-systems',
    name: 'Intelligent Systems',
    code: 'XB_0031',
    year: 1,
    period: 2,
    credits: '6EC',
    description:
      'Core concepts of intelligent systems: knowledge representation, reasoning, search algorithms, and agent architectures.',
    overview: `The Intelligents Systems course focuses on the development and scientific analysis of methods for rational agents. The course is assessed through two individual partial exams (70% total) and 11 practical assignments (30%).
The first partial exam covers lectures 1-7 (Introduction, Rational Agents, State-Space Representations, Uninformed & Informed Search, Adversarial Search, and Logical Agents). The second partial exam covers lectures 8-13 (Vagueness, Uncertainty & Bayesian Networks, and Machine Learning). Both exams must be passed with a minimum grade of 5, and the average of the two must be at least 5.5.
For the practical assignments, you must pass at least 7 out of the 11 assignments given in weeks 2-7. The grade scales linearly from 6.5 (7 passed) to 10 (11 passed). You must pass both the exams component and the practical component to pass the course.
Additionally, you can earn a 0.3 bonus point on your final grade if you participate in at least 6 out of the 7 working groups. Grades between 5.0 and 6.0 are rounded to the nearest whole number (meaning a 5.4 is a fail, and 5.5 is a 6), while all other grades are rounded to the nearest 0.5.`,
    objectives:
      'Knowledge and understanding: at the end of the course, the students will be familiar with basic knowledge of some of the core aspects of AI: state-space representations, search, adversarial search, logic, automated reasoning, reasoning with uncertainty and vagueness and machine learning. Applying knowledge and understanding: students will be able to implement basic (adversarial) search algorithms, as well as knowledge based and adaptive methods to build Intelligent Agents. Making judgements: the students will have a basic understanding of the ethical and societal implications of the developments in AI. Communication skills: students will be able to write a scientific reports about an original research question in a group of students. Learning skills: students will be trained in acquiring a set of complex AI related topics in a restricted period of time, come up with an original research question and perform the necessary (empirical) research.',
    assessment:
      'The grade will be determined via two (digital) exams (35%+35%), and a number of practical assignments (30% in total). All three components have to been completed successfully to pass the course. There will be a (single) resit exam, combining both partial results, but no resits for the practical assignments.',
    teachingMethods:
      '2 lectures of 2 hours per week. Tutorials to get started with the programming exercises in the first weeks. Working groups to practice the theoretical material (2 hours). Practical groups to apply the acquired knowledge (flexible, on demand)',
    literature: 'Chapters from "AI a Modern Approach", Russell and Norwig, provided as a part of a reader.',
    prerequisites: '',
    difficulty: 3,
    tags: ['ai', 'foundations', 'required'],
    workgroupInfo: {
      mandatory: false,
      maxAbsences: 1,
      detail: 'Workgroups/seminars are not mandatory, but attending 6 out of 7 sessions earns a 0.3 bonus point on your final grade (if you pass the course). Practical sessions for assignment help are optional and require sign-up on Canvas.',
    },
  },
  {
    id: 'intro-python-ai',
    slug: 'introduction-to-python-programming-for-ai',
    name: 'Introduction to Python Programming for AI',
    code: 'XB_0145',
    year: 1,
    period: 2,
    credits: '6EC',
    description:
      'Python programming fundamentals: variables, control flow, data structures, and libraries essential for AI development.',
    overview: `This course will equip students with a wide range of programming skills. They will learn how to write programs for solving problems using different Data types (e.g., int, boolean, float, string, and custom types), Data structures (e.g., lists, sets, dictionaries, tuples, and matrices), expressions, control flow statements (e.g., conditionals, and loops) Also, they will gain a thorough understanding of standard functions, learn how to define functions, error-handling, perform I/O tasks, and grasp the basics of Object-Oriented Programming. Finally, students will also learn how to: write and debug programs using pen and paper, write and debug programs using a professional IDE, and write and debug programs using computational notebooks.`,
    objectives:
      'This course aims to teach students how to solve problems by means of a computer program. Learning Python is actually a side effect that happens because the programming language used to solve problems during the course is Python. However, the knowledge acquired by the students during the course is transferable to other programming languages like Java or C. Knowledge and understanding: at the end of the course, students will be familiar with basic programming concepts, such as data types, data structures, variables, expressions, control flow statements, methods, classes, and error-handling. Applying knowledge and understanding: Students will be able to write and read small to medium-sized programs when given a natural language description of the problem. Also, students will learn how to read, debug, and fix existing programs. Communication skills: Students will be able to read code written by others and write code such that others can understand it. Both, using pen and paper and computer. Learning skills: Students will learn how to read technical documentation (e.g., programming language and library references) and how to use programming as a tool for solving problems. Making judgments: Students will be able to judge whether a given program solves or not a certain problem.',
    assessment:
      'Programming assignments (10%): There are several programming assignments to be developed individually that are non-resit. This means completing them on time and to the best of your abilities is important. In class quizes (10%): these are exercises/quizes/participation during the lecture and/or practical sessions. Final exam (80%): this exam determines the course\'s final grade. Students must obtain at least a 5.0 on the midterm exam to be able to take the final exam. Also: There will be a resit exam. Possible bonus points are not transferable to the resit exam. Students from previous years cannot transfer grades for assignments.',
    teachingMethods:
      'There will be two lectures per week, as well as two practical sessions per week. Attendance to both practical sessions is mandatory. There is also a significant amount of programming exercises to practice the different programming concepts taught during the course. The exercises will be pen and paper and computer-based.',
    literature:
      'The book used in this course is Think Python: How to Think Like a Computer Scientist, Allen B. Downey, Green Tea Press. The book is available online at: https://greenteapress.com/wp/think-python-2e/.',
    prerequisites: '',
    difficulty: 2,
    tags: ['programming', 'python', 'foundations', 'required'],
    workgroupInfo: {
      mandatory: true,
      detail: 'Attendance at both weekly practical sessions is mandatory. You must submit your work during the session to be marked as present. Missed practicals count as absences.',
    },
  },
  {
    id: 'project-intelligent-systems',
    slug: 'project-intelligent-systems',
    name: 'Project Intelligent Systems',
    code: 'X_401076',
    year: 1,
    period: 3,
    credits: '6EC',
    description:
      'Hands-on group project where you build, evaluate, and write a scientific report about intelligent game-playing bots for the card game Schnapsen.',
    overview: `Project Intelligent Systems is the practical follow-up to the Intelligent Systems course from Period 2. You work in pairs to build AI bots that play the Austrian trick-taking card game **Schnapsen**, then run controlled experiments and write a proper academic research paper about your findings.

The project revolves around defining a research question (e.g. "Does an aggressive strategy outperform a passive one against advanced opponents?"), implementing your bot strategies in Python using the Schnapsen game engine, running thousands of simulated games, analysing the results statistically, and writing everything up in a paper following the Springer Lecture Notes in Computer Science (LNCS) format (~12 pages).

**About Schnapsen:** It is a two-player trick-taking card game with 20 cards (Aces, 10s, Kings, Queens, Jacks in four suits). The goal is to reach 66 points by winning tricks and declaring marriages (King-Queen pairs of the same suit). The game has two phases: Phase 1 with imperfect information (a face-down talon remains) and Phase 2 with perfect information (all remaining cards are known). This makes it an interesting testbed for AI techniques — you can apply minimax and alpha-beta pruning in Phase 2, and Monte Carlo sampling or machine learning approaches in Phase 1.

**Bot techniques you might use:** Rule-based strategies (aggressive, passive, bully-style), RDeep (Monte Carlo sampling of future game states), minimax/alpha-beta pruning for perfect-information play, and ML-based bots using scikit-learn (e.g. MLPClassifier or LogisticRegression trained on game replay data). The Schnapsen engine provides baseline bots like RandBot and RDeepBot to test against.

The course starts with a few introductory lectures refreshing relevant AI concepts and introducing the academic research process. After that, you work self-directed in your pair, consulting TAs during practical sessions.

**What to expect from the individual test:** The test takes place in the final week and is worth 30% of your grade. It focuses heavily on your own project — you will need to summarise your paper in your own words (research question, methodology, results, significance, and discussion of findings), explain how your work connects to the AI methods from the Intelligent Systems course, and name techniques you used as well as additional ones you could have applied. You will also be asked hypothetical "what would happen if the game rules changed?" questions (e.g. what if players alternate who starts each trick, or what if Phase 2 rules applied from the start). For these, you need to reason about whether your bot would still work, what you would change in your implementation and experiments, and what outcomes you would expect. Finally, there are questions about how work was divided in your group and your individual contributions. Make sure you deeply understand every part of your project — not just the code you personally wrote.`,
    objectives:
      'The course teaches students: 1. How to develop an intelligent agent (bot) based on standard Intelligent Systems technology and extensions thereof — including adversarial search, knowledge representation, and machine learning. 2. Basic research and experimental analysis skills through the analysis of how effectively the developed software performs in a controlled scientific experiment. 3. How to report on research findings in a scientific paper following academic conventions (Springer LNCS format). 4. How to peer-review another group\'s research paper and provide constructive feedback.',
    gradingStructure: `**Group Part (60%):**
- Research paper in Springer LNCS format (~12 pages) — covers your research question, bot implementations, experimental setup, results, and discussion

**Individual Part (40%):**
- Individual coding assignment: 10% — implement an AssignmentBot with specific conditions and actions, verified against a server
- Individual test in the final week: 30% — covers understanding of your project and the AI techniques used
- Must score at least 22/40 (equivalent to 5.5) on the individual part

**Peer Review:** Pass/fail — you must submit a quality peer review of another group's paper

**Important:** There is no resit for this course. You must pass all three parts (group, individual, peer review) with at least a 5.5. Not all aspects will be graded — random checks are used.`,
    assessment:
      'Group report 60%, individual test 30%, individual coding assignment 10%, plus a pass/fail peer review. All three parts (group, individual, peer review) must be passed with at least 5.5. No resit available.',
    teachingMethods:
      'A few introductory lectures refreshing IS concepts and introducing the research process, followed by self-directed group work in pairs. TAs are available during practical sessions for guidance. The course includes lectures on research methods and the academic writing process.',
    literature: 'The Schnapsen game engine (Python package from GitHub: intelligent-systems-course/schnapsen) and course materials distributed via Canvas. The Russell & Norvig textbook from Intelligent Systems may be useful as reference.',
    prerequisites: 'Intelligent Systems (XB_0031) — the Period 2 theory course. You will directly apply techniques learned there (search, logic, probability, ML).',
    difficulty: 3,
    tags: ['project', 'ai', 'required', 'schnapsen', 'research'],
    workgroupInfo: {
      mandatory: false,
      detail: 'Practical sessions are not mandatory but highly recommended — TAs are your primary support channel for debugging bots and getting feedback on your research direction.',
    },
  },
  {
    id: 'logic-sets-ai',
    slug: 'logic-and-sets-for-ai',
    name: 'Logic and Sets for AI',
    code: 'XB_0083',
    year: 1,
    period: 4,
    credits: '6EC',
    description:
      'Mathematical foundations: propositional logic, predicate logic, set theory, and formal reasoning for AI.',
    overview: `The sets part of the course starts by introducing the concepts of sets, Venn diagrams, product sets and relations. The student then learns the main characteristics and properties of three particular types of relation: ordering relations, equivalence relations and functions. The sets part concludes with a study of the principle of mathematical induction. The logic part focuses in the first place on propositional logic: truth tables, boolean operators, functional completeness, logical puzzles, SAT-solving. In addition the student will learn the meaning and use formulas of predicate logic, to express mathematical properties and sentences from natural language.`,
    objectives:
      'After completing this course, the student can: express logical statements in propositional and predicate logic (Knowledge and understanding) (Applying knowledge and understanding) reason about the meaning of such formulas through truth tables and models (Applying knowledge and understanding) (Making judgements) argue formally whether one formula implies another one, or that they are equivalent (Applying knowledge and understanding) (Making judgements) reduce a propositional formula to disjunctive or conjunctive normal form (Applying knowledge and understanding) apply reasoning algorithms on propositional formulas (Applying knowledge and understanding) Furthermore, the student is able to: reason about set constructions through Venn diagrams and the algebra of sets (Applying knowledge and understanding) (Making judgements) construct and interpret formal, graphic, and matrix representations of sets, relations and functions determine and argue whether (Applying knowledge and understanding) (Making judgements): a. a relation is reflexive, transitive, symmetric or antisymmetric. b. a relation is an ordering relation, equivalence relation, or a functionc. c. ​a function is injective or surjective construct and interpret compositions of relations (or functions) and their inverses (Applying knowledge and understanding) (Making judgements) construct a proof by mathematical induction (Applying knowledge and understanding)',
    assessment:
      'A written midterm exam (40% of the grade) and a written final exam (60% of the grade). For both the midterm and the final exam, at least a 5.0 must be achieved (and the overall mark must be at least 5.5.). The resit exam covers all material of the course. It is not possible to resit only the midterm exam or only the final exam of the course.',
    teachingMethods:
      'Every week, there is one 2-hour lecture and one 2-hour tutorial for the logic part of the course, and one 2-hour lecture and one 2-hour tutorial for the sets part of the course.',
    literature: '',
    prerequisites: '',
    difficulty: 3,
    tags: ['mathematics', 'logic', 'foundations', 'required'],
    workgroupInfo: {
      mandatory: false,
      detail: 'Working groups are not mandatory but are highly recommended. The tutorials cover exercises that closely mirror exam questions.',
    },
  },
  {
    id: 'modelling-human-behaviour',
    slug: 'modelling-human-behaviour',
    name: 'Modelling Human Behaviour',
    code: 'XB_0036',
    year: 1,
    period: 4,
    credits: '6EC',
    description:
      'Dynamic modelling of human behaviour: build, simulate, and evaluate computational models of processes in psychology, bio-medicine, and social science using Excel and L2-Python.',
    overview: `Dynamic Modelling for Human-Centred Systems (officially "Modelling Human Behaviour") teaches you how to create computational dynamic models of real-world processes — from medication levels in the blood, to bacterial decision-making, to how emotions spread through a group. The course follows a clear modelling-and-simulation cycle with four steps that you'll repeat throughout: (1) Conceptualisation — identify the key concepts and their relationships, (2) Formalisation — translate them into precise numerical or logical rules, (3) Simulation — run the model to generate traces, and (4) Evaluation — check whether the traces match your expected patterns.

In the first half (weeks 1–3), you build models in Microsoft Excel. You'll start with growth models (linear, exponential, logistic), then move to biological models like E. coli food-intake decision-making and Aplysia sea-hare learning (classical conditioning at the neural level). You'll also model social processes: honeybee colony self-organisation, SIR epidemic spread (individual-based vs. population-based), and emotion contagion in groups. The second half (weeks 4–7) switches to L2-Python (a Jupyter Notebook framework) and covers more advanced topics: different types of behaviour (reactive, delayed response, motivation-based, adaptive), agent-based modelling with the BDI model (Beliefs-Desires-Intentions), domain models, analysis models (forward and backward reasoning), and support models. The final assignment asks you to design a complete stress prevention system with domain, analysis, and support models.

The exam is 20 multiple-choice questions and accounts for 40% of your grade. Weekly assignments (5 total, excluding the programming tutorial) make up another 40%, and the final assignment is worth 20%. All partial grades must be above 5.5. The course uses a reader (15 chapters) and lecture slides — both are essential for the exam. The reader chapters are split into "to know" (exam material) and "to understand" (deeper context). Weekly Canvas quizzes help you check your understanding. The programming tutorial (Assignment 3) is pass/fail and must be completed in person with your TA — failing it results in a 0.5 point deduction from your final grade.`,
    objectives:
      'Understand the modelling-and-simulation cycle (conceptualisation, formalisation, simulation, evaluation). Build dynamic models using both numerical (Excel) and logical (L2-Python) representations. Formulate and validate hypotheses about model behaviour. Model growth processes (linear, exponential, logistic). Model biological processes (E. coli decision-making, Aplysia learning). Model social processes (honeybee colony, epidemic spread, emotion contagion). Distinguish between individual-based and population-based modelling approaches. Understand and model different types of behaviour (reactive, delayed response, motivation-based, adaptive). Apply the BDI (Beliefs-Desires-Intentions) agent model. Design domain models, analysis models (forward/backward reasoning), and support models. Implement models in L2-Python using predicates, sorts, scenarios, and rules. Report scientifically about model design, simulation experiments, and evaluation.',
    gradingStructure: 'Final grade = 0.4 × avg(Assignments) + 0.2 × Final Assignment + 0.4 × Exam. All partial grades must be ≥ 5.5. Late submissions lose 1 point per day.',
    assessment:
      'Five weekly assignments (40% combined), one final assignment building a complete stress model system (20%), and a 20-question multiple-choice exam (40%). The programming tutorial (Assignment 3) is pass/fail and must be checked in person. There is a resit for the exam.',
    teachingMethods: 'Two lectures per week plus weekly practical/working group sessions. Assignments alternate between Excel-based modelling (weeks 1-2) and L2-Python implementation (weeks 3-7).',
    literature: 'Course reader with 15 chapters (available on Canvas) covering topics from growth models to driving behaviour. Lecture slides for all 13 lectures.',
    prerequisites: '',
    difficulty: 3,
    tags: ['modelling', 'simulation', 'psychology', 'agent-based', 'excel', 'python', 'required'],
    workgroupInfo: {
      mandatory: true,
      maxAbsences: 1,
      detail: 'Practical/working group sessions are mandatory. Assignment 3 (L2-Python tutorial) MUST be checked in person by your TA during the session — failing to do so results in a 0.5 point deduction from your final grade.',
    },
  },
  {
    id: 'academic-writing',
    slug: 'academic-writing-beta',
    name: 'Academic Writing (BETA)',
    code: 'L_ETBAALG006',
    year: 1,
    period: 5,
    credits: '3EC',
    description:
      'Academic writing skills for AI students: formal English style, structuring arguments, citing sources properly, and writing a literature-review essay.',
    overview: `Academic Writing (BETA) is a 7-week course offered by the Faculty of Humanities that teaches first-year AI students how to write clearly and professionally in English. The course is structured around building one essay from scratch — you start with a 3-sentence "elevator pitch" introduction in Week 2, expand it into a full introduction and body paragraph by Week 4, draft a conclusion in Week 6, and submit a polished 1000-word literature-review essay as your final paper in Week 8.

Each week has a 1-hour lecture for the whole cohort and a 2-hour seminar in small groups (around 10 students), where you get hands-on practice and individual feedback on your writing. Attendance is mandatory (minimum 80%). The lectures follow a logical progression: first you learn why academic English matters and what makes it different from everyday writing, then you dive into structuring introductions (the "inverted pyramid"), using sources through quoting and paraphrasing, building coherent paragraphs (the "hamburger" model with topic sentences), writing conclusions, and finally polishing your academic style and formality.

The final essay requires you to pick an AI-related topic, find 2–5 academic articles, and write a 5-paragraph literature review with a clear thesis statement, three body paragraphs each with a topic sentence, and a concluding paragraph. The course places heavy emphasis on proper referencing (no plagiarism), linguistic accuracy, and maintaining a formal academic tone throughout. AI tools are not allowed to generate content, though you may use them as editorial aids for sentences you have already written yourself.

This is generally considered one of the lighter courses in the programme — the workload is manageable and the assignments build on each other incrementally. The seminars are especially valuable for getting personalized feedback on grammar, punctuation, and vocabulary, helping you identify your own strengths and weaknesses as a writer.`,
    objectives:
      'Gain insight into the specific characteristics of formal written English. Learn the conventions of using sources through quoting, referring, and paraphrasing. Develop academic skills regarding text structure, linguistic accuracy, and clarity of expression. Apply this knowledge by writing an academic text that uses sources appropriately, has no major grammatical errors, uses a clear text structure, and has a style suitable for academic texts.',
    assessment: 'Assignment 1: 3-sentence introduction (pass/fail, required). Assignment 2: introduction + first body paragraph, ~400 words (25% of final grade). Assignment 3: 3-sentence conclusion (pass/fail, required). Assignment 4: final 1000-word literature-review essay (75% of final grade). The unrounded final grade must be at least 5.5 to pass. Assignments 1 and 3 must be passed but do not count toward the grade.',
    teachingMethods: 'Weekly 1-hour lectures (full cohort) and 2-hour seminars (small groups of ~10 students). Attendance is mandatory (minimum 80%). Missing more than 3 sessions leads to exclusion from the final assignment.',
    literature: 'Recommended: M. Hannay & J.L. Mackenzie, Effective Writing in English (3rd ed., 2017); Hilary Glasman-Deal, Science Research Writing for Non-Native Speakers of English (2010). Online: Academic Phrasebank (University of Manchester) and the VU feedback website for Academic English.',
    prerequisites: '',
    difficulty: 2,
    tags: ['writing', 'academic', 'required'],
  },
  {
    id: 'history-of-ai',
    slug: 'history-of-ai',
    name: 'History of AI',
    code: 'XB_0113',
    year: 1,
    period: 5,
    credits: '3EC',
    description:
      'Historical development of computing and AI: from punched cards to stochastic parrots, exploring key milestones, paradigm shifts, and the societal impact of digital culture.',
    overview: `History of AI (also known as "History of Science") takes you on a fascinating journey through the evolution of computing and artificial intelligence, told from historical, philosophical, ethical, and sociological perspectives. Taught by Professor Danny Beckers, the course is built around the textbook "Computer: A History of the Information Machine" by Martin Campbell-Kelly (4th edition, 2023) — chapters 4 through 15. The lectures don't just repeat the book; they run a parallel narrative with a strong emphasis on the European side of the story, while the book focuses more on the American perspective.

The seven lectures cover: (1) the prehistory of AI and computing — from Charles Babbage and punched card machines to Alonzo Church and Alan Turing's foundational work, (2) creating computers — the construction of early machines like EDVAC and the birth of stored-program computing, (3) the sound of software — the rise of programming and software as a discipline, with connections to early sci-fi like Metropolis and Asimov, (4) computing crisis — the software crisis of the 1960s, the evolution of programming languages including ALGOL and LISP, and figures like Dijkstra, (5) dream machines — the space race, early AI programs like SHRDLU, personal computing pioneers like Douglas Engelbart, and the rise of the PC, (6) neat networks — networking, the personal computing boom, and the internet era, and (7) the digital divide — modern computing, algorithmic bias (Timnit Gebru's "On the Dangers of Stochastic Parrots"), surveillance capitalism, and AI ethics.

The course is explicitly reflective rather than prescriptive — the goal is not to memorize dates, but to understand how computing and AI emerged within their social context, to distinguish reality from hype, and to confront your own assumptions about technology. The workload is approximately 40 hours of reading, 14 hours of lectures, and 9 hours working on assignments, leaving about 20 hours for exam preparation. There are six weekly group assignments written in essay format, and the exam features three categories of questions: A-questions (lecture content), B-questions (book content), and C-questions (combining both). You pick four questions to answer, each worth 2 points.`,
    objectives:
      'Students acquire knowledge and understanding about the history of computing / AI from various perspectives: computing as a scientific goal, computing as a government (administrative or military) objective / ideal, computing as an economic enterprise (Knowledge and understanding). Students can apply that knowledge and understanding to describe the meanings digital culture has or may have for various people in contemporary society (Applying knowledge and understanding). Students are able to communicate their knowledge and understanding in an effective way, and from various perspectives — thereby they will be better equipped to reflect on their subject of study (Communication)(Making judgements).',
    assessment:
      'Written exam (2h 15min); the exam has 8 A-questions (about lectures), 12 B-questions (about the book), 6 C-questions (combining both), and a NO BONUS question. You pick 4 questions: 1 A-question, 2 B-questions, and 1 C-question, each worth 2 points. If you are not entitled to the bonus point, you must also answer the NO BONUS question (worth 1 point). The bonus is earned if the average of your four best assignments is 6 or higher — this lets you skip the NO BONUS question, effectively starting your exam with 2 points instead of 1. Resit is possible for the exam; resubmission of assignments is generally not allowed.',
    teachingMethods:
      'Weekly lectures by Professor Beckers; TA-led lecture recap sessions (attending one is enough); book recap & assignment working sessions; assignment feedback sessions. Workgroups and seminars are not mandatory but highly recommended. Optional Canvas quizzes help with studying.',
    literature:
      'Martin Campbell-Kelly a.o., Computer: A history of the information machine (fourth edition, 2023). Available as e-book through the VU university library. Students are required to read chapters 4-15. Lectures also reference primary sources such as Turing\'s "On Computable Numbers" (1936), von Neumann\'s first draft of EDVAC, Dijkstra\'s "A Case Against the GOTO Statement", and Gebru et al.\'s "On the Dangers of Stochastic Parrots" (2021).',
    prerequisites: '',
    difficulty: 2,
    tags: ['ai', 'history', 'required'],
    workgroupInfo: {
      mandatory: false,
      detail: 'Seminars and workgroups are not mandatory but strongly recommended. There are three types of sessions you can enroll in: lecture recaps (TA-led review of previous lecture), book recap & assignment working sessions, and assignment feedback sessions. Attending seminars helps you absorb the material and prepare for the essay-style exam.',
    },
  },
  {
    id: 'human-computer-interaction',
    slug: 'human-computer-interaction-for-ai',
    name: 'Human-Computer Interaction for AI',
    code: 'XB_0144',
    year: 1,
    period: 5,
    credits: '6EC',
    description:
      'Designing AI systems for human use: usability, interfaces, and the interaction between humans and intelligent systems.',
    overview: `In many application domains, AI systems must collect input from humans or collaborate with them to enhance their performance and decision-making processes. This course will introduce students in the AI program to the existing theories and methods for the design and evaluation of interactions between humans and [intelligent, socially interactive, or immersive] computing systems. The aim is to give students an understanding of the concepts of usability, user experience (UX), and user-centered design and to equip them with empirical research skills for prototyping and iterative testing of such interactive computing systems. The course is divided into two parts, each achieving different learning goals; In the theoretical part of the course (lectures), students will learn about the core topics in HCI, such as the lifecycle of interaction design, human factors, interaction elements, modeling interaction, and common research methods in HCI studies. In the practical part of the course, students will acquire hands-on research experience by collaborating in groups to design, conduct, and report on an HCI experiment with human participants.`,
    objectives:
      'At the end of this course, students will be able to: Knowledge and understanding: Describe the fundamental principles of user experience design. Describe fundamental input and output techniques for human-computer interaction. Applying knowledge and understanding: Gather requirements for designing interactive systems Design a human-agent interaction to answer a scientifically grounded research question. Apply low-fidelity and high-fidelity prototyping methods in HCI. Making judgements: Conduct user studies to empirically evaluate the UX and usability of their interaction design. Communication: Communicate design solutions and evaluations on an academic level. Lifelong learning skills: Work in teams to achieve a common goal.',
    assessment:
      'The final course grade is composed of two assessment components: Written Exam (Individual - 50% of the final grade) Research project report (Group work - 50% of the final grade) The final grade will be calculated Final Course Grade = 0.5 x Individual Exam Grade + 0.5 x Group Project Report Grade To pass the course, students must pass both the individual exam and the research project report (for each component a grade >=5.5 is required). Please note: The group must submit one report, and all group members will receive the same grade. Resit opportunities will be provided for both the individual exam and the group project report.',
    teachingMethods:
      'This course is taught on campus. The lectures will not be recorded. Attendance in the practical sessions of the course is mandatory.',
    literature:
      'MacKenzie, I. Scott. Human-Computer Interaction : An Empirical Research Perspective, Elsevier Science & Technology, 2013. ProQuest Ebook Central, https://ebookcentral.proquest.com/lib/vunl/detail.action? docID=1110719. (Students have free access to the online version of the book through their VUnetID)',
    prerequisites: '',
    difficulty: 3,
    tags: ['hci', 'ai', 'required'],
    workgroupInfo: {
      mandatory: true,
      detail: 'Attendance in the practical sessions of the course is mandatory.',
    },
  },
  // ========== YEAR 1 — Constrained choice ==========
  {
    id: 'applied-programming-ai',
    slug: 'applied-programming-for-ai',
    name: 'Applied Programming for AI',
    code: 'XB_0102',
    year: 1,
    period: 6,
    credits: '6EC',
    description:
      'Advanced programming for AI: web technologies, HTML/CSS/JavaScript, Git, RESTful APIs, and building data-driven web applications.',
    overview: `In this course, students will implement a complete web application including data acquisition, parsing, cleaning, representation, and interaction. The course builds upon the course Introduction to Python Programming and Computational Thinking. Students will learn how to choose and use different data structures (e.g., lists, dictionaries, tuples, matrices). They also will learn how to choose the right way of presenting information depending on the target audience and type of data.`,
    objectives:
      'The course prepares students for future projects that involve programming within the bachelor programme. Students learn to apply programming concepts in a medium sized project. The course introduces students to web technologies such as HTML, CSS and JavaScript, and commonly used tooling in software development, e.g. Git. (Knowledge and understanding), as well as using and understanding RESTful API services. After completing the course, students will be able to plan, develop, and implement a web application that involves data manipulation and visualization requirements. (Applying knowledge and understanding) (Making Judgements) Students will interact with generative AI tools for coding to explore how to work with them in a collaborative setting. Also, to understand their advantages and limitations.',
    assessment:
      'The student\'s knowledge will be assessed based on their group project\'s implementation, their individual contribution to the development based on version control statistics, and weekly meetings, and a final coding interview. The final grade for this course consists of the following parts: Project Proposal (team) → Pass/fail Implementation (team) → 60% Degree of participation (individual) (20%) Attendance, Contribution to the project. Git Activity, Project report/reflection (individual and team components) → 10% Final demo presentation (team) → 10% Coding interview (individual) → Pass/fail To obtain a passing grade for the course, you must pass the coding interview. Each week you have deliverables that you must implement and push to your repository. Each week, you have partial deliverables that you must submit via Canvas or GitHub. If you do not push your contributions in time, you will automatically get a fail for the coding interview. There is no resit for the coding interview.',
    teachingMethods:
      'A combination of a few lectures and a lot of practical work. Students are expected to be full time available for this course. All practical sessions are mandatory.',
    literature:
      'The following literature will be used: Judith Donath, Alex Dragulescu, Aaron Zinman, Fernanda Viégas, and Rebecca Xiong. 2010. Data portraits. In ACM SIGGRAPH 2010 Art Gallery (SIGGRAPH \'10). Association for Computing Machinery, New York, NY, USA, 375–383. https://doi.org/10.1145/1836786.1836793 Giorgia Lupi. Data Humanism: The Revolutionary Future of Data Visualization. In Printmag, January 30, 2017. https://www.printmag.com/article/data-humanism-future-of-data-visualization/ Edward R. Tufte. 2001. The visual display of quantitative information. Graphics Press, USA. Jacoba Urist. From Paint to Pixels. In The Atlantic, May 14, 2015. https://www.theatlantic.com/entertainment/archive/2015/05/the-rise-of-the-data-artist/392399/ Andy Kirk. 2016. Data Visualisation: A Handbook for Data Driven Design. Sage Publications Ltd.',
    prerequisites:
      'Students should have completed Introduction to Python Programming (XB_0082) with a sufficient grade before they can start this course.',
    difficulty: 3,
    tags: ['programming', 'python', 'elective'],
    workgroupInfo: {
      mandatory: true,
      detail: 'All practical sessions are mandatory. Students are expected to be full-time available for this course.',
    },
  },
  {
    id: 'information-management',
    slug: 'information-management',
    name: 'Information Management',
    code: 'X_401085',
    year: 1,
    period: 6,
    credits: '6EC',
    description:
      'Managing information systems: databases, data structures, and information organisation for AI applications.',
    overview: `No organization can do without information systems. For some organizations, such systems are even of strategic relevance, as they offer a clear competitive advantage. This course explains the relevance and use of information systems in modern organizations. We will briefly sketch how the role of information systems has developed over the years to reach its current ubiquitous level. Special attention is devoted to the rise of the internet and its impact on traditional organizations, as well as the emergence of new types of (cloud-based) organizations. Reasoning from the organizational importance of information systems, we will look into the way information systems are developed such that organizations can achieve their objectives. We will pay considerable attention to an important phase in information system development, namely how we analyze and model business processes. For this purpose, we will rely on the use of classical Petri nets. This course will approach the topic of information management in breadth and in depth. Breadth is achieved by giving an overview of all relevant topics in the area of information management; depth is attained by introducing students to a powerful, formal modeling technique that they will learn to master in the context of organizational analysis.`,
    objectives:
      'Through this course, students will study the topic of information management in breadth and in depth. After taking this course, the student will be able to: 1. Explain the strategic relevance of information systems for modern organizations; (Knowledge and understanding) (Applying knowledge and understanding) 2. Analyze the level of competition within an industry and determine is implications for an information systems strategy; (Applying knowledge and understanding) 3. Understand the impact of the advent of the internet on the management of information within and between organizations; (Knowledge and understanding) 4. Identify the various phases in the development of an information system; (Applying knowledge and understanding) 5. Model simple and moderately complex business processes with a formal modeling technique (Petri nets); (Making judgements) (Applying knowledge and understanding) 6. Analyze process models with respect to various behavioral properties. (Lifelong learning skills)',
    assessment:
      'Intermediate exam (40%), final group project (60%), individual assignments (pass/fail), final exam (pass/fail). Resit options: retake of intermediate exam, retake of final exam, re-submission of individual assignments, re- submission of final group project.',
    teachingMethods: 'This course consists of lectures and practicals. Attendance is not mandatory but highly encouraged.',
    literature:
      '1. "Business Information Management: Improving Performance using Information Systems", by Dave Chaffey and Steve Wood. ISBN: 9780273686552.',
    prerequisites: '',
    difficulty: 3,
    tags: ['data', 'databases', 'elective'],
  },
  // ========== YEAR 2 — Mandatory ==========
  {
    id: 'knowledge-and-data',
    slug: 'knowledge-and-data',
    name: 'Knowledge and Data',
    code: 'X_400083',
    year: 2,
    period: 1,
    credits: '6EC',
    description:
      'Methods and technologies for expressing knowledge and data on the Web: RDF, RDFS, OWL, SPARQL, Linked Data, and Knowledge Graphs.',
    overview: `In this course, we study formalisms that are useful and necessary to represent knowledge and data, in particular when these knowledge and data are to be reused, e.g. published and consumed on the Web. We introduce the concept of Knowledge Graphs, the technologies and representation formats (RDF, RDFS, OWL) for expressing semantics and linked data in a web-accessible format, use the SPARQL query language to query over this data. We finally build a data science application that uses integrated data for some intelligent task. Even though content on the web is generally produced from structured data sources (databases), its representation is in a form that is meant for human consumption. Linked Data allows to scale the walls of this siloed information space, by reusing identifiers and vocabularies across these datasets, and presenting that information in a way that is appropriate for machine consumption.`,
    objectives:
      'The objective of the Knowledge and Data course is to make students acquainted with methods and technologies used for expressing knowledge and data, in particular on the Web. By the end of this course, students will have built an intelligent web application that queries and reasons over integrated knowledge from various sources obtained from the Web. All of this will be based on formal logic theory. Knowledge and understanding: at the end of the course, students will be familiar with: Theory of Data, Information and Knowledge Predictable inferencing and formal systems Linked Data and Knowledge Graphs Semantic Web technology stack (RDF, RDFS, OWL) Ontology Engineering Knowledge-driven Data Science Application of Knowledge and Insights: students will be able to: Represent knowledge and data in various formalisms (RDF, RDFS, OWL) Implement basic (RDFS) reasoning, Develop advanced knowledge models in RDFS and OWL Work with SPARQL for querying (distributed) knowledge graphs Integrate acquired knowledge in an intelligent semantic data driven application. Judgement: Students will be able to assess the value of available datasets and ontologies for web applications, and to choose the appropriate technology for a specific application. Communication: Students are able to write a report about a developed application. Learning skills: The skill to acquire and apply knowledge and skills about fundamental knowledge representation concepts as well as state-of-the art technology, both individually as in a group context.',
    assessment:
      'The final grade will be determined by three components that each count for 1/3 of the final grade: Weekly individual practical assignments (in total 5 assignments of which the results are averaged) A final group project, assessed on the basis of a final document, application and (video) presentation An exam testing the theory Each component should be passed (5.5 or higher) in order to pass the course. There will be a resit option for the exam. The project can be resit only if a 4.5 or higher has been achieved. The practical assignments cannot be re- taken. Weekly intermediary quizzes will be used to provide formative feedback.',
    teachingMethods:
      'The course consists of lectures where theory is discussed and Working group sessions in which exercises related to the theory are discussed. Students will work on individual practical assignments in the first half of the course and will be supported in computer practicals. Students will also collaborate in groups for a final project assignment.',
    literature:
      'We will provide the (online) reading material through Canvas. Recommended literature: A Semantic Web Primer (3rd edition) Grigoris Antoniou, Paul Groth, Frank van Harmelen and Rinke Hoekstra, MIT Press, September 2012',
    prerequisites: '',
    difficulty: 2,
    tags: ['knowledge-representation', 'semantic-web', 'required'],
  },
  {
    id: 'linear-algebra-calculus',
    slug: 'linear-algebra-and-calculus',
    name: 'Linear Algebra and Calculus',
    code: 'XB_0114',
    year: 2,
    period: 2,
    credits: '6EC',
    description:
      'Fundamental concepts in Linear Algebra and Calculus: vectors, matrices, linear systems, functions, limits, differentiation, eigenvalues, and diagonalization.',
    overview: `Calculus: Functions Limits Derivatives Partial derivatives Gradients Linear Algebra: Linear systems of equations Row reduction Linear maps Matrix and vectors operations Vector spaces Determinants Eigenvalues, eigenvectors and diagonalization Inner product, orthogonalization and Gram Schmidt`,
    objectives:
      'Upon completion of the course, students will: Demonstrate a solid comprehension of fundamental concepts in Linear Algebra and Calculus, including vectors, matrices, linear systems, functions, limits and differentiation (Knowledge and Understanding). Apply mathematical techniques to solve basic exercises and problems across different levels of complexity within Linear Algebra and Calculus, such as solving linear systems or diagonalization, showcasing proficiency in computations and problem-solving strategies (Applying Knowledge and Understanding). Engage in rigorous mathematical reasoning by providing proofs of statements and theorems, and by explaining underlying concepts and principles (Applying Knowledge and Understanding; Making Judgments). Develop the ability to articulate mathematical solutions and explanations effectively, engaging clear communication of mathematical concepts (Communication Skills). Cultivate learning skills necessary for further study in mathematics and AI, including the ability to independently explore advanced topics, identify areas for improvement, and pursue self-directed learning opportunities (Learning Skills).',
    assessment: '',
    teachingMethods: '',
    literature: '',
    prerequisites: '',
    difficulty: 1,
    tags: ['mathematics', 'foundations', 'required'],
  },
  {
    id: 'multi-agent-systems',
    slug: 'multi-agent-systems',
    name: 'Multi-Agent Systems',
    code: 'XB_0024',
    year: 2,
    period: 2,
    credits: '6EC',
    description:
      'Agents, multi-agent systems, knowledge representation, reasoning, and Prolog programming for building intelligent systems.',
    overview: `AI (Artificial Intelligence) techniques that are discussed in this course are knowledge representation and reasoning techniques, and multi-agent technology. Students are taught how to develop a multi-agent system that uses knowledge representation to reason about the environment in which the multi-agent system operates.`,
    objectives:
      'The course has the following topic and goals. 1. Agents and Multi-Agent Systems Agent, multi-agent system, cognitive state, beliefs, actions, communication, coordination. The student is able to define the elementary concepts, and to apply their relevant aspects in the design of programs. (Applying knowledge and understanding) 2. Agent-Environment Interaction Action, percept. The student is capable of analyzing the environment in which the agent operates, and to identify the actions and relevant percepts that are available. The student is able to use the classification, actions and percepts as the basis for the design of an agent. (Applying knowledge and understanding) 3. Agent and Multi-Agent Program Action rules, modules, MAS file, launch rules. The student is able to describe the relevant programming constructs. In addition, the student is able to apply the constructs to write a multi-agent and agent programs. (Applying knowledge and understanding) 4. Basic Concepts Prolog Facts, rules, clause, queries, rule-based reasoning. The student is able to define the basic concepts in Prolog and describe the relationship between these concepts. Based on these concepts the student is able to solve simple problems in Prolog. (Applying knowledge and understanding) (Making judgements) 5. Prolog Programming Negation as failure, cut, recursion, lists. The student is able to apply constructs and these techniques to write a Prolog program. The student is able to solve problems by using a combination of negation as failure, recursion and the use of lists. In particular, the student is able to implement some search algorithms in Prolog. (Applying knowledge and understanding) 6. Reasoning in Logic Programming Unification, backtracking, depth-first search, linear search, backward chaining. The student is able to explain the computational model of logic and reasoning in Prolog and to use these concepts. Simple tasks with unification of terms can be made by the student. The student is able to construct a derivation of a unification (resolution). (Applying knowledge and understanding) (Communication) 7. Develop a MAS The student is able to build a relatively simple multi-agent system. Concepts relating to systems of rational agents are introduced to make complex decisions. (Applying knowledge and understanding) (Lifelong learning skills)',
    assessment:
      'The course is assessed through an exam and a practical part. The final grade is a weighted average of the individual exam grade (75%) and the grade of the practical part (25%). Practical part: Students get 3x a practical assignment that must be made in pairs. The assignments are graded with a mark. The grade for the practical part is the average of the marks for the assignments. There must be a minimum of 5 on average obtained for the assignments to pass the practical part. The exam consists of open or multiple-choice questions about all the material of the course. To pass the exam, the grade must be at least a 5. Both the practical part and exam must at least be a 5, but the final grade should minimally be a 5.5 to pass the course. There will be a fourth bonus assignment that can be completed for a full bonus point on the course end grade. There is no second chance for the practical assignments.',
    teachingMethods: 'Lectures, lab sessions (with computer/ laptops). Attendance at labs is obligatory.',
    literature: '',
    prerequisites: '',
    difficulty: 1,
    tags: ['ai', 'agents', 'prolog', 'required'],
    workgroupInfo: {
      mandatory: true,
      detail: 'Attendance at lab sessions is mandatory.',
    },
  },
  {
    id: 'machine-learning',
    slug: 'machine-learning',
    name: 'Machine Learning',
    code: 'X_400154',
    year: 2,
    period: 4,
    credits: '6EC',
    description:
      'Core machine learning: linear models, neural networks, decision trees, ensemble methods, gradient descent, backpropagation, and deep learning.',
    overview: `Machine learning is the discipline that studies how to build computer programs that learn how to behave from examples, rather than following explicit instructions. It is a subfield of artificial intelligence that intersects with statistics, cognitive science, information theory, and probability theory. Recently, machine learning has become increasingly important for the design of search engines, robots, and sensor systems, and for the processing of large scientific data sets. Other applications include handwriting or speech recognition, image classification, medical diagnosis, stock market analysis and bioinformatics. Machine Learning is also the core technology behind chatbots like ChatGPT, Claude and Gemini. The course covers a wide variety of machine learning techniques, but puts particular emphasis on gradient descent optimization, backpropagation, neural networks and deep learning. Some discussion on the broader social impact of machine learning technology is included.`,
    objectives:
      'Upon completion of this course, students will: be acquainted with the dominant concepts of machine learning methods, including some theoretical background. (Knowledge and understanding) acquire knowledge of established machine learning techniques such as linear models, neural networks, decision trees and ensemble methods (Knowledge and understanding) learn some statistical techniques to assess and validate machine learning results. (Apply knowledge and understanding, make judgments)',
    assessment:
      'The course assessment consists of two parts: an examination and a practical assignment. The examination consists of a standard exam and four online quizzes. The examination and practical assignment each comprise 50% of the final grade. To pass the course, the examination grade should be at least 5.5, the practical assignment grade should be at least 4.5 and the average should be at least 5.5. The examination is made individually, and the practical assignment is made in groups. There is a resit for the exam, no resit is possible for the practical assignment.',
    teachingMethods:
      'The course consists of pre-recorded videos, interactive lecture/QA sessions (two per week) and optional homework assignments discussed in working groups (one per week). The practical assignment is supported by small exercises to help with the relevant technologies, and informal presentations at project groups (one per week). There is no mandatory attendance for any lectures or workgroups, except that one member of each group must be present at the weekly project group. Most of the material is freely available at https://mlvu.github.io The course is taught in English.',
    literature: 'There is no textbook. Some reading material will be provided digitally.',
    prerequisites:
      'We require that students have some prior experience with linear algebra, calculus (limited to differentiation), probability theory and statistics. An overview and explanation of the required preliminaries can be found at https://mlvu.github.io/preliminaries/',
    difficulty: 3,
    tags: ['machine-learning', 'deep-learning', 'required'],
  },
  {
    id: 'probability-statistics',
    slug: 'probability-and-statistics',
    name: 'Probability and Statistics',
    code: 'XB_0115',
    year: 2,
    period: 4,
    credits: '6EC',
    description:
      'Probability theory, random variables, distributions, law of large numbers, central limit theorem, estimation, confidence intervals, and hypothesis testing.',
    overview: `From the book by From Pishro-Nik: Chapter 1: Basic concepts Chapter 3: Discrete random variables, Bernoulli, Binomial, Negative Binomial, Poisson Chapter 4: Continuous random variables; sections 4.0, 4.1 and from 4.2 uniform, exponential and normal random variables Chapter 7: Law of large numbers and central limit theorem; sections 7.0 and 7.1 Chapter 8: Classical statistics (point estimation, interval estimation, hypothesis testing); sections 8.1, 8.2, 8.3 and 8.4`,
    objectives:
      'After this course the student should be able to understand the setup of a probability space, events, probability and conditional probability (knowledge and insight); use the basic rules of probability theory (sum rule, product rule, law of total probability, Bayes\' rule) (applying knowledge and insight); understand what a random variable is, what its distribution is, both for discrete and continuous random variables (this includes the concept of probability mass function, probability density function, and cumulative distribution function) (knowledge and insight); compute the expectation and variance of a random variable (applying knowledge and insight); compute the expectation and variance of a sum of independent random variables (applying knowledge and insight); derive discrete probability distributions for probabilistic experiments associated to the Bernoulli, Binomial, Negative Binomial and Poisson distribution (applying knowledge and insight); compute probabilities for continuous random variables, specifically the uniform, exponential, and normal distribution (applying knowledge and insight); perform calculations based on the law of large numbers and central limit theorem (applying knowledge and insight); reproduce the definition of an estimator, carry out elementary computations involving point estimators (applying knowledge and insight); understand what confidence intervals are and be able to derive them in simple settings using a pivot (applying knowledge and insight); understand the setup of classical hypothesis testing (critical region, p-value, type of errors) and apply this to simple hypothesis testing problems (knowledge and insight); derive likelihood ratio tests in simple settings (applying knowledge and insight);',
    assessment:
      'Midterm exam (30%) and final exam (70%) over all content. The resit exam is about all content.',
    teachingMethods:
      '6 weeks with 4 hours lecturing each week. Exercise classes. Attendance to lectures and classes is not mandatory but strongly recommended.',
    literature:
      'Hossein Pishro-Nik, Introduction to Probability, Statistics and Random Processes. The book can be ordered but is also freely available on www.probabilitycourse.com.',
    prerequisites: '',
    difficulty: 2,
    tags: ['mathematics', 'statistics', 'required'],
  },
  {
    id: 'text-mining-ai',
    slug: 'text-mining-for-ai',
    name: 'Text Mining for AI',
    code: 'XB_0085',
    year: 2,
    period: 5,
    credits: '6EC',
    description:
      'NLP, linguistics, text mining: rule-based systems, machine learning, deep learning, text classification, sentiment, entity recognition, topic modeling.',
    overview: `Basic concepts from Linguistics and foundational concepts from Natural Language Processing. Skills to use, apply and critically assess text mining techniques. Adapt and build text mining techniques to specific target domains and applications.`,
    objectives:
      'Knowledge and understanding: at the end of the course, students will be familiar with basic knowledge of some of the core aspects of Natural Language Processing, Linguistics and Text Mining: rule-based systems, machine learning, deep learning, text classification, sentiment extraction, entity recognition and topic modeling of texts. Applying knowledge and understanding: students will be able to implement NLP processing systems and modules and evaluate these. Making judgements: students will have a basic understanding of the ethical and societal implications of the developments in NLP. Communication skills: students will be able to write a scientific reports about a specific research question in a group of students. Learning skills: students will be trained in acquiring a set of complex NLP and text mining topics in a restricted period of time, come up with a research question and perform the necessary (empirical) research. Basic concepts from Linguistics and foundational concepts from Natural Language Processing. Skills to use, apply and critically assess text mining techniques. Adapt and build text mining techniques to specific target domains and applications.',
    assessment: '',
    teachingMethods: 'Theoretical lectures and working group sessions',
    literature: '',
    prerequisites: '',
    difficulty: 2,
    tags: ['nlp', 'text-mining', 'required'],
  },
  // ========== YEAR 2 — Intelligent Systems specialisation ==========
  {
    id: 'data-structures-algorithms-ai',
    slug: 'data-structures-and-algorithms-for-ai',
    name: 'Data Structures and Algorithms for AI',
    code: 'XB_0043',
    year: 2,
    period: 1,
    credits: '6EC',
    specialisation: 'intelligent_systems',
    description:
      'Data structures, algorithms, complexity analysis, and trade-offs for AI applications.',
    overview: `The content of the course is organised in weekly lectures, where the lecturer will cover the concepts of linear data structures (e.g., linked list, trees, graphs), basic notion of time and space complexity, which will be discussed on simple programs (e.g., sorting), and basic algorithms for traversing trees and graphs (e.g., search or decision trees). The introduced concepts will be accompanied by an explanation of the difference between solving the same problem by using a different method. More advanced topics will be covered towards the end of the course. The students will work on individual assignments during the weekly lab sessions which consist of practical programming challenges aimed to deepen their understanding of the topics covered during the lectures. The programming assignments will be automatically tested for correctness and efficiency, the latter being a determinant characteristic.`,
    objectives:
      'The goal of this course is to introduce Bachelor students enrolled in the target audience program to the basic concepts of data structures and algorithms. After taking this course, students will have gained (i) basic knowledge of data structures and algorithms, (ii) ability to analyse complexity of algorithms, and (iii) recognize trade-offs and choose an appropriate data structure and algorithm to solve a particular problem. Specifically, the student will have reached the following learning outcomes: Describe the basic data structures and algorithms that are used for common computational problems (Knowledge and understanding; Communication). Explain the role of algorithm complexity (time and space) in addressing problems and make complexity judgements on simple programs (Applying knowledge and understanding; Communication). Explain the rationale of the proposed solution and possibly apply appropriate techniques on a concrete problem instance (Applying knowledge and understanding; Communication). Identify and review pros and cons of proposed techniques for solving problems (Knowledge and understanding; Lifelong learning skills).',
    assessment:
      'Assignments: 30% Theory + Practicum A: 35% Theory + Practicum B: 35% Assignments: Points will be assigned with the following grading scheme: 5% assessment of the first lab assignment (A1) 5% assessment of the second lab assignment (A2) 10% assessment of the third lab assignment (A3) 10% assessment of the fourth lab assignment (A4) Theory + Practicum: Part A (35%): There is a first exam (in person) assessing the material covered in the first half of the lectures and the first two assignments. This examination takes place at the end of September. Part B (35%): There is a second exam (in person) assessing the material covered in the second half of the lectures and the third and fourth assignments. This examination takes place at the end of the course. For multiple choice tests the university standard method of correction for the chances of random answers is applied. Resit: There is a single resit for the examinations Part A and Part B but not the assignments Passing requirement: To pass the course, a student needs to pass (>5.5) on all components (assignments, theory, practicum) Plagiarism: The assignment submissions are automatically evaluated for plagiarism. If the submitted code (and not the boiler plate) is flagged for plagiarism the student will be reported to the Examination Board.',
    teachingMethods:
      'The course is based on the following teaching methods: Weekly lectures introducing new topics Weekly lab sessions where student TAs will supervise students working on practical exercises Assignments in the form of programing challenges including analytical tasks describing the implemented solution to an algorithmic problem',
    literature: 'Introduction to algorithms. Thomas H. Cormen et al. 4th edition.',
    prerequisites: '',
    difficulty: 2,
    tags: ['algorithms', 'data-structures', 'intelligent-systems'],
  },
  {
    id: 'project-conversational-agents',
    slug: 'project-conversational-agents',
    name: 'Project Conversational Agents',
    code: 'XB_0101',
    year: 2,
    period: 3,
    credits: '6EC',
    specialisation: 'intelligent_systems',
    description:
      'Develop a conversational agent for the cooking domain using DialogFlow, ontology, and natural conversation framework.',
    overview: `Students learn how to develop a cognitive dialogue agent that uses Google's DialogFlow and builds on the natural conversation framework of Robert Moore. Groups will collaborate todevelop a conversational agent for the cooking domain, with a focus on the recipe selection task in this domain. They will design and implement domain knowledge, conversational patterns, natural language understanding and visuals. The agent will be a recipe recommendation assistant with visual support that supports the user to find a suitable cooking recipe.`,
    objectives:
      '1. Develop a conversational agent by developing a simple ontology for a knowledge base for the cooking domain which enables the agent to reason about recipes (Applying knowledge and understanding) 2. Apply and understand conversation design patterns (Applying knowledge and understanding) 3. Design and implement visual support for different stages in the conversation (Applying knowledge and understanding) 4. Evaluate a prototype conversational agent for the cooking domain (Making judgments) 5. Plan and organize work together in a project group using appropriate tools (Applying knowledge and understanding)',
    assessment:
      'The grade is based on the quality of the basic conversational agent (30%), the quality and originality of extensions to the basic agent (30%) and the written report (30%). In addition, students are required to complete an exam that assesses their understanding of course content and their ability to evaluate conversational agents (10%). The exam will be one hour long and proctored by TAs. Each component needs to be at least graded with a 5.5 or higher to pass this course. There are no resit options for the project work, report and exam.',
    teachingMethods: 'Lectures, lab sessions (with computer/ laptops). Attendance at labs is obligatory. Students will work in groups of 6.',
    literature:
      'Conversational UX Design: A Practitioner\'s Guide to the Natural Conversation Framework Robert J Moore en Raphael Arar | 29 mei 2019 ISBN-10: 1450363024 ISBN-13: 978-1450363020 A cognitive agent programming guide (online) Learn Prolog Now! (online) Github tutorial (online) Bootstrap tutorial (online) Dialogflow tutorial (online) Natural language understanding models (online)',
    prerequisites: '',
    difficulty: 3,
    tags: ['project', 'nlp', 'intelligent-systems'],
    workgroupInfo: {
      mandatory: true,
      detail: 'Attendance at lab sessions is mandatory. Students will work in groups of 6.',
    },
  },
  {
    id: 'databases',
    slug: 'databases',
    name: 'Databases',
    code: 'X_401008',
    year: 2,
    period: 5,
    credits: '6EC',
    specialisation: 'intelligent_systems',
    description:
      'Relational databases: ER diagrams, relational model, SQL, schema design, normalization, functional dependencies, concurrency.',
    overview: `The course is concerned with base principles and important aspects of relational databases. The course objective is to obtain a good knowledge and understanding of relational database systems. This includes the ability to develop good database models, and to query and update databases using SQL.`,
    objectives:
      'The students will learn: to design and evaluate database schemas using Entity-Relationship diagrams, (Applying knowledge and understanding) (Making judgements) to understand the relational model (including integrity constraints such as key constraints and foreign key constraints), (Knowledge and understanding) to translate Entity-Relationship diagrams into relational schemas (and to enforce cardinality constraints by design), (Applying knowledge and understanding) to reason about good and bad database design using functional dependencies, (Making judgements) to apply normalization algorithms to transform a database schema into (various) normal forms, (Applying knowledge and understanding) to understand concurrency concepts like transactions, schedules and concurrency anomalies, and (Knowledge and understanding) to reason about different techniques for concurrency control (lock based concurrency control, optimistic concurrency control, multiversion concurrency control). (Making judgements)',
    assessment:
      'The homework is mandatory for qualifying for the exam (70% of the homework points to qualify for the exam). In the case that at least 90% of the homework points are obtained, 0.5 bonus points are awarded for the final grade. At the end of the course, there is a final exam. The overall grade is the grade of the final exam plus the possibly 0.5 bonus point obtained for the homework. (The bonus is only added for students who pass the exam with a grade of at least 5.5.) There is no resit opportunity for the homework.',
    teachingMethods: 'Lectures, exercise/practicum classes and individual homework.',
    literature:
      'Database Systems, The Complete Book, by: Hector Garcia-Molina & Jeffrey D. Ullman & Jennifer Widom. 2nd edition.',
    prerequisites: '',
    difficulty: 2,
    tags: ['databases', 'sql', 'intelligent-systems'],
  },
  {
    id: 'project-collective-intelligence',
    slug: 'project-collective-intelligence',
    name: 'Project Collective Intelligence',
    code: 'XB_0026',
    year: 2,
    period: 6,
    credits: '6EC',
    specialisation: 'intelligent_systems',
    description:
      'Collective intelligence, collective dynamics, simulation: microscopic vs macroscopic modeling, swarm robotics, agent-based simulation.',
    overview: `The whole is greater than the sum of its parts. Or isn't it? This course is concerned with collective intelligence and collective dynamics. We will elaborate on the differences between modeling these systems at the microscopic versus the macroscopic scale, discuss the philosophical as well as the technical aspects of such modeling, and learn to conduct experiments with virtual agents that interact in virtual worlds. Collective Intelligence concepts will be also positioned and studied in relationship with Artificial Life and Swarm Robotics.`,
    objectives:
      'The main objectives of this course are: 1. To understand the notion of collective intelligence and natural and artificial systems, and the difference between modeling them at the macroscopic versus the microscopic scale, (Knowledge and understanding) 2. To gain insight into open research issues related to collective intelligence and collective dynamics, (Knowledge and understanding) 3. To learn the use of simulators to conduct empirical research in this field. (Apply Knowledge and understanding) (Make judgements) (Lifelong learning skills)',
    assessment:
      'Students will work in teams of three, four, or five (depending on total student numbers). They will subject to a compulsory evaluation every week that involves a presentation and demonstration with simulation videos. Answering questions during the group presentation and discussion is part of the assessment Grading is based on: 1) Quality of the presentation and degree of achievement of the task: a. Flocking: the agents need to move together in a group and in a common direction. This task is mainly meant as a formative training for the simulation environment. 0% of the final grade - only a formative grade will be given, assessed at the end of Week 1. b. Aggregation: the agents should aggregate all in one shelter among those available in the environment. 20% of the final grade, assessed at the end of Week 2. 15% will evaluate the group presentation and delivery, 5% will consist in individual evaluations where students will be asked individual questions, and the quality of the answer will be assessed. c. Collective dynamics simulation: A collective dynamics linked to a specific scenario will be given to students to simulate and study. Examples of this from past editions of the course are: covid spread simulation, prey/predator dynamics. This task runs for the final two weeks of the course. 40% of the final grade (the first 20% assessed at the end of Week 3 and the other 20% at the end of Week 4). 30% (15% each week) will evaluate the group presentation and delivery, 10% (5% each week) will consist in individual evaluations where students will be asked individual questions, and the quality of the answer will be assessed. 2) Short report of the approach and experimental results into 40% of the final grade. The report is written in a group, and a group grade will be given. Overall, the final grade is made up of the following component: 45% of the grade for group presentation performed in a controlled environment 15% of the grade for individual presentation (answers to questions) performed in a controlled environment 40% of the grade is group report The resit options are the following. In case one of the evaluations listed under point 1) is missed (b or a component of c), the students have the chance to submit a video containing a presentation and a live demo. In this case, the grade of the specific component (b, or a part of c) will be capped to 55% In case of late submission of the report, a penalty of 10% on the grade of the report component will be applied for each 24 hours of delay. A maximum of 5 days delay is allowed (corresponding to a penalty of 50% on the grade of the report component).',
    teachingMethods:
      'The course combines literature study and moderated discussions with experimental work in computer simulations. Students will work in small groups.',
    literature:
      'Introductory papers on swarm robotics and collective dynamics, e.g. the review here https://link.springer.com/article/10.1007/s11721-012-0075-2',
    prerequisites: 'Coding skills in Python are necessary.',
    difficulty: 3,
    tags: ['project', 'simulation', 'elective'],
  },
  {
    id: 'law-of-ai',
    slug: 'the-law-of-artificial-intelligence',
    name: 'The Law of Artificial Intelligence',
    code: 'XB_0084',
    year: 2,
    period: 6,
    credits: '6EC',
    specialisation: 'intelligent_systems',
    description:
      'Legal, ethical, and societal implications of AI developments; EU AI Act; designing AI systems compliant with the law.',
    overview: `For a long time, lawyers were often seen by software developers as a nuisance, a sentiment perhaps best illustrated by an incident at a Github board meeting around 2010. During the discussion, a lawyer pointed out some legal issues and cautiously began, "I know you don't want to hear this from a lawyer, but…" Before he could continue, another board member cut him off aggressively: "…then shut the f*** up." This attitude was common among computer scientists as well. While developers and designers focused on what was possible, lawyers concentrated on what was permissible, often without attempting to understand the potential of the technology. Today, the situation is no longer black and white, but rather gray. Lawyers understand technology and development processes better, and AI specialists understand the need to comply with the law. Technology and the law are no longer systematically seen as adversaries. Against this backdrop, many governments around the world are launching initiatives to regulate AI. Their goal is often to contain high-risk AI while supporting other AI applications. One such example is the European Union's Artificial Intelligence Act. This course explores how AI is governed by legal rules and standards. By the end of the course, students will have a solid grasp of the EU AI Act, including the constraints it imposes on AI development and its key limitations. This will put them in a unique position to contribute to the development of legally compliant AI systems. Most importantly, students will learn how to design AI systems that not only comply with legal requirements but are also protected by them. In short, they will learn how the law works, and how to work with it.`,
    objectives:
      'At the end of the course, the students will: understand the legal, ethical, and societal implications of AI developments. be able to write informed opinions about AI legislation. be trained in acquiring a set of complex legal AI-related topics in a restricted period of time. be able to work together as a team to identify not only the technical but also the legal issues with the design of AI systems. be familiar with basic knowledge about the law that applies to AI systems, including the law specifically focusing on AI systems such as the EU AI Act. be able to identify legal risks when designing AI systems. be in a position to design AI systems compliant with the law. be able to use legal rules to protect their AI systems. be able to reflect critically on the impact of legal rules on technology. be able to express their own motivated opinions and contribute to the writing of better legal rules.',
    assessment:
      'One final on-campus exam will account for 100% of the students\' grade. Further details about the exam format will be provided during the first class. A mock exam will also be made available halfway through the course.',
    teachingMethods:
      'Students will be given five lectures mainly focusing on the European Union\'s Artificial Intelligence Act. Teachers will use a Socratic method to create discussions in the classroom. Students will also take part in two seminars to explore the European AI Act from a practical perspective. They will comment on the AI Act and discuss their inputs with other classmates and professors. Students will work in small teams their professor will assign.',
    literature: '',
    prerequisites: '',
    difficulty: 2,
    tags: ['law', 'ethics', 'elective'],
  },
  // ========== YEAR 2 — Socially Aware Computing specialisation ==========
  {
    id: 'robot-interaction',
    slug: 'robot-interaction',
    name: 'Robot Interaction',
    code: 'XB_0040',
    year: 2,
    period: 1,
    credits: '6EC',
    specialisation: 'socially_aware_computing',
    description:
      'Social robotics: human-robot interaction, communicative robots, application areas, psychology, NLP, ethics.',
    overview: `What does it mean when a robot steps out of your computer in physical space and starts interacting with humans as if it were a social entity itself? This course will address various aspects that come into play when physically present robots interact with humans. This course focuses mainly on social robots, humanoids in particular, suited for communicative purposes. We will discuss both sides of the coin: perspectives from the robot-side as well as perspectives from the user-side. Differences and similarities with common computer-based AI (cf. avatars, chatbots) are discussed in comparison to human-robot interaction, exemplified by main application areas (e.g., eldercare, education). Basic models and relevant aspects of the psychology of the user and ethical aspects are also discussed. If robots start talking to humans by themselves, how can they understand each other? Lectures will therefore also address the basics of the understanding of language (e.g., Natural Language Processing (NLP)). How to translate theoretical models into effective computer models is another challenge that will not only be lectured on but also practiced. A team of lecturers with the respective expertise will lecture on the wide variety of topics in this course. Several practical tutorials/workshops accompany the lectures to gain hands-on experience regarding the complexities of human-robot interaction.`,
    objectives:
      'After successful completion of this course, students are expected to be able to: Articulate the core themes and challenges in the field of Social Robotics. (Knowledge and insight, Applying knowledge and insight, Judgement) Understand the multi-disciplinary contributions that develop Social Robots. (Knowledge and insight, Applying knowledge and insight, Judgement) Describe and evaluate main theories from various field to understand how humans interact and communicate with social robots. (Knowledge and insight, Applying knowledge and insight, Judgement) Understand, describe and compare screen-based versus robot-based interaction. (Knowledge and insight, Applying knowledge and insight, Judgement) Discuss and compare key findings in fundamental areas of Robot Interaction, such as typology of robots; application areas; relating to robots; psychological aspects; language understanding in robots; robots outperforming humans while being worse communicators; modeling theories for performance in robots; ethical considerations. (Knowledge and insight, Applying knowledge and insight, Judgement) Develop a good understanding of up-to-date and interdisciplinary scientific research in the field and in various application areas. (Knowledge and insight, Applying knowledge and insight, Judgement) Understand and apply an academic multi-disciplinary attitude, academic writing style, search for insights in complex phenomena, theoretical and empirical approaches. (Knowledge and insight, Applying knowledge and insight, Judgement, Communication, Learning skills) Apply an analytical approach to model communication in robots. (Knowledge and insight, Applying knowledge and insight, Judgement) Exercise reverse engineering, building scenarios, interaction design, concurrent algorithmic approaches. (Knowledge and insight, Applying knowledge and insight, Judgement, )',
    assessment:
      'Examination: final examination consisting of a multiple choice test of 40 questions and 5 open essay questions; the combined grade counts for 80% of the final grade for this course. Assignments related to the workshops are also graded; the averaged grade for assignments counts for 20% of the final grade for this course. Some assignments are individually, and some are done in group. To pass the course, each assignment needs to be passed. Also, to pass the exam, the separate multiple choice and essay question sections must be passed (55%) separately to pass the exam. There is only a resit for the examination.',
    teachingMethods:
      'Lectures on a wide variety of topics related to Robot Interaction, two times a week. Several practical tutorials/workshops will accompany the lectures as a 3rd meeting in the week. Details will be presented in the schedule/syllabus on Canvas.',
    literature:
      'For this course, you will read a relatively large number of journal articles, book chapters, and conference proceedings. The reading list will be announced on Canvas (in the syllabus) posted on Canvas before the start of the course. Access to journal articles/ book chapters / conference papers via Canvas, or else via the VU-library, check LibSearch, e-resources (e.g., select search in PsycInfo, EBSCOhost), else Google Scholar, or http://dx.doi.org',
    prerequisites: '',
    difficulty: 2,
    tags: ['robotics', 'hci', 'socially-aware-computing'],
  },
  {
    id: 'project-socially-aware-computing',
    slug: 'project-socially-aware-computing',
    name: 'Project Socially Aware Computing',
    code: 'XB_0042',
    year: 2,
    period: 3,
    credits: '6EC',
    specialisation: 'socially_aware_computing',
    description:
      'Agent-based simulation for societal challenges: Netlogo, modeling, experimentation, and research reporting.',
    overview: `Within this course students learn to address a societal challenge involving social interaction by means of agent- based simulation. They learn to identify relevant concepts and relations, formalise these in a dedicated environment (Netlogo), conduct simulations to test different hypothetical scenarios and analyse their results. They do this by working individually on assignments and a project in a chosen domain. They report their findings in written form.`,
    objectives:
      'After having completed this course students are able to: Perform a study following a full research cycle: setting up an experiment (conceptualisation, formalisation), performing the experiment (simulation), analysing and interpreting its results (applying knowledge and understanding; making judgements) Apply and integrate knowledge about programming, modelling, statistics, conducting research and academic writing to actual societal challenges (applying knowledge and understanding; making judgements) Build a multi agent-based model in the modelling environment Netlogo (applying knowledge and understanding) Report the results of the project in written form (communication; lifelong learning skills)',
    assessment:
      'Pass/fail individual assignments that need to be passed to start the project Individual project report (95%) + self-reflection (5%) We only offer a resit for the project. If you fail the assignments you will have to take the course again next academic year. This course consists of individual assignments and an individual project. Students need to work on the assignments in class. Their work is checked by the teacher or TA. The meetings are mandatory. The students also work on their project during the mandatory meetings.',
    teachingMethods:
      'This project course is given by means of active working group meetings. These meetings are mandatory. The course is divided into two parts. During the first week the students will work on assignments to learn how to work with Netlogo. If they pass these assignments they are allowed to start their project. They will work on their project during the next three weeks. During the first two weeks the students have 20 hours of work group sessions per week. During the third week there will be 12 hours of work group sessions. In the final week of the course (week 4) the students can schedule an individual meeting with a member of the teaching team. Attendance during the work group sessions is mandatory.',
    literature: '',
    prerequisites: '',
    difficulty: 3,
    tags: ['project', 'simulation', 'socially-aware-computing'],
  },
  {
    id: 'law-of-ai-sac',
    slug: 'the-law-of-artificial-intelligence-sac',
    name: 'The Law of Artificial Intelligence',
    code: 'XB_0084',
    year: 2,
    period: 6,
    credits: '6EC',
    specialisation: 'socially_aware_computing',
    description:
      'Legal, ethical, and societal implications of AI developments; EU AI Act; designing AI systems compliant with the law.',
    overview: `For a long time, lawyers were often seen by software developers as a nuisance, a sentiment perhaps best illustrated by an incident at a Github board meeting around 2010. During the discussion, a lawyer pointed out some legal issues and cautiously began, "I know you don't want to hear this from a lawyer, but…" Before he could continue, another board member cut him off aggressively: "…then shut the f*** up." This attitude was common among computer scientists as well. While developers and designers focused on what was possible, lawyers concentrated on what was permissible, often without attempting to understand the potential of the technology. Today, the situation is no longer black and white, but rather gray. Lawyers understand technology and development processes better, and AI specialists understand the need to comply with the law. Technology and the law are no longer systematically seen as adversaries. Against this backdrop, many governments around the world are launching initiatives to regulate AI. Their goal is often to contain high-risk AI while supporting other AI applications. One such example is the European Union's Artificial Intelligence Act. This course explores how AI is governed by legal rules and standards. By the end of the course, students will have a solid grasp of the EU AI Act, including the constraints it imposes on AI development and its key limitations. This will put them in a unique position to contribute to the development of legally compliant AI systems. Most importantly, students will learn how to design AI systems that not only comply with legal requirements but are also protected by them. In short, they will learn how the law works, and how to work with it.`,
    objectives:
      'At the end of the course, the students will: understand the legal, ethical, and societal implications of AI developments. be able to write informed opinions about AI legislation. be trained in acquiring a set of complex legal AI-related topics in a restricted period of time. be able to work together as a team to identify not only the technical but also the legal issues with the design of AI systems. be familiar with basic knowledge about the law that applies to AI systems, including the law specifically focusing on AI systems such as the EU AI Act. be able to identify legal risks when designing AI systems. be in a position to design AI systems compliant with the law. be able to use legal rules to protect their AI systems. be able to reflect critically on the impact of legal rules on technology. be able to express their own motivated opinions and contribute to the writing of better legal rules.',
    assessment:
      'One final on-campus exam will account for 100% of the students\' grade. Further details about the exam format will be provided during the first class. A mock exam will also be made available halfway through the course.',
    teachingMethods:
      'Students will be given five lectures mainly focusing on the European Union\'s Artificial Intelligence Act. Teachers will use a Socratic method to create discussions in the classroom. Students will also take part in two seminars to explore the European AI Act from a practical perspective. They will comment on the AI Act and discuss their inputs with other classmates and professors. Students will work in small teams their professor will assign.',
    literature: '',
    prerequisites: '',
    difficulty: 2,
    tags: ['law', 'ethics', 'socially-aware-computing'],
  },
  {
    id: 'ai-and-law',
    slug: 'ai-and-law',
    name: 'AI and Law',
    code: 'XB_0070',
    year: 2,
    period: 5,
    credits: '6EC',
    specialisation: 'socially_aware_computing',
    description:
      'Relation between AI and Law; applications of AI within Law; ethical questions related to AI in the legal domain.',
    overview: `Innovation in computational technologies have given rise to a whole range of new developments, such as autonomous cars and drones, predictive policing and automated warfare. Each of these developments has significant legal, ethical and policy implications. With autonomous driving, for example, this became particularly obvious after a pedestrian was killed for the first time by an autonomous vehicle on a test drive. How will autonomous vehicles affect the law, particularly once they are authorized for regular usage, and take the streets in large numbers? Can it even be considered ethical to have machines think by themselves? Another, closely related, AI application – automated weapons – raises potentially even more pressing issues. What are the legal and ethical implications of autonomous weapons that determine themselves when to fire, without a human being involved in the decision process? Examples like these show the tremendous impact that AI will have on the legal field.`,
    objectives:
      '(a) Subject-specific learning outcomes (knowledge and understanding) Upon completion of the course the student should have basic knowledge of: The relation between AI and Law Key applications of AI within Law Ethical questions related to the use of AI within the legal domain (b) Academic learning outcomes (applying knowledge and understanding; making judgements) Upon completion of the course the student should be able to: Read, understand, analyse and reflect upon interdisciplinary literature relating to AI applications in the field of law Analyse, interpret and employ scientific knowledge in a written assignment on a basic level Make a reasoned choice for an AI application and reflect on the potential legal consequences of this application (c) Social and communication learning outcomes (applying knowledge and understanding; communication; lifelong learning skills) Upon completion of the course the student should be able to: Work in a focused and systematic way In a scientifically substantiated manner clearly and convincingly present viewpoints and findings in written form',
    assessment:
      'Written exam and practical assignment (individually or in groups of 2). They both count 50% towards the final grade and both components need to be passed with a minimum grade of 5.5 The practical assignment can be redone if not sufficient (< 5.5). There will be a resit for the written exam if not sufficient (<5.5).',
    teachingMethods: 'Lectures and tutorials. The tutorials are mandatory.',
    literature: '',
    prerequisites: '',
    difficulty: 2,
    tags: ['law', 'ethics', 'elective'],
  },
  {
    id: 'ai-in-health',
    slug: 'ai-in-health',
    name: 'AI in Health',
    code: 'XB_0020',
    year: 2,
    period: 5,
    credits: '6EC',
    specialisation: 'socially_aware_computing',
    description:
      'AI techniques applied to the medical field: diagnosis, treatment, monitoring, and prevention. Ontologies, explainable ML, guidelines.',
    overview: `The aim of the course is to make the students familiar with a number of Artificial Intelligence techniques and how they can be applied to the medical field. The course will be structured along the patient journey: diagnosis, treatment, monitoring, and prevention. Several AI techniques will be introduced during the course. The assignments offer students the opportunity to gain practical experience with AI techniques in the health domain. In the assignments, both the AI-technique and a medical topic have to be applied in a practical, hands on, way. The course will be structured into three thematic modules. module 1: Diagnosis (ontologies, explainable ML) module 2: Treatment (representations of guidelines and quality of care indicators, neurosymbolic approaches) module 3: Monitoring & Prevention Beside these modules there might be a couple of guest lectures, on for instance natural language processing for medical texts, bioinformatics, and ethical impact.`,
    objectives:
      'The aim of the course is to make the students familiar with a number of Artificial Intelligence techniques (Knowledge and Understanding) and how they can be applied to the medical field (Applying Knowledge and Understanding, Making Judgments). Furthermore, students should have capability to work in teams (Communication).',
    assessment:
      'Practical group assignments for each module, and an individual exam. Exam (50%) and practical assignments (50%) form the final grade. For both parts the grade needs to be sufficient (5.5 or higher) to obtain a final grade. No resit is possible for the practical assignments.',
    teachingMethods: 'There will be two lectures per week and one practical session per week.',
    literature: 'Selected scientific papers.',
    prerequisites: '',
    difficulty: 2,
    tags: ['health', 'ai', 'elective'],
  },
];
