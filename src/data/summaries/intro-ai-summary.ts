/**
 * Comprehensive Intro to AI Summary — inline markdown content.
 * Compiled from all lecture summaries (L1–L11) covering AI fundamentals, literature review,
 * diversity & inclusion, knowledge representation, computer basics, machine learning,
 * AI solutions, data wrangling, verification & validation, evolving intelligence,
 * and AI ethics & philosophy of mind for the VU Intro to AI course.
 */
export const introAiSummary = `
## Lecture 1: Introduction to Artificial Intelligence

### What Is AI?
- **Artificial Intelligence (AI)**: a branch of computer science aimed at creating systems capable of performing tasks that typically require human intelligence
- Tasks include: understanding natural language, recognizing patterns, solving problems, making decisions

### Main AI Methods
| Method | Description |
|--------|-------------|
| **Data Integration** | Combining data from different sources (images, sensors, text) to provide a unified view |
| **Knowledge Representation** | Structuring information so AI can "understand" concepts, entities, and relationships |
| **Automated Reasoning** | Solving complex problems by reasoning through known facts and logical rules |
| **Machine Learning** | Learning patterns from large datasets without explicit programming |
| **Image Processing** | Extracting meaningful information from images |
| **Natural Language Processing** | Interaction between computers and humans using natural language |

### Benefits and Challenges of AI
**The Good Side**: highly autonomous systems, self-driving cars, handling massive data

**The Dark Side**: military drones, surveillance vs. privacy, energy inefficiency

**The Ugly Side**: bias and unfair systems, discriminatory chatbots due to biased training data

### Problem-Driven AI
- The course follows a **problem-driven approach** — using AI to solve real-world problems
- **Four steps**:
  1. **Identify the Problem** — clearly define the objective
  2. **Understand the Context** — research existing solutions, obstacles
  3. **Model Your Solution** — build a computational model using AI methods
  4. **Realise the Solution** — apply the model and evaluate effectiveness

### AI in Real Life — Examples
| Application | AI Role |
|-------------|---------|
| **Daily Care for Health (Philips)** | Sensors in clothing alert doctors to anomalies in vital signs |
| **Moodbuster** | App measures mental state, offers personalized therapy for depression |
| **Robot Companion** | Robots detect emotions and provide companionship for the elderly |

### Course Assessment
| Component | Weight |
|-----------|--------|
| MC Exam | 30% |
| Group Project | 40% |
| Poster & Video | 5% + 5% |
| Diversity & Team Assignment | 10% |

---

## Lecture 2: Literature Review in AI Research

### Definition and Purpose
- A **literature review** is a rigorous review of research using explicit and reproducible methods
- Goals: fair synthesis, transparency, identify gaps, support new insights, position your work

### Types of Literature Reviews
| Type | Description |
|------|-------------|
| **Systematic Review** | Explicit methods to identify, evaluate, and synthesize studies; objective and repeatable |
| **Narrative Review** | Summary without explicit methods; less formal but still valuable |
| **Meta-Analysis** | Quantitative review applying statistical analysis to combine results |

### Steps in a Systematic Literature Review
1. **Planning**: define research domain, search & selection criteria
2. **Conducting**: search with keywords, analyze papers, synthesize findings
3. **Reporting**: present findings structurally, use graphs/tables

### Sources for Literature
- **Online Databases**: IEEE Xplore, ACM Digital Library, PubMed, DBLP
- **Publishers**: Springer, Elsevier (ScienceDirect), Wiley
- **Search Engines**: Google Scholar, Web of Science

### Managing References
- Tools: **Zotero**, **Mendeley**, **BibDesk**
- Document each paper's **DOI**
- Citation styles: **APA**, **IEEE**, **BibTeX**

### Key Considerations
1. **Inclusion/Exclusion Criteria** — relevance, publication year, methodology
2. **Data Extraction** — research question, methodology, findings, open issues
3. **Analysis and Synthesis** — group by themes/methods/trends, draw conclusions

### Reporting Your Review
1. Describe the methods — search strategy, criteria, analysis
2. Organize the findings — group by themes
3. Critical assessment — point out **publication bias** and **selection bias**

---

## Lecture 3: Diversity, Inclusion, and the Mixed Classroom Model

### Diversity
- **Visible diversity**: race, age, gender
- **Non-visible diversity**: cultural background, economic status, personal experiences

### Intersectionality
- Coined by **Professor Kimberle Crenshaw** (1989)
- Multiple identity aspects combine to create unique experiences of advantage or disadvantage
- Key: multiple inequalities overlap; single identity markers overlook full complexity

### Inclusion
- Goes beyond acknowledging diversity — actively integrates diverse individuals
- Every student feels valued, collaboration is encouraged, materials reflect diversity

### Leary's Rose Model
- **Interpersonal Circumplex** for understanding group behavior
- Two axes: **Dominance vs. Submission**, **Cooperation vs. Opposition**

### Mixed Classroom Model — Phase 1: Creating a Safe Environment
- Build trust and comfort; students need to feel secure to engage
- Encourage students to recognize their own and others' identities

### Meaningful Interaction and Group Work
- **Tuckman's stages**: forming, storming, norming, performing
- **Complementarity**: leadership fosters followership, cooperation fosters cooperation
- **Symmetry**: shared goals lead to similar behaviors

---

## Lecture 4: Knowledge Representation (KR)

### What Is KR?
- How to represent information so machines can reason, make decisions, and solve problems
- **Goals**: model the world, enable reasoning, make decisions, efficient computation, express human knowledge

### Symbolic AI vs. Statistical AI
| Aspect | Symbolic AI | Statistical AI (ML) |
|--------|------------|-------------------|
| **Approach** | Explicit symbols, rules, logic | Learn patterns from large datasets |
| **Advantages** | Explainability; robust with little data | Scalability; flexibility |
| **Disadvantages** | Labor-intensive; brittle | Data-hungry; "black box" |

### Why KR Matters
1. **Explainability** — AI can explain its decisions (critical in healthcare, law)
2. **Reasoning** — handles complex rules where statistical AI struggles
3. **Handling Small Data** — works where large datasets are impractical

### Knowledge Graphs (KG)
- Network of nodes (entities) and edges (relationships)
- Features: machine-readable, highly scalable, semantic relationships
- **Use Cases**: search engines (Google), recommendation systems, scientific research

### Integrating KR and ML
1. **Informed ML** — KGs provide additional context and constraints to ML models
2. **Explainable AI (XAI)** — combining KR with ML for explainable predictions
3. **Neuro-Symbolic AI** — symbolic reasoning + neural networks; "think fast and slow"

---

## Lecture 5: Basics of Computers

### Hardware Components
| Component | Description |
|-----------|-------------|
| **CPU** | "Brain" — ALU (math/logic) + CU (manages execution) |
| **RAM** | Volatile primary memory — lost when powered off |
| **HDD/SSD** | Non-volatile long-term storage |
| **Motherboard** | Main circuit board connecting all components |

### Software
- **System Software**: OS (Windows, macOS, Linux, Android)
- **Application Software**: browsers, word processors, games

### Operating Systems (OS)
- Interface between hardware and user
- Manages file systems, memory, process scheduling
- Interfaces: **CLI** (Command Line) and **GUI** (Graphical)

### Key CLI Commands
| Command | Function |
|---------|----------|
| \`cd\` | Change Directory |
| \`pwd\` | Print Working Directory |
| \`ls\` | List files and directories |
| \`mkdir\` | Make Directory |
| \`rm\` | Remove files or directories |

---

## Lecture 6: Deep Dive into Machine Learning

### What Is Machine Learning?
- Algorithms that learn from data and improve performance without explicit programming
- ML algorithms "learn" patterns from training data

### Types of Machine Learning
| Type | Description | Examples |
|------|-------------|----------|
| **Supervised Learning** | Learns from labeled data | Classification (spam), Regression (prices) |
| **Unsupervised Learning** | Finds patterns in unlabeled data | Clustering, Dimensionality Reduction |

### The ML Workflow (7 Steps)

![ML Pipeline](/assets/svgi/ml-pipeline.svg)

1. **Collect Data** — gather relevant data
2. **Prepare Data** — clean, handle missing values, transform features
3. **Choose a Model** — select algorithm for the task
4. **Train the Model** — learn patterns by adjusting parameters
5. **Evaluate** — test on unseen data (accuracy, MSE)
6. **Fine-Tune** — adjust hyperparameters
7. **Deploy** — put into production

### Key Algorithms
| Algorithm | Description |
|-----------|-------------|
| **Linear Models** | Straight-line relationship (e.g., linear regression) |
| **Artificial Neural Networks** | Brain-inspired layers (Input, Hidden, Output) |
| **Decision Trees** | Split data by feature values; nodes = features, branches = decisions |
| **k-NN** | "Lazy learner" — classifies based on k closest training points |

![Neural Network Structure](/assets/svgi/neural-network.svg)

### Challenges
- **Overfitting**: learns noise → poor generalization
- **Underfitting**: too simple → misses patterns
- **Bias-Variance Tradeoff**: balance simplicity (bias) vs. sensitivity (variance)
- **Data Quality**: "Garbage in, garbage out"

### Applications
- Healthcare, Finance, Autonomous Vehicles, NLP

---

## Lecture 7: AI Solutions

### Steps in Building AI Systems
1. **Define the Problem** — clearly frame the objective
2. **Literature Review** — examine existing solutions
3. **Build the AI System** — choose methods, break into sub-steps
4. **Evaluate** — performance metrics and acceptability

### Types of AI
| Type | Description |
|------|-------------|
| **Narrow AI (Weak)** | Specific task; powerful in its domain (Siri, recommendation engines) |
| **General AI (Strong)** | Theoretical — human-level intelligence across all tasks |
| **Superintelligence** | Surpasses human intelligence; purely speculative |

### Problem-Solving Techniques
1. **Systematic Search** — search through possible actions (specific-purpose vs. general-purpose)
2. **Heuristics** — "good enough" solutions when optimal is too complex
3. **Machine Learning** — supervised, unsupervised, reinforcement

![Decision Tree](/assets/svgi/decision-tree.svg)

### Reasoning Types
| Type | Description |
|------|-------------|
| **Deductive** | General rules → specific conclusions |
| **Inductive** | Specific examples → general rules (not always correct) |
| **Abductive** | Most likely explanation for an observation |

### Application Areas
- Computer Vision, NLP, Robotics, Social Intelligence

---

## Lecture 8: Data Wrangling

### What Is Data Wrangling?
- Cleaning, transforming, and preparing raw ("messy") data into a usable format

### Key Stages
1. **Data Discovery & Ingestion** — explore the data, find inconsistencies
2. **Data Structuring** — shape into suitable format
3. **Data Cleaning** — fix missing data, outliers, inconsistencies (most time-consuming)
4. **Data Transformation** — normalize, aggregate, encode
5. **Data Enrichment** — add external data
6. **Data Validation** — verify accuracy and quality

### Five Key Data Properties
| Property | Description |
|----------|-------------|
| **Structure** | Format/shape (table, nested, array?) |
| **Granularity** | Level of detail; **primary key** identifies each record |
| **Faithfulness** | Does data accurately represent reality? |
| **Temporality** | Time-sensitive challenges (time zones, formats) |
| **Scope** | Completeness and coverage |

### Types of Missing Data
| Type | Description | Example |
|------|-------------|---------|
| **MCAR** | No pattern; independent of variables | System glitch deleting random ages |
| **MAR** | Depends on other observed variables | Younger people not reporting income |
| **MNAR** | Related to the missing value itself | Older individuals hiding age |

### Dealing with Missing Data & Outliers
1. **Trim** — remove rows/columns
2. **Impute** — estimate using mean, median, or model
3. **Ignore** — leave as-is
4. **Cap or Limit** — set bounds for outliers
5. **Transform** — mathematical transformations

---

## Lecture 9: Verification, Validation & Research Protocols

### Verification vs. Validation
| Concept | Question |
|---------|----------|
| **Verification** | "Is the system functioning as expected?" (technical correctness) |
| **Validation** | "Does it meet the user's actual needs?" (effectiveness) |

### Internal vs. External Validation
- **Internal**: test components in controlled conditions → technical accuracy
- **External**: real-world effectiveness using user feedback and empirical data (e.g., RCTs)

### Research Protocol Elements
- **Research Question**, **Hypothesis**, **Control & Experimental Groups**
- **Independent & Dependent Variables**, **Test Subjects**, **Confounding Variables**

### Statistical Analysis
- **T-tests, ANOVA** evaluate effectiveness
- **p-value**: low = significant effect (not likely due to chance)

### Measurements
- **Subjective**: self-reported (questionnaires)
- **Objective**: sensor-based, measurable (more reliable)
- Best: combine both

### User Experience Evaluation
- **Acceptability**, **Usability**, **Feasibility**
- Measured via **Likert scale** questionnaires

---

## Lecture 10: Evolving Intelligence

### Core Idea
- Artificial evolution creates AI — systems evolve through selection and reproduction
- Inspired by biological evolution; best-performing traits passed to next generations

### Embodied Intelligence
- Intelligence depends on body + brain interacting with the environment
- **Body (hardware)**: sensors, motors, physical forms
- **Brain (software)**: processes inputs, makes decisions

### Evolutionary Algorithms
- **Selection**: choose best individuals based on fitness
- **Reproduction**: combine parent traits to create offspring
- **Mutation**: introduce small changes for diversity and adaptation

### Embodied Artificial Evolution
- Co-evolves both body and brain of robots simultaneously
- Challenges: finding optimal body types, reproduction mechanisms, speed of evolution

### Real-World Applications
- Rainforest monitoring robots, medical nanobots, terraforming robots

### Key Concepts
- **Morphological intelligence**: body structure evolves to facilitate learning
- **Lamarckism**: traits acquired through learning can be passed to offspring

---

## Lecture 11: AI Ethics & Philosophy of Mind

### AI Ethics
- Designing, developing, and deploying AI that aligns with societal values
- **Ethics in Design**: constructing ethical rules within AI (e.g., Asimov's Laws)
- **Ethics by Design**: AI that can reason about ethical decisions dynamically
- **Trolley Problem**: classic dilemma for autonomous systems
- **Human-in-the-loop**: keeping human decision-makers at critical points
- Privacy, data ownership, and surveillance concerns

### Philosophy of Mind
- **Mind-Body Problem** (Descartes): can physical machines possess consciousness?
- **Chinese Room Argument** (John Searle): symbol manipulation ≠ understanding
- **Intentional Stance** (Daniel Dennett): attributing human qualities to machines is useful but may not be real
- **Symbol Grounding Problem**: how can AI attach meaning to symbols without experience?

### Free Will and AI
- **Determinism**: AI is deterministic → can it have free will?
- **Agency**: capacity for independent action; most AI lacks true free will
- **Hybrid Intelligence**: AI assists humans in decision-making while retaining human control
`;
