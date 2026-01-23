import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiGooglecloud,
  SiTailwindcss,
  SiGraphql,
  SiRedis,
  SiGit,
} from "react-icons/si";

const techCategories = [
  {
    name: "Languages",
    color: "text-primary",
    borderColor: "border-primary/30",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    name: "Frontend",
    color: "text-accent",
    borderColor: "border-accent/30",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend & APIs",
    color: "text-terminal",
    borderColor: "border-terminal/30",
    items: [
      { name: "GraphQL", icon: SiGraphql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    name: "AI & ML",
    color: "text-secondary",
    borderColor: "border-secondary/30",
    items: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Python ML", icon: SiPython },
    ],
  },
  {
    name: "DevOps & Cloud",
    color: "text-foreground",
    borderColor: "border-foreground/30",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: SiAmazon },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Git", icon: SiGit },
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-20" />

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
            // system.loadout
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tech Arsenal
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            The tools and technologies I use to build scalable systems and
            intelligent applications.
          </p>
        </motion.div>

        {/* Terminal-style container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-background-elevated border border-border border-b-0 rounded-t-lg">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 font-mono text-sm text-foreground-muted">
              tech-stack.config
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-background-panel border border-border rounded-b-lg p-6">
            {/* Command line */}
            <div className="font-mono text-sm text-foreground-muted mb-6">
              <span className="text-terminal">→</span>{" "}
              <span className="text-primary">npm</span> run list-capabilities
            </div>

            {/* Tech categories grid */}
            <div className="space-y-6">
              {techCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 }}
                  className={cn(
                    "p-4 rounded-lg border bg-card/50",
                    category.borderColor
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        category.color.replace("text-", "bg-")
                      )}
                    />
                    <span className={cn("font-mono text-sm", category.color)}>
                      {category.name}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.items.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + categoryIndex * 0.1 + techIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg border border-border hover:border-primary/50 hover:shadow-[0_0_15px_hsl(187_85%_53%/0.15)] transition-all duration-300 cursor-default"
                      >
                        <tech.icon className="w-4 h-4 text-foreground-muted group-hover:text-primary transition-colors" />
                        <span className="font-mono text-sm text-foreground-muted group-hover:text-foreground transition-colors">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer command */}
            <div className="font-mono text-sm text-foreground-subtle mt-6 pt-4 border-t border-border">
              <span className="text-terminal">✓</span> 16 technologies loaded
              <span className="text-primary animate-typing-cursor ml-1">▋</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
