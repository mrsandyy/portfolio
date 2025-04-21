
import { Badge } from "@/components/ui/badge";
import { Code, Database, Layout, User } from "lucide-react";

const skills = [
  "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS",
  "Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "Next.js",
  "Git", "CI/CD", "Jest", "Team Collaboration", "Mentorship", "Agile/Scrum"
];

const services = [
  {
    icon: <User className="h-8 w-8 text-portfolio-600" />,
    title: "Team Player & Collaborator",
    description: "Effective communicator and supportive team member with proven experience working in cross-functional, international teams."
  },
  {
    icon: <Code className="h-8 w-8 text-portfolio-600" />,
    title: "Frontend Engineering",
    description: "Focused on maintainable, scalable user interfaces. Write strong, clean, and testable code leveraging modern frameworks."
  },
  {
    icon: <Database className="h-8 w-8 text-portfolio-600" />,
    title: "Backend & API Integration",
    description: "Skilled in building robust APIs and integrating diverse backend technologies in collaborative projects."
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar or Photo */}
          <div className="aspect-square max-w-md mx-auto md:mx-0 bg-gradient-to-br from-portfolio-100 to-portfolio-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
          </div>
          {/* About content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-portfolio-600 font-medium mb-2">About Me</h2>
              <h3 className="text-3xl font-bold font-heading mb-4">
                I build usable, reliable, and impactful products in strong teams
              </h3>
              <p className="text-muted-foreground mb-6">
                With 5+ years crafting websites and apps, I thrive in collaborative, agile environments. My focus is on consistent delivery, readable code, and supporting my team. I love learning from others, mentoring juniors, and celebrating success together.
              </p>
            </div>
            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-background shadow-sm border border-border rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-portfolio-600">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-background shadow-sm border border-border rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-portfolio-600">30+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="bg-background shadow-sm border border-border rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-portfolio-600">8</p>
                <p className="text-sm text-muted-foreground">Tech Stacks</p>
              </div>
              <div className="bg-background shadow-sm border border-border rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-portfolio-600">7+</p>
                <p className="text-sm text-muted-foreground">Team Projects</p>
              </div>
            </div>
            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Skills & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-portfolio-100 text-portfolio-800 hover:bg-portfolio-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* What I Offer */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Strengths for Your Team</h2>
            <p className="text-muted-foreground">
              My focus: reliable delivery, rapid learning, and supporting teammates to drive high-quality outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-portfolio-300"
              >
                <div className="mb-4 p-3 bg-portfolio-50 inline-block rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
