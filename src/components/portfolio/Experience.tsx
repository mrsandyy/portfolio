
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    id: 1,
    role: "Full Stack Developer & Project Lead",
    company: "Freelance / Inorc Agency",
    duration: "2022 - Present",
    description: "Led end-to-end development of web applications for clients across travel, education, fitness, and SaaS domains. Managed deployments, backend integrations, and frontend architecture.",
    achievements: [
      "Built and deployed 10+ full-stack applications using Next.js, Node.js, PostgreSQL, and Docker",
      "Created an AI-powered pricing assistant and dynamic CMS for Inorc agency website",
      "Delivered SEO-optimized, mobile-first websites with performance scores >90 on Lighthouse"
    ]
  },
  {
    id: 2,
    role: "Software Developer (College & Open Source)",
    company: "SS Jain Subodh PG College / Self-initiated",
    duration: "2021 - Present",
    description: "Contributed to academic and departmental tools including Subodh Notifier and StudyBits. Focused on solving real-world problems using modern tech stacks.",
    achievements: [
      "Built Subodh Notifier with cron jobs and Dockerized backend to automate student alerts",
      "Developed StudyBits – a Markdown-powered notes platform tailored to BCA syllabus",
      "Improved internal tooling by creating automation scripts for college submissions"
    ]
  },
  {
    id: 3,
    role: "Automation & AI Enthusiast",
    company: "Independent Projects",
    duration: "2021 - Present",
    description: "Explored AI, web automation, and computer vision through hands-on personal projects aimed at practical productivity and problem-solving.",
    achievements: [
      "Built CareVision – an AI camera system to help elderly track personal items & reminders",
      "Developed web automation bots for Instagram, Snapchat, and Spotify using Python",
      "Created InspireBot – a Discord bot that sends motivational quotes using Node.js"
    ]
  }
];

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "National Institute of Technology, Raipur",
    duration: "2025 - 2028",
    description: "Pursuing MCA from NIT RR"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SS Jain Subodh PG College, Jaipur",
    duration: "2022 - 2025",
    description: "Focused on software development, cybersecurity, computer graphics, and web technologies. Built real-world academic tools like Subodh Notifier & StudyBits while exploring automation, SaaS, and AI-driven solutions."
  },
  {
    id: 3,
    degree: "Higher Secondary Education",
    institution: "Affiliated Institution under Rajasthan Board",
    duration: "2019 - 2021",
    description: "Studied foundational computer science, mathematics, and logic building. Developed an early interest in programming and automation through personal projects."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-600 font-bold mb-2">Experience</h2>
          <h3 className="text-3xl font-bold font-heading mb-3">Work & Education</h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-portfolio-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-portfolio-600" />
              </div>
              <h3 className="text-xl font-bold font-heading">Work Experience</h3>
            </div>
            <div className="relative pl-8 border-l-2 border-muted">
              {workExperience.map((job, index) => (
                <div
                  key={job.id}
                  className={"relative mb-12 last:mb-0 animate-fade-in"}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-portfolio-600 border-4 border-background"></div>
                  <Card className="relative hover:border-portfolio-300 transition-colors duration-300">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-1">
                        <h4 className="text-lg font-semibold text-foreground">{job.role}</h4>
                        <span className="text-xs font-bold px-2 py-1 bg-portfolio-100 text-portfolio-800 rounded-full inline-block w-auto">{job.duration}</span>
                      </div>
                      <div className="text-xs text-portfolio-600 font-medium mb-1">{job.company}</div>
                      {/* Only show achievements, no paragraphs */}
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-portfolio-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-portfolio-600" />
              </div>
              <h3 className="text-xl font-bold font-heading">Education</h3>
            </div>
            <div className="relative pl-8 border-l-2 border-muted">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative mb-12 last:mb-0 animate-fade-in"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-portfolio-600 border-4 border-background"></div>
                  <Card className="relative hover:border-portfolio-300 transition-colors duration-300">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-1">
                        <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                        <span className="text-xs font-bold px-2 py-1 bg-portfolio-100 text-portfolio-800 rounded-full inline-block w-auto">{edu.duration}</span>
                      </div>
                      <div className="text-xs text-portfolio-600 font-medium mb-1">{edu.institution}</div>
                      {/* Always bullet points */}
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                        <li>{edu.description}</li>
                      </ul>
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
