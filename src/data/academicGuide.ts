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
| 4 | Modelling Human Behaviour (SAC track) | 6 | Agent-based, cognitive, and collective behaviour models for human-centred systems |
| 5 | Academic Writing (BETA) | 3 | Formal writing, structuring arguments, citing sources, literature reviews |
| 5 | History of AI | 3 | Key milestones in computing and AI, paradigm shifts, societal impact |
| 5 | Human-Computer Interaction for AI | 6 | Usability, interface design, human–AI interaction |
| 6 | Applied Programming for AI | 6 | Web tech (HTML/CSS/JS), Git, REST APIs, building data-driven apps |
| 6 | Information Management | 6 | Databases, data structures, information organisation |

### Year 2 — Specialisation

You pick either **Intelligent Systems** (more technical, systems-focused) or **Socially Aware Computing** (more human-centred, interdisciplinary). See the Specialisation Tracks section below for a full comparison.

**Shared courses (both tracks):**

| Period | Course | EC | What it covers |
|--------|--------|----|----------------|
| 1 | Knowledge and Data | 6 | RDF, OWL, SPARQL, Linked Data, Knowledge Graphs |
| 2 | Linear Algebra and Calculus | 6 | Vectors, matrices, linear systems, limits, differentiation, eigenvalues |
| 2 | Multi-Agent Systems | 6 | Agent reasoning, knowledge representation, Prolog programming |
| 4 | Machine Learning | 6 | Linear models, neural networks, decision trees, gradient descent, deep learning |
| 4 | Probability and Statistics | 6 | Distributions, hypothesis testing, confidence intervals, central limit theorem |
| 5 | Text Mining for AI | 6 | NLP, text classification, sentiment analysis, entity recognition, topic modelling |

**Intelligent Systems track:**

| Period | Course | EC | What it covers |
|--------|--------|----|----------------|
| 1 | Data Structures and Algorithms for AI | 6 | Algorithms, data structures, complexity analysis |
| 3 | Project Conversational Agents | 6 | Build a conversational agent using DialogFlow and ontology |
| 5 | Databases | 6 | ER diagrams, SQL, schema design, normalisation, concurrency |
| 6 | Project Collective Intelligence | 6 | Swarm dynamics, agent-based simulation, collective behaviour modelling |
| 6 | The Law of Artificial Intelligence | 6 | EU AI Act, legal compliance, designing lawful AI systems |

**Socially Aware Computing track:**

| Period | Course | EC | What it covers |
|--------|--------|----|----------------|
| 1 | Robot Interaction | 6 | Human-robot interaction, social robotics, NLP, ethics |
| 3 | Project Socially Aware Computing | 6 | Agent-based simulation for societal challenges using NetLogo |
| 5 | AI and Law | 6 | AI applications in law, ethical questions in the legal domain |
| 5 | AI in Health | 6 | AI for diagnosis, treatment, monitoring — ontologies, explainable ML |
| 6 | The Law of Artificial Intelligence | 6 | EU AI Act, legal compliance, designing lawful AI systems |

### Year 3 — Minor, Research & Thesis

| Period | Course | EC | What it covers |
|--------|--------|----|----------------|
| 4 | Ethical AI | 6 | Moral agency, fairness, transparency, accountability, EU AI Act |
| 4 | Automata and Complexity (IS) *or* Cognitive Psychology for AI (SAC) | 6 | Formal languages, Turing machines, P/NP *or* perception, memory, decision-making |
| 5 | Research Design for AI | 3 | Research questions, methodology, data analysis, scientific writing |
| All year | Bachelor Project Artificial Intelligence | 15 | Individual research project, thesis, and oral presentation |
| — | Free elective minor | 30 | Your choice — any VU or exchange minor |

---

## Why VU Amsterdam

If you are choosing between AI bachelors in the Netherlands, the curriculum tables above will not decide it for you. Most of these programmes teach roughly the same maths, the same machine learning and the same logic. What actually differs is who sits next to you and what city you walk into after the lecture.

### The programme is in English

This is the part people underestimate. Most AI bachelors in the Netherlands are taught in Dutch, which means your cohort is drawn almost entirely from Dutch secondary schools. Here you sit next to people who moved countries to take this degree. My honest impression after two years is that this changes the room: when someone has relocated to be here, they tend to arrive with a plan, and that raises what everyone around them thinks is normal.

Teaching in English also means the guest lecturers, the reading lists and the student events are all in English, so nothing is gated behind a language you may not speak.

### Amsterdam is the real advantage

Studying AI in Amsterdam gives you a stack of things that have nothing to do with the curriculum:

- **Events, constantly, and in English.** Meetups, hackathons, demo nights, company talks. You can go to something relevant most weeks without trying hard.
- **Part-time work is genuinely findable.** Student jobs, internships and side gigs in tech are much easier to land here than in a smaller university town, and plenty of them are open to second-year students.
- **The Zuidas is a fifteen-minute bike ride away.** If consultancy, finance or product work appeals to you more than writing code all day, you are sitting next to one of the largest concentrations of those firms in Europe. Not everyone in AI wants to be a hardcore programmer, and this is a good place to be if you are one of them.

### The degree itself holds up well right now

AI is growing fast, and the low-level details of computers matter less to most programming jobs than they used to. Employers are looking for people who can work with these systems, evaluate them and reason about where they fail. An AI degree signals that directly in a way a general CS degree does not.

If you want more traditional computer science on top, the 30 EC minor space in year three is exactly the place to add it. You can fill the gaps without giving up the AI label on your diploma.

### What a degree will not do for you

Graduating is the floor, not the ceiling. Two things matter at least as much:

**Meet people.** Go to events that actually interest you rather than the ones you think look good. [AISO](https://aisoamsterdam.com/) runs events aimed at exactly this audience and is a good place to start. Conversations at those evenings turn into internships far more often than applications through a careers portal do.

**Build things you personally need.** Not tutorial projects, not another Titanic notebook. Something that solves a problem you actually have. Those are the projects you finish, and they are the ones you can talk about for twenty minutes in an interview. Put them on GitHub. A public profile showing you build things outside of coursework separates you from everyone else submitting the same graded assignments.

On generative AI: use it. Refusing to is not principled, it just makes you slower. But learn the fundamentals underneath it anyway, because the people who understand what the model is doing are the ones who stay useful when it gives a confidently wrong answer.`,
  },
  {
    id: 'specialisation-tracks',
    title: 'Specialisation Tracks',
    emoji: '\u{1F500}',
    description: 'Comparing the Intelligent Systems and Socially Aware Computing tracks.',
    content: `In Year 2 you choose one of two specialisation tracks. Your choice determines roughly 30 EC of your curriculum and appears on your graduation document. You *can* mix courses from both tracks, but if you do, no track label will appear on your diploma.

### Intelligent Systems (IS)

The IS track is more **technical and systems-focused**. It gives you a stronger foundation in algorithms, databases, and building intelligent software systems.

**Track-specific courses:**
| Course | Year | EC | Focus |
|--------|------|----|-------|
| Data Structures and Algorithms for AI | 2 | 6 | Core CS algorithms, complexity, data structures |
| Databases | 2 | 6 | SQL, relational databases, data modelling |
| Project Conversational Agents | 2 | 6 | Building dialogue systems and chatbots |
| Project Collective Intelligence / The Law of AI (choose 1) | 2 | 6 | Agent simulation or AI law |
| Automata and Complexity / Computational Intelligence (choose 1) | 3 | 6 | Formal languages or optimisation algorithms |

**Pros:** Stronger technical/CS foundation. Keeps more master's options open (especially CS masters). Better preparation for software engineering roles. Covers DSA which is essential for technical interviews.

**Cons:** Less exposure to human-centred AI, ethics, and social impact. Heavier on math and programming.

---

### Socially Aware Computing (SAC)

The SAC track is more **human-centred and interdisciplinary**. It focuses on how AI interacts with people and society, covering robotics, psychology, law, and health.

**Track-specific courses:**
| Course | Year | EC | Focus |
|--------|------|----|-------|
| Robot Interaction | 2 | 6 | Human-robot interaction, social robotics |
| Project Socially Aware Computing | 2 | 6 | Building socially aware AI systems |
| The Law of Artificial Intelligence | 2 | 6 | EU AI Act, legal compliance |
| AI and Law / AI in Health (choose 1) | 2 | 6 | Legal AI or healthcare AI |
| Cognitive Psychology for AI | 3 | 6 | Perception, memory, attention, decision-making |

**Pros:** Broader interdisciplinary perspective. Great for UX/HCI, policy, healthcare AI, or ethics-focused careers. Unique courses not found in most CS programs.

**Cons:** Fewer core CS courses (no DSA, no Databases). May need bridging courses for technical master's programs. Less preparation for algorithm-heavy roles.

---

### Shared courses (both tracks)
Knowledge and Data, Linear Algebra and Calculus, Multi-Agent Systems, Machine Learning, Probability and Statistics, Text Mining for AI, Ethical AI, Research Design for AI, and the Bachelor Project.

> **Tip:** If you're unsure which track to choose, the IS track keeps more doors open for technical master's programs. But if you're drawn to human-centred AI, psychology, or ethics, SAC is genuinely unique and valuable.`,
  },
  {
    id: 'third-year-electives',
    title: 'Third-Year Elective Space',
    emoji: '\u{1F4CB}',
    description: 'Options for your Year 3 elective space: minors, studying abroad, and more.',
    content: `The first semester of Year 3 (30 EC) is your **elective space**. You have several options:

### 1. Minor Program (30 EC)
A minor is a pre-packaged set of courses totalling 30 EC. You can follow a minor:
- Within your own faculty (Science)
- In another VU faculty
- At a different Dutch university (watch out for calendar differences, lecture and exam periods may not align)

**How to find a minor:**
- Check the [Year 3 study guide](https://studiegids.vu.nl/) — select BSc AI and look at the pre-approved minor overview (no exam board approval needed)
- Visit [minor.vu.nl](https://minor.vu.nl) for a broader list (approval may be needed)

### 2. Free Minor (Custom Course Package)
You can create your own combination of courses (30 EC total) at VU or another university. Requirements:
- Courses must be at university level
- Maximum 6 EC at level 100, minimum 12 EC at level 300
- Submit your complete package (course names, codes, credits, levels, and study guide links) to the **Examination Board** for approval
- The package does not need to be coherent, you can mix and match
- Approval can take up to **30 days**, so plan ahead

### 3. Studying Abroad
You can study abroad during your elective space. Deadlines are early:
- Attend an info session in **November** (if you're in Year 2) or **June** (if you're in Year 1)
- Learn more: [Studying abroad at VU](https://vu.nl/en/education/more-about/studying-abroad)
- Check the VU study abroad map for partner universities

### 4. Internship
Unfortunately, the BSc AI and CS programmes **do not offer an internship instead of a minor**. However, you might be able to do a research internship as part of your **Bachelor Project** (thesis). In that case:
- You must find the project yourself
- You need approval from your thesis supervisor

### Registration Tips
- Some minors have limited spots and early deadlines, start planning early
- If studying at another university, begin the process well in advance
- You should generally have at least **90 EC from Year 1 and 2** before starting a minor

**Questions?** Contact your Academic Advisors: [academicadvice.cs.beta@vu.nl](mailto:academicadvice.cs.beta@vu.nl)`,
  },
  {
    id: 'what-makes-vu-special',
    title: 'What Makes VU Special',
    emoji: '\u{2B50}',
    description: 'What sets VU Amsterdam\'s AI program apart from others.',
    content: `VU Amsterdam's AI program is more interdisciplinary than most. You don't just do programming and math. There's also cognitive science and philosophy of AI baked into the curriculum.

The program is taught entirely in English and has a pretty international student body. Class sizes are manageable and professors are generally accessible.

Being in the Zuidas area of Amsterdam also means there are plenty of tech companies nearby for internships and networking.`,
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

On generative AI: use it, and learn the fundamentals underneath it anyway. The people who understand what the model is doing are the ones who stay useful when it hands them a confident wrong answer.`,
  },
  {
    id: 'masters-programs',
    title: "Master's Programs",
    emoji: '\u{1F3AF}',
    description: 'Overview of master\'s programs you can pursue after the AI bachelor.',
    content: `Most AI bachelor graduates continue with a master's degree. Here's an overview of your options.

Use **[welkemaster.nl](https://www.welkemaster.nl/)** to check which master's programs you're eligible for based on your specific bachelor's degree. Enter "BSc Kunstmatige Intelligentie, Vrije Universiteit Amsterdam" and browse the results.

### AI Master's in the Netherlands

| University | Program | Notes |
|-----------|---------|-------|
| **VU Amsterdam** | [MSc Artificial Intelligence](https://vu.nl/en/education/master/artificial-intelligence/admissions) | Natural continuation of the bachelor. Tracks in Cognitive Science, AI for Health, and more. |
| **UvA** | [MSc Artificial Intelligence](https://www.uva.nl/shared-content/programmas/en/masters/artificial-intelligence/artificial-intelligence.html) | Top-ranked in Europe. Core courses in ML, NLP, Deep Learning, Computer Vision. |
| **TU Eindhoven** | [MSc Data Science and Artificial Intelligence](https://www.tue.nl/en/education/graduate-school/master-data-science-and-artificial-intelligence) | Engineering-oriented, combining advanced DS and AI methods. |
| **Utrecht** | [MSc Artificial Intelligence](https://www.uu.nl/en/masters/artificial-intelligence) | Interdisciplinary (informatics, logic, cognition, philosophy). Selective, strong grades matter. |
| **Groningen** | [MSc Artificial Intelligence](https://www.rug.nl/masters/artificial-intelligence/) | Research-oriented. Selection procedure includes reference letter and written report. |
| **Maastricht** | [MSc Artificial Intelligence](https://www.maastrichtuniversity.nl/education/master/programmes/artificial-intelligence/admission-requirements) | Two intakes (Feb & Sep). |
| **Radboud** | [MSc Artificial Intelligence](https://www.ru.nl/en/education/masters/artificial-intelligence) | Also offers a Data Science and AI specialisation. |
| **Tilburg** | MSc Cognitive Science and AI | Combines cognitive science with deep learning and Bayesian modelling. Great for SAC track students. |

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
4. **The Intelligent Systems track** keeps more technical master's options open
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
- **Social AI Group** researches human-AI interaction, conversational agents, and social robotics. Connected to several SAC track courses.
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
* [BSc AI Study Guide](https://studiegids.vu.nl/nl/Bachelor/2025-2026/artificial-intelligence) — Official study guide for the full AI bachelor programme (2025-2026)
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
