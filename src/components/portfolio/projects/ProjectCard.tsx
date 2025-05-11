
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink: string;
    repoLink: string;
    featured: boolean;
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { title, description, image, tags, demoLink, repoLink } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-portfolio-300 cursor-pointer flex flex-col h-full"
      tabIndex={0}
      aria-label={`Open case study for ${title}`}
      onClick={onClick}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-muted text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-xl font-extrabold mb-2 group-hover:text-portfolio-600 transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground mb-2 text-sm font-bold">
          Backend Role: Lead Architect & API Developer
        </p>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="flex gap-3 mt-auto pt-3">
          <a
            href={demoLink}
            className="flex items-center gap-1 text-sm font-medium text-portfolio-600 hover:text-portfolio-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" /> Demo
          </a>
          <a
            href={repoLink}
            className="flex items-center gap-1 text-sm font-medium text-portfolio-600 hover:text-portfolio-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" /> Code
          </a>
          <button
            className="ml-auto bg-portfolio-700 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow hover:bg-portfolio-900 transition"
            onClick={e => { e.stopPropagation(); onClick(); }}
          >
            In-Depth Case Study
          </button>
        </div>
      </div>
    </motion.div>
  );
}
