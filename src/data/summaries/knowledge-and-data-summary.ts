/**
 * Knowledge and Data Summary — inline markdown content.
 * Compiled from weekly materials and practice questions for the VU Knowledge and Data course.
 * Covers: Knowledge representation, RDF, RDFS, SPARQL, OWL, Ontology Engineering,
 * Linked Data principles, and Reasoning/Inference.
 */
export const knowledgeAndDataSummary = `
# Knowledge and Data — Comprehensive Summary

---

## 1. Knowledge Representation Fundamentals

### Data, Information, and Knowledge

| Concept | Definition |
|---------|-----------|
| **Data** | Individual facts out of context, with no meaning; difficult to understand on their own |
| **Information** | Data placed in context, relevant to one or more people at a point in time |
| **Knowledge** | Information retained with an understanding of its significance; knowledge = information + rules |

> **Key fact:** Data preparation accounts for roughly 80% of a data scientist's work.

### Tacit vs. Explicit Knowledge
- **Tacit knowledge** (implicit): knowledge a person retains in their mind — intangible, invisible, private (approx. 80%)
- **Explicit knowledge** (formal): knowledge that has been formalized, codified, and stored — tangible, visible, public (approx. 20%)
- Formal knowledge helps us **interpret** and **reuse** data, enabling predictable inference

### Knowledge Graphs
A knowledge graph is a way of representing data, information, and knowledge that is:
- **Heterogeneous** — accommodates different types of data
- **Interpretable** — others can correctly interpret the data
- **Semantic** — makes the meaning of information explicit
- **Graph-based** — uses a network structure
- **Web-accessible** — published explicitly on the Web

### The Four Proposals for Linked and Semantic Data
| Proposal | Description |
|----------|-------------|
| **P1** | Give all things a name |
| **P2** | The names are addresses on the Web (URIs) |
| **P3** | Relations form a graph between things |
| **P4** | Make explicit the meaning of things (assign types, organize hierarchies, define rules) |

- P1 + P2 + P3 = a **(global) graph of Linked Data**
- P4 adds the **Semantic Web** layer: shared model, formal semantics, predictable inferencing

### Querying vs. Inferencing
- **Querying** (P1--P3): data must be connected, accessible on the Web, and in a known data format
- **Inferencing** (P4): requires a shared model with defined formal semantics and predictable inference rules
- **Calculating with Knowledge** = inferencing = reasoning
- Inferencing is *algorithmic manipulation* of knowledge to derive new knowledge; the meaning of words is **not needed**

---

## 2. Formal Systems and Logic Foundations

### What Is a Logic?
A logic is a formal language with three components:
- **Syntax** — which expressions are well-formed (legal)
- **Semantics** — what legal expressions mean with respect to interpretations
- **Calculus** — how to determine meaning for legal expressions

### Propositional Logic
- **Propositional variables**: p, q, r, ...
- **Connectives**: $\\rightarrow$, $\\lor$, $\\land$, $\\neg$, ...
- **Infix notation**: $(p_1 \\Rightarrow p_2)$
- **Prefix notation**: $[\\Rightarrow, [[p_1], [p_2]]]$

**Key concepts:**
- **Semantic equivalence**: Formulas x and y are semantically equivalent ($x \\equiv y$) if they have identical truth table columns
- **Tautology**: a formula that is true for every valuation
- **Contradiction**: a formula that is false for every valuation
- **Semantic entailment**: $y_1, \\ldots, y_n \\models x$ if for every valuation that makes all $y_i$ true, x is also true

> **Exam example:** To check $\\neg p \\lor (q \\rightarrow p) \\models \\neg p \\land q$, build a truth table. For all assignments making the left side true, the right side must also be true. If any row violates this, the entailment does not hold.

### Simple Knowledge Graph Logic
**Syntax:**
- **Vocabulary V**: a set of names (no distinction between objects and literals)
- **Predicates P**: a set of relations
- **Triples**: T = V x P x V — if $r_1, r_2 \\in V$ and $p \\in P$, then $(r_1, p, r_2) \\in T$
- A **knowledge graph** is a set of triples $t \\in T$

**Semantics (grounded graphs):**
- An interpretation I consists of:
  - **IR** — a universe (set of arbitrary objects)
  - $I^R: V \\rightarrow IR$ — assigns domain elements to vocabulary words
  - $I^P: P \\rightarrow \\text{Powerset}(IR \\times IR)$ — assigns pairs to predicates
- A triple $(s, p, o)$ is **true** w.r.t. interpretation I iff $(I^R(s), I^R(o)) \\in I^P(p)$
- I is a **model** of a knowledge base if it is a model of all its triples
- A set of triples is **entailed** by a knowledge graph if it is a subgraph of the knowledge graph

---

## 3. RDF — Resource Description Framework

![Semantic Web Layer Cake — W3C technology stack from URI to OWL](/assets/images/semantic-web-stack.svg)

### Overview
RDF is a **data model** for data interchange on the Web:
- Facilitates **data merging** even when schemas differ
- Extends the linking structure of the Web by using URIs to name **relationships**
- Allows data to be mixed, exposed, and shared

### RDF Triples
- All information in RDF is expressed as **triples**: (subject, predicate, object)
- A triple = a statement or fact
- Elements of an RDF triple are either a **URI reference**, a **blank node**, or a **literal**

![RDF Triple — subject-predicate-object graph structure](/assets/images/rdf-triple-graph.svg)

| Position | URI References | Literals | Blank Nodes |
|----------|:---:|:---:|:---:|
| **Subject** | Yes | No | Yes |
| **Predicate** | Yes | No | No |
| **Object** | Yes | Yes | Yes |

### URIs (Uniform Resource Identifiers)
- RDF talks about **resources** (almost anything is a resource)
- Resources are **identified by** URIs; URIs **denote** resources
- URIs can only *refer* to a resource — they are **not** the resource itself
- Multiple URIs can denote the **same** resource
- HTTP URIs have **global scope** (unique throughout the Web) and are also **addresses**
- **IRIs** (Internationalized Resource Identifiers) extend URIs with Unicode support

### RDF Literals
- Used to represent "literal" data values (strings, numbers, dates, etc.)
- All literals have a **data type** (which are also resources)
- Strings can have a **language tag** (e.g., \`"The Netherlands"@en\`)

### RDF Graphs
- An RDF graph is a **set of triples**
- In practice, many RDF graphs **have URIs** themselves
- Merging two RDF graphs = taking their **union**
- Basic set operations are well-defined on RDF graphs

### Blank Nodes
- Blank nodes are resources **without a URI** (in the current context)
- They act as **existential quantifiers** — "there exists some resource..."
- Can be used as placeholders even when a URI might exist elsewhere
- Designated with underscores or \\[...\\] in Turtle syntax

### RDF Serialization — Turtle Syntax
Turtle is a convenient, human-readable/writable syntax for RDF:

- **Comments** start with \`#\`
- **Full URIs** are enclosed in \`<...>\`
- **Statements** are triples terminated by a period \`.\`
- \`a\` abbreviates \`rdf:type\`
- **Namespace prefixes** are declared with \`@prefix\`
- **Literal values** are in double quotes, optionally with language or type info
- **Numbers** and **booleans** can be written without quotes

**Turtle shortcuts:**
- Statements sharing a **subject** use \`;\` (semicolon) to separate predicate-object pairs
- Statements sharing a **subject and predicate** use \`,\` (comma) to separate objects

**Example — Turtle serialization:**

    @prefix ex: <http://www.example.org/> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix dbr: <http://dbpedia.org/resource/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

    ex:s1 rdf:type dbr:Student .
    ex:s1 ex:hasVUnetID "as344" .
    ex:s1 ex:studiesAt ex:UvA .
    ex:s1 ex:followsStudy ex:IK .

    ex:s2 a dbr:Student ;            # shorthand for rdf:type
        ex:hasVUnetID "ex444"^^xsd:string ;
        ex:studiesAt ex:VU ;
        ex:followsStudy ex:IMM .

### Converting Tabular Data to RDF
When converting relational tables to a knowledge graph:
1. Each **row identifier** becomes a resource (subject)
2. Each **column header** becomes a property (predicate)
3. Each **cell value** becomes either a resource or a literal (object)
4. **Type assertions** assign classes: e.g., \`(s1, a, Student)\`

> **Exam tip:** When identifying Literals, Resources, and Properties from a table: values like names and dates are Literals; entities like students and universities are Resources; column headers like hasFirstName, hasLastName are Properties.

---

## 4. RDFS — RDF Schema

### Purpose
Without **formal semantics**, the Web of Data is meaningless. RDFS provides:
- Distinction between **classes**, **properties**, and **instances** (schema vs. data)
- **Reserved symbols** with defined semantics
- **Entailment rules** for deriving new facts

### RDFS Key Terms

**Terms for classes:**
- \`rdfs:Class\` — declares something as a class
- \`rdfs:subClassOf\` — declares a subclass relationship

**Terms for properties:**
- \`rdfs:domain\` — the class of subjects that use this property
- \`rdfs:range\` — the class of objects that this property points to
- \`rdfs:subPropertyOf\` — declares a subproperty relationship

**Special classes:**
- \`rdfs:Resource\` — everything is a resource
- \`rdfs:Literal\` — the class of literal values
- \`rdfs:Datatype\` — the class of datatypes

**Additional terms:**
- \`rdfs:label\` — human-readable label for a resource
- \`rdfs:comment\` — comment/description on a resource
- \`rdfs:seeAlso\` — refers to another resource

### RDFS Entailment Rules

| Rule | If you have... | Then you can derive... |
|------|---------------|----------------------|
| **rdfs1** | any triple (s p o) | s rdf:type rdfs:Resource; p rdf:type rdf:Property; o rdf:type rdfs:Resource (if URI) or rdfs:Literal (if literal) |
| **rdfs2** | s rdf:type X, X rdfs:subClassOf Y | s rdf:type Y |
| **rdfs3** | p rdf:type rdf:Property | p rdfs:subPropertyOf p |
| **rdfs4** | s rdfs:subClassOf Y, Y rdfs:subClassOf Z | s rdfs:subClassOf Z |
| **rdfs5** | p rdfs:subPropertyOf q, q rdfs:subPropertyOf r | p rdfs:subPropertyOf r |
| **rdfs6** | s p o, p rdfs:subPropertyOf q | s q o |
| **rdfs7 (domain)** | s p o, p rdfs:domain X | s rdf:type X |
| **rdfs8 (range)** | s p o, p rdfs:range X | o rdf:type X |
| **rdfs9** | s rdf:type O, O rdfs:subClassOf T | s rdf:type T |

> **Exam example:** Given KG = \\{(ex:s ex:p ex:o), (ex:p rdfs:domain ex:C), (rdfs:domain rdfs:range rdfs:Class)\\}, applying rule rdfs7 (domain) yields: ex:s rdf:type ex:C. Then applying rule rdfs8 (range) on the rdfs:domain triple yields: ex:C rdf:type rdfs:Class.

### RDFS Observations
- No **strict** distinction between schema and data level
- Entailment rules do **not** include negation
- No notion of **equality**
- Not prohibited to use reserved symbols in data formulas
- RDFS is **not very expressive** — OWL extends it significantly

---

## 5. SPARQL — Query Language for RDF

### Overview
- SPARQL is the **query language** for the Web of Linked Data
- Queries are sent to **SPARQL endpoints** over **HTTP**
- Queries describe **graph patterns** with **variables** (prefixed with \`?\`)
- Graph patterns are **matched** against the RDF graphs in the triple store
- Results are returned as a **table with variable bindings**

### Where to Find RDF Data
1. As **separate files** (.ttl, .rdf, .nt, etc.)
2. **Integrated** with Web pages (RDFa/Microdata)
3. Accessible through **content negotiation**
4. In RDF-specific databases called **triple stores**

### Query Types

| Query Type | Returns |
|-----------|---------|
| **SELECT** | A table with variable bindings |
| **CONSTRUCT** | An RDF graph |
| **ASK** | true or false |
| **DESCRIBE** | An RDF graph describing a resource |
| **INSERT** | Like CONSTRUCT, but inserts into the triple store |
| **DELETE** | Removes matching triples |

### SPARQL Clauses

| Clause | Purpose |
|--------|---------|
| **WHERE** | Specifies the graph pattern (an RDF graph with variables) |
| **FILTER** | Validates a condition (clause must be true) |
| **OPTIONAL** | Pattern does not need to match (left join) |
| **UNION** | At least one pattern should match |
| **ORDER BY** | Sort results (e.g., \`ORDER BY DESC(?x)\`) |
| **DISTINCT** | Remove duplicate results |
| **LIMIT** | Restrict the number of results |
| **GROUP BY** | Group results for aggregation |

### SPARQL Examples

**Basic SELECT query — find all capitals:**

    SELECT ?x ?y
    WHERE {
        ?x <http://example.org/has_capital> ?y .
    }

**Query with OPTIONAL and FILTER:**

    PREFIX ex: <http://example.org/>
    SELECT ?student ?name
    WHERE {
        ?student rdf:type ex:Student .
        ?student ex:hasName ?name .
        OPTIONAL { ?student ex:hasAge ?age }
        FILTER (?age > 18)
    }

**Aggregation with GROUP BY and ORDER BY:**

    SELECT ?x (COUNT(?y) AS ?nb_y)
    WHERE {
        ?y <http://example.org/studiesIn> ?x
    }
    GROUP BY (?x)
    ORDER BY DESC (?nb_y)

> This query returns a count of people studying in each city, ordered by count descending.

**ASK query — check if a fact exists:**

    ASK {
        ex:Amsterdam rdf:type ex:City .
    }

**CONSTRUCT query — build a new graph:**

    CONSTRUCT {
        ?x ex:livesIn ?city .
    }
    WHERE {
        ?x ex:studiesAt ?uni .
        ?uni ex:locatedIn ?city .
    }

### Triple Stores
- Purpose-built **(graph) databases** to deal with RDF data
- Data can be stored persistently on disk or in memory
- Optimized for fast querying through:
  - **Dictionary** encoding (replace names by addresses)
  - **Indexing** for fast access
  - Efficient handling of **JOINs** in SPARQL

---

## 6. RDF Entailment and Inference

### Formal Semantics of RDF
- Model-theoretic semantics: replace each blank node x by A(x) to get a **grounding** G' of graph G
- $I \\models G$ iff $I \\models G'$ for **at least one** grounding G' of G
- Theorem: $A \\models B$ iff B can be obtained from A by replacing some nodes in A by blank nodes

### Knowledge Representation Principles
A knowledge representation language has:
- A set of **reserved symbols**
- A set of **variables** that may be assigned values
- A **formal semantics** defining meaning and entailment
- A set of **inference rules** for manipulating formulas

### What Formulas Can Express
- **Conditions on class membership**: "all mammals are warm-blooded"
- **Relations between classes**: "all cities are populated"
- **Assertions of class membership**: "Amsterdam is a City"
- **Characteristics of properties**: "hasCapital only relates countries to cities"
- **Assertions of property relations**: "hasCapital(Netherlands, Amsterdam)"
- **Assertions of equality**: "morning star = evening star = venus"

> Formulas are axioms that **restrict** the possible interpretations of the world. Entailment is defined as truth in these restricted interpretations.

---

## 7. RDFS Vocabularies and Other Standards

### Common Vocabularies
| Vocabulary | Purpose | Example Terms |
|-----------|---------|--------------|
| **RDF/RDFS** | Reserved terms for the data model | rdf:type, rdf:Property, rdfs:Class |
| **FOAF** | Persons and relations | foaf:Person, foaf:name, foaf:knows |
| **Dublin Core (DC/DCTerms)** | Bibliographic attributes | dct:creator, dct:title, dct:created |
| **DBPedia** | At the heart of the Web of Data | General-purpose ontology |
| **Geonames** | Locations | Geographic entities |
| **SKOS** | Thesaurus/taxonomy modeling | skos:Concept, skos:broader, skos:narrower |
| **OWL** | Formal constraints on class membership | owl:Class, owl:ObjectProperty |

### Schema.org
- Initiative by Google, Microsoft, Yahoo for **search engine optimization**
- Provides structured data markup for web pages

### SKOS — Simple Knowledge Organization System
- \`skos:Concept\` is a "subject" to index things (vs. \`owl:Class\` which is a set of things)
- \`skos:broader\` is more **generic** than \`rdfs:subClassOf\` — covers:
  - Generic (subclass or type)
  - Mereological (structural, location, membership)
  - Topic implication (e.g., "cow milk" under "cows")
- \`skos:narrower\` — inverse of skos:broader
- \`skos:related\` — a **symmetric** relation
- Concepts can have **preferred** and **alternate** labels

> **Exam example:** Given terms goat, goat_milk, farm, mammal: \`ex:goat rdfs:subClassOf ex:mammal\` is correct (class hierarchy). \`ex:mammal skos:narrower ex:goat\` is also correct (thesaurus). \`ex:goat skos:broader ex:farm\` can be correct (topic implication). But \`ex:goat_milk rdfs:subClassOf ex:goat\` is wrong (milk is not a type of goat).

### Formal Semantics vs. Social Semantics
- **RDF, RDFS, OWL** have strictly formally defined semantics (w.r.t. graphs and sets)
- **FOAF** and others have informal semantics (defined in textual descriptions and usage online)

---

## 8. OWL — Web Ontology Language

![Wikidata statement structure — knowledge graph data model](/assets/images/wikidata-datamodel.svg)

### Why OWL?
RDFS is too simple:
- We need more context for **domain** and **range** (e.g., people live in houses, badgers live in setts)
- Properties may have **cardinality** (e.g., the USA has only one president)
- Properties may have other **characteristics** (symmetric, transitive, etc.)

### OWL Foundations
- Extension of RDF Schema and syntax
- Built on **Description Logics** (DL)
- Trade-off between **expressive power** and **computational efficiency**
- **Decidability** plays a central role (the restricted language thesis)
- Strict separation of **individuals** (instances), **classes**, and **properties**

### Key OWL Assumptions
- **No unique naming assumption**: instances with different names can be the same thing
- **Open World Assumption (OWA)**: nothing is assumed true or false unless it is *explicit* knowledge or *derivable* from axioms
  - Closed World Assumption (CWA): if not explicitly stated true, it is false (databases)
  - OWA: we do not make assumptions based on absence of statements (Web)

### OWL Classes
- **owl:Thing** — the top class; every individual is of type owl:Thing
- **owl:Nothing** — the bottom class; no individual is of type owl:Nothing
- Every class is of type **owl:Class** (and rdfs:Class by transitivity)
- Every class is a subclass of **owl:Thing**
- If any class is a subclass of **owl:Nothing**, it indicates **inconsistency**

### Class Constructors

| Constructor | Meaning | Turtle Example |
|------------|---------|----------------|
| **owl:equivalentClass** | Two classes contain the same individuals | \`ex:A owl:equivalentClass ex:B .\` |
| **owl:complementOf** | Contains all individuals NOT in the class | \`ex:B owl:complementOf ex:A .\` |
| **owl:disjointWith** | Two classes share no individuals | \`ex:A owl:disjointWith ex:B .\` |
| **owl:unionOf** | Contains all individuals in ANY of the listed classes | \`ex:C owl:unionOf (ex:A ex:B) .\` |
| **owl:disjointUnionOf** | Union of mutually disjoint classes | \`ex:Person owl:disjointUnionOf (ex:Left ex:Right) .\` |
| **owl:intersectionOf** | Contains individuals in ALL listed classes | \`ex:C owl:intersectionOf (ex:A ex:B) .\` |
| **owl:oneOf** | Enumerates all members of a class | \`ex:A owl:oneOf (ex:a1 ex:a2 ex:a3) .\` |

> **Key inference:** If ex:A owl:disjointWith ex:B, and ex:a rdf:type ex:A, and ex:b rdf:type ex:B, then ex:a owl:differentFrom ex:b. If ex:b were also typed as ex:A, the ontology would be **inconsistent**.

### OWL Property Types

| Type | Description | Range |
|------|------------|-------|
| **Object Properties** | Relate individuals to individuals | Non-literals only |
| **Datatype Properties** | Relate individuals to data values | Literals only |
| **Annotation Properties** | Metadata; cannot be used in restrictions | N/A |

These categories are **disjoint** — every property belongs to exactly one.

### Property Characteristics

| Characteristic | Meaning | Inference Rule |
|---------------|---------|---------------|
| **Symmetric** | Always holds in both directions | if p(x,y) then p(y,x) |
| **Asymmetric** | Never holds in both directions | if p(x,y) then p(y,x) is inconsistent |
| **Transitive** | Propagates over itself | if p(x,y) and p(y,z) then p(x,z) |
| **Functional** | Has only one value per individual | if p(x,y) and p(x,z) then y owl:sameAs z |
| **Inverse Functional** | Value uniquely identifies the individual | if p(x,y) and p(z,y) then x owl:sameAs z |
| **Reflexive** | Every individual is related to itself | for all x: p(x,x) |
| **Irreflexive** | No individual is related to itself | if p(x,x) then inconsistent |

> **Exam example:** "Which relations are both symmetric and irreflexive?" — hasFamilyMember and siblingOf are both (they hold in both directions, but nobody is their own family member/sibling). fatherOf, motherOf, uncleOf, ancestorOf are not symmetric.

> **Exam example:** "Which property can be safely modelled as owl:InverseFunctionalProperty?" — None of hasFirstName, hasLastName, or hasBirthDate uniquely identify an individual (multiple people can share the same first name, last name, or birthdate). The answer is "None of the above."

### Property Axioms

| Axiom | Meaning | Inference |
|-------|---------|-----------|
| **owl:inverseOf** | One property is the inverse of another | if inverseOf(p,q) and p(x,y) then q(y,x) |
| **owl:equivalentProperty** | Two properties always co-occur | if equivalentProperty(p,q) and p(x,y) then q(x,y) |
| **owl:propertyChainAxiom** | Property propagates over a chain | if chain(p, [q,r]) and q(x,y) and r(y,z) then p(x,z) |
| **owl:disjointProperty** | Two properties never co-occur | if disjointProperty(p,q) and p(x,y) then q(x,y) is inconsistent |

### OWL Entailment Rules Summary

| # | Rule |
|---|------|
| 1 | v owl:sameAs w implies w owl:sameAs v (symmetric) |
| 2 | u owl:sameAs v and v owl:sameAs w implies u owl:sameAs w (transitive) |
| 3 | v owl:sameAs w and v p o implies w p o (substitution) |
| 4 | p rdf:type owl:SymmetricProperty and v p w implies w p v |
| 5 | p rdf:type owl:TransitiveProperty and u p v and v p w implies u p w |
| 6 | v owl:equivalentClass w iff v rdfs:subClassOf w and w rdfs:subClassOf v |
| 7 | p owl:equivalentProperty q iff p rdfs:subPropertyOf q and q rdfs:subPropertyOf p |
| 8 | p rdf:type owl:FunctionalProperty and x p y and x p v implies y owl:sameAs v |
| 9 | p rdf:type owl:InverseFunctionalProperty and v p s and v p w implies v owl:sameAs w |
| 10 | r owl:propertyChainAxiom (p q) and v p x and x q s implies v r s |

### OWL Restrictions (Class Descriptions)
OWL allows defining classes by restricting property values:

**Universal restriction (allValuesFrom):**

    ex:EuropeanCitizen owl:equivalentClass [
        rdf:type owl:Restriction ;
        owl:onProperty ex:citizenOf ;
        owl:allValuesFrom ex:EuropeanCountry
    ] .

> This means: a EuropeanCitizen is equivalent to someone whose citizenOf values are ALL EuropeanCountry instances.

**Existential restriction (someValuesFrom):**

    ex:EuropeanCitizen rdfs:subClassOf [
        rdf:type owl:Restriction ;
        owl:onProperty ex:citizenOf ;
        owl:someValuesFrom ex:EuropeanCountry
    ] .

> This means: every EuropeanCitizen has AT LEAST ONE citizenOf value that is a EuropeanCountry.

> **Exam example (allValuesFrom):** Given that ex:EuropeanCitizen owl:equivalentClass a restriction with owl:allValuesFrom ex:EuropeanCountry on ex:citizenOf, and ex:john ex:citizenOf ex:usa, and ex:john rdf:type ex:EuropeanCitizen — we can derive that ex:usa rdf:type ex:EuropeanCountry (all values must be EuropeanCountry).

> **Exam example (someValuesFrom):** Given that ex:EuropeanCitizen rdfs:subClassOf a restriction with owl:someValuesFrom ex:EuropeanCountry on ex:citizenOf, and ex:john ex:citizenOf ex:netherlands, and ex:netherlands rdf:type ex:EuropeanCountry — we CANNOT derive that ex:john rdf:type ex:EuropeanCitizen. The restriction is only a necessary condition on the subclass direction; someValuesFrom on a superclass does not allow inferring class membership. The answer is "None of the above."

---

## 9. Ontology Engineering

### What Is an Ontology?
"An ontology is an **explicit** specification of a **shared conceptualization** that holds in a particular **context**."

### Benefits of Ontologies
- Communication between people
- Interoperability between software agents
- Reuse of domain knowledge
- Making domain knowledge explicit and analyzable

### Ontological Engineering Principles
- Follow a **methodology** when building large ontologies
- Maintain proper **scope**, **maximal agreement**, and **minimal ontological commitment**
- Ontological commitment concerns the **expressiveness** of the language

### Ontological Commitment
- Each statement is a **commitment** to a view of the domain
- **Over-commitment**: the ontology makes too strong a statement
- Ontologies live in an **open** distributed world (unlike OO models in a **closed** world)
- **Rule of thumb**: choose the **minimal** ontological commitment needed

| Type | Language |
|------|---------|
| Thesaurus/Taxonomy | SKOS |
| Vocabulary | RDF Schema |
| Ontology | OWL |

### Ingredients of Ontological Engineering
1. **Classes** (concepts) and their hierarchy
2. **Properties** (attributes & relations) and their hierarchy
3. **Class axioms** (disjointness, equality)
4. **Class restrictions** (universal, existential, cardinality)
5. **Property types** (domain/range, functional, transitive)
6. **Instances** (individuals)

### Ontology Development Methodology

| Step | Description |
|------|-------------|
| 1. **Determine domain & scope** | What area does the ontology cover? |
| 2. **Consider reuse** | Almost always an existing ontology provides a starting point |
| 3. **Enumerate terms** | Nouns/noun phrases become **class** names; verbs/verb phrases become **property** names |
| 4. **Define taxonomy** | Organize terms in a hierarchical structure |
| 5. **Define properties** | Think of domain and range for each property |
| 6. **Define classes and their properties** | Revise taxonomy if needed |
| 7. **Define instances** | Ontology population (often semi-automatic from legacy data) |
| 8. **Check for anomalies** | Detect inconsistencies (a key advantage of OWL over RDFS) |

### Common Inconsistencies to Check
- Incompatible domain and range definitions for symmetric, transitive, or inverse properties
- Cardinality restrictions that conflict with data
- Requirements on property values that conflict with domain & range

### Methodological Approaches
- **Top-down**: start with classes and properties, work down to instances
- **Bottom-up**: start with existing data and use cases
- **Middle-out**: start with fundamental concepts, work both up and down

> **Exam tip:** A taxonomy only contains terms organized in a **hierarchical structure**. An ontology is **more expressive** than a taxonomy. SKOS is NOT more expressive than OWL in formal logic terms.

---

## 10. Linked Data Principles

### Linked Open Data
- **Open Data** is about *licenses* to allow reuse
- **Linked Data** is about *technology* for interoperability
- Structured data, not documents
- Graph (networked) data
- Built on **W3C Web standards**

![Linked Open Data Cloud — interconnected open datasets on the Web](/assets/images/linked-open-data-cloud.svg)

### Technology Stack
| Technology | Purpose |
|-----------|---------|
| **URI** | Uniform Resource Identifier to avoid naming conflicts |
| **HTTP** | Hypertext Transfer Protocol to access and move data |
| **Namespaces/Prefixes** | Group and abbreviate URIs |
| **RDF** | Common data model |
| **SPARQL** | Query language for querying data over HTTP |
| **Triple stores** | Store large volumes of RDF data |
| **Ontology editors** | Define semantics (e.g., Protege) |
| **Reasoners** | Infer new knowledge |

### Publishing Linked Data — Strategies
| Strategy | Notes |
|----------|-------|
| Integrate in an **application** | Not programmatically accessible |
| Expose via **URI dereferencing** | Truly web-based, limited expressiveness |
| Expose via **RESTful API** | Limited expressiveness, does not return RDF |
| Expose via **SPARQL endpoint** | Most expressive but costly (server load) |

### Data Integration
- Transform external information into RDF when needed
- Try to maintain the **original schema** as much as possible
- Use **inferencing** to derive mappings where possible
- Be careful to choose the best **architecture** for your application
- Typical workflow: Build ontology in Protege, import to GraphDB, convert CSV to triples with OntoRefine, link to DBPedia, query with SPARQL

### Ontology Alignment and Merging
- **Ontology alignment**: semantic mapping between classes and properties of two or more ontologies
- **Ontology merging**: integration of two or more ontologies into a new coherent ontology
- Produced mappings have a **degree of confidence**
- Evaluation: judge individual links (precision), compare to a reference alignment, compare logical entailments, end-to-end evaluation

---

## 11. Key Exam Concepts and Practice Patterns

### Converting Infix to Prefix Notation
For formula: $\\neg((A \\rightarrow (\\neg B \\lor C)) \\lor (\\neg D \\lor \\neg E))$

Prefix notation: $\\neg(\\lor(\\rightarrow(A, \\lor(\\neg(B), C)), \\lor(\\neg(D), \\neg(E))))$

> Build a parse tree from the formula, then read prefix by placing the operator before its operands.

### Model Checking in Propositional Logic
For formula $p \\rightarrow (\\neg q \\land r)$:
- $I(p) = \\text{True}, I(q) = \\text{False}, I(r) = \\text{True}$ is a model
- Because $p$ is true, we need $\\neg q \\land r$ to be true, which requires $q$ to be false and $r$ to be true

### Entailment Proofs in Arithmetic
To show $f, g \\models h$ where $f: 3x < 12 + 6y$ and $g: y = 1$ and $h: x < 10$:
1. Consider all models of $f$ and $g$ (assignments making both true)
2. If $I^v(3x < 12 + 6y, y = 1)$ is true, then $I^v(3x < 18)$ is true
3. So $I^v(x < 6)$, and since $x < 6 < 10$, $I^v(x < 10)$ is true

### RDFS Inference Chains
When asked "which triples can be derived," systematically apply rules:
1. Check domain rules (rdfs7): if \`s p o\` and \`p rdfs:domain X\`, derive \`s rdf:type X\`
2. Check range rules (rdfs8): if \`s p o\` and \`p rdfs:range X\`, derive \`o rdf:type X\`
3. Check subclass transitivity (rdfs4): chain subClassOf relationships
4. Check subproperty rules (rdfs5, rdfs6): propagate through property hierarchies
5. Check type propagation (rdfs9): if \`s rdf:type A\` and \`A rdfs:subClassOf B\`, derive \`s rdf:type B\`

### OWL Restriction Reasoning
- **owl:allValuesFrom** (universal): if an individual is in the restricted class, ALL values of the property must be in the filler class
- **owl:someValuesFrom** (existential): if an individual is in the restricted class, AT LEAST ONE value of the property must be in the filler class
- Be careful about the **direction** of subClassOf — someValuesFrom as a superclass restriction does NOT let you infer class membership from matching data

> **Exam tip:** With owl:equivalentClass and allValuesFrom, you can infer the type of the property value. With rdfs:subClassOf and someValuesFrom, you cannot infer class membership of the subject just because one value matches — the restriction describes a necessary condition of the subclass, not a sufficient one for membership.
`;
