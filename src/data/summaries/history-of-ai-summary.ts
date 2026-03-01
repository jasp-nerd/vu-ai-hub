/**
 * History of AI (XB_0113) Summary — inline markdown content.
 * Covers the seven lectures on the history of computing and AI,
 * from the prehistory of computing through the digital divide,
 * alongside the Campbell-Kelly textbook (chapters 1-15).
 */
export const historyOfAiSummary = `
## Lecture 1: Prehistory of AI (and Computers)

### Overview
- The course is called "History of Science" / "History of AI" and explores computing history from historical, philosophical, ethical, and sociological angles
- The approach is **reflective, not prescriptive** — the goal is to understand *how* and *why* computing emerged, not just memorize dates
- Multiple valid narratives exist — the course tells *a* history, not *the* history

### Prehistory of Computing
- **Three traditions** in the prehistory of computing that eventually converged around 1950:
  1. **Administration / Data processing** — punch cards, tabulators wired together; operations prepared by schemas/schedules
  2. **Process control** — large companies (e.g., Shell) needed control over factory processes; used analogue machinery (e.g., DSM 1956)
  3. **Science and engineering** — human computers active in weather prediction, econometry; more prominent in Europe than in the US
- All three traditions shared a common trait: **schemas** (outlines for how processes should be organized)

### Charles Babbage and Table-Making
- In 1766 the British government commissioned Nevil Maskelyne to produce navigational tables (the *Nautical Almanac*)
- **Charles Babbage** became interested in eliminating errors in mathematical tables
- Inspired by Baron Gaspard de Prony's French table-making project, which applied Adam Smith's division of labor to computation
- Babbage designed the **Difference Engine** (1820s) — a machine for making tables using the method of differences
- The Difference Engine was never fully built; it was harder and costlier than expected
- Babbage then conceived the **Analytical Engine** (1830s) — capable of performing *any* calculation, with a "mill" (processor) and "store" (memory), inspired by the Jacquard loom
- **Ada Lovelace** wrote the best 19th-century account of the Analytical Engine; the programming language Ada was named in her honor
- **Why Babbage failed**: (1) he did not understand that the British government only cared about reducing costs, not his engine specifically; (2) he was 50 years ahead of available mechanical technology

### Punched Card Machines and Herman Hollerith
- The US was a latecomer to large-scale data processing compared to Europe
- The 1880 census used the "tally system" and took seven years to process
- **Herman Hollerith** (1859-1929) developed a mechanical system for census data processing using punched cards
- His system was adopted for the 1890 census, reducing processing time to two and a half years
- Hollerith commercialized his invention by establishing the Tabulating Machine Company in 1896
- This company eventually became **IBM** (International Business Machines) in 1924

### Office Machinery and the Rise of IBM
- Office equipment in the 1880s-1890s was almost entirely an American phenomenon
- **Christopher Sholes** invented the typewriter; **Densmore** funded it; **Philo Remington** manufactured it from 1873
- The typewriter pioneered three key features of the office-machine industry: product perfection, sales organization, and training organization
- **James Rand Sr.** invented the vertical filing system; his company merged with Remington in 1927
- **William S. Burroughs** got a patent in 1885 for an adding machine that could print — only Burroughs successfully transitioned to computers
- **John H. Patterson** founded NCR in 1886; shaped the marketing of business machines with sales quotas, training schools, and the principle that cash registers were "sold, not bought"
- **Thomas J. Watson** learned sales at NCR, was fired, then became president of CTR (later IBM); three factors for IBM's success: (1) sales organization based on NCR, (2) "rent-and-refill" business model, (3) technical innovation

### Foundations of Computation
- **Alonzo Church** — "An Unsolvable Problem of Elementary Number Theory" (1936), introduced lambda calculus
- **Alan Turing** — "On Computable Numbers" (1936), introduced the concept of a universal computing machine (Turing Machine)
- Church and Turing independently proved the limits of computation (Church-Turing thesis / the Entscheidungsproblem)
- The Turing Machine embodied all the logical capabilities of a modern computer
- Turing's work significantly influenced **John von Neumann** and hence the invention of the modern electronic computer

### Analog Computing
- The most important analog computing technology of the 19th century was the **mechanical tide predictor** by Lord Kelvin (1876)
- Problem with analog machines: they could only solve a specific type of problem
- **Vannevar Bush** (1890-1974) built the **Differential Analyzer** (1928-1931) at MIT — the most important computing machine built between the world wars
- Bush later headed the OSRD and NDRC, coordinating wartime scientific research

### Why History?
- To distinguish between **reality and hype** in technology
- To be confronted with your own prejudices about technology and progress
- Historical distance makes choices and competing interests more visible

### Contemporary Relevance
- Algorithms determine our lives — digital culture is not automatically "improvement"
- **Algorithmic bias**: Joy Buolamwini's work on facial recognition bias, Abeba Birhane on algorithmic injustice
- Cathy O'Neil's "Weapons of Math Destruction" — how big data increases inequality
- European tradition of dystopian literature: Karel Capek's *R.U.R.* (1920), George Orwell's *1984* (1948)
- American culture tends toward a more positive attitude to technology; Europe more cautious

---

## Lecture 2: Creating Computers

### Book Chapters: 4 & 5

### The Wartime Context
- WWII was a scientific war; its outcome was determined by effective deployment of scientific research
- The scientific war effort in the US was administered by the **Office of Scientific Research and Development (OSRD)**, headed by Vannevar Bush
- The **Ballistics Research Laboratory (BRL)** needed computing for firing tables — a 100-person team took about a month to create one 3,000-entry firing table

### The Atanasoff-Berry Computer
- **John Vincent Atanasoff** at Iowa State University began building the **Atanasoff-Berry Computer (ABC)** in 1937 with Clifford Berry
- Used binary arithmetic and electronic switching elements — ideas later rediscovered in electronic computers
- John Mauchly visited Atanasoff in June 1941; the extent to which Mauchly "drew on" Atanasoff's ideas remains debated

### ENIAC
- **John Presper Eckert** and **John Mauchly** at the Moore School built the **ENIAC** (Electronic Numerical Integrator and Computer)
- Used 18,000 vacuum tubes; capable of 5,000 basic arithmetic operations per second
- Three major shortcomings: too little storage, too many tubes, and too lengthy reprogramming
- **Herman Goldstine** was responsible for getting Mauchly's proposal taken seriously at BRL
- ENIAC came to life in November 1945

### The Stored-Program Concept and EDVAC
- **John von Neumann** came to help resolve the ENIAC's flaws and develop a new design
- The **"eureka" moment**: the computer's storage device would hold both instructions and data — the stored-program concept
- "First Draft of a Report on the EDVAC" (1945) — von Neumann's sole authorship caused a rift
- Von Neumann architecture: five functional parts — central control, central arithmetic part, memory, input and output organs
- **Engineers vs. Logicians**: Eckert and Mauchly (commercial interests) vs. von Neumann and Goldstine (public domain / academic interests)

### Maurice Wilkes and EDSAC
- The first two stored-program computers were completed in England: Manchester and Cambridge
- The **Manchester Baby Machine** (1948) by Tom Kilburn and F.C. Williams established the feasibility of stored-program computing
- **Maurice Wilkes** at Cambridge built the **EDSAC** (1949) — the first full-scale practical stored-program computer
- Wilkes attended the Moore School Lectures; upon returning to Cambridge, he focused on programming and mathematical applications

### The Computer Becomes a Business Machine
- In the 1950s the computer was reconstructed as an electronic data-processing machine rather than a mathematical instrument
- Three types of firms entered the computer industry: electronics/control equipment manufacturers, office-machine companies, and entrepreneurial start-ups
- **Eckert and Mauchly** established the Electronic Control Company; built the **UNIVAC** for the Bureau of Census
- UNIVAC used magnetic-tape storage to replace millions of punched cards
- In 1952, UNIVAC predicted Eisenhower's landslide victory on CBS Television — the general public's first introduction to computers
- **IBM's response**: "evolution, not revolution" — IBM was cautious but eventually developed the Model 701, 702, and 650
- The **IBM 650** (Magnetic Drum Calculator) secured IBM's leadership of the industry
- By the late 1950s: "IBM and the Seven Dwarfs" (Sperry Rand, Burroughs, NCR, RCA, Honeywell, GE, CDC)

### Dutch Computing Pioneers
- **Aad van Wijngaarden** headed the Mathematisch Centrum (1947); helped build ARRA, the first Dutch computer (1952)
- ARRA II (1954) used transistors — a whole new computer
- **Electrologica** (spin-off 1956) produced the X1, celebrated by mathematicians as the pinnacle of logical computing
- **Konrad Zuse** in Germany built the Z1 (1938) — largely unrecognized at the time

### Trust in Technology
- General trust in technology was connected to late 19th/early 20th century industrial progress
- Trust in numbers grew: the 1890 US Census used Hollerith machines
- Science fiction shaped public imagination: Karel Capek's *R.U.R.* (1920), Asimov's *I, Robot* (1950)

---

## Lecture 3: The Sound of Software

### Book Chapters: 6, 7 & 8

### The Rise of Software
- Software emerged as a distinct discipline separate from hardware
- **Maurice Wilkes** discovered debugging; his work shifted thoughts from hardware toward the programming problem
- Von Neumann and Goldstine assumed programmers would convert programs to binary manually; Wilkes realized the computer itself could do this
- **David Wheeler** wrote "Initial Orders" — a small program to convert symbolic code to binary
- The Cambridge group developed the concept of a **"subroutine library"** (1951) — mini programs reusable by other programmers

### The Sound of Early Machines
- Engineers listened to the execution of code via loudspeakers attached to machines — this was auditive monitoring
- EDSAC played "God Save the Queen" (reverse-engineered); the Dutch MIRACLE hummed the national anthem
- Sounds were used for: checking if the machine was working correctly, figuring out how it operated, announcing program termination
- Transistorised machines were silent; speakers were added to ARRA (1951) and ARRA II (1954)

### Use of Metaphor
- Metaphors were used as reassuring names for new things: "memory," "program," "thinking"
- **Bolter (1984)** in *Turing's Man* argues that using metaphors is defining technology — metaphors come back to real life
- Examples: computer memory as human memory, ENIAC and Harvard Mark I presented as "electronic brains"
- The term "program" originated w.r.t. the ENIAC (1946); "programming" became a verb (1948)

### Programming Languages
- Before programming languages: plugging, autocoding systems
- In 1960, the term "programming language" emerged with **COBOL**, **FORTRAN**, and **ALGOL**
- **Grace Murray Hopper** — first programmer for the Harvard Mark I; developed the A-0 compiler; promoted COBOL
- **John Backus** at IBM created **FORTRAN** (Formula Translator) — the first really successful programming language
- **ALGOL 60** — the "Revised Report on ALGOL 60" was a landmark in language specification; influenced virtually all later languages
- **LISP** — developed by John McCarthy; became the language of AI research
- **Edsger W. Dijkstra** — Dutch computer scientist at the VU's mathematical center; wrote "Communication with an Automatic Computer" (1959) based on the X1 computer

### Cultural Context
- Science fiction shaped public imagination about computing and AI:
  - **Metropolis** (1927) — early film exploring artificial beings
  - **Forbidden Planet** (1956) — AI and technology themes
  - **Isaac Asimov**, "The Last Question" (1956) — computing and the future of humanity
  - Disney's "Man in Space" (1955) — popularizing technology for the masses
- **ELIZA** (1966) by Joseph Weizenbaum — allowed communication between humans and machines; simulated a psychotherapist

### IBM and European "Dwarfs"
- Several European companies could have become a European IBM but failed:
  - **Philips** signed secret agreements not to enter the computer industry
  - **Odhner** machines were old-fashioned with no innovation
  - Companies wanted to stay on the safe side of technology
- European "dwarfs": Zuse KG (Z-line computers, sold to Siemens AG in 1967), Electrologica (bought by Philips in 1966)
- Anti-American sentiment in Europe actually helped European companies, but IBM dominated the European market anyway

---

## Lecture 4: Computing Crisis?

### Book Chapters: 8 & 9

### The Software Crisis
- Late 1960s: growing recognition that software development was unreliable, over budget, and behind schedule
- The term "**software crisis**" was coined at the **1968 NATO conference** in Garmisch, Germany
- Whether it was a *real* crisis depends on perspective — academics claimed the crisis to gain authority and capture the agenda of IT
- The power and size of computers were growing much faster than the capability of software designers to exploit them
- "Computer people" represented a new and different breed of technical expert; programming was seen as a "black art"
- The biggest software debacle was IBM's **OS/360** — Frederick P. Brooks Jr. led the project; it was "painfully sluggish" and contained dozens of errors
- The **structured design methodology** and **structured programming** (embodied in languages like Pascal, 1971) became the most successful programming ideas of the 1970s

### Programming Languages in Detail
- **Dijkstra's "A Case Against the GOTO Statement"** — argued for structured programming, revolutionized software engineering
- **Automath** — early system for formal verification of mathematics
- **BASIC** — developed at Dartmouth for educational purposes; became the introductory language for nonspecialist students
- **F.L. Bauer** suggested the term "software engineering" at the 1968 NATO conference

### AI in the 1960s-70s
- **1956 Dartmouth Conference** — the Founding Fathers of AI (mostly mathematicians) coined the term "Artificial Intelligence"
- Key predecessors: **Kurt Goedel** (incompleteness theorem, 1931), **Alonzo Church** (lambda calculus, 1936), **Alan Turing** (Turing Machine, 1936)
- **A.M. Turing's "Intelligent Machinery"** (1948) — founded the field of AI; explored whether machines could mimic the human brain
- Turing created a machine that could play chess against a human opponent
- AI research drew on: investigation of the human brain, decision-making (economics, administration), language processing
- **Cybernetics** — an interdisciplinary field combining psychology, mathematics, biology; aimed to simulate/emulate brain functions
- **Karl Lashley** — "Brain Mechanisms and Intelligence" (1929) led to two research directions: psychometry and cybernetics

### The Space Race and Computing (ARPA)
- **ARPA** (Advanced Research Projects Agency) was established as a response to the **Sputnik crisis** of October 1957
- **J.C.R. Licklider** from MIT became director; wrote "Man-Computer Symbiosis" (1960) — advocated using computers to *increase* human intellect rather than replace it
- This was radical: many computer scientists thought AI would rival human intellect soon, but Licklider disagreed

### Time-Sharing and Minicomputers
- Around 1965, time-sharing computers became a hot topic — driven by economics and the vision of democratizing computing
- **Project MAC** — MIT's $3 million project for a leading-edge time-sharing system
- Computer utility was killed by the software crisis and falling hardware prices
- **Unix** — developed by Ritchie and Thompson at Bell Labs in C; became a centerpiece of the open-source movement
- The **minicomputer** was born at MIT; **DEC** (Digital Equipment Corporation, founded by Olsen and Anderson) made the **PDP-8** — one of the first computers to use integrated circuits

---

## Lecture 5: Dream Machines

### Book Chapters: 10 & 11

### The Semiconductor Revolution
- **William Shockley** from Bell Labs set up a company in Palo Alto; eight employees left to found **Fairchild Semiconductor** led by **Robert Noyce**
- They made use of silicon to allow multiple transistors on a single wafer — the birth of "Silicon Valley"
- Noyce continued connecting transistors into complete **integrated circuits** ("chips")
- **Intel**, founded by Robert Noyce, encouraged autonomous and creative work; no one had offices
- **Moore's Law**: number of components on a chip increased at a factor of 2 per year
- **Ted Hoff** — developed the microprocessor at Intel in 1971; first microbased computer: Altair 8800 by MITS (January 1975)

### Project Whirlwind and SAGE
- MIT's **Project Whirlwind** — designed as an aircraft simulator; Jay Forrester was in charge
- Delivered 6 years late but established real-time computing and the "Route 128" computer industry in Massachusetts
- Whirlwind became part of **SAGE** (Semi-Automatic Ground Environment) — IBM was the major beneficiary
- SAGE accounted for half a billion dollars of IBM's income in the 1950s; spun off technology for civilian computing (printed circuits, core memories, CRT displays)
- **SABRE** — first major civilian real-time project; an airline reservations system for American Airlines, fully operational by 1964

### Early AI Programs
- **SHRDLU** (1971) — Terry Winograd's natural language understanding program at Stanford (supervised by Papert); could understand commands about a blocks world
- Demonstrated both the promise and limitations of symbolic AI

### Personal Computing Revolution
- **Computer liberation movement** — post-Beatles, post-Vietnam desire to bring computing to ordinary people
- **The Whole Earth Catalog** by Stewart Brand became the voice of the New Communalists
- **Ted Nelson** — came up with hypertext (1974); envisioned computer liberation through information access
- **Altair 8800** (January 1975) — first microprocessor-based personal computer by MITS; you could order and assemble it yourself
- **Bill Gates and Paul Allen** developed a BASIC programming system for the Altair; formed **Micro-Soft** (1975)
- **Wozniak and Jobs** founded **Apple** (1976); Apple II designed for ordinary households
- **VisiCalc** by Daniel Bricklin (1979) — the first "killer app" spreadsheet for Apple
- Three markets for software applications: Games, Education, and Business
- **IBM's personal computer** — William C. Lowe proposed IBM should enter the PC market (1980); IBM hired Microsoft to develop **MS-DOS**; became a big success due to IBM's brand name

### "Two Boys and a Garage"
- Campbell-Kelly deconstructs the Silicon Valley myth of personal computing born from garage startups
- The reality involved a blend of **counterculture** and **entrepreneurial culture**, both strong in California

### Douglas Engelbart and HCI
- **Douglas Engelbart** — "The Mother of All Demos" (1968): introduced the mouse, hypertext, video conferencing, and collaborative editing
- **Ridley Scott's 1984 Apple Super Bowl commercial** — marketing the Macintosh as liberation from Big Brother (IBM)

### The Software Industry
- Software industry developed in two phases: 1975-1982 (low barriers to entry) and post-1983 (high barriers)
- Apple's Macintosh (1979 project) made a big impression but at $2,500 was too expensive
- **Microsoft Windows** was slow; IBM Computers kept running MS-DOS; IBM and Microsoft developed OS/2 (1987), but Windows eventually outsold it

---

## Lecture 6: Neat Networks

### Book Chapters: 12 & 13

### The Networking Era
- Rise of the internet and personal computing in the 1980s-90s
- The personal computer industry in the 1980s "broadened the appeal" of computers to mainstream consumers
- Key firms: IBM PC, Apple Macintosh, Microsoft

### The Internet
- Campbell-Kelly describes the rise of the Internet as a **"confluence of three desires"**: military communication resilience, academic resource sharing, and commercial opportunity
- **ARPANET** (1963) — ARPA's computer systems put together making users able to use facilities of other computers on the network
- **Packet switching** — data sent as short "packets" to switching centers; enabled multiple users to simultaneously share the same line
- Demonstrated at the **International Conference on Computer Communications (ICCC)** in 1972 — email exploded interest in networking
- Several firms made their own networks; **TCP/IP** was established as the protocol for internetworking
- **Timesharing** was essential for making computing accessible to "ordinary people"

### The World Wide Web
- **Tim Berners-Lee** proposed the WWW in 1989 at CERN — a marriage of internet and hypertext; by 1991 the WWW had taken off
- Berners-Lee was against commercial exploitation of the web
- **Mosaic** (1993) — browser made by student Marc Andreessen; he teamed up with Jim Clark to create **Netscape** (1994)
- **Internet Explorer** was bundled with Windows 98, becoming the dominant browser
- **1995**: Amazon.com started as a bookselling site
- **1998**: Page and Brin launched **Google Inc.**

### Google and Search
- Google offered something genuinely new with its search engine around 2000
- Connection between Google and the rise of **surveillance capitalism**

### Real-Time Systems in Business
- **Visa System**: BankAmericard became Visa in 1976 under Dee Hock; NBI/Visa's BASE II was America's first nationwide automated clearinghouse
- **ATMs** (Automated Teller Machines) transformed banking
- **Universal Product Code (UPC)** / barcode — adopted in 1973, largely developed by IBM; transformed the supermarket industry

---

## Lecture 7: Digital Divide

### Book Chapters: 14 & 15

### Modern Computing and AI Ethics
- **Timnit Gebru et al.**, "On the Dangers of Stochastic Parrots" (2021) — critical paper on the risks of large language models, including environmental costs, bias, and the illusion of understanding
- The digital divide: unequal access to technology across social, economic, and geographic lines

### AI Winters and Hype Cycles
- The history of AI features multiple **AI winters** — periods of reduced funding and interest following overhyped promises
- **First AI Winter (1970s)**: the Lighthill Report (1973) in the UK criticized AI research as failing to deliver on its promises; funding was drastically cut
- **Second AI Winter (late 1980s-early 1990s)**: collapse of the expert systems market and the Lisp machine industry
- Parallels between historical funding narratives (e.g., Babbage seeking government money, Aiken at Harvard) and modern AI hype
- The concept of **agendas** helps explain why certain technologies get funded: scientific, military, and commercial interests compete

### Symbolic AI vs. Connectionism
- **Symbolic AI** (Good Old-Fashioned AI / GOFAI): represents knowledge through symbols and rules; dominated from the 1950s through the 1980s
- Key symbolic AI programs: Newell and Simon's Logic Theorist (1956), GPS (General Problem Solver), expert systems
- **Connectionism / Neural Networks**: inspired by biological neurons; learning through adjusting connection weights
- **Perceptron** (Frank Rosenblatt, 1958) — early neural network; Minsky and Papert's *Perceptrons* (1969) highlighted limitations, contributing to the first AI winter
- The debate between symbolic AI and connectionism is one of the central tensions in AI history

### Expert Systems Era
- **Expert systems** emerged in the 1970s-80s as the dominant commercial application of AI
- Used rule-based reasoning (if-then rules) to encode domain knowledge from human experts
- **MYCIN** (Stanford, 1970s) — diagnosed bacterial infections; **DENDRAL** — identified chemical compounds
- **R1/XCON** (Carnegie Mellon/DEC) — configured VAX computer systems; saved DEC millions
- Expert systems promised AI would transform business; investment surged but the technology proved brittle and expensive to maintain
- Their collapse contributed to the second AI winter

### Machine Learning Revolution
- Shift from hand-coded rules to **learning from data**
- **Statistical approaches** gained prominence in the 1990s-2000s for NLP, speech recognition, computer vision
- **Support Vector Machines**, decision trees, random forests, and Bayesian methods replaced symbolic reasoning in many practical applications
- The availability of large datasets and increased computing power drove the transition

### Deep Learning Breakthroughs
- **Geoffrey Hinton**, Yann LeCun, and Yoshua Bengio — pioneers of deep learning (the "Godfathers of AI")
- **Backpropagation** (popularized in 1986 by Rumelhart, Hinton, and Williams) enabled training of multi-layer neural networks
- **AlexNet** (2012) — Krizhevsky, Sutskever, and Hinton won the ImageNet competition by a large margin using deep convolutional neural networks
- **DeepMind's AlphaGo** (2016) defeated world Go champion Lee Sedol — demonstrated deep reinforcement learning
- **Transformers** (Vaswani et al., 2017, "Attention Is All You Need") — the architecture behind modern large language models (GPT, BERT)
- Deep learning success was enabled by: GPUs, massive datasets (the internet), and algorithmic improvements

### Philosophy of AI
- **The Turing Test** (1950, "Computing Machinery and Intelligence") — a machine is intelligent if an interrogator cannot distinguish it from a human in conversation
- **John Searle's Chinese Room Argument** (1980) — argues that a computer manipulating symbols cannot truly *understand* meaning; distinguishes between "strong AI" (genuine understanding) and "weak AI" (simulation of understanding)
- **The Frame Problem** — the difficulty for AI systems to determine which facts are relevant in a changing situation
- **Hubert Dreyfus** — philosopher who criticized AI in *What Computers Can't Do* (1972); argued that human intelligence relies on embodied, intuitive knowledge that cannot be formalized
- These philosophical debates remain central to discussions about the nature and limits of artificial intelligence

### Diversity and Inclusion
- Campbell-Kelly addresses diversity and inclusion in the 2010s computer industry
- One of the more positive developments in the globalizing tech industry
- Early computing had significant female contributions (human computers, Grace Hopper, the ENIAC programmers) that were historically underrecognized

### Computing and Governance
- 21st century computing created ethical liabilities requiring government intervention
- Issues: algorithmic accountability, data privacy, platform regulation
- **Appropriation** — how technologies are adopted and adapted differently across cultures (e.g., squatting, hacking)
- Shift to **digital culture** is a shift in historical perspective — users became more central, giving new meanings to computers

---

## Key Figures and Their Contributions

| Figure | Contribution |
|--------|-------------|
| **Nevil Maskelyne** | Produced navigational tables for the Nautical Almanac (1766) |
| **Charles Babbage** | Designed Difference Engine and Analytical Engine (1820s-1830s) |
| **Ada Lovelace** | Wrote the best description of the Analytical Engine (1843) |
| **Herman Hollerith** | Electric tabulating system for 1890 census; founded TMC (later IBM) |
| **Thomas J. Watson** | Built IBM into a dominant force; "rent-and-refill" business model |
| **Vannevar Bush** | Built Differential Analyzer; headed OSRD; established NDRC |
| **Alan Turing** | Turing Machine (1936); "Intelligent Machinery" (1948); Turing Test (1950) |
| **Alonzo Church** | Lambda calculus (1936); Church-Turing thesis |
| **John von Neumann** | Stored-program concept; "First Draft of a Report on the EDVAC" (1945) |
| **John Presper Eckert** | Co-invented ENIAC; co-built UNIVAC |
| **John Mauchly** | Co-invented ENIAC; co-built UNIVAC |
| **Herman Goldstine** | Got Mauchly's ENIAC proposal accepted; worked on EDVAC |
| **Maurice Wilkes** | Built EDSAC (1949); first practical stored-program computer |
| **Edsger W. Dijkstra** | Structured programming; "A Case Against the GOTO Statement" |
| **John McCarthy** | Created LISP; coined "Artificial Intelligence"; organized Dartmouth Conference |
| **J.C.R. Licklider** | "Man-Computer Symbiosis" (1960); directed ARPA |
| **Douglas Engelbart** | "Mother of All Demos" (1968); invented the mouse |
| **Grace Murray Hopper** | First programmer for Harvard Mark I; promoted COBOL |
| **John Backus** | Created FORTRAN at IBM |
| **Ted Nelson** | Hypertext concept (1974); computer liberation |
| **Robert Noyce** | Fairchild Semiconductor; co-founded Intel; integrated circuits |
| **Tim Berners-Lee** | Proposed the World Wide Web (1989) at CERN |
| **Terry Winograd** | Created SHRDLU (1971); natural language understanding |
| **Aad van Wijngaarden** | Head of Mathematisch Centrum; first Dutch PC (ARRA, 1952) |
| **Konrad Zuse** | Built the Z1 in Germany (1938) |
| **Geoffrey Hinton** | Pioneer of deep learning and backpropagation |
| **John Searle** | Chinese Room Argument (1980) against strong AI |
| **Hubert Dreyfus** | Critic of AI; *What Computers Can't Do* (1972) |

---

## Exam Structure

### Format
- Duration: 2 hours 15 minutes
- Written exam with essay-style answers

### Question Categories
| Category | Source | Count |
|----------|--------|-------|
| **A-Questions** | Lecture content | 8 available |
| **B-Questions** | Campbell-Kelly book | 12 available |
| **C-Questions** | Combining lectures + book | 6 available |
| **NO BONUS** | For students without assignment bonus | 1 |

### How to Answer
- Pick **4 questions**: 1 A-question, 2 B-questions, 1 C-question (each worth 2 points)
- If you don't have the assignment bonus, also answer the NO BONUS question (1 point)
- Write in **essay format** — no bullet points; explain yourself with examples
- Spelling and grammar matter (English or US standards both accepted)

### Bonus System
- 6 weekly group assignments
- If the average of your **best 4 assignments** is 6 or higher, you earn the bonus
- Bonus = skip the NO BONUS question (start exam at 2 points instead of 1)

---

## Key Themes Across the Course

### Historical Perspectives
- Computing emerged from **multiple traditions**: scientific, military/governmental, and commercial
- The European perspective (especially Dutch contributions like Dijkstra, Electrologica, the Mathematisch Centrum) vs. the American narrative in Campbell-Kelly
- Technology development is shaped by social context, not just technical innovation
- "Watson was rational but wrong, while Eckert and Mauchly were irrational but right" — the tension between IBM's cautious approach and the pioneers' bold vision

### Recurring Concepts
- **Agendas** — why certain technologies get funded and developed (scientific, military, commercial interests)
- **Appropriation** — how technologies are adopted and transformed by different communities (e.g., hackers, squatters)
- **Defining technology** — technologies that shape how a society understands itself (Bolter's concept); cybernetics as a 1960s example
- **Digital culture** — whether "digital culture" adequately describes modern society; shift where users become central
- **Three traditions** — administration, process control, and science/engineering all converging around 1950

### Ethics and Society
- Algorithmic bias and its real-world consequences
- Surveillance capitalism and data privacy
- The role of diversity and inclusion in the tech industry
- AI hype cycles and the importance of critical thinking about technological promises
- The Turing Test, Chinese Room, and ongoing philosophical questions about machine intelligence
- Environmental costs of large-scale AI systems
- The digital divide: unequal access to technology across social, economic, and geographic lines

### The AI Timeline
| Period | Development |
|--------|------------|
| **1936** | Turing Machine and Church's lambda calculus |
| **1943** | McCulloch-Pitts model of artificial neurons |
| **1948** | Turing's "Intelligent Machinery" |
| **1950** | Turing Test proposed |
| **1956** | Dartmouth Conference — AI officially named |
| **1958** | Perceptron (Rosenblatt) |
| **1966** | ELIZA (Weizenbaum) |
| **1969** | Minsky & Papert's *Perceptrons* — limits of single-layer networks |
| **1970s** | First AI Winter; Lighthill Report (1973) |
| **1970s-80s** | Expert systems era (MYCIN, DENDRAL, R1/XCON) |
| **Late 1980s** | Second AI Winter; expert systems collapse |
| **1986** | Backpropagation popularized (Rumelhart, Hinton, Williams) |
| **1990s-2000s** | Statistical ML revolution; SVMs, Bayesian methods |
| **2012** | AlexNet — deep learning breakthrough on ImageNet |
| **2016** | AlphaGo defeats Lee Sedol |
| **2017** | Transformer architecture ("Attention Is All You Need") |
| **2020s** | Large language models (GPT series, BERT); "Stochastic Parrots" debate |
`;
