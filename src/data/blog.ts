import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'surviving-first-year',
    title: 'Surviving Your First Year: From Day One to Final Exams',
    date: '2026-02-15',
    author: 'AI @ VU Team',
    excerpt:
      'Everything I wish I knew before starting the AI bachelor at VU Amsterdam. Week 1 logistics, study habits, and the stuff nobody warns you about.',
    content: `Starting the AI bachelor at VU Amsterdam is exciting, but it can also be a lot. This post covers the practical stuff: what to do in your first week, and how to get through the rest of year 1 without burning out.

---

# Part 1: Your first week

Your first week is less about algorithms and more about logistics. Based on what the Class of 2028 ran into, here are the things that trip people up.

## Sync your timetable IMMEDIATELY

Before anything else, go to [rooster.vu.nl](https://rooster.vu.nl), find your schedule, and hit the sync button in the top right corner. You can subscribe with Google Calendar, Outlook, or Apple Calendar. It auto-updates when rooms or times change, which happens more often than you'd expect.

Don't rely on checking the website manually. You *will* miss a room change eventually.

## Canvas group sign-ups close FAST

This is the #1 thing that catches new students off guard. Several courses require you to sign up for tutor groups, practicum groups, or project groups through Canvas (People → Groups). The problem is that **some deadlines close on the very first day of teaching, or even the day before.**

For Introduction to AI, tutor groups are mandatory. Miss the sign-up and you get randomly assigned to whatever slot is left. For Computational Thinking, your practicum group IS your project group (worth 40% of your grade), so you're basically choosing your project partners on day one.

Check the Groups section the moment a course appears on Canvas. Set a calendar reminder for when courses go live.

## Join the Mentor Program

The VU Mentor Program is free and specifically for first-year students. They run study prep sessions before exams, game nights, and peer mentoring with students who've already been through Year 1.

Most people don't know about it, which is a shame because it's one of the easiest ways to meet people who actually know how things work. Between the Mentor Program, the Librae Community (café meetups and social stuff), and STORM (the AI study association), you can have a decent social circle before October if you just show up.

## Don't skip Week 1 videos

This is especially true for Computational Thinking, which uses a flipped classroom: you watch videos at home, then do cases in class. The Week 1 videos sometimes don't appear until a day or two into the period.

Students who waited for "everything to be ready" before starting found themselves behind by the end of Week 1. Turn on Canvas notifications and watch things as soon as they're posted.

## Course-specific gotchas

A few things that surprised students in Period 1:

- Introduction to Psychology has a guessing penalty on exams. Random guessing can actually *lower* your score. Read the exam instructions.
- Introduction to AI tutor groups are mandatory for passing. This isn't the case for every course, so it catches people off guard.
- Computational Thinking Quiz 2 is harder than Quiz 1 for most people. Know Kruskal's algorithm.

## Set up your tools early

- VS Code: Jupyter is used in some courses, but VS Code is better for managing project folders. Install both.
- Python: Get Anaconda installed before courses start. You'll need it for multiple courses.
- Canvas notifications: Turn these on. Group deadlines, schedule changes, and assignment clarifications all come through Canvas.

---

# Part 2: The rest of year 1

Once you've sorted out the logistics, the actual academic challenge starts. Here's what I wish someone had told me.

## The workload is real

The AI bachelor is one of the heavier programs at VU. You'll be juggling Logic and Sets for AI, programming (Python), psychology, and AI-specific content, sometimes all in the same week. Don't underestimate the time commitment.

My advice: treat university like a job. Be on campus from 9 to 5, go to all lectures, and use the gaps between classes to work on assignments. If you do this consistently, you'll rarely need to work evenings or weekends.

## Form a study group early

Find 3-4 people in your first week and commit to working together. You'll learn faster by explaining concepts to each other, stay motivated when things get rough, have people to split the work on group projects, and actually enjoy the whole thing more. This is probably the single most useful thing you can do.

## Don't skip the math

It's tempting to focus on the "cool" AI stuff and coast through the foundations. Don't. Logic and Sets for AI, Computational Thinking, and programming fundamentals are what everything else builds on: machine learning, intelligent systems, computer vision, NLP. A weak foundation in year 1 will cost you in years 2 and 3.

## Use the university resources

VU has a lot of support that most students either don't know about or don't bother with:

- Study advisors: they're there to help, not judge. If you're struggling, go talk to them early.
- Math support center: free drop-in tutoring for logic and math courses.
- Student psychologists: mental health matters, especially during exams.
- Career services: start thinking about internships from year 2.

## Take care of yourself

This sounds obvious but it's easy to forget when deadlines pile up. Sleep enough, exercise, eat properly, and keep a social life outside of your studies. Burning out in year 1 is more common than you'd think, and it's not worth it.`,
    tags: ['first-year', 'first-week', 'advice', 'student-life', 'logistics'],
  },
  {
    id: 'post-2',
    slug: 'exam-preparation-strategies',
    title: 'How I Prepare for Exams (and Actually Retain Things)',
    date: '2026-02-01',
    author: 'AI @ VU Team',
    excerpt:
      'What actually works for exam prep in technical courses, based on 2+ years of trial and error and a bunch of cognitive science papers I probably should have read sooner.',
    content: `After 2+ years of exams in the AI bachelor, I've tried pretty much everything. Colour-coded notes, marathon study sessions, re-reading slides until my eyes glazed over. Most of it didn't work. Here's what did, and why.

## Stop re-reading your notes

I'll start with the thing nobody wants to hear. Re-reading slides, highlighting, rewatching lectures: it all *feels* productive, but it barely moves the needle. Dunlosky et al. (2013) reviewed hundreds of studies and ranked re-reading and highlighting among the least effective study methods. The reason is that passive review creates a false sense of familiarity. You recognize the material, so you think you know it. But recognition is not recall. The exam doesn't ask "have you seen this before?" It asks you to produce answers from nothing.

## Active recall

This is the single biggest change I made. Instead of passively going over material, I close my notes and try to reproduce what I just studied. Write it out, say it out loud, whatever. It's uncomfortable because you realize how much you *don't* know, but that's the point.

Karpicke and Roediger (2008) tested this: students who used active recall retained 80% of information after a week, compared to 36% for students who just re-read the material. That's not a small difference.

What this looks like in practice:
- Read a section, close the book, write down everything you can remember, then check what you missed.
- Use Anki or physical flashcards.
- Do practice problems before you look at solutions. Struggle with them first.
- Try the "blank page method": take an empty page and recreate the key ideas from memory.

## Spaced repetition

Cramming the night before is tempting because it feels like you're covering a lot of ground. You are, but you'll forget most of it within a week. Spaced repetition is the opposite approach: review material at increasing intervals over days and weeks, so it actually sticks.

A meta-analysis of 317 experiments (Cepeda et al., 2006) found that spaced practice can double or even triple long-term retention compared to cramming. It's not a new idea either; psychologists have been studying the spacing effect for over a century.

For a 3-week study period, something like this works:

| Day | What to review |
|-----|---------------|
| Day 1 | Learn new material |
| Day 2 | Review Day 1 material |
| Day 4 | Review Day 1 material again |
| Day 8 | Review Day 1 material again |
| Day 15 | Final review before exam |

Anki automates the scheduling for you. Create cards early (3-4 weeks before the exam, not 3-4 days) and let the algorithm do the rest.

## Interleaving

This one is counterintuitive. Instead of studying one topic in a long block and then moving to the next, you mix topics within a single session. So instead of doing 20 linear algebra problems and then 20 calculus problems, you alternate: 5 LA, 5 calc, 5 LA, 5 calc.

Rohrer and Taylor (2007) found that interleaving improved test scores by up to 43% compared to blocked practice. It feels harder while you're doing it, which is exactly why it works. Your brain has to keep distinguishing between different types of problems, and that effort makes the learning stick.

## Ask "why?" more

This is sometimes called elaborative interrogation, which is a fancy name for a simple habit. When you're studying a concept, don't just memorize the fact. Ask yourself *why* it's true and *how* it connects to other things you know.

For example: don't just memorize that gradient descent updates weights by moving in the direction of the negative gradient. Ask yourself *why* the negative gradient direction reduces the loss. What would happen if you moved in a different direction? What if the learning rate is too large?

This kind of questioning forces you to actually understand things instead of pattern-matching.

## Draw things

Combining text with visuals (diagrams, sketches, concept maps) helps because you're encoding the same information in two different ways. If you can't recall the text, you might still remember the diagram, and vice versa.

For AI courses specifically: draw out neural network architectures, sketch decision boundaries, make concept maps that link related theorems together. It doesn't have to look good. The act of making it is what matters.

## Teach it to someone

If you can explain a concept clearly to someone who doesn't get it, you actually understand it. If you stumble or wave your hands vaguely, you've found a gap. This works great in study groups: take turns being the "teacher" for different topics.

There's research showing that even the *expectation* of having to teach something changes how your brain processes it. You organize the material more carefully when you think you'll need to explain it.

## Pomodoro (25 on, 5 off)

I used to sit down for 3-hour blocks and wonder why I couldn't focus past the first hour. Now I do 25 minutes of focused work, then a 5-minute break, and take a longer break after four rounds. It's nothing revolutionary, but it works. My concentration lasts longer and I actually get more done in less time.

## Sleep, exercise, and your phone

Three things that have nothing to do with study technique but affect everything:

**Sleep:** Your brain consolidates memories while you sleep. Pulling an all-nighter before an exam is actively making things worse. A meta-analysis in *Psychological Bulletin* found that sleep deprivation can cut cognitive performance by 25-50%. Just go to bed.

**Exercise:** Even a 20-minute walk before studying helps with focus. I don't fully understand the neuroscience here (something about BDNF), but it works and it's free.

**Your phone:** Put it in another room. I'm serious. What people call "multitasking" is actually rapid task-switching, and according to APA research it can reduce how much you learn by up to 40%. Every time you check a notification, you lose focus and it takes minutes to get it back.

## Practice problems

For math and programming courses, doing practice problems matters more than anything else on this list. Complete all the assigned problem sets, even the ungraded ones. Work through past exams under timed conditions. And actually *try* each problem before looking at the solution. Struggling with a problem you can't solve teaches you more than reading a solution you didn't attempt.

## Reflecting on what worked

After a study session, I spend a few minutes thinking about what I actually learned, what was still confusing, and what I should do differently next time. This sounds like journaling, and I guess it is, but it's helped me stop wasting time on methods that don't work for me.

## On exam day

- Sleep well the night before. Cramming doesn't help much for technical courses.
- Get there early. Do a quick review of key formulas.
- Read all the questions before you start. Do the ones you're confident about first.
- Show your work even if you're unsure. Partial credit adds up.
- If you're stuck, move on. Come back with fresh eyes later.`,
    tags: ['exams', 'study-tips', 'productivity'],
  },
  {
    id: 'post-6',
    slug: 'free-student-subscriptions',
    title: '70+ Free Subscriptions You Can Get as a Student (Save Over $10,000/Year)',
    date: '2026-03-14',
    author: 'AI @ VU Team',
    excerpt:
      'A comprehensive list of 70+ tools, platforms, and services you can get for free or at massive discounts with a student email. Start with the GitHub Student Developer Pack and unlock everything else.',
    content: `Almost everything is free, and some offer crazy discounts. As a student you have access to an absurd amount of software, cloud credits, and services that would otherwise cost you well over $10,000 a year. Most students don't even know half of these exist.

This post is the full list. Bookmark it.

---

## The King: GitHub Student Developer Pack

[**GitHub Student Developer Pack**](https://education.github.com/pack) is where you start. One application, one verification, 100+ tools unlocked. Every other student subscription saves you money on one thing. The GitHub Student Developer Pack builds your entire development environment for free.

If you do nothing else on this list, do this one. It's the gateway to most of what follows.

---

## Dev Tools & IDEs

These are the tools you'll actually use every day as an AI or CS student.

- [**Cursor Pro**](https://cursor.com/students): 1 full year free ($240 value). AI-powered code editor. Verified via SheerID
- [**GitHub Copilot Pro**](https://docs.github.com/en/copilot/how-tos/manage-your-account/get-free-access-to-copilot-pro): free via GitHub Education. AI code completion, normally $10/mo
- [**JetBrains All Products**](https://www.jetbrains.com/academy/student-pack/): all IDEs free (IntelliJ, PyCharm, WebStorm, CLion, DataGrip, etc.). Renewable yearly. ~$250/yr value
- **JetBrains Space Pro**: via GitHub Pack
- **Replit Pro**: via GitHub Pack
- [**GitKraken**](https://www.gitkraken.com/github-student-developer-pack-bundle): 6 months free, then 75-80% off Pro. Via GitHub Pack
- [**Postman Student Expert**](https://www.postman.com/student-program/student-expert/): free API certification + digital badge

JetBrains alone is worth $250/year. Cursor is another $240. That's nearly $500 just from two items on this list.

---

## Cloud & Hosting

Free cloud credits are incredibly useful for ML projects, hosting personal projects, or just learning how infrastructure works.

- [**AWS Educate**](https://aws.amazon.com/education/awseducate/): free cloud skills training + hands-on labs. Also check the [AWS Free Tier](https://aws.amazon.com/free/)
- [**Microsoft Azure for Students**](https://azure.microsoft.com/en-us/free/students): $100 free credits per year, no credit card needed. Renewable annually
- [**Google Cloud Education**](https://cloud.google.com/edu/students): ~$50 in credits distributed via faculty. Ask your professors
- [**DigitalOcean**](https://www.digitalocean.com/github-students): $200 in cloud credits via GitHub Pack, valid 1 year
- [**Oracle Cloud Free Tier**](https://www.oracle.com/cloud/free/): $300 trial credits + generous Always Free resources (4 ARM cores, 24 GB RAM). Available to everyone
- [**Heroku**](https://www.heroku.com/github-students/): $13/mo in platform credits for 24 months via GitHub Pack
- **Vercel Pro**: via GitHub Pack
- **Netlify**: via GitHub Pack
- **Railway**: student discount
- [**Cloudflare Pro**](https://www.cloudflare.com/students/): 12 months of developer features via GitHub Pack

That's potentially **$600+ in cloud credits** across these platforms. More than enough to run ML training jobs, host side projects, or experiment with different providers.

---

## Databases

- [**MongoDB Atlas**](https://www.mongodb.com/students): $50 credits + free certification ($150 value)

---

## Design & Productivity

You don't have to pay for design or productivity tools. Almost all of them have student plans.

- [**Figma Education**](https://www.figma.com/education/): free Professional plan for 2 years. Unlimited files and collaboration
- [**Canva for Education**](https://www.canva.com/education/students/): free Canva Pro if your university has Canva for Campus
- [**Sketch**](https://www.sketch.com/education/): free Education plan (full workspace, Mac + web app). 1 year, renewable
- [**Autodesk**](https://www.autodesk.com/education/edu-software/overview): free 1-year licenses for AutoCAD, Fusion, Maya, etc. Renewable
- **Miro**: free Education plan
- [**Blender**](https://www.blender.org/): completely free and open source (GPL). Not student-specific but worth knowing
- [**Notion Education**](https://www.notion.com/product/notion-for-education): free Plus plan ($10/mo value). Unlimited pages, file uploads
- [**Microsoft 365 Education**](https://www.microsoft.com/en-us/education/products/office): free Word, Excel, PowerPoint, Teams with school email
- **Grammarly EDU**: via university
- **Obsidian**: free for students
- **Todoist Pro**: discount via Student Beans
- [**Airtable Education**](https://support.airtable.com/docs/nonprofit-and-educational-plans-faqs): free Team plan for 6-24 months with .edu email
- **Loom**: free Education plan
- **Linear**: student plan
- **ClickUp**: free Education plan
- **Asana**: student access

---

## Learning Platforms

If you want to learn beyond your coursework, there's a lot available for free or nearly free.

- [**Educative**](https://www.educative.io/github-students): 6 months free access to 60+ courses via GitHub Pack, then 30% off
- [**Frontend Masters**](https://frontendmasters.com/welcome/github-student-developers/): 6 months free membership (one-time) via GitHub Pack
- **LinkedIn Learning**: free via university (check if VU provides access)
- [**Coursera Financial Aid**](https://www.coursera.support/s/article/learner-000001455): apply for free access to any course (two short essays, ~16 days processing)
- [**edX Audit**](https://www.edx.org/): audit most courses for free (no certificate, limited time access)
- **Udemy**: free courses periodically
- **Pluralsight**: student plan
- **IBM SkillsBuild**: free
- **Meta Blueprint**: free certifications
- **Microsoft Learn**: free challenges with periodic free certifications
- **Google Developer Student Clubs**: free access
- **Hack The Box**: student labs
- **TryHackMe**: student plan
- [**Kaggle**](https://www.kaggle.com/): 30 hours/week free GPU compute (Tesla P100/T4), 50,000+ datasets. Free for everyone
- **LeetCode**: student discount
- **HackerRank**: free certifications
- [**Red Hat Developer**](https://developers.redhat.com/): free developer subscription with up to 16 RHEL nodes
- **SAP Learning Hub**: student access

---

## Domains & SSL

Want to host a personal portfolio? You can do it completely free.

- [**Namecheap**](https://nc.me/landing/github): free .me domain + SSL for 1 year via GitHub Pack
- [**Let's Encrypt**](https://letsencrypt.org/): free SSL certificates for any website. Forever. Available to everyone

---

## AI Tools

- [**Perplexity Pro Student**](https://www.perplexity.ai/students): 50% off ($10/mo) or $4.99/mo Education plan
- **Google Gemini**: via Google One Education
- **OpenAI API Credits**: via partner student programs

---

## Music & Entertainment

- [**Spotify Student**](https://www.spotify.com/nl/student/): ~50% off Premium. Verified via SheerID
- [**Apple Music Student**](https://support.apple.com/en-us/106008): $5.99/mo (vs $10.99) + free Apple TV+. Up to 48 months
- [**YouTube Premium Student**](https://support.google.com/youtube/answer/9158808): ~43% off ($7.99/mo). Annual reverification required
- **Amazon Prime**: 6 months free for students

---

## Deals & Discount Platforms

These aggregate discounts across hundreds of brands:

- [**UNiDAYS**](https://www.myunidays.com/): free platform with up to 50% off across fashion, tech, food, travel. 1000+ brands
- [**Student Beans**](https://www.studentbeans.com/): 10,000+ stores, includes digital student ID for in-store discounts
- [**Apple Education Pricing**](https://www.apple.com/nl-edu/store): up to EUR 200 off Macs, EUR 100 off iPads
- **Samsung Student Store**: device discounts

---

## Payments & DevOps

- **Stripe**: no fees on first $1,000 via GitHub Pack
- **Nvidia**: student resources & credits
- **Intel Developer Zone**: free access

---

## Communication

- **Microsoft Teams**: VU's meeting platform (the VU Zoom licence ended 1 May 2026)
- **Slack**: free Education plan

---

## NL-Specific

If you're studying in the Netherlands, there's one more worth knowing:

- [**Surfspot**](https://www.surfspot.nl/): discounted software for Dutch university students (Microsoft Office, Adobe, etc.). Log in with your VU credentials

And don't forget the [**Museumkaart**](https://www.museumkaart.nl/) (~EUR 69/year for free entry to 400+ museums across the Netherlands). Not a subscription, but it pays for itself after a few visits.

---

## Where to Start

If you're feeling overwhelmed, here's the order I'd recommend:

1. **GitHub Student Developer Pack** — do this first, it unlocks most of the dev tools
2. **JetBrains** — you'll use an IDE every day
3. **Azure/DigitalOcean credits** — useful for ML projects and hosting
4. **Figma + Notion** — even if you're not a designer, these are useful for project planning
5. **Spotify/YouTube Premium student pricing** — might as well save money on what you already pay for
6. **UNiDAYS + Student Beans** — install these and check them before buying anything

The total value of everything on this list is conservatively over $10,000 per year. Most of it takes less than 5 minutes to set up. There's really no reason not to.

Check out our [Free Stuff guide](/guide/student-life/free-stuff) for even more details on student freebies and how to set them up.`,
    tags: ['free-stuff', 'student-discounts', 'tools', 'productivity', 'cloud'],
  },
  {
    id: 'post-5',
    slug: 'math-behind-ai',
    title: 'The Math Behind AI: What You Actually Need to Know',
    date: '2026-02-24',
    author: 'AI @ VU Team',
    excerpt:
      'How Linear Algebra, Calculus, and Probability connect to Machine Learning. If you\'re wondering why you\'re computing eigenvalues, this is why.',
    content: `A lot of AI students treat math courses as hoops to jump through. I get it. When you signed up for an AI degree, you probably didn't picture yourself computing determinants by hand. But here's the thing: almost every "cool" AI technique you'll learn later is built directly on the math you're doing now. This post connects the dots.

## Linear algebra is how ML talks about data

Machine learning operates on vectors and matrices. An image is a matrix of pixel values. A dataset is a matrix where each row is a data point and each column is a feature. A neural network layer is, at its core, a matrix multiplication:

$$\\mathbf{y} = W\\mathbf{x} + \\mathbf{b}$$

That's it. That's a neural network layer. $W$ is a weight matrix, $\\mathbf{x}$ is your input, and $\\mathbf{b}$ is a bias vector. When you learn matrix multiplication in Linear Algebra, you're learning the operation that every neural network runs thousands of times during a single forward pass.

Some other connections:

Eigenvalues and eigenvectors come up in PCA (Principal Component Analysis), which is one of the most common techniques for reducing the number of dimensions in a dataset. Given a covariance matrix $C$, PCA finds vectors $\\mathbf{v}$ where $C\\mathbf{v} = \\lambda \\mathbf{v}$. Those vectors point in the directions of maximum variance in your data.

Cosine similarity, which measures how similar two vectors are, is used everywhere in NLP: $\\cos(\\theta) = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\| \\, \\|\\mathbf{b}\\|}$. It's how search engines compare documents and how word embeddings measure whether two words mean similar things.

SVD (Singular Value Decomposition) decomposes any matrix as $A = U\\Sigma V^T$. This shows up in recommendation systems (how Netflix suggests movies), image compression, and various NLP techniques.

## Calculus is how models learn

Gradient descent is the algorithm that trains almost every modern ML model, and it's just calculus. The idea: you have a loss function that measures how wrong your model is, and you want to make it smaller. Calculus tells you which direction to go.

The chain rule from calculus *is* backpropagation. That's not an analogy; it's literally what backpropagation does. For a composition $f(g(x))$:

$$\\frac{df}{dx} = \\frac{df}{dg} \\cdot \\frac{dg}{dx}$$

In a neural network, each layer is a function composed with the next. To figure out how changing a weight deep in the network affects the final loss, you apply the chain rule backward through every layer. That's backpropagation.

The gradient descent update rule is:

$$w_{t+1} = w_t - \\eta \\nabla L(w_t)$$

where $\\eta$ is the learning rate and $\\nabla L$ is the gradient of the loss with respect to the weights. You compute partial derivatives $\\frac{\\partial L}{\\partial w_j}$ for every weight $w_j$ in the model, then nudge each weight in the direction that reduces the loss.

Here's a concrete example. Take $f(x,y) = x^2 y + 3y^2$. The gradient is:

$$\\nabla f = \\left(\\frac{\\partial f}{\\partial x},\\; \\frac{\\partial f}{\\partial y}\\right) = \\left(2xy,\\; x^2 + 6y\\right)$$

Now imagine $x$ and $y$ are weights in a model and $f$ is a loss function. That gradient tells you exactly how to adjust each weight to make the loss smaller. That's all gradient descent is doing, over and over, with millions of weights instead of two.

## Probability is how you deal with the fact that data is noisy

You never have perfect data. There's always noise, missing values, measurement error. Probability and statistics give you the tools to work with that.

Bayes' rule is everywhere in ML:

$$P(A \\mid B) = \\frac{P(B \\mid A) \\, P(A)}{P(B)}$$

Spam filters use it. Medical diagnosis systems use it. Any model that updates its beliefs based on new evidence is doing some version of Bayes' rule.

The normal distribution shows up constantly because of the Central Limit Theorem (more on that below). Its density function is:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\, e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}$$

Maximum Likelihood Estimation (MLE) is how you find the best parameters $\\theta$ for a model. You pick the parameters that make your observed data most probable:

$$\\hat{\\theta} = \\arg\\max_\\theta \\prod_{i=1}^{n} P(x_i \\mid \\theta)$$

In practice, you minimize the negative log-likelihood instead (because products of tiny numbers are numerically unstable):

$$\\hat{\\theta} = \\arg\\min_\\theta \\left[ -\\sum_{i=1}^{n} \\log P(x_i \\mid \\theta) \\right]$$

Expected value and variance are basic but they come up in reinforcement learning (expected reward), risk assessment, and pretty much any situation where you need to summarize a distribution with a few numbers:

$$\\mathbb{E}[X] = \\sum_x x \\, P(X = x), \\quad \\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$$

Hypothesis testing is how you answer questions like "is model A actually better than model B, or did it just get lucky on this test set?" You need p-values and confidence intervals for this.

And the Central Limit Theorem is why averaging works. If you take $n$ i.i.d. samples with mean $\\mu$ and variance $\\sigma^2$, the sample mean converges to a normal distribution:

$$\\bar{X}_n \\xrightarrow{d} \\mathcal{N}\\!\\left(\\mu,\\; \\frac{\\sigma^2}{n}\\right)$$

This is why larger datasets give you better estimates. It's also why so many things in nature look normally distributed.

## How it all maps together

The math courses come in Year 1. The applications come in Year 2-3. It feels disconnected while you're doing it, but here's where each thing shows up:

| Math concept | Where it shows up in AI |
|---|---|
| Matrix multiplication $W\\mathbf{x} + \\mathbf{b}$ | Neural network forward pass |
| Eigenvalues $C\\mathbf{v} = \\lambda\\mathbf{v}$ | PCA, spectral clustering |
| Gradient $\\nabla L$ | Training any model (gradient descent) |
| Chain rule $\\frac{df}{dg} \\cdot \\frac{dg}{dx}$ | Backpropagation |
| Bayes' rule $P(A \\mid B)$ | Probabilistic models, classification |
| Distributions $\\mathcal{N}(\\mu, \\sigma^2)$ | Data modeling, generative models |
| Hypothesis testing | Model evaluation, A/B testing |

## Some practical advice

3Blue1Brown's "Essence of Linear Algebra" and "Essence of Calculus" series on YouTube are excellent. They build geometric intuition for stuff that's usually taught purely algebraically. Watch them before or alongside your courses.

When you learn a new math concept, try implementing it in code. Write matrix multiplication in NumPy. Implement gradient descent from scratch for a simple function. The combination of math on paper and code that runs makes things click in a way that neither does alone.

Before Machine Learning starts in year 2, spend a weekend reviewing gradients, matrix operations, and Bayes' rule. Seriously. An afternoon of review will save you hours of confusion later.`,
    tags: ['math', 'machine-learning', 'linear-algebra', 'calculus', 'probability'],
  },
];
