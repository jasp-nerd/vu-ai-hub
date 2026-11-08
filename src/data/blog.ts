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

- Introduction to Psychology has no penalty for wrong answers. Guess on every question you don't know, because a blank answer scores zero. The chance correction is built into the pass mark (35 of 56 for a 5.5).
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
    title: '100+ student perks that work for Dutch students (checked November 2026)',
    date: '2026-11-08',
    author: 'AI @ VU Team',
    excerpt:
      'Every perk rechecked on 8 November 2026: AI tools, dev tools, cloud credits, what VU already gives you, and Dutch deals for news, film, sport and travel. Dead offers and US-only deals removed.',
    content: `The first version of this list went up in March 2026. I never properly checked it, and by November a good chunk was wrong. Cursor stopped its free student year. GitHub swapped free Copilot Pro for a smaller student plan. DigitalOcean left the GitHub pack. Some perks on the old list were only ever open to US students with a .edu address.

So I rechecked everything on 8 November 2026, mostly on the companies' own pages, and dropped anything a Dutch student can't get. I also added a lot: AI tools, things VU already gives you for free, and Dutch deals for news, film, sport and travel.

Prices and terms change all the time. Treat the numbers as a snapshot and check the page before you pay for anything.

---

## How verification works for Dutch students

- **Use your @student.vu.nl address.** Almost every perk here accepts it. Where a company only takes .edu addresses or US students, I left the perk out.
- **Keep a dated proof of enrolment ready.** Many checks (GitHub, SheerID, Goodstack) want a document with your name, VU's name and a date. Dutch student cards often have no date on them, which is the most common reason GitHub rejects people. Download a proof of enrolment (bewijs van inschrijving) from Studielink and use that.
- **Some "free" perks still want a card.** Heroku, MongoDB, Asana and Google AI Plus all ask for a payment method. Put a reminder in your calendar for the day the free period ends.

---

## Start here: the GitHub Student Developer Pack

[**GitHub Student Developer Pack**](https://education.github.com/pack) is still the best place to start. One application unlocks about 80 partner offers.

Tips that save you a rejection:

- Add and verify your VU email in your GitHub settings before you apply.
- Take a live photo of your dated proof of enrolment. If it's in Dutch, put a typed English translation of the key fields next to it.
- Make your GitHub profile name match the name on the document.
- Apply from campus or near it, with location access allowed and no VPN. GitHub checks where you are.
- Approval takes a few days. Benefits show up within 72 hours after that.

**Copilot changed.** Students no longer get Copilot Pro for free. Since March 2026, verified students get [**Copilot Student**](https://docs.github.com/en/copilot/get-started/plans) instead: unlimited code completions, a monthly allowance of AI credits (200 at the time of writing) and limited chat and agent use. You can't pick the model yourself. It's still useful, but you will run out of credits if you lean on agent mode.

The pack offers most worth claiming as an AI or CS student:

- **GitHub Pro + Codespaces**: private repos, more Actions minutes and 180 core hours of Codespaces a month
- [**JetBrains**](https://www.jetbrains.com/academy/student-pack/): every JetBrains IDE (PyCharm, IntelliJ, CLion, DataGrip and the rest), renewed yearly. You can also apply directly with your VU email
- [**Microsoft Azure**](https://azure.microsoft.com/en-us/free/students/): \\$100 in credit for 12 months, no credit card, renewable while you study
- [**MongoDB**](https://www.mongodb.com/students): \\$50 in Atlas credit plus a free certification exam voucher
- [**Heroku**](https://www.heroku.com/github-students): \\$13 a month in platform credit for 24 months. Age 18+, card required
- **Domains**: a free .me domain with SSL from Namecheap, a free .tech domain, and a free domain from Name.com (.dev, .app and 25+ others), each for one year
- **1Password**: free for 2 years, including the developer tools
- **Termius**: Pro and Team SSH client features while you're a student
- **Sentry and Datadog**: error tracking (1 year, renewable) and monitoring (Pro for 2 years)
- **Deepnote**: Team plan for collaborative notebooks while you're a student
- **DataCamp**: 3 months free
- **Educative** (6 months free, then 30% off), **Frontend Masters** (6 months) and **Boot.dev** (3 months)
- **GitKraken**: 6 months free, then up to 80% off Pro
- **Doppler, Appwrite, Clerk, New Relic and LocalStack**: handy if you build web apps or play with AWS without paying for it

---

## Already free through VU

You pay for these through your tuition, so use them.

- [**Microsoft 365**](https://vu.nl/en/student/study-skills/digital-student-guide): Word, Excel, PowerPoint, OneNote, Outlook, Teams and OneDrive with your VU account
- [**Microsoft Copilot Chat and Google Gemini**](https://vu.nl/en/student/examinations/generative-ai-your-use-our-expectations): both free with your VU login, under a data agreement with VU. Gemini Notebook (formerly NotebookLM) is included through your VU Google account. VU doesn't license ChatGPT or Claude, so check the course rules before you use those
- [**Overleaf Professional**](https://www.overleaf.com/edu/vua): track changes, full history and unlimited collaborators for Faculty of Science students, which includes AI and CS. Log in with VU SSO
- [**VU software catalogue**](https://download.vu.nl): centrally licensed software for Windows, plus the VU Software Center on macOS. Check what's in there before you buy anything
- [**VU library**](https://vu.nl/en/about-vu/divisions/university-library/more-about/search-systems-and-reference-tools): IEEE Xplore, the ACM Digital Library and Springer through LibSearch. Install the Lean Library browser extension to get access off campus
- [**Mentimeter**](https://vu.nl/en/student/study-skills/digital-student-guide): free with your student.vu.nl address

---

## AI tools

- [**Google AI Plus**](https://gemini.google/nl/students/): one year free for students in the Netherlands, including 400 GB of storage. Age 18+, verified through SheerID, card required, then €4.99 a month. **Redeem it before 31 December 2026.** The free Google AI Pro year is US-only
- [**Zed**](https://zed.dev/education): Zed Pro free for 12 months, with \\$10 a month in AI credits and unlimited edit predictions. Needs a GitHub account older than 30 days, a university email and age 18+
- [**Mistral Le Chat**](https://mistral.ai/pricing): Pro features, including the Vibe coding agent, for \\$5.99 a month instead of \\$14.99. Up to 12 months, only if you're a new user
- [**Perplexity Education Pro**](https://www.perplexity.ai/help-center/en/articles/12590157-what-is-education-pro): Pro at a student discount, verified through SheerID. The free year from 2025 is over
- [**ElevenLabs**](https://elevenlabs.io/students): 3 months free of the creative tools and API, plus a year of ElevenReader Ultra. Age 18+
- [**Amp**](https://ampcode.com/edu): 50% off the coding agent's paid plan
- [**Lovable**](https://lovable.dev/students): 50% off Pro for 12 months, new users only
- [**Firecrawl**](https://www.firecrawl.dev/student-program): 10,000 free scraping credits. Sign up with your VU email and use code STUDENTEDU under billing
- [**Weights & Biases**](https://docs.coreweave.com/models/support/academic_plan_student): free academic plan for non-commercial research, such as your thesis
- **JetBrains AI**: the student licence includes the free AI tier and a 30-day AI Pro trial, not AI Pro itself

Anthropic's [**Claude Campus programs**](https://claude.com/programs/campus) pay student organisers a stipend and API credits, and they're open worldwide. Applications for fall 2026 are closed, so watch the page for the next round.

---

## Dev tools

- [**Tower**](https://www.git-tower.com/students): Tower Pro free for 12 months, renewable. Non-.edu emails need a dated student ID
- [**Unity Student**](https://unity.com/products/unity-student): Unity Pro free for a year, renewable, plus an asset bundle
- [**Parallels Desktop**](https://www.parallels.com/landingpage/pd/education/): 50% off, or €38.25 on SURFspot
- [**Raycast**](https://www.raycast.com/faq): 50% off Pro for Mac users. Apply through the form
- [**Shodan**](https://help.shodan.io/the-basics/academic-upgrade): free academic upgrade with monthly query and scan credits. If your VU email isn't picked up automatically, email them

---

## Cloud, GPUs and hosting

- [**Azure for Students**](https://azure.microsoft.com/en-us/free/students/): \\$100 credit a year, no card. It also gives you free Visual Studio, SQL Server and Windows Server through the Azure Education Hub
- [**Google Skills**](https://cloud.google.com/edu/students): 200 free credits for Google Cloud labs and skill badges, valid for a year. Lecturers can also request up to \\$50 in Google Cloud credit per student for a course, so ask yours
- [**AWS Educate**](https://aws.amazon.com/education/awseducate/): free training and hands-on labs, no card. The regular [AWS Free Tier](https://aws.amazon.com/free/) now gives new accounts \\$100 in credit plus up to \\$100 more, for 6 months
- [**Kaggle**](https://www.kaggle.com/docs/notebooks): free notebooks with a P100 or two T4 GPUs, plus TPUs. The quota floats around 30 GPU hours a week. Free for everyone
- [**Modal**](https://modal.com/pricing): \\$30 a month of free GPU compute on the Starter plan. Free for everyone
- [**Oracle Cloud Always Free**](https://www.oracle.com/cloud/free/): an Arm server with 2 cores and 12 GB of RAM, free indefinitely. Free for everyone

Not student perks, but free tiers that cover side projects: [**Vercel**](https://vercel.com/pricing), [**Netlify**](https://www.netlify.com/pricing/), [**Neon**](https://neon.com/pricing) (Postgres), [**Supabase**](https://supabase.com/pricing) and [**Render**](https://render.com/docs/free). [**Let's Encrypt**](https://letsencrypt.org/) gives free SSL certificates to anyone.

---

## Learning and certifications

- [**Coursera Financial Aid**](https://www.coursera.support/s/article/learner-000001455): apply per course with a short motivation. Review takes up to 16 days and the discount depends on where you live, so it isn't always 100%. Don't start a free trial while you wait, because that cancels the application
- [**edX**](https://www.edx.org/resources/how-to-audit-an-edx-class): many courses can still be audited for free, with time-limited access and no certificate
- [**Microsoft certification exams**](https://learn.microsoft.com/en-us/credentials/certifications/student-discounts): academic pricing on exams. Set your Learn profile to student and verify
- [**SAP Learning**](https://learning.sap.com/free-student-edition): free student edition after verifying your university email
- [**IBM SkillsBuild**](https://skillsbuild.org/college-students): free AI and tech courses with shareable credentials
- [**Red Hat Developer**](https://developers.redhat.com/articles/faqs-no-cost-red-hat-enterprise-linux): free RHEL subscription for up to 16 machines. Free for everyone
- [**Codecademy**](https://www.codecademy.com/student-center): more than 35% off Pro
- [**DataCamp**](https://www.datacamp.com/pricing/student): after the 3 free months from the GitHub Pack, Premium costs €164 a year for students
- [**Hack The Box Academy**](https://help.hackthebox.com/en/articles/13465244-getting-the-student-subscription-beta): student subscription for £6 a month plus VAT. It covers Academy modules up to Tier II, not the Labs
- [**TryHackMe**](https://tryhackme.com/students): 20% off annual Premium. Set your occupation to student in your account settings
- [**HackerRank**](https://www.hackerrank.com/skills-verification): free skill certification tests in Python, SQL and problem solving
- [**Wolfram|Alpha Pro**](https://www.wolframalpha.com/pro/pricing/students): €63 a year for students

Free for everyone and good for AI students: [**Hugging Face Learn**](https://huggingface.co/learn) (LLMs, agents, diffusion, RL), [**NVIDIA Deep Learning Institute**](https://learn.nvidia.com/self-paced-courses) (some self-paced courses are free), [**Exercism**](https://exercism.org/) and [**Advent of Code**](https://adventofcode.com/) every December.

---

## Design and productivity

- [**Notion**](https://www.notion.com/help/notion-for-education): free Plus plan for a one-person workspace. Your VU email works, you reverify once a year, and Notion AI is a limited trial
- [**Figma**](https://www.figma.com/education/): free Professional plan, verified through SheerID. Renew by reapplying while you study
- [**Obsidian**](https://obsidian.md/pricing): the app is free for everyone. Students get 40% off Sync and Publish
- [**Lucid**](https://help.lucid.co/hc/en-us/articles/360049831771): free Lucidchart and Lucidspark education account with your school email
- [**Airtable**](https://support.airtable.com/docs/nonprofit-and-educational-plans-faqs): free Team plan for 6-24 months depending on your graduation date. Non-.edu emails are accepted
- [**Asana**](https://asana.com/students): Starter plan free for 12 months. Card required, and it starts charging after the year
- [**Craft**](https://www.craft.do/education): free education plan, renewed yearly
- [**Framer**](https://www.framer.com/education/students/): free site plan for a year
- [**Sketch**](https://www.sketch.com/support/education/): free education workspace and Mac app for a year
- [**Autodesk**](https://www.autodesk.com/education/edu-software/overview): free one-year licences for Fusion, AutoCAD and more, renewable
- **Adobe Creative Cloud**: buy it on [**SURFspot**](https://www.surfspot.nl/) for €165 a year. [Adobe's own student price](https://www.adobe.com/nl/creativecloud/buy/students.html) is €19.66 a month in year one and €40.66 after that
- [**Apple Creator Studio**](https://creatorstudio.apple.com/info/student): Final Cut Pro, Logic Pro, Pixelmator Pro and more for €2.99 a month or €29.99 a year. It replaced the old Pro Apps Bundle
- [**Loom**](https://support.atlassian.com/loom/docs/loom-education-discount-verification/): up to 50% off paid plans. The free education plan is gone
- [**Readwise**](https://readwise.io/pricing): 50% off. Email them before you subscribe

Free for everyone: [**Blender**](https://www.blender.org/), [**Affinity**](https://www.affinity.studio/) (now one free app), [**DaVinci Resolve**](https://www.blackmagicdesign.com/products/davinciresolve), [**Zotero**](https://www.zotero.org/), [**draw.io**](https://www.drawio.com/) and [**Excalidraw**](https://excalidraw.com/).

---

## Music and streaming

- [**Spotify Premium Student**](https://www.spotify.com/nl/student/): €6.99 a month, first month free if you've never had Premium. Up to 4 years, reverified every 12 months
- [**Apple Music Student**](https://www.apple.com/nl/apple-music/): €6.99 a month, with Apple TV included at no extra cost
- [**YouTube Premium Student**](https://www.youtube.com/premium/student): €10.99 a month instead of €15.99
- [**Deezer Student**](https://www.deezer.com/nl/offers/student): €5.99 a month, ages 18-25

Netflix, Videoland and HBO Max have no student plans in the Netherlands. Amazon Prime Student doesn't exist on amazon.nl either.

---

## Laptops and hardware

- [**Apple Education Store**](https://www.apple.com/nl-edu/store): education prices on Macs and iPads, plus up to 10% off AppleCare+. Apple runs extra back-to-school deals in summer
- [**Microsoft Store**](https://www.microsoft.com/nl-nl/store/b/student): up to 10% off selected Surface devices
- [**Dell**](https://www.dell.com/nl-nl/shop/member/lp/students): an extra 10% off through SheerID
- [**Lenovo**](https://www.lenovo.com/nl/nl/studentenkorting/): at least 10% off laptops and 20% off accessories
- [**HP**](https://www.hp.com/nl-nl/shop/studentstore): up to 25% off through the student store
- [**Samsung**](https://www.samsung.com/nl/studenten-korting/): up to 15% off. It checks your email domain, and some students report Dutch domains being rejected
- [**SURFspot**](https://www.surfspot.nl/): the Dutch student software shop. Log in with your VU account for Windows, Office, Adobe, antivirus and more

---

## Dutch student deals

### News

- [**De Volkskrant, Trouw, Het Parool and AD**](https://abonnement.volkskrant.nl/studenten): a **free** digital subscription for students aged 16-25 through DPG Media. Log in with your institution account. One subscription covers all their titles

### Film

- [**Rialto VU Griffioen**](https://www.griffioen.vu.nl/en/student): the cinema on campus. €6.50 a ticket with your VU student card
- [**Kinepolis Student Card**](https://kinepolis.nl/content/kinepolis-student-card/): free card for 25% off tickets and snacks, plus a birthday ticket
- [**Pathé Student Day**](https://www.pathe.nl/en/info/student-day): €9 tickets on Mondays with a student or CJP card
- [**Cineville**](https://cineville.nl/en-GB/cineville-card): unlimited films at 80+ art-house cinemas for €19 a month if you're under 30
- **LAB111, FilmHallen and The Movies**: €9-9.50 student tickets at the box office. [**Eye Filmmuseum**](https://www.eyefilm.nl/plan-je-bezoek) charges students €12.50

### Culture

- [**CJP**](https://www.cjp.nl/): culture card for ages 12-30, €10 for the first year. Gets you discounts at cinemas, museums, theatres and festivals
- [**Museumkaart**](https://www.museumkaart.nl/): €75 a year for 400+ museums. No student price, but it pays for itself after three or four visits
- [**Concertgebouw**](https://www.concertgebouw.nl/en/tickets/discounts): under 30s get €11 or €18 tickets online from four hours before a concert
- [**Dutch National Opera & Ballet**](https://operaballet.nl/en/youth-students): €20 student tickets
- [**ITA**](https://ita.nl/en/discounts-memberships): student tickets for €17.50-25
- [**Griffioen**](https://www.griffioen.vu.nl/en/student): VU's own culture centre. €7.50 student shows and courses at more than half off
- [**Stedelijk Museum**](https://www.stedelijk.nl/en/visit): €12.50 with a student or CJP card instead of €22.50

### Sport

- [**Sportcentrum VU**](https://sportcentrumvu.nl/abonnementen/): student rate of €262.50 a year (€160 off-peak) or €44 for one month. Open to students from any Dutch university or hogeschool
- [**USC**](https://www.uscsport.nl/over-usc/tarievenoverzicht/): the UvA sports centre also takes VU students at the student rate. Fitness from €21.50 a month on a yearly contract

### Getting around

- [**Studentenreisproduct**](https://www.studentenreisproduct.nl/): free public transport on weekdays or weekends if you get Dutch student finance. It includes 40% off-peak discount for up to three people travelling with you, and a free year of Dal Voordeel after it ends
- [**Swapfiets**](https://swapfiets.nl/en-NL/students): Original bike for €13.70 a month instead of €15.70
- [**Interrail**](https://www.interrail.eu/en/interrail-passes/deals/interrail-youth-discounts): 25% off passes if you're 27 or younger
- [**KLM**](https://www.klm.nl/information/ticket-services/tickets-students): student fares with an extra 23 kg checked bag and cheaper changes

### Money and phone

- [**bunq**](https://www.bunq.com/students): bunq Pro free while you study, normally €9.99 a month
- [**ING**](https://www.ing.nl/): free student account for ages 18-30
- [**Ben**](https://www.ben.nl/student): student SIM-only deal with no connection fee and extra data

### Discount platforms

- [**UNiDAYS**](https://www.myunidays.com/NL/nl-NL) and [**Student Beans**](https://www.studentbeans.com/nl): both run Dutch sites. Expect 10-25% at brands like ASOS, Nike, Levi's, Gymshark, adidas, HP and Lenovo. Check both before you buy clothes or tech online
- [**Studentenkorting.nl**](https://www.studentenkorting.nl/): Dutch aggregator of student deals and codes
- [**ISIC**](https://www.isic.nl/): international student card for €12. Mostly useful abroad, where a Dutch student card isn't always accepted

---

## Removed since the March version

These were on the old list and are now gone, or never worked for Dutch students:

- **Cursor Pro free year**: closed to new sign-ups in June 2026
- **Free Copilot Pro**: replaced by Copilot Student (see above)
- **DigitalOcean, Replit, Vercel, Netlify and Cloudflare via the GitHub Pack**: no longer in the pack. Cloudflare's own student offer is US-only
- **JetBrains Space**: shut down in 2025
- **Railway, Todoist, ClickUp and Pluralsight student plans**: none of them has one
- **Intel developer cloud credits**: the free tier is gone
- **OpenAI credits and ChatGPT Plus for students**: only for students in the US and Canada
- **Amazon Prime Student**: not offered in the Netherlands
- **Miro Education**: not accepting new applications since October 2026
- **Linear and Slack**: only for student clubs or school workspaces, not individuals
- **Grammarly, LinkedIn Learning and Canva**: these only come free through a university licence, and I found no VU licence for any of them. Canva Pro is sold on SURFspot
- **Meta Blueprint**: the courses are free, but the certification exams cost money
- **LeetCode**: a group deal that needs 50 students from one school, and it says "coming soon"
- **Google Developer Student Clubs**: there's no active chapter at VU
- **Postman Student Expert**: no longer on Postman's student page

Also not available to us: Kiro and v0 (free only at listed universities, none of them Dutch) and Colab Pro (US-only).

---

## Where to start

1. **Apply for the GitHub Student Developer Pack.** It takes ten minutes and unlocks most of the dev tools.
2. **Claim Google AI Plus before 31 December 2026.**
3. **Set up JetBrains and Zed.** You'll use an editor every day.
4. **Activate Azure for Students** for cloud projects, and use Kaggle or Modal when you need a GPU.
5. **Get the free DPG newspaper subscription and a CJP card.** Both cost next to nothing and pay off fast.
6. **Switch Spotify or Apple Music to the student plan** and pick up a free Kinepolis Student Card.
7. **Check SURFspot, UNiDAYS and Student Beans** before you buy any software or hardware.`,
    tags: ['free-stuff', 'student-discounts', 'tools', 'productivity', 'cloud', 'ai'],
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
