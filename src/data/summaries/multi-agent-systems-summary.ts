/**
 * Comprehensive Multi-Agent Systems Summary — inline markdown content.
 * Compiled from lecture materials (L1–L7) and the MAS Exam Study Guide covering
 * Prolog (facts, rules, queries, unification, pattern matching, backtracking, search trees,
 * negation as failure, recursion, lists, tail recursion, accumulators, cut operator, arithmetic),
 * Agent Theory (agent definition, properties, environment characteristics, percepts/actions,
 * reactive vs pro-active agents), and the MARBEL Framework (file structure, percept handlers,
 * action rules, module flow, belief management, dynamic predicates) for the VU Multi-Agent
 * Systems course.
 */
export const multiAgentSystemsSummary = `
# Multi-Agent Systems — Comprehensive Summary

---

## Part 1: Prolog Fundamentals

### 1.1 What is Prolog?

Prolog (Programming in Logic) is a **declarative logic programming language**. Instead of telling the computer *how* to compute something, you declare *what* is true and let Prolog figure out the answers through logical inference.

Key characteristics:
- **Declarative**: You define facts and rules; Prolog derives conclusions
- **Based on first-order predicate logic** (a subset)
- **Uses backward chaining**: Starts from the query (goal) and works backward to known facts
- **Uses depth-first search** with **backtracking**

### 1.2 Prolog Terms

Everything in Prolog is a **term**. The types of terms are:

| Term Type | Description | Examples |
|-----------|-------------|----------|
| **Atom** | A constant; starts with lowercase or is in single quotes | \`a\`, \`bob\`, \`'Hello World'\`, \`+\` |
| **Number** | An integer or float | \`42\`, \`3.14\` |
| **Variable** | Starts with uppercase letter or underscore | \`X\`, \`Result\`, \`_temp\`, \`_\` |
| **Compound Term** | A functor applied to arguments | \`likes(bob, alice)\`, \`f(g(X))\` |

- \`_\` is the **anonymous variable** — it matches anything and each occurrence is independent.
- A **functor** is defined by its name and **arity** (number of arguments): \`likes/2\`, \`parent/2\`.

### 1.3 Facts, Rules, and Queries

**Facts** state things that are unconditionally true:
\`\`\`prolog
parent(tom, bob).
parent(bob, ann).
likes(bob, pizza).
\`\`\`

**Rules** define conditional relationships (head :- body):
\`\`\`prolog
grandparent(X, Z) :- parent(X, Y), parent(Y, Z).
ancestor(X, Y) :- parent(X, Y).
ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).
\`\`\`

**Queries** ask Prolog to prove something:
\`\`\`prolog
?- parent(tom, bob).
true.

?- grandparent(tom, ann).
true.

?- parent(tom, X).
X = bob.
\`\`\`

---

## Part 2: Unification and Pattern Matching

### 2.1 Unification (\`=\`)

Unification is Prolog's fundamental operation. Two terms unify if they can be made identical by finding appropriate variable substitutions.

**Rules of unification:**
1. A **variable** unifies with any term (and becomes bound to that term)
2. Two **atoms** unify only if they are identical
3. Two **numbers** unify only if they are the same number
4. Two **compound terms** unify if they have the same functor, the same arity, and all corresponding arguments unify

\`\`\`prolog
?- X = 4+3.
X = 4+3.          % NOT X = 7! The term 4+3 is stored as the structure +(4,3)

?- X+Y = 23+8.
X = 23, Y = 8.    % Pattern matching the structure

?- c(A,a) = c(b,B).
A = b, B = a.     % Matching compound terms

?- f(a,g(b)) = f(a,g(X)).
X = b.            % Matching nested compound terms

?- h(X,y) = h(X,z).
false.            % y and z are different atoms, unification fails

?- f(g(X,y,Z)) = f(g(Z,Y,x)).
X = Z, Z = x, Y = y.   % X and Z must be the same, both matched with x

?- time = money.
false.            % Different atoms cannot unify

?- A = 2+3.
A = 2+3.          % A is unified with the TERM 2+3, not evaluated
\`\`\`

**Critical insight**: Arithmetic operators (\`+\`, \`-\`, \`*\`, \`/\`) are just functors in unification. They are NOT evaluated. \`4+3\` is the compound term \`+(4,3)\`, not the number 7.

### 2.2 Arithmetic Evaluation (\`is\`)

The \`is/2\` operator **evaluates** the right-hand side as an arithmetic expression and unifies the result with the left-hand side.

\`\`\`prolog
?- X is 15+15.
X = 30.           % Right side evaluated, X unified with result

?- X is 8 / 2.
X = 4.            % Division evaluated

?- A is 5+5.
A = 10.

?- X+2 is 5.
false.            % Left side must be a single variable or number, not X+2

?- 4*4 is 16.
false.            % Left side is 4*4 (a term), not 16

?- X is 5 x 5.
error.            % 'x' is not a valid arithmetic operator (use *)
\`\`\`

**Common \`is\` pitfalls:**
- All variables on the right-hand side must be **bound** (instantiated) at the time of evaluation
- The left-hand side should be an unbound variable or a number
- \`?- X is Y+1.\` produces an ERROR if Y is not bound

### 2.3 Comparison Operators

| Operator | Meaning |
|----------|---------|
| \`X =:= Y\` | Arithmetic equality (evaluates both sides) |
| \`X =\\\\= Y\` | Arithmetic inequality |
| \`X < Y\` | Less than |
| \`X > Y\` | Greater than |
| \`X =< Y\` | Less than or equal |
| \`X >= Y\` | Greater than or equal |
| \`X = Y\` | Unification (structural match) |
| \`X \\\\= Y\` | Does NOT unify |
| \`X == Y\` | Structurally identical (no binding) |
| \`X \\\\== Y\` | Not structurally identical |

---

## Part 3: Backtracking and Search Trees

### 3.1 How Prolog Searches

Prolog uses three key strategies:
1. **Backward chaining**: Start from the query (goal), work backward through rules to reach known facts
2. **Depth-first search (DFS)**: Fully explore one branch before trying alternatives
3. **Top-to-bottom, left-to-right**: Clauses are tried in the order they appear in the knowledge base; goals in a rule body are resolved left to right

### 3.2 Worked Example: Search Tree

Given the knowledge base:
\`\`\`prolog
a(X) :- x(X), y(X), z(X).
x(n). x(p).
y(n). y(p).
z(p).
\`\`\`

Query: \`?- a(Y).\`

**Step-by-step execution:**
1. Match \`a(Y)\` with \`a(X)\` -> body becomes: \`x(Y), y(Y), z(Y)\`
2. Try \`x(Y)\` -> first match: \`Y = n\`
3. With \`Y = n\`: try \`y(n)\` -> succeeds
4. With \`Y = n\`: try \`z(n)\` -> **fails** (no \`z(n)\` fact exists)
5. **Backtrack**: try next \`x(Y)\` match: \`Y = p\`
6. With \`Y = p\`: try \`y(p)\` -> succeeds
7. With \`Y = p\`: try \`z(p)\` -> succeeds
8. **Result**: \`Y = p\`

### 3.3 Branch Outcomes

When analyzing a search tree, every branch ends in one of three ways:

| Outcome | Meaning |
|---------|---------|
| **Success** | All goals in the branch are satisfied |
| **Failure** | Some goal cannot be satisfied; Prolog backtracks |
| **Infinite** | The branch loops forever (typically due to left-recursion) |

### 3.4 Infinite Loops and Left-Recursion

\`\`\`prolog
r(X,Y) :- f(X,Z), r(Z,Y).   % Recursive rule listed FIRST
r(X,Y) :- f(X,Y).            % Base case listed SECOND
f(a,b). f(b,c). f(c,d).
\`\`\`

Query \`?- r(a,d).\` works, but if we add \`f(d,a).\`, the query \`?- r(a,X).\` creates a cycle: a -> b -> c -> d -> a -> ... leading to an infinite branch.

**Key principle**: If the recursive rule appears before the base case, Prolog always tries the recursive branch first, which can cause infinite loops.

### 3.5 Incompleteness

**Definition**: Prolog's proof search does not always find a derivation, even if one logically exists.

**Cause**: Depth-first search can get trapped in an infinite branch, preventing Prolog from ever reaching a solution that exists on another branch. This makes Prolog's search strategy **sound but incomplete**.

---

## Part 4: Negation as Failure

### 4.1 How It Works

\`not/1\` (or \`\\\\+\`) succeeds if its argument **cannot be proven**. This is called **negation as finite failure**.

\`\`\`prolog
?- not(a = 4).
false.            % a can never unify with 4... wait, a and 4 are different,
                  % so a = 4 fails, so not(a = 4) is true!

?- not(A = 4).
false.            % A CAN be unified with 4 (A is a variable), so not() fails

?- \\+(N = 5).
false.            % Same — N can unify with 5
\`\`\`

**Key insight**: With unbound variables, unification almost always succeeds (a variable can unify with anything), so \`not()\` on a unification with an unbound variable almost always fails.

### 4.2 Floundering

Floundering occurs when negation (\`not/1\` or \`\\\\+\`) is called with **unbound variables**, producing unexpected or incorrect results.

\`\`\`prolog
% Dangerous — X is unbound:
holding(X) :- not(on(X, table)).

% Safe version — bind X first:
holding(Nr) :- can(Nr), not(on(Nr, table)), not(in(Nr, _)).
\`\`\`

**Rule of thumb**: Always ensure variables are bound before using them inside negation.

---

## Part 5: Lists in Prolog

### 5.1 List Notation

- Empty list: \`[]\`
- Non-empty list: \`[Head|Tail]\` where Head is the first element and Tail is the rest (also a list)
- Explicit: \`[a, b, c]\` is equivalent to \`[a | [b | [c | []]]]\`

\`\`\`prolog
?- [H|T] = [1, 2, 3].
H = 1, T = [2, 3].

?- [A, B | R] = [x, y, z, w].
A = x, B = y, R = [z, w].

?- [H|T] = [only].
H = only, T = [].
\`\`\`

### 5.2 List Recursion Pattern

The standard structure for processing lists:
\`\`\`prolog
% Base case: empty list
predicate([], BaseResult).

% Recursive case: process head, recurse on tail
predicate([H|T], Result) :-
    predicate(T, SubResult),
    % Combine H with SubResult to get Result.
\`\`\`

### 5.3 Common List Operations

**Count elements:**
\`\`\`prolog
count([], 0).
count([_|T], N) :- count(T, N1), N is N1 + 1.
\`\`\`

**Sum elements:**
\`\`\`prolog
sum([], 0).
sum([H|T], S) :- sum(T, S1), S is S1 + H.
\`\`\`

**Multiply elements:**
\`\`\`prolog
multiply([X], X).
multiply([H|T], M) :- multiply(T, M1), M is M1 * H.
\`\`\`

**Replace elements:**
\`\`\`prolog
replace(_, _, [], []).
replace(Old, New, [Old|T], [New|T2]) :- replace(Old, New, T, T2).
replace(Old, New, [H|T], [H|T2]) :- H \\= Old, replace(Old, New, T, T2).
\`\`\`

**Member check (built-in):**
\`\`\`prolog
member(X, [X|_]).
member(X, [_|T]) :- member(X, T).
\`\`\`

**Append (built-in):**
\`\`\`prolog
append([], L, L).
append([H|T1], L2, [H|T3]) :- append(T1, L2, T3).
\`\`\`

**Last N elements:**
\`\`\`prolog
lastN(L, N, R) :- length(L, Len), Skip is Len - N, lastN_skip(L, Skip, R).
lastN_skip(L, 0, L).
lastN_skip([_|T], N, R) :- N > 0, N1 is N - 1, lastN_skip(T, N1, R).
\`\`\`

**Insert in ordered list:**
\`\`\`prolog
position(X, [], [X]).
position(X, [H|T], [X,H|T]) :- X >= H.
position(X, [H|T], [H|R]) :- X < H, position(X, T, R).
\`\`\`

---

## Part 6: Recursion, Tail Recursion, and Accumulators

### 6.1 Simple (Left) Recursion

In simple recursion, the recursive call is **not** the last operation. Additional computation happens after the recursive call returns.

\`\`\`prolog
length([], 0).
length([_|T], N) :- length(T, N1), N is N1 + 1.
\`\`\`

**Problem**: Must store all stack frames until the base case is reached, then compute results going back up. Uses O(n) stack space.

### 6.2 Tail Recursion with Accumulators

In tail recursion, the recursive call **is** the last operation. An **accumulator** carries the partial result through the recursive calls.

\`\`\`prolog
% Wrapper predicate
length(L, N) :- length_acc(L, 0, N).

% Base case: accumulator IS the result
length_acc([], Acc, Acc).

% Recursive case: update accumulator, recurse (tail position)
length_acc([_|T], Acc, N) :- Acc1 is Acc + 1, length_acc(T, Acc1, N).
\`\`\`

**Advantage**: No need to store intermediate results. Constant stack space O(1).

### 6.3 Accumulator Pattern

\`\`\`prolog
% General pattern:
predicate(Input, Result) :- predicate_acc(Input, InitialAcc, Result).
predicate_acc(BaseCase, Acc, Acc).            % Acc becomes result
predicate_acc(RecCase, Acc, Result) :-
    NewAcc = ...,                             % Update accumulator
    predicate_acc(Smaller, NewAcc, Result).   % Tail call
\`\`\`

### 6.4 Remove Duplicates (Accumulator Example)

\`\`\`prolog
remdup(In, Out) :- remdup_acc(In, [], Out).
remdup_acc([], Acc, Acc).
remdup_acc([H|T], Acc, Out) :- member(H, Acc), remdup_acc(T, Acc, Out).
remdup_acc([H|T], Acc, Out) :- \\+ member(H, Acc), remdup_acc(T, [H|Acc], Out).
\`\`\`

### 6.5 Reverse/Mirror List (Accumulator Example)

\`\`\`prolog
mirror(L, M) :- mirror_acc(L, [], M).
mirror_acc([], Acc, Acc).
mirror_acc([H|T], Acc, M) :- mirror_acc(T, [H|Acc], M).
\`\`\`

### 6.6 Converting Left-Recursion to Tail-Recursion

**Original (left-recursive):**
\`\`\`prolog
eNSum([X|_], 1, X).
eNSum([X|T], N, S) :- N > 1, N1 is N-1, eNSum(T, N1, S1), S is S1 + X.
\`\`\`

**Tail-recursive version:**
\`\`\`prolog
eNSum(L, N, S) :- eNSum_acc(L, N, 0, S).
eNSum_acc([X|_], 1, Acc, S) :- S is Acc + X.
eNSum_acc([X|T], N, Acc, S) :- N > 1, N1 is N-1, Acc1 is Acc + X, eNSum_acc(T, N1, Acc1, S).
\`\`\`

### 6.7 Reachability

A predicate \`predQ\` is **reachable** from predicate \`predR\` if:
1. There is a rule where \`predR\` is the head and \`predQ\` appears in the body, OR
2. There is a chain of predicates connecting them

A predicate is **recursive** if it is reachable from itself.

---

## Part 7: The Cut Operator

### 7.1 What is Cut (\`!\`)?

The cut operator \`!\` prunes the search tree. When Prolog passes through a cut:
- It **commits** to the current clause (no backtracking to try other clauses for this predicate)
- It **commits** to all variable bindings made before the cut in this clause
- Backtracking is still allowed **after** the cut within the same clause body

### 7.2 Green Cut vs Red Cut

| Type | Description | Effect on Results |
|------|-------------|-------------------|
| **Green cut** | Removes unnecessary computation; same results with or without it | No change to correctness |
| **Red cut** | Changes the program's behavior; removing it gives different results | Alters correctness |

### 7.3 Cut Example

\`\`\`prolog
max(X, Y, X) :- X >= Y, !.
max(_, Y, Y).
\`\`\`

Without the cut, \`max(5, 3, X)\` could also try the second clause. The cut makes it efficient — once we know \`X >= Y\`, no need to try the other clause. This is a **green cut** because the second clause would fail anyway for this input.

---

## Part 8: Agent Theory

### 8.1 What is an Agent?

An agent is a computer system situated in an environment that is capable of **autonomous action** to meet its design objectives. The agent perceives the environment through **sensors** (percepts) and acts upon it through **actuators** (actions).

### 8.2 Environment Properties

| Property | Options | Description |
|----------|---------|-------------|
| **Observability** | Fully / Partially | Can the agent see everything relevant for decision-making? |
| **Determinism** | Deterministic / Stochastic | Are action effects completely predictable? |
| **Dynamics** | Static / Dynamic | Does the environment change independently of the agent? |
| **Discreteness** | Discrete / Continuous | Are there a finite number of distinct states and actions? |
| **Agent count** | Single / Multi-agent | Is there one agent or multiple agents acting? |

**Detailed explanations:**

- **Fully observable**: The agent's sensors give it access to the complete state of the environment at each point in time. **Partially observable**: The agent has incomplete or noisy sensor information.

- **Deterministic**: The next state of the environment is completely determined by the current state and the agent's action. **Stochastic**: There is uncertainty in the outcome of actions.

- **Static**: The environment only changes as a result of the agent's actions. **Dynamic**: The environment can change while the agent is deliberating.

- **Discrete**: A finite number of distinct percepts, actions, and states. **Continuous**: Infinite/smooth range of values.

- **Single-agent**: Only one agent operates in the environment. **Multi-agent**: Multiple agents act, possibly cooperating or competing.

### 8.3 Why Agents Need Percepts

Agents must continuously monitor the environment because:
1. **Dynamic environments**: Changes happen independently of the agent
2. **Stochastic effects**: Action outcomes are not guaranteed
3. **Multi-agent interference**: Other agents may change the environment
4. **Action failure**: Actions (especially durative ones) may fail or be interrupted

### 8.4 Intelligent Agent Characteristics (Wooldridge & Jennings)

| Property | Description |
|----------|-------------|
| **Reactive** | Responds to changes in the environment in a timely manner |
| **Pro-active** | Takes initiative; works toward goals, not just responding to events |
| **Social** | Able to communicate and cooperate with other agents |
| **Autonomous** | Operates without direct human intervention; controls its own actions and internal state |

The challenge in agent design is balancing **reactivity** (responding to changes) with **pro-activity** (pursuing goals). Too reactive and the agent is purely stimulus-driven; too pro-active and it ignores important environmental changes.

### 8.5 Percepts and Actions

- A **percept** is information the agent receives from the environment via sensors
- An **action** is something the agent does to affect the environment

**Types of actions:**

| Type | Description | Example |
|------|-------------|---------|
| **Instantaneous** | Completes immediately; result is available right away | Picking up an item (in simplified models) |
| **Durative** | Takes time to complete; agent may receive feedback during execution | Moving to a location, charging a battery |

### 8.6 Handling Durative Actions

When an agent is performing a durative action and receives a new action request, possible responses include:
1. **Queue**: Wait until the current action completes, then start the new one
2. **Interrupt/Cancel**: Stop the current action and begin the new one
3. **Reject**: Refuse the new action, continue with the current one
4. **Fail**: Both actions may fail due to conflict

---

## Part 9: MARBEL Framework

### 9.1 Overview

MARBEL (Multi-Agent Rational BEhavior Language) is a framework for programming cognitive agents. Agents have **beliefs** (what they know), **goals** (what they want to achieve), and **action rules** (how to decide what to do).

### 9.2 File Structure

| File | Extension | Purpose |
|------|-----------|---------|
| Main config | \`.mas2g\` | Defines the agent, launch policy, percept handlers, and module references |
| Init module | \`.mod2g\` | Initialization module; runs once at startup to set up initial beliefs |
| Decision module | \`.mod2g\` | Main decision module; contains action rules for agent behavior |
| Knowledge base | \`.pl\` | Prolog knowledge base; facts, rules, and dynamic predicate declarations |

### 9.3 The .mas2g File

The main configuration file defines:
- Which agent program files to use
- How percepts are handled
- Launch policy

**Percept handler syntax:**
\`\`\`
add percept/arity.
update percept/arity.
replace percept/arity.
\`\`\`

### 9.4 Percept Handlers

| Handler | Percept Type | Behavior |
|---------|-------------|----------|
| \`add\` | **send once** | Adds percept to belief base once; never removed automatically |
| \`update\` | **send on-change** | Removes old value, adds new value when it changes |
| \`replace\` | **send always** | Replaces all matching percepts every cycle |

**Example configuration:**
\`\`\`
% Color is sent once at the start of the game
add color/2.

% Location updates when the robot moves
update at/1.

% Dust percepts are sent every cycle
replace dust/1.
\`\`\`

**How to choose the right handler:**
- If the percept is sent **once** and never changes -> \`add\`
- If the percept is sent only **when its value changes** -> \`update\`
- If the percept is sent **every cycle** regardless of changes -> \`replace\`

### 9.5 The .pl File (Knowledge Base)

Contains Prolog facts, rules, and **dynamic predicate declarations**.

**Dynamic declarations are mandatory** for any predicate that:
- Is used in percept handling
- Is modified by \`insert\` or \`delete\` operations

\`\`\`prolog
:- dynamic at/1, battery/1, carrying/0, dust/1, visited/1.

% Static rules
recharge :- battery(Level), Level < 10.
inOffice :- at(X), X \\= 0.
\`\`\`

### 9.6 The .mod2g File (Modules)

Modules contain **action rules** that define agent behavior.

**Action rule syntax:**
\`\`\`prolog
if <condition> then <action>.
\`\`\`

Where:
- \`<condition>\` queries the agent's belief base and/or goal base
- \`<action>\` is an environment action, a belief update, or both

**Belief updates within action rules:**
\`\`\`prolog
% Simple action
if goal(deliver(X)), at(X) then deliver.

% Action combined with belief insertion
if at(0) then getCoffee + insert(has(coffee)).

% Action combined with belief deletion
if carrying, at(kitchen) then putInBin + delete(carrying).

% Multiple insertions
if true then insert(office(0), office(1), office(2)).
\`\`\`

**Key operators:**
- \`+\` combines an environment action with belief updates
- \`insert(fact)\` adds a belief to the belief base
- \`delete(fact)\` removes a belief from the belief base

### 9.7 Module Options

**Order options** (how rules are selected from the module):

| Option | Behavior |
|--------|----------|
| \`linear\` | Try rules top-to-bottom; execute the first applicable rule |
| \`linearrandom\` | Try rules in a random order; execute the first applicable rule found |
| \`random\` | Collect all applicable rules and randomly select one to execute |

**Exit options** (when to leave the module):

| Option | Behavior |
|--------|----------|
| \`exit=always\` | Exit the module after executing any single action |
| \`exit=never\` | Never exit; keep looping through the rules |
| \`exit=noaction\` | Exit only when no rule is applicable (no action can be performed) |

### 9.8 Agent Execution Cycle

The agent runs through a cycle on each decision round:

1. **Init**: Run the initialization module (first cycle only)
2. **Percept Processing**: Receive percepts from the environment
3. **Update Beliefs**: Apply percept handlers to update the belief base
4. **Decision Making**: Evaluate action rules in the decision module
5. **Action Execution**: Perform the selected action in the environment

Then the cycle repeats from step 2.

### 9.9 Module Flow and Submodules

\`\`\`prolog
% In main module (exit=always by default)
if condition1 then action1.              % Line 5
if condition2 then submodule.            % Line 7 — enters submodule
if true then defaultAction.              % Line 9 — fallback
\`\`\`

When a submodule is entered:
1. Execute rules within the submodule according to its own order and exit options
2. When the submodule exits, control returns to the parent module
3. The parent module then continues based on its own exit option

### 9.10 Common MARBEL Programming Tasks

**Initialize beliefs (in init module):**
\`\`\`prolog
if true then insert(office(0), office(1), office(2), office(3), office(4), office(5)).
if true then insert(place(kitchen), place(living), place(bathroom)).
\`\`\`

**Prolog helper predicates (in .pl file):**
\`\`\`prolog
recharge :- battery(Level), Level < 10.
inOffice :- at(X), X \\= 0.
allVisited :- not((office(X), not(visited(X)))).
\`\`\`

**Handling instantaneous actions with belief tracking:**
\`\`\`prolog
% Get coffee (instantaneous — no percept confirms it, so track with belief)
if at(0), not(has(coffee)) then getCoffee + insert(has(coffee)).

% Deliver coffee (instantaneous — remove tracking belief)
if has(coffee), at(Office), delivery(Office) then
    deliverCoffee + delete(has(coffee)).
\`\`\`

### 9.11 Why Certain Checks Are Unnecessary

A common exam question asks: "Why don't we need to check condition X in rule N?"

**Answer pattern**: Because of the \`linear\` module option and rule ordering. If rule N-1 checks for condition X and would have fired if X were true, then reaching rule N implies X is false. There is no need to explicitly check \`not(X)\`.

**Example:**
\`\`\`prolog
% Line 5: if binEmpty, ... then clean.
% Line 7: if ... then empty.
\`\`\`
"Why don't we need \`not(binEmpty)\` in line 7?"
Because if \`binEmpty\` were true, line 5 would have been selected (with \`linear\` order, it comes first), so we would never reach line 7.

---

## Part 10: Quick Reference — Common Exam Mistakes

1. **Confusing \`=\` and \`is\`**: \`X = 3+4\` gives \`X = 3+4\`, NOT \`X = 7\`. Use \`X is 3+4\` for arithmetic.

2. **Forgetting dynamic declarations**: Any predicate modified by percepts, \`insert\`, or \`delete\` must be declared with \`:- dynamic pred/arity.\`

3. **Wrong percept handler**: Use \`add\` for send-once, \`update\` for send-on-change, \`replace\` for send-always.

4. **Floundering with negation**: Do not use \`not(X)\` or \`\\\\+(X)\` when variables inside are unbound. Bind them first.

5. **Forgetting base cases**: Every recursive predicate needs a base case to terminate.

6. **Left vs right side of \`is\`**: Left must be a variable or number; right is the expression to evaluate.

7. **Left-recursion causing infinite loops**: If the recursive clause comes before the base case, Prolog may loop infinitely.

8. **Instantaneous vs durative action tracking**: For instantaneous actions with no confirming percept, use \`insert\`/\`delete\` to track state manually.

---

## Exam Strategy

| Section | Weight | Tips |
|---------|--------|------|
| Prolog Queries | ~10 pts | Carefully distinguish \`=\` vs \`is\`; trace each step |
| Search Trees | ~10 pts | Draw the tree step by step; mark success/failure/infinite branches |
| Prolog Concepts | ~5-10 pts | Know definitions: incompleteness, reachability, floundering |
| Prolog Programming | ~15-20 pts | Practice writing predicates; use accumulators for efficiency |
| Agent Theory | ~8 pts | Memorize environment properties and agent characteristics |
| MARBEL Programming | ~40 pts | Practice reading/modifying code; know percept handlers and module options |

**Time management**: 2:45 hours for ~100 points — approximately 1.5 minutes per point.
`;
