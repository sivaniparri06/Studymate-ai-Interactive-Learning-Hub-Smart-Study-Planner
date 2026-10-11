import { Course } from '../../types';

export const digitalMarketingCourses: Course[] = [
  {
    id: 'digital-marketing-fundamentals',
    title: 'Digital Marketing Fundamentals',
    category: 'Digital Marketing',
    summary: 'Core principles of modern digital growth: omnichannel marketing funnels, customer acquisition, CAC/LTV math, and brand positioning.',
    skillLevel: 'Beginner',
    totalDurationHours: 32,
    relatedCareers: ['Digital Marketing Specialist', 'Data Analyst'],
    tags: ['Marketing', 'Funnels', 'Customer Acquisition', 'Growth', 'Brand Strategy', 'Inbound'],
    learningObjectives: [
      'Understand the full customer journey funnel: Top of Funnel (TOFU), MOFU, and BOFU',
      'Calculate critical growth metrics: CAC, LTV, ROAS, Churn, and Conversion Rate',
      'Build omnichannel campaigns integrating organic search, paid ads, email, and social',
      'Craft compelling value propositions and positioning messaging that resonate with target audiences',
      'Allocate marketing budgets across growth channels using attribution modeling'
    ],
    modules: [
      {
        id: 'dmf-mod-1',
        title: 'Marketing Funnels & Customer Journey Mapping',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'AIDA model (Attention, Interest, Desire, Action), TOFU/MOFU/BOFU stages, and touchpoint orchestration.',
        topics: ['The AIDA Growth Framework', 'Top of Funnel (Awareness) vs Bottom of Funnel (Conversion)', 'Omnichannel Touchpoints & Zero Moment of Truth (ZMOT)', 'Lead Magnets & Opt-In Incentives'],
        stepByStepExplanation: 'Marketing funnels shepherd prospective customers from initial awareness to loyal advocacy. Top-of-funnel initiatives introduce your brand without high-pressure sales pitches, whereas bottom-of-funnel assets (case studies, free trials, comparison tables) overcome specific purchase objections.',
        handsOnExercise: {
          title: 'Map a 3-Stage Inbound Funnel for a B2B SaaS Product',
          instructions: 'Define specific content pieces, distribution channels, and conversion hooks for TOFU (blog guide), MOFU (webinar), and BOFU (demo call).',
          taskSnippet: '// TOFU: "The 2026 Remote Security Guide" -> MOFU: "Live Vulnerability Audit Webinar" -> BOFU: "14-Day Free Trial + 1-on-1 Setup"',
          solutionTip: 'Ensure each stage contains a clear, natural next step so leads do not go cold.'
        },
        practicalProject: {
          title: 'Omnichannel Go-to-Market (GTM) Campaign Blueprint',
          objective: 'Design a 90-day product launch campaign across organic search, paid social, and automated email nurturing sequences.',
          deliverable: 'Comprehensive GTM strategy document with budget allocation.'
        },
        learningResources: [
          { title: 'HubSpot Academy: Inbound Marketing Certification', type: 'guide', url: 'https://academy.hubspot.com/courses/inbound' },
          { title: 'Reforge: Growth Strategy Frameworks', type: 'doc', url: 'https://www.reforge.com/' }
        ]
      },
      {
        id: 'dmf-mod-2',
        title: 'Customer Acquisition Economics & Growth Math',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'CAC, LTV, Return on Ad Spend (ROAS), Payback Period, and unit economics.',
        topics: ['Calculating Customer Acquisition Cost (CAC)', 'Estimating Lifetime Value (LTV) with Churn Rates', 'Return on Ad Spend (ROAS) vs ROI', 'Cohort Payback Periods & Cash Flow Impact'],
        stepByStepExplanation: 'A digital marketing campaign can generate millions in revenue yet drive a business bankrupt if CAC exceeds LTV. Healthy ventures maintain an LTV:CAC ratio above 3:1, recouping upfront customer acquisition costs within 12 months.',
        handsOnExercise: {
          title: 'Calculate Blended vs Paid CAC and ROAS',
          instructions: 'Compute Paid CAC, Blended CAC, and ROAS given $20,000 in ad spend, $5,000 agency retainer, and 500 new customers generating $80,000.',
          taskSnippet: '// Paid CAC = $20,000 / 500 = $40 | Total Spend = $25,000 -> Blended CAC = $50 | ROAS = $80,000 / $20,000 = 4.0x',
          solutionTip: 'Always track paid-only CAC separately from blended CAC to gauge organic halo efficiency.'
        },
        practicalProject: {
          title: 'Quarterly Growth Marketing Budget Allocation Model',
          objective: 'Build an Excel/Google Sheets model distributing a $100k quarterly budget across Search, Social, and Influencer marketing.',
          deliverable: 'Financial spreadsheet model projecting customer acquisitions and revenue.'
        },
        learningResources: [
          { title: 'First Round Review: The Ultimate SaaS Metrics Guide', type: 'guide', url: 'https://review.firstround.com/' },
          { title: 'CXL: Growth Marketing Economics Course', type: 'doc', url: 'https://cxl.com/' }
        ]
      },
      {
        id: 'dmf-mod-3',
        title: 'Attribution Modeling, Tracking & Growth Loops',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'First-touch, last-touch, linear, W-shaped, data-driven attribution, and viral loops.',
        topics: ['Attribution Models: First-Click, Last-Click, Multi-Touch', 'UTM Parameter Standards & Campaign Tagging', 'Viral Growth Loops & Referral Mechanics', 'Data Privacy Changes (iOS ATT, Third-Party Cookie Deprecation)'],
        stepByStepExplanation: 'Last-touch attribution mistakenly credits the final click (often a branded search ad), completely undervaluing top-of-funnel social discovery ads that introduced the user to the brand. Modern growth utilizes multi-touch attribution and self-sustaining growth loops.',
        handsOnExercise: {
          title: 'Structure a Standardized UTM Parameter Convention',
          instructions: 'Create a company-wide UTM taxonomy for Google Ads, Facebook Ads, and email newsletters to ensure clean analytics ingestion.',
          taskSnippet: 'https://example.com/pricing?utm_source=meta&utm_medium=paid_social&utm_campaign=q4_promo&utm_content=video_testimonial',
          solutionTip: 'Always use lowercase characters and hyphens/underscores consistently in UTMs to prevent fragmented analytics rows.'
        },
        practicalProject: {
          title: 'B2B Growth Engine Audit & Reattribution Plan',
          objective: 'Audit a multi-channel funnel with 10 touchpoints, compare last-touch vs data-driven attribution, and propose ad budget reallocation.',
          deliverable: 'Executive presentation on channel attribution and expected CAC efficiency gain.'
        },
        learningResources: [
          { title: 'Google Analytics 4 Attribution Overview', type: 'doc', url: 'https://support.google.com/analytics/answer/10596866' },
          { title: 'Andrew Chen: The Cold Start Problem (Viral Loops)', type: 'guide', url: 'https://andrewchen.com/' }
        ]
      }
    ],
    quiz: {
      id: 'dmf-quiz',
      title: 'Digital Marketing Fundamentals Assessment',
      description: 'Evaluate your understanding of marketing funnels, acquisition unit economics, and attribution models.',
      passingScore: 70,
      questions: [
        {
          id: 'dmf-q1',
          question: 'What is a healthy benchmark for the Customer Lifetime Value to Customer Acquisition Cost (LTV:CAC) ratio in sustainable businesses?',
          options: ['0.5:1', '1:1', '3:1 or higher', '50:1'],
          correctAnswerIndex: 2,
          explanation: 'An LTV:CAC ratio of 3:1 or higher indicates a profitable, sustainable customer acquisition engine.'
        },
        {
          id: 'dmf-q2',
          question: 'Why is relying solely on Last-Click Attribution dangerous when optimizing multi-channel marketing campaigns?',
          options: ['It disables Google Analytics', 'It awards 100% of the conversion credit to the final touchpoint, severely undervaluing top-of-funnel brand awareness and discovery channels', 'It costs more money in ad fees', 'It only works for video ads'],
          correctAnswerIndex: 1,
          explanation: 'Last-click ignores initial discovery touchpoints, leading teams to mistakenly defund critical awareness campaigns.'
        },
        {
          id: 'dmf-q3',
          question: 'In the AIDA model, what does each letter represent in order?',
          options: ['Analysis, Insights, Data, Automation', 'Attention, Interest, Desire, Action', 'Acquisition, Integration, Delivery, Accounting', 'Audience, Impression, Delivery, Attribution'],
          correctAnswerIndex: 1,
          explanation: 'AIDA represents Attention (Awareness), Interest, Desire, and Action (Conversion).'
        }
      ]
    }
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'Digital Marketing',
    summary: 'Technical SEO, keyword research, on-page content optimization, search intent, backlink building, and Google Search Console mastery.',
    skillLevel: 'Beginner',
    totalDurationHours: 35,
    relatedCareers: ['Digital Marketing Specialist', 'Full Stack Developer'],
    tags: ['SEO', 'Keyword Research', 'Technical SEO', 'Backlinks', 'Core Web Vitals', 'Schema.org'],
    learningObjectives: [
      'Conduct keyword research and categorize queries by search intent (informational, navigational, commercial, transactional)',
      'Perform technical SEO audits covering crawlability, indexability, XML sitemaps, robots.txt, and canonical tags',
      'Optimize on-page elements: title tags, meta descriptions, semantic headings, internal linking, and Schema.org structured data',
      'Build authoritative white-hat backlinks and execute digital PR link-earning strategies',
      'Track search performance, organic traffic, and keyword rankings in Google Search Console'
    ],
    modules: [
      {
        id: 'seo-mod-1',
        title: 'Keyword Research & Search Intent Mapping',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Search volume, keyword difficulty, long-tail keywords, search intent classification, and SERP feature analysis.',
        topics: ['Search Intent: Informational, Commercial, Transactional, Navigational', 'Seed Keywords vs Long-Tail Keyword Opportunities', 'Keyword Difficulty (KD) vs Search Volume (SV)', 'SERP Features: Featured Snippets, People Also Ask (PAA), Local Pack'],
        stepByStepExplanation: 'Google ranks pages that best satisfy search intent. If the top 10 SERP results for a query are comparison roundups, Google expects comparative content. Creating a direct product sales page for an informational query will fail regardless of backlink volume.',
        handsOnExercise: {
          title: 'Conduct an SEO Keyword Research & Intent Matrix',
          instructions: 'Identify 15 target keywords for a cybersecurity tool, map their monthly search volume and KD, and assign search intent categories.',
          taskSnippet: '// Keyword: "best endpoint security tools 2026" -> SV: 4,200 | KD: 48 | Intent: Commercial Investigation | Content: In-Depth Comparison Table',
          solutionTip: 'Target long-tail keywords with low KD when launching new domains to build topical authority quickly.'
        },
        practicalProject: {
          title: 'Comprehensive SEO Keyword & Content Strategy Document',
          objective: 'Develop a 6-month topical cluster map covering 3 pillar pages and 12 supporting cluster articles.',
          deliverable: 'Content roadmap spreadsheet with mapped keywords and intent.'
        },
        learningResources: [
          { title: 'Ahrefs: Keyword Research for SEO (Beginner’s Guide)', type: 'guide', url: 'https://ahrefs.com/blog/keyword-research/' },
          { title: 'Google Search Central: How Search Works', type: 'doc', url: 'https://developers.google.com/search/docs/fundamentals/how-search-works' }
        ]
      },
      {
        id: 'seo-mod-2',
        title: 'Technical SEO, Crawl Budget & Structured Data',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Robots.txt, XML sitemaps, canonical tags, hreflang, status codes (301, 404, 503), and Schema.org markup.',
        topics: ['Crawlability vs Indexability Architecture', 'Robots.txt Directives & XML Sitemap Protocols', 'Canonical Tags (<link rel="canonical">) & Duplicate Content', 'JSON-LD Schema Markup (Article, FAQ, Product, Organization)'],
        stepByStepExplanation: 'Technical SEO ensures search bot crawlers can discover, render, and index your pages without wasting crawl budget. Canonical tags signal to Google which URL is the authoritative master version when duplicate parameters exist. Schema.org JSON-LD structured data enhances SERP snippets with rich stars, FAQs, and price tags.',
        handsOnExercise: {
          title: 'Implement Valid JSON-LD Schema Markup',
          instructions: 'Write a valid Schema.org Article and FAQPage JSON-LD snippet and validate it using the Google Rich Results Test.',
          taskSnippet: '{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{ "@type": "Question", "name": "...", "acceptedAnswer": {...} }]\n}',
          solutionTip: 'Place JSON-LD scripts inside the <head> or at the bottom of <body>; avoid generating schema dynamically with delayed JavaScript.'
        },
        practicalProject: {
          title: 'Full Technical SEO Site Audit & Remediation Plan',
          objective: 'Run a Screaming Frog or Sitebulb crawl on an e-commerce site, identify broken links, redirect chains, and missing alt tags, and compile a fix list.',
          deliverable: 'Technical audit spreadsheet with prioritized severity flags.'
        },
        learningResources: [
          { title: 'Google Search Central Technical SEO Documentation', type: 'doc', url: 'https://developers.google.com/search/docs/crawling-indexing' },
          { title: 'Schema.org Documentation', type: 'guide', url: 'https://schema.org/' }
        ]
      },
      {
        id: 'seo-mod-3',
        title: 'Authority Building, Digital PR & Performance Tracking',
        level: 'Advanced',
        estimatedMinutes: 105,
        overview: 'Domain authority, backlink velocity, unlinked brand mentions, HARO / Connectively, and Google Search Console analysis.',
        topics: ['Link Equity (PageRank) & Anchor Text Distribution', 'White-Hat Link Earning: Original Research & Statistics Posts', 'Google Search Console: Impressions, Clicks, Average Position', 'Diagnosing Google Core Algorithm Updates & Helpful Content Guidelines'],
        stepByStepExplanation: 'High-quality backlinks from established topical domains act as trust endorsements. Google’s Helpful Content system rewards original insights and firsthand experience (E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness). GSC reveals low-CTR high-impression keywords ready for title tag optimization.',
        handsOnExercise: {
          title: 'Identify "Quick Win" Keywords in Google Search Console',
          instructions: 'Filter GSC queries ranking between position 4 and 15 with CTR under 3%, and rewrite their meta titles and headings to capture click share.',
          taskSnippet: '// Opportunity: Query "how to write a resume" (Position 7.2, CTR 1.8%, Impressions 14,000) -> Action: Add Year and Benefit to Title Tag',
          solutionTip: 'Adding power words and the current year to meta titles frequently boosts CTR by 20-30% on page-one rankings.'
        },
        practicalProject: {
          title: 'Digital PR Link Earning Campaign & Study Release',
          objective: 'Design an original industry survey report, create linkable data graphics, and draft outreach pitches targeting tech journalists.',
          deliverable: 'Campaign pitch deck and published data research landing page.'
        },
        learningResources: [
          { title: 'Google Search Central: Creating Helpful, Reliable Content', type: 'doc', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
          { title: 'Backlinko: Link Building Guide for SEO', type: 'guide', url: 'https://backlinko.com/link-building' }
        ]
      }
    ],
    quiz: {
      id: 'seo-quiz',
      title: 'Search Engine Optimization Assessment',
      description: 'Test your understanding of search intent, technical crawlability, and Google Search Console analysis.',
      passingScore: 70,
      questions: [
        {
          id: 'seo-q1',
          question: 'What is the primary function of a canonical tag (<link rel="canonical" href="...">) on a webpage?',
          options: ['To speed up CSS animations', 'To tell search engines which URL represents the original, authoritative master copy to prevent duplicate content issues', 'To submit an XML sitemap', 'To block AI web scrapers'],
          correctAnswerIndex: 1,
          explanation: 'Canonical tags prevent duplicate content penalties by designating the authoritative URL for search engines.'
        },
        {
          id: 'seo-q2',
          question: 'What does Google’s E-E-A-T guideline stand for?',
          options: ['Efficiency, Execution, Analytics, Tracking', 'Experience, Expertise, Authoritativeness, Trustworthiness', 'Engagement, Evaluation, Acquisition, Targeting', 'Elasticity, Enterprise, Action, Traffic'],
          correctAnswerIndex: 1,
          explanation: 'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness.'
        },
        {
          id: 'seo-q3',
          question: 'If a webpage is ranking at average position 6 on Google with 20,000 monthly impressions but has a low CTR of 1.2%, what is the highest-leverage optimization?',
          options: ['Delete the page immediately', 'Rewrite the Meta Title and Meta Description to create a more compelling hook that matches search intent', 'Block the page in robots.txt', 'Convert the website to pure Flash'],
          correctAnswerIndex: 1,
          explanation: 'Optimizing titles and meta descriptions captures higher click-through rates without needing to rebuild the entire page.'
        }
      ]
    }
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'Digital Marketing',
    summary: 'Platform-native content strategies, audience engagement, viral distribution algorithms, influencer collaborations, and social analytics across LinkedIn, Instagram, TikTok, and X.',
    skillLevel: 'Beginner',
    totalDurationHours: 30,
    relatedCareers: ['Digital Marketing Specialist'],
    tags: ['Social Media', 'Content Creation', 'LinkedIn', 'Instagram', 'TikTok', 'Community Management'],
    learningObjectives: [
      'Understand platform-specific distribution algorithms for LinkedIn, Instagram, TikTok, and YouTube',
      'Create native content formats: short-form video hooks, carousel carousels, text threads, and live broadcasts',
      'Build authentic brand communities and implement proactive community moderation',
      'Structure influencer partnerships with deliverables, FTC disclosure compliance, and performance tracking',
      'Measure social engagement rates, share of voice, and direct conversion attribution'
    ],
    modules: [
      {
        id: 'smm-mod-1',
        title: 'Platform Algorithms & Native Content Formats',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Dwell time, retention curves, TikTok/Reels algorithms, LinkedIn text/PDF carousels, and the 3-second hook.',
        topics: ['Short-Form Video Anatomy: Hook, Retain, Payoff, CTA', 'The 3-Second Hook Rule & Visual Pattern Interrupts', 'LinkedIn Algorithm: Dwell Time, Document Posts (PDF Carousels), Comments', 'Repurposing Framework: One Core Idea into 5 Native Assets'],
        stepByStepExplanation: 'Social platforms incentivize keeping users inside their app. Videos succeed when watch time and completion percentage remain high. A compelling 3-second hook uses a visual pattern interrupt combined with an intriguing problem statement to stop the infinite scroll.',
        handsOnExercise: {
          title: 'Write 5 High-Retention Hooks for a Short-Form Video',
          instructions: 'Draft 5 hook variations (contrarian, question, story, visual shock, statistical) for a 45-second productivity tip reel.',
          taskSnippet: '// Contrarian Hook: "Stop using to-do lists. Here is why the top 1% of founders timebox their calendar instead."',
          solutionTip: 'Start immediately with the thesis in frame 1; cut out greeting pleasantries like "Hey guys, welcome back".'
        },
        practicalProject: {
          title: 'Multi-Platform 30-Day Content Calendar & Asset Kit',
          objective: 'Develop an editorial calendar with 20 distinct native posts mapped across LinkedIn, Instagram, and TikTok with copy and visual directions.',
          deliverable: 'Social content matrix spreadsheet and design templates in Figma/Canva.'
        },
        learningResources: [
          { title: 'Sprout Social: Social Media Algorithm Guide', type: 'guide', url: 'https://sproutsocial.com/insights/social-media-algorithms/' },
          { title: 'Buffer: How to Build a Social Media Strategy', type: 'doc', url: 'https://buffer.com/library/social-media-marketing-strategy/' }
        ]
      },
      {
        id: 'smm-mod-2',
        title: 'Community Building, Social Listening & Crisis Management',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'Reactive engagement, social listening tools, brand voice, and crisis de-escalation protocols.',
        topics: ['Proactive vs Reactive Community Engagement', 'Social Listening for Brand Mentions and Sentiment Analysis', 'Developing Brand Voice & Tone Guidelines', 'Social Media PR Crisis Protocol & Escalation Tiers'],
        stepByStepExplanation: 'Social channels are two-way conversations. Brands that merely broadcast ads without responding to comments see algorithmic penalties. Engaging thoughtfully in comment threads builds brand loyalty and humanizes corporate entities.',
        handsOnExercise: {
          title: 'Draft a Crisis De-Escalation Response Matrix',
          instructions: 'Write response templates for customer complaints, shipping delays, and PR criticism adhering to brand guidelines.',
          taskSnippet: '// Tier 1 Complaint: Acknowledge publicly within 15 mins -> Empathize -> Move to private DM with direct resolution contact',
          solutionTip: 'Never argue publicly in comments or delete legitimate criticism; acknowledge transparently and resolve privately.'
        },
        practicalProject: {
          title: 'Brand Community Launch Strategy for Discord & Reddit',
          objective: 'Design a launch blueprint for an enthusiast customer community with moderation rules, channel structures, and ambassador incentives.',
          deliverable: 'Community playbook document and onboarding welcome workflow.'
        },
        learningResources: [
          { title: 'Hootsuite: Social Listening Beginner’s Guide', type: 'guide', url: 'https://blog.hootsuite.com/social-listening-business/' },
          { title: 'Mention: Guide to Brand Monitoring', type: 'doc', url: 'https://mention.com/' }
        ]
      },
      {
        id: 'smm-mod-3',
        title: 'Influencer Marketing & Social ROI Measurement',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'Micro vs macro influencers, outreach contracts, FTC guidelines, affiliate tracking, and blended social ROI.',
        topics: ['Micro-Influencer Discovery & Engagement Rate Calculation', 'FTC Sponsorship Disclosure Rules (#ad, #sponsored)', 'Affiliate Promo Codes & Unique Tracking Links', 'Calculating Social Share of Voice (SOV) & Return on Investment'],
        stepByStepExplanation: 'Micro-influencers (10k-50k followers) frequently generate 3x higher engagement than celebrities because of deep audience trust. Contracts must clearly outline content deliverables, review windows, usage rights (whitelisting for paid ads), and performance payouts.',
        handsOnExercise: {
          title: 'Audit an Influencer for Fake Followers and Engagement',
          instructions: 'Calculate engagement rate percentage across 10 recent posts and analyze comments for genuine conversation vs automated bots.',
          taskSnippet: 'Engagement Rate = (Total Likes + Total Comments) / Follower Count * 100',
          solutionTip: 'An engagement rate above 3% on accounts under 50k followers indicates healthy audience affinity.'
        },
        practicalProject: {
          title: 'DTC Brand Influencer Marketing Campaign & Brief',
          objective: 'Develop an influencer outreach brief, contract agreement terms, tracking mechanics, and post-campaign evaluation report for 10 creators.',
          deliverable: 'Complete Influencer Campaign Playbook with KPI scorecard.'
        },
        learningResources: [
          { title: 'FTC Guidelines for Social Media Influencers', type: 'doc', url: 'https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers' },
          { title: 'Influencer Marketing Hub Benchmark Report', type: 'guide', url: 'https://influencermarketinghub.com/' }
        ]
      }
    ],
    quiz: {
      id: 'smm-quiz',
      title: 'Social Media Strategy Assessment',
      description: 'Evaluate your knowledge of social algorithms, retention hooks, and influencer campaign governance.',
      passingScore: 70,
      questions: [
        {
          id: 'smm-q1',
          question: 'Why are micro-influencers (10k to 50k followers) often more cost-effective for niche brand partnerships than mega-celebrities?',
          options: ['They do not require internet access', 'They typically boast higher engagement rates, tighter community trust, and more affordable partnership fees', 'They are legally exempt from contracts', 'They only post once per year'],
          correctAnswerIndex: 1,
          explanation: 'Micro-influencers maintain close relationships with dedicated niche audiences, delivering higher ROI than general celebrities.'
        },
        {
          id: 'smm-q2',
          question: 'What is the primary factor that short-form video algorithms (TikTok, Reels, Shorts) prioritize when deciding whether to push a video to a broader audience?',
          options: ['The font style of subtitles', 'Watch time retention, completion rate, and re-watches', 'The brand logo size', 'The camera brand used'],
          correctAnswerIndex: 1,
          explanation: 'Completion rate and watch time indicate viewer satisfaction, prompting algorithms to distribute the video widely.'
        },
        {
          id: 'smm-q3',
          question: 'What does the FTC legally mandate when a creator posts content sponsored by a brand?',
          options: ['Hiding the disclosure in the 20th comment', 'A clear, conspicuous, and upfront commercial disclosure (e.g. #ad or #sponsored) visible without needing to expand truncated text', 'No disclosure is necessary if they like the product', 'Only saying thank you in private email'],
          correctAnswerIndex: 1,
          explanation: 'FTC mandates clear, conspicuous upfront disclosure so consumers immediately recognize paid promotional endorsements.'
        }
      ]
    }
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    category: 'Digital Marketing',
    summary: 'Develop content pillars, author high-converting long-form articles, build editorial calendars, design lead magnets, and execute repurposing workflows.',
    skillLevel: 'Beginner',
    totalDurationHours: 32,
    relatedCareers: ['Digital Marketing Specialist'],
    tags: ['Content Marketing', 'Copywriting', 'Lead Magnets', 'Storytelling', 'Editorial Strategy', 'Blogging'],
    learningObjectives: [
      'Establish brand content pillars and audience-centered editorial calendars',
      'Write persuasive, scannable long-form articles using storytelling and persuasive copywriting principles',
      'Create high-converting lead magnets (ebooks, templates, calculators, cheatsheets)',
      'Build scalable content distribution engines that repurpose pillar assets into 10+ satellite formats',
      'Track content performance metrics: organic traffic, time on page, scroll depth, and lead conversions'
    ],
    modules: [
      {
        id: 'cm-mod-1',
        title: 'Content Strategy, Pillars & Audience Pain Points',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Content pillars, Jobs-to-be-Done (JTBD) framework, audience pain point mining, and editorial planning.',
        topics: ['Defining 3-5 Core Content Pillars', 'Jobs-To-Be-Done (JTBD) Audience Research', 'Mining Reddit, Quora, and Customer Support Tickets for Topics', 'Editorial Calendar Governance & Production Sprints'],
        stepByStepExplanation: 'Content marketing fails when teams produce aimless articles on random topics. Content pillars anchor your brand authority around specific core domains. Mining customer support tickets and community discussions uncovers the authentic questions real buyers are struggling with right now.',
        handsOnExercise: {
          title: 'Extract 10 Content Ideas from Reddit & Customer Inquiries',
          instructions: 'Analyze subreddit threads in your industry, identify 5 recurring points of confusion, and frame them into actionable how-to article titles.',
          taskSnippet: '// Forum Question: "How do I calculate runway with contractors?" -> Title: "The Startup Founder’s Complete Runway & Contractor Cash Flow Calculator"',
          solutionTip: 'Title articles with clear, tangible outcomes that solve the specific pain point directly.'
        },
        practicalProject: {
          title: 'B2B Brand Content Marketing Strategy & Pillar Playbook',
          objective: 'Define 4 content pillars, audience personas, monthly publication cadence, and contributor guidelines for a high-growth tech startup.',
          deliverable: 'Strategic content playbook document ready for team implementation.'
        },
        learningResources: [
          { title: 'Content Marketing Institute: Getting Started Guide', type: 'guide', url: 'https://contentmarketinginstitute.com/getting-started/' },
          { title: 'Animalz: The Content Marketing Playbook', type: 'doc', url: 'https://animalz.co/blog/' }
        ]
      },
      {
        id: 'cm-mod-2',
        title: 'High-Converting Copywriting & Structural Scaffolding',
        level: 'Intermediate',
        estimatedMinutes: 85,
        overview: 'The PAS framework (Problem, Agitate, Solve), bucket brigades, scannability, and persuasive hooks.',
        topics: ['Copywriting Frameworks: PAS, AIDA, BAB (Before-After-Bridge)', 'Bucket Brigades & Transition Hooks to Hold Attention', 'Visual Scannability: Subheadings, Bullet Points, and Pull Quotes', 'Crafting Irresistible Headlines (CoSchedule Headline Analyzer)'],
        stepByStepExplanation: 'Web users scan in an F-shaped reading pattern rather than reading every word. Scannable formatting uses concise paragraphs, descriptive subheadings, bolded takeaways, and visual breaks. The PAS formula hooks the reader by naming their problem, clarifying the pain, and revealing the solution.',
        handsOnExercise: {
          title: 'Rewrite a Dense 500-Word Block into a Scannable Article Section',
          instructions: 'Break down an academic 5-paragraph technical block into bullet points, bold key terms, and insert an engaging transition hook.',
          taskSnippet: '// Hook: "Here’s the catch:" -> Bullets highlighting 3 key benefits -> Pull quote emphasizing ROI',
          solutionTip: 'Keep paragraphs to a maximum of 2 to 3 sentences to ensure high mobile readability.'
        },
        practicalProject: {
          title: 'Flagship Ultimate Guide Pillar Article (2,500 words)',
          objective: 'Research, outline, and write a comprehensive ultimate guide targeting a high-intent keyword with custom graphics and downloadable checklist.',
          deliverable: 'Complete formatted markdown article with meta tags and lead capture triggers.'
        },
        learningResources: [
          { title: 'Copyblogger: Copywriting 101', type: 'guide', url: 'https://copyblogger.com/copywriting-101/' },
          { title: 'Ann Handley: Everybody Writes', type: 'doc', url: 'https://annhandley.com/everybodywrites/' }
        ]
      },
      {
        id: 'cm-mod-3',
        title: 'Lead Magnets & The Content Repurposing Engine',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'Opt-in incentives, gating strategies, GaryVee repurposing model, and conversion tracking.',
        topics: ['High-Value Lead Magnets (Templates, Calculators, Ebooks)', 'Gated vs Ungated Content Decisions', 'The 1-to-10 Repurposing Waterfall (Podcast -> Blog -> Threads -> Reels)', 'Measuring Assisted Conversions in Content Analytics'],
        stepByStepExplanation: 'A pillar asset (like a recorded webinar or research paper) should fuel your entire marketing engine for a month. Slice key insights into 5 LinkedIn carousels, 3 short-form videos, an email newsletter, and an infographic. Gating works best when the lead magnet provides immediate tactical utility.',
        handsOnExercise: {
          title: 'Design a Tactical Notion / Sheet Template Lead Magnet',
          instructions: 'Create a downloadable project budget template and write the high-converting landing page copy that drives email opt-ins.',
          taskSnippet: '// Headline: "Download the Exact Sprint Planning Spreadsheet Used by 200+ Engineering Leads (Free Notion Template)"',
          solutionTip: 'Templates and spreadsheets frequently convert 3x higher than long generic PDF ebooks because they offer immediate utility.'
        },
        practicalProject: {
          title: 'Quarterly Content Repurposing Engine & Automation',
          objective: 'Build an automated Zapier/Make workflow that takes published blog posts and queues social drafts across buffer and email sequences.',
          deliverable: 'Workflow architecture diagram and repurposed asset showcase.'
        },
        learningResources: [
          { title: 'GaryVee Content Model: How to Make 64 Pieces of Content in a Day', type: 'guide', url: 'https://garyvaynerchuk.com/how-to-create-64-pieces-of-content-in-a-day/' },
          { title: 'Unbounce: Guide to High-Converting Lead Generation Pages', type: 'doc', url: 'https://unbounce.com/' }
        ]
      }
    ],
    quiz: {
      id: 'cm-quiz',
      title: 'Content Marketing Assessment',
      description: 'Evaluate your knowledge of content pillars, copywriting frameworks, and lead magnet conversion strategies.',
      passingScore: 70,
      questions: [
        {
          id: 'cm-q1',
          question: 'What does the PAS copywriting framework stand for?',
          options: ['Plan, Act, Scale', 'Problem, Agitate, Solve', 'Promote, Analyze, Sell', 'Product, Audience, Sales'],
          correctAnswerIndex: 1,
          explanation: 'PAS stands for Problem (identify friction), Agitate (highlight emotional cost), and Solve (present the solution).'
        },
        {
          id: 'cm-q2',
          question: 'Why do actionable templates and checklists typically achieve higher lead conversion rates than generic 40-page ebooks?',
          options: ['Because people do not have computers', 'They offer immediate, tangible utility that saves time right away with minimal reading overhead', 'They are printed on cardstock', 'They are cheaper to host'],
          correctAnswerIndex: 1,
          explanation: 'Users crave immediate utility and shortcuts; templates deliver instant value compared to dense theory books.'
        },
        {
          id: 'cm-q3',
          question: 'What is a "Content Waterfall" or repurposing workflow?',
          options: ['Deleting old articles', 'Taking one substantial pillar content asset (e.g. deep research report) and extracting it into multiple derivative formats (social posts, videos, emails, infographics)', 'Running water over printed reports', 'Submitting sitemaps'],
          correctAnswerIndex: 1,
          explanation: 'A content waterfall extracts maximum ROI from a single high-effort asset across multiple derivative channels.'
        }
      ]
    }
  },
  {
    id: 'google-ads',
    title: 'Google Ads and Paid Advertising',
    category: 'Digital Marketing',
    summary: 'Search campaigns, match types, Quality Score, Smart Bidding strategies, Performance Max (PMax), and conversion tracking.',
    skillLevel: 'Intermediate',
    totalDurationHours: 36,
    relatedCareers: ['Digital Marketing Specialist'],
    tags: ['Google Ads', 'PPC', 'Search Ads', 'Quality Score', 'Performance Max', 'Bidding Strategies'],
    learningObjectives: [
      'Structure Google Ads accounts, campaigns, and ad groups with strict thematic separation',
      'Master keyword match types: Exact Match, Phrase Match, and Negative Keywords',
      'Optimize the 3 pillars of Google Quality Score: Expected CTR, Ad Relevance, and Landing Page Experience',
      'Configure Smart Bidding strategies: Maximize Conversions, Target CPA, and Target ROAS',
      'Deploy and optimize Performance Max (PMax) multi-channel asset groups'
    ],
    modules: [
      {
        id: 'gads-mod-1',
        title: 'Account Architecture, Match Types & Negative Keywords',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Campaign hierarchies, Exact match, Phrase match, Broad match, and negative keyword sculpting.',
        topics: ['Single-Theme Ad Groups (STAGs) Architecture', 'Keyword Match Types ([Exact], "Phrase", Broad)', 'Negative Keyword Lists to Prevent Wasted Spend', 'Ad Assets (Sitelinks, Callouts, Structured Snippets)'],
        stepByStepExplanation: 'Without negative keywords, Google will match your ads to irrelevant search queries (e.g., someone searching "free" or "jobs"), depleting your budget. Thematic Ad Groups ensure ads directly reflect search queries, raising relevance and click-through rates.',
        handsOnExercise: {
          title: 'Build a Negative Keyword Sculpting List',
          instructions: 'Assemble a list of 50 negative keywords for an expensive B2B enterprise software company to block job hunters, students, and free seekers.',
          taskSnippet: '// Negative keywords: "free", "open source", "crack", "torrent", "salary", "internship", "course", "jobs"',
          solutionTip: 'Apply account-level negative keyword lists so wasted queries are blocked across all existing and future campaigns.'
        },
        practicalProject: {
          title: 'Google Search Ads Campaign Architecture Blueprint',
          objective: 'Design a campaign structure for an emergency plumbing service with 4 themed ad groups, match types, and negative lists.',
          deliverable: 'Google Ads Editor import spreadsheet and campaign strategy document.'
        },
        learningResources: [
          { title: 'Google Skillshop: Google Ads Search Certification', type: 'guide', url: 'https://skillshop.withgoogle.com/' },
          { title: 'WordStream: Google Ads Benchmarks', type: 'doc', url: 'https://www.wordstream.com/blog/ws/2023/04/18/google-ads-benchmarks' }
        ]
      },
      {
        id: 'gads-mod-2',
        title: 'Quality Score Optimization & Responsive Search Ads',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Quality Score algorithm (1-10), ad relevance, landing page experience, and Responsive Search Ads (RSAs).',
        topics: ['The Ad Rank Formula: Bid x Quality Score x Asset Impact', 'Three Components of Quality Score (1-10)', 'Crafting High-Relevance Responsive Search Ads (15 Headlines, 4 Descriptions)', 'Aligning Ad Copy with Landing Page Message Match'],
        stepByStepExplanation: 'Google calculates Ad Rank using Bid times Quality Score. An advertiser with a 10/10 Quality Score pays up to 50% less per click than an advertiser with a 4/10 Quality Score to achieve the exact same top position. Quality Score depends on Expected CTR, Ad Relevance, and Landing Page Experience.',
        handsOnExercise: {
          title: 'Write a Responsive Search Ad with Message Match',
          instructions: 'Draft 15 headlines and 4 descriptions for a corporate tax software ad group, pinning the brand name and primary benefit.',
          taskSnippet: '// Headline 1: "Automate Corporate Tax Filings" | Headline 2: "Save 40+ Hours This Quarter" | Headline 3: "Trusted by 2,000+ CPAs"',
          solutionTip: 'Pinning headlines limits Google’s algorithmic testing permutations; pin sparingly only for legal or brand compliance.'
        },
        practicalProject: {
          title: 'Quality Score Diagnostic Audit & Remediation Plan',
          objective: 'Audit a struggling client account with low 3/10 Quality Scores, rebuild landing page speed and relevance, and measure CPC drops.',
          deliverable: 'Before/after optimization scorecard with projected monthly savings.'
        },
        learningResources: [
          { title: 'Google Ads Help: About Quality Score', type: 'doc', url: 'https://support.google.com/google-ads/answer/6167118' },
          { title: 'CXL: Advanced Google Ads Playbook', type: 'guide', url: 'https://cxl.com/' }
        ]
      },
      {
        id: 'gads-mod-3',
        title: 'Smart Bidding, Performance Max & Conversion Tracking',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'Target CPA, Target ROAS, Enhanced Conversions, and Performance Max (PMax) campaign tuning.',
        topics: ['Smart Bidding Algorithms (tCPA, tROAS, Max Conversions)', 'Google Tag (gtag.js) & Enhanced Conversions Setup', 'Performance Max (PMax): Asset Groups, Audience Signals, Search Themes', 'Handling Ad Fatigue and Click Fraud'],
        stepByStepExplanation: 'Smart Bidding uses machine learning to set bids in real time at the auction level based on billions of contextual signals (device, time of day, user search history). Enhanced Conversions sends hashed first-party customer data to Google to recover lost conversions caused by browser privacy blocks.',
        handsOnExercise: {
          title: 'Configure Target CPA Transition Strategy',
          instructions: 'Calculate the starting tCPA bid for a campaign with 60 conversions per month to prevent auction volume choking.',
          taskSnippet: '// Rule: Set initial tCPA at 10-15% above recent historical CPA for 2 weeks to allow algorithm learning before gradual tightening.',
          solutionTip: 'Do not adjust tCPA targets by more than 15% in a single week to avoid throwing the algorithm back into learning mode.'
        },
        practicalProject: {
          title: 'Full-Funnel E-Commerce Performance Max Launch',
          objective: 'Set up a PMax campaign with video assets, headlines, product feeds, custom intent audience signals, and negative brand exclusions.',
          deliverable: 'Complete PMax asset spec and conversion tracking QA audit.'
        },
        learningResources: [
          { title: 'Google Ads Help: Performance Max Campaigns', type: 'doc', url: 'https://support.google.com/google-ads/answer/10724817' },
          { title: 'Search Engine Land: The Ultimate Guide to PPC', type: 'guide', url: 'https://searchengineland.com/guide/what-is-paid-search' }
        ]
      }
    ],
    quiz: {
      id: 'gads-quiz',
      title: 'Google Ads & Paid PPC Assessment',
      description: 'Evaluate your knowledge of match types, Quality Score mechanics, and Smart Bidding algorithms.',
      passingScore: 70,
      questions: [
        {
          id: 'gads-q1',
          question: 'How does a high Quality Score (e.g. 9/10 or 10/10) directly impact an advertiser’s costs in Google Ads auctions?',
          options: ['It doubles the CPC bid automatically', 'It reduces the Cost Per Click (CPC) required to achieve top positions compared to lower-scoring competitors', 'It guarantees 100% conversion rate', 'It deletes negative keywords'],
          correctAnswerIndex: 1,
          explanation: 'Google rewards high quality with lower CPCs; advertisers with high Quality Scores pay less for top rank positions.'
        },
        {
          id: 'gads-q2',
          question: 'What is the function of Negative Keywords in a Google Search Ads campaign?',
          options: ['They insult the competitor', 'They prevent ads from triggering on irrelevant search queries, eliminating wasted ad spend', 'They lower the website ranking on organic search', 'They turn off mobile impressions'],
          correctAnswerIndex: 1,
          explanation: 'Negative keywords prevent ads from serving on unwanted search terms, safeguarding your budget.'
        },
        {
          id: 'gads-q3',
          question: 'What is the minimum recommended monthly conversion volume before enabling Target CPA (tCPA) or Target ROAS automated bidding on a campaign?',
          options: ['0 conversions', 'At least 30 to 50 reliable conversions per month so Google’s machine learning algorithm has sufficient signal', '1,000,000 conversions', 'Exactly 1 conversion'],
          correctAnswerIndex: 1,
          explanation: 'Smart Bidding needs sufficient conversion data (at least 30+ conversions per month) to model user intent accurately.'
        }
      ]
    }
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    category: 'Digital Marketing',
    summary: 'Email deliverability, DKIM/SPF/DMARC protocols, automated nurturing sequences, list segmentation, copywriting, and Klaviyo/Mailchimp workflows.',
    skillLevel: 'Beginner',
    totalDurationHours: 30,
    relatedCareers: ['Digital Marketing Specialist'],
    tags: ['Email Marketing', 'Deliverability', 'DMARC', 'Automation', 'Segmentation', 'Copywriting'],
    learningObjectives: [
      'Protect sender domain reputation with SPF, DKIM, DMARC, and BIMI authentication protocols',
      'Design automated lifecycle workflows: Welcome Sequences, Abandoned Cart, Post-Purchase, and Re-engagement',
      'Segment email subscriber lists by behavioral activity, recency, frequency, and monetary value (RFM)',
      'Write high-open subject lines, preview text, and single-CTA email body copy',
      'Analyze email metrics: Open Rates (Apple Mail Privacy Impact), Click-Through Rates, and Unsubscribe Rates'
    ],
    modules: [
      {
        id: 'em-mod-1',
        title: 'Deliverability, DNS Authentication & Inbox Placement',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'SPF, DKIM, DMARC policies, spam traps, sender score, and IP warm-up routines.',
        topics: ['SPF (Sender Policy Framework) TXT Records', 'DKIM (DomainKeys Identified Mail) Cryptographic Keys', 'DMARC Policies (none, quarantine, reject) and Alignment', 'Apple Mail Privacy Protection (MPP) & Open Rate Inflation'],
        stepByStepExplanation: 'Sending emails that land in spam destroys campaign ROI. Google and Yahoo enforce strict email sender requirements: custom sending domains must configure valid SPF, DKIM, and DMARC records. Apple Mail Privacy Protection pre-fetches email images, making open rates an inflated, unreliable engagement metric.',
        handsOnExercise: {
          title: 'Draft a DMARC Record Policy Configuration',
          instructions: 'Write a DNS TXT record for a DMARC policy with quarantine enforcement and aggregate reporting address.',
          taskSnippet: 'v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@example.com; pct=100; sp=quarantine',
          solutionTip: 'Start with p=none for 30 days to monitor legitimate email sources before upgrading to quarantine or reject.'
        },
        practicalProject: {
          title: 'Email Deliverability Audit & Domain Warm-Up Schedule',
          objective: 'Audit a new sending domain with Mail-Tester, configure DNS records, and design a 4-week sending volume ramp schedule.',
          deliverable: 'Domain configuration checklist and warm-up timetable.'
        },
        learningResources: [
          { title: 'Google Workspace: Email Sender Guidelines', type: 'doc', url: 'https://support.google.com/mail/answer/81126' },
          { title: 'Litmus: Email Deliverability Guide', type: 'guide', url: 'https://www.litmus.com/blog/email-deliverability' }
        ]
      },
      {
        id: 'em-mod-2',
        title: 'Lifecycle Automations & Behavioral Triggers',
        level: 'Intermediate',
        estimatedMinutes: 85,
        overview: 'Welcome series, abandoned cart recovery, browse abandonment, and win-back flows.',
        topics: ['The 4-Part Welcome Sequence Arc', 'High-Converting Abandoned Cart Timers & Discount Ladders', 'Customer Post-Purchase Onboarding & Review Requests', 'Sunset Flow for Disengaged Subscribers to Preserve Reputation'],
        stepByStepExplanation: 'Automated trigger flows generate up to 70% of total email revenue with zero incremental send labor. A welcome series introduces your origin story, delivers promised lead magnets, highlights bestsellers, and invites replies. Win-back flows proactively clean unengaged subscribers.',
        handsOnExercise: {
          title: 'Design an Abandoned Cart 3-Email Flow Sequence',
          instructions: 'Outline timing triggers, subject lines, and psychological angles for Email 1 (1 hr - reminder), Email 2 (24 hrs - social proof), and Email 3 (48 hrs - urgency/incentive).',
          taskSnippet: '// Email 1: "Did you forget something?" | Email 2: "See why 1,200+ customers love this" | Email 3: "Your cart expires tonight + 10% off"',
          solutionTip: 'Send Email 1 within 1 to 2 hours while purchase intent remains hot in the customer’s memory.'
        },
        practicalProject: {
          title: 'E-Commerce Klaviyo Automation Engine Blueprint',
          objective: 'Build conditional split flows in Klaviyo separating first-time purchasers from VIP multi-time buyers with custom product recommendations.',
          deliverable: 'Flow architecture map and complete email copy drafts.'
        },
        learningResources: [
          { title: 'Klaviyo Academy: Flow Foundations', type: 'guide', url: 'https://academy.klaviyo.com/' },
          { title: 'Really Good Emails: Design & Flow Inspiration', type: 'doc', url: 'https://reallygoodemails.com/' }
        ]
      },
      {
        id: 'em-mod-3',
        title: 'Advanced Segmentation & RFM Customer Modeling',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'Recency, Frequency, Monetary (RFM) segmentation, predictive churn, and dynamic personalization.',
        topics: ['RFM Matrix: Champions, Loyal, At-Risk, Lost', 'Dynamic Liquid Templating & Conditional Content Blocks', 'Subject Line A/B Testing (Curiosity vs Benefit vs Urgency)', 'Click-to-Open Rate (CTOR) Optimization'],
        stepByStepExplanation: 'Blasting generic emails to your entire list causes high unsubscribe rates and spam complaints. RFM segmentation groups subscribers by how recently they purchased, how frequently they buy, and how much they spend. Tailoring offers specifically to at-risk VIPs recovers revenue efficiently.',
        handsOnExercise: {
          title: 'Build RFM Behavioral Segments in an ESP',
          instructions: 'Define audience criteria for "VIP Customers" (Placed order > 3 times AND Spend > $250) and "At-Risk VIPs" (Last order > 90 days ago).',
          taskSnippet: '// VIP Segment: Placed Order >= 3 over all time AND Total Spent >= 250 over all time AND Has not unsubscribed',
          solutionTip: 'Reward VIPs with early access drops and private notes from the founder rather than steep discounts.'
        },
        practicalProject: {
          title: 'Black Friday / Cyber Monday (BFCM) Email Campaign System',
          objective: 'Develop a 7-day BFCM promotional calendar with VIP early access, hourly flash sales, and last-chance urgency sequences.',
          deliverable: 'Campaign schedule spreadsheet with full copy drafts and segment mappings.'
        },
        learningResources: [
          { title: 'Mailchimp: Audience Segmentation Guide', type: 'doc', url: 'https://mailchimp.com/resources/audience-segmentation-guide/' },
          { title: 'Val Geisler: Customer Onboarding via Email', type: 'guide', url: 'https://www.valgeisler.com/' }
        ]
      }
    ],
    quiz: {
      id: 'em-quiz',
      title: 'Email Marketing & Deliverability Assessment',
      description: 'Evaluate your knowledge of email authentication (DMARC), automated lifecycle triggers, and RFM segmentation.',
      passingScore: 70,
      questions: [
        {
          id: 'em-q1',
          question: 'What three DNS authentication records are required by Google and Yahoo for high-volume email senders?',
          options: ['HTML, CSS, JS', 'SPF, DKIM, and DMARC', 'FTP, SSH, and SSL', 'URL, URI, and URN'],
          correctAnswerIndex: 1,
          explanation: 'SPF, DKIM, and DMARC verify sender domain authenticity, preventing phishing and ensuring inbox placement.'
        },
        {
          id: 'em-q2',
          question: 'Why has Open Rate become a less reliable primary metric for evaluating email campaign success following Apple’s iOS 15 update?',
          options: ['Apple blocks all emails', 'Apple Mail Privacy Protection (MPP) pre-loads tracking pixels on privacy-enabled devices regardless of whether the user actually opened the email', 'Open rates are illegal to track', 'Only click rates exist'],
          correctAnswerIndex: 1,
          explanation: 'Apple MPP automatically pre-fetches images, recording false 100% open rates on Apple Mail clients.'
        },
        {
          id: 'em-q3',
          question: 'What is the goal of an email "Sunset Flow"?',
          options: ['To send emails at sunset', 'To send a final re-engagement message to chronically inactive subscribers and automatically unsubscribe them if they do not respond to protect sender reputation', 'To change the email background color', 'To increase newsletter price'],
          correctAnswerIndex: 1,
          explanation: 'Sunset flows prune inactive subscribers, maintaining high domain reputation and preventing spam trap hits.'
        }
      ]
    }
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics',
    category: 'Digital Marketing',
    summary: 'Master Google Analytics 4 (GA4), event-driven tracking schemas, Google Tag Manager (GTM), custom exploration reports, and conversion paths.',
    skillLevel: 'Beginner',
    totalDurationHours: 34,
    relatedCareers: ['Digital Marketing Specialist', 'Data Analyst'],
    tags: ['Google Analytics', 'GA4', 'GTM', 'Event Tracking', 'Explorations', 'Ecommerce'],
    learningObjectives: [
      'Understand the GA4 event-driven data model versus legacy Universal Analytics session models',
      'Configure tags, triggers, and variables in Google Tag Manager (GTM) for accurate event firing',
      'Set up enhanced ecommerce purchase tracking, item arrays, and checkout funnels',
      'Build custom Funnel Exploration and Free-Form Exploration reports in GA4',
      'Export raw GA4 event streams to Google BigQuery for SQL-driven data warehousing'
    ],
    modules: [
      {
        id: 'ga-mod-1',
        title: 'GA4 Event Data Model & Google Tag Manager (GTM)',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Events, parameters, user properties, GTM containers, and Preview Debug mode.',
        topics: ['GA4 Event-Driven Architecture (page_view, click, scroll, custom)', 'Event Parameters vs User Properties', 'Google Tag Manager Container Architecture (Tags, Triggers, Variables)', 'GTM Preview Mode & Tag Assistant Debugging'],
        stepByStepExplanation: 'Unlike legacy UA which operated on sessions and pageviews, GA4 treats every user interaction as an event with associated key-value parameters. Google Tag Manager decouples tracking deployment from code releases, allowing marketers to configure tracking triggers visually.',
        handsOnExercise: {
          title: 'Configure a Custom CTA Click Event in GTM',
          instructions: 'Create a Click Trigger in GTM firing on buttons with class "btn-cta-signup" and send an event "signup_cta_click" to GA4 with parameter cta_location.',
          taskSnippet: '// GTM Tag: GA4 Event | Event Name: signup_cta_click | Parameter: cta_location = {{Click Text}}',
          solutionTip: 'Always verify events using GTM Tag Assistant and the GA4 Realtime DebugView before publishing.'
        },
        practicalProject: {
          title: 'SaaS Web Application GTM Tracking Architecture',
          objective: 'Design a tracking plan covering 12 user milestone events (signup_start, pricing_toggle, modal_open, onboarding_finish) in GTM and GA4.',
          deliverable: 'Measurement plan spreadsheet and exported GTM container JSON.'
        },
        learningResources: [
          { title: 'Google Skillshop: Google Analytics 4 Certification', type: 'guide', url: 'https://skillshop.withgoogle.com/' },
          { title: 'Analytics Mania by Julius Fedorovicius', type: 'guide', url: 'https://www.analyticsmania.com/' }
        ]
      },
      {
        id: 'ga-mod-2',
        title: 'Ecommerce Tracking & Custom Explorations',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'DataLayer specifications, view_item, add_to_cart, purchase events, and Funnel Explorations.',
        topics: ['The GA4 Ecommerce DataLayer Specification', 'Purchase Event Verification & Transaction ID Deduplication', 'Building Funnel Explorations (Open vs Closed Funnels)', 'Path Exploration for User Flow Discovery'],
        stepByStepExplanation: 'Ecommerce tracking relies on a formatted dataLayer object pushed by the web application upon cart actions. GA4 Funnel Explorations allow you to pinpoint exact drop-off steps between view_item, add_to_cart, begin_checkout, and purchase.',
        handsOnExercise: {
          title: 'Write a GA4 purchase event dataLayer push',
          instructions: 'Format an items array conforming to GA4 schema with item_id, item_name, price, and currency for a completed checkout.',
          taskSnippet: 'window.dataLayer.push({\n  event: "purchase",\n  ecommerce: {\n    transaction_id: "T_12345",\n    value: 59.99,\n    currency: "USD",\n    items: [{ item_id: "SKU_1", item_name: "Pro Plan", price: 59.99 }]\n  }\n});',
          solutionTip: 'Ensure the transaction_id is unique per order so duplicate page refreshes do not inflate revenue numbers.'
        },
        practicalProject: {
          title: 'E-Commerce Funnel Diagnostic & Drop-Off Report',
          objective: 'Build a 5-step closed funnel exploration report in GA4, calculate step completion rates, and identify device-specific drop-off friction.',
          deliverable: 'Exploration report export and UX recommendation summary.'
        },
        learningResources: [
          { title: 'Google Analytics 4 Developer Guide: Ecommerce', type: 'doc', url: 'https://developers.google.com/analytics/devguides/collection/ga4/ecommerce' },
          { title: 'Simo Ahava’s Google Analytics Guide', type: 'guide', url: 'https://www.simoahava.com/' }
        ]
      },
      {
        id: 'ga-mod-3',
        title: 'BigQuery Export, SQL Queries & Advanced Audiences',
        level: 'Advanced',
        estimatedMinutes: 105,
        overview: 'Connecting GA4 to Google BigQuery, querying nested event parameters, and predictive audiences.',
        topics: ['GA4 to Google BigQuery Free Daily / Streaming Export', 'UNNESTing Repeated Record Fields in BigQuery SQL', 'Creating Predictive Audiences (Likely 7-Day Purchasers)', 'Consent Mode v2 Implementation for Privacy Compliance'],
        stepByStepExplanation: 'GA4 web UI exhibits thresholding and data sampling on large datasets. Linking GA4 to Google BigQuery exports raw, unsampled event logs daily for free. Querying nested event_params requires using the SQL UNNEST() function to flatten key-value arrays.',
        handsOnExercise: {
          title: 'Query Event Parameters in BigQuery SQL with UNNEST',
          instructions: 'Write a SQL query extracting total revenue and distinct user counts from the raw GA4 events table for a specific campaign.',
          taskSnippet: 'SELECT event_name, (SELECT value.string_value FROM UNNEST(event_params) WHERE key = "page_location") AS page\nFROM `project.analytics_123.events_*`\nWHERE _TABLE_SUFFIX = "20261010"',
          solutionTip: 'Always filter by _TABLE_SUFFIX date ranges to prevent scanning the entire historical dataset in BigQuery.'
        },
        practicalProject: {
          title: 'Automated BigQuery to Looker Studio Executive Dashboard',
          objective: 'Connect BigQuery GA4 event data to Looker Studio, build custom KPI visualizations, and schedule weekly automated client PDF reports.',
          deliverable: 'Working Looker Studio dashboard and SQL query views.'
        },
        learningResources: [
          { title: 'Google Cloud: BigQuery Export for GA4', type: 'doc', url: 'https://support.google.com/analytics/answer/7029846' },
          { title: 'Coupler.io: Querying GA4 in BigQuery Guide', type: 'guide', url: 'https://www.coupler.io/blog/ga4-bigquery/' }
        ]
      }
    ],
    quiz: {
      id: 'ga-quiz',
      title: 'Google Analytics 4 Mastery Assessment',
      description: 'Test your understanding of GA4 event models, Google Tag Manager, and BigQuery export schemas.',
      passingScore: 70,
      questions: [
        {
          id: 'ga-q1',
          question: 'What is the fundamental difference in data architecture between legacy Universal Analytics (UA) and GA4?',
          options: ['UA had no reports', 'UA was session-based with pageviews, while GA4 is entirely event-driven where every interaction is an event with parameters', 'GA4 only works on iPhones', 'GA4 deleted Google Tag Manager'],
          correctAnswerIndex: 1,
          explanation: 'GA4 unifies web and app tracking around a flexible event-and-parameter model rather than rigid session containers.'
        },
        {
          id: 'ga-q2',
          question: 'Why do data teams export GA4 event data to Google BigQuery?',
          options: ['To bypass internet firewalls', 'To access raw, unsampled, granular hit-level data free from UI reporting thresholds and sampling limitations', 'To make CSS load faster', 'To send emails'],
          correctAnswerIndex: 1,
          explanation: 'BigQuery exports raw, unaggregated, unsampled event rows for complex SQL queries and custom data science modeling.'
        },
        {
          id: 'ga-q3',
          question: 'In Google Tag Manager (GTM), what is a "Trigger"?',
          options: ['A piece of tracking code', 'The condition or event (e.g. click, form submission, timer) that tells GTM when to execute a Tag', 'A database index', 'A CSS property'],
          correctAnswerIndex: 1,
          explanation: 'Triggers evaluate runtime browser conditions to dictate exactly when tags should fire.'
        }
      ]
    }
  },
  {
    id: 'marketing-analytics',
    title: 'Marketing Analytics',
    category: 'Digital Marketing',
    summary: 'Marketing mix modeling (MMM), incrementality testing, customer cohort payback, advanced attribution, and executive growth reporting.',
    skillLevel: 'Intermediate',
    totalDurationHours: 36,
    relatedCareers: ['Digital Marketing Specialist', 'Data Analyst'],
    tags: ['Marketing Analytics', 'Incrementality', 'MMM', 'Attribution', 'CAC/LTV', 'Growth Modeling'],
    learningObjectives: [
      'Design geo-lift and holdout incrementality experiments to evaluate true marketing causal lift',
      'Understand Marketing Mix Modeling (MMM) principles: adstock decay and diminishing marginal returns',
      'Model customer cohort payback periods and blended efficiency ratios (MER)',
      'Calculate channel-specific return on investment and cost per incremental acquisition (iCAC)',
      'Present rigorous quantitative growth insights to executive boards and investors'
    ],
    modules: [
      {
        id: 'ma-mod-1',
        title: 'Incrementality Testing & Geo-Holdout Experiments',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Correlation vs causation, holdout groups, matched-market geo testing, and iROAS (incremental ROAS).',
        topics: ['Correlation vs Causation in Paid Marketing', 'Matched-Market Geo Testing Frameworks', 'Calculating Incremental Return on Ad Spend (iROAS)', 'Branded Search Lift vs Organic Cannibalization'],
        stepByStepExplanation: 'Platform ad managers report conversions that would have happened organically anyway (e.g., existing customers clicking a retargeting ad). Incrementality testing uses matched-market geo holdouts (e.g., turning off ads in Ohio while keeping them on in Pennsylvania) to calculate true causal sales lift.',
        handsOnExercise: {
          title: 'Calculate Incremental CAC and Lift from Holdout Data',
          instructions: 'Compute incremental conversions, incremental revenue, and true iROAS given test market sales vs holdout baseline sales.',
          taskSnippet: '// Incremental Lift = Test Region Sales - Holdout Scaled Sales | iROAS = Incremental Sales / Test Ad Spend',
          solutionTip: 'Scale the holdout baseline by pre-test historical volume ratios between the two regions to ensure fair comparisons.'
        },
        practicalProject: {
          title: 'Branded Search Ad Cannibalization Incrementality Test',
          objective: 'Design a 4-week incrementality test pausing branded search ads in 5 test DMAs, measuring organic traffic compensation and net profit.',
          deliverable: 'Executive memorandum summarizing findings and recommendations on branded search spend.'
        },
        learningResources: [
          { title: 'Google: Matched-Markets Geo Testing Methodology', type: 'doc', url: 'https://github.com/google/matched_markets' },
          { title: 'Harvard Business Review: The New Truth About Marketing ROI', type: 'guide', url: 'https://hbr.org/' }
        ]
      },
      {
        id: 'ma-mod-2',
        title: 'Marketing Mix Modeling (MMM) & Adstock Curves',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Top-down econometric modeling, adstock carryover effect, saturation curves, and budget optimization.',
        topics: ['Adstock Decay: Modeling Lagged Advertising Impact', 'Hill Function Diminishing Marginal Returns', 'Open-Source MMM Libraries (Robyn by Meta, Meridian by Google)', 'Simulating Optimal Budget Allocations Across Channels'],
        stepByStepExplanation: 'Marketing Mix Modeling uses multivariate time-series regression to measure channel impact without tracking cookies. Advertising doesn’t disappear immediately; the Adstock function models residual brand memory decaying over time. Diminishing returns curves highlight when a channel is over-saturated.',
        handsOnExercise: {
          title: 'Model Geometric Adstock Decay in Python',
          instructions: 'Apply geometric adstock decay with a 0.6 retention rate to daily TV and Facebook spend to calculate cumulative advertising pressure.',
          taskSnippet: 'adstocked = [spend[0]]\nfor s in spend[1:]:\n  adstocked.append(s + 0.6 * adstocked[-1])',
          solutionTip: 'Different channels exhibit different decay half-lives; TV memory lasts weeks, while social ads decay in days.'
        },
        practicalProject: {
          title: 'Cross-Channel Marketing Mix Optimization Simulation',
          objective: 'Fit an MMM regression model on 3 years of spend and revenue data, extract saturation inflection points, and simulate a 15% revenue increase.',
          deliverable: 'Python analysis notebook with saturation curve charts and budget simulator.'
        },
        learningResources: [
          { title: 'Meta Open Source: Project Robyn MMM', type: 'doc', url: 'https://facebookexperimental.github.io/Robyn/' },
          { title: 'Google Meridian MMM Documentation', type: 'guide', url: 'https://developers.google.com/meridian' }
        ]
      },
      {
        id: 'ma-mod-3',
        title: 'Marketing Efficiency Ratio (MER) & Executive Reporting',
        level: 'Advanced',
        estimatedMinutes: 105,
        overview: 'Blended MER, cash conversion cycles, contribution margin, and board presentations.',
        topics: ['Marketing Efficiency Ratio (MER = Total Revenue / Total Ad Spend)', 'Contribution Margin Post-Ad Spend (CM2)', 'Cash Conversion Cycle & Working Capital for Paid Growth', 'Executive Board Reporting: Storytelling with Financial Discipline'],
        stepByStepExplanation: 'Platform ROAS has become unreliable due to attribution overlaps. Modern CFOs evaluate MER (Marketing Efficiency Ratio): total revenue divided by total marketing investment. Aligning marketing KPIs with Contribution Margin ensures rapid acquisition does not erode business profitability.',
        handsOnExercise: {
          title: 'Calculate Contribution Margin 2 (CM2) After Paid Marketing',
          instructions: 'Compute Gross Profit, subtract fulfillment, payment processing, and paid advertising spend to find true net unit contribution.',
          taskSnippet: 'CM2 = Revenue - COGS - Shipping - MerchantFees - TotalAdSpend',
          solutionTip: 'If CM2 turns negative, scaling ad spend will rapidly accelerate cash burn rather than growing enterprise value.'
        },
        practicalProject: {
          title: 'Annual Marketing Board Deck & Performance Model',
          objective: 'Compile channel CAC, LTV cohort expansion, incrementality test outputs, and MER into a 10-slide executive board presentation.',
          deliverable: 'Executive slide deck and spreadsheet financial model.'
        },
        learningResources: [
          { title: 'Reforge: Advanced Growth Marketing Metrics', type: 'guide', url: 'https://www.reforge.com/' },
          { title: 'David Spitz: SaaS Metrics & Benchmark Analysis', type: 'doc', url: 'https://www.benchmarks.com/' }
        ]
      }
    ],
    quiz: {
      id: 'ma-quiz',
      title: 'Marketing Analytics & Growth Assessment',
      description: 'Evaluate your knowledge of incrementality testing, Adstock decay curves, and Marketing Efficiency Ratios.',
      passingScore: 70,
      questions: [
        {
          id: 'ma-q1',
          question: 'What does Marketing Incrementality testing measure that standard platform attribution fails to capture?',
          options: ['Total impressions served', 'The true causal net lift in sales directly caused by the advertising versus purchases that would have happened organically anyway', 'The speed of the web server', 'The number of followers gained'],
          correctAnswerIndex: 1,
          explanation: 'Incrementality isolates true causal lift by comparing exposed audiences against unexposed holdout baselines.'
        },
        {
          id: 'ma-q2',
          question: 'In Marketing Mix Modeling (MMM), what is the "Adstock" effect?',
          options: ['Stock prices of advertising agencies', 'The mathematical modeling of how advertising awareness carries over and decays over time after initial exposure', 'The total number of ad creatives stored on a server', 'A stock trading algorithm'],
          correctAnswerIndex: 1,
          explanation: 'Adstock models consumer memory retention and lagged behavioral response following ad exposure.'
        },
        {
          id: 'ma-q3',
          question: 'How is the Marketing Efficiency Ratio (MER), also known as Blended ROAS, calculated?',
          options: ['Total Revenue divided by Total Marketing Spend across all channels', 'Facebook clicks multiplied by Google conversions', 'Only email revenue divided by domain fees', 'Total website visits minus bounce rate'],
          correctAnswerIndex: 0,
          explanation: 'MER divides total top-line revenue by total marketing expenditure, providing an objective blended performance measure.'
        }
      ]
    }
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding',
    category: 'Digital Marketing',
    summary: 'Build a distinctive professional brand, thought leadership on LinkedIn and X, newsletter publishing, public speaking, and executive positioning.',
    skillLevel: 'Beginner',
    totalDurationHours: 28,
    relatedCareers: ['Digital Marketing Specialist', 'Full Stack Developer', 'UI/UX Designer', 'Data Scientist'],
    tags: ['Personal Brand', 'LinkedIn', 'Networking', 'Thought Leadership', 'Public Speaking', 'Publishing'],
    learningObjectives: [
      'Define a clear professional niche, unique positioning statement, and target audience',
      'Optimize LinkedIn profiles into inbound client and recruiter landing pages',
      'Write authentic thought-leadership essays and build an engaged social following',
      'Launch and grow a personal weekly email newsletter to own your audience direct relationship',
      'Secure podcast interviews, speaking engagements, and collaborative industry partnerships'
    ],
    modules: [
      {
        id: 'pb-mod-1',
        title: 'Niche Definition & Profile Landing Page Architecture',
        level: 'Beginner',
        estimatedMinutes: 65,
        overview: 'Ikigai personal positioning, headline copywriting, featured section curation, and social proof.',
        topics: ['The Positioning Formula: "I help [Audience] achieve [Result] without [Friction]"', 'LinkedIn Headline Architecture (Title | Value Prop | Social Proof)', 'Featured Section Strategy: Lead Magnets, Flagship Projects, Press', 'Writing a Compelling "About" Story Arc (Hook, Background, Wins, Contact)'],
        stepByStepExplanation: 'Your social profile is not an online resume; it is a landing page. Recruiters and clients skim your headline and featured section in 5 seconds. A strong headline clearly states who you help and what concrete outcome you deliver rather than merely listing your job title.',
        handsOnExercise: {
          title: 'Write a High-Converting LinkedIn Profile Headline and About Section',
          instructions: 'Draft 3 headline variations and a 200-word About narrative following the Hook-Story-Offer architecture.',
          taskSnippet: '// Headline: "Senior React Engineer | Helping B2B SaaS Scale Frontend Performance to Sub-Second Load Times | Ex-Stripe"',
          solutionTip: 'Include social proof and a tangible outcome directly in your headline.'
        },
        practicalProject: {
          title: 'Personal Brand Audit & Visual Profile Redesign',
          objective: 'Audit your existing online footprint, craft a custom banner in Figma, write headline copy, and curate your top 3 work showcases.',
          deliverable: 'Polished personal LinkedIn and portfolio presence ready for launch.'
        },
        learningResources: [
          { title: 'Justin Welsh: The LinkedIn Operating System', type: 'guide', url: 'https://www.justinwelsh.me/' },
          { title: 'Austin Belcak: How to Optimize Your LinkedIn Profile', type: 'doc', url: 'https://cultivatedculture.com/linkedin-profile-tips/' }
        ]
      },
      {
        id: 'pb-mod-2',
        title: 'Content Publishing & Thought Leadership Cadence',
        level: 'Intermediate',
        estimatedMinutes: 75,
        overview: 'Content pillars, storytelling frameworks, building in public, and handling controversy.',
        topics: ['The "Building in Public" Philosophy', 'Storytelling Structures: The Pivot Point, The Costly Mistake, The Playbook Breakdown', 'Consistency System: 3 Posts per Week Production Routine', 'Audience Engagement & Strategic Commenting on Industry Leaders'],
        stepByStepExplanation: 'Audiences connect with vulnerability and real lessons learned. "Building in public" shares the transparent journey: what failed, how you resolved it, and what you learned. Engaging thoughtfully in comment sections of established creators builds reciprocal visibility.',
        handsOnExercise: {
          title: 'Write a "Lesson Learned from a Mistake" Post',
          instructions: 'Author a 250-word post detailing a real project hurdle, what broke, how you debugged it, and the actionable takeaway for your peers.',
          taskSnippet: '// Hook: "In 2024, our server crashed during peak traffic because of one line of code. Here’s what happened:"',
          solutionTip: 'Always conclude your story with 2-3 actionable lessons that the reader can apply to their own work today.'
        },
        practicalProject: {
          title: '14-Day Publishing Sprint & Performance Review',
          objective: 'Draft and publish 6 high-value thought leadership posts over two weeks, tracking impressions, inbound messages, and profile visits.',
          deliverable: 'Analytics log and reflection report on top-performing topics.'
        },
        learningResources: [
          { title: 'Dickie Bush & Nicolas Cole: Ship 30 for 30 Guide', type: 'guide', url: 'https://ship30for30.com/' },
          { title: 'Kevan Lee: Guide to Thought Leadership', type: 'doc', url: 'https://kevanlee.com/' }
        ]
      },
      {
        id: 'pb-mod-3',
        title: 'Owned Media, Newsletters & Speaking Engagements',
        level: 'Advanced',
        estimatedMinutes: 90,
        overview: 'Converting social followers to owned newsletter subscribers, Substack/Beehiiv, and pitching podcasts.',
        topics: ['Rented Land (Social Networks) vs Owned Media (Email Newsletters)', 'Launching a Weekly Newsletter on Substack or Beehiiv', 'Pitching Podcasts and Conference Speaking Opportunities', 'Monetizing a Brand: Advisory, Freelancing, Digital Products'],
        stepByStepExplanation: 'Algorithm changes can wipe out social reach overnight. Building an owned email newsletter protects your direct relationship with your audience. As your authority grows, leverage it into conference keynotes, consulting advisory retainers, or high-value freelance contracts.',
        handsOnExercise: {
          title: 'Write a Cold Pitch Email to an Industry Podcast',
          instructions: 'Draft a 150-word pitch email to a host detailing 3 specific, non-obvious topics you can teach their listeners with unique insights.',
          taskSnippet: '// Pitch: "Hi [Host], Loved your episode on [Topic]. I recently scaled an app to 100k users with zero ad spend—here are 3 counterintuitive lessons your listeners might find valuable:"',
          solutionTip: 'Keep podcast pitches focused entirely on the value and tactical takeaways you can deliver to the host’s specific audience.'
        },
        practicalProject: {
          title: 'Personal Weekly Newsletter Launch Blueprint',
          objective: 'Set up a Beehiiv/Substack publication, design the header and welcome email, and author Issue #1 teaching a signature framework.',
          deliverable: 'Live newsletter publication link and first published edition.'
        },
        learningResources: [
          { title: 'Beehiiv Newsletter Academy', type: 'guide', url: 'https://www.beehiiv.com/blog' },
          { title: 'Dorie Clark: Stand Out (Building a Following)', type: 'doc', url: 'https://dorieclark.com/standout/' }
        ]
      }
    ],
    quiz: {
      id: 'pb-quiz',
      title: 'Personal Branding Assessment',
      description: 'Evaluate your knowledge of professional positioning, thought leadership writing, and owned media channels.',
      passingScore: 70,
      questions: [
        {
          id: 'pb-q1',
          question: 'Why is relying solely on social media algorithms (LinkedIn, X, Instagram) without building an owned email list risky for a personal brand?',
          options: ['Social media accounts are deleted every month', 'You are building on "rented land"; sudden algorithmic changes can drastically slash your organic reach overnight', 'Social media is illegal for professionals', 'Nobody checks social media'],
          correctAnswerIndex: 1,
          explanation: 'Social networks control algorithm distribution; an owned email list ensures an uninterrupted direct line to your audience.'
        },
        {
          id: 'pb-q2',
          question: 'What makes a LinkedIn headline most compelling to prospective clients or recruiters?',
          options: ['Just stating "Unemployed" or "Seeking Opportunities"', 'Clearly articulating the target audience you help, the tangible outcome you deliver, and credible social proof', 'Using all capital letters with sparkle emojis', 'Leaving the headline blank'],
          correctAnswerIndex: 1,
          explanation: 'Clear value propositions and concrete proof immediately communicate relevance and capability.'
        },
        {
          id: 'pb-q3',
          question: 'What is the primary advantage of "Building in Public"?',
          options: ['Working outside in a park', 'Sharing transparent lessons, challenges, and successes to build authentic trust and community rapport', 'Writing code without passwords', 'Broadcasting continuous sales pitches'],
          correctAnswerIndex: 1,
          explanation: 'Building in public establishes authentic credibility by showcasing real problem solving and transparent progress.'
        }
      ]
    }
  }
];
