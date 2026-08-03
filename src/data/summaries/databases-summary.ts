export const databasesSummary = String.raw`
# Databases — Exam-Focused Summary

This summary follows the 2026 course structure. Use it as a map, then practise the exercises without looking at the solutions.

## 1. The relational model

A relation is a set of tuples over named attributes. A database schema describes the relations and their attributes; a database instance contains the current tuples.

- A **superkey** uniquely identifies every tuple.
- A **candidate key** is a minimal superkey.
- A **primary key** is the candidate key selected as the main identifier.
- A **foreign key** refers to a candidate key in another relation and enforces referential integrity.
- SQL tables are bags by default: duplicates remain unless DISTINCT is used.
- NULL represents missing or inapplicable information. Comparisons with NULL produce UNKNOWN, so use IS NULL rather than = NULL.

## 2. ER modelling

Start by identifying entities, attributes and relationships. Mark keys, participation constraints and cardinalities before translating anything.

Translation rules:

1. A strong entity becomes a relation containing its simple attributes and key.
2. A 1:N relationship is normally represented by placing the key of the 1-side as a foreign key on the N-side.
3. An M:N relationship needs its own relation containing the keys of both participating entities plus any relationship attributes.
4. A 1:1 relationship can often be absorbed into either side; mandatory participation and NULL avoidance guide the choice.
5. A weak entity includes the owner's key together with its partial key.
6. A multivalued attribute becomes a separate relation.

Always check whether the translation enforces the original minimum and maximum cardinalities. A foreign key alone does not enforce every ER constraint.

## 3. SQL essentials

The conceptual processing order is:

FROM and JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT

### Joins

- INNER JOIN keeps matching rows.
- LEFT JOIN keeps every left row and fills missing right-side values with NULL.
- A condition in WHERE can accidentally turn a LEFT JOIN into an inner join. Put a condition on the optional table in the ON clause when unmatched rows must survive.
- Self-joins use aliases to give two roles to the same table.

### Aggregation

WHERE filters rows before grouping; HAVING filters groups after aggregation. COUNT(*) counts rows, while COUNT(column) ignores NULL.

Every selected expression in an aggregate query must normally either be aggregated or appear in GROUP BY.

### Subqueries and quantifiers

- EXISTS asks whether a subquery returns at least one row.
- NOT EXISTS expresses absence.
- “For every” is commonly written as “there does not exist a counterexample” using double NOT EXISTS.
- “Exactly one” can be expressed with COUNT(*) = 1 or by combining existence with the absence of a distinct second match.
- Be careful with NOT IN: one NULL in its result can make the predicate UNKNOWN. NOT EXISTS is usually safer.

### Updates

INSERT adds tuples, UPDATE changes selected tuples, and DELETE removes selected tuples. Always reason about constraints and the WHERE condition before running a destructive statement.

## 4. Functional dependencies and keys

An FD X → Y says that two tuples agreeing on X must also agree on Y.

To calculate the closure X+:

1. Start with X+ = X.
2. Repeatedly apply every FD whose left side is contained in X+.
3. Add its right side.
4. Stop when nothing changes.

X is a superkey if X+ contains every attribute. It is a candidate key if removing any attribute stops it being a superkey.

Useful inference rules:

- Reflexivity: if Y is contained in X, then X → Y.
- Augmentation: if X → Y, then XZ → YZ.
- Transitivity: if X → Y and Y → Z, then X → Z.
- Decomposition and union split or combine right-hand sides.

A canonical cover has singleton right-hand sides, no unnecessary attributes and no redundant dependencies.

## 5. Normalisation

### BCNF

A relation is in BCNF when the left side of every non-trivial FD is a superkey.

BCNF decomposition:

1. Find a violating FD X → Y.
2. Decompose R into X ∪ Y and R − (Y − X).
3. Repeat until every relation is BCNF.

The standard decomposition is lossless, but it may lose dependency preservation.

### Third normal form

A relation is in 3NF when, for every non-trivial FD X → A, either X is a superkey or A is a prime attribute (part of some candidate key).

The 3NF synthesis algorithm starts from a canonical cover, creates a relation for each dependency, removes contained relations and adds a candidate-key relation if none exists. It gives a lossless and dependency-preserving decomposition.

Know the trade-off: BCNF gives stronger redundancy control; 3NF can preserve all dependencies.

## 6. Transactions and concurrency

ACID stands for atomicity, consistency, isolation and durability.

A schedule interleaves operations from multiple transactions. Typical anomalies include dirty reads, unrepeatable reads and lost updates.

### Conflict serialisability

Two operations conflict when they:

- belong to different transactions,
- access the same data item, and
- at least one is a write.

Build a precedence graph with one node per transaction. Add Ti → Tj when a conflicting operation of Ti occurs before one of Tj. The schedule is conflict-serialisable exactly when the graph is acyclic. A topological ordering gives an equivalent serial order.

Two-phase locking uses a growing phase for acquiring locks and a shrinking phase for releasing them. Strict 2PL holds write locks until commit or abort, preventing cascading aborts.

## 7. Database APIs

Application code should use prepared statements with bound parameters. Concatenating user input into SQL creates SQL-injection risk. Transactions in application code must define a clear commit path and a rollback path for errors.

Do not skip the API slides because they lack lecture videos: the syllabus explicitly says that material can be examined.

## 8. Highest-yield preparation

1. Do the homework and exercise exam before reading solutions.
2. Practise attribute closures until keys and normal forms become mechanical.
3. Translate “all”, “none” and “exactly one” into EXISTS patterns.
4. Draw precedence graphs step by step.
5. Practise ER-to-relational translation and explain which constraints the schema does or does not enforce.
6. Review the API material and prepared statements.

The exam is closed-book and combines practical tasks with theory questions, so active problem solving matters much more than re-reading.
`;
