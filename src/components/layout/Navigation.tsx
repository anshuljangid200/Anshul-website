import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-sm text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">{"<"}</span>
            <span className="font-semibold">AJ</span>
            <span className="text-primary">{"/>"}</span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-sm text-foreground-muted hover:text-foreground hover:bg-muted transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:shadow-[0_0_20px_hsl(187_85%_53%/0.4)] transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
