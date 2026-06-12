import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Globe, Laptop, Smartphone, Rocket, Code2 } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

const projects = [
  {
    id: 0,
    title: "OnCanvas | Interior Decor",
    description:
      "Co-founded and lead engineering for a D2C e-commerce platform digitizing precision CNC & laser-cut temples and premium interior decor for national and international markets.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Vercel"],
    category: "Personal Startup",
    link: "https://oncanvas.in",
    image: "/projects/oncanvas.png",
    color: "accent",
    status: "CTO / Founder",
    isStartup: true,
  },
  {
    id: 1,
    title: "IITGN Career Development Portal",
    description:
      "Production portal for 500+ IIT Gandhinagar users featuring secure OAuth2.0 authentication, scalable REST APIs, and a 95+ Lighthouse score via SSR and lazy loading.",
    tech: ["TypeScript", "React.js", "Node.js", "PostgreSQL", "AWS"],
    category: "Education / Portal",
    link: "https://www.iitgncdf.com/",
    image: "/projects/iitgn.png",
    color: "primary",
    status: "Live",
  },
  {
    id: 2,
    title: "Stealth Health | AI Analytics Dashboard",
    description:
      "Real-time health analytics dashboard visualizing 10+ health metrics at 60fps via WebSocket pipelines, integrated with Azure OpenAI for intelligent medical insights.",
    tech: ["TypeScript", "React.js", "WebSockets", "Azure OpenAI", "Framer Motion"],
    category: "HealthTech / AI",
    link: "https://sealth-psi.vercel.app/#/",
    image: "/projects/sealth.png",
    color: "accent",
    status: "Live",
  },
  {
    id: 3,
    title: "Micrylis Biotech | Enterprise Website",
    description:
      "End-to-end enterprise platform featuring modern design, SEO optimizations, and secure multi-cloud deployment (Vercel/AWS) for a biotech startup.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "AWS", "Vercel"],
    category: "BioTech / Web",
    link: "https://nextgenbiolab.vercel.app/",
    image: "/projects/nextgen.png",
    color: "terminal",
    status: "Live",
  },
];

const colorClasses = {
  primary: {
    border: "border-primary/20",
    text: "text-primary",
    glow: "group-hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.15)]",
  },
  terminal: {
    border: "border-terminal/20",
    text: "text-terminal",
    glow: "group-hover:shadow-[0_0_40px_rgba(var(--terminal-rgb),0.15)]",
  },
  accent: {
    border: "border-accent/20",
    text: "text-accent",
    glow: "group-hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.15)]",
  },
  secondary: {
    border: "border-secondary/20",
    text: "text-secondary",
    glow: "group-hover:shadow-[0_0_40px_rgba(var(--secondary-rgb),0.15)]",
  },
};

export const ProjectsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-4">
            <Rocket className="w-3 h-3" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Production Ready Systems
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            High-performance applications built with modern tech stacks,
            focused on scalability, security, and exceptional user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={cn(
                  "group relative flex flex-col rounded-2xl border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500",
                  colors.border,
                  colors.glow
                )}
              >
                {/* Browser-like Mockup Container */}
                <div className="relative aspect-video overflow-hidden border-b border-border bg-muted/30">
                  {/* Browser Header */}
                  <div className="absolute top-0 inset-x-0 h-8 bg-background/80 backdrop-blur-md flex items-center justify-between px-4 z-10 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-muted text-[10px] font-mono text-foreground-subtle flex items-center gap-2">
                      <Globe className="w-3 h-3" />
                      {project.link.replace("https://", "").replace("/", "")}
                    </div>
                    <div className="flex gap-2">
                      <Laptop className="w-3 h-3 text-foreground-subtle" />
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="mt-8 relative h-full w-full group-hover:scale-105 transition-transform duration-700 ease-out">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-background/90 text-primary shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="font-mono text-xs text-primary mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-2 py-1 rounded bg-terminal/10 text-terminal text-[10px] font-mono border border-terminal/20">
                        {project.status}
                      </span>
                      {('isStartup' in project && project.isStartup) && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[9px] font-bold uppercase tracking-wider border border-primary/30 animate-pulse">
                          My Startup
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-foreground-muted text-sm line-clamp-2 mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-muted text-[10px] font-mono text-foreground-muted border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <GlowButton
                        variant="primary"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <Globe className="w-4 h-4" />
                        Live Preview
                      </GlowButton>
                      <GlowButton
                        variant="secondary"
                        size="sm"
                        className="px-4"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <Code2 className="w-4 h-4" />
                      </GlowButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="https://github.com/anshuljangid200" target="_blank" rel="noopener noreferrer">
            <GlowButton variant="ghost" size="lg" className="gap-3">
              <span>View More Projects on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </GlowButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

