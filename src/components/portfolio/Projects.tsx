import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { CaseStudyModal } from "./CaseStudyModal";

// Add backend-focused case study data
const projects = [
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
  // ...other projects can be added with simpler modal content or summary cards
];

const categories = ["All", "Node.js", "TypeScript", "Backend"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Modal state
  const [modalProject, setModalProject] = useState<null | typeof projects[0]>(null);

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeCategory) || (activeCategory === "Backend"));

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs uppercase tracking-wider text-portfolio-600 font-bold mb-1">
            In-Depth Case Studies
          </h2>
          <h3 className="text-3xl font-black mb-4">
            Modern Back-End Projects
          </h3>
          <p className="text-md text-muted-foreground mb-0">
            Click for full technical breakdowns of backend architecture, data modeling, API auth, and impact.
          </p>
        </div>
        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={cn(
                activeCategory === category
                  ? "bg-portfolio-600 hover:bg-portfolio-700"
                  : "hover:bg-portfolio-100",
                "transition-all duration-300"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-portfolio-300 cursor-pointer flex flex-col h-full"
              tabIndex={0}
              aria-label={`Open case study for ${project.title}`}
              onClick={() => setModalProject(project)}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-extrabold mb-2 group-hover:text-portfolio-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-2 text-sm font-bold">
                  Backend Role: Lead Architect & API Developer
                </p>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex gap-3 mt-auto pt-3">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-1 text-sm font-medium text-portfolio-600 hover:text-portfolio-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                  <a
                    href={project.repoLink}
                    className="flex items-center gap-1 text-sm font-medium text-portfolio-600 hover:text-portfolio-700 transition-colors"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <button
                    className="ml-auto bg-portfolio-700 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow hover:bg-portfolio-900 transition"
                    onClick={e => { e.stopPropagation(); setModalProject(project); }}
                  >
                    In-Depth Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredProjects.length > visibleProjects && (
          <div className="mt-10 text-center">
            <Button
              onClick={() => setVisibleProjects((prev) => prev + 3)}
              variant="outline"
              className="border-portfolio-600 text-portfolio-600 hover:bg-portfolio-50"
            >
              Load More Projects
            </Button>
          </div>
        )}
        {/* Case Study Modal */}
        <CaseStudyModal
          open={!!modalProject}
          onOpenChange={open => setModalProject(open ? modalProject : null)}
          project={modalProject}
        />
      </div>
    </section>
  );
}
