export type SkillFamily =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "DevOps"
  | "Cloud / IaC"
  | "Kubernetes / Ops"
  | "Monitoring"
  | "AI / ML"
  | "AI Tools";

export type Skill = {
  number: number;
  symbol: string;
  name: string;
  family: SkillFamily;
};

export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  details: string[];
  type: "experience" | "education";
};

export type Project = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
};

export const PROFILE = {
  name: "VANAPARTHI GIRISH KUMAR",
  firstName: "Girish",
  role: "DevOps Support | Cloud & CI/CD",
  email: "vanaparthigirishkumar@gmail.com",
  phone: "8919174720",
  phoneHref: "tel:+918919174720",
  location: "Nizamabad, Telangana",
  github:
    "https://github.com/vanaparthigirishkumar-spec",
  linkedin: null as string | null,

  resumeSummary:
    "Technical support professional with hands-on AI/ML and DevOps exposure across LLM evaluation, prompt engineering, persistent memory agents, CI/CD pipelines, Docker containers, cloud infrastructure, Linux systems, Git, and deployment troubleshooting. Building portfolio projects focused on AWS, Kubernetes, Infrastructure as Code, GitOps, and observability.",

  /* IMPORTANT: this must point to the PDF in /public */
  resumePath: "/resume.pdf",
};

export const NAV = [
  ["about", "About"],
  ["skills", "Skills"],
  ["work", "Work"],
  ["experience", "Experience"],
  ["achievements", "Achievements"],
  ["contact", "Contact"],
] as const;

const rawSkills: Array<
  [SkillFamily, string[]]
> = [
  [
    "Languages",
    [
      "Java 21",
      "Python",
      "SQL",
      "HTML",
      "CSS",
    ],
  ],

  [
    "Frontend",
    ["React", "TypeScript"],
  ],

  [
    "Backend",
    [
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "Maven",
      "JWT",
    ],
  ],

  [
    "Databases",
    ["MongoDB", "Qdrant"],
  ],

  [
    "DevOps",
    [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Jenkins",
      "SonarQube",
      "Trivy",
      "CI/CD",
    ],
  ],

  [
    "Cloud / IaC",
    [
      "AWS",
      "Azure",
      "Terraform",
      "Amazon ECR",
      "Amazon EKS",
      "AKS",
      "IAM",
      "VPC",
      "CloudWatch",
      "Azure Monitor",
    ],
  ],

  [
    "Kubernetes / Ops",
    [
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "RBAC",
      "HPA",
      "ConfigMaps",
      "Secrets",
      "Network Policies",
      "Linux",
      "Ansible",
      "Datadog",
    ],
  ],

  [
    "Monitoring",
    [
      "Prometheus",
      "Grafana",
      "Alertmanager",
    ],
  ],

  [
    "AI / ML",
    [
      "Prompt Engineering",
      "LLM Evaluation",
      "RAG",
      "Embeddings",
      "PyTorch",
      "Ollama",
    ],
  ],

  [
    "AI Tools",
    [
      "Claude",
      "Cursor",
      "GitHub Copilot",
    ],
  ],
];

export const SKILLS: Skill[] =
  rawSkills
    .flatMap(([family, names]) =>
      names.map(
        (name) =>
          ({
            number: 0,
            symbol:
              name
                .replace(
                  /[^A-Za-z]/g,
                  "",
                )
                .slice(0, 2) || "•",
            name,
            family,
          }) as Skill,
      ),
    )
    .map((skill, index) => ({
      ...skill,
      number: index + 1,
    }));

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "May 2026 — Aug 2026",
    title:
      "Senior Support Associate — DevOps Support",
    place: "Tech Mahindra",
    type: "experience",
    details: [
      "Provided technical support for application and deployment environments, troubleshooting service issues, failures, and operational problems.",
      "Supported CI/CD pipelines, Docker containers, cloud infrastructure, Linux systems, and Git-based workflows.",
      "Investigated application and deployment issues using logs, Linux commands, Git, and system diagnostics to help identify root causes and coordinate resolution.",
      "Assisted with deployment troubleshooting, container issues, environment checks, and service health verification.",
    ],
  },

  {
    period: "May 2024 — Apr 2026",
    title:
      "Digital Interaction Executive | Interim SME and Trainer",
    place: "[24]7.ai",
    type: "experience",
    details: [
      "Supported CI/CD pipelines, Docker containers, Linux systems, and Git/GitHub workflows for application and deployment activities.",
      "Assisted with deployment validation, environment checks, service health monitoring, and troubleshooting of application and container issues.",
      "Served as Interim SME and Trainer, supporting new team members with process knowledge, troubleshooting approaches, communication, and quality expectations.",
    ],
  },

  {
    period: "Apr 2022 — Jan 2023",
    title: "Outbound Agent",
    place:
      "Innovative Retail Concepts (Big Basket)",
    type: "experience",
    details: [
      "Handled 50+ outbound calls per day, maintained accurate case records, resolved customer issues, and reduced avoidable escalations through timely follow up.",
    ],
  },

  {
    period: "2020 — 2024",
    title: "B.Tech, Civil Engineering",
    place:
      "Arjun College of Science and Technology, Hyderabad",
    type: "education",
    details: [],
  },

  {
    period: "2016 — 2019",
    title: "Diploma, Civil Engineering",
    place:
      "Government Polytechnic College, Navipet, Nizamabad",
    type: "education",
    details: [],
  },

  {
    period: "Completed 2015",
    title: "SSC / Class Xth",
    place:
      "Ramson's High School, Nizamabad",
    type: "education",
    details: ["CGPA 8.2"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "memory-agent",
    index: "01",
    kicker: "AI / FastAPI / Qdrant",
    title: "Persistent Memory AI Agent",
    description:
      "Built a Python/FastAPI agent that extracts durable user information, creates embeddings, stores memories in Qdrant, and retrieves relevant context across conversations.",
    features: [
      "Integrated Ollama with Meta Llama 3.2",
      "Implemented memory extraction and new/duplicate/update decisions",
      "User-scoped retrieval with persistent Docker storage",
      "Diagnosed a live recall failure and reached 49 passing tests",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Qdrant",
      "Ollama",
      "Docker Compose",
    ],
  },

  {
    id: "event-platform",
    index: "02",
    kicker:
      "AWS EKS / GitOps / Observability",
    title:
      "Production-Grade Event Platform",
    description:
      "Built a full-stack event and camp management platform using React/TypeScript, Java 21/Spring Boot, MongoDB, JWT authentication, and role-based authorization.",
    features: [
      "Dockerized frontend and backend services",
      "Jenkins CI with SonarQube and Trivy",
      "Terraform provisioned AWS VPC, IAM, ECR and EKS",
      "ArgoCD GitOps delivery with Prometheus, Grafana, Alertmanager and CloudWatch",
    ],
    tech: [
      "React",
      "TypeScript",
      "Java 21",
      "Spring Boot",
      "AWS EKS",
      "Terraform",
      "Kubernetes",
      "ArgoCD",
    ],
  },

  {
    id: "three-tier",
    index: "03",
    kicker:
      "Docker / Jenkins / Security",
    title:
      "Containerized 3-Tier Application",
    description:
      "Built a containerized 3-tier application using React/TypeScript, Java 21/Spring Boot, and MongoDB with Docker Compose networking and persistent storage.",
    features: [
      "Jenkins CI for checkout, builds, tests and Docker image creation",
      "Deployment validation automated in the pipeline",
      "SonarQube for code-quality analysis",
      "Trivy vulnerability scanning before publishing images",
    ],
    tech: [
      "React",
      "TypeScript",
      "Java 21",
      "Spring Boot",
      "MongoDB",
      "Docker Compose",
      "Jenkins",
      "Trivy",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    index: "01",
    label: "Recognition",
    title:
      "Most Debutant Performer — 2025",
    detail: "[24]7.ai",
    value: "2025",
  },

  {
    index: "02",
    label: "Recognition",
    title:
      "Multiple Rewards C Recognition awards",
    detail:
      "For consistent performance",
    value: "C",
  },
];

export const EDUCATION =
  EXPERIENCE.filter(
    (item) => item.type === "education",
  );

export const CERTIFICATIONS: Array<{
  title: string;
  issuer: string;
}> = [];