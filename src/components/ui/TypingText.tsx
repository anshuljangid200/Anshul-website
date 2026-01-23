import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  showCursor?: boolean;
}

export const TypingText = ({
  text,
  className,
  delay = 0,
  showCursor = true,
}: TypingTextProps) => {
  const characters = text.split("");

  return (
    <span className={cn("inline-flex", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.03,
            delay: delay + index * 0.03,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + characters.length * 0.03 }}
          className="ml-0.5 text-primary animate-typing-cursor"
        >
          ▋
        </motion.span>
      )}
    </span>
  );
};
