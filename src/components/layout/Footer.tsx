import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#"
              className="flex items-center gap-2 font-mono text-sm text-foreground"
            >
              <span className="text-primary">{"<"}</span>
              <span className="font-semibold">Anshul Jangid</span>
              <span className="text-primary">{"/>"}</span>
            </a>
            <p className="text-sm text-foreground-subtle">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Built with */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-foreground-subtle"
          >
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>and lots of</span>
            <span className="font-mono text-primary">{"</code>"}</span>
          </motion.div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/anshuljangid200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-muted transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anshul-jangid-78a406256/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-muted transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:anshuljangid.indian@gmail.com"
              className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-muted transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-foreground-subtle font-mono">
            <span>system.status: <span className="text-terminal">online</span></span>
            <span className="text-border">|</span>
            <span>location: <span className="text-foreground-muted">India 🇮🇳</span></span>
            <span className="text-border">|</span>
            <span>timezone: <span className="text-foreground-muted">IST (UTC+5:30)</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
