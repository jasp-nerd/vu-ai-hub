/**
 * Comprehensive Machine Learning Summary — inline markdown content.
 * Compiled from MLVU lectures 1–13 covering: foundations, linear models,
 * probability, evaluation, data pre-processing, neural networks, deep learning,
 * sequences, trees & ensembles, transformers, deep generative modeling,
 * embedding models, and reinforcement learning.
 */
export const machineLearningSummary = `
# Machine Learning — Comprehensive Exam Study Summary

> VU Amsterdam BSc Machine Learning  
> Organized by lecture topic. Covers all material tested on the exam.  
> Use alongside your formula sheet for maximum effectiveness.

---

## 1. Introduction & Foundations (Lecture 1)

### What Is Machine Learning?

Machine learning is the practice of providing a computer with examples instead of explicit instructions. The computer identifies patterns (regularities) in the examples, effectively learning a program we could not have written ourselves. A system that improves its behaviour based on experience, where the resulting behaviour has not been explicitly programmed.

### When Is ML Suitable?

Three conditions should hold: approximate solutions are acceptable, limited interpretability is fine, and large amounts of example data are available. Good use cases include spam detection and movie recommendation. Bad use cases include computing taxes (exact solution exists) or parole decisions (approximate solutions are unacceptable).

### Learning Paradigms

**Reinforcement Learning** — the learner takes actions in an environment, receives rewards, and actions may change the environment. Very complex.

**Online Learning** — the learner only predicts (no environment-changing actions) but learns and predicts simultaneously.

**Offline Learning** — learning and deployment are completely separated. Gather data, train, test, deploy. The finished model never learns while running. This is the focus of the course.

### Abstract Tasks

**Supervised** — we have inputs AND corresponding outputs (labels). Classification predicts categories; regression predicts continuous numbers.

**Unsupervised** — no target labels. Clustering splits instances into groups. Density estimation models how likely new data points are. Generative modeling learns to produce new realistic samples.

**Other** — semi-supervised learning (small labeled + large unlabeled set), self-supervised learning (clever training on unlabeled data, e.g. masked word prediction).

### Key Vocabulary

- **Instance**: a single example in the dataset (one email, one image)
- **Feature**: a measurement about an instance (numeric or categoric)
- **Target/Class**: the value we want to predict
- **Feature space**: each axis is a feature, each point is an instance
- **Model space**: each point represents a possible model
- **Loss function**: maps a model to a score; lower = better fit
- **Hyperparameter**: a parameter set by the user before training (e.g. k in kNN)

### Three Simple Classifiers

**Linear classifier** — draws a hyperplane to separate classes. Defined by weight vector w and bias b. The decision function is w^T x + b; classification depends on its sign.

**Decision tree** — examines features at each node. Creates axis-aligned boxes in feature space.

**k-Nearest Neighbors** — lazy classifier with no training phase. Assigns the majority class of the k closest training points.

### The Most Important Rule

Never judge your model's performance on the training data. What matters is performance on new, unseen data (generalization). Breaking this rule leads to choosing a model that overfits.

### Overfitting and the Train/Test Split

Overfitting means the model fits the noise in the training data rather than the underlying pattern. Solution: withhold a test set that the model never sees during training. The data should be i.i.d. (independent, identically distributed) for this split to be valid.

### Simplicity

Simpler models tend to generalize better (less prone to overfitting), but too-simple models underfit. The art is finding the right balance.

---

## 2. Linear Models & Search (Lecture 2)

### Linear Regression

For a single feature: f(x) = wx + b. For multiple features: f(x) = w^T x + b (dot product of weight vector and feature vector, plus bias).

The **dot product** is fundamental — algebraically it is the sum of element-wise products; geometrically it equals ||w|| · ||x|| · cos(α). Each weight controls how much a feature contributes to the prediction.

### Mean Squared Error (MSE)

MSE = (1/n) Σ (f(x_i) − t_i)². The difference f(x_i) − t_i is the **residual**. We square residuals so that positive and negative errors don't cancel out, and so that large errors are penalized more heavily.

### Loss Surface

Computing the loss for every possible parameter combination yields the **loss surface**. For linear regression with MSE, this surface is **convex** (bowl-shaped), guaranteeing a single global minimum.

A loss function serves two roles: it expresses what we want to optimize, and it provides a smooth surface for search algorithms to navigate.

### Search Methods

**Random search** — try random nearby points, keep improvements. Black-box: only needs loss values, knows nothing about model internals.

**Simulated annealing** — like random search, but occasionally accepts worse solutions to escape local minima.

**Evolutionary algorithms** — maintain a population of candidates, remove worst, breed survivors.

All three are black-box methods. Gradient descent opens up the black box using calculus.

### Gradient Descent

The gradient ∇f(p) is a vector of partial derivatives pointing in the direction of steepest ascent. Moving in the opposite direction (negative gradient) moves toward lower loss.

**Update rule**: p ← p − η · ∇loss(p), where η (eta) is the **learning rate**.

Properties: deterministic (no rejected steps), self-regulating step size (gradient shrinks near minimum), does NOT escape local minima. Learning rate too high → overshooting/bouncing; too low → very slow convergence.

### Derivative Rules (on your cheat sheet)

- **Sum rule**: derivative of a sum = sum of derivatives
- **Chain rule**: for composed functions, multiply outer derivative by inner derivative
- **Constant factor rule**: constants can be pulled outside the derivative

### Gradient for Linear Regression

For MSE loss with model f(x) = wx + b:
- ∂loss/∂w = Σ (wx_i + b − t_i) · x_i
- ∂loss/∂b = Σ (wx_i + b − t_i)

### Linear Classification

A linear classifier assigns class based on the sign of w^T x + b. The **decision boundary** is where w^T x + b = 0. The weight vector w is perpendicular to this boundary, pointing toward the positive class.

Classification error is a poor loss function for gradient descent because the loss surface is flat almost everywhere (gradient is zero), with sudden jumps.

---

## 3. Evaluation (Lecture 3)

### Validation Split

Testing too many models on the test set increases chance of random effects. Solution: use a train/validation split on the remainder to evaluate model choices and hyperparameters. The test set is used only once for final reporting.

### Performance Metrics

**Confusion matrix** — a 2×2 table showing true positives (TP), false positives (FP), true negatives (TN), false negatives (FN).

**Accuracy** = (TP + TN) / total. Misleading when classes are imbalanced.

**Precision** = TP / (TP + FP). Of all predicted positives, how many are correct?

**Recall** = TP / (TP + FN). Of all actual positives, how many were found?

**False positive rate** = FP / (FP + TN).

**Cost imbalance** — when one type of error is much more costly than another (e.g., spam filter deleting legitimate emails vs. letting spam through).

### Ranking Classifiers and ROC

A **ranking classifier** sorts instances from most negative to most positive. For a linear classifier, the distance to the decision boundary provides the ranking.

A **ranking error** occurs when a positive instance is ranked below a negative instance. The **coverage matrix** shows all positive–negative pairs; red cells are ranking errors.

**ROC curve** — plots true positive rate vs. false positive rate at varying thresholds. The **AUC** (area under the curve) summarizes ranking quality. Computing AUC requires a ranking classifier.

---

## 4. Probabilistic Models (Lecture 4)

### Maximum Likelihood

Choose parameters θ to maximize p(Data | θ). This is the frequentist approach — returns a single point estimate. We work with **log-likelihood** because products become sums (easier algebra, avoids numerical underflow). Minimizing the negative log-likelihood (NLL) = minimizing a loss function.

The connection to least squares: assuming normally distributed errors and deriving the maximum likelihood solution for the mean yields the least squares loss. The solution is the arithmetic mean.

### Bayesian Learning

Bayesian approach assigns a probability distribution over models using Bayes' rule:

p(θ | D) = p(D | θ) · p(θ) / p(D)

- **Posterior** p(θ|D): belief about the model after seeing data
- **Likelihood** p(D|θ): probability of data given a model
- **Prior** p(θ): belief about the model before seeing data
- **Evidence** p(D): normalizing constant

The Bayesian approach returns a full distribution (telling us how certain we are), unlike frequentist which returns just a point estimate.

### Naive Bayes Classifier

A generative classifier that models p(X|Y) and uses Bayes' rule to get p(Y|X). The key assumption is **conditional independence of features given the class**:

p(X₁,...,Xₙ|Y) = ∏ p(Xᵢ|Y)

For categorical features, estimate p(feature|class) from relative frequencies. To classify: multiply individual feature probabilities for each class by the class prior, then compare.

### Smoothing

If a feature value never appears for a class, its probability is 0, which zeros out the entire product. Solution: add **pseudo-observations** (one for each possible value per class). The smoothed estimator is:

p̂(X=v | C) = (count(v, C) + λ) / (count(C) + λ · |values|)

Setting λ = 1 gives Laplace smoothing.

### Logistic Regression

A discriminative classifier learning p(Y|X) directly. Uses the **logistic sigmoid**: σ(t) = 1 / (1 + e^(−t)). Key properties: σ(−t) = 1 − σ(t), and σ'(t) = σ(t) · (1 − σ(t)).

The model: p(Positive | x) = σ(w^T x + b). The decision boundary is still linear (where w^T x + b = 0). The sigmoid only makes the probability surface non-linear.

### Log Loss (Cross-Entropy Loss)

Loss = − Σ [for positive x: log q(P)] − Σ [for negative x: log q(N)]

This is the negative log-likelihood. Points far on the correct side contribute almost zero loss (log of ≈1 ≈ 0), unlike least squares which penalizes them.

---

## 5. Information Theory (Lecture 4 continued)

### Codes and Probabilities

A prefix-free code assigns binary strings to outcomes. The relationship: L(x) = −log₂ p(x). High-probability outcomes get short codes; low-probability outcomes get long codes.

### Entropy

H(p) = − Σ p(x) log₂ p(x)

The expected codelength when using the optimal code. Measures uncertainty of a distribution. Uniform distributions have maximum entropy. Convention: 0 · log(0) = 0.

### Cross-Entropy

H(p, q) = − Σ p(x) log₂ q(x)

The expected codelength when data comes from p but we use the code for q. Minimized when p = q.

### KL Divergence

KL(p || q) = H(p, q) − H(p) = Σ p(x) log₂ [p(x)/q(x)]

Measures extra bits wasted by using q as a compressor for data from p. Zero if and only if p = q. **Not symmetric**: KL(p||q) ≠ KL(q||p).

### Minimum Description Length (MDL)

Frames learning as compression. Two-part coding: send the model, then send the data given the model. Best model minimizes total message length — naturally balances complexity against fit.

---

## 6. Data Pre-processing (Lecture 5)

### Survivorship Bias

The WWII bomber example: bullet holes on returning planes show where planes survived, not where they're vulnerable. Missing data shows the lethal spots.

### Always Visualize

Anscombe's quartet demonstrates that datasets with identical summary statistics can look completely different when plotted.

### Missing Values

Three strategies for missing features: remove the feature, remove instances, or impute (mode for categorical, mean/median for numeric, or train a predictive model).

**Production mindset**: if you expect missing values in production, your model must handle them, and keep them in the test set. If production data will be clean, freely experiment with imputation on training data.

### Outliers

**Natural outliers** (genuine extreme examples) should be kept — removing them distorts the model. **Unnatural outliers** (measurement errors) can be removed or treated as missing data.

The mean minimizes sum of squared errors (sensitive to outliers); the median minimizes sum of absolute errors (robust to outliers).

### Class Imbalance

Test/validation sets must reflect the natural distribution. Only manipulate the training set: oversample minority, undersample majority, or use SMOTE (synthetic minority oversampling). The resampling amount is a hyperparameter.

### Feature Design & Encoding

**One-hot encoding** — a single categorical feature with k values becomes k binary features. Avoids the false ordering imposed by integer coding.

**Feature expansion for linear models** — adding derived features (x₁·x₂, x², etc.) lets a linear classifier capture non-linear patterns. The XOR problem is solved by adding x₁·x₂. Circular boundaries need x₁² and x₂².

### Normalization, Standardization & Whitening

**Normalization**: z = (x − x_min) / (x_max − x_min) → values in [0, 1]

**Standardization**: z = (x − μ) / σ → mean 0, std dev 1

**Whitening**: transforms data so all features are uncorrelated with unit variance. Uses the covariance matrix.

### Principal Component Analysis (PCA)

Finds directions (principal components) in which data varies most. Projects data onto these directions, reducing dimensionality while retaining information.

Minimizing reconstruction error = maximizing variance of projected data (linked by Pythagorean theorem). PCA reduction: z = c^T x. Reconstruction: x' = zc.

PCA with the same number of output as input dimensions produces a whitened representation. Applications: visualization, eigenfaces, denoising, bias/variance trade-off control.

---

## 7. Neural Networks & SVMs (Lecture 6)

### The Perceptron Problem

Chaining perceptrons does NOT increase expressive power. The composition of linear functions is still linear. This is why we need non-linear activation functions.

### Activation Functions

**Sigmoid**: σ(x) = 1/(1+e^(−x)). Output in [0,1]. Problem: vanishing gradients (max derivative = 0.25).

**ReLU**: max(0, x). Derivative is 1 for positive inputs, 0 for negative. Reduces vanishing gradient problems. Risk: "dead neurons" that permanently output zero.

### Feedforward Network Architecture

Layers of neurons with no cycles. A two-layer network = a learned feature expansion (hidden layer) followed by a linear model (output layer). The number of hidden nodes is a hyperparameter.

**Output configurations**: regression → 1 output, no activation, least-squares loss. Binary classification → 1 output with sigmoid, log loss. Multiclass → K outputs with softmax, log loss.

**Softmax**: converts K raw outputs into probabilities summing to 1 via exp() and normalization.

### Stochastic Gradient Descent (SGD)

Compute loss/gradient for a single instance (or small batch) and update immediately. Noise helps escape local minima. Many small steps outperform one big step. Minibatch SGD is the common compromise.

### Backpropagation

Combines symbolic and numeric computation for efficient gradient computation.

**Step 1**: Break the function into simple modules (computation graph).  
**Step 2**: Work out local derivatives symbolically for each module.  
**Step 3**: Forward pass (compute all values), then backward pass (multiply upstream derivative by local derivative, working backward).

**Multivariate chain rule**: when variable x affects the output along multiple paths, sum the derivatives along each path.

Cost of backpropagation ≈ 2× the cost of the forward pass.

### Support Vector Machines

**Support vectors** — data points closest to the decision boundary. They determine the margin.

**Margin** — distance from decision boundary to nearest support vectors. Width = 2/||w||. To maximize margin, minimize ||w||.

**Hard margin SVM** — minimize w^T w subject to y_i(w^T x_i + b) ≥ 1. No points allowed inside the margin.

**Soft margin SVM** — adds slack variables π_i ≥ 0. Minimize w^T w + C Σ π_i. C controls the trade-off between wide margin and few violations. As C → ∞, recovers hard margin.

**Hinge loss** (unconstrained form): Loss = w^T w + C Σ max(0, 1 − y_i(w^T x_i + b)). Points far from boundary incur zero loss.

### Classification Loss Functions Compared

- **0/1 Loss**: number of misclassified points. What we care about, but not differentiable.
- **Least-Squares**: penalizes confident correct predictions too. Rarely used for classification.
- **Log Loss**: derived from maximum likelihood. Smooth, works well. Near-zero loss for confident correct predictions.
- **Hinge Loss**: only penalizes points near/inside margin. Flat for confident points.

---

## 8. Deep Learning (Lecture 7)

### Tensors

A tensor is a multi-dimensional array. Rank 0 = scalar, rank 1 = vector, rank 2 = matrix, rank 3+ = higher-order tensor. Shape describes size along each dimension.

Tabular data → rank-2 tensor (N × F). Single RGB image → rank-3 (height × width × 3). Batch of images → rank-4.

### Computation Graphs & Automatic Differentiation

A computation graph consists of value nodes (tensors) and computation nodes (functions). Each function defines a forward pass and a backward pass.

**Lazy execution**: graph defined first, compiled, then data fed through. Hard to debug.  
**Eager execution**: compute immediately, graph recorded behind the scenes. Example: PyTorch.

Each tensor stores data, gradient (filled in during backprop), and references to parent tensors/functions.

### Tensor Backpropagation

Three assumptions: computation graph is a DAG, every node contains a tensor, the loss is always a scalar. Because the loss is scalar, the gradient of the loss w.r.t. any tensor T always has the same shape as T.

Instead of computing local derivatives as explicit high-rank tensors, frameworks compute the product of upstream gradient with local derivative directly.

### Convolutions

Each output node connects only to a small neighborhood in the input. Same weights (kernel/filter) applied at every position — drastically reduces parameters.

**Padding**: extra zeros around edges. Same padding → output has same spatial dimensions.  
**Stride**: how many pixels the kernel moves each step.  
**Output size formula**: (W + 2P − K) / S + 1  
**Number of weights**: output_channels × input_channels × kernel_height × kernel_width

**Max pooling**: divides feature map into non-overlapping squares, returns maximum from each. No learnable weights. Gradients flow only through the max element.

### Training Deep Networks

**Vanishing gradients**: sigmoid max derivative = 0.25, shrinking gradients per layer. ReLU solves this (derivative = 1 for positive inputs).

**Initialization**: Glorot/Xavier or He initialization maintains mean 0, variance 1 across layers.

**Adam optimizer**: combines momentum (running mean of gradients) with per-parameter scaling (running variance). Update = m/√v.

**L2 regularization**: adds λ · ||θ||² to loss. Penalizes large weights. Norm ball is a circle.  
**L1 regularization**: adds λ · ||θ||₁ to loss. Diamond-shaped norm ball promotes sparsity (many parameters exactly zero).  
**Dropout**: randomly set hidden nodes to zero during training (probability p). At inference, turn off dropout and scale activations by p.

### End-to-End Learning

Traditional pipelines chain separately-trained modules — errors accumulate even if each is individually accurate. Deep learning makes each module differentiable and trains the pipeline jointly via backpropagation.

---

## 9. Sequences (Lecture 8)

### Sequential Data Types

Numeric sequences (stock prices), multidimensional numeric (joint indices), discrete/symbolic (language), multi-feature symbolic (tagged text, music).

### Prediction Tasks

**Sequence-per-instance**: each instance is a separate sequence with a single target (e.g., email classification). **Single-sequence**: one long sequence, predict future values from past.

For single-sequence prediction, translate to regression using a fixed window of preceding values as features.

### Time Series Validation

Never train on data temporally after your test data. Walk-forward validation simulates periodic retraining.

### Markov Models

The **chain rule of probability** decomposes a joint distribution into conditional distributions:

p(x₁,...,xₙ) = p(x₁) × p(x₂|x₁) × p(x₃|x₁,x₂) × ...

The **Markov assumption** limits conditioning to the k most recent tokens. Estimate conditional probabilities from n-gram frequencies.

**Autoregressive sampling**: generate tokens one at a time, each conditioned on the k most recent. This process is called a Markov chain.

**Smoothing** prevents zero probabilities from unseen n-grams (same principle as Naive Bayes smoothing).

### Spam Classification with Markov Models

Use Bayes' rule: p(spam|message) ∝ p(message|spam) · p(spam). Model p(message|spam) using chain rule + Markov assumption, estimating n-gram frequencies from spam-only data.

### Deep Learning on Sequences

Input representation: one-hot encoding (small vocabularies) or learned embedding vectors (large vocabularies). Embeddings are dense vectors (64–1024 dims) updated by gradient descent.

**Word2Vec**: pre-train embeddings by predicting context words. Captures semantic relationships.

**Sequence-to-sequence layers**: same weights for any input length. Options include per-step MLP (no temporal info flow), 1D convolutions (limited range), and causal convolutions (no future access).

**Output configurations**: sequence-to-sequence (e.g., POS tagging), autoregressive (predict next token), sequence-to-label (e.g., classification via global pooling), label-to-sequence (generation).

### Recurrent Neural Networks (RNNs)

A network with cycles. Hidden layer from previous step is concatenated with current input. Unrolled across time = large feedforward network with shared weights (backpropagation through time).

**Vanishing gradient problem**: gradients shrink exponentially through many time steps. Basic RNNs struggle with long-range dependencies.

### LSTM (Long Short-Term Memory)

Solves vanishing gradients with a **cell state** (conveyor belt) that passes linearly between time steps — no activations on this path, so gradients are preserved.

Three gates, each using sigmoid activation (values 0–1):
- **Forget gate**: decides how much of the cell state to keep
- **Input gate**: decides what new information to add (sigmoid × tanh)
- **Output gate**: decides what to output from the cell state (tanh then sigmoid mask)

Two gradient paths: through activations (short-term, prone to decay) and along the conveyor belt (long-term, preserved).

---

## 10. Deep Generative Models (Lecture 9)

### Generator Networks

A neural network that takes a random latent vector z (sampled from a standard normal) as input and produces a generated sample x. The latent space can represent extremely complex distributions.

### Mode Collapse

Naive generator training (compare random output to random data point) leads to mode collapse: the generator converges to producing only the data mean. Two solutions: GANs and VAEs.

### Generative Adversarial Networks (GANs)

Two networks trained in opposition:
- **Generator** (G): takes random z and produces a fake sample
- **Discriminator** (D): classifies samples as real or fake

Training alternates: train D on real + frozen-G fake data, then train G to fool D.

**Conditional GAN**: generator receives an input and produces probabilistic output (e.g., colorizing photos). **CycleGAN**: unpaired domain translation using cycle consistency loss. **StyleGAN**: latent vector fed at every layer, controlling coarse-to-fine features.

### Autoencoders

Hourglass-shaped network: encoder maps input to low-dimensional latent representation, decoder reconstructs. The bottleneck forces compression.

Uses: generation (sample latent space, decode), interpolation (smooth transitions in latent space), dimensionality reduction, attribute manipulation.

### Variational Autoencoders (VAEs)

Principled maximum-likelihood framework. The encoder outputs parameters of a distribution (mean μ and variance σ²) rather than a single point. A sampling step draws z from this distribution.

**Evidence Lower Bound (ELBO)**:

ln p(x|θ) = L(q, θ) + KL(q(z|x) || p(z|x, θ))

Since KL ≥ 0, L ≤ ln p(x|θ). The VAE loss:

−L = −E_q[ln p(x|z)] + KL(q(z|x) || N(0, I))

This gives reconstruction loss + KL loss.

**Reparameterization trick**: instead of sampling z ~ N(μ, σ), sample ε ~ N(0, I) and compute z = μ + σ ⊙ ε. This makes the sampling step differentiable.

**Three forces**: reconstruction loss (encode accurately), KL loss (regularize toward N(0,I)), sampling step (spread information across latent space).

### ELBO Derivation (Exam Application Type)

The derivation shows L + KL = ln p(x|θ) by expanding definitions, applying log rules, canceling q terms, and using the product rule of probability. Key steps to know:

1. Write out definitions of L and KL
2. Expand logarithms of fractions
3. The q(z|x) terms cancel
4. Recombine logarithm
5. Apply product rule: p(x,z|θ) = p(z|x,θ) · p(x|θ)
6. Cancel p(z|x,θ) and remove expectation (p(x|θ) doesn't depend on z)

**EM algorithm** uses this by iterating: choose q to minimize KL (E-step), then choose θ to maximize L (M-step). **VAE** optimizes both simultaneously via backpropagation.

---

## 11. Transformers (Lecture 10)

### Self-Attention

A sequence-to-sequence layer where each output is a weighted sum over all inputs. Weights come from softmax of dot products between input vectors (not learned parameters in the simple version).

**Scaled self-attention**: divide dot products by √k to prevent extreme softmax outputs.

**Queries, Keys, Values**: three learned projection matrices (K, Q, V) give each input vector a different role. Queries match against keys to determine weights; values are summed. This adds learnable parameters and breaks self-similarity dominance.

**Multi-head attention**: h parallel attention operations on k/h-dimensional projections, concatenated and projected through W₀.

### Key Properties

- **Permutation equivariant**: self-attention is fundamentally a set operation, cannot see token order
- **Position embeddings**: learnable vectors added to word embeddings to encode position
- **Causal masking**: for autoregressive models, mask future positions to −∞ before softmax

### Transformer Block

Four ingredients: self-attention, feed-forward layer (per token), layer normalization (within each vector), residual connections (skip connections for clean gradient paths).

Only self-attention propagates information across the time dimension.

### Tokenization

Sub-word tokenization (BPE/WordPiece): vocabulary of 50K–100K common character chunks. Common words get single tokens; rare words decompose. Balances sequence length with coverage.

### Landmark Models

**BERT** (2018): bidirectional, pretrained with masked language modeling (predict corrupted tokens) + next sentence prediction. Finetuned for downstream tasks.

**GPT-2** (2019): causal/autoregressive next-token prediction. Generated coherent long text.

**GPT-3** (2020): 175B parameters. Demonstrated in-context learning — recognizing and continuing patterns in the prompt without weight updates.

### From GPT to ChatGPT

Three additional ingredients: prompt engineering (structure as dialogue), instruction tuning (finetune on instruction-following tasks — generalizes to unseen tasks), and RLHF (reinforcement learning from human feedback: demonstration data → reward model → RL training).

---

## 12. Trees & Ensembles (Lecture 10b)

### Decision Trees

Classify by asking sequential questions about features. Each internal node tests a feature; leaves assign a class.

**Training algorithm**: greedy, top-down. Select the feature producing the most informative split. Stops when all instances have the same class, no instances remain, or all features are used.

### Entropy and Information Gain

**Entropy**: H(p) = − Σ p(c) · log₂ p(c). Uniform → maximum entropy. Single class → entropy 0.

**Information gain**: IG(S, feature) = H(S) − Σ (|S_i| / |S|) · H(S_i). Choose the feature with highest information gain.

For categorical features, splitting on the same feature twice is pointless. For numeric features, splitting on the same feature (different threshold) is useful.

### Regression Trees

Leaf nodes labeled with mean (or median) of target values. Use **variance reduction** instead of entropy.

### Overfitting and Pruning

Trees are prone to overfitting. **Pruning**: after training the full tree, work backwards from leaves — check on withheld data whether removing a node improves performance. Pruning uses a separate withheld set (not the test set).

### Ensembling

Combining multiple models into one. Strategies: majority vote/averaging, weighted vote, stacking (train a combiner model on base model predictions).

### Bagging (Bootstrap Aggregating)

Targets high-variance learners. Create bootstrap samples, train one model per sample (in parallel), combine by majority vote. Reduces variance.

**Random Forest**: bagging + feature subsampling for each tree. Further decorrelates trees.

### Boosting

Targets high-bias learners. Train models sequentially; each focuses on instances the previous models got wrong.

**AdaBoost**: increase weights of misclassified instances, decrease for correctly classified. Model weight a_t = ½ ln(W_correct / W_incorrect).

**Gradient Boosting**: fit each new model to the residuals of the current ensemble. The residuals are the negative gradient of the squared error loss w.r.t. model output. This generalizes to any differentiable loss (use pseudo-residuals).

**Key distinction**: bagging = parallel, reduces variance. Boosting = sequential, reduces bias.

---

## 13. Embedding Models (Lecture 12)

### Recommender Systems

Two large sets of objects (users, items) with a relation between them. Goal: predict unknown relations from known ones. Primary data is links between objects, not features of objects themselves.

### Matrix Factorization

Assign each user and item an embedding vector of dimension k. Predict rating by dot product: score(i,j) = u_i · m_j. All predictions: R̂ = U^T × M. Train by minimizing squared error over known ratings only.

**Bias terms**: score(i,j) = μ + b_i + b_j + u_i · m_j. Account for intrinsic user and item biases.

### Improvements

**Cold start problem**: no ratings for new users/items → can't learn embeddings.  
**Implicit feedback**: indirect signals (browsing, watch time, purchases). Learn a second set of item embeddings summed for each user.  
**Side information**: learn embeddings per feature value, sum applicable ones.

### Binary and Positive-Only Ratings

Binary: apply sigmoid to dot product score, use log loss. Positive-only: use **negative sampling** — sample random pairs as negatives.

### PCA as Matrix Factorization

Decomposing the data matrix via matrix factorization yields "embeddings" for instances and features. With orthonormal constraints on feature embeddings, closely related to PCA. Enables extensions: missing data handling, regularization, sparse PCA, logistic PCA.

### Graph Models

**Link prediction**: learn embeddings for all nodes, predict links via dot products.  
**Knowledge graphs (DistMult)**: score(s,r,o) = Σ_k e_sk · r_k · e_ok.  
**Graph Convolutional Networks**: repeatedly mix each node's embedding with neighbors' via adjacency matrix multiplication, plus weight matrix and nonlinear activation.

### Transductive Validation

You cannot withhold entire users/items/nodes for testing (model has no embeddings for them). Instead, provide all objects but withhold some ratings/links/labels.

---

## 14. Reinforcement Learning (Lecture 13)

### Core Components

Agent takes actions in an environment, receives rewards. The policy π maps states to actions. Goal: maximize cumulative reward.

**Markov Decision Process**: optimal action depends only on current state, not history.

### Four Challenges

1. **Sparse rewards**: most states have zero reward. Mitigations: imitation learning, reward shaping, auxiliary goals.
2. **Delayed reward (credit assignment)**: feedback comes much later than the causal action.
3. **Non-differentiable loss**: environment is not differentiable, sampling is not differentiable.
4. **Exploration vs. exploitation**: exploit known rewards or explore for potentially larger ones.

### Policy Gradients (REINFORCE)

Run an episode, apply total reward as feedback to all steps. Over many episodes, good actions get reinforced on average. Uses the log-derivative trick:

∂E[R]/∂w ≈ (1/k) Σ r(a_i) · ∂ ln p(a_i) / ∂w

Surrogate loss: L = −r(action) · ln p(action).

### Q-Learning

Q*(s, a) = r(s, a) + γ · max_{a'} Q*(d(s, a), a')

Q*(s,a) tells how good it is to take action a in state s and then follow the optimal policy. Solved by iterative updates. Completely separates exploration from exploitation.

**Deep Q-Learning**: replace Q-table with a neural network. Network generalizes across similar states. Can update after each step (no need to wait for episode end).

### Exploration Strategies

**Boltzmann**: temperature parameter T in softmax. Higher T → more uniform → more exploration.  
**Epsilon-greedy**: pick highest-probability action except with probability ε, pick random.

### Tree Search

**Minimax**: maximizing player picks highest child, minimizing player picks lowest. Use value function at limited depth.

**Monte Carlo Tree Search (MCTS)**: Selection → Expansion → Simulation (rollout) → Backup. Incrementally builds search tree, balancing exploration and exploitation.

**AlphaGo**: policy + value networks trained by imitation then self-play, with MCTS. **AlphaZero**: no imitation learning, learned entirely from self-play, used MCTS as policy improvement during training.

---

## 15. Social Impact Topics

### Sensitive Attributes & Bias

Features or targets requiring careful consideration: gender, race, ethnicity, sexuality, age, disability, religion. Sources of bias: data bias (overrepresentation), historical bias, amplification bias (always picking most likely → amplifies imbalances), proxy features (correlated features allow indirect discrimination).

### Correlation vs. Causation

ML finds correlations, not causal relationships. Publishing correlations can imply causation even when none exists.

### Profiling

Sampling bias in historical data reproduces bias. Prosecutor's fallacy: confusing p(drugs|group) with p(not drugs|group). Prediction ≠ justified action.

A deontological objection (violation of human dignity) cannot be answered by a consequentialist argument (effectiveness).

### Feedback Loops

Predictive policing: more police → more arrests → model predicts more crime → more police. Positive feedback loop amplifies initial bias.

### Goodhart's Law

"When a measure becomes a target, it ceases to be a good measure." YouTube optimized total watch-time → promoted extreme/addictive content. Netflix counter-example: optimized median (not total) viewing hours.

---

## 16. Exam Application Question Types — Quick Reference

1. **Find the gradient**: derive ∂loss/∂parameter for a polynomial model
2. **Find a ranking**: sort instances by distance to decision boundary, count ranking errors, compute coverage
3. **Entropy**: compute H(p), H(p,q), KL(p||q) with base-2 logs
4. **Scalar backpropagation**: break function into modules, compute local derivatives, apply chain rule
5. **Decision trees**: compute information gain, determine best split
6. **Evidence lower bound**: fill in blanks in ELBO derivation, explain EM vs VAE usage
7. **Naive Bayes**: compute class probabilities with and without smoothing
8. **Support vector machines**: find support vectors (y_i(w^T x_i + b) = 1), classify points (sign of w^T x + b)
9. **Markov models**: decompose email probability into bigram probabilities, apply Bayes' rule with priors
10. **Matrix backpropagation**: compute local scalar derivatives, derive vectorized gradient expressions

---

## 17. Key Formulas Cheat Sheet

| Concept | Formula |
|---|---|
| Linear model | f(x) = w^T x + b |
| MSE Loss | (1/n) Σ (f(x_i) − t_i)² |
| Gradient descent update | p ← p − η · ∇loss(p) |
| Logistic sigmoid | σ(t) = 1/(1+e^(−t)) |
| Sigmoid derivative | σ'(t) = σ(t)(1−σ(t)) |
| Log loss (binary) | −Σ [y_i log q(P) + (1−y_i) log q(N)] |
| Entropy | H(p) = −Σ p(x) log₂ p(x) |
| Cross-entropy | H(p,q) = −Σ p(x) log₂ q(x) |
| KL divergence | KL(p‖q) = H(p,q) − H(p) |
| Naive Bayes | p(X₁,...,Xₙ\|Y) = ∏ p(Xᵢ\|Y) |
| Smoothing | p̂(v\|C) = (count+λ)/(total+λ·\|V\|) |
| Bayes' rule | p(θ\|D) = p(D\|θ)·p(θ)/p(D) |
| SVM support vector condition | y_i(w^T x_i + b) = 1 |
| Hinge loss | max(0, 1 − y_i(w^T x_i + b)) |
| Information gain | H(S) − Σ (\|S_i\|/\|S\|) · H(S_i) |
| PCA reduction | z = c^T x |
| PCA reconstruction | x' = zc |
| Normalization | z = (x−x_min)/(x_max−x_min) |
| Standardization | z = (x−μ)/σ |
| Conv output size | (W + 2P − K)/S + 1 |
| ELBO decomposition | ln p(x\|θ) = L(q,θ) + KL(q\|\|p) |
| VAE loss | −E_q[ln p(x\|z)] + KL(q(z\|x) \|\| N(0,I)) |
| Q-learning | Q*(s,a) = r(s,a) + γ · max_{a'} Q*(s',a') |
| Dot product score | score(i,j) = u_i · m_j |
| Matrix factorization | R̂ = U^T × M |

---

*Good luck on the exam. Focus on understanding concepts, practice application questions by hand, and double-check your arithmetic — especially signs in entropy calculations and label conventions in SVMs.*
`;
