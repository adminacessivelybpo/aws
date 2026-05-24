import {
  SiAndroid,
  SiArgo,
  SiBitbucket,
  SiC,
  SiCircleci,
  SiCplusplus,
  SiDocker,
  SiDotnet,
  SiElixir,
  SiExpress,
  SiFsharp,
  SiFirebase,
  SiFlutter,
  SiGitlab,
  SiGo,
  SiGnubash,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiHaskell,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiKotlin,
  SiJulia,
  SiKubernetes,
  SiLua,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPerl,
  SiPhp,
  SiPostgresql,
  SiPowers,
  SiPython,
  SiPytorch,
  SiR,
  SiReact,
  SiRuby,
  SiRust,
  SiScala,
  SiDart,
  SiSnyk,
  SiSonar,
  SiHelm,
  SiSwift,
  SiTailwindcss,
  SiTerraform,
  SiTensorflow,
  SiTypescript,
  SiCss,
  SiTravisci,
} from "react-icons/si";
import {
  FaAws,
  FaBrain,
  FaCode,
  FaJava,
  FaMicrochip,
  FaMicrosoft,
} from "react-icons/fa6";
import type {
  ExperienceItem,
  NavLink,
  Project,
  SkillGroup,
  StackLogoItem,
  StatItem,
  TechCategory,
  TechItem,
  Testimonial,
} from "@/types";

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const techItems: TechItem[] = [
  { name: "React", icon: SiReact, category: "web", accent: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, category: "web", accent: "#14b8a6" },
  { name: "TypeScript", icon: SiTypescript, category: "web", accent: "#60a5fa" },
  { name: "JavaScript", icon: SiJavascript, category: "web", accent: "#facc15" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "web", accent: "#22d3ee" },
  { name: "HTML5", icon: SiHtml5, category: "web", accent: "#fb923c" },
  { name: "CSS3", icon: SiCss, category: "web", accent: "#3b82f6" },
  { name: "REST APIs", icon: FaCode, category: "web", accent: "#ec4899" },
  { name: "GraphQL", icon: SiGraphql, category: "web", accent: "#f472b6" },
  { name: "Firebase", icon: SiFirebase, category: "web", accent: "#f59e0b" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "web", accent: "#38bdf8" },
  { name: "MongoDB", icon: SiMongodb, category: "web", accent: "#34d399" },
  { name: "iOS (Swift, SwiftUI)", icon: SiSwift, category: "mobile", accent: "#fb7185" },
  {
    name: "Android (Kotlin, Jetpack Compose)",
    icon: SiAndroid,
    category: "mobile",
    accent: "#4ade80",
  },
  { name: "React Native", icon: SiReact, category: "mobile", accent: "#22d3ee" },
  { name: "Flutter", icon: SiFlutter, category: "mobile", accent: "#60a5fa" },
  { name: "Node.js", icon: SiNodedotjs, category: "backend", accent: "#4ade80" },
  { name: "Express", icon: SiExpress, category: "backend", accent: "#cbd5e1" },
  { name: "Python", icon: SiPython, category: "backend", accent: "#eab308" },
  { name: "Docker", icon: SiDocker, category: "backend", accent: "#38bdf8" },
  { name: "Kubernetes", icon: SiKubernetes, category: "backend", accent: "#60a5fa" },
  { name: "AWS", icon: FaAws, category: "backend", accent: "#fbbf24" },
  { name: "Google Cloud", icon: SiGooglecloud, category: "backend", accent: "#f87171" },
  { name: "Azure", icon: FaMicrosoft, category: "backend", accent: "#22d3ee" },
  {
    name: "CI/CD with GitHub Actions",
    icon: SiGithubactions,
    category: "backend",
    accent: "#93c5fd",
  },
  { name: "TensorFlow", icon: SiTensorflow, category: "ai", accent: "#fb923c" },
  { name: "PyTorch", icon: SiPytorch, category: "ai", accent: "#f97316" },
  { name: "OpenAI APIs", icon: SiOpenai, category: "ai", accent: "#86efac" },
  { name: "LLMs", icon: FaBrain, category: "ai", accent: "#22d3ee" },
];

export const categoryLabels: Record<TechCategory, string> = {
  web: "Web Development",
  mobile: "Mobile Development",
  backend: "Backend & DevOps",
  ai: "AI & Machine Learning",
};

export const programmingLanguageItems: StackLogoItem[] = [
  { name: "JavaScript", icon: SiJavascript, accent: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, accent: "#3178c6" },
  { name: "Python", icon: SiPython, accent: "#ffd43b" },
  { name: "Java", icon: FaJava, accent: "#f89820" },
  { name: "C", icon: SiC, accent: "#00599c" },
  { name: "C++", icon: SiCplusplus, accent: "#00599c" },
  { name: "C#", icon: SiDotnet, accent: "#7c3aed" },
  { name: "PHP", icon: SiPhp, accent: "#777bb4" },
  { name: "Ruby", icon: SiRuby, accent: "#cc342d" },
  { name: "Go", icon: SiGo, accent: "#00add8" },
  { name: "Rust", icon: SiRust, accent: "#dea584" },
  { name: "Kotlin", icon: SiKotlin, accent: "#a97bff" },
  { name: "Swift", icon: SiSwift, accent: "#fa7343" },
  { name: "Dart", icon: SiDart, accent: "#0175c2" },
  { name: "R", icon: SiR, accent: "#276dc3" },
  { name: "Scala", icon: SiScala, accent: "#dc322f" },
  { name: "Perl", icon: SiPerl, accent: "#39457e" },
  { name: "Lua", icon: SiLua, accent: "#2c2d72" },
  { name: "SQL", icon: SiPostgresql, accent: "#336791" },
  { name: "Bash", icon: SiGnubash, accent: "#89e051" },
  { name: "PowerShell", icon: SiPowers, accent: "#5391fe" },
  { name: "Objective-C", icon: FaCode, accent: "#e5e7eb" },
  { name: "Elixir", icon: SiElixir, accent: "#4b275f" },
  { name: "Haskell", icon: SiHaskell, accent: "#5e5086" },
  { name: "F#", icon: SiFsharp, accent: "#378bba" },
  { name: "Julia", icon: SiJulia, accent: "#9558b2" },
  { name: "Assembly", icon: FaMicrochip, accent: "#eab308" },
  { name: "Visual Basic .NET", icon: SiDotnet, accent: "#7c3aed" },
  { name: "Groovy", icon: FaCode, accent: "#67d3b6" },
];

export const pipelineItems: StackLogoItem[] = [
  { name: "GitHub Actions", icon: SiGithubactions, accent: "#2088ff" },
  { name: "GitLab CI/CD", icon: SiGitlab, accent: "#fc6d26" },
  { name: "Bitbucket Pipelines", icon: SiBitbucket, accent: "#0052cc" },
  { name: "Jenkins", icon: SiJenkins, accent: "#d24939" },
  { name: "Azure DevOps Pipelines", icon: FaMicrosoft, accent: "#00a4ef" },
  { name: "CircleCI", icon: SiCircleci, accent: "#ffffff" },
  { name: "Travis CI", icon: SiTravisci, accent: "#3eaaaf" },
  { name: "Argo CD", icon: SiArgo, accent: "#ef7b4d" },
  { name: "Terraform", icon: SiTerraform, accent: "#844fba" },
  { name: "Docker Buildx", icon: SiDocker, accent: "#2496ed" },
  { name: "Kubernetes Deployments", icon: SiKubernetes, accent: "#326ce5" },
  { name: "Helm", icon: SiHelm, accent: "#0f1689" },
  { name: "SonarQube", icon: SiSonar, accent: "#4e9bcd" },
  { name: "Snyk", icon: SiSnyk, accent: "#4c4a73" },
  { name: "AWS CodePipeline", icon: FaAws, accent: "#ff9900" },
];

export const expertiseAreas: string[] = [
  "Web Development",
  "Programming Languages",
  "Pipelines & CI/CD",
  "Cloud Deployments",
  "Mobile Development",
  "AI Integration",
];

export const stats: StatItem[] = [
  { label: "Years Building", value: 4, suffix: "+" },
  { label: "Projects Delivered", value: 89, suffix: "+" },
  { label: "Cloud Deployments", value: 215, suffix: "+" },
  { label: "Client Satisfaction", value: 90, suffix: "%" },
];

export const projects: Project[] = [
  {
    id: "orion-commerce",
    title: "Orion Commerce Suite",
    summary: "Headless commerce platform with real-time inventory and predictive search.",
    description:
      "Built with Next.js, GraphQL, and PostgreSQL. Added event-driven inventory sync and personalized product ranking using embeddings.",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
    category: "web",
    url: "https://example.com/orion",
    repo: "https://github.com/example/orion",
  },
  {
    id: "pulse-mobile",
    title: "Pulse Health Mobile",
    summary: "Cross-platform wellness app with AI-powered coaching flows.",
    description:
      "Implemented in React Native with secure Firebase auth and on-device health metrics. Added adaptive recommendations with OpenAI APIs.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Firebase", "OpenAI", "TypeScript"],
    category: "mobile",
    url: "https://example.com/pulse",
    repo: "https://github.com/example/pulse",
  },
  {
    id: "ios-android-app",
    title: "iOS and Android App",
    summary: "Cross-platform mobile experience delivered as dedicated iOS and Android applications.",
    description:
      "Built and maintained mobile products for both platforms using Swift/SwiftUI on iOS and Kotlin/Jetpack Compose on Android, with shared API integrations, push notifications, and production-ready performance.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    tags: ["iOS", "Android", "SwiftUI", "Jetpack Compose"],
    category: "mobile",
    url: "https://example.com/ios-android-app",
    repo: "https://github.com/example/ios-android-app",
  },
  {
    id: "atlas-cloud",
    title: "Atlas Cloud Platform",
    summary: "Kubernetes control plane and CI/CD automation for multi-cloud teams.",
    description:
      "Engineered GitHub Actions pipelines, Terraform workflows, and observability dashboards across AWS, Azure, and GCP.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    tags: ["Kubernetes", "AWS", "GitHub Actions", "Node.js"],
    category: "backend",
    url: "https://example.com/atlas",
    repo: "https://github.com/example/atlas",
  },
  {
    id: "accessively-monitoring-system",
    title: "Accessively Monitoring System",
    summary: "Real-time infrastructure and application monitoring with actionable alerting.",
    description:
      "Built a full monitoring stack with metric collection, log aggregation, uptime checks, and incident alerts. Added role-based dashboards, service health scoring, and escalation workflows for faster issue response.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    category: "backend",
    url: "https://example.com/accessively-monitoring-system",
    repo: "https://github.com/example/accessively-monitoring-system",
  },
  {
    id: "nova-vision",
    title: "Web Development",
    summary: "Modern responsive web platform with fast performance, clean UI, and scalable architecture.",
    description:
      "Built using Next.js, TypeScript, and Tailwind CSS with reusable components, smooth animations, API integrations, and SEO best practices for production deployment.",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "TensorFlow", "PyTorch", "Next.js"],
    category: "ai",
    url: "https://example.com/nova",
    repo: "https://github.com/example/nova",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    skills: [
      { label: "React + Next.js", level: 95 },
      { label: "TypeScript Architecture", level: 92 },
      { label: "Design Systems", level: 88 },
      { label: "Accessibility", level: 90 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Delivery",
    skills: [
      { label: "React Native", level: 89 },
      { label: "SwiftUI", level: 80 },
      { label: "Kotlin/Compose", level: 78 },
      { label: "Flutter", level: 74 },
    ],
  },
  {
    id: "platform",
    title: "Platform & DevOps",
    skills: [
      { label: "Node.js / Express", level: 90 },
      { label: "Docker / Kubernetes", level: 86 },
      { label: "Cloud Architecture", level: 84 },
      { label: "CI/CD", level: 91 },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2025 - Present",
    role: "Principal Full-Stack Engineer",
    company: "Northstar Digital",
    description:
      "Leading product architecture across web, mobile, and AI features for enterprise clients.",
  },
  {
    id: "exp-2",
    period: "2023 - 2025",
    role: "Senior Mobile Engineer",
    company: "Aero Labs",
    description:
      "Built cross-platform products in React Native and Flutter with secure backend integrations.",
  },
  {
    id: "exp-3",
    period: "2022 - 2023",
    role: "Cloud Backend Engineer",
    company: "Cumulus Systems",
    description:
      "Developed event-driven Node.js services deployed on Kubernetes with robust CI/CD pipelines.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Christian Ninbola",
    role: "CTO",
    company: "Helio Commerce",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "Their work transformed our delivery speed. We shipped a modern platform with exceptional reliability and UX polish.",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Joshua Servnada",
    role: "VP Product",
    company: "PulseCare",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "A rare blend of design taste and engineering depth. The mobile experience and backend quality exceeded expectations.",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Jake Manila",
    role: "Founder",
    company: "Nova AI Studio",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    quote:
      "From model APIs to cloud deployment and frontend storytelling, every part was delivered with precision.",
    rating: 5,
  },
];
