import { motion } from "framer-motion";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { GlowButton } from "@/components/ui/GlowButton";
import { TypingText } from "@/components/ui/TypingText";
import { ArrowRight, Terminal } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(187 85% 53% / 0.08), transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Status */}
            <StatusBadge status="online" />

            {/* Terminal-style intro */}
            <div className="font-mono text-sm text-foreground-muted">
              <span className="text-primary">→</span> ~/anshul-jangid
            </div>

            {/* Name */}
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Anshul</span>
              <br />
              <span className="gradient-text-primary">Jangid</span>
            </h1>

            {/* Role with typing effect */}
            <div className="flex items-center gap-3 text-xl lg:text-2xl text-foreground-muted">
              <Terminal className="w-5 h-5 text-primary" />
              <TypingText
                text="Full-Stack Engineer & AI Systems Builder"
                delay={0.5}
                className="font-mono"
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-lg text-foreground-muted max-w-lg leading-relaxed"
            >
              Building intelligent systems, scalable platforms, and premium
              digital products. CTO-caliber engineering meets startup speed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#projects" className="no-underline">
                <GlowButton variant="primary" size="lg">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </GlowButton>
              </a>
              <a href="#contact" className="no-underline">
                <GlowButton variant="secondary" size="lg">
                  Get in Touch
                </GlowButton>
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="flex gap-8 pt-8 border-t border-border"
            >
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-foreground-muted">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-foreground-muted">
                  Projects Built
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-foreground-muted">
                  Lines of Code
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Portrait/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />

            {/* Portrait container */}
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src={heroPortrait}
                alt="Anshul Jangid"
                className="w-full h-auto object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Floating code snippets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="font-mono text-xs bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border">
                  <span className="text-foreground-subtle">const</span>{" "}
                  <span className="text-primary">engineer</span>{" "}
                  <span className="text-foreground-subtle">=</span>{" "}
                  <span className="text-accent">{"{"}</span>
                  <br />
                  <span className="ml-4 text-foreground-muted">
                    stack: <span className="text-terminal">"full"</span>,
                  </span>
                  <br />
                  <span className="ml-4 text-foreground-muted">
                    focus: <span className="text-terminal">"AI × Systems"</span>
                  </span>
                  <br />
                  <span className="text-accent">{"}"}</span>
                  <span className="text-foreground-subtle">;</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
