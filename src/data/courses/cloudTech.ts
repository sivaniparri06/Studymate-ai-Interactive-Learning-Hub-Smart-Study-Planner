import { Course } from '../../types';

export const cloudTechCourses: Course[] = [
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    category: 'Cloud and Emerging Technologies',
    summary: 'Foundational cloud models (IaaS, PaaS, Serverless), multi-region availability, virtualization, security shared responsibility, and cost optimization.',
    skillLevel: 'Beginner',
    totalDurationHours: 36,
    relatedCareers: ['Cloud Engineer', 'Cybersecurity Analyst', 'Backend Development'],
    tags: ['Cloud', 'IaaS', 'PaaS', 'Serverless', 'High Availability', 'Disaster Recovery'],
    learningObjectives: [
      'Compare IaaS, PaaS, SaaS, and Serverless deployment architectures',
      'Understand cloud regions, availability zones, edge locations, and latency routing',
      'Apply the Cloud Shared Responsibility Model for infrastructure and application security',
      'Design fault-tolerant, highly available systems with active-passive disaster recovery',
      'Analyze cloud billing metrics and implement cost allocation tags (FinOps)'
    ],
    modules: [
      {
        id: 'cc-mod-1',
        title: 'Cloud Models, Architecture & Global Infrastructure',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'IaaS vs PaaS vs Serverless, Hypervisors, Regions, Availability Zones, and VPC networking.',
        topics: ['Service Models: IaaS (VMs), PaaS (App Engine/Elastic Beanstalk), Serverless (Functions)', 'Regions vs Availability Zones (AZ) Fault Domains', 'Content Delivery Networks (CDNs) & Edge POPs', 'Shared Responsibility Model: Customer vs Cloud Provider'],
        stepByStepExplanation: 'Cloud providers distribute compute across geographical regions comprised of multiple isolated Availability Zones connected by low-latency fiber. Deploying across at least two AZs shields applications from data center power or cooling failures. In IaaS, you manage the OS and patching; in Serverless, the provider manages everything up to the execution runtime.',
        handsOnExercise: {
          title: 'Design a Multi-AZ Fault Tolerant Architecture',
          instructions: 'Draft an architectural diagram with an Application Load Balancer distributing traffic across compute instances in two distinct AZs backed by a multi-AZ database.',
          taskSnippet: '// Architecture: Public Subnets (AZ-1, AZ-2) with ALB -> Private Subnets (AZ-1, AZ-2) with VMs -> Isolated DB Subnets with Multi-AZ Replication',
          solutionTip: 'Always place database instances in private isolated subnets with zero direct public internet gateway exposure.'
        },
        practicalProject: {
          title: 'Enterprise Multi-Tier Cloud Architecture Blueprint',
          objective: 'Design a scalable multi-tier web application specification with automated health checks, CDN edge caching, and failover mechanics.',
          deliverable: 'Architecture diagram and security boundary specification document.'
        },
        learningResources: [
          { title: 'NIST Definition of Cloud Computing (SP 800-145)', type: 'doc', url: 'https://csrc.nist.gov/publications/detail/sp/800-145/final' },
          { title: 'AWS Well-Architected Framework', type: 'guide', url: 'https://aws.amazon.com/architecture/well-architected/' }
        ]
      },
      {
        id: 'cc-mod-2',
        title: 'Virtual Networking, Subnets & Security Groups',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'CIDR blocks, public/private subnets, Internet Gateways, NAT Gateways, and Stateful Security Groups vs Stateless NACLs.',
        topics: ['CIDR Notation & IP Subnet Math (/16, /24, /28)', 'Internet Gateway (IGW) vs NAT Gateway', 'Stateful Security Groups vs Stateless Network ACLs (NACLs)', 'VPC Peering & Transit Gateways'],
        stepByStepExplanation: 'A Virtual Private Cloud (VPC) provides isolated software-defined networking. Private subnets use NAT Gateways to initiate outbound traffic (e.g. software patches) without allowing incoming connections from the public web. Security groups are stateful: if an inbound request is permitted, response traffic is automatically allowed.',
        handsOnExercise: {
          title: 'Calculate Subnet Ranges and Configure Routes',
          instructions: 'Divide a 10.0.0.0/16 VPC into two public subnets (/24) and two private subnets (/24) and assign correct default gateway routes.',
          taskSnippet: '// Public 1: 10.0.1.0/24 (Route to IGW) | Private 1: 10.0.10.0/24 (Route 0.0.0.0/0 to NAT Gateway)',
          solutionTip: 'A /24 subnet provides 256 total IP addresses, with cloud providers reserving 5 IPs for network, DNS, and gateway roles.'
        },
        practicalProject: {
          title: 'Secure Dual-Zone VPC Infrastructure Deployment',
          objective: 'Write Terraform or CloudFormation scripts provisioning a VPC across two AZs with public, private, and database subnets.',
          deliverable: 'Infrastructure as Code template and validation ping test logs.'
        },
        learningResources: [
          { title: 'Google Cloud: VPC Network Overview', type: 'doc', url: 'https://cloud.google.com/vpc/docs/overview' },
          { title: 'AWS VPC User Guide', type: 'guide', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/' }
        ]
      },
      {
        id: 'cc-mod-3',
        title: 'Disaster Recovery, High Availability & FinOps',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'RTO and RPO metrics, Backup & Restore vs Pilot Light vs Warm Standby vs Active-Active, and FinOps cost allocation.',
        topics: ['Recovery Time Objective (RTO) vs Recovery Point Objective (RPO)', 'Disaster Recovery Strategies (Backup/Restore, Pilot Light, Warm Standby, Active-Active)', 'FinOps: Cost Allocation Tags, Reserved Instances & Spot VMs', 'Chaos Engineering & Fault Injection Simulations'],
        stepByStepExplanation: 'RPO defines maximum tolerable data loss in time units; RTO defines acceptable downtime duration. An Active-Active multi-region deployment achieves near-zero RTO and RPO but multiplies infrastructure costs. FinOps practices use cost allocation tagging to assign resource expenses to specific product teams.',
        handsOnExercise: {
          title: 'Calculate RTO/RPO and FinOps Savings',
          instructions: 'Model cost differences between 24/7 on-demand instances vs a 3-year Compute Savings Plan paired with Spot VM auto-scaling.',
          taskSnippet: '// On-Demand: 10 x $0.096/hr * 730 hrs = $700.80/mo | 3-Yr Savings Plan (45% off) = $385.44/mo -> Annual Savings: $3,784',
          solutionTip: 'Reserve stable baseline workloads with Savings Plans; handle spike traffic with Spot or On-Demand instances.'
        },
        practicalProject: {
          title: 'Enterprise Disaster Recovery & FinOps Optimization Audit',
          objective: 'Audit a company’s single-region infrastructure, design a Pilot Light secondary region failover strategy, and propose 25% cost reductions.',
          deliverable: 'Executive disaster recovery plan and FinOps cost reduction proposal.'
        },
        learningResources: [
          { title: 'FinOps Foundation: What is FinOps?', type: 'guide', url: 'https://www.finops.org/introduction/what-is-finops/' },
          { title: 'Google Cloud Disaster Recovery Planning Guide', type: 'doc', url: 'https://cloud.google.com/solutions/dr-scenarios-planning-guide' }
        ]
      }
    ],
    quiz: {
      id: 'cc-quiz',
      title: 'Cloud Computing Architecture Assessment',
      description: 'Evaluate your knowledge of cloud deployment models, VPC networking, and disaster recovery RTO/RPO.',
      passingScore: 70,
      questions: [
        {
          id: 'cc-q1',
          question: 'In the Cloud Shared Responsibility Model, what is the customer responsible for in an Infrastructure as a Service (IaaS) model?',
          options: ['Physical security of data centers', 'Replacing broken cooling fans', 'Guest OS updates, security patching, application code, firewall rules, and data encryption', 'Undersea optical cables'],
          correctAnswerIndex: 2,
          explanation: 'In IaaS, the provider manages the hardware and hypervisor, while the customer manages the guest OS, networking rules, and data.'
        },
        {
          id: 'cc-q2',
          question: 'What is the key difference between Recovery Point Objective (RPO) and Recovery Time Objective (RTO)?',
          options: ['RPO measures monetary loss; RTO measures server weight', 'RPO measures maximum tolerable data loss in time (how much data was lost); RTO measures maximum tolerable downtime duration to restore service', 'They are identical', 'RTO is for hardware only'],
          correctAnswerIndex: 1,
          explanation: 'RPO defines how much historical data can be lost; RTO defines how long the system can remain down during an outage.'
        },
        {
          id: 'cc-q3',
          question: 'Why are Security Groups described as "stateful" while Network ACLs (NACLs) are "stateless"?',
          options: ['Security groups store data in Redis', 'If an inbound request is permitted by a Security Group, the corresponding outbound response is automatically allowed regardless of outbound rules', 'Security groups are slower', 'Security groups do not have rules'],
          correctAnswerIndex: 1,
          explanation: 'Stateful security groups automatically track connection states, allowing reply traffic without explicit outbound rules.'
        }
      ]
    }
  },
  {
    id: 'google-cloud-fundamentals',
    title: 'Google Cloud Fundamentals',
    category: 'Cloud and Emerging Technologies',
    summary: 'Master Google Cloud Platform (GCP): Cloud Run, Google Kubernetes Engine (GKE), Cloud Storage, IAM, BigQuery, and Pub/Sub.',
    skillLevel: 'Beginner',
    totalDurationHours: 38,
    relatedCareers: ['Cloud Engineer', 'Software Developer'],
    tags: ['GCP', 'Cloud Run', 'GKE', 'BigQuery', 'IAM', 'PubSub', 'Cloud Storage'],
    learningObjectives: [
      'Navigate GCP hierarchy: Organizations, Folders, Projects, and IAM Role Bindings',
      'Deploy containerized applications on Cloud Run with automated scale-to-zero',
      'Manage scalable storage with Cloud Storage buckets, lifecycle policies, and signed URLs',
      'Architect event-driven pipelines using Cloud Pub/Sub and Eventarc',
      'Monitor and troubleshoot applications using Google Cloud Logging and Cloud Monitoring'
    ],
    modules: [
      {
        id: 'gcp-mod-1',
        title: 'Resource Hierarchy, IAM & Cloud Storage',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Projects, service accounts, IAM roles (primitive, predefined, custom), and Cloud Storage storage classes.',
        topics: ['GCP Resource Hierarchy (Org -> Folders -> Projects -> Resources)', 'IAM: Members, Roles (Predefined vs Custom), Service Accounts', 'Least Privilege Principle & Workload Identity', 'Cloud Storage Classes (Standard, Nearline, Coldline, Archive) and Lifecycle Rules'],
        stepByStepExplanation: 'Everything in Google Cloud belongs to a Project. Identity and Access Management (IAM) controls who has what permissions on which resources. Avoid assigning broad primitive roles (Owner, Editor); use precise predefined roles or Workload Identity Federation so workloads authenticate without hardcoded service account keys.',
        handsOnExercise: {
          title: 'Configure a Service Account with Least Privilege Access',
          instructions: 'Create a service account with roles/storage.objectViewer bound strictly to a single Cloud Storage bucket via gcloud CLI.',
          taskSnippet: 'gcloud storage buckets add-iam-policy-binding gs://my-bucket --member="serviceAccount:sa@proj.iam.gserviceaccount.com" --role="roles/storage.objectViewer"',
          solutionTip: 'Always bind IAM roles at the resource level (the bucket) rather than the project level when restricting access to specific assets.'
        },
        practicalProject: {
          title: 'Secure Cloud Storage Ingestion Pipeline',
          objective: 'Set up a Cloud Storage bucket with automatic 30-day lifecycle transition to Nearline, versioning, and pre-signed URL upload generation.',
          deliverable: 'Node.js/Python script generating signed URLs and Terraform bucket definition.'
        },
        learningResources: [
          { title: 'Google Cloud: Resource Hierarchy Guide', type: 'doc', url: 'https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy' },
          { title: 'Google Cloud: IAM Best Practices', type: 'guide', url: 'https://cloud.google.com/iam/docs/best-practices' }
        ]
      },
      {
        id: 'gcp-mod-2',
        title: 'Serverless Compute with Cloud Run & Eventarc',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Cloud Run container deployment, concurrency, scale-to-zero, custom domains, and Cloud Pub/Sub events.',
        topics: ['Deploying Containers to Cloud Run (gcloud run deploy)', 'Concurrency Settings (Default 80) & Cold Start Mitigation', 'Cloud Pub/Sub Topics, Subscriptions, and Dead-Letter Queues', 'Eventarc Event Routing from Cloud Storage and Audit Logs'],
        stepByStepExplanation: 'Google Cloud Run executes containerized web applications on a fully managed serverless platform. Unlike traditional function platforms, Cloud Run handles multiple concurrent requests (up to 250) on a single container instance and automatically scales down to zero instances when idle, saving costs.',
        handsOnExercise: {
          title: 'Deploy an Express App to Cloud Run with Min Instances',
          instructions: 'Build a container image with Cloud Build and deploy to Cloud Run setting min-instances=1 to eliminate cold starts.',
          taskSnippet: 'gcloud run deploy my-api --image=gcr.io/proj/my-api --min-instances=1 --max-instances=10 --allow-unauthenticated',
          solutionTip: 'Setting min-instances=1 keeps a warm instance alive, virtually eliminating cold starts for user-facing APIs.'
        },
        practicalProject: {
          title: 'Automated Image Processing Microservice on Cloud Run',
          objective: 'Build a service triggered by Pub/Sub whenever an image is uploaded to Cloud Storage, generating thumbnails and updating Firestore.',
          deliverable: 'Dockerized microservice repository deployed to Cloud Run with Eventarc trigger.'
        },
        learningResources: [
          { title: 'Google Cloud Run Documentation', type: 'doc', url: 'https://cloud.google.com/run/docs' },
          { title: 'Google Cloud Pub/Sub Architecture Guide', type: 'guide', url: 'https://cloud.google.com/pubsub/docs/overview' }
        ]
      },
      {
        id: 'gcp-mod-3',
        title: 'Google Kubernetes Engine (GKE) & Production Observability',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'GKE Autopilot, Ingress, Cloud Monitoring dashboards, Cloud Trace, and VPC Service Controls.',
        topics: ['GKE Autopilot vs Standard Clusters', 'GKE Workload Identity for Pod-Level IAM', 'Cloud Logging Queries & Log-Based Metrics', 'Cloud Monitoring Alerting Policies & SLA/SLO Tracking'],
        stepByStepExplanation: 'GKE Autopilot manages node provisioning, scaling, and security hardening automatically, charging only for requested Pod CPU and memory. GKE Workload Identity securely binds Kubernetes service accounts to Google IAM service accounts without needing exported JSON credentials.',
        handsOnExercise: {
          title: 'Configure GKE Workload Identity on a Pod',
          instructions: 'Bind a Kubernetes service account to a GCP IAM service account with annotations and test BigQuery query execution inside a Pod.',
          taskSnippet: 'kubectl annotate serviceaccount k8s-sa iam.gke.io/gcp-service-account=gcp-sa@proj.iam.gserviceaccount.com',
          solutionTip: 'Never store JSON service account key files in Kubernetes ConfigMaps or Secrets; use Workload Identity exclusively.'
        },
        practicalProject: {
          title: 'Resilient GKE Autopilot Production Cluster Deployment',
          objective: 'Deploy a microservices application on GKE Autopilot with Ingress, managed SSL certificates, and alert policies notifying PagerDuty on error spikes.',
          deliverable: 'Kubernetes YAML manifests and Google Cloud Monitoring alert policy specs.'
        },
        learningResources: [
          { title: 'GKE Autopilot Overview', type: 'doc', url: 'https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview' },
          { title: 'Google Cloud Observability Guide', type: 'guide', url: 'https://cloud.google.com/stackdriver/docs' }
        ]
      }
    ],
    quiz: {
      id: 'gcp-quiz',
      title: 'Google Cloud Platform Fundamentals Assessment',
      description: 'Evaluate your knowledge of GCP IAM least privilege, Cloud Run concurrency, and GKE Workload Identity.',
      passingScore: 70,
      questions: [
        {
          id: 'gcp-q1',
          question: 'What is the primary advantage of Google Cloud Run over traditional Functions-as-a-Service (FaaS) platforms?',
          options: ['It only runs C++ programs', 'It executes arbitrary container images and can handle up to 250 concurrent requests per single instance rather than one request per container', 'It requires physical server installation', 'It has no scaling capabilities'],
          correctAnswerIndex: 1,
          explanation: 'Cloud Run supports containerized apps with high request concurrency per instance, drastically lowering costs.'
        },
        {
          id: 'gcp-q2',
          question: 'Why is using GKE Workload Identity superior to mounting exported JSON service account key files in Kubernetes pods?',
          options: ['JSON files take too much disk space', 'Exported JSON keys are long-lived static credentials that present severe leak risks, while Workload Identity uses short-lived tokens automatically', 'Kubernetes cannot read JSON', 'Workload Identity turns off logging'],
          correctAnswerIndex: 1,
          explanation: 'Workload Identity eliminates the security hazard of managing and leaking static service account private key files.'
        },
        {
          id: 'gcp-q3',
          question: 'In Google Cloud IAM, what is the best practice for assigning permissions to team members?',
          options: ['Grant everyone the Project Owner role', 'Apply the Principle of Least Privilege using targeted Predefined or Custom roles at the appropriate resource level', 'Share a single root password', 'Disable IAM completely'],
          correctAnswerIndex: 1,
          explanation: 'Least privilege ensures users and services have only the minimum necessary permissions required for their specific role.'
        }
      ]
    }
  },
  {
    id: 'aws-fundamentals',
    title: 'AWS Fundamentals',
    category: 'Cloud and Emerging Technologies',
    summary: 'Master Amazon Web Services: EC2, S3, RDS, Lambda serverless functions, IAM policies, DynamoDB, and CloudFront CDN.',
    skillLevel: 'Beginner',
    totalDurationHours: 40,
    relatedCareers: ['Cloud Engineer', 'Software Developer'],
    tags: ['AWS', 'EC2', 'S3', 'Lambda', 'RDS', 'IAM', 'DynamoDB', 'CloudFront'],
    learningObjectives: [
      'Write granular AWS IAM policies with JSON statements (Principal, Action, Resource, Condition)',
      'Launch and configure secure EC2 virtual machines with user data scripts and security groups',
      'Deploy serverless APIs using AWS Lambda, API Gateway, and DynamoDB',
      'Manage relational databases with Amazon RDS multi-AZ failover and read replicas',
      'Distribute static assets and APIs globally using Amazon CloudFront and Route 53'
    ],
    modules: [
      {
        id: 'aws-mod-1',
        title: 'AWS Core: IAM, EC2 & S3 Storage',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'IAM Users/Roles/Policies, EC2 instance types, EBS volumes, and S3 bucket policies.',
        topics: ['IAM Policy Structure (Effect, Action, Resource, Condition)', 'IAM Roles vs IAM Users (Instance Profiles)', 'EC2 Launch Templates & User Data Bootstrapping', 'S3 Bucket Policies, CORS, and Object Lock for Compliance'],
        stepByStepExplanation: 'IAM policies evaluate explicit denies first; if no deny exists, an explicit allow grants access. EC2 instances should never contain embedded AWS access keys; attach an IAM Role via an Instance Profile so the AWS SDK automatically fetches temporary rotating credentials from the instance metadata service (IMDSv2).',
        handsOnExercise: {
          title: 'Write a Granular S3 Access IAM Policy',
          instructions: 'Draft an IAM JSON policy allowing s3:GetObject only on a specific bucket path under the condition that the request uses HTTPS.',
          taskSnippet: '{\n  "Effect": "Allow", "Action": "s3:GetObject", "Resource": "arn:aws:s3:::my-app-data/public/*",\n  "Condition": { "Bool": { "aws:SecureTransport": "true" } }\n}',
          solutionTip: 'Always enforce aws:SecureTransport condition in S3 bucket policies to deny insecure HTTP requests.'
        },
        practicalProject: {
          title: 'Secure Static Website & Global CDN Infrastructure',
          objective: 'Host a single-page app on private S3, serve via CloudFront with Origin Access Control (OAC), and secure with Route 53 custom domain SSL.',
          deliverable: 'CloudFormation/Terraform template and live HTTPS URL.'
        },
        learningResources: [
          { title: 'AWS Certified Cloud Practitioner Exam Guide', type: 'doc', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
          { title: 'AWS Documentation: IAM JSON Policy Reference', type: 'guide', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html' }
        ]
      },
      {
        id: 'aws-mod-2',
        title: 'Serverless Architecture with AWS Lambda & DynamoDB',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Lambda function lifecycle, API Gateway HTTP vs REST, DynamoDB partition keys, and EventBridge.',
        topics: ['AWS Lambda Execution Environment & Ephemeral Storage', 'HTTP APIs vs REST APIs in API Gateway', 'DynamoDB Single-Table Design & Partition Keys (PK/SK)', 'Amazon EventBridge for Serverless Event Busses'],
        stepByStepExplanation: 'AWS Lambda executes code in response to events without server management. API Gateway routes HTTP endpoints to Lambda functions. DynamoDB is a fully managed NoSQL database providing single-digit millisecond latency at any scale using hash partition keys and range sort keys.',
        handsOnExercise: {
          title: 'Build a Serverless CRUD Endpoint with DynamoDB',
          instructions: 'Write a Lambda handler in TypeScript inserting a document into DynamoDB using the AWS SDK v3 DynamoDBDocumentClient.',
          taskSnippet: 'await docClient.send(new PutCommand({ TableName: "Users", Item: { PK: `USER#${id}`, email } }));',
          solutionTip: 'Initialize the DynamoDB client outside the Lambda handler function so connection pools are reused across warm invocations.'
        },
        practicalProject: {
          title: 'Serverless Real-Time Webhook Processing Pipeline',
          objective: 'Create an architecture receiving external payment webhooks via API Gateway, buffering in SQS, and processing with Lambda to DynamoDB.',
          deliverable: 'Serverless Framework / AWS SAM configuration with automated integration tests.'
        },
        learningResources: [
          { title: 'AWS Lambda Developer Guide', type: 'doc', url: 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html' },
          { title: 'The DynamoDB Book by Alex DeBrie', type: 'guide', url: 'https://www.dynamodbbook.com/' }
        ]
      },
      {
        id: 'aws-mod-3',
        title: 'Relational Databases (RDS), Auto Scaling & Well-Architected Review',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'RDS Multi-AZ vs Read Replicas, Auto Scaling Groups (ASG), Application Load Balancers, and CloudWatch alarms.',
        topics: ['RDS Multi-AZ Synchronous Replication vs Read Replicas', 'Application Load Balancers (ALB) & Path-Based Routing', 'Auto Scaling Groups (ASG) Dynamic Scaling Policies', 'AWS Well-Architected Framework: Security & Reliability Pillars'],
        stepByStepExplanation: 'RDS Multi-AZ provides high availability and automatic failover by synchronously replicating transactions to a standby instance in another AZ. Read Replicas asynchronously replicate data to offload read-heavy analytical workloads. An Auto Scaling Group adjusts EC2 capacity automatically based on CPU utilization or ALB request counts.',
        handsOnExercise: {
          title: 'Configure Auto Scaling Group with Target Tracking',
          instructions: 'Define an Auto Scaling policy maintaining an average CPU utilization of 60% across an EC2 web cluster.',
          taskSnippet: '// Target Tracking Policy: Metric: ASGAverageCPUUtilization | TargetValue: 60.0 | ScaleInCooldown: 300s',
          solutionTip: 'Always set adequate cooldown periods to prevent rapid "thrashing" scale-in/scale-out oscillations.'
        },
        practicalProject: {
          title: 'Production Multi-Tier Auto-Scaling Web Application on AWS',
          objective: 'Deploy a resilient architecture with ALB, EC2 Auto Scaling Group across 2 AZs, and RDS PostgreSQL Multi-AZ cluster.',
          deliverable: 'Complete Terraform configuration and load testing script logs.'
        },
        learningResources: [
          { title: 'AWS Well-Architected Reliability Pillar Whitepaper', type: 'doc', url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/' },
          { title: 'Amazon RDS User Guide', type: 'guide', url: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/' }
        ]
      }
    ],
    quiz: {
      id: 'aws-quiz',
      title: 'Amazon Web Services Fundamentals Assessment',
      description: 'Evaluate your knowledge of IAM role assignment, Lambda execution contexts, and RDS Multi-AZ replication.',
      passingScore: 70,
      questions: [
        {
          id: 'aws-q1',
          question: 'What is the primary architectural difference between an RDS Multi-AZ deployment and an RDS Read Replica?',
          options: ['Multi-AZ is for backups only', 'Multi-AZ provides synchronous replication for automated disaster failover, while Read Replicas provide asynchronous replication to offload read traffic', 'Read replicas are only for SQLite', 'There is no difference'],
          correctAnswerIndex: 1,
          explanation: 'Multi-AZ ensures high availability through synchronous standby failover; Read Replicas scale read queries asynchronously.'
        },
        {
          id: 'aws-q2',
          question: 'How should an application running on an Amazon EC2 instance authenticate with AWS S3 without hardcoding API credentials?',
          options: ['Store secret keys in a public text file', 'Attach an IAM Role to the EC2 instance via an Instance Profile so temporary rotating credentials are provided automatically by metadata service', 'Send keys in HTTP query parameters', 'Turn off security'],
          correctAnswerIndex: 1,
          explanation: 'EC2 Instance Profiles allow applications to fetch short-lived rotating AWS credentials automatically via IMDS.'
        },
        {
          id: 'aws-q3',
          question: 'Why should database connection clients be initialized outside the AWS Lambda handler function?',
          options: ['They will fail to compile otherwise', 'To reuse established connection pools across warm function invocations rather than re-opening TCP handshakes on every single request', 'Lambda requires all code outside handlers', 'To make files smaller'],
          correctAnswerIndex: 1,
          explanation: 'Code outside the handler executes during cold-start initialization and persists across warm invocations, reusing DB connections.'
        }
      ]
    }
  },
  {
    id: 'devops-cicd',
    title: 'DevOps and CI/CD',
    category: 'Cloud and Emerging Technologies',
    summary: 'Continuous Integration and Continuous Deployment pipelines, GitHub Actions, automated testing, trunk-based development, and blue-green deployments.',
    skillLevel: 'Intermediate',
    totalDurationHours: 38,
    relatedCareers: ['Cloud Engineer', 'Software Developer'],
    tags: ['DevOps', 'CI/CD', 'GitHub Actions', 'Automation', 'Blue-Green', 'Terraform', 'Testing'],
    learningObjectives: [
      'Build automated CI pipelines in GitHub Actions with linting, unit tests, and vulnerability scans',
      'Implement deployment strategies: Rolling, Blue-Green, and Canary releases',
      'Adopt Trunk-Based Development with feature flags to decouple deploy from release',
      'Manage secrets securely using HashiCorp Vault, GitHub Secrets, and OIDC tokens',
      'Track DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore'
    ],
    modules: [
      {
        id: 'devops-mod-1',
        title: 'CI Pipelines, GitHub Actions & Test Automation',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Workflows, jobs, steps, matrices, caching npm/pip dependencies, and status checks.',
        topics: ['GitHub Actions YAML Syntax & Trigger Events (push, pull_request)', 'Matrix Builds for Cross-Platform Testing (Node 18, 20, 22)', 'Dependency Caching (actions/cache) to Accelerate Runs', 'Linting, Static Code Analysis, and Security Scanning (Trivy/SonarQube)'],
        stepByStepExplanation: 'Continuous Integration validates every commit before it merges. GitHub Actions defines workflows triggered on pull requests. Caching package dependencies cuts build times from minutes to seconds. Branch protection rules prevent merging unless all CI matrix tests and security linters pass.',
        handsOnExercise: {
          title: 'Write a Multi-Stage GitHub Actions CI Workflow',
          instructions: 'Author a .github/workflows/ci.yml file that runs linting, executes Jest/Vitest unit tests, and builds the production bundle.',
          taskSnippet: 'name: CI\non: [pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 20, cache: "npm" }\n      - run: npm ci\n      - run: npm test',
          solutionTip: 'Always use npm ci instead of npm install in CI pipelines to guarantee deterministic builds from package-lock.json.'
        },
        practicalProject: {
          title: 'Enterprise GitHub Actions CI Pipeline with Security Scans',
          objective: 'Build an automated pipeline that runs unit tests, scans Docker images for CVE vulnerabilities with Trivy, and enforces code coverage thresholds.',
          deliverable: 'Complete workflow configuration files in a GitHub repository.'
        },
        learningResources: [
          { title: 'GitHub Actions Official Documentation', type: 'doc', url: 'https://docs.github.com/en/actions' },
          { title: 'Martin Fowler: Continuous Integration Guide', type: 'guide', url: 'https://martinfowler.com/articles/continuousIntegration.html' }
        ]
      },
      {
        id: 'devops-mod-2',
        title: 'Deployment Strategies: Blue-Green & Canary Releases',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Zero-downtime deployment patterns, canary traffic routing, feature flags, and database migration coordination.',
        topics: ['Blue-Green Deployments (Instant Traffic Switch)', 'Canary Releases (5% -> 25% -> 100% Traffic Splitting)', 'Trunk-Based Development vs GitFlow', 'Decoupling Deploy from Release via Feature Flags (LaunchDarkly/PostHog)'],
        stepByStepExplanation: 'In Blue-Green deployments, two identical production environments exist. The new release deploys to the idle green environment; once health checks pass, the load balancer switches traffic instantly. Canary deployments route a small fraction of real users to the new build, monitoring error rates before expanding rollout.',
        handsOnExercise: {
          title: 'Coordinate a Zero-Downtime Database Migration',
          instructions: 'Apply the Expand and Contract pattern to add a new database column without breaking active live application versions.',
          taskSnippet: '// Phase 1 (Expand): Add nullable new_column -> Phase 2: Deploy code writing to both -> Phase 3 (Contract): Backfill & drop old_column',
          solutionTip: 'Never rename or delete an active database column in the same release deployment as the code change.'
        },
        practicalProject: {
          title: 'Canary Deployment Pipeline with Automated Rollback',
          objective: 'Configure a deployment pipeline using ArgoCD or AWS CodeDeploy that automatically aborts and rolls back if HTTP 5xx errors exceed 1%.',
          deliverable: 'Deployment pipeline manifests and automated rollback test logs.'
        },
        learningResources: [
          { title: 'LaunchDarkly: Feature Flags Best Practices', type: 'guide', url: 'https://launchdarkly.com/blog/what-are-feature-flags/' },
          { title: 'Google SRE Book: Release Engineering', type: 'doc', url: 'https://sre.google/sre-book/release-engineering/' }
        ]
      },
      {
        id: 'devops-mod-3',
        title: 'DORA Metrics, GitOps & OIDC Cloud Authentication',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'OpenID Connect (OIDC) cloud authentication, GitOps with ArgoCD/Flux, and DORA engineering velocity benchmarks.',
        topics: ['OIDC Keyless Cloud Authentication (No Static Secrets in GitHub)', 'GitOps Principles (Declarative State in Git as Single Source of Truth)', 'The 4 DORA Metrics (Deployment Frequency, Lead Time, CFR, MTTR)', 'Infrastructure as Code (IaC) Pipelines with Terraform Cloud'],
        stepByStepExplanation: 'Storing long-lived AWS or GCP secret keys in CI settings presents massive security liability. GitHub Actions OIDC allows CI jobs to request short-lived cryptographic tokens directly verified by cloud providers. Tracking DORA metrics reveals team engineering health and shipping velocity.',
        handsOnExercise: {
          title: 'Configure GitHub Actions OIDC Authentication to AWS',
          instructions: 'Configure an AWS IAM Role trusting GitHub OIDC tokens and assume the role in GitHub Actions without stored access keys.',
          taskSnippet: '- name: Configure AWS Credentials\n  uses: aws-actions/configure-aws-credentials@v4\n  with:\n    role-to-assume: arn:aws:iam::123:role/github-ci-role\n    aws-region: us-east-1',
          solutionTip: 'Always restrict the IAM Role trust policy sub claim to your specific GitHub repository name to prevent unauthorized runner access.'
        },
        practicalProject: {
          title: 'Full GitOps CI/CD Deployment Platform',
          objective: 'Build an end-to-end GitOps pipeline where pushing to main builds a signed container image, updates a manifest repo, and deploys via ArgoCD.',
          deliverable: 'Dual-repository GitOps setup with live deployment dashboard.'
        },
        learningResources: [
          { title: 'DORA (DevOps Research and Assessment) Metrics Guide', type: 'guide', url: 'https://dora.dev/' },
          { title: 'GitHub Docs: About Security Hardening with OIDC', type: 'doc', url: 'https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect' }
        ]
      }
    ],
    quiz: {
      id: 'devops-quiz',
      title: 'DevOps & CI/CD Pipelines Assessment',
      description: 'Evaluate your knowledge of CI testing best practices, canary deployment patterns, and OIDC authentication.',
      passingScore: 70,
      questions: [
        {
          id: 'devops-q1',
          question: 'What is the primary advantage of OpenID Connect (OIDC) in GitHub Actions over storing static cloud secret keys in repository settings?',
          options: ['It makes npm run faster', 'It eliminates long-lived static credentials by issuing short-lived, automatically expiring cryptographic tokens for cloud access', 'It costs less money', 'It replaces Git'],
          correctAnswerIndex: 1,
          explanation: 'OIDC eliminates static secret management; short-lived tokens reduce the blast radius of compromised repositories.'
        },
        {
          id: 'devops-q2',
          question: 'In a Canary Deployment strategy, how is a new software release delivered to users?',
          options: ['All servers are taken offline for 4 hours', 'The new version is served to a tiny percentage of live user traffic (e.g. 2-5%) while monitoring error metrics before gradually scaling to 100%', 'Only employees test it on localhost', 'It is sent via email'],
          correctAnswerIndex: 1,
          explanation: 'Canary releases expose a small fraction of users to new code, containing errors before full deployment.'
        },
        {
          id: 'devops-q3',
          question: 'Which of the following is NOT one of the four core DORA engineering metrics?',
          options: ['Deployment Frequency', 'Lead Time for Changes', 'Lines of Code Written per Developer per Day', 'Change Failure Rate'],
          correctAnswerIndex: 2,
          explanation: 'Lines of code is an anti-metric. The 4 DORA metrics are Deployment Frequency, Lead Time, Change Failure Rate, and Time to Restore.'
        }
      ]
    }
  },
  {
    id: 'docker-kubernetes',
    title: 'Docker and Kubernetes',
    category: 'Cloud and Emerging Technologies',
    summary: 'Containerization, multi-stage Docker builds, Kubernetes architecture (Pods, Deployments, Services, Ingress), ConfigMaps, and Helm charts.',
    skillLevel: 'Intermediate',
    totalDurationHours: 44,
    relatedCareers: ['Cloud Engineer', 'Software Developer'],
    tags: ['Docker', 'Kubernetes', 'K8s', 'Containers', 'Helm', 'Microservices', 'Ingress'],
    learningObjectives: [
      'Write optimized, secure Dockerfiles using multi-stage builds and non-root users',
      'Manage container networking, volumes, and multi-container stacks with Docker Compose',
      'Deploy and orchestrate workloads in Kubernetes using Pods, Deployments, and ReplicaSets',
      'Configure cluster networking with ClusterIP, NodePort, LoadBalancer, and Ingress controllers',
      'Package, parameterize, and deploy production applications using Helm charts'
    ],
    modules: [
      {
        id: 'dk-mod-1',
        title: 'Docker Fundamentals & Production Multi-Stage Builds',
        level: 'Beginner',
        estimatedMinutes: 80,
        overview: 'Linux namespaces, cgroups, images vs containers, layer caching, and multi-stage Dockerfiles.',
        topics: ['Namespaces & Cgroups Container Isolation', 'Docker Layer Caching Optimization', 'Multi-Stage Dockerfiles for Minimal Final Images', 'Running Containers as Non-Root Users for Security'],
        stepByStepExplanation: 'Containers isolate processes using Linux kernel namespaces (process trees, networking) and cgroups (CPU, RAM limits). Multi-stage Docker builds use a heavy build environment with compilers to build assets, then copy only the compiled binary or static files into a minimal distroless or alpine runtime image.',
        handsOnExercise: {
          title: 'Write a Secure Multi-Stage Node.js Dockerfile',
          instructions: 'Build a production Dockerfile using node:20-alpine builder stage, prune dev dependencies, copy to minimal runtime, and execute as user node.',
          taskSnippet: 'FROM node:20-alpine AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:20-alpine\nUSER node\nWORKDIR /app\nCOPY --from=build /app/dist ./dist',
          solutionTip: 'Always place COPY package*.json and RUN npm ci before COPY . . to leverage Docker layer caching when source code changes.'
        },
        practicalProject: {
          title: 'Multi-Service Docker Compose Development Stack',
          objective: 'Configure a docker-compose.yml running a React frontend, Node backend, Redis cache, and PostgreSQL database with health checks.',
          deliverable: 'Docker Compose repository with persistent volumes and network isolation.'
        },
        learningResources: [
          { title: 'Docker Official Documentation', type: 'doc', url: 'https://docs.docker.com/' },
          { title: 'Docker Best Practices for Node.js by Bret Fisher', type: 'guide', url: 'https://github.com/BretFisher/node-docker-good-defaults' }
        ]
      },
      {
        id: 'dk-mod-2',
        title: 'Kubernetes Core Architecture, Pods & Deployments',
        level: 'Intermediate',
        estimatedMinutes: 95,
        overview: 'Control Plane (API Server, etcd, Scheduler), Kubelet, Pods, Deployments, and rolling updates.',
        topics: ['Control Plane Components (kube-apiserver, etcd, kube-scheduler)', 'Node Components (kubelet, kube-proxy, containerd)', 'Deployments, ReplicaSets & Rolling Update Strategies', 'Liveness, Readiness, and Startup Health Probes'],
        stepByStepExplanation: 'Kubernetes continuously reconciles actual state with desired state declared in YAML. The kubelet on each worker node monitors local Pods. Readiness probes verify when a Pod is ready to accept user network traffic; failing probes remove the Pod from active Service endpoints without killing it.',
        handsOnExercise: {
          title: 'Author a Production Kubernetes Deployment Manifest',
          instructions: 'Write a Deployment YAML with 3 replicas, resource requests/limits, environment variables from ConfigMap, and HTTP liveness/readiness probes.',
          taskSnippet: 'apiVersion: apps/v1\nkind: Deployment\nmetadata: { name: web-api }\nspec:\n  replicas: 3\n  template:\n    spec:\n      containers:\n      - name: api\n        image: api:v1\n        readinessProbe: { httpGet: { path: /health, port: 8080 } }',
          solutionTip: 'Always define both memory requests and limits to prevent Pods from monopolizing node resources and causing OutOfMemory panics.'
        },
        practicalProject: {
          title: 'Zero-Downtime Microservices Deployment on Minikube',
          objective: 'Deploy a microservice to a local Kubernetes cluster, perform rolling updates with zero dropped requests, and test probe failures.',
          deliverable: 'Kubernetes YAML manifests and test output logs.'
        },
        learningResources: [
          { title: 'Kubernetes Official Documentation', type: 'doc', url: 'https://kubernetes.io/docs/home/' },
          { title: 'Kelsey Hightower: Kubernetes The Hard Way', type: 'guide', url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way' }
        ]
      },
      {
        id: 'dk-mod-3',
        title: 'Networking, Ingress Controllers & Helm Packaging',
        level: 'Advanced',
        estimatedMinutes: 115,
        overview: 'ClusterIP vs NodePort vs LoadBalancer, Ingress routing, TLS cert-manager, and Helm chart templating.',
        topics: ['Kubernetes Services (ClusterIP, NodePort, LoadBalancer)', 'Ingress Controllers (Nginx, Traefik) & Path-Based Routing', 'Automated SSL/TLS Certificates with cert-manager & Let’s Encrypt', 'Packaging Applications with Helm Charts (Values.yaml & Templates)'],
        stepByStepExplanation: 'A Kubernetes Service provides a stable internal IP address and DNS name for ephemeral Pods. Ingress acts as an intelligent HTTP layer-7 reverse proxy, routing incoming hostnames and URL paths to backend Services. Helm acts as the package manager for Kubernetes, substituting values dynamically into template manifests.',
        handsOnExercise: {
          title: 'Package an Application into a Helm Chart',
          instructions: 'Create a Helm chart with values.yaml defining replicaCount, image tag, and ingress hostname, and test rendering with helm template.',
          taskSnippet: 'helm install my-app ./my-chart --set replicaCount=5 --set image.tag=2.1.0',
          solutionTip: 'Use helm lint and helm template before running helm install to validate syntax and parameter injection.'
        },
        practicalProject: {
          title: 'Production Kubernetes Cluster Ingress & Helm Release',
          objective: 'Deploy an Nginx Ingress Controller, configure TLS certificates via cert-manager, and release a full web app using custom Helm charts.',
          deliverable: 'Complete Helm chart repository and tested Ingress YAML.'
        },
        learningResources: [
          { title: 'Helm Package Manager Documentation', type: 'doc', url: 'https://helm.sh/docs/' },
          { title: 'Kubernetes Ingress NGINX Documentation', type: 'guide', url: 'https://kubernetes.github.io/ingress-nginx/' }
        ]
      }
    ],
    quiz: {
      id: 'dk-quiz',
      title: 'Docker & Kubernetes Assessment',
      description: 'Test your understanding of Docker multi-stage builds, Kubernetes health probes, and Ingress routing.',
      passingScore: 70,
      questions: [
        {
          id: 'dk-q1',
          question: 'What is the purpose of a Readiness Probe on a Kubernetes Pod container?',
          options: ['To reboot the node', 'To determine if the container is ready to accept incoming network traffic; if it fails, the Pod is removed from Service endpoints without being restarted', 'To compile TypeScript', 'To delete the Docker image'],
          correctAnswerIndex: 1,
          explanation: 'Readiness probes signal when an app has warmed up and can handle user requests, preventing 502 errors during rolling updates.'
        },
        {
          id: 'dk-q2',
          question: 'Why are Multi-Stage Docker builds essential for production deployments?',
          options: ['They make containers run on multiple computers at once', 'They keep build tools, compilers, and dev dependencies out of the final runtime image, resulting in dramatically smaller and more secure images', 'They bypass Docker Hub limits', 'They encrypt the source code'],
          correctAnswerIndex: 1,
          explanation: 'Multi-stage builds leave heavyweight build tools and package caches behind, slashing image size and attack surface.'
        },
        {
          id: 'dk-q3',
          question: 'What role does an Ingress resource play in a Kubernetes cluster?',
          options: ['It replaces all Pods', 'It acts as an HTTP/HTTPS Layer 7 reverse proxy routing external hostnames and URL paths to internal cluster Services', 'It allocates CPU cores', 'It deletes failed containers'],
          correctAnswerIndex: 1,
          explanation: 'Ingress manages external HTTP/HTTPS access to internal Services with SSL termination and path routing.'
        }
      ]
    }
  },
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals',
    category: 'Cloud and Emerging Technologies',
    summary: 'The CIA triad, threat modeling, cryptography (AES, RSA, ECC), OWASP Top 10 vulnerabilities, network security, and zero-trust architecture.',
    skillLevel: 'Beginner',
    totalDurationHours: 36,
    relatedCareers: ['Cybersecurity Analyst', 'Cloud Engineer', 'Software Developer'],
    tags: ['Cybersecurity', 'OWASP', 'Cryptography', 'Zero-Trust', 'Penetration Testing', 'SIEM'],
    learningObjectives: [
      'Understand foundational security principles: Confidentiality, Integrity, and Availability (CIA Triad)',
      'Identify and remediate OWASP Top 10 web vulnerabilities (SQLi, XSS, CSRF, SSRF, Broken Auth)',
      'Apply modern cryptographic standards: Symmetric (AES), Asymmetric (RSA/ECC), and Hashing (SHA-256, bcrypt)',
      'Implement Zero-Trust architecture principles and multi-factor authentication (MFA / FIDO2)',
      'Analyze network traffic and security logs using Wireshark and SIEM tools'
    ],
    modules: [
      {
        id: 'cyber-mod-1',
        title: 'Core Principles, Threat Modeling & Cryptography',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'CIA triad, STRIDE threat modeling, symmetric vs asymmetric encryption, and cryptographic hashing.',
        topics: ['The CIA Triad (Confidentiality, Integrity, Availability)', 'STRIDE Threat Modeling Methodology', 'Symmetric (AES-256-GCM) vs Asymmetric (RSA / Ed25519) Cryptography', 'Cryptographic Hashes & Salted Password Hashing (bcrypt, Argon2)'],
        stepByStepExplanation: 'Security balances Confidentiality, Integrity, and Availability. Passwords must never be stored in plaintext or with fast cryptographic hashes like MD5/SHA256 (which are vulnerable to GPU brute-force attacks); use slow, memory-hard algorithms like bcrypt or Argon2 with unique cryptographic salts.',
        handsOnExercise: {
          title: 'Implement Secure Password Hashing with Argon2',
          instructions: 'Write a Python/Node.js authentication utility that hashes passwords using Argon2id with memory cost and verifies user login credentials.',
          taskSnippet: 'const hash = await argon2.hash(password, { type: argon2.argon2id, memoryCost: 2 ** 16 });',
          solutionTip: 'Argon2id protects against both side-channel cache attacks and GPU-accelerated brute force cracking.'
        },
        practicalProject: {
          title: 'Application STRIDE Threat Model & Risk Matrix',
          objective: 'Conduct a formal STRIDE threat assessment on a fintech payment flow, identifying spoofing, tampering, and denial-of-service risks.',
          deliverable: 'STRIDE threat model matrix with concrete mitigation controls.'
        },
        learningResources: [
          { title: 'OWASP Threat Modeling Cheat Sheet', type: 'doc', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html' },
          { title: 'NIST Special Publication 800-63B: Digital Identity Guidelines', type: 'guide', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' }
        ]
      },
      {
        id: 'cyber-mod-2',
        title: 'OWASP Top 10 Web Application Vulnerabilities',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'SQL Injection, Cross-Site Scripting (XSS), Server-Side Request Forgery (SSRF), and Broken Object-Level Authorization (BOLA).',
        topics: ['SQL Injection & Parameterized Query Defenses', 'Stored, Reflected & DOM-Based Cross-Site Scripting (XSS)', 'Server-Side Request Forgery (SSRF) & Metadata Protection', 'Broken Object-Level Authorization (BOLA / IDOR)'],
        stepByStepExplanation: 'Insecure Direct Object Reference (IDOR) happens when an API endpoint uses an ID (e.g. GET /api/orders/123) without verifying whether the requesting user owns that order. Prevent SQL injection by strictly using parameterized prepared statements rather than string concatenation.',
        handsOnExercise: {
          title: 'Audit and Remediate an IDOR Vulnerability',
          instructions: 'Fix a vulnerable route where any user could read another user’s profile by adding authorization ownership checks to the database query.',
          taskSnippet: '// Fix: SELECT * FROM documents WHERE id = :docId AND user_id = :authenticatedUserId',
          solutionTip: 'Always scope database lookup queries with the authenticated session user ID rather than relying solely on path parameters.'
        },
        practicalProject: {
          title: 'Vulnerable Web Application Penetration Test Lab',
          objective: 'Conduct a simulated vulnerability assessment on Juice Shop / WebGoat, identify 5 vulnerabilities, and draft remediation patches.',
          deliverable: 'Penetration testing report with CVSS severity scoring.'
        },
        learningResources: [
          { title: 'OWASP Top Ten Web Application Security Risks', type: 'doc', url: 'https://owasp.org/www-project-top-ten/' },
          { title: 'PortSwigger Web Security Academy', type: 'guide', url: 'https://portswigger.net/web-security' }
        ]
      },
      {
        id: 'cyber-mod-3',
        title: 'Zero-Trust Architecture, Network Defense & Incident Response',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'Zero Trust (Never trust, always verify), FIDO2 / Passkeys, network segmentation, SIEM event analysis, and incident response.',
        topics: ['Zero Trust Architecture (NIST SP 800-207)', 'FIDO2 / WebAuthn Hardware Passkeys vs SMS 2FA', 'Network Traffic Analysis with Wireshark & PCAP Inspection', 'Incident Response Lifecycle (Preparation, Detection, Containment, Eradication, Recovery)'],
        stepByStepExplanation: 'Zero Trust assumes the internal corporate network is already compromised. Every single request must be authenticated, authorized, and encrypted. SMS 2FA is vulnerable to SIM-swapping attacks; FIDO2 WebAuthn hardware tokens use public-key cryptography to prevent phishing entirely.',
        handsOnExercise: {
          title: 'Analyze Malicious Port Scan Traffic in Wireshark',
          instructions: 'Open a PCAP packet trace, identify SYN scan patterns and unauthorized SSH brute-force connection attempts, and extract attacker IP addresses.',
          taskSnippet: '// Wireshark Filter: tcp.flags.syn == 1 && tcp.flags.ack == 0 and ip.dst == 192.168.1.50',
          solutionTip: 'Look for rapid sequential TCP SYN packets across multiple destination ports with zero payload data.'
        },
        practicalProject: {
          title: 'Corporate Security Incident Response Playbook',
          objective: 'Author an Incident Response Playbook for Ransomware and Credential Compromise with escalation matrices and communication templates.',
          deliverable: 'Complete security operations incident response manual.'
        },
        learningResources: [
          { title: 'NIST Zero Trust Architecture (SP 800-207)', type: 'doc', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' },
          { title: 'CISA Security Advisories and Playbooks', type: 'guide', url: 'https://www.cisa.gov/' }
        ]
      }
    ],
    quiz: {
      id: 'cyber-quiz',
      title: 'Cybersecurity Fundamentals Assessment',
      description: 'Evaluate your knowledge of cryptography algorithms, OWASP vulnerabilities, and Zero-Trust architecture.',
      passingScore: 70,
      questions: [
        {
          id: 'cyber-q1',
          question: 'Why should user passwords never be stored using standard fast hashing algorithms like MD5 or SHA-256?',
          options: ['Because MD5 is too slow', 'Because modern GPUs can compute billions of SHA-256 hashes per second, making brute-force dictionary attacks trivial; slow memory-hard algorithms like bcrypt or Argon2 must be used', 'Because SHA-256 can be decrypted with a private key', 'Because databases cannot store hashes'],
          correctAnswerIndex: 1,
          explanation: 'Fast hashes allow attackers to test billions of password combinations per second on consumer GPUs; slow hashes mitigate this.'
        },
        {
          id: 'cyber-q2',
          question: 'What is Insecure Direct Object Reference (IDOR) in web APIs?',
          options: ['When an image fails to load', 'When an application provides direct access to objects based on user-supplied input (like an ID in URL) without verifying whether the user is authorized to access that record', 'When DNS fails to resolve', 'When a computer runs out of memory'],
          correctAnswerIndex: 1,
          explanation: 'IDOR occurs when an API trusts client-supplied IDs without checking whether the requester owns that object.'
        },
        {
          id: 'cyber-q3',
          question: 'What is the core guiding tenet of Zero Trust Architecture?',
          options: ['Trust everyone inside the office Wi-Fi', 'Never trust, always verify: assume breach and authenticate every request regardless of network location', 'Disable all logins', 'Never encrypt data'],
          correctAnswerIndex: 1,
          explanation: 'Zero Trust rejects perimeter-based trust, requiring continuous authentication and authorization for every request.'
        }
      ]
    }
  },
  {
    id: 'iot',
    title: 'Internet of Things (IoT)',
    category: 'Cloud and Emerging Technologies',
    summary: 'Microcontrollers (ESP32, Raspberry Pi), sensor interfaces (I2C, SPI), MQTT messaging protocols, edge computing, and cloud IoT hubs.',
    skillLevel: 'Beginner',
    totalDurationHours: 32,
    relatedCareers: ['Cloud Engineer', 'Software Developer'],
    tags: ['IoT', 'MQTT', 'ESP32', 'Sensors', 'Edge Computing', 'Embedded C', 'Protocols'],
    learningObjectives: [
      'Program microcontrollers (ESP32 / Arduino) to sample environmental sensors and control actuators',
      'Understand embedded bus protocols: I2C, SPI, and UART communication',
      'Implement publish-subscribe messaging over low-bandwidth networks using MQTT and QoS levels',
      'Secure IoT devices with mutual TLS (mTLS), device certificates, and secure boot',
      'Ingest, process, and visualize sensor telemetry in cloud IoT platforms'
    ],
    modules: [
      {
        id: 'iot-mod-1',
        title: 'Microcontroller Architecture, Sensors & Bus Protocols',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'GPIO pins, ADC converters, I2C two-wire interface, SPI high-speed bus, and PWM signals.',
        topics: ['ESP32 Dual-Core Architecture & GPIO Pinouts', 'Analog to Digital Conversion (ADC) & Voltage Dividers', 'I2C Bus (SDA, SCL) Addressing Multiple Sensors', 'SPI (MOSI, MISO, SCK, CS) High-Throughput Peripherals'],
        stepByStepExplanation: 'Microcontrollers interact with the physical world through GPIO pins. I2C allows multiple sensors to communicate over just two shared wires using unique hex device addresses. Analog sensors output fluctuating voltages decoded into digital integers via the onboard Analog-to-Digital Converter (ADC).',
        handsOnExercise: {
          title: 'Read a Temperature/Humidity Sensor over I2C',
          instructions: 'Write embedded C/C++ code for an ESP32 reading temperature and humidity from a BME280 sensor over I2C and print to serial output.',
          taskSnippet: 'Wire.begin(21, 22);\nif (!bme.begin(0x76, &Wire)) { Serial.println("Sensor not found"); }',
          solutionTip: 'Always check if your sensor module uses I2C address 0x76 or 0x77 with a quick I2C scanner sketch.'
        },
        practicalProject: {
          title: 'Smart Indoor Environmental Monitoring Station',
          objective: 'Build an ESP32 sensor station reading CO2, temperature, and ambient light, displaying metrics on an OLED display.',
          deliverable: 'Arduino/PlatformIO embedded source code and wiring schematic.'
        },
        learningResources: [
          { title: 'Espressif ESP32 Technical Reference Manual', type: 'doc', url: 'https://www.espressif.com/en/products/socs/esp32' },
          { title: 'Random Nerd Tutorials: ESP32 Projects Guide', type: 'guide', url: 'https://randomnerdtutorials.com/' }
        ]
      },
      {
        id: 'iot-mod-2',
        title: 'MQTT Protocol, Broker Architecture & QoS Levels',
        level: 'Intermediate',
        estimatedMinutes: 80,
        overview: 'MQTT publish/subscribe, QoS 0/1/2, retain flags, last will and testament (LWT), and Mosquitto broker.',
        topics: ['MQTT Lightweight Binary Header & Low Overhead', 'QoS 0 (At most once), QoS 1 (At least once), QoS 2 (Exactly once)', 'Topic Hierarchies & Wildcards (sensors/+/temp, sensors/#)', 'Last Will and Testament (LWT) for Offline Device Detection'],
        stepByStepExplanation: 'HTTP carries massive header overhead unsuitable for battery-powered sensors on spotty cellular connections. MQTT uses tiny 2-byte headers. The Last Will and Testament (LWT) feature ensures the broker automatically notifies subscribers if a device disconnects unexpectedly without closing its connection gracefully.',
        handsOnExercise: {
          title: 'Publish Sensor Telemetry over MQTT with QoS 1',
          instructions: 'Connect an ESP32 to a local Mosquitto MQTT broker over Wi-Fi, publish JSON payloads to devices/esp32/telemetry, and configure LWT.',
          taskSnippet: 'client.setServer(broker, 1883);\nclient.publish("devices/esp32/telemetry", jsonPayload, true);',
          solutionTip: 'Use QoS 1 for important alerts so the broker guarantees delivery even if network packets are temporarily dropped.'
        },
        practicalProject: {
          title: 'Home Automation MQTT Relay & Sensor Controller',
          objective: 'Construct an IoT relay device subscribed to smart home commands that toggles power relays and reports telemetry back to Home Assistant.',
          deliverable: 'Embedded firmware repository and MQTT broker configuration file.'
        },
        learningResources: [
          { title: 'MQTT.org: MQTT Specification 5.0', type: 'doc', url: 'https://mqtt.org/' },
          { title: 'HiveMQ: MQTT Essentials Guide', type: 'guide', url: 'https://www.hivemq.com/mqtt-essentials/' }
        ]
      },
      {
        id: 'iot-mod-3',
        title: 'IoT Security, mTLS & Cloud Telemetry Ingestion',
        level: 'Advanced',
        estimatedMinutes: 95,
        overview: 'Mutual TLS (mTLS) device certificates, Over-The-Air (OTA) firmware updates, and cloud ingestion pipelines.',
        topics: ['Mutual TLS (mTLS) Device Identity & X.509 Certificates', 'Secure Boot & Flash Encryption on Embedded Hardware', 'Over-The-Air (OTA) Cryptographically Signed Firmware Updates', 'Ingesting Telemetry to AWS IoT Core / Google Cloud IoT'],
        stepByStepExplanation: 'IoT devices deployed in the field are physically accessible to adversaries. Flash encryption prevents dumping firmware from memory chips. Mutual TLS (mTLS) authenticates both the server and the physical device using unique hardware-embedded private keys, preventing rogue devices from injecting false sensor data.',
        handsOnExercise: {
          title: 'Authenticate an ESP32 to AWS IoT Core with mTLS',
          instructions: 'Flash client certificate and private key to ESP32 secure storage and establish an encrypted mTLS connection to AWS IoT Core.',
          taskSnippet: 'wifiClientSecure.setCertificate(device_cert);\nwifiClientSecure.setPrivateKey(device_key);',
          solutionTip: 'Never commit private device keys to source control; flash them securely via manufacturing scripts.'
        },
        practicalProject: {
          title: 'Industrial Cold-Chain Fleet Telemetry Pipeline',
          objective: 'Build an end-to-end IoT pipeline: battery-powered sensor, mTLS connection, cloud Pub/Sub ingestion, and Grafana dashboard.',
          deliverable: 'Firmware source code, cloud ingestion Terraform script, and live telemetry dashboard.'
        },
        learningResources: [
          { title: 'AWS IoT Core Developer Guide', type: 'doc', url: 'https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html' },
          { title: 'IoT Security Foundation Best Practice Guides', type: 'guide', url: 'https://www.iotsecurityfoundation.org/' }
        ]
      }
    ],
    quiz: {
      id: 'iot-quiz',
      title: 'Internet of Things Assessment',
      description: 'Evaluate your knowledge of embedded bus interfaces, MQTT QoS delivery guarantees, and IoT security.',
      passingScore: 70,
      questions: [
        {
          id: 'iot-q1',
          question: 'Why is MQTT preferred over standard HTTP for battery-powered IoT edge sensors?',
          options: ['MQTT has a tiny 2-byte header footprint and persistent publish-subscribe connections, drastically reducing power and bandwidth consumption', 'MQTT can only send images', 'HTTP is illegal on hardware', 'MQTT requires no Wi-Fi'],
          correctAnswerIndex: 0,
          explanation: 'MQTT was built for constrained networks; minimal overhead and persistent sockets preserve battery and cellular data.'
        },
        {
          id: 'iot-q2',
          question: 'In the MQTT protocol, what does QoS level 1 guarantee?',
          options: ['Messages are deleted immediately', 'Messages are guaranteed to arrive at least once (acknowledged by PUBACK), though duplicates are possible', 'Exactly once delivery with zero duplicates', 'Only audio is transmitted'],
          correctAnswerIndex: 1,
          explanation: 'QoS 1 guarantees delivery at least once with sender retries until a PUBACK acknowledgment is received.'
        },
        {
          id: 'iot-q3',
          question: 'What is the purpose of the Last Will and Testament (LWT) feature in MQTT brokers?',
          options: ['To transfer ownership of hardware', 'The broker automatically publishes a designated message to a status topic if the device disconnects unexpectedly without closing its TCP socket cleanly', 'To print a legal document', 'To update firmware'],
          correctAnswerIndex: 1,
          explanation: 'LWT enables immediate detection of unexpected device outages or network drops.'
        }
      ]
    }
  },
  {
    id: 'blockchain-fundamentals',
    title: 'Blockchain Fundamentals',
    category: 'Cloud and Emerging Technologies',
    summary: 'Decentralized ledgers, cryptographic hashing, consensus mechanisms (PoW, PoS), smart contract engineering with Solidity, and EVM internals.',
    skillLevel: 'Intermediate',
    totalDurationHours: 35,
    relatedCareers: ['Software Developer'],
    tags: ['Blockchain', 'Solidity', 'Ethereum', 'Smart Contracts', 'Web3', 'Cryptography'],
    learningObjectives: [
      'Understand blockchain architecture: Merkle trees, block headers, and distributed ledger immutability',
      'Compare consensus mechanisms: Proof of Work (PoW), Proof of Stake (PoS), and Byzantine Fault Tolerance',
      'Write and deploy secure smart contracts in Solidity using Foundry or Hardhat',
      'Understand the Ethereum Virtual Machine (EVM): gas mechanics, storage slots, and opcodes',
      'Audit smart contracts against reentrancy attacks, integer overflows, and frontrunning'
    ],
    modules: [
      {
        id: 'bc-mod-1',
        title: 'Distributed Ledgers, Cryptography & Consensus Mechanisms',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Cryptographic hash pointers, Merkle trees, UTXO vs Account models, Proof of Work vs Proof of Stake.',
        topics: ['SHA-256 Hashing & Merkle Trees for Fast Verification', 'UTXO (Bitcoin) vs Account-Based (Ethereum) Ledger Models', 'Proof of Work (PoW) & Difficulty Adjustments', 'Proof of Stake (PoS), Validators, Slashing, and Finality'],
        stepByStepExplanation: 'A blockchain links blocks cryptographically using hash pointers: modifying any past transaction invalidates all subsequent block hashes. Merkle trees allow lightweight clients to verify that a transaction is included in a block using a compact O(log N) cryptographic proof.',
        handsOnExercise: {
          title: 'Build a Proof-of-Work Blockchain from Scratch in Python',
          instructions: 'Implement a Block class with index, timestamp, previous_hash, nonce, and a mine_block method finding hashes with 4 leading zeros.',
          taskSnippet: 'def mine_block(self, difficulty):\n  while not self.hash.startswith("0" * difficulty):\n    self.nonce += 1\n    self.hash = self.calculate_hash()',
          solutionTip: 'Incrementing the nonce changes the input block header completely due to the avalanche effect of cryptographic hashes.'
        },
        practicalProject: {
          title: 'Decentralized P2P Ledger Simulator',
          objective: 'Build a peer-to-peer node simulation in Node.js with block broadcasting, transaction verification, and longest-chain consensus resolution.',
          deliverable: 'Python/TypeScript repository with unit tests simulating chain forks.'
        },
        learningResources: [
          { title: 'Satoshi Nakamoto: Bitcoin Whitepaper', type: 'doc', url: 'https://bitcoin.org/bitcoin.pdf' },
          { title: 'Ethereum.org: Proof of Stake (PoS) Architecture', type: 'guide', url: 'https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/' }
        ]
      },
      {
        id: 'bc-mod-2',
        title: 'Smart Contract Development with Solidity & Foundry',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Solidity syntax, state variables, mappings, modifiers, ERC-20 token standard, and Foundry testing.',
        topics: ['Solidity 0.8+ Types, Mappings & Structs', 'Access Control Modifiers (onlyOwner)', 'ERC-20 & ERC-721 Token Standards', 'Writing Unit Tests in Solidity with Foundry (forge test)'],
        stepByStepExplanation: 'Smart contracts are immutable programs executed deterministically on every network node. State variables persist directly in EVM storage. Foundry compiles and tests Solidity contracts using Solidity itself, providing fast fuzz testing and cheatcodes to test contract invariants.',
        handsOnExercise: {
          title: 'Write a Secure Crowdfunding Smart Contract',
          instructions: 'Implement a Crowdfunding contract in Solidity with a funding goal, deadline, pledge function, and refund mechanism if the goal is not met.',
          taskSnippet: 'function claimRefund() external {\n  require(block.timestamp >= deadline && totalPledged < goal, "Not eligible");\n  // process refund\n}',
          solutionTip: 'Always update contract state (balances) before transferring ether out to prevent reentrancy exploits.'
        },
        practicalProject: {
          title: 'ERC-20 Governance Token & Staking Vault Contract',
          objective: 'Develop a staking contract allowing users to deposit tokens, earn yield calculated per block, and withdraw rewards safely.',
          deliverable: 'Foundry project with 100% test coverage and gas benchmark reports.'
        },
        learningResources: [
          { title: 'Solidity Official Documentation', type: 'doc', url: 'https://docs.soliditylang.org/' },
          { title: 'Foundry Book: Comprehensive Guide to Foundry', type: 'guide', url: 'https://book.getfoundry.sh/' }
        ]
      },
      {
        id: 'bc-mod-3',
        title: 'EVM Internals, Gas Optimization & Security Auditing',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'EVM storage slots (32-byte words), gas mechanics, reentrancy attacks, checks-effects-interactions, and audits.',
        topics: ['EVM Storage Layout & Packing Variables into 32-Byte Slots', 'Gas Mechanics (SSTORE vs SLOAD vs Memory)', 'The Classic Reentrancy Attack & ReentrancyGuard', 'Checks-Effects-Interactions (CEI) Pattern'],
        stepByStepExplanation: 'EVM storage reads (SLOAD) and writes (SSTORE) are the most expensive gas operations. Packing smaller types (e.g., two uint128s into a single 32-byte slot) cuts gas costs. The Checks-Effects-Interactions pattern protects contracts by validating conditions first, updating internal state second, and only interacting with external contracts last.',
        handsOnExercise: {
          title: 'Remediate a Reentrancy Vulnerability',
          instructions: 'Refactor a vulnerable withdrawal function using the Checks-Effects-Interactions pattern and OpenZeppelin ReentrancyGuard.',
          taskSnippet: 'function withdraw() external nonReentrant {\n  uint256 amount = balances[msg.sender];\n  require(amount > 0);\n  balances[msg.sender] = 0; // Effect before interaction\n  (bool s, ) = msg.sender.call{value: amount}("");\n  require(s);\n}',
          solutionTip: 'Zeroing the balance before executing external call{value:...} ensures reentrant calls find a zero balance.'
        },
        practicalProject: {
          title: 'Smart Contract Security Audit & Exploit Reproduction',
          objective: 'Audit a DeFi lending protocol codebase, document 3 critical security vulnerabilities, and write proof-of-concept exploit tests in Foundry.',
          deliverable: 'Professional Security Audit Report with CVSS scores and remediated contract code.'
        },
        learningResources: [
          { title: 'OpenZeppelin Security Guidelines', type: 'doc', url: 'https://docs.openzeppelin.com/' },
          { title: 'RareSkills: Gas Optimization in Solidity', type: 'guide', url: 'https://rareskills.io/post/gas-optimization' }
        ]
      }
    ],
    quiz: {
      id: 'bc-quiz',
      title: 'Blockchain & Smart Contracts Assessment',
      description: 'Evaluate your knowledge of consensus mechanics, EVM gas optimization, and smart contract security.',
      passingScore: 70,
      questions: [
        {
          id: 'bc-q1',
          question: 'What is the Checks-Effects-Interactions (CEI) design pattern in Solidity, and what major exploit does it prevent?',
          options: ['It checks CSS styles', 'It dictates verifying requirements first, modifying internal contract state second, and executing external calls last—preventing reentrancy attacks', 'It mines blocks faster', 'It prevents compiler warnings'],
          correctAnswerIndex: 1,
          explanation: 'Updating internal state before transferring funds ensures recursive reentrant callbacks cannot drain contract balances.'
        },
        {
          id: 'bc-q2',
          question: 'What data structure allows blockchain nodes to verify that a transaction is included in a block header in O(log N) time without downloading the full block?',
          options: ['Linked list', 'Merkle Tree (Merkle Root)', 'B-Tree', 'Hash map'],
          correctAnswerIndex: 1,
          explanation: 'Merkle trees allow lightweight cryptographic proof verification using only logarithmic sibling hashes.'
        },
        {
          id: 'bc-q3',
          question: 'Why is modifying state storage (SSTORE) the most expensive operation in Ethereum smart contracts?',
          options: ['Because it writes permanent data that must be stored and replicated across thousands of validator nodes worldwide forever', 'Because Solidity has a bug', 'Because miners charge for electricity only on storage', 'It is not expensive'],
          correctAnswerIndex: 0,
          explanation: 'EVM storage writes demand permanent global replication across every network validator, incurring high gas fees.'
        }
      ]
    }
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Cloud and Emerging Technologies',
    summary: 'Cross-platform native mobile engineering using React Native and Flutter: native components, navigation, device sensors, offline caching, and App Store releases.',
    skillLevel: 'Intermediate',
    totalDurationHours: 42,
    relatedCareers: ['Software Developer', 'Full Stack Developer', 'UI/UX Designer'],
    tags: ['Mobile', 'React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Offline First'],
    learningObjectives: [
      'Build native iOS and Android apps using React Native, Expo, and TypeScript',
      'Manage mobile navigation hierarchies with React Navigation (Stack, Tabs, Drawer)',
      'Access native device capabilities: Camera, Geolocation, Push Notifications, and Biometrics',
      'Implement offline-first data caching with WatermelonDB or SQLite and background sync',
      'Prepare and publish binaries for the Apple App Store and Google Play Store'
    ],
    modules: [
      {
        id: 'mad-mod-1',
        title: 'React Native, Expo & Native UI Primitives',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Expo managed workflow, View/Text/FlatList components, StyleSheet layout, and device ergonomics.',
        topics: ['Expo Application Framework & Fast Refresh', 'Native Primitives: View, Text, Image, Pressable, ScrollView', 'FlatList Optimization (windowSize, getItemLayout)', 'SafeAreaView and Handling Platform Differences (Platform.OS)'],
        stepByStepExplanation: 'React Native compiles declarative JavaScript to real native iOS and Android UI views via the New Architecture (JSI / Fabric). FlatList uses windowing to render only visible screen items, preventing memory bloat when scrolling through thousands of records.',
        handsOnExercise: {
          title: 'Build a Performant Infinite Scrolling FlatList',
          instructions: 'Implement an infinite-scrolling feed in React Native with FlatList, pull-to-refresh, empty state, and onEndReached pagination.',
          taskSnippet: '<FlatList data={items} keyExtractor={i => i.id} renderItem={({ item }) => <Card item={item} />} onEndReached={fetchMore} />',
          solutionTip: 'Always pass getItemLayout when list item heights are fixed to eliminate dynamic measurement calculations.'
        },
        practicalProject: {
          title: 'Daily Fitness & Workout Tracking Mobile App',
          objective: 'Build a mobile workout tracker with customized exercise routines, set counters, and local persistence using AsyncStorage.',
          deliverable: 'Expo React Native project runnable in iOS Simulator and Android Emulator.'
        },
        learningResources: [
          { title: 'React Native Official Documentation', type: 'doc', url: 'https://reactnative.dev/docs/getting-started' },
          { title: 'Expo Documentation', type: 'guide', url: 'https://docs.expo.dev/' }
        ]
      },
      {
        id: 'mad-mod-2',
        title: 'Native Navigation & Device Hardware APIs',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'React Navigation v6, bottom tabs, stack transitions, camera access, and push notifications.',
        topics: ['React Navigation: Native Stack, Bottom Tabs, Modals', 'Deep Linking & Universal Links Handling', 'Accessing Device Hardware: Camera, Haptics & Biometric Auth (FaceID)', 'Expo Push Notifications & APNs / FCM Tokens'],
        stepByStepExplanation: 'Mobile apps require fluid screen transitions matching platform gestures (like iOS swipe-to-back). Native Stack uses underlying OS navigation controllers for 60fps performance. Biometric authentication (FaceID / Fingerprint) leverages secure hardware enclaves.',
        handsOnExercise: {
          title: 'Implement FaceID / TouchID Authentication',
          instructions: 'Authenticate users using expo-local-authentication before unlocking sensitive financial balances in the app.',
          taskSnippet: 'const result = await LocalAuthentication.authenticateAsync({ promptMessage: "Unlock Secure Wallet" });',
          solutionTip: 'Always check hasHardwareAsync() and isEnrolledAsync() before prompting for biometric authentication.'
        },
        practicalProject: {
          title: 'Field Service Technician Camera & GPS App',
          objective: 'Build an app capturing equipment photos with geolocation watermarks, local caching, and background upload retry.',
          deliverable: 'Complete React Native application with camera and map integration.'
        },
        learningResources: [
          { title: 'React Navigation Documentation', type: 'doc', url: 'https://reactnavigation.org/' },
          { title: 'Expo Modules API: Native Capabilities', type: 'guide', url: 'https://docs.expo.dev/modules/overview/' }
        ]
      },
      {
        id: 'mad-mod-3',
        title: 'Offline-First SQLite Architecture & Store Publishing',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'Local SQLite / WatermelonDB sync, network state listeners, EAS Build, and store compliance.',
        topics: ['Offline-First Architecture & Conflict Resolution (CRDTs / Last-Write-Wins)', 'Embedded SQLite Databases with expo-sqlite', 'EAS Build (Expo Application Services) for iOS & Android IPA/AAB Binaries', 'App Store Review Guidelines & Google Play Privacy Declarations'],
        stepByStepExplanation: 'Mobile connections drop frequently in transit. Offline-first apps write mutations immediately to local SQLite and update the UI optimistically, queuing changes to synchronize with backend servers when connectivity resumes. EAS Build compiles native binaries in the cloud without needing local Xcode/Android Studio setups.',
        handsOnExercise: {
          title: 'Queue Offline Mutations with NetInfo',
          instructions: 'Listen to network connectivity changes with @react-native-community/netinfo and trigger a sync queue when coming back online.',
          taskSnippet: 'NetInfo.addEventListener(state => { if (state.isConnected) flushOfflineMutationQueue(); });',
          solutionTip: 'Assign client-generated UUIDs to newly created records offline to prevent primary key collisions during synchronization.'
        },
        practicalProject: {
          title: 'Offline-First Field Survey & Inspection App with EAS Build',
          objective: 'Build an offline survey app with SQLite persistence, conflict resolution, and generate production release builds via EAS Build.',
          deliverable: 'Compiled iOS .ipa and Android .aab binaries with store metadata.'
        },
        learningResources: [
          { title: 'Expo Application Services (EAS) Guide', type: 'doc', url: 'https://docs.expo.dev/build/introduction/' },
          { title: 'Apple App Store Review Guidelines', type: 'guide', url: 'https://developer.apple.com/app-store/review/guidelines/' }
        ]
      }
    ],
    quiz: {
      id: 'mad-quiz',
      title: 'Mobile App Development Assessment',
      description: 'Evaluate your knowledge of React Native primitives, native navigation, and offline synchronization.',
      passingScore: 70,
      questions: [
        {
          id: 'mad-q1',
          question: 'Why should you use FlatList instead of a standard ScrollView when displaying a list of 1,000 items in React Native?',
          options: ['FlatList displays 3D graphics', 'FlatList virtualizes elements, rendering only items currently visible on screen and unmounting off-screen rows to preserve device RAM', 'ScrollView crashes with more than 10 items', 'FlatList is faster to type'],
          correctAnswerIndex: 1,
          explanation: 'FlatList implements windowing virtualization, avoiding allocating memory for hundreds of off-screen items.'
        },
        {
          id: 'mad-q2',
          question: 'What is the primary benefit of an "Offline-First" mobile architecture?',
          options: ['Users never need to turn on Wi-Fi', 'Applications remain fully functional and responsive during intermittent connectivity by saving data locally first and syncing in background', 'It deletes the backend server', 'It reduces battery usage to 0%'],
          correctAnswerIndex: 1,
          explanation: 'Offline-first designs write to local storage first, delivering immediate UI responsiveness regardless of network quality.'
        },
        {
          id: 'mad-q3',
          question: 'In Expo and React Native, what does EAS (Expo Application Services) Build do?',
          options: ['It compiles native iOS and Android binaries in cloud build environments without requiring local macOS/Xcode installations', 'It designs app logos', 'It replaces JavaScript with HTML', 'It submits tax returns'],
          correctAnswerIndex: 0,
          explanation: 'EAS Build compiles native iOS .ipa and Android .aab files in managed cloud containers.'
        }
      ]
    }
  }
];
