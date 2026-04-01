/**
 * Comprehensive Machine Learning Summary — inline markdown content.
 * Compiled from MLVU lectures 1–13 covering: foundations, linear models,
 * probability, evaluation, data pre-processing, neural networks, deep learning,
 * sequences, trees & ensembles, transformers, deep generative modeling,
 * embedding models, and reinforcement learning.
 */
export const machineLearningSummary = `
# Machine Learning Study Guide — Part 1: Foundations (Lectures 1–4)

## 1. What is Machine Learning?

Machine learning is the practice of building systems that **improve their behaviour based on experience**, where that behaviour has **not been explicitly programmed**. Instead of writing rules by hand, we provide examples and let an algorithm find the patterns.

### When ML is appropriate
- Approximate solutions are acceptable (movie recommendations, spam filtering)
- We have lots of examples to learn from
- We can't write the rules ourselves (digit recognition, speech understanding)

### When ML is a bad fit
- Exact solutions are required (computing taxes)
- Consequences of errors are severe and uncontrollable (some legal decisions)
- We already know how to solve the problem perfectly without learning

### Offline vs Online vs Reinforcement Learning
- **Offline learning**: Gather data → train model → deploy fixed model. The model never learns after deployment. This is the focus of most of the course.
- **Online learning**: The model predicts and learns simultaneously, updating itself with each new example.
- **Reinforcement learning**: An agent takes actions in an environment and receives rewards. It must balance exploring new strategies with exploiting known ones.

---

## 2. Abstract Tasks

ML works by translating real problems into **abstract tasks** — generic, well-studied problem formulations.

### Supervised tasks (labeled data)
- **Classification**: Predict a category (spam/ham, digit 0–9). The target is one of a finite set of classes.
- **Regression**: Predict a number (body mass, house price). The target is a continuous value.

### Unsupervised tasks (no labels)
- **Clustering**: Group instances into natural clusters (k-means).
- **Density estimation**: Learn how likely new data is (fit a distribution).
- **Generative modeling**: Learn to sample new examples that look like the data.

### Key vocabulary
- **Instance**: One example/row in the data (an email, a penguin, an image).
- **Features**: The measurements we make for each instance (pixel values, word counts). Features can be **numeric** (real-valued) or **categoric** (one of a finite set of values).
- **Target / label**: The thing we want to predict.
- **Model class**: The family of models we search through (e.g., all possible lines).

---

## 3. The Basic Recipe

1. Take a real-world problem
2. Translate (part of) it into an abstract task — choose instances, features, and target
3. Choose a model class (linear model, decision tree, kNN, etc.)
4. Search the model space for a model that minimises a loss function on the training data
5. Evaluate on held-out test data

### Feature space vs Model space
- **Feature space**: Each axis is a feature, each point is an instance. This is where your data lives.
- **Model space**: Each axis is a model parameter, each point is a specific model. This is where you search.

### Loss function
A loss function maps a model to a number expressing how poorly it fits the data. Lower is better. The loss defines a **loss surface** (or loss landscape) over the model space.

---

## 4. Three Simple Classifiers

### Linear classifier
Draws a hyperplane through feature space. Points on one side get one class, points on the other side get the other. Defined by weights **w** and bias **b**: classify based on the sign of **w**ᵀ**x** + b.

### Decision tree
A tree of if-then rules. Each internal node checks one feature, each leaf assigns a class. Can handle non-linear boundaries by carving the space into rectangular segments.

### k-Nearest Neighbours (kNN)
No learning at all — just memorise the data. For a new point, find the k closest training points and take a majority vote. **k** is a hyperparameter.

---

## 5. Linear Regression

The model is **f(x) = wᵀx + b**, a linear function mapping features to a predicted number. The parameters are the weight vector **w** and the bias scalar **b**.

### Dot product
wᵀx = Σᵢ wᵢxᵢ. Geometrically: ||w|| · ||x|| · cos(α). Each weight controls how much its feature contributes to the output, and in which direction.

### Mean Squared Error (MSE) loss
loss = (1/n) Σᵢ (f(xᵢ) - tᵢ)². The residual is the difference between prediction and target. Squaring ensures negatives and positives don't cancel, and big errors are penalised more heavily.

---

## 6. Searching for a Good Model

### Black-box methods (only need to compute the loss)
- **Random search**: Take a random step; keep it if loss goes down. Simple but slow.
- **Simulated annealing**: Like random search but occasionally accept uphill steps, allowing escape from local minima.
- **Population/evolutionary methods**: Maintain a population of models; breed new ones from the best.

### Convexity
A loss surface is **convex** if every local minimum is also the global minimum. On a convex surface, any descent method will find the optimum.

### Gradient descent
Instead of random steps, compute the **gradient** — the direction of steepest ascent — and step in the opposite direction. The gradient ∇f(p) is a vector of partial derivatives. The update rule:

**p ← p − η · ∇loss(p)**

- **η (learning rate)**: Controls step size. Too high → overshoot/diverge. Too low → very slow convergence.
- The gradient automatically provides both direction and magnitude (steps shrink near the minimum).
- On non-convex surfaces, gradient descent can get stuck in local minima.

### Gradient for linear regression (MSE)
∂loss/∂w = Σᵢ (f(xᵢ) - tᵢ) · xᵢ
∂loss/∂b = Σᵢ (f(xᵢ) - tᵢ)

The ½ in front of MSE cancels the factor of 2 from the chain rule, giving clean derivatives.

---

## 7. Linear Classification and Loss Functions

### How a linear classifier works
The function wᵀx + b defines a hyperplane. Where it equals zero is the **decision boundary**. Above → positive class, below → negative class. The vector **w** is perpendicular to the decision boundary.

### Why the error function is a bad loss
The number of misclassifications creates a flat, stepped loss surface. The gradient is zero almost everywhere (tiny changes in parameters don't change the number of mistakes). Gradient descent would never move.

### Least-squares classification
Assign classes numeric values (+1 and −1) and do regression. Creates a smooth loss surface, but far-away correctly-classified points create huge residuals that distort the decision boundary.

### Logistic regression (log loss)
Apply the **logistic sigmoid** σ(t) = 1/(1+e⁻ᵗ) to squeeze wᵀx + b into [0,1]. Interpret the output as the probability of the positive class.

**Key sigmoid properties:**
- σ(-t) = 1 - σ(t)  (symmetry)
- σ'(t) = σ(t) · σ(-t) = σ(t) · (1 - σ(t))  (derivative)

**Log loss** = −Σ[positive instances] ln σ(wᵀx+b) − Σ[negative instances] ln(1 − σ(wᵀx+b))

This is also called **binary cross-entropy loss**. Correctly classified points far from the boundary contribute almost zero loss (unlike least-squares, which still penalises them). The decision boundary is still linear (where σ = 0.5, i.e., wᵀx + b = 0).

---

## 8. Probability and Maximum Likelihood

### Frequentist approach
The true model is a fixed, unknown thing. We use the data to make our best guess (a point estimate). The **maximum likelihood** principle says: pick the parameters θ that make the observed data most probable.

### Log-likelihood
Taking the logarithm of the likelihood turns products into sums (because instances are independent) and is easier to work with. Maximising log-likelihood = minimising negative log-likelihood (which becomes our loss function).

### Connection to MSE
Assuming normally distributed noise leads directly to the MSE loss. The maximum likelihood estimate for the mean of a normal distribution is the arithmetic mean of the data.

### Bayesian approach
Instead of a point estimate, compute a full **posterior distribution** over models using Bayes' rule:
p(θ|data) = p(data|θ) · p(θ) / p(data)

- **Prior** p(θ): What we believe before seeing data
- **Likelihood** p(data|θ): How probable the data is under each model
- **Posterior** p(θ|data): Updated beliefs after seeing data

The posterior tells us not just the best model, but how uncertain we are.

---

## 9. Naive Bayes Classifier

A **generative** classifier: learns p(features|class) and uses Bayes' rule to get p(class|features).

### The naive assumption
All features are **conditionally independent given the class**. This means:
p(x₁, x₂, ..., xₙ | class) = p(x₁|class) · p(x₂|class) · ... · p(xₙ|class)

Each factor is estimated from relative frequencies in the training data.

### Smoothing
If a feature value never appears for some class, its estimated probability is 0, which zeros out the entire product. Fix this by adding **pseudo-observations** (one fake instance per value per class). With weight λ:
p(xᵢ = v | class) = (count + λ) / (class_total + λ·num_values)

---

## 10. Information Theory and Entropy

### Codelength interpretation
−log₂ p(x) is the number of bits needed to encode outcome x. Low-probability events need long codes; high-probability events need short codes.

### Entropy
H(p) = −Σ p(x) log₂ p(x)
The expected codelength = the average "surprise" of the distribution. Uniform distributions have maximum entropy; certainty has entropy 0. Convention: 0 · log(0) = 0.

### Cross-entropy
H(p, q) = −Σ p(x) log₂ q(x)
Expected codelength when encoding data from distribution p using the code optimised for q. Always ≥ H(p), with equality when p = q.

**Warning:** H(p,q) is undefined if q(x) = 0 but p(x) ≠ 0 (infinite codelength for an event that actually occurs).

### KL divergence
KL(p, q) = H(p, q) − H(p)
The "wasted bits" from using the wrong code. Always ≥ 0, equals 0 only when p = q. Not symmetric: KL(p,q) ≠ KL(q,p).

### Connection to log loss
Minimising the log loss of a classifier is equivalent to minimising the cross-entropy between the true label distribution and the model's predicted distribution.

---

## 11. Generalization and Overfitting

### The most important rule
**Never judge performance on the training data.** A model that memorises random noise in the training set will look perfect on training data but fail on new data. This is **overfitting**.

### Train / Validation / Test split
- **Training data**: Used to fit the model
- **Validation data**: Used to select hyperparameters and compare models (can be used repeatedly)
- **Test data**: Used **once** at the very end to report final performance

### Cross-validation
Split training data into k folds. For each fold, train on the other k−1 and validate on the held-out fold. Average the scores. Gives a better estimate when data is limited.

### Bias-variance tradeoff
- **Bias**: Error from a model being too simple (underfitting). Stays if you resample data.
- **Variance**: Error from a model being too sensitive to the specific training data (overfitting). Changes if you resample.

### The No Free Lunch Theorem
No learning algorithm is universally best across all possible problems. Every model makes assumptions (**inductive biases**) about the data. Generally, simpler models are preferred when they fit the data well enough.

---

## 12. Model Evaluation (Classification)

### Confusion matrix
A table of actual vs predicted classes. Diagonal = correct; off-diagonal = errors. Gives counts of True Positives (TP), True Negatives (TN), False Positives (FP), False Negatives (FN).

### Key metrics
- **Accuracy** = (TP + TN) / total
- **Precision** = TP / (TP + FP) — "of those we called positive, how many are?"
- **Recall (TPR)** = TP / (TP + FN) — "of actual positives, how many did we find?"
- **False Positive Rate** = FP / (TN + FP)

### Class imbalance
When one class dominates (e.g., 99% negative), accuracy is misleading. A majority-class baseline (predict everything as the majority class) already gets 99%.

### Cost imbalance
Different types of errors have different costs. Missing cancer (false negative) is far worse than a false alarm (false positive).

### Ranking classifiers and ROC/AUC
Turn a classifier into a **ranking** by scoring how "positive" each instance is (e.g., distance to boundary for linear classifiers). A **ranking error** is a pair (one positive, one negative instance) where the negative is ranked higher than the positive.

- **ROC curve**: Plot TPR vs FPR as you vary the classification threshold
- **AUC** (Area Under ROC Curve): Probability that a random positive is ranked higher than a random negative
- **PR curve**: Plot Precision vs Recall (more informative under extreme class imbalance)

### Social Impact: Sensitive Attributes
Gender, race, sexuality etc. require careful treatment. Key questions: Can the model be used for harm? Can it be offensive? Are we confusing correlation with causation? Does the data have sampling bias?

---

# Machine Learning Study Guide — Part 2: Data, Neural Networks & Sequences (Lectures 5–8, 10)

## 1. Data Pre-processing (Lecture 5)

### Philosophy: Think about production
Whenever you're unsure how to handle your data, ask: *what will the production setting look like?* Your test set should simulate production as closely as possible. If production will have missing values, your test set should too. If production won't, remove them.

### Missing data
- **Remove features** with many missing values (if the feature isn't important)
- **Remove instances** with missing values (be careful: removal may change your distribution if data isn't missing uniformly)
- **Impute**: Fill in missing values
  - Categorical features → use the **mode** (most common category)
  - Numeric features → use the **mean** (minimises squared error) or **median** (minimises absolute error, more robust to outliers)
  - Advanced: Predict missing values from other features using a classifier or regressor

### Outliers
- **Unnatural outliers**: Measurement errors, encoding mistakes (e.g., using -1 for "missing"). Remove or treat as missing data.
- **Natural outliers**: Genuine extreme values (Bill Gates' net worth). Don't remove — adapt your model instead.

### Mean vs Median: A crucial distinction
- The **mean** minimises the sum of **squared** errors. It is the maximum likelihood estimate under a **normal distribution** assumption.
- The **median** minimises the sum of **absolute** errors. It is robust to extreme values.
- If your data has heavy tails or extreme outliers, the mean can be wildly misleading. Example: "average wealth" in a country with billionaires.
- Anything using squared errors (MSE loss, linear regression, etc.) implicitly assumes normally distributed data and will be sensitive to outliers.

### Class imbalance in training
Your test/validation set must reflect the true class distribution (to simulate production). Your training set can be manipulated:
- **Oversampling**: Duplicate minority class instances (risk: overfitting on duplicates)
- **Undersampling**: Remove majority class instances (risk: losing information)
- **SMOTE**: Generate synthetic minority points by interpolating between nearby minority instances
- Treat resampling ratio as a hyperparameter; optimise with ROC/PR curves

### Feature design

**Categorical → Numeric:**
- **One-hot coding** (preferred): Create one binary feature per category. No false ordering imposed.
- **Integer coding** (avoid if possible): Imposes a meaningless ordering on unordered categories.

**Feature expansion:**
Adding derived features (x², x₁·x₂, sin(x), etc.) allows a linear model to learn non-linear decision boundaries. A linear classifier in the expanded space is a non-linear classifier in the original space. Example: Adding x₁² and x₂² lets a linear model learn a circular decision boundary.

---

## 2. Normalization (Lecture 5)

### Why normalise?
Many models (kNN, SVMs, neural networks) are sensitive to the scale of features. If one feature ranges from 0–100 and another from 0–0.001, the first dominates distance calculations.

### Three approaches

| Method | What it does | Result |
|--------|-------------|--------|
| **Normalisation** | z = (x - x_min) / (x_max - x_min) | Values in [0, 1] |
| **Standardisation** | z = (x - μ) / σ | Mean = 0, std = 1 |
| **Whitening** | Transform so features are uncorrelated with unit variance | Data looks like it came from a standard MVN |

**Standardisation** is the most common. It assumes data is roughly normally distributed. Think of it as *reversing* a transformation: the data was "generated" from a standard normal, scaled by σ, shifted by μ. We undo that.

**Whitening** handles correlations between features. It requires a basis transformation (see PCA below). PCA whitening: apply full PCA, then scale each component by 1/σ along that component.

---

## 3. Principal Component Analysis (Lecture 5)

### What PCA does
PCA finds the directions in feature space along which the data varies the most. It provides a new coordinate system (basis) for the data, ordered by importance.

### Two equivalent views
1. **Maximum variance**: The first principal component is the direction along which the variance of the projected data is maximised. The second is the best direction orthogonal to the first, and so on.
2. **Minimum reconstruction error**: The first principal component is the direction onto which projecting and reconstructing the data gives the smallest squared error. These two views are equivalent by the Pythagorean theorem: variance + reconstruction error = constant.

### How it works
- The data must be **mean-centered** first (subtract the mean from every instance).
- Each principal component **c** is a unit vector. The reduced representation is z = cᵀx (dot product = orthogonal projection). The reconstruction is x' = z·c.
- **Key insight**: The reduction vector c' and reconstruction vector c are the same (when c is a unit vector). This is because the optimal z for a given c is the orthogonal projection of x onto c, which equals cᵀx.

### Choosing the number of components
Plot variance retained vs number of components. Often there's an "elbow" — a natural point where adding more components gives diminishing returns.

### Applications
- **Dimensionality reduction**: Reduce 4096 pixel features to 60 dimensions while retaining recognisable faces (eigenfaces).
- **Visualisation**: Plot the first 2–3 components as a scatter plot.
- **Whitening**: Full PCA (same number of output dimensions as input) gives uncorrelated features; scale by 1/σ per component for unit variance.
- **Bias/variance tradeoff**: Feature expansion increases model power (↓bias, ↑variance). PCA does the opposite (↑bias, ↓variance). Use PCA to counteract overfitting from too many features.

---

## 4. Neural Networks (Lecture 6)

### From perceptrons to networks
A **perceptron** is just a linear classifier: wᵀx + b, check the sign. The problem: composing linear functions gives another linear function. Chaining perceptrons adds no power.

**Solution**: Add a **non-linear activation function** after each layer.

### Activation functions
- **Sigmoid** σ(t) = 1/(1+e⁻ᵗ): Squishes to [0,1]. Smooth, but derivative ≤ 0.25 → gradients vanish in deep networks.
- **ReLU** r(t) = max(0, t): Derivative is 1 for positive inputs (no vanishing gradient), 0 for negative inputs. Preferred for hidden layers. Risk: "dead neurons" (always negative input → gradient always 0).

### Feedforward network (MLP)
Layers are fully connected, no cycles. Each layer: multiply by weight matrix → add bias → apply activation. Think of the first layer as a **learned feature expansion** and the second layer as a linear model in that expanded space.

### Output layers
| Task | Activation | Loss |
|------|-----------|------|
| Regression | Linear (none) | MSE |
| Binary classification | Sigmoid | Log loss (binary cross-entropy) |
| Multiclass classification | **Softmax** | Log loss on correct class |

**Softmax**: softmax(yᵢ) = exp(yᵢ) / Σⱼ exp(yⱼ). Makes all outputs positive and sum to 1 → interpretable as class probabilities.

### Stochastic Gradient Descent (SGD)
Instead of computing the loss over the entire dataset, compute it for one instance (or a small **minibatch**) and take a gradient step. Benefits: cheaper per step, adds noise that helps escape local minima, many small inaccurate steps often beat one big accurate step.

---

## 5. Backpropagation (Lecture 6)

### The problem
For complex models, we can't work out symbolic gradients by hand. We need to automate gradient computation.

### Three approaches
1. **Symbolic differentiation**: The computer manipulates algebraic expressions. Exact but expressions grow exponentially.
2. **Numerical differentiation**: Estimate gradients by evaluating the function at nearby points. Inaccurate and expensive.
3. **Backpropagation**: A middle ground — part symbolic, part numeric. Accurate and efficient.

### How backpropagation works
1. **Break the function into modules** (small, simple operations).
2. **Forward pass**: Compute output, saving all intermediate values.
3. **Work out local derivatives symbolically** (derivative of each module's output w.r.t. its inputs).
4. **Backward pass**: Walk backward through the computation graph. At each module, multiply the gradient of the loss w.r.t. the output (already computed) by the local derivative to get the gradient w.r.t. the inputs. Fill in numeric values from the forward pass.

### The key principle
At any module: **gradient for input = gradient for output × local derivative**. Since we traverse the graph from output to input, the gradient for the output is always something we've already computed.

### Multivariate chain rule
If variable x affects the output through multiple paths (x → a and x → b, both feeding into c), sum the derivatives along all paths:
∂f/∂x = (∂f/∂a)(∂a/∂x) + (∂f/∂b)(∂b/∂x)

---

## 6. Maximum Margin / SVM Loss (Lecture 6)

### The intuition
When data is well-separable, many decision boundaries work equally well. The **maximum margin** classifier picks the one that maximises the distance to the nearest point of either class.

### Key definitions
- **Support vectors**: The points closest to the decision boundary (where yᵢ(wᵀxᵢ + b) = 1).
- **Margin**: The distance from the boundary to the support vectors = 2/||w||.
- **Objective**: Minimise ½||w||² (equivalently, maximise the margin), subject to all points being correctly classified with margin ≥ 1.

### Soft margin (allows mistakes)
Introduce slack variables πᵢ for each point. Points can fall inside the margin (or be misclassified) but pay a penalty. Hyperparameter **C** controls the tradeoff between a wide margin and few violations.

### Hinge loss (unconstrained form)
loss = ½wᵀw + C · Σᵢ max(0, 1 − yᵢ(wᵀxᵢ + b))

The first term is a **regulariser** (prefers small weights). The second is the error, but only for points inside or on the wrong side of the margin. Points safely outside the margin contribute zero error.

### Kernel trick (optional/not on exam)
The SVM dual formulation depends only on dot products between instances. Replace the dot product with a **kernel function** k(x, x') that computes dot products in a much higher-dimensional space without explicitly computing the expanded features. Examples: polynomial kernel (x·y + 1)ᵈ, RBF kernel exp(−γ||x−y||²).

---

## 7. Deep Learning (Lecture 7)

### Tensors
A generalisation of vectors and matrices: rank-0 = scalar, rank-1 = vector, rank-2 = matrix, rank-3+ = higher-dimensional arrays. All data and computations in deep learning are expressed as tensor operations.

### Automatic differentiation
Deep learning frameworks (PyTorch, TensorFlow) build a **computation graph** automatically. Each function/module has a **forward** (compute output) and **backward** (compute gradients for inputs, given gradients for outputs).

- **Lazy execution**: Define the graph first, compile, then feed data. Harder to debug.
- **Eager execution**: Build the graph on-the-fly as you compute. Easier to debug; now the default.

### Tensor backpropagation
The loss must always be a **scalar**. The gradient of the loss w.r.t. any tensor T has the **same shape as T**. We write T∇ for this gradient (where T∇ᵢⱼ = ∂loss/∂Tᵢⱼ).

For each module, the backward function receives the gradient for its outputs and must return the gradient for its inputs. The trick is to work out scalar derivatives first, then **vectorise** (express the pattern as matrix operations).

Example for a linear layer k = Wx + b:
- W∇ = k∇ · xᵀ (outer product)
- x∇ = Wᵀ · k∇
- b∇ = k∇

### Convolutions
Instead of connecting every input to every output, slide a small **kernel** (weight matrix) across the input. Weights are **shared** across all positions → far fewer parameters.

- **Kernel size**: The spatial extent of the filter (e.g., 3×3)
- **Channels**: Input has C_in channels, output has C_out channels. Total weights = kernel_size² × C_in × C_out
- **Padding**: Add zeros around edges so output has same spatial size. Same padding = floor(kernel_size/2)
- **Stride**: How far the kernel moves each step (stride > 1 reduces resolution)
- **Max pooling**: Take the max of each n×n block → reduces resolution, focuses gradient on the most important pixel

### Making deep learning work

**Vanishing gradients**: In deep networks, gradients shrink as they propagate backward. Solutions:
- **ReLU activation** (derivative = 1 for positive inputs)
- **Careful initialisation** (Xavier/Glorot or He init: set weights so variance is preserved across layers)
- **Residual connections**: Add the input of a block directly to its output (shortcut for gradients)
- **Batch/Layer normalisation**: Re-normalise intermediate values to prevent magnitude drift

**Optimisers**:
- **Momentum**: Instead of following the gradient directly, maintain a "velocity" that accumulates gradient history. Like a boulder rolling downhill.
- **Adam**: Combines momentum with per-parameter scaling by the standard deviation of recent gradients. The most popular optimiser in practice.

**Regularisation**:
- **L2 regulariser**: Add λ||θ||² to the loss. Prefers small weights. Iso-contours are circles → no preference for axes.
- **L1 regulariser**: Add λ||θ||₁ to the loss. Prefers **sparse** weights (many exactly zero). Iso-contours are diamonds → solutions tend to lie on axes.
- **Dropout**: During training, randomly set hidden nodes to zero with probability p. Prevents co-adaptation of neurons. At test time, multiply activations by p to compensate.

---

## 8. Sequences (Lecture 8)

### Types of sequential data
- Numeric sequences (stock prices, sensor data)
- Symbolic sequences (text as words or characters)
- One label per sequence (sentiment classification) or one label per timestep (POS tagging)

### Simple approach: Feature extraction
Convert a sequence to a fixed-size feature vector (e.g., use the last k values as features) and apply any standard model. Quick and effective for simple tasks.

### Markov models
Model the probability of a sequence by breaking it into conditional probabilities:
p(x₁, x₂, ..., xₙ) = p(x₁) · p(x₂|x₁) · p(x₃|x₁,x₂) · ...

**Markov assumption**: Limit the history to the last k tokens:
p(xₜ | x₁...xₜ₋₁) ≈ p(xₜ | xₜ₋ₖ...xₜ₋₁)

Estimate probabilities from n-gram frequencies: p(prize | won, a) = count("won a prize") / count("won a"). Apply smoothing for unseen n-grams.

**Autoregressive sampling**: Start with a seed, predict the next token, append it, repeat.

### Deep learning on sequences

**Input representation**:
- One-hot vectors (small vocabulary) or **embedding vectors** (large vocabulary, learned by backpropagation)
- Sequences of different lengths → pad shorter sequences to match within a batch

**Embedding vectors**: Assign each discrete object a learnable vector. These are parameters of the model, updated by gradient descent. Pre-trained embeddings (Word2Vec) capture semantic structure: king − man + woman ≈ queen.

**Sequence-to-sequence layers** (accept variable-length input with fixed weights):
- **1D convolutions**: Fixed kernel slides along time; limited memory (kernel size). Causal variant only looks backward.
- **Recurrent Neural Networks (RNN)**: Hidden state is fed back as input at the next timestep. When unrolled over time, it's a deep feedforward net with shared weights. Can look arbitrarily far back in theory.

### LSTM (Long Short-Term Memory)
Solves the vanishing gradient problem in RNNs with a **cell state** ("conveyor belt") that passes through the network with only linear operations. Three gates control information flow:
1. **Forget gate**: Decides what to erase from the cell state (sigmoid → element-wise multiply)
2. **Input gate**: Decides what new information to write (sigmoid × tanh → add to cell state)
3. **Output gate**: Decides what to read from the cell state for the current output

The conveyor belt gives gradients a path with no activations → long-range dependencies can be learned.

### Sequence model configurations
- **Sequence → Sequence**: One output per input timestep (POS tagging, autoregressive modeling)
- **Sequence → Label**: Reduce to a single vector (global pooling, or take the last output of a causal model)
- **Label → Sequence**: Repeat input vector into a sequence, or feed as initial hidden state (generation)

---

## 9. Decision Trees and Ensembles (Lecture 10)

### Decision tree training
Grow the tree greedily, one node at a time. At each node, choose the feature split that maximises **information gain**:

**Information gain** = H(S) − Σᵢ (|Sᵢ|/|S|) · H(Sᵢ)

where H is entropy, S is the set before the split, and Sᵢ are the subsets after splitting.

**Stop conditions**: All instances in a leaf have the same class, no features left to split on, or maximum depth reached.

**Numeric features**: Try thresholds between consecutive instances of different classes. Pick the threshold with the highest information gain.

**Regression trees**: Leaves output the mean of their instances. Split by **variance reduction** instead of information gain.

**Pruning**: After growing the full tree, remove leaves one by one if removing them improves validation performance. This combats overfitting.

### Ensembling

**Bagging (Bootstrap Aggregating)**: Train many models on bootstrap samples (sampling with replacement) of the data. Combine by majority vote or averaging. Reduces **variance** (helps overfitting models).
- **Random Forest**: Bagged decision trees, also randomly subsampling features per split.

**Boosting**: Train models sequentially. Each new model focuses on the mistakes of the previous ensemble. Reduces **bias** (helps underfitting models).
- **AdaBoost**: Reweight instances — misclassified ones get higher weight. Model weight αₜ = ½ ln((1−εₜ)/εₜ), where εₜ is the weighted error rate.
- **Gradient Boosting**: Train the next model to predict the **residuals** (negative gradient of the loss w.r.t. the model output) of the current ensemble. Generalises to any differentiable loss via pseudo-residuals.

**Stacking**: Use predictions of multiple models as features for a second-level "combiner" model (usually simple, like logistic regression).

---

# Machine Learning Study Guide — Part 3: Generative Models, Transformers, Embeddings & RL (Lectures 9–10, 12–13)

## 1. Deep Generative Models (Lecture 9)

### Neural networks as probability distributions
A deterministic neural network can be turned into a probability model by interpreting its outputs as **parameters of a distribution**:
- Single sigmoid output → Bernoulli distribution (binary classification)
- Softmax output → Categorical distribution (multiclass)
- Linear output → Mean of a normal distribution (regression)
- Two outputs per dimension → Mean and variance of a diagonal Gaussian

When outputs parametrise a normal distribution, maximising the likelihood is equivalent to minimising the MSE loss (for fixed variance) or a modified MSE that also learns the variance.

### Generator networks
Instead of putting the probability distribution at the *output*, put it at the *input*. Sample z from a standard normal distribution N(0, I) and feed it through a neural network. The output is a random point — we've defined a complex probability distribution by transforming a simple one.

Even with random weights (no training), a deep enough network transforms the standard normal into an extremely complex, multi-modal distribution. The challenge is training the network so that this distribution matches the data.

### The mode collapse problem
Naive training (sample a random output from the generator, compare it to a random data point, backpropagate the difference) fails. The generator can't figure out *which* data point it should be matching each output to. It collapses to predicting only the mean of the data — a single blurry output that minimises average distance to everything.

---

## 2. Generative Adversarial Networks (GANs)

### Vanilla GAN
Two networks trained in opposition:
- **Generator G**: Takes random noise z → produces a fake example
- **Discriminator D**: Takes an example → classifies it as real (from data) or fake (from G)

Training alternates:
1. **Train D**: Show it real data (label: positive) and G's output (label: negative). Freeze G's weights.
2. **Train G**: Feed output through D, train G to produce things D calls positive. Freeze D's weights.

Think of D as a very complex, learned loss function for G.

### Conditional GAN
G takes an *input* (e.g., a line drawing) plus noise, and produces an output (e.g., a photograph). D sees input-output pairs and judges whether they're real or fake. This allows probabilistic image-to-image translation where G can imagine specific details differently each time.

### CycleGAN (unpaired data)
When we don't have matched pairs (e.g., horse photos ↔ zebra photos), train two generators: horse→zebra and zebra→horse. **Cycle consistency loss**: transforming a horse to a zebra and back should recover the original horse. Plus discriminators for each domain to ensure realism.

### StyleGAN
The latent vector z is fed to the generator at every layer (through learned affine transformations), not just the input. This lets different layers control different levels of detail: early layers control coarse features (gender, age), middle layers control medium features (hairstyle), late layers control fine details (skin texture). Separate random noise per layer allows stochastic variation in fine details.

---

## 3. Autoencoders

### Basic autoencoder
An hourglass-shaped network: **encoder** compresses input to a low-dimensional **bottleneck** (latent representation), **decoder** reconstructs the input from the bottleneck. Trained to minimise reconstruction error (MSE, L1, or binary cross-entropy).

After training:
- **Encoder alone** → dimensionality reduction
- **Decoder alone** → generator (fit an MVN to the latent representations of the training data, sample from it, decode)
- **Both together** → data manipulation (encode, modify the latent vector, decode)

### Latent space manipulation
Label a small set of examples with an attribute (e.g., "smiling" vs "not smiling"). Compute the mean latent vector for each group. The difference = a "smiling vector". Adding this vector to any encoded face makes it smile.

### Limitation of basic autoencoders
There's no guarantee the latent space is smooth or well-structured. Points between training examples might decode to garbage. The decoder works as a generator, but it's not principled.

---

## 4. Variational Autoencoders (VAEs)

### Motivation
We want to train a generator network by **maximum likelihood** — directly maximising p(data). The problem: computing p(x) requires integrating over all possible latent vectors z, which is intractable.

### The key idea
Introduce an approximate inverse **q(z|x)** (the encoder), which guesses which z produced a given x. Then derive a **lower bound** (ELBO) on ln p(x) that we *can* compute and optimise.

### The ELBO decomposition
ln p(x|θ) = L(q, θ) + KL(q(z|x), p(z|x, θ))

Where:
- **L(q, θ)** = E_q[ln p(x,z|θ) / q(z|x)] — the Evidence Lower BOund
- **KL(q, p)** ≥ 0 — the gap between our bound and the true likelihood

Since KL ≥ 0, we know **L ≤ ln p(x)**. Maximising L pushes up the likelihood. The better q approximates the true posterior p(z|x), the tighter the bound.

### The VAE loss function
−L = **KL(q(z|x), N(0,I))** + **E[−ln p(x|z)]**

Two terms:
1. **KL loss** (regulariser): Pulls the encoder's output distribution toward a standard normal. Ensures the latent space is dense and well-organised around the origin.
2. **Reconstruction loss**: The decoder should assign high probability to the original input x when given a sample z from the encoder's distribution.

### The reparameterisation trick
Sampling z ~ N(μ, σ) is not differentiable. But we can rewrite it as z = μ + σ ⊙ ε, where ε ~ N(0, I). The randomness (ε) becomes a fixed input; the rest (multiply by σ, add μ) is differentiable. This lets gradients flow through the sampling step.

### Three forces on the latent space
- **Reconstruction loss**: Wants each data point encoded to a precise location that decodes perfectly. Left alone, would create sparse, disconnected latent representations.
- **KL loss**: Wants all distributions to be N(0,I). Left alone, would make the encoder output a constant (mode collapse).
- **Sampling step**: Ensures that not just one point but a neighbourhood of points must decode well.

Together, they produce a smooth, continuous latent space where interpolation between points yields meaningful intermediate examples.

### VAE vs GAN comparison
| | VAE | GAN |
|---|-----|-----|
| Training | Principled (max likelihood lower bound) | Adversarial (minimax game) |
| Output quality | Blurrier | Sharper |
| Latent space | Encoder provides it directly | Must be found post-hoc |
| Stability | More stable training | Notoriously tricky |
| Mode coverage | Covers all modes | Can miss modes |

### VAE ≈ Nonlinear PCA
Both use reconstruction loss. PCA uses linear encoding/decoding; VAE uses neural networks. PCA has a clean analytical solution; VAE requires gradient descent. VAE adds a probabilistic latent space with the KL regulariser.

---

## 5. Self-Attention and Transformers (Lecture 10)

### Simple self-attention
A sequence-to-sequence operation where each output is a **weighted sum of all inputs**. The weights are derived from the inputs themselves (not learned parameters).

For output yᵢ:
- Compute raw weights: w'ᵢⱼ = xᵢ · xⱼ (dot product)
- Normalise: wᵢⱼ = softmax(w'ᵢ₁, w'ᵢ₂, ..., w'ᵢₙ)
- Compute output: yᵢ = Σⱼ wᵢⱼ · xⱼ

**Vectorised**: Y = softmax(XᵀX) · Xᵀ (with row-wise softmax)

### Key properties of self-attention
1. **Permutation equivariant**: Shuffling inputs shuffles outputs in the same way. The model can't "see" the ordering — it's fundamentally a **set operation**.
2. **Global receptive field**: Every output can attend to every input, regardless of distance. No finite memory limitation (unlike convolutions or Markov models).
3. **Mostly linear**: If we treat the attention weights as constants, the operation is linear → clean, non-vanishing gradients (similar principle to the LSTM conveyor belt).
4. **Self-dominated**: xᵢ · xᵢ is usually largest, so yᵢ is mostly xᵢ with a little of other vectors mixed in.
5. **No parameters** (in the simple version).

### Scaled dot-product attention
Divide dot products by √k (embedding dimension) before softmax to prevent extreme values when k is large:
w'ᵢⱼ = (xᵢ · xⱼ) / √k

### Keys, Queries, and Values
Each input vector is projected by three different learned matrices:
- **Query** qᵢ = Wq · xᵢ — "what am I looking for?"
- **Key** kⱼ = Wk · xⱼ — "what do I contain?"
- **Value** vⱼ = Wv · xⱼ — "what information do I provide?"

Weights are computed from queries and keys: wᵢⱼ = softmax(qᵢ · kⱼ / √k). Output is weighted sum of values. This adds learnable parameters and breaks the self-similarity that made wᵢᵢ dominant.

### Multi-head attention
Run h smaller self-attentions in parallel (each with its own K, Q, V matrices of dimension k/h). Concatenate results and project with a final matrix W₀. Each head can capture different types of relationships. Total parameter count ≈ same as single-head.

### Causal self-attention
For autoregressive models (predicting the next token), mask all positions after the current one by setting their raw weights to −∞ before softmax. This ensures each output only depends on current and previous inputs.

---

## 6. Building Transformers (Lecture 10)

### The transformer block
The fundamental building block, repeated many times:
1. **Layer normalisation** → 2. **Self-attention** → 3. **Residual connection** (add input to output)
4. **Layer normalisation** → 5. **Feed-forward layer** (MLP applied independently per token: project up to 4k, ReLU, project back to k) → 6. **Residual connection**

Only the self-attention propagates information between tokens. Everything else operates on each token independently.

### Layer normalisation
Normalise the values *within* each vector (compute mean and std of the elements, then standardise). Different from batch normalisation (which normalises across the batch dimension). Optionally followed by learned scale and bias.

### Residual connections
Add the block's input to its output: y = f(x) + x. Provides a gradient shortcut that helps early training and prevents vanishing gradients in very deep models.

### Position embeddings
Since self-attention is permutation equivariant, it can't distinguish word order. Fix: add a learned **position embedding** (a unique vector per position) to each word embedding. This breaks the equivariance — the model can now see where each token is.

### Sub-word tokenisation
- Word-level: Large vocabulary, can't handle unknown words
- Character-level: Small vocabulary, very long sequences (expensive: self-attention is O(n²))
- **Sub-word** (BPE/WordPiece): Learn a vocabulary of ~50K–100K common character chunks. Common words become single tokens; rare words break into pieces. Best of both worlds.

Built by iteratively merging the most frequent character pairs in the training data.

### BERT (Bidirectional Encoder Representations from Transformers)
- Stack of 24 transformer blocks (bidirectional, not causal)
- **Pre-training**: Masked Language Modeling (MLM) — corrupt 15% of tokens, predict the originals. + Next Sentence Prediction (less important).
- **Fine-tuning**: Add a task-specific output layer, train on labelled data.

### GPT family (Generative Pre-trained Transformer)
- Stack of **causal** transformer blocks
- Pre-trained by **next-token prediction** (autoregressive language modelling)
- GPT-2 (1.5B params): First model to generate coherent long-form text
- GPT-3 (175B params): **In-context learning** — recognise patterns in the prompt and continue them. No weight changes needed. Few-shot learning by putting examples in the prompt.
- GPT-4 (rumoured ~8 × GPT-3 sized models in an ensemble)

### Encoder/decoder architecture
Only the original "Attention is All You Need" transformer used this (for machine translation). BERT and GPT are single stacks. The encoder/decoder split is a consequence of the translation task, not a fundamental part of transformers.

---

## 7. Building Chatbots (Lecture 10)

### From language model to chatbot
GPT predicts the most likely continuation of any text. By structuring the prompt as a dialogue (system instructions, then alternating user/assistant messages), GPT generates realistic chatbot responses.

### Instruction tuning
Fine-tune GPT on a dataset of instructions and their correct responses. Key finding: the model generalises to *unseen* instruction types. Only works above ~8B parameters — an example of **emergence** (abilities appearing suddenly at scale).

### RLHF (Reinforcement Learning from Human Feedback)
1. **Demonstration**: Human labellers write ideal responses → fine-tune directly.
2. **Comparison**: Model generates multiple responses → labellers rank them → train a **reward model** to predict the ranking.
3. **Optimisation**: Train GPT to generate responses that the reward model scores highly. RL is needed because sampling is not differentiable.

### Augmentation / Plugins
GPT can generate structured commands (code, search queries, API calls). An external system executes these and appends the result to the prompt. Enables access to real-time information, calculations, databases, etc.

---

## 8. Embedding Models and Recommender Systems (Lecture 12)

### The abstract task of recommendation
Two large sets (users and items) with a sparse relation between them (ratings, likes, purchases). The goal: predict missing entries.

### Matrix factorisation
Represent each user and each movie by a **learned embedding vector** of dimension k. The predicted rating for user i and movie j is the **dot product** of their embeddings: R̂ᵢⱼ = uᵢᵀ · mⱼ.

This means R̂ ≈ UᵀM — we're decomposing the rating matrix into two smaller matrices.

**Loss**: Sum of squared errors over **known ratings only**. Unknown entries are ignored (not treated as zero).

**Intuition**: Each dimension of the embedding might capture a latent factor (how romantic, how action-packed, etc.). The dot product captures the match between user preferences and movie properties.

### Gradient update intuition
If we overestimate a rating (error is negative) for a "romantic" movie by a "romantic" user, we reduce the "romance" value for the user (since the movie's value is treated as constant) and vice versa. The model learns that this user/movie pair isn't as well-matched on the romance dimension as it thought.

### Extensions
- **Biases**: Add per-user bias, per-movie bias, and global bias to the dot product. Accounts for generally generous/harsh raters and universally liked/disliked movies.
- **Regularisation**: Add L2 penalty on embeddings to prevent overfitting.
- **Implicit feedback**: When users can only "like" (no dislikes), use **negative sampling** — random user/movie pairs are assumed negative.
- **Side information**: Add embedding vectors for user/movie features (genre, age, etc.), sum them into the user/movie representation.
- **Temporal dynamics**: Make biases and user embeddings time-dependent (e.g., separate embeddings per time chunk).
- **Cold start**: New users/movies have no ratings → rely on side information and implicit feedback.

### Binary and positive-only ratings
- **Binary** (like/dislike): Apply sigmoid to the dot product, use log loss.
- **Positive only** (only likes): Use negative sampling — sample random pairs as negatives.

### Matrix factorisation ≈ PCA
Applying matrix factorisation to the standard data matrix (instances × features) with constraints gives something equivalent to PCA. Both are linear dimensionality reduction. Matrix factorisation can handle missing values and add regularisation.

### Link prediction on graphs
Same principle: learn node embeddings, predict links via dot product. For **knowledge graphs** (labelled edges), also learn an embedding per relation type. Score: Σₖ uₖ · rₖ · mₖ (DistMult).

### Graph Convolutional Networks (GCNs)
Refine embeddings by **mixing with neighbours**: multiply by the (normalised) adjacency matrix, then a weight matrix, then apply an activation. Multiple GCN layers propagate information further through the graph.

H' = σ(Â · H · W) where Â = normalised adjacency with self-loops.

### Transductive learning
In embedding models, test nodes must be seen during training (to learn their embeddings). Only their **labels** are withheld. This contrasts with inductive learning where test instances are entirely unseen.

---

## 9. Reinforcement Learning (Lecture 13)

### The abstract task
An **agent** interacts with an **environment**: it observes a **state**, takes an **action**, receives a **reward**, and transitions to a new state. The goal: learn a **policy** (state → action mapping) that maximises expected cumulative reward.

**Markov property**: The optimal action depends only on the current state, not the history.

### Four key challenges
1. **Sparse rewards**: Most states give zero reward. Only terminal states (win/lose) provide signal.
2. **Delayed reward / credit assignment**: A mistake now may only cause failure 20 steps later. Which actions were responsible?
3. **Non-differentiable environment**: Can't backpropagate through the environment or through sampling actions.
4. **Exploration vs exploitation**: Exploiting known good strategies yields immediate reward; exploring unknown strategies might find much better long-term reward.

### Episodic learning
Train by running complete episodes (games, flights, etc.), update the policy after each. In production, the policy is typically frozen.

### Policy networks
A neural network mapping states to action probabilities (softmax output). For Atari: raw pixels → convolutions → fully connected → action probabilities.

### Random search
Perturb the policy weights randomly. If total episode reward improves, keep the perturbation. Extremely simple, no calculus needed. Surprisingly effective for some problems (Atari Frostbite). High variance; slow learning.

### Policy gradients (REINFORCE)
**Core insight**: The gradient of the expected reward can be estimated as:
∇E[r] ≈ r(a) · ∇ ln p(a)

For a sampled action a with total episode reward r(a):
- If reward is high → increase the log-probability of the chosen action → "do more of this"
- If reward is low → decrease it → "do less of this"

**Surrogate loss** (for implementation in PyTorch): −r · ln p(a). Backpropagating this gives the correct gradient estimate.

**Credit assignment**: Not solved — the total episode reward is applied blindly to all actions. Averaging over many episodes lets good actions be reinforced more than they're punished.

### Exploration strategies
- **Boltzmann exploration**: Softmax with temperature τ. High τ = more random (explore). Low τ = more greedy (exploit). Can anneal τ over time.
- **ε-greedy**: Usually pick the best action; with probability ε, pick a random action.

### Q-Learning
Instead of learning a policy directly, learn the **Q-function**: Q*(s, a) = expected discounted future reward from taking action a in state s, then following the optimal policy.

**Recursive definition**: Q*(s, a) = r(s, a) + γ · max_a' Q*(s', a')

where γ ∈ (0,1) is the **discount factor** (how much we value future rewards).

**Tabular Q-learning**: Iterate the recursive definition as an update rule. Eventually converges to Q*.

**Deep Q-learning**: Use a neural network to predict Q(s, a) for all actions. For a given transition (s, a, r, s'):
- Target = r + γ · max_a' Q_network(s')
- Loss = (Q_network(s, a) − target)²

The network generalises across similar states (unlike tabular Q-learning). The future reward estimate bootstraps from the network's own predictions — at first noisy, but improves as training progresses.

**Key difference from policy gradients**: Q-learning can update after every single action (no need to wait for the episode to end). It separates exploration (any strategy) from exploitation (follow the learned Q-function).

### Helpers for sparse rewards
- **Imitation learning**: Pre-train the policy by copying expert behaviour (supervised learning). Then refine with RL.
- **Reward shaping**: Hand-craft denser intermediate rewards (e.g., material advantage in chess). Risks: less general, may steer away from creative solutions.
- **Auxiliary goals**: Train on multiple simple tasks simultaneously (e.g., "stay alive" alongside "win").

---

## 10. Tree Search (Lecture 13)

When we have access to the state transition function (e.g., the rules of a game), we can explore the **game tree** to choose better actions.

### Random rollouts
For each candidate move, play many random games from the resulting position. Average the outcomes. The move leading to the highest average win rate is chosen. Improved by using a learned **policy** (instead of random moves) and a **value function** (to cut rollouts short).

### Minimax
Label leaf nodes with win/loss. Propagate values up the tree: at "our" turns, take the **max**; at the opponent's turns, take the **min**. With a value function, limit search depth and use the value function at the cutoff. This is how Deep Blue played chess.

### Monte Carlo Tree Search (MCTS)
Iteratively build a partial game tree:
1. **Select**: Walk from root to an unexpanded node
2. **Expand**: Add one child to the tree
3. **Simulate**: Do a rollout from the new node
4. **Backup**: Update win rates for all ancestors

Balances exploration (visit uncertain nodes) with exploitation (visit promising nodes). More elegant than pure rollouts; more focused than full minimax.

### Combining RL with tree search
- **During play**: Use learned policy/value networks inside tree search for stronger play (AlphaGo).
- **During training**: Use tree search as a **policy improvement operator** — trust that tree search + current policy produces better moves than current policy alone. Train the next policy to mimic the tree search output (AlphaZero).

### AlphaGo → AlphaZero
- **AlphaGo** (2016): Imitation learning from human games → RL self-play → MCTS during play. Beat world champion Lee Sedol.
- **AlphaZero** (2017): No imitation learning. Pure self-play. MCTS used during training as policy improvement. Shared network for policy and value. Residual connections + batch norm. Surpassed AlphaGo in 21 days.

---

## 11. Social Impact: Profiling and Intelligent Infrastructure

### Profiling
Targeting people for investigation based on group membership rather than individual actions. Even with perfect data and models, profiling raises fundamental issues:

1. **Sampling bias**: Arrest data ≠ crime data (more policing → more arrests → biased training data)
2. **Bias amplification**: Models may worsen biases beyond what's in the data
3. **Prosecutor's fallacy**: p(drugs|black) is slightly elevated, but p(NOT drugs|black) is still >90%. Most people profiled are innocent.
4. **Prediction ≠ action**: Accurate predictions don't justify any particular action. The cost of misclassification must be carefully considered.
5. **Causal reasoning**: Correlation between race and crime doesn't mean race *causes* crime. Confounders (poverty, systemic racism) are the likely causal mechanism. Profiling may worsen these through feedback loops.
6. **Deontological ethics**: Even if profiling "works" (consequentialist argument), it violates human dignity by holding individuals responsible for group statistics. A deontological objection cannot be countered by consequentialist arguments — they address different ethical frameworks.

### Feedback loops
When a model's predictions drive actions that change the data, dangerous cycles can emerge:
- Predictive policing: More police → more arrests → model predicts more crime → even more police
- Medical risk: Asthma patients get more care → fewer bad outcomes → model says asthma is protective → reduced care → worse outcomes

### Goodhart's Law
"When a measure becomes a target, it ceases to be a good measure." Arrest rate is a decent proxy for crime rate — until you optimise for it. Student evaluations measure teaching quality — until teachers are pressured to maximise them.

### McNamara Fallacy
Focusing only on easily quantifiable metrics while ignoring hard-to-measure factors. Vietnam War: measurable metrics looked great; the war was lost anyway.

### Intelligent infrastructure
ML systems increasingly embedded in society (tax services, hospitals, news feeds, banks). Risks compound when optimised in isolation, without human oversight, and deployed uniformly at global scale. The solution isn't to avoid ML, but to involve **domain experts** and **stakeholders**, make systems **interpretable**, monitor for **feedback loops**, and never confuse accurate predictions with sound actions.
`;
