import type { FAQEntry } from '../types';

export const faqEntries: FAQEntry[] = [
  {
    id: 'faq-1',
    question: 'How many hours per week should I expect to spend on studying?',
    answer:
      'The AI bachelor is a full-time program, so expect to spend around 40 hours per week including lectures, tutorials, and self-study. Some periods are heavier than others — period 1 of year 1 tends to be intense as you adjust to university-level math and programming simultaneously.',
    category: 'Study Tips',
  },
  {
    id: 'faq-2',
    question: 'Do I need prior programming experience?',
    answer:
      "No prior programming experience is required. Introduction to Python Programming for AI starts from scratch. However, if you've never coded before, expect to spend extra time in the first few weeks getting comfortable with the basics. Consider doing a free Python tutorial (like Codecademy or Python.org's tutorial) before the program starts.",
    category: 'Study Tips',
  },
  {
    id: 'faq-3',
    question: 'How do I register for courses and exams?',
    answer:
      'Course registration happens through VUnet (vu.nl/vuweb). You need to register for both the course AND the exam separately. Exam registration typically opens a few weeks before the exam period and has a strict deadline — miss it and you cannot take the exam. Set reminders for registration deadlines.',
    category: 'Registration',
  },
  {
    id: 'faq-4',
    question: 'What happens if I fail an exam?',
    answer:
      "Most courses have a resit (herkansing) opportunity, usually in a later period. You can find resit dates in the exam schedule on VUnet. Note that some courses only offer one resit per year, so it's best to pass on the first attempt when possible. Check the course-specific rules in the OER (Onderwijs- en Examenregeling).",
    category: 'Exams',
  },
  {
    id: 'faq-5',
    question: 'What laptop/software do I need?',
    answer:
      'Any modern laptop (made in the last 5 years) works fine. You\'ll primarily use Python, Jupyter notebooks, and a text editor or IDE (VS Code is the most popular choice). macOS, Windows, and Linux all work. Some students prefer macOS or Linux for the terminal experience, but it\'s not required. VU provides free access to Microsoft Office and various other software through the university license.',
    category: 'Tools & Software',
  },
  {
    id: 'faq-6',
    question: 'Are there study spaces on campus?',
    answer:
      'Yes! The VU campus has several study spots: the University Library (open long hours during exam periods), the study landscape in the NU building, and various faculty-specific study rooms. During exam periods these can get crowded, so arrive early or try less popular spots on the higher floors.',
    category: 'Student Life',
  },
  {
    id: 'faq-7',
    question: 'Should I join a study association?',
    answer:
      "Absolutely. STORM is the study association for AI students at VU. They organize study sessions, social events, career events, and have a great community. It's one of the best ways to meet fellow students and get access to exam archives and course materials. The membership fee is minimal.",
    category: 'Student Life',
  },
  {
    id: 'faq-8',
    question: 'What is the difference between the Intelligent Systems and Socially Aware Computing specialisations?',
    answer:
      'Intelligent Systems focuses on the technical side of AI — machine learning, computer vision, NLP, and optimization. Socially Aware Computing focuses on the human and societal side — human-computer interaction, ethical AI, social computing, and designing AI that works *with* people. You choose your specialisation in year 2. Both lead to the same degree; they just emphasize different aspects of AI.',
    category: 'Program',
  },
  {
    id: 'faq-9',
    question: 'Which courses do students find the most challenging?',
    answer:
      'This varies by person, but courses that consistently challenge students include: Data Structures & Algorithms (fast pace, heavy on proofs and pseudocode), Linear Algebra & Calculus (abstract math that requires consistent practice), and Machine Learning (combines math, programming, and theory). The key is to start studying early and use active recall rather than passive rereading.',
    category: 'Study Tips',
  },
  {
    id: 'faq-10',
    question: 'I feel behind on math. Where can I catch up?',
    answer:
      'Great free resources: 3Blue1Brown on YouTube for visual intuition (Essence of Linear Algebra and Essence of Calculus series), Khan Academy for practice problems, probabilitycourse.com for probability & statistics (mirrors the VU course), and Paul\'s Online Math Notes for calculus worked examples. The VU math support center also offers free drop-in tutoring.',
    category: 'Study Tips',
  },
  {
    id: 'faq-11',
    question: 'How do group projects work in the AI bachelor?',
    answer:
      'Several courses have group projects, including Project Conversational Agents (PCA), Project Intelligent Systems, and Computational Thinking. Group sizes are typically 3-5 students. You\'ll often choose your own groups — form them early with people you trust. Most group projects have individual accountability (personal reports or peer evaluation) in addition to the group deliverable.',
    category: 'Exams',
  },
  {
    id: 'faq-12',
    question: 'When should I start preparing for exams?',
    answer:
      'A good rule of thumb: start active studying 2-3 weeks before the exam. This means reviewing notes with active recall, doing practice problems, and working through past exams. Don\'t confuse attending lectures with studying — lectures are input, studying is the active process of testing and strengthening your understanding. For heavy courses like DSA or Linear Algebra, start even earlier.',
    category: 'Exams',
  },
  {
    id: 'faq-13',
    question: 'What programming languages and tools will I use across all courses?',
    answer:
      'Python is the primary language — you\'ll use it in nearly every course after year 1. Other tools include: Jupyter Notebooks (for ML and data analysis), SWI-Prolog (for Multi-Agent Systems and Logic), VS Code (most popular IDE), Git/GitHub (version control for group projects), and LaTeX (for writing reports in some courses). Install Anaconda to get Python + Jupyter + common libraries in one package.',
    category: 'Tools & Software',
  },
  {
    id: 'faq-14',
    question: 'Are past exams available for practice?',
    answer:
      'Yes, but availability varies by course. Some professors post past exams on Canvas, others don\'t. STORM (the AI study association) maintains an exam archive for members — this is one of the best reasons to join. Additionally, some courses have practice exams or sample questions in their course materials. Always practice under timed conditions to simulate the real exam.',
    category: 'Exams',
  },
  {
    id: 'faq-15',
    question: 'Can I still pass a course if I fail one of the components?',
    answer:
      'It depends on the course. Most courses have a minimum grade requirement for each component (e.g., you must score at least a 5.0 on the exam even if your assignment grades are high). Check the course-specific rules in the Study Guide (Studiegids) on vu.nl. Some courses allow you to compensate a lower exam grade with assignments, but many don\'t.',
    category: 'Exams',
  },
  {
    id: 'faq-16',
    question: 'Is Computational Thinking difficult?',
    answer:
      "Not at all — Computational Thinking is one of the most approachable courses in the entire AI bachelor. It's designed as an introduction to problem-solving and algorithms, so no prior programming experience is needed. The content covers solution strategies, basic search and sorting algorithms, and graph theory at a very accessible level. The supervised quizzes are short multiple-choice/true-false tests, and the assignments follow the lecture material closely. As long as you keep up with the weekly chapters and video lectures, you'll be absolutely fine. Many students score 8+ with minimal stress.",
    category: 'Study Tips',
  },
  {
    id: 'faq-17',
    question: 'What is the group project in Computational Thinking?',
    answer:
      "The group project (worth 40% of your grade) asks you to design and implement an algorithm for a real-world scenario. The exact topic changes slightly each year, but the format is always the same: work in a small team to write pseudocode, create flowcharts, implement the algorithm in Python, and present your solution to peers. Start early — the report needs pseudocode, flowcharts, and a clear explanation of your algorithm. The project itself isn't technically difficult, but the grading is strict on documentation quality. It's also a great way to bond with classmates early in the program!",
    category: 'Courses',
  },

  // ========== Crowdsourced from WhatsApp (2025–2026) ==========
  {
    id: 'faq-18',
    question: 'How do I sync my VU timetable to Google Calendar or Outlook?',
    answer:
      'Go to rooster.vu.nl, find your schedule, then click the "recycle/sync" icon button in the top right corner. This gives you a subscription link that you can add to Google Calendar, Outlook, or Apple Calendar. Your schedule will then update automatically whenever changes are made. This is one of the first things you should set up!',
    category: 'Tools & Software',
  },
  {
    id: 'faq-19',
    question: 'Are tutor groups (workgroups) mandatory?',
    answer:
      'It depends on the course. For Introduction to AI, tutor groups are mandatory — you MUST attend them or you will not pass the course. For Computational Thinking, the practicum sessions serve as both tutorial and project time, and your practicum group becomes your project group. Always check the course-specific rules on Canvas in the first week, as attendance policies vary significantly between courses.',
    category: 'Courses',
  },
  {
    id: 'faq-20',
    question: 'What happens if I miss a practical session?',
    answer:
      'Generally, you are permitted to skip one practical session without penalty in most courses. However, this varies by course — some courses mark every practical, while others have mandatory attendance for all sessions. Check the course manual on Canvas at the start of each course. For courses like Applied Programming for AI, all practical sessions are mandatory with no exceptions.',
    category: 'Courses',
  },
  {
    id: 'faq-21',
    question: 'How do I sign up for Canvas groups and tutor groups?',
    answer:
      'Go to Canvas → People → Groups as soon as the course becomes available. Group sign-up deadlines can close on the very first day of teaching — sometimes even the day before the course officially starts. If you miss the deadline, you will be randomly assigned to whatever slot remains, which may not fit your schedule. Pro tip: set a calendar reminder for the day Canvas courses go live and sign up immediately.',
    category: 'Registration',
  },
  {
    id: 'faq-22',
    question: 'Does the Psychology exam penalize guessing?',
    answer:
      'Yes. Introduction to Psychology uses a correction-for-guessing formula in the grading, which means random guessing can actually hurt your score. You may need more correct answers than you\'d expect to reach a 5.5 because of this adjustment. Check the specific exam instructions carefully — some exams tell you whether it\'s better to guess or leave a question blank.',
    category: 'Exams',
  },
];

