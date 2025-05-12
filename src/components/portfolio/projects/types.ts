export interface CaseStudy {
  headline: string;
  challenges: string;
  backendHighlights: string[];
  mainStack: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
  featured: boolean;
  caseStudy: CaseStudy;
}

export type ProjectCategory = "All" | "Node.js" | "TypeScript" | "Backend";

export interface ProjectsConfig {
  categories: ProjectCategory[];
  initialVisibleCount: number;
  loadMoreCount: number;
} 