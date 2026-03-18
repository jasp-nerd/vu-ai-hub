/**
 * Comprehensive Machine Learning Summary — inline markdown content.
 * Compiled from all MLVU lectures (0–13) covering: mathematical preliminaries,
 * linear models, evaluation methodology, probabilistic models, data pre-processing,
 * neural networks, deep learning, sequences, trees & ensembles, transformers,
 * deep generative modeling, embedding models, and reinforcement learning.
 */
export const machineLearningSummary = `
## Lecture 0 — Preliminaries

---

### 0.1 Logarithms

The **logarithm** $\\log_b(x)$ answers the question: "To what power must $b$ be raised to obtain $x$?"

$$\\log_b(x) = y \\iff b^y = x$$

Key identities:

- $\\log(xy) = \\log(x) + \\log(y)$
- $\\log\\!\\left(\\frac{x}{y}\\right) = \\log(x) - \\log(y)$
- $\\log(x^a) = a \\log(x)$
- $\\log_b(x) = \\frac{\\ln(x)}{\\ln(b)}$ (change of base)

In ML we almost always use the **natural logarithm** $\\ln(x) = \\log_e(x)$. The logarithm is a **monotonically increasing** function, so maximising $\\ln f(x)$ is equivalent to maximising $f(x)$.

---

### 0.2 Linear Algebra

#### Vectors

A vector $\\mathbf{x} \\in \\mathbb{R}^n$ is an ordered list of $n$ real numbers. The **Euclidean norm** (L2 norm) is:

$$\\|\\mathbf{x}\\| = \\sqrt{\\sum_{i=1}^{n} x_i^2}$$

#### Dot Product

$$\\mathbf{a} \\cdot \\mathbf{b} = \\sum_{i=1}^{n} a_i b_i = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$

The dot product measures how **aligned** two vectors are. It equals zero when the vectors are orthogonal.

#### Matrices

A matrix $\\mathbf{A} \\in \\mathbb{R}^{m \\times n}$ has $m$ rows and $n$ columns. Matrix multiplication $\\mathbf{C} = \\mathbf{A}\\mathbf{B}$ requires that the inner dimensions match: $\\mathbf{A} \\in \\mathbb{R}^{m \\times k},\\; \\mathbf{B} \\in \\mathbb{R}^{k \\times n} \\Rightarrow \\mathbf{C} \\in \\mathbb{R}^{m \\times n}$.

$$C_{ij} = \\sum_{l=1}^{k} A_{il} B_{lj}$$

The **transpose** $\\mathbf{A}^\\top$ flips rows and columns: $(\\mathbf{A}^\\top)_{ij} = A_{ji}$.

#### Hyperplanes

A **hyperplane** in $\\mathbb{R}^n$ is defined by $\\mathbf{w} \\cdot \\mathbf{x} + b = 0$, where $\\mathbf{w}$ is the normal vector and $b$ is the bias. Hyperplanes are the decision boundaries of linear classifiers.

---

### 0.3 Calculus

#### Derivatives

The derivative of $f$ at $x$ measures the instantaneous rate of change:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

Common derivatives:

| $f(x)$ | $f'(x)$ |
|---|---|
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $\\ln(x)$ | $1/x$ |
| $\\sigma(x)$ | $\\sigma(x)(1 - \\sigma(x))$ |

#### Partial Derivatives and Gradients

For $f(x_1, \\ldots, x_n)$, the **gradient** is the vector of all partial derivatives:

$$\\nabla f = \\left(\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n}\\right)$$

The gradient points in the direction of steepest ascent.

#### Chain Rule

If $y = f(g(x))$, then:

$$\\frac{dy}{dx} = \\frac{df}{dg} \\cdot \\frac{dg}{dx}$$

This is the theoretical foundation of **backpropagation**.

---

### 0.4 Argmax and Argmin

$$\\arg\\max_x f(x)$$ returns the value of $x$ that **maximises** $f(x)$.

$$\\arg\\min_x f(x)$$ returns the value of $x$ that **minimises** $f(x)$.

Note: $\\arg\\min$ and $\\min$ are different — $\\min$ returns the minimum **value**, $\\arg\\min$ returns the **input** at which it occurs.

---

## Lecture 1 — Introduction to Machine Learning

---

### 1.1 What Is Machine Learning?

Machine learning is a field of study concerned with algorithms that **learn from data**. Instead of explicitly programming rules, we provide data and let the algorithm discover patterns.

> "A computer program is said to learn from experience $E$ with respect to some class of tasks $T$ and performance measure $P$, if its performance at tasks in $T$, as measured by $P$, improves with experience $E$." — Tom Mitchell

---

### 1.2 Supervised vs Unsupervised Learning

| Paradigm | Data | Goal |
|---|---|---|
| **Supervised** | Labelled examples $(\\mathbf{x}_i, y_i)$ | Learn a mapping $f: \\mathbf{x} \\to y$ |
| **Unsupervised** | Unlabelled examples $\\mathbf{x}_i$ | Discover structure (clusters, density) |
| **Semi-supervised** | Mix of labelled and unlabelled | Exploit unlabelled data to improve |
| **Reinforcement** | State-action-reward sequences | Learn optimal policy |

---

### 1.3 Classification vs Regression

- **Classification**: target $y$ is a **discrete** class label (e.g., spam/not spam).
- **Regression**: target $y$ is a **continuous** value (e.g., house price).

---

### 1.4 Feature Spaces

Each instance is described by a **feature vector** $\\mathbf{x} = (x_1, x_2, \\ldots, x_d) \\in \\mathbb{R}^d$. The features span a $d$-dimensional **feature space** (also called instance space). A classifier defines a **decision boundary** that partitions this space.

---

### 1.5 Loss Functions

A **loss function** $L(y, \\hat{y})$ quantifies the error between the true label $y$ and the prediction $\\hat{y}$. Common choices:

- **0/1 loss** (classification): $L = \\mathbb{1}[y \\neq \\hat{y}]$
- **Squared error** (regression): $L = (y - \\hat{y})^2$
- **Absolute error**: $L = |y - \\hat{y}|$

The goal of learning is to find parameters that minimise the **expected loss** (risk) over the data distribution.

---

### 1.6 k-Nearest Neighbours (kNN)

To classify a new point $\\mathbf{x}$:

1. Find the $k$ closest training points (using e.g. Euclidean distance).
2. Assign the **majority class** among those $k$ neighbours.

Properties:
- **Non-parametric** (no fixed model structure).
- No training phase; all computation at prediction time (**lazy learning**).
- Choice of $k$ controls the bias-variance tradeoff: small $k$ = low bias, high variance; large $k$ = high bias, low variance.
- Suffers from the **curse of dimensionality**: in high dimensions, distances become less meaningful.

---

### 1.7 Decision Trees (Introduction)

A **decision tree** recursively splits the feature space using axis-aligned thresholds. Each internal node tests a feature; each leaf assigns a class. They are **interpretable** but prone to overfitting when grown deep.

---

### 1.8 Linear Classifiers (Introduction)

A linear classifier assigns class based on:

$$\\hat{y} = \\text{sign}(\\mathbf{w} \\cdot \\mathbf{x} + b)$$

The decision boundary is a **hyperplane**. Linear classifiers are fast and simple but can only model linearly separable problems.

---

### 1.9 Social Impact and Bias

ML systems can encode and amplify societal biases present in training data. Key concerns:
- **Data bias**: historical data may reflect discrimination.
- **Feedback loops**: biased predictions influence future data collection.
- **Fairness**: different definitions (demographic parity, equal opportunity, calibration) can conflict.

---

## Lecture 2 — Linear Models and Search

---

### 2.1 Linear Regression

Model: $\\hat{y} = \\mathbf{w}^\\top \\mathbf{x} + b$

The **mean squared error** (MSE) loss over $n$ data points:

$$\\mathcal{L}(\\mathbf{w}) = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\mathbf{w}^\\top \\mathbf{x}_i - b)^2$$

The MSE loss surface for linear regression is a **convex** function (bowl-shaped), so it has a single global minimum.

#### Closed-Form Solution (Normal Equation)

$$\\mathbf{w}^* = (\\mathbf{X}^\\top \\mathbf{X})^{-1} \\mathbf{X}^\\top \\mathbf{y}$$

where $\\mathbf{X}$ is the design matrix (with a column of ones for the bias).

---

### 2.2 Gradient Descent

An iterative optimisation algorithm. At each step, move in the direction of steepest descent:

$$\\mathbf{w}_{t+1} = \\mathbf{w}_t - \\eta \\nabla_{\\mathbf{w}} \\mathcal{L}(\\mathbf{w}_t)$$

- $\\eta$ is the **learning rate** (step size).
- Too large $\\eta$: divergence (overshooting).
- Too small $\\eta$: slow convergence.

#### Convexity

A function $f$ is **convex** if for all $\\mathbf{x}, \\mathbf{y}$ and $\\lambda \\in [0,1]$:

$$f(\\lambda \\mathbf{x} + (1-\\lambda)\\mathbf{y}) \\le \\lambda f(\\mathbf{x}) + (1-\\lambda) f(\\mathbf{y})$$

For convex loss functions, gradient descent is guaranteed to converge to the **global minimum** (with appropriate learning rate).

---

### 2.3 Search-Based Optimisation

When the loss landscape is non-convex or non-differentiable, gradient-free methods can be used.

#### Random Search

Sample random parameter vectors; keep the best. Simple but inefficient in high dimensions.

#### Simulated Annealing

Like random search, but occasionally accepts **worse** solutions to escape local minima. The acceptance probability decreases over time (temperature schedule).

#### Evolutionary Algorithms

Maintain a **population** of solutions. In each generation:
1. **Select** the fittest individuals.
2. **Crossover** (recombine) pairs of parents.
3. **Mutate** offspring randomly.
4. Replace the population.

---

### 2.4 Linear Classification

For binary classification, use the linear model $\\hat{y} = \\text{sign}(\\mathbf{w}^\\top \\mathbf{x} + b)$.

#### Least-Squares Classification

Fit a linear regression model to the class labels (e.g., $+1$ and $-1$) and classify based on the sign of the output. This works but is suboptimal because the squared loss penalises points that are **too correct** (far from the boundary on the right side).

---

## Lecture 3 — Evaluation (Methodology)

---

### 3.1 Train / Validation / Test Splits

- **Training set**: used to fit the model.
- **Validation set**: used to tune hyperparameters and select models.
- **Test set**: used **once** at the end to estimate generalisation performance.

Never use the test set for model selection — this causes **data leakage** and gives an optimistic estimate.

---

### 3.2 Cross-Validation

**$k$-fold cross-validation**: split data into $k$ folds; for each fold, train on $k-1$ folds, validate on the remaining one. Average the results.

- **Leave-one-out** (LOO): $k = n$ (one instance per fold). Low bias but high variance and expensive.
- **Stratified $k$-fold**: ensures each fold has approximately the same class distribution as the full dataset.

---

### 3.3 Confidence Intervals

With $n$ test instances and accuracy $\\hat{p}$, an approximate 95% confidence interval is:

$$\\hat{p} \\pm 1.96 \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}$$

Larger test sets give tighter intervals.

---

### 3.4 Bias-Variance Tradeoff

The expected test error decomposes into:

$$\\text{Error} = \\text{Bias}^2 + \\text{Variance} + \\text{Irreducible Noise}$$

- **Bias**: error from simplifying assumptions (underfitting).
- **Variance**: error from sensitivity to training data fluctuations (overfitting).
- Increasing model complexity decreases bias but increases variance.

---

### 3.5 Confusion Matrix

For binary classification:

| | Predicted Positive | Predicted Negative |
|---|---|---|
| **Actual Positive** | True Positive (TP) | False Negative (FN) |
| **Actual Negative** | False Positive (FP) | True Negative (TN) |

---

### 3.6 Precision, Recall, and F1

$$\\text{Precision} = \\frac{TP}{TP + FP} \\qquad \\text{Recall} = \\frac{TP}{TP + FN}$$

$$F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}$$

- **Precision**: of all positive predictions, how many are correct?
- **Recall** (sensitivity): of all actual positives, how many are found?
- **F1**: harmonic mean of precision and recall.

---

### 3.7 ROC Curves and AUC

The **ROC curve** plots **True Positive Rate** (recall) vs **False Positive Rate** ($\\frac{FP}{FP+TN}$) at varying classification thresholds.

- **AUC** (Area Under the ROC Curve): a threshold-independent performance measure.
  - AUC = 1.0: perfect classifier.
  - AUC = 0.5: random classifier.
  - AUC is equivalent to the probability that the model ranks a random positive higher than a random negative.

---

### 3.8 Class Imbalance

When one class vastly outnumbers the other, accuracy is misleading (e.g., 99% accuracy by always predicting the majority class). Remedies:
- Use **precision, recall, F1, or AUC** instead of accuracy.
- **Oversampling** the minority class or **undersampling** the majority.
- **Cost-sensitive learning**: assign higher loss to minority-class errors.

---

### 3.9 No Free Lunch Theorem

There is no single algorithm that is best for all possible problems. Every algorithm has a set of problems where it excels and another where it fails. Model selection must be guided by the **specific data and task**.

---

## Lecture 4 — Probabilistic Models

---

### 4.1 Maximum Likelihood Estimation (MLE)

Given data $\\mathcal{D} = \\{x_1, \\ldots, x_n\\}$ and a model with parameters $\\theta$, the **likelihood** is:

$$L(\\theta) = p(\\mathcal{D} \\mid \\theta) = \\prod_{i=1}^{n} p(x_i \\mid \\theta)$$

The **log-likelihood** is preferred for numerical stability:

$$\\ell(\\theta) = \\sum_{i=1}^{n} \\ln p(x_i \\mid \\theta)$$

MLE finds $\\theta^* = \\arg\\max_\\theta \\ell(\\theta)$.

---

### 4.2 Bayesian Learning

Instead of a point estimate, Bayesian learning maintains a **posterior distribution** over parameters:

$$p(\\theta \\mid \\mathcal{D}) = \\frac{p(\\mathcal{D} \\mid \\theta)\\, p(\\theta)}{p(\\mathcal{D})}$$

- $p(\\theta)$: **prior** (beliefs before seeing data).
- $p(\\mathcal{D} \\mid \\theta)$: **likelihood**.
- $p(\\theta \\mid \\mathcal{D})$: **posterior** (updated beliefs).
- $p(\\mathcal{D})$: **evidence** (normalising constant).

The **MAP** (Maximum a Posteriori) estimate uses the mode of the posterior:

$$\\theta_{\\text{MAP}} = \\arg\\max_\\theta p(\\theta \\mid \\mathcal{D}) = \\arg\\max_\\theta [\\ln p(\\mathcal{D} \\mid \\theta) + \\ln p(\\theta)]$$

---

### 4.3 Naive Bayes

A **generative** classifier that models $p(\\mathbf{x} \\mid y)$ and uses Bayes' rule:

$$p(y \\mid \\mathbf{x}) \\propto p(y) \\prod_{j=1}^{d} p(x_j \\mid y)$$

The **naive** assumption: features are conditionally independent given the class. Despite this strong assumption, Naive Bayes often works surprisingly well, especially for text classification.

---

### 4.4 Logistic Regression

A **discriminative** classifier that directly models $p(y \\mid \\mathbf{x})$ using the **sigmoid function**:

$$p(y = 1 \\mid \\mathbf{x}) = \\sigma(\\mathbf{w}^\\top \\mathbf{x} + b) = \\frac{1}{1 + e^{-(\\mathbf{w}^\\top \\mathbf{x} + b)}}$$

Properties of the sigmoid:
- Output in $(0, 1)$, interpretable as a probability.
- $\\sigma(-z) = 1 - \\sigma(z)$.
- $\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$.

#### Cross-Entropy Loss (Log Loss)

$$\\mathcal{L} = -\\frac{1}{n} \\sum_{i=1}^{n} \\left[ y_i \\ln \\hat{y}_i + (1 - y_i) \\ln(1 - \\hat{y}_i) \\right]$$

This is derived from MLE under a Bernoulli model. Minimising cross-entropy is equivalent to maximising the log-likelihood.

---

### 4.5 Entropy and Information Theory

**Shannon entropy** measures the uncertainty of a distribution:

$$H(p) = -\\sum_{x} p(x) \\ln p(x)$$

- Maximum entropy: uniform distribution.
- Minimum entropy (0): all probability on one outcome.

**Cross-entropy** between true distribution $p$ and model distribution $q$:

$$H(p, q) = -\\sum_{x} p(x) \\ln q(x)$$

**KL divergence** (Kullback-Leibler) measures how much $q$ diverges from $p$:

$$D_{\\text{KL}}(p \\| q) = \\sum_{x} p(x) \\ln \\frac{p(x)}{q(x)} = H(p, q) - H(p)$$

- $D_{\\text{KL}} \\geq 0$, with equality iff $p = q$.
- **Not symmetric**: $D_{\\text{KL}}(p \\| q) \\neq D_{\\text{KL}}(q \\| p)$.

---

### 4.6 Minimum Description Length (MDL)

The MDL principle says the best model is the one that **compresses the data most**: choose the model that minimises the total length of encoding the model plus encoding the data given the model. This provides a principled way to balance model complexity and fit, relating to Occam's razor.

---

## Lecture 5 — Data Pre-processing

---

### 5.1 Missing Values

Strategies:
- **Remove** instances or features with too many missing values.
- **Imputation**: replace with mean, median, mode, or use a model to predict missing values.
- Add a **binary indicator feature** for missingness.

---

### 5.2 Outliers

Outliers can distort model training. Detection methods:
- Z-score: flag points with $|z| > 3$.
- IQR method: flag points outside $[Q_1 - 1.5 \\cdot \\text{IQR},\\; Q_3 + 1.5 \\cdot \\text{IQR}]$.

Handle by removal, capping (winsorisation), or using robust models.

---

### 5.3 Class Imbalance (SMOTE)

**SMOTE** (Synthetic Minority Over-sampling Technique): generate synthetic minority-class samples by interpolating between existing minority instances and their nearest neighbours. This avoids exact duplication and provides a richer training signal.

---

### 5.4 Feature Engineering

Creating new features from raw data to improve model performance:
- **Polynomial features**: $x_1^2, x_1 x_2, \\ldots$
- **Domain-specific** transformations (e.g., extracting day-of-week from timestamps).
- **Interaction terms**: products of features.

---

### 5.5 One-Hot Encoding

Convert a categorical feature with $k$ categories into $k$ binary features. For a category $c$, the one-hot vector has a 1 in position $c$ and 0 elsewhere. This avoids imposing an artificial ordering on categories.

---

### 5.6 Normalisation and Standardisation

**Min-max normalisation** (scales to $[0, 1]$):

$$x' = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}}$$

**Standardisation** (z-score normalisation, zero mean and unit variance):

$$x' = \\frac{x - \\mu}{\\sigma}$$

Important for distance-based methods (kNN, SVMs) and gradient-based optimisation.

---

### 5.7 PCA (Principal Component Analysis)

PCA finds the directions of **maximum variance** in the data. Steps:

1. Centre the data (subtract the mean).
2. Compute the covariance matrix $\\mathbf{C} = \\frac{1}{n} \\mathbf{X}^\\top \\mathbf{X}$.
3. Compute eigenvectors and eigenvalues of $\\mathbf{C}$.
4. Project data onto the top $k$ eigenvectors.

The first principal component captures the most variance, the second captures the most remaining variance orthogonal to the first, etc.

PCA is used for **dimensionality reduction**, visualisation, and noise reduction.

---

### 5.8 Whitening

**Whitening** transforms data so that the covariance matrix becomes the identity matrix $\\mathbf{I}$. After PCA, divide each component by the square root of its eigenvalue:

$$\\mathbf{z} = \\mathbf{\\Lambda}^{-1/2} \\mathbf{V}^\\top (\\mathbf{x} - \\boldsymbol{\\mu})$$

This decorrelates features and equalises their variances.

---

## Lecture 6 — Beyond Linear Models

---

### 6.1 Neural Networks

#### The Perceptron

The simplest neural network: a single linear unit with a step activation:

$$\\hat{y} = \\text{step}(\\mathbf{w}^\\top \\mathbf{x} + b)$$

The **perceptron learning algorithm** updates weights when a misclassification occurs:
- If $y = +1$ but $\\hat{y} = -1$: $\\mathbf{w} \\leftarrow \\mathbf{w} + \\mathbf{x}$
- If $y = -1$ but $\\hat{y} = +1$: $\\mathbf{w} \\leftarrow \\mathbf{w} - \\mathbf{x}$

Converges if the data is **linearly separable** (Perceptron Convergence Theorem). Cannot learn XOR.

#### Multi-Layer Perceptrons (MLPs)

Stacking layers of neurons with **non-linear activation functions** enables learning non-linear decision boundaries.

A 2-layer MLP:

$$\\mathbf{h} = \\sigma(\\mathbf{W}_1 \\mathbf{x} + \\mathbf{b}_1)$$
$$\\hat{y} = \\mathbf{W}_2 \\mathbf{h} + \\mathbf{b}_2$$

With enough hidden units and a non-linear activation, an MLP can approximate **any continuous function** (Universal Approximation Theorem).

#### Activation Functions

| Function | Formula | Notes |
|---|---|---|
| Sigmoid | $\\sigma(z) = \\frac{1}{1+e^{-z}}$ | Output in $(0,1)$; suffers from vanishing gradients |
| Tanh | $\\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$ | Output in $(-1,1)$; zero-centred |
| ReLU | $\\max(0, z)$ | Sparse activation; fast; can cause dead neurons |

---

### 6.2 Backpropagation

The algorithm for computing gradients in neural networks. It applies the **chain rule** layer by layer, from output to input.

For a loss $\\mathcal{L}$ and a weight $w$ in layer $l$:

$$\\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial a_l} \\cdot \\frac{\\partial a_l}{\\partial z_l} \\cdot \\frac{\\partial z_l}{\\partial w}$$

where $z_l$ is the pre-activation and $a_l$ is the post-activation output.

**Forward pass**: compute outputs layer by layer. **Backward pass**: compute gradients layer by layer in reverse.

---

### 6.3 Softmax

For multi-class classification with $K$ classes, the **softmax** function converts raw scores (logits) $z_1, \\ldots, z_K$ into probabilities:

$$p(y = k) = \\frac{e^{z_k}}{\\sum_{j=1}^{K} e^{z_j}}$$

Used with **categorical cross-entropy** loss:

$$\\mathcal{L} = -\\sum_{k=1}^{K} y_k \\ln p(y = k)$$

---

### 6.4 Stochastic Gradient Descent (SGD)

Instead of computing the gradient over the entire dataset (**batch gradient descent**), SGD approximates it using a single instance (or a **mini-batch**):

$$\\mathbf{w}_{t+1} = \\mathbf{w}_t - \\eta \\nabla_{\\mathbf{w}} \\mathcal{L}(\\mathbf{w}_t; \\mathbf{x}_i, y_i)$$

Advantages: faster per iteration, introduces noise that can help escape local minima, scales to large datasets.

---

### 6.5 Support Vector Machines (SVMs)

SVMs find the hyperplane that maximises the **margin** — the distance between the decision boundary and the closest training points (**support vectors**).

#### Hard-Margin SVM

Assumes linearly separable data. Optimisation problem:

$$\\min_{\\mathbf{w}, b} \\frac{1}{2} \\|\\mathbf{w}\\|^2 \\quad \\text{s.t.} \\quad y_i(\\mathbf{w}^\\top \\mathbf{x}_i + b) \\geq 1 \\;\\forall\\, i$$

The margin width is $\\frac{2}{\\|\\mathbf{w}\\|}$.

#### Soft-Margin SVM

Allows some misclassifications via **slack variables** $\\xi_i \\geq 0$:

$$\\min_{\\mathbf{w}, b, \\boldsymbol{\\xi}} \\frac{1}{2} \\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^{n} \\xi_i$$

$C$ controls the tradeoff between a wide margin and few violations.

#### Hinge Loss

The SVM objective can be expressed using the **hinge loss**:

$$L(y, f(\\mathbf{x})) = \\max(0, 1 - y \\cdot f(\\mathbf{x}))$$

Points correctly classified with margin $\\geq 1$ incur zero loss.

---

### 6.6 The Kernel Trick

Many algorithms (including SVMs) only need dot products $\\mathbf{x}_i \\cdot \\mathbf{x}_j$. A **kernel function** $K(\\mathbf{x}_i, \\mathbf{x}_j) = \\phi(\\mathbf{x}_i) \\cdot \\phi(\\mathbf{x}_j)$ computes the dot product in a high-dimensional (or infinite-dimensional) feature space **without explicitly computing** $\\phi$.

Common kernels:

| Kernel | Formula |
|---|---|
| **Polynomial** | $K(\\mathbf{x}, \\mathbf{y}) = (\\mathbf{x} \\cdot \\mathbf{y} + c)^d$ |
| **RBF (Gaussian)** | $K(\\mathbf{x}, \\mathbf{y}) = \\exp\\!\\left(-\\frac{\\|\\mathbf{x} - \\mathbf{y}\\|^2}{2\\sigma^2}\\right)$ |

The RBF kernel maps to an infinite-dimensional space and can fit complex boundaries.

---

## Lecture 7 — Deep Learning

---

### 7.1 Tensors

A **tensor** is a multi-dimensional array generalising scalars (rank 0), vectors (rank 1), and matrices (rank 2) to higher dimensions. In deep learning, tensors represent batches of data, feature maps, and weight matrices.

---

### 7.2 Computation Graphs and Automatic Differentiation

A **computation graph** represents a function as a directed acyclic graph of elementary operations. **Automatic differentiation** (autodiff) traverses this graph to compute exact gradients.

- **Forward mode**: propagates derivatives from inputs to outputs.
- **Reverse mode** (backpropagation): propagates derivatives from outputs to inputs — more efficient when there are many inputs and few outputs (the typical neural network setting).

---

### 7.3 Backpropagation in Tensor Settings

In modern frameworks (PyTorch, TensorFlow), backpropagation operates on tensors. Each operation (matrix multiply, convolution, etc.) has a corresponding **backward function** that computes the gradient with respect to its inputs given the gradient of its output.

The Jacobian for a function $\\mathbf{f}: \\mathbb{R}^n \\to \\mathbb{R}^m$ is the matrix of partial derivatives:

$$J_{ij} = \\frac{\\partial f_i}{\\partial x_j}$$

---

### 7.4 Convolutional Layers

A **convolutional layer** applies a set of learnable **kernels** (filters) that slide across the input:

$$\\text{output}(i,j) = \\sum_{m,n} \\text{input}(i+m, j+n) \\cdot \\text{kernel}(m,n)$$

Key parameters:
- **Kernel size**: spatial dimensions of the filter (e.g., $3 \\times 3$).
- **Padding**: adding zeros around the input to control output size.
- **Stride**: step size of the kernel. Stride $> 1$ downsamples.
- **Channels**: input channels (e.g., 3 for RGB); output channels = number of filters.

**Pooling layers** downsample feature maps:
- **Max pooling**: take the maximum in each window.
- **Average pooling**: take the mean in each window.

Convolutions exploit **translation equivariance** and **parameter sharing**, making them efficient for image data.

---

### 7.5 Activation Functions in Deep Learning

**ReLU** (Rectified Linear Unit): $\\text{ReLU}(z) = \\max(0, z)$

Variants:
- **Leaky ReLU**: $\\max(\\alpha z, z)$ with small $\\alpha > 0$ to avoid dead neurons.
- **GELU**: smooth approximation used in transformers.

---

### 7.6 Adam Optimiser

**Adam** combines momentum and adaptive learning rates:

$$m_t = \\beta_1 m_{t-1} + (1 - \\beta_1) g_t \\quad \\text{(first moment estimate)}$$
$$v_t = \\beta_2 v_{t-1} + (1 - \\beta_2) g_t^2 \\quad \\text{(second moment estimate)}$$
$$\\hat{m}_t = \\frac{m_t}{1 - \\beta_1^t}, \\quad \\hat{v}_t = \\frac{v_t}{1 - \\beta_2^t} \\quad \\text{(bias correction)}$$
$$w_{t+1} = w_t - \\frac{\\eta}{\\sqrt{\\hat{v}_t} + \\epsilon} \\hat{m}_t$$

Default values: $\\beta_1 = 0.9$, $\\beta_2 = 0.999$, $\\epsilon = 10^{-8}$.

#### Momentum

**Momentum** accelerates SGD by accumulating a running average of past gradients:

$$\\mathbf{v}_t = \\gamma \\mathbf{v}_{t-1} + \\eta \\nabla \\mathcal{L}$$
$$\\mathbf{w}_{t+1} = \\mathbf{w}_t - \\mathbf{v}_t$$

This dampens oscillations and speeds up convergence along consistent gradient directions.

---

### 7.7 Regularisation

Techniques to prevent overfitting:

#### L2 Regularisation (Weight Decay)

Add $\\lambda \\|\\mathbf{w}\\|^2$ to the loss. Encourages small weights.

$$\\mathcal{L}_{\\text{reg}} = \\mathcal{L} + \\lambda \\sum_i w_i^2$$

#### L1 Regularisation

Add $\\lambda \\|\\mathbf{w}\\|_1 = \\lambda \\sum_i |w_i|$ to the loss. Encourages **sparse** weights (drives some to exactly zero).

#### Dropout

During training, randomly set each hidden unit to zero with probability $p$ (typically $p = 0.5$). At test time, scale activations by $(1 - p)$. This prevents co-adaptation of neurons and acts as an ensemble of subnetworks.

#### Batch Normalisation

Normalise each mini-batch to have zero mean and unit variance within each layer:

$$\\hat{x}_i = \\frac{x_i - \\mu_B}{\\sqrt{\\sigma_B^2 + \\epsilon}}$$

Then scale and shift with learnable parameters $\\gamma$ and $\\beta$:

$$y_i = \\gamma \\hat{x}_i + \\beta$$

Benefits: faster training, allows higher learning rates, mild regularisation effect.

---

## Lecture 8 — Sequences

---

### 8.1 Markov Models

A **Markov model** assumes the future depends only on the current state (Markov property):

$$p(x_t \\mid x_1, \\ldots, x_{t-1}) = p(x_t \\mid x_{t-1})$$

The transition probabilities $p(x_t \\mid x_{t-1})$ can be estimated by counting from data.

---

### 8.2 N-grams

An **n-gram model** extends the Markov assumption to depend on the previous $n-1$ tokens:

$$p(x_t \\mid x_1, \\ldots, x_{t-1}) \\approx p(x_t \\mid x_{t-n+1}, \\ldots, x_{t-1})$$

- **Unigram** ($n=1$): $p(x_t)$ — ignores context.
- **Bigram** ($n=2$): $p(x_t \\mid x_{t-1})$.
- **Trigram** ($n=3$): $p(x_t \\mid x_{t-2}, x_{t-1})$.

Higher $n$ captures more context but requires exponentially more data to estimate reliably (**data sparsity**).

---

### 8.3 Autoregressive Generation

Generate sequences token by token, where each new token is sampled from the model's predicted distribution conditioned on all previous tokens:

$$x_t \\sim p(x_t \\mid x_1, \\ldots, x_{t-1})$$

Sampling strategies: **greedy** (take argmax), **temperature sampling** (scale logits by $T$), **top-k** (restrict to top $k$ tokens), **nucleus/top-p** (restrict to smallest set with cumulative probability $\\geq p$).

---

### 8.4 Embeddings and Word2Vec

An **embedding** maps discrete tokens to dense continuous vectors $\\mathbf{e} \\in \\mathbb{R}^d$. Similar words get similar vectors.

**Word2Vec** learns embeddings by predicting context:
- **Skip-gram**: given a word, predict surrounding words.
- **CBOW** (Continuous Bag of Words): given surrounding words, predict the centre word.

Famously captures semantic relationships: $\\text{king} - \\text{man} + \\text{woman} \\approx \\text{queen}$.

---

### 8.5 1D Convolutions for Sequences

Apply convolutional filters along the **time/sequence** dimension. A 1D convolution with kernel size $k$ looks at $k$ consecutive tokens. Useful for capturing local patterns.

**Causal convolutions**: mask future positions so the output at time $t$ depends only on $x_1, \\ldots, x_t$. Required for autoregressive models.

---

### 8.6 Recurrent Neural Networks (RNNs)

An RNN processes sequences by maintaining a **hidden state** $\\mathbf{h}_t$ that is updated at each time step:

$$\\mathbf{h}_t = \\tanh(\\mathbf{W}_h \\mathbf{h}_{t-1} + \\mathbf{W}_x \\mathbf{x}_t + \\mathbf{b})$$

The same weights are shared across all time steps (**weight sharing**).

Problem: **vanishing/exploding gradients** — during backpropagation through time (BPTT), gradients are multiplied by the recurrence matrix at each step, causing them to shrink or grow exponentially.

---

### 8.7 LSTMs (Long Short-Term Memory)

LSTMs address vanishing gradients by introducing a **cell state** $\\mathbf{c}_t$ and three **gates**:

**Forget gate**: decides what to remove from the cell state:
$$\\mathbf{f}_t = \\sigma(\\mathbf{W}_f [\\mathbf{h}_{t-1}, \\mathbf{x}_t] + \\mathbf{b}_f)$$

**Input gate**: decides what new information to store:
$$\\mathbf{i}_t = \\sigma(\\mathbf{W}_i [\\mathbf{h}_{t-1}, \\mathbf{x}_t] + \\mathbf{b}_i)$$
$$\\tilde{\\mathbf{c}}_t = \\tanh(\\mathbf{W}_c [\\mathbf{h}_{t-1}, \\mathbf{x}_t] + \\mathbf{b}_c)$$

**Cell state update**:
$$\\mathbf{c}_t = \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\mathbf{i}_t \\odot \\tilde{\\mathbf{c}}_t$$

**Output gate**: decides what to output:
$$\\mathbf{o}_t = \\sigma(\\mathbf{W}_o [\\mathbf{h}_{t-1}, \\mathbf{x}_t] + \\mathbf{b}_o)$$
$$\\mathbf{h}_t = \\mathbf{o}_t \\odot \\tanh(\\mathbf{c}_t)$$

where $\\odot$ denotes element-wise multiplication. The cell state acts as a **conveyor belt** that allows gradients to flow through long sequences with less decay.

---

## Lecture 9 — Trees and Ensembles

---

### 9.1 Decision Trees

A decision tree partitions the feature space with a series of **axis-aligned splits**. At each internal node, choose the feature and threshold that best separates the classes.

#### Splitting Criteria — Entropy and Information Gain

**Entropy** of a set $S$:

$$H(S) = -\\sum_{c=1}^{C} p_c \\log_2 p_c$$

where $p_c$ is the proportion of class $c$ in $S$.

**Information gain** of splitting $S$ on feature $A$:

$$\\text{IG}(S, A) = H(S) - \\sum_{v \\in \\text{values}(A)} \\frac{|S_v|}{|S|} H(S_v)$$

Choose the split that **maximises information gain** (equivalently, minimises the weighted entropy of the children).

Alternative: **Gini impurity**: $G(S) = 1 - \\sum_{c=1}^{C} p_c^2$

---

### 9.2 Regression Trees

For regression, leaves store the **mean target value** of the training instances that reach them. Splits are chosen to minimise the **sum of squared errors** within each child:

$$\\text{SSE} = \\sum_{i \\in S_L} (y_i - \\bar{y}_L)^2 + \\sum_{i \\in S_R} (y_i - \\bar{y}_R)^2$$

---

### 9.3 Pruning

Growing a tree until all leaves are pure leads to overfitting. **Pruning** removes branches that do not significantly improve performance:
- **Pre-pruning** (early stopping): stop splitting when a criterion is met (min samples, max depth).
- **Post-pruning** (cost-complexity pruning): grow a full tree, then remove subtrees that increase a penalised error measure.

---

### 9.4 Ensemble Methods

Combine multiple models to improve prediction.

#### Stacking

Train a **meta-learner** on the predictions of base models. The base models' outputs become features for the meta-model.

#### Bagging (Bootstrap Aggregating)

1. Create $B$ bootstrap samples (sample with replacement).
2. Train one model on each bootstrap sample.
3. Aggregate predictions: majority vote (classification) or average (regression).

Bagging reduces **variance** while keeping bias roughly the same.

#### Random Forests

Bagging with decision trees, plus **feature randomisation**: at each split, consider only a random subset of $m$ features (typically $m = \\sqrt{d}$ for classification).

This **decorrelates** the trees, further reducing variance. Random forests are robust, require little tuning, and provide feature importance estimates.

---

### 9.5 Boosting

Build an ensemble **sequentially**, where each new model focuses on the mistakes of the previous ones.

#### AdaBoost

1. Assign equal weights to all training instances.
2. Train a weak learner (e.g., decision stump).
3. Increase weights of misclassified instances; decrease weights of correct ones.
4. Repeat; final prediction is a weighted vote of all weak learners.

The weight of weak learner $t$ with error $\\epsilon_t$:

$$\\alpha_t = \\frac{1}{2} \\ln \\frac{1 - \\epsilon_t}{\\epsilon_t}$$

#### Gradient Boosting

Generalises boosting to arbitrary differentiable loss functions. Each new tree fits the **negative gradient** (pseudo-residuals) of the loss:

$$r_i = -\\frac{\\partial \\mathcal{L}(y_i, F(\\mathbf{x}_i))}{\\partial F(\\mathbf{x}_i)}$$

The model is updated: $F_{t+1}(\\mathbf{x}) = F_t(\\mathbf{x}) + \\eta \\cdot h_t(\\mathbf{x})$

Popular implementations: **XGBoost**, **LightGBM**, **CatBoost**.

---

## Lecture 10 — Transformers

---

### 10.1 Self-Attention

The core mechanism of transformers. For each position, self-attention computes a weighted combination of **all** positions in the sequence.

Given input embeddings $\\mathbf{X}$, compute **queries**, **keys**, and **values**:

$$\\mathbf{Q} = \\mathbf{X}\\mathbf{W}_Q, \\quad \\mathbf{K} = \\mathbf{X}\\mathbf{W}_K, \\quad \\mathbf{V} = \\mathbf{X}\\mathbf{W}_V$$

**Scaled dot-product attention**:

$$\\text{Attention}(\\mathbf{Q}, \\mathbf{K}, \\mathbf{V}) = \\text{softmax}\\!\\left(\\frac{\\mathbf{Q}\\mathbf{K}^\\top}{\\sqrt{d_k}}\\right) \\mathbf{V}$$

- The scaling factor $\\sqrt{d_k}$ prevents dot products from growing too large.
- Each query attends to all keys; the softmax weights determine how much each value contributes.

---

### 10.2 Multi-Head Attention

Run $h$ attention heads in parallel with different learned projections:

$$\\text{MultiHead}(\\mathbf{Q}, \\mathbf{K}, \\mathbf{V}) = \\text{Concat}(\\text{head}_1, \\ldots, \\text{head}_h) \\mathbf{W}_O$$

Each head can learn to attend to different types of relationships (syntactic, semantic, positional, etc.).

---

### 10.3 Transformer Blocks

A transformer block consists of:

1. **Multi-head self-attention** sublayer.
2. **Add & Norm**: residual connection + layer normalisation.
3. **Feedforward network** (two linear layers with activation): $\\text{FFN}(\\mathbf{x}) = \\text{ReLU}(\\mathbf{x}\\mathbf{W}_1 + \\mathbf{b}_1)\\mathbf{W}_2 + \\mathbf{b}_2$.
4. **Add & Norm**: another residual connection + layer normalisation.

**Residual connections**: $\\mathbf{y} = \\mathbf{x} + f(\\mathbf{x})$. They allow gradients to flow directly through the network, enabling training of very deep models.

**Layer normalisation**: normalise across features (not across the batch), applied before or after sublayers.

---

### 10.4 Position Embeddings

Self-attention is **permutation-invariant** — it has no inherent notion of position. Position information is added via:
- **Sinusoidal** position encodings (fixed): different frequencies for each dimension.
- **Learned** position embeddings: trainable vectors for each position.

---

### 10.5 Sub-word Tokenisation

Instead of word-level or character-level tokens, use **sub-word** units that balance vocabulary size and sequence length.

- **Byte Pair Encoding (BPE)**: iteratively merge the most frequent adjacent pairs of characters/subwords.
- **WordPiece**: similar to BPE but uses likelihood-based merging.
- **SentencePiece**: language-agnostic tokenisation.

---

### 10.6 BERT (Bidirectional Encoder Representations from Transformers)

BERT uses the **encoder** portion of the transformer, trained with:
- **Masked Language Modelling (MLM)**: randomly mask 15% of tokens; predict the masked tokens from context.
- **Next Sentence Prediction (NSP)**: predict whether two sentences are consecutive.

BERT produces contextual embeddings that can be fine-tuned for downstream tasks (classification, NER, QA, etc.).

---

### 10.7 GPT Family (Generative Pre-trained Transformers)

GPT uses the **decoder** portion (causal/autoregressive self-attention — each token can only attend to previous tokens).

- **GPT-2/GPT-3/GPT-4**: scaled up with more parameters, data, and compute.
- **In-context learning**: the ability to perform tasks by providing examples in the prompt, without updating weights.
- **Few-shot / zero-shot**: prompting with few or no examples.

---

### 10.8 RLHF (Reinforcement Learning from Human Feedback)

Process for aligning language models with human preferences:

1. **Supervised fine-tuning** (SFT) on high-quality demonstrations.
2. Train a **reward model** from human preference comparisons.
3. Optimise the language model using **PPO** (Proximal Policy Optimisation) against the reward model, with a KL penalty to stay close to the SFT model.

---

## Lecture 11 — Deep Generative Modelling

---

### 11.1 Generator Networks

A **generator** maps a low-dimensional latent vector $\\mathbf{z} \\sim p(\\mathbf{z})$ (typically Gaussian) to a data point $\\mathbf{x} = G(\\mathbf{z})$. The goal is for the generated distribution to match the true data distribution.

---

### 11.2 Generative Adversarial Networks (GANs)

A GAN consists of two networks trained adversarially:
- **Generator** $G$: produces fake data from noise.
- **Discriminator** $D$: distinguishes real data from fake.

**Minimax objective**:

$$\\min_G \\max_D \\; \\mathbb{E}_{\\mathbf{x} \\sim p_{\\text{data}}}[\\ln D(\\mathbf{x})] + \\mathbb{E}_{\\mathbf{z} \\sim p(\\mathbf{z})}[\\ln(1 - D(G(\\mathbf{z})))]$$

At equilibrium, $D(\\mathbf{x}) = 0.5$ everywhere and $G$ generates data indistinguishable from real data.

#### GAN Variants

- **Conditional GAN (cGAN)**: condition both $G$ and $D$ on additional information (e.g., class label): $G(\\mathbf{z}, y)$.
- **CycleGAN**: unpaired image-to-image translation using cycle-consistency loss: $\\mathbf{x} \\approx G_B(G_A(\\mathbf{x}))$.
- **StyleGAN**: generates high-quality images using a mapping network and adaptive instance normalisation (AdaIN) at each layer for style control.

---

### 11.3 Mode Collapse

A common GAN failure mode where the generator learns to produce only a few modes of the data distribution, ignoring the rest. The generator finds a small set of outputs that consistently fool the discriminator.

Mitigations: minibatch discrimination, feature matching, Wasserstein GAN (WGAN) objective.

---

### 11.4 Autoencoders

An autoencoder learns a compressed representation by training an **encoder** $E$ and **decoder** $D$ to reconstruct the input:

$$\\mathcal{L} = \\|\\mathbf{x} - D(E(\\mathbf{x}))\\|^2$$

The bottleneck (latent space) forces the model to learn a compact representation. Standard autoencoders do not produce a smooth, structured latent space suitable for generation.

---

### 11.5 Variational Autoencoders (VAEs)

VAEs impose a probabilistic structure on the latent space.

**Encoder** outputs parameters of a distribution: $q_\\phi(\\mathbf{z} \\mid \\mathbf{x}) = \\mathcal{N}(\\boldsymbol{\\mu}, \\boldsymbol{\\sigma}^2 \\mathbf{I})$

**Decoder** reconstructs from samples: $p_\\theta(\\mathbf{x} \\mid \\mathbf{z})$

**ELBO** (Evidence Lower Bound) — the training objective to maximise:

$$\\text{ELBO} = \\mathbb{E}_{q_\\phi(\\mathbf{z} \\mid \\mathbf{x})}[\\ln p_\\theta(\\mathbf{x} \\mid \\mathbf{z})] - D_{\\text{KL}}(q_\\phi(\\mathbf{z} \\mid \\mathbf{x}) \\| p(\\mathbf{z}))$$

- First term: **reconstruction quality**.
- Second term: **KL divergence** — regularises the latent distribution to be close to the prior $p(\\mathbf{z}) = \\mathcal{N}(0, \\mathbf{I})$.

#### Reparameterisation Trick

To backpropagate through sampling, reparameterise: $\\mathbf{z} = \\boldsymbol{\\mu} + \\boldsymbol{\\sigma} \\odot \\boldsymbol{\\epsilon}$, where $\\boldsymbol{\\epsilon} \\sim \\mathcal{N}(0, \\mathbf{I})$. This makes the stochastic node differentiable.

---

## Lecture 12 — Embedding Models

---

### 12.1 Recommender Systems

Predict user preferences for items. Two main approaches:
- **Content-based**: recommend items similar to what the user has liked (based on item features).
- **Collaborative filtering**: recommend items liked by similar users (based on the user-item interaction matrix).

---

### 12.2 Matrix Factorisation

Approximate the sparse user-item rating matrix $\\mathbf{R} \\in \\mathbb{R}^{m \\times n}$ as a product of low-rank matrices:

$$\\mathbf{R} \\approx \\mathbf{U} \\mathbf{V}^\\top$$

where $\\mathbf{U} \\in \\mathbb{R}^{m \\times k}$ (user embeddings) and $\\mathbf{V} \\in \\mathbb{R}^{n \\times k}$ (item embeddings).

Predicted rating: $\\hat{r}_{ui} = \\mathbf{u}_u^\\top \\mathbf{v}_i$

Training objective (with regularisation):

$$\\min_{\\mathbf{U}, \\mathbf{V}} \\sum_{(u,i) \\in \\text{observed}} (r_{ui} - \\mathbf{u}_u^\\top \\mathbf{v}_i)^2 + \\lambda(\\|\\mathbf{U}\\|^2 + \\|\\mathbf{V}\\|^2)$$

---

### 12.3 Bias Terms

Add user and item bias terms to account for overall tendencies:

$$\\hat{r}_{ui} = \\mu + b_u + b_i + \\mathbf{u}_u^\\top \\mathbf{v}_i$$

where $\\mu$ is the global mean, $b_u$ is the user bias (e.g., a lenient rater), and $b_i$ is the item bias (e.g., a popular item).

---

### 12.4 Negative Sampling

For implicit feedback (clicks, views), we only have **positive** interactions. **Negative sampling** randomly samples unobserved interactions as negatives and trains the model to distinguish positive from negative pairs:

$$\\mathcal{L} = -\\ln \\sigma(\\mathbf{u}^\\top \\mathbf{v}_{\\text{pos}}) - \\sum_{j=1}^{k} \\ln \\sigma(-\\mathbf{u}^\\top \\mathbf{v}_{\\text{neg}_j})$$

This is computationally much cheaper than computing over all items.

---

### 12.5 Graph Embeddings

Embed nodes of a graph into a low-dimensional vector space such that structurally similar nodes have similar embeddings.

Methods: **DeepWalk** (random walks + skip-gram), **Node2Vec** (biased random walks controlling breadth-first vs depth-first exploration), **LINE** (preserves first-order and second-order proximity).

---

### 12.6 Knowledge Graphs

A knowledge graph stores facts as **(subject, relation, object)** triples, e.g., (Paris, capitalOf, France).

**Knowledge graph embeddings** learn vectors for entities and relations:
- **TransE**: models relations as translations: $\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$, minimising $\\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\|$.
- Used for link prediction (predicting missing triples).

---

### 12.7 Graph Convolutional Networks (GCNs)

GCNs generalise convolutions to graph-structured data. Each layer aggregates information from a node's **neighbours**:

$$\\mathbf{h}_v^{(l+1)} = \\sigma\\!\\left(\\sum_{u \\in \\mathcal{N}(v) \\cup \\{v\\}} \\frac{1}{c_{vu}} \\mathbf{W}^{(l)} \\mathbf{h}_u^{(l)}\\right)$$

where $c_{vu}$ is a normalisation constant. Stacking $L$ layers allows each node to aggregate information from its $L$-hop neighbourhood.

---

## Lecture 13 — Reinforcement Learning

---

### 13.1 Markov Decision Processes (MDPs)

An MDP is defined by $(\\mathcal{S}, \\mathcal{A}, T, R, \\gamma)$:

- $\\mathcal{S}$: set of **states**.
- $\\mathcal{A}$: set of **actions**.
- $T(s' \\mid s, a)$: **transition function** — probability of reaching $s'$ from $s$ via action $a$.
- $R(s, a)$: **reward function**.
- $\\gamma \\in [0, 1)$: **discount factor** (how much to value future rewards).

---

### 13.2 Policies and Value Functions

A **policy** $\\pi(a \\mid s)$ maps states to actions (or distributions over actions).

**State-value function** — expected return starting from state $s$ under policy $\\pi$:

$$V^\\pi(s) = \\mathbb{E}_\\pi\\left[\\sum_{t=0}^{\\infty} \\gamma^t R(s_t, a_t) \\mid s_0 = s\\right]$$

**Action-value function (Q-function)** — expected return starting from $s$, taking action $a$, then following $\\pi$:

$$Q^\\pi(s, a) = \\mathbb{E}_\\pi\\left[\\sum_{t=0}^{\\infty} \\gamma^t R(s_t, a_t) \\mid s_0 = s, a_0 = a\\right]$$

**Bellman equation**:

$$Q^\\pi(s, a) = R(s, a) + \\gamma \\sum_{s'} T(s' \\mid s, a) \\sum_{a'} \\pi(a' \\mid s') Q^\\pi(s', a')$$

---

### 13.3 Policy Gradient Methods (REINFORCE)

Directly optimise the policy $\\pi_\\theta$ by gradient ascent on expected return:

$$\\nabla_\\theta J(\\theta) = \\mathbb{E}_\\pi\\left[\\sum_{t=0}^{T} \\nabla_\\theta \\ln \\pi_\\theta(a_t \\mid s_t) \\cdot G_t\\right]$$

where $G_t = \\sum_{k=t}^{T} \\gamma^{k-t} r_k$ is the **return** from time $t$.

REINFORCE is a **Monte Carlo** method: it uses complete episode returns, leading to high variance. A **baseline** (e.g., $V(s)$) is often subtracted to reduce variance without introducing bias.

---

### 13.4 Q-Learning

A **model-free**, **off-policy** algorithm that learns the optimal Q-function directly.

**Tabular Q-learning** update:

$$Q(s, a) \\leftarrow Q(s, a) + \\alpha \\left[ r + \\gamma \\max_{a'} Q(s', a') - Q(s, a) \\right]$$

- $\\alpha$: learning rate.
- Uses the **max** over next actions (off-policy: learns about the greedy policy while following an exploratory one).

**Deep Q-Networks (DQN)**: approximate $Q(s, a)$ with a neural network. Key innovations:
- **Experience replay**: store transitions in a buffer and sample mini-batches to break correlation.
- **Target network**: a slowly-updated copy of the Q-network to stabilise training.

---

### 13.5 Exploration vs Exploitation

The fundamental RL dilemma:
- **Exploitation**: choose the currently best-known action.
- **Exploration**: try new actions to discover potentially better options.

Strategies:
- **$\\epsilon$-greedy**: with probability $\\epsilon$, take a random action; otherwise, take the greedy action.
- **Boltzmann exploration**: sample actions proportional to $\\exp(Q(s,a)/T)$.
- **Upper Confidence Bound (UCB)**: add a bonus for actions tried fewer times.

---

### 13.6 Tree Search

#### Minimax

For two-player zero-sum games, **minimax** builds a game tree:
- The **maximising player** chooses the move with the highest value.
- The **minimising player** chooses the move with the lowest value.

With **alpha-beta pruning**, branches that cannot affect the final decision are pruned, reducing the effective branching factor.

#### Monte Carlo Tree Search (MCTS)

MCTS builds a search tree incrementally through four steps:

1. **Selection**: traverse the tree using a selection policy (e.g., UCB1) to find a promising leaf.
2. **Expansion**: add a new child node.
3. **Simulation** (rollout): play a random game from the new node to the end.
4. **Backpropagation**: update visit counts and value estimates along the path.

MCTS does not require an evaluation function and scales well to large state spaces.

---

### 13.7 AlphaGo and AlphaZero

**AlphaGo** combined:
- Supervised learning from human games (policy network).
- Reinforcement learning via self-play.
- MCTS guided by the policy and value networks.

**AlphaZero** simplified the approach:
- **No human data**: learns entirely from self-play.
- A single neural network $f_\\theta(s) \\to (\\mathbf{p}, v)$ outputs both a policy vector $\\mathbf{p}$ and a value estimate $v$.
- MCTS uses the network for both selection (prior $\\mathbf{p}$) and evaluation (value $v$).
- Achieved superhuman performance in Go, Chess, and Shogi.

---

## Key Terminology Glossary

---

| Term | Definition |
|---|---|
| **Bias (statistical)** | Systematic error from simplifying assumptions; the difference between the expected prediction and the true value. |
| **Bias (model parameter)** | The intercept term $b$ in a linear model $\\mathbf{w}^\\top \\mathbf{x} + b$. |
| **Decision boundary** | The surface in feature space where the classifier's prediction changes from one class to another. |
| **Discriminative classifier** | Models $p(y \\mid \\mathbf{x})$ directly (e.g., logistic regression, SVM). |
| **Generative classifier** | Models $p(\\mathbf{x} \\mid y)$ and uses Bayes' rule to classify (e.g., Naive Bayes). |
| **Feature space** | The $d$-dimensional space spanned by the input features. |
| **Gradient descent** | Iterative optimisation: $\\mathbf{w} \\leftarrow \\mathbf{w} - \\eta \\nabla \\mathcal{L}$. |
| **Kernel** | A function that computes dot products in a (possibly infinite-dimensional) feature space without explicit mapping. |
| **Likelihood** | $p(\\mathcal{D} \\mid \\theta)$ — the probability of the data given the parameters. |
| **Loss function** | A function measuring the discrepancy between predictions and true values. |
| **Maximum Likelihood** | Finding $\\theta^* = \\arg\\max_\\theta p(\\mathcal{D} \\mid \\theta)$. |
| **Mode collapse** | A GAN failure where the generator only produces a few modes of the true data distribution. |
| **PCA** | Dimensionality reduction by projecting onto directions of maximum variance. |
| **Vanishing gradients** | Gradients shrink exponentially through many layers/time steps, hindering learning. |
| **Overfitting** | Model memorises training data and fails to generalise to unseen data. |
| **Underfitting** | Model is too simple to capture the underlying pattern. |
| **Regularisation** | Techniques (L1, L2, dropout) that constrain the model to prevent overfitting. |
| **Embedding** | A learned dense vector representation of a discrete object (word, user, item, node). |
| **Attention** | A mechanism that computes weighted combinations of values based on query-key similarity. |
| **Autoregressive** | A model that generates one token at a time, conditioned on all previously generated tokens. |
`;
