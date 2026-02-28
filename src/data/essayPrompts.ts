import type { EssayPrompt } from '../types';

export const essayPrompts: EssayPrompt[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // CATEGORY A: LECTURE-BASED QUESTIONS (5 prompts)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'hai-essay-a1',
    courseId: 'history-of-ai',
    category: 'A',
    topic: 'Prehistory of AI and the Three Traditions',
    prompt:
      'During the lectures, a "prehistory of AI" was compared to a "prehistory of computing." Both fields draw on earlier traditions that predate the electronic computer. Identify the three traditions that converged around 1950 to give rise to automatic computing, and explain how each of these traditions also contributed to early ideas about artificial intelligence. Use specific historical examples to illustrate your argument.',
    guidance:
      '- Identify the three traditions: data processing (punch cards, tabulators), process control, and scientific computing\n- Explain how each tradition relied on "schemas" or pre-set instructions, foreshadowing programming\n- Connect the universal language ideal (Leibniz, late 19th century) to attempts to formalize thought\n- Discuss how cybernetics (post-WWII) bridged learning machines and computing\n- Mention the 1951 Paris conference as evidence that AI was a driving force in early computer development\n- Reference specific figures such as Babbage, Hollerith, or Wiener\n- Show that AI and computing share overlapping origin stories, not separate ones',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-a2',
    courseId: 'history-of-ai',
    category: 'A',
    topic: 'AI and Education',
    prompt:
      'In the 1960s and 1970s, AI was made instrumental in education. Elaborate on two specific examples. To what extent was the 1950s/60s hype of programmed instruction instrumental in the visibility of AI, and how does it compare to the 1970s/80s hype surrounding LOGO?',
    guidance:
      '- Describe programmed instruction (Skinner-style teaching machines) and its behaviourist foundations\n- Explain Seymour Papert\'s LOGO language and its constructivist philosophy\n- Contrast the two approaches: drill-based repetition vs. creative exploration\n- Discuss how each movement raised public awareness and expectations of AI\n- Note that programmed instruction promised to replace teachers, while LOGO aimed to empower learners\n- Mention the role of funding (government, military) in sustaining these educational AI projects\n- Reflect on whether these projects delivered on their promises or contributed to disillusionment',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-a3',
    courseId: 'history-of-ai',
    category: 'A',
    topic: 'Game Culture and AI Research',
    prompt:
      'Discuss in what ways PC game culture and AI research interacted with each other in a mutually beneficial way. In your essay, address how games served as both testbeds for AI techniques and as cultural products that shaped popular understanding of artificial intelligence.',
    guidance:
      '- Explain how games provided bounded, rule-based environments ideal for testing AI algorithms\n- Discuss specific examples such as chess-playing programs and their role in AI research\n- Describe how the personal computer revolution of the 1980s created a commercial games industry\n- Show how game AI (pathfinding, decision trees, opponent modelling) fed back into academic research\n- Discuss how games shaped public perceptions of what AI can do\n- Mention the cultural significance of events like Deep Blue vs. Kasparov\n- Note the feedback loop: AI advances made better games, and game development drove AI innovation',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-a4',
    courseId: 'history-of-ai',
    category: 'A',
    topic: 'Surveillance Capitalism, Data, and AI',
    prompt:
      'The rise of AI in the early 21st century was intrinsically intertwined with the rise of data collecting as part of surveillance capitalism. Explain the line of thought. In your answer, discuss how Web 2.0 created the conditions for modern AI and reference the critical perspectives of scholars such as Cathy O\'Neil or Timnit Gebru.',
    guidance:
      '- Define surveillance capitalism and explain how user data became the raw material for AI systems\n- Describe the role of Web 2.0 (user-generated content, social media, always-on connectivity) in producing massive datasets\n- Explain how Google\'s business model exemplifies the link between data collection and AI development\n- Discuss Cathy O\'Neil\'s critique of "weapons of math destruction" and algorithmic bias\n- Reference Timnit Gebru\'s "stochastic parrots" paper and concerns about large language models\n- Show how the availability of big data enabled machine learning breakthroughs (deep learning, neural networks)\n- Reflect on the ethical tensions between AI progress and privacy/fairness',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-a5',
    courseId: 'history-of-ai',
    category: 'A',
    topic: 'Science Fiction and Popular Views of Computing',
    prompt:
      'In the 1960s and 1970s, science fiction novels and movies were instrumental in shaping the popular view on computing and AI -- more so than the machines that existed in reality. Explain that remark. Discuss specific examples and elaborate on why fictional representations were more influential than actual technology in forming public attitudes.',
    guidance:
      '- Provide specific examples of influential science fiction works (e.g., 2001: A Space Odyssey, Colossus: The Forbin Project, or similar)\n- Explain that real computers of the era were room-sized, inaccessible machines most people never encountered\n- Show how science fiction presented AI as human-like, intelligent, and sometimes threatening\n- Discuss how these portrayals created expectations that real AI researchers then had to contend with\n- Note the gap between what AI could actually do and what the public believed it could do\n- Explain how blockbuster movies of the 1980s-1990s further embedded computers into ordinary cultural life\n- Reflect on whether science fiction helped or hindered public understanding of AI',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-a6',
    courseId: 'history-of-ai',
    category: 'A',
    topic: 'Web 2.0 and the Rise of Modern AI',
    prompt:
      'To what extent did the rise of Web 2.0 influence the rise of AI? In your essay, explain what distinguished Web 2.0 from earlier internet technologies and how this transformation created the technical and economic conditions for the current era of artificial intelligence.',
    guidance:
      '- Define Web 2.0 and its key characteristics (user-generated content, platform economy, social networking)\n- Explain how Web 2.0 generated unprecedented volumes of data suitable for training AI models\n- Discuss the business models that emerged (advertising, recommendation systems) and their reliance on AI\n- Reference specific companies (Google, Netflix, Facebook) and how they used AI on Web 2.0 data\n- Explain how cloud computing infrastructure, developed for Web 2.0, also enabled large-scale AI training\n- Discuss the shift from expert systems to data-driven machine learning approaches\n- Note how Web 2.0 made AI invisible yet ubiquitous in everyday life (search, feeds, recommendations)',
    wordCountHint: '200-400 words',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CATEGORY B: CAMPBELL-KELLY TEXTBOOK QUESTIONS (6 prompts)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'hai-essay-b1',
    courseId: 'history-of-ai',
    category: 'B',
    topic: 'EDVAC and the Birth of Modern Computing',
    prompt:
      'To what extent does Campbell-Kelly claim that the modern computer rose with the machines of "type EDVAC"? In your answer, discuss the stored-program concept, the roles of the key individuals involved, and why the EDVAC design became the template for subsequent computers.',
    guidance:
      '- Explain the stored-program concept: instructions and data stored in the same memory\n- Describe the ENIAC\'s shortcomings (too little storage, too many tubes, lengthy reprogramming) that motivated EDVAC\n- Discuss von Neumann\'s "First Draft of a Report on the EDVAC" (1945) and the five functional parts of the architecture\n- Explain the tension between von Neumann/Goldstine (public domain) and Eckert/Mauchly (commercial)\n- Mention Maurice Wilkes and the EDSAC (1949) as the first practical stored-program computer\n- Note the Manchester "baby machine" (1948) as the first stored-program computer to operate\n- Explain why the EDVAC design, not the ENIAC design, became the basis for all subsequent computers',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-b2',
    courseId: 'history-of-ai',
    category: 'B',
    topic: 'IBM\'s Rise and the IBM 1401',
    prompt:
      'Campbell-Kelly discusses the rise of IBM in the computer industry with the phrase "Watson was rational but wrong, while Eckert and Mauchly were irrational but right." Explain that phrase in context, and then describe how the IBM 1401 exemplified IBM\'s strategy of combining good technology with great marketing to dominate the industry.',
    guidance:
      '- Explain Watson\'s "rational" decision to build the Defense Calculator for scientific computing, missing the data-processing market\n- Explain why Eckert and Mauchly were "irrational" (underpriced UNIVAC, nearly went bankrupt) but "right" about commercial data processing\n- Describe IBM\'s "evolution not revolution" approach to incorporating electronics\n- Discuss the IBM 1401: transistors, core memory, revolutionary high-speed printer\n- Explain why IBM earned the nickname "Big Blue" and why it was considered sinister\n- Note that IBM expected to sell 1,000 units but delivered 12,000\n- Discuss how IBM\'s sales organization and total-system approach outperformed competitors',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-b3',
    courseId: 'history-of-ai',
    category: 'B',
    topic: 'Real-Time Computing and Project Whirlwind',
    prompt:
      'Campbell-Kelly discusses the rise of real-time computing as a military experiment that almost did not happen and was not offering the safety it was supposed to create. Explain his line of thought, discussing Project Whirlwind, the SAGE air-defense system, and the broader significance of real-time computing for the computer industry.',
    guidance:
      '- Describe Project Whirlwind\'s origins as a flight simulator at MIT and its pivot to real-time computing\n- Explain the role of Jay Forrester and his insistence on the digital path despite cost escalation\n- Discuss Perry Crawford\'s role in saving the project (connecting it to air defense needs)\n- Explain the two reasons Whirlwind was expensive: speed requirements and reliability engineering\n- Describe SAGE and IBM\'s involvement (half a billion dollars of income, 20% of workforce)\n- Note the irony: SAGE was designed for air defense but was largely obsolete by the time of ICBMs\n- Explain the lasting legacy: IBM gained expertise in processor technology, mass storage, and real-time systems',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-b4',
    courseId: 'history-of-ai',
    category: 'B',
    topic: 'The Software Crisis',
    prompt:
      'To what extent was the late 1960s software crisis a real crisis? Discuss at least two stakeholders in the situation and explain their points of view. In your answer, reference OS/360 as an exemplar and discuss the 1968 NATO conference in Garmisch.',
    guidance:
      '- Define the software crisis: growing complexity outpacing the ability to write reliable software on time and on budget\n- Discuss OS/360 as a prime example of a project plagued by delays, bugs, and cost overruns\n- Present the perspective of industry managers who faced real cost and schedule problems\n- Present the perspective of academics who used the "crisis" label to gain professional authority and shape the IT agenda\n- Mention the 1968 NATO conference in Garmisch where the term "software engineering" was coined (F.L. Bauer)\n- Discuss the lecture perspective: academics strategically framed it as a crisis to capture the agenda\n- Note the consequences: structured programming, the rise of packaged software, IBM\'s unbundling decision',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-b5',
    courseId: 'history-of-ai',
    category: 'B',
    topic: 'Personal Computers and Broadening the Appeal',
    prompt:
      'Campbell-Kelly suggests that personal computers became of interest because of a successful blend of two cultures, most outspokenly present in California. Explain his narrative, identifying which cultures he refers to, and then discuss how the personal computer industry in the 1980s "broadened the appeal" of computers. Mention the main firms relevant to your argument.',
    guidance:
      '- Identify the two cultures: the computer hobbyist/hacker culture and the counterculture/computer liberation movement\n- Discuss the role of The Whole Earth Catalogue and Stewart Brand\'s "New Communalists"\n- Mention key figures and firms: Altair 8800 (MITS), Bill Gates and Paul Allen (Microsoft), Wozniak and Jobs (Apple)\n- Explain the three markets for software applications: games, education, and business\n- Discuss VisiCalc as the "killer app" that made personal computers essential for business\n- Describe how IBM entered the PC market and how Microsoft\'s MS-DOS became dominant\n- Discuss the GUI revolution: Apple Macintosh, Digital Research\'s GEM, and Microsoft Windows\n- Note unsuccessful companies (e.g., Digital Research with GEM) and why their histories still matter',
    wordCountHint: '200-400 words',
  },
  {
    id: 'hai-essay-b6',
    courseId: 'history-of-ai',
    category: 'B',
    topic: 'The Internet and Computing Governance',
    prompt:
      'Campbell-Kelly discusses the rise of the Internet as the "confluence of three desires." Which desires does he refer to, and how do these together explain the rise of the Internet? Additionally, discuss how 21st-century computing became an ethical liability that had to be mitigated by governments, elaborating on at least one specific example of regulation.',
    guidance:
      '- Identify the three desires: scientific resource sharing, personal communication (e-mail), and information retrieval (hypertext/web)\n- Trace the development from ARPANET (1963, packet switching) through TCP/IP to the commercial internet\n- Discuss the role of Tim Berners-Lee and the World Wide Web proposal (1989)\n- Mention the browser wars: Mosaic, Netscape, Internet Explorer\n- Transition to governance: discuss privacy concerns, surveillance capitalism, or platform monopolies\n- Compare US and European approaches to regulation (e.g., GDPR vs. American self-regulation)\n- Reference Campbell-Kelly\'s final chapter on computing and governance as an ongoing challenge',
    wordCountHint: '200-400 words',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CATEGORY C: INTEGRATION QUESTIONS (6 prompts)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'hai-essay-c1',
    courseId: 'history-of-ai',
    category: 'C',
    topic: 'Appropriation in Computing and AI History',
    prompt:
      'The traditional history of computing makes use of the concept of "appropriation." To what extent does that concept also apply to a history of AI? In your essay, define appropriation, provide examples from both the history of computing and the history of AI, and explain why the concept is analytically useful for understanding how technologies change meaning over time.',
    guidance:
      '- Define appropriation: the process by which users take a technology and give it new, unintended meanings and uses\n- Provide computing examples: hackers repurposing mainframes, the personal computer movement, squatting/hacking culture\n- Provide AI examples: how AI techniques developed for one purpose were appropriated for entirely different applications\n- Discuss how digital culture emerged through users appropriating computing technology (internet, social media)\n- Explain the shift from producer-defined to user-defined technology\n- Reference both Campbell-Kelly\'s narrative and the lecture material to show how appropriation operates across both histories\n- Reflect on whether AI is currently being "appropriated" by new user communities in ways its creators did not foresee',
    wordCountHint: '300-500 words',
  },
  {
    id: 'hai-essay-c2',
    courseId: 'history-of-ai',
    category: 'C',
    topic: 'Agendas as an Analytical Framework',
    prompt:
      'To what extent are histories used to further agendas? In your essay, explain the concept of "agendas" as it was used in the lectures, and demonstrate its analytical value by applying it to at least two episodes from either the history of computing or the history of AI. Draw on both the book and the lectures.',
    guidance:
      '- Define "agendas" as the goals, interests, and motivations that shape how historical narratives are constructed and deployed\n- Discuss Aiken using the Babbage narrative to secure funding for the Harvard Mark I as a classic example\n- Analyze the AI winters narrative: how periods of reduced funding were framed to serve particular agendas\n- Consider how Pamela McCorduck\'s optimistic history of AI served the agenda of the AI community\n- Discuss the software crisis as an example of academics using a crisis narrative to capture professional authority\n- Draw on Campbell-Kelly\'s textbook for the computing side and lecture material for the AI side\n- Reflect on what this tells us about the reliability and purpose of historical narratives in science and technology',
    wordCountHint: '300-500 words',
  },
  {
    id: 'hai-essay-c3',
    courseId: 'history-of-ai',
    category: 'C',
    topic: 'Cybernetics as a Defining Technology',
    prompt:
      'Discuss two examples of cybernetics as a "defining technology" in Bolter\'s sense. You may choose examples from the 1950s, 1960s, or the 21st century. In your essay, explain what Bolter means by "defining technology" and show how cybernetics (or AI) functioned as one, drawing on both the lectures and Campbell-Kelly\'s textbook.',
    guidance:
      '- Define Bolter\'s concept of "defining technology": a technology that serves as a metaphor through which a society understands itself\n- Explain how cybernetics in the 1950s-60s became a lens for understanding humans, society, and machines as information-processing systems\n- Provide a first example: e.g., cybernetics influencing education (teaching machines, programmed instruction)\n- Provide a second example: e.g., cybernetics influencing management theory (Management Information Systems) or AI influencing how we think about intelligence\n- For a 21st-century example, discuss how AI/algorithms now serve as the defining technology (algorithmic decision-making shaping society)\n- Draw on Campbell-Kelly for the institutional/industrial context and lectures for the conceptual analysis\n- Explain why the concept of defining technology is useful for understanding both computing and AI history',
    wordCountHint: '300-500 words',
  },
  {
    id: 'hai-essay-c4',
    courseId: 'history-of-ai',
    category: 'C',
    topic: 'AI Winters and Historical Narratives of Failure',
    prompt:
      'Compare the narrative of the AI winters to the narrative of Babbage that Aiken used to obtain funding at Harvard for building the Mark I computer. In your essay, use the concept of "agendas" to analyze how historical narratives of failure and unfulfilled promise have been strategically deployed in the history of computing and AI.',
    guidance:
      '- Describe the AI winters: periods (1970s, late 1980s) when funding and interest in AI dramatically declined after overpromising\n- Describe how Aiken invoked Babbage\'s failed Analytical Engine as a visionary precursor to justify building the Mark I\n- Explain how both narratives serve agendas: Aiken used Babbage to legitimize his project; AI researchers used the winters narrative to frame their field as cyclical rather than failed\n- Discuss the role of funding bodies (military, government) in both stories\n- Analyze how the "ahead of his time" narrative (Babbage) parallels the "the hardware wasn\'t ready yet" narrative in AI\n- Draw on Campbell-Kelly\'s account of the Harvard Mark I and lecture material on AI winters\n- Reflect on what these parallels reveal about how technological communities use history strategically',
    wordCountHint: '300-500 words',
  },
  {
    id: 'hai-essay-c5',
    courseId: 'history-of-ai',
    category: 'C',
    topic: 'Digital Culture and Data-Driven Society',
    prompt:
      'To what extent is "digital culture" or "data-driven culture" a suitable way of describing twenty-first-century culture? In your essay, draw on both Campbell-Kelly\'s account of the globalizing, networked computer industry and the lecture material on AI, surveillance capitalism, and the role of data in modern life.',
    guidance:
      '- Define what "digital culture" and "data-driven culture" mean and whether there is a meaningful distinction\n- Discuss how the personal computer, the internet, and mobile devices made computing ubiquitous\n- Explain how Web 2.0 and social media turned users into data producers\n- Reference Campbell-Kelly on Google, Netflix, and the platform economy\n- Discuss the lecture material on surveillance capitalism, Cathy O\'Neil, and algorithmic bias\n- Consider Sherry Turkle\'s contributions to understanding how digital technology reshapes identity and social life\n- Evaluate the limits of the term: does "digital culture" accurately capture the role of AI and data, or does it obscure important distinctions?',
    wordCountHint: '300-500 words',
  },
  {
    id: 'hai-essay-c6',
    courseId: 'history-of-ai',
    category: 'C',
    topic: 'Gender and Diversity in Computing and AI History',
    prompt:
      'Histories of computing and histories of AI are dominated by accounts of caucasian males. Provide two examples that help contradict that prejudice and that help explain how this one-sided narrative came into existence. Draw on both the book by Campbell-Kelly and the lectures to construct your argument.',
    guidance:
      '- Acknowledge that the standard narrative centres on figures like Turing, von Neumann, Jobs, and Gates\n- Provide a first counter-example: e.g., Grace Hopper\'s contributions to programming and compiling, or Ada Lovelace\'s foundational work\n- Provide a second counter-example: e.g., the women computers at Moore School/BRL, or Timnit Gebru\'s work on AI ethics\n- Explain how the narrative became male-dominated: historiographical choices, who writes history, which contributions are valued\n- Reference Campbell-Kelly\'s discussion of diversity and inclusion in the globalizing computer industry (2010s)\n- Discuss the lecture material on how the field\'s self-image was constructed\n- Reflect on what a more inclusive history of AI and computing would look like and why it matters',
    wordCountHint: '300-500 words',
  },
];
