
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Github, ExternalLink, Database, Server, Cpu } from "lucide-react";

interface CaseStudyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink: string;
    repoLink: string;
    caseStudy: {
      headline: string;
      challenges: string;
      backendHighlights: string[];
      mainStack: string[];
    },
  } | null;
}

export function CaseStudyModal({ open, onOpenChange, project }: CaseStudyModalProps) {
  if (!project) return null;
  const { title, description, image, tags, demoLink, repoLink, caseStudy } = project;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl md:max-w-2xl p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 min-w-[250px] p-6 bg-portfolio-100 flex flex-col justify-center">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-portfolio-300 text-portfolio-800 text-xs px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              <a href={demoLink} target="_blank" className="flex gap-1 items-center text-portfolio-700 hover:text-portfolio-900 font-semibold text-sm">
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
              <a href={repoLink} target="_blank" className="flex gap-1 items-center text-portfolio-700 hover:text-portfolio-900 font-semibold text-sm">
                <Github className="h-4 w-4" /> Code
              </a>
            </div>
          </div>
          <div className="flex-[2] px-7 pt-8 pb-7">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-2">{title}</DialogTitle>
              <DialogDescription className="mb-3 text-portfolio-800">{caseStudy.headline}</DialogDescription>
            </DialogHeader>
            <div className="mb-4">
              <p className="mb-2 font-medium text-portfolio-800">{description}</p>
              <div className="mb-2">
                <span className="inline-block font-bold text-portfolio-700 mb-1">Main Stack:</span>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.mainStack.map(stack => (
                    <span key={stack} className="flex items-center gap-1 bg-portfolio-200 px-2 py-1 rounded text-xs text-portfolio-900 font-semibold">
                      {stack === "Node.js" && <Server className="h-4 w-4" />}
                      {stack === "TypeScript" && <Cpu className="h-4 w-4" />}
                      {stack === "PostgreSQL" && <Database className="h-4 w-4" />}
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-2">
              <span className="font-bold text-portfolio-700 block mb-1">Challenges:</span>
              <div className="text-sm text-portfolio-800 mb-2">{caseStudy.challenges}</div>
            </div>
            <div>
              <span className="font-bold text-portfolio-700 block mb-1">Back-End Highlights:</span>
              <ul className="list-disc pl-5 space-y-1 text-sm text-portfolio-800">
                {caseStudy.backendHighlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
