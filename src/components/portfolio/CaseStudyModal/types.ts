
export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
  featured: boolean;
  caseStudy: {
    headline: string;
    challenges: string;
    backendHighlights: string[];
    mainStack: string[];
  };
}
