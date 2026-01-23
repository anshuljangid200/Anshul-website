import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Building2, GraduationCap, Rocket, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Senior Full-Stack Engineer",
    company: "TechCorp AI",
    period: "2023 - Present",
    description:
      "Leading development of AI-powered enterprise solutions. Architected microservices handling 1M+ daily requests.",
    impact: ["40% performance improvement", "Team of 8 engineers", "$2M ARR product"],
    icon: Building2,
  },
  {
    id: 2,
    type: "work",
    title: "Software Engineer",
    company: "StartupXYZ",
    period: "2021 - 2023",
    description:
      "Full-stack development for fintech platform. Built real-time trading systems and payment integrations.",
    impact: ["50K+ users onboarded", "99.99% uptime achieved", "SOC2 compliant"],
    icon: Rocket,
  },
  {
    id: 3,
    type: "research",
    title: "ML Research Assistant",
    company: "University Research Lab",
    period: "2020 - 2021",
    description:
      "Computer vision research for autonomous systems. Published papers on object detection optimization.",
    impact: ["2 papers published", "15% accuracy improvement", "Patent pending"],
    icon: GraduationCap,
  },
  {
    id: 4,
    type: "work",
    title: "Backend Developer Intern",
    company: "Enterprise Solutions Inc",
    period: "2019 - 2020",
    description:
      "API development and database optimization for legacy system modernization project.",
    impact: ["60% query optimization", "REST to GraphQL migration", "CI/CD implementation"],
    icon: Building2,
  },
];

const certifications = [
  { name: "AWS Solutions Architect", issuer: "Amazon" },
  { name: "Google Cloud Professional", issuer: "Google" },
  { name: "Kubernetes Administrator", issuer: "CNCF" },
];

export const ExperienceSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, hsl(187 85% 53% / 0.05), transparent 40%)",
        }}
      />

      <div className="container px-4 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-sm text-primary mb-3">
            // career.timeline
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Engineering Journey
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            From research labs to production systems — building at scale.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-border" />

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <exp.icon className="w-4 h-4 text-primary" />
                  </div>

                  {/* Content card */}
                  <div className="group rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(187_85%_53%/0.1)] transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-primary font-medium">
                            {exp.company}
                          </span>
                          <span className="text-foreground-subtle">•</span>
                          <span className="font-mono text-foreground-subtle">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-mono",
                          exp.type === "research"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-terminal/20 text-terminal"
                        )}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Impact metrics */}
                    <div className="flex flex-wrap gap-2">
                      {exp.impact.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 rounded-md bg-muted text-xs font-mono text-foreground-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 p-6 rounded-xl border border-border bg-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{cert.name}</span>
                  <span className="text-xs text-foreground-subtle">
                    — {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
