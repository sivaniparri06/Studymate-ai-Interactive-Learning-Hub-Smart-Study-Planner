import { Course } from '../../types';

export const careerSkillsCourses: Course[] = [
  {
    id: 'dsa',
    title: 'Data Structures and Algorithms',
    category: 'Career and Professional Skills',
    summary: 'Master algorithmic problem solving: Big-O analysis, linked lists, trees, graphs, dynamic programming, and competitive coding patterns.',
    skillLevel: 'Intermediate',
    totalDurationHours: 50,
    relatedCareers: ['Software Developer', 'Full Stack Developer', 'AI/ML Engineer'],
    tags: ['DSA', 'Algorithms', 'Big-O', 'LeetCode', 'Dynamic Programming', 'Graphs'],
    learningObjectives: [
      'Analyze time and space complexity with Big-O notation across best, average, and worst cases',
      'Master fundamental data structures: Arrays, Hash Maps, Linked Lists, Stacks, Queues, Heaps, and Trees',
      'Implement graph traversal algorithms: Breadth-First Search (BFS), Depth-First Search (DFS), and Dijkstra’s algorithm',
      'Solve complex optimization problems using Dynamic Programming (memoization and tabulation)',
      'Apply algorithmic patterns: Two Pointers, Sliding Window, Monotonic Stack, and Binary Search'
    ],
    modules: [
      {
        id: 'dsa-mod-1',
        title: 'Complexity Analysis & Algorithmic Patterns',
        level: 'Beginner',
        estimatedMinutes: 80,
        overview: 'Big-O math, Two Pointers, Sliding Window, and Binary Search boundary conditions.',
        topics: ['Asymptotic Complexity: Big-O, Big-Omega, Big-Theta', 'Two Pointers Pattern (Left/Right Convergence & Fast/Slow)', 'Sliding Window (Fixed vs Dynamic Window Expansion)', 'Binary Search on Value Space (Predicates and Invariants)'],
        stepByStepExplanation: 'Algorithms turn O(N^2) brute-force solutions into O(N) or O(N log N) by eliminating redundant recalculation. The Sliding Window technique maintains state across a contiguous subarray by adding the incoming right element and evicting the left element as constraints demand.',
        handsOnExercise: {
          title: 'Implement Longest Substring Without Repeating Characters',
          instructions: 'Solve the classic sliding window problem in O(N) time using a hash map to track the last seen index of each character.',
          taskSnippet: 'function lengthOfLongestSubstring(s: string): number {\n  const seen = new Map<string, number>();\n  let left = 0, maxLen = 0;\n  // expand right and contract left\n}',
          solutionTip: 'When a duplicate character is found at index i, jump left directly to seen.get(char) + 1 to avoid step-by-step increments.'
        },
        practicalProject: {
          title: 'High-Throughput Financial Order Matching Engine',
          objective: 'Build an in-memory limit order book matching bids and asks in O(1) best-case using hash maps and balanced binary trees.',
          deliverable: 'TypeScript/Java repository with automated benchmark tests verifying O(log N) order insertion.'
        },
        learningResources: [
          { title: 'NeetCode 150 Algorithmic Roadmap', type: 'guide', url: 'https://neetcode.io/' },
          { title: 'Big-O Cheat Sheet', type: 'doc', url: 'https://www.bigocheatsheet.com/' }
        ]
      },
      {
        id: 'dsa-mod-2',
        title: 'Trees, Heaps & Graph Traversal Algorithms',
        level: 'Intermediate',
        estimatedMinutes: 95,
        overview: 'Binary Search Trees, Min/Max Heaps, Topological Sort, and BFS/DFS on directed graphs.',
        topics: ['Binary Tree Inversion & Level-Order Traversal (BFS)', 'Min-Heap Priority Queues & Top-K Elements Pattern', 'Depth-First Search (DFS) & Backtracking Permutations', 'Topological Sorting & Cycle Detection (Kahn’s Algorithm)'],
        stepByStepExplanation: 'Graphs represent interconnected entities. BFS explores neighbors radially layer by layer using a FIFO queue, ideal for finding the shortest path in unweighted networks. Topological sort uses in-degree counters to order dependency graphs (like package build order).',
        handsOnExercise: {
          title: 'Detect Course Schedule Cycles with Kahn’s Algorithm',
          instructions: 'Given course prerequisites as directed edges, determine if all courses can be completed by computing in-degrees and running BFS.',
          taskSnippet: 'const inDegree = new Array(numCourses).fill(0);\n// count incoming edges and enqueue 0 in-degree nodes',
          solutionTip: 'If the total processed nodes in BFS is less than numCourses, a cycle exists, making completion impossible.'
        },
        practicalProject: {
          title: 'Social Network Shortest Path & Degree of Separation Engine',
          objective: 'Build a graph engine that models 10,000 user connections and finds the shortest relationship path between any two individuals in sub-10ms.',
          deliverable: 'Tested graph algorithm library with adjacency list implementation.'
        },
        learningResources: [
          { title: 'Visualgo: Visualising Data Structures and Algorithms', type: 'guide', url: 'https://visualgo.net/' },
          { title: 'Introduction to Algorithms (CLRS)', type: 'doc', url: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/' }
        ]
      },
      {
        id: 'dsa-mod-3',
        title: 'Dynamic Programming & Advanced Optimization',
        level: 'Advanced',
        estimatedMinutes: 120,
        overview: 'Optimal substructure, overlapping subproblems, top-down memoization, and bottom-up tabulation.',
        topics: ['Top-Down Memoization vs Bottom-Up Tabulation', '1D DP: Climbing Stairs, House Robber, Coin Change', '2D DP: Longest Common Subsequence & Edit Distance', 'State Compression DP & Bitmasking'],
        stepByStepExplanation: 'Dynamic Programming solves optimization problems by breaking them into overlapping subproblems and caching intermediate results. Identify the recurrence relation: how the solution to size N depends on size N-1 or N-2, and store computed states in an array or hash table.',
        handsOnExercise: {
          title: 'Solve Coin Change with Bottom-Up Tabulation',
          instructions: 'Compute the minimum coins required to make up an amount given coin denominations using an array dp initialized to Infinity.',
          taskSnippet: 'const dp = new Array(amount + 1).fill(Infinity);\ndp[0] = 0;\nfor (let i = 1; i <= amount; i++) {\n  for (const c of coins) if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n}',
          solutionTip: 'Initialize dp[0] = 0 as your base case and return dp[amount] === Infinity ? -1 : dp[amount].'
        },
        practicalProject: {
          title: 'Algorithmic Route Logistics Optimizer',
          objective: 'Solve a constrained traveling delivery route using dynamic programming and bitmask state representation to minimize travel time.',
          deliverable: 'Optimized algorithm module with benchmark comparison against greedy approaches.'
        },
        learningResources: [
          { title: 'LeetCode: Explore Dynamic Programming', type: 'doc', url: 'https://leetcode.com/explore/learn/card/dynamic-programming/' },
          { title: 'Errichto: Dynamic Programming Tutorials', type: 'guide', url: 'https://www.youtube.com/@Errichto' }
        ]
      }
    ],
    quiz: {
      id: 'dsa-quiz',
      title: 'Data Structures & Algorithms Assessment',
      description: 'Evaluate your knowledge of Big-O complexity, graph traversals, and dynamic programming.',
      passingScore: 70,
      questions: [
        {
          id: 'dsa-q1',
          question: 'What is the average time complexity of looking up a key in an optimized Hash Map?',
          options: ['O(N)', 'O(1)', 'O(log N)', 'O(N^2)'],
          correctAnswerIndex: 1,
          explanation: 'Hash maps provide constant time O(1) average lookup using hash function indexing.'
        },
        {
          id: 'dsa-q2',
          question: 'Which algorithm is guaranteed to find the shortest path in an unweighted graph?',
          options: ['Depth-First Search (DFS)', 'Breadth-First Search (BFS)', 'Binary Search', 'Bubble Sort'],
          correctAnswerIndex: 1,
          explanation: 'BFS explores nodes layer by layer, guaranteeing the minimum edge path in unweighted graphs.'
        },
        {
          id: 'dsa-q3',
          question: 'What are the two mandatory properties a problem must possess to be solvable using Dynamic Programming?',
          options: ['Sorting and Hashing', 'Optimal Substructure and Overlapping Subproblems', 'Recursion and Arrays', 'Memory and Disk'],
          correctAnswerIndex: 1,
          explanation: 'DP applies when a problem has optimal substructure (optimal solution built from subproblems) and overlapping subproblems.'
        }
      ]
    }
  },
  {
    id: 'aptitude-logical-reasoning',
    title: 'Aptitude and Logical Reasoning',
    category: 'Career and Professional Skills',
    summary: 'Quantitative math, percentages, speed-distance-time, permutations, syllogisms, pattern recognition, and competitive aptitude exam strategies.',
    skillLevel: 'Beginner',
    totalDurationHours: 30,
    relatedCareers: ['Software Developer', 'Data Analyst'],
    tags: ['Aptitude', 'Mental Math', 'Logical Reasoning', 'Puzzles', 'Exam Prep'],
    learningObjectives: [
      'Solve mental math problems quickly using Vedic shortcuts, ratios, and percentage conversions',
      'Master quantitative topics: Work & Time, Speed-Time-Distance, Probability, and Permutations',
      'Solve logical deduction puzzles: Seating Arrangements, Blood Relations, and Syllogisms',
      'Decode sequence patterns, analogies, and coding-decoding puzzles under strict exam time limits',
      'Develop systematic time management strategies for company placement and competitive tests'
    ],
    modules: [
      {
        id: 'alr-mod-1',
        title: 'Quantitative Foundations: Ratios, Percentages & Time-Work',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Percentage-to-fraction conversions, unitary method, Work & Wages, and Pipes & Cisterns.',
        topics: ['Fraction to Percentage Equivalents (1/6 = 16.67%, 1/8 = 12.5%)', 'Successive Percentage Changes Formula (a + b + ab/100)', 'Work and Time: The Total Units Method (LCM Approach)', 'Speed, Distance, and Relative Speed (Trains and Streams)'],
        stepByStepExplanation: 'Instead of solving Work & Time with fractions like 1/12 + 1/15, use the LCM method: assume total work equals the LCM of individual days (e.g., 60 units). Calculate units completed per day (5 units and 4 units = 9 units/day), making calculation fast and error-free.',
        handsOnExercise: {
          title: 'Solve a Multi-Worker Time and Work Problem with LCM',
          instructions: 'Person A completes a job in 12 days, Person B in 18 days. If they work together for 4 days, what fraction of work remains?',
          taskSnippet: '// Total Work = LCM(12, 18) = 36 units. Rate A = 3 u/day, Rate B = 2 u/day. Combined = 5 u/day. In 4 days = 20 units done. Remaining = 16/36 = 4/9.',
          solutionTip: 'Always convert work problems into integer units using LCM to avoid fractional arithmetic errors.'
        },
        practicalProject: {
          title: 'Timed Quantitative Aptitude Benchmark Test',
          objective: 'Complete a timed 30-question diagnostic exam covering Profit & Loss, Simple/Compound Interest, and Ratio Proportions in 45 minutes.',
          deliverable: 'Score report with error analysis identifying topic weaknesses.'
        },
        learningResources: [
          { title: 'IndiaBIX: Quantitative Aptitude Questions & Answers', type: 'guide', url: 'https://www.indiabix.com/aptitude/questions-and-answers/' },
          { title: 'Khan Academy: Pre-Algebra & Ratios', type: 'doc', url: 'https://www.khanacademy.org/math/pre-algebra' }
        ]
      },
      {
        id: 'alr-mod-2',
        title: 'Logical Deduction, Syllogisms & Seating Arrangements',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'Venn diagrams for syllogisms, linear and circular seating arrangements, and blood relation family trees.',
        topics: ['Syllogisms: All, Some, None Venn Diagram Deduction', 'Linear Seating Arrangement Constraints', 'Circular & Facing Inward/Outward Puzzles', 'Blood Relations: Standardized Family Tree Symbolism (+/-)'],
        stepByStepExplanation: 'Deductive reasoning tests the ability to extract facts from strict premises. Syllogisms must be verified using minimum-overlap Venn diagrams: a conclusion is valid only if it holds across every possible diagram permutation. In seating arrangements, start with fixed anchor clues before testing relative clues.',
        handsOnExercise: {
          title: 'Deduce a 6-Person Circular Seating Puzzle',
          instructions: 'Place 6 individuals (A, B, C, D, E, F) around a circle facing center given 4 positional constraints.',
          taskSnippet: '// Clue 1: A sits opposite D. Clue 2: B sits immediate right of A. Clue 3: C does not sit next to D.',
          solutionTip: 'Draw a circle with 6 tick marks and fix the first absolute constraint (A and D) to create a reference frame.'
        },
        practicalProject: {
          title: 'Company Recruitment Aptitude Simulation',
          objective: 'Solve a corporate campus recruitment test section consisting of 20 complex puzzle questions under 30-minute exam pressure.',
          deliverable: 'Timed test breakdown with accuracy rate percentage.'
        },
        learningResources: [
          { title: 'Indiabix: Logical Reasoning Tutorials', type: 'guide', url: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/' },
          { title: 'Brilliant.org: Logic Fundamentals', type: 'doc', url: 'https://brilliant.org/courses/logic-deduction/' }
        ]
      },
      {
        id: 'alr-mod-3',
        title: 'Data Sufficiency, Critical Reasoning & Speed Tactics',
        level: 'Advanced',
        estimatedMinutes: 90,
        overview: 'Data sufficiency decision trees, statement-assumption arguments, and elimination shortcuts.',
        topics: ['Data Sufficiency Framework (Statement 1 alone, 2 alone, both, neither)', 'Evaluating Strong vs Weak Arguments', 'Statement and Assumptions vs Conclusions', 'Exam Time Management: The 2-Minute Skip Rule'],
        stepByStepExplanation: 'Data Sufficiency questions test whether you have enough information to solve a problem—you do not need to calculate the actual numeric value. If Statement 1 alone answers the question definitively (even with a negative answer), it is sufficient.',
        handsOnExercise: {
          title: 'Evaluate a Data Sufficiency Inequality Problem',
          instructions: 'Determine whether Statements 1 and 2 are sufficient to answer "Is x > y?" without calculating explicit decimal values.',
          taskSnippet: '// Statement 1: x - y = 5 (Sufficient: x must be greater than y by 5). Statement 2: x^2 > y^2 (Insufficient: negative numbers reverse order).',
          solutionTip: 'Beware of squaring numbers: if x=-5 and y=2, x^2 > y^2 even though x < y.'
        },
        practicalProject: {
          title: 'Comprehensive Competitive Exam Aptitude Simulation',
          objective: 'Complete a full-length 50-question mock exam covering Quantitative, Logical, and Data Sufficiency sections with scoring.',
          deliverable: 'Detailed score breakdown and speed improvement roadmap.'
        },
        learningResources: [
          { title: 'GMAT Club: Data Sufficiency Guide', type: 'guide', url: 'https://gmatclub.com/' },
          { title: 'Testbook: Aptitude & Reasoning Tests', type: 'doc', url: 'https://testbook.com/' }
        ]
      }
    ],
    quiz: {
      id: 'alr-quiz',
      title: 'Aptitude & Logical Reasoning Assessment',
      description: 'Evaluate your quantitative speed, logical deduction, and data sufficiency problem solving.',
      passingScore: 70,
      questions: [
        {
          id: 'alr-q1',
          question: 'If Worker A completes a task in 10 days and Worker B completes it in 15 days, how many days will it take if they work together?',
          options: ['12.5 days', '6 days', '8 days', '25 days'],
          correctAnswerIndex: 1,
          explanation: 'Using the LCM method: Total work = 30 units. A does 3 u/day, B does 2 u/day. Combined = 5 u/day. 30 / 5 = 6 days.'
        },
        {
          id: 'alr-q2',
          question: 'In Syllogism logic, if "All Dogs are Mammals" and "All Mammals are Animals", which conclusion is strictly valid?',
          options: ['All Animals are Dogs', 'All Dogs are Animals', 'Some Animals are not Dogs', 'No Dogs are Animals'],
          correctAnswerIndex: 1,
          explanation: 'By transitivity of subsets: Dogs are inside Mammals, which are inside Animals; therefore, all Dogs are Animals.'
        },
        {
          id: 'alr-q3',
          question: 'In Data Sufficiency questions, what does "Statement 1 alone is sufficient" mean?',
          options: ['Statement 1 gives no information', 'Statement 1 alone provides enough information to answer the question definitively with a single unique answer', 'Statement 2 must be true', 'Both statements must be combined'],
          correctAnswerIndex: 1,
          explanation: 'Statement 1 alone is sufficient when its information conclusively resolves the question without needing Statement 2.'
        }
      ]
    }
  },
  {
    id: 'technical-interview-prep',
    title: 'Technical Interview Preparation',
    category: 'Career and Professional Skills',
    summary: 'Master behavioral STAR questions, system design interviews, live coding under pressure, communication frameworks, and salary negotiation.',
    skillLevel: 'Intermediate',
    totalDurationHours: 35,
    relatedCareers: ['Software Developer', 'Full Stack Developer', 'Cloud Engineer'],
    tags: ['Interviews', 'System Design', 'STAR Method', 'Live Coding', 'Negotiation', 'Careers'],
    learningObjectives: [
      'Structure behavioral answers using the STAR framework (Situation, Task, Action, Result)',
      'Master the 4-step live coding framework: Clarify, Design/Brute-force, Code, Test/Optimize',
      'Architect scalable systems in 45-minute System Design interviews (Capacity, APIs, DBs, Caching)',
      'Communicate technical trade-offs collaboratively with interviewers without getting defensive',
      'Negotiate engineering job offers effectively to maximize total compensation'
    ],
    modules: [
      {
        id: 'tip-mod-1',
        title: 'Behavioral Mastery with the STAR Framework',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Leadership principles, handling conflict, failure stories, and the STAR methodology.',
        topics: ['STAR Structure: Situation (15%), Task (10%), Action (60%), Result (15%)', 'The "Tell Me About Yourself" 2-Minute Elevator Pitch', 'Amazon’s 16 Leadership Principles & Behavioral Mapping', 'Framing Failures and Regrets with Constructive Growth Outcomes'],
        stepByStepExplanation: 'The most common mistake in behavioral interviews is spending 80% of the time describing the situation and only 20% on actions. Interviewers want to know what YOU personally did. Dedicate the majority of your answer to the Action step, highlighting your specific decisions and concluding with quantifiable Results.',
        handsOnExercise: {
          title: 'Draft a STAR Story for "Tell me about a time you had a technical disagreement"',
          instructions: 'Write a 250-word answer detailing a debate over tech choices, your collaborative data-driven approach, and the positive outcome.',
          taskSnippet: '// Action: "Rather than debating opinions, I built a quick proof-of-concept benchmark measuring latency under simulated load, which settled the issue collaboratively."',
          solutionTip: 'Always focus on how you used objective data and empathy rather than emotional arguments to resolve disagreements.'
        },
        practicalProject: {
          title: 'Personal Behavioral Interview Story Matrix',
          objective: 'Build a matrix with 6 flagship career stories mapped across standard prompts: Leadership, Conflict, Failure, Tight Deadline, Innovation.',
          deliverable: 'Comprehensive behavioral answer script document ready for mock interviews.'
        },
        learningResources: [
          { title: 'Cracking the Coding Interview: Behavioral Questions', type: 'guide', url: 'https://www.crackingthecodinginterview.com/' },
          { title: 'Dan Croitor: Behavioral Interview Coaching', type: 'video', url: 'https://www.youtube.com/@DanCroitor' }
        ]
      },
      {
        id: 'tip-mod-2',
        title: 'Live Coding Interview Execution Framework',
        level: 'Intermediate',
        estimatedMinutes: 85,
        overview: 'Thinking aloud, clarifying edge cases, handling getting stuck, and writing modular clean code.',
        topics: ['The 5-Step Coding Protocol (Clarify, Constraints, Example, Brute-Force, Optimize)', 'Communicating Internal Thoughts Aloud (No Silent Pauses)', 'Asking Clarifying Questions (Nulls, Duplicates, Scale, Memory limits)', 'Testing Your Own Code with Edge Cases Before Declaring Completion'],
        stepByStepExplanation: 'Never start typing code immediately after hearing a problem. Spend the first 5 minutes confirming inputs, expected outputs, constraints (e.g. can array be empty?), and walking through an example manually. State the naive brute-force solution first, state its Big-O, and collaboratively optimize.',
        handsOnExercise: {
          title: 'Dry-Run Code Manually with a Trace Table',
          instructions: 'Write out a variable state table (pointer indices, temporary values) to verify an in-place array algorithm on an edge case with duplicates.',
          taskSnippet: '// Trace: Step 0: [1, 1, 2], i=0, j=1 -> Step 1: match, advance j -> Step 2: diff, swap -> Result verified.',
          solutionTip: 'Tracing your code with a small edge case demonstrates attention to detail and catches off-by-one errors before the interviewer points them out.'
        },
        practicalProject: {
          title: 'Simulated 45-Minute Live Technical Interview',
          objective: 'Conduct a recorded peer mock interview solving a medium LeetCode problem while verbalizing thought processes throughout.',
          deliverable: 'Self-critique review analyzing speech clarity and problem-solving composure.'
        },
        learningResources: [
          { title: 'Pramp: Free Peer-to-Peer Mock Interviews', type: 'doc', url: 'https://www.pramp.com/' },
          { title: 'Interviewing.io Guide: How to Think Aloud', type: 'guide', url: 'https://interviewing.io/guides/system-design-interview' }
        ]
      },
      {
        id: 'tip-mod-3',
        title: 'System Design Interview & Offer Negotiation',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: '45-minute system design framework, back-of-the-envelope math, and offer negotiation scripts.',
        topics: ['The 4-Step System Design Template (Requirements, Scale, High-Level, Deep-Dive)', 'Back-of-the-Envelope Math (QPS, Bandwidth, Storage)', 'Designing Real-World Systems (URL Shortener, Twitter Feed, Rate Limiter)', 'Salary Negotiation: Leverage, Competing Offers, Equity vs Base'],
        stepByStepExplanation: 'System design interviews evaluate ambiguity navigation. Begin by clarifying functional and non-functional requirements. Estimate read/write QPS and storage needs. Draw the high-level architecture with load balancers, caching, and DB, then dive deep into bottlenecks like cache invalidation.',
        handsOnExercise: {
          title: 'Perform Back-of-the-Envelope Capacity Estimations',
          instructions: 'Calculate write QPS, read QPS, and 5-year storage capacity for a URL shortener receiving 100 million new URLs per month.',
          taskSnippet: '// Write QPS = 100M / (30 * 86,400) ≈ 40 QPS. Read QPS (100:1 ratio) = 4,000 QPS. 5-Yr Storage: 100M * 12 * 5 * 500 bytes = 3 TB.',
          solutionTip: 'Round numbers (e.g. 1 month ≈ 2.5 million seconds) to compute estimates quickly on a whiteboard.'
        },
        practicalProject: {
          title: 'Full System Design Architecture Showcase: Global Chat App',
          objective: 'Design a WhatsApp-like messaging system handling 1 billion daily active users, WebSockets, message ordering, and push alerts.',
          deliverable: 'System design diagram and comprehensive technical trade-off document.'
        },
        learningResources: [
          { title: 'Alex Xu: System Design Interview (ByteByteGo)', type: 'guide', url: 'https://bytebytego.com/' },
          { title: 'Haseeb Qureshi: Ten Rules for Negotiating More Money', type: 'doc', url: 'https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/' }
        ]
      }
    ],
    quiz: {
      id: 'tip-quiz',
      title: 'Technical Interview Preparation Assessment',
      description: 'Test your understanding of the STAR behavioral method, live coding workflows, and system design estimation.',
      passingScore: 70,
      questions: [
        {
          id: 'tip-q1',
          question: 'What is the most crucial step to perform during a live coding interview BEFORE writing any code?',
          options: ['Immediately start writing loops', 'Ask clarifying questions regarding constraints, input bounds, edge cases, and agree on an approach with the interviewer', 'Copy code from StackOverflow', 'Complain about the difficulty'],
          correctAnswerIndex: 1,
          explanation: 'Clarifying constraints and discussing approach prevents solving the wrong problem or missing crucial edge cases.'
        },
        {
          id: 'tip-q2',
          question: 'In the STAR behavioral response framework, which segment should take up the largest percentage of your explanation?',
          options: ['Situation (the backstory)', 'Task (what your boss asked for)', 'Action (the specific technical and interpersonal actions you personally executed)', 'Result'],
          correctAnswerIndex: 2,
          explanation: 'Interviewers evaluate your personal capabilities; spend 60%+ of your time on the concrete actions you took.'
        },
        {
          id: 'tip-q3',
          question: 'When asked in an initial HR screening call "What are your salary expectations?", what is the recommended negotiation strategy?',
          options: ['Name a random very low number', 'Politely deflect giving a firm figure, stating you expect competitive market rate for the role and wish to understand the full scope of responsibilities first', 'Threaten to hang up', 'Ask for $100 million'],
          correctAnswerIndex: 1,
          explanation: 'Anchoring yourself too early limits negotiation leverage later; deflect until an official offer is extended.'
        }
      ]
    }
  },
  {
    id: 'resume-portfolio-building',
    title: 'Resume and Portfolio Building',
    category: 'Career and Professional Skills',
    summary: 'ATS optimization, bullet-point formula (Accomplished X by doing Y measured by Z), GitHub profile curation, and personal branding.',
    skillLevel: 'Beginner',
    totalDurationHours: 25,
    relatedCareers: ['Software Developer', 'Full Stack Developer', 'Data Scientist', 'UI/UX Designer', 'Cloud Engineer'],
    tags: ['Resume', 'ATS', 'Portfolio', 'GitHub', 'Job Search', 'LinkedIn'],
    learningObjectives: [
      'Write ATS-friendly resume formatting that parses flawlessly through candidate tracking systems',
      'Craft bullet points using the Google X-Y-Z formula: "Accomplished [X], as measured by [Y], by doing [Z]"',
      'Curate a GitHub profile with polished READMEs, live demo links, and clean commit histories',
      'Showcase technical project case studies emphasizing individual architecture decisions',
      'Target resume tailoring to job descriptions using keyword frequency matching'
    ],
    modules: [
      {
        id: 'rpb-mod-1',
        title: 'ATS Mechanics & The Google X-Y-Z Resume Formula',
        level: 'Beginner',
        estimatedMinutes: 65,
        overview: 'Applicant Tracking Systems (ATS), single-column layouts, font choices, and quantifiable bullet points.',
        topics: ['How ATS Scanners Parse Resumes (Text extraction vs graphics)', 'Single-Column vs Multi-Column Layout Pitfalls', 'Google X-Y-Z Formula for Impact Bullets', 'Eliminating Passive Verb Clutter ("Responsible for...")'],
        stepByStepExplanation: 'Fancy graphical multi-column resumes fail in automated ATS parsers (like Workday or Greenhouse). Keep layout clean, single-column, and text-based. Replace passive descriptions ("Responsible for backend APIs") with high-impact quantified statements ("Engineered microservice REST APIs handling 5,000 req/sec, cutting latency by 35%").',
        handsOnExercise: {
          title: 'Transform 3 Weak Bullet Points into Google X-Y-Z Statements',
          instructions: 'Rewrite generic statements like "Worked on database optimization" into quantifiable impact statements.',
          taskSnippet: '// Before: "Worked on database optimization." -> After: "Optimized PostgreSQL database query execution by indexing composite keys, reducing API p99 latency from 450ms to 65ms."',
          solutionTip: 'Always quantify with numbers: percentages reduced, seconds saved, requests processed, or dollars saved.'
        },
        practicalProject: {
          title: 'Complete 1-Page ATS-Optimized Professional Resume',
          objective: 'Author an ATS-compliant 1-page software engineer resume with clean typography, tailored keywords, and validated in an ATS scanner.',
          deliverable: 'PDF resume achieving 90%+ parse score in Jobscan.'
        },
        learningResources: [
          { title: 'Google Careers: Resume Writing Advice', type: 'guide', url: 'https://www.youtube.com/watch?v=BYUy1GvjH08' },
          { title: 'Harvard University: Resume and Cover Letter Template', type: 'doc', url: 'https://careerservices.fas.harvard.edu/' }
        ]
      },
      {
        id: 'rpb-mod-2',
        title: 'GitHub Profile & Project Showcase Curation',
        level: 'Intermediate',
        estimatedMinutes: 75,
        overview: 'GitHub special repository README, project documentation, live demo links, and commit hygiene.',
        topics: ['Special Profile README (<username>/<username>) Showcase', 'The Anatomy of an Outstanding Project README (GIF demo, architecture, install, tech stack)', 'Deploying Working Live Demos with Cloud Run or Vercel', 'Commit Message Discipline and Branch Cleanup'],
        stepByStepExplanation: 'Recruiters and engineers evaluating your GitHub spend 30 seconds scanning your repositories. If a project lacks a live link or README with screenshots, they will not clone and run it. Provide an animated GIF demo, a clean architecture diagram, and an active live deployment URL.',
        handsOnExercise: {
          title: 'Author a Production Project README in Markdown',
          instructions: 'Write a comprehensive README with project badges, architecture overview, installation steps, and live preview links.',
          taskSnippet: '# Project Title\n\n[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)\n\n> Live Demo: [https://myapp.com](https://myapp.com)\n\n## Architecture\n...',
          solutionTip: 'Include a "Key Technical Challenges Solved" section highlighting difficult engineering trade-offs you overcame.'
        },
        practicalProject: {
          title: 'Polished GitHub Portfolio & Profile README Overhaul',
          objective: 'Design a dynamic GitHub profile README showcasing top repositories, skills, and write a stellar README for your flagship project.',
          deliverable: 'Updated GitHub profile with interactive stats and pin highlights.'
        },
        learningResources: [
          { title: 'Awesome GitHub Profile READMEs', type: 'guide', url: 'https://github.com/abhisheknaiyk/awesome-github-profile-readme' },
          { title: 'Make a README Standard Guide', type: 'doc', url: 'https://www.makeareadme.com/' }
        ]
      },
      {
        id: 'rpb-mod-3',
        title: 'Project Case Studies & Targeted Tailoring',
        level: 'Advanced',
        estimatedMinutes: 85,
        overview: 'Deep-dive engineering case studies, keyword mapping, tailoring resumes for specific roles, and cover letters.',
        topics: ['Writing Engineering Case Studies (Problem, Technical Decisions, Trade-Offs, Metrics)', 'Semantic Keyword Mapping from Job Descriptions', 'Avoiding Over-Tailoring vs Strategic Alignment', 'The Modern 3-Paragraph Cover Letter That Actually Gets Read'],
        stepByStepExplanation: 'Generic applications receive low callback rates. Tailor your resume by highlighting projects using the exact technical stack requested in the target job description. Frame your project case studies as engineering post-mortems highlighting technical hurdles.',
        handsOnExercise: {
          title: 'Extract and Map Keywords from a Target Job Posting',
          instructions: 'Highlight the top 8 hard skills and competencies in a job description and integrate them organically into your resume bullets.',
          taskSnippet: '// Job: "Distributed systems, Docker, Redis caching" -> Resume: Highlight your Redis sliding-window project in the top position.',
          solutionTip: 'Never keyword-stuff invisible text; weave keywords naturally into context-rich accomplishment bullets.'
        },
        practicalProject: {
          title: 'Full Job Application Package for Dream Tech Role',
          objective: 'Create a tailored resume, customized project case study presentation, and high-impact targeted outreach note for a specific open role.',
          deliverable: 'Complete application bundle ready for submission.'
        },
        learningResources: [
          { title: 'Gergely Orosz: The Pragmatic Engineer Resume Review', type: 'guide', url: 'https://blog.pragmaticengineer.com/' },
          { title: 'Tech Interview Handbook: Resume Tips', type: 'doc', url: 'https://www.techinterviewhandbook.org/resume/' }
        ]
      }
    ],
    quiz: {
      id: 'rpb-quiz',
      title: 'Resume & Portfolio Building Assessment',
      description: 'Test your understanding of ATS formatting, impact bullet formulations, and project presentation.',
      passingScore: 70,
      questions: [
        {
          id: 'rpb-q1',
          question: 'What is the Google X-Y-Z formula for authoring high-impact resume bullet points?',
          options: ['Xray, Yellow, Zebra', 'Accomplished [X], as measured by [Y], by doing [Z]', 'Execute [X], Yield [Y], Zero [Z]', 'Experience [X], Years [Y], Zone [Z]'],
          correctAnswerIndex: 1,
          explanation: 'Google’s formula ensures every bullet couples an accomplishment with measurable evidence and the specific actions taken.'
        },
        {
          id: 'rpb-q2',
          question: 'Why do multi-column graphical resumes often fail in Applicant Tracking Systems (ATS)?',
          options: ['They are too heavy for servers', 'ATS text parsers read left-to-right across columns, jumbling unrelated sentences from column 1 and column 2 into gibberish', 'ATS only accepts paper', 'Companies ban graphics'],
          correctAnswerIndex: 1,
          explanation: 'Multi-column layouts confuse linear ATS text scrapers, causing jumbled or lost work experience sections.'
        },
        {
          id: 'rpb-q3',
          question: 'What is the most critical element to include in a GitHub repository showcase so a hiring manager actually reviews it?',
          options: ['10,000 files', 'A clear README with a working live demo URL link and visual preview screenshots', 'A photo of your laptop', 'Zero commits'],
          correctAnswerIndex: 1,
          explanation: 'Hiring managers lack time to clone and build repositories locally; a live demo and visual README prove working execution instantly.'
        }
      ]
    }
  },
  {
    id: 'git-github',
    title: 'Git and GitHub',
    category: 'Career and Professional Skills',
    summary: 'Master version control: branching strategies, interactive rebasing, merge conflicts, pull requests, git hooks, and cherry-picking.',
    skillLevel: 'Beginner',
    totalDurationHours: 30,
    relatedCareers: ['Software Developer', 'Full Stack Developer', 'Cloud Engineer'],
    tags: ['Git', 'GitHub', 'Version Control', 'Rebase', 'Merge Conflicts', 'PRs', 'Branching'],
    learningObjectives: [
      'Understand Git internals: Directed Acyclic Graph (DAG), blobs, trees, and commit hashes',
      'Manage branching workflows: feature branches, PR reviews, squashing, and merging',
      'Resolve complex merge conflicts calmly using visual diff tools',
      'Rewrite and clean local commit history using interactive rebase (git rebase -i)',
      'Undo mistakes safely using git reset, git revert, and git reflog'
    ],
    modules: [
      {
        id: 'git-mod-1',
        title: 'Git Internals, Staging & Core Commits',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Working tree, staging area, repository, commit DAG, and git status.',
        topics: ['The Three Trees: Working Directory, Staging Index, Commit History', 'Git Objects: Blobs, Trees, Commits, and Annotated Tags', 'Atomic Commits & Writing Semantic Commit Messages (Conventional Commits)', '.gitignore Rules & Unstaging Changes (git restore)'],
        stepByStepExplanation: 'Git does not store diffs; it stores snapshots of your file tree as SHA-1/SHA-256 hashes. Moving files from the working directory to the staging index (git add) prepares an atomic snapshot. Conventional commits (feat:, fix:, chore:) provide readable machine-parseable project histories.',
        handsOnExercise: {
          title: 'Stage Chunks with Interactive Staging (git add -p)',
          instructions: 'Use git add -p to selectively stage only specific hunk changes within a modified file, splitting fixes into separate atomic commits.',
          taskSnippet: 'git add -p src/index.ts\n# select [y] to stage, [n] to skip, [s] to split hunk',
          solutionTip: 'Interactive staging ensures each commit contains only changes related to a single logical bugfix or feature.'
        },
        practicalProject: {
          title: 'Open Source Contribution Git Workflow Lab',
          objective: 'Fork an open-source repository, configure upstream remotes, create a clean feature branch, and submit a pull request.',
          deliverable: 'Pull request submission with conventional commit messages.'
        },
        learningResources: [
          { title: 'Pro Git Book by Scott Chacon and Ben Straub', type: 'doc', url: 'https://git-scm.com/book/en/v2' },
          { title: 'Conventional Commits Specification', type: 'guide', url: 'https://www.conventionalcommits.org/' }
        ]
      },
      {
        id: 'git-mod-2',
        title: 'Branching, Merge Conflicts & Interactive Rebase',
        level: 'Intermediate',
        estimatedMinutes: 85,
        overview: 'git merge vs git rebase, resolving conflict markers, and interactive squashing.',
        topics: ['Fast-Forward Merge vs 3-Way Merge Commits', 'Git Rebase Mechanics: Replaying Commits on New Base', 'Resolving Merge Conflicts (<<<<<<< HEAD vs >>>>>>>)', 'Interactive Rebase (git rebase -i) for Squashing and Rewording'],
        stepByStepExplanation: 'git merge combines branches with a merge commit, preserving exact historical chronological order. git rebase replays your commits one by one on top of the target branch, producing a clean linear project history. When conflicts occur, Git pauses rebasing so you can resolve differences.',
        handsOnExercise: {
          title: 'Squash 4 Messy Commits with Interactive Rebase',
          instructions: 'Run git rebase -i HEAD~4, squash 3 minor "fix typo" commits into the main feature commit, and rewrite the final commit message.',
          taskSnippet: 'pick f7f3f6d feat: add authentication\nsquash 310154e fix typo\nsquash a5f4a0d fix tests',
          solutionTip: 'Never rebase public shared branches that other developers have pulled; only rebase local feature branches.'
        },
        practicalProject: {
          title: 'Simulated Multi-Developer Merge Conflict Resolution',
          objective: 'Simulate conflicting concurrent edits on the same lines of code across two branches and resolve conflicts cleanly without regressions.',
          deliverable: 'Clean linear Git log history verified via git log --graph --oneline.'
        },
        learningResources: [
          { title: 'Atlassian: Merging vs Rebasing Guide', type: 'guide', url: 'https://www.atlassian.com/git/tutorials/merging-vs-rebasing' },
          { title: 'Learn Git Branching (Interactive Sandbox)', type: 'doc', url: 'https://learngitbranching.js.org/' }
        ]
      },
      {
        id: 'git-mod-3',
        title: 'Undo Operations, Git Reflog & Production Recovery',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'git reset (--soft, --mixed, --hard), git revert, recovering deleted branches with git reflog, and bisect.',
        topics: ['git reset --soft vs --mixed vs --hard', 'git revert for Safe Public History Rollbacks', 'git reflog: The Ultimate Safety Net for Recovering "Lost" Commits', 'git bisect: Automated Binary Search for Bug-Introducing Commits'],
        stepByStepExplanation: 'In Git, commits are rarely truly deleted immediately. git reflog records every update to the HEAD pointer. If you run git reset --hard and accidentally wipe a week of work, git reflog finds the commit hash before the reset so you can check it out or reset back to it.',
        handsOnExercise: {
          title: 'Recover an Accidental Hard Reset with Git Reflog',
          instructions: 'Simulate an accidental git reset --hard HEAD~3, use git reflog to locate the lost commit hash, and restore the branch state.',
          taskSnippet: 'git reflog\n# identify HEAD@{1} hash\ngit reset --hard HEAD@{1}',
          solutionTip: 'Git reflog entries remain accessible for 30 to 90 days before garbage collection (git gc) cleans them up.'
        },
        practicalProject: {
          title: 'Pinpointing Regressions with Automated Git Bisect',
          objective: 'Automate a binary search using git bisect run with a test script to identify which of 50 commits introduced a silent bug.',
          deliverable: 'Bisect log output identifying the exact regression commit.'
        },
        learningResources: [
          { title: 'GitHub Docs: Using Git Bisect', type: 'doc', url: 'https://git-scm.com/docs/git-bisect' },
          { title: 'Dangit, Git! (Oh Shit, Git!): Common Git Recovery Solutions', type: 'guide', url: 'https://dangitgit.com/' }
        ]
      }
    ],
    quiz: {
      id: 'git-quiz',
      title: 'Git & Version Control Mastery Assessment',
      description: 'Evaluate your knowledge of commit DAGs, interactive rebasing, and emergency reflog recovery.',
      passingScore: 70,
      questions: [
        {
          id: 'git-q1',
          question: 'What is the "Golden Rule of Rebasing" in professional software teams?',
          options: ['Always rebase main every minute', 'Never rebase a public branch that has been pushed and shared with other developers, as it rewrites commit history', 'Rebasing deletes all code', 'Never use branches'],
          correctAnswerIndex: 1,
          explanation: 'Rebasing rewrites commit hashes; doing so on public shared branches causes chaotic merge issues for collaborators.'
        },
        {
          id: 'git-q2',
          question: 'If you accidentally execute `git reset --hard HEAD~2` and lose two commits, what command allows you to find and recover the lost commit hashes?',
          options: ['git status', 'git reflog', 'git clone', 'git rm'],
          correctAnswerIndex: 1,
          explanation: 'git reflog maintains a local journal of all past HEAD positions, allowing recovery of orphaned commits.'
        },
        {
          id: 'git-q3',
          question: 'What does git bisect accomplish when debugging a regression in a large codebase?',
          options: ['It compresses the repository', 'It uses binary search across commit history to automatically test and identify the exact commit that introduced a bug', 'It splits files into two', 'It sends an email alert'],
          correctAnswerIndex: 1,
          explanation: 'git bisect uses binary search between a known good commit and bad commit to locate bugs in O(log N) steps.'
        }
      ]
    }
  },
  {
    id: 'communication-skills',
    title: 'Communication Skills',
    category: 'Career and Professional Skills',
    summary: 'Master clear technical writing, asynchronous team communication, engineering proposals (RFCs), stakeholder presentations, and active listening.',
    skillLevel: 'Beginner',
    totalDurationHours: 25,
    relatedCareers: ['Software Developer', 'Full Stack Developer', 'UI/UX Designer', 'Data Scientist', 'Cloud Engineer'],
    tags: ['Communication', 'Writing', 'RFC', 'Presentations', 'Remote Work', 'Soft Skills'],
    learningObjectives: [
      'Write concise, unambiguous technical documentation and asynchronous Slack/email updates',
      'Author Request for Comments (RFC) engineering proposals outlining architectural trade-offs',
      'Explain complex technical topics simply to non-technical stakeholders without jargon',
      'Practice active listening and constructive code review feedback',
      'Deliver persuasive technical presentations with visual clarity and confident delivery'
    ],
    modules: [
      {
        id: 'comm-mod-1',
        title: 'Asynchronous Writing & Executive Communication',
        level: 'Beginner',
        estimatedMinutes: 65,
        overview: 'BLUF principle (Bottom Line Up Front), Slack etiquette, status updates, and removing passive fluff.',
        topics: ['BLUF (Bottom Line Up Front) Communication Principle', 'Asynchronous Remote Collaboration Etiquette (No "Hello" without the question)', 'Structuring Weekly Standup / Status Updates', 'Writing Tight, Scannable Emails with Clear Action Requests'],
        stepByStepExplanation: 'In modern remote and distributed companies, writing is your primary interface. The BLUF principle states the core conclusion, decision, or request in sentence #1, followed by background details. Busy stakeholders will not read a 5-paragraph mystery story to find what you need.',
        handsOnExercise: {
          title: 'Rewrite a Rambling Status Message into a BLUF Update',
          instructions: 'Convert a 300-word stream-of-consciousness Slack update into a 3-bullet BLUF update with direct action blockers highlighted.',
          taskSnippet: '// BLUF: Database migration delayed to Thursday due to staging latency spike; no customer downtime impact.\n- Root Cause: ...\n- Next Action Needed: Approvals from @lead on PR #42.',
          solutionTip: 'Always tag specific assignees directly next to their explicit action items.'
        },
        practicalProject: {
          title: 'Team Asynchronous Communication Playbook',
          objective: 'Author an internal guidelines handbook establishing Slack channel naming conventions, expected response SLAs, and update formats.',
          deliverable: 'Company asynchronous communication handbook document.'
        },
        learningResources: [
          { title: 'GitLab: All-Remote Asynchronous Communication Guide', type: 'doc', url: 'https://about.gitlab.com/company/culture/all-remote/asynchronous/' },
          { title: 'Smart Brevity by Jim VandeHei, Mike Allen, Roy Schwartz', type: 'guide', url: 'https://www.smartbrevity.com/' }
        ]
      },
      {
        id: 'comm-mod-2',
        title: 'Writing Engineering RFCs & Architectural Decision Records (ADR)',
        level: 'Intermediate',
        estimatedMinutes: 75,
        overview: 'RFC structure, documenting alternatives considered, trade-off analysis, and building team consensus.',
        topics: ['Architectural Decision Record (ADR) Anatomy (Context, Decision, Consequences)', 'Request for Comments (RFC) Lifecycle & Review Deadlines', 'Documenting "Alternatives Considered & Discarded"', 'Navigating Engineering Debates Collaboratively without Ego'],
        stepByStepExplanation: 'Engineering decisions must be documented to explain the "why" to future teammates. An ADR captures the architectural decision, the alternatives evaluated, and the negative trade-offs accepted. RFCs invite peer feedback before writing extensive code.',
        handsOnExercise: {
          title: 'Draft an ADR for Migrating from REST to gRPC',
          instructions: 'Write an Architectural Decision Record documenting the technical context, performance benchmarks, and drawbacks of adopting gRPC.',
          taskSnippet: '// Title: ADR-004: Adopt gRPC for Inter-Service Communication\n// Status: Accepted\n// Context: High HTTP JSON serialization CPU load between microservices...\n// Consequences: 4x throughput increase; requires protobuf toolchain maintenance.',
          solutionTip: 'Never omit the negative consequences or operational costs of an architectural choice in an ADR.'
        },
        practicalProject: {
          title: 'Engineering RFC Proposal for Infrastructure Modernization',
          objective: 'Author a 4-page engineering RFC proposing a Redis caching layer for an e-commerce checkout service with cost and fallback plans.',
          deliverable: 'Complete RFC document ready for architecture review committee.'
        },
        learningResources: [
          { title: 'Joel On Software: Writing Software Specs', type: 'guide', url: 'https://www.joelonsoftware.com/' },
          { title: 'ADR GitHub Organization: Architectural Decision Records', type: 'doc', url: 'https://adr.github.io/' }
        ]
      },
      {
        id: 'comm-mod-3',
        title: 'Constructive Code Reviews & Stakeholder Demos',
        level: 'Advanced',
        estimatedMinutes: 85,
        overview: 'Empathetic PR code reviews, framing suggestions vs blockers, translating tech to business, and live demos.',
        topics: ['Empathetic Code Reviews (Labeling: nit, suggestion, blocking bug)', 'Asking Questions Instead of Demanding Directives ("What do you think about X?")', 'Translating Technical Debt into Business Risk and Revenue Impact', 'Preparing Flawless Live Sprint Demos for Executives'],
        stepByStepExplanation: 'Code reviews are a teaching and collaboration medium, not an inspection gauntlet. Prefix minor comments with `nit:` so authors know it does not block merging. When talking to business executives, never discuss "refactoring"; talk about "reducing customer latency and downtime risk".',
        handsOnExercise: {
          title: 'Refactor Harsh Code Review Comments into Collaborative Feedback',
          instructions: 'Rewrite 3 critical code review comments (e.g. "This code is horrible and slow") into empathetic, constructive coaching notes.',
          taskSnippet: '// Before: "This code is horrible and slow." -> After: "Nice implementation! One thought: this loop executes in O(N^2) time. Would using a Set lookup here help us scale when items exceed 1,000?"',
          solutionTip: 'Focus criticism on the code and scale implications, never on the developer’s capability.'
        },
        practicalProject: {
          title: 'Executive Sprint Showcase & Technical Presentation',
          objective: 'Design a 10-minute slide deck and live demonstration script showing a new feature release to sales, product, and executive stakeholders.',
          deliverable: 'Recorded presentation walkthrough and presentation slide deck.'
        },
        learningResources: [
          { title: 'Google Engineering Practices: How to do a code review', type: 'doc', url: 'https://google.github.io/eng-practices/review/reviewer/' },
          { title: 'Conventional Comments Specification', type: 'guide', url: 'https://conventionalcomments.org/' }
        ]
      }
    ],
    quiz: {
      id: 'comm-quiz',
      title: 'Professional Communication Assessment',
      description: 'Evaluate your knowledge of the BLUF principle, engineering ADRs, and constructive code review etiquette.',
      passingScore: 70,
      questions: [
        {
          id: 'comm-q1',
          question: 'What does the BLUF principle stand for in professional and asynchronous business writing?',
          options: ['Bottom Line Up Front', 'Begin Later Using Facts', 'Bullet Lists Under Fire', 'Build Logic Under Feedback'],
          correctAnswerIndex: 0,
          explanation: 'Bottom Line Up Front puts the key takeaway, decision, or action request in the very first sentence.'
        },
        {
          id: 'comm-q2',
          question: 'Why is it critical to document "Alternatives Considered" in an Architectural Decision Record (ADR)?',
          options: ['To fill up page space', 'To explain why other potential technologies or designs were evaluated and discarded, preventing future teams from repeating old debates', 'To criticize competing vendors', 'It is required by law'],
          correctAnswerIndex: 1,
          explanation: 'Documenting discarded alternatives preserves institutional memory and clarifies design trade-offs.'
        },
        {
          id: 'comm-q3',
          question: 'In professional code review etiquette, what does prefixing a comment with "nit:" signify?',
          options: ['A critical security vulnerability that blocks release', 'A trivial, optional polish suggestion (like naming or formatting) that does not block merging the pull request', 'An error in the compiler', 'A requirement to rewrite the entire PR'],
          correctAnswerIndex: 1,
          explanation: 'A "nit" indicates a minor stylistic detail that the author can address at their discretion without blocking PR merge.'
        }
      ]
    }
  },
  {
    id: 'freelancing-career-readiness',
    title: 'Freelancing and Career Readiness',
    category: 'Career and Professional Skills',
    summary: 'Find high-paying clients, master value-based pricing, draft contracts and statements of work (SOW), manage clients, and build an independent consultancy.',
    skillLevel: 'Beginner',
    totalDurationHours: 30,
    relatedCareers: ['Software Developer', 'Full Stack Developer', 'UI/UX Designer', 'Digital Marketing Specialist'],
    tags: ['Freelancing', 'Contracts', 'Pricing', 'Client Management', 'Consulting', 'Career Readiness'],
    learningObjectives: [
      'Transition from hourly billing to value-based pricing and fixed-scope retainers',
      'Draft legally sound Statements of Work (SOW) with milestone deliverables and scope boundaries',
      'Acquire premium clients through warm outreach, inbound positioning, and partner referrals',
      'Manage client expectations, prevent scope creep, and handle change orders professionally',
      'Manage freelance business operations: invoicing, taxes, accounting, and emergency savings'
    ],
    modules: [
      {
        id: 'fcr-mod-1',
        title: 'Positioning & Value-Based Pricing Strategy',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Hourly traps vs Value pricing, calculating project ROI, retainer structures, and niche selection.',
        topics: ['The Hourly Billing Trap: Why efficiency is penalized with hourly rates', 'Value-Based Pricing: Tying your fee to client revenue upside or risk mitigation', 'Retainer Contracts (Advisory vs Implementation Retainers)', 'Positioning as a Specialized Consultant vs Generalist Hand'],
        stepByStepExplanation: 'Hourly billing misaligns incentives: as you gain expertise and work twice as fast, you earn half as much money. Value-based pricing prices the outcome. If your redesign helps an e-commerce brand generate $500,000 in incremental revenue, a $50,000 project fee is an easy 10x ROI for the client.',
        handsOnExercise: {
          title: 'Calculate Value-Based Project Pricing Options',
          instructions: 'Draft a 3-tiered proposal (Base, Recommended, Premium) for a client project with projected $200k business upside.',
          taskSnippet: '// Option 1: Core Redesign ($15k) | Option 2: Redesign + A/B Experimentation Setup ($28k) | Option 3: Full Turnkey + 3-Mo Optimization ($45k)',
          solutionTip: 'Offering 3 tiers shifts the client’s decision from "Should I hire you?" to "Which tier should I choose?".'
        },
        practicalProject: {
          title: 'Freelance Advisory Service Offering & Pricing Sheet',
          objective: 'Define your specialized service packages, value propositions, client qualification criteria, and tier pricing matrix.',
          deliverable: 'Professional client pitch deck and service menu.'
        },
        learningResources: [
          { title: 'Jonathan Stark: Hourly Billing Is Nuts', type: 'guide', url: 'https://hourlybillingisnuts.com/' },
          { title: 'Alan Weiss: Million Dollar Consulting', type: 'doc', url: 'https://alanweiss.com/' }
        ]
      },
      {
        id: 'fcr-mod-2',
        title: 'Contracts, Statements of Work (SOW) & Scope Creep',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'Milestone payment schedules, defining deliverables, intellectual property transfer, and change orders.',
        topics: ['Statement of Work (SOW) Structure (Deliverables, Milestones, Timelines)', 'Payment Terms (50% upfront deposit, milestone disbursements, net-15)', 'Preventing Scope Creep with Formal Change Order Agreements', 'IP Transfer Clauses: Withholding code/assets until final payment is cleared'],
        stepByStepExplanation: 'Never start work without a signed contract and an upfront deposit (typically 50%). When a client requests extra features mid-project, never say "no"; say "Yes, absolutely! Let me draft a quick change order with the additional budget and timeline for that addition". This keeps relations positive while preserving profitability.',
        handsOnExercise: {
          title: 'Draft a Change Order for Additional Feature Requests',
          instructions: 'Write a professional change order document adding a payment integration to an existing ongoing client project.',
          taskSnippet: '// Change Order #1: Addition of Stripe Billing Portal. Additional Fee: $3,500. Timeline Extension: +5 business days.',
          solutionTip: 'Always require written client sign-off on change orders before beginning extra engineering work.'
        },
        practicalProject: {
          title: 'Bulletproof Freelance Master Services Agreement (MSA)',
          objective: 'Author a customizable freelance contract template covering revision limits, payment schedules, IP ownership, and kill fees.',
          deliverable: 'Reusable Master Services Agreement and Statement of Work template.'
        },
        learningResources: [
          { title: 'AIGA Standard Form of Agreement for Design Services', type: 'doc', url: 'https://www.aiga.org/resources/aiga-standard-form-of-agreement-for-design-services' },
          { title: 'Contract Killer: Open-Source Freelance Contract', type: 'guide', url: 'https://stuffandnonsense.co.uk/projects/contract-killer/' }
        ]
      },
      {
        id: 'fcr-mod-3',
        title: 'Client Inbound Engines & Consulting Operations',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'Referral systems, subcontractor scaling, bookkeeping, estimated quarterly taxes, and emergency runway.',
        topics: ['Building a Systematic Client Referral Engine', 'Cold Email Outreach to Funded Startups & Agency Overflow Partnerships', 'Freelance Financial Architecture: Separate Business Banking, Taxes, LLC Setup', 'Managing 6 Months of Operating Runway to Eliminate Desperation'],
        stepByStepExplanation: 'The secret to stress-free freelancing is financial runway. Maintaining a 6-month living reserve empowers you to say "no" to toxic, low-budget clients. Partner with design and engineering agencies to capture their overflow work when their in-house staff is at capacity.',
        handsOnExercise: {
          title: 'Write a Warm Referral Request Email to Past Happy Clients',
          instructions: 'Draft an email sent at the completion of a successful project asking for introductions to other founders or leaders.',
          taskSnippet: '// Email: "Hi [Client], So glad to see the launch succeed! I currently have availability for 1 new client starting next month. Do you know anyone who needs help with [Specialty]?"',
          solutionTip: 'Ask for referrals right after delivering a major win when client excitement and gratitude are highest.'
        },
        practicalProject: {
          title: 'Independent Consulting Business Launch Blueprint',
          objective: 'Set up an invoicing system, contract workflow, 90-day client acquisition outreach plan, and financial cash flow spreadsheet.',
          deliverable: 'Complete operational business launch blueprint.'
        },
        learningResources: [
          { title: 'The Freelance Manifesto by Joey Korenman', type: 'guide', url: 'https://www.schoolofmotion.com/the-freelance-manifesto' },
          { title: 'Double Your Freelancing by Brennan Dunn', type: 'doc', url: 'https://doubleyourfreelancing.com/' }
        ]
      }
    ],
    quiz: {
      id: 'fcr-quiz',
      title: 'Freelancing & Career Readiness Assessment',
      description: 'Evaluate your knowledge of value-based pricing, contract milestones, and scope creep management.',
      passingScore: 70,
      questions: [
        {
          id: 'fcr-q1',
          question: 'What is the primary drawback of billing clients by the hour as your technical expertise grows?',
          options: ['Clocks run out of battery', 'You are penalized for efficiency: as you become faster and more skilled, you earn less money for delivering the same or better outcome', 'Clients refuse to pay hourly', 'Banks do not accept hourly money'],
          correctAnswerIndex: 1,
          explanation: 'Hourly billing ties earnings to time spent rather than value created, penalizing high competence and speed.'
        },
        {
          id: 'fcr-q2',
          question: 'What is the most professional way to handle a client requesting significant extra features outside the original Statement of Work?',
          options: ['Work for free on weekends', 'Angrily refuse to speak to them', 'Enthusiastically accept and issue a formal Change Order detailing the extra budget and timeline adjustment required', 'Delete their database'],
          correctAnswerIndex: 2,
          explanation: 'Change orders frame additions positively as commercial options while protecting your time and compensation.'
        },
        {
          id: 'fcr-q3',
          question: 'When should intellectual property (IP) rights and source code copyright officially transfer to a freelance client?',
          options: ['Before the contract is signed', 'Only after all final invoice payments and disbursements have cleared in full', 'Never', 'During the initial phone call'],
          correctAnswerIndex: 1,
          explanation: 'Retaining IP rights until full payment clears provides essential legal leverage ensuring invoices are honored.'
        }
      ]
    }
  }
];
