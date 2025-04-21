import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    description: "Led cross-functional teams to deliver robust React applications for SaaS clients. Owned component design, best practices, and mentored new engineers.",
    achievements: [
      "Reduced load times 40% via code splitting/lazy loading",
      "Introduced developer onboarding guides for faster ramp-up",
      "Facilitated bi-weekly code reviews and demo sessions"
    ]
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Digital Solutions Co.",
    duration: "2018 - 2021",
    description: "Member of a remote scrum team building scalable client apps. Focused on collaborating with product/design for clean UX and reusable code.",
    achievements: [
      "Launched 15+ web apps, maintained above 95% satisfaction",
      "Improved team delivery via automated testing (Jest)",
      "Mentored 2 junior devs into full-time engineers"
    ]
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Labs",
    duration: "2016 - 2018",
    description: "Assisted with bug fixes and delivered features for MVP launches. Learned best practices from senior teammates and contributed actively in sprints.",
    achievements: [
      "Built reusable UI library components for new products",
      "Documented and improved internal dev wiki",
      "Consistently delivered sprint stories on time"
    ]
  }
];

const education = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "University of Technology",
    duration: "2014 - 2016",
    description: "Specialized in web technologies, group projects, and agile methodologies. Graduated with honors."
  },
  {
    id: 2,
    degree: "BSc Computer Science",
    institution: "State University",
    duration: "2010 - 2014",
    description: "Learned fundamentals, contributed to hackathons and team software competitions."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-600 font-medium mb-2">Career Path</h2>
          <h3 className="text-3xl font-bold font-heading mb-4">
            Professional Experience & Education
          </h3>
          <p className="text-muted-foreground">
            My background shows growth from supporting roles to senior leadership in engineering teams, always aiming to deliver and collaborate.
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
                          <h6 className="text-sm font-semibold mb-2">Team Impact & Achievements:</h6>
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
