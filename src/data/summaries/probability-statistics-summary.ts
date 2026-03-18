/**
 * Comprehensive Probability and Statistics Summary -- inline markdown content.
 * Covers Chapters 1, 3, 4, 6, 7, and 8: Basic Concepts (Set Theory, Random
 * Experiments, Conditional Probability, Counting), Discrete Random Variables,
 * Continuous Random Variables, Joint Distributions, Limit Theorems, and
 * Statistical Inference (Point Estimation, MLE, Confidence Intervals,
 * Hypothesis Testing, Likelihood Ratio Tests).
 */
export const probabilityStatisticsSummary = `
## Chapter 1 -- Basic Concepts

---

### 1.1 Set Theory

#### Definitions

A **set** is a collection of distinct objects called **elements**. We write $x \\in A$ if $x$ belongs to set $A$, and $x \\notin A$ otherwise.

| Term | Notation | Meaning |
|------|----------|---------|
| **Subset** | $A \\subseteq B$ | Every element of $A$ is also in $B$ |
| **Proper subset** | $A \\subset B$ | $A \\subseteq B$ and $A \\neq B$ |
| **Empty set** | $\\emptyset$ | The set with no elements |
| **Universal set** | $\\Omega$ | The set of all elements under consideration |
| **Cardinality** | $|A|$ | The number of elements in $A$ |

#### Set Operations

| Operation | Notation | Definition |
|-----------|----------|------------|
| **Union** | $A \\cup B$ | $\\{x : x \\in A \\text{ or } x \\in B\\}$ |
| **Intersection** | $A \\cap B$ | $\\{x : x \\in A \\text{ and } x \\in B\\}$ |
| **Complement** | $A^c$ | $\\{x \\in \\Omega : x \\notin A\\}$ |
| **Difference** | $A \\setminus B$ | $\\{x : x \\in A \\text{ and } x \\notin B\\} = A \\cap B^c$ |
| **Cartesian product** | $A \\times B$ | $\\{(a, b) : a \\in A, \\, b \\in B\\}$ |

**Mutually exclusive (disjoint):** Sets $A$ and $B$ are mutually exclusive if $A \\cap B = \\emptyset$.

**Partition:** A collection $\\{B_1, B_2, \\ldots, B_n\\}$ is a partition of $\\Omega$ if the $B_i$ are mutually exclusive and $B_1 \\cup B_2 \\cup \\cdots \\cup B_n = \\Omega$.

**Countable vs. Uncountable:** A set is **countable** if its elements can be put in a one-to-one correspondence with a subset of $\\mathbb{N}$ (e.g., $\\mathbb{Z}$, $\\mathbb{Q}$). A set is **uncountable** if no such correspondence exists (e.g., $\\mathbb{R}$, any interval $[a, b]$).

#### Key Laws

**De Morgan's Laws:**

$$\\left(\\bigcup_{i} A_i\\right)^c = \\bigcap_{i} A_i^c, \\qquad \\left(\\bigcap_{i} A_i\\right)^c = \\bigcup_{i} A_i^c$$

In words: the complement of a union is the intersection of complements, and vice versa.

**Distributive Laws:**

$$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$$

$$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$$

**Inclusion-Exclusion Principle (for sets):**

For two sets:

$$|A \\cup B| = |A| + |B| - |A \\cap B|$$

For three sets:

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$

General form for $n$ sets:

$$\\left|\\bigcup_{i=1}^{n} A_i\\right| = \\sum_{i} |A_i| - \\sum_{i < j} |A_i \\cap A_j| + \\sum_{i < j < k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap \\cdots \\cap A_n|$$

---

### 1.2 Random Experiments and Probability

#### Sample Space and Events

A **random experiment** is a procedure whose outcome is not known in advance.

| Term | Definition |
|------|------------|
| **Sample space** $\\Omega$ | The set of all possible outcomes |
| **Event** | A subset of $\\Omega$ |
| **Elementary event** | A single outcome $\\{\\omega\\}$ |

#### Probability Measure (Axioms)

A **probability measure** $P$ on $\\Omega$ satisfies:

1. $P(A) \\geq 0$ for every event $A$
2. $P(\\Omega) = 1$
3. If $A_1, A_2, \\ldots$ are mutually exclusive, then $P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i)$

#### Basic Properties

- $P(\\emptyset) = 0$
- $P(A^c) = 1 - P(A)$
- If $A \\subseteq B$, then $P(A) \\leq P(B)$
- $0 \\leq P(A) \\leq 1$

#### Inclusion-Exclusion for Events

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

For mutually exclusive events: $P(A \\cup B) = P(A) + P(B)$.

$$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$$

#### Discrete Probability Model

If $\\Omega = \\{\\omega_1, \\omega_2, \\ldots\\}$ is countable, then:

$$P(A) = \\sum_{\\omega_i \\in A} P(\\{\\omega_i\\})$$

**Equally likely outcomes:** If all $n$ outcomes are equally likely, then $P(A) = \\dfrac{|A|}{|\\Omega|}$.

#### Geometric Series (useful for probability)

$$\\sum_{k=0}^{\\infty} r^k = \\frac{1}{1 - r}, \\quad |r| < 1$$

$$\\sum_{k=0}^{n} r^k = \\frac{1 - r^{n+1}}{1 - r}, \\quad r \\neq 1$$

---

### 1.3 Conditional Probability and Independence

#### Conditional Probability

The **conditional probability** of $A$ given $B$ (with $P(B) > 0$):

$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$

Equivalently: $P(A \\cap B) = P(A \\mid B) \\cdot P(B) = P(B \\mid A) \\cdot P(A)$.

**Chain rule** (multiplication rule):

$$P(A_1 \\cap A_2 \\cap \\cdots \\cap A_n) = P(A_1) \\cdot P(A_2 \\mid A_1) \\cdot P(A_3 \\mid A_1 \\cap A_2) \\cdots P(A_n \\mid A_1 \\cap \\cdots \\cap A_{n-1})$$

#### Independence of Events

Events $A$ and $B$ are **independent** if and only if:

$$P(A \\cap B) = P(A) \\cdot P(B)$$

Equivalently: $P(A \\mid B) = P(A)$ (knowing $B$ does not change the probability of $A$).

Events $A_1, A_2, \\ldots, A_n$ are **mutually independent** if for every subcollection $A_{i_1}, \\ldots, A_{i_k}$:

$$P(A_{i_1} \\cap \\cdots \\cap A_{i_k}) = P(A_{i_1}) \\cdots P(A_{i_k})$$

> **Warning:** Pairwise independence does not imply mutual independence.

#### Law of Total Probability

If $\\{B_1, B_2, \\ldots, B_n\\}$ is a partition of $\\Omega$ with $P(B_i) > 0$ for all $i$, then for any event $A$:

$$P(A) = \\sum_{i=1}^{n} P(A \\mid B_i) \\cdot P(B_i)$$

#### Bayes' Rule

Under the same partition conditions:

$$P(B_j \\mid A) = \\frac{P(A \\mid B_j) \\cdot P(B_j)}{\\sum_{i=1}^{n} P(A \\mid B_i) \\cdot P(B_i)}$$

For two events (simple form):

$$P(B \\mid A) = \\frac{P(A \\mid B) \\cdot P(B)}{P(A)}$$

**Interpretation:** $P(B_j)$ is the **prior**, $P(A \\mid B_j)$ is the **likelihood**, and $P(B_j \\mid A)$ is the **posterior**.

---

### 1.4 Counting Methods

#### Multiplication Principle

If an experiment consists of $k$ stages with $n_1, n_2, \\ldots, n_k$ choices respectively, the total number of outcomes is $n_1 \\cdot n_2 \\cdots n_k$.

#### Permutations

The number of ways to arrange $n$ distinct objects in order:

$$n! = n \\cdot (n-1) \\cdot (n-2) \\cdots 2 \\cdot 1, \\qquad 0! = 1$$

The number of ways to arrange $k$ objects chosen from $n$ (order matters):

$$P(n, k) = \\frac{n!}{(n-k)!}$$

#### Combinations

The number of ways to choose $k$ objects from $n$ (order does not matter):

$$\\binom{n}{k} = C(n,k) = \\frac{n!}{k!(n-k)!}$$

**Key properties:**

- $\\binom{n}{0} = \\binom{n}{n} = 1$
- $\\binom{n}{k} = \\binom{n}{n-k}$ (symmetry)
- $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ (Pascal's rule)

**Binomial Theorem:**

$$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}$$

---

## Chapter 3 -- Discrete Random Variables

---

### 3.1 Random Variables and PMF

#### Definition

A **random variable** (RV) $X$ is a function $X : \\Omega \\to \\mathbb{R}$ that assigns a real number to each outcome in the sample space.

- **Discrete RV:** Takes values in a countable set $\\{x_1, x_2, \\ldots\\}$
- **Continuous RV:** Takes values in an uncountable set (e.g., an interval)

#### Probability Mass Function (PMF)

For a discrete RV $X$, the **PMF** is:

$$p_X(x) = P(X = x)$$

**Properties:**

1. $p_X(x) \\geq 0$ for all $x$
2. $\\sum_{x} p_X(x) = 1$
3. $P(X \\in A) = \\sum_{x \\in A} p_X(x)$

#### Independence of Random Variables

Discrete RVs $X$ and $Y$ are **independent** if:

$$P(X = x, Y = y) = P(X = x) \\cdot P(Y = y) \\quad \\text{for all } x, y$$

---

### 3.2 CDF, Expectation, and Variance

#### Cumulative Distribution Function (CDF)

The **CDF** of $X$ is:

$$F_X(x) = P(X \\leq x) = \\sum_{x_i \\leq x} p_X(x_i)$$

**Properties:**

- $F_X$ is non-decreasing
- $\\lim_{x \\to -\\infty} F_X(x) = 0$ and $\\lim_{x \\to \\infty} F_X(x) = 1$
- $P(a < X \\leq b) = F_X(b) - F_X(a)$
- For discrete RVs, $F_X$ is a step function

#### Expected Value (Mean)

$$E(X) = \\mu_X = \\sum_{x} x \\cdot p_X(x)$$

**Properties of expectation:**

- $E(aX + b) = aE(X) + b$ (linearity)
- $E(X + Y) = E(X) + E(Y)$ (always, even if dependent)
- If $X$ and $Y$ are independent: $E(XY) = E(X) \\cdot E(Y)$

#### LOTUS (Law of the Unconscious Statistician)

If $g$ is a function of $X$:

$$E(g(X)) = \\sum_{x} g(x) \\cdot p_X(x)$$

This allows computing $E(g(X))$ directly from the PMF of $X$ without finding the distribution of $g(X)$.

#### Variance

$$\\text{Var}(X) = \\sigma_X^2 = E\\left[(X - \\mu_X)^2\\right] = E(X^2) - [E(X)]^2$$

The second form $\\text{Var}(X) = E(X^2) - [E(X)]^2$ is the **computational formula** (often easier to use).

**Properties of variance:**

- $\\text{Var}(X) \\geq 0$
- $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$
- If $X$ and $Y$ are independent: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$

**Standard deviation:** $\\sigma_X = \\sqrt{\\text{Var}(X)}$

---

### 3.3 Special Discrete Distributions

#### Bernoulli Distribution: $X \\sim \\text{Bernoulli}(p)$

Models a single trial with success probability $p$.

| Property | Value |
|----------|-------|
| **PMF** | $P(X = 1) = p, \\quad P(X = 0) = 1 - p$ |
| **Support** | $\\{0, 1\\}$ |
| **Mean** | $E(X) = p$ |
| **Variance** | $\\text{Var}(X) = p(1 - p)$ |

#### Binomial Distribution: $X \\sim \\text{Binomial}(n, p)$

Models the number of successes in $n$ independent Bernoulli trials.

| Property | Value |
|----------|-------|
| **PMF** | $P(X = k) = \\binom{n}{k} p^k (1 - p)^{n-k}, \\quad k = 0, 1, \\ldots, n$ |
| **Support** | $\\{0, 1, \\ldots, n\\}$ |
| **Mean** | $E(X) = np$ |
| **Variance** | $\\text{Var}(X) = np(1 - p)$ |

> If $X_1, \\ldots, X_n$ are i.i.d. $\\text{Bernoulli}(p)$, then $X_1 + \\cdots + X_n \\sim \\text{Binomial}(n, p)$.

#### Geometric Distribution: $X \\sim \\text{Geometric}(p)$

Models the number of trials until the first success.

| Property | Value |
|----------|-------|
| **PMF** | $P(X = k) = (1 - p)^{k-1} p, \\quad k = 1, 2, 3, \\ldots$ |
| **Support** | $\\{1, 2, 3, \\ldots\\}$ |
| **Mean** | $E(X) = \\dfrac{1}{p}$ |
| **Variance** | $\\text{Var}(X) = \\dfrac{1 - p}{p^2}$ |

**Memoryless property:** $P(X > s + t \\mid X > s) = P(X > t)$ for all $s, t \\geq 0$.

> The geometric distribution is the **only** discrete distribution with the memoryless property.

#### Negative Binomial Distribution: $X \\sim \\text{NegBin}(r, p)$

Models the number of trials until the $r$-th success.

| Property | Value |
|----------|-------|
| **PMF** | $P(X = k) = \\binom{k-1}{r-1} p^r (1 - p)^{k-r}, \\quad k = r, r+1, r+2, \\ldots$ |
| **Support** | $\\{r, r+1, r+2, \\ldots\\}$ |
| **Mean** | $E(X) = \\dfrac{r}{p}$ |
| **Variance** | $\\text{Var}(X) = \\dfrac{r(1 - p)}{p^2}$ |

> When $r = 1$, the Negative Binomial reduces to the Geometric distribution.

#### Poisson Distribution: $X \\sim \\text{Poisson}(\\lambda)$

Models the number of events in a fixed interval when events occur independently at a constant average rate $\\lambda > 0$.

| Property | Value |
|----------|-------|
| **PMF** | $P(X = k) = \\dfrac{e^{-\\lambda} \\lambda^k}{k!}, \\quad k = 0, 1, 2, \\ldots$ |
| **Support** | $\\{0, 1, 2, \\ldots\\}$ |
| **Mean** | $E(X) = \\lambda$ |
| **Variance** | $\\text{Var}(X) = \\lambda$ |

> **Poisson approximation to the Binomial:** If $n$ is large, $p$ is small, and $\\lambda = np$ is moderate, then $\\text{Binomial}(n, p) \\approx \\text{Poisson}(\\lambda)$.

**Sum of independent Poissons:** If $X \\sim \\text{Poisson}(\\lambda_1)$ and $Y \\sim \\text{Poisson}(\\lambda_2)$ are independent, then $X + Y \\sim \\text{Poisson}(\\lambda_1 + \\lambda_2)$.

---

## Chapter 4 -- Continuous Random Variables

---

### 4.1 PDF and CDF

#### Probability Density Function (PDF)

A continuous RV $X$ has **PDF** $f_X(x)$ satisfying:

1. $f_X(x) \\geq 0$ for all $x$
2. $\\int_{-\\infty}^{\\infty} f_X(x) \\, dx = 1$
3. $P(a \\leq X \\leq b) = \\int_a^b f_X(x) \\, dx$

> **Important:** For a continuous RV, $P(X = a) = 0$ for any single value $a$. Therefore $P(a \\leq X \\leq b) = P(a < X < b)$.

#### CDF for Continuous RVs

$$F_X(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f_X(t) \\, dt$$

**Relationship:** $f_X(x) = F_X'(x)$ wherever $F_X$ is differentiable.

**Properties of the CDF:**

- $F_X$ is non-decreasing and continuous
- $\\lim_{x \\to -\\infty} F_X(x) = 0$ and $\\lim_{x \\to \\infty} F_X(x) = 1$
- $P(a < X \\leq b) = F_X(b) - F_X(a)$

#### Expected Value

$$E(X) = \\int_{-\\infty}^{\\infty} x \\, f_X(x) \\, dx$$

#### LOTUS (Continuous Version)

$$E(g(X)) = \\int_{-\\infty}^{\\infty} g(x) \\, f_X(x) \\, dx$$

#### Variance

$$\\text{Var}(X) = E(X^2) - [E(X)]^2 = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 f_X(x) \\, dx$$

---

### 4.2 Special Continuous Distributions

#### Uniform Distribution: $X \\sim \\text{Uniform}(a, b)$

Every value in $[a, b]$ is equally likely.

| Property | Value |
|----------|-------|
| **PDF** | $f_X(x) = \\dfrac{1}{b - a}, \\quad a \\leq x \\leq b$ |
| **CDF** | $F_X(x) = \\dfrac{x - a}{b - a}, \\quad a \\leq x \\leq b$ |
| **Mean** | $E(X) = \\dfrac{a + b}{2}$ |
| **Variance** | $\\text{Var}(X) = \\dfrac{(b - a)^2}{12}$ |

#### Exponential Distribution: $X \\sim \\text{Exponential}(\\lambda)$

Models waiting time between Poisson events, with rate parameter $\\lambda > 0$.

| Property | Value |
|----------|-------|
| **PDF** | $f_X(x) = \\lambda e^{-\\lambda x}, \\quad x \\geq 0$ |
| **CDF** | $F_X(x) = 1 - e^{-\\lambda x}, \\quad x \\geq 0$ |
| **Mean** | $E(X) = \\dfrac{1}{\\lambda}$ |
| **Variance** | $\\text{Var}(X) = \\dfrac{1}{\\lambda^2}$ |

**Memoryless property:** $P(X > s + t \\mid X > s) = P(X > t)$ for all $s, t \\geq 0$.

> The exponential distribution is the **only** continuous distribution with the memoryless property.

**Complement CDF (survival function):** $P(X > x) = e^{-\\lambda x}$.

#### Normal (Gaussian) Distribution: $X \\sim N(\\mu, \\sigma^2)$

The most important distribution in statistics, parameterized by mean $\\mu$ and variance $\\sigma^2$.

| Property | Value |
|----------|-------|
| **PDF** | $f_X(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\left(-\\dfrac{(x - \\mu)^2}{2\\sigma^2}\\right), \\quad -\\infty < x < \\infty$ |
| **Mean** | $E(X) = \\mu$ |
| **Variance** | $\\text{Var}(X) = \\sigma^2$ |

**Properties of the Normal distribution:**

- The PDF is symmetric about $\\mu$ (bell-shaped curve)
- The CDF $\\Phi(x) = P(X \\leq x)$ has no closed form and is computed via tables or software
- Approximately $68\\%$ of values fall within $\\mu \\pm \\sigma$, $95\\%$ within $\\mu \\pm 2\\sigma$, $99.7\\%$ within $\\mu \\pm 3\\sigma$

#### Standard Normal: $Z \\sim N(0, 1)$

The standard normal has $\\mu = 0$ and $\\sigma^2 = 1$:

$$f_Z(z) = \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2}$$

**Standardization:** If $X \\sim N(\\mu, \\sigma^2)$, then:

$$Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$$

This allows converting any normal probability to a standard normal probability:

$$P(X \\leq x) = \\Phi\\left(\\frac{x - \\mu}{\\sigma}\\right)$$

**Useful symmetry:** $\\Phi(-z) = 1 - \\Phi(z)$

**Linear combinations:** If $X \\sim N(\\mu, \\sigma^2)$, then $aX + b \\sim N(a\\mu + b, a^2\\sigma^2)$.

**Sum of independent normals:** If $X \\sim N(\\mu_1, \\sigma_1^2)$ and $Y \\sim N(\\mu_2, \\sigma_2^2)$ are independent, then:

$$X + Y \\sim N(\\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2)$$

---

## Chapter 6 -- Joint Distributions

---

### 6.1 Joint PMF and PDF

#### Joint PMF (Discrete Case)

For discrete RVs $X$ and $Y$:

$$p_{X,Y}(x, y) = P(X = x, Y = y)$$

**Properties:**

- $p_{X,Y}(x, y) \\geq 0$
- $\\sum_x \\sum_y p_{X,Y}(x, y) = 1$

#### Joint PDF (Continuous Case)

For continuous RVs $X$ and $Y$, the joint PDF $f_{X,Y}(x, y)$ satisfies:

$$P((X, Y) \\in A) = \\iint_A f_{X,Y}(x, y) \\, dx \\, dy$$

**Properties:**

- $f_{X,Y}(x, y) \\geq 0$
- $\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) \\, dx \\, dy = 1$

---

### 6.2 Marginal Distributions

**Marginal PMF:**

$$p_X(x) = \\sum_y p_{X,Y}(x, y), \\qquad p_Y(y) = \\sum_x p_{X,Y}(x, y)$$

**Marginal PDF:**

$$f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) \\, dy, \\qquad f_Y(y) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) \\, dx$$

---

### 6.3 Conditional Distributions

**Conditional PMF:**

$$p_{X \\mid Y}(x \\mid y) = \\frac{p_{X,Y}(x, y)}{p_Y(y)}, \\quad \\text{for } p_Y(y) > 0$$

**Conditional PDF:**

$$f_{X \\mid Y}(x \\mid y) = \\frac{f_{X,Y}(x, y)}{f_Y(y)}, \\quad \\text{for } f_Y(y) > 0$$

---

### 6.4 Independence of Random Variables

$X$ and $Y$ are **independent** if and only if:

$$f_{X,Y}(x, y) = f_X(x) \\cdot f_Y(y) \\quad \\text{for all } x, y$$

(Same criterion applies with PMFs for discrete RVs.)

Equivalently, $X$ and $Y$ are independent if and only if $f_{X \\mid Y}(x \\mid y) = f_X(x)$ for all $x, y$.

---

### 6.5 Covariance and Correlation

#### Covariance

$$\\text{Cov}(X, Y) = E(XY) - E(X)E(Y) = E\\left[(X - \\mu_X)(Y - \\mu_Y)\\right]$$

**Properties:**

- $\\text{Cov}(X, X) = \\text{Var}(X)$
- $\\text{Cov}(X, Y) = \\text{Cov}(Y, X)$ (symmetric)
- $\\text{Cov}(aX + b, cY + d) = ac \\, \\text{Cov}(X, Y)$
- If $X$ and $Y$ are independent, then $\\text{Cov}(X, Y) = 0$

> **Warning:** $\\text{Cov}(X, Y) = 0$ does **not** imply independence.

#### Correlation Coefficient

$$\\rho_{X,Y} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{\\text{Cov}(X, Y)}{\\sqrt{\\text{Var}(X) \\cdot \\text{Var}(Y)}}$$

**Properties:**

- $-1 \\leq \\rho_{X,Y} \\leq 1$
- $|\\rho_{X,Y}| = 1$ if and only if $Y = aX + b$ for some constants (perfect linear relationship)
- $\\rho_{X,Y} = 0$ means $X$ and $Y$ are **uncorrelated** (but not necessarily independent)

#### Variance of Linear Combinations

$$\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab \\, \\text{Cov}(X, Y)$$

If $X$ and $Y$ are independent (or just uncorrelated):

$$\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$$

**General form:** For $Y = \\sum_{i=1}^{n} a_i X_i$:

$$\\text{Var}(Y) = \\sum_{i=1}^{n} a_i^2 \\text{Var}(X_i) + 2 \\sum_{i < j} a_i a_j \\text{Cov}(X_i, X_j)$$

---

## Chapter 7 -- Limit Theorems

---

### 7.1 Chebyshev's Inequality

For any random variable $X$ with mean $\\mu$ and variance $\\sigma^2$, and for any $k > 0$:

$$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$

Equivalently, for any $\\varepsilon > 0$:

$$P(|X - \\mu| \\geq \\varepsilon) \\leq \\frac{\\sigma^2}{\\varepsilon^2}$$

**Interpretation:** No matter the distribution shape, at least $1 - 1/k^2$ of the probability lies within $k$ standard deviations of the mean.

| $k$ | At least this fraction within $\\mu \\pm k\\sigma$ |
|-----|--------------------------------------------------|
| 2 | $1 - 1/4 = 75\\%$ |
| 3 | $1 - 1/9 \\approx 88.9\\%$ |
| 5 | $1 - 1/25 = 96\\%$ |

---

### 7.2 Law of Large Numbers

#### Weak Law of Large Numbers (WLLN)

Let $X_1, X_2, \\ldots$ be i.i.d. random variables with mean $\\mu$ and finite variance $\\sigma^2$. Define the **sample mean**:

$$\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^{n} X_i$$

Then for any $\\varepsilon > 0$:

$$\\lim_{n \\to \\infty} P\\left(|\\bar{X}_n - \\mu| \\geq \\varepsilon\\right) = 0$$

**Interpretation:** As the sample size grows, the sample mean converges in probability to the true mean.

**Proof sketch (using Chebyshev):** Since $E(\\bar{X}_n) = \\mu$ and $\\text{Var}(\\bar{X}_n) = \\sigma^2/n$:

$$P(|\\bar{X}_n - \\mu| \\geq \\varepsilon) \\leq \\frac{\\sigma^2}{n\\varepsilon^2} \\to 0$$

---

### 7.3 Central Limit Theorem (CLT)

Let $X_1, X_2, \\ldots$ be i.i.d. random variables with mean $\\mu$ and finite variance $\\sigma^2 > 0$. Then as $n \\to \\infty$:

$$Z_n = \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} = \\frac{\\sum_{i=1}^{n} X_i - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} N(0, 1)$$

**In practice:** For large $n$,

$$\\bar{X}_n \\stackrel{\\text{approx}}{\\sim} N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$$

$$\\sum_{i=1}^{n} X_i \\stackrel{\\text{approx}}{\\sim} N(n\\mu, n\\sigma^2)$$

#### CLT Applications

**Approximating probabilities:** For large $n$,

$$P(\\bar{X}_n \\leq x) \\approx \\Phi\\left(\\frac{x - \\mu}{\\sigma / \\sqrt{n}}\\right)$$

**Normal approximation to the Binomial:** If $X \\sim \\text{Binomial}(n, p)$ with $n$ large:

$$\\frac{X - np}{\\sqrt{np(1-p)}} \\stackrel{\\text{approx}}{\\sim} N(0, 1)$$

**Continuity correction** (for discrete distributions): When approximating $P(X \\leq k)$ where $X$ is discrete:

$$P(X \\leq k) \\approx \\Phi\\left(\\frac{k + 0.5 - np}{\\sqrt{np(1-p)}}\\right)$$

> **Rule of thumb:** The CLT approximation is generally good when $n \\geq 30$. For the Binomial, use it when $np \\geq 5$ and $n(1-p) \\geq 5$.

---

## Chapter 8 -- Statistical Inference

---

### 8.1 Point Estimation

#### Basic Concepts

A **statistic** is any function of the observed data $X_1, \\ldots, X_n$ (not depending on unknown parameters).

An **estimator** $\\hat{\\theta}$ is a statistic used to estimate an unknown parameter $\\theta$.

| Property | Definition |
|----------|------------|
| **Bias** | $\\text{Bias}(\\hat{\\theta}) = E(\\hat{\\theta}) - \\theta$ |
| **Unbiased** | $E(\\hat{\\theta}) = \\theta$, i.e., $\\text{Bias}(\\hat{\\theta}) = 0$ |
| **MSE** | $\\text{MSE}(\\hat{\\theta}) = E\\left[(\\hat{\\theta} - \\theta)^2\\right] = \\text{Var}(\\hat{\\theta}) + [\\text{Bias}(\\hat{\\theta})]^2$ |
| **Consistent** | $\\hat{\\theta}_n \\xrightarrow{P} \\theta$ as $n \\to \\infty$ |

> **Key identity:** $\\text{MSE} = \\text{Variance} + \\text{Bias}^2$

#### Sample Mean

$$\\bar{X} = \\frac{1}{n} \\sum_{i=1}^{n} X_i$$

- $E(\\bar{X}) = \\mu$ (unbiased for the population mean)
- $\\text{Var}(\\bar{X}) = \\sigma^2 / n$
- Consistent by WLLN

#### Sample Variance

$$S^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (X_i - \\bar{X})^2$$

- $E(S^2) = \\sigma^2$ (unbiased for the population variance)
- The $n - 1$ denominator (**Bessel's correction**) is what makes it unbiased

> **Why $n - 1$?** Using $\\bar{X}$ instead of $\\mu$ reduces the degrees of freedom by 1. Dividing by $n$ would systematically underestimate $\\sigma^2$.

---

### 8.2 Maximum Likelihood Estimation (MLE)

#### Likelihood Function

Given observations $x_1, \\ldots, x_n$ from a distribution with parameter $\\theta$:

$$L(\\theta) = L(\\theta ; x_1, \\ldots, x_n) = \\prod_{i=1}^{n} f(x_i ; \\theta)$$

where $f$ is the PMF (discrete) or PDF (continuous).

#### Log-Likelihood

$$\\ell(\\theta) = \\ln L(\\theta) = \\sum_{i=1}^{n} \\ln f(x_i ; \\theta)$$

Since $\\ln$ is monotonically increasing, maximizing $L$ is equivalent to maximizing $\\ell$.

#### MLE Procedure

1. Write down the likelihood $L(\\theta)$
2. Take the log-likelihood $\\ell(\\theta) = \\ln L(\\theta)$
3. Differentiate: $\\dfrac{d\\ell}{d\\theta} = 0$ (score equation)
4. Solve for $\\hat{\\theta}_{\\text{MLE}}$
5. Verify it is a maximum (second derivative test)

#### MLE Examples

**Exponential($\\lambda$) with observations $x_1, \\ldots, x_n$:**

$$L(\\lambda) = \\prod_{i=1}^{n} \\lambda e^{-\\lambda x_i} = \\lambda^n e^{-\\lambda \\sum x_i}$$

$$\\ell(\\lambda) = n \\ln \\lambda - \\lambda \\sum_{i=1}^{n} x_i$$

$$\\frac{d\\ell}{d\\lambda} = \\frac{n}{\\lambda} - \\sum x_i = 0 \\implies \\hat{\\lambda}_{\\text{MLE}} = \\frac{n}{\\sum_{i=1}^{n} x_i} = \\frac{1}{\\bar{x}}$$

**Binomial($n$, $p$) — estimating $p$ from $k$ successes:**

$$L(p) = \\binom{n}{k} p^k (1-p)^{n-k}$$

$$\\frac{d\\ell}{dp} = \\frac{k}{p} - \\frac{n-k}{1-p} = 0 \\implies \\hat{p}_{\\text{MLE}} = \\frac{k}{n}$$

**Poisson($\\lambda$) with observations $x_1, \\ldots, x_n$:**

$$\\ell(\\lambda) = -n\\lambda + \\left(\\sum_{i=1}^{n} x_i\\right) \\ln \\lambda - \\sum_{i=1}^{n} \\ln(x_i!)$$

$$\\frac{d\\ell}{d\\lambda} = -n + \\frac{\\sum x_i}{\\lambda} = 0 \\implies \\hat{\\lambda}_{\\text{MLE}} = \\bar{x}$$

**Normal($\\mu$, $\\sigma^2$) — estimating both parameters:**

$$\\hat{\\mu}_{\\text{MLE}} = \\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i$$

$$\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{1}{n}\\sum_{i=1}^{n} (x_i - \\bar{x})^2$$

> **Note:** The MLE for variance uses $n$ (not $n-1$), so it is biased. The unbiased estimator uses $n - 1$.

#### Properties of MLEs

- **Consistent:** $\\hat{\\theta}_{\\text{MLE}} \\xrightarrow{P} \\theta$ as $n \\to \\infty$
- **Asymptotically normal** and **asymptotically efficient** (achieves smallest variance for large $n$)
- **Invariance property:** If $\\hat{\\theta}$ is the MLE of $\\theta$, then $g(\\hat{\\theta})$ is the MLE of $g(\\theta)$

---

### 8.3 Confidence Intervals

#### Definition

A **confidence interval** (CI) at level $1 - \\alpha$ is a random interval $[L, U]$ such that:

$$P(L \\leq \\theta \\leq U) = 1 - \\alpha$$

**Interpretation:** If we repeat the experiment many times, approximately $(1 - \\alpha) \\times 100\\%$ of the constructed intervals will contain the true parameter $\\theta$.

> Common levels: $90\\%$ ($\\alpha = 0.10$), $95\\%$ ($\\alpha = 0.05$), $99\\%$ ($\\alpha = 0.01$).

#### Pivot Method

A **pivot** is a function $Q(X_1, \\ldots, X_n; \\theta)$ whose distribution is known and does not depend on $\\theta$.

**Steps:**
1. Find a pivot $Q$ with known distribution
2. Find $a, b$ such that $P(a \\leq Q \\leq b) = 1 - \\alpha$
3. Rearrange the inequality to isolate $\\theta$

#### CI for the Mean (Known Variance $\\sigma^2$)

If $X_1, \\ldots, X_n$ are i.i.d. with mean $\\mu$ and known variance $\\sigma^2$, then:

**Pivot:** $Z = \\dfrac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim N(0, 1)$ (exact if normal, approximate by CLT otherwise)

**$\\boldsymbol{(1 - \\alpha)}$ CI for $\\boldsymbol{\\mu}$:**

$$\\bar{X} \\pm z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}$$

where $z_{\\alpha/2}$ is the upper $\\alpha/2$ quantile of $N(0, 1)$, i.e., $P(Z > z_{\\alpha/2}) = \\alpha/2$.

| Confidence level | $\\alpha$ | $z_{\\alpha/2}$ |
|-----------------|---------|----------------|
| $90\\%$ | $0.10$ | $1.645$ |
| $95\\%$ | $0.05$ | $1.960$ |
| $99\\%$ | $0.01$ | $2.576$ |

#### The $t$-Distribution

If $X_1, \\ldots, X_n$ are i.i.d. $N(\\mu, \\sigma^2)$, then:

$$T = \\frac{\\bar{X} - \\mu}{S / \\sqrt{n}} \\sim t_{n-1}$$

**Properties of $t_{\\nu}$ (with $\\nu$ degrees of freedom):**

- Symmetric about 0, bell-shaped (like the normal but with heavier tails)
- As $\\nu \\to \\infty$, $t_{\\nu} \\to N(0, 1)$
- $E(T) = 0$ (for $\\nu > 1$), $\\text{Var}(T) = \\dfrac{\\nu}{\\nu - 2}$ (for $\\nu > 2$)

#### CI for the Mean (Unknown Variance)

**$\\boldsymbol{(1 - \\alpha)}$ CI for $\\boldsymbol{\\mu}$:**

$$\\bar{X} \\pm t_{\\alpha/2, n-1} \\cdot \\frac{S}{\\sqrt{n}}$$

where $t_{\\alpha/2, n-1}$ is the upper $\\alpha/2$ quantile of the $t_{n-1}$ distribution.

> Use $z_{\\alpha/2}$ when $\\sigma$ is known; use $t_{\\alpha/2, n-1}$ when $\\sigma$ is unknown and estimated by $S$.

#### The Chi-Squared Distribution

If $Z_1, \\ldots, Z_n$ are i.i.d. $N(0, 1)$, then:

$$\\chi^2_n = Z_1^2 + Z_2^2 + \\cdots + Z_n^2 \\sim \\chi^2(n)$$

**Properties:**

- $E(\\chi^2_n) = n$
- $\\text{Var}(\\chi^2_n) = 2n$
- Not symmetric (skewed right), but approaches normal as $n \\to \\infty$

**Key result:** If $X_1, \\ldots, X_n$ are i.i.d. $N(\\mu, \\sigma^2)$, then:

$$\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)$$

#### CI for the Variance

**$\\boldsymbol{(1 - \\alpha)}$ CI for $\\boldsymbol{\\sigma^2}$:**

$$\\left[\\frac{(n-1)S^2}{\\chi^2_{\\alpha/2, n-1}}, \\quad \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2, n-1}}\\right]$$

where $\\chi^2_{\\alpha/2, n-1}$ and $\\chi^2_{1-\\alpha/2, n-1}$ are quantiles of the $\\chi^2(n-1)$ distribution.

---

### 8.4 Hypothesis Testing

#### Framework

| Term | Definition |
|------|------------|
| **Null hypothesis** $H_0$ | The default claim (often: no effect, parameter equals a specific value) |
| **Alternative hypothesis** $H_1$ | The competing claim |
| **Test statistic** | A value computed from data to decide between $H_0$ and $H_1$ |
| **Rejection region** | The set of test statistic values leading to rejecting $H_0$ |
| **Acceptance region** | The complement of the rejection region |

#### Types of Errors

|  | $H_0$ true | $H_0$ false |
|---|-----------|------------|
| **Reject $H_0$** | Type I error ($\\alpha$) | Correct decision (power) |
| **Fail to reject $H_0$** | Correct decision | Type II error ($\\beta$) |

- **Significance level** $\\alpha = P(\\text{Type I error}) = P(\\text{reject } H_0 \\mid H_0 \\text{ true})$
- **Power** $= 1 - \\beta = P(\\text{reject } H_0 \\mid H_0 \\text{ false})$

#### $p$-Value

The **$p$-value** is the probability of obtaining a test statistic at least as extreme as the observed value, assuming $H_0$ is true.

**Decision rule:** Reject $H_0$ if $p\\text{-value} \\leq \\alpha$.

> A small $p$-value means the data is unlikely under $H_0$, providing evidence against $H_0$.

#### Types of Tests

**One-sided (right-tailed):** $H_0: \\theta = \\theta_0$ vs. $H_1: \\theta > \\theta_0$

- Reject if test statistic $> c_{\\alpha}$ (upper critical value)
- $p$-value $= P(T \\geq t_{\\text{obs}} \\mid H_0)$

**One-sided (left-tailed):** $H_0: \\theta = \\theta_0$ vs. $H_1: \\theta < \\theta_0$

- Reject if test statistic $< -c_{\\alpha}$
- $p$-value $= P(T \\leq t_{\\text{obs}} \\mid H_0)$

**Two-sided:** $H_0: \\theta = \\theta_0$ vs. $H_1: \\theta \\neq \\theta_0$

- Reject if $|\\text{test statistic}| > c_{\\alpha/2}$
- $p$-value $= 2 \\cdot P(T \\geq |t_{\\text{obs}}| \\mid H_0)$

#### $z$-Test for the Mean (Known $\\sigma$)

**Hypotheses:** $H_0: \\mu = \\mu_0$

**Test statistic:**

$$Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}$$

Under $H_0$: $Z \\sim N(0, 1)$ (exact if normal population, approximate by CLT otherwise).

| Alternative | Reject $H_0$ if | $p$-value |
|-------------|-----------------|-----------|
| $H_1: \\mu > \\mu_0$ | $Z > z_{\\alpha}$ | $1 - \\Phi(z_{\\text{obs}})$ |
| $H_1: \\mu < \\mu_0$ | $Z < -z_{\\alpha}$ | $\\Phi(z_{\\text{obs}})$ |
| $H_1: \\mu \\neq \\mu_0$ | $|Z| > z_{\\alpha/2}$ | $2[1 - \\Phi(|z_{\\text{obs}}|)]$ |

#### $t$-Test for the Mean (Unknown $\\sigma$)

**Hypotheses:** $H_0: \\mu = \\mu_0$

**Test statistic:**

$$T = \\frac{\\bar{X} - \\mu_0}{S / \\sqrt{n}}$$

Under $H_0$: $T \\sim t_{n-1}$ (assuming normal population).

The rejection rules and $p$-value computation follow the same pattern as the $z$-test, but using the $t_{n-1}$ distribution instead of $N(0, 1)$.

---

### 8.5 Likelihood Ratio Test

#### Definition

For testing $H_0: \\theta \\in \\Theta_0$ vs. $H_1: \\theta \\in \\Theta_1$, the **likelihood ratio statistic** is:

$$\\Lambda = \\frac{\\sup_{\\theta \\in \\Theta_0} L(\\theta)}{\\sup_{\\theta \\in \\Theta} L(\\theta)} = \\frac{L(\\hat{\\theta}_0)}{L(\\hat{\\theta})}$$

where $\\hat{\\theta}_0$ is the MLE under $H_0$ (restricted) and $\\hat{\\theta}$ is the unrestricted MLE.

**Properties:**

- $0 \\leq \\Lambda \\leq 1$
- Small $\\Lambda$ means the data is much more likely under $H_1$ than $H_0$
- Reject $H_0$ when $\\Lambda \\leq c$ (or equivalently when $-2 \\ln \\Lambda$ is large)

#### Wilks' Theorem (Asymptotic Result)

Under $H_0$ and regularity conditions, as $n \\to \\infty$:

$$-2 \\ln \\Lambda \\xrightarrow{d} \\chi^2(r)$$

where $r = \\dim(\\Theta) - \\dim(\\Theta_0)$ is the difference in the number of free parameters.

**Decision rule:** Reject $H_0$ at level $\\alpha$ if $-2 \\ln \\Lambda > \\chi^2_{\\alpha, r}$.

---

## Quick Reference -- Distribution Summary Table

| Distribution | PMF / PDF | Mean | Variance |
|-------------|-----------|------|----------|
| $\\text{Bernoulli}(p)$ | $P(X=k) = p^k(1-p)^{1-k}$, $k \\in \\{0,1\\}$ | $p$ | $p(1-p)$ |
| $\\text{Binomial}(n,p)$ | $\\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| $\\text{Geometric}(p)$ | $(1-p)^{k-1}p$, $k \\geq 1$ | $1/p$ | $(1-p)/p^2$ |
| $\\text{NegBin}(r,p)$ | $\\binom{k-1}{r-1}p^r(1-p)^{k-r}$, $k \\geq r$ | $r/p$ | $r(1-p)/p^2$ |
| $\\text{Poisson}(\\lambda)$ | $e^{-\\lambda}\\lambda^k / k!$, $k \\geq 0$ | $\\lambda$ | $\\lambda$ |
| $\\text{Uniform}(a,b)$ | $1/(b-a)$, $x \\in [a,b]$ | $(a+b)/2$ | $(b-a)^2/12$ |
| $\\text{Exponential}(\\lambda)$ | $\\lambda e^{-\\lambda x}$, $x \\geq 0$ | $1/\\lambda$ | $1/\\lambda^2$ |
| $N(\\mu, \\sigma^2)$ | $\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/(2\\sigma^2)}$ | $\\mu$ | $\\sigma^2$ |

---

## Key Formulas at a Glance

| Formula | Expression |
|---------|------------|
| Bayes' Rule | $P(B \\mid A) = \\frac{P(A \\mid B)P(B)}{P(A)}$ |
| Law of Total Probability | $P(A) = \\sum_i P(A \\mid B_i)P(B_i)$ |
| Expectation (discrete) | $E(X) = \\sum_x x \\, p_X(x)$ |
| Expectation (continuous) | $E(X) = \\int x \\, f_X(x) \\, dx$ |
| Variance | $\\text{Var}(X) = E(X^2) - [E(X)]^2$ |
| Covariance | $\\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$ |
| Var of linear combo | $\\text{Var}(aX+bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) + 2ab\\text{Cov}(X,Y)$ |
| Chebyshev | $P(|X - \\mu| \\geq \\varepsilon) \\leq \\sigma^2 / \\varepsilon^2$ |
| CLT | $(\\bar{X}_n - \\mu)/(\\sigma/\\sqrt{n}) \\xrightarrow{d} N(0,1)$ |
| MSE decomposition | $\\text{MSE} = \\text{Var}(\\hat{\\theta}) + [\\text{Bias}(\\hat{\\theta})]^2$ |
| CI for $\\mu$ (known $\\sigma$) | $\\bar{X} \\pm z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n}$ |
| CI for $\\mu$ (unknown $\\sigma$) | $\\bar{X} \\pm t_{\\alpha/2,n-1} \\cdot S/\\sqrt{n}$ |
`;
