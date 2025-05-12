import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CaseStudyModal } from "./CaseStudyModal";
import { ProjectCard } from "./projects/ProjectCard";
import { projectsData } from "./projects/projectsData";
import { useBreakpoint } from "@/hooks/use-mobile";
import { Project, ProjectCategory, ProjectsConfig } from "./projects/types";

const projectsConfig: ProjectsConfig = {
  categories: ["All", "Node.js", "TypeScript", "Backend"],
  initialVisibleCount: 3,
  loadMoreCount: 3,
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [visibleProjects, setVisibleProjects] = useState(projectsConfig.initialVisibleCount);
  const { isMobile } = useBreakpoint();

  // Modal state
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => 
          project.tags.includes(activeCategory) || 
          (activeCategory === "Backend" && project.tags.some(tag => 
            ["Node.js", "PostgreSQL", "Redis", "Docker"].includes(tag)
          ))
        );

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
          {projectsConfig.categories.map((category) => (
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
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setModalProject(project)} 
              isMobile={isMobile}
            />
          ))}
        </div>
        
        {filteredProjects.length > visibleProjects && (
          <div className="mt-10 text-center">
            <Button
              onClick={() => setVisibleProjects((prev) => prev + projectsConfig.loadMoreCount)}
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
