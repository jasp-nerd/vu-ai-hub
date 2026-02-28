# Multi-Agent Systems - Exam Study Guide

This guide covers all topics that appear consistently across practice exams. Each section includes the key concepts and worked examples in exam format.

---

## Part 1: Prolog Queries (≈10 points on exam)

### 1.1 Unification vs Arithmetic

**Critical distinction**: `=` performs **unification** (pattern matching), while `is` performs **arithmetic evaluation**.

#### Unification (`=`)
Unification matches terms structurally. It does NOT evaluate arithmetic expressions.

```prolog
?- X = 4+3.
X = 4+3.          % NOT X = 7! The term 4+3 is stored as-is

?- X+Y = 23+8.
X = 23, Y = 8.    % Pattern matching the structure

?- A = 2+3.
A = 2+3.          % A is unified with the TERM 2+3

?- c(A,a) = c(b,B).
A = b, B = a.     % Matching compound terms

?- f(a,g(b)) = f(a,g(X)).
X = b.            % Matching nested compound terms

?- h(X,y) = h(X,z).
false.            % y ≠ z, unification fails

?- f(g(X,y,Z)) = f(g(Z,Y,x)).
X = Z, Z = x, Y = y.   % X and Z must be same, matched with x; Y matches y

?- time = money.
false.            % Different atoms cannot unify

?- a = b.
false.            % Different atoms
```

**Key rules for unification**:
- Variables unify with anything
- Constants unify only with identical constants
- Compound terms unify if: same functor, same arity, all arguments unify
- Arithmetic operators (+, -, *, /) are just functors - they're NOT evaluated

#### Arithmetic (`is`)
The `is` operator evaluates the right-hand side arithmetically and unifies with the left.

```prolog
?- X is 15+15.
X = 30.           % Right side evaluated, X unified with result

?- X is 8 / 2.
X = 4.            % Division evaluated

?- A is 5+5.
A = 10.

?- X+2 is 5.
false.            % Left side must be a variable or number, not X+2

?- 4*4 is 16.
false.            % Left side is 4*4 (a term), not 16

?- X is 5 x 5.
error.            % 'x' is not a valid operator (use *)
```

**Common `is` errors**:
- Uninstantiated variable on the right: `?- X is Y+1.` → ERROR (if Y not bound)
- Expression on left side: `?- X+2 is 5.` → false

### 1.2 Negation as Failure

`not/1` (or `\+`) succeeds if its argument **cannot be proven**.

```prolog
?- not(A=4).
false.            % A CAN be unified with 4, so not() fails

?- \+(N=5).
false.            % Same reason - N can unify with 5
```

**Key insight**: With unbound variables, unification almost always succeeds, so `not()` fails.

---

## Part 2: Prolog Search Trees (≈10 points on exam)

### 2.1 How Prolog Searches

Prolog uses:
- **Backward chaining**: Start from the query, work backward through rules
- **Depth-first search**: Fully explore one branch before trying alternatives
- **Top-to-bottom, left-to-right**: Rules are tried in order they appear in the knowledge base

### 2.2 Reading Search Trees

Given a knowledge base:
```prolog
a(X) :- x(X), y(X), z(X).
x(n). x(p).
y(n). y(p).
z(p).
```

Query: `?- a(Y).`

**Step-by-step**:
1. Match `a(Y)` with `a(X)` → body becomes: `x(Y), y(Y), z(Y)`
2. Try `x(Y)` → first match: `Y = n`
3. With `Y = n`: try `y(n)` → succeeds
4. With `Y = n`: try `z(n)` → **fails** (no `z(n)` fact)
5. **Backtrack**: try next `x(Y)` match: `Y = p`
6. With `Y = p`: try `y(p)` → succeeds
7. With `Y = p`: try `z(p)` → succeeds
8. **Result**: `Y = p` (success)

### 2.3 Identifying Branch Outcomes

**Success**: A branch that eventually satisfies all goals.
**Failure**: A branch where some goal cannot be satisfied.
**Infinite**: A branch that loops forever (usually due to left-recursion).

Example of infinite loop:
```prolog
r(X,Y) :- f(X,Z), r(Z,Y).   % Recursive rule (first)
r(X,Y) :- f(X,Y).            % Base case (second)
f(a,b). f(b,c). f(c,d).
```

Query `?- r(a,d).` will:
1. Try first rule: needs `f(a,Z)` → `Z=b`, then `r(b,d)`
2. For `r(b,d)`: try first rule again → needs `f(b,Z)` → `Z=c`, then `r(c,d)`
3. Continue until success

But if we add `f(d,a).`, query `?- r(a,X).` creates a cycle: a→b→c→d→a→...

### 2.4 Key Terminology

- **Backtracking**: When Prolog fails, it returns to the most recent choice point and tries the next alternative
- **Backward chaining**: Working from goal to facts (opposite of forward chaining)
- **Unification**: The process of making two terms identical by finding appropriate variable substitutions

---

## Part 3: Prolog Concepts (≈5-10 points on exam)

### 3.1 Incompleteness

**Definition**: Prolog's proof search does not always find a derivation, even if one exists.

**Cause**: Depth-first search can get trapped in infinite branches, missing solutions in other branches.

### 3.2 Recursion and Tail Recursion

**Simple/Left recursion** (less efficient):
```prolog
% Recursive call is NOT the last operation
length([], 0).
length([_|T], N) :- length(T, N1), N is N1 + 1.
```
Problem: Must store all stack frames until base case, then compute results going back up.

**Tail recursion** (more efficient):
```prolog
% Recursive call IS the last operation - uses accumulator
length(L, N) :- length_acc(L, 0, N).
length_acc([], Acc, Acc).
length_acc([_|T], Acc, N) :- Acc1 is Acc + 1, length_acc(T, Acc1, N).
```
Advantage: No need to store intermediate results; constant stack space.

### 3.3 Accumulators

An accumulator is an extra argument that "carries" the partial result through recursive calls.

**Pattern**:
```prolog
% Wrapper predicate
predicate(Input, Result) :- predicate_acc(Input, InitialAcc, Result).

% Base case: when done, accumulator becomes result
predicate_acc([], Acc, Acc).

% Recursive case: update accumulator, continue
predicate_acc([H|T], Acc, Result) :- 
    NewAcc is Acc + H,  % or some update
    predicate_acc(T, NewAcc, Result).
```

**Why accumulators are efficient**: They enable tail recursion, avoiding stack buildup.

### 3.4 Reachability (Predicates)

A predicate `predQ` is **reachable** from predicate `predR` if:
1. There is a rule where `predR` is the head and `predQ` appears in the body, OR
2. There is a chain of predicates connecting them

A predicate is **recursive** if it is reachable from itself.

### 3.5 Floundering

Floundering occurs when negation (`not/1` or `\+`) is called with unbound variables.

```prolog
% This can flounder:
holding(X) :- not(on(X, table)).  % If X is unbound, problematic!

% Safe version - ensure X is bound first:
holding(Nr) :- can(Nr), not(on(Nr, table)), not(in(Nr, _)).
```

---

## Part 4: Prolog Programming (≈15-20 points on exam)

### 4.1 List Recursion Pattern

**Standard structure**:
```prolog
% Base case: empty list
predicate([], BaseResult).

% Recursive case: process head, recurse on tail
predicate([H|T], Result) :- 
    predicate(T, SubResult),
    % Combine H with SubResult to get Result
```

### 4.2 Common Programming Tasks

#### Example 1: Count elements
```prolog
count([], 0).
count([_|T], N) :- count(T, N1), N is N1 + 1.
```

#### Example 2: Sum elements
```prolog
sum([], 0).
sum([H|T], S) :- sum(T, S1), S is S1 + H.
```

#### Example 3: Multiply elements
```prolog
multiply([X], X).  % Base: single element
multiply([H|T], M) :- multiply(T, M1), M is M1 * H.
```

#### Example 4: Replace elements
```prolog
replace(_, _, [], []).
replace(Old, New, [Old|T], [New|T2]) :- replace(Old, New, T, T2).
replace(Old, New, [H|T], [H|T2]) :- H \= Old, replace(Old, New, T, T2).
```

#### Example 5: Remove duplicates (with accumulator)
```prolog
remdup(In, Out) :- remdup_acc(In, [], Out).
remdup_acc([], Acc, Acc).
remdup_acc([H|T], Acc, Out) :- member(H, Acc), remdup_acc(T, Acc, Out).
remdup_acc([H|T], Acc, Out) :- \+ member(H, Acc), remdup_acc(T, [H|Acc], Out).
```

#### Example 6: Mirror/Reverse list (with accumulator)
```prolog
mirror(L, M) :- mirror_acc(L, [], M).
mirror_acc([], Acc, Acc).
mirror_acc([H|T], Acc, M) :- mirror_acc(T, [H|Acc], M).
```

#### Example 7: Last N elements
```prolog
lastN(L, N, R) :- length(L, Len), Skip is Len - N, lastN_skip(L, Skip, R).
lastN_skip(L, 0, L).
lastN_skip([_|T], N, R) :- N > 0, N1 is N - 1, lastN_skip(T, N1, R).
```

#### Example 8: Insert in ordered list
```prolog
position(X, [], [X]).
position(X, [H|T], [X,H|T]) :- X >= H.
position(X, [H|T], [H|R]) :- X < H, position(X, T, R).
```

### 4.3 Converting Left-Recursion to Tail-Recursion

**Original (left-recursive)**:
```prolog
eNSum([X|_], 1, X).
eNSum([X|T], N, S) :- N > 1, N1 is N-1, eNSum(T, N1, S1), S is S1 + X.
```

**Tail-recursive version**:
```prolog
eNSum(L, N, S) :- eNSum_acc(L, N, 0, S).
eNSum_acc([X|_], 1, Acc, S) :- S is Acc + X.
eNSum_acc([X|T], N, Acc, S) :- N > 1, N1 is N-1, Acc1 is Acc + X, eNSum_acc(T, N1, Acc1, S).
```

---

## Part 5: Agent Theory (≈8 points on exam)

### 5.1 Environment Properties

**You WILL be asked to explain one property and list two others.**

| Property | Description |
|----------|-------------|
| **Fully/Partially Observable** | Agent can (cannot) see everything relevant for decision-making |
| **Deterministic/Stochastic** | Effects of actions are (not) completely predictable |
| **Static/Dynamic** | Environment changes only through agent actions (or changes independently) |
| **Discrete/Continuous** | Finite (infinite) number of distinct states/actions |
| **Single/Multi-agent** | One (more than one) agent performing actions |

### 5.2 Why Agents Need Percepts

Agents must monitor the environment because:
1. **Dynamic environment**: Changes happen independently of the agent
2. **Stochastic effects**: Action outcomes aren't guaranteed
3. **Multi-agent**: Other agents may interfere
4. **Action failure**: Durative actions may fail or be interrupted

### 5.3 Intelligent Agent Characteristics

From Wooldridge & Jennings:
- **Reactive**: Responds to environmental changes
- **Pro-active**: Takes initiative toward goals
- **Social**: Can communicate and cooperate
- **Autonomous**: Controls its own processes

### 5.4 Durative Actions

When an entity is performing a durative action and receives a new action request:
1. **Queue the action**: Wait until current action completes
2. **Interrupt/Cancel**: Stop current action, start new one
3. **Reject**: Refuse new action, continue current
4. **Fail**: Both actions may fail due to conflict

---

## Part 6: MARBEL Programming (≈40 points on exam)

### 6.1 File Structure

| File | Purpose |
|------|---------|
| `agent.mas2g` | Main configuration: defines agent, percept handlers, modules |
| `agentInit.mod2g` | Initialization module: runs once at startup |
| `agent.mod2g` | Main decision module: contains action rules |
| `agent.pl` | Prolog knowledge base: facts, rules, dynamic predicates |

### 6.2 Percept Handlers

**In the .mas2g file**, specify how percepts are processed:

| Handler | Use Case | Behavior |
|---------|----------|----------|
| `add` | **send once** percepts | Adds percept to belief base once |
| `update` | **send on-change** percepts | Removes old, adds new value |
| `replace` | **send always** percepts | Replaces all matching percepts |

**Syntax in .mas2g**:
```
add percept/arity.
update percept/arity.
replace percept/arity.
```

**Example**:
```
% For color that's sent once at start
add color/2.

% For location that updates when robot moves
update at/1.

% For dust that's always sent
replace dust/1.
```

### 6.3 Declaring Dynamic Predicates

Any predicate used in percepts or modified by insert/delete **must be declared** in the .pl file:

```prolog
:- dynamic at/1, battery/1, carrying/0, dust/1.
```

### 6.4 Action Rules

**Syntax**: `if <condition> then <action>.`

```prolog
% Simple rule
if goal(deliver(X)), at(X) then deliver.

% Rule with belief update
if at(0) then getCoffee + insert(has(coffee)).

% Rule with deletion
if carrying, at(kitchen), hasBin(kitchen) then putInBin + delete(carrying).
```

**Key operators**:
- `+` combines action with belief updates
- `insert(fact)` adds belief
- `delete(fact)` removes belief

### 6.5 Module Options

**Order options** (how rules are selected):
- `linear`: Try rules top-to-bottom, stop at first applicable
- `linearrandom`: Try rules in random order
- `random`: Select randomly from all applicable rules

**Exit options**:
- `exit=always`: Exit module after any action
- `exit=never`: Never exit (loop through rules)
- `exit=noaction`: Exit only when no action can be performed

### 6.6 Common MARBEL Tasks

#### Initialize beliefs (in Init module):
```prolog
if true then insert(office(0), office(1), office(2), office(3), office(4), office(5)).
if true then insert(place(kitchen), place(living), place(bathroom)).
```

#### Prolog predicate for threshold:
```prolog
% In .pl file
recharge :- battery(Level), Level < 10.
inOffice :- at(X), X \= 0.
```

#### Handling instantaneous actions with belief tracking:
```prolog
% Get coffee (instantaneous, no percept)
if at(0), not(has(coffee)) then getCoffee + insert(has(coffee)).

% Deliver coffee (instantaneous)
if has(coffee), at(Office), delivery(Office) then 
    deliverCoffee + delete(has(coffee)).
```

### 6.7 Why Certain Checks Are Unnecessary

**Common exam question**: "Why don't we need to add X to the query?"

**Answer pattern**: Because of rule ordering. If rule N checks for condition X, and rule N+1 would only be reached if rule N didn't apply, then X is already known to be false when we reach rule N+1.

**Example**:
```prolog
% Line 5: if binEmpty, ... then clean.
% Line 7: if ... then empty.
```
"Why don't we need `not(binEmpty)` in line 7?"
→ Because if `binEmpty` were true, line 5 would have been selected, so we'd never reach line 7.

### 6.8 Module Flow

```prolog
% In main module (exit=always by default)
if condition1 then action1.              % Line 5
if condition2 then submodule.            % Line 7 - enters submodule
if true then defaultAction.              % Line 9 - fallback
```

When a submodule is entered:
1. Execute rules in submodule
2. Based on exit option, return to parent or loop
3. Parent module continues from where it left off (not from beginning)

---

## Quick Reference: Common Exam Mistakes

1. **Confusing `=` and `is`**: `X = 3+4` gives `X = 3+4`, not `X = 7`

2. **Forgetting dynamic declarations**: Always declare predicates that change

3. **Wrong percept handler**: Use `add` for once, `update` for on-change, `replace` for always

4. **Missing line numbers in MARBEL**: Always specify exactly where code goes

5. **Floundering**: Don't use `not(X)` with unbound variables

6. **Forgetting base cases**: Every recursive predicate needs a base case

7. **Left vs right side of `is`**: Left must be variable/number, right is expression to evaluate

---

## Exam Strategy

1. **Prolog queries** (5 questions, ~2 pts each): Work through each carefully, distinguish = vs is
2. **Search trees** (4-5 questions, ~2-5 pts each): Trace through step by step
3. **Concepts** (2-3 questions, ~2 pts each): Memorize definitions
4. **Programming** (2 questions, ~10 pts each): Practice writing predicates
5. **Agent basics** (3-4 questions, ~2-4 pts each): Know environment properties
6. **MARBEL** (7-8 questions, ~3-5 pts each): Practice reading and modifying code

**Time management**: 2:45 hours for ~100 points → ~1.5 minutes per point
