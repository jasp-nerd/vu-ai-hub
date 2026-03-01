export const dynamicModellingSummary = String.raw`
# Dynamic Modelling for Human-Centred Systems: Comprehensive Course Summary

This course teaches you to build, simulate, and evaluate computational dynamic models of processes in psychology, bio-medicine, and social science. The key skill is the **modelling-and-simulation cycle**: Conceptualisation $\rightarrow$ Formalisation $\rightarrow$ Simulation $\rightarrow$ Evaluation.

---

## Chapter 1: Introduction — What is a Dynamic Model?

![Stock and flow diagram — the basic building blocks of system dynamics models](/assets/images/stock-and-flow-diagram.svg)

### Definitions
- **Model**: A simplified representation of a real-world system, based on choices and assumptions. It is not a complete representation of reality.
- **Dynamic model**: A model that describes a specific phenomenon, theory system (i.e. a process) — how things change **over time**.

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

### Conceptualisation Details
Conceptualisation involves three types of tasks:
- **Characterising the process** to be modelled (identification of sub-processes)
- **Concept identification** — which variables are needed
- **Relationship between concepts** — how they affect each other

### Formalisation Details
Formalisation needs to be done for both concepts and relations. Two representations:
- **Numerical representation**: Concepts are variables with numerical values (integer, real, 0/1). Relations are calculation rules that specify how the value of one variable can be calculated from the values of other variables.
- **Logical representation**: Concepts are propositions (true/false). Relations are IF-THEN rules specifying that when certain statements are true at some time point, another statement will be true or false at the next time step.

### Why Model?
- Study processes that are expensive, time-consuming, hard to measure, hard to manipulate, or unethical to study in reality
- Perform "what if" simulations
- Build intelligent systems that understand and support human behaviour
- Use of models for scientific understanding: research questions lead to hypotheses, formulate specific and precise hypotheses, validate hypotheses on simulation traces

### Model Properties / Characteristic Patterns

![Causal loop diagram — showing positive and negative feedback loops](/assets/images/causal-loop-diagram.svg)

![Feedback loop — reinforcing and balancing loops in dynamic systems](/assets/images/feedback-loop-diagram.svg)

- Hypotheses about the model's behaviour given certain inputs and parameter values
- Used during **evaluation** to check if the model works correctly
- Should describe effects that happen over time or relationships between inputs and outputs
- Example: "When taking a pill every 3 hours the medication level stays between 12 and 20 mg/l"

### Simulation and Validation
- A **simulation trace** is a sequence of states of the model at subsequent time points
- Visualisation: graphical representation of values of model variables at subsequent time points, or representation of truth values at subsequent time points (state trace)
- **Validation**: checking whether the model is correctly built and whether it represents the reality in an adequate way
- **Evaluation**: comparing simulation results with expectations (based on reality or hypotheses)

### Stochastic Variables
- Parameters for which values are determined by a probability
- Running the same model several times results in possibly different traces, which all reflect a different scenario for the same model

---

## Chapter 2: Modelling Growth

Growth is a fundamental building block for many models. It is inspired from nature: biological growth at cell level involves volume increase and cell division.

### Generic Growth Patterns

| Pattern | Formula | Shape |
|---|---|---|
| **Linear** | $\text{Amount}(t+\Delta t) = \text{Amount}(t) + c$ | Straight line (fixed gain per step) |
| **Exponential** | $\text{Amount}(t+\Delta t) = \text{Amount}(t) \times \alpha$ | J-curve (every cell divides) |
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

### Worked Example: Logistic Growth
Given: $\alpha = 0.5$, $C = 1000$, $\text{Amount}(0) = 10$, $\Delta t = 1$

At $t=0$: $\text{GainFactor}(0) = 0.5 \times \frac{1000-10}{1000} = 0.495$

$\text{Gain}(0) = 0.495 \times 10 = 4.95$

$\text{Amount}(1) = 10 + 4.95 \times 1 = 14.95$

As Amount approaches 1000, GainFactor approaches 0, and growth stops.

---

## Chapter 3: Modelling Decision Making — E. coli

### The Process
E. coli bacteria make food intake decisions based on chemical pathways:
- **Glucose preference**: If glucose is externally present, the bacterium imports glucose
- **Lactose as backup**: Lactose is only imported when glucose is absent (no CRPcAMP) AND lactose is present externally

### Key Mechanism
- **CRPcAMP** is only present when external glucose is absent (indicator of no glucose; present when glucose < 0.1 mmol/l outside cell)
- A little bit of lactose is present in the cell when there is lactose outside the cell (infiltrates)
- Lactose import enzyme requires both: CRPcAMP present AND lactose indicator present
- This creates a **hierarchical decision**: glucose always takes priority
- The bacterium will grow from both lactose intake and glucose intake

### Conceptualisation
Two parallel pathways leading to mass growth:
- External glucose $\rightarrow$ glucose indicator (no CRPcAMP) $\rightarrow$ glucose enzyme $\rightarrow$ glucose import $\rightarrow$ internal glucose $\rightarrow$ mass
- External lactose $\rightarrow$ lactose indicator (some lactose) $\rightarrow$ lactose enzyme $\rightarrow$ lactose import $\rightarrow$ internal lactose $\rightarrow$ mass

### Formalisation of Concepts
| Concept | Variable | Type |
|---|---|---|
| Glucose externally present | EXTgluc | [0/1] |
| Lactose externally present | EXTlac | [0/1] |
| Glucose indicator (no CRPcAMP) | glucIND | [0/1] |
| Lactose indicator | lacIND | [0/1] |
| Glucose import enzyme | glucimpENZ | [0/1] |
| Lactose import enzyme | lacimpENZ | [0/1] |
| Glucose internally present | INTgluc | [0/1] |
| Lactose internally present | INTlac | [0/1] |
| Mass | M | [real] |

### Formalisation of Relations (Numerical, Binary 0/1)
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
- If both SN2 and interneuron (IN) are activated simultaneously, this changes the synapse between SN2 and MN, making more neurotransmitter produced when SN2 is activated

### Formalisation
**Concepts**: Events and neuron activation are [0/1]; synapse strength is integer.

**Relations:**
- $\text{ASN1}(t+\Delta t) = \max(\text{TailShock}(t), \text{TailShock}(t-\Delta t), \text{TailShock}(t-2\Delta t))$
- $\text{ASN2}(t+\Delta t) = \max(\text{SiphonTouch}(t), \text{SiphonTouch}(t-\Delta t), \text{SiphonTouch}(t-2\Delta t))$
- $\text{Contraction}(t+\Delta t) = \text{AMN}(t)$
- $\text{AMN}(t+\Delta t) = 1$ if $\text{ASN1}(t) = 1$ **or** ($S2(t) = 4$ and $\text{ASN2}(t) = 1$), else 0
- $S2(t+\Delta t) = S2(t) + 1$ if $S2(t) < 4$ and $\text{AMN}(t) = \text{ASN2}(t) = 1$, else $S2(t)$
- Forgetting can be modelled by introducing a **decay factor** that reduces synapse strength over time

**Model level**: Physiological

---

## Chapter 5: Self-Organisation — Honeybee Colony

### Emergent Behaviour
A society based on decentralised decision making. Individual bees follow simple rules, but the colony exhibits complex organised behaviour. Every worker bee has the same skills, but taking up a role is triggered by environmental cues.

### Roles
| Role | Task | Trigger |
|---|---|---|
| Forager | Collect food, store food in hive | Low food availability |
| Brood carer | Get food, feed hungry larvae | Pheromones emitted by larvae |
| Undertaker | Remove corpses from hive | Dead bodies in hive |
| Patroller | Patrol hive, fight enemies | Enemies observed |

### Global Aspects Influencing Individual Behaviour
- **Food availability** (triggers forager role)
- **Larvae strength / Pheromone rate** (triggers brood carer role)
- **Cleanness / Dead bodies** (triggers undertaker role)
- **Safety / Enemies** (triggers patroller role)

### Cognitive Level Decision Model
Each bee maintains **norms** for each environmental aspect. The bee:
1. Calculates **urgency** for each aspect: how far current state deviates from the norm (how unsatisfactory the state is)
2. Computes **relative urgency** = urgency / norm for that aspect
3. Takes on the role with the **highest relative urgency**
4. **Adapts norms** over time: if an individual is in a role addressing a certain aspect, then the norm for that aspect is slowly decreased over time

### Expected Patterns
- Environmental parameters stay within bounds (self-regulating)
- Bees **specialise** over time (tend to keep the same role)
- Specialisation of individuals is emerging in the process

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
| Stochastic? | Usually not | Usually yes (probabilistic element needed) |

### Key Concepts
- **Susceptible** $\rightarrow$ **Infective** $\rightarrow$ **Recovered** (SIR)
- Contact frequency, contact intensity, recovery rate

### Individual-Level Formalisation
| Concept | Formalisation |
|---|---|
| Infection state (susceptible/infective/recovered) | InfectionStateA1 = 0, 1, or 2 |
| Location of individual | LocationA1 = 1, 2, ... |
| Contact frequency per day | ContactFrequency |
| Contact intensity | ContactIntensity |
| Recovery rate (chance per day) | RecoveryRate |

### Population-based Formalisation
| Concept | Variable |
|---|---|
| Number of susceptible individuals | Susceptibles |
| Number of infective individuals | Infectives |
| Number of recovered individuals | Recovered |
| Number of relevant contacts per day | RelevantContacts |
| Number of infections per day | Infections |

### Population-based Formulas
- $\text{RelevantContacts}(t) = \text{ContactFrequency} \times \frac{\text{Infectives}(t)}{\text{Susceptibles}(t) + \text{Infectives}(t) + \text{Recovered}(t)}$
- $\text{Infections}(t) = \text{RelevantContacts}(t) \times \text{ContactIntensity} \times \text{Susceptibles}(t)$
- $\text{Recoveries}(t) = \text{RecoveryRate} \times \text{Infectives}(t)$
- $\text{Susceptibles}(t+\Delta t) = \text{Susceptibles}(t) - \text{Infections}(t)$
- $\text{Infectives}(t+\Delta t) = \text{Infectives}(t) + \text{Infections}(t) - \text{Recoveries}(t)$
- $\text{Recovered}(t+\Delta t) = \text{Recovered}(t) + \text{Recoveries}(t)$

### Expected Patterns
- Initially, infections increase almost exponentially
- At some point, the infection rate decreases
- Eventually, recovered population prevents further spread

### Further Explorations
- Compare individual and population-based model results
- Incorporate individual differences in contact behaviour (e.g. core population with higher contact frequencies)
- Consider recovered individuals becoming susceptible again (no permanent immunity)
- Explore vaccination programmes
- Incorporate cognitive models for decision making about contact behaviour (BDI-based)

---

## Chapter 7: Emotion Contagion

### What is Emotion Contagion?
The tendency to mimic and synchronize emotions with others — influencing others through conscious or unconscious induction of emotional states. Synchronization of facial expressions, vocalizations, postures and movements with others, in order to "converge emotionally."

### Key Variables and Parameters
- $q_A$ — emotion level of person A
- $\varepsilon_A$ — expressiveness of A
- $\delta_A$ — openness of A to received emotions
- $\alpha_{BA}$ — channel strength from B to A
- $\gamma_{BA} = \varepsilon_B \times \alpha_{BA} \times \delta_A$ — contagion strength from B to A

### Domain Model
For each person A at each time point:
1. Calculate the **weighted average emotion impact** $q_A^*$ from all other group members (not all members have equal impact on A)
2. Determine the **difference** $q_A^* - q_A$
3. **Adjust** emotion level by a fraction $\gamma$ of this difference: $q_A(t+\Delta t) = q_A + \gamma \times (q_A^* - q_A)$

This is equivalent to a **weighted average**: $(1 - \gamma) \times q_A + \gamma \times q_A^*$

### Formalisation with Predicates
**Concepts:**
| Concept | Predicate |
|---|---|
| Person B has emotion expressiveness E | has_expressiveness(B:AGENT, E:REAL) |
| Person A has openness for received emotion D | has_openness(A:AGENT, D:REAL) |
| Channel from sender B to receiver A has strength C | has_channel_strength(B:AGENT, A:AGENT, C:REAL) |
| Contagion strength from B to A is CS | has_contagion_strength(B:AGENT, A:AGENT, CS:REAL) |
| Overall contagion strength to receiver A is CS | has_overall_contagion_strength(A:AGENT, CS:REAL) |
| Person A has relevance factor R | has_relevance(A:AGENT, R:REAL) |
| Person A has emotion level V | has_emotion_level(A:AGENT, V:REAL) |
| The group has emotion level V | group_emotion_level(V:REAL) |

**Sorts:**
| Sort | Description | Elements |
|---|---|---|
| AGENT | Group members | a1, a2, a3, a, b, c, arnie, bernie, charlie |
| REAL | Numerical values | real numbers |

---

## Chapter 8: Behaviour Modelling

### What is Behaviour?
A range of actions and mannerisms made by organisms, systems, or artificial entities **in conjunction with their environment** — the response to stimuli (internal or external, conscious or subconscious, overt or covert, voluntary or involuntary).

### Two Viewpoints

| | External (Observer) View | Internal (Cognitive) View |
|---|---|---|
| **States** | Input/output state properties: observed stimuli, incoming communication, actions, outgoing communication | Cognitive state properties: sensory representations, preparations, beliefs, desires, intentions, sensitivity levels |
| **Processes** | Temporal relationships from observed stimuli and incoming communications to actions and outgoing communications | From sensory representations to preparations; from experiences to sensitivity levels; from sensitivity level to action; from desires to intentions; from intentions to actions |

### Central Theme in Cognitive Science
Analyse how cognitions relate to behaviour (how internal descriptions relate to external ones). External descriptions are the "characteristic patterns" that are used to provide evidence for the feasibility of internal descriptions.

### Environmental Complexity Thesis
The function of cognition is to enable the agent to deal with environmental complexity:
- More complex environment $\rightarrow$ more sophisticated behaviour required
- More sophisticated behaviour $\rightarrow$ more complex mental representations and capabilities needed

### Research Questions
From an **external** behavioural perspective:
- Which concepts relating to input and output of an individual are needed to **describe** the pattern of behaviour?
- How can the dynamic relationship between input and output be described using these concepts?

From an **internal** cognitive perspective:
- What types of **internal cognitive states** are required to generate the behavioural pattern?
- How can the dynamic relationships between these internal cognitive states be described?

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

### Experimental Setup (Animal, Food, Screen)
- **Situation 1**: Empty cups at p1 and p2 $\rightarrow$ no preference (wander or stay)
- **Situation 2**: Empty at p1, food visible at p2 $\rightarrow$ goes to p2 (**stimulus-response**)
- **Situation 3**: Food at p2 covered by cup (was visible, now hidden) $\rightarrow$ some go to p2 (**delayed response** using memory)
- **Situation 4**: Food at p2 but was never visible $\rightarrow$ some search for food (**motivation-based** or **adaptive**)

### Describing Behaviour in Logical Way
By means of executable dynamic properties: logical relations that specify truth value dependencies between state properties at the next time step.

---

## Chapter 10: Motivation-Based Behaviour — Beliefs, Desires and Intentions

### Introduction
The third class of behavioural patterns. An animal does not simply respond to stimuli, neither immediately nor via an internally maintained world state model. In addition to observations and a world state model, **motivational states** play an important role in deciding about actions.

Motivation-based behaviour can cope with increased complexity of the environment, for example in environments where food can be absent for longer time periods, so that food-hoarding may be important to survive.

### The BDI Model (Belief-Desire-Intention)

![Intelligent agent with learning — perception, reasoning, and action](/assets/images/intelligent-agent-learning.svg)

Based on Aristotle's analysis of how humans come to actions — **means-end reasoning**:
> "There are three things in the soul which control action and truth — sensation, reason, desire." (Aristotle, Nicomachean Ethics, Book VI)

Aristotle introduced the **practical syllogism**:
- IF A has a desire D
- AND A has the belief that X is an appropriate means to achieve D
- THEN A will do X

### Two Perspectives on Internal Cognitive States
- **(a) Realist perspective**: Internal cognitive state properties are related to 'real' physical (e.g. neurological) state properties; these are called **realisers**
- **(b) Instrumentalist perspective**: Internal cognitive states are not related to physical properties; they are an instrument to make predictions on behaviour (e.g. Dennett's **intentional stance** or folk-psychological stance)

### Global Structure
The model is specified at two levels:
1. **External behaviour process** (observable input/output)
2. **Internal cognitive process** (beliefs, desires, intentions)

Interaction: input transfers from the behavioural level to the cognitive level, output by the cognitive process transfers back to the behavioural level.

### Relevant Concepts
**External behavioural level:**
- Input: **observation** (of presence of food or screen)
- Output: **action** (go to p2)

**Internal cognitive level:**
- **Belief** — on presence of food or screen, and reason for an action to satisfy a desire
- **Desire** — to have food
- **Intention** — to go to p2

### Generic Relationships Between Motivational Concepts
The general dynamic relationships between motivational concepts:
- **Desire generation**: $\text{desire}(D) \wedge \text{belief}(B1) \rightarrow \text{intention}(A)$
- **Action generation**: $\text{intention}(A) \wedge \text{belief}(B2) \rightarrow \text{performed}(A)$

Where B1 characterises circumstances under which action A satisfies desire D, and B2 characterises circumstances under which there is an **opportunity** to perform A.

### Detailed Dynamic Relationships (Animal Example)

**IMB1 Desire Generation:**
At any point in time: IF the animal observes the absence of food at p2, AND the belief that food is at p2 holds, THEN the desire for food will hold.

Formally: $\text{observed}(\text{not}(\text{at\_position}(\text{food}, \text{p2}))) \wedge \text{belief}(\text{at\_position}(\text{food}, \text{p2})) \rightarrow \text{desire}(\text{have\_food})$

**IMB2 Intention Generation:**
At any point in time: IF the desire for food holds, AND the belief that food is present at p2 holds, THEN the intention to go to p2 will hold.

Formally: $\text{desire}(\text{have\_food}) \wedge \text{belief}(\text{at\_position}(\text{food}, \text{p2})) \rightarrow \text{intention}(\text{goto}(\text{p2}))$

**IMB3 Action Generation:**
At any point in time: IF the intention to go to p2 holds, AND the animal observes the absence of the screen, THEN the animal will go to p2.

Formally: $\text{intention}(\text{goto}(\text{p2})) \wedge \text{observed}(\text{no\_screen}) \rightarrow \text{performed}(\text{goto}(\text{p2}))$

**IMB4 Desire Persistence:** IF desire for food holds, THEN at all later time points desire for food holds.

**IMB5 Intention Persistence:** IF intention to go to p2 holds, THEN at all later time points intention to go to p2 holds.

**IDR1 Belief Generation:** IF the animal observes food at p2, THEN the belief that food is at p2 will hold.

**IDR4 Belief Persistence:** IF belief food at p2 holds at t1, AND between t1 and t2 the animal does not observe that food is not present at p2, THEN belief food at p2 holds at t2.

### Assumptions of the BDI Model
- Beliefs persist for long time periods
- Actions are (only) generated from intentions
- Intentions are (only) generated from desires
- Actions are (only) performed when an opportunity is there
- An intention for an action is (only) generated when it is believed that the action contributes to satisfaction of the concerning desire
- Desires and intentions persist forever
- Desires and intentions have an all-or-nothing character (no gradual desires or intentions)

### Possible Refinements
- Incorporating eat actions and effects on desires (hunger occurs after time without eating, disappears after eating)
- Model search behaviour (no beliefs about food, but due to desire, intentions to go to positions not yet investigated)
- Beliefs decay after some time
- Desires and intentions do not persist forever, but change when there are good reasons
- Desires and intentions have a **gradual** character

### Mindreading in Organisations
Individuals can reason about the behaviour of individuals in other roles using the intentional stance, assuming motivational concepts like beliefs, desires, and intentions. This enables **anticipatory reasoning** — predicting or manipulating the behaviour of others.

---

## Chapter 11: Adaptive Behaviour

### Introduction
The fourth class of behavioural patterns. Based on certain **experiences**, an individual's behaviour can change forever (or at least for longer lasting periods of time). Other terms used: **conditioning** or **learned behaviour**.

### Two Examples
1. **Wasp conditioning**: Learning to react to a wasp (from relaxed to panic behaviour after being stung)
2. **Trust-based behaviour**: Buying decisions based on accumulated positive/negative experiences with a shop

### Domain Description — Wasp Case
Before adaptation: IF a wasp is close $\rightarrow$ the individual will **not** panic.
After adaptation: IF a wasp is close $\rightarrow$ the individual **will** panic.

Both relationships define stimulus-response behaviour, but **not the same** — adaptation has taken place from one type of stimulus-response to another.

### Characteristic Patterns
Two types of characteristic patterns for adaptive behaviour:
1. **Result of adaptation**: The dynamic relationship defining the behaviour has changed
2. **Process of adaptation**: External dynamic relationships that define that a process of adaptation takes place

**EAB1** (External Adaptive Behaviour):
For all time points: IF the individual observes that a wasp stings, THEN for all later time points: IF the individual observes a wasp close, THEN the individual will panic.

**EAB2** (Alternative formulation):
For all time points: IF the individual observes a wasp close, AND at an earlier time point the individual observed that a wasp stung, THEN the individual will panic.

**EAB3** (Ouch! response):
For all time points: IF the individual observes that a wasp stings, THEN the individual will scream ouch!

**EAB4** (Before adaptation):
For all time points: IF the individual observes a wasp close, AND at no earlier point in time the individual observed a wasp stung, THEN the individual will **not** show panic.

### Relevant Concepts
Among the concepts that play a central role are observed **experiences** that have a longer-term effect on behaviour:
- **Experiences** — observed events (e.g., being stung)
- **Sensitivity** — internal cognitive state that changes based on experiences (persists over time)
- **Sensory representations** — of stimuli and experiences
- **Preparations and performance** of actions

### The Key Mechanism: Sensitivity States
To realise adaptive behaviour, something (a cognitive state property) should change within the individual, and this change must **persist**. This is done by assuming an internal cognitive state property **s** for **sensitivity**.

Multiple sensitivity states can be used as intermediate states: $s(0)$ (non-sensitive), $s(1)$, $s(2)$, $s(3)$ (highest sensitivity), representing **gradual forms of sensitivity** that accumulate on the basis of a number of experiences.

### Formalisation of Concepts
| Level | Concept | Predicate |
|---|---|---|
| External | Observation of stimuli (wasp close) | observed(wasp_close) |
| External | Observation of experiences (being stung) | observed(stung) |
| External | Action: panic | performed(panic) |
| External | Action: scream ouch! | performed(ouch!) |
| Internal | Sensory representation (of wasp, of being stung) | sr(wasp_close), sr(stung) |
| Internal | Sensitivity (for wasp) | s(0), s(1), ... |
| Internal | Preparation (panic) | prepfor(panic) |
| Internal | Preparation (scream ouch!) | prepfor(ouch!) |

### Internal Dynamic Relationships (One-Step Adaptation)

**IAB1** Sensory representation: $\text{observed}(X) \rightarrow \text{sr}(X)$

**IAB2** Pain from being stung: $\text{sr}(\text{stung}) \rightarrow \text{pain}$

**IAB3** Sensitivity acquisition: $\text{pain} \wedge \text{sr}(\text{wasp\_close}) \wedge s(0) \rightarrow s(1)$

**IAB4** Sensitivity persistence: $s(1) \rightarrow s(1)$ (at all later time points)

**IAB5** Panic preparation: $s(1) \wedge \text{sr}(\text{wasp\_close}) \rightarrow \text{prepfor}(\text{panic})$

**IAB6** Action execution: $\text{prepfor}(X) \rightarrow \text{performed}(X)$

**IAB7** Ouch! preparation: $\text{pain} \rightarrow \text{prepfor}(\text{ouch!})$

Note: **pain** is not persistent (short-term), but **sensitivity s(1)** must be persistent (by IAB4).

### Trust-Based Behaviour (Second Example)

![Prisoner's dilemma — a classic game theory payoff matrix](/assets/images/prisoners-dilemma-matrix.svg)

Trust is a specific type of sensitivity referring to observations of experiences leading to expectations. Trust can be developed over time as the outcome of a series of confirming observations.

**Four internal cognitive trust states:**
| State | Code | Description |
|---|---|---|
| Unconditional trust | ut | Fully trusting |
| Conditional trust | ct | Mostly trusting |
| Conditional distrust | cd | Mostly distrusting |
| Unconditional distrust | ud | Fully distrusting |

**Trust transition rules:**
- Positive experience + ud $\rightarrow$ cd
- Positive experience + cd $\rightarrow$ ct
- Positive experience + ct $\rightarrow$ ut
- Negative experience + ut $\rightarrow$ ct
- Negative experience + ct $\rightarrow$ cd
- Negative experience + cd $\rightarrow$ ud

**Decision rules:**
- ct or ut $\rightarrow$ **to buy** in the shop
- cd or ud $\rightarrow$ **not to buy** in the shop

All trust states are persistent until they are changed by one of the specified rules.

### Worked Example: Trust Trace
Starting with state **ct**, sequence of experiences: +, +, -, +, -, -, +, -, -

| Time | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Input | | + | - | + | - | - | + | - | - | + |
| Internal | ct | ut | ct | ut | ct | cd | ct | cd | ud | cd |
| Output | buy | buy | buy | buy | buy | not buy | buy | not buy | not buy | not buy |

### Assumptions for Adaptive Behaviour Models
- Sensitivity for wasps persists forever
- Sensitivity is created by one experience only (one-step adaptation)
- Sensitivity has an all-or-nothing character (no gradual sensitivities)

### Possible Refinements
- Incorporating precise timings of the steps
- Sensitivity does not persist forever; **extinction** takes place
- Sensitivity has a **gradual character**; it is acquired by a number of experiences (similar to Aplysia conditioning)

---

## Chapter 12: Extended Mind — Mind Extended in the World

### Introduction
Many animals do not only use their internal cognitive structures to support future behaviour. Often the external environment is used. The environment itself serves as external memory/cognition.

The key idea (Clark and Chalmers, 1998): "If, as we confront some task, a part of the world functions as a process which, *were it done in the head*, we would have no hesitation in recognizing as part of the cognitive process, then that part of the world *is* part of the cognitive process."

### Key Aspects of Extended Mind Behaviour
- The environment somehow **participates** in the individual's cognitive processes
- Cognitive processes within the individual are **simplified**
- Interaction with the external world becomes **more intensive**
- The individual has to **rely on the external world**: delegation of some cognitive representations and capabilities (if Little Thumb's pebbles are lost, he is lost; if your to-do list is lost, you are lost!)

### Examples
- **Little Thumb**: Dropping pebbles at crossings while walking forward; on the way back, just follow the pebbles (stimulus-response behaviour replaces internal memory)
- **To-do lists / Desiderata**: Written externally, makes it unnecessary to have internal memory about all items
- **Ants**: Dropping pheromones on the ground; other ants sense and follow the strongest pheromone trail

### Characteristic Patterns
From an external perspective: drop a pebble at each choice point on the way forward, follow pebbles on the way back. Both behaviours are instances of **stimulus-response behaviour**. Disturbances occur when persistence in the external world is not maintained (e.g. pebbles taken by animals).

### Relevant Concepts
- **Observation** (of a crossing, or a pebble at a certain position)
- **Action performance** (drop a pebble, go to a position, change direction)
- **World fact** (of position of pebble, piece of bread, self, animal)

### Global Structure
Two interacting processes:
1. **External behaviour process** — deciding where to put pebbles and where to go
2. **External world process** — tracking world state (pebble positions, self position, direction)

No internal cognitive processes are needed — the **world acts as external memory**.

### Formalisation of Concepts
| Concept | Predicate |
|---|---|
| Observation of self at position | observed(at_position(self, P)) |
| Observation of pebble at position | observed(at_position(pebble, P)) |
| Drop pebble action | performed(drop_pebble) |
| Go to position action | performed(goto(P)) |
| Turn direction action | performed(turn_direction) |
| Pebble at position in world | world_fact(at_position(pebble, P)) |
| Self at position in world | world_fact(at_position(self, P)) |
| Adjacent positions | world_fact(adjacent(P1, P2)) |
| Direction forward | world_fact(direction_forward) |
| Direction backward | world_fact(direction_backward) |

### Key Dynamic Relationships

**LP1 Dropping a pebble (going forward):**
IF observes own position P AND direction is forward AND no pebble at P AND P is not the end point, THEN drop a pebble.

$\text{observed}(\text{at\_position}(\text{self}, P)) \wedge \text{world\_fact}(\text{direction\_forward}) \wedge \neg \text{world\_fact}(\text{at\_position}(\text{pebble}, P)) \rightarrow \text{performed}(\text{drop\_pebble})$

**LP2 Moving forward:**
IF observes position P1 AND adjacent position P2 AND direction is forward AND did not go to P2 yet, THEN go to P2.

**LP3 Turning around:**
IF observes self at end position p3 AND direction is not backward, THEN turn direction.

**LP4 Moving backward to pebbles:**
IF observes pebble at adjacent position P2 AND direction is backward AND observes own position P1, THEN go to P2.

This is purely **stimulus-response behaviour** that simulates delayed response behaviour — no internal memory needed because the external world serves as memory.

### Persistence Rules
- **EP1**: Pebble dropping creates pebble at current position: $\text{world\_fact}(\text{at\_position}(\text{self}, P)) \wedge \text{performed}(\text{drop\_pebble}) \rightarrow \text{world\_fact}(\text{at\_position}(\text{pebble}, P))$
- **EP2**: Pebbles persist at their position (unconditionally)
- **EP5/EP6**: Direction (forward/backward) persists until changed
- **EP7**: Position persists unless the individual moves

### Bread Instead of Pebbles (Non-Persistence)
When using bread instead of pebbles, persistence is conditional:

**EP12**: $\text{world\_fact}(\text{at\_position}(\text{bread}, P)) \wedge \neg \text{world\_fact}(\text{at\_position}(\text{animal}, P)) \rightarrow \text{world\_fact}(\text{at\_position}(\text{bread}, P))$

Bread is only persistent if no animal is present — demonstrating that extended mind relies on the **persistence of external cognitive states**.

### Key Insight
The more complex structures are found in the outside world instead of in the internal part. The internal structures are limited to stimulus-response associations. This illustrates Clark's claim: the more we involve our external world in the cognitive processes, the more intelligent our behaviour can be, without complex internal cognitive processing.

### Further Explorations
- **Shared extended mind**: Pebbles dropped so that others can follow the same route
- **External desiderata**: Using external "to-do lists" instead of internal desires and "to-do lists" instead of internal intentions
- **Ant pheromones**: Similar principles but pheromones decay over time and are shared among society members

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

Application of all modelling concepts to a real-world scenario: modelling driving behaviour with domain models, analysis, and support. This chapter integrates:
- **Domain model**: describing the driving process (speed, distance, road conditions)
- **Analysis model**: observing driving patterns and deriving assessments (e.g. dangerous driving detection)
- **Support model**: given a desired safe driving state, determining recommended actions (e.g. reduce speed, increase following distance)

The driving behaviour model demonstrates how all course concepts come together in a practical application, including the use of both forward and backward reasoning within an agent-based system.

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

## Model Validation and Sensitivity Analysis

### Validation
Validation is the process of checking whether the model is correctly built and whether it represents reality in an adequate way. Done by:
1. Setting up simulation experiments
2. Running simulations to generate traces
3. Comparing traces to expected outcomes (from reality or hypotheses)

### Sensitivity Analysis
Sensitivity analysis examines how changes in parameters affect the model's behaviour:
- Vary one parameter at a time while holding others constant
- Observe how the simulation traces change
- Identify which parameters have the strongest influence on the model's behaviour
- Use this to understand robustness of the model

### Evaluation of Characteristic Patterns
When evaluating, check if the simulation traces match the characteristic patterns:
- Expectations can be based on **reality** (in case of validation)
- Expectations can be based on **hypotheses** (in case of studying a process)
- Characteristic patterns preferably specify effects between concepts that are **not directly connected** (indirect effects are more informative)

---

## Summary of Model Levels and Integration

| Model | Level | Type |
|---|---|---|
| E. coli (Ch. 3) | Physiological | Numerical (binary 0/1) |
| Aplysia (Ch. 4) | Physiological | Numerical (integer + binary) |
| Honeybee (Ch. 5) | Cognitive + Behavioural + Collective | Numerical |
| Epidemics (Ch. 6) | Collective or Individual | Numerical |
| Emotion Contagion (Ch. 7) | Social/Collective | Logical + Numerical |
| Reactive Behaviour (Ch. 9) | Behavioural (external) | Logical |
| Motivation-Based (Ch. 10) | Cognitive (internal) | Logical |
| Adaptive (Ch. 11) | Cognitive (internal) | Logical |
| Extended Mind (Ch. 12) | Behavioural + World | Logical |
| Agent Systems (Ch. 13-14) | Cognitive + Behavioural | Logical |

---

## Key Exam Tips

1. **Conceptualisation** involves: defining scope, identifying concepts, determining relations, formulating expected patterns. It does **NOT** involve choosing between numerical and logical representation (that's formalisation) or deciding on representation of model concepts.
2. **Characteristic patterns** are used to evaluate whether the model behaves as expected. They preferably specify effects between concepts that are not directly connected.
3. The **maximum value** of logistic growth $\text{Amount}(t+\Delta t) = \text{Amount}(t) + \alpha \times \frac{C - \text{Amount}(t)}{C}$ is **$C$**.
4. The E. coli model is at the **physiological** level. The Aplysia model is also at the **physiological** level. The honeybee model integrates cognitive, behavioural, and collective levels.
5. **Population-based** and **individual-based** are the two approaches for modelling social processes. An advantage of population-based is that it allows modelling larger societies.
6. In the BDI model: desire $\rightarrow$ intention $\leftarrow$ belief, and intention $\rightarrow$ action. The intention depends on both a desire AND a belief that the action satisfies the desire.
7. **Sensitivity** is essential for adaptive behaviour but NOT for reactive behaviour. Sensitivity is a persisting internal cognitive state that changes based on experiences.
8. The intelligent agent always uses **both** forward and backward reasoning — the statement that it "always applies forward reasoning" is **incorrect**.
9. Forgetting in the Aplysia model is best modelled by introducing a **decay factor** that reduces synapse strength each time step.
10. In the **extended mind** model, no internal cognitive processes are needed — the external world acts as memory. The behaviour is purely stimulus-response but achieves the effect of delayed response through external state.
11. In the **BDI model**, an action is performed when: (a) there is an intention for the action, AND (b) there is a belief in an opportunity to perform it. The intention is generated when: (a) there is a desire, AND (b) there is a belief that the action will fulfil the desire.
12. **Trust-based behaviour** is a form of adaptive behaviour with four trust states (ut, ct, cd, ud). Positive experiences move trust up one level; negative experiences move it down one level. Trust states determine buying/not buying decisions.
13. In adaptive behaviour, the **sensitivity state persists** (IAB4: $s(1) \rightarrow s(1)$) while **pain does not** persist (it is short-term). This distinction is crucial for understanding why behaviour changes permanently after an experience.
14. **Extended mind** relies on **persistence** of external cognitive states. If the external markers (pebbles, lists) are removed, the behaviour fails — demonstrating the dependency on the external world.
15. When modelling **motivation-based behaviour from an external perspective**, the description involves references to four different time points (complex temporal relationship). From the **internal cognitive perspective**, it can be partitioned into executable steps with only current and next time points.
16. The **practical syllogism** (Aristotle): desire + belief about means $\rightarrow$ intention; intention + belief about opportunity $\rightarrow$ action. This is a **two-step** process (desire $\rightarrow$ intention $\rightarrow$ action), not one step.
`;
