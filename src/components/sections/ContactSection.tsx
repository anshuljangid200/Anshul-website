import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/GlowButton";
import { Send, User, Mail, MessageSquare, Briefcase, CheckCircle } from "lucide-react";

const projectTypes = [
  "Full-Stack Development",
  "AI/ML Integration",
  "System Architecture",
  "API Development",
  "Security Audit",
  "Consulting",
];

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 relative" id="contact">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, hsl(187 85% 53% / 0.08), transparent 50%)",
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
            // initiate.connection
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Start a Project
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            Let's build something exceptional together. Share your vision and
            I'll get back within 24 hours.
          </p>
        </motion.div>

        {/* Form container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-background-elevated border border-border border-b-0 rounded-t-xl">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 font-mono text-sm text-foreground-muted">
              new-project.form
            </span>
          </div>

          {/* Form body */}
          <div className="bg-card border border-border rounded-b-xl p-6 md:p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-terminal/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-terminal" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-foreground-muted">
                  I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <User className="w-4 h-4 text-primary" />
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm text-foreground placeholder:text-foreground-subtle"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm text-foreground placeholder:text-foreground-subtle"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Briefcase className="w-4 h-4 text-primary" />
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormState({ ...formState, projectType: type })
                        }
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-sm font-mono border transition-all",
                          formState.projectType === type
                            ? "bg-primary/20 border-primary text-primary"
                            : "bg-muted border-border text-foreground-muted hover:border-primary/50 hover:text-foreground"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm text-foreground placeholder:text-foreground-subtle resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                  />
                </div>

                {/* Submit */}
                <GlowButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </GlowButton>

                {/* Response time note */}
                <p className="text-center text-xs text-foreground-subtle">
                  <span className="text-terminal">●</span> Typical response time: 24 hours
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
