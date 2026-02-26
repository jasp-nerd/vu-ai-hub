# Comprehensive Intro to AI Summary — Lectures 1–11

## Lecture 1: Introduction to Artificial Intelligence

### What Is AI?
- **Artificial Intelligence (AI)**: a branch of computer science aimed at creating systems capable of performing tasks that typically require human intelligence
- Tasks include: understanding natural language, recognizing patterns, solving problems, making decisions

### Main AI Methods
| Method | Description |
|--------|-------------|
| **Data Integration** | Combining data from different sources (images, sensors, text) to provide a unified view |
| **Knowledge Representation** | Structuring information so AI can "understand" concepts, entities, and relationships (ontologies, semantic networks) |
| **Automated Reasoning** | Solving complex problems by reasoning through known facts and logical rules (propositional/first-order logic) |
| **Machine Learning** | Learning patterns from large datasets without explicit programming (supervised, unsupervised, reinforcement) |
| **Image Processing** | Extracting meaningful information from images (medical imaging, self-driving cars, facial recognition) |
| **Natural Language Processing** | Interaction between computers and humans using natural language (translation, sentiment analysis, speech recognition) |

### Benefits and Challenges of AI
**The Good Side**:
- Highly autonomous systems (robotics, autonomous vehicles)
- Self-driving cars using sensors and learning algorithms
- Handling massive data in healthcare, finance, climate research

**The Dark Side**:
- Military drones raising ethical questions about machine autonomy in warfare
- Surveillance vs. privacy concerns
- Energy inefficiency of large ML systems

**The Ugly Side**:
- Bias and unfair systems (Cambridge Analytica, biased credit scoring)
- AI-driven chatbots that unintentionally discriminate due to biased training data

### Problem-Driven AI
- The course follows a **problem-driven approach** — emphasis on using AI to solve real-world problems
- **Four steps to solving problems with AI**:
  1. **Identify the Problem** — clearly define the objective
  2. **Understand the Context** — research theoretical aspects, existing solutions, obstacles
  3. **Model Your Solution** — build a computational model using AI methods
  4. **Realise the Solution** — apply the model to a real-world scenario and evaluate effectiveness

### AI in Real Life — Examples
| Application | AI Role |
|-------------|---------|
| **Daily Care for Health (Philips)** | Sensors in clothing alert doctors to anomalies in vital signs |
| **Moodbuster** | App measures mental state and offers personalized therapy for depression |
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
- A **literature review** is a methodologically rigorous review of research using explicit and reproducible methods
- Goals: fair synthesis, rigorous procedure, transparency, open presentation of findings
- **Importance**: identifies what has been done, supports new insights, positions your work within the existing body of research

### Types of Literature Reviews
| Type | Description |
|------|-------------|
| **Systematic Review** | Explicit and rigorous methods to identify, evaluate, and synthesize studies; objective and repeatable |
| **Narrative Review** | Summary without explicit method descriptions; less formal but still valuable |
| **Meta-Analysis** | Quantitative review applying statistical analysis to combine results from multiple studies |

### Steps in a Systematic Literature Review
1. **Planning**: define research domain, search & selection criteria
2. **Conducting**: search with appropriate keywords, analyze papers, synthesize findings
3. **Reporting**: present findings structurally, use graphs/tables, discuss how review informs future work

### Sources for Literature
- **Online Databases**: IEEE Xplore, ACM Digital Library, PubMed, DBLP
- **Publishers**: Springer, Elsevier (ScienceDirect), Wiley
- **Search Engines**: Google Scholar, Web of Science

### Managing References
- Use tools like **Zotero**, **Mendeley**, or **BibDesk**
- Document each paper's **DOI**
- Common citation styles: **APA**, **IEEE**, **BibTeX**

### Key Considerations
1. **Inclusion/Exclusion Criteria** — relevance, publication year, methodology
2. **Data Extraction** — extract research question, methodology, findings, open issues
3. **Analysis and Synthesis** — group by themes/methods/trends, draw conclusions

### Reporting Your Review
1. **Describe the Methods** — search strategy, criteria, analysis process
2. **Organize the Findings** — group by themes, methods, or results
3. **Critical Assessment** — point out limitations: **publication bias**, **selection bias**

---

## Lecture 3: Diversity, Inclusion, and the Mixed Classroom Model

### Diversity
- **Diversity**: all the ways people differ from one another
- **Visible diversity**: race, age, gender
- **Non-visible diversity**: cultural background, economic status, personal experiences

### Intersectionality
- Coined by **Professor Kimberle Crenshaw** in 1989
- Multiple aspects of identity (race, gender, socioeconomic status) combine to create unique experiences of advantage or disadvantage
- Key points:
  1. **Multiple inequalities** overlap, creating unique challenges
  2. **Representativeness**: education must reflect diverse identities
  3. **Single identity markers** alone overlook full complexity
  4. **Identity as a relationship**: identity interacts with social, cultural, and educational systems

### Inclusion
- Goes beyond acknowledging diversity — actively integrates diverse individuals meaningfully
- In education: every student feels valued, collaboration is encouraged, materials reflect diversity

### Group Dynamics: Leary's Rose Model
- **Leary's Rose** (Interpersonal Circumplex): tool to understand interpersonal behavior in groups
- Two axes:
  - **Dominance vs. Submission** — taking charge vs. following
  - **Cooperation vs. Opposition** — working together vs. prioritizing own interests

### Phases of the Mixed Classroom Model
**Phase 1: Creating a Safe Environment**
- Build trust and comfort; students need to feel secure to engage
- Central questions: How to create a safe learning environment? How to get students to reflect on their own perspective?

### Meaningful Interaction and Group Work
- Uses **Tuckman's stages of group development** (forming, storming, norming, performing) and **Leary's Rose**
- **Complementarity**: leadership leads to followership, cooperation fosters cooperation
- **Symmetry**: shared goals lead to similar behaviors and better group cohesion

---

## Lecture 4: Knowledge Representation (KR)

### What Is Knowledge Representation?
- The field of AI dealing with how to represent information so machines can reason, make decisions, and solve problems
- **Goals of KR**:
  1. **Model the World** — represent real-world objects, entities, concepts accurately
  2. **Enable Reasoning** — perform logical deductions (e.g., "All humans are mortal" + "Socrates is human" → "Socrates is mortal")
  3. **Make Decisions** — use represented knowledge for decision-making
  4. **Efficient Computation** — process knowledge efficiently by algorithms
  5. **Express Human Knowledge** — align with how humans think, making AI intuitive

### Symbolic AI vs. Statistical AI
| Aspect | Symbolic AI | Statistical AI (ML) |
|--------|------------|-------------------|
| **Approach** | Explicit symbols, rules, logic | Learn patterns from large datasets |
| **Advantages** | Explainability; robust with little data | Scalability; flexibility |
| **Disadvantages** | Labor-intensive; brittle with incomplete data | Data-hungry; lack of explainability ("black box") |

### Why KR Is Important in AI
1. **Explainability** — AI can explain its decisions (critical in healthcare, law)
2. **Reasoning** — fills the gap where statistical AI struggles with complex rules
3. **Handling Small Data** — works in domains where large datasets are impractical

### Knowledge Graphs (KG)
- A **knowledge graph** is a network where nodes = entities, edges = relationships
- Features: machine-readable, highly scalable, semantic relationships
- **Use Cases**: search engines (Google), recommendation systems (Netflix, Amazon), scientific research (bioinformatics)

### Integrating KR and Machine Learning
1. **Informed ML** — ML models use knowledge graphs for additional context and constraints
2. **Explainable AI (XAI)** — combining KR with ML for explainable predictions
3. **Neuro-Symbolic AI** — combines symbolic reasoning with neural networks; "think fast and slow"

---

## Lecture 5: Basics of Computers

### What Is a Computer?
- A device that manipulates data — can store, retrieve, and process information

### Computer Architecture: Hardware vs. Software
**Hardware Components**:
| Component | Description |
|-----------|-------------|
| **Input Devices** | Keyboard, mouse, microphones, sensors |
| **Output Devices** | Monitors, printers, speakers |
| **CPU** | "Brain" of the computer — performs calculations and logical operations |
| — **ALU** | Arithmetic Logic Unit — handles math and comparisons |
| — **CU** | Control Unit — manages execution of instructions |
| **RAM** | Volatile primary memory — data lost when powered off |
| **HDD/SSD** | Non-volatile long-term storage |
| **Motherboard** | Main circuit board connecting all internal components |

**Software**:
- **System Software**: OS (Windows, macOS, Linux, Android) — manages hardware
- **Application Software**: programs for specific tasks (browsers, word processors, games)

### Operating Systems (OS)
- Interface between hardware and user
- Manages: file management, memory management, process scheduling
- **File Systems**: organize files into directories (folders) in a tree-like structure
- **Types of OS interfaces**:
  - **CLI** (Command Line Interface) — type commands (e.g., Linux Bash)
  - **GUI** (Graphical User Interface) — icons and windows (e.g., macOS, Windows)

### Working with Files and Directories
- **Basic File Operations**: create, move, copy, delete, rename

### The Command Line Interface (CLI)
| Command | Function |
|---------|----------|
| `cd` | Change Directory |
| `pwd` | Print Working Directory |
| `ls` | List files and directories |
| `mkdir` | Make Directory |
| `rm` | Remove files or directories |

- **Why use the terminal?** Efficiency, task automation (scripts), remote server access

---

## Lecture 6: Deep Dive into Machine Learning

### What Is Machine Learning?
- **Machine Learning (ML)**: algorithms that allow computers to learn from data and improve performance without explicit programming
- ML analyzes patterns within data and develops models that can make predictions or decisions
- Key concept: ML algorithms "learn" patterns by being shown examples (training data)

### Basic Types of Machine Learning
| Type | Description | Examples |
|------|-------------|----------|
| **Supervised Learning** | Learns from labeled data (input + correct output) | Classification (spam/not spam), Regression (house prices) |
| **Unsupervised Learning** | Finds patterns in unlabeled data | Clustering (customer segmentation), Dimensionality Reduction |

### The ML Workflow (7 Steps)
1. **Collect Data** — gather relevant data for the problem
2. **Prepare the Data** — clean, handle missing values, transform features
3. **Choose a Model** — select algorithm suited to the task
4. **Train the Model** — algorithm learns patterns by adjusting internal parameters
5. **Evaluate the Model** — test on unseen data; metrics: **accuracy** (classification), **MSE** (regression)
6. **Fine-Tune the Model** — adjust hyperparameters or collect more data
7. **Deploy the Model** — put into production for real-world predictions

### Key ML Algorithms
| Algorithm | Description |
|-----------|-------------|
| **Linear Models** | Straight-line relationship between features and predictions (e.g., linear regression) |
| **Decision Trees** | Split data into subsets based on feature values; each node = feature, each branch = decision |
| **k-Nearest Neighbors (k-NN)** | "Lazy learner" — classifies based on k closest training points; k is a hyperparameter |

### Challenges in Machine Learning
1. **Overfitting & Underfitting**
   - **Overfitting**: model learns noise → poor generalization to new data
   - **Underfitting**: model too simple → fails to capture underlying patterns
2. **Bias-Variance Tradeoff**
   - **Bias**: errors from overly simplistic models → underfitting
   - **Variance**: sensitivity to small data fluctuations → overfitting
   - Key: find the right balance
3. **Data Quality and Quantity**
   - **"Garbage in, garbage out"** — noisy, incomplete, or biased data → poor models
   - Deep learning models especially need large amounts of data

### Applications of ML
- **Healthcare**: diagnosing diseases, predicting outcomes, personalizing treatment
- **Finance**: fraud detection, credit scoring, algorithmic trading
- **Autonomous Vehicles**: processing sensor data, making driving decisions
- **NLP**: chatbots, language translation, sentiment analysis

---

## Lecture 7: AI Solutions

### What Are AI Solutions?
- Any system, process, or technology leveraging AI to solve a specific problem
- Range from simple automation to advanced systems mimicking human cognition

### Steps in Building AI Systems
1. **Define the Problem** — clearly frame what the AI should address
2. **Literature Review** — examine existing solutions and gaps
3. **Build the AI System** — choose methods, break into sub-steps, motivate your approach
4. **Evaluate the AI System** — performance metrics (accuracy, precision, recall) and acceptability

### Types of AI
| Type | Description |
|------|-------------|
| **Narrow AI (Weak AI)** | Designed for a specific task; very powerful within its domain (e.g., Siri, recommendation engines) |
| **General AI (Strong AI)** | Theoretical — would understand, learn, and apply intelligence across all tasks like a human |
| **Superintelligence** | Surpasses human intelligence in every aspect; purely speculative, raises ethical concerns |

### AI Problem-Solving Techniques
1. **Systematic Search & Decision-Making** — searching through possible actions to reach a goal
   - **Specific-purpose methods**: tailored to a particular problem
   - **General-purpose methods**: flexible, applicable across problems
2. **Heuristics** — practical methods that find "good enough" solutions when optimal is too complex
3. **Machine Learning** — supervised, unsupervised, reinforcement learning

### Reasoning in AI Systems
| Type | Description | Example |
|------|-------------|---------|
| **Deductive reasoning** | From general rules to specific conclusions | "All humans are mortal" + "Socrates is human" → "Socrates is mortal" |
| **Inductive reasoning** | From specific examples to general rules | "Every observed bird can fly" → "All birds can fly" (not always true!) |
| **Abductive reasoning** | Most likely explanation for an observation | Patient has symptoms A and B → most likely disease X |

### Key Application Areas
- **Computer Vision**: object recognition, emotion detection (healthcare, security, autonomous driving)
- **Natural Language Processing (NLP)**: translation, sentiment analysis, virtual assistants
- **Robotics**: autonomous task performance (industrial automation to space exploration)
- **Social Intelligence**: AI that understands emotions, engages in conversation, adapts to human needs

---

## Lecture 8: Data Wrangling

### What Is Data Wrangling?
- The process of cleaning, transforming, and preparing raw data into a usable and structured format
- **"Messy" data → "clean" data** for analysis or ML models
- Key points: transformation and mapping, improvement in value (accuracy, consistency, relevance)

### Key Stages of Data Wrangling
| Stage | Description |
|-------|-------------|
| 1. **Data Discovery & Ingestion** | Explore and "unbox" the data; look for inconsistencies or gaps |
| 2. **Data Structuring** | Shape data into a suitable format (e.g., unstructured text → structured tables) |
| 3. **Data Cleaning** | Fix missing data, outliers, inconsistencies (most time-consuming stage) |
| 4. **Data Transformation** | Normalize values, aggregate, encode categorical values |
| 5. **Data Enrichment** | Incorporate external data to fill gaps or add context |
| 6. **Data Validation** | Verify accuracy and quality; check for duplicates, ensure relationships hold |

### Five Key Data Properties
| Property | Description |
|----------|-------------|
| **Structure** | Format/shape of data (table, nested, array?) — ensure uniform records, correct delimiters |
| **Granularity** | Level of detail (individual vs. aggregated); **primary key** uniquely identifies each record |
| **Faithfulness** | Does the data accurately represent reality? Issues: missing values, outliers |
| **Temporality** | Time-sensitive data; challenges with time zones, varying formats, precision |
| **Scope** | Completeness and coverage of the dataset |

### Types of Missing Data
| Type | Description | Example |
|------|-------------|---------|
| **MCAR** (Missing Completely at Random) | No pattern; independent of any variables | System glitch deleting random patient ages |
| **MAR** (Missing at Random) | Depends on other observed variables, not the missing value | Younger people less likely to report income |
| **MNAR** (Missing Not at Random) | Related to the value itself | Older individuals hiding age to avoid disqualification |

### Dealing with Missing Data and Outliers
1. **Trim** — remove rows/columns with missing values
2. **Impute** — estimate using mean, median, or prediction model
3. **Ignore** — leave as-is depending on proportion and significance
4. **Cap or Limit** — set upper/lower bounds for outliers
5. **Transform** — apply mathematical transformations to reduce outlier impact

### Wrangling and Analysis
- Poor wrangling → biases, incorrect conclusions, overfitting
- Good wrangling → enhanced quality, relevance, and reliability
- Wrangling requires careful judgment, contextual understanding, and methodological rigor

---

## Lecture 9: Verification, Validation, and Research Protocols

### Verification vs. Validation
| Concept | Question | Focus |
|---------|----------|-------|
| **Verification** | "Is the system functioning as expected?" | Technical correctness |
| **Validation** | "Does the system meet the actual needs of the user?" | Effectiveness, user outcomes |

### Internal vs. External Validation
- **Internal Validation**: testing components, models, parameters in controlled conditions; focuses on technical accuracy
- **External Validation**: evaluating real-world effectiveness using user feedback and empirical data (e.g., RCTs)

### Research Protocol
A structured plan for testing a technological intervention:
- **Research Question** — defines the study goal
- **Hypothesis** — predicts expected outcome
- **Control and Experimental Groups** — experimental uses the intervention; control does not
- **Independent and Dependent Variables** — independent = intervention; dependent = measured outcome
- **Test Subjects** — participants chosen based on specific criteria
- **Confounding Variables** — factors that might affect results

### Statistical Analysis
- **T-tests, ANOVA** help evaluate intervention effectiveness
- **p-value**: indicates likelihood results are due to chance; low p-value = significant effect

### Subjective vs. Objective Measurements
- **Subjective**: self-reported data via questionnaires
- **Objective**: sensor-based or measurable data (more reliable)
- Best approach: combine both

### User Experience Evaluation
- **Acceptability**: will users want to use it?
- **Usability**: is it easy to use?
- **Feasibility**: can it be implemented in real-world settings?
- Measured via **Likert scale** questionnaires

---

## Lecture 10: Evolving Intelligence

### Evolving Intelligence
- Artificial evolution can create AI — systems evolve through natural selection and reproduction rather than being pre-programmed
- Best-performing traits are passed to successive generations

### Embodied Intelligence
- Intelligence depends not just on the brain/software but also on the body/hardware interacting with the environment
- **Body (hardware)**: sensors, motors, physical forms
- **Brain (software)**: processes inputs, makes decisions, sends signals
- The synergy between body and brain creates behavior

### Evolutionary Algorithms
- Computational techniques inspired by natural evolution:
  - **Selection**: choose best individuals based on performance (fitness)
  - **Reproduction**: combine traits from parents to create offspring
  - **Mutation and recombination**: introduce small changes for diversity and adaptation

### Embodied Artificial Evolution
- Evolving both body and brain of robots simultaneously
- Unlike traditional approaches that optimize only software, this co-evolves physical structure and control mechanisms

### Challenges
1. **Body Types** — finding the optimal physical form
2. **Reproduction Mechanisms** — creating systems where robots can reproduce
3. **Evolvability and Speed** — evolution must be practical for real-world applications
4. **Combining Body and Brain Evolution** — co-evolution to maximize performance

### Real-World Applications
- **Rainforest monitoring**: robots evolved for dense, complex environments
- **Medical nanobots**: tiny robots for targeted drug delivery or minimally invasive surgery
- **Terraforming**: robots evolved for transforming hostile environments

### Learning and Evolution
- Robots inherit traits (basic brain) but also learn from their environment
- **Morphological intelligence**: the robot's body structure evolves to facilitate learning
- **Lamarckism**: traits acquired through learning can be passed to offspring, enabling more efficient evolution

---

## Lecture 11: AI Ethics & Philosophy of Mind

### 1. AI Ethics
- **Ethics** in AI deals with designing, developing, and deploying AI that aligns with societal values

**Key Concepts**:
- **Ethics in Design**: constructing ethical rules within the AI system (e.g., Asimov's Laws of Robotics)
- **Ethics by Design**: building AI that can reason about ethical decisions dynamically
- **Autonomous Systems**: building systems that can make ethical decisions (e.g., the **Trolley Problem**)

**Real-World Applications**:
- **Autonomous Weapons**: raise questions about allowing machines to make life-and-death decisions; **human-in-the-loop** concept
- **AI and Privacy**: concerns about **privacy**, **data ownership**, and **surveillance**

### 2. Philosophy of Mind
- Explores consciousness, free will, and the nature of intelligence

**Key Concepts**:
- **Mind-Body Problem** (Descartes): can physical machines possess consciousness?
- **Chinese Room Argument** (John Searle): even if a computer manipulates symbols, it doesn't "understand" — challenges whether AI can be truly intelligent
- **Intentional Stance** (Daniel Dennett): we attribute human qualities to machines because it's useful, even if machines lack these qualities

**Hybrid Intelligence**: AI amplifies rather than replaces human intelligence — cooperative AI systems enhancing capabilities while ensuring human control

**Symbol Grounding Problem**: how can AI attach meaning to the symbols it manipulates? (e.g., understanding "red" without ever seeing it)

### 3. Free Will and AI
- **Determinism**: all events are determined by preceding causes; AI systems are deterministic → can they have free will?
- **Agency**: capacity for independent action; true agency requires **free will** (ability to choose between alternatives)
- Most AI today lacks free will — actions are determined by programming and training data

**Hybrid Intelligence**: a middle ground where AI assists humans in decision-making while retaining human control, ensuring ethical outcomes
