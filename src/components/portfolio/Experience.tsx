
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    description: "Lead the frontend development team in building responsive web applications. Implemented modern React practices, improved performance, and mentored junior developers.",
    achievements: [
      "Reduced page load time by 40% through code splitting and lazy loading",
      "Implemented a component library that increased development speed by 30%",
      "Led the migration from class components to functional components with hooks"
    ]
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Digital Solutions Co.",
    duration: "2018 - 2021",
    description: "Developed and maintained multiple client websites and web applications. Collaborated with designers to implement user interfaces and ensure responsive design.",
    achievements: [
      "Built and deployed over 15 client websites with modern technologies",
      "Integrated payment gateways and e-commerce functionality",
      "Optimized database queries resulting in 50% faster data retrieval"
    ]
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Labs",
    duration: "2016 - 2018",
    description: "Assisted in the development of web applications and participated in the full software development lifecycle.",
    achievements: [
      "Contributed to the development of the company's flagship product",
      "Created reusable UI components for the internal design system",
      "Participated in code reviews and implemented feedback"
    ]
  }
];

const education = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "University of Technology",
    duration: "2014 - 2016",
    description: "Specialized in web technologies and software engineering. Graduated with honors."
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    duration: "2010 - 2014",
    description: "Focused on programming fundamentals and software development. Participated in multiple hackathons and coding competitions."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-600 font-medium mb-2">My Journey</h2>
          <h3 className="text-3xl font-bold font-heading mb-4">
            Work Experience & Education
          </h3>
          <p className="text-muted-foreground">
            My professional journey combines industry experience with academic excellence, 
            equipping me with a well-rounded skill set to tackle complex challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-portfolio-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-portfolio-600" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Work Experience</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-muted">
              {workExperience.map((job, index) => (
                <div 
                  key={job.id}
                  className={cn(
                    "relative mb-12 last:mb-0 transition-all duration-500 hover:-translate-y-1",
                    `animate-fade-in [animation-delay:${index * 200}ms]`
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-portfolio-600 border-4 border-background"></div>
                  
                  <Card className="relative hover:border-portfolio-300 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                        <h4 className="text-xl font-semibold text-foreground">{job.role}</h4>
                        <span className="text-sm font-medium px-3 py-1 bg-portfolio-100 text-portfolio-800 rounded-full">
                          {job.duration}
                        </span>
                      </div>
                      <h5 className="text-portfolio-600 font-medium mb-3">{job.company}</h5>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      {/* Key achievements */}
                      {job.achievements && (
                        <div className="mt-3">
                          <h6 className="text-sm font-semibold mb-2">Key Achievements:</h6>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-portfolio-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-portfolio-600" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-muted">
              {education.map((edu, index) => (
                <div 
                  key={edu.id}
                  className={cn(
                    "relative mb-12 last:mb-0 transition-all duration-500 hover:-translate-y-1",
                    `animate-fade-in [animation-delay:${(workExperience.length + index) * 200}ms]`
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-portfolio-600 border-4 border-background"></div>
                  
                  <Card className="relative hover:border-portfolio-300 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                        <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                        <span className="text-sm font-medium px-3 py-1 bg-portfolio-100 text-portfolio-800 rounded-full">
                          {edu.duration}
                        </span>
                      </div>
                      <h5 className="text-portfolio-600 font-medium mb-3">{edu.institution}</h5>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
