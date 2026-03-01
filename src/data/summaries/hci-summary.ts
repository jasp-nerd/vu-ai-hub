/**
 * Comprehensive HCI Summary — inline markdown content.
 * Compiled from all 8 chapters of MacKenzie's "Human-Computer Interaction:
 * An Empirical Research Perspective" plus supplementary lecture materials
 * on data analysis & visualization, exam preparation, and practice questions.
 */
export const hciSummary = `
## Chapter 1: Historical Context

### The Birth of HCI
- **HCI (Human-Computer Interaction)** emerged as a field of research in the early 1980s
- The term was popularized at the first ACM SIGCHI conference (1983)
- HCI draws from **computer science, psychology, sociology, design, and human factors engineering**
- HCI is essentially human factors, but focused specifically on human interaction with computing technology

### Human Factors (Ergonomics)
- A science and a field of engineering concerned with:
  - Human capabilities, limitations, and performance
  - Design of systems that accommodate the human operator
- HCI has an **interdisciplinary scope** — it brings together computer scientists, software engineers, psychologists, interaction designers, graphic designers, sociologists, and anthropologists

### Key Historical Milestones

| Year | Event |
|------|-------|
| 1945 | Vannevar Bush proposes the **memex** — a conceptual device for storing and linking documents (foreshadowed hypertext) |
| 1940s-50s | **Batch processing** era — users submit jobs on punch cards; no real-time interaction |
| 1960s | **Time-sharing** systems allow multiple users to interact with a computer simultaneously |
| 1962 | Ivan Sutherland's **Sketchpad** — first graphical interface with a light pen; first direct manipulation interface |
| 1963 | Douglas Engelbart invents the **computer mouse** — needed an improved pointing device to replace the light pen for his NLS hypertext system |
| 1968 | Douglas Engelbart's **"Mother of All Demos"** — demonstrates the mouse, hypertext, video conferencing, windows |
| 1973 | Xerox PARC develops the **Alto** — first personal computer with a graphical user interface |
| 1981 | **Xerox Star** — first commercially available computer with a GUI (the mouse became available outside the lab) |
| 1983 | Birth of HCI — first **ACM SIGCHI** conference; publication of Card, Moran & Newell's *The Psychology of Human-Computer Interaction* |
| 1984 | **Apple Macintosh** — brings the GUI to the mass market with direct manipulation and point-select interaction |
| 1991 | Tim Berners-Lee launches the **World Wide Web** |

### Vannevar Bush's Memex (1945)
- Essay "As We May Think" concerned with dissemination, storage, and access to scholarly knowledge
- Proposed navigating the knowledge maze with a device called the **memex**
- Key feature: **associative indexing** — points of interest could be connected and joined so that selecting one item immediately and automatically selects another
- Foreshadowed hypertext and the World Wide Web

### Xerox Star (1981)
- First commercially released computer system with a GUI
- Had **windows, icons, menus, and a pointing device (WIMP)**
- Supported **direct manipulation** and **WYSIWYG** (what-you-see-is-what-you-get) interaction
- Display was **bit-mapped** (images formed by mapping bits in memory to pixels on the display)
- Used the **desktop metaphor** — brought concepts from the office desktop to the system's display
- Users interacted with files, not programs — "open a document" rather than "invoke an editor"
- **Continuous property**: e.g., display brightness or sound volume, has a continuous control such as a slider
- **Discrete property**: e.g., font size or family, has a discrete control such as a multi-position switch or menu item

### Evolution of Interaction Paradigms
1. **Batch processing** (1950s): No interaction during execution; punch cards and printouts
2. **Command-line interfaces** (1960s-70s): Text commands typed at a terminal; time-sharing; follow **sequential programming**
3. **Graphical User Interfaces (GUIs)** (1980s): Windows, Icons, Menus, Pointer (**WIMP**)
4. **Direct manipulation** (1980s-present): Objects on screen that users can drag, resize, and interact with; must accept the user's actions according to the user's wishes
5. **Touch, gesture, voice, AR/VR** (2000s-present): Post-WIMP interaction

### Important People
- **Vannevar Bush** — memex concept (1945)
- **J.C.R. Licklider** — "Man-Computer Symbiosis" (1960); vision of interactive computing
- **Ivan Sutherland** — Sketchpad (1962), head-mounted display
- **Douglas Engelbart** — Mouse, NLS system, hypertext (1968 demo)
- **Alan Kay** — Dynabook concept, Smalltalk, GUI pioneer at Xerox PARC
- **Stuart Card, Thomas Moran, Allen Newell** — "The Psychology of Human-Computer Interaction" (1983); brought cognitive psychology into HCI; introduced the **Model Human Processor (MHP)**

### The Psychology of Human-Computer Interaction (1983)
- Emerged from work done at **Xerox PARC** (Applied Information-Processing Psychology Project)
- **Model Human Processor (MHP)**: had an eye and an ear (perceptual processor), a brain (cognitive processor, short-term memory, long-term memory), and an arm, hand, and finger (motor responses)
- Two most prominent predictive models in the book: **Hick's Law** (choice reaction time) and **Fitts' Law** (rapid aimed movement)
- Key insight: human behavior can be understood and modeled as an **information processing activity**

### Growth of HCI Research
- Research initially focused on quality, effectiveness, and efficiency of the interface
- **Recognition is preferred over recall** in user interfaces
- Menu design was an actively pursued research topic in the early days

> **Exam-style Q (Ch. 1):** In which period did the computer mouse become available outside the laboratory?
> **Answer:** In the early 1980s as part of the Xerox Star system.

> **Exam-style Q (Ch. 1):** The first commercially available computer system to use a GUI was...
> **Answer:** Xerox Star (1981).

---

## Chapter 2: The Human Factor

### Time Scale of Human Action
- Time is the most common **dependent variable** in experimental research in HCI
- **Newell's time scale of human action** ranges from the biological band (~1 ms, neurons) through the cognitive band (~100 ms - 10 s, deliberate acts and operations) to the rational band (minutes-hours, tasks) and the social band (days-months)
- The lower in the scale, the more quantitative the research; the higher, the more qualitative

### Human Factors Model
- Model showing a human operator confronting a machine
- The human monitors the state of the computer through **sensors** and **displays**
- The human controls the state of the computer through **responders** and **controls**
- The **interface** is the dashed vertical line where interaction takes place — this is where researchers observe and measure behavioral events

### Human Sensory Systems
Humans receive information through sensory channels: **vision, hearing, touch, smell, taste**. Vision and hearing are the most important for HCI.

**Gestalt Principles of Perception:**

The Gestalt principles explain how humans naturally group and organize visual elements. These principles are fundamental to UI design.

![Gestalt Principle — Proximity](/assets/images/gestalt-proximity.svg)
![Gestalt Principle — Similarity](/assets/images/gestalt-similarity.svg)
![Gestalt Principle — Closure](/assets/images/gestalt-closure.svg)

**Vision (Sight):**
- Dominant sensory channel for most computer interaction — most people obtain about **80%** of their information through sight
- The act of seeing: light reception through the lens, focused onto the **retina** (a transducer converting visible light into neurological signals), sent to the brain via the **optic nerve**
- The **fovea** is responsible for sharp central vision (~2 degrees)
- Peripheral vision: detects motion and changes
- Properties of light: **frequency** (leads to color perception; visible spectrum 390-750 nm), **intensity** (luminance, measured in cd/m2; subjective analog is brightness)
- **Fixations**: eyes are stationary, taking in visual detail; typically last at least **200 ms**
- **Saccades**: rapid repositioning of the eyes to a new position; take only **30-120 ms**

**Hearing (Audition):**
- Detection of sound by humans; sound transmitted through environment as sound waves
- Physical properties: **intensity** (loudness), **frequency** (pitch), **timbre** (harmonic structure), **envelope** (how a note builds up and transitions in time)
- **Loudness**: subjective analog of intensity; measured in **decibels (dB)** — hearing begins at 0-10 dB, conversational speech at 50-70 dB, pain at 120-140 dB
- **Pitch**: subjective analog of frequency; measured in **Hertz (Hz)** — humans can perceive 20 Hz to 20,000 Hz; upper limit decreases with age
- Important for alerts, notifications, and non-visual feedback

**Touch (Tactition / Haptics):**
- **Somatosensory system**: includes sensory receptors in the skin, muscles, bones, joints, and organs providing information on touch, temperature, pain, and body/limb position
- **Tactile feedback** in HCI: information provided through the somatosensory system from a body part in contact with a physical object
- All user interfaces involving physical contact include tactile feedback
- **Penfield's Homunculus**: sensory/motor cortex map showing that hands, lips, and tongue have disproportionately large representation
- **Proprioception**: coordination of limb movement and position through perception of stimuli within muscles and tendons

**Smell and Taste:**
- **Smell (olfaction)**: ability to perceive odors through sensory cells in the nasal cavity
- **Taste (gustation)**: direct chemical reception of sweet, salty, bitter, and sour sensations through taste buds
- **Flavor**: a perceptual process combining smell and taste senses
- These senses are not generally "designed in" to systems

### Responders
- Through movement or **motor control**, humans affect the environment
- **Limbs**: primarily upper body; movement is tightly coupled to the somatosensory system
- **Voice**: vocal cords as responders; includes speech and non-speech vocalized sounds (**NVVI** — non-verbal voice interaction)
- **Eyes**: can act both as sensor (receiving light) and responder (controlling a computer through fixations and saccades in eye-tracking systems)

> **Exam-style Q (Ch. 2):** In an eye-tracking typing system for people unable to use their hands, what is the function of the eye?
> **Answer:** Both input and output (the eye serves as both sensor and responder).

### Perception and Cognition
- **Perception**: first stage of processing in the brain when sensory signals are received; associations and meanings take shape
- **Psychophysics**: examines the relationship between human perception and physical phenomena; a common goal is measuring the **just noticeable difference (JND)**
- **Ambiguity**: the human ability to develop multiple interpretations of a sensory input
- **Illusion**: the deception of common sense
- **Cognition**: the human process of conscious intellectual activity — thinking, reasoning, deciding
- Studying cognition is challenging because beginning and ending of cognitive operations are often not precisely known

### Cognitive Operation in Reaction Time Tasks
A reaction time task involves a sequence of operations:

| Operation | Typical Time |
|-----------|-------------|
| Sensory reception | 1 - 38 ms |
| Neural transmission to brain | 2 - 100 ms |
| Cognitive processing | 70 - 300 ms |
| Neural transmission to muscle | 10 - 20 ms |
| Muscle latency and activation | 30 - 70 ms |
| **Total** | **113 - 528 ms** |

### Memory Systems

| Type | Duration | Capacity | Description |
|------|----------|----------|-------------|
| **Sensory memory** | ~0.5 seconds | Large | Brief, raw sensory buffer |
| **Short-term (working) memory** | ~15-30 seconds | **7 +/- 2 items** (Miller's Law) | Active processing; easily disrupted |
| **Long-term memory** | Indefinite | Unlimited | Permanent storage; requires encoding |

- **Chunking**: grouping low-level items into a single high-level item to increase effective working memory capacity (e.g., phone numbers as groups) — an intuitive process
- Long-term memory subdivisions:
  - **Declarative/explicit area**: stores information about events in time and objects in the external world (similar to a data space)
  - **Implicit/procedural area**: stores information about how to use objects or do things (similar to a code space)
- Humans are typically able to distinguish about **seven levels** of a uni-dimensional stimulus

### Reaction Times

| Type | Description | Typical Time |
|------|-------------|-------------|
| **Simple reaction time** | One stimulus, one response | ~276 ms |
| **Physical matching** | Compare physical features | ~482 ms |
| **Name matching** | Compare by name/identity | Slower than physical |
| **Class matching** | Compare by category | ~565 ms |
| **Visual search** | Find target among distractors | RT = 498 + 41N ms (N = number of items) |

### Shannon's Information Theory
- **Information** is measured in **bits**: $H = \\log_2(n)$ for $n$ equally likely alternatives
- **Redundancy** in language reduces information content (English has ~50% redundancy)
- **Entropy**: a measure of the information content of a language; relates to the predictability of characters
- This framework is foundational for Hick-Hyman Law and Fitts' Law (Chapter 7)

### Human Error
- **Slips**: correct intention, incorrect action (e.g., pressing the wrong key)
- **Mistakes**: incorrect intention (e.g., choosing the wrong strategy)
- Good design should minimize both types through clear affordances and error prevention

### Skilled Behavior and Attention
- **Attention** is a limited resource; can be **selective** (focused) or **divided**
- **Automaticity**: well-practiced tasks require less attention (e.g., touch typing)
- **Change blindness**: failing to notice changes when attention is elsewhere

---

## Chapter 3: Interaction Elements

### Input Devices and Controls
**Hard controls** (physical): buttons, switches, knobs, sliders — always present and tactile
**Soft controls** (virtual): on-screen widgets — flexible but require visual attention

### Key Concepts

**Multiplexing:**
- **Space multiplexing**: each function has its own dedicated control (e.g., airplane cockpit)
- **Time multiplexing**: one control serves multiple functions at different times (e.g., smartphone touchscreen)

**Control-Display (CD) Gain:**
- Ratio of display movement to control movement
- High CD gain = small control movement causes large display movement (fast but imprecise)
- Low CD gain = large control movement for small display change (slow but precise)
- Modern mice use **non-linear transfer functions** to dynamically adjust gain

**Sensing:**
- **Position sensing** (absolute): touchscreen, graphics tablet — input maps to a fixed coordinate
- **Displacement sensing** (relative): mouse, trackball — input is a relative offset
- **Force sensing** (isometric): ThinkPad TrackPoint — pressure direction maps to cursor velocity

### Control Order
- **Zero-order (position) control**: input position directly controls output position (e.g., touchscreen)
- **First-order (velocity/rate) control**: input controls the rate of change (e.g., isometric joystick moves cursor at a speed proportional to force applied)

### Isotonic vs. Isometric
- **Isotonic**: device moves freely with little resistance (e.g., mouse, joystick)
- **Isometric**: device does not move; senses applied force (e.g., IBM TrackPoint)

### Other Important Concepts
- **Population stereotypes**: expected mappings between controls and effects (e.g., turning a knob clockwise = increase) — these are **natural relationships**
- **Learned relationships**: mappings that must be learned through experience (e.g., keyboard shortcuts)
- **Warrick's principle**: the display should move in the same direction as the side of the control closest to the display
- **Mental models**: user's internal representation of how a system works
- **Metaphor**: using familiar concepts to understand unfamiliar systems (e.g., desktop metaphor — folders, trash can, documents)
- **Modes**: different states where the same input produces different outputs (can cause **mode errors**)
- **6 DOF (degrees of freedom)**: 3 translation (x, y, z) + 3 rotation (pitch, yaw, roll)
- **Direct input**: input and display share the same surface (e.g., touchscreen)
- **Indirect input**: input and display are separate (e.g., mouse + monitor)
- **Fat finger problem**: fingers occlude the touchscreen target; finger contact area limits precision
- **Latency**: delay between input action and system response; should be minimized

### Mobile Context
- Mobile devices introduce unique interaction challenges: small screens, variable lighting, one-handed use, movement, social context
- Touch is the primary input modality on mobile — no tracking state (State 0 or State 2 only)

### Interaction Errors
- Errors occur when the user's action does not match the intended outcome
- Mode errors are particularly common when the same input produces different results depending on system state
- Good design minimizes errors through clear feedback, undo functionality, and constraints

### Prototypes
- **Wizard of Oz**: a testing setup where a human operator simulates the system's responses (e.g., testing the UI of an AI chatbot before the AI is built, with humans providing answers instead)
- Prototypes range from low-fidelity (paper sketches) to high-fidelity (interactive software mockups)

> **Exam-style Q (Lectures):** A company is testing the UI of an AI chatbot. They have not built the AI yet, they test with answers provided by humans instead. This setup is...
> **Answer:** A Wizard of Oz setup.

---

## Chapter 4: Scientific Foundations

### What is Research?
- **Research**: a systematic inquiry to describe, explain, predict, or control observed phenomena
- **Empirical research**: based on observation and measurement rather than theory alone
- Research must be **published** and **reproducible**
- **Research vs. Engineering vs. Design**: research seeks to discover new knowledge; engineering applies knowledge to build systems; design focuses on creating useful and usable artifacts

### Citations, References, and Impact
- **H-index**: a metric for academic impact — an h-index of $n$ means $n$ papers have been cited at least $n$ times
- Citations track how influential a paper is; references acknowledge prior work

### Research Methods

| Method | Description | Key Feature |
|--------|-------------|-------------|
| **Observational** | Watch and record behavior in natural settings | No manipulation of variables |
| **Experimental** | Manipulate independent variables and measure effects on dependent variables | Establishes **cause and effect** |
| **Correlational** | Measure relationship between variables | Shows association, **not causation** |

### Measurement Scales (NOIR)

| Scale | Properties | Example | Can Compute |
|-------|-----------|---------|-------------|
| **Nominal** | Categories only; no order | Gender, device type, color | Mode, frequency counts |
| **Ordinal** | Categories with order; unequal intervals | Likert scale ratings, rankings, temperature rating | Median, percentiles |
| **Interval** | Ordered with equal intervals; no true zero | Temperature in Celsius, IQ scores | Mean, standard deviation |
| **Ratio** | Equal intervals with a true zero | Task completion time, error count, distance | All arithmetic operations |

- **Likert scales**: technically **ordinal** data (the intervals between "agree" and "strongly agree" are not necessarily equal), but often treated as interval when the scale has 5+ points
- The measurement scale determines which statistical tests can be used

> **Exam-style Q (Ch. 4):** Consider a questionnaire asking "How would you rate the current temperature in your room?" with answers: way too cold, slightly cold, good, slightly warm, too hot, inferno! — this is an example of...
> **Answer:** Ordinal scale (ordered categories with potentially unequal intervals).

### Validity

| Type | Definition |
|------|-----------|
| **Internal validity** | The degree to which changes in the dependent variable are caused by the independent variable (not confounds) |
| **External validity** | The degree to which results can be generalized to other settings, people, or times |
| **Ecological validity** | The degree to which the experimental setting resembles real-world conditions |

### Relationships
- **Circumstantial (correlational)**: two variables are related, but one does not necessarily cause the other
- **Causal**: one variable directly causes changes in another (can only be established through experimental methods with controlled variables)

### Comparative Evaluations
- Compare two or more systems, devices, or techniques on measured outcomes
- Common in HCI: comparing input devices (mouse vs. trackpad vs. touchscreen)

---

## Chapter 5: Designing HCI Experiments

### Signal-to-Noise Metaphor
- **Signal** = the effect of the independent variable (what you want to measure)
- **Noise** = variability from other sources (individual differences, random error)
- Good experimental design **maximizes signal and minimizes noise**

### Ethics
- Research with human participants requires **ethics approval** from an Institutional Review Board (IRB)
- **Informed consent**: participants agree to participate after being given **clear indication** of what the study is about and what their participation would entail; they have the right to withdraw at any time
- Data must be kept confidential and anonymous

> **Exam-style Q (Ch. 5):** What is meant by 'informed consent' in human subject experiments?
> **Answer:** People agree to participate after given clear indication what the study is about and what their participation would entail.

### Variables

| Variable Type | Definition | Examples |
|---------------|-----------|----------|
| **Independent variable (IV)** | The factor manipulated by the researcher (also called a *factor*) | Input device, font size, button color |
| **Dependent variable (DV)** | The outcome measured | Task completion time, error rate, satisfaction score |
| **Control variable** | Held constant to prevent confounding | Screen size, room lighting |
| **Random variable** | Varies naturally; cannot be controlled (contributes noise) | Participant age, mood |
| **Confounding variable** | An uncontrolled variable that varies with the IV, threatening internal validity | Practice effects, fatigue |

- IVs have **levels** (e.g., device type: mouse, trackpad, touchscreen = 3 levels)
- A **factor** is another name for an independent variable; its values are **levels**

> **Exam-style Q (Ch. 5):** We study the effect of adding colored buttons on usability of a device. We test with a colored and black version and measure the effect with the SUS. What is true?
> **Answer:** In the experiment, button color is the independent variable (it is manipulated by the researcher; usability/SUS score is the dependent variable).

### Experimental Designs

**Within-subjects (repeated measures):**
- Every participant experiences all conditions
- Advantages: fewer participants needed; individual differences controlled
- Disadvantage: **order effects** (learning, fatigue)
- Mitigation: **counterbalancing** — vary the order of conditions across participants
- **Latin square**: each condition appears in each position exactly once
- **Balanced Latin square**: each condition also appears after every other condition once (requires even number of conditions)

**Between-subjects (independent measures):**
- Each participant experiences only one condition
- Advantage: no order effects
- Disadvantage: needs more participants; individual differences add noise
- Random assignment helps distribute individual differences

**Mixed design:**
- Some factors are within-subjects, others are between-subjects

### Order Effects and Counterbalancing
- **Symmetric transfer** (learning): improves performance in later conditions equally
- **Asymmetric skill transfer**: experience with one condition helps with a specific other condition (more than the reverse)
- **Longitudinal studies** can reveal the **crossover point** — where a new technique surpasses the old one

### Questionnaire Design
- Questions should be clear, unambiguous, and avoid leading the respondent
- Use validated instruments when possible (e.g., **SUS** — System Usability Scale, **NASA-TLX**)
- **NASA-TLX**: a standard subjective workload assessment tool (six subscales: mental demand, physical demand, temporal demand, performance, effort, frustration)
- **SUS (System Usability Scale)**: a 10-item questionnaire yielding a single usability score (0-100)

### Running the Experiment
- Pilot test first to identify problems
- Standardize instructions across participants
- Record all relevant data; note any anomalies
- Debrief participants after the study

---

## Chapter 6: Hypothesis Testing

### The Logic of Hypothesis Testing
- We test hypotheses using **inferential statistics** — we infer something about a population based on a sample
- **Comparing means/medians alone is NOT enough** — we need to account for variability in the data

### Null and Alternative Hypotheses
- **H0 (null hypothesis)**: there is no effect / no difference between conditions
- **H1 (alternative hypothesis)**: there is an effect / a difference exists

**Decision rules:**
- When $p < 0.05$ (or chosen $\\alpha$): **reject H0** — evidence supports H1
- When $p > 0.05$: **fail to reject H0** — insufficient evidence for H1 (this does NOT mean "accept H0")

### Statistical Significance
- The **p-value** quantifies how likely the observed result is if H0 were true
- $\\alpha$ (alpha) = the threshold for significance (typically 0.05 or 0.01)
- When $p < \\alpha$, the difference is **statistically significant**

### Type I and Type II Errors

| | Effect is real (H1 true) | No effect (H0 true) |
|---|---|---|
| **Reject H0** | Correct (True Positive) | **Type I error** (False Positive) — probability = $\\alpha$ |
| **Fail to reject H0** | **Type II error** (False Negative) — probability = $\\beta$ | Correct (True Negative) |

- **Power** = $1 - \\beta$ = probability of correctly detecting a real effect
- Higher power = less chance of missing a real effect
- Power can be increased by: larger sample size, larger effect size, higher $\\alpha$

### ANOVA (Analysis of Variance)
- Used for comparing means across 2+ groups (more powerful than multiple t-tests)
- **F-statistic** = variance between groups / variance within groups
- A large F means the differences between groups are large relative to random variation
- **Degrees of freedom**: df_between = k - 1, df_within = N - k (where k = number of groups, N = total participants)
- **One-way ANOVA**: one independent variable
- **Two-way ANOVA**: two independent variables — can detect **main effects** and **interaction effects**
- An **interaction effect** means the effect of one IV depends on the level of another IV

### Why Analyze Variance (Not Just Means)?
- Two datasets can have the same mean but very different variances
- ANOVA partitions total variance into:
  - **Between-groups variance**: variability due to the experimental manipulation (signal)
  - **Within-groups variance**: variability due to individual differences and random error (noise)
- If the ratio (F) is large enough, we conclude the manipulation had a real effect

### Between-Subjects ANOVA
- Uses independent samples — each participant only in one group
- More participants needed because individual differences contribute to within-group variance
- F-test compares between-group variance to within-group variance

### Counterbalancing and Testing for Group Effects
- When using a Latin square in a within-subjects design, you can test whether the order of conditions had a significant effect
- If a group effect is significant, it suggests the counterbalancing did not fully eliminate order effects

### Post Hoc Comparisons
- After a significant ANOVA, post hoc tests identify **which specific pairs** differ
- Common tests: **Scheffe**, **Bonferroni/Dunn**, **Fisher PLSD**, **Tukey HSD**
- Post hoc tests correct for the increased risk of Type I error from multiple comparisons

### Chi-Square Test
- Used when data are **frequencies** (counts) rather than scores
- Tests whether observed frequencies differ significantly from expected frequencies
- $df = (r-1)(c-1)$ for contingency tables (r = rows, c = columns)
- Example: testing whether the distribution of preferred devices differs from what would be expected by chance

### Parametric vs. Non-Parametric Tests
**Parametric tests** assume:
- Data are normally distributed
- Data are at least interval scale
- Homogeneity of variance

**Non-parametric tests**:
- Make fewer assumptions about the data
- Used for ordinal data (e.g., Likert scales) or when normality is violated
- Generally less powerful than parametric equivalents

### Choosing the Right Statistical Test

**Step 1: Are your data frequencies or scores?**
- Frequencies $\\rightarrow$ **Chi-Square test**
- Scores $\\rightarrow$ proceed to Step 2

**Step 2: Experimental or correlational?**
- Correlational + parametric $\\rightarrow$ **Pearson's r**
- Correlational + non-parametric $\\rightarrow$ **Spearman's rho ($\\rho$)**
- Experimental $\\rightarrow$ proceed to Step 3

**Step 3: Check normality (Shapiro-Wilk test or histograms)**
- Normal data $\\rightarrow$ **parametric tests**
- Non-normal data $\\rightarrow$ **non-parametric tests**

### Statistical Test Selection Table

| Data Setup | Parametric Test | Non-Parametric Test |
|------------|----------------|-------------------|
| 1 Variable, 2 Categories, **Between-Subjects** | Independent t-test | Mann-Whitney U test |
| 1 Variable, 2 Categories, **Within-Subjects** | Paired t-test | Wilcoxon Signed-Rank test |
| 1 Variable, >2 Categories, **Between-Subjects** | One-way ANOVA | Kruskal-Wallis test |
| 1 Variable, >2 Categories, **Within-Subjects** | Repeated-measures ANOVA | Friedman test / Mood's median test |
| 1 Variable, **Correlation** | Pearson's r | Spearman's rho ($\\rho$) |

### Worked Example: Choosing a Test

> **Exam-style Q (Ch. 6):** A group of Android users (A) and iPhone users (B) are asked how satisfied they are with their phone. The experiment uses a 5-point Likert-scale. What is the most appropriate test to see if the answers between group A and B differ significantly?
>
> **Step-by-step reasoning:**
> 1. The data are **scores** (Likert scale), not frequencies
> 2. The study is **experimental** (comparing two groups)
> 3. Likert-scale data is **ordinal** (non-parametric)
> 4. There are **2 categories** (Android vs. iPhone)
> 5. The design is **between-subjects** (each person uses only one phone type)
>
> **Answer:** Mann-Whitney U test for ordinal data.

### More Practice: Test Selection

**Scenario A:** Comparing task completion time (ratio data, normally distributed) for 3 input devices where each participant uses all 3 devices.
- Within-subjects, 3+ conditions, parametric $\\rightarrow$ **Repeated-measures ANOVA**

**Scenario B:** Comparing SUS scores (ordinal) between a group using interface A and a group using interface B.
- Between-subjects, 2 conditions, non-parametric $\\rightarrow$ **Mann-Whitney U test**

**Scenario C:** Testing whether gender (male/female) is associated with preferred input device (mouse/trackpad/touchscreen).
- Frequencies in a contingency table $\\rightarrow$ **Chi-Square test** ($df = (2-1)(3-1) = 2$)

**Scenario D:** Examining the relationship between hours of practice and typing speed (both ratio data, normally distributed).
- Correlational, parametric $\\rightarrow$ **Pearson's r**

### Effect Size
- Statistical significance tells you **whether** an effect exists; effect size tells you **how big** it is
- **Cohen's d**: standardized mean difference
  - $d \\geq 0.20$ = small effect
  - $d \\geq 0.50$ = medium effect
  - $d \\geq 0.80$ = large effect

**Effect size measures by analysis type:**

| Effect Size | Analysis |
|------------|----------|
| Cohen's d | Independent samples t-test |
| Odds ratio (OR) | Logistic regression |
| Pearson correlation (r) | Correlation analysis |
| $R^2$ | Multiple regression |
| $\\omega^2$ (omega squared) | ANOVA |

### Correlation Coefficients (Pearson's r)

| Strength | Positive | Negative |
|----------|---------|----------|
| Small | 0.1 to 0.3 | -0.1 to -0.3 |
| Medium | 0.3 to 0.5 | -0.3 to -0.5 |
| Large | 0.5 to 1.0 | -0.5 to -1.0 |

---

## Chapter 7: Modeling Interaction

### Descriptive Models vs. Predictive Models
- **Descriptive models**: describe or classify aspects of interaction (no numerical predictions)
- **Predictive models**: make quantitative predictions (e.g., time, error rate)

### Descriptive Models

**Quadrant Model of Groupware (CSCW — Computer-Supported Cooperative Work):**

| | Same time (synchronous) | Different time (asynchronous) |
|---|---|---|
| **Same place** | Face-to-face interaction | Shared workspaces |
| **Different place** | Video conferencing | Email, forums |

**Key-Action Model (KAM):**
- Classifies keyboard keys by function:
  - **Symbol keys**: produce visible characters (letters, numbers, punctuation)
  - **Executive keys**: trigger actions (Enter, Backspace, Delete, Esc)
  - **Modifier keys**: change the meaning of other keys (Shift, Ctrl, Alt)

**Guiard's Model of Bimanual Control:**
- Non-preferred hand (e.g., left): leads, sets the frame of reference, coarse movements
- Preferred hand (e.g., right): follows, operates within the frame, fine movements
- Example: holding paper (left) while writing (right); positioning a ruler (left) while drawing a line (right)

**Buxton's Three-State Model of Graphical Input:**

| State | Description | Example |
|-------|-------------|---------|
| **State 0** | Out of range / not tracking | Pen lifted above tablet |
| **State 1** | Tracking (no selection) | Mouse moving, cursor follows |
| **State 2** | Dragging (selecting/manipulating) | Mouse button held down while moving |

- A mouse is a **2-state device** (State 1: tracking, State 2: dragging; cannot sense "out of range")
- A stylus/pen is a **3-state device** (can distinguish all three states)
- A touchscreen is a **2-state device** (State 0: not touching, State 2: touching/dragging; no tracking state — this is why hover effects do not work on touchscreens)

**Eye Tracking and Heatmaps:**

Eye tracking records where users look on a screen. Heatmaps visualize aggregated gaze data — warmer colors indicate longer or more frequent fixations.

![Eye tracking heatmap on a Wikipedia page](/assets/images/eye-tracking-heatmap.jpg)

### Predictive Models

#### Linear Regression
- $y = mx + b$ (or $y = a + bx$)
- **$R^2$ (coefficient of determination)**: proportion of variance in $y$ explained by $x$
  - $R^2 = 0$ means no relationship; $R^2 = 1$ means a perfect fit

#### Fitts' Law
The most important predictive model in HCI — predicts the time to move to a target based on distance and size.

![Fitts' Law — relationship between target distance (D) and width (W)](/assets/images/fitts-law-diagram.svg)

**Original formulation (Fitts, 1954):**
$$ID = \\log_2\\left(\\frac{2A}{W}\\right)$$

**Shannon formulation (MacKenzie, 1992) — preferred:**
$$ID = \\log_2\\left(\\frac{A}{W} + 1\\right)$$

Where:
- $ID$ = Index of Difficulty (in bits)
- $A$ = Amplitude (distance to target center)
- $W$ = Width of the target (in the direction of movement)

**Movement time prediction:**
$$MT = a + b \\times ID$$

Where $a$ (intercept) and $b$ (slope) are empirically determined constants.

**Throughput (TP)** — a single measure of both speed and accuracy:
$$TP = \\frac{ID_e}{MT}$$

**Effective target width** (accounts for actual endpoint variability):
$$W_e = 4.133 \\times SD_x$$

**Effective Index of Difficulty:**
$$ID_e = \\log_2\\left(\\frac{A}{W_e} + 1\\right)$$

**Background — Shannon's Theorem 17:**
Fitts' Law is analogous to Shannon's information theorem: $C = B \\log_2(S/N + 1)$, where signal-to-noise ratio maps to amplitude-to-width ratio.

#### Fitts' Law: Detailed Calculation Examples

**Example 1 — Basic ID Calculation (Shannon formulation):**
A target is 200 pixels away ($A = 200$) and 50 pixels wide ($W = 50$).
$$ID = \\log_2\\left(\\frac{200}{50} + 1\\right) = \\log_2(5) = 2.32 \\text{ bits}$$

**Example 2 — Predicting Movement Time:**
Given $a = 50$ ms and $b = 150$ ms/bit (empirically determined), and $ID = 2.32$ bits:
$$MT = 50 + 150 \\times 2.32 = 50 + 348 = 398 \\text{ ms}$$

**Example 3 — Comparing Two Targets:**
- Target A: $A = 400$ px, $W = 20$ px $\\rightarrow$ $ID = \\log_2(400/20 + 1) = \\log_2(21) = 4.39$ bits
- Target B: $A = 100$ px, $W = 50$ px $\\rightarrow$ $ID = \\log_2(100/50 + 1) = \\log_2(3) = 1.58$ bits
- Target B is much easier (lower ID) — the combination of shorter distance and larger target makes it significantly faster to acquire

**Example 4 — Effective Width and Throughput:**
In a pointing study, participants aimed at a target with $A = 300$ px, $W = 40$ px.
The standard deviation of their actual endpoints was $SD_x = 12$ px.
$$W_e = 4.133 \\times 12 = 49.6 \\text{ px}$$
$$ID_e = \\log_2\\left(\\frac{300}{49.6} + 1\\right) = \\log_2(7.05) = 2.82 \\text{ bits}$$
If mean movement time was $MT = 450$ ms = 0.45 s:
$$TP = \\frac{2.82}{0.45} = 6.27 \\text{ bits/s}$$

#### Fitts' Law and Menu Design

> **Exam-style Q (Ch. 7):** Order three menu types (pie, rectangular, linear) from fastest to slowest after the user clicks "Menu1", according to Fitts' Law.
>
> **Answer:** 1st: Pie menu (shortest distance, large targets), 2nd: Rectangular menu (moderate distance, wide targets), 3rd: Linear menu (longest distance for bottom items, narrow targets).
>
> **Explanation:** Pie menus arrange items radially around the cursor, so $A$ is small and $W$ is large (the wedge-shaped target extends outward). Linear menus stack items vertically, so bottom items have large $A$ and the items have small $W$.

#### Fitts' Law Design Implications
- **Make frequently used targets larger** and **closer** to the cursor's expected position
- **Screen edges and corners** are effectively infinite-width targets (the cursor cannot overshoot) — this is why the Start menu is in the corner and macOS menu bar is at the top edge
- **Pop-up/context menus** reduce $A$ by appearing near the cursor
- **Pie menus** outperform linear menus because they minimize $A$ and maximize $W$

#### Hick-Hyman Law
Predicts decision time (reaction time) based on the number of choices.

$$RT = a + b \\cdot \\log_2(n + 1)$$

Where:
- $RT$ = reaction time
- $n$ = number of equally probable alternatives
- $a \\approx 200$ ms (base reaction time)
- $b \\approx 150$ ms/bit (time per bit of information)
- The $+1$ accounts for the option of "no response" (temporal uncertainty)

**With unequal probabilities:**
$$H = \\sum p_i \\cdot \\log_2\\left(\\frac{1}{p_i} + 1\\right)$$

**Example — Hick's Law Calculation:**
A menu has 8 equally probable items. How long does it take to decide?
$$RT = 200 + 150 \\cdot \\log_2(8 + 1) = 200 + 150 \\cdot 3.17 = 200 + 475.5 = 675.5 \\text{ ms}$$

**Design implication:** Reducing the number of choices (or making some items more prominent) reduces decision time. This is why menus should be organized into logical groups with frequently used items highlighted.

#### Keystroke-Level Model (KLM)
Predicts expert task completion time by summing primitive operator times.

$$t_{EXECUTE} = t_K + t_P + t_H + t_D + t_M + t_R$$

**KLM Operators:**

| Operator | Action | Time |
|----------|--------|------|
| **K** | Keystroke (key press) | Expert typist (90 wpm): 0.12s; Average skilled (55 wpm): 0.20s; Average non-secretarial (40 wpm): 0.28s; Worst (unfamiliar): 1.20s |
| **B** / **BB** | Button press (mouse click) / Double-click | 0.10s / 0.20s |
| **P** | Pointing (moving cursor to target) | 0.8 to 1.5s, average 1.10s (can also use Fitts' Law) |
| **H** | Homing (moving hand between keyboard and mouse) | 0.40s |
| **D** | Drawing a line | $0.9n_D + 0.16l_D$ seconds ($n_D$ = number of segments, $l_D$ = total length in cm) |
| **M** | Mental preparation (thinking/deciding) | 1.35s (1.2s according to Olson and Olson 1995) |
| **R(t)** or **W(t)** | System response (or 'work') time | Variable (depends on the system) |

**KLM Example 1 — Deleting an icon via menu (from exam prep):**
1. M — think about which icon to delete
2. P — move cursor to the icon
3. B — click to select the icon
4. P — move cursor to the delete button
5. B — click delete
6. M — confirm deletion
7. P — move cursor to "OK"
8. B — click OK

$T = 2M + 3P + 3B = 2(1.35) + 3(1.10) + 3(0.10) = 2.70 + 3.30 + 0.30 = 6.30$ s

**KLM Example 2 — Deleting an icon via drag-to-trash (from exam prep):**
Task sequence: initiate the deletion, find the file icon, point to file icon, press and hold mouse, drag file to trash can, release mouse, point to original window.

1. M — initiate the deletion (mental preparation)
2. M$_V$ — find the file icon (visual search among N icons; e.g., $498 + 41 \\times 10 = 908$ ms for 10 icons)
3. P — point to file icon (1.10s)
4. B — press and hold mouse (0.10s)
5. P — drag file to trash can (1.10s — pointing to the trash)
6. B — release mouse (0.10s)
7. P — point to original window (1.10s)

$T = M + M_V + 3P + 2B = 1.35 + 0.908 + 3(1.10) + 2(0.10) = 1.35 + 0.908 + 3.30 + 0.20 = 5.76$ s

Note: The exact time depends on the number of icons for visual search and can be refined using Fitts' Law for the pointing operations.

**Modern KLM with Fitts' Law for pointing:**
$$t_P = 0.159 + 0.204 \\times \\log_2\\left(\\frac{A}{W} + 1\\right)$$

This replaces the flat 1.10s estimate with a Fitts' Law calculation based on the actual target distance and width.

#### Mental Operator Variants
More precise alternatives to the single M = 1.35s:

| Operator | Description | Time |
|----------|-------------|------|
| $M_S$ | Simple reaction time | ~240 ms |
| $M_P$ | Physical matching | ~310 ms |
| $M_N$ | Name matching | ~360 ms |
| $M_L$ | Class matching | ~450 ms |
| $M_C$ | Choice reaction | Variable |
| $M_V$ | Visual search (find target among N items) | $498 + 41N$ ms |

#### KSPC (Keystrokes Per Character)
- Measures the efficiency of a text entry method
- Optimal KSPC = 1.0 (one keystroke per character)
- Higher KSPC = less efficient (e.g., multi-tap on a phone keypad: KSPC > 1)

#### Power Law of Learning
Performance improves with practice following a power function:
$$T_n = T_1 \\times n^a$$

or equivalently for speed:
$$S_n = S_1 \\times n^a$$

Where:
- $T_n$ = time on trial $n$
- $T_1$ = time on first trial
- $a$ = learning rate (negative for time, positive for speed)
- Improvement is rapid at first, then gradually slows

#### Multiple Regression
Extends linear regression to multiple predictors:
$$y = a + b_1x_1 + b_2x_2 + \\ldots + b_nx_n$$

- **Stepwise regression**: adds or removes predictors one at a time to find the best model
- Useful when multiple factors influence the dependent variable

---

## Chapter 8: Writing and Publishing HCI Research

### Types of Publications
- **Conference papers**: shorter, faster review cycle, presented at events (e.g., CHI, UIST)
- **Journal papers**: longer, more thorough, peer-reviewed over months

### Structure of a Research Paper

| Section | Purpose |
|---------|---------|
| **Title** | Concise description of the work |
| **Abstract** | ~150 words; what was done + what was found (NOT why) |
| **Keywords** | Terms for indexing and search |
| **Introduction** | Background, motivation, research question |
| **Method** | How the study was conducted (detailed enough to replicate) |
| **Results and Discussion** | What was found; statistical analyses; interpretation |
| **Conclusion** | Summary of findings and implications |
| **References** | All cited sources |

### Method Subsections

| Subsection | Content |
|-----------|---------|
| **Participants** | Number, demographics, recruitment method, compensation |
| **Apparatus** | Equipment, software, setup used |
| **Procedure** | Step-by-step description of what participants did |
| **Design** | Independent and dependent variables, experimental design (within/between), counterbalancing |

### Reporting Results
- Report both **statistical significance** ($p$-value) and **effect size**
- Include **absolute** differences (e.g., "20% faster") and **relative** comparisons
- Use appropriate **visualizations**: bar charts for categorical comparisons, line charts for trends
- **Error bars** on charts should indicate confidence intervals or standard errors
- Follow **APA formatting** for statistical reporting (e.g., $F(1, 18) = 5.43, p < .05$)

### Abstract Guidelines
- The abstract should state: what was done + what was found
- It should NOT explain why an effect was observed (that belongs in the Discussion)

### Preparing the Manuscript
- **Citations and references** must be accurate and complete
- **Visual aids**: figures and tables should be self-explanatory with clear captions
- **Writing for clarity**: use active voice, be concise, avoid jargon where possible

---

## Data Analysis & Visualization (Supplementary)

### Types of Data (NOIR)
- **Nominal**: categories with no order (e.g., device type, gender)
- **Ordinal**: ordered categories with unequal intervals (e.g., Likert scale, ranking)
- **Interval**: equal intervals, no true zero (e.g., temperature in Celsius)
- **Ratio**: equal intervals with true zero (e.g., time, distance, error count)

The Likert scale debate: technically ordinal (intervals between "agree" and "strongly agree" are not guaranteed equal), but often treated as interval in practice when the scale has 5+ points.

### Descriptive Statistics

**Measures of Central Tendency:**

| Measure | Best For | Pros | Cons |
|---------|----------|------|------|
| **Mean** | Interval/ratio data | Uses all data; basis for many statistical tests | Sensitive to outliers |
| **Median** | Ordinal data or skewed distributions | Robust to outliers; good for skewed data | Ignores extreme values |
| **Mode** | Nominal data | Works for all data types; shows most common value | May not be unique; ignores spread |

**Measures of Variability:**

| Measure | Description |
|---------|-------------|
| **Range** | Max - Min (sensitive to outliers) |
| **Standard Deviation (SD)** | Average distance from the mean; most common measure |
| **Variance** | $SD^2$; used in ANOVA calculations |
| **Interquartile Range (IQR)** | Range of the middle 50% (Q3 - Q1); robust to outliers |

### Distributions
- **Normal (Gaussian)**: symmetric, bell-shaped; mean = median = mode
- **Left-skewed (negatively skewed)**: tail extends to the left; mean < median
- **Right-skewed (positively skewed)**: tail extends to the right; mean > median
- **Bimodal**: two peaks
- **Uniform**: all values equally likely

### Confidence Intervals and the Normal Distribution
For a normal distribution:
- **68.26%** of data falls within $\\pm 1$ SD of the mean
- **95.44%** of data falls within $\\pm 2$ SD of the mean
- **99.72%** of data falls within $\\pm 3$ SD of the mean

**Standard Error of the Mean (SEM):**
$$SEM = \\frac{SD}{\\sqrt{n}}$$

- SEM describes the precision of the sample mean as an estimate of the population mean
- Confidence intervals for the mean: $\\bar{x} \\pm z \\times SEM$ (e.g., 95% CI uses $z = 1.96$)

### Inferential Statistics
- Goal: **infer** something about the **population** based on the **sample**
- Sampling error may occur — the sample may not perfectly represent the population
- Statistical tests help determine whether observed differences are likely real or due to chance

### Data Visualization Best Practices
- **Bar charts**: compare categorical groups (use error bars showing CI or SEM)
- **Line charts**: show trends over time or ordered conditions
- **Scatter plots**: show relationships between two continuous variables
- **Box plots**: show distribution, median, quartiles, and outliers
- **Histograms**: show frequency distribution of a single variable
- Always label axes clearly and include units
- Avoid misleading scales (e.g., truncated y-axis can exaggerate differences)
- Use consistent colors and legends

### Tools for Statistical Analysis
- **SPSS, STATA, R, Python, JASP**
- R and Python recommended (free, powerful visualization)
- R packages: dplyr, ggplot2, tidyr
- Python packages: Pandas, Plotly, SciPy, Matplotlib

---

## Exam Preparation: Quick Reference

### Key Formulas at a Glance

| Formula | Equation | Use |
|---------|----------|-----|
| **Fitts' Law (Shannon)** | $ID = \\log_2(A/W + 1)$ | Predict pointing difficulty |
| **Movement Time** | $MT = a + b \\times ID$ | Predict time to acquire target |
| **Throughput** | $TP = ID_e / MT$ | Compare input device performance |
| **Effective Width** | $W_e = 4.133 \\times SD_x$ | Account for actual accuracy |
| **Hick-Hyman Law** | $RT = a + b \\cdot \\log_2(n+1)$ | Predict decision time |
| **KLM** | $T = \\sum \\text{operators}$ | Predict expert task time |
| **Power Law of Learning** | $T_n = T_1 \\times n^a$ | Model practice effects |
| **Information** | $H = \\log_2(n)$ | Bits for n alternatives |
| **Visual Search** | $RT = 498 + 41N$ | Time to find target among N items |
| **Chi-Square df** | $df = (r-1)(c-1)$ | Degrees of freedom for contingency tables |

### Common Exam Mistakes to Avoid
1. **Confusing IV and DV**: the IV is what you manipulate; the DV is what you measure
2. **Confusing ordinal and interval**: Likert scales are ordinal; temperature in Celsius is interval; task time is ratio
3. **Choosing the wrong statistical test**: always check the data type (parametric vs. non-parametric) and the design (within vs. between-subjects)
4. **Confusing "fail to reject H0" with "accept H0"**: we never "accept" H0 — we only fail to reject it
5. **Forgetting that Xerox Star (1981) was the first commercial GUI**: not the Apple Macintosh (1984)
6. **Confusing correlation with causation**: correlational studies show association, not causal relationships
7. **Ignoring Fitts' Law when comparing menus**: pie menus beat linear menus because they have smaller $A$ and larger $W$
8. **Overlooking the eye as both sensor and responder**: in eye-tracking systems, the eye serves as both input and output

### Statistical Test Decision Flowchart (Text Version)

1. **Data = frequencies?** $\\rightarrow$ Chi-Square
2. **Data = scores, study = correlational?** $\\rightarrow$ Pearson's r (parametric) or Spearman's rho (non-parametric)
3. **Data = scores, study = experimental:**
   - **2 groups, between-subjects:** Independent t-test (parametric) / Mann-Whitney U (non-parametric)
   - **2 groups, within-subjects:** Paired t-test (parametric) / Wilcoxon Signed-Rank (non-parametric)
   - **3+ groups, between-subjects:** One-way ANOVA (parametric) / Kruskal-Wallis (non-parametric)
   - **3+ groups, within-subjects:** Repeated-measures ANOVA (parametric) / Friedman test (non-parametric)

### Practice Questions with Answers

**Q1:** A researcher measures task completion time (in seconds) for two interfaces. Each participant uses both interfaces. The data are normally distributed. Which test should be used?
**A1:** Paired t-test (within-subjects, 2 conditions, parametric/ratio data).

**Q2:** You want to compare the usability ratings (5-point Likert scale) of three different websites. Different participants rate each website. Which test?
**A2:** Kruskal-Wallis test (between-subjects, 3+ conditions, non-parametric/ordinal data).

**Q3:** Calculate the Index of Difficulty for a target at distance $A = 160$ px with width $W = 40$ px using the Shannon formulation.
**A3:** $ID = \\log_2(160/40 + 1) = \\log_2(5) = 2.32$ bits.

**Q4:** Using KLM, estimate the time for a user to click a button on screen (from rest position with hand on mouse). Steps: think about which button to click, point to the button, click.
**A4:** $T = M + P + B = 1.35 + 1.10 + 0.10 = 2.55$ s.

**Q5:** What type of device is a mouse according to Buxton's Three-State Model?
**A5:** A 2-state device (State 1: tracking; State 2: dragging). It cannot sense State 0 (out of range).

**Q6:** In a study with 4 conditions using a Latin square design, how many participants (minimum) are needed?
**A6:** 4 participants (one for each row of the 4x4 Latin square), though multiples of 4 are preferred for balanced data.

**Q7:** An experiment finds $F(2, 27) = 4.12, p = .028$. What does this mean?
**A7:** There is a statistically significant difference between the three groups ($p < .05$). The degrees of freedom tell us there were 3 groups (df_between = 2, so k = 3) and 30 total participants (df_within = 27, so N = 30). Post hoc tests should be conducted to determine which specific pairs differ.

**Q8:** A pointing study yields $SD_x = 8$ px for a target at $A = 250$ px with $W = 30$ px. The mean MT was 520 ms. Calculate the throughput.
**A8:**
- $W_e = 4.133 \\times 8 = 33.06$ px
- $ID_e = \\log_2(250/33.06 + 1) = \\log_2(8.56) = 3.10$ bits
- $TP = 3.10 / 0.52 = 5.96$ bits/s
`;
