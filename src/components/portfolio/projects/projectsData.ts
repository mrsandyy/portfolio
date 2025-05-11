
export const projectsData = [
  {
    id: 1,
    title: "B2B E-commerce Platform",
    description: "Scalable commerce APIs and admin, built for high transaction volume.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Stripe"],
    demoLink: "#",
    repoLink: "#",
    featured: true,
    caseStudy: {
      headline: "Architected multi-tenant secure backend using Node.js/Express & SQL for financial-grade reliability.",
      challenges: "Handled scaling issues and real-time inventory sync under heavy traffic and complex permissions.",
      backendHighlights: [
        "Microservice architecture for order & payment workflow with secure role-based access.",
        "Integrated Stripe for PCI-compliant payments with fraud detection.",
        "Real-time product & stock sync using PostgreSQL logical replication.",
        "CI/CD: Automated tests, Dockerized deployment pipeline.",
      ],
      mainStack: ["Node.js", "TypeScript", "PostgreSQL", "Stripe"],
    },
  },
  {
    id: 2,
    title: "Team Collaboration Suite",
    description: "Backend powering real-time Kanban, auth, and multi-user collaboration.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Node.js", "TypeScript", "WebSockets", "Redis"],
    demoLink: "#",
    repoLink: "#",
    featured: true,
    caseStudy: {
      headline: "API and WebSocket server powering live updates for distributed teams.",
      challenges: "Maintained low-latency sync across 1000s of users with strong authentication and fast Redis caching.",
      backendHighlights: [
        "Designed real-time event push & reliable state sync with Redis pub/sub.",
        "OAuth/JWT-based authentication flow with refresh token rotation.",
        "Automated scaling & zero-downtime deployments using CI workflows.",
      ],
      mainStack: ["Node.js", "TypeScript", "WebSockets", "Redis"],
    },
  },
  {
    id: 3,
    title: "Blog Platform (Monorepo)",
    description: "Markdown-driven content, API REST + GraphQL, user accounts, and comments.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
    demoLink: "#",
    repoLink: "#",
    featured: true,
    caseStudy: {
      headline: "Unified backend for content management and user engagement.",
      challenges: "Built secure comment moderation pipeline and seamless integration between REST and GraphQL APIs.",
      backendHighlights: [
        "Authentication with session & JWT logistic.",
        "Admin dashboard with advanced querying (Aggregates, Metrics).",
        "Docker orchestration for local dev/test.",
      ],
      mainStack: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
    },
  },
];
