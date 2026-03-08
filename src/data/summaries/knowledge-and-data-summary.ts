/**
 * Knowledge and Data Summary — inline markdown content.
 * Compiled from weekly materials, exam prep, and practice questions for the VU Knowledge and Data course.
 * Covers all 5 modules: Knowledge representation & logic, RDF & Turtle, RDFS & SPARQL,
 * OWL & reasoning, Ontology engineering & data integration.
 */
export const knowledgeAndDataSummary = `
# Knowledge and Data — Comprehensive Summary

---

## Module 1: Knowledge Representation, Formal Systems & Propositional Logic

### 1.1 Data, Information, and Knowledge

| Concept | Definition |
|---------|-----------|
| **Data** | Individual facts out of context, with no meaning; difficult to understand on their own |
| **Information** | Data placed in context, relevant to one or more people at a point in time |
| **Knowledge** | Information retained with an understanding of its significance; knowledge = information + rules |

> **Key fact:** Data preparation accounts for roughly **80%** of a data scientist's work.

### 1.2 Tacit vs. Explicit Knowledge

| Type | Description | Proportion |
|------|-------------|------------|
| **Tacit** (implicit) | Knowledge a person retains in their mind — intangible, invisible, private | ~80% |
| **Explicit** (formal) | Knowledge that has been formalized, codified, and stored — tangible, visible, public | ~20% |

- Formal knowledge helps us **interpret** and **reuse** data, enabling predictable inference.
- Making knowledge **explicit** is what knowledge representation is about.

### 1.3 Knowledge Graphs

A knowledge graph is a way of representing data, information, and knowledge that is:
- **Heterogeneous** — accommodates different types of data
- **Interpretable** — others can correctly interpret the data
- **Semantic** — makes the meaning of information explicit
- **Graph-based** — uses a network structure of nodes and edges
- **Web-accessible** — published explicitly on the Web

### 1.4 The Four Proposals for Linked and Semantic Data

| Proposal | Description |
|----------|-------------|
| **P1** | Give all things a **name** |
| **P2** | The names are **addresses on the Web** (URIs) |
| **P3** | Relations form a **graph** between things |
| **P4** | Make explicit the **meaning** of things (assign types, organize hierarchies, define rules) |

- P1 + P2 + P3 = a **(global) graph of Linked Data**
- P4 adds the **Semantic Web** layer: shared model, formal semantics, predictable inferencing

### 1.5 Querying vs. Inferencing

| Aspect | Querying (P1-P3) | Inferencing (P4) |
|--------|-----------------|-----------------|
| **Requires** | Connected, accessible data in known format | Shared model with formal semantics |
| **Result** | Retrieval of existing data | Derivation of **new** knowledge |
| **Nature** | Pattern matching | Algorithmic manipulation of symbols |

- **Calculating with Knowledge** = inferencing = reasoning
- The **meaning of words** is not needed for inference — only the formal rules matter

### 1.6 What Is a Logic? (Formal Systems)

A logic is a formal language with three components:

| Component | Role | Example |
|-----------|------|---------|
| **Syntax** | Which expressions are well-formed (legal) | \`p AND q\` is legal; \`AND AND p\` is not |
| **Semantics** | What legal expressions mean w.r.t. interpretations | Truth values under an assignment |
| **Calculus** | How to determine meaning for legal expressions | Inference rules, truth tables |

### 1.7 Propositional Logic

**Vocabulary:**
- **Propositional variables**: p, q, r, ...
- **Connectives**: NOT, AND, OR, IMPLIES (arrow), IFF (double arrow)
- **Constants**: True, False

**Notation styles:**
- **Infix notation**: \`(p IMPLIES q)\` — operator between operands
- **Prefix notation**: \`[IMPLIES, [p], [q]]\` — operator before operands

**Converting infix to prefix:**
1. Build a **parse tree** from the formula (innermost parentheses first)
2. Each operator becomes the root of a subtree
3. Read the tree: operator first, then its operands (recursively)

> **Example:** Infix \`NOT((A IMPLIES (NOT B OR C)) OR (NOT D OR NOT E))\`
> Prefix: \`NOT(OR(IMPLIES(A, OR(NOT(B), C)), OR(NOT(D), NOT(E))))\`

**Key semantic concepts:**

| Concept | Definition |
|---------|-----------|
| **Valuation** | An assignment of truth values to all propositional variables |
| **Model** | A valuation that makes a formula true |
| **Tautology** | A formula true under **every** valuation |
| **Contradiction** | A formula false under **every** valuation |
| **Semantic equivalence** | Formulas x and y have identical truth table columns |
| **Semantic entailment** | y1, ..., yn ENTAILS x if every valuation making all yi true also makes x true |

### 1.8 Checking Entailment with Truth Tables

To check whether \`A ENTAILS B\`:

1. List all possible truth value assignments for the variables
2. Compute the truth value of A for each assignment
3. Compute the truth value of B for each assignment
4. Check: for **every** row where A is true, is B also true?
5. If yes: entailment holds. If any row has A true and B false: **no entailment**

> **Exam example:** To check \`NOT p OR (q IMPLIES p) ENTAILS NOT p AND q\`:
> Find rows where the left side is true. If any such row has the right side false, the entailment fails.

### 1.9 Simple Knowledge Graph Logic

**Syntax:**
- **Vocabulary V**: a set of names
- **Predicates P**: a set of relations
- **Triples**: T = V x P x V — if r1, r2 are in V and p is in P, then (r1, p, r2) is in T
- A **knowledge graph** is a set of triples

**Semantics (for grounded graphs):**
- An **interpretation I** consists of:
  - **IR** — a universe (set of arbitrary objects)
  - **I^R: V -> IR** — assigns domain elements to vocabulary words
  - **I^P: P -> Powerset(IR x IR)** — assigns pairs of domain elements to predicates
- A triple (s, p, o) is **true** w.r.t. I iff (I^R(s), I^R(o)) is in I^P(p)
- I is a **model** of a knowledge base if it satisfies all its triples
- A set of triples is **entailed** by a knowledge graph if every model of the KG is also a model of those triples

---

## Module 2: RDF, Triples, URIs, Linked Data & Turtle Syntax

### 2.1 RDF — Resource Description Framework

RDF is a **W3C standard data model** for data interchange on the Web:
- Facilitates **data merging** even when schemas differ
- Extends the linking structure of the Web by using URIs to name **relationships**
- Allows data to be mixed, exposed, and shared across applications

### 2.2 RDF Triples

All information in RDF is expressed as **triples**: (subject, predicate, object).

| Position | URI References | Literals | Blank Nodes |
|----------|:-:|:-:|:-:|
| **Subject** | Yes | **No** | Yes |
| **Predicate** | Yes | **No** | **No** |
| **Object** | Yes | Yes | Yes |

> **Key rule:** Literals can **only** appear in the object position. Subjects are always URIs or blank nodes. Predicates are always URIs.

### 2.3 URIs (Uniform Resource Identifiers)

- RDF talks about **resources** (almost anything can be a resource)
- Resources are **identified by** URIs; URIs **denote** resources
- URIs can only *refer* to a resource — they are **not** the resource itself
- Multiple URIs can denote the **same** resource
- HTTP URIs have **global scope** (unique throughout the Web) and are also **addresses**
- **IRIs** (Internationalized Resource Identifiers) extend URIs with Unicode support

### 2.4 RDF Literals

- Used to represent data values: strings, numbers, dates, booleans
- All literals have a **datatype** (which are themselves resources identified by URIs)
- Strings can have a **language tag**: \`"The Netherlands"@en\`, \`"Nederland"@nl\`
- Typed literals use \`^^\`: \`"42"^^xsd:integer\`, \`"2024-01-15"^^xsd:date\`

### 2.5 Blank Nodes

- Resources **without a URI** (anonymous resources)
- Act as **existential quantifiers**: "there exists some resource..."
- Used as placeholders when the identity of a resource is unknown or irrelevant
- In Turtle: designated with \`_:label\` or inline with \`[...]\`
- When merging graphs, blank node labels are **local** to each graph (renamed to avoid clashes)

### 2.6 RDF Graphs

- An RDF graph is a **set of triples**
- Graphs can themselves have URIs (named graphs)
- **Merging** two RDF graphs = taking their **union** (with blank node renaming)
- Standard set operations (union, intersection, difference) are well-defined

### 2.7 Turtle Syntax — Complete Guide

Turtle is a human-readable serialization format for RDF.

**Basic elements:**
- **Comments** start with \`#\`
- **Full URIs** enclosed in \`<http://...>\`
- **Statements** are triples terminated by a period \`.\`
- **Namespace prefixes** declared with \`@prefix\`
- \`a\` is shorthand for \`rdf:type\`

**Literal syntax:**
- Plain strings: \`"hello"\`
- Language-tagged: \`"hello"@en\`
- Typed: \`"42"^^xsd:integer\`
- Numbers and booleans can be written unquoted: \`42\`, \`true\`

**Shortcuts:**
- **Semicolon** \`;\` — same subject, different predicate-object pairs
- **Comma** \`,\` — same subject AND predicate, different objects
- **Square brackets** \`[...]\` — inline blank nodes

**Complete Turtle example:**

\`\`\`turtle
@prefix ex: <http://www.example.org/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dbr: <http://dbpedia.org/resource/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

# Class definitions
ex:Student rdf:type rdfs:Class .
ex:University rdf:type rdfs:Class .

# Property definitions
ex:hasVUnetID rdfs:domain ex:Student ;
              rdfs:range xsd:string .
ex:studiesAt  rdfs:domain ex:Student ;
              rdfs:range ex:University .

# Instance data — using semicolons and comma shortcuts
ex:s1 a dbr:Student ;
    ex:hasVUnetID "as344" ;
    ex:hasFirstName "Alice" ;
    ex:studiesAt ex:UvA, ex:VU .    # comma: two objects

ex:s2 a dbr:Student ;
    ex:hasVUnetID "ex444"^^xsd:string ;
    ex:studiesAt ex:VU ;
    ex:followsStudy ex:IMM .

# Blank node example — address without a URI
ex:s1 ex:hasAddress [
    ex:street "De Boelelaan 1105" ;
    ex:city "Amsterdam" ;
    ex:postalCode "1081HV"
] .
\`\`\`

### 2.8 Turtle Syntax Validation Rules

When checking if Turtle syntax is correct:
- Subjects must be **URIs or blank nodes** (never literals)
- Predicates must be **URIs** (never literals or blank nodes)
- Objects can be URIs, literals, or blank nodes
- Blank nodes use \`[...]\` or \`_:label\` syntax (not standalone \`[]\` as subject without content)
- Every statement must end with \`.\`, or use \`;\` / \`,\` to continue
- Prefixes must be declared before use

### 2.9 Converting Tabular Data to RDF

When converting relational tables to a knowledge graph:

| Table Element | RDF Equivalent | Classification |
|--------------|----------------|----------------|
| Row identifier / Entity | URI resource (subject) | **Resource/Entity** |
| Column header | Property (predicate) | **Property** |
| Cell value (name, date, etc.) | Literal (object) | **Literal** |
| Cell value (another entity) | URI resource (object) | **Resource/Entity** |
| Table name / Row type | Class (via rdf:type) | **Class** |

> **Exam tip:** Values like first names, last names, dates, and phone numbers are **Literals**. Entities like students, universities, and courses are **Resources**. Column headers like hasFirstName, studiesAt are **Properties**.

---

## Module 3: RDFS, Class Hierarchies, Inferencing & SPARQL

### 3.1 Why RDFS?

Without **formal semantics**, the Web of Data is meaningless. RDFS adds:
- Distinction between **classes**, **properties**, and **instances**
- **Reserved symbols** with formally defined semantics
- **Entailment rules** for deriving new facts

### 3.2 RDFS Key Vocabulary

**Class-related terms:**

| Term | Purpose |
|------|---------|
| \`rdfs:Class\` | Declares something as a class |
| \`rdfs:subClassOf\` | Declares a subclass relationship (transitive) |
| \`rdfs:Resource\` | Everything is a resource (top class) |
| \`rdfs:Literal\` | The class of literal values |
| \`rdfs:Datatype\` | The class of datatypes |

**Property-related terms:**

| Term | Purpose |
|------|---------|
| \`rdfs:domain\` | The class of subjects that use this property |
| \`rdfs:range\` | The class of objects that this property points to |
| \`rdfs:subPropertyOf\` | Declares a subproperty relationship (transitive) |
| \`rdf:Property\` | The class of all properties |

**Documentation terms:**

| Term | Purpose |
|------|---------|
| \`rdfs:label\` | Human-readable label for a resource |
| \`rdfs:comment\` | Description/comment on a resource |
| \`rdfs:seeAlso\` | Link to another resource for more info |

### 3.3 RDFS Entailment Rules — Complete Reference

| Rule | Condition (if you have...) | Conclusion (then derive...) |
|------|---------------------------|----------------------------|
| **rdfs1** | Any URI u occurs in a triple | u rdf:type rdfs:Resource |
| **rdfs2** | p rdfs:domain X, and s p o | s rdf:type X |
| **rdfs3** | p rdfs:range X, and s p o | o rdf:type X |
| **rdfs4a** | s p o | s rdf:type rdfs:Resource |
| **rdfs4b** | s p o (o is URI) | o rdf:type rdfs:Resource |
| **rdfs5** | p rdfs:subPropertyOf q, q rdfs:subPropertyOf r | p rdfs:subPropertyOf r |
| **rdfs6** | p rdf:type rdf:Property | p rdfs:subPropertyOf p |
| **rdfs7** | s p o, p rdfs:subPropertyOf q | s q o |
| **rdfs8** | C rdf:type rdfs:Class | C rdfs:subClassOf rdfs:Resource |
| **rdfs9** | s rdf:type X, X rdfs:subClassOf Y | s rdf:type Y |
| **rdfs10** | C rdf:type rdfs:Class | C rdfs:subClassOf C |
| **rdfs11** | X rdfs:subClassOf Y, Y rdfs:subClassOf Z | X rdfs:subClassOf Z |
| **rdfs12** | p rdf:type rdfs:ContainerMembershipProperty | p rdfs:subPropertyOf rdfs:member |
| **rdfs13** | d rdf:type rdfs:Datatype | d rdfs:subClassOf rdfs:Literal |

### 3.4 Applying RDFS Inference — Step-by-Step Method

When asked "which triples can be derived," apply rules systematically:

1. **Domain rules (rdfs2):** If \`s p o\` and \`p rdfs:domain X\`, derive \`s rdf:type X\`
2. **Range rules (rdfs3):** If \`s p o\` and \`p rdfs:range X\`, derive \`o rdf:type X\`
3. **Subproperty (rdfs7):** If \`s p o\` and \`p rdfs:subPropertyOf q\`, derive \`s q o\`
4. **Subproperty transitivity (rdfs5):** Chain subPropertyOf relationships
5. **Subclass type propagation (rdfs9):** If \`s rdf:type A\` and \`A rdfs:subClassOf B\`, derive \`s rdf:type B\`
6. **Subclass transitivity (rdfs11):** Chain subClassOf relationships
7. **Repeat** until no new triples can be derived (fixpoint)

> **Exam example:** Given:
> \`ex:s ex:p ex:o\`, \`ex:p rdfs:domain ex:C\`, \`rdfs:domain rdfs:range rdfs:Class\`
>
> Step 1 (rdfs2): From \`ex:s ex:p ex:o\` + \`ex:p rdfs:domain ex:C\` -> \`ex:s rdf:type ex:C\`
> Step 2 (rdfs3): From \`ex:p rdfs:domain ex:C\` + \`rdfs:domain rdfs:range rdfs:Class\` -> \`ex:C rdf:type rdfs:Class\`

### 3.5 RDFS Observations

- No **strict** distinction between schema and data level (a resource can be both a class and an instance)
- Entailment rules do **not** include negation
- No notion of **equality** between resources
- RDFS is **monotonic**: adding triples never invalidates existing entailments
- RDFS is **not very expressive** — OWL extends it significantly

### 3.6 Triple Stores

- Purpose-built **graph databases** for RDF data
- Data can be stored persistently on disk or in memory
- Optimized for fast querying through:
  - **Dictionary encoding** — replace URI strings by compact addresses/IDs
  - **Indexing** — multiple index structures (SPO, POS, OSP, etc.)
  - Efficient handling of **JOINs** in SPARQL graph pattern matching
- Examples: GraphDB, Apache Jena Fuseki, Blazegraph, Virtuoso

### 3.7 SPARQL — Query Language for RDF

SPARQL is the **standard query language** for the Web of Linked Data:
- Queries are sent to **SPARQL endpoints** over **HTTP**
- Queries describe **graph patterns** with **variables** (prefixed with \`?\`)
- Graph patterns are **matched** against RDF graphs in the triple store
- Results are returned as variable bindings

### 3.8 SPARQL Query Types

| Query Type | Returns | Use Case |
|-----------|---------|----------|
| **SELECT** | A table of variable bindings | Most common; retrieve specific values |
| **CONSTRUCT** | A new RDF graph | Create derived graphs from patterns |
| **ASK** | true or false | Check existence of a pattern |
| **DESCRIBE** | An RDF graph about a resource | Get all info about a resource |
| **INSERT** | (side effect: adds triples) | Add data to the store |
| **DELETE** | (side effect: removes triples) | Remove data from the store |

### 3.9 SPARQL Clauses and Modifiers

| Clause | Purpose | Example |
|--------|---------|---------|
| **WHERE** | Specifies the graph pattern to match | \`WHERE { ?s ?p ?o }\` |
| **FILTER** | Restricts results by a condition | \`FILTER (?age > 18)\` |
| **OPTIONAL** | Pattern does not need to match (left join) | \`OPTIONAL { ?s ex:email ?e }\` |
| **UNION** | Match at least one of several patterns | \`{ pattern1 } UNION { pattern2 }\` |
| **BIND** | Assign a value to a variable | \`BIND (ex:VU AS ?uni)\` |
| **VALUES** | Provide inline data | \`VALUES ?x { ex:a ex:b }\` |
| **ORDER BY** | Sort results | \`ORDER BY DESC(?count)\` |
| **DISTINCT** | Remove duplicate results | \`SELECT DISTINCT ?name\` |
| **LIMIT** | Restrict number of results | \`LIMIT 10\` |
| **OFFSET** | Skip first N results | \`OFFSET 20\` |
| **GROUP BY** | Group results for aggregation | \`GROUP BY ?city\` |
| **HAVING** | Filter groups (like FILTER for GROUP BY) | \`HAVING (COUNT(?x) > 5)\` |

### 3.10 SPARQL Examples

**Basic SELECT — find all students and their universities:**

\`\`\`sparql
PREFIX ex: <http://example.org/>
SELECT ?student ?uni
WHERE {
    ?student rdf:type ex:Student .
    ?student ex:studiesAt ?uni .
}
\`\`\`

**OPTIONAL and FILTER — students over 18 with optional email:**

\`\`\`sparql
PREFIX ex: <http://example.org/>
SELECT ?student ?name ?email
WHERE {
    ?student rdf:type ex:Student .
    ?student ex:hasName ?name .
    ?student ex:hasAge ?age .
    FILTER (?age > 18)
    OPTIONAL { ?student ex:hasEmail ?email }
}
\`\`\`

**Aggregation with GROUP BY — count students per city:**

\`\`\`sparql
PREFIX ex: <http://example.org/>
SELECT ?city (COUNT(?student) AS ?numStudents)
WHERE {
    ?student ex:studiesAt ?uni .
    ?uni ex:locatedIn ?city .
}
GROUP BY ?city
ORDER BY DESC(?numStudents)
\`\`\`

**ASK — check if a fact exists:**

\`\`\`sparql
ASK {
    ex:Amsterdam rdf:type ex:City .
}
\`\`\`

**CONSTRUCT — build a new graph:**

\`\`\`sparql
PREFIX ex: <http://example.org/>
CONSTRUCT {
    ?person ex:livesIn ?city .
}
WHERE {
    ?person ex:studiesAt ?uni .
    ?uni ex:locatedIn ?city .
}
\`\`\`

**UNION — match either of two patterns:**

\`\`\`sparql
PREFIX ex: <http://example.org/>
SELECT ?person ?institution
WHERE {
    { ?person ex:studiesAt ?institution }
    UNION
    { ?person ex:worksAt ?institution }
}
\`\`\`

**Federated query — query across endpoints:**

\`\`\`sparql
PREFIX ex: <http://example.org/>
PREFIX dbr: <http://dbpedia.org/resource/>
SELECT ?student ?population
WHERE {
    ?student ex:studiesAt ?uni .
    ?uni ex:locatedIn ?city .
    SERVICE <http://dbpedia.org/sparql> {
        ?city dbr:populationTotal ?population .
    }
}
\`\`\`

### 3.11 Where to Find RDF Data

1. As **separate files** (.ttl, .rdf, .nt, .nq, .jsonld)
2. **Integrated** with Web pages (RDFa, Microdata, JSON-LD in script tags)
3. Accessible through **content negotiation** (HTTP Accept headers)
4. In **triple stores** via SPARQL endpoints

---

## Module 4: OWL — Ontology Language, Restrictions & Reasoning

### 4.1 Why OWL?

RDFS is too limited for many real-world modeling needs:
- Cannot express **disjointness** (e.g., Male and Female are disjoint)
- Cannot express **cardinality** (e.g., a person has exactly one biological mother)
- Cannot express property **characteristics** (symmetric, transitive, etc.)
- Cannot define classes by **restricting** property values
- Cannot express **equality** between individuals

### 4.2 OWL Foundations

- Extension of RDF Schema (uses RDF syntax)
- Built on **Description Logics** (DL) — a family of decidable logics
- Trade-off between **expressive power** and **computational efficiency**
- **Decidability** plays a central role (the restricted language thesis)
- OWL enforces strict separation of **individuals**, **classes**, and **properties**

**OWL Profiles (sublanguages):**

| Profile | Expressiveness | Reasoning Complexity |
|---------|---------------|---------------------|
| OWL 2 EL | Low | Polynomial |
| OWL 2 QL | Low | LogSpace (good for databases) |
| OWL 2 RL | Medium | Polynomial (rule-based) |
| OWL 2 DL | High | Decidable (worst case: 2-NEXPTIME) |
| OWL 2 Full | Unrestricted | Undecidable |

### 4.3 Key OWL Assumptions

| Assumption | OWL (Open World) | Databases (Closed World) |
|------------|-----------------|-------------------------|
| **Unknown information** | Unknown = **unknown** | Unknown = **false** |
| **Unique names** | Different names **may** refer to same thing | Different names = different things |
| **Adding data** | May cause new inferences, never invalidates old ones | May change query results |

- **Open World Assumption (OWA):** Nothing is assumed true or false unless it is **explicitly stated** or **derivable** from axioms. We cannot conclude something is false just because it is not stated.
- **No Unique Name Assumption:** Instances with different URIs might refer to the same real-world entity. Must use owl:sameAs or owl:differentFrom to declare equality/inequality.

> **Exam example:** If an ontology states "John is a Student" and "Mary is a Student" but says nothing about whether John and Mary are the same person, under OWA we cannot conclude they are different — unless stated or derivable.

### 4.4 OWL Classes

- **owl:Thing** — the top class; every individual is of type owl:Thing
- **owl:Nothing** — the bottom class (empty set); no individual is of type owl:Nothing
- Every owl:Class is a subclass of **owl:Thing**
- If any class becomes a subclass of **owl:Nothing**, the ontology is **inconsistent**

### 4.5 Class Constructors

| Constructor | Meaning | Turtle Syntax |
|------------|---------|---------------|
| **owl:equivalentClass** | Two classes have exactly the same instances | \`ex:A owl:equivalentClass ex:B .\` |
| **owl:complementOf** | All individuals NOT in the given class | \`ex:NotA owl:complementOf ex:A .\` |
| **owl:disjointWith** | Two classes share NO individuals | \`ex:A owl:disjointWith ex:B .\` |
| **owl:unionOf** | Individuals in ANY of the listed classes | \`ex:C owl:unionOf (ex:A ex:B) .\` |
| **owl:intersectionOf** | Individuals in ALL of the listed classes | \`ex:C owl:intersectionOf (ex:A ex:B) .\` |
| **owl:disjointUnionOf** | Union of mutually disjoint classes | \`ex:X owl:disjointUnionOf (ex:A ex:B) .\` |
| **owl:oneOf** | Enumerates all members of a class | \`ex:Color owl:oneOf (ex:Red ex:Green ex:Blue) .\` |

> **Key inference:** If \`ex:A owl:disjointWith ex:B\`, \`ex:x rdf:type ex:A\`, and \`ex:y rdf:type ex:B\`, then \`ex:x owl:differentFrom ex:y\`. If ex:x were also typed as ex:B, the ontology would be **inconsistent**.

> **Exam example:** If \`ex:Parent owl:equivalentClass [owl:unionOf (ex:Mother ex:Father)]\` and \`ex:Mother owl:disjointWith ex:Father\`, then every Parent is either a Mother or a Father (but not both). If John is a Parent and NOT a Father, John must be a Mother.

### 4.6 OWL Property Types

| Type | Connects | Range |
|------|----------|-------|
| **owl:ObjectProperty** | Individual to individual | Non-literals only |
| **owl:DatatypeProperty** | Individual to data value | Literals only |
| **owl:AnnotationProperty** | Metadata/documentation | Cannot be used in restrictions |

These categories are **disjoint** — every property belongs to exactly one type.

### 4.7 Property Characteristics

| Characteristic | Meaning | Inference Rule |
|---------------|---------|---------------|
| **Symmetric** | Holds in both directions | if p(x,y) then p(y,x) |
| **Asymmetric** | Never holds in both directions | if p(x,y) and p(y,x) then inconsistent |
| **Transitive** | Propagates through chains | if p(x,y) and p(y,z) then p(x,z) |
| **Functional** | At most one value per subject | if p(x,y) and p(x,z) then y owl:sameAs z |
| **InverseFunctional** | Value uniquely identifies the subject | if p(x,z) and p(y,z) then x owl:sameAs y |
| **Reflexive** | Every individual is related to itself | for all x in domain: p(x,x) |
| **Irreflexive** | No individual is related to itself | if p(x,x) then inconsistent |

> **Exam example — Symmetric + Irreflexive:** "Which relations are both symmetric AND irreflexive?"
> - **hasFamilyMember**: symmetric (if A is family of B, B is family of A) and irreflexive (nobody is their own family member). **YES.**
> - **siblingOf**: symmetric and irreflexive. **YES.**
> - fatherOf, motherOf: not symmetric. uncleOf: not symmetric. ancestorOf: not symmetric.

> **Exam example — InverseFunctionalProperty:** "Which can be safely modeled as owl:InverseFunctionalProperty?"
> - hasFirstName: NO — multiple people share a first name (both map to "John")
> - hasLastName: NO — multiple people share a last name
> - hasBirthDate: NO — multiple people share a birthdate
> - **Answer: None of the above.** An InverseFunctionalProperty requires the object to uniquely identify the subject (like a passport number or social security number).

### 4.8 Property Axioms

| Axiom | Meaning | Inference |
|-------|---------|-----------|
| **owl:inverseOf** | p is the inverse of q | if p(x,y) then q(y,x) |
| **owl:equivalentProperty** | p and q always co-occur | if p(x,y) then q(x,y) and vice versa |
| **owl:propertyChainAxiom** | p is derived from a chain | if chain(p,[q,r]) and q(x,y) and r(y,z) then p(x,z) |
| **owl:propertyDisjointWith** | p and q never co-occur | if p(x,y) and q(x,y) then inconsistent |

> **Example of propertyChainAxiom:** \`ex:hasGrandparent owl:propertyChainAxiom (ex:hasParent ex:hasParent)\`
> If \`ex:Alice ex:hasParent ex:Bob\` and \`ex:Bob ex:hasParent ex:Charlie\`, then we can derive \`ex:Alice ex:hasGrandparent ex:Charlie\`.

### 4.9 OWL Entailment Rules — Complete Reference

| # | Rule | Description |
|---|------|-------------|
| 1 | v owl:sameAs w -> w owl:sameAs v | sameAs is **symmetric** |
| 2 | u owl:sameAs v, v owl:sameAs w -> u owl:sameAs w | sameAs is **transitive** |
| 3 | v owl:sameAs w, v p o -> w p o | sameAs **substitution** (subject) |
| 3b | v owl:sameAs w, s p v -> s p w | sameAs **substitution** (object) |
| 4 | p rdf:type owl:SymmetricProperty, v p w -> w p v | **Symmetric** property |
| 5 | p rdf:type owl:TransitiveProperty, u p v, v p w -> u p w | **Transitive** property |
| 6 | v owl:equivalentClass w <-> v rdfs:subClassOf w AND w rdfs:subClassOf v | **Equivalent classes** |
| 7 | p owl:equivalentProperty q <-> p rdfs:subPropertyOf q AND q rdfs:subPropertyOf p | **Equivalent properties** |
| 8 | p rdf:type owl:FunctionalProperty, x p y, x p z -> y owl:sameAs z | **Functional** property |
| 9 | p rdf:type owl:InverseFunctionalProperty, x p z, y p z -> x owl:sameAs y | **InverseFunctional** property |
| 10 | r owl:propertyChainAxiom (p q), v p x, x q s -> v r s | **Property chain** |

### 4.10 OWL Restrictions (Class Descriptions)

OWL allows defining classes by **restricting** property values. This is one of the most powerful and exam-critical features.

**Universal restriction — owl:allValuesFrom:**

\`\`\`turtle
ex:VegetarianPizza owl:equivalentClass [
    rdf:type owl:Restriction ;
    owl:onProperty ex:hasTopping ;
    owl:allValuesFrom ex:VegetarianTopping
] .
\`\`\`

Meaning: A VegetarianPizza is **equivalent to** something whose hasTopping values are **ALL** VegetarianTopping instances.

**Existential restriction — owl:someValuesFrom:**

\`\`\`turtle
ex:Parent rdfs:subClassOf [
    rdf:type owl:Restriction ;
    owl:onProperty ex:hasChild ;
    owl:someValuesFrom ex:Person
] .
\`\`\`

Meaning: Every Parent has **AT LEAST ONE** hasChild value that is a Person.

**Cardinality restrictions:**

| Restriction | Meaning |
|------------|---------|
| \`owl:minCardinality N\` | At least N values |
| \`owl:maxCardinality N\` | At most N values |
| \`owl:cardinality N\` | Exactly N values |
| \`owl:minQualifiedCardinality N\` on class C | At least N values of type C |
| \`owl:maxQualifiedCardinality N\` on class C | At most N values of type C |
| \`owl:qualifiedCardinality N\` on class C | Exactly N values of type C |

**Has-value restriction:**

\`\`\`turtle
ex:DutchCitizen owl:equivalentClass [
    rdf:type owl:Restriction ;
    owl:onProperty ex:citizenOf ;
    owl:hasValue ex:Netherlands
] .
\`\`\`

### 4.11 allValuesFrom vs. someValuesFrom — Critical Distinction

This is one of the **most important exam topics**. The difference lies in what can be inferred.

**Case 1: allValuesFrom with equivalentClass**

\`\`\`turtle
ex:EuropeanCitizen owl:equivalentClass [
    rdf:type owl:Restriction ;
    owl:onProperty ex:citizenOf ;
    owl:allValuesFrom ex:EuropeanCountry
] .
\`\`\`

Given: \`ex:john rdf:type ex:EuropeanCitizen\` and \`ex:john ex:citizenOf ex:usa\`
Inference: \`ex:usa rdf:type ex:EuropeanCountry\` (because ALL citizenOf values MUST be EuropeanCountry)

Given: \`ex:john ex:citizenOf ex:netherlands\` and \`ex:netherlands rdf:type ex:EuropeanCountry\` and NO other citizenOf statements
Under OWA: We CANNOT derive \`ex:john rdf:type ex:EuropeanCitizen\` because there might be other unknown citizenOf values that are not European. allValuesFrom requires ALL values to match, and under OWA we cannot rule out unknown values.

**Case 2: someValuesFrom with subClassOf**

\`\`\`turtle
ex:EuropeanCitizen rdfs:subClassOf [
    rdf:type owl:Restriction ;
    owl:onProperty ex:citizenOf ;
    owl:someValuesFrom ex:EuropeanCountry
] .
\`\`\`

Given: \`ex:john ex:citizenOf ex:netherlands\` and \`ex:netherlands rdf:type ex:EuropeanCountry\`
Can we derive: \`ex:john rdf:type ex:EuropeanCitizen\`? **NO!**

The restriction says: "every EuropeanCitizen has at least one citizenOf that is a EuropeanCountry." This is a **necessary condition** of being a EuropeanCitizen, not a **sufficient condition**. Having citizenship of a European country does not make you a EuropeanCitizen — many non-EuropeanCitizen entities might also have European citizenships.

> **Summary table:**
>
> | Pattern | Direction of Inference |
> |---------|----------------------|
> | equivalentClass + allValuesFrom | From class membership -> type of property values |
> | equivalentClass + someValuesFrom | From class membership -> existence of a value of that type |
> | subClassOf + allValuesFrom (superclass) | From class membership -> type of property values |
> | subClassOf + someValuesFrom (superclass) | From class membership -> existence of a value of that type |
> | subClassOf + restriction (as superclass) | CANNOT infer class membership from matching data |

### 4.12 Open World Assumption in Practice

The OWA means that OWL reasoning is fundamentally different from database querying:

| Scenario | CWA (Database) | OWA (OWL) |
|----------|----------------|-----------|
| "Does John have children?" (not stated) | No | Unknown |
| "Is John a Parent?" (not stated) | No | Unknown |
| "Are John and Mary the same?" (not stated) | No (UNA) | Unknown |
| "All stated citizenships are European" | John is European (all known = all) | Cannot conclude (unknown values might exist) |

### 4.13 Protege

Protege is the standard **ontology editor** for OWL:
- Visual class hierarchy browser
- Property definition and restriction editing
- Reasoner integration (HermiT, Pellet, FaCT++)
- Can detect **inconsistencies** (a key advantage over RDFS)
- Exports to various RDF serialization formats

---

## Module 5: Ontology Engineering, Data Integration, Alignment & SKOS

### 5.1 What Is an Ontology?

"An ontology is an **explicit** specification of a **shared conceptualization** that holds in a particular **context**."

| Component | Meaning |
|-----------|---------|
| **Explicit** | Formalized, written down |
| **Shared** | Agreed upon by a community |
| **Conceptualization** | An abstract model of a domain |
| **Context** | Applies to a specific domain/purpose |

### 5.2 Benefits of Ontologies

- **Communication** between people (shared understanding)
- **Interoperability** between software agents
- **Reuse** of domain knowledge
- Making domain knowledge **explicit and analyzable**
- Enabling **automated reasoning** and consistency checking

### 5.3 TBox and ABox

| Component | Contains | Example |
|-----------|----------|---------|
| **TBox** (Terminological) | Class definitions, property definitions, axioms | \`Student rdfs:subClassOf Person\` |
| **ABox** (Assertional) | Instance data, individual assertions | \`ex:john rdf:type ex:Student\` |

- The TBox defines the **schema/vocabulary**
- The ABox contains the **data/facts**
- Together they form the **knowledge base**

### 5.4 Ontological Commitment

- Each statement is a **commitment** to a particular view of the domain
- **Over-commitment**: the ontology makes too strong a claim, excluding valid interpretations
- **Under-commitment**: the ontology is too vague to be useful
- **Rule of thumb**: choose the **minimal** ontological commitment needed for the task

> **Exam example of over-commitment:** Modeling "all birds can fly" excludes penguins and ostriches. A less committed statement: "most birds can fly" or modeling flight capability separately.

### 5.5 Levels of Ontological Commitment

| Level | Language | Commitment |
|-------|---------|------------|
| Thesaurus / Taxonomy | **SKOS** | Lowest — just organizes concepts |
| Vocabulary | **RDF Schema** | Medium — defines classes and properties |
| Ontology | **OWL** | Highest — formal axioms and restrictions |

### 5.6 Ontology Development Methodology (8 Steps)

| Step | Description | Key Activities |
|------|-------------|---------------|
| 1 | **Determine domain and scope** | Define competency questions the ontology should answer |
| 2 | **Consider reuse** | Search for existing ontologies; almost always something exists |
| 3 | **Enumerate terms** | Nouns/noun phrases -> **class** names; verbs/verb phrases -> **property** names |
| 4 | **Define taxonomy** | Organize terms in hierarchical structure (subClassOf) |
| 5 | **Define properties** | Determine domain, range for each property |
| 6 | **Define classes and their restrictions** | Add cardinality, value restrictions; revise taxonomy |
| 7 | **Define instances** | Populate with individual data (often semi-automatic from legacy data) |
| 8 | **Check for anomalies** | Run reasoner to detect inconsistencies |

### 5.7 Methodological Approaches

| Approach | Description | When to Use |
|----------|-------------|-------------|
| **Top-down** | Start with general concepts, refine to specific ones | When domain structure is well-understood |
| **Bottom-up** | Start with specific instances and data, generalize | When working from existing datasets |
| **Middle-out** | Start with fundamental/core concepts, extend both ways | Most common; balances both directions |

### 5.8 Common Inconsistencies to Check

- Domain and range conflicts for symmetric/transitive/inverse properties
- Cardinality restrictions that conflict with data
- Value restrictions that conflict with domain and range
- Disjointness violations (individual typed as two disjoint classes)
- Classes that become subclasses of owl:Nothing (unsatisfiable)

### 5.9 Ontology Alignment and Mapping

When two ontologies describe overlapping domains, we need **alignment**:

**Types of mappings:**

| Mapping Type | Example |
|-------------|---------|
| **Individual-Individual** | \`ont1:Amsterdam owl:sameAs ont2:Amsterdam\` |
| **Class-Class** | \`ont1:City owl:equivalentClass ont2:Municipality\` |
| **Class-Class (sub)** | \`ont1:City rdfs:subClassOf ont2:PopulatedPlace\` |
| **Property-Property** | \`ont1:livesIn owl:equivalentProperty ont2:residesIn\` |
| **Individual-Class** | \`ont1:Netherlands rdf:type ont2:Country\` |

**Evaluation of alignments:**
- Judge individual links (precision/recall)
- Compare to a reference alignment
- Compare logical entailments
- End-to-end evaluation in application context

### 5.10 SKOS — Simple Knowledge Organization System

SKOS is designed for **thesauri**, **classification schemes**, and **taxonomies** — less formal than OWL.

**Core SKOS terms:**

| Term | Meaning |
|------|---------|
| \`skos:Concept\` | A unit of thought (a "subject" for indexing) |
| \`skos:broader\` | Broader/more general concept |
| \`skos:narrower\` | Narrower/more specific concept (inverse of broader) |
| \`skos:related\` | An associative (symmetric) relationship |
| \`skos:prefLabel\` | The preferred label for a concept |
| \`skos:altLabel\` | An alternative label |
| \`skos:definition\` | A textual definition |
| \`skos:ConceptScheme\` | A collection of concepts |
| \`skos:inScheme\` | Links a concept to its scheme |
| \`skos:hasTopConcept\` | The top-level concept in a scheme |

### 5.11 SKOS broader vs. rdfs:subClassOf — Critical Distinction

\`skos:broader\` is **more generic** than \`rdfs:subClassOf\`. It covers three types of relationships:

| Type | Example | rdfs:subClassOf? |
|------|---------|-----------------|
| **Generic** (is-a, type-of) | Goat broader Mammal | Yes, this works |
| **Mereological** (part-of, location, membership) | Amsterdam broader Netherlands | No — Amsterdam is not a subclass of Netherlands |
| **Topic implication** | Cow_Milk broader Cow | No — milk is not a type of cow |

> **Exam example:** Given terms goat, goat_milk, farm, mammal:
> - \`ex:goat rdfs:subClassOf ex:mammal\` — **Correct** (goats are mammals)
> - \`ex:mammal skos:narrower ex:goat\` — **Correct** (goat is more specific than mammal)
> - \`ex:goat skos:broader ex:farm\` — **Can be correct** (topic implication)
> - \`ex:goat_milk rdfs:subClassOf ex:goat\` — **WRONG** (milk is not a type of goat)

> **Key difference:** A \`skos:Concept\` is a "subject" used to index things, while an \`owl:Class\` defines a set of individuals. SKOS concepts can act as both instances and organizing labels, making SKOS more flexible but less formally rigorous than OWL.

### 5.12 Common Vocabularies and Ontologies

| Vocabulary | Domain | Key Terms |
|-----------|--------|-----------|
| **RDF/RDFS** | Core data model | rdf:type, rdfs:Class, rdfs:subClassOf |
| **OWL** | Formal ontology | owl:Class, owl:ObjectProperty, owl:equivalentClass |
| **FOAF** | People and social | foaf:Person, foaf:name, foaf:knows |
| **Dublin Core** | Bibliographic metadata | dct:creator, dct:title, dct:created, dct:subject |
| **Schema.org** | Search engine structured data | schema:Person, schema:Event, schema:Organization |
| **DBPedia** | Wikipedia structured data | Central hub of Linked Open Data |
| **Geonames** | Geographic locations | Geographic entities and their properties |
| **Data Cube** | Statistical data | Dimensions, measures, observations |
| **SKOS** | Thesauri and taxonomies | skos:Concept, skos:broader, skos:narrower |

### 5.13 Linked Data Publishing Strategies

| Strategy | Pros | Cons |
|----------|------|------|
| Integrate in **application** | User-friendly | Not programmatically accessible |
| **URI dereferencing** | Truly web-based, standard | Limited expressiveness |
| **RESTful API** | Widely understood, flexible | Does not return RDF natively |
| **SPARQL endpoint** | Most expressive, standard | Costly (server load), complex to set up |

### 5.14 Data Integration Workflow

A typical Linked Data integration workflow:
1. **Build ontology** in Protege (TBox)
2. **Import** ontology to a triple store (e.g., GraphDB)
3. **Convert** legacy data (CSV, databases) to RDF triples (e.g., using OntoRefine)
4. **Link** to external datasets (DBPedia, Wikidata) using owl:sameAs
5. **Query** with SPARQL, possibly using federated queries (SERVICE keyword)
6. **Validate** and check for inconsistencies with a reasoner

### 5.15 Formal Semantics vs. Social Semantics

| Type | Examples | Semantics Defined By |
|------|----------|---------------------|
| **Formal** | RDF, RDFS, OWL | Mathematical model theory (sets, relations) |
| **Social/Informal** | FOAF, Dublin Core, Schema.org | Textual descriptions and community usage |

---

## Exam Preparation — Key Concepts and Common Pitfalls

### Truth Table Method for Entailment

To check whether KB ENTAILS formula F:
1. List **all** possible truth value assignments
2. Compute truth values for KB and F in each row
3. Find all rows where **KB is true**
4. In those rows, check if **F is also always true**
5. If yes: entailment holds. If any counterexample: no entailment.

> A **counterexample** to entailment is an interpretation (truth value assignment) that makes the premises true but the conclusion false.

### Prefix/Infix Conversion Method

**Infix to Prefix:**
1. Identify the **main connective** (outermost operator)
2. Write it first, followed by parentheses
3. Recursively convert each operand
4. Atomic variables stay as-is

**Prefix to Infix:**
1. Identify the operator
2. Place it **between** its operands (for binary operators)
3. Add parentheses as needed
4. For unary operators (NOT), place before the operand

### RDFS Entailment Checklist

When given a knowledge graph, systematically derive all possible triples:
1. Apply **domain** (rdfs2) and **range** (rdfs3) rules to every triple with domain/range defined
2. Apply **subProperty** propagation (rdfs7) for any subPropertyOf relationship
3. Apply **subClass type** propagation (rdfs9) for any subClassOf + rdf:type combination
4. Apply **subClass** (rdfs11) and **subProperty** (rdfs5) transitivity
5. Check for **meta-level** inferences (rdfs:domain itself has domain and range defined!)
6. Iterate until fixpoint (no new triples)

### OWL Reasoning Checklist

1. Check for **sameAs** inferences from Functional and InverseFunctional properties
2. Apply **sameAs** substitution in all triples
3. Check **symmetric** and **transitive** property propagation
4. Apply **property chain** axioms
5. Check **restriction-based** inferences (allValuesFrom, someValuesFrom)
6. Check for **inconsistencies** (disjoint class violations, irreflexive violations)

### Common Exam Mistakes to Avoid

| Mistake | Correction |
|---------|-----------|
| Assuming CWA in OWL | OWL uses **Open World Assumption** — absence of info is not negation |
| Inferring class membership from someValuesFrom | someValuesFrom on a superclass is a **necessary**, not sufficient condition |
| Treating different URIs as different entities | OWL has **no unique name assumption** — need owl:sameAs/differentFrom |
| Confusing allValuesFrom and someValuesFrom | allValuesFrom = ALL values must match; someValuesFrom = AT LEAST ONE must match |
| Using rdfs:subClassOf for non-is-a relations | Use skos:broader for part-of and topic-implication relations |
| Thinking SKOS is more expressive than OWL | SKOS is LESS formal — it is for taxonomies, not logical ontologies |
| Modeling shared values as InverseFunctional | InverseFunctional requires the value to UNIQUELY identify the subject |
| Forgetting meta-level RDFS inferences | Properties like rdfs:domain themselves have domain and range! |

### Quick Reference — Symbol Summary

| Symbol/Term | Meaning |
|------------|---------|
| \`rdf:type\` (or \`a\`) | Instance-of relationship |
| \`rdfs:subClassOf\` | Class hierarchy (transitive) |
| \`rdfs:subPropertyOf\` | Property hierarchy (transitive) |
| \`rdfs:domain\` | Class of subjects for a property |
| \`rdfs:range\` | Class of objects for a property |
| \`owl:equivalentClass\` | Bidirectional subClassOf |
| \`owl:disjointWith\` | No shared instances |
| \`owl:sameAs\` | Two URIs refer to same individual |
| \`owl:differentFrom\` | Two URIs refer to different individuals |
| \`owl:allValuesFrom\` | Universal quantifier on property values |
| \`owl:someValuesFrom\` | Existential quantifier on property values |
| \`owl:FunctionalProperty\` | At most one value per subject |
| \`owl:InverseFunctionalProperty\` | Value uniquely identifies subject |
| \`owl:TransitiveProperty\` | Transitive property |
| \`owl:SymmetricProperty\` | Symmetric property |
| \`skos:broader\` | More general concept (generic, partitive, or topical) |
| \`skos:narrower\` | More specific concept |
| \`skos:related\` | Associative/symmetric concept link |
`;
