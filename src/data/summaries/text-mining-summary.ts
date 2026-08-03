export const textMiningSummary = String.raw`
# Text Mining for AI — Course Map

The exam is multiple choice and is drawn from the lecture slides and the compulsory literature. The Canvas self-test quizzes are the only exam-style practice the course provides, so treat them as the real thing. This map covers the six topic blocks in the order they are taught.

## The two problems that run through everything

Text mining fights two things at once:

- **Ambiguity**: one form, several meanings. "Bank" is a financial institution or a riverside. "Fruit flies like a banana" parses two ways.
- **Variation**: many forms, one meaning. "IBM" and "The Big Blue". "New York", "NY" and "The Big Apple".

A useful evaluation habit follows from this split: first push recall up by handling variation and sparseness, then push precision up by resolving ambiguity and pruning features.

Zipf's law explains why this is hard. About 80% of any text consists of a small set of very frequent words, and those words are short and heavily polysemous, so meaning leans on context.

## 1. Linguistics

Five levels, bottom to top, each with its own NLP modules:

| Level | What it covers | Typical modules |
|---|---|---|
| Phonetics and phonology | Sound units | Speech recognition |
| Morphology | Word-internal structure | Tokenisers, POS taggers, lemmatisers, compound splitters |
| Syntax | How words combine | Parsers, chunkers |
| Semantics | Literal meaning | Semantic parsers, word sense disambiguation |
| Pragmatics | Meaning in context | Context and domain models |

**Morphology.** A morpheme is the smallest meaning-bearing unit. Free morphemes stand alone (walk), bound ones must attach (-ed, un-). **Inflection** changes grammatical features while keeping the word and its class (walk becomes walked). **Derivation** builds a new word, often in a new class (boy becomes boyish). This pair shows up on the exam almost every year.

Open word classes (noun, verb, adjective, adverb) accept new members. Closed classes (pronouns, prepositions, determiners, conjunctions) change slowly. Stopwords are not a linguistic class at all: they are just frequent low-content words drawn from both.

**Syntax.** A phrase is a group of words built around a head, and the head determines the type: noun phrase, verb phrase, adjective phrase, prepositional phrase.

- **Constituency parsing** produces a hierarchical tree of nested NP, VP and PP nodes.
- **Dependency parsing** produces flat head-to-dependent arcs between individual words, with the main verb as root.
- **Chunking** is shallow parsing: it finds constituents quickly to a fixed depth without building a full tree or dependency structure.

**Semantics and pragmatics.** Semantics is the literal, conventional meaning. Pragmatics is what a speaker actually conveys in context. Lexical relations worth knowing: synonymy, hyponymy (is-a), meronymy (part-whole), homophony. Metaphor transfers a property across unrelated domains; metonymy substitutes something closely associated, which later causes real trouble for entity classification.

## 2. NLP pipelines

A pipeline splits a hard problem into modules where each output feeds the next. Most pipelines share a front end (tokenisation, sentence splitting, POS tagging) and then branch into task-specific modules. Tokenisation itself is a design choice: whether "state-of-the-art" becomes one, three or four tokens depends entirely on the tokeniser setup.

The two structural risks are **error propagation** (a mistake early on corrupts everything downstream) and **cross-module dependency**, which makes pipelines hard to maintain. Accuracy also drops as you move up the complexity ladder, from bag of words to entities to relations to events.

**Annotation.** Inline annotation inserts markup into the text itself. Stand-off annotation leaves the raw text untouched and points into it by character offsets, which lets several independent layers coexist. CoNLL format puts one token per line with tab-separated columns and IOB tags.

Data quality is graded: **gold** data is manually labelled by humans, **silver** is semi-automatic with some human verification, **bronze** is automatic with little or no human involvement. Inter-annotator agreement is treated as the ceiling on system performance, and a Kappa below 50 means the task is too hard to annotate reliably.

## 3. Machine learning for NLP

**Metrics.** Precision is TP/(TP+FP), recall is TP/(TP+FN), and F1 is their harmonic mean. Accuracy is only meaningful on balanced data, because on skewed data a predict-the-majority baseline scores high while being useless.

**Macro versus micro averaging.** Macro computes precision and recall per class and takes the unweighted mean, so every class counts equally. Micro pools all TPs, FPs and FNs first, so the largest class dominates. On imbalanced data the two give very different numbers, and the exam has asked you to compute macro averages by hand.

Which metric you optimise depends on the cost of being wrong. A tsunami alert wants high recall, because a missed event is far worse than a false alarm. An auto-delete spam filter wants high precision, because losing real mail is worse than letting some spam through.

**Evaluation framework.** Train, dev and test, all representative of the problem. Tuning on the dev set leaks information, so only an untouched test set gives an honest estimate. Cross-validation alone is not enough. Performance drops hard across domains: one NERC system scored F1 90.92 on CoNLL and 68.41 on Wikinews.

**Representations.** Bag of words throws away order, so "the chicken produced an egg" and "the egg produced a chicken" get identical vectors. One-hot vectors are enormous and almost entirely empty, which forces heavy feature engineering.

Embeddings solve this through the **distributional hypothesis**: you know a word by the company it keeps. Word2Vec trains a shallow network to predict context and outputs dense vectors, where cosine similarity measures relatedness and analogies like king minus man plus woman land near queen. The limitation is polysemy: a static embedding collapses "bass" the fish and "bass" the voice into one averaged vector, which is what contextual models fix.

**Sequence labelling** assigns a label to every token given its context, usually in IOB format. A CRF models dependencies between neighbouring labels rather than classifying each token independently. Bi-LSTM-CRF reads embeddings in both directions and decodes an IOB sequence; character embeddings are added back in to recover word shape and affixes that word embeddings lose.

## 4. Sentiment and subjectivity

The lecture treats sentiment as one kind of **subjectivity**, alongside stance, argumentation and attribution. Learn the vocabulary precisely, because the exam distinguishes them:

- **Sentiment or polarity**: explicit positive, negative or neutral.
- **Opinion**: a sentiment relation between a holder and a target.
- **Stance**: an opinion within a debate.
- **Aspect**: an opinion about one attribute of something.

An opinion has four parts: **holder**, **SIP** (the source-introducing predicate, typically a speech-act or cognitive verb such as claim, state, believe, think), **sentiment**, and **target**. In "Emma believes the new restaurant is fantastic", Emma is the holder, believes is the SIP, fantastic carries the sentiment, and the restaurant is the target.

Explicit sentiment is openly evaluative ("ridiculous"). Implicit sentiment has to be inferred ("suffer", "dies"). **Aspect-based sentiment analysis** breaks an entity into attributes such as battery life or service, so one review can be positive about one aspect and negative about another.

**Ekman's six basic emotions** (1976): happiness, sadness, anger, fear, surprise, disgust. Pure recall, worth a flashcard. Plutchik's wheel adds intensity and mixtures.

**What breaks sentiment systems:** figurative language. Metaphor, simile, metonymy, irony and sarcasm all mean the literal words carry the wrong polarity. Negation words (not, never, no, neither) reverse polarity, while diminishers (hardly, barely) weaken it and intensifiers (absolutely, completely) strengthen it. Do not confuse the three.

Useful features: words and n-grams, POS tags, opinion-word lists, negation and modal markers, syntactic dependencies. Ravi & Ravi (2015) found SVMs to be the most commonly used approach. VADER is a rule-based lexicon tuned for social media, handling emoticons, slang, capitalisation and punctuation.

## 5. Named entities

**NER** finds the span that refers to a named entity. **NEC** assigns the type. **NEL** links the mention to a specific real-world entity in a knowledge base. Swapping the first two around is the standard exam trap.

Referring expressions are broader than proper nouns: common noun phrases and pronouns refer too, and for events and properties so do verbs and adjectives.

**Why NERC is hard:** variation, ambiguity, extent (nested entities, where annotators disagree about boundaries), type inventory, time, and metonymy. Metonymy is the sharp one: the same name serves as a location, an organisation or a government depending on the sentence.

**BIO/IOB tagging** marks each token as B-type, I-type or O. The prefixes encode boundaries, which is exactly what a bare class label cannot do: without them two adjacent entities of the same type merge into one.

Three feature families, all examinable:

1. **Word-level**: case, punctuation, digits, character patterns, morphology, POS. **Word shape** abstracts characters to classes, so "spaCy" becomes xxxXx and "12-10-2007" becomes dd-dd-dddd.
2. **Lookup**: gazetteers of first names, countries, organisation cue words.
3. **Document and corpus**: repeated mentions, anaphora, position, corpus frequency.

Word length is not a useful feature, and font size does not affect performance. Genre, training data volume and annotation quality all do.

Balanced evaluation data matters for a specific reason: if a phenomenon is barely present in the test set, the score tells you nothing about how the system handles it.

## 6. Text categorisation and topic modelling

**The key contrast.** Text categorisation is supervised: the topic labels are given in advance. Topic modelling is unsupervised: it discovers clusters of co-occurring words and assumes no prior definition of topics.

There is no universal topic set, because topics are subjective categories and both the world and our view of it keep changing. Granularity depends on the application, not on a fixed rule. A topic can be assigned to a sentence, a tweet, an article or an entire book.

**Supervised classification.** The advantage is control over the topic set. The disadvantages are that new topics outside the training data cannot be detected, results skew towards the training distribution, and topics plus training data need manual maintenance. Note carefully that control is an advantage, since the exam asks which option is *not* a disadvantage.

Longer documents are harder than short ones because they usually cover several topics at once, which makes a single label ambiguous.

**LDA.** A generative matrix-factorisation method that fixes the number of topics K in advance and derives a document-topic matrix and a topic-word matrix. Three limitations:

- **Instability**: random initialisation and internal sampling mean two runs on the same corpus produce different topics.
- **Topic independence**: topics are assumed independent, but real documents mix them. Correlated Topic Models address this.
- **Word independence**: the bag-of-words assumption ignores semantic drift.

Clusters are labelled by extracting the most distinctive keywords with TF-IDF. Globally frequent words appear in every cluster and distinguish nothing.

**Fine-tuning.** **Catastrophic forgetting** is the tendency of a model to lose knowledge acquired during pre-training when fine-tuned on new data. Churchill & Singh (2021) list dataset size, noise level and document length as the factors for choosing a topic model; algorithmic complexity is not among them.

## What is out of scope

The Canvas module pages override the general syllabus in three places:

- The mathematical background in Vayansky & Kumar (2020) is explicitly not for the exam.
- Section 5 of Churchill & Singh (2021) can be skipped.
- You do not need to know the differences between SVM variants in Saigal & Khanna (2020).

Everything else on the literature list is fair game.

## How to prepare

1. Work through all six Canvas self-test quizzes. They are the closest thing to the real exam that exists.
2. Redo the questions you got wrong two days later, then again the day before the exam.
3. Build flashcards for the pure-recall items: Ekman's six emotions, the WordNet counts, Ravi & Ravi on SVMs, the precision and recall formulas.
4. Drill the definition contrasts, since a large share of questions are exactly these: dependency versus constituency parsing, NER versus NEC, inflection versus derivation, inline versus stand-off annotation, gold versus silver versus bronze, macro versus micro averaging, ambiguity versus variation.
5. Read negatively phrased stems twice. Questions asking which option is *not* a disadvantage or does *not* impact performance appear in several blocks.
6. On the last day, shuffle questions across all six blocks instead of reviewing one block at a time. The real exam interleaves them.
`;
