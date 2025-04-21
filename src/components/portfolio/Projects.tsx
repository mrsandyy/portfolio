import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    repoLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Redux", "Firebase", "TypeScript"],
    demoLink: "#",
    repoLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, comment system, and user authentication.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Application",
    description: "A weather forecast application that provides real-time weather data and 7-day forecasts.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    tags: ["React", "OpenWeather API", "ChartJS"],
    demoLink: "#",
    repoLink: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Social Network",
    description: "A social media platform with real-time chat, post sharing, and user profiles.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    demoLink: "#",
    repoLink: "#",
    featured: false,
  },
];

const categories = ["All", "React", "Node.js", "TypeScript", "MongoDB"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeCategory));

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-600 font-medium mb-2">
            Case Studies
          </h2>
          <h3 className="text-3xl font-bold font-heading mb-4">
            Impactful Projects & Team Roles
          </h3>
          <p className="text-muted-foreground">
            These select projects demonstrate how I contributed as a developer, teammate, and technical problem solver. See my GitHub for more!
          </p>
        </div>
        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
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
              className="group bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-portfolio-300 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
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
                <h4 className="text-xl font-semibold mb-2 group-hover:text-portfolio-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-2 text-sm">
                  <span className="font-bold">My Role: </span>
                  {project.featured
                    ? "Lead Developer, Code Reviewer, Mentor"
                    : "Contributor, Full Stack Developer"}
                </p>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex gap-3 mt-auto pt-4">
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
      </div>
    </section>
  );
}
