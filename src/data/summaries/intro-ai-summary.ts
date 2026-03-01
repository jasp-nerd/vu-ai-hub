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
- AI is not a single technology but an umbrella term covering many sub-fields and techniques

![The Turing Test — can a machine exhibit intelligent behaviour indistinguishable from a human?](/assets/images/turing-test-diagram.svg)

### Historical Context and Branches
- The term "Artificial Intelligence" was coined at the **Dartmouth Conference (1956)** by John McCarthy
- **Early AI (1950s-1970s)**: symbolic reasoning, logic-based problem solving, early chess programs
- **AI Winter (1970s-1990s)**: reduced funding due to unmet expectations and limited computational power
- **Modern AI Revival (2000s-present)**: driven by big data, increased compute power (GPUs), and breakthroughs in deep learning
- **Key branches**: Machine Learning, Natural Language Processing, Computer Vision, Robotics, Knowledge Representation, Expert Systems

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
- Energy inefficiency of large ML systems (training a single large model can emit significant CO2)

**The Ugly Side**:
- Bias and unfair systems (Cambridge Analytica, biased credit scoring)
- AI-driven chatbots that unintentionally discriminate due to biased training data
- Lack of accountability when AI systems cause harm

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
- **Preprint Servers**: arXiv is a preprint server; many influential papers are first posted there, but you should verify whether a peer-reviewed version exists and prefer citing that when possible

### Reading Papers Efficiently (Multi-Pass)
- **5 min skim**: title, abstract, figures — determine relevance
- **15 min pass**: introduction and conclusion — understand scope and claims
- **30+ min deep read**: claims, results, methods, limitations — full understanding
- This staged approach prevents getting lost in details before confirming relevance

### Search Strategies
- Translate your research question into keyword variants and synonyms
- Use quotes and Boolean operators; iterate until your result set is neither too broad nor too narrow
- **Snowballing**: start from strong seed papers; traverse backward (references) and forward (citations) until no new relevant items appear (saturation)

### Managing References
- Use tools like **Zotero**, **Mendeley**, or **BibDesk**
- Document each paper's **DOI** — always verify bibliographic details (authors, title, venue, year)
- Common citation styles: **APA**, **IEEE**, **BibTeX**
- Keep a living spreadsheet/library with tags (method, dataset, domain, findings) to avoid duplication

### Academic Integrity with AI
- Use AI to clarify concepts, generate alternative explanations, or summarize after you have read
- **Never rely on AI to generate references** — citation hallucinations are common and academically unacceptable
- Always verify bibliographic details independently

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
- **Distinction**: diversity = who is present; inclusion = whether they feel safe, welcome, and heard

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
- Professional conduct: treat university like a workplace — respectful communication and awareness of policy helps maintain a safe environment

---

## Lecture 4: Knowledge Representation (KR)

### What Is Knowledge Representation?
- The field of AI dealing with how to represent information so machines can reason, make decisions, and solve problems
- **Goals of KR**:
  1. **Model the World** — represent real-world objects, entities, concepts accurately
  2. **Enable Reasoning** — perform logical deductions (e.g., "All humans are mortal" + "Socrates is human" -> "Socrates is mortal")
  3. **Make Decisions** — use represented knowledge for decision-making
  4. **Efficient Computation** — process knowledge efficiently by algorithms
  5. **Express Human Knowledge** — align with how humans think, making AI intuitive

### Logic and Reasoning Foundations
- **Propositional Logic**: uses propositions (statements that are true or false) connected by logical operators (AND, OR, NOT, IMPLIES)
- **First-Order Logic (Predicate Logic)**: extends propositional logic with variables, quantifiers (for all, there exists), and predicates — more expressive for representing relationships
- **Inference Rules**: modus ponens (if P then Q; P is true; therefore Q), modus tollens, universal instantiation
- Logic provides the formal foundation for automated reasoning systems and expert systems

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
- A **knowledge graph** is a network where nodes = entities, edges = relationships (relations)
- Features: machine-readable, highly scalable, semantic relationships
- **Use Cases**: search engines (Google), recommendation systems (Netflix, Amazon), scientific research (bioinformatics)
- **RDF Triples**: knowledge graphs often represent facts as subject-predicate-object triples

### Ontologies
- Formal specification of a shared conceptualization — defines classes, properties, and relationships
- **OWL** (Web Ontology Language): standard for building ontologies on the Semantic Web
- Used to ensure consistent interpretation of concepts across systems

### Integrating KR and Machine Learning
1. **Informed ML** — ML models use knowledge graphs for additional context and constraints
2. **Explainable AI (XAI)** — combining KR with ML for explainable predictions
3. **Neuro-Symbolic AI** — combines symbolic reasoning with neural networks; "think fast and slow"
   - Goal: merge neural learning (pattern recognition) with symbolic reasoning (logic and rules)
   - Advantage: systems can both learn from data AND reason logically
   - Addresses the **black box problem** — neural networks are accurate but not explainable; symbolic reasoning provides transparency
   - Real-world example: systems that use neural models to analyze medical data and symbolic logic to explain diagnoses
   - Modern research goal: AI that can reason, explain, and generalize beyond training data

---

## Lecture 5: Basics of Computers

### What Is a Computer?
- A device that manipulates data — can store, retrieve, and process information
- Accepts input, processes data via instructions, and emits output
- Modern systems coordinate many concurrent tasks under the operating system

### Computer Architecture: Hardware vs. Software
**Hardware Components**:
| Component | Description |
|-----------|-------------|
| **Input Devices** | Keyboard, mouse, microphones, sensors, cameras |
| **Output Devices** | Monitors, printers, speakers, displays |
| **CPU** | "Brain" of the computer — performs calculations and logical operations |
| -- **ALU** | Arithmetic Logic Unit — handles math and comparisons |
| -- **CU** | Control Unit — manages and coordinates execution of instructions |
| **RAM** | Volatile primary memory — data lost when powered off |
| **HDD/SSD** | Non-volatile long-term storage |
| **Motherboard** | Main circuit board connecting all internal components |

### Memory Hierarchy
- **Registers and CPU caches**: fastest and smallest; closest to the processor
- **RAM**: larger but volatile; used for active processes
- **Secondary storage (SSD/HDD)**: persistent but slower
- Good performance depends on **locality** — keeping needed data near the CPU when it is used

### CPU Internals
- The CPU orchestrates the **fetch-decode-execute** cycle
- **Clock speed** and **core count** affect throughput, but memory and I/O bottlenecks also matter
- Modern CPUs have multiple cores for parallel processing

**Software**:
- **System Software**: OS (Windows, macOS, Linux, Android) — manages hardware resources
- **Application Software**: programs for specific tasks (browsers, word processors, games)
- **Libraries and frameworks** reduce code duplication; **package managers** handle distribution and dependencies

### Operating Systems (OS)
- Interface between hardware and user
- Manages: file management, memory management (paging/virtual memory), process scheduling, I/O devices
- **File Systems** (e.g., NTFS, ext4): organize files into directories in a hierarchical (tree-like) structure
- Files have names, extensions, permissions, and metadata
- **Types of OS interfaces**:
  - **CLI** (Command Line Interface) — type commands (e.g., Linux Bash)
  - **GUI** (Graphical User Interface) — icons and windows (e.g., macOS, Windows)

### The Command Line Interface (CLI)
| Command | Function |
|---------|----------|
| \`cd\` | Change Directory |
| \`pwd\` | Print Working Directory |
| \`ls\` | List files and directories |
| \`mkdir\` | Make Directory |
| \`rm\` | Remove files or directories |

- **Why use the terminal?** Efficiency, task automation (scripts), remote server access
- Device drivers translate OS commands into hardware actions and vice versa

### Security Basics
- Keep systems updated; use least-privilege accounts
- Enable firewalls; beware phishing and untrusted software
- **Encryption** protects data at rest (disk) and in transit (TLS)
- Backups and versioning (e.g., cloud sync, VCS) protect against loss

### Cloud and Virtualization
- **Virtual machines** and **containers** package software with dependencies
- Cloud services provide elastic compute and storage but require careful cost and security management

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
| **Reinforcement Learning** | Agent learns by interacting with an environment, receiving rewards or penalties | Game playing (AlphaGo), robotic control, resource management |

### Supervised Learning in Detail
- **Classification**: predicting a discrete category (e.g., spam vs. not spam, disease vs. healthy)
- **Regression**: predicting a continuous value (e.g., house price, temperature)
- Requires **labeled training data** — each example includes the correct answer
- Performance is evaluated on held-out **test data** the model has never seen

### Unsupervised Learning in Detail
- **Clustering**: grouping similar data points together (e.g., customer segmentation, image grouping)
- **Dimensionality Reduction**: reducing the number of features while preserving important structure (e.g., PCA)
- **Association Rules**: discovering relationships between variables in large datasets (e.g., market basket analysis)

### Reinforcement Learning in Detail

![Reinforcement learning — the agent-environment interaction loop](/assets/images/reinforcement-learning-diagram.svg)

- An **agent** takes **actions** in an **environment** to maximize cumulative **reward**
- Key concepts: **state**, **action**, **reward signal**, **policy** (strategy mapping states to actions)
- **Exploration vs. exploitation**: balancing trying new actions (exploration) vs. using known good actions (exploitation)
- Applications: game AI, autonomous navigation, recommendation systems, resource optimization

### The ML Workflow (7 Steps)

![ML Pipeline](/assets/svgi/ml-pipeline.svg)

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
| **Linear Models** | Straight-line relationship between features and predictions (e.g., linear regression, logistic regression) |
| **Artificial Neural Networks** | Brain-inspired layers (Input, Hidden, Output); learn non-linear patterns through backpropagation |
| **Decision Trees** | Split data into subsets based on feature values; each node = feature, each branch = decision |
| **k-Nearest Neighbors (k-NN)** | "Lazy learner" — classifies based on k closest training points; k is a hyperparameter |
| **Support Vector Machines (SVM)** | Find the optimal hyperplane that separates classes with maximum margin |
| **Random Forests** | Ensemble of decision trees that vote on the final prediction; reduces overfitting |

![Neural Network Structure](/assets/svgi/neural-network.svg)

### Neural Networks — Deeper Look
- **Input Layer**: receives raw data features
- **Hidden Layers**: learn intermediate representations through weighted connections
- **Output Layer**: produces the prediction (classification label or regression value)
- **Activation Functions**: introduce non-linearity (ReLU, sigmoid, tanh)
- **Backpropagation**: algorithm that adjusts weights by propagating error gradients backward through the network
- **Deep Learning**: neural networks with many hidden layers; excels at images, text, speech

### Challenges in Machine Learning
1. **Overfitting & Underfitting**
   - **Overfitting**: model learns noise -> poor generalization to new data
   - **Underfitting**: model too simple -> fails to capture underlying patterns
2. **Bias-Variance Tradeoff**
   - **Bias**: errors from overly simplistic models -> underfitting
   - **Variance**: sensitivity to small data fluctuations -> overfitting
   - Key: find the right balance between model complexity and generalization
3. **Data Quality and Quantity**
   - **"Garbage in, garbage out"** — noisy, incomplete, or biased data -> poor models
   - Deep learning models especially need large amounts of high-quality data

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
4. **Evaluate the AI System** — performance metrics (accuracy, precision, recall, F1-score) and acceptability

### Types of AI
| Type | Description |
|------|-------------|
| **Narrow AI (Weak AI)** | Designed for a specific task; very powerful within its domain (e.g., Siri, recommendation engines) |
| **General AI (Strong AI)** | Theoretical — would understand, learn, and apply intelligence across all tasks like a human |
| **Superintelligence** | Surpasses human intelligence in every aspect; purely speculative, raises ethical concerns |

### AI Problem-Solving Techniques

![A simple reflex agent — perceiving the environment and acting on it](/assets/images/agent-environment-interaction.png)

1. **Systematic Search & Decision-Making** — searching through possible actions to reach a goal
   - **Specific-purpose methods**: tailored to a particular problem
   - **General-purpose methods**: flexible, applicable across problems
   - **Search algorithms**: Breadth-First Search (BFS), Depth-First Search (DFS), A* search
   - **State space**: the set of all possible configurations; the solution is a path from initial state to goal state
2. **Heuristics** — practical methods that find "good enough" solutions when optimal is too complex
   - Heuristic functions estimate the cost from a given state to the goal
   - Trade-off: speed vs. optimality — heuristics do not guarantee the best solution
3. **Machine Learning** — supervised, unsupervised, reinforcement learning

![Decision Tree](/assets/svgi/decision-tree.svg)

### Reasoning in AI Systems
| Type | Description | Example |
|------|-------------|---------|
| **Deductive reasoning** | From general rules to specific conclusions (always valid if premises are true) | "All humans are mortal" + "Socrates is human" -> "Socrates is mortal" |
| **Inductive reasoning** | From specific examples to general rules (probabilistic, not guaranteed) | "Every observed bird can fly" -> "All birds can fly" (not always true!) |
| **Abductive reasoning** | Most likely explanation for an observation | Patient has symptoms A and B -> most likely disease X |

### Logic in AI Problem-Solving
- **Propositional Logic**: statements connected by AND, OR, NOT, IF-THEN
- **First-Order Logic**: adds variables, quantifiers, predicates for richer representation
- **Expert Systems**: rule-based AI systems that use IF-THEN rules from domain experts to make decisions
- **Constraint Satisfaction Problems (CSPs)**: find values for variables that satisfy all given constraints (e.g., Sudoku, scheduling)

### Key Application Areas
- **Computer Vision**: object recognition, emotion detection (healthcare, security, autonomous driving)
- **Natural Language Processing (NLP)**: translation, sentiment analysis, virtual assistants, text generation
- **Robotics**: autonomous task performance (industrial automation to space exploration)
- **Social Intelligence**: AI that understands emotions, engages in conversation, adapts to human needs

---

## Lecture 8: Data Wrangling

### What Is Data Wrangling?
- The process of cleaning, transforming, and preparing raw data into a usable and structured format
- **"Messy" data -> "clean" data** for analysis or ML models
- Key points: transformation and mapping, improvement in value (accuracy, consistency, relevance)
- Data scientists spend up to **80% of their time** on data preparation

### Key Stages of Data Wrangling
| Stage | Description |
|-------|-------------|
| 1. **Data Discovery & Ingestion** | Explore and "unbox" the data; look for inconsistencies or gaps |
| 2. **Data Structuring** | Shape data into a suitable format (e.g., unstructured text -> structured tables) |
| 3. **Data Cleaning** | Fix missing data, outliers, inconsistencies (most time-consuming stage) |
| 4. **Data Transformation** | Normalize values, aggregate, encode categorical values |
| 5. **Data Enrichment** | Incorporate external data to fill gaps or add context |
| 6. **Data Validation** | Verify accuracy and quality; check for duplicates, ensure relationships hold |

### Five Key Data Properties
| Property | Description |
|----------|-------------|
| **Structure** | Format/shape of data (table, nested, array?) — ensure uniform records, correct delimiters |
| **Granularity** | Level of detail (individual vs. aggregated); **primary key** uniquely identifies each record |
| **Faithfulness** | Does the data accurately represent reality? Issues: missing values, outliers, measurement errors |
| **Temporality** | Time-sensitive data; challenges with time zones, varying formats, precision differences |
| **Scope** | Completeness and coverage of the dataset — are all relevant cases represented? |

### Types of Missing Data
| Type | Description | Example |
|------|-------------|---------|
| **MCAR** (Missing Completely at Random) | No pattern; independent of any variables | System glitch deleting random patient ages |
| **MAR** (Missing at Random) | Depends on other observed variables, not the missing value | Younger people less likely to report income |
| **MNAR** (Missing Not at Random) | Related to the value itself | Older individuals hiding age to avoid disqualification |

### Dealing with Missing Data and Outliers
1. **Trim** — remove rows/columns with missing values (risk: losing information)
2. **Impute** — estimate using mean, median, mode, or prediction model
3. **Ignore** — leave as-is depending on proportion and significance
4. **Cap or Limit** — set upper/lower bounds for outliers (winsorizing)
5. **Transform** — apply mathematical transformations (log, square root) to reduce outlier impact

### Data Encoding and Transformation
- **One-hot encoding**: convert categorical variables into binary columns
- **Label encoding**: assign integer values to categories
- **Normalization**: scale features to [0, 1] range
- **Standardization**: transform to zero mean and unit variance (z-scores)
- Feature engineering: create new features from existing ones to improve model performance

### Wrangling and Analysis
- Poor wrangling -> biases, incorrect conclusions, overfitting
- Good wrangling -> enhanced quality, relevance, and reliability
- Wrangling requires careful judgment, contextual understanding, and methodological rigor

---

## Lecture 9: Verification, Validation, and Research Protocols

### Verification vs. Validation
| Concept | Question | Focus |
|---------|----------|-------|
| **Verification** | "Is the system functioning as expected?" | Technical correctness — does it meet specifications? |
| **Validation** | "Does the system meet the actual needs of the user?" | Effectiveness — does it achieve intended user outcomes? |

- Both are necessary but answer different questions
- A system can be **verified** (works correctly) but not **validated** (does not actually help the user)

### Internal vs. External Validation
- **Internal Validation**: testing components, models, parameters in controlled conditions; focuses on technical accuracy
  - Includes: unit tests, component/integration tests, simulation studies, parameter sensitivity analyses
  - Done before or alongside deployment; reduces bugs and clarifies operating envelopes
  - Cannot prove real-world benefit on its own
- **External Validation**: evaluating real-world effectiveness using user feedback and empirical data
  - Gold standard: **Randomized Controlled Trials (RCTs)** with appropriate control conditions
  - Measures causal impact on outcomes (e.g., behaviour change, safety improvements)
  - Use **pre-registration**, define primary/secondary endpoints, and avoid p-hacking

### Research Protocol
A structured plan for testing a technological intervention:
- **Research Question** — defines the study goal
- **Hypothesis** — predicts expected outcome (null vs. alternative)
- **Control and Experimental Groups** — experimental uses the intervention; control receives usual care or placebo
- **Independent and Dependent Variables** — independent = intervention; dependent = measured outcome
- **Test Subjects** — participants chosen based on specific criteria
- **Confounding Variables** — factors that might affect results (must be controlled for)

### Threats to Validity
- **Selection bias**: non-random group assignment
- **Attrition**: participants dropping out unevenly
- **Placebo effects**: improvement due to expectation, not the intervention
- **Hawthorne effects**: behaviour changes from being observed
- **Instrumentation drift**: measurement tools changing over time
- Mitigate via **randomization**, **blinding** where possible, and consistent protocols

### Statistical Analysis
- **T-tests, ANOVA, ANCOVA** help evaluate intervention effectiveness
- **p-value**: probability of observing the result (or more extreme) if no real effect exists; low p-value = significant effect
- **Effect sizes**: magnitude of the difference (more informative than p-values alone)
- **Confidence intervals**: range of plausible values for the true effect
- **Statistical power**: ability to detect a real effect when one exists
- Do not equate statistical significance with practical significance

### Subjective vs. Objective Measurements
- **Subjective**: self-reported data via questionnaires (rich context but recall/social desirability bias)
- **Objective**: sensor-based or measurable data (precise but may lack context)
- Best approach: **triangulation** — combine both to strengthen validity and reduce bias

### User Experience Evaluation
- **Acceptability**: will users want to use it?
- **Usability**: is it easy to use?
- **Feasibility**: can it be implemented in real-world settings?
- Measured via **Likert scale** questionnaires
- Success indicators: real-world impact (behavioural change), user satisfaction, trust, and ethical compliance — not just algorithmic metrics

---

## Lecture 10: Evolving Intelligence — Embodied Intelligence & Robotics

### Evolving Intelligence
- Artificial evolution can create AI — systems evolve through natural selection and reproduction rather than being pre-programmed
- Best-performing traits are passed to successive generations
- Inspired by **Darwinian evolution**: variation, selection, inheritance

### Embodied Intelligence

![Computer vision — object detection using the YOLO algorithm](/assets/images/computer-vision-yolo-detection.jpg)

- Intelligence depends not just on the brain/software but also on the body/hardware interacting with the environment
- **Body (hardware)**: sensors, motors, physical forms
- **Brain (software)**: processes inputs, makes decisions, sends signals
- The synergy between body and brain creates behavior — the body is not just a vessel but actively shapes cognition
- Example: a robot with legs suited to rough terrain can navigate environments that a wheeled robot cannot, even with the same "brain"

### Evolutionary Algorithms
- Computational techniques inspired by natural evolution:
  - **Selection**: choose best individuals based on performance (fitness function evaluates quality)
  - **Reproduction (Crossover)**: combine traits from two parents to create offspring
  - **Mutation**: introduce small random changes for diversity and adaptation
  - **Recombination**: mix genetic material from parents to explore new combinations
- The **fitness function** defines what "good" means — e.g., speed, energy efficiency, task completion
- Population-based: maintains a pool of candidate solutions that evolve over generations

### Embodied Artificial Evolution
- Evolving both body and brain of robots simultaneously (co-evolution)
- Unlike traditional approaches that optimize only software, this co-evolves physical structure and control mechanisms
- The body influences what the brain can learn (morphological computation)

### Challenges
1. **Body Types** — finding the optimal physical form for a given environment
2. **Reproduction Mechanisms** — creating systems where robots can reproduce (3D printing, modular assembly)
3. **Evolvability and Speed** — evolution must be practical for real-world applications; simulations can accelerate the process
4. **Combining Body and Brain Evolution** — co-evolution to maximize performance; body and brain must be compatible
5. **Sim-to-Real Transfer** — solutions evolved in simulation must work in the real world (reality gap)

### Real-World Applications
- **Rainforest monitoring**: robots evolved for dense, complex environments
- **Medical nanobots**: tiny robots for targeted drug delivery or minimally invasive surgery
- **Terraforming**: robots evolved for transforming hostile environments (e.g., Mars exploration)
- **Search and rescue**: adaptable robots for disaster zones

### Learning and Evolution
- Robots inherit traits (basic brain) but also learn from their environment
- **Morphological intelligence**: the robot's body structure evolves to facilitate learning — some body shapes make certain tasks easier to learn
- **Lamarckism**: traits acquired through learning can be passed to offspring, enabling more efficient evolution
- **Lifetime learning + evolution**: combines fast individual learning with slow evolutionary optimization

### Hybrid Intelligence in Robotics
- Robots that combine AI with human intelligence — human operators guide or supervise robotic systems
- **Shared autonomy**: the robot handles routine tasks while the human handles exceptions
- **Teleoperation with AI assistance**: human controls the robot, AI provides support (obstacle avoidance, path planning)

---

## Lecture 11: AI Ethics & Philosophy of Mind

### 1. AI Ethics
- **Ethics** in AI deals with designing, developing, and deploying AI that aligns with societal values
- Ethics is not an afterthought but must be integrated from the start of AI development

**Key Concepts**:
- **Ethics in Design**: constructing ethical rules within the AI system (e.g., Asimov's Laws of Robotics: 1. Do not harm humans, 2. Obey humans, 3. Protect yourself)
- **Ethics by Design**: building AI that can reason about ethical decisions dynamically, adapting to context
- **Autonomous Systems**: building systems that can make ethical decisions (e.g., the **Trolley Problem** — should an autonomous car sacrifice its passenger to save five pedestrians?)

**Fairness and Bias**:
- AI systems can perpetuate or amplify existing biases in training data
- **Algorithmic fairness**: ensuring AI does not discriminate based on race, gender, age, etc.
- **Transparency**: users should understand how and why AI makes decisions
- **Accountability**: clear responsibility when AI systems cause harm

**Real-World Applications**:
- **Autonomous Weapons**: raise questions about allowing machines to make life-and-death decisions; **human-in-the-loop** concept ensures human oversight
- **AI and Privacy**: concerns about **privacy**, **data ownership**, and **surveillance**
- **AI in Healthcare**: ethical use of patient data, informed consent, equitable access to AI-driven care
- **AI in Criminal Justice**: risk assessment tools must be fair and transparent

### 2. Philosophy of Mind
- Explores consciousness, free will, and the nature of intelligence

**Key Concepts**:
- **Mind-Body Problem** (Descartes): can physical machines possess consciousness? Dualism suggests mind and body are separate substances
- **Chinese Room Argument** (John Searle): even if a computer manipulates symbols correctly, it does not "understand" — challenges whether AI can be truly intelligent; distinguishes between **syntax** (following rules) and **semantics** (understanding meaning)
- **Turing Test** (Alan Turing): if a machine can fool a human into thinking it is human through conversation, can it be considered intelligent? Critiqued for testing imitation rather than understanding
- **Intentional Stance** (Daniel Dennett): we attribute human qualities to machines because it is useful, even if machines lack these qualities — a pragmatic approach to understanding AI behavior
- **Functionalism**: mental states are defined by their functional role, not their physical implementation — if an AI performs the same functions as a mind, is it a mind?

### Symbol Grounding Problem
- How can AI attach meaning to the symbols it manipulates?
- Example: an AI might process the word "red" without ever perceiving redness
- Without grounding in sensory experience, symbols remain meaningless formal tokens
- **Embodied cognition** suggests that grounding requires a physical body interacting with the world

### 3. Free Will and AI
- **Determinism**: all events are determined by preceding causes; AI systems are deterministic -> can they have free will?
- **Agency**: capacity for independent action; true agency requires **free will** (ability to choose between alternatives)
- **Compatibilism**: even in a deterministic universe, there can be meaningful differences between "free" actions (based on internal reasoning) and "forced" actions (caused by external coercion)
- Most AI today lacks free will — actions are determined by programming and training data
- The question remains open: if an AI system becomes sufficiently complex and autonomous, does it deserve moral consideration?

### 4. Hybrid Intelligence
- AI amplifies rather than replaces human intelligence — cooperative AI systems enhancing capabilities while ensuring human control
- **Complementarity**: AI excels at data processing, pattern recognition, and tireless execution; humans excel at creativity, empathy, ethical judgment, and contextual understanding
- **Design principles**: keep the human in the loop, ensure AI is transparent and explainable, allow human override
- **Goal**: achieve better outcomes together than either humans or AI could achieve alone
- Not just a technical challenge but a sociotechnical one — involves organizational, legal, and cultural dimensions
`;
