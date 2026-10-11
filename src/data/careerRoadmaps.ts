import { TargetCareer, TaskPriority, Task } from '../types';

export interface CareerRoadmap {
  id: TargetCareer;
  title: TargetCareer;
  description: string;
  primaryCourseIds: string[];
  secondaryCourseIds: string[];
  recommendedTasks: Omit<Task, 'id' | 'createdAt' | 'status'>[];
  targetCertifications: string[];
  keySkillTags: string[];
}

export const CAREER_ROADMAPS: Record<TargetCareer, CareerRoadmap> = {
  'Full Stack Developer': {
    id: 'Full Stack Developer',
    title: 'Full Stack Developer',
    description: 'Design and deploy modern end-to-end web applications with reactive frontends, robust REST/GraphQL APIs, relational databases, and automated cloud deployments.',
    primaryCourseIds: ['full-stack-web-dev', 'react-js', 'node-express', 'sql-database-management'],
    secondaryCourseIds: ['frontend-development', 'backend-development', 'devops-cicd', 'git-github', 'dsa'],
    targetCertifications: ['AWS Certified Developer - Associate', 'Meta Certified Front-End / Back-End Developer'],
    keySkillTags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Docker', 'Git'],
    recommendedTasks: [
      {
        title: 'Build a Full-Stack CRUD Application with React & Express',
        description: 'Implement a full-stack project with JWT authentication, relational database migrations in PostgreSQL, and clean API error handling.',
        relatedTechOrCareer: 'Full Stack Developer',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '3 hours',
        notes: 'Include input validation using Zod and sanitize incoming request bodies.',
        learningResources: ['https://react.dev/', 'https://expressjs.com/'],
        isRecommended: true
      },
      {
        title: 'Design Normalized Database Schema & Migrations',
        description: 'Model users, organizations, memberships, and billing subscriptions adhering to 3NF relational normalization.',
        relatedTechOrCareer: 'Full Stack Developer',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 16),
        estimatedTime: '90 mins',
        notes: 'Check query execution plans with EXPLAIN ANALYZE for foreign key indexes.',
        learningResources: ['https://www.postgresql.org/docs/'],
        isRecommended: true
      },
      {
        title: 'Configure GitHub Actions CI/CD Pipeline',
        description: 'Automate linting, unit testing with Vitest/Jest, and container build checks on every pull request.',
        relatedTechOrCareer: 'Full Stack Developer',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 6).toISOString().slice(0, 16),
        estimatedTime: '60 mins',
        notes: 'Cache npm dependencies to keep pipeline duration under 90 seconds.',
        learningResources: ['https://docs.github.com/en/actions'],
        isRecommended: true
      }
    ]
  },
  'Python Full Stack Developer': {
    id: 'Python Full Stack Developer',
    title: 'Python Full Stack Developer',
    description: 'Build robust Python web systems combining Django or FastAPI on the backend with modern reactive frontend interfaces and asynchronous task queues.',
    primaryCourseIds: ['python-full-stack', 'react-js', 'sql-database-management', 'backend-development'],
    secondaryCourseIds: ['full-stack-web-dev', 'docker-kubernetes', 'git-github', 'devops-cicd'],
    targetCertifications: ['PCAP – Certified Associate in Python Programming', 'AWS Certified Developer'],
    keySkillTags: ['Python 3.12', 'Django', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'React'],
    recommendedTasks: [
      {
        title: 'Complete a Flask or Django Practice Project',
        description: 'Build a production REST API with Django REST Framework or FastAPI featuring token authentication, ORM relationships, and Swagger docs.',
        relatedTechOrCareer: 'Python Full Stack Developer',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '2.5 hours',
        notes: 'Implement select_related and prefetch_related to eliminate N+1 queries.',
        learningResources: ['https://docs.djangoproject.com/', 'https://fastapi.tiangolo.com/'],
        isRecommended: true
      },
      {
        title: 'Set Up Asynchronous Background Tasks with Celery & Redis',
        description: 'Offload long-running email generation or CSV reporting jobs to a Celery worker queue with exponential backoff retry.',
        relatedTechOrCareer: 'Python Full Stack Developer',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 5).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Ensure Docker Compose runs both web, worker, and Redis services.',
        learningResources: ['https://docs.celeryq.dev/'],
        isRecommended: true
      },
      {
        title: 'Write Pytest Suite for API Endpoint Validation',
        description: 'Achieve 85%+ test coverage testing authentication, edge cases, and database rollbacks using pytest-django / TestClient.',
        relatedTechOrCareer: 'Python Full Stack Developer',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 16),
        estimatedTime: '90 mins',
        notes: 'Utilize pytest fixtures for database model factories.',
        learningResources: ['https://docs.pytest.org/'],
        isRecommended: true
      }
    ]
  },
  'UI/UX Designer': {
    id: 'UI/UX Designer',
    title: 'UI/UX Designer',
    description: 'Research user psychology, design accessible component design systems in Figma, map end-to-end customer journeys, and validate ideas via usability testing.',
    primaryCourseIds: ['uiux-design-fundamentals', 'figma', 'user-research-personas', 'wireframing-prototyping'],
    secondaryCourseIds: ['design-systems', 'responsive-web-design', 'usability-testing', 'portfolio-development'],
    targetCertifications: ['Google UX Design Professional Certificate', 'Nielsen Norman Group UX Master Certified'],
    keySkillTags: ['Figma', 'Auto Layout', 'Design Tokens', 'User Research', 'Usability Testing', 'Wireframing'],
    recommendedTasks: [
      {
        title: 'Create a Figma Wireframe and Prototype',
        description: 'Construct a clickable mobile and desktop wireframe in Figma with Auto Layout, nested components, and interactive micro-interaction flows.',
        relatedTechOrCareer: 'UI/UX Designer',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Test thumb ergonomics on mobile frames and align spacing to the 8pt grid.',
        learningResources: ['https://help.figma.com/', 'https://lawsofux.com/'],
        isRecommended: true
      },
      {
        title: 'Conduct Usability Test with 5 Target Users',
        description: 'Run think-aloud usability testing sessions on your prototype, calculate the System Usability Scale (SUS) score, and map friction points.',
        relatedTechOrCareer: 'UI/UX Designer',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 16),
        estimatedTime: '90 mins',
        notes: 'Write non-leading task prompts that focus on real user motivation.',
        learningResources: ['https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'],
        isRecommended: true
      },
      {
        title: 'Build Multi-Theme Design Tokens & Components in Figma',
        description: 'Define W3C-compliant semantic color variables for light and dark modes with documented state matrices (hover, focus, disabled).',
        relatedTechOrCareer: 'UI/UX Designer',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Audit all color combinations for WCAG 2.1 AA 4.5:1 contrast compliance.',
        learningResources: ['https://help.figma.com/hc/en-us/articles/15339657135895-Guide-to-variables-in-Figma'],
        isRecommended: true
      }
    ]
  },
  'Data Scientist': {
    id: 'Data Scientist',
    title: 'Data Scientist',
    description: 'Formulate hypotheses, extract predictive insights from complex datasets, engineer machine learning pipelines, and deploy explainable models.',
    primaryCourseIds: ['data-science', 'python-data-science', 'machine-learning', 'sql-database-management'],
    secondaryCourseIds: ['deep-learning', 'generative-ai', 'nlp', 'data-visualization', 'dsa'],
    targetCertifications: ['Google Professional Data Scientist', 'AWS Certified Machine Learning - Specialty'],
    keySkillTags: ['Python', 'Pandas', 'Scikit-Learn', 'Statistics', 'XGBoost', 'SHAP', 'SQL'],
    recommendedTasks: [
      {
        title: 'Practice Pandas and Exploratory Data Analysis (EDA)',
        description: 'Perform deep EDA on a real-world tabular dataset: missing value imputation, distribution skewness checks, correlation analysis, and outlier detection.',
        relatedTechOrCareer: 'Data Scientist',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '2.5 hours',
        notes: 'Leverage memory-efficient categorical dtypes and vectorized operations.',
        learningResources: ['https://pandas.pydata.org/docs/', 'https://numpy.org/doc/stable/'],
        isRecommended: true
      },
      {
        title: 'Train & Tune XGBoost Classifier with Cross-Validation',
        description: 'Implement a leak-free Scikit-Learn pipeline with ColumnTransformer, tune hyperparams with Optuna, and evaluate ROC-AUC.',
        relatedTechOrCareer: 'Data Scientist',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Check for data leakage between train and test splits.',
        learningResources: ['https://xgboost.readthedocs.io/'],
        isRecommended: true
      },
      {
        title: 'Generate SHAP Feature Attribution Explanations',
        description: 'Compute TreeExplainer Shapley values and create waterfall plots to explain individual model predictions.',
        relatedTechOrCareer: 'Data Scientist',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 6).toISOString().slice(0, 16),
        estimatedTime: '60 mins',
        notes: 'Document the top-5 feature drivers and their directional impact on predictions.',
        learningResources: ['https://shap.readthedocs.io/'],
        isRecommended: true
      }
    ]
  },
  'Data Analyst': {
    id: 'Data Analyst',
    title: 'Data Analyst',
    description: 'Transform enterprise transactional logs into executive dashboards, cohort retention heatmaps, unit economics KPIs, and actionable commercial insights.',
    primaryCourseIds: ['data-analytics', 'sql-database-management', 'data-visualization', 'python-data-science'],
    secondaryCourseIds: ['data-science', 'google-analytics', 'marketing-analytics', 'communication-skills'],
    targetCertifications: ['Google Data Analytics Professional Certificate', 'Microsoft Certified: Power BI Data Analyst Associate'],
    keySkillTags: ['SQL', 'Window Functions', 'Cohort Analysis', 'Tableau', 'PowerBI', 'KPIs', 'Python'],
    recommendedTasks: [
      {
        title: 'Write Advanced SQL Window Function Analytics Query',
        description: 'Calculate month-over-month revenue growth, 7-day moving averages, and cumulative customer lifetime spend using RANK, LAG, and OVER clauses.',
        relatedTechOrCareer: 'Data Analyst',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '90 mins',
        notes: 'Structure queries with clean Common Table Expressions (CTEs) for maintainability.',
        learningResources: ['https://mode.com/sql-tutorial/sql-window-functions/'],
        isRecommended: true
      },
      {
        title: 'Generate a Triangular Customer Retention Cohort Heatmap',
        description: 'Group transaction logs by customer signup month and calculate 12-month retention percentages in Python or SQL.',
        relatedTechOrCareer: 'Data Analyst',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Identify whether recent calendar cohorts retain better than historical baselines.',
        learningResources: ['https://pandas.pydata.org/'],
        isRecommended: true
      },
      {
        title: 'Build Executive KPI Dashboard with Drill-Down Filters',
        description: 'Create an interactive dashboard tracking ARR, CAC payback, churn, and net revenue retention (NRR) following the 5-second rule.',
        relatedTechOrCareer: 'Data Analyst',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 16),
        estimatedTime: '90 mins',
        notes: 'Use preattentive color attributes to highlight metrics deviating from target.',
        learningResources: ['https://www.storytellingwithdata.com/'],
        isRecommended: true
      }
    ]
  },
  'AI/ML Engineer': {
    id: 'AI/ML Engineer',
    title: 'AI/ML Engineer',
    description: 'Design deep neural networks, fine-tune transformer models, implement high-performance RAG vector search, and deploy production ML microservices.',
    primaryCourseIds: ['machine-learning', 'deep-learning', 'generative-ai', 'llms'],
    secondaryCourseIds: ['nlp', 'python-data-science', 'docker-kubernetes', 'cloud-computing', 'dsa'],
    targetCertifications: ['AWS Certified Machine Learning - Specialty', 'Google Professional Machine Learning Engineer'],
    keySkillTags: ['PyTorch', 'Transformers', 'LLMs', 'RAG', 'Vector DBs', 'Fine-Tuning', 'FastAPI'],
    recommendedTasks: [
      {
        title: 'Build a Basic LLM-Powered Application',
        description: 'Implement an end-to-end RAG question-answering service using dense vector embeddings, hybrid BM25 search, and structured JSON output schema.',
        relatedTechOrCareer: 'AI/ML Engineer',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '3 hours',
        notes: 'Include chunk metadata attribution and re-ranking to minimize hallucinations.',
        learningResources: ['https://huggingface.co/', 'https://docs.llamaindex.ai/'],
        isRecommended: true
      },
      {
        title: 'Fine-Tune Open-Weights Model with QLoRA & PEFT',
        description: 'Train a 4-bit quantized Llama or Mistral adapter on a specialized domain instruction dataset using Hugging Face TRL.',
        relatedTechOrCareer: 'AI/ML Engineer',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 5).toISOString().slice(0, 16),
        estimatedTime: '2.5 hours',
        notes: 'Evaluate training loss convergence and benchmark against base model responses.',
        learningResources: ['https://huggingface.co/docs/peft/'],
        isRecommended: true
      },
      {
        title: 'Export PyTorch Vision Model to ONNX & Benchmark Latency',
        description: 'Convert a trained ResNet / MobileNet PyTorch model to ONNX runtime format and benchmark CPU/GPU inference latency.',
        relatedTechOrCareer: 'AI/ML Engineer',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 16),
        estimatedTime: '90 mins',
        notes: 'Verify output tensor numerical equivalence against the original PyTorch model.',
        learningResources: ['https://onnxruntime.ai/docs/'],
        isRecommended: true
      }
    ]
  },
  'Digital Marketing Specialist': {
    id: 'Digital Marketing Specialist',
    title: 'Digital Marketing Specialist',
    description: 'Drive customer acquisition and brand growth through search engine optimization, Google Ads paid acquisition, email nurture flows, and performance analytics.',
    primaryCourseIds: ['digital-marketing-fundamentals', 'seo', 'google-ads', 'email-marketing'],
    secondaryCourseIds: ['social-media-marketing', 'content-marketing', 'google-analytics', 'marketing-analytics', 'personal-branding'],
    targetCertifications: ['Google Ads Search Certification', 'Google Analytics 4 Certification', 'HubSpot Inbound Marketing Certification'],
    keySkillTags: ['SEO', 'Google Ads', 'GA4', 'Email Automation', 'Copywriting', 'CAC/LTV', 'Growth'],
    recommendedTasks: [
      {
        title: 'Complete an SEO Keyword Research Exercise',
        description: 'Analyze monthly search volume, keyword difficulty, and intent for 20 high-value transactional queries and build an on-page content strategy.',
        relatedTechOrCareer: 'Digital Marketing Specialist',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Categorize search intent (informational, commercial, transactional) for each target.',
        learningResources: ['https://ahrefs.com/blog/keyword-research/', 'https://developers.google.com/search/docs'],
        isRecommended: true
      },
      {
        title: 'Configure Google Ads Search Campaign with Negative Keywords',
        description: 'Set up themed ad groups, exact/phrase match keywords, negative keyword lists, and write 3 responsive search ads with extensions.',
        relatedTechOrCareer: 'Digital Marketing Specialist',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 16),
        estimatedTime: '90 mins',
        notes: 'Structure ad copy to achieve top Quality Score relevance.',
        learningResources: ['https://support.google.com/google-ads/'],
        isRecommended: true
      },
      {
        title: 'Design an Automated Abandoned Cart 3-Email Flow',
        description: 'Author subject lines, preview text, and persuasive copy for a 3-part recovery sequence with social proof and urgency triggers.',
        relatedTechOrCareer: 'Digital Marketing Specialist',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 6).toISOString().slice(0, 16),
        estimatedTime: '75 mins',
        notes: 'Include single prominent CTA button and mobile-optimized preview copy.',
        learningResources: ['https://reallygoodemails.com/'],
        isRecommended: true
      }
    ]
  },
  'Cloud Engineer': {
    id: 'Cloud Engineer',
    title: 'Cloud Engineer',
    description: 'Architect, provision, and maintain resilient cloud infrastructure, multi-zone VPC networks, container orchestration, and automated CI/CD pipelines.',
    primaryCourseIds: ['cloud-computing', 'google-cloud-fundamentals', 'aws-fundamentals', 'docker-kubernetes'],
    secondaryCourseIds: ['devops-cicd', 'cybersecurity-fundamentals', 'backend-development', 'git-github'],
    targetCertifications: ['AWS Certified Solutions Architect - Associate', 'Google Cloud Associate Cloud Engineer'],
    keySkillTags: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'VPC Networking', 'IAM'],
    recommendedTasks: [
      {
        title: 'Complete a Cloud Fundamentals Lab',
        description: 'Provision a secure multi-tier VPC across two availability zones with public/private subnets, NAT Gateway, and strict Security Group rules.',
        relatedTechOrCareer: 'Cloud Engineer',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Ensure database subnets remain completely private with zero public internet routes.',
        learningResources: ['https://docs.aws.amazon.com/vpc/', 'https://cloud.google.com/vpc/docs'],
        isRecommended: true
      },
      {
        title: 'Deploy Containerized Application on Kubernetes with Ingress',
        description: 'Author Kubernetes Deployment, ClusterIP Service, and Ingress manifests with automated TLS certificate management via cert-manager.',
        relatedTechOrCareer: 'Cloud Engineer',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 5).toISOString().slice(0, 16),
        estimatedTime: '2.5 hours',
        notes: 'Define liveness and readiness HTTP probes and CPU/memory limits.',
        learningResources: ['https://kubernetes.io/docs/home/'],
        isRecommended: true
      },
      {
        title: 'Write Terraform Scripts for Cloud Storage & IAM Roles',
        description: 'Provision cloud storage buckets with lifecycle policies and least-privilege IAM service account bindings using Infrastructure as Code.',
        relatedTechOrCareer: 'Cloud Engineer',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 16),
        estimatedTime: '90 mins',
        notes: 'Store Terraform state in a remote encrypted backend with state locking.',
        learningResources: ['https://www.terraform.io/docs'],
        isRecommended: true
      }
    ]
  },
  'Cybersecurity Analyst': {
    id: 'Cybersecurity Analyst',
    title: 'Cybersecurity Analyst',
    description: 'Defend systems and networks: threat modeling, vulnerability assessments, penetration testing, SIEM log monitoring, and incident response.',
    primaryCourseIds: ['cybersecurity-fundamentals', 'cloud-computing', 'devops-cicd', 'backend-development'],
    secondaryCourseIds: ['google-cloud-fundamentals', 'aws-fundamentals', 'git-github', 'communication-skills'],
    targetCertifications: ['CompTIA Security+', 'Certified Information Systems Security Professional (CISSP) Associate'],
    keySkillTags: ['OWASP', 'Zero-Trust', 'Cryptography', 'SIEM', 'Threat Modeling', 'Wireshark', 'IAM'],
    recommendedTasks: [
      {
        title: 'Perform OWASP Vulnerability Audit on API Endpoints',
        description: 'Test API routes for IDOR authorization flaws, SQL injection risks, and verify all passwords use Argon2id/bcrypt salted hashing.',
        relatedTechOrCareer: 'Cybersecurity Analyst',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Document findings in a standardized vulnerability assessment matrix.',
        learningResources: ['https://owasp.org/www-project-top-ten/'],
        isRecommended: true
      },
      {
        title: 'Analyze Network Traffic PCAP Capture in Wireshark',
        description: 'Inspect packet traces, identify unauthorized port scanning signatures, and reconstruct unencrypted HTTP plaintext payloads.',
        relatedTechOrCareer: 'Cybersecurity Analyst',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 16),
        estimatedTime: '90 mins',
        notes: 'Apply display filters for anomalous TCP flags and DNS tunneling.',
        learningResources: ['https://www.wireshark.org/docs/'],
        isRecommended: true
      },
      {
        title: 'Draft Corporate Incident Response Playbook for Ransomware',
        description: 'Create actionable procedures for isolation, containment, evidence preservation, communication escalation, and backup restoration.',
        relatedTechOrCareer: 'Cybersecurity Analyst',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Align playbooks with NIST SP 800-61 computer security incident handling guide.',
        learningResources: ['https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final'],
        isRecommended: true
      }
    ]
  },
  'Software Developer': {
    id: 'Software Developer',
    title: 'Software Developer',
    description: 'Master core computer science algorithms, system design, object-oriented software engineering, version control, and multi-threaded architectures.',
    primaryCourseIds: ['dsa', 'full-stack-web-dev', 'java-programming', 'c-cpp-programming'],
    secondaryCourseIds: ['react-js', 'node-express', 'git-github', 'technical-interview-prep', 'resume-portfolio-building'],
    targetCertifications: ['Oracle Certified Professional: Java SE Developer', 'AWS Certified Developer'],
    keySkillTags: ['Data Structures', 'Algorithms', 'Java', 'C++', 'System Design', 'Git', 'OOP'],
    recommendedTasks: [
      {
        title: 'Solve 5 Medium Algorithmic Problems on LeetCode',
        description: 'Practice the Two Pointers and Sliding Window patterns, focusing on optimal time complexity and rigorous boundary condition testing.',
        relatedTechOrCareer: 'Software Developer',
        priority: 'High',
        dueDateTime: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
        estimatedTime: '2.5 hours',
        notes: 'Verbalize problem solving steps aloud as if in a live technical interview.',
        learningResources: ['https://neetcode.io/'],
        isRecommended: true
      },
      {
        title: 'Implement Multi-Threaded Queue with Concurrency Locks',
        description: 'Build a thread-safe producer-consumer queue in Java or C++ utilizing condition variables, mutexes, and boundary checks.',
        relatedTechOrCareer: 'Software Developer',
        priority: 'Medium',
        dueDateTime: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 16),
        estimatedTime: '2 hours',
        notes: 'Test for race conditions and avoid deadlock scenarios.',
        learningResources: ['https://docs.oracle.com/en/java/'],
        isRecommended: true
      },
      {
        title: 'Conduct an Interactive Git Rebase & Clean Commit History',
        description: 'Squash redundant fix commits, reword semantic messages using Conventional Commits, and resolve deliberate merge conflicts.',
        relatedTechOrCareer: 'Software Developer',
        priority: 'Low',
        dueDateTime: new Date(Date.now() + 86400000 * 6).toISOString().slice(0, 16),
        estimatedTime: '60 mins',
        notes: 'Verify final clean linear history with git log --oneline --graph.',
        learningResources: ['https://git-scm.com/book/en/v2'],
        isRecommended: true
      }
    ]
  }
};
