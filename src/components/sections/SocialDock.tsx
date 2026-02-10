import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Mail,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/anshuljangid200",
    color: "hover:text-foreground hover:border-foreground",
    label: "git",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anshul-jangid-78a406256/",
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]",
    label: "in",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/aanshuljangid/",
    color: "hover:text-[#E4405F] hover:border-[#E4405F]",
    label: "ig",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@anshuljangid",
    color: "hover:text-[#FF0000] hover:border-[#FF0000]",
    label: "yt",
  },
  {
    name: "Snapchat",
    icon: MessageCircle,
    href: "https://snapchat.com/add/anshuljangid",
    color: "hover:text-[#FFFC00] hover:border-[#FFFC00]",
    label: "snap",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:anshuljangid.indian@gmail.com",
    color: "hover:text-primary hover:border-primary",
    label: "mail",
  },
];

export const SocialDock = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, hsl(187 85% 53% / 0.05), transparent 50%)",
        }}
      />

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="font-mono text-sm text-primary mb-2">
            // connect.social
          </div>
          <h2 className="text-2xl font-semibold text-foreground">
            Command Center
          </h2>
        </motion.div>

        {/* Dock container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-background-panel border border-border rounded-2xl p-3 shadow-xl">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "group relative flex flex-col items-center justify-center w-14 h-14 rounded-xl border border-border bg-card transition-all duration-300",
                  link.color
                )}
              >
                <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -bottom-6 font-mono text-[10px] text-foreground-subtle opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.label}
                </span>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl bg-current opacity-10 blur-xl" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Keyboard hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-foreground-subtle">
            <kbd className="px-2 py-1 bg-muted rounded text-foreground-muted border border-border">
              ⌘
            </kbd>
            <span>+</span>
            <kbd className="px-2 py-1 bg-muted rounded text-foreground-muted border border-border">
              K
            </kbd>
            <span className="ml-2">to quick connect</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
