"use client";

import { useEffect, useMemo, useState } from "react";
import type { SimpleIcon } from "simple-icons";

import {
  siPython,
  siMysql,
  siPostgresql,
  siHtml5,
  siReact,
  siTypescript,
  siSpringboot,
  siFastapi,
  siApachemaven,
  siJsonwebtokens,
  siMongodb,
  siQdrant,
  siGit,
  siGithub,
  siDocker,
  siJenkins,
  siTrivy,
  siGithubactions,
  siTerraform,
  siKubernetes,
  siHelm,
  siArgo,
  siLinux,
  siAnsible,
  siDatadog,
  siPrometheus,
  siGrafana,
  siPytorch,
  siOllama,
  siClaude,
  siAnthropic,
  siCursor,
  siGithubcopilot,
} from "simple-icons";

import Lenis from "lenis";

import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EXPERIENCE,
  NAV,
  PROFILE,
  PROJECTS,
  SKILLS,
} from "@/lib/data";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,
    });

    let raf = 0;

    const frame = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}

function useReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>(".rv");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    elements.forEach((element) =>
      observer.observe(element),
    );

    return () => observer.disconnect();
  }, []);
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [menu, setMenu] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setProgress(
        max > 0 ? window.scrollY / max : 0,
      );
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true },
    );

    const sections = NAV.map(([id]) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(
            (entry) => entry.isIntersecting,
          )
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          )[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) =>
      observer.observe(section),
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll,
      );

      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <div
        className="progress"
        style={{
          transform: `scaleX(${progress})`,
        }}
        aria-hidden="true"
      />

      <div className="nav-shell">
        <nav
          className={`nav ${
            scrolled ? "scrolled" : ""
          }`}
          aria-label="Primary navigation"
        >
          <a
            className="brand"
            href="#about"
            aria-label={`${PROFILE.name} home`}
          >
            <span className="brand-mark">
              GK
            </span>

            <span className="brand-name">
              {PROFILE.name}
            </span>
          </a>

          <div className="nav-links">
            {NAV.map(([id, label]) => (
              <a
                key={id}
                className={
                  active === id
                    ? "active"
                    : ""
                }
                href={`#${id}`}
              >
                {label}
              </a>
            ))}
          </div>

          <button
            className="pill secondary menu-btn"
            onClick={() => setMenu(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </nav>
      </div>

      {menu && (
        <div
          className="fixed inset-0 z-[95] bg-[var(--paper)] p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between">
            <span className="tag">
              Navigation
            </span>

            <button
              className="pill secondary"
              onClick={() => setMenu(false)}
            >
              Close
            </button>
          </div>

          <div className="mt-16 grid gap-4">
            {NAV.map(
              ([id, label], index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() =>
                    setMenu(false)
                  }
                  className="text-5xl font-extrabold tracking-[-0.05em]"
                >
                  <span className="mr-3 align-top text-sm font-mono text-[var(--mute)]">
                    0{index + 1}
                  </span>

                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-copy rv">
          <span className="hero-eyebrow">
            <span>01</span> — DevOps Support ·
            Cloud & CI/CD
          </span>

          <div className="hero-ghost">
            GIRISH
          </div>

          <h1 className="hero-title">
            DevOps <em>Support.</em>
            <br />
            Cloud & CI/CD.
          </h1>

          <div className="hero-actions">
            <a
              className="pill primary"
              href="#work"
            >
              Explore work ↘
            </a>

            <a
              className="pill secondary"
              href="#contact"
            >
              Let's talk
            </a>

            <a
              className="pill secondary"
              href={PROFILE.resumePath}
              download
            >
              Resume ↓
            </a>
          </div>
        </div>

        <div className="hero-media rv">
          <div className="hero-figure">
            <img
              src="/portrait-3d.png"
              alt="Girish Kumar"
            />
          </div>
        </div>

        <p className="hero-note rv">
          Technical support professional with
          hands-on AI/ML and DevOps exposure
          across cloud infrastructure, containers,
          CI/CD, Linux, Git, deployment
          troubleshooting and observability.
        </p>
      </div>
    </section>
  );
}

function About() {
  const [flipped, setFlipped] =
    useState(false);

  const toggleFlip = () =>
    setFlipped((value) => !value);

  return (
    <section
      id="about"
      className="section shell"
    >
      <div className="section-header rv">
        <div>
          <div className="tag">
            02 — About
          </div>

          <h2 className="heading">
            A closer look{" "}
            <em>within.</em>
          </h2>
        </div>
      </div>

      <div className="copy-layout">
        <div className="rv">
          <p className="prose">
            {PROFILE.resumeSummary}
          </p>

          <div className="button-row">
            <a
              className="pill primary"
              href={PROFILE.resumePath}
              download
            >
              Resume ↓
            </a>

            <a
              className="pill secondary"
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="id-wrap rv">
          <div className="lanyard">
            <span>
              GIRISH · DEVOPS SUPPORT
            </span>

            <div className="clip" />
          </div>

          <div className="id-card-wrap">
            <div
              className={`id-card ${
                flipped
                  ? "flipped"
                  : ""
              }`}
              tabIndex={0}
              role="button"
              aria-pressed={flipped}
              onClick={toggleFlip}
              onKeyDown={(event) => {
                if (
                  event.key ===
                    "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  toggleFlip();
                }
              }}
            >
              <div className="id-face">
                <div className="id-band">
                  DEVELOPER ID
                </div>

                <div className="id-portrait">
                  <img
                    src="/portrait-3d.png"
                    alt="Girish Kumar"
                  />
                </div>

                <div className="id-name">
                  {PROFILE.firstName} Kumar
                </div>

                <div className="id-role">
                  {PROFILE.role}
                </div>

                <div className="id-rows">
                  <div className="id-row">
                    <span>
                      Focus
                    </span>

                    <span>
                      Cloud / CI/CD
                    </span>
                  </div>

                  <div className="id-row">
                    <span>
                      Degree
                    </span>

                    <span>
                      B.Tech · 2020–2024
                    </span>
                  </div>
                </div>

                <div
                  className="barcode"
                  aria-label="decorative barcode"
                />
              </div>

              <div className="id-face id-back">
                <div className="id-band">
                  WHAT I AM
                </div>

                <p className="id-back-copy">
                  DevOps Support professional
                  with hands-on AI/ML and cloud
                  exposure, building portfolio
                  projects around AWS, Kubernetes,
                  Infrastructure as Code, GitOps
                  and observability.
                </p>

                <p className="id-back-copy">
                  Key builds include the Persistent
                  Memory AI Agent, Production-Grade
                  Event Platform, and Containerized
                  3-Tier Application.
                </p>

                <p className="id-back-copy">
                  Recognition: Most Debutant
                  Performer — 2025 and multiple
                  Rewards C Recognition awards.
                </p>

                <div className="sig">
                  Girish Kumar
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rv">
          <div className="tag mb-3">
            Quick facts
          </div>

          <dl className="quick-facts">
            <div className="fact">
              <dt>Location</dt>

              <dd>
                {PROFILE.location}
              </dd>
            </div>

            <div className="fact">
              <dt>Education</dt>

              <dd>
                B.Tech, Civil Engineering
              </dd>
            </div>

            <div className="fact">
              <dt>Phone</dt>

              <dd>
                <a
                  href={
                    PROFILE.phoneHref
                  }
                >
                  {PROFILE.phone}
                </a>
              </dd>
            </div>

            <div className="fact">
              <dt>Email</dt>

              <dd>
                <a
                  href={`mailto:${PROFILE.email}`}
                >
                  {PROFILE.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

type IconLookup = Record<
  string,
  string[]
>;

const SKILL_ICON_KEYS: IconLookup = {
  "Java 21": [],
  Java: [],
  Python: ["siPython"],

  SQL: [],

  HTML: ["siHtml5"],
  CSS: [],
  React: ["siReact"],
  TypeScript: ["siTypescript"],
  "Spring Boot": ["siSpringboot"],
  FastAPI: ["siFastapi"],
  "REST APIs": [],
  Maven: ["siApachemaven"],
  JWT: ["siJsonwebtokens"],
  MongoDB: ["siMongodb"],
  Qdrant: ["siQdrant"],
  Git: ["siGit"],
  GitHub: ["siGithub"],
  Docker: ["siDocker"],
  "Docker Compose": ["siDocker"],
  Jenkins: ["siJenkins"],
  SonarQube: [],
  Trivy: ["siTrivy"],

  "CI/CD": [
    "siGithubactions",
    "siJenkins",
  ],

  AWS: [],
  Azure: [],
  Terraform: ["siTerraform"],

  "Amazon ECR": [],
  "Amazon EKS": [],
  AKS: [],
  IAM: [],
  VPC: [],

  CloudWatch: [],
  "Azure Monitor": [],

  Kubernetes: ["siKubernetes"],
  Helm: ["siHelm"],
  ArgoCD: ["siArgo"],

  RBAC: [],
  HPA: [],
  ConfigMaps: [],
  Secrets: [],
  "Network Policies": [],

  Linux: ["siLinux"],
  Ansible: ["siAnsible"],
  Datadog: ["siDatadog"],
  Prometheus: ["siPrometheus"],
  Grafana: ["siGrafana"],
  Alertmanager: ["siPrometheus"],

  "Prompt Engineering": [],
  "LLM Evaluation": [],
  RAG: [],
  Embeddings: [],

  PyTorch: ["siPytorch"],
  Ollama: ["siOllama"],

  Claude: [
    "siClaude",
    "siAnthropic",
  ],

  Cursor: ["siCursor"],

  "GitHub Copilot": [
    "siGithubcopilot",
  ],
};

const SIMPLE_ICON_MAP: Record<
  string,
  SimpleIcon
> = {
  siPython,
  siMysql,
  siPostgresql,
  siHtml5,
  siReact,
  siTypescript,
  siSpringboot,
  siFastapi,
  siApachemaven,
  siJsonwebtokens,
  siMongodb,
  siQdrant,
  siGit,
  siGithub,
  siDocker,
  siJenkins,
  siTrivy,
  siGithubactions,
  siTerraform,
  siKubernetes,
  siHelm,
  siArgo,
  siLinux,
  siAnsible,
  siDatadog,
  siPrometheus,
  siGrafana,
  siPytorch,
  siOllama,
  siClaude,
  siAnthropic,
  siCursor,
  siGithubcopilot,
};

const SKILL_SYMBOLS: Record<
  string,
  string
> = {
  "Java 21": "Jv",
  Java: "Jv",
  Python: "Py",
  SQL: "Sq",
  HTML: "Ht",
  CSS: "Cs",
  React: "Re",
  TypeScript: "Ts",
  "Spring Boot": "Sb",
  FastAPI: "Fa",
  "REST APIs": "Ra",
  Maven: "Mv",
  JWT: "Jt",
  MongoDB: "Mg",
  Qdrant: "Qd",
  Git: "Gt",
  GitHub: "Gh",
  Docker: "Dk",
  "Docker Compose": "Dc",
  Jenkins: "Jn",
  SonarQube: "Sq",
  Trivy: "Tv",
  "CI/CD": "Ci",
  AWS: "Aw",
  Azure: "Az",
  Terraform: "Tf",
  "Amazon ECR": "Ec",
  "Amazon EKS": "Ek",
  AKS: "Ak",
  IAM: "Im",
  VPC: "Vc",
  CloudWatch: "Cw",
  "Azure Monitor": "Am",
  Kubernetes: "K8",
  Helm: "Hm",
  ArgoCD: "Ar",
  RBAC: "Rb",
  HPA: "Hp",
  ConfigMaps: "Cm",
  Secrets: "Sc",
  "Network Policies": "Np",
  Linux: "Lx",
  Ansible: "An",
  Datadog: "Dd",
  Prometheus: "Pm",
  Grafana: "Gf",
  Alertmanager: "Al",
  "Prompt Engineering": "Pe",
  "LLM Evaluation": "Le",
  RAG: "Rg",
  Embeddings: "Em",
  PyTorch: "Pt",
  Ollama: "Ol",
  Claude: "Cl",
  Cursor: "Cu",
  "GitHub Copilot": "Cp",
};

const SKILL_FAMILY_GROUPS: Record<
  string,
  string[]
> = {
  Languages: ["Languages"],
  Frontend: ["Frontend"],
  Backend: ["Backend"],
  Databases: ["Databases"],

  Tools: [
    "DevOps",
    "Cloud / IaC",
    "Monitoring",
    "AI Tools",
  ],

  Core: [
    "Kubernetes / Ops",
    "AI / ML",
  ],
};

function getSkillIcon(
  name: string,
): SimpleIcon | null {
  const candidates =
    SKILL_ICON_KEYS[name] ?? [];

  for (const key of candidates) {
    const icon =
      SIMPLE_ICON_MAP[key];

    if (icon) {
      return icon;
    }
  }

  return null;
}

function getSkillDisplaySymbol(
  name: string,
) {
  const fallback =
    name
      .replace(
        /[^A-Za-z0-9]/g,
        "",
      )
      .slice(0, 2) || "•";

  return (
    SKILL_SYMBOLS[name] ??
    fallback
  );
}

function getSkillVisualFamily(
  family: string,
) {
  for (const [
    label,
    families,
  ] of Object.entries(
    SKILL_FAMILY_GROUPS,
  )) {
    if (families.includes(family)) {
      return label;
    }
  }

  return family;
}

function CustomSkillLogo({
  name,
  size,
}: {
  name: string;
  size: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 200 200",
    role: "img" as const,
    "aria-label": `${name} logo`,
    className: "skill-custom-logo",
  };

  /*
   * Java
   */
  if (
    name === "Java 21" ||
    name === "Java"
  ) {
    return (
      <svg {...common}>
        <path
          d="M71 37c17 15 15 29 2 42-10 10-13 18-8 26 5 8 15 12 30 12 27 0 43-10 46-28 3-17-8-31-27-44"
          fill="none"
          stroke="#e76f3c"
          strokeWidth="9"
          strokeLinecap="round"
        />

        <path
          d="M111 29c16 10 25 19 27 30 2 11-4 21-16 29"
          fill="none"
          stroke="#f4a24c"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M54 103c-11 5-16 12-16 20 0 22 29 38 71 38s72-16 72-38c0-8-5-15-16-20 1 14-7 26-21 33-12 6-27 9-40 9-14 0-29-3-41-9-14-7-21-19-21-33Z"
          fill="#5382a1"
        />

        <path
          d="M43 111c-10 12-6 23 11 30 17 8 40 11 55 11 19 0 42-4 58-12 14-7 18-17 9-29"
          fill="none"
          stroke="#315f79"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M72 133c19 7 37 8 57 3"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity=".9"
        />
      </svg>
    );
  }

  /*
   * JWT
   */
  if (name === "JWT") {
    return (
      <svg {...common}>
        <rect
          x="22"
          y="22"
          width="156"
          height="156"
          rx="36"
          fill="#111827"
        />

        <path
          d="M52 58h96v22H52z"
          fill="#f6c343"
        />

        <path
          d="M52 90h96v22H52z"
          fill="#ef8354"
        />

        <path
          d="M52 122h96v22H52z"
          fill="#8ecae6"
        />

        <text
          x="100"
          y="106"
          textAnchor="middle"
          fill="#fff"
          fontSize="36"
          fontWeight="900"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          JWT
        </text>
      </svg>
    );
  }

  /*
   * REST APIs
   */
  if (name === "REST APIs") {
    return (
      <svg {...common}>
        <rect
          x="22"
          y="22"
          width="156"
          height="156"
          rx="36"
          fill="#f1f0ed"
          stroke="#171717"
          strokeWidth="5"
        />

        <path
          d="M62 63h-16v74h16"
          fill="none"
          stroke="#111827"
          strokeWidth="11"
          strokeLinecap="round"
        />

        <path
          d="M138 63h16v74h-16"
          fill="none"
          stroke="#111827"
          strokeWidth="11"
          strokeLinecap="round"
        />

        <circle
          cx="83"
          cy="82"
          r="7"
          fill="#2b6cb0"
        />

        <circle
          cx="117"
          cy="82"
          r="7"
          fill="#2b6cb0"
        />

        <path
          d="M83 82h34M83 112h34"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <path
          d="M83 112l-15 14M117 112l15 14"
          stroke="#2b6cb0"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <text
          x="100"
          y="158"
          textAnchor="middle"
          fill="#111827"
          fontSize="20"
          fontWeight="800"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          REST
        </text>
      </svg>
    );
  }

  /*
   * AWS family
   */
  if (
    name === "AWS" ||
    name === "Amazon ECR" ||
    name === "Amazon EKS" ||
    name === "IAM" ||
    name === "VPC"
  ) {
    return (
      <svg {...common}>
        <text
          x="100"
          y="92"
          textAnchor="middle"
          fill="#232f3e"
          fontSize="43"
          fontWeight="800"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="-2"
        >
          aws
        </text>

        <path
          d="M38 117c34 20 76 22 122 5"
          fill="none"
          stroke="#ff9900"
          strokeWidth="11"
          strokeLinecap="round"
        />

        <path
          d="M156 118l-15-6 8 14"
          fill="#ff9900"
        />
      </svg>
    );
  }

  /*
   * Azure family
   */
  if (
    name === "Azure" ||
    name === "AKS" ||
    name === "Azure Monitor"
  ) {
    return (
      <svg {...common}>
        <path
          d="M104 30 55 138h31l39-74z"
          fill="#0078d4"
        />

        <path
          d="M77 151h91l-51-58-15 27 31 11H77z"
          fill="#0078d4"
        />
      </svg>
    );
  }

  /*
   * HPA
   */
  if (name === "HPA") {
    return (
      <svg {...common}>
        <rect
          x="28"
          y="72"
          width="38"
          height="58"
          rx="9"
          fill="#326ce5"
        />

        <rect
          x="81"
          y="57"
          width="38"
          height="73"
          rx="9"
          fill="#5b8def"
        />

        <rect
          x="134"
          y="42"
          width="38"
          height="88"
          rx="9"
          fill="#8aaff5"
        />

        <path
          d="M33 52h24M28 52l10-10 10 10"
          fill="none"
          stroke="#111827"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M81 43h38M76 43l10-10 10 10"
          fill="none"
          stroke="#111827"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M134 28h38M129 28l10-10 10 10"
          fill="none"
          stroke="#111827"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text
          x="100"
          y="165"
          textAnchor="middle"
          fill="#111827"
          fontSize="24"
          fontWeight="900"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          HPA
        </text>
      </svg>
    );
  }

  /*
   * SQL / Microsoft SQL Server
   */
  if (name === "SQL") {
    return (
      <svg {...common}>
        <ellipse
          cx="100"
          cy="55"
          rx="50"
          ry="24"
          fill="#d67a2f"
        />

        <path
          d="M50 55v48c0 13 22 24 50 24s50-11 50-24V55"
          fill="#3b82b6"
        />

        <ellipse
          cx="100"
          cy="103"
          rx="50"
          ry="24"
          fill="#2e6e9e"
        />

        <path
          d="M67 48h66"
          stroke="#fff"
          strokeWidth="7"
          strokeLinecap="round"
          opacity=".8"
        />

        <text
          x="100"
          y="112"
          textAnchor="middle"
          fill="#fff"
          fontSize="28"
          fontWeight="900"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          SQL
        </text>
      </svg>
    );
  }

  /*
   * CSS
   */
  if (name === "CSS") {
    return (
      <svg {...common}>
        <path
          d="M35 28h130l-12 126-53 18-53-18L35 28Z"
          fill="#1572b6"
        />

        <path
          d="M100 38v120l43-14 10-106H100Z"
          fill="#33a9dc"
          opacity=".75"
        />

        <text
          x="100"
          y="112"
          textAnchor="middle"
          fill="#fff"
          fontSize="50"
          fontWeight="900"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          CSS
        </text>
      </svg>
    );
  }

  /*
   * SonarQube
   */
  if (name === "SonarQube") {
    return (
      <svg {...common}>
        <circle
          cx="100"
          cy="100"
          r="68"
          fill="#4e9bcd"
        />

        <circle
          cx="100"
          cy="100"
          r="48"
          fill="#f4f2ee"
        />

        <path
          d="M66 126c17 8 35 9 53 3 14-5 25-14 33-27"
          fill="none"
          stroke="#4e9bcd"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <text
          x="100"
          y="105"
          textAnchor="middle"
          fill="#1e4d6d"
          fontSize="22"
          fontWeight="900"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          SONAR
        </text>
      </svg>
    );
  }

  /*
   * CloudWatch
   */
  if (name === "CloudWatch") {
    return (
      <svg {...common}>
        <path
          d="M35 137h130"
          stroke="#ff9900"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M43 118c19-2 24-30 44-30 18 0 25 22 43 22 13 0 19-15 30-27"
          fill="none"
          stroke="#232f3e"
          strokeWidth="9"
          strokeLinecap="round"
        />

        <circle
          cx="87"
          cy="88"
          r="7"
          fill="#ff9900"
        />

        <circle
          cx="130"
          cy="110"
          r="7"
          fill="#ff9900"
        />

        <text
          x="100"
          y="166"
          textAnchor="middle"
          fill="#232f3e"
          fontSize="22"
          fontWeight="800"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          CloudWatch
        </text>
      </svg>
    );
  }

  return null;
}

function SkillLogo({
  name,
  size = 180,
}: {
  name: string;
  size?: number;
}) {
  const custom =
    CustomSkillLogo({
      name,
      size,
    });

  if (custom) {
    return custom;
  }

  const icon =
    getSkillIcon(name);

  if (!icon) {
    const letters =
      getSkillDisplaySymbol(
        name,
      ).toUpperCase();

    return (
      <div
        className="skill-fallback-logo"
        aria-label={`${name} logo placeholder`}
        style={{
          width: size,
          height: size,
          fontSize: Math.max(
            30,
            size * 0.23,
          ),
        }}
      >
        {letters}
      </div>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={`${name} logo`}
      className="skill-real-logo"
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}

function Skills() {
  const [activeFamily, setActiveFamily] =
    useState("All");

  const defaultSkill =
    SKILLS.find(
      (skill) =>
        skill.name === "Java 21",
    ) ?? SKILLS[0];

  const [selected, setSelected] =
    useState(defaultSkill);

  const visibleSkills = useMemo(
    () => SKILLS,
    [],
  );

  const familyLabels = [
    "All",
    ...Object.keys(
      SKILL_FAMILY_GROUPS,
    ),
  ];

  const selectedProjects =
    PROJECTS.filter(
      (project) =>
        project.tech.includes(
          selected.name,
        ) ||
        (selected.name === "AWS" &&
          project.title.includes(
            "Platform",
          )),
    );

  const belongsToActiveFamily = (
    skill: (typeof SKILLS)[number],
  ) => {
    if (activeFamily === "All") {
      return true;
    }

    return (
      SKILL_FAMILY_GROUPS[
        activeFamily
      ]?.includes(skill.family) ??
      false
    );
  };

  return (
    <section
      id="skills"
      className="section shell"
    >
      <div className="section-header rv">
        <div>
          <div className="tag">
            03 — Skills
          </div>

          <h2 className="heading">
            The stack{" "}
            <em>in motion.</em>
          </h2>
        </div>

        <p>
          Elements in six families. Hover
          a tile to inspect its technology
          logo, or pick a family to light
          it up.
        </p>
      </div>

      <div className="skill-periodic-layout">
        <div className="skill-periodic-main rv">
          <div
            className="skill-family-filters"
            aria-label="Skill family filters"
          >
            {familyLabels.map(
              (family) => (
                <button
                  key={family}
                  type="button"
                  className={`skill-family-filter ${
                    activeFamily ===
                    family
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveFamily(
                      family,
                    )
                  }
                >
                  <span
                    className="filter-square"
                    aria-hidden="true"
                  />

                  {family}
                </button>
              ),
            )}
          </div>

          <div
            className="skill-periodic-grid"
            aria-label="Technology skills"
          >
            {visibleSkills.map(
              (skill, index) => {
                const highlighted =
                  belongsToActiveFamily(
                    skill,
                  );

                const selectedNow =
                  selected.name ===
                  skill.name;

                const row = Math.floor(
                  index / 8,
                );

                const col =
                  index % 8;

                return (
                  <button
                    key={skill.name}
                    type="button"
                    className={`skill-periodic-cell ${
                      selectedNow
                        ? "selected"
                        : ""
                    } ${
                      highlighted
                        ? "highlighted"
                        : "dimmed"
                    }`}
                    style={{
                      animationDelay: `${
                        (row * 8 + col) *
                        18
                      }ms`,
                    }}
                    onMouseEnter={() =>
                      setSelected(
                        skill,
                      )
                    }
                    onFocus={() =>
                      setSelected(
                        skill,
                      )
                    }
                    onClick={() =>
                      setSelected(
                        skill,
                      )
                    }
                    aria-label={`Inspect ${skill.name}`}
                  >
                    <span className="periodic-number">
                      {String(
                        skill.number,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <span className="periodic-symbol">
                      {getSkillDisplaySymbol(
                        skill.name,
                      )}
                    </span>

                    <span className="periodic-name">
                      {skill.name}
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </div>

        <aside
          className="skill-periodic-inspector rv"
          aria-live="polite"
        >
          <div className="inspector-family">
            {getSkillVisualFamily(
              selected.family,
            )}
          </div>

          <div className="inspector-number">
            {String(
              selected.number,
            ).padStart(2, "0")}
          </div>

          <div className="inspector-logo-wrap">
            <SkillLogo
              name={selected.name}
              size={205}
            />
          </div>

          <div className="inspector-name">
            {selected.name}
          </div>

          <div className="inspector-subtitle">
            {selected.family}
          </div>

          <div className="inspector-rule" />

          <div className="inspector-project-label">
            USED IN PROJECTS
          </div>

          {selectedProjects.length >
          0 ? (
            selectedProjects.map(
              (project) => (
                <div
                  className="inspector-project"
                  key={project.id}
                >
                  {project.title}
                </div>
              ),
            )
          ) : (
            <div className="inspector-project muted">
              Listed as a résumé skill.
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

function Illustration({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  if (
    project.id ===
    "memory-agent"
  ) {
    return (
      <div
        className="illustration illustration-memory"
        aria-label="Illustrative UI for the Persistent Memory AI Agent"
      >
        <div className="tag mb-3">
          Illustrative UI · memory
          pipeline
        </div>

        <div className="ui-window">
          <div className="ui-bar">
            <span className="ui-dot" />
            <span className="ui-dot" />
            <span className="ui-dot" />

            <span className="ui-window-title">
              memory-agent
            </span>
          </div>

          <div className="memory-ui">
            <div className="memory-header">
              <div>
                <span className="ui-label">
                  RETRIEVAL
                </span>

                <strong>
                  Conversation context
                </strong>
              </div>

              <span className="status-pill">
                ● synced
              </span>
            </div>

            <div className="memory-flow">
              <div className="flow-node">
                User input
              </div>

              <span>→</span>

              <div className="flow-node">
                Extract
              </div>

              <span>→</span>

              <div className="flow-node">
                Embed
              </div>

              <span>→</span>

              <div className="flow-node strong">
                Qdrant
              </div>
            </div>

            <div className="memory-chat">
              <span>
                “remember my deployment
                preference…”
              </span>

              <strong>
                Context retrieved
              </strong>
            </div>

            <div className="terminal-lines">
              <span>
                $ tests
              </span>

              <strong>
                49 passing
              </strong>

              <span>
                $ docker compose up
              </span>

              <em>
                qdrant + api online
              </em>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (
    project.id ===
    "event-platform"
  ) {
    return (
      <div
        className="illustration illustration-event"
        aria-label="Illustrative UI for the Production-Grade Event Platform"
      >
        <div className="tag mb-3">
          Illustrative UI · cloud
          dashboard
        </div>

        <div className="ui-window">
          <div className="ui-bar">
            <span className="ui-dot" />
            <span className="ui-dot" />
            <span className="ui-dot" />

            <span className="ui-window-title">
              event-platform / prod
            </span>
          </div>

          <div className="event-ui">
            <div className="metric-card">
              <span>CLUSTER</span>

              <strong>
                eks-prod
              </strong>

              <small>
                Healthy · 6 nodes
              </small>
            </div>

            <div className="metric-card">
              <span>DELIVERY</span>

              <strong>
                ArgoCD
              </strong>

              <small>
                Synced · 99.8%
              </small>
            </div>

            <div className="chart-card">
              <div className="mini-chart">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <small>
                Request rate
              </small>
            </div>

            <div className="deploy-card">
              <div>
                <span>
                  latest release
                </span>

                <strong>
                  v1.8.4
                </strong>
              </div>

              <span className="deploy-line" />

              <div>
                <span>
                  security
                </span>

                <strong>
                  Trivy ✓
                </strong>
              </div>
            </div>

            <div className="cluster-map">
              <div className="cluster-node">
                VPC
              </div>

              <span>→</span>

              <div className="cluster-node">
                ECR
              </div>

              <span>→</span>

              <div className="cluster-node strong">
                EKS
              </div>

              <span>→</span>

              <div className="cluster-node">
                HPA
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="illustration illustration-three-tier"
      aria-label="Illustrative UI for the Containerized 3-Tier Application"
    >
      <div className="tag mb-3">
        Illustrative UI · service
        topology
      </div>

      <div className="ui-window">
        <div className="ui-bar">
          <span className="ui-dot" />
          <span className="ui-dot" />
          <span className="ui-dot" />

          <span className="ui-window-title">
            three-tier / pipeline
          </span>
        </div>

        <div className="tier-ui">
          <div className="tier-row">
            <span>CLIENT</span>

            <div className="tier-card">
              React
            </div>
          </div>

          <div className="tier-connector">
            ↓
          </div>

          <div className="tier-row">
            <span>API</span>

            <div className="tier-card strong">
              Spring Boot
            </div>

            <div className="tier-card">
              JWT
            </div>
          </div>

          <div className="tier-connector">
            ↓
          </div>

          <div className="tier-row">
            <span>DATA</span>

            <div className="tier-card">
              MongoDB
            </div>

            <div className="tier-card">
              Persistent volume
            </div>
          </div>

          <div className="pipeline-strip">
            <span>Git</span>
            <b>→</b>
            <span>Jenkins</span>
            <b>→</b>
            <span>SonarQube</span>
            <b>→</b>
            <span>Trivy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [active, setActive] =
    useState(0);

  return (
    <section
      id="work"
      className="section shell"
    >
      <div className="section-header rv">
        <div>
          <div className="tag">
            04 — Selected work
          </div>

          <h2 className="heading">
            Things I’ve{" "}
            <em>built.</em>
          </h2>
        </div>
      </div>

      <div className="work-panels rv">
        {PROJECTS.map(
          (project, index) => {
            const isActive =
              active === index;

            return (
              <article
                key={project.id}
                className={`work-panel ${
                  isActive
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() =>
                  setActive(index)
                }
                onFocus={() =>
                  setActive(index)
                }
              >
                {isActive ? (
                  <div className="work-inner">
                    <div className="work-copy">
                      <div className="work-kicker">
                        {project.index} ·{" "}
                        {project.kicker}
                      </div>

                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {
                          project.description
                        }
                      </p>

                      <div className="feature-list">
                        {project.features.map(
                          (feature) => (
                            <div
                              className="feature"
                              key={feature}
                            >
                              {feature}
                            </div>
                          ),
                        )}
                      </div>

                      <div className="techs">
                        {project.tech.map(
                          (tech) => (
                            <span
                              className="tech"
                              key={tech}
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <Illustration
                      project={project}
                    />
                  </div>
                ) : (
                  <button
                    className="work-collapsed w-full h-full text-left"
                    onClick={() =>
                      setActive(index)
                    }
                    aria-label={`Open ${project.title}`}
                  >
                    <span className="work-plus">
                      +
                    </span>

                    <span className="vertical">
                      {project.title}
                    </span>

                    <span className="tag">
                      {project.index}
                    </span>
                  </button>
                )}
              </article>
            );
          },
        )}
      </div>
    </section>
  );
}

function Certifications() {
  if (!CERTIFICATIONS.length) {
    return null;
  }

  return (
    <section className="cert-band section">
      <div className="shell">
        <div className="section-header">
          <div>
            <div className="tag">
              05 — Certifications
            </div>

            <h2 className="heading">
              Always{" "}
              <em>learning.</em>
            </h2>
          </div>

          <p>
            {CERTIFICATIONS.length}{" "}
            credential
            {CERTIFICATIONS.length ===
            1
              ? ""
              : "s"}{" "}
            listed in the résumé.
          </p>
        </div>

        <div className="cert-list">
          {CERTIFICATIONS.map(
            (cert, index) => (
              <div
                className="cert-row"
                key={cert.title}
              >
                <div className="cert-idx">
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    "0",
                  )}
                </div>

                <div>
                  <strong>
                    {cert.title}
                  </strong>

                  <div className="text-sm text-[var(--mute)]">
                    {cert.issuer}
                  </div>
                </div>

                <div>
                  ↗
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="section shell"
    >
      <div className="section-header rv">
        <div>
          <div className="tag">
            05 — Experience
          </div>

          <h2 className="heading">
            One path{" "}
            <em>forward.</em>
          </h2>
        </div>

        <p>
          Education and professional
          experience are presented together
          in the same chronology.
        </p>
      </div>

      <div className="timeline rv">
        {EXPERIENCE.map(
          (item) => (
            <div
              className="timeline-item"
              key={`${item.period}-${item.title}`}
            >
              <div className="timeline-dot" />

              <div className="timeline-period">
                {item.period}
              </div>

              <div className="timeline-title">
                {item.title}
              </div>

              <div className="timeline-place">
                {item.place}
              </div>

              {!!item.details.length && (
                <div className="timeline-details">
                  {item.details.map(
                    (detail) => (
                      <div
                        key={detail}
                      >
                        {detail}
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          ),
        )}

        <div className="next-card">
          Next — Your team?
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section
      id="achievements"
      className="section shell"
    >
      <div className="section-header rv">
        <div>
          <div className="tag">
            06 — Achievements
          </div>

          <h2 className="heading">
            Signals of{" "}
            <em>progress.</em>
          </h2>
        </div>

        <p>
          Only the recognitions recorded in
          the résumé appear here.
        </p>
      </div>

      <div className="achievements-wrap rv">
        <div
          className="achievement-track"
          tabIndex={0}
          aria-label="Achievements gallery"
        >
          {ACHIEVEMENTS.map(
            (item) => (
              <article
                className="achievement-card"
                key={item.index}
              >
                <div className="ach-top">
                  <div className="ach-logo">
                    ★
                  </div>

                  <div className="ach-index">
                    {item.index} /{" "}
                    {String(
                      ACHIEVEMENTS.length,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </div>
                </div>

                <div className="ach-bottom">
                  <div>
                    <div className="ach-label">
                      {item.label}
                    </div>

                    <div className="ach-title">
                      {item.title}
                    </div>

                    <div className="ach-detail">
                      {item.detail}
                    </div>
                  </div>

                  <div className="ach-value">
                    {item.value}
                  </div>
                </div>
              </article>
            ),
          )}

          <div className="ach-tail">
            and counting →
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] =
    useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(
        PROFILE.email,
      );

      setCopied(true);

      window.setTimeout(
        () => setCopied(false),
        1800,
      );
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }

  return (
    <section
      id="contact"
      className="section shell contact"
    >
      <div className="contact-wrap">
        <div className="tag rv">
          07 — Contact
        </div>

        <h2 className="contact-title rv">
          Let’s build /{" "}
          <em>something useful.</em>
        </h2>

        <div className="contact-grid rv">
          <div>
            <a
              className="email-link"
              href={`mailto:${PROFILE.email}`}
            >
              {PROFILE.email}
            </a>

            <div className="mt-4">
              <button
                className="pill secondary"
                onClick={copyEmail}
                aria-live="polite"
              >
                {copied
                  ? "Copied ✓"
                  : "Copy email"}
              </button>
            </div>
          </div>

          <div className="contact-meta">
            <a
              className="pill secondary"
              href={PROFILE.phoneHref}
            >
              Call
            </a>

            <a
              className="pill secondary"
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <span className="badge">
              SAY HELLO
              <br />
              ↻
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();

  return (
    <>
      <SmoothScroll />

      <Navigation />

      <Hero />

      <About />

      <Skills />

      <Work />

      <Certifications />

      <Experience />

      <Achievements />

      <Contact />

      <footer className="footer">
        <div className="shell footer-inner">
          <span>
            © {new Date().getFullYear()}{" "}
            {PROFILE.name}
          </span>

          <a href="#hero">
            Back to top ↑
          </a>

          <span>
            Built with Next.js
          </span>
        </div>
      </footer>
    </>
  );
}