
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Layout, Database } from "lucide-react";

const skills = [
  "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", 
  "Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "Next.js", 
  "Git", "CI/CD", "Jest", "React Testing Library"
];

const services = [
  { 
    icon: <Code className="h-8 w-8 text-portfolio-600" />,
    title: "Frontend Development",
    description: "Building responsive, accessible and performant user interfaces with modern frameworks."
  },
  { 
    icon: <Database className="h-8 w-8 text-portfolio-600" />,
    title: "Backend Development",
    description: "Creating robust APIs and server-side applications with scalable architecture."
  },
  { 
    icon: <Layout className="h-8 w-8 text-portfolio-600" />,
    title: "UI/UX Design",
    description: "Designing intuitive user experiences and visually appealing interfaces."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image or avatar */}
          <div className="aspect-square max-w-md mx-auto md:mx-0 bg-gradient-to-br from-portfolio-100 to-portfolio-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
          </div>

          {/* About content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-portfolio-600 font-medium mb-2">About Me</h2>
              <h3 className="text-3xl font-bold font-heading mb-4">
                I create digital experiences that are both functional and beautiful
              </h3>
              <p className="text-muted-foreground mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                responsive and user-friendly applications. My passion lies in solving complex 
                problems with clean, efficient code and delivering exceptional user experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-background shadow-sm border border-border rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-portfolio-600">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-background shadow-sm border border-border rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-portfolio-600">50+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="bg-background shadow-sm border border-border rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-portfolio-600">20+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-background shadow-sm border border-border rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-portfolio-600">10+</p>
                <p className="text-sm text-muted-foreground">Awards</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Skills & Technologies</h4>
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

        {/* Services */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">What I Do</h2>
            <p className="text-muted-foreground">
              I offer a range of services to help businesses and individuals establish their online presence
              with modern, responsive, and user-friendly websites and applications.
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
