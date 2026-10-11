import { Course } from '../../types';

export const softwareDevCourses: Course[] = [
  {
    id: 'full-stack-web-dev',
    title: 'Full Stack Web Development',
    category: 'Software Development',
    summary: 'Master end-to-end web engineering from responsive frontend UI to relational databases, REST APIs, and deployment pipelines.',
    skillLevel: 'Beginner',
    totalDurationHours: 48,
    relatedCareers: ['Full Stack Developer', 'Software Developer'],
    tags: ['HTML/CSS', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs'],
    learningObjectives: [
      'Architect client-server applications with clean separation of concerns',
      'Build performant responsive interfaces with modern HTML5, CSS3, and JavaScript',
      'Design relational schemas and write optimized SQL queries with Node.js backends',
      'Implement JWT token-based authentication and secure session management',
      'Deploy full-stack applications with environment variables and CI/CD'
    ],
    modules: [
      {
        id: 'fswd-mod-1',
        title: 'Modern Web Foundations & Semantic Architecture',
        level: 'Beginner',
        estimatedMinutes: 90,
        overview: 'Core protocols, semantic markup, responsive CSS layout algorithms, and modern DOM interactions.',
        topics: ['HTTP/HTTPS Lifecycle', 'Semantic HTML5 & Accessibility', 'Flexbox & CSS Grid Systems', 'DOM Event Loop & Manipulation'],
        stepByStepExplanation: 'Modern web development starts with understanding how the browser requests assets over HTTP/2 or HTTP/3. Semantic HTML elements like <main>, <article>, and <nav> provide accessibility trees for assistive technologies. Flexbox controls one-dimensional flow (rows or columns), while CSS Grid creates two-dimensional template layouts. Event delegation leverages bubbling to handle clicks efficiently without binding listeners to every individual element.',
        handsOnExercise: {
          title: 'Build a Responsive Semantic Product Dashboard Grid',
          instructions: 'Create an accessible dashboard layout using CSS Grid with auto-fit columns. Implement a search input that filters product cards on input events using JavaScript.',
          taskSnippet: 'const filterProducts = (query) => products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));',
          solutionTip: 'Use grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) and debounce your search input handler by 250ms.'
        },
        practicalProject: {
          title: 'Full-Featured Developer Portfolio & Showcase',
          objective: 'Build a zero-framework responsive portfolio with theme toggling, project gallery, and working contact form validation.',
          deliverable: 'A structured multi-page layout with WCAG AA compliance score and responsive mobile drawer.'
        },
        learningResources: [
          { title: 'MDN Web Docs: CSS Grid Layout', type: 'doc', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout' },
          { title: 'Web.dev: Learn Accessibility', type: 'guide', url: 'https://web.dev/learn/accessibility' }
        ]
      },
      {
        id: 'fswd-mod-2',
        title: 'RESTful API Engineering & Backend Services',
        level: 'Intermediate',
        estimatedMinutes: 120,
        overview: 'Express.js architecture, routing, middleware pipelines, error propagation, and PostgreSQL persistence.',
        topics: ['Express Middleware Pipeline', 'REST Principles & Status Codes', 'PostgreSQL Schema & Migrations', 'Input Validation & Sanitization'],
        stepByStepExplanation: 'A production API processes requests through sequential middleware: CORS headers, body parsers, authentication verifiers, and route handlers. In PostgreSQL, relational integrity is preserved using foreign keys and constraints. Input must always be validated via schemas (like Zod) before reaching database queries to prevent SQL injection and invalid state persistence.',
        handsOnExercise: {
          title: 'Create an Authenticated Tasks API with Middleware',
          instructions: 'Implement POST /api/tasks and GET /api/tasks with bearer token authentication middleware and central error handling.',
          taskSnippet: 'app.use((err, req, res, next) => res.status(err.status || 500).json({ error: err.message }));',
          solutionTip: 'Always call next(error) inside async catch blocks so Express passes the error to the centralized error middleware.'
        },
        practicalProject: {
          title: 'Collaborative Workspace API with PostgreSQL',
          objective: 'Build an API supporting multi-tenant workspaces, team members, tasks, and audit logs with transactional database queries.',
          deliverable: 'Postman collection and Docker compose setup for PostgreSQL database migrations.'
        },
        learningResources: [
          { title: 'Express.js Production Best Practices', type: 'guide', url: 'https://expressjs.com/en/advanced/best-practice-security.html' },
          { title: 'PostgreSQL Tutorial & Documentation', type: 'doc', url: 'https://www.postgresql.org/docs/' }
        ]
      },
      {
        id: 'fswd-mod-3',
        title: 'Full-Stack Integration, State Sync & Deployment',
        level: 'Advanced',
        estimatedMinutes: 140,
        overview: 'Connecting React frontends to secure backend APIs, state synchronization, caching, and cloud production deployment.',
        topics: ['React Query / SWR Data Fetching', 'JWT Refresh Token Rotation', 'CORS & Production Cookies', 'Docker Containerization & CI/CD'],
        stepByStepExplanation: 'Production full-stack apps decouple server caching from client UI state using tools like TanStack Query. Authentication uses HTTP-only secure SameSite cookies to protect tokens from XSS attacks. Deployment involves Docker multi-stage builds that compile static assets and expose a lightweight Node or Go runtime behind an Nginx reverse proxy.',
        handsOnExercise: {
          title: 'Implement Automatic Silent Token Refresh',
          instructions: 'Set up an Axios or Fetch interceptor that catches 401 Unauthorized responses, calls /api/auth/refresh, and retries the original request seamlessly.',
          taskSnippet: 'instance.interceptors.response.use(res => res, async error => { if (error.response?.status === 401) { ... } });',
          solutionTip: 'Maintain a boolean isRefreshing flag and a promise queue to prevent sending multiple refresh requests simultaneously.'
        },
        practicalProject: {
          title: 'SaaS Issue Tracker & Sprint Board App',
          objective: 'Develop and deploy a complete issue tracking platform with drag-and-drop kanban boards, optimistic UI updates, and role-based permissions.',
          deliverable: 'Live deployed application with automated GitHub Actions testing and deployment pipeline.'
        },
        learningResources: [
          { title: 'OWASP Web Application Security Guide', type: 'guide', url: 'https://owasp.org/www-project-top-ten/' },
          { title: 'Dockerizing Full Stack Node Applications', type: 'doc', url: 'https://docs.docker.com/language/nodejs/' }
        ]
      }
    ],
    quiz: {
      id: 'fswd-quiz',
      title: 'Full Stack Architecture Assessment',
      description: 'Test your understanding of HTTP protocols, REST conventions, and relational data integrity.',
      passingScore: 70,
      questions: [
        {
          id: 'fswd-q1',
          question: 'Which HTTP method should be idempotent and used to completely replace an existing resource?',
          options: ['POST', 'PATCH', 'PUT', 'CONNECT'],
          correctAnswerIndex: 2,
          explanation: 'PUT is idempotent and replaces the target resource entirely. PATCH performs a partial update, whereas POST creates resources.'
        },
        {
          id: 'fswd-q2',
          question: 'Why should sensitive JWT tokens preferably be stored in HTTP-only cookies rather than localStorage?',
          options: ['To allow CSS animations to read them', 'To prevent client-side JavaScript (XSS attacks) from accessing the token', 'Because localStorage has an 8KB size limit', 'To bypass CORS preflight checks'],
          correctAnswerIndex: 1,
          explanation: 'HTTP-only cookies cannot be read by JavaScript via document.cookie, dramatically mitigating Cross-Site Scripting (XSS) token theft.'
        },
        {
          id: 'fswd-q3',
          question: 'What is the primary benefit of CSS Grid over Flexbox?',
          options: ['CSS Grid only supports text', 'CSS Grid enables simultaneous two-dimensional row and column layouts', 'Flexbox is deprecated in CSS3', 'CSS Grid doesn’t require parent containers'],
          correctAnswerIndex: 1,
          explanation: 'CSS Grid provides a two-dimensional grid system (rows and columns simultaneously), while Flexbox is fundamentally one-dimensional.'
        }
      ]
    }
  },
  {
    id: 'python-full-stack',
    title: 'Python Full Stack Development',
    category: 'Software Development',
    summary: 'Build robust Python web systems combining Django or FastAPI on the backend with modern reactive frontend interfaces.',
    skillLevel: 'Beginner',
    totalDurationHours: 45,
    relatedCareers: ['Python Full Stack Developer', 'Backend Development', 'Software Developer'],
    tags: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'REST', 'Celery'],
    learningObjectives: [
      'Master modern Python 3.12+ type hinting, virtual environments, and object-oriented patterns',
      'Build resilient RESTful and ASGI services using Django REST Framework and FastAPI',
      'Model complex schemas using Django ORM and SQLAlchemy with migrations',
      'Implement asynchronous background worker queues with Redis and Celery',
      'Integrate Python services with React and modern frontend clients'
    ],
    modules: [
      {
        id: 'pyfs-mod-1',
        title: 'Modern Python & Backend System Fundamentals',
        level: 'Beginner',
        estimatedMinutes: 90,
        overview: 'Python OOP, dataclasses, type hinting, virtual environment management, and async syntax.',
        topics: ['Python 3.12+ Typings & Pydantic', 'OOP, Inheritance & Dunder Methods', 'Poetry & Virtual Environments', 'Asyncio & Concurrency'],
        stepByStepExplanation: 'Python type hints combined with Pydantic allow strict runtime data validation. Dataclasses and dunder methods (__repr__, __eq__) provide clean object models without boilerplate. Using virtual environments (or Poetry/uv) isolates project dependencies from system Python packages.',
        handsOnExercise: {
          title: 'Create a Pydantic Validation Pipeline',
          instructions: 'Define a user registration schema with email validation, password strength constraints, and automatic timestamp generation.',
          taskSnippet: 'class UserCreate(BaseModel):\n    email: EmailStr\n    password: str = Field(min_length=8)',
          solutionTip: 'Use Pydantic validator decorators to check password entropy and normalize email casing.'
        },
        practicalProject: {
          title: 'CLI Personal Budget & Expense Engine',
          objective: 'Develop an object-oriented Python CLI app that parses CSV statements, calculates category summaries, and exports JSON reports.',
          deliverable: 'A typed Python package with automated pytest unit tests.'
        },
        learningResources: [
          { title: 'Official Python Documentation', type: 'doc', url: 'https://docs.python.org/3/' },
          { title: 'Real Python: Modern Python Guide', type: 'guide', url: 'https://realpython.com/' }
        ]
      },
      {
        id: 'pyfs-mod-2',
        title: 'Django REST Framework & FastAPI Architecture',
        level: 'Intermediate',
        estimatedMinutes: 130,
        overview: 'Building high-throughput APIs, ORM query optimization, serializers, and token authentication.',
        topics: ['FastAPI Dependency Injection', 'Django ORM & select_related Optimization', 'Serializer Architecture', 'JWT Authentication & OAuth2'],
        stepByStepExplanation: 'Django ORM abstracts database queries but can cause N+1 query traps if select_related and prefetch_related are neglected. FastAPI provides ASGI asynchronous performance, automatic OpenAPI documentation, and a clean dependency injection system for database sessions and auth verifiers.',
        handsOnExercise: {
          title: 'Optimize Django Querysets to Prevent N+1 Bugs',
          instructions: 'Refactor a blog post endpoint listing authors and comments using select_related and prefetch_related to execute under 3 SQL queries.',
          taskSnippet: 'Post.objects.select_related("author").prefetch_related("comments__user").all()',
          solutionTip: 'Check connection.queries count in your test suite to assert fixed query counts.'
        },
        practicalProject: {
          title: 'E-Commerce Marketplace REST API',
          objective: 'Build a production Django REST API with product catalogs, shopping carts, checkout sessions, and webhook processing.',
          deliverable: 'Django project with custom user model, PostgreSQL migrations, and Swagger UI.'
        },
        learningResources: [
          { title: 'FastAPI Documentation', type: 'doc', url: 'https://fastapi.tiangolo.com/' },
          { title: 'Django REST Framework Guide', type: 'guide', url: 'https://www.django-rest-framework.org/' }
        ]
      },
      {
        id: 'pyfs-mod-3',
        title: 'Async Tasks, Redis Caching & Full-Stack Deployments',
        level: 'Advanced',
        estimatedMinutes: 150,
        overview: 'Background worker queues with Celery, Redis caching, Gunicorn/Uvicorn configuration, and frontend pairing.',
        topics: ['Celery & Redis Worker Queues', 'Caching Strategies & Cache Invalidation', 'Uvicorn & Gunicorn Worker Model', 'Docker & Cloud Run Deployment'],
        stepByStepExplanation: 'Long-running tasks such as PDF invoice generation, email notifications, and data scraping should never block the HTTP request-response cycle. Offload these tasks to Celery workers using Redis as the message broker. Deploy ASGI Python apps using Uvicorn worker processes managed by Gunicorn.',
        handsOnExercise: {
          title: 'Configure a Celery Task for Asynchronous Email Delivery',
          instructions: 'Write a Celery background task that sends welcome emails with exponential backoff retries on network failures.',
          taskSnippet: '@shared_task(bind=True, max_retries=3)\ndef send_welcome_email(self, user_id):\n    ...',
          solutionTip: 'Use self.retry(countdown=2 ** self.request.retries) to handle transient SMTP connection errors.'
        },
        practicalProject: {
          title: 'Real-Time Auction & Bidding Platform',
          objective: 'Build a full-stack Python application with live bid notifications, background timer expiration with Celery, and React dashboard.',
          deliverable: 'Multi-container Docker Compose setup with Redis, PostgreSQL, Celery, and FastAPI.'
        },
        learningResources: [
          { title: 'Celery Distributed Task Queue Guide', type: 'doc', url: 'https://docs.celeryq.dev/' },
          { title: 'Full Stack Python Deployment', type: 'guide', url: 'https://www.fullstackpython.com/' }
        ]
      }
    ],
    quiz: {
      id: 'pyfs-quiz',
      title: 'Python Web Systems Assessment',
      description: 'Evaluate your knowledge of Python typing, Django ORM optimization, and ASGI services.',
      passingScore: 70,
      questions: [
        {
          id: 'pyfs-q1',
          question: 'In Django ORM, which method should you use to prevent N+1 queries when fetching a single-valued Foreign Key relationship?',
          options: ['prefetch_related', 'select_related', 'filter_related', 'values_list'],
          correctAnswerIndex: 1,
          explanation: 'select_related works by creating an SQL JOIN in the query, ideal for single-valued relationships (ForeignKey, OneToOne).'
        },
        {
          id: 'pyfs-q2',
          question: 'What protocol makes FastAPI and Starlette inherently capable of asynchronous HTTP handling?',
          options: ['WSGI', 'ASGI', 'CGI', 'FastCGI'],
          correctAnswerIndex: 1,
          explanation: 'ASGI (Asynchronous Server Gateway Interface) supports async Python features (async/await), WebSockets, and background tasks.'
        },
        {
          id: 'pyfs-q3',
          question: 'What is the purpose of Celery in a Python web stack?',
          options: ['CSS processing', 'Relational database indexing', 'Distributed asynchronous background task execution', 'Static file serving'],
          correctAnswerIndex: 2,
          explanation: 'Celery offloads resource-intensive or slow operations to background workers so web responses remain fast.'
        }
      ]
    }
  },
  {
    id: 'java-full-stack',
    title: 'Java Full Stack Development',
    category: 'Software Development',
    summary: 'Enterprise-grade architecture using Spring Boot, Hibernate, microservices, and React integration.',
    skillLevel: 'Intermediate',
    totalDurationHours: 50,
    relatedCareers: ['Full Stack Developer', 'Software Developer'],
    tags: ['Java 21', 'Spring Boot 3', 'Hibernate', 'REST', 'Maven', 'Microservices'],
    learningObjectives: [
      'Write idiomatic Java 21+ code utilizing records, pattern matching, and virtual threads',
      'Build enterprise RESTful backends with Spring Boot 3, Spring Data JPA, and Hibernate',
      'Design role-based authorization with Spring Security and OAuth2/JWT',
      'Structure clean architectural layers: Controller, Service, Repository, and DTOs',
      'Connect Java microservices with frontend single-page applications'
    ],
    modules: [
      {
        id: 'jfs-mod-1',
        title: 'Modern Java 21 & Object-Oriented Engineering',
        level: 'Beginner',
        estimatedMinutes: 95,
        overview: 'Java 21 features, Stream API, Lambdas, Generics, and memory model fundamentals.',
        topics: ['Java Records & Sealed Classes', 'Virtual Threads (Project Loom)', 'Stream API & Functional Pipelines', 'Maven / Gradle Build Lifecycle'],
        stepByStepExplanation: 'Java 21 introduces pattern matching, switch expressions, and records for immutable data carrier classes. Virtual threads provide lightweight concurrency, allowing thousands of blocking network calls without depleting OS thread pools. The Stream API simplifies declarative data transformations.',
        handsOnExercise: {
          title: 'Implement a Stream Transformation Pipeline',
          instructions: 'Filter, map, and collect high-value customer orders grouped by status using the Java Streams Collector API.',
          taskSnippet: 'orders.stream().filter(o -> o.amount() > 100).collect(Collectors.groupingBy(Order::status));',
          solutionTip: 'Prefer Java 16+ records for immutable DTOs instead of verbose classes with getters and setters.'
        },
        practicalProject: {
          title: 'Enterprise Banking Account Simulator',
          objective: 'Build a multi-threaded banking application with synchronized transactions, audit logging, and custom exception handling.',
          deliverable: 'Maven project with 90%+ JUnit 5 test coverage.'
        },
        learningResources: [
          { title: 'Oracle Java 21 Documentation', type: 'doc', url: 'https://docs.oracle.com/en/java/javase/21/' },
          { title: 'Baeldung: Modern Java Tutorials', type: 'guide', url: 'https://www.baeldung.com/' }
        ]
      },
      {
        id: 'jfs-mod-2',
        title: 'Spring Boot 3, Spring Data JPA & Security',
        level: 'Intermediate',
        estimatedMinutes: 130,
        overview: 'Spring Boot microservices, Dependency Injection, Hibernate persistence, and Spring Security filters.',
        topics: ['Spring Inversion of Control & Beans', 'Spring Data JPA Repositories', 'Spring Security Filter Chains & JWT', 'Flyway Database Migrations'],
        stepByStepExplanation: 'Spring Boot uses Dependency Injection to wire components dynamically. Spring Data JPA generates SQL queries automatically from method signatures. Spring Security intercepts incoming HTTP requests via a SecurityFilterChain to inspect JWT tokens and verify authorities.',
        handsOnExercise: {
          title: 'Secure an API with Spring Security 6',
          instructions: 'Configure a SecurityFilterChain bean with stateless session management and JWT authentication filter.',
          taskSnippet: '@Bean SecurityFilterChain filterChain(HttpSecurity http) throws Exception { return http.csrf(...).build(); }',
          solutionTip: 'Disable CSRF for stateless REST APIs that use Bearer JWT headers.'
        },
        practicalProject: {
          title: 'Hospital Management & Scheduling Microservice',
          objective: 'Develop a Spring Boot service for appointment booking with doctor availability checks, JPA cascading, and validation.',
          deliverable: 'Spring Boot REST service with H2/PostgreSQL integration and OpenAPI Swagger docs.'
        },
        learningResources: [
          { title: 'Spring Boot Official Documentation', type: 'doc', url: 'https://spring.io/projects/spring-boot' },
          { title: 'Spring Security Architecture Guide', type: 'guide', url: 'https://spring.io/guides/topicals/spring-security-architecture' }
        ]
      },
      {
        id: 'jfs-mod-3',
        title: 'Microservices, Kafka & Enterprise React Integration',
        level: 'Advanced',
        estimatedMinutes: 150,
        overview: 'Event-driven architecture with Apache Kafka, service discovery, and full-stack integration.',
        topics: ['Kafka Event Producers & Consumers', 'API Gateway & Service Discovery', 'Distributed Tracing with Micrometer', 'Full Stack CORS & Deployment'],
        stepByStepExplanation: 'In microservice architectures, services communicate asynchronously via message buses like Apache Kafka to prevent tight temporal coupling. Distributed tracing with Micrometer and Zipkin ensures requests can be tracked across distributed network hops.',
        handsOnExercise: {
          title: 'Produce and Consume Kafka Events',
          instructions: 'Implement a KafkaTemplate producer that publishes OrderCreated events and a @KafkaListener consumer that processes inventory updates.',
          taskSnippet: '@KafkaListener(topics = "orders", groupId = "inventory-service")\npublic void handleOrder(OrderEvent event) { ... }',
          solutionTip: 'Always configure dead-letter queues (DLQ) for poisoned messages that fail consumer deserialization.'
        },
        practicalProject: {
          title: 'End-to-End Enterprise Logistics Tracking Suite',
          objective: 'Build an event-driven system with Spring Boot microservices, Kafka, PostgreSQL, and a React tracking dashboard.',
          deliverable: 'Complete multi-service repository with Docker Compose and interactive React frontend.'
        },
        learningResources: [
          { title: 'Spring Cloud Microservices Guide', type: 'doc', url: 'https://spring.io/projects/spring-cloud' },
          { title: 'Apache Kafka Quickstart', type: 'guide', url: 'https://kafka.apache.org/quickstart' }
        ]
      }
    ],
    quiz: {
      id: 'jfs-quiz',
      title: 'Java Enterprise Architecture Assessment',
      description: 'Test your understanding of Spring Boot, virtual threads, and JPA persistence.',
      passingScore: 70,
      questions: [
        {
          id: 'jfs-q1',
          question: 'What breakthrough feature in Java 21 drastically reduces memory overhead for high-concurrency I/O bound servers?',
          options: ['Applets', 'Virtual Threads (Project Loom)', 'Raw String Literals', 'SecurityManager'],
          correctAnswerIndex: 1,
          explanation: 'Virtual threads are lightweight threads managed by the JVM that allow millions of concurrent tasks with minimal memory usage.'
        },
        {
          id: 'jfs-q2',
          question: 'What is the primary role of the Inversion of Control (IoC) container in Spring?',
          options: ['Compressing HTML templates', 'Managing object creation, lifecycle, and injecting dependencies', 'Running unit tests automatically', 'Encrypting database passwords'],
          correctAnswerIndex: 1,
          explanation: 'The IoC container instantiates, configures, and assembles application objects (beans) via dependency injection.'
        },
        {
          id: 'jfs-q3',
          question: 'In Spring Data JPA, what does the @Transactional annotation guarantee?',
          options: ['That data will be cached in Redis', 'That database operations within the method boundary follow ACID transaction semantics', 'That responses will be compressed with GZIP', 'That the query runs in parallel'],
          correctAnswerIndex: 1,
          explanation: '@Transactional manages database transactions, ensuring rollback upon runtime exceptions.'
        }
      ]
    }
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    category: 'Software Development',
    summary: 'Build high-performance web applications with semantic HTML, modern CSS architectures, JavaScript, and accessibility.',
    skillLevel: 'Beginner',
    totalDurationHours: 40,
    relatedCareers: ['Full Stack Developer', 'Software Developer', 'UI/UX Designer'],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Accessibility', 'Vite'],
    learningObjectives: [
      'Master semantic HTML5 markup and WCAG 2.2 accessibility standards',
      'Create responsive CSS layouts with Flexbox, CSS Grid, and custom properties',
      'Write clean, modular ES6+ JavaScript and TypeScript code',
      'Understand Core Web Vitals (LCP, INP, CLS) and frontend performance optimization',
      'Build robust component architectures with modern bundlers'
    ],
    modules: [
      {
        id: 'fed-mod-1',
        title: 'DOM Architecture, Modern JS & TypeScript',
        level: 'Beginner',
        estimatedMinutes: 80,
        overview: 'ES6+ syntax, asynchronous programming, TypeScript fundamentals, and DOM optimization.',
        topics: ['Closures, Prototypes & Scope', 'Promises, Async/Await & Event Loop', 'TypeScript Interfaces & Generics', 'DOM Mutation & Virtual DOM Principles'],
        stepByStepExplanation: 'JavaScript operates on a single-threaded event loop with microtask and macrotask queues. Promises and async/await resolve asynchronously in the microtask queue. TypeScript adds compile-time type safety to eliminate runtime null pointer exceptions.',
        handsOnExercise: {
          title: 'Build a Generic TypeScript Data Cache',
          instructions: 'Implement a type-safe generic In-Memory Cache class with expiration TTL and typed key retrieval.',
          taskSnippet: 'class Cache<T> {\n  private store = new Map<string, { value: T; expires: number }>();\n}',
          solutionTip: 'Check Date.now() against the stored timestamp during the get() call to handle passive eviction.'
        },
        practicalProject: {
          title: 'Interactive Kanban Board with Drag & Drop',
          objective: 'Build an accessible vanilla TypeScript Kanban board supporting column reordering and local storage persistence.',
          deliverable: 'TypeScript project compiled with Vite with zero runtime dependencies.'
        },
        learningResources: [
          { title: 'TypeScript Handbook', type: 'doc', url: 'https://www.typescriptlang.org/docs/' },
          { title: 'JavaScript.info: The Modern JavaScript Tutorial', type: 'guide', url: 'https://javascript.info/' }
        ]
      },
      {
        id: 'fed-mod-2',
        title: 'Advanced CSS, Responsive Design & Animation',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'CSS cascade layers, container queries, modern color spaces (OKLCH), and performant animations.',
        topics: ['CSS Container Queries (@container)', 'CSS Cascade Layers (@layer)', 'CSS Transforms & GPU Acceleration', 'Responsive Typography & Clamp'],
        stepByStepExplanation: 'Container queries allow components to adapt according to their parent container size rather than the global viewport width. Animations should target GPU-accelerated properties like transform and opacity to prevent layout recalculation and repaint cycles.',
        handsOnExercise: {
          title: 'Create a Card Component with Container Queries',
          instructions: 'Define a card element that switches from a stacked mobile view to a horizontal row when its container exceeds 480px.',
          taskSnippet: '@container (min-width: 480px) {\n  .card-layout { display: flex; flex-direction: row; }\n}',
          solutionTip: 'Remember to declare container-type: inline-size on the parent container wrapper element.'
        },
        practicalProject: {
          title: 'Fluid Design System Component Library',
          objective: 'Construct a reusable component system with buttons, modal dialogs, and inputs supporting dark/light mode.',
          deliverable: 'Storybook documentation and documented CSS design tokens.'
        },
        learningResources: [
          { title: 'CSS-Tricks: A Complete Guide to Container Queries', type: 'guide', url: 'https://css-tricks.com/' },
          { title: 'web.dev: Learn CSS', type: 'doc', url: 'https://web.dev/learn/css/' }
        ]
      },
      {
        id: 'fed-mod-3',
        title: 'Web Performance, Auditing & Web Vitals',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'Lighthouse scoring, Core Web Vitals (LCP, INP, CLS), asset loading strategies, and service workers.',
        topics: ['Interaction to Next Paint (INP)', 'Largest Contentful Paint (LCP) Optimization', 'Code Splitting & Dynamic Imports', 'Service Workers & Offline Caching'],
        stepByStepExplanation: 'INP measures application responsiveness to user clicks and taps; slow JavaScript execution on the main thread impairs this metric. Optimize LCP by preloading critical hero images, inlining critical CSS, and deferring non-essential third-party scripts.',
        handsOnExercise: {
          title: 'Audit and Optimize a Heavy Bundle',
          instructions: 'Analyze a bundle using Vite Rollup visualizer and split heavy chart and date libraries into asynchronous chunks.',
          taskSnippet: 'const ChartModule = await import("./heavyChart.js");',
          solutionTip: 'Use dynamic import() statements inside event handlers or route definitions to keep initial bundle size under 150KB.'
        },
        practicalProject: {
          title: 'High-Performance E-Commerce Product Listing',
          objective: 'Build an e-commerce catalog page achieving 95+ score on mobile Lighthouse with virtual scrolling.',
          deliverable: 'Audited web app with recorded before/after Lighthouse performance metrics.'
        },
        learningResources: [
          { title: 'Google Chrome Web Vitals Documentation', type: 'doc', url: 'https://web.dev/vitals/' },
          { title: 'MDN Web Performance Guide', type: 'guide', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' }
        ]
      }
    ],
    quiz: {
      id: 'fed-quiz',
      title: 'Frontend Engineering Assessment',
      description: 'Assess your mastery of DOM mechanics, CSS layout engines, and Core Web Vitals.',
      passingScore: 70,
      questions: [
        {
          id: 'fed-q1',
          question: 'Which metric replaced FID (First Input Delay) as a Core Web Vital to measure overall user interaction responsiveness?',
          options: ['FCP (First Contentful Paint)', 'INP (Interaction to Next Paint)', 'CLS (Cumulative Layout Shift)', 'TTFB (Time to First Byte)'],
          correctAnswerIndex: 1,
          explanation: 'INP evaluates the latency of all user interactions throughout the full lifespan of a page visit.'
        },
        {
          id: 'fed-q2',
          question: 'What makes CSS container queries fundamentally different from standard CSS media queries?',
          options: ['Container queries evaluate the dimensions of a specific parent container rather than the browser viewport', 'Container queries only apply to images', 'Container queries require WebGL', 'Container queries do not support responsive styling'],
          correctAnswerIndex: 0,
          explanation: 'Container queries allow a component to style itself dynamically based on its parent container width.'
        },
        {
          id: 'fed-q3',
          question: 'Which CSS properties can the browser animate most efficiently on the GPU without triggering layout recalculations?',
          options: ['width and height', 'top and left', 'transform and opacity', 'margin and padding'],
          correctAnswerIndex: 2,
          explanation: 'transform and opacity are handled directly by the browser compositor layer on the GPU, avoiding expensive layout reflows.'
        }
      ]
    }
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    category: 'Software Development',
    summary: 'Design scalable server architectures, database engines, caching layers, and microservices.',
    skillLevel: 'Intermediate',
    totalDurationHours: 46,
    relatedCareers: ['Full Stack Developer', 'Software Developer'],
    tags: ['Architecture', 'PostgreSQL', 'Redis', 'Microservices', 'REST', 'gRPC'],
    learningObjectives: [
      'Design reliable API gateways, reverse proxies, and microservice boundaries',
      'Optimize relational databases with indexing strategies, execution plans, and normalization',
      'Implement distributed caching and message broker architectures',
      'Protect backend systems against DDoS, injection, and authorization vulnerabilities',
      'Deploy resilient services with health checks, circuit breakers, and rate limiters'
    ],
    modules: [
      {
        id: 'bed-mod-1',
        title: 'Database Engineering & Query Optimization',
        level: 'Beginner',
        estimatedMinutes: 90,
        overview: 'Relational data modeling, ACID transactions, B-Tree indexes, and query execution plans.',
        topics: ['ACID Principles & Isolation Levels', 'B-Tree & Hash Indexing Mechanics', 'EXPLAIN ANALYZE & Query Plans', 'Database Connection Pooling'],
        stepByStepExplanation: 'A database query plan shows sequential scans versus index scans. Indexes use B-Trees to locate records in O(log N) time rather than O(N) full table scans. Connection pools manage persistent connections to eliminate expensive TCP handshake overhead.',
        handsOnExercise: {
          title: 'Optimize a Slow Query with Targeted Composite Indexes',
          instructions: 'Analyze an EXPLAIN output on a 500,000-row table and create a composite index matching WHERE and ORDER BY clauses.',
          taskSnippet: 'CREATE INDEX idx_orders_user_created ON orders (user_id, created_at DESC);',
          solutionTip: 'Order columns in the composite index starting with equality match fields first, followed by range/sorting fields.'
        },
        practicalProject: {
          title: 'High-Volume Financial Ledger System',
          objective: 'Create a transactional ledger schema with PostgreSQL ensuring double-entry accounting with serializable isolation.',
          deliverable: 'SQL schema, migration files, and stress-test script.'
        },
        learningResources: [
          { title: 'Use The Index, Luke: SQL Indexing Guide', type: 'guide', url: 'https://use-the-index-luke.com/' },
          { title: 'PostgreSQL Documentation: Performance Tips', type: 'doc', url: 'https://www.postgresql.org/docs/current/performance-tips.html' }
        ]
      },
      {
        id: 'bed-mod-2',
        title: 'Caching, Rate Limiting & API Security',
        level: 'Intermediate',
        estimatedMinutes: 110,
        overview: 'Redis cache patterns, Token Bucket rate limiting, CORS, and OAuth2 security.',
        topics: ['Cache-Aside & Write-Through Patterns', 'Token Bucket & Leaky Bucket Algorithms', 'Distributed Session Management', 'API Key & OAuth2 Scopes'],
        stepByStepExplanation: 'The cache-aside pattern checks Redis first; if a cache miss occurs, the backend reads from the database and populates Redis with an expiration TTL. Rate limiting protects endpoints from abuse by tracking request tokens per client IP or user token.',
        handsOnExercise: {
          title: 'Build a Sliding Window Rate Limiter with Redis',
          instructions: 'Implement middleware that enforces a maximum of 60 requests per minute using Redis sorted sets (ZSET).',
          taskSnippet: 'await redis.zadd(key, now, now);\nawait redis.zremrangebyscore(key, 0, now - 60000);',
          solutionTip: 'Use a Redis multi/exec transaction to execute the cleanup and count queries atomically.'
        },
        practicalProject: {
          title: 'Production API Gateway & Proxy',
          objective: 'Build an API gateway with rate limiting, JWT validation, response caching, and downstream service routing.',
          deliverable: 'Node.js/Go gateway service with test coverage.'
        },
        learningResources: [
          { title: 'Redis Architectural Patterns', type: 'doc', url: 'https://redis.io/docs/latest/develop/use/' },
          { title: 'OWASP API Security Top 10', type: 'guide', url: 'https://owasp.org/www-project-api-security/' }
        ]
      },
      {
        id: 'bed-mod-3',
        title: 'Distributed Systems & Asynchronous Pipelines',
        level: 'Advanced',
        estimatedMinutes: 130,
        overview: 'gRPC protocols, message queues (RabbitMQ/Kafka), circuit breakers, and idempotency keys.',
        topics: ['gRPC & Protocol Buffers (protobuf)', 'Idempotency Keys in Payment APIs', 'Circuit Breaker Pattern (Resilience)', 'Distributed Tracing & OpenTelemetry'],
        stepByStepExplanation: 'gRPC uses binary Protocol Buffers over HTTP/2 for low latency and typed contracts between microservices. For critical state changes like credit card charges, idempotency keys ensure duplicated network retries do not trigger duplicate charges.',
        handsOnExercise: {
          title: 'Implement an Idempotent Payment Endpoint',
          instructions: 'Store idempotency keys in Redis with status IN_PROGRESS and cached response to guarantee duplicate requests return the same result.',
          taskSnippet: 'const existing = await redis.get(`idemp:${key}`); if (existing) return JSON.parse(existing);',
          solutionTip: 'Set a temporary 10-second processing lock while the initial payment executes.'
        },
        practicalProject: {
          title: 'Distributed Event-Driven Order Processing System',
          objective: 'Design a microservice pipeline where an order placement triggers inventory allocation, invoice generation, and notification delivery.',
          deliverable: 'Microservice repository with Docker Compose and architecture diagram.'
        },
        learningResources: [
          { title: 'Designing Data-Intensive Applications Guide', type: 'guide', url: 'https://dataintensive.net/' },
          { title: 'gRPC Core Concepts', type: 'doc', url: 'https://grpc.io/docs/what-is-grpc/core-concepts/' }
        ]
      }
    ],
    quiz: {
      id: 'bed-quiz',
      title: 'Backend Systems Assessment',
      description: 'Evaluate your knowledge of databases, caching patterns, and distributed reliability.',
      passingScore: 70,
      questions: [
        {
          id: 'bed-q1',
          question: 'What is the primary purpose of an idempotency key in payment APIs?',
          options: ['To speed up database connections', 'To ensure that repeated identical requests produce the exact same outcome without duplicate actions', 'To encrypt credit card numbers', 'To bypass CORS checks'],
          correctAnswerIndex: 1,
          explanation: 'Idempotency keys prevent double charges if a client retries a payment request due to a network timeout.'
        },
        {
          id: 'bed-q2',
          question: 'What does a B-Tree index offer for relational database range queries?',
          options: ['Logarithmic time complexity O(log N) for searching and ordered traversal', 'Only linear O(N) scanning', 'Hash lookups with collisions', 'Automatic table compression'],
          correctAnswerIndex: 0,
          explanation: 'B-Tree data structures maintain balanced sorted order, facilitating O(log N) lookups, range filters, and ordering.'
        },
        {
          id: 'bed-q3',
          question: 'In the Cache-Aside pattern, what happens when a cache miss occurs?',
          options: ['The request immediately fails', 'The application reads from the persistent database and writes the result into cache with a TTL', 'The database deletes the row', 'The cache returns empty string'],
          correctAnswerIndex: 1,
          explanation: 'Upon a cache miss, the backend fetches fresh data from the primary store and writes it back into cache for future requests.'
        }
      ]
    }
  },
  {
    id: 'react-js',
    title: 'React.js',
    category: 'Software Development',
    summary: 'Build high-performance, accessible single-page web applications using modern React 19, hooks, and state management.',
    skillLevel: 'Intermediate',
    totalDurationHours: 38,
    relatedCareers: ['Full Stack Developer', 'Software Developer', 'UI/UX Designer'],
    tags: ['React 19', 'Hooks', 'State Management', 'TypeScript', 'Server Components', 'Tailwind'],
    learningObjectives: [
      'Master modern hooks: useState, useEffect, useMemo, useCallback, and custom hooks',
      'Understand React 19 features including useActionState, useOptimistic, and Server Actions',
      'Manage scalable global state with Zustand, Redux Toolkit, or Context API',
      'Optimize rendering performance and prevent superfluous component re-renders',
      'Implement production routing and accessible component design patterns'
    ],
    modules: [
      {
        id: 'react-mod-1',
        title: 'Component Lifecycle, Hooks & Reactive State',
        level: 'Beginner',
        estimatedMinutes: 80,
        overview: 'Declarative UI principles, reconciliation, useState, useEffect lifecycle, and immutable state updates.',
        topics: ['Virtual DOM & Fiber Reconciliation', 'useState & Pure Functions', 'useEffect Dependencies & Cleanups', 'Custom Hook Extraction'],
        stepByStepExplanation: 'React components are pure functions of props and state. When state changes, React recalculates the virtual DOM and calculates minimum mutations. useEffect runs after DOM commits and must always return cleanup functions when subscribing to browser events or timers.',
        handsOnExercise: {
          title: 'Build a Custom useDebounce Hook',
          instructions: 'Write a custom hook that delays updating a debounced value until a given delay has elapsed without changes.',
          taskSnippet: 'function useDebounce<T>(value: T, delay: number): T {\n  const [debounced, setDebounced] = useState(value);\n  ...',
          solutionTip: 'Set a setTimeout in useEffect and clear it in the return cleanup callback.'
        },
        practicalProject: {
          title: 'Interactive Filterable Data Table',
          objective: 'Build a searchable, sortable, paginated table component using custom hooks for state management.',
          deliverable: 'Reusable React component with full keyboard navigation and unit tests.'
        },
        learningResources: [
          { title: 'Official React Documentation', type: 'doc', url: 'https://react.dev/' },
          { title: 'React Hooks In-Depth Guide', type: 'guide', url: 'https://react.dev/reference/react' }
        ]
      },
      {
        id: 'react-mod-2',
        title: 'Performance Optimization & State Architecture',
        level: 'Intermediate',
        estimatedMinutes: 95,
        overview: 'useMemo, useCallback, memoization traps, React Profiler, and Zustand state management.',
        topics: ['React Profiler & Flamegraphs', 'useMemo vs useCallback', 'Zustand Lightweight State Store', 'Compound Components Pattern'],
        stepByStepExplanation: 'Re-renders happen whenever parent components re-render unless memoized. useMemo caches expensive calculations between renders, while useCallback preserves function references for memoized child components. Zustand provides a minimal, boilerplate-free store outside the component tree.',
        handsOnExercise: {
          title: 'Create a Shopping Cart Store with Zustand',
          instructions: 'Implement an inventory and cart store with actions for addItem, removeItem, and auto-computed subtotal with persist middleware.',
          taskSnippet: 'export const useCartStore = create<CartState>()(persist((set, get) => ({ ... }), { name: "cart" }));',
          solutionTip: 'Compute totals dynamically inside selectors or state getters to maintain single source of truth.'
        },
        practicalProject: {
          title: 'Multi-Step Form Wizard with Persistent Drafts',
          objective: 'Develop a wizard form with step validation, conditional step routing, and animated step transitions.',
          deliverable: 'Complete wizard app with accessible progress indicator.'
        },
        learningResources: [
          { title: 'Zustand State Management Docs', type: 'doc', url: 'https://docs.pmnd.rs/zustand/' },
          { title: 'Kent C. Dodds: When to useMemo and useCallback', type: 'guide', url: 'https://kentcdodds.com/blog/usememo-and-usecallback' }
        ]
      },
      {
        id: 'react-mod-3',
        title: 'React 19, Actions & Server Components',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'React 19 Actions, useActionState, useOptimistic, server-driven UI, and Suspense boundaries.',
        topics: ['useActionState & Form Actions', 'useOptimistic for Instant Feedback', 'Suspense & Error Boundaries', 'Next.js & React Server Components'],
        stepByStepExplanation: 'React 19 introduces native form actions and useOptimistic, enabling immediate UI updates while network requests resolve in the background. Suspense lets components render fallback loaders declaratively without boilerplate boolean flags.',
        handsOnExercise: {
          title: 'Implement an Optimistic Like Button with useOptimistic',
          instructions: 'Create a social post like button that immediately toggles active state and increments count before backend verification resolves.',
          taskSnippet: 'const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes, (state, update) => state + update);',
          solutionTip: 'If the server action throws an error, React automatically rolls back the optimistic state.'
        },
        practicalProject: {
          title: 'Real-Time Collaborative Notes App',
          objective: 'Build a note taking application with optimistic saving, markdown live preview, and offline IndexedDB synchronization.',
          deliverable: 'Production React application with automated build tests.'
        },
        learningResources: [
          { title: 'React 19 Upgrade Guide & Announcements', type: 'doc', url: 'https://react.dev/blog/2024/04/25/react-19' },
          { title: 'Next.js App Router Documentation', type: 'guide', url: 'https://nextjs.org/docs' }
        ]
      }
    ],
    quiz: {
      id: 'react-quiz',
      title: 'React 19 & Architecture Assessment',
      description: 'Test your understanding of component re-renders, modern hooks, and optimistic UI updates.',
      passingScore: 70,
      questions: [
        {
          id: 'react-q1',
          question: 'What is the primary function of the useOptimistic hook in React 19?',
          options: ['To compile CSS stylesheets', 'To display an expected final UI state immediately while an asynchronous action is pending', 'To automatically memoize all calculations', 'To replace the useEffect hook'],
          correctAnswerIndex: 1,
          explanation: 'useOptimistic enables instant UI updates for user actions before the server responds, rolling back if the request fails.'
        },
        {
          id: 'react-q2',
          question: 'What will happen if a useEffect hook does not return a cleanup function when subscribing to a window event listener?',
          options: ['The app will not build', 'Multiple duplicate listeners will accumulate on every re-render, creating memory leaks', 'React will automatically remove it', 'The browser will crash immediately'],
          correctAnswerIndex: 1,
          explanation: 'Without cleanup functions, old event listeners remain bound in memory on every effect trigger.'
        },
        {
          id: 'react-q3',
          question: 'When does a React functional component re-render by default?',
          options: ['Only when page is refreshed', 'Whenever its state changes, its parent re-renders, or its consumed context updates', 'Every 60 seconds automatically', 'Only when props change'],
          correctAnswerIndex: 1,
          explanation: 'Components re-render when local state changes, context values change, or when their parent re-renders.'
        }
      ]
    }
  },
  {
    id: 'node-express',
    title: 'Node.js and Express.js',
    category: 'Software Development',
    summary: 'Build high-performance REST APIs, real-time services, and microservices with Node.js runtime and Express.',
    skillLevel: 'Beginner',
    totalDurationHours: 36,
    relatedCareers: ['Full Stack Developer', 'Software Developer', 'Backend Development'],
    tags: ['Node.js', 'Express', 'Event Loop', 'REST', 'JWT', 'TypeScript'],
    learningObjectives: [
      'Master Node.js architecture: libuv, Event Loop, buffers, streams, and cluster module',
      'Construct production Express REST APIs with custom middleware and error handlers',
      'Implement JWT token authentication, bcrypt hashing, and rate limiting',
      'Work with file systems, streaming large uploads, and processing child processes',
      'Deploy Node.js services with PM2 process manager and Docker containers'
    ],
    modules: [
      {
        id: 'node-mod-1',
        title: 'Node.js Internals, Streams & Event Loop',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Libuv thread pool, event loop phases, readable/writable streams, and EventEmitter.',
        topics: ['Event Loop Phases (Timers, Poll, Check)', 'Libuv Worker Pool', 'Node.js Buffers & Streams', 'EventEmitter Architecture'],
        stepByStepExplanation: 'Node.js executes single-threaded JavaScript code on an event loop while offloading I/O operations to OS kernels or the Libuv worker pool. Streams allow memory-efficient processing of gigabyte-sized files chunk by chunk without reading the entire payload into RAM.',
        handsOnExercise: {
          title: 'Stream a Large File to HTTP Response',
          instructions: 'Create an HTTP endpoint that pipes a readable file stream directly into the response with gzip compression.',
          taskSnippet: 'fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);',
          solutionTip: 'Always attach error listeners to both readable and writable streams to prevent server crashes on client aborts.'
        },
        practicalProject: {
          title: 'CLI File Encryption & Decryption Utility',
          objective: 'Build a streaming command-line tool that encrypts files using AES-256-GCM without memory spikes.',
          deliverable: 'Node.js executable package with CLI flags.'
        },
        learningResources: [
          { title: 'Node.js Official Event Loop Guide', type: 'doc', url: 'https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick' },
          { title: 'Node.js Streams Handbook', type: 'guide', url: 'https://nodejs.org/api/stream.html' }
        ]
      },
      {
        id: 'node-mod-2',
        title: 'Express REST API Design & Production Middleware',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Routing, middleware chains, validation with Zod, and centralized error handling.',
        topics: ['Express 5 Router & Sub-apps', 'Zod Schema Validation Middleware', 'Centralized Error Handling Architecture', 'Helmet & Security Headers'],
        stepByStepExplanation: 'Express routes handle incoming HTTP requests sequentially. Applying Helmet sets critical HTTP headers (Content-Security-Policy, X-Frame-Options) to protect against clickjacking and XSS. Using Zod middleware validates request bodies before business logic runs.',
        handsOnExercise: {
          title: 'Build a Request Validation Middleware',
          instructions: 'Write higher-order middleware accepting a Zod schema that returns 400 Bad Request with field-level errors when validation fails.',
          taskSnippet: 'export const validate = (schema) => (req, res, next) => { ... };',
          solutionTip: 'Assign parsed data back onto req.body to ensure type safety and stripped unknown properties.'
        },
        practicalProject: {
          title: 'Multi-Tenant Authentication & Organization API',
          objective: 'Build an API supporting signups, organizations, roles (admin/member), and password reset flows.',
          deliverable: 'Express server with automated Supertest integration tests.'
        },
        learningResources: [
          { title: 'Express.js Guide', type: 'doc', url: 'https://expressjs.com/en/starter/installing.html' },
          { title: 'Node.js Security Best Practices', type: 'guide', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html' }
        ]
      },
      {
        id: 'node-mod-3',
        title: 'Clustering, WebSockets & Production Scaling',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'Cluster module, Socket.io real-time streaming, PM2 process management, and Dockerizing.',
        topics: ['Node.js Cluster Module & Workers', 'Socket.io Real-Time WebSockets', 'PM2 Ecosystem Config & Zero-Downtime Reload', 'Docker Multi-Stage Build for Node'],
        stepByStepExplanation: 'Because Node.js runs on a single thread, utilizing multi-core CPUs requires spawning worker processes using the cluster module or PM2 cluster mode. WebSockets provide persistent full-duplex communication channels between client and server.',
        handsOnExercise: {
          title: 'Set Up Real-Time Room Messaging with Socket.io',
          instructions: 'Implement room joins, authenticated socket handshakes, and broadcast event emitters for chat channels.',
          taskSnippet: 'io.use((socket, next) => { verifyToken(socket.handshake.auth.token); });',
          solutionTip: 'Use socket.join(roomId) and io.to(roomId).emit("message", data) to restrict messages to room participants.'
        },
        practicalProject: {
          title: 'Live Auction Engine with WebSocket & Redis Pub/Sub',
          objective: 'Build a clustered Node.js application broadcasting real-time auction bids to thousands of connected clients.',
          deliverable: 'Dockerized microservice with Redis adapter configuration.'
        },
        learningResources: [
          { title: 'Socket.io Documentation', type: 'doc', url: 'https://socket.io/docs/v4/' },
          { title: 'PM2 Production Runtime', type: 'guide', url: 'https://pm2.keymetrics.io/' }
        ]
      }
    ],
    quiz: {
      id: 'node-quiz',
      title: 'Node.js & Express Assessment',
      description: 'Evaluate your grasp of event loop phases, streaming APIs, and middleware pipelines.',
      passingScore: 70,
      questions: [
        {
          id: 'node-q1',
          question: 'Which phase of the Node.js event loop executes callbacks scheduled by setTimeout() and setInterval()?',
          options: ['Poll phase', 'Timers phase', 'Check phase', 'Close phase'],
          correctAnswerIndex: 1,
          explanation: 'The timers phase handles callbacks scheduled by setTimeout and setInterval whose thresholds have expired.'
        },
        {
          id: 'node-q2',
          question: 'Why are Node.js streams advantageous when transferring large files to users?',
          options: ['They compress files into ZIP automatically', 'They process data in sequential chunks without buffering the whole file in memory', 'They encrypt files using SSL', 'They bypass HTTP headers'],
          correctAnswerIndex: 1,
          explanation: 'Streams read and transmit data in small chunks, maintaining a flat memory footprint even for gigabyte files.'
        },
        {
          id: 'node-q3',
          question: 'How does an Express middleware pass control to the subsequent handler in the pipeline?',
          options: ['return true', 'next()', 'res.continue()', 'process.nextTick()'],
          correctAnswerIndex: 1,
          explanation: 'Calling next() triggers the next registered middleware in the Express request pipeline.'
        }
      ]
    }
  },
  {
    id: 'java-programming',
    title: 'Java Programming',
    category: 'Software Development',
    summary: 'Core and modern Java engineering covering OOP, JVM memory mechanics, Collections, Concurrency, and Java 21 features.',
    skillLevel: 'Beginner',
    totalDurationHours: 42,
    relatedCareers: ['Software Developer', 'Full Stack Developer'],
    tags: ['Java 21', 'OOP', 'Collections', 'Generics', 'Multithreading', 'JVM'],
    learningObjectives: [
      'Master object-oriented programming principles: Encapsulation, Polymorphism, Inheritance, and Abstraction',
      'Understand JVM memory architecture: Heap, Stack, Metaspace, and Garbage Collection',
      'Work expertly with the Java Collections Framework (List, Set, Map, Queue)',
      'Write robust multithreaded code using synchronized locks, ExecutorService, and Virtual Threads',
      'Apply modern Java idioms including Lambdas, Streams, and Records'
    ],
    modules: [
      {
        id: 'java-mod-1',
        title: 'OOP Principles, Class Design & Memory',
        level: 'Beginner',
        estimatedMinutes: 80,
        overview: 'Class hierarchies, interfaces, abstract classes, stack vs heap memory, and garbage collection.',
        topics: ['Encapsulation & Access Modifiers', 'Polymorphism & Dynamic Method Dispatch', 'Stack vs Heap Memory Lifecycle', 'Garbage Collector Mechanics (G1/ZGC)'],
        stepByStepExplanation: 'Primitive types and method invocation frames reside on the thread stack, whereas all object instances are created on the JVM Heap. The Garbage Collector automatically claims unreachable heap objects through mark-and-sweep phases.',
        handsOnExercise: {
          title: 'Design an Extensible Payment Processing Hierarchy',
          instructions: 'Create an abstract PaymentMethod class with concrete implementations for CreditCard, PayPal, and CryptoPayment.',
          taskSnippet: 'public abstract class PaymentMethod {\n  public abstract PaymentResult process(BigDecimal amount);\n}',
          solutionTip: 'Favor composition over inheritance by injecting validation strategies into payment methods.'
        },
        practicalProject: {
          title: 'Inventory Management System Core Engine',
          objective: 'Develop a modular inventory engine tracking warehouse items, stock thresholds, and transaction histories.',
          deliverable: 'Java application with comprehensive JUnit test suites.'
        },
        learningResources: [
          { title: 'Oracle Java Core Tutorials', type: 'doc', url: 'https://docs.oracle.com/javase/tutorial/' },
          { title: 'Dev.java: Java Programming Resource', type: 'guide', url: 'https://dev.java/' }
        ]
      },
      {
        id: 'java-mod-2',
        title: 'Java Collections Framework & Generics',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Deep dive into ArrayList, LinkedList, HashMap, TreeMap, and generic type parameters.',
        topics: ['HashMap Internal Mechanics & Hash Collisions', 'Comparable vs Comparator Interfaces', 'Generic Classes & Wildcards (? extends / ? super)', 'Concurrent Collections (ConcurrentHashMap)'],
        stepByStepExplanation: 'A Java HashMap operates as an array of buckets. When key hashes collide, entries form a linked list or transform into red-black trees when bucket sizes exceed 8, ensuring O(log N) lookup in high-collision scenarios.',
        handsOnExercise: {
          title: 'Build an LRU Cache with LinkedHashMap',
          instructions: 'Extend LinkedHashMap with access-order mode to construct a fixed-capacity Least Recently Used (LRU) cache.',
          taskSnippet: 'protected boolean removeEldestEntry(Map.Entry<K,V> eldest) {\n  return size() > maxCapacity;\n}',
          solutionTip: 'Pass true for accessOrder in the LinkedHashMap super constructor so lookups refresh element access order.'
        },
        practicalProject: {
          title: 'Custom In-Memory Indexer & Search Engine',
          objective: 'Construct an inverted index mapping document keywords to document IDs using generic Collections.',
          deliverable: 'Compiled Java module with benchmark latency measurements.'
        },
        learningResources: [
          { title: 'Java Collections Framework Overview', type: 'doc', url: 'https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html' },
          { title: 'Baeldung: Guide to Java HashMap', type: 'guide', url: 'https://www.baeldung.com/java-hashmap' }
        ]
      },
      {
        id: 'java-mod-3',
        title: 'Multithreading, Concurrency & Virtual Threads',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'Threads, ExecutorService, ReentrantLock, CompletableFuture, and Java 21 Virtual Threads.',
        topics: ['ExecutorService & ThreadPools', 'CompletableFuture Async Pipelines', 'Deadlocks, Race Conditions & Volatile', 'Java 21 Virtual Threads (Thread.ofVirtual())'],
        stepByStepExplanation: 'The volatile keyword ensures variable read/write visibility across multiple CPU caches. CompletableFuture facilitates non-blocking asynchronous workflows, chaining operations via thenApply and thenCompose.',
        handsOnExercise: {
          title: 'Process Parallel Web Requests with Virtual Threads',
          instructions: 'Spawn 5,000 virtual threads concurrently fetching dummy endpoints and aggregating results without exhausting system memory.',
          taskSnippet: 'try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n  executor.submit(() -> fetch(...));\n}',
          solutionTip: 'Virtual threads do not require pooling; instantiate tasks directly using newVirtualThreadPerTaskExecutor().'
        },
        practicalProject: {
          title: 'High-Throughput Order Matching Engine',
          objective: 'Develop an asynchronous order book matching bids and asks with thread-safe queues and atomic operations.',
          deliverable: 'Clean multithreaded Java project with stress test logs.'
        },
        learningResources: [
          { title: 'Java Concurrency in Practice Reference', type: 'guide', url: 'https://jcip.net/' },
          { title: 'Project Loom & Virtual Threads Documentation', type: 'doc', url: 'https://openjdk.org/projects/loom/' }
        ]
      }
    ],
    quiz: {
      id: 'java-quiz',
      title: 'Java Core & Concurrency Assessment',
      description: 'Test your understanding of JVM memory, collection internals, and virtual threads.',
      passingScore: 70,
      questions: [
        {
          id: 'java-q1',
          question: 'What occurs internally in a Java 8+ HashMap when a single bucket exceeds 8 entries under collision?',
          options: ['The JVM throws OutOfMemoryError', 'The bucket transforms from a linked list into a balanced Red-Black Tree', 'The duplicate keys are deleted', 'The map becomes unmodifiable'],
          correctAnswerIndex: 1,
          explanation: 'To maintain O(log N) lookup under hash collisions, HashMap converts long bucket lists into red-black trees.'
        },
        {
          id: 'java-q2',
          question: 'Where are Java local variables declared inside a method stored during runtime execution?',
          options: ['On the JVM Heap', 'In the Metaspace', 'On the Thread Stack', 'In the Native Method Stack'],
          correctAnswerIndex: 2,
          explanation: 'Method execution frames and local primitive variables are stored on the thread stack, discarded when the method exits.'
        },
        {
          id: 'java-q3',
          question: 'What is guaranteed by declaring a field with the volatile keyword in Java?',
          options: ['Atomic compound operations like count++', 'Memory visibility: all threads read the latest value directly from main memory', 'Automatic object serialization', 'Immutability'],
          correctAnswerIndex: 1,
          explanation: 'volatile guarantees thread visibility and prevents instruction reordering, though it does not provide compound atomicity.'
        }
      ]
    }
  },
  {
    id: 'c-cpp-programming',
    title: 'C and C++ Programming',
    category: 'Software Development',
    summary: 'Low-level systems programming, manual memory management, pointers, modern C++20/23 features, and STL.',
    skillLevel: 'Intermediate',
    totalDurationHours: 44,
    relatedCareers: ['Software Developer'],
    tags: ['C', 'C++20', 'Pointers', 'Memory Management', 'STL', 'Templates'],
    learningObjectives: [
      'Master pointers, pointer arithmetic, structures, and dynamic memory (malloc/free)',
      'Understand RAII (Resource Acquisition Is Initialization) and smart pointers (unique_ptr, shared_ptr)',
      'Work expertly with the Standard Template Library (vector, map, algorithms)',
      'Understand C++ templates, move semantics, and rvalue references',
      'Debug memory bugs, leaks, and buffer overflows with Valgrind and AddressSanitizer'
    ],
    modules: [
      {
        id: 'cpp-mod-1',
        title: 'C Memory Mechanics, Pointers & System Calls',
        level: 'Beginner',
        estimatedMinutes: 85,
        overview: 'Pointers, memory addresses, malloc/calloc/free, pointer arithmetic, and struct alignment.',
        topics: ['Pointers & Memory Addresses', 'Dynamic Memory & Heap Allocation', 'Struct Memory Layout & Padding', 'Valgrind Memory Leak Detection'],
        stepByStepExplanation: 'A pointer holds a memory address. Pointer arithmetic calculates byte offsets according to the size of the referenced type. Failing to call free() causes memory leaks, while referencing freed memory leads to undefined behavior.',
        handsOnExercise: {
          title: 'Implement a Dynamic Resizable Array in C',
          instructions: 'Build a dynamic array structure with push_back, capacity doubling using realloc, and memory cleanups.',
          taskSnippet: 'int* new_data = realloc(arr->data, arr->capacity * 2 * sizeof(int));',
          solutionTip: 'Always assign realloc to a temporary pointer to prevent memory leaks if realloc fails and returns NULL.'
        },
        practicalProject: {
          title: 'Custom In-Memory Key-Value Store in C',
          objective: 'Build a hash table in C with chaining collision resolution and zero memory leaks verified with Valgrind.',
          deliverable: 'C source file with Makefile and unit test runner.'
        },
        learningResources: [
          { title: 'C Reference Documentation', type: 'doc', url: 'https://en.cppreference.com/w/c' },
          { title: 'Valgrind User Manual', type: 'guide', url: 'https://valgrind.org/docs/manual/quick-start.html' }
        ]
      },
      {
        id: 'cpp-mod-2',
        title: 'Modern C++ RAII, Smart Pointers & STL',
        level: 'Intermediate',
        estimatedMinutes: 95,
        overview: 'C++17/20 idioms, RAII, std::unique_ptr, std::shared_ptr, vector, and algorithms.',
        topics: ['RAII Principle & Destructors', 'std::unique_ptr & std::shared_ptr', 'STL Containers & std::ranges', 'Move Semantics & std::move'],
        stepByStepExplanation: 'RAII binds the lifecycle of a resource (heap memory, file handles, sockets) to an object scope. When the object leaves scope, its destructor runs deterministically. Smart pointers automate this to prevent manual free/delete mistakes.',
        handsOnExercise: {
          title: 'Convert Raw Pointers to std::unique_ptr',
          instructions: 'Refactor a tree data structure to use std::unique_ptr for child nodes, implementing recursive cleanup automatically.',
          taskSnippet: 'struct TreeNode {\n  int val;\n  std::unique_ptr<TreeNode> left, right;\n};',
          solutionTip: 'Use std::make_unique<TreeNode>(val) for exception-safe allocations.'
        },
        practicalProject: {
          title: 'High-Performance Math Matrix Library in C++',
          objective: 'Develop a templated Matrix class supporting multiplication, transposition, and operator overloading.',
          deliverable: 'C++ header-only library with Google Test suite.'
        },
        learningResources: [
          { title: 'cppreference.com: Modern C++', type: 'doc', url: 'https://en.cppreference.com/w/' },
          { title: 'C++ Core Guidelines by Bjarne Stroustrup', type: 'guide', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines' }
        ]
      },
      {
        id: 'cpp-mod-3',
        title: 'C++ Templates, Concurrency & Low-Latency Tuning',
        level: 'Advanced',
        estimatedMinutes: 120,
        overview: 'Variadic templates, template metaprogramming, std::thread, atomic operations, and cache lines.',
        topics: ['Variadic Templates & Concepts (C++20)', 'std::atomic & Lock-Free Data Structures', 'CPU Cache Line False Sharing', 'AddressSanitizer & Profiling'],
        stepByStepExplanation: 'C++20 Concepts constrain template types at compile time with readable error messages. In multi-threaded systems programming, atomic operations allow lock-free synchronization without expensive OS mutex context switches.',
        handsOnExercise: {
          title: 'Build a Lock-Free Single Producer Single Consumer Queue',
          instructions: 'Implement a circular ring buffer with atomic head and tail indices for lock-free communication between two threads.',
          taskSnippet: 'std::atomic<size_t> head{0};\nstd::atomic<size_t> tail{0};',
          solutionTip: 'Use std::memory_order_acquire and std::memory_order_release for optimal memory barriers on modern CPUs.'
        },
        practicalProject: {
          title: 'Low-Latency Market Feed Handler',
          objective: 'Build a C++ application that decodes binary market tick data and publishes updates with sub-microsecond latency.',
          deliverable: 'Modern C++20 application with performance benchmark report.'
        },
        learningResources: [
          { title: 'Modern C++ Concurrency In Action', type: 'guide', url: 'https://www.modernescpp.com/' },
          { title: 'Compiler Explorer (Godbolt) for Assembly Analysis', type: 'doc', url: 'https://godbolt.org/' }
        ]
      }
    ],
    quiz: {
      id: 'cpp-quiz',
      title: 'C and C++ Systems Assessment',
      description: 'Evaluate your understanding of pointers, memory safety, and modern RAII patterns.',
      passingScore: 70,
      questions: [
        {
          id: 'cpp-q1',
          question: 'What is the primary advantage of std::unique_ptr over a raw C pointer in C++?',
          options: ['It compiles faster', 'It guarantees sole ownership and automatically frees memory when leaving scope without leaks', 'It permits multiple threads to write without locks', 'It runs in Python'],
          correctAnswerIndex: 1,
          explanation: 'std::unique_ptr enforces single ownership via RAII and automatically deallocates memory when destructed.'
        },
        {
          id: 'cpp-q2',
          question: 'What risk occurs when free() is called twice on the exact same allocated pointer in C?',
          options: ['Compile-time error', 'Undefined behavior and potential heap corruption / security vulnerability', 'The memory is reallocated', 'Nothing, it is ignored'],
          correctAnswerIndex: 1,
          explanation: 'Double freeing leads to undefined behavior and heap corruption vulnerabilities (double-free vulnerability).'
        },
        {
          id: 'cpp-q3',
          question: 'In modern C++, what do Move Semantics (std::move) achieve?',
          options: ['Copying memory byte-by-byte', 'Transferring ownership of underlying resources without allocating and copying buffers', 'Moving files on the disk', 'Garbage collecting objects'],
          correctAnswerIndex: 1,
          explanation: 'Move semantics transfer ownership of expensive internal buffers (like std::vector memory) without deep copying.'
        }
      ]
    }
  }
];
