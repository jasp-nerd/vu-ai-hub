/**
 * Comprehensive Linear Algebra and Calculus Summary -- inline markdown content.
 * Compiled from the VU Linear Algebra and Calculus course (Fall 2025, Eric Sandin Vidal).
 * Covers Lectures 1--14: Calculus (Functions, Limits, Continuity, Derivatives,
 * Multivariable Calculus, Partial Derivatives, Gradients) and Linear Algebra
 * (Linear Systems, Row Reduction, Vectors, Matrices, Linear Independence,
 * Matrix Operations, Inverses, Determinants, Vector Spaces, Subspaces, Bases,
 * Dimension, Coordinates, Eigenvalues, Eigenvectors, Diagonalization,
 * Inner Products, Orthogonal Sets, Projections, Gram-Schmidt).
 */
export const linearAlgebraCalculusSummary = `
## Part I -- Calculus (Weeks 1--2)

---

### 1. Functions

#### Definition
A **function** $f : D \\to S$ is a rule that assigns a **unique** element $f(x)$ in $S$ to each element $x$ in $D$.

| Term | Meaning |
|------|---------|
| **Domain** $D(f)$ | The set of all valid inputs |
| **Image** $f(x)$ | The output for a particular input $x$ |
| **Range** $R(f)$ | The set of all outputs (images) |
| **Graph** $G(f)$ | $\\{(x, f(x)) \\in \\mathbb{R}^2 \\mid x \\in D\\}$ |

> Unless otherwise specified, functions in this course are real-valued: $f : \\mathbb{R} \\to \\mathbb{R}$.

#### Operations on Functions
If $f, g$ are functions and $x$ is in both their domains:

| Operation | Definition |
|-----------|-----------|
| $(f + g)(x)$ | $f(x) + g(x)$ |
| $(f - g)(x)$ | $f(x) - g(x)$ |
| $(fg)(x)$ | $f(x)g(x)$ |
| $(f/g)(x)$ | $f(x)/g(x)$, when $g(x) \\neq 0$ |

#### Composition
If $f : D \\to S$ and $g : R \\to D$, the **composition** is:

$$(f \\circ g)(x) = f(g(x))$$

**Example.** Let $f(x) = \\cos x$ and $g(x) = x^3$. Then $(f \\circ g)(x) = \\cos(x^3)$.

#### Piecewise Functions
Functions that use different formulas on different parts of the domain:

$$f(x) = \\begin{cases} x^2, & \\text{if } x \\geq 0 \\\\ -x, & \\text{if } x < 0 \\end{cases}$$

---

### 2. Polynomials and Rational Functions

#### Polynomials
A **polynomial** is $P(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n$ where $a_n \\neq 0$ and $n$ is the **degree**.

**Key properties for two polynomials $P$ (degree $n$) and $Q$ (degree $m$), $n \\neq m$:**
- $P + Q$ has degree $\\max\\{n, m\\}$
- $PQ$ has degree $n + m$

#### Useful Factoring Identities

| Identity | Formula |
|----------|---------|
| Common factor | $ax^2 + bx = x(ax + b)$ |
| Difference of squares | $x^2 - a^2 = (x - a)(x + a)$ |
| Perfect square | $x^2 + 2ax + a^2 = (x + a)^2$ |
| Difference of cubes | $x^3 - a^3 = (x - a)(x^2 + ax + a^2)$ |

**The Factor Theorem.** The number $r$ is a root of polynomial $P$ (degree $\\geq 1$) if and only if $(x - r)$ is a factor of $P(x)$.

#### Rational Functions
A **rational function** is $R(x) = P(x)/Q(x)$ where $P$ and $Q$ are polynomials. Its domain is $\\mathbb{R}$ except where $Q(x) = 0$.

---

### 3. Trigonometric Functions

Angles are measured in **radians** ($\\pi$ radians $= 180^\\circ$). For a point $P_t$ on the unit circle at angle $t$:

$$\\cos t = x\\text{-coordinate of } P_t, \\qquad \\sin t = y\\text{-coordinate of } P_t$$

#### Key Values

| $t$ | $0$ | $\\pi/6$ | $\\pi/4$ | $\\pi/3$ | $\\pi/2$ | $\\pi$ |
|-----|-----|---------|---------|---------|---------|--------|
| $\\cos t$ | $1$ | $\\sqrt{3}/2$ | $\\sqrt{2}/2$ | $1/2$ | $0$ | $-1$ |
| $\\sin t$ | $0$ | $1/2$ | $\\sqrt{2}/2$ | $\\sqrt{3}/2$ | $1$ | $0$ |

#### Important Identities
- $\\cos^2 t + \\sin^2 t = 1$
- $\\tan t = \\sin t / \\cos t$
- $\\cos(-t) = \\cos t$ (even function)
- $\\sin(-t) = -\\sin t$ (odd function)
- Periodicity: $\\cos(t + 2\\pi) = \\cos t$, $\\sin(t + 2\\pi) = \\sin t$

---

### 4. Limits to a Point

#### Definition
We say $\\displaystyle\\lim_{x \\to a} f(x) = L$ if $f(x)$ gets as close to $L$ as we want when $x$ gets close enough to $a$.

#### Basic Examples
- $\\displaystyle\\lim_{x \\to a} x^2 = a^2$
- $\\displaystyle\\lim_{x \\to a} c = c$ (constant)

#### One-Sided Limits
- **Left limit:** $\\displaystyle\\lim_{x \\to a^-} f(x)$ -- approach from values less than $a$
- **Right limit:** $\\displaystyle\\lim_{x \\to a^+} f(x)$ -- approach from values greater than $a$

**Key theorem:**
$$\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$$

> If the left and right limits disagree, the limit **does not exist**.

#### Limit Laws
If $\\displaystyle\\lim_{x \\to a} f(x) = L$ and $\\displaystyle\\lim_{x \\to a} g(x) = M$, then:
- $\\lim_{x \\to a}(f(x) + g(x)) = L + M$
- $\\lim_{x \\to a}(f(x) \\cdot g(x)) = L \\cdot M$
- $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{L}{M}$, if $M \\neq 0$
- $\\lim_{x \\to a} k f(x) = kL$

#### The Squeeze Theorem
If $f(x) \\leq g(x) \\leq h(x)$ for all $x$ near $a$, and $\\displaystyle\\lim_{x \\to a} f(x) = \\lim_{x \\to a} h(x) = L$, then $\\displaystyle\\lim_{x \\to a} g(x) = L$.

---

### 5. Techniques for Computing Limits

#### Step-by-Step Strategy

1. **Try direct substitution.** If you get a number, that is the answer.
2. If you get $0/0$ (indeterminate form), use algebraic manipulation:
   - **Factoring** -- for polynomial expressions
   - **Rationalization** -- multiply by the conjugate when square roots appear
   - **Simplification** -- for complex fractions
3. If you get $k/0$ with $k \\neq 0$, check one-sided limits ($\\pm\\infty$ or DNE).

#### Worked Example -- Factoring
$$\\lim_{x \\to -1} \\frac{x^2 - 1}{x + 1}$$

Direct substitution gives $0/0$. Factor: $x^2 - 1 = (x-1)(x+1)$.

$$= \\lim_{x \\to -1} \\frac{(x-1)(x+1)}{x+1} = \\lim_{x \\to -1} (x - 1) = -2$$

#### Worked Example -- Rationalization
$$\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9}$$

Multiply by conjugate $\\frac{\\sqrt{x} + 3}{\\sqrt{x} + 3}$:

$$= \\lim_{x \\to 9} \\frac{x - 9}{(x - 9)(\\sqrt{x} + 3)} = \\lim_{x \\to 9} \\frac{1}{\\sqrt{x} + 3} = \\frac{1}{6}$$

#### Worked Example -- Absolute Value / One-Sided
$$\\lim_{x \\to 2} \\frac{|x - 2|}{x - 2}$$

- From the right ($x > 2$): $|x-2| = x - 2$, so limit $= 1$
- From the left ($x < 2$): $|x-2| = -(x-2)$, so limit $= -1$

Since $1 \\neq -1$, the limit **does not exist**.

---

### 6. Limits at Infinity

#### Definition
$\\displaystyle\\lim_{x \\to \\infty} f(x) = L$ means $f(x)$ approaches $L$ as $x$ grows without bound.

#### Strategy for Rational Functions
Divide every term by the **highest power of $x$** in the expression.

**Quick rules** for $\\displaystyle\\lim_{x \\to \\pm\\infty} \\frac{a_n x^n + \\cdots}{b_m x^m + \\cdots}$:

| Condition | Limit |
|-----------|-------|
| $n < m$ (bottom wins) | $0$ |
| $n = m$ (tie) | $a_n / b_m$ |
| $n > m$ (top wins) | $\\pm\\infty$ |

#### Worked Example
$$\\lim_{x \\to \\infty} \\frac{3x^3 - 5x^2 + 7}{8 + 2x - 5x^3}$$

Divide by $x^3$:

$$= \\lim_{x \\to \\infty} \\frac{3 - 5/x + 7/x^3}{8/x^3 + 2/x^2 - 5} = \\frac{3}{-5} = -\\frac{3}{5}$$

#### Worked Example -- Rationalization at Infinity
$$\\lim_{x \\to \\infty} \\left[\\sqrt{x^2 + 2x} - \\sqrt{x^2 - 2x}\\right]$$

Multiply by conjugate:

$$= \\lim_{x \\to \\infty} \\frac{4x}{\\sqrt{x^2+2x} + \\sqrt{x^2-2x}}$$

Divide by $x$:

$$= \\frac{4}{\\sqrt{1+0} + \\sqrt{1-0}} = \\frac{4}{2} = 2$$

---

### 7. Continuity

#### Definition
A function $f : D \\to \\mathbb{R}$ is **continuous** at $c \\in D$ if:

$$\\lim_{x \\to c} f(x) = f(c)$$

This requires three things:
1. $f(c)$ is defined
2. $\\displaystyle\\lim_{x \\to c} f(x)$ exists
3. The limit equals $f(c)$

If any condition fails, $f$ is **discontinuous** at $c$.

#### Continuous Function Families
- Polynomials -- continuous everywhere
- Rational functions -- continuous on their domain
- Trigonometric functions ($\\sin$, $\\cos$) -- continuous everywhere
- $|x|$ -- continuous everywhere

#### Continuity Preserved Under Operations
If $f$ and $g$ are continuous at $c$, so are $f + g$, $f - g$, $f \\cdot g$, $kf$, $f/g$ (if $g(c) \\neq 0$), and $f \\circ g$.

#### Worked Example -- Piecewise Continuity
Find $m$ so that $g(x) = \\begin{cases} x - m, & x < 3 \\\\ 1 - mx, & x \\geq 3 \\end{cases}$ is continuous.

At $x = 3$: set left limit $=$ right value:

$$3 - m = 1 - 3m \\implies 2 = -2m \\implies m = -1$$

---

### 8. Intermediate Value Theorem (IVT)

**Theorem.** If $f$ is continuous on $[a, b]$ and $s$ is between $f(a)$ and $f(b)$, then there exists $c \\in [a, b]$ such that $f(c) = s$.

**Bolzano's Theorem** (special case): If $f$ is continuous on $[a,b]$ and $f(a) \\cdot f(b) < 0$ (opposite signs), then there exists $c \\in (a,b)$ with $f(c) = 0$.

#### Worked Example
Show $f(x) = x^3 + x - 1$ has a zero in $[0, 1]$.

- $f$ is a polynomial, so continuous everywhere
- $f(0) = -1 < 0$ and $f(1) = 1 > 0$
- By IVT, there exists $c \\in (0, 1)$ with $f(c) = 0$

---

### 9. Derivatives

#### Definition
A function $f$ is **differentiable** at $a$ if the following limit exists:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

Equivalently: $\\displaystyle f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$

This gives the **slope of the tangent line** to $f$ at $x_0$.

#### Leibniz Notation

$$f'(x) = D_x f(x) = \\frac{d}{dx} f(x) = \\frac{df}{dx}$$

#### Key Theorem
If $f$ is differentiable at $x$, then $f$ is continuous at $x$.

> **Warning:** The converse is false! For example, $f(x) = |x|$ is continuous at $x = 0$ but not differentiable there.

#### Differentiation Rules

| Rule | Formula |
|------|---------|
| Power rule | $\\frac{d}{dx} x^r = r x^{r-1}$ |
| Sum rule | $(f + g)' = f' + g'$ |
| Constant multiple | $(kf)' = kf'$ |
| Product rule | $(fg)' = f'g + fg'$ |
| Quotient rule | $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ |
| Chain rule | $(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)$ |

#### Worked Example -- Product Rule
$$\\frac{d}{dx}\\left[(x^2 + 1)(x^3 + 4)\\right] = 2x(x^3 + 4) + (x^2 + 1)(3x^2) = 5x^4 + 3x^2 + 8x$$

#### Worked Example -- Chain Rule
$$\\frac{d}{dx}(7x - 3)^{10} = 10(7x - 3)^9 \\cdot 7 = 70(7x - 3)^9$$

#### Higher-Order Derivatives
$$f''(x) = \\frac{d^2}{dx^2} f(x), \\quad f^{(n)}(x) = \\frac{d^n}{dx^n} f(x)$$

---

### 10. Multivariable Calculus

#### Functions of Several Variables
A function $f$ of $n$ variables maps points $(x_1, \\ldots, x_n)$ in some subset $\\mathcal{D}(f)$ of $\\mathbb{R}^n$ to real numbers.

**Example.** $f(x, y) = \\sqrt{9 - x^2 - y^2}$ has domain $x^2 + y^2 \\leq 9$ (a disk of radius 3).

#### Limits in Several Variables
$$\\lim_{(x,y) \\to (a,b)} f(x,y) = L$$

means $f(x,y)$ gets close to $L$ as $(x,y)$ gets close to $(a,b)$ from **any direction**. The same limit laws apply.

**Example.** $\\displaystyle\\lim_{(x,y) \\to (2,3)} (2x - y^2) = 4 - 9 = -5$

#### Continuity
$f : \\mathbb{R}^n \\to \\mathbb{R}$ is continuous at $\\mathbf{x}^*$ if $\\displaystyle\\lim_{\\mathbf{x} \\to \\mathbf{x}^*} f(\\mathbf{x}) = f(\\mathbf{x}^*)$.

---

### 11. Partial Derivatives

#### Definition
The **partial derivatives** of $f(x, y)$ are:

$$\\frac{\\partial f}{\\partial x}(x,y) = \\lim_{h \\to 0} \\frac{f(x+h, y) - f(x,y)}{h}$$

$$\\frac{\\partial f}{\\partial y}(x,y) = \\lim_{h \\to 0} \\frac{f(x, y+h) - f(x,y)}{h}$$

> **Key idea:** To find $\\partial f / \\partial x$, differentiate with respect to $x$ while treating $y$ as a constant (and vice versa).

#### Worked Example
Let $f(x, y) = x^3 y^2 + x^4 y + y^4$.

$$\\frac{\\partial f}{\\partial x} = 3x^2 y^2 + 4x^3 y, \\qquad \\frac{\\partial f}{\\partial y} = 2x^3 y + x^4 + 4y^3$$

#### Multivariable Chain Rule
If $f(x, y)$ has continuous partial derivatives and $x = x(t)$, $y = y(t)$ are differentiable:

$$\\frac{df}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$$

#### Higher-Order Partial Derivatives

$$f_{xx} = \\frac{\\partial^2 f}{\\partial x^2}, \\quad f_{yy} = \\frac{\\partial^2 f}{\\partial y^2}, \\quad f_{xy} = \\frac{\\partial^2 f}{\\partial x \\partial y}, \\quad f_{yx} = \\frac{\\partial^2 f}{\\partial y \\partial x}$$

> **Remark:** In general, mixed partials commute: $f_{xy} = f_{yx}$.

---

### 12. The Jacobian Matrix and Gradients

#### Jacobian Matrix
For a map $\\mathbf{f} : \\mathbb{R}^n \\to \\mathbb{R}^m$ with components $f_1, \\ldots, f_m$:

$$D\\mathbf{f}(\\mathbf{x}) = \\begin{bmatrix} \\frac{\\partial f_1}{\\partial x_1} & \\cdots & \\frac{\\partial f_1}{\\partial x_n} \\\\ \\vdots & \\ddots & \\vdots \\\\ \\frac{\\partial f_m}{\\partial x_1} & \\cdots & \\frac{\\partial f_m}{\\partial x_n} \\end{bmatrix}$$

The chain rule for maps: $D(\\mathbf{g} \\circ \\mathbf{f})(\\mathbf{x}) = D\\mathbf{g}(\\mathbf{f}(\\mathbf{x})) \\cdot D\\mathbf{f}(\\mathbf{x})$.

#### Gradient
For $f : \\mathbb{R}^n \\to \\mathbb{R}$, the **gradient** at a point $p = (p_1, \\ldots, p_n)$ is:

$$\\nabla f(p) = \\begin{bmatrix} \\frac{\\partial f}{\\partial x_1}(p) \\\\ \\vdots \\\\ \\frac{\\partial f}{\\partial x_n}(p) \\end{bmatrix}$$

#### Directional Derivative
If $f$ is differentiable at $p$ and $\\mathbf{u} = (u_1, \\ldots, u_n)$ is a **unit vector**, the directional derivative is:

$$D_{\\mathbf{u}} f(p) = \\mathbf{u} \\cdot \\nabla f(p) = \\sum_{i=1}^{n} u_i \\frac{\\partial f}{\\partial x_i}(p)$$

> **Gradient descent:** A function $f$ increases most rapidly at $p$ in the direction of $\\nabla f(p)$ and decreases most rapidly in the direction of $-\\nabla f(p)$. This is the basis of gradient descent in machine learning.

---

## Part II -- Linear Algebra (Weeks 3--7)

---

### 13. Systems of Linear Equations

#### Definition
A **linear equation** in variables $x_1, \\ldots, x_n$ has the form:

$$a_1 x_1 + a_2 x_2 + \\cdots + a_n x_n = b$$

A **system of linear equations** is a collection of such equations.

> **Not linear:** $x_1 x_2 + 6x_2^3 = 0$ or $\\sin x_3 - e^{x_1} = 2$ (products, powers, nonlinear functions).

#### Solutions
A **solution** is a list $(s_1, \\ldots, s_n)$ satisfying every equation. The **solution set** is the set of all solutions. A system is:
- **Inconsistent** -- no solution
- **Consistent** -- at least one solution (either exactly one or infinitely many)

#### Matrix Form
The system can be written using a **coefficient matrix** and an **augmented matrix**:

$$\\text{System: } \\begin{cases} x_1 - 2x_2 + x_3 = 0 \\\\ 2x_2 - 8x_3 = 8 \\\\ 5x_1 - 5x_3 = 10 \\end{cases}$$

Coefficient matrix: $\\begin{bmatrix} 1 & -2 & 1 \\\\ 0 & 2 & -8 \\\\ 5 & 0 & -5 \\end{bmatrix}$, Augmented matrix: $\\begin{bmatrix} 1 & -2 & 1 & 0 \\\\ 0 & 2 & -8 & 8 \\\\ 5 & 0 & -5 & 10 \\end{bmatrix}$

---

### 14. Row Reduction and Echelon Forms

#### Elementary Row Operations
1. **Replacement:** Add a multiple of one row to another
2. **Interchange:** Swap two rows
3. **Scaling:** Multiply a row by a nonzero constant

> If two augmented matrices are **row equivalent**, the corresponding systems have the same solution set.

#### Echelon Form (EF)
A matrix is in **echelon form** if:
1. All nonzero rows are above any all-zero rows
2. Each leading entry is to the right of the leading entry in the row above
3. All entries below a leading entry are zero

#### Reduced Echelon Form (REF)
Additionally:
4. The leading entry in each nonzero row is $1$
5. Each leading $1$ is the only nonzero entry in its column

> **Theorem (Uniqueness):** Every matrix is row equivalent to exactly one reduced echelon matrix.

#### Pivot Positions and Variables
- A **pivot position** corresponds to a leading 1 in the REF
- **Basic variables** correspond to pivot columns
- **Free variables** correspond to non-pivot columns

#### Worked Example

$$\\begin{bmatrix} 1 & 0 & -5 & 1 \\\\ 0 & 1 & 1 & 4 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix} \\implies \\begin{cases} x_1 = 1 + 5x_3 \\\\ x_2 = 4 - x_3 \\\\ x_3 \\text{ is free} \\end{cases}$$

#### Existence and Uniqueness Theorem
A linear system is **consistent** if and only if the rightmost column of the augmented matrix is **not** a pivot column, i.e., there is no row of the form $[0 \\; 0 \\; \\cdots \\; 0 \\; b]$ with $b \\neq 0$.

If consistent:
- **Unique solution** when there are no free variables
- **Infinitely many solutions** when there is at least one free variable

---

### 15. Vectors in $\\mathbb{R}^n$

#### Definition
A **column vector** in $\\mathbb{R}^n$ is an $n \\times 1$ matrix. For $u, v \\in \\mathbb{R}^n$ and scalar $c$:

$$u + v = \\begin{bmatrix} u_1 + v_1 \\\\ u_2 + v_2 \\end{bmatrix}, \\qquad c \\cdot v = \\begin{bmatrix} c v_1 \\\\ c v_2 \\end{bmatrix}$$

#### Algebraic Properties (8 axioms)
For $u, v, w \\in \\mathbb{R}^n$ and scalars $c, d$:
1. $u + v = v + u$
2. $(u + v) + w = u + (v + w)$
3. $v + 0 = v$
4. $u + (-u) = 0$
5. $c(u + v) = cu + cv$
6. $(c + d)u = cu + du$
7. $c(du) = (cd)u$
8. $1u = u$

#### Linear Combinations
A vector $y$ is a **linear combination** of $v_1, \\ldots, v_p$ if there exist scalars $c_1, \\ldots, c_p$ such that:

$$y = c_1 v_1 + c_2 v_2 + \\cdots + c_p v_p$$

> Checking whether $b$ is a linear combination of $v_1, \\ldots, v_p$ amounts to solving the system with augmented matrix $[v_1 \\; \\cdots \\; v_p \\; | \\; b]$.

#### Span
The **span** of $\\{v_1, \\ldots, v_p\\}$ is the set of all linear combinations:

$$\\text{Span}\\{v_1, \\ldots, v_p\\} = \\{c_1 v_1 + \\cdots + c_p v_p : c_1, \\ldots, c_p \\in \\mathbb{R}\\}$$

---

### 16. The Matrix Equation $Ax = b$

#### Definition
If $A$ is an $m \\times n$ matrix with columns $a_1, \\ldots, a_n$ and $x \\in \\mathbb{R}^n$:

$$Ax = \\begin{bmatrix} a_1 & \\cdots & a_n \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{bmatrix} = x_1 a_1 + x_2 a_2 + \\cdots + x_n a_n$$

#### Equivalent Statements
For an $m \\times n$ matrix $A$, the following are **logically equivalent** (all true or all false):
1. For each $b \\in \\mathbb{R}^m$, $Ax = b$ has a solution
2. Each $b \\in \\mathbb{R}^m$ is a linear combination of the columns of $A$
3. The columns of $A$ span $\\mathbb{R}^m$
4. $A$ has a pivot position in every row

#### Properties of Matrix-Vector Product
- $A(u + v) = Au + Av$
- $A(cu) = c(Au)$

---

### 17. Linear Independence

#### Definition
A set $\\{v_1, \\ldots, v_p\\}$ in $\\mathbb{R}^n$ is **linearly independent** if the equation:

$$x_1 v_1 + x_2 v_2 + \\cdots + x_p v_p = 0$$

has only the **trivial solution** $x_1 = x_2 = \\cdots = x_p = 0$.

The set is **linearly dependent** if there exist weights, not all zero, satisfying the equation.

#### Key Results
- Two nonzero vectors are linearly independent if and only if neither is a scalar multiple of the other
- A set with **more vectors than entries** ($p > n$ in $\\mathbb{R}^n$) is always linearly dependent
- Any set containing the **zero vector** is linearly dependent
- A set $\\{v_1, \\ldots, v_p\\}$ ($p \\geq 2$) is linearly dependent if and only if some $v_j$ is a linear combination of the preceding vectors

---

### 18. Linear Transformations

#### Definition
A **transformation** $T : \\mathbb{R}^n \\to \\mathbb{R}^m$ is **linear** if:
1. $T(u + v) = T(u) + T(v)$ for all $u, v$
2. $T(cu) = cT(u)$ for all scalars $c$ and all $u$

Equivalently: $T(c_1 v_1 + \\cdots + c_p v_p) = c_1 T(v_1) + \\cdots + c_p T(v_p)$.

#### Standard Matrix
Every linear transformation $T : \\mathbb{R}^n \\to \\mathbb{R}^m$ has a unique $m \\times n$ matrix $A$ such that $T(x) = Ax$. This **standard matrix** is:

$$A = \\begin{bmatrix} T(e_1) & T(e_2) & \\cdots & T(e_n) \\end{bmatrix}$$

where $e_j$ are the standard basis vectors.

#### Surjective and Injective
- $T$ is **onto** (surjective) $\\iff$ the columns of $A$ span $\\mathbb{R}^m$
- $T$ is **one-to-one** (injective) $\\iff$ the columns of $A$ are linearly independent

---

### 19. Matrix Operations

#### Addition and Scalar Multiplication
For $m \\times n$ matrices $A, B$ and scalar $r$:
- $(A + B)_{ij} = a_{ij} + b_{ij}$
- $(rA)_{ij} = r \\cdot a_{ij}$

A **diagonal matrix** has nonzero entries only on the main diagonal. The **zero matrix** has all entries zero.

#### Matrix Multiplication
If $A$ is $m \\times n$ and $B = [b_1 \\; \\cdots \\; b_p]$ is $n \\times p$:

$$AB = \\begin{bmatrix} Ab_1 & Ab_2 & \\cdots & Ab_p \\end{bmatrix} \\quad (m \\times p \\text{ matrix})$$

> **Size requirement:** Number of columns of $A$ must equal number of rows of $B$.

#### Properties of Matrix Multiplication
- $A(BC) = (AB)C$ (associative)
- $A(B + C) = AB + AC$ (left distributive)
- $(B + C)A = BA + CA$ (right distributive)
- $r(AB) = (rA)B = A(rB)$
- $I_m A = A = A I_n$

#### Common Pitfalls
- $AB \\neq BA$ in general (not commutative!)
- $AB = AC$ does **not** imply $B = C$
- $AB = 0$ does **not** imply $A = 0$ or $B = 0$

#### Transpose
The **transpose** of $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ formed by swapping rows and columns.

- $(A^T)^T = A$
- $(A + B)^T = A^T + B^T$
- $(rA)^T = rA^T$
- $(AB)^T = B^T A^T$ (order reverses!)

---

### 20. Inverse of a Matrix

#### Definition
An $n \\times n$ matrix $A$ is **invertible** if there exists an $n \\times n$ matrix $C$ such that:

$$AC = I_n \\quad \\text{and} \\quad CA = I_n$$

The matrix $C$ is the **inverse**, written $A^{-1}$. A non-invertible matrix is called **singular**.

#### $2 \\times 2$ Inverse Formula
For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, if $ad - bc \\neq 0$:

$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

#### Algorithm for Finding $A^{-1}$
Row reduce the augmented matrix $[A \\mid I]$:
- If $A$ is row equivalent to $I$, then $[A \\mid I] \\sim [I \\mid A^{-1}]$
- If $A$ is not row equivalent to $I$, then $A$ is not invertible

#### Properties
- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1}A^{-1}$ (order reverses!)
- $(A^T)^{-1} = (A^{-1})^T$

#### Solving Systems with Inverses
If $A$ is invertible: $Ax = b \\implies x = A^{-1}b$

This gives a **unique** solution for every $b$.

---

### 21. The Invertible Matrix Theorem

**Theorem.** For an $n \\times n$ matrix $A$, the following are **all equivalent**:

| | Statement |
|---|----------|
| (a) | $A$ is invertible |
| (b) | $A$ is row equivalent to $I_n$ |
| (c) | $A$ has $n$ pivot positions |
| (d) | $Ax = 0$ has only the trivial solution |
| (e) | The columns of $A$ are linearly independent |
| (f) | $x \\mapsto Ax$ is one-to-one (injective) |
| (g) | $Ax = b$ has at least one solution for each $b \\in \\mathbb{R}^n$ |
| (h) | The columns of $A$ span $\\mathbb{R}^n$ |
| (i) | $x \\mapsto Ax$ is onto (surjective) |
| (j) | There exists $C$ with $CA = I$ |
| (k) | There exists $D$ with $AD = I$ |
| (l) | $A^T$ is invertible |
| (m) | The columns of $A$ form a basis of $\\mathbb{R}^n$ |
| (n) | $\\text{Col}\\,A = \\mathbb{R}^n$ |
| (o) | $\\text{rank}\\,A = n$ |
| (p) | $\\text{nullity}\\,A = 0$ |
| (q) | $\\text{Nul}\\,A = \\{0\\}$ |
| (r) | $0$ is **not** an eigenvalue of $A$ |

---

### 22. Determinants

#### Definition
The **determinant** is a function $\\det : M_n(\\mathbb{R}) \\to \\mathbb{R}$ that measures how a matrix scales area/volume.

#### $2 \\times 2$ Determinant

$$\\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc$$

#### $n \\times n$ Determinant -- Cofactor Expansion
Expand along row $i$:

$$\\det A = a_{i1}C_{i1} + a_{i2}C_{i2} + \\cdots + a_{in}C_{in}$$

where the **cofactor** $C_{ij} = (-1)^{i+j} \\det A_{ij}$ and $A_{ij}$ is the submatrix with row $i$ and column $j$ removed.

> **Tip:** Expand along a row or column with the most zeros to minimize computation.

#### Triangular Matrices
If $A$ is triangular (upper or lower), then $\\det A$ is the product of the diagonal entries.

#### Effect of Row Operations on Determinants

| Operation | Effect on $\\det$ |
|-----------|------------------|
| Add multiple of one row to another | $\\det B = \\det A$ (unchanged) |
| Interchange two rows | $\\det B = -\\det A$ (sign flips) |
| Multiply a row by $k$ | $\\det B = k \\det A$ |

#### Key Properties
- $A$ is invertible $\\iff \\det A \\neq 0$
- $\\det(A^T) = \\det A$
- $\\det(AB) = (\\det A)(\\det B)$
- $\\det(A^{-1}) = 1 / \\det A$

#### Worked Example
Compute $\\det A$ for a $5 \\times 5$ upper-triangular-like matrix by expanding down the first column (choosing columns with many zeros), reducing step by step:

$$\\det A = 3 \\cdot 2 \\cdot (-2) = -12$$

---

### 23. Vector Spaces

#### Definition
A **vector space** is a nonempty set $V$ of objects (vectors) with two operations -- **addition** and **scalar multiplication** -- satisfying 10 axioms:

1. $u + v \\in V$ (closure under addition)
2. $u + v = v + u$ (commutativity)
3. $(u + v) + w = u + (v + w)$ (associativity)
4. There exists $0 \\in V$ with $u + 0 = u$ (zero vector)
5. For each $u$, there exists $-u$ with $u + (-u) = 0$
6. $cu \\in V$ (closure under scalar multiplication)
7. $c(u + v) = cu + cv$
8. $(c + d)u = cu + du$
9. $c(du) = (cd)u$
10. $1u = u$

#### Examples
- $\\mathbb{R}^n$ -- the standard example
- $\\mathbb{P}_n$ -- polynomials of degree $\\leq n$: $p(t) = a_0 + a_1 t + \\cdots + a_n t^n$
- The set of all real-valued functions on $\\mathbb{R}$

---

### 24. Subspaces

#### Definition
A **subspace** $H$ of a vector space $V$ is a subset satisfying:
1. The zero vector $0$ is in $H$
2. $H$ is closed under addition: $u, v \\in H \\implies u + v \\in H$
3. $H$ is closed under scalar multiplication: $u \\in H,\\, c \\in \\mathbb{R} \\implies cu \\in H$

#### Key Subspaces of a Matrix $A$ ($m \\times n$)

| Subspace | Definition | Lives in |
|----------|-----------|----------|
| **Null space** $\\text{Nul}\\,A$ | $\\{x \\in \\mathbb{R}^n : Ax = 0\\}$ | $\\mathbb{R}^n$ |
| **Column space** $\\text{Col}\\,A$ | $\\text{Span}\\{a_1, \\ldots, a_n\\}$ | $\\mathbb{R}^m$ |

#### Finding Null Space
1. Row reduce $[A \\mid 0]$ to REF
2. Express basic variables in terms of free variables
3. Write the general solution as a linear combination of vectors (one per free variable)

**These vectors form a spanning set (and basis) for $\\text{Nul}\\,A$.**

#### Finding Column Space
1. Row reduce $A$
2. Identify pivot columns
3. The corresponding columns of the **original** matrix $A$ form a basis for $\\text{Col}\\,A$

> **Important:** Use columns from the original matrix, not the row-reduced one!

---

### 25. Bases and Dimension

#### Definition
A **basis** for a subspace $H$ of $V$ is a set $\\mathcal{B} \\subset V$ that is:
1. Linearly independent
2. Spans $H$: $H = \\text{Span}\\,\\mathcal{B}$

#### Standard Bases
- Standard basis for $\\mathbb{R}^n$: $\\{e_1, \\ldots, e_n\\}$
- Standard basis for $\\mathbb{P}_n$: $\\{1, t, t^2, \\ldots, t^n\\}$

#### The Spanning Set Theorem
If $S = \\{v_1, \\ldots, v_p\\}$ spans $H$:
1. If some $v_k$ is a linear combination of the rest, removing it still spans $H$
2. If $H \\neq \\{0\\}$, some subset of $S$ is a basis for $H$

> **Key fact:** The pivot columns of $A$ form a basis for $\\text{Col}\\,A$.

#### Dimension
The **dimension** of a vector space $V$, written $\\dim V$, is the number of vectors in any basis for $V$.

- $\\dim \\mathbb{R}^n = n$
- $\\dim \\mathbb{P}_n = n + 1$
- $\\dim \\{0\\} = 0$

**Theorem.** If $\\dim V = p$, then:
- Any set of exactly $p$ linearly independent vectors is a basis
- Any set of exactly $p$ vectors that spans $V$ is a basis

#### Rank and Nullity

| Term | Definition |
|------|-----------|
| $\\text{rank}\\,A$ | $\\dim(\\text{Col}\\,A)$ = number of pivot columns |
| $\\text{nullity}\\,A$ | $\\dim(\\text{Nul}\\,A)$ = number of free variables |

**The Rank Theorem:**

$$\\text{rank}\\,A + \\text{nullity}\\,A = n \\quad (\\text{number of columns})$$

**Example.** If $A$ is $7 \\times 9$ with nullity 2, then $\\text{rank}\\,A = 9 - 2 = 7$.

---

### 26. Coordinate Systems

#### Unique Representation Theorem
If $\\mathcal{B} = \\{b_1, \\ldots, b_n\\}$ is a basis for $V$, then for each $x \\in V$ there exist **unique** scalars $c_1, \\ldots, c_n$ with:

$$x = c_1 b_1 + c_2 b_2 + \\cdots + c_n b_n$$

The **coordinate vector** of $x$ relative to $\\mathcal{B}$ is:

$$[x]_{\\mathcal{B}} = \\begin{bmatrix} c_1 \\\\ \\vdots \\\\ c_n \\end{bmatrix}$$

#### Change-of-Coordinates Matrix
The matrix $P_{\\mathcal{B}} = [b_1 \\; \\cdots \\; b_n]$ converts $\\mathcal{B}$-coordinates to standard coordinates:

$$x = P_{\\mathcal{B}} [x]_{\\mathcal{B}}$$

Its inverse converts the other way: $[x]_{\\mathcal{B}} = P_{\\mathcal{B}}^{-1} x$.

#### Change of Basis Between Two Bases
Given bases $\\mathcal{B} = \\{b_1, \\ldots, b_n\\}$ and $\\mathcal{C} = \\{c_1, \\ldots, c_n\\}$:

$$[x]_{\\mathcal{C}} = \\underset{\\mathcal{C} \\leftarrow \\mathcal{B}}{P} \\, [x]_{\\mathcal{B}}$$

where the columns of $\\underset{\\mathcal{C} \\leftarrow \\mathcal{B}}{P}$ are $[b_1]_{\\mathcal{C}}, \\ldots, [b_n]_{\\mathcal{C}}$.

**To compute:** Row reduce $[c_1 \\; c_2 \\; | \\; b_1 \\; b_2] \\sim [I \\; | \\; \\underset{\\mathcal{C} \\leftarrow \\mathcal{B}}{P}]$.

---

### 27. Eigenvalues and Eigenvectors

#### Definition
An **eigenvector** of an $n \\times n$ matrix $A$ is a **nonzero** vector $x$ such that:

$$Ax = \\lambda x$$

for some scalar $\\lambda$. The scalar $\\lambda$ is the corresponding **eigenvalue**.

#### Finding Eigenvalues
$\\lambda$ is an eigenvalue of $A$ $\\iff$ $(A - \\lambda I)x = 0$ has a nontrivial solution $\\iff$

$$\\det(A - \\lambda I) = 0$$

This is the **characteristic equation**. The polynomial $\\det(A - \\lambda I)$ is the **characteristic polynomial**.

#### Worked Example
Find the eigenvalues of $A = \\begin{bmatrix} 2 & 3 \\\\ 3 & -6 \\end{bmatrix}$.

$$\\det(A - \\lambda I) = (2 - \\lambda)(-6 - \\lambda) - 9 = \\lambda^2 + 4\\lambda - 21 = (\\lambda - 3)(\\lambda + 7) = 0$$

Eigenvalues: $\\lambda = 3$ and $\\lambda = -7$.

#### Finding Eigenvectors
For each eigenvalue $\\lambda$, solve $(A - \\lambda I)x = 0$ by row reduction. The solution space is the **eigenspace** $\\text{Nul}(A - \\lambda I)$.

#### Key Properties
- Eigenvalues of a **triangular** matrix are its diagonal entries
- Eigenvectors corresponding to **distinct** eigenvalues are linearly independent

---

### 28. Diagonalization

#### Similar Matrices
$A$ and $B$ are **similar** if there exists an invertible $P$ with $P^{-1}AP = B$. Similar matrices have the same characteristic polynomial and eigenvalues.

#### Definition
$A$ is **diagonalizable** if $A = PDP^{-1}$ where $D$ is diagonal.

#### The Diagonalization Theorem
An $n \\times n$ matrix $A$ is diagonalizable **if and only if** $A$ has $n$ linearly independent eigenvectors.

In that case:
- The columns of $P$ are the $n$ independent eigenvectors
- The diagonal entries of $D$ are the corresponding eigenvalues

#### When Is $A$ Diagonalizable?
- If $A$ has $n$ **distinct** eigenvalues $\\implies$ diagonalizable (sufficient, not necessary)
- More generally: diagonalizable $\\iff$ the characteristic polynomial factors completely into linear factors **and** for each eigenvalue $\\lambda_k$, $\\dim(\\text{eigenspace for } \\lambda_k) = \\text{multiplicity of } \\lambda_k$

#### Diagonalization Algorithm
1. Find all eigenvalues by solving $\\det(A - \\lambda I) = 0$
2. For each eigenvalue, find a basis for its eigenspace
3. Check that the total number of independent eigenvectors equals $n$
4. Form $P$ from these eigenvectors (as columns) and $D$ with eigenvalues on the diagonal

#### Worked Example
Diagonalize $A = \\begin{bmatrix} 5 & 0 & 0 & 0 \\\\ 0 & 5 & 0 & 0 \\\\ 1 & 4 & -3 & 0 \\\\ -1 & -2 & 0 & -3 \\end{bmatrix}$.

Eigenvalues: $\\lambda = 5$ (multiplicity 2) and $\\lambda = -3$ (multiplicity 2). Each eigenspace has dimension 2, giving 4 independent eigenvectors total. So $A = PDP^{-1}$ with $D = \\text{diag}(5, 5, -3, -3)$.

---

### 29. Inner (Dot) Product

#### Definition
The **inner product** (dot product) of $u, v \\in \\mathbb{R}^n$ is:

$$u \\cdot v = u^T v = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n$$

#### Properties
1. $u \\cdot v = v \\cdot u$
2. $(u + v) \\cdot w = u \\cdot w + v \\cdot w$
3. $(cu) \\cdot v = c(u \\cdot v)$
4. $u \\cdot u \\geq 0$, and $u \\cdot u = 0 \\iff u = 0$

#### Length (Norm)

$$\\|v\\| = \\sqrt{v \\cdot v} = \\sqrt{v_1^2 + \\cdots + v_n^2}$$

- $\\|cv\\| = |c| \\, \\|v\\|$
- A **unit vector** has $\\|v\\| = 1$
- **Normalizing** $v$: $u = v / \\|v\\|$

#### Distance

$$\\text{dist}(u, v) = \\|u - v\\|$$

#### Orthogonality
Two vectors $u$ and $v$ are **orthogonal** if $u \\cdot v = 0$.

> **Geometric meaning:** Orthogonal vectors are perpendicular. This is proven by showing $\\text{dist}(u, v) = \\text{dist}(u, -v)$ iff $u \\cdot v = 0$.

---

### 30. Orthogonal Complements

#### Definition
The **orthogonal complement** of a subspace $W$ of $\\mathbb{R}^n$ is:

$$W^\\perp = \\{z \\in \\mathbb{R}^n : z \\cdot w = 0 \\text{ for all } w \\in W\\}$$

$W^\\perp$ is itself a subspace of $\\mathbb{R}^n$.

**Key theorem:** $(\\text{Col}\\,A)^\\perp = \\text{Nul}\\,A^T$

---

### 31. Orthogonal Sets and Bases

#### Orthogonal Set
A set $\\{u_1, \\ldots, u_p\\}$ is an **orthogonal set** if $u_i \\cdot u_j = 0$ for all $i \\neq j$.

An **orthonormal set** additionally requires $\\|u_i\\| = 1$ for all $i$.

**Theorem.** An orthogonal set of nonzero vectors is linearly independent.

#### Orthogonal Basis
An **orthogonal basis** for a subspace $W$ is a basis that is also an orthogonal set.

**Key advantage:** If $\\{u_1, \\ldots, u_p\\}$ is an orthogonal basis for $W$ and $y \\in W$, the weights in $y = c_1 u_1 + \\cdots + c_p u_p$ are simply:

$$c_j = \\frac{y \\cdot u_j}{u_j \\cdot u_j}, \\quad j = 1, \\ldots, p$$

> No row reduction needed! This is much faster than solving a system.

---

### 32. Orthogonal Projections

#### Orthogonal Decomposition Theorem
Let $W$ be a subspace of $\\mathbb{R}^n$. Every $y \\in \\mathbb{R}^n$ can be written **uniquely** as:

$$y = \\hat{y} + z$$

where $\\hat{y} \\in W$ and $z \\in W^\\perp$.

If $\\{u_1, \\ldots, u_p\\}$ is an orthogonal basis for $W$:

$$\\hat{y} = \\text{proj}_W\\,y = \\frac{y \\cdot u_1}{u_1 \\cdot u_1} u_1 + \\frac{y \\cdot u_2}{u_2 \\cdot u_2} u_2 + \\cdots + \\frac{y \\cdot u_p}{u_p \\cdot u_p} u_p$$

$$z = y - \\hat{y}$$

#### Best Approximation Theorem
$\\hat{y} = \\text{proj}_W\\,y$ is the **closest point** in $W$ to $y$:

$$\\|y - \\hat{y}\\| < \\|y - v\\| \\quad \\text{for all } v \\in W,\\, v \\neq \\hat{y}$$

---

### 33. The Gram-Schmidt Process

#### Purpose
Given a basis $\\{x_1, \\ldots, x_p\\}$ for a subspace $W$, produce an **orthogonal basis** $\\{v_1, \\ldots, v_p\\}$ for $W$.

#### Algorithm

$$v_1 = x_1$$

$$v_2 = x_2 - \\frac{x_2 \\cdot v_1}{v_1 \\cdot v_1} v_1$$

$$v_3 = x_3 - \\frac{x_3 \\cdot v_1}{v_1 \\cdot v_1} v_1 - \\frac{x_3 \\cdot v_2}{v_2 \\cdot v_2} v_2$$

$$\\vdots$$

$$v_p = x_p - \\sum_{j=1}^{p-1} \\frac{x_p \\cdot v_j}{v_j \\cdot v_j} v_j$$

**Key property:** $\\text{Span}\\{v_1, \\ldots, v_k\\} = \\text{Span}\\{x_1, \\ldots, x_k\\}$ for each $1 \\leq k \\leq p$.

#### Worked Example
Let $x_1 = \\begin{bmatrix} 1\\\\1\\\\1\\\\1 \\end{bmatrix}$, $x_2 = \\begin{bmatrix} 0\\\\1\\\\1\\\\1 \\end{bmatrix}$, $x_3 = \\begin{bmatrix} 0\\\\0\\\\1\\\\1 \\end{bmatrix}$.

**Step 1:** $v_1 = x_1 = (1,1,1,1)^T$

**Step 2:** $v_2 = x_2 - \\frac{x_2 \\cdot v_1}{v_1 \\cdot v_1} v_1 = \\begin{bmatrix}0\\\\1\\\\1\\\\1\\end{bmatrix} - \\frac{3}{4}\\begin{bmatrix}1\\\\1\\\\1\\\\1\\end{bmatrix} = \\begin{bmatrix}-3/4\\\\1/4\\\\1/4\\\\1/4\\end{bmatrix}$

Scale by 4: $v_2' = (-3, 1, 1, 1)^T$

**Step 3:** $v_3 = x_3 - \\frac{x_3 \\cdot v_1}{v_1 \\cdot v_1}v_1 - \\frac{x_3 \\cdot v_2'}{v_2' \\cdot v_2'}v_2' = \\begin{bmatrix}0\\\\-2/3\\\\1/3\\\\1/3\\end{bmatrix}$

Result: $\\{v_1, v_2', v_3\\}$ is an orthogonal basis for $W$.

> To get an **orthonormal** basis, normalize each vector: $u_j = v_j / \\|v_j\\|$.

---

## Quick Reference: Key Theorems at a Glance

| Theorem | Statement |
|---------|-----------|
| **Existence & Uniqueness** | Consistent $\\iff$ no row $[0\\;\\cdots\\;0\\;b]$ with $b\\neq 0$. Unique $\\iff$ no free variables. |
| **Invertible Matrix Theorem** | 17+ equivalent conditions for an $n\\times n$ matrix (see Section 21) |
| **Rank Theorem** | $\\text{rank}\\,A + \\text{nullity}\\,A = n$ |
| **Diagonalization Theorem** | $A$ diagonalizable $\\iff$ $n$ linearly independent eigenvectors |
| **Best Approximation** | $\\text{proj}_W y$ is the closest point in $W$ to $y$ |
| **Gram-Schmidt** | Any basis can be converted to an orthogonal basis |
| **IVT** | Continuous $f$ on $[a,b]$ with $f(a)$ and $f(b)$ of opposite sign $\\implies$ root in $(a,b)$ |

---

## Exam Tips

1. **Limits:** Always try direct substitution first. If $0/0$, factor or rationalize. For $\\infty$ limits, divide by the highest power.
2. **Row reduction:** Practice until it is automatic -- it appears in almost every linear algebra problem.
3. **Invertibility:** Know the Invertible Matrix Theorem cold -- if you can show any one condition, all others follow.
4. **Eigenvalues:** For $2 \\times 2$ matrices, the characteristic polynomial is $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$.
5. **Diagonalization:** Count eigenvectors carefully. If total independent eigenvectors $< n$, the matrix is not diagonalizable.
6. **Gram-Schmidt:** Scale intermediate vectors to avoid fractions -- it does not affect orthogonality.
7. **Column space:** Always take columns from the **original** matrix, not the row-reduced form.
8. **Determinants:** Choose the row/column with the most zeros for cofactor expansion.
`;
