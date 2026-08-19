import type { GuideSection } from '../types';

export const academicGuideSections: GuideSection[] = [
  {
    id: 'program-structure',
    title: 'Program Structure',
    emoji: '\u{1F393}',
    description: 'Overview of the 3-year AI bachelor curriculum at VU Amsterdam.',
    content: `3 years, 2 semesters per year, 3 periods per semester. Each period is about 8 weeks of classes + an exam week.

### Year 1 — Foundations

| Period | Course | EC | What it covers |
|--------|--------|----|----------------|
| 1 | Computational Thinking | 3 | Solution strategies, search/sorting/graph algorithms, intro to problem-solving |
| 1 | Introduction to Artificial Intelligence | 3 | AI concepts, history, main subfields like ML and knowledge representation |
| 1 | Introduction to Psychology and its Methods | 6 | Cognition, perception, and research methods relevant to human-centred AI |
| 1 | English Language Test | 0 | Mandatory English proficiency check |
| 2 | Intelligent Systems | 6 | Knowledge representation, reasoning, search algorithms, agent architectures |
| 2 | Introduction to Python Programming for AI | 6 | Python basics: variables, control flow, data structures, libraries |
| 3 | Project Intelligent Systems | 6 | Group project — build and evaluate game-playing bots for Schnapsen |
| 4 | Logic and Sets for AI | 6 | Propositional logic, predicate logic, set theory, formal reasoning |
| 4 | Modelling Human Behaviour | 6 | Agent-based, cognitive, and collective behaviour models for human-centred systems |
| 5 | Academic Writing (BETA) | 3 | Formal writing, structuring arguments, citing sources, literature reviews |
| 5 | History of AI | 3 | Key milestones in computing and AI, paradigm shifts, societal impact |
| 5 | Human-Computer Interaction for AI | 6 | Usability, interface design, human–AI interaction |
| 6 | Applied Programming for AI *or* Information Management (pick 1) | 6 | Web tech, Git, REST APIs *or* databases and information organisation |

In period 6 you pick one of the two: Applied Programming for AI or Information Management. That is your first constrained choice.

### Year 2 — Core plus constrained choice

:::warning
**The curriculum changed in 2026-2027.** The specialisation tracks (Intelligent Systems and Socially Aware Computing) are being phased out. Year 2 and 3 now have a set of mandatory courses plus a pool of constrained-choice courses: you pick three in year 2 and one in year 3. Want a specialisation name on your diploma anyway? That is still possible for current cohorts. Read the Specialisations section.
:::

**Mandatory courses:**

| Period | Course | EC | What it covers |
|--------|--------|----|----------------|
| 1 | Knowledge and Data | 6 | RDF, OWL, SPARQL, Linked Data, Knowledge Graphs |
| 2 | Text Mining for AI | 6 | NLP, text classification, sentiment analysis, entity recognition, topic modelling |
| 2 | Linear Algebra and Calculus | 6 | Vectors, matrices, linear systems, limits, differentiation, eigenvalues |
| 3 | Project Socially Aware Computing | 6 | Agent-based simulation for societal challenges using NetLogo |
| 4 | Machine Learning | 6 | Linear models, neural networks, decision trees, gradient descent, deep learning |
| 4 | Probability and Statistics | 6 | Distributions, hypothesis testing, confidence intervals, central limit theorem |
| 5 | Computational Intelligence | 6 | Evolutionary algorithms, neural networks, reinforcement learning, optimisation |

**Constrained choice (pick 3):**

| Period | Course | EC | What it covers |
|--------|--------|----|----------------|
| 1 | Robot Interaction | 6 | Human-robot interaction, social robotics, NLP, ethics |
| 1 | Data Structures and Algorithms for AI | 6 | Algorithms, data structures, complexity analysis |
| 5 | AI and Law | 6 | AI applications in law, ethical questions in the legal domain |
| 5 | AI in Health | 6 | AI for diagnosis, treatment, monitoring, explainable ML |
| 5 | Databases | 6 | ER diagrams, SQL, schema design, normalisation, concurrency |
| 6 | Project Collective Intelligence | 6 | Swarm dynamics, agent-based simulation, collective behaviour modelling |
| 6 | The Law of Artificial Intelligence | 6 | EU AI Act, legal compliance, designing lawful AI systems |

There are no named tracks in this pool. The advisors describe the choice as informal "study paths": lean technical (DSA, Databases, Project Collective Intelligence) or lean social (Robot Interaction, AI and Law, AI in Health). Mix however you want.

**What changed in 2026-2027, in short:**

- Multi-Agent Systems (XB_0024) is gone. Started before 2025-2026 and never passed it? You take one extra constrained-choice course from year 2 or 3 instead, and that replacement does not count towards your constrained-choice or specialisation total.
- Project Conversational Agents (XB_0101) is gone. Its successor, Conversational Agents (XB_0182), is the same course and now runs in year 3 period 4. Passed XB_0101? Then XB_0182 is off-limits for you.
- Computational Intelligence (XB_0025) moved from year 3 to year 2 period 5 and became mandatory.
- Text Mining for AI (XB_0085) moved from period 5 to period 2.
- You cannot swap Linear Algebra and Calculus (XB_0114) or Probability and Statistics (XB_0115) for the CS variants (X_400649, X_401020). The examination board rejects those requests.
- The old Introduction to Programming (PYTHON) course (X_401096) is discontinued; if you still need it, take Introduction to Python Programming for AI (XB_0145) in period 2.

### Year 3 — Minor, Research & Thesis

| Period | Course | EC | What it covers |
|--------|--------|----|----------------|
| 1-3 | Free choice: minor or study abroad | 30 | Your elective space, see the Third-Year Elective Space section |
| 4 | Ethical AI | 6 | Moral agency, fairness, transparency, accountability, EU AI Act |
| 4 | Cognitive Psychology for AI, Automata and Complexity, *or* Conversational Agents (pick 1) | 6 | Your fourth and final constrained choice |
| 5 | Research Design for AI | 3 | Research questions, methodology, data analysis, scientific writing |
| 5-6 | Bachelor Project Artificial Intelligence | 15 | Individual research project, thesis, and oral presentation |

To start the Bachelor Project you need at least **90 EC in total, including 6 EC of the Python course**. No exceptions. The practical advice is still to have most of year 1 and 2 done (around 120 EC) before you begin.

Wondering why you would pick VU over another AI bachelor? That story is in the What Makes VU Special section.`,
  },
  {
    id: 'specialisation-tracks',
    title: 'Specialisations (Phasing Out)',
    emoji: '\u{1F500}',
    description: 'The Intelligent Systems and Socially Aware Computing specialisations, and the rules for still getting one on your diploma.',
    content: `:::warning
**The specialisations are being phased out.** From 2027-2028 they no longer exist. 2026-2027 is the last year in which you can start one, and diplomas with a specialisation name are only issued until 31 August 2030. The curriculum now works with mandatory plus constrained-choice courses instead (see Program Structure). Everything below is for students who still want to finish a specialisation.
:::

### Still want the specialisation on your diploma?

These are the rules, from the TER 2026-2027 and the July 2026 Canvas announcement:

- You had to register your specialisation in the [registration module](https://vu.nl/nl/dashboard/services/intekenen) **before 1 September 2026**, with the academic year filter set to 2025-2026. No registration means no specialisation on your diploma. Missed the deadline, or starting in 2026-2027? Contact the programme coordinator and the examination board.
- **Started before 2025-2026:** complete **5 courses (30 EC)** from one specialisation list.
- **Started in 2025-2026 or later:** complete **4 courses (24 EC)** from one list, plus the now-mandatory Project Socially Aware Computing (XB_0042).
- **No mixing.** Take courses from both lists and you can still graduate, but you get no specialisation name on your diploma, even if you registered.
- **Graduate before 1 September 2030.** After that date no diplomas with a specialisation are issued at all.

### Which courses count

Careful: the lists differ per cohort.

**Started before 2025-2026** (pick 5 from one column):

| Intelligent Systems | Socially Aware Computing |
|---------------------|--------------------------|
| Data Structures and Algorithms for AI (XB_0043) | Robot Interaction (XB_0040) |
| Conversational Agents (XB_0182) *or* Project Conversational Agents (XB_0101) | Project Socially Aware Computing (XB_0042) |
| Databases (X_401008), only if you started in 2023-2024 | AI and Law (XB_0070) |
| The Law of AI (XB_0084) | The Law of AI (XB_0084) |
| Computational Intelligence (XB_0025) | AI in Health (XB_0020) |
| Automata and Complexity (X_401049) | Cognitive Psychology for AI (XB_0072) |
| Project Collective Intelligence (XB_0026) | |

**Started in 2025-2026 or later** (pick 4 from one column, plus XB_0042):

| Intelligent Systems | Socially Aware Computing |
|---------------------|--------------------------|
| Data Structures and Algorithms for AI (XB_0043) | Robot Interaction (XB_0040) |
| Conversational Agents (XB_0182) *or* Project Conversational Agents (XB_0101) | AI in Health (XB_0020) |
| Databases (X_401008) | AI and Law (XB_0070) |
| Project Collective Intelligence (XB_0026) | The Law of AI (XB_0084) |
| Automata and Complexity (X_401049) | Cognitive Psychology for AI (XB_0072) |

Questions about your own situation? Ask the academic advisors: [academicadvice.cs.beta@vu.nl](mailto:academicadvice.cs.beta@vu.nl).

---

### Technical or social: which direction fits you?

The formal tracks are going, but the choice they represented is still there. The constrained-choice pool splits roughly along the same line, and the advisors describe it as informal "study paths" with technical and socially oriented courses.

**Intelligent Systems (IS)** was the technical, systems-focused side: algorithms, databases, dialogue systems, optimisation, formal languages. Leaning this way gives you a stronger CS foundation, better preparation for software engineering roles, and it covers data structures and algorithms, which technical interviews love.

**Socially Aware Computing (SAC)** was the human-centred, interdisciplinary side: robotics, law, health, psychology. These courses suit UX/HCI, policy, healthcare AI, and ethics-focused careers, and most CS programmes do not offer them. The trade-off is fewer core CS courses, so a technical master's may want bridging courses from you.

> **Tip:** picking mostly technical courses keeps more doors open for technical master's programmes. Drawn to human-centred AI, psychology, or ethics? The socially oriented courses are genuinely unique, and you can plug any CS gaps with your year 3 minor.`,
  },
  {
    id: 'third-year-electives',
    title: 'Third-Year Elective Space',
    emoji: '\u{1F4CB}',
    description: 'Options for your Year 3 elective space: minors, studying abroad, and more.',
    content: `The first semester of Year 3 (30 EC) is your **elective space**. You have several options:

### 1. Minor Program (30 EC)
A minor is a pre-packaged set of 5 courses of 6 EC each. You can follow a minor:
- Within your own faculty (Science)
- In another VU faculty
- At a different Dutch university (watch out for calendar differences, lecture and exam periods may not align; you register yourself as an external student, but you pay no extra tuition)

**How to find a minor:**
- Check the [Year 3 study guide](https://studiegids.vu.nl/) — select BSc AI and look at the pre-approved minor overview (no exam board approval needed)
- Visit [minor.vu.nl](https://minor.vu.nl) for a broader list (approval may be needed)

Minors that need no examination board approval for BSc AI (TER 2026-2027): Bioinformatics and Systems Biology, Business Analytics & Data Science (take the "for Artificial Intelligence" variant), Educatieve minor Informatica, Situated AI, plus any university minor you are admissible for. Two exceptions: BSc AI students are **excluded** from the university minors Data Science (XB_MINDASC) and the new Basics of AI (XB_MINBAI). That last one is the AI-for-everyone minor introduced in 2026-2027; it would overlap your whole degree.

Registration for pre-approved minors goes through the registration module, tab "minor/specialization", via "pre-selected courses".

### 2. Free Minor (Custom Course Package)
You can create your own combination of courses (30 EC total) at VU or another university. Requirements:
- Courses must be at university level and cannot overlap with your curricular courses (so no statistics or linear algebra)
- Maximum 1 course (6 EC) at level 100, minimum 2 courses (12 EC) at level 300
- Submit your complete package (course names, codes, credits, levels, and study guide links) to the **Examination Board** for approval
- The package does not need to be coherent, you can mix and match
- Approval can take up to **30 days**, so plan ahead

Some fine print worth knowing:
- The board approves exactly 5 x 6 EC. Extra courses land on your transcript as extracurricular and do not count towards the 30 EC.
- Fail one course of an approved package? You submit a new complete package of 5, including the courses you already passed.
- Free minor courses may run through the whole academic year, second semester included.
- A free minor puts **no minor name on your diploma**. That also happens when you deviate from a standard minor's curriculum: it then counts as a free minor, and the examination board cannot make exceptions.
- Studying abroad with individual courses? You may include at most one 6 EC course at master's level, and you cannot reuse it in a later master's degree.

### 3. Studying Abroad
You can study abroad during your elective space. Deadlines are early:
- Attend an info session in **June** (Year 1) or the mandatory **Study Abroad Weeks in October/November** (Year 2). Without the Study Abroad Weeks you cannot apply.
- Applications for the following academic year close around **mid-January**.
- You need about 30 EC of courses; a bit more (31 or 35 EC) is fine.
- Learn more: [Studying abroad at VU](https://vu.nl/en/student/studying-abroad). The Outgoing Student Exchange Team has phone hours Monday, Wednesday and Friday 12:00-13:00 (+31 20 59 85745) and a walk-in hour Tuesday 12:30-13:30 in the Global Room (HG-1A36).
- One warning: going abroad in semester 1 while you still need to retake mandatory period 1-3 courses is your own risk. VU offers no online courses, so that can cost you an extra year.

### 4. Internship
The BSc AI and CS programmes **do not offer an internship instead of a minor**, and job-shadowing internships get no VU involvement at all. What you can do is a **research internship as part of your Bachelor Project** (thesis):
- You find the internship yourself, and your thesis supervisor must approve it and the research question
- You get no extra EC for it; it is your thesis, hosted somewhere interesting
- Plan about 3 months, in periods 5 and 6 (April to June), with two supervisors: one at VU and one at the company
- Doing this as an international student? The advisors sign a tri-party internship contract for research internships only. Download it from the Bachelor Project Canvas page, sign it together with the company, then send it to the advisors.

### Registration Tips
- Some minors have limited spots and early deadlines, start planning early
- If studying at another university, begin the process well in advance
- You should generally have at least **90 EC from Year 1 and 2** before starting a minor
- Registering more than 18 EC in one period sounds productive but blocks any overlapping-exams arrangement, and more than 3 courses in one period is asking for trouble

**Questions?** Contact your Academic Advisors: [academicadvice.cs.beta@vu.nl](mailto:academicadvice.cs.beta@vu.nl)`,
  },
  {
    id: 'rules-deadlines',
    title: 'Rules & Deadlines',
    emoji: '\u{23F0}',
    description: 'BSA, visa progress rules, the extra August exam, overlapping exams, and the yearly admin calendar.',
    content: `The rules on this page decide whether you can stay in the programme, keep your visa, or graduate a year earlier. Most of them come with hard deadlines, and "I did not know" does not work as an argument. Dates below follow the 2025-2026 pattern; the exact days shift slightly each year, so always check the linked VU pages and the Canvas announcements.

### BSA: the first-year hurdle

The binding study advice (BSA) requires **42 EC of first-year courses by the end of your first year** (31 August). Get there and you are done with the BSA forever; there is no minimum to continue after year 1 apart from this.

A negative BSA is serious: you cannot enrol in **BSc AI or BSc CS** at VU for the next **three academic years**. Both programmes, not just yours.

The escape routes, in calendar order:

| When | What |
|------|------|
| Late January | Interim BSA letter with your current standing |
| Before 1 February | Deregister via Studielink and no BSA is issued at all; you can restart in September |
| Before 1 June | Personal circumstances must already be reported to the academic advisors |
| 1 to 19 June, before 09:00 | Window to request BSA deferment (earlier requests are not processed) |
| Around 30 July | Proposed final BSA decision |
| 7 August, before 09:00 | Deadline to object to a proposed negative decision; you are then invited to a hearing |
| 18 or 19 August | Hearing, on campus, physical presence mandatory |
| 21 August | Final decision |

**Deferment** gives you a second year to reach the 42 EC (for example: 30 EC in year 1, then at least 12 EC of first-year courses in year 2). It exists for exceptional personal circumstances and health problems, decided by the BSA committee, not the advisors. You need evidence (medical statements in Dutch or English) and a demonstrated link between the circumstances and the missing credits. Housing stress and money problems do not count as valid grounds, a second deferment is close to impossible, and you cannot use the same argument twice. Report circumstances to the advisors as soon as they happen, not in June.

All forms and the deferment button: [VU BSA page](https://vu.nl/en/student/study-progress/binding-recommendation-on-continuation-of-studies-bsa#beta) (scroll to the BETA section).

### Non-EU students: the MOMI progress rule

All non-EU/EEA students must earn at least **30 EC per academic year** (measured before 23 August) to keep their residence permit. Under 60 EC left in your programme? Then the bar is 50% of what remains. Only your thesis left? You can ask for an extension until November.

Expect to miss the 30 EC because of circumstances? Apply for a MOMI exception **before 1 July** via [this form](https://fd20.formdesk.com/vuamsterdam/MoMi-Beta), and talk to the academic advisors early. Info: [visa information for current students](https://vu.nl/en/education/more-about/visa-information-current-students).

### One course away from graduating? The extra August exam

If exactly **one course** stands between you and your diploma (the thesis counts as a course), you can request one additional exam opportunity in August:

- Apply between **1 and 15 July**, 23:59 hard deadline, even if grades are still pending
- The course must be from the Faculty of Science
- The written exam takes place around **20 August** on campus
- Everything else, thesis included, must be completed before 31 August

Details: [additional exam opportunity](https://vu.nl/en/student/examinations/additional-exam-opportunity) (under BETA).

### Two exams at the same time

Overlapping exams happen, usually between a minor course and a resit. There is a procedure:

- Email the academic advisors at least **3 weeks before** the exams, with your student number and both courses' codes, dates, times and locations
- Both courses must be taught within the Faculty of Science and belong to your own programme (approved minor and elective courses count)
- You are not helped if one course is extracurricular, belongs to a second degree, or if you are enrolled in more than 18 EC that period
- The usual fix: one exam, a 15-minute supervised break in the same room, then the other. You confirm the arrangement at least 5 working days ahead.
- No guarantee. Worst case you take one of the two in the resit period, and hardship cases go to the examination board.

### The yearly admin checklist (August/September)

- **Re-enrol via [Studielink](https://www.studielink.nl/) before 1 September.** Forgetting this one locks you out of everything else.
- **Register for period 1 courses** in the registration module; it opens late July and closes about a week into September. Your minor courses count too, and you must be re-enrolled first.
- Finishing your thesis over summer? Grades submitted on OnStage after **31 July** can delay graduation; 31 August is the hard end of the academic year.
- The [study guide](https://studiegids.vu.nl/en) gets its new-year courses, schedules and regulations around this time. When in doubt about any rule, the Teaching and Examination Regulations (TER) in the study guide are the binding text.`,
  },
  {
    id: 'what-makes-vu-special',
    title: 'What Makes VU Special',
    emoji: '\u{2B50}',
    description: 'What sets VU Amsterdam\'s AI program apart from others.',
    content: `VU Amsterdam's AI program is more interdisciplinary than most. You don't just do programming and math. There's also cognitive science, psychology, law, and philosophy of AI baked into the curriculum.

If you are choosing between AI bachelors in the Netherlands, curriculum tables will not decide it for you. Most of these programmes teach roughly the same maths, the same machine learning and the same logic. What actually differs is who sits next to you and what city you walk into after the lecture.

### The programme is in English

This is the part people underestimate. Most AI bachelors in the Netherlands are taught in Dutch, which means your cohort is drawn almost entirely from Dutch secondary schools. Here you sit next to people who moved countries to take this degree. My honest impression after two years is that this changes the room: when someone has relocated to be here, they tend to arrive with a plan, and that raises what everyone around them thinks is normal.

Teaching in English also means the guest lecturers, the reading lists and the student events are all in English, so nothing is gated behind a language you may not speak. Class sizes are manageable and professors are generally accessible.

### Amsterdam is the real advantage

Studying AI in Amsterdam gives you a stack of things that have nothing to do with the curriculum:

- **Events, constantly, and in English.** Meetups, hackathons, demo nights, company talks. You can go to something relevant most weeks without trying hard.
- **Part-time work is genuinely findable.** Student jobs, internships and side gigs in tech are much easier to land here than in a smaller university town, and plenty of them are open to second-year students.
- **The Zuidas is a fifteen-minute bike ride away.** If consultancy, finance or product work appeals to you more than writing code all day, you are sitting next to one of the largest concentrations of those firms in Europe. Not everyone in AI wants to be a hardcore programmer, and this is a good place to be if you are one of them.

### The degree itself holds up well right now

AI is growing fast, and the low-level details of computers matter less to most programming jobs than they used to. Employers are looking for people who can work with these systems, evaluate them and reason about where they fail. An AI degree signals that directly in a way a general CS degree does not.

If you want more traditional computer science on top, the 30 EC minor space in year three is exactly the place to add it. You can fill the gaps without giving up the AI label on your diploma.

A degree alone will not carry you, though. What you build and who you meet matter at least as much; the Career Prospects section covers that side.`,
  },
  {
    id: 'career-prospects',
    title: 'Career Prospects',
    emoji: '\u{1F4BC}',
    description: 'Career paths and opportunities after graduating from the AI bachelor.',
    content: `Graduates of the AI bachelor end up in all sorts of roles: machine learning engineer, data scientist, AI researcher, software engineer, AI consultant, and others. Some go straight into industry, but many do a master's in AI or Computer Science first.

The technical and mathematical training you get is broadly applicable, so you're not locked into one specific career path after graduating.

### The market is on your side right now

AI is one of the few fields where demand is running ahead of supply. Companies want people who can build with these systems, judge their output and explain what they are doing, and there are not many graduates who can do all three. Meanwhile the low-level details of computers matter less to most programming jobs than they did ten years ago, so an AI degree reads as more current than a general CS one to a lot of hiring managers.

If you feel the CS foundations are thin, the year-three minor is 30 EC of free space. Use it for algorithms, systems or software engineering and you close the gap without losing the AI label.

### Amsterdam makes the practical side easier

Finding a part-time job, an internship or a side gig is noticeably easier here than in a smaller university town. The Zuidas is a short bike ride from campus, and it is full of consultancies and financial firms hiring people who understand AI but do not want to write code all day. If that describes you, you are in close to the best possible location for it.

### A degree alone is not enough

This is the part nobody puts in the prospectus. Your diploma gets you past a filter. What gets you the actual role is usually one of two things:

**People.** Go to events that genuinely interest you, not the ones you think will look impressive. [AISO](https://aisoamsterdam.com/) runs events for exactly this crowd and is an easy starting point, and [STORM](https://svstorm.nl/) organises company visits and career evenings. A conversation at one of those turns into an internship far more often than a form on a careers page does.

**Projects you actually needed.** Build something that solves a problem you have. That constraint matters more than the tech stack, because it is the reason you will finish it, and finished projects are the ones you can talk about with real detail when someone asks. Put them on GitHub. A profile showing you build things outside of coursework is what separates you from the pile of candidates submitting the same graded assignments.

On generative AI: use it, and learn the fundamentals underneath it anyway. The people who understand what the model is doing are the ones who stay useful when it hands them a confident wrong answer.

### Free career help from VU

- **CareerSet CV review.** Upload your CV and get automated feedback, free, via [VU Career Services](https://vu.nl/en/student/career-services/cv-feedback-with-careerset-sbe). Faster than asking a friend and more honest too.
- **Alumni in the Spotlight.** The CS department runs on-campus alumni talks through the year, with pizza and time to network afterwards. Announced on Canvas.
- **Teaching assistant work** pays, deepens your understanding of a course, and looks good on a CV. See Community & Support for how the recruitment works.`,
  },
  {
    id: 'masters-programs',
    title: "Master's Programs",
    emoji: '\u{1F3AF}',
    description: 'Overview of master\'s programs you can pursue after the AI bachelor.',
    content: `Most AI bachelor graduates continue with a master's degree. Here's an overview of your options.

Use **[welkemaster.nl](https://www.welkemaster.nl/)** to check which master's programs you're eligible for based on your specific bachelor's degree. Enter "BSc Kunstmatige Intelligentie, Vrije Universiteit Amsterdam" and browse the results.

### Getting into the VU MSc AI

Since 2025-2026 the VU MSc AI selects, on top of the regular admission requirements:

1. A minimum undergraduate **GPA of 7.0** (or international equivalent).
2. A **motivation letter and CV** showing relevant knowledge and skills. Worth covering: relevant AI courses and projects, your bachelor thesis topic, your tentative MSc plan (track and electives), internships, work experience, publications.

A 7.0 GPA is a real bar. If you want to continue at VU, your grades matter from year 1 onwards.

### AI Master's in the Netherlands

| University | Program | Notes |
|-----------|---------|-------|
| **VU Amsterdam** | [MSc Artificial Intelligence](https://vu.nl/en/education/master/artificial-intelligence/admissions) | Natural continuation of the bachelor. Tracks in Cognitive Science, AI for Health, and more. Selective since 2025-2026, see above. |
| **UvA** | [MSc Artificial Intelligence](https://www.uva.nl/shared-content/programmas/en/masters/artificial-intelligence/artificial-intelligence.html) | Top-ranked in Europe. Core courses in ML, NLP, Deep Learning, Computer Vision. |
| **TU Eindhoven** | [MSc Data Science and Artificial Intelligence](https://www.tue.nl/en/education/graduate-school/master-data-science-and-artificial-intelligence) | Engineering-oriented, combining advanced DS and AI methods. |
| **Utrecht** | [MSc Artificial Intelligence](https://www.uu.nl/en/masters/artificial-intelligence) | Interdisciplinary (informatics, logic, cognition, philosophy). Selective, strong grades matter. |
| **Groningen** | [MSc Artificial Intelligence](https://www.rug.nl/masters/artificial-intelligence/) | Research-oriented. Selection procedure includes reference letter and written report. |
| **Maastricht** | [MSc Artificial Intelligence](https://www.maastrichtuniversity.nl/education/master/programmes/artificial-intelligence/admission-requirements) | Two intakes (Feb & Sep). |
| **Radboud** | [MSc Artificial Intelligence](https://www.ru.nl/en/education/masters/artificial-intelligence) | Also offers a Data Science and AI specialisation. |
| **Tilburg** | MSc Cognitive Science and AI | Combines cognitive science with deep learning and Bayesian modelling. Great if you leaned towards the socially oriented courses. |

### Other Master's Options in the Netherlands

| University | Program | Notes |
|-----------|---------|-------|
| **VU/UvA (joint)** | [MSc Computer Science](https://vu.nl/en/education/master/computer-science/admissions) | Joint degree between VU and UvA. |
| **TU Delft** | [MSc Data Science and Artificial Intelligence Technology](https://www.tudelft.nl/en/education/programmes/masters/dsait/msc-data-science-and-artificial-intelligence-technology) | Focuses on AI + data management and engineering. |
| **Leiden** | [MSc Computer Science (AI specialisation)](https://www.universiteitleiden.nl/en/education/study-programmes/master/computer-science/artificial-intelligence) | Focus on ML, optimisation, decision support. Pre-master's available. |
| **Twente** | [MSc Computer Science](https://www.utwente.nl/en/education/master/programmes/computer-science/admission/) | Specialisations in Data Science, Cybersecurity, Software Technology. |
| **VU** | [MSc Information Sciences](https://vu.nl/en/education/master/information-sciences/admissions) | 1-year program. Generally accessible from an AI background. |

### Related Fields You Can Pivot To

- **Data Science** at TU/e, Radboud, or TU Delft. Good overlap with the AI background.
- **Cognitive Science / Neuroscience** at VU (MSc Neurosciences, MSc Cognitive Neuropsychology Research). May require a GPA of 7.5-8.0+ and biology prerequisites.
- **Computational Linguistics / NLP** at UvA (within the AI master), Groningen, or Radboud.
- **Philosophy of Neuroscience** at VU, a unique interdisciplinary option.
- **Bioinformatics** at VU/UvA (joint program). Requires biology prerequisites.
- **Business Informatics** at Utrecht. May need bridging in IS-specific courses.

### Prestigious International Programs

| University | Programs | Notes |
|-----------|---------|-------|
| **ETH Zurich** (Switzerland) | MSc CS, MSc Data Science | World-class. Very competitive. Low tuition (~CHF 730/sem). |
| **EPFL** (Switzerland) | MSc CS, MSc Data Science | Strong in ML, computer vision, NLP. Similarly affordable. |
| **University of Edinburgh** (UK) | MSc AI, MSc ML, MSc NLP | One of the oldest AI departments in the world. |
| **UCL** (UK) | MSc Machine Learning, MSc Data Science & ML | Strong math prerequisites. Tuition ~£35,000/year for internationals. |
| **TU Munich** (Germany) | MSc Informatics, MSc Data Engineering & Analytics | Low tuition. Strong industry connections. |
| **KU Leuven** (Belgium) | MSc Artificial Intelligence | Nearby, high quality, affordable for EU students. |
| **MIT** (US) | MEng in EECS | Extremely competitive. Integrates AI ethics and research (CSAIL). |
| **Stanford** (US) | MSc CS (AI specialisation) | Home to Stanford AI Lab (SAIL). Very expensive. |
| **CMU** (US) | MSc in AI, MSc in ML | Separate dedicated AI and ML master's. Top for robotics, ML, HCI. |
| **U of Toronto / McGill** (Canada) | MSc CS (ML focus) | Strong ML ecosystem (Vector Institute, Mila). |

### Start thinking about this early

Seriously, start looking into master's programs by the end of your second year. Don't wait until Year 3 to figure this out.

If you're not sure whether you'll be admitted to a specific program, **email them**. Most of the time, even when the website says something vague like "admission is not guaranteed" or "will be assessed on a case-by-case basis," emailing the admissions board gives you a clear answer. More often than not, you'll find out you *can* get in. Maybe you need a specific minor, maybe a bridging course, worst case a short pre-master. But you won't know unless you ask. Don't be afraid to reach out. The earlier you do, the more time you have to adjust your minor or course choices accordingly.

### Practical Tips

1. **Check [welkemaster.nl](https://www.welkemaster.nl/) first** for a quick eligibility overview
2. **Email the admissions board** of any program you're interested in but unsure about, don't just go by what the website says
3. **Choose your Year 3 minor wisely**, if you want a CS master's, a CS-focused minor can fill gaps and make you eligible
4. **Technical constrained-choice courses** (DSA, Databases, Automata) keep more technical master's options open
5. **Start early** with applications for selective/international programs (deadlines are often in January for a September start)
6. **GPA matters** for selective programs and international universities`,
  },
  {
    id: 'research-groups',
    title: 'Research Groups & Getting Involved',
    emoji: '\u{1F52C}',
    description: 'VU research groups relevant to AI students and how to participate.',
    content: `VU Amsterdam has several research groups relevant to AI students. Getting involved in research early, even as a student assistant, can be valuable for your CV and for figuring out what you want to specialise in.

### Relevant VU Research Groups

- **Computational Intelligence Group** focuses on evolutionary algorithms, neural networks, and optimisation. Connected to the Computational Intelligence course.
- **Knowledge Representation & Reasoning (KR&R)** covers knowledge graphs, semantic web, and ontologies. Connected to Knowledge and Data.
- **Quantitative Data Analytics** works on data science, machine learning methods, and statistical learning.
- **Social AI Group** researches human-AI interaction, conversational agents, and social robotics. Connected to courses like Robot Interaction and Conversational Agents.
- **Computer Systems Group** focuses on high-performance computing, distributed systems, and systems research.

### How to Get Involved

- **Student assistant positions** are regularly posted by departments for help with teaching or research. Check job boards on Canvas or ask professors directly.
- **Research seminars** are held by many groups and open to students. A great way to learn about ongoing research.
- **Bachelor Project** is your thesis and a chance to work within a research group. Start thinking about topics in Year 2.

### Associations

See the *Community & Support* section for details on STORM, AISO, Amsterdam AI, and other organisations.

---

*This section could use more detail from students who have actually participated in research groups or worked as student assistants. If you have experience to share, please reach out via [email](mailto:vu.caboose383@passinbox.com) or contribute directly on [GitHub](https://github.com/jasp-nerd/vu-ai-hub/blob/main/CONTRIBUTING.md).*`,
  },
  {
    id: 'internships',
    title: 'SWE & AI Internships',
    emoji: '\u{1F4BB}',
    description: 'Guide on internship opportunities for AI and software engineering students.',
    content: `
If you just want the summary for what to do then jump to the bottom of the page.

## Non-EU/EEA

:::danger
Non-EU/EEA students face significant restrictions for internships in the Netherlands. Talk with your study advisor about options, such as getting an internship as part of your thesis. Some companies can sponsor work permits, but this is less common for internships.
:::

## Time Points for Internship Applications

A commonly asked question is:

> When am I actually supposed to look for internships?

So I hope this guide can maybe put your minds at ease, there are generally a bunch of different points, and you should not feel pressured. Focus on passing your studies, and seek out opportunities when you feel the time is right.

#### Y1: First Year

:::danger
**Be careful** with internships here. If you are not experienced, focus on building your programming skills and portfolio. Don't worry too much about internships yet.
:::

* If you already have experience you can apply to regular internships, though note that competition is high
* Look for workshop programs and introductory opportunities on LinkedIn. Companies like Uber sometimes offer programs for Y1/Y2 students that can lead to internships

#### Start of Y2: Summer Internships

:::warning
Strongly recommended to apply. These are aimed at Y2 students, often have approachable skill requirements (mainly DSA / LeetCode / HackerRank), and are a great way to get your foot in the door.
:::

* Primarily **targeted** at Year 2 students
* Competitive with low entry barriers; usually require *little specific skill*; do require good DSA knowledge though
* Larger companies may offer these (Amazon, Databricks, Booking.com, Optiver, etc.), though not widely available in smaller firms

#### During Y2: Student Internships

* Accessible to all students throughout the academic year
* Generally accept both Msc and Bsc students
* Consider focusing on opportunities designed for BSc students; internships that also accept Msc will be more competitive if you don't have too much prior experience

#### Y3: Strategic Course Selection + Internships

:::info
A common strategy is to choose lighter elective courses during your final year and do an internship on the side. Design your course load to leave room for professional experience.
:::

* Doing an internship alongside lighter courses is a good strategy if you want to have it done during your studies
* If you design your schedule well it can potentially be the best opportunity aside from summer internships

#### Y3: Thesis Internship

:::danger
This is another **very good point** for looking into internships, because it has essentially no overlap with your courses. The companies might not overlap with your interests but I would still highly recommend to explore options at this point.
:::

#### (If you defer) After Y3: Student Internship

:::info
**If you defer you have to pay tuition**, so this strategy is not recommended for international students if you cannot afford to stay longer. The VU will pay you back a part of your tuition if you graduate halfway through your deferred year. But again **YOU HAVE TO PAY TUITION IF YOU DEFER, ONLY DO THIS IF YOU CAN AFFORD IT**
:::

* If you defer you retain your student status which should still allow you to apply for both student and regular internships

## Where to Find Opportunities

### Dutch Tech Companies

The Netherlands has a strong tech ecosystem. Companies to look at include:

* **Booking.com** (Amsterdam): large engineering org with regular internship programs
* **Adyen** (Amsterdam): payments technology
* **TomTom** (Amsterdam): location technology and mapping
* **Picnic** (Amsterdam): online grocery, very tech-driven
* **ASML** (Eindhoven): semiconductor equipment, both hardware and software roles

### AI Ecosystem in Amsterdam

Amsterdam has a growing AI scene with research labs and companies:

* University research groups (VU, UvA) often have student assistant or research positions
* Startups in the Amsterdam AI ecosystem (check [Amsterdam AI](https://amsterdam-ai.com/) for an overview)
* Corporate AI labs from larger companies (Qualcomm AI Research, Elsevier, Ahold Delhaize)

### Finding Listings

* **LinkedIn** is probably where you'll find the most relevant job listings. If you have a good profile and some basic activity, recruiters will sometimes reach out to you

## Additional Strategies

**Honors**

* If you have a GPA of 7.5, *even if you don't want to do Honors, **just apply***. They do company get-togethers which might be helpful for networking. A key thing to remember: *you do not have to do Honors courses to be in Honors*. You of course will not get the actual title if you don't do the courses, but you can still leverage being in Honors during your studies for networking.

**STORM student association**

* [STORM](https://svstorm.nl/) is a student association for CS, Math and AI students which also does networking events. Their membership fee is around 15 EUR. Worth signing up for events and getting to know more people. They sometimes organize company visits and career events that are particularly relevant for AI students.

**Career Fairs**

* There are a few career fairs usually yearly, remember to check your VU mail every now and then.

**Advent of Code**

* This is a programming competition website which hosts daily programming problems for the month of December until Christmas morning (25th). It's a great way to practice your programming skills and looks good on your CV.

## Summary

To summarize, some recommendations for what to do in each year:

### Year 1

* Make a LinkedIn and a GitHub account (populate them just with basic information)
* Sign up to [STORM](https://svstorm.nl/)
* Try out [Advent of Code](https://adventofcode.com/) in December
* Apply to Honors if you have a GPA >= 7.5
* Look out for programming competitions late in the school year
* Start exploring AI/ML topics that interest you

### Year 2

* Try and populate your GitHub or LinkedIn with anything you did (it's fine if nothing yet)
* Again do AoC (some more good practice)
* Maybe over the year explore some things you find interesting in your personal time
  * personal projects (especially AI/ML projects)
  * Kaggle competitions
  * open-source contributions

### Year 3

* At this point try and have at least 1 project on your GitHub, make sure your LinkedIn is clean
* Have a resume ([this template](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs) is more than enough)
* Start just looking at some job listings to get an idea of the market
* Check [Magnet.me](https://magnet.me/) and [StageVinder](https://stagevinder.nl/) regularly

And of course at all these points see if you can find any good opportunities for an internship. And the one thing to remember:

*IMPORTANT -> YOU ARE PROBABLY MORE SKILLED THAN YOU THINK, IT NEVER HURTS TO APPLY, GOOD LUCK!*
`,
  },
  {
    id: 'community-support',
    title: 'Community & Support',
    emoji: '\u{1F91D}',
    description: 'Student communities, organizations, and support resources for AI students.',
    content: `
## AI Student Groups

### WhatsApp Groups

* [Year 1 AI WhatsApp](https://chat.whatsapp.com/Fax2ctVh49w3fyAgl9wAAJ)
* [Year 2 AI WhatsApp](https://chat.whatsapp.com/JzJTIzprbHIAmjnlw2i6pe)

### Student Organizations

* StudSec - Dutch Student CyberSecurity Association (Based at the VU)
  * [VU Cyber Security Group Discord](https://url.studsec.nl/discord)
  * [Website](https://studsec.nl)

---

*The [CS Discord](https://discord.gg/MGG72qsKrn) and [CS Resource Hub](https://cs-hub.notion.site/CS-Hub-6e7cae889f844cb59ae5f1809c88e553) may also be useful if you are interested in CS-related content.*

---

## Communities & Associations

There are a bunch of communities and resources for AI students in Amsterdam. Here are the ones worth knowing about:

- **STORM** is the official study association for AI, Computer Science, and Mathematics students at VU. Nearly 1,500 members. They offer exam archives, discounted textbooks, career events, study sessions, borrels, and social activities. They also run the VU Mentor Program. Membership is highly recommended. [Website](https://svstorm.nl/) · [Instagram](https://www.instagram.com/studyassociationstorm/)
- **VU Mentor Program** is a free, university-funded initiative run by STORM that pairs first-years with experienced students. They organize exam prep sessions, game nights, trampoline park outings, community dinners, and peer mentoring throughout the year. Students from the Class of 2028 said it was one of the most useful things they joined. They also maintain a [GitHub](https://github.com/VU-Mentor-Program) with course notes and study materials from previous years. Sign up at the start of the year via the [WhatsApp community](https://chat.whatsapp.com/Hrz64fgyYkvLtgadXgZDNn).
- **AISO (AI Student Organisation)** is the largest AI student association in the Netherlands, based in Amsterdam and open to all students. They host bi-weekly events and guest lectures (AISO Talks) featuring C-level executives, professors, UN leaders, and startup founders, with over 30 events per year. A great way to see how AI is used across industries and to meet people beyond VU. Worth joining even in your first year. [Website](https://www.aisoamsterdam.com/) · [Instagram](https://www.instagram.com/aiso.nl/) · [Events](https://lu.ma/aiso)
- **Amsterdam AI** is a cross-sector initiative connecting knowledge institutions, companies, and public organizations around responsible AI in Amsterdam. Good for staying informed about events and opportunities in the city. [Website](https://amsterdamai.com/)
- **Librae Network** is a Netherlands-wide network promoting gender equality in STEM. They run mentorship programmes pairing women+ students with industry mentors, networking dinners, and community events with partner companies like McKinsey, Picnic, and Maven Securities. [Website](https://www.librae.network/) · [Instagram](https://www.instagram.com/libraenetwork/)

### Becoming a Teaching Assistant (TA)

Many courses hire student TAs to help with tutorials, grading, and lab sessions. Being a TA is a great way to deepen your understanding of a subject, earn some money, and build your CV. It's generally available from Year 2 onwards for courses you've already passed.

How the recruitment works: each spring (around March) the CS department posts a Google Form on Canvas to collect availability for the next academic year, with a deadline around mid-April. Only select courses you passed with a **7.5 or higher**. Filling in the form is no guarantee; course coordinators contact the students they pick directly.

---

## Academic Advisors

The academic advisors are your first stop for BSA questions, personal circumstances, study delays, disability accommodations, and doubts about your study choice. Every conversation is confidential.

- **Email:** [academicadvice.cs.beta@vu.nl](mailto:academicadvice.cs.beta@vu.nl). Never email advisors' personal accounts; those messages get lost, in their own words.
- **Office:** NU building, 12th floor, rooms 12A43 and 12A45.
- **Appointments:** 15 or 30 minutes, online or on campus, booked via the [advisor page](https://vu.nl/en/student/contact-student-guidance-and-support/academic-advisors-of-the-faculty-of-science).
- **Open office hour:** every Friday 11:00-12:00 on Microsoft Teams, no appointment needed, max 10 minutes per student. The current Teams link is in the monthly announcement on the Community BSc AI Canvas page.
- VU dropped Zoom on 1 May 2026, so every VU meeting runs on Teams now. Ignore old Zoom links wherever you find them.

Problem with a course itself rather than with your own situation? The **Programme Committee (OLC)** is the formal channel. It has equal numbers of staff and student members, meets every period, discusses course evaluations, and advises on the Teaching and Examination Regulations. Reach the student representatives via the Community BSc AI Canvas page.

## Support when studying gets hard

- **Disability or diagnosis** (ADHD, ASD, dyslexia, chronic or mental illness): you may be entitled to exam facilities like extra time. Arrange this well before the exam period through your academic advisor or [studying with a disability](https://vu.nl/en/student/studying-with-a-disability).
- **Back on Track study group:** free weekly study group with realistic planning help, guided by a student psychologist. Mondays 11:00-12:00 online, Thursdays 10:00-11:00 on campus. [Info](https://vu.nl/en/student/training/back-on-track-study-group)
- **Student psychological counsellors** help with performance anxiety, study stress, motivation, and loneliness: [make an appointment](https://vu.nl/en/student/contact-student-guidance-and-support/student-psychological-counsellor).
- **Study skills trainings:** [courses to optimize studying](https://vu.nl/en/student/training/courses-to-optimize-studying).

## Free stuff and extracurriculars

- **Overleaf Professional is free** for Faculty of Science students. Log in with SSO at [overleaf.com/edu/vua](https://www.overleaf.com/edu/vua), or link your existing account there. Set your VU address as the primary email on your account; VU counts active users to decide whether the licence stays.
- **Broader Mind Course:** extracurricular, interdisciplinary, open to all bachelor students. Runs February to May, 10 evening sessions plus online work, about 2 hours a week, ends with a certificate and Edubadge. Registration opens around 9 December. [Info](https://vu.nl/en/student/extra-challenge/broader-mind-course)
- **VU Dream Teams:** student teams like PULSE Racing, MIND, and RISE that work on one real project for a year. All backgrounds welcome, including non-technical roles. Apply before 1 September via [dreamteams@vu.nl](mailto:dreamteams@vu.nl). [Info](https://vu-ondernemend.nl/en/dreamteams/)
- **Buddy Program:** low-pressure peer matching in small groups with a mentor, aimed at growing your friend group. Announced on Canvas in winter.
- **STORM introduction mentors:** every June STORM recruits paid mentors for the two-day introduction of new first-years. Contact [introduxcie@svstorm.nl](mailto:introduxcie@svstorm.nl).
- **SpringLab:** a student-run platform where you design and give workshops for other students, now extended to CS and AI. [Info](https://vu.nl/nl/onderwijs/meer-over/onderwijsplatform-springlab)

## Practical exam notes

- Digital exams run in the **Schoolyear** workspace. You need your VUnet ID, password, and VU email address at the exam, so know them by heart. [Instruction video](https://www.youtube.com/watch?v=v2mV6N_c5v4)
- Exams are sometimes scheduled in the **Emergohal**, a separate sports hall location, including evening slots. Always check [rooster.vu.nl](https://rooster.vu.nl/schedule) for your exam location and plan the trip there; VU advises walking the route in pairs after dark.

### VU Mentor Program: Want to Help?

If you've been a mentor or have detailed experience with the mentor programme, we'd love to expand this section with more practical advice for incoming students.

---

*If you have experience as a TA or with the mentor programme, please help us make this section more detailed! Reach out via [email](mailto:vu.caboose383@passinbox.com) or contribute directly on [GitHub](https://github.com/jasp-nerd/vu-ai-hub/blob/main/CONTRIBUTING.md).*
`,
  },
  {
    id: 'useful-links',
    title: 'VU Useful Links',
    emoji: '\u{1F578}\u{FE0F}',
    description: 'A consolidation of useful links for matters relating to the VU.',
    content: `
## Useful links from the VU website

* VU Books: [Link](https://www.vuboekhandel.nl/)
* Study Guide: [Link](https://studiegids.vu.nl/en/)
* Dashboard: [Link](https://vu.nl/en/dashboard)
* Timetable: [Link](https://rooster.vu.nl/schedule)

### Rules, Regulations & Deadlines

* BSc AI Study Guide 2026-2027 (includes the TER, year schedule, and minor overview): [Link](https://studiegids.vu.nl/en/Bachelor/2026-2027/artificial-intelligence)
* Examination Board: [Link](https://vu.nl/en/student/your-faculty/examination-board)
* Course registration & deregistration deadlines: [Link](https://vu.nl/en/student/courses/registration-deregistration-deadlines)
* BSA (binding study advice): [Link](https://vu.nl/en/student/study-progress/binding-recommendation-on-continuation-of-studies-bsa#beta)
* Additional exam opportunity (August): [Link](https://vu.nl/en/student/examinations/additional-exam-opportunity)
* Elective space at the Faculty of Science: [Link](https://vu.nl/en/student/elective-space/electives-faculty-of-science)
* Submit externally achieved results: [Link](https://vu.nl/en/student/courses/submit-externally-achieved-result)
* Visa progress rules for non-EU students: [Link](https://vu.nl/en/education/more-about/visa-information-current-students)
* Studying with a disability: [Link](https://vu.nl/en/student/studying-with-a-disability)
* Studielink (enrolment): [Link](https://www.studielink.nl/)
* Academic advisors (AI & CS): [academicadvice.cs.beta@vu.nl](mailto:academicadvice.cs.beta@vu.nl)
* Bachelor Project AI coordinators: [bachelor.project.ai.beta@vu.nl](mailto:bachelor.project.ai.beta@vu.nl)
* Graduation team: [afstuderen.beta@vu.nl](mailto:afstuderen.beta@vu.nl)
* Student Desk (enrolment, tuition): [studentdesk@vu.nl](mailto:studentdesk@vu.nl)

### VU Graduate Winter and Summer Schools

* Winter School: [Link](https://vu.nl/en/education/vu-graduate-winter-school)
* Summer School: [Link](https://vu.nl/en/education/summer-school)

### Entrepreneurship and Startups

* IXA - Helping Startups: [Link](https://www.ixa.nl/)
* Demonstrator Lab - Entrepreneur Hub: [Link](https://www.demonstratorlab.nl/projects/)

### Campus Safety and Support

* Safety on Campus: [Link](https://vu.nl/en/about-vu/more-about/safe-social-setting-on-campus)

### Student Support and Counselling

* Student Psychological Counsellors: [Link](https://vu.nl/en/student/contact-student-guidance-and-support/student-psychological-counsellor)
* Confidential Support: [Link](https://vu.nl/en/education/more-about/what-to-do-when-you-experience-undesirable-behaviour)
* General Counselling Service: [Link](https://vu.nl/en/education/more-about/student-general-counselling-service)

### Student Wellbeing

* Student Wellbeing: [Link](https://vu.nl/en/student/student-wellbeing)

### Career Resources

* VU Career Services: [Link](https://vu.nl/en/student/career-services)
* Amsterdam Career Days: [Link](https://www.amsterdamcareerdays.nl/)

### Sports and Recreation

* Sports Center: [Link](https://sportcentrumvu.nl/en/)

### VU Campus and Resources

* VU Calendar (Interesting Events): [Link](https://vu.nl/en/events)
* VU Library: [Link](https://vu.on.worldcat.org/v2?lang=eng)
* Online VU Book Search: [Link](https://vu.on.worldcat.org/v2)
* VU Study Places: [Link](https://vu-amsterdam.im-motion.net/)

### Special Programs

* Honors Program: [Link](https://vu.nl/en/education/honours)

### AI Organizations

* Amsterdam AI: [Link](https://amsterdam-ai.com/)
* AISO (AI Student Organization): [Link](https://aiso.ai/)
* ICAI (Innovation Center for Artificial Intelligence): [Link](https://icai.ai/)
* ALLAI (Alliance for AI): [Link](https://allai.nl/)

### VU Magazine

* University Magazine "Ad Valvas": [Link](https://www.advalvas.vu.nl/)

### VU History

* VU History (Short and Sweet): [Link](https://vu.nl/en/about-vu/more-about/history)

---

## Academic & Student Resources

* [VU Timetable](https://rooster.vu.nl/) — Check your lecture and tutorial schedule
* [Canvas (VU)](https://canvas.vu.nl/) — Course materials, assignments, and grades
* [VUnet (Student Portal)](https://student.vu.nl/) — Course registration, exam registration, and student services
* [BSc AI Study Guide](https://studiegids.vu.nl/en/Bachelor/2026-2027/artificial-intelligence) — Official study guide for the full AI bachelor programme (2026-2027)
* [Study Guide (VU)](https://studiegids.vu.nl/) — Official course catalog with detailed course descriptions
* [welkemaster.nl](https://www.welkemaster.nl/) — Check which master's programs you're eligible for based on your bachelor
* [STORM (AI Study Association)](https://svstorm.nl/) — Student association for AI, CS, and Mathematics students at VU
* [VU Mentor Program](https://svstorm.nl/pages/mentor-program) — Free peer mentoring, exam prep sessions, and social events for first-years
* [AISO (AI Student Organisation)](https://www.aisoamsterdam.com/) — Guest lectures, talks, and events from the largest AI student org in NL
* [Amsterdam AI](https://amsterdamai.com/) — Cross-sector AI initiative connecting academia, business, and government
* [Year 1 AI WhatsApp](https://chat.whatsapp.com/Fax2ctVh49w3fyAgl9wAAJ) — WhatsApp group for Year 1 AI students
* [Year 2 AI WhatsApp](https://chat.whatsapp.com/JzJTIzprbHIAmjnlw2i6pe) — WhatsApp group for Year 2 AI students
* [CS Discord](https://discord.gg/MGG72qsKrn) — Discord server for CS-related content and community
* [CS Resource Hub (Notion)](https://cs-hub.notion.site/CS-Hub-6e7cae889f844cb59ae5f1809c88e553) — Community-maintained Notion hub with CS resources and notes
* [StudSec Discord](https://url.studsec.nl/discord) — Dutch Student CyberSecurity Association, VU Cyber Security Group
`,
  },
];
