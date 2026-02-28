/**
 * Comprehensive HCI Summary — inline markdown content.
 * Compiled from all 8 chapters of MacKenzie's "Human-Computer Interaction:
 * An Empirical Research Perspective" plus supplementary lecture materials
 * on data analysis & visualization and exam preparation.
 */
export const hciSummary = `
## Chapter 1: Historical Context

### The Birth of HCI
- **HCI (Human-Computer Interaction)** emerged as a field of research in the early 1980s
- The term was popularized at the first ACM SIGCHI conference (1983)
- HCI draws from **computer science, psychology, sociology, design, and human factors engineering**

### Key Historical Milestones

| Year | Event |
|------|-------|
| 1945 | Vannevar Bush proposes the **memex** — a conceptual device for storing and linking documents (foreshadowed hypertext) |
| 1940s-50s | **Batch processing** era — users submit jobs on punch cards; no real-time interaction |
| 1960s | **Time-sharing** systems allow multiple users to interact with a computer simultaneously |
| 1963 | Ivan Sutherland's **Sketchpad** — first graphical interface with a light pen |
| 1968 | Douglas Engelbart's **"Mother of All Demos"** — demonstrates the mouse, hypertext, video conferencing, windows |
| 1973 | Xerox PARC develops the **Alto** — first personal computer with a graphical user interface |
| 1981 | **Xerox Star** — first commercially available computer with a GUI (the mouse became available outside the lab) |
| 1984 | **Apple Macintosh** — brings the GUI to the mass market |
| 1991 | Tim Berners-Lee launches the **World Wide Web** |

### Evolution of Interaction Paradigms
1. **Batch processing** (1950s): No interaction during execution; punch cards and printouts
2. **Command-line interfaces** (1960s-70s): Text commands typed at a terminal; time-sharing
3. **Graphical User Interfaces (GUIs)** (1980s): Windows, Icons, Menus, Pointer (**WIMP**)
4. **Direct manipulation** (1980s-present): Objects on screen that users can drag, resize, and interact with
5. **Touch, gesture, voice, AR/VR** (2000s-present): Post-WIMP interaction

### Important People
- **Vannevar Bush** — memex concept (1945)
- **J.C.R. Licklider** — "Man-Computer Symbiosis" (1960); vision of interactive computing
- **Ivan Sutherland** — Sketchpad (1963), head-mounted display
- **Douglas Engelbart** — Mouse, NLS system, hypertext (1968 demo)
- **Alan Kay** — Dynabook concept, Smalltalk, GUI pioneer at Xerox PARC
- **Stuart Card, Thomas Moran, Allen Newell** — "The Psychology of Human-Computer Interaction" (1983); brought cognitive psychology into HCI

---

## Chapter 2: The Human Factor

### Human Sensory Systems
Humans receive information through sensory channels: **vision, hearing, touch, smell, taste**. Vision and hearing are the most important for HCI.

**Vision:**
- Dominant sensory channel for most computer interaction
- Foveal vision: sharp central vision (~2 degrees)
- Peripheral vision: detects motion and changes

**Hearing:**
- Important for alerts, notifications, and non-visual feedback
- Auditory perception processes frequency, loudness, and timbre

**Touch (Haptics):**
- Skin receptors detect pressure, vibration, temperature
- Key for touchscreens, force feedback, Braille displays
- **Penfield's Homunculus**: sensory/motor cortex map showing that hands, lips, and tongue have disproportionately large representation

### Perception and Cognition
- **Perception**: the process of interpreting sensory information
- **Cognition**: higher-level processes including thinking, problem-solving, decision-making, language

### Memory Systems

| Type | Duration | Capacity | Description |
|------|----------|----------|-------------|
| **Sensory memory** | ~0.5 seconds | Large | Brief, raw sensory buffer |
| **Short-term (working) memory** | ~15-30 seconds | **7 +/- 2 items** (Miller's Law) | Active processing; easily disrupted |
| **Long-term memory** | Indefinite | Unlimited | Permanent storage; requires encoding |

- **Chunking**: grouping items to increase effective working memory capacity (e.g., phone numbers as groups)
- Long-term memory subdivisions: **declarative** (facts/events) vs. **procedural** (skills/how-to)

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
- **Population stereotypes**: expected mappings between controls and effects (e.g., turning a knob clockwise = increase)
- **Warrick's principle**: the display should move in the same direction as the side of the control closest to the display
- **Mental models**: user's internal representation of how a system works
- **Modes**: different states where the same input produces different outputs (can cause errors)
- **6 DOF (degrees of freedom)**: 3 translation (x, y, z) + 3 rotation (pitch, yaw, roll)
- **Direct input**: input and display share the same surface (e.g., touchscreen)
- **Indirect input**: input and display are separate (e.g., mouse + monitor)
- **Fat finger problem**: fingers occlude the touchscreen target; finger contact area limits precision
- **Latency**: delay between input action and system response; should be minimized

---

## Chapter 4: Scientific Foundations

### What is Research?
- **Research**: a systematic inquiry to describe, explain, predict, or control observed phenomena
- **Empirical research**: based on observation and measurement rather than theory alone

### Research Methods

| Method | Description | Key Feature |
|--------|-------------|-------------|
| **Observational** | Watch and record behavior in natural settings | No manipulation of variables |
| **Experimental** | Manipulate independent variables and measure effects on dependent variables | Establishes **cause and effect** |
| **Correlational** | Measure relationship between variables | Shows association, **not causation** |

### Measurement Scales

| Scale | Properties | Example |
|-------|-----------|---------|
| **Nominal** | Categories only; no order | Gender, device type, color |
| **Ordinal** | Categories with order; unequal intervals | Likert scale ratings, rankings, temperature rating |
| **Interval** | Ordered with equal intervals; no true zero | Temperature in Celsius, IQ scores |
| **Ratio** | Equal intervals with a true zero | Task completion time, error count, distance |

- **Likert scales**: typically treated as **ordinal** data (the intervals between "agree" and "strongly agree" are not necessarily equal)
- The measurement scale determines which statistical tests can be used

### Validity

| Type | Definition |
|------|-----------|
| **Internal validity** | The degree to which changes in the dependent variable are caused by the independent variable (not confounds) |
| **External validity** | The degree to which results can be generalized to other settings, people, or times |
| **Ecological validity** | The degree to which the experimental setting resembles real-world conditions |

- **H-index**: a metric for academic impact — an h-index of $n$ means $n$ papers have been cited at least $n$ times

---

## Chapter 5: Designing HCI Experiments

### Signal-to-Noise Metaphor
- **Signal** = the effect of the independent variable (what you want to measure)
- **Noise** = variability from other sources (individual differences, random error)
- Good experimental design **maximizes signal and minimizes noise**

### Ethics
- Research with human participants requires **ethics approval** from an Institutional Review Board (IRB)
- **Informed consent**: participants must be told the purpose, procedures, risks, and their right to withdraw at any time
- Data must be kept confidential and anonymous

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
- **NASA-TLX**: a standard subjective workload assessment tool (six subscales: mental demand, physical demand, temporal demand, performance, effort, frustration)

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

### Post Hoc Comparisons
- After a significant ANOVA, post hoc tests identify **which specific pairs** differ
- Common tests: **Scheffe**, **Bonferroni/Dunn**, **Fisher PLSD**, **Tukey HSD**
- Post hoc tests correct for the increased risk of Type I error from multiple comparisons

### Choosing the Right Statistical Test

**Step 1: Are your data frequencies or scores?**
- Frequencies $\\rightarrow$ **Chi-Square test** ($df = (r-1)(c-1)$ for contingency tables)
- Scores $\\rightarrow$ proceed to Step 2

**Step 2: Experimental or correlational?**
- Correlational + parametric $\\rightarrow$ **Pearson's r**
- Correlational + non-parametric $\\rightarrow$ **Spearman's rho ($\\rho$)**
- Experimental $\\rightarrow$ proceed to Step 3

**Step 3: Check normality (Shapiro-Wilk test or histograms)**
- Normal data $\\rightarrow$ **parametric tests**
- Non-normal data $\\rightarrow$ **non-parametric tests**

### Statistical Test Selection Table

| Design | # Conditions | Parametric | Non-Parametric |
|--------|-------------|-----------|----------------|
| Between-subjects | 2 | Independent t-test | Mann-Whitney U test |
| Within-subjects | 2 | Paired t-test | Wilcoxon Signed-Rank test |
| Between-subjects | 3+ | One-way ANOVA | Kruskal-Wallis test |
| Within-subjects | 3+ | Repeated-measures ANOVA | Friedman test |
| Correlation | - | Pearson's r | Spearman's rho |

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

- A mouse is a 2-state device (State 1: tracking, State 2: dragging; cannot sense "out of range")
- A stylus/pen is a 3-state device (can distinguish all three states)
- A touchscreen is a 2-state device (State 0: not touching, State 2: touching/dragging; no tracking state)

### Predictive Models

#### Linear Regression
- $y = mx + b$ (or $y = a + bx$)
- **$R^2$ (coefficient of determination)**: proportion of variance in $y$ explained by $x$
  - $R^2 = 0$ means no relationship; $R^2 = 1$ means a perfect fit

#### Fitts' Law
The most important predictive model in HCI — predicts the time to move to a target based on distance and size.

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

#### Keystroke-Level Model (KLM)
Predicts expert task completion time by summing primitive operator times.

$$t_{EXECUTE} = t_K + t_P + t_H + t_D + t_M + t_R$$

**KLM Operators:**

| Operator | Action | Time |
|----------|--------|------|
| **K** | Keystroke (key press) | 0.08s (expert typist) to 1.20s (unfamiliar key) |
| **B** | Button press (mouse click) | 0.10s |
| **P** | Pointing (moving cursor to target) | 1.10s (average) |
| **H** | Homing (moving hand between keyboard and mouse) | 0.40s |
| **D** | Drawing a line | $0.9n_D + 0.16l_D$ seconds ($n_D$ = number of segments, $l_D$ = total length in cm) |
| **M** | Mental preparation (thinking/deciding) | 1.35s |
| **R** | System response time | Variable (depends on the system) |

**KLM Example — Deleting an icon (from exam prep):**
1. M — think about which icon to delete
2. P — move cursor to the icon
3. B — click to select the icon
4. P — move cursor to the delete button
5. B — click delete
6. M — confirm deletion
7. P — move cursor to "OK"
8. B — click OK

$T = 2M + 3P + 3B = 2(1.35) + 3(1.10) + 3(0.10) = 2.70 + 3.30 + 0.30 = 6.30$ s

**Modern KLM with Fitts' Law for pointing:**
$$t_P = 0.159 + 0.204 \\times \\log_2\\left(\\frac{A}{W} + 1\\right)$$

This replaces the flat 1.10s estimate with a Fitts' Law calculation based on the actual target distance and width.

#### KSPC (Keystrokes Per Character)
- Measures the efficiency of a text entry method
- Optimal KSPC = 1.0 (one keystroke per character)
- Higher KSPC = less efficient (e.g., multi-tap on a phone keypad: KSPC > 1)

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

| Measure | Pros | Cons |
|---------|------|------|
| **Mean** | Uses all data; basis for many statistical tests | Sensitive to outliers |
| **Median** | Robust to outliers; good for skewed data | Ignores extreme values |
| **Mode** | Works for nominal data; shows most common value | May not be unique; ignores spread |

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

### Confidence Intervals
For a normal distribution:
- **68.26%** of data falls within $\\pm 1$ SD of the mean
- **95.44%** of data falls within $\\pm 2$ SD of the mean
- **99.72%** of data falls within $\\pm 3$ SD of the mean

### Inferential Statistics
- Goal: **infer** something about the **population** based on the **sample**
- Sampling error may occur — the sample may not perfectly represent the population
- Statistical tests help determine whether observed differences are likely real or due to chance

### Tools for Statistical Analysis
- **SPSS, STATA, R, Python, JASP**
- R and Python recommended (free, powerful visualization)
- R packages: dplyr, ggplot2, tidyr
- Python packages: Pandas, Plotly, SciPy, Matplotlib
`;
