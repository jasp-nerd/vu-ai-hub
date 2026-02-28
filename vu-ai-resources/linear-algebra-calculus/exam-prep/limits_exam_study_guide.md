# Calculus Limits - Complete Study Guide

## Table of Contents
1. [Finite Limits - Direct Substitution & Algebraic Techniques](#finite-limits)
2. [Limits at Infinity](#limits-at-infinity)
3. [One-Sided Limits & Absolute Values](#one-sided-limits)
4. [Continuity Problems](#continuity)
5. [Intermediate Value Theorem (IVT)](#intermediate-value-theorem)
6. [Quick Reference - Techniques Summary](#quick-reference)
7. [Exam Tips & Common Mistakes](#exam-tips)

---

## FINITE LIMITS - Direct Substitution & Algebraic Techniques

### When to Use Each Technique

**1. Direct Substitution** - Try this FIRST
- If you get a real number → That's your answer!
- If you get 0/0 → Indeterminate form, need algebraic manipulation
- If you get non-zero/0 → Limit does not exist (usually ±∞)

**2. Factoring** - Use when you have 0/0 form with polynomials
**3. Rationalizing** - Use when you have square roots in numerator/denominator
**4. Simplifying Complex Fractions** - Use when you have fractions within fractions

---

### Solved Problems

#### **Problem 9:** lim(x→-3) (x+3)/(x+6)

**Technique:** Direct substitution (denominator ≠ 0)

**Solution:**
- Numerator: -3 + 3 = 0
- Denominator: -3 + 6 = 3
- Answer: **0/3 = 0**

---

#### **Problem 12:** lim(x→-1) (x²-1)/(x+1)

**Technique:** Factoring (0/0 form)

**Solution:**
```
Direct substitution gives 0/0 ✗

Factor numerator: x² - 1 = (x-1)(x+1)

= lim(x→-1) [(x-1)(x+1)]/(x+1)

Cancel (x+1): = lim(x→-1) (x-1)

Substitute: = -1 - 1 = -2
```
**Answer: -2**

**Key Point:** Always factor when you see 0/0 form!

---

#### **Problem 14:** lim(x→-2) (x²+2x)/(x²-4)

**Technique:** Factoring both numerator and denominator

**Solution:**
```
Numerator: x² + 2x = x(x+2)
Denominator: x² - 4 = (x-2)(x+2)

= lim(x→-2) [x(x+2)]/[(x-2)(x+2)]

Cancel (x+2): = lim(x→-2) x/(x-2)

Substitute: = -2/(-2-2) = -2/(-4) = 1/2
```
**Answer: 1/2**

---

#### **Problem 17:** lim(x→9) (√x - 3)/(x-9)

**Technique:** Rationalization (multiply by conjugate)

**Solution:**
```
Multiply by conjugate (√x + 3)/(√x + 3):

= lim(x→9) [(√x - 3)(√x + 3)]/[(x-9)(√x + 3)]

Numerator: (√x)² - 3² = x - 9

= lim(x→9) (x-9)/[(x-9)(√x + 3)]

Cancel (x-9): = lim(x→9) 1/(√x + 3)

Substitute: = 1/(√9 + 3) = 1/(3+3) = 1/6
```
**Answer: 1/6**

**Key Formula:** (a-b)(a+b) = a² - b²

---

#### **Problem 22:** lim(x→2) |x-2|/(x-2)

**Technique:** One-sided limits (absolute value creates split)

**Solution:**
```
Must check left and right limits separately!

Right-hand limit (x > 2):
When x > 2: x - 2 > 0, so |x-2| = x-2
lim(x→2⁺) (x-2)/(x-2) = 1

Left-hand limit (x < 2):
When x < 2: x - 2 < 0, so |x-2| = -(x-2)
lim(x→2⁻) -(x-2)/(x-2) = -1

Since 1 ≠ -1, limit DOES NOT EXIST
```
**Answer: DNE (Does Not Exist)**

**Key Point:** If left and right limits differ, the limit doesn't exist!

---

#### **Problem 28 (from first set):** lim(s→0) [(s+1)² - (s-1)²]/s

**Technique:** Expand and simplify

**Solution:**
```
Expand:
(s+1)² = s² + 2s + 1
(s-1)² = s² - 2s + 1

(s+1)² - (s-1)² = (s² + 2s + 1) - (s² - 2s + 1)
                 = s² + 2s + 1 - s² + 2s - 1
                 = 4s

= lim(s→0) 4s/s = lim(s→0) 4 = 4
```
**Answer: 4**

---

## LIMITS AT INFINITY

### Key Strategy: Divide by Highest Power of x

**General Rules:**
1. Find the highest power of x in the problem
2. Divide EVERY term by that power
3. As x→∞, terms like 1/x, 1/x², etc. approach 0
4. Compare leading coefficients

---

### Solved Problems

#### **Problem 3:** lim(x→∞) (3x³ - 5x² + 7)/(8 + 2x - 5x³)

**Technique:** Divide by x³ (highest power)

**Solution:**
```
Divide numerator and denominator by x³:

= lim(x→∞) [3 - 5/x + 7/x³]/[8/x³ + 2/x² - 5]

As x→∞: 5/x → 0, 7/x³ → 0, 8/x³ → 0, 2/x² → 0

= (3 - 0 + 0)/(0 + 0 - 5) = 3/(-5) = -3/5
```
**Answer: -3/5**

**Rule:** When degrees are equal, answer is ratio of leading coefficients!

---

#### **Problem 5:** lim(x→-∞) (x² + 3)/(x³ + 2)

**Technique:** Compare degrees

**Solution:**
```
Numerator degree: 2
Denominator degree: 3

When bottom degree > top degree: limit = 0

Verify by dividing by x³:
= lim(x→-∞) [1/x + 3/x³]/[1 + 2/x³] = 0/1 = 0
```
**Answer: 0**

**Rule:** 
- If bottom degree > top degree → limit = 0
- If top degree > bottom degree → limit = ±∞
- If degrees equal → limit = ratio of leading coefficients

---

#### **Problem 7:** lim(x→∞) (3x + 2√x)/(1 - x)

**Technique:** Divide by x (highest power considering √x = x^(1/2))

**Solution:**
```
Divide by x:

= lim(x→∞) [3 + 2/√x]/[1/x - 1]

As x→∞: 2/√x → 0, 1/x → 0

= (3 + 0)/(0 - 1) = 3/(-1) = -3
```
**Answer: -3**

---

#### **Problem 9:** lim(x→∞) (2x - 1)/√(3x² + x + 1)

**Technique:** Divide by x (treating √(x²) = x)

**Solution:**
```
Divide by x:

= lim(x→∞) [2 - 1/x]/√[(3x² + x + 1)/x²]

= lim(x→∞) [2 - 1/x]/√[3 + 1/x + 1/x²]

= 2/√3 = 2√3/3
```
**Answer: 2√3/3**

**Key Point:** For √(polynomial), divide inside the square root by x²!

---

#### **Problem 27:** lim(x→∞) [x√(x+1)(1 - √(2x+3))]/(7 - 6x + 4x²)

**Technique:** Divide by x² and simplify radicals

**Solution:**
```
For large x:
- √(x+1) ≈ √x
- √(2x+3) ≈ √(2x) = √2·√x

Numerator ≈ x·√x·(1 - √2·√x) → -√2·x²
Denominator → 4x²

= -√2·x²/(4x²) = -√2/4
```
**Answer: -√2/4**

---

#### **Problem 28 (from infinity set):** lim(x→∞) [x²/(x+1) - x²/(x-1)]

**Technique:** Common denominator

**Solution:**
```
Common denominator:

= lim(x→∞) [x²(x-1) - x²(x+1)]/[(x+1)(x-1)]

= lim(x→∞) [x³ - x² - x³ - x²]/(x² - 1)

= lim(x→∞) (-2x²)/(x² - 1)

Divide by x²:

= lim(x→∞) -2/(1 - 1/x²) = -2/1 = -2
```
**Answer: -2**

---

#### **Problem 30:** lim(x→∞) [√(x² + 2x) - √(x² - 2x)]

**Technique:** Multiply by conjugate (rationalization)

**Solution:**
```
Multiply by conjugate:

= lim(x→∞) [(√(x²+2x) - √(x²-2x))(√(x²+2x) + √(x²-2x))]/[√(x²+2x) + √(x²-2x)]

Numerator: (x²+2x) - (x²-2x) = 4x

= lim(x→∞) 4x/[√(x²+2x) + √(x²-2x)]

Divide by x:

= lim(x→∞) 4/[√(1+2/x) + √(1-2/x)]

= 4/(√1 + √1) = 4/2 = 2
```
**Answer: 2**

**Key Point:** Always rationalize when you have √ - √ form!

---

## ONE-SIDED LIMITS & ABSOLUTE VALUES

### When Limits Don't Exist

A limit at a point exists if and only if:
1. Left-hand limit exists
2. Right-hand limit exists  
3. **Both limits are equal**

---

#### **Problem 11:** lim(x→3) 1/(3-x)

**Analysis:**
```
As x → 3⁻ (from left): 3 - x → 0⁺ 
→ 1/(0⁺) = +∞

As x → 3⁺ (from right): 3 - x → 0⁻
→ 1/(0⁻) = -∞

Since +∞ ≠ -∞
```
**Answer: Neither (limit does not exist)**

---

#### **Problem 19:** lim(x→2⁺) x/(2-x)³

**Analysis:**
```
As x → 2⁺:
- Numerator: x → 2 (positive)
- Denominator: 2 - x → 0⁻ (negative)
- (0⁻)³ = 0⁻ (negative)

Positive/Negative → -∞
```
**Answer: -∞**

**Key Point:** Pay attention to signs and whether approaching from left or right!

---

## CONTINUITY

### Definition of Continuity at x = a

A function f is continuous at x = a if:
1. f(a) is defined
2. lim(x→a) f(x) exists
3. lim(x→a) f(x) = f(a)

---

#### **Problem 13:** (x² - 4)/(x - 2) at x = 2

**Analysis:**
```
Step 1: Is f(2) defined?
f(2) = (4-4)/(2-2) = 0/0 ✗ UNDEFINED

Step 2: Does the limit exist?
lim(x→2) (x²-4)/(x-2) = lim(x→2) (x-2)(x+2)/(x-2)
                       = lim(x→2) (x+2) = 4 ✓

Step 3: Does f(2) = limit?
Since f(2) is undefined, NO
```
**Conclusion: NOT CONTINUOUS at x = 2**

**To fix:** Define f(2) = 4 (removable discontinuity)

---

#### **Problem 18:** Find m so that g(x) = {x - m if x < 3; 1 - mx if x ≥ 3} is continuous

**Strategy:** At boundary points, left limit = right limit = function value

**Solution:**
```
At x = 3:

Left limit: lim(x→3⁻) (x - m) = 3 - m

Right limit and value: lim(x→3⁺) (1 - mx) = g(3) = 1 - 3m

Set equal:
3 - m = 1 - 3m
3 - 1 = m - 3m
2 = -2m
m = -1
```
**Answer: m = -1**

---

## INTERMEDIATE VALUE THEOREM (IVT)

### When to Use IVT

Use IVT to prove that an equation has a solution (root) in an interval.

**Requirements:**
1. f is continuous on [a, b]
2. f(a) and f(b) have opposite signs
3. **Then:** There exists c in (a, b) where f(c) = 0

---

#### **Problem 29:** Show f(x) = x³ + x - 1 has a zero in [0, 1]

**Solution:**
```
Step 1: Check continuity
f(x) = x³ + x - 1 is a polynomial → continuous everywhere ✓

Step 2: Evaluate endpoints
f(0) = 0 + 0 - 1 = -1 < 0
f(1) = 1 + 1 - 1 = 1 > 0

Step 3: Apply IVT
Since f(0) < 0 and f(1) > 0, and f is continuous,
by IVT there exists c ∈ (0, 1) where f(c) = 0 ✓
```

---

#### **Problem 30:** Show x³ - 15x + 1 = 0 has three solutions in [-4, 4]

**Solution:**
```
Let f(x) = x³ - 15x + 1

Step 1: Check continuity
Polynomial → continuous ✓

Step 2: Evaluate strategic points
f(-4) = -64 + 60 + 1 = -3 < 0
f(-3) = -27 + 45 + 1 = 19 > 0
f(0) = 1 > 0
f(1) = 1 - 15 + 1 = -13 < 0
f(4) = 64 - 60 + 1 = 5 > 0

Step 3: Find sign changes
1st root: f(-4) < 0, f(-3) > 0 → root in (-4, -3)
2nd root: f(0) > 0, f(1) < 0 → root in (0, 1)
3rd root: f(1) < 0, f(4) > 0 → root in (1, 4)

Therefore, three roots exist in [-4, 4] ✓
```

**Strategy:** Choose test points to maximize finding sign changes!

---

## QUICK REFERENCE - Techniques Summary

### Finite Limits Flowchart

```
Start: Need to find lim(x→a) f(x)
   ↓
Try direct substitution
   ↓
Result?
   ├─→ Real number → DONE ✓
   ├─→ 0/0 → Indeterminate
   │         ├─→ Polynomials? → Factor
   │         ├─→ Square roots? → Rationalize (multiply by conjugate)
   │         └─→ Complex fraction? → Simplify
   └─→ k/0 (k≠0) → Check one-sided limits → ±∞ or DNE
```

### Limits at Infinity Flowchart

```
Start: lim(x→∞) f(x)
   ↓
Identify highest power of x
   ↓
Divide all terms by that power
   ↓
Terms with x in denominator → 0
   ↓
Compare what remains
```

### Continuity Checklist

```
To check continuity at x = a:
☐ Is f(a) defined?
☐ Does lim(x→a) f(x) exist?
☐ Does lim(x→a) f(x) = f(a)?

All YES → Continuous ✓
Any NO → Not continuous ✗
```

---

## EXAM TIPS & COMMON MISTAKES

### ⚠️ Common Mistakes to Avoid

1. **Forgetting to check if denominator = 0 before direct substitution**
   - Always check! If denominator = 0, you can't use direct substitution

2. **Not recognizing 0/0 as indeterminate**
   - 0/0 ≠ 0 or 1 → It means "keep working!"

3. **Canceling when you shouldn't**
   - Only cancel common factors, never cancel terms that are added/subtracted
   - ❌ (x+3)/(x+5) ≠ 3/5
   - ✓ (x+3)(x-1)/[(x+3)(x+2)] = (x-1)/(x+2)

4. **Forgetting the conjugate formula**
   - (a - b)(a + b) = a² - b²
   - Essential for rationalizing!

5. **Not dividing everything by highest power in infinity limits**
   - Must divide EVERY term, including constants!

6. **Mixing up one-sided limit notation**
   - x → a⁺ means approaching from the RIGHT (x > a)
   - x → a⁻ means approaching from the LEFT (x < a)

7. **IVT: Choosing bad test points**
   - Pick points that might show sign changes
   - For [-4, 4], don't just test -4 and 4 if you need multiple roots!

---

### ✓ Exam Success Strategies

**Time Management:**
1. **Scan the entire exam first** - do easy direct substitution problems first
2. **Mark 0/0 problems** - these need more work
3. **Save IVT proofs for last** - they're usually straightforward but take time to write

**Problem-Solving Order:**
1. Always try direct substitution first
2. If 0/0, identify the technique needed (factor, rationalize, simplify)
3. After algebraic manipulation, try substitution again
4. For infinity limits, immediately divide by highest power

**Show Your Work:**
- Write out "0/0 form" when you get it - shows you recognize indeterminate form
- For IVT, explicitly state: continuous, evaluate endpoints, opposite signs, conclusion
- For continuity, check all three conditions explicitly

**Double-Check:**
- Did you simplify completely?
- Did you rationalize the final answer? (e.g., 2/√3 = 2√3/3)
- For piecewise functions, did you check the boundary point?

---

### Key Formulas to Memorize

**Factoring:**
- x² - a² = (x - a)(x + a)
- x² + bx + c = look for factors of c that add to b

**Conjugates:**
- Conjugate of (√a - b) is (√a + b)
- Conjugate of (a - √b) is (a + √b)
- (√a - √b)(√a + √b) = a - b

**Limits at Infinity:**
- If f(x) = (anxⁿ + ...)/(bmxᵐ + ...):
  - n < m → limit = 0
  - n = m → limit = an/bm
  - n > m → limit = ±∞

**Absolute Value:**
- |x - a| = x - a when x > a
- |x - a| = -(x - a) when x < a

---

### Practice Problems Summary

**You successfully solved:**
- 6 finite limit problems (9, 12, 14, 17, 22, 28)
- 6 infinity limit problems (3, 5, 7, 9, 11, 19)
- 3 challenging infinity problems (27, 28, 30)
- 2 continuity problems (13, 18)
- 2 IVT proof problems (29, 30)

**Total: 19 problems covering all major limit topics!**

---

## Final Pre-Exam Checklist

**Night Before:**
☐ Review all techniques one more time
☐ Memorize key formulas (conjugates, factoring patterns)
☐ Get good sleep!

**Day of Exam:**
☐ Bring calculator (if allowed)
☐ Have scratch paper ready
☐ Read each problem completely before starting
☐ Budget your time - don't get stuck on one problem

**During Exam:**
☐ Try direct substitution first, always
☐ Write clearly and show your work
☐ If stuck, move on and come back
☐ Check your final answers for reasonableness

---

## You've Got This! 💪

You've practiced:
✓ Factoring and canceling
✓ Rationalization with conjugates  
✓ Limits at infinity
✓ One-sided limits
✓ Continuity
✓ Intermediate Value Theorem

**Trust your preparation. Follow the techniques. Show your work.**

**Good luck on your exam!**
