export const dynamicModellingSummary = String.raw`
# Dynamic Modelling for Human-Centred Systems: Comprehensive Course Summary

This course teaches you to build, simulate, and evaluate computational dynamic models of processes in psychology, bio-medicine, and social science. The key skill is the **modelling-and-simulation cycle**: Conceptualisation $\rightarrow$ Formalisation $\rightarrow$ Simulation $\rightarrow$ Evaluation.

---

## Chapter 1: Introduction — What is a Dynamic Model?

### Definitions
- **Model**: A simplified representation of a real-world system, based on choices and assumptions.
- **Dynamic model**: A model that describes a process — how things change **over time**.

### Elements of a Dynamic Model
| Element | Description |
|---|---|
| **Concepts** | Variables that represent relevant aspects of the system |
| **Timeline** | Discrete time points with a step size $\Delta t$ |
| **Rules** | How concept values change per time step |
| **Start values** | Initial conditions for simulation |
| **Parameters** | Adjustable constants (optional) |
| **Stochastic variables** | Random elements (optional) |

### The Modelling and Simulation Cycle
The cycle has **two phases** and **four activities**:

**Design phase:**
1. **Conceptualisation** — Identify the main concepts, sub-processes, and their relationships
2. **Formalisation** — Specify the model precisely (numerical or logical rules)

**Analysis phase:**
3. **Simulation** — Run experiments with the model to generate traces
4. **Evaluation** — Compare traces against expected patterns / hypotheses

If evaluation fails, the cycle restarts from conceptualisation.

### Two Representations
- **Numerical representation**: Concepts are variables with numerical values (integer, real, 0/1). Relations are calculation rules.
- **Logical representation**: Concepts are propositions (true/false). Relations are IF-THEN rules specifying truth-value dependencies.

### Why Model?
- Study processes that are expensive, time-consuming, hard to measure, hard to manipulate, or unethical to study in reality
- Perform "what if" simulations
- Build intelligent systems that understand and support human behaviour

### Model Properties / Characteristic Patterns
- Hypotheses about the model's behaviour given certain inputs
- Used during **evaluation** to check if the model works correctly
- Should describe effects that happen over time or relationships between inputs and outputs
- Example: "When taking a pill every 3 hours the medication level stays between 12 and 20 mg/l"

---

## Chapter 2: Modelling Growth

Growth is a fundamental building block for many models.

### Generic Growth Patterns

| Pattern | Formula | Shape |
|---|---|---|
| **Linear** | $\text{Amount}(t+\Delta t) = \text{Amount}(t) + c$ | Straight line |
| **Exponential** | $\text{Amount}(t+\Delta t) = \text{Amount}(t) \times \alpha$ | J-curve |
| **Logistic (limited)** | $\text{Amount}(t+\Delta t) = \text{Amount}(t) + \alpha \times \frac{C - \text{Amount}(t)}{C}$ | S-curve, max = $C$ |
| **Negative (decay)** | Loss $>$ Gain | Declining curve |

### General Growth Formulas
- $\text{Gain}(t) = \text{GainFactor}(t) \times \text{Amount}(t)$
- $\text{Loss}(t) = \text{LossFactor}(t) \times \text{Amount}(t)$
- $\text{Amount}(t+\Delta t) = \text{Amount}(t) + (\text{Gain}(t) - \text{Loss}(t)) \times \Delta t$

### Logistic Growth (Limited)
The gain factor decreases as the amount approaches capacity $C$:
$$\text{GainFactor}(t) = \alpha \times \frac{C - \text{Amount}(t)}{C}$$

This produces an **S-shaped (sigmoid) curve**. The maximum value the amount can reach is $C$.

---

## Chapter 3: Modelling Decision Making — E. coli

### The Process
E. coli bacteria make food intake decisions based on chemical pathways:
- **Glucose preference**: If glucose is externally present, the bacterium imports glucose
- **Lactose as backup**: Lactose is only imported when glucose is absent (no CRPcAMP) AND lactose is present externally

### Key Mechanism
- **CRPcAMP** is only present when external glucose is absent (indicator of no glucose)
- Lactose import enzyme requires both: CRPcAMP present AND lactose indicator present
- This creates a **hierarchical decision**: glucose always takes priority

### Conceptualisation
Two parallel pathways leading to mass growth:
- External glucose $\rightarrow$ glucose indicator $\rightarrow$ glucose enzyme $\rightarrow$ glucose import $\rightarrow$ internal glucose $\rightarrow$ mass
- External lactose $\rightarrow$ lactose indicator $\rightarrow$ lactose enzyme $\rightarrow$ lactose import $\rightarrow$ internal lactose $\rightarrow$ mass

### Formalisation (Numerical, Binary 0/1)
- $\text{glucIND}(t+\Delta t) = \text{EXTgluc}(t)$
- $\text{lacimpENZ}(t+\Delta t) = \text{lacIND}(t) \times (1 - \text{glucIND}(t))$
- $M(t+\Delta t) = M(t) + \gamma \times (\text{INTgluc}(t) + \text{INTlac}(t)) \times M(t)$

**Model level**: Physiological

---

## Chapter 4: Modelling Learning — Aplysia Sea Hare

### Classical Conditioning
- **Before training**: Tail shock $\rightarrow$ contraction (via SN1 $\rightarrow$ MN). Siphon touch alone does nothing.
- **Training**: Repeated pairing of siphon touch + tail shock strengthens the synapse between SN2 and MN
- **After training**: Siphon touch alone $\rightarrow$ contraction (learned response)

### Neural Mechanism
- SN1 (tail shock sensor) $\rightarrow$ always connects to MN (strength S1 = constant = 4)
- SN2 (siphon touch sensor) $\rightarrow$ connects to MN via synapse S2 (initially weak, strength = 0)
- **Adaptation rule**: When both MN and SN2 are active simultaneously, S2 increases by 1 (up to max 4)

### Formalisation
- $\text{AMN}(t+\Delta t) = 1$ if $\text{ASN1}(t) = 1$ **or** ($S2(t) = 4$ and $\text{ASN2}(t) = 1$), else 0
- $S2(t+\Delta t) = S2(t) + 1$ if $S2(t) < 4$ and $\text{AMN}(t) = \text{ASN2}(t) = 1$, else $S2(t)$
- Forgetting can be modelled by introducing a **decay factor** that reduces synapse strength over time

**Model level**: Physiological

---

## Chapter 5: Self-Organisation — Honeybee Colony

### Emergent Behaviour
Individual bees follow simple rules, but the colony exhibits complex organised behaviour.

### Roles
| Role | Task | Trigger |
|---|---|---|
| Forager | Collect food | Low food availability |
| Brood carer | Feed larvae | Pheromones from larvae |
| Undertaker | Remove corpses | Dead bodies in hive |
| Patroller | Guard hive | Enemies observed |

### Decision Model
Each bee maintains **norms** for each environmental aspect. The bee:
1. Calculates urgency for each aspect: how far current state deviates from the norm
2. Computes **relative urgency** = urgency / norm
3. Takes on the role with the **highest relative urgency**
4. **Adapts norms** over time: performing a role decreases the norm for that aspect

### Expected Patterns
- Environmental parameters stay within bounds (self-regulating)
- Bees **specialise** over time (tend to keep the same role)

### Integration of Levels
The model integrates three levels: **collective process** (environment) $\leftrightarrow$ **individual behaviour** (observations and actions) $\leftrightarrow$ **cognitive process** (norms, urgency, allocation)

---

## Chapter 6: Modelling Epidemics — SIR Model

### Two Approaches

| Approach | Population-based (Collective) | Individual-based |
|---|---|---|
| Representation | Groups: Susceptibles, Infectives, Recovered | Each person modelled separately |
| Advantage | Computationally efficient, scalable | More faithful to reality |
| Disadvantage | Abstracted, less precise | Computationally expensive |
| Stochastic? | Usually not | Usually yes |

### Key Concepts
- **Susceptible** $\rightarrow$ **Infective** $\rightarrow$ **Recovered** (SIR)
- Contact frequency, contact intensity, recovery rate

### Population-based Formulas
- $\text{RelevantContacts}(t) = \text{ContactFrequency} \times \frac{\text{Infectives}(t)}{\text{Susceptibles}(t) + \text{Infectives}(t) + \text{Recovered}(t)}$
- $\text{Infections}(t) = \text{RelevantContacts}(t) \times \text{ContactIntensity} \times \text{Susceptibles}(t)$

### Expected Patterns
- Initially, infections increase almost exponentially
- At some point, the infection rate decreases
- Eventually, recovered population prevents further spread

---

## Chapter 7: Emotion Contagion

### What is Emotion Contagion?
The tendency to mimic and synchronize emotions with others — influencing others through conscious or unconscious induction of emotional states.

### Key Variables and Parameters
- $q_A$ — emotion level of person A
- $\varepsilon_A$ — expressiveness of A
- $\delta_A$ — openness of A to received emotions
- $\alpha_{BA}$ — channel strength from B to A
- $\gamma_{BA} = \varepsilon_B \times \alpha_{BA} \times \delta_A$ — contagion strength from B to A

### Domain Model
For each person A at each time point:
1. Calculate the **weighted average emotion impact** $q_A^*$ from all other group members
2. Determine the **difference** $q_A^* - q_A$
3. **Adjust** emotion level: $q_A(t+\Delta t) = q_A + \gamma \times (q_A^* - q_A)$

This is equivalent to a **weighted average**: $(1 - \gamma) \times q_A + \gamma \times q_A^*$

### Formalisation with Predicates
Uses predicates like: has_expressiveness(B:AGENT, E:REAL), has_openness(A:AGENT, D:REAL), has_channel_strength(B:AGENT, A:AGENT, C:REAL), has_emotion_level(A:AGENT, V:REAL)

---

## Chapter 8: Behaviour Modelling

### What is Behaviour?
A range of actions and mannerisms made by organisms, systems, or artificial entities **in conjunction with their environment** — the response to stimuli (internal or external, conscious or subconscious).

### Two Viewpoints

| | External (Observer) View | Internal (Cognitive) View |
|---|---|---|
| **States** | Input/output: stimuli, actions, communication | Cognitive states: beliefs, desires, intentions, sensory representations |
| **Processes** | From stimuli to actions | From sensory representations to preparations to actions |

### Environmental Complexity Thesis
More complex environment $\rightarrow$ more sophisticated behaviour needed $\rightarrow$ more complex mental representations required.

---

## Chapter 9: Reactive Behaviour

### Types of Behaviour

| Type | Description | Key Feature |
|---|---|---|
| **A: Stimulus-response** | Immediate reaction to current stimulus | No memory needed |
| **B: Delayed response** | Reaction based on remembered stimulus | Requires sensory representation (memory) |
| **C: Motivation-based** | Behaviour driven by goals/desires | May act proactively; may ignore stimuli |
| **D: Adaptive** | Behaviour changes through experience | Requires sensitivity/learning mechanism |

### Reactive Behaviour (Types A + B)
Described using semi-formal notation:
$$\text{FOR all TIMEPOINTS: IF } \langle\text{condition}\rangle \text{ THEN } \langle\text{effect}\rangle \text{ (at next time step)}$$

### Example: Stimulus-Response
"IF the animal observes food at p2 AND observes no screen, THEN it goes to p2"

---

## Chapter 10: Motivation-Based Behaviour

Uses **desires** and **intentions** to drive behaviour. The BDI (Belief-Desire-Intention) model:
- **Desires** come from built-in goals or interaction with the world
- **Beliefs** come from observations of the world
- **Desires + Beliefs** $\rightarrow$ **Intentions** $\rightarrow$ **Actions**

---

## Chapter 11: Adaptive Behaviour

Behaviour that changes over time through experience. Key concept: **sensitivity** — a parameter that changes based on past experiences, affecting future behaviour.

---

## Chapter 12: Extended Mind

The "mind extended in the world" approach — the environment itself serves as external memory/cognition. No complex internal mental states needed because the **external world acts as a replacement for beliefs**.

Example: Little Thumb dropping pebbles — no internal map needed because the pebbles in the world guide the way back.

---

## Chapter 13: Integrating Models & Agent-Based Modelling

### Domain Models
A domain model describes the process being studied. It can be embedded in an intelligent system as:
- **Analysis model** — observe symptoms, derive conclusions (assessment)
- **Support model** — given a desire, determine actions to achieve it
- **Adaptation model** — adjust the model based on new information

**NOT valid**: embedding as a "conceptual model" (that's a design artifact, not a system component)

### Agent-Based Modelling
An **intelligent agent** is:
- Situated in an environment
- Able to perform **autonomous actions**
- Has **goals**

NOT a defining characteristic: receiving incoming communication from humans

### Standard Agent Predicates
| Concept | Predicate |
|---|---|
| Sensory representation | sr(A:AGENT, I:OBSERVATION) |
| Preparation state | ps(A:AGENT, Ac:ACTION) |
| Belief | belief(A:AGENT, I:INFO_ELEMENT) |
| Desire | desire(A:AGENT, I:INFO_ELEMENT) |
| Passive observation | observed(A:AGENT, I:INFO_ELEMENT) |
| Active observation | to_be_observed(A:AGENT, I:INFO_ELEMENT) |
| Action | performed(A:AGENT, Ac:ACTION) |
| Outgoing communication | to_be_communicated(A:AGENT, I:INFO_ELEMENT) |

Note: **prepare(A:AGENT, Ac:ACTION)** is NOT a standard agent predicate.

---

## Chapter 14: Analysis and Support Models

### Analysis Models
- Goal: derive a **conclusion/assessment** from **observations**
- Key concepts: **desire** (what to assess), **assessment** (the conclusion), **belief** (derived knowledge)
- **Forward reasoning**: from observations $\rightarrow$ derive conclusions
- **Backward reasoning**: from desired conclusion $\rightarrow$ check what observations are needed

How to choose direction in an **analysis model**: It follows automatically from the position of observations and the desire in your model.

### Support Models
- Goal: determine **actions** to achieve a **desired state**
- Key concepts: **proposed** (suggested actions), **assumed** (expected effects), **desire** (goal state)
- Forward reasoning: from proposed actions $\rightarrow$ predict effects
- Backward reasoning: from desired state $\rightarrow$ determine needed actions

How to choose direction in a **support model**: You choose the direction that is easiest to implement in your system.

### Backward Reasoning with Negation
When performing backward reasoning and there are multiple possible interpretations, you may need to derive **belief(not B)** to establish **belief(A)** through a logical chain.

---

## Chapter 15: Driving Behaviour (Case Study)

Application of all modelling concepts to a real-world scenario: modelling driving behaviour with domain models, analysis, and support.

---

## L2-Python Implementation

When implementing a model in the L2-Python environment:
- **Start values** are defined in the **scenario file**
- **Parameter values** are defined in the **scenario file**
- **Predicates** (rules) are defined in the **rules file**

Structure: "You define the **start values** in the **scenario file**, and the **parameter values** in the **scenario file**, and the **predicates** in the **rules file**."

---

## Boolean Logic in Numerical Models

When concepts can only be 0 or 1:
| Operation | Formula |
|---|---|
| **AND** | $C(t+\Delta t) = A(t) \times B(t)$ |
| **NOT** | $C(t+\Delta t) = 1 - B(t)$ |
| **OR** | $C(t+\Delta t) = \text{MAX}(A(t), B(t))$ |
| **NOT (A OR B)** | $1 - \text{MAX}(A, B)$ |

---

## Key Exam Tips

1. **Conceptualisation** involves: defining scope, identifying concepts, determining relations, formulating expected patterns. It does **NOT** involve choosing between numerical and logical representation (that's formalisation) or deciding on representation of model concepts.
2. **Characteristic patterns** are used to evaluate whether the model behaves as expected. They preferably specify effects between concepts that are not directly connected.
3. The **maximum value** of logistic growth $\text{Amount}(t+\Delta t) = \text{Amount}(t) + \alpha \times \frac{C - \text{Amount}(t)}{C}$ is **$C$**.
4. The E. coli model is at the **physiological** level. The Aplysia model is also at the **physiological** level. The honeybee model integrates cognitive, behavioural, and collective levels.
5. **Population-based** and **individual-based** are the two approaches for modelling social processes. An advantage of population-based is that it allows modelling larger societies.
6. In the BDI model: desire $\rightarrow$ intention $\leftarrow$ belief, and intention $\rightarrow$ action.
7. **Sensitivity** is essential for adaptive behaviour but NOT for reactive behaviour.
8. The intelligent agent always uses **both** forward and backward reasoning — the statement that it "always applies forward reasoning" is **incorrect**.
9. Forgetting in the Aplysia model is best modelled by introducing a **decay factor** that reduces synapse strength each time step.
`;
