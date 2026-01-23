import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(187_85%_53%/0.4)] border-primary/50",
      secondary:
        "bg-transparent text-foreground border-border hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_hsl(187_85%_53%/0.2)]",
      ghost:
        "bg-transparent text-foreground-muted hover:text-foreground hover:bg-muted border-transparent",
      accent:
        "bg-accent text-accent-foreground hover:shadow-[0_0_30px_hsl(38_92%_55%/0.4)] border-accent/50",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-8 py-3 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
