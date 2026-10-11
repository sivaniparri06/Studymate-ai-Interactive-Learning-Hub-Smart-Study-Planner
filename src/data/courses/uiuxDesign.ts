import { Course } from '../../types';

export const uiuxDesignCourses: Course[] = [
  {
    id: 'uiux-design-fundamentals',
    title: 'UI/UX Design Fundamentals',
    category: 'UI/UX and Design',
    summary: 'Master the fundamental tenets of visual hierarchy, typography, affordances, cognitive load, and human-centered design thinking.',
    skillLevel: 'Beginner',
    totalDurationHours: 36,
    relatedCareers: ['UI/UX Designer', 'Frontend Development'],
    tags: ['UI Design', 'UX Research', 'Visual Hierarchy', 'Typography', 'Color Theory', 'Affordances'],
    learningObjectives: [
      'Apply the 5 stages of Design Thinking: Empathize, Define, Ideate, Prototype, Test',
      'Create intuitive visual hierarchies using scale, contrast, whitespace, and alignment',
      'Select and pair typefaces with appropriate vertical rhythm and line-height proportions',
      'Apply psychological UX laws: Hick’s Law, Fitts’s Law, Jakob’s Law, and Miller’s Law',
      'Design accessible, WCAG-compliant digital user interfaces'
    ],
    modules: [
      {
        id: 'uiux-f-mod-1',
        title: 'Design Thinking & Cognitive Psychology Principles',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Double Diamond process, mental models, cognitive load, and foundational UX laws.',
        topics: ['Double Diamond: Discover, Define, Develop, Deliver', 'Jakob’s Law of Internet User Experience', 'Fitts’s Law & Target Acquisition Speed', 'Hick’s Law & Choice Overload'],
        stepByStepExplanation: 'Users spend most of their time on other websites, meaning they expect your interface to work similarly (Jakob’s Law). Design thinking begins by setting aside personal assumptions to uncover genuine user friction through qualitative inquiry.',
        handsOnExercise: {
          title: 'Apply Hick’s Law to Simplify a Complex Checkout Flow',
          instructions: 'Audit a 14-field single-page checkout form and redesign it into a progressive multi-stage flow with clear default selections.',
          taskSnippet: '// Group: Shipping Information -> Delivery Method -> Payment Info -> Review',
          solutionTip: 'Breaking complex decisions into sequential chunks drastically reduces cognitive fatigue and cart abandonment.'
        },
        practicalProject: {
          title: 'Mobile Banking App Onboarding Redesign Case Study',
          objective: 'Analyze onboarding drop-offs for a fintech app, identify cognitive barriers, and design a frictionless 3-step setup flow.',
          deliverable: 'Visual design audit presentation comparing old vs proposed solution.'
        },
        learningResources: [
          { title: 'Laws of UX by Jon Yablonski', type: 'guide', url: 'https://lawsofux.com/' },
          { title: 'Nielsen Norman Group: UX Design 101', type: 'doc', url: 'https://www.nngroup.com/articles/definition-user-experience/' }
        ]
      },
      {
        id: 'uiux-f-mod-2',
        title: 'Visual Hierarchy, Typography & Layout Math',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Modular type scales, golden ratio spacing, 8pt spatial grid, and color contrast.',
        topics: ['The 8pt Grid System & Spacing Tokens', 'Modular Typography Scales (1.250 / 1.333)', 'Leading, Tracking & Measure (Line Length 45-75 chars)', '60-30-10 Color Distribution Principle'],
        stepByStepExplanation: 'Consistent spatial grids eliminate visual hesitation. The 8pt grid ensures all padding, margins, and component heights are multiples of 8 (or 4 for tight elements). A typographic scale sets predictable contrast between display titles, section headings, and body text.',
        handsOnExercise: {
          title: 'Construct an 8pt Spaced Landing Hero Component',
          instructions: 'Set up an 8pt vertical rhythm for eyebrow text, headline, subhead, and CTA buttons with WCAG AAA color contrast.',
          taskSnippet: '// Baseline rhythm: Title 32px (line-height 40px) -> mb-16 -> Body 16px (line-height 24px) -> mb-24 -> Button',
          solutionTip: 'Always align button padding to multiples of 4 or 8 to prevent half-pixel rendering artifacts.'
        },
        practicalProject: {
          title: 'SaaS Marketing Homepage Visual Rebrand',
          objective: 'Design a high-converting desktop and mobile landing page applying consistent type scales and spatial token discipline.',
          deliverable: 'High-fidelity Figma file with structured layout grid and typography styles.'
        },
        learningResources: [
          { title: 'The 8-Point Grid by Elliot Dahl', type: 'guide', url: 'https://spec.fm/specifics/8-pt-grid' },
          { title: 'Butterick’s Practical Typography', type: 'doc', url: 'https://practicaltypography.com/' }
        ]
      },
      {
        id: 'uiux-f-mod-3',
        title: 'Micro-Interactions, Feedback & Accessibility (a11y)',
        level: 'Advanced',
        estimatedMinutes: 105,
        overview: 'Trigger-rule-feedback loops, state transitions (hover, active, disabled, focus), and WCAG 2.2 criteria.',
        topics: ['Micro-Interactions: Triggers, Rules, Feedback, Loops', 'Visible Focus Rings & Keyboard Navigation UX', 'Color Contrast Ratios (4.5:1 text, 3:1 graphical)', 'Error States & Affirmative Recovery Messaging'],
        stepByStepExplanation: 'Micro-interactions provide immediate confirmation of user actions (such as a subtle button bounce or checkmark animation). Interfaces must never communicate state through color alone; accompany color with iconography and descriptive helper text.',
        handsOnExercise: {
          title: 'Design an Accessible Inline Form Validation System',
          instructions: 'Design success, warning, and error states for an input field with visible focus borders, aria-describedby helper copy, and iconography.',
          taskSnippet: '// Input States: Default -> Focus (2px offset ring) -> Invalid (Icon + Error message) -> Valid (Checkmark)',
          solutionTip: 'Never disable submit buttons without explaining why; show validation errors when clicked instead.'
        },
        practicalProject: {
          title: 'Accessible Design System Component Audit',
          objective: 'Audit a component suite against WCAG 2.2 AA standards, remediate contrast flaws, and design accessible interactive states.',
          deliverable: 'Figma component library with documented state matrices.'
        },
        learningResources: [
          { title: 'W3C Web Content Accessibility Guidelines (WCAG) 2.2', type: 'doc', url: 'https://www.w3.org/TR/WCAG22/' },
          { title: 'Microinteractions: Designing with Details by Dan Saffer', type: 'guide', url: 'https://www.oreilly.com/library/view/microinteractions/9781449343361/' }
        ]
      }
    ],
    quiz: {
      id: 'uiux-f-quiz',
      title: 'UI/UX Fundamentals Assessment',
      description: 'Test your understanding of UX laws, visual spacing grids, and accessibility standards.',
      passingScore: 70,
      questions: [
        {
          id: 'uiux-f-q1',
          question: 'According to Fitts’s Law, how can you make an interactive button faster and easier for users to click?',
          options: ['Make it transparent', 'Make the target larger and position it closer to the user’s expected cursor or thumb position', 'Place it in the furthest corner', 'Make the text italicized'],
          correctAnswerIndex: 1,
          explanation: 'Fitts’s Law states the time required to move to a target is a function of target distance and target size.'
        },
        {
          id: 'uiux-f-q2',
          question: 'What is the minimum WCAG 2.1 AA contrast ratio required for normal body text against its background?',
          options: ['2:1', '3:1', '4.5:1', '10:1'],
          correctAnswerIndex: 2,
          explanation: 'WCAG AA requires at least 4.5:1 contrast for standard text and 3:1 for large text (18pt+ or 14pt bold).'
        },
        {
          id: 'uiux-f-q3',
          question: 'What does Jakob’s Law advise product designers?',
          options: ['Never use blue buttons', 'Users expect your site to function similarly to the other sites they already spend time on', 'Always reinvent navigation conventions', 'Only build mobile apps'],
          correctAnswerIndex: 1,
          explanation: 'Jakob’s Law reminds us that familiar patterns allow users to focus on tasks rather than learning custom UI quirks.'
        }
      ]
    }
  },
  {
    id: 'figma',
    title: 'Figma',
    category: 'UI/UX and Design',
    summary: 'Master industry-standard collaborative product design: Auto Layout 5, Component Variants, Design Tokens, Variables, and Prototyping.',
    skillLevel: 'Beginner',
    totalDurationHours: 35,
    relatedCareers: ['UI/UX Designer', 'Frontend Development'],
    tags: ['Figma', 'Auto Layout', 'Component Properties', 'Variables', 'Design Tokens', 'Prototyping'],
    learningObjectives: [
      'Master Auto Layout nesting, fill/hug/fixed constraints, and absolute positioning',
      'Architect robust components with variant properties, boolean toggles, and instance swaps',
      'Create multi-mode variables (light/dark themes, spacing scales, density modes)',
      'Build realistic interactive prototypes with smart animate and variable conditionals',
      'Prepare production-ready developer handoff specs and design tokens'
    ],
    modules: [
      {
        id: 'figma-mod-1',
        title: 'Auto Layout 5 & Responsive Constraints',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Directional flow, padding, gap, Hug/Fill/Fixed sizing, and nested frame architectures.',
        topics: ['Auto Layout Direction & Alignment', 'Hug Contents vs Fill Container vs Fixed', 'Auto Layout Absolute Positioning & Stacking Order', 'Min/Max Width and Height Constraints'],
        stepByStepExplanation: 'Auto Layout mimics CSS Flexbox. Setting a child frame to "Fill Container" ensures it dynamically stretches across available space, while "Hug Contents" resizes the parent wrapper to fit its children. Nesting horizontal and vertical Auto Layout frames creates responsive components that resize seamlessly.',
        handsOnExercise: {
          title: 'Build a Fully Responsive Social Media Post Card',
          instructions: 'Create a post card with author avatar, text caption, image thumbnail, and action icons that adapts cleanly from 320px to 600px width.',
          taskSnippet: '// Frame: Vertical Auto Layout (Hug) -> Header (Fill, Horizontal) -> Image (Fill, Fixed 240px) -> Actions (Fill, Space-Between)',
          solutionTip: 'Set the main card wrapper to Fill Container with min-width: 320px and max-width: 600px.'
        },
        practicalProject: {
          title: 'Responsive E-Commerce Product Card System',
          objective: 'Design product cards that flex from desktop 4-column grids to mobile single-column layouts with badge overlays.',
          deliverable: 'Figma file with test artboards validating responsive behaviors.'
        },
        learningResources: [
          { title: 'Figma Learn: Auto Layout Deep Dive', type: 'doc', url: 'https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties' },
          { title: 'Figma YouTube: Master Auto Layout', type: 'video', url: 'https://www.youtube.com/@Figma' }
        ]
      },
      {
        id: 'figma-mod-2',
        title: 'Component Architecture, Variants & Variables',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Master components, component properties (text, boolean, instance swap), and Figma Variables for theming.',
        topics: ['Component Sets & Variant Dimensions', 'Boolean & Instance Swap Properties', 'Figma Variables: Color, Number, String, Boolean', 'Multi-Mode Variables (Light & Dark Themes)'],
        stepByStepExplanation: 'Rather than creating dozens of detached button copies, modern Figma utilizes component properties. Boolean properties toggle optional elements (like leading icons) on and off. Variables store reusable values (brand colors, border radii) and allow instant switching between light and dark modes across entire screens.',
        handsOnExercise: {
          title: 'Construct a Unified Button Component Set',
          instructions: 'Create a button component with Variants for hierarchy (Primary, Secondary, Ghost), Size (Sm, Md, Lg), and States (Default, Hover, Disabled, Loading).',
          taskSnippet: '// Properties: Hierarchy (Variant), Size (Variant), HasLeadingIcon (Boolean), Label (Text), IsLoading (Boolean)',
          solutionTip: 'Use component properties rather than separate variants for icon toggles to prevent variant combinatorial explosions.'
        },
        practicalProject: {
          title: 'Multi-Brand & Dark Mode Design System Tokens',
          objective: 'Create a design token variable collection supporting Light and Dark modes with automatic token inheritance.',
          deliverable: 'Component library with switchable mode preview artboards.'
        },
        learningResources: [
          { title: 'Figma Help: Guide to Variables', type: 'doc', url: 'https://help.figma.com/hc/en-us/articles/15339657135895-Guide-to-variables-in-Figma' },
          { title: 'Component Architecture in Figma by Ridd', type: 'guide', url: 'https://www.dive.club/' }
        ]
      },
      {
        id: 'figma-mod-3',
        title: 'Advanced Interactive Prototyping & Developer Handoff',
        level: 'Advanced',
        estimatedMinutes: 105,
        overview: 'Smart Animate, variable conditionals, expression logic, and Dev Mode handoff.',
        topics: ['Smart Animate Matching Layers & Easing Curves', 'Prototyping with Variables & Conditionals', 'Interactive Form Inputs & Cart Calculation Logic', 'Figma Dev Mode: Code Syntax, Specs, and Exporting'],
        stepByStepExplanation: 'Smart Animate matches identical layer names between screens to smoothly interpolate position, size, opacity, and rotation. Variables enable interactive logic—such as incrementing an in-prototype shopping cart total using expression math and conditional branching.',
        handsOnExercise: {
          title: 'Build a Working E-Commerce Cart Prototype with Variables',
          instructions: 'Prototype an item card where clicking "Add to Cart" increments a cart badge count variable and updates subtotal conditionally.',
          taskSnippet: '// Trigger: On Click -> Set Variable: cartCount = cartCount + 1 -> Open Overlay: Cart Drawer',
          solutionTip: 'Layer names must match identically across both frames for Smart Animate to cross-dissolve and slide smoothly.'
        },
        practicalProject: {
          title: 'High-Fidelity Mobile Banking App Prototype',
          objective: 'Build an interactive mobile app prototype with PIN authentication, transaction filters, and send-money drawer.',
          deliverable: 'Fully clickable Figma prototype ready for user testing.'
        },
        learningResources: [
          { title: 'Figma Prototyping Documentation', type: 'doc', url: 'https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma' },
          { title: 'Figma Dev Mode Best Practices', type: 'guide', url: 'https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode' }
        ]
      }
    ],
    quiz: {
      id: 'figma-quiz',
      title: 'Figma Mastery Assessment',
      description: 'Evaluate your knowledge of Auto Layout, component variant properties, and variables.',
      passingScore: 70,
      questions: [
        {
          id: 'figma-q1',
          question: 'What sizing behavior should be applied to a child text layer inside an Auto Layout card so it wraps when the card resizes?',
          options: ['Fixed Width', 'Hug Contents', 'Fill Container', 'Absolute Position'],
          correctAnswerIndex: 2,
          explanation: 'Fill Container instructs the child to expand/contract with the parent width, causing multi-line text to wrap automatically.'
        },
        {
          id: 'figma-q2',
          question: 'Why should you prefer Component Properties (Boolean, Text, Instance Swap) over creating countless new Variant states?',
          options: ['Because Figma limits files to 10 variants', 'It eliminates exponential combinatorial variant explosion (e.g. 5 sizes x 3 states x 2 icon toggles = 30 variants)', 'It exports directly to C++', 'It disables auto layout'],
          correctAnswerIndex: 1,
          explanation: 'Component properties drastically reduce variant counts, keeping components lean and performant.'
        },
        {
          id: 'figma-q3',
          question: 'What requirement must be met for Smart Animate to smoothly interpolate between two frames in Figma?',
          options: ['The frames must have different backgrounds', 'Matching layers across frames must have the exact same layer name and hierarchy structure', 'Layers must be converted to raster images', 'All text must be deleted'],
          correctAnswerIndex: 1,
          explanation: 'Figma Smart Animate relies on matching layer names and hierarchy paths to interpolate properties between frames.'
        }
      ]
    }
  },
  {
    id: 'user-research-personas',
    title: 'User Research and Personas',
    category: 'UI/UX and Design',
    summary: 'Plan generative and evaluative user research, conduct empathetic qualitative interviews, synthesize affinity maps, and create evidence-based personas.',
    skillLevel: 'Beginner',
    totalDurationHours: 32,
    relatedCareers: ['UI/UX Designer', 'Digital Marketing Specialist'],
    tags: ['User Research', 'Personas', 'Interviews', 'Affinity Mapping', 'Empathy Maps', 'Journey Maps'],
    learningObjectives: [
      'Choose between qualitative, quantitative, generative, and evaluative research methods',
      'Write unbiased user interview discussion guides and conduct semi-structured interviews',
      'Synthesize interview findings using thematic coding and digital affinity mapping',
      'Construct actionable user personas grounded in empirical research rather than stereotypes',
      'Map end-to-end user journey maps detailing pain points, emotional highs, and opportunities'
    ],
    modules: [
      {
        id: 'urp-mod-1',
        title: 'Research Methodology & Discussion Guide Design',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Attitudinal vs Behavioral research, qualitative vs quantitative, and screener surveys.',
        topics: ['Christian Rohrer’s Research Landscape Matrix', 'Writing Non-Leading Interview Questions', 'Participant Recruitment Screeners', 'Semi-Structured Interview Techniques & Probing'],
        stepByStepExplanation: 'What users say often differs from what they actually do. Attitudinal research reveals stated preferences and beliefs, whereas behavioral research observes actual actions. Avoid leading questions like "Did you find this easy?"; instead ask open behavioral questions like "Walk me through how you completed that task".',
        handsOnExercise: {
          title: 'Draft a 10-Question User Interview Discussion Guide',
          instructions: 'Write an interview protocol for researching how remote workers collaborate, including rapport building, core probing, and debriefing questions.',
          taskSnippet: '// Question: "Think back to the last time you handed off a project to a teammate. What happened step-by-step?"',
          solutionTip: 'Ground questions in specific recent past memories rather than hypothetical future intentions.'
        },
        practicalProject: {
          title: 'Remote Collaboration Tool User Research Plan',
          objective: 'Define research objectives, recruit 5 target users with a screener, and outline qualitative interview protocols.',
          deliverable: 'Complete User Research Plan document with interview script.'
        },
        learningResources: [
          { title: 'Just Enough Research by Erika Hall', type: 'guide', url: 'https://abookapart.com/products/just-enough-research' },
          { title: 'Nielsen Norman: When to Use Which User-Experience Research Method', type: 'doc', url: 'https://www.nngroup.com/articles/which-ux-research-methods/' }
        ]
      },
      {
        id: 'urp-mod-2',
        title: 'Synthesis, Thematic Coding & Affinity Mapping',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'Transcribing interviews, extracting atomic observations, cluster analysis, and insight derivation.',
        topics: ['Atomic Observation Extraction', 'Inductive Thematic Coding', 'Affinity Diagram Clustering', 'Insight Statements: "Users need X because Y, but Z"'],
        stepByStepExplanation: 'Synthesis transforms hours of recorded interviews into actionable findings. Review transcripts, extract atomic quotes onto sticky notes, and group them organically into thematic clusters. Name each cluster with an active insight statement that articulates the underlying user friction.',
        handsOnExercise: {
          title: 'Synthesize 25 User Quotes into Affinity Clusters',
          instructions: 'Cluster 25 raw interview quotes on grocery delivery apps into themes (e.g. freshness anxiety, missing item frustration) and extract 3 core insights.',
          taskSnippet: '// Insight: "Users avoid ordering produce online because they distrust packers to select ripe items without visual inspection."',
          solutionTip: 'Cluster notes by underlying intent and emotion, not merely by the feature mentioned.'
        },
        practicalProject: {
          title: 'Digital Healthcare Telemedicine Research Synthesis',
          objective: 'Synthesize findings from 8 patient interviews into an affinity diagram, empathy map, and executive insight summary.',
          deliverable: 'FigJam/Miro affinity map board with categorized findings.'
        },
        learningResources: [
          { title: 'IDEO Design Kit: Affinity Clustering', type: 'guide', url: 'https://www.designkit.org/methods/affinity-clustering.html' },
          { title: 'The UX Research Field Guide', type: 'doc', url: 'https://www.userinterviews.com/ux-research-field-guide' }
        ]
      },
      {
        id: 'urp-mod-3',
        title: 'Actionable Personas & Customer Journey Mapping',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'Proto-personas vs empirical personas, mental models, emotional journey curves, and opportunity mapping.',
        topics: ['Empirical Personas vs Fictional Archetypes', 'Key Components: Goals, Frustrations, Behaviors, Context', 'End-to-End Customer Journey Map Architecture', 'Identifying High-Impact Solution Opportunities ("How Might We")'],
        stepByStepExplanation: 'Personas fail when filled with irrelevant fluff like favorite foods or stock photo backstories. Effective personas emphasize user goals, mental models, frustrations, and decision criteria. A journey map plots user emotional trajectory across phases, highlighting friction drops.',
        handsOnExercise: {
          title: 'Construct an Evidence-Based Persona Card',
          instructions: 'Create a persona for a freelance graphic designer focusing on invoicing workflows, time tracking struggles, and core jobs-to-be-done.',
          taskSnippet: '// Persona: Primary Goal: Minimize unpaid administrative overhead. Core Friction: Awkwardness chasing overdue invoices.',
          solutionTip: 'Always link persona pain points directly back to interview participant quotes and observations.'
        },
        practicalProject: {
          title: 'Home Buyer Mortgage Journey Map & Opportunity Matrix',
          objective: 'Map the 6-stage home buyer loan application journey, plot emotional high/low points, and formulate 5 "How Might We" opportunities.',
          deliverable: 'Comprehensive customer journey map with prioritized design interventions.'
        },
        learningResources: [
          { title: 'Nielsen Norman Group: Persona Empathy Mapping', type: 'guide', url: 'https://www.nngroup.com/articles/empathy-mapping/' },
          { title: 'Mapping Experiences by Jim Kalbach', type: 'doc', url: 'https://www.oreilly.com/library/view/mapping-experiences-2nd/9781492049333/' }
        ]
      }
    ],
    quiz: {
      id: 'urp-quiz',
      title: 'User Research & Personas Assessment',
      description: 'Test your understanding of research methodologies, qualitative probing, and journey maps.',
      passingScore: 70,
      questions: [
        {
          id: 'urp-q1',
          question: 'Why are open-ended behavioral questions superior to speculative future questions during qualitative user interviews?',
          options: ['Users are notoriously bad at predicting their future behavior, but recount past actions with grounded accuracy', 'Open questions take less time', 'Speculative questions are illegal', 'They require fewer notes'],
          correctAnswerIndex: 0,
          explanation: 'People overestimate future good intentions; probing specific past experiences produces reliable behavioral evidence.'
        },
        {
          id: 'urp-q2',
          question: 'What is the main failure mode of poorly created design personas in tech companies?',
          options: ['They use vector graphics', 'They rely on fabricated demographic stereotypes rather than empirical behavioral research data', 'They are printed on paper', 'They have too many quotes'],
          correctAnswerIndex: 1,
          explanation: 'Personas constructed from assumptions or superficial demographic stereotypes mislead teams.'
        },
        {
          id: 'urp-q3',
          question: 'What does an emotional curve on a Customer Journey Map illustrate?',
          options: ['Website server ping times', 'The user’s fluctuating emotional sentiment (satisfaction, delight, anxiety, frustration) across stages', 'Company profit margins', 'Screen resolutions'],
          correctAnswerIndex: 1,
          explanation: 'The emotional curve plots user emotional sentiment across each journey touchpoint to reveal friction troughs.'
        }
      ]
    }
  },
  {
    id: 'wireframing-prototyping',
    title: 'Wireframing and Prototyping',
    category: 'UI/UX and Design',
    summary: 'Progress from low-fidelity paper sketches and wireframes to clickable, interactive prototypes that validate product logic early.',
    skillLevel: 'Beginner',
    totalDurationHours: 30,
    relatedCareers: ['UI/UX Designer', 'Frontend Development'],
    tags: ['Wireframing', 'Low-Fidelity', 'Prototyping', 'User Flows', 'Information Architecture'],
    learningObjectives: [
      'Translate user requirements into low-fidelity paper sketches and digital grayscale wireframes',
      'Map comprehensive user flows with decision branches and system states',
      'Determine appropriate prototype fidelity (sketch, low-fi, interactive hi-fi) for each project phase',
      'Communicate interaction states and conditional logic through clickable prototypes',
      'Conduct rapid concept validation tests to catch architectural flaws early'
    ],
    modules: [
      {
        id: 'wp-mod-1',
        title: 'User Flows & Low-Fidelity Wireframing',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Task flows, screen flows, decision diamonds, wireframe sketching, and content blocks.',
        topics: ['Task Flows vs Screen Flows', 'Standard Flowchart Symbols (Process, Decision, Terminal)', 'Low-Fidelity Sketching & Crazy Eights Technique', 'Grayscale Digital Wireframing Principles'],
        stepByStepExplanation: 'Before drawing screens, map the user task flow to verify all paths, edge cases, and decision branches. Grayscale wireframing deliberately strips out color, photography, and decorative typography so stakeholders focus entirely on content hierarchy, layout, and functionality.',
        handsOnExercise: {
          title: 'Map a Password Reset User Flow with Edge Cases',
          instructions: 'Draw a complete flow diagram for a forgotten password request, covering invalid emails, expired tokens, and success confirmation.',
          taskSnippet: '// Flow: Request Reset -> Check Email DB -> (Found? Yes -> Send Magic Link / No -> Show Generic Success to Prevent Enumeration)',
          solutionTip: 'Always include error branches and security best practices (e.g., generic success messaging) in user flows.'
        },
        practicalProject: {
          title: 'Mobile Food Delivery App Grayscale Wireframe Kit',
          objective: 'Sketch and digitize a 6-screen wireframe flow: Restaurant Search, Menu, Item Customizer, Cart, Checkout, Tracking.',
          deliverable: 'Figma wireframe flow linked with directional connectors.'
        },
        learningResources: [
          { title: 'Balsamiq Wireframing Academy', type: 'guide', url: 'https://balsamiq.com/learn/' },
          { title: 'User Flow Modeling Guide by Page Laubheimer', type: 'doc', url: 'https://www.nngroup.com/articles/wireflows/' }
        ]
      },
      {
        id: 'wp-mod-2',
        title: 'Information Architecture & Wireframe Annotations',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'Sitemaps, card sorting, wireframe specifications, and developer handoff annotations.',
        topics: ['Open vs Closed Card Sorting', 'Sitemap Hierarchy & Navigation Depth', 'Functional Wireframe Annotations', 'Designing for Empty, Loading, and Error States'],
        stepByStepExplanation: 'Information Architecture organizes content into logical structures. Card sorting reveals how users naturally categorize services. Detailed wireframe annotations explain interaction rules, validation boundaries, and dynamic data behaviors to engineering teams.',
        handsOnExercise: {
          title: 'Annotate a Search Filter Wireframe for Developers',
          instructions: 'Add callout numbers and specification notes explaining debounce timing, multi-select behavior, and zero-results fallback states.',
          taskSnippet: '// Annotation #1: Debounce search input by 300ms before triggering API. Minimum character threshold = 2.',
          solutionTip: 'Clearly specify what happens when no results are found: provide tips and suggested alternatives.'
        },
        practicalProject: {
          title: 'Enterprise CRM Lead Management Wireframe Specs',
          objective: 'Design a desktop CRM pipeline wireframe with comprehensive developer interaction annotations and state matrices.',
          deliverable: 'Annotated PDF spec document and Figma wireframe artboards.'
        },
        learningResources: [
          { title: 'Information Architecture for the Web (Polar Bear Book)', type: 'guide', url: 'https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/' },
          { title: 'Optimal Workshop: Guide to Card Sorting', type: 'doc', url: 'https://www.optimalworkshop.com/learn/101s/card-sorting/' }
        ]
      },
      {
        id: 'wp-mod-3',
        title: 'Interactive Prototyping & Rapid Concept Testing',
        level: 'Advanced',
        estimatedMinutes: 90,
        overview: 'Clickable prototypes, micro-copy testing, transition timings, and prototype validation scripts.',
        topics: ['Fidelity Selection Matrix (When to use paper vs code)', 'Smart Transitions & Easing (Linear, Ease-Out, Spring)', 'Writing Unbiased Usability Test Prompts for Prototypes', 'Iterative Wireframe Refinement from User Feedback'],
        stepByStepExplanation: 'A prototype is an experiment designed to answer specific questions. If you need to test navigation terminology, a low-fidelity wireframe prototype suffices. If you are testing animation speed or emotional delight, high-fidelity micro-interactions are necessary.',
        handsOnExercise: {
          title: 'Connect a Clickable Prototype in Figma',
          instructions: 'Wire 5 wireframe screens together with interactive hotspots, back transitions, and sticky navigation overlays.',
          taskSnippet: '// Interaction: Hotspot "Book Now" -> Navigate to "Booking Modal" -> Animation: Slide In From Bottom (300ms ease-out)',
          solutionTip: 'Always check that users have an obvious way to dismiss modals or navigate back from every screen.'
        },
        practicalProject: {
          title: 'Smart Home Automation App Concept Prototype',
          objective: 'Build an interactive mobile prototype allowing users to pair IoT light fixtures, schedule timers, and toggle room scenes.',
          deliverable: 'Clickable prototype link with recorded walkthrough demonstration.'
        },
        learningResources: [
          { title: 'Prototyping: A Practitioner’s Guide by Todd Zaki Warfel', type: 'guide', url: 'https://rosenfeldmedia.com/books/prototyping/' },
          { title: 'Google Design: Rapid Prototyping Methodologies', type: 'doc', url: 'https://design.google/' }
        ]
      }
    ],
    quiz: {
      id: 'wp-quiz',
      title: 'Wireframing & Prototyping Assessment',
      description: 'Evaluate your knowledge of user flows, fidelity selection, and wireframe annotation.',
      passingScore: 70,
      questions: [
        {
          id: 'wp-q1',
          question: 'Why are wireframes deliberately created in grayscale without photographs or brand colors?',
          options: ['Because color printers are too expensive', 'To keep stakeholders and test participants focused on layout structure, content hierarchy, and functionality rather than visual aesthetics', 'Because grayscale screens load faster', 'To comply with copyright laws'],
          correctAnswerIndex: 1,
          explanation: 'Grayscale wireframing prevents premature debates over color shades and keeps focus on usability and architecture.'
        },
        {
          id: 'wp-q2',
          question: 'In user flow diagrams, what standard shape represents a conditional decision point (e.g. Yes/No)?',
          options: ['Rectangle', 'Diamond', 'Circle', 'Triangle'],
          correctAnswerIndex: 1,
          explanation: 'Standard flowchart notation uses diamonds for decision branches with multiple divergent outcomes.'
        },
        {
          id: 'wp-q3',
          question: 'When should a team use a low-fidelity paper prototype rather than a high-fidelity coded prototype?',
          options: ['Only after final product launch', 'During early conceptualization to test core ideas and layouts rapidly without wasting design hours', 'Never', 'Only when testing server latency'],
          correctAnswerIndex: 1,
          explanation: 'Low-fi prototypes allow rapid, inexpensive iteration before committing time to detailed visual design or code.'
        }
      ]
    }
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    category: 'UI/UX and Design',
    summary: 'Build and govern scalable design systems: design tokens, atomic design, governance models, component libraries, and cross-functional handoff.',
    skillLevel: 'Intermediate',
    totalDurationHours: 40,
    relatedCareers: ['UI/UX Designer', 'Frontend Development'],
    tags: ['Design Systems', 'Design Tokens', 'Atomic Design', 'Governance', 'Storybook', 'Documentation'],
    learningObjectives: [
      'Apply Brad Frost’s Atomic Design methodology: Atoms, Molecules, Organisms, Templates, Pages',
      'Structure multi-tiered design tokens (Global, Semantic, Component-specific) in JSON / W3C format',
      'Bridge Figma variables with code through automated token pipelines (Style Dictionary)',
      'Establish contribution and governance models for multi-team enterprise adoption',
      'Document component anatomy, accessibility requirements, and do/don’t guidelines'
    ],
    modules: [
      {
        id: 'dsys-mod-1',
        title: 'Atomic Design & Component Anatomy',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Atoms, molecules, organisms, component specs, and visual consistency.',
        topics: ['Brad Frost’s Atomic Design Methodology', 'Component Anatomy (Container, Icon, Label, Helper, Counter)', 'Defining Component States Matrix', 'Avoiding System Sprawl & Redundant Variants'],
        stepByStepExplanation: 'Atomic design structures interfaces hierarchically: Atoms (color tokens, icons, inputs) combine into Molecules (search bar with button), which form Organisms (navigation header). Every component must define an anatomy diagram highlighting all constituent sub-elements and state variations.',
        handsOnExercise: {
          title: 'Deconstruct a Complex Modal into Atomic Elements',
          instructions: 'Break down a confirmation dialog into its constituent atoms and molecules and write out the component hierarchy.',
          taskSnippet: '// Organism: Modal Dialog -> Molecules: Modal Header, Button Group -> Atoms: Heading, Close Icon, Primary Button',
          solutionTip: 'Ensure each atom can be reused independently across unrelated organisms.'
        },
        practicalProject: {
          title: 'Core UI Component Anatomy Specification Deck',
          objective: 'Design complete component specification sheets for Button, TextInput, and Dropdown detailing anatomy and padding tokens.',
          deliverable: 'Figma component documentation pages ready for developer implementation.'
        },
        learningResources: [
          { title: 'Atomic Design by Brad Frost', type: 'guide', url: 'https://atomicdesign.bradfrost.com/' },
          { title: 'Design Systems Handbook by InVision', type: 'doc', url: 'https://www.designbetter.co/design-systems-handbook' }
        ]
      },
      {
        id: 'dsys-mod-2',
        title: 'Design Tokens & Multi-Tier Architecture',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'W3C token standards, Global vs Semantic tokens, Style Dictionary, and dark mode theming.',
        topics: ['Global (Reference) Tokens (e.g. blue-500 = #3B82F6)', 'Semantic (System) Tokens (e.g. surface-brand-default)', 'Component-Scoped Tokens (e.g. button-primary-bg)', 'Exporting Tokens with Style Dictionary to CSS & Android'],
        stepByStepExplanation: 'Hardcoding hex colors in components creates maintenance nightmares. Tiered design tokens introduce semantic layers: global tokens define raw color values, semantic tokens define contextual meaning (e.g., surface-interactive), and component tokens bind to specific UI widgets. This allows instant global theme updates without touching code.',
        handsOnExercise: {
          title: 'Write a W3C-Compliant Design Token JSON Schema',
          instructions: 'Create a JSON token file with global color definitions, semantic light/dark aliasing, and export to CSS custom properties.',
          taskSnippet: '{\n  "color": {\n    "brand": { "$value": "{color.blue.600}", "$type": "color" }\n  }\n}',
          solutionTip: 'Always alias semantic tokens to global tokens rather than hardcoding raw hex values in semantic layers.'
        },
        practicalProject: {
          title: 'Automated Token Pipeline with Style Dictionary',
          objective: 'Set up an npm package using Style Dictionary that compiles a central token JSON file into CSS variables and TypeScript types.',
          deliverable: 'Working GitHub repository with automated build scripts.'
        },
        learningResources: [
          { title: 'W3C Design Tokens Community Group Specification', type: 'doc', url: 'https://design-tokens.github.io/community-group/format/' },
          { title: 'Amazon Style Dictionary Documentation', type: 'guide', url: 'https://amzn.github.io/style-dictionary/' }
        ]
      },
      {
        id: 'dsys-mod-3',
        title: 'Governance, Versioning & System Documentation',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'Federated vs centralized governance, SemVer releases, breaking changes, and Zeroheight/Storybook docs.',
        topics: ['Governance Models: Centralized vs Federated vs Hybrid', 'Semantic Versioning (SemVer) for Design Systems', 'Component Deprecation & Migration Strategies', 'Writing Actionable Do & Don’t Usage Guidelines'],
        stepByStepExplanation: 'A design system without governance decays into an abandoned UI kit. A federated model empowers product team contributors to propose components via RFC (Request for Comments). Component deprecations follow SemVer major releases with documented migration guides.',
        handsOnExercise: {
          title: 'Write a Component RFC & Do/Don’t Documentation',
          instructions: 'Draft a documentation page for a Toast Notification component including accessibility rules, screen reader behavior, and visual Do/Don’ts.',
          taskSnippet: '// DO: Use toast for transient, non-critical confirmations. DON\'T: Use toast for critical payment errors requiring user action.',
          solutionTip: 'Pair every "Don\'t" guideline with an explicit visual alternative showing the correct pattern.'
        },
        practicalProject: {
          title: 'Enterprise Design System Documentation Portal',
          objective: 'Create a comprehensive Storybook / documentation site showcasing 10 components with interactive props and accessibility guidelines.',
          deliverable: 'Published design system site with live code sandbox.'
        },
        learningResources: [
          { title: 'Nathan Curtis: Design Systems Articles', type: 'guide', url: 'https://medium.com/@nathanacurtis' },
          { title: 'Shopify Polaris Design System Guide', type: 'doc', url: 'https://polaris.shopify.com/' }
        ]
      }
    ],
    quiz: {
      id: 'dsys-quiz',
      title: 'Design Systems Architecture Assessment',
      description: 'Evaluate your knowledge of design tokens, atomic design, and system governance.',
      passingScore: 70,
      questions: [
        {
          id: 'dsys-q1',
          question: 'What is the primary benefit of using 3-tier Design Tokens (Global -> Semantic -> Component)?',
          options: ['It increases the size of CSS files', 'It decouples raw values from visual intent, allowing system-wide rebranding and dark-mode theming without modifying component code', 'It prevents engineers from writing JavaScript', 'It forces all buttons to be round'],
          correctAnswerIndex: 1,
          explanation: 'Semantic tokens represent visual meaning (e.g. text-primary), enabling theme changes by simply swapping token aliases.'
        },
        {
          id: 'dsys-q2',
          question: 'In Brad Frost’s Atomic Design, what is a "Molecule"?',
          options: ['A single raw hex color', 'A simple group of atoms functioning together as a unit (e.g. a search input combined with a submit button)', 'A full webpage with real content', 'A server database'],
          correctAnswerIndex: 1,
          explanation: 'Molecules are relatively simple functional units composed of distinct bonded atoms.'
        },
        {
          id: 'dsys-q3',
          question: 'What does a Federated governance model for an enterprise design system involve?',
          options: ['Only one person has write access to the design file', 'A representative coalition of designers and engineers from different product teams collaboratively contribute and maintain components', 'The design system is deleted every quarter', 'Designers are not allowed to talk to engineers'],
          correctAnswerIndex: 1,
          explanation: 'Federated governance involves cross-team contributors proposing and stewarding components based on real product needs.'
        }
      ]
    }
  },
  {
    id: 'responsive-web-design',
    title: 'Responsive Web Design',
    category: 'UI/UX and Design',
    summary: 'Fluid typography, responsive imagery, mobile-first layouts, adaptive navigation patterns, and viewport meta techniques.',
    skillLevel: 'Beginner',
    totalDurationHours: 32,
    relatedCareers: ['UI/UX Designer', 'Frontend Development'],
    tags: ['Responsive Design', 'Mobile-First', 'Fluid Typography', 'Breakpoints', 'CSS Grid', 'Flexbox'],
    learningObjectives: [
      'Implement mobile-first responsive architecture using fluid CSS units (rem, vw, vh, clamp())',
      'Select logical responsive breakpoints based on content needs rather than device device brand names',
      'Design adaptive navigation patterns: drawers, tabs, priority-plus, and bottom app bars',
      'Optimize responsive images with srcset, sizes, and the HTML5 picture element',
      'Test touch targets, gestures, and thumb-friendly ergonomics on mobile viewports'
    ],
    modules: [
      {
        id: 'rwd-mod-1',
        title: 'Fluid Typography, Relative Units & Math',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'rem vs em, viewport units, CSS clamp(), and responsive modular type curves.',
        topics: ['rem vs em Inheritance & Root Font Size', 'Fluid Typography with CSS clamp(min, val, max)', 'Fluid Spacing and Margin Scales', 'Viewport Meta Tag Configuration (width=device-width)'],
        stepByStepExplanation: 'Hardcoding px values creates static interfaces that break on smaller displays or high-zoom accessibility settings. Using rem respects user browser font preferences, while CSS clamp() scales font sizes smoothly between minimum mobile dimensions and maximum desktop limits.',
        handsOnExercise: {
          title: 'Implement Fluid Hero Typography with clamp()',
          instructions: 'Write a fluid typography rule for an h1 heading that smoothly scales from 28px on a 360px screen to 56px on a 1440px viewport.',
          taskSnippet: 'font-size: clamp(1.75rem, 1.15rem + 2.5vw, 3.5rem);',
          solutionTip: 'Always test your clamp formula at both minimum and maximum viewport bounds to confirm it stays within bounds.'
        },
        practicalProject: {
          title: 'Fully Fluid Editorial Magazine Layout',
          objective: 'Design a long-form article page featuring fluid drop caps, multi-column reading modes, and responsive callout quotes.',
          deliverable: 'Responsive HTML/CSS layout tested across phone, tablet, and widescreen viewports.'
        },
        learningResources: [
          { title: 'CSS-Tricks: Simplified Fluid Typography', type: 'guide', url: 'https://css-tricks.com/simplified-fluid-typography/' },
          { title: 'MDN Responsive Web Design Basics', type: 'doc', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' }
        ]
      },
      {
        id: 'rwd-mod-2',
        title: 'Adaptive Navigation & Mobile Ergonomics',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'Thumb zones, bottom navigation bars, off-canvas drawers, and Priority+ menu patterns.',
        topics: ['Mobile Thumb Zone Mapping (Natural, Stretch, Hard)', 'Bottom Navigation Bars vs Hamburger Menus', 'Priority+ Navigation Pattern for Responsive Tabs', 'Touch Target Sizing (Minimum 44x44px)'],
        stepByStepExplanation: 'On mobile devices, users operate screens primarily with thumbs. Crucial actions should sit within the comfortable bottom thumb zone rather than the top-left corner. The Priority+ navigation pattern shows as many items as fit horizontally and collapses remainder items into a "More" menu.',
        handsOnExercise: {
          title: 'Design a Thumb-Zone Mobile Navigation Bar',
          instructions: 'Layout a 5-item mobile bottom navigation bar with active indicators, labels, and 48x48px touch bounding boxes.',
          taskSnippet: '// Layout: Fixed bottom, h-16, flex items-center justify-around, safe-area-inset-bottom padding',
          solutionTip: 'Remember to apply env(safe-area-inset-bottom) so content clears the iPhone home indicator bar.'
        },
        practicalProject: {
          title: 'Adaptive Dashboard Navigation System',
          objective: 'Design a navigation bar that transitions from a sticky collapsible desktop sidebar to an ergonomic mobile bottom navigation bar.',
          deliverable: 'Interactive responsive prototype in Figma.'
        },
        learningResources: [
          { title: 'Steven Hoober: Designing for Touch', type: 'guide', url: 'https://abookapart.com/products/designing-for-touch' },
          { title: 'Smashing Magazine: Responsive Navigation Patterns', type: 'doc', url: 'https://www.smashingmagazine.com/responsive-web-design/' }
        ]
      },
      {
        id: 'rwd-mod-3',
        title: 'Responsive Images, Art Direction & Media Queries',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'HTML5 <picture> element, srcset, sizes attribute, WebP/AVIF formats, and media query strategies.',
        topics: ['srcset & sizes for Resolution Switching', '<picture> & <source> for Art Direction', 'Modern Media Queries (@media (width >= 768px))', 'CSS Container Queries for Component Independence'],
        stepByStepExplanation: 'Resolution switching serves smaller compressed images to mobile phones on cellular networks and 2x/3x retina images to desktop displays. The picture element enables art direction—such as cropping an image tightly around a subject’s face on mobile while showing the full wide landscape on desktop.',
        handsOnExercise: {
          title: 'Construct an Art-Directed Responsive Picture Element',
          instructions: 'Write a <picture> markup block displaying a square close-up image on viewports under 640px and a 16:9 banner above 640px in AVIF and WebP.',
          taskSnippet: '<picture>\n  <source media="(max-width: 639px)" srcset="hero-square.avif" type="image/avif">\n  <img src="hero-wide.jpg" alt="Conference">\n</picture>',
          solutionTip: 'Always list modern image formats (AVIF, WebP) first before falling back to JPG for broad browser compatibility.'
        },
        practicalProject: {
          title: 'High-Impact Responsive Travel Agency Portal',
          objective: 'Build an image-heavy destination page that achieves sub-second loading on 4G mobile devices using art-directed responsive imagery.',
          deliverable: 'Audited responsive webpage with documented network payload metrics.'
        },
        learningResources: [
          { title: 'Web.dev: Learn Responsive Images', type: 'doc', url: 'https://web.dev/learn/images/' },
          { title: 'Responsive Images Community Group', type: 'guide', url: 'https://responsiveimages.org/' }
        ]
      }
    ],
    quiz: {
      id: 'rwd-quiz',
      title: 'Responsive Web Design Assessment',
      description: 'Test your understanding of fluid typography, mobile thumb ergonomics, and responsive images.',
      passingScore: 70,
      questions: [
        {
          id: 'rwd-q1',
          question: 'What is the purpose of the srcset and sizes attributes on an HTML <img> element?',
          options: ['To rotate the image 90 degrees', 'To allow the browser to choose and download the most optimal image resolution based on device pixel ratio and rendered display size', 'To convert the image to PDF', 'To encrypt image files'],
          correctAnswerIndex: 1,
          explanation: 'srcset and sizes inform the browser of available image file sizes so it downloads the optimal asset before layout.'
        },
        {
          id: 'rwd-q2',
          question: 'Why should mobile-first responsive design select breakpoints based on content rather than specific device models (like iPhone 15)?',
          options: ['Because devices change constantly and testing all phone models is impossible; content dictates natural breaking points', 'Phones do not have browsers', 'CSS does not allow iPhone keywords', 'It reduces battery life'],
          correctAnswerIndex: 0,
          explanation: 'Setting breakpoints where the content naturally begins to look awkward ensures resilience across all existing and future screens.'
        },
        {
          id: 'rwd-q3',
          question: 'What is the minimum recommended touch target size for interactive mobile buttons according to Apple and Android guidelines?',
          options: ['12x12 pixels', '20x20 pixels', '44x44 to 48x48 pixels', '100x100 pixels'],
          correctAnswerIndex: 2,
          explanation: 'Touch targets should measure at least 44x44 (iOS) or 48x48 (Material) pixels to accommodate average finger pad sizes.'
        }
      ]
    }
  },
  {
    id: 'usability-testing',
    title: 'Usability Testing',
    category: 'UI/UX and Design',
    summary: 'Plan, execute, and analyze moderated and unmoderated usability tests, calculate System Usability Scale (SUS) scores, and report critical findings.',
    skillLevel: 'Intermediate',
    totalDurationHours: 32,
    relatedCareers: ['UI/UX Designer'],
    tags: ['Usability Testing', 'SUS Score', 'Think Aloud', 'Task Success Rate', 'UX Audit', 'User Testing'],
    learningObjectives: [
      'Design comprehensive usability test plans with realistic task scenarios and success criteria',
      'Facilitate moderated think-aloud test sessions without coaching or biasing participants',
      'Set up unmoderated remote testing protocols on tools like Maze, UserTesting, or Lookback',
      'Quantify usability metrics: Task Success Rate, Time on Task, and System Usability Scale (SUS)',
      'Translate usability bugs into prioritized severity matrices and actionable design remedies'
    ],
    modules: [
      {
        id: 'ut-mod-1',
        title: 'Test Planning & Realistic Scenario Design',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Formative vs summative testing, sample size rules (Jakob Nielsen 5 users), and writing unbiased task scenarios.',
        topics: ['Jakob Nielsen’s 5-User Usability Curve', 'Formative (Discovery) vs Summative (Benchmark) Testing', 'Writing Realistic, Goal-Driven Task Scenarios', 'Avoiding Clues and Terminology Matching in Tasks'],
        stepByStepExplanation: 'Usability testing evaluates how real people experience your design. Testing just 5 users uncovers roughly 85% of core usability flaws. When creating test tasks, describe the user’s real-world motivation rather than naming UI buttons (e.g. say "Find an eco-friendly gift under $30", not "Click the search bar and filter by eco-friendly").',
        handsOnExercise: {
          title: 'Write 4 Unbiased Usability Test Task Scenarios',
          instructions: 'Draft task scenarios for testing a healthcare booking app without mentioning any words that appear on UI buttons.',
          taskSnippet: '// Scenario: "You developed a sudden persistent dry cough. Schedule an appointment with an available specialist for this Thursday afternoon."',
          solutionTip: 'Never include the exact label of the CTA or menu title inside the task instructions.'
        },
        practicalProject: {
          title: 'Usability Test Plan for Mobile Flight Booking',
          objective: 'Author a complete 5-task usability test protocol with recruitment screeners, test script, and success benchmarks.',
          deliverable: 'Professional Usability Test Plan document.'
        },
        learningResources: [
          { title: 'Don’t Make Me Think by Steve Krug', type: 'guide', url: 'https://sensible.com/dont-make-me-think/' },
          { title: 'Nielsen Norman Group: Why You Only Need to Test with 5 Users', type: 'doc', url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/' }
        ]
      },
      {
        id: 'ut-mod-2',
        title: 'Moderation Techniques & The Think-Aloud Protocol',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'Facilitator discipline, think-aloud prompts, handling awkward pauses, and objective note-taking.',
        topics: ['Concurrent Think-Aloud Protocol (CTA)', 'The "Bozo" Facilitator Persona (Neutral and Inquisitive)', 'The Echo Technique: Neutral Probing Without Leading', 'Observation Note-Taking: Distinguishing Quotes, Behaviors, and Assumptions'],
        stepByStepExplanation: 'A good facilitator stays quiet. When a participant gets stuck, resist the urge to help them; ask neutral probing questions like "What are you expecting to happen here?" or echo their words: "You mentioned the button looks disabled—what makes it feel that way?".',
        handsOnExercise: {
          title: 'Respond to a Participant Asking for Help',
          instructions: 'Write script responses for 3 common awkward situations: user asking "Am I doing this right?", user stuck in a loop, and user staying silent.',
          taskSnippet: '// Response: "There are no right or wrong answers here—we are testing the system, not you. What would you do next if I weren\'t here?"',
          solutionTip: 'Reassure participants that friction is the fault of the design, never the user.'
        },
        practicalProject: {
          title: 'Moderated Usability Session Simulation & Analysis',
          objective: 'Conduct a recorded 30-minute think-aloud test session with a peer on an existing web application, logging all friction points.',
          deliverable: 'Timestamped observation log and critical issue breakdown.'
        },
        learningResources: [
          { title: 'Rocket Surgery Made Easy by Steve Krug', type: 'guide', url: 'https://sensible.com/rocket-surgery-made-easy/' },
          { title: 'UXPA Code of Conduct for User Research', type: 'doc', url: 'https://uxpa.org/' }
        ]
      },
      {
        id: 'ut-mod-3',
        title: 'Metrics Calculation (SUS) & Prioritized Reporting',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'System Usability Scale (SUS) 10-question formula, Single Ease Question (SEQ), task success rates, and severity matrix.',
        topics: ['System Usability Scale (SUS) Mathematical Scoring (0-100)', 'Single Ease Question (SEQ 1-7 Scale)', 'Task Completion Rate & Error Frequency', 'Severity Rating Matrix (Critical, High, Medium, Low)'],
        stepByStepExplanation: 'SUS is a 10-item Likert questionnaire with alternating positive and negative statements. A score of 68 represents the empirical average; scores above 80 indicate strong usability. Prioritize issues by combining frequency (how many users struggled) with severity (did it block completion).',
        handsOnExercise: {
          title: 'Calculate SUS Score from Raw Questionnaire Responses',
          instructions: 'Compute the composite SUS score for a participant based on standard odd/even item adjustment formulas.',
          taskSnippet: '// Formula: Odd items (Score - 1), Even items (5 - Score). Sum differences and multiply by 2.5 for final 0-100 score.',
          solutionTip: 'Remember to multiply the adjusted sum by 2.5 to map scores onto the 0 to 100 range.'
        },
        practicalProject: {
          title: 'Executive Usability Findings Presentation & Action Plan',
          objective: 'Compile test observations, SUS scores, and task completion metrics into a prioritized 10-slide executive presentation with video clips.',
          deliverable: 'Executive summary deck with prioritized redesign recommendations.'
        },
        learningResources: [
          { title: 'MeasuringU: System Usability Scale Guide', type: 'doc', url: 'https://measuringu.com/sus/' },
          { title: 'Quantifying the User Experience by Jeff Sauro', type: 'guide', url: 'https://measuringu.com/quantifying-the-user-experience/' }
        ]
      }
    ],
    quiz: {
      id: 'ut-quiz',
      title: 'Usability Testing Assessment',
      description: 'Test your understanding of think-aloud moderation, SUS score calculation, and test scenario design.',
      passingScore: 70,
      questions: [
        {
          id: 'ut-q1',
          question: 'What is the benchmark average score on the System Usability Scale (SUS) representing acceptable usability?',
          options: ['50', '68', '85', '100'],
          correctAnswerIndex: 1,
          explanation: 'Across thousands of empirical evaluations, 68 is the recognized average baseline score on the SUS scale.'
        },
        {
          id: 'ut-q2',
          question: 'Why should a usability test facilitator avoid answering when a participant asks "Where should I click next?"',
          options: ['Because it is rude to talk', 'To observe how the participant navigates naturally and whether the interface provides self-evident affordances', 'Because facilitators do not know the answer', 'To fail the participant'],
          correctAnswerIndex: 1,
          explanation: 'Assisting participants invalidates the test data by masking interface confusion that real users will encounter alone.'
        },
        {
          id: 'ut-q3',
          question: 'According to Jakob Nielsen, why does testing with approximately 5 users yield the most cost-effective insights?',
          options: ['More users refuse to participate', 'The return on investment drops sharply as additional users encounter the exact same issues repeatedly', 'Software tools limit tests to 5 participants', 'It is required by law'],
          correctAnswerIndex: 1,
          explanation: '5 users uncover roughly 85% of usability flaws; testing more yields diminishing returns on new discoveries.'
        }
      ]
    }
  },
  {
    id: 'portfolio-development',
    title: 'Portfolio Development',
    category: 'UI/UX and Design',
    summary: 'Craft high-converting case studies, tell compelling design narratives, showcase process over pretty mockups, and prepare for design hiring manager reviews.',
    skillLevel: 'Intermediate',
    totalDurationHours: 30,
    relatedCareers: ['UI/UX Designer', 'Frontend Development'],
    tags: ['Portfolio', 'Case Studies', 'Storytelling', 'Design Career', 'Presentations', 'Hiring'],
    learningObjectives: [
      'Structure case studies with storytelling: Context, Problem, Constraints, Process, Solution, Impact',
      'Articulate rationale and trade-offs rather than presenting finished artboards without context',
      'Select and present 3 flagship case studies that demonstrate strategic product thinking',
      'Create interactive prototypes and responsive portfolio presentations',
      'Master the whiteboard challenge and app critique interview rounds'
    ],
    modules: [
      {
        id: 'port-mod-1',
        title: 'Case Study Architecture & Strategic Storytelling',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'The 6-part case study framework, hooking hiring managers in 30 seconds, and metrics.',
        topics: ['The 30-Second Hiring Manager Scan Test', 'The STAR Framework for UX Case Studies', 'Leading with Outcomes & Business Impact', 'Showing "The Messy Middle" vs Dribbble Slop'],
        stepByStepExplanation: 'Hiring managers spend less than 60 seconds reviewing a portfolio before deciding on an interview. Lead with a compelling executive summary, your exact individual role, and the business outcome. Case studies that only show pretty finished screens get rejected; managers look for how you solved difficult business constraints.',
        handsOnExercise: {
          title: 'Write a Case Study Executive Summary Card',
          instructions: 'Draft an executive summary for a project stating the client, your role, timeline, core metric improved, and 2-sentence problem statement.',
          taskSnippet: '// Summary: Role: Lead Product Designer | Timeline: 6 weeks | Impact: Reduced onboarding churn by 28% across 15,000 monthly signups',
          solutionTip: 'Always quantify impact with concrete percentages, dollars saved, or hours reduced whenever possible.'
        },
        practicalProject: {
          title: 'Flagship Case Study Outline & Narrative Arc',
          objective: 'Select your best project and write a comprehensive narrative script covering research, discarded iterations, and final rollout.',
          deliverable: 'Written case study draft formatted for publishing.'
        },
        learningResources: [
          { title: 'Bestfolios: Curated Designer Portfolios', type: 'guide', url: 'https://www.bestfolios.com/' },
          { title: 'Nielsen Norman Group: What Hiring Managers Look for in UX Portfolios', type: 'doc', url: 'https://www.nngroup.com/articles/ux-portfolios/' }
        ]
      },
      {
        id: 'port-mod-2',
        title: 'Visual Presentation, Scaffolding & Responsive Showcase',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'Device mockups, zoomed callouts, interactive prototype embeds, and responsive layout.',
        topics: ['Device Mockup Discipline (Avoid Cliché Floating Laptops)', 'Zoomed Detail Callouts & Annotation Pins', 'Interactive Prototype Embeds in Web Portfolios', 'Typography & Scannability for Rapid Reading'],
        stepByStepExplanation: 'Presenting interface graphics requires intentional framing. Avoid generic angled floating device mockups that hide readability. Use flat, front-facing frames with zoomed callouts highlighting micro-interactions, copy decisions, and accessibility considerations.',
        handsOnExercise: {
          title: 'Design a Before-and-After Comparison Interactive Card',
          instructions: 'Layout a side-by-side comparison highlighting 3 key usability flaws in the original design and how your revision resolved them.',
          taskSnippet: '// Annotations: Before: 5 separate dropdowns -> After: 1 intelligent predictive autocomplete with instant preview',
          solutionTip: 'Place direct red/green callout labels directly onto screens so reviewers instantly grasp the improvement.'
        },
        practicalProject: {
          title: 'Personal Portfolio Website Design in Figma',
          objective: 'Design your personal portfolio homepage, about page, and case study template optimized for desktop and mobile.',
          deliverable: 'Figma prototype with complete layout system.'
        },
        learningResources: [
          { title: 'Cofolios: Top Tech Intern & Junior Portfolios', type: 'guide', url: 'https://www.cofolios.com/' },
          { title: 'Figma Community: Portfolio Templates & Grids', type: 'doc', url: 'https://www.figma.com/community' }
        ]
      },
      {
        id: 'port-mod-3',
        title: 'Design Interview Prep: App Critiques & Whiteboard Challenges',
        level: 'Advanced',
        estimatedMinutes: 90,
        overview: 'App critique frameworks, whiteboard challenge frameworks, answering "Why did you do that?", and salary negotiation.',
        topics: ['App Critique Framework: Goals, Audience, Information Architecture, Visual Design, Opportunities', 'Whiteboard Challenge 45-Minute Framework (Problem, Users, Ideas, Wireframe)', 'Handling Critical Feedback Defensively vs Curiously', 'Portfolio Deck Presentation for Onsite Interviews'],
        stepByStepExplanation: 'In senior interview rounds, hiring teams assess how you think live on your feet. In an app critique, evaluate third-party applications systematically: assess business goals, target audience, cognitive affordances, and potential opportunities rather than merely declaring whether you like the visual styling.',
        handsOnExercise: {
          title: 'Perform a 10-Minute Structured App Critique',
          instructions: 'Critique the Airbnb booking flow or Spotify playlist curation following the 5-point evaluation framework.',
          taskSnippet: '// Step 1: Business Objective -> Step 2: Target Persona -> Step 3: IA & Affordances -> Step 4: Visual Polish -> Step 5: Suggested Iteration',
          solutionTip: 'Ground your critique in user psychology and business objectives rather than personal aesthetic taste.'
        },
        practicalProject: {
          title: '30-Minute Onsite Portfolio Presentation Deck',
          objective: 'Create a 15-slide keynote/slide deck presenting your flagship case study for a tech interview committee.',
          deliverable: 'Slide deck presentation with speaker notes.'
        },
        learningResources: [
          { title: 'Solving Product Design Exercises by Artiom Dashinsky', type: 'guide', url: 'https://productdesigninterview.com/' },
          { title: 'Femke: How to Present Your UX Portfolio', type: 'video', url: 'https://www.youtube.com/@femke' }
        ]
      }
    ],
    quiz: {
      id: 'port-quiz',
      title: 'Portfolio & Career Assessment',
      description: 'Test your understanding of case study narratives, portfolio reviews, and app critique structures.',
      passingScore: 70,
      questions: [
        {
          id: 'port-q1',
          question: 'What is the number one reason hiring managers reject entry-level design portfolios?',
          options: ['The designer used the wrong font', 'Case studies show only final polished mockups with zero explanation of research, constraints, discarded iterations, or business outcomes', 'The portfolio has too many projects', 'The designer does not live in Silicon Valley'],
          correctAnswerIndex: 1,
          explanation: 'Hiring managers need to understand how you think through constraints, not just your ability to replicate visual aesthetics.'
        },
        {
          id: 'port-q2',
          question: 'During a live App Critique interview round, what should you focus on first before critiquing visual aesthetics?',
          options: ['The app’s logo color', 'The company’s business objectives and the primary user problem the app solves', 'The iOS version number', 'The copyright year in the footer'],
          correctAnswerIndex: 1,
          explanation: 'Effective critiques evaluate whether a design fulfills business goals and user jobs-to-be-done before examining visual styling.'
        },
        {
          id: 'port-q3',
          question: 'How many thoroughly documented, high-impact case studies should an effective product design portfolio highlight?',
          options: ['15 to 20 shallow projects', '2 to 3 deep, well-crafted flagship case studies', 'Only 1 sketch', 'At least 50 screenshots'],
          correctAnswerIndex: 1,
          explanation: 'Hiring managers only have time to review 1 or 2 case studies; 2 to 3 deep, detailed projects are ideal.'
        }
      ]
    }
  }
];
