import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  className?: string;
  title?: string;
  showDots?: boolean;
}

export const Panel = ({ children, className, title, showDots = true }: PanelProps) => {
  return (
    <div className={cn("panel overflow-hidden", className)}>
      {(showDots || title) && (
        <div className="panel-header">
          {showDots && (
            <div className="flex items-center gap-1.5">
              <span className="panel-dot panel-dot-red" />
              <span className="panel-dot panel-dot-yellow" />
              <span className="panel-dot panel-dot-green" />
            </div>
          )}
          {title && (
            <span className="ml-3 font-mono text-sm text-foreground-muted">
              {title}
            </span>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

interface PanelCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const PanelCard = ({ children, className, glowOnHover = true }: PanelCardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-4 transition-all duration-300",
        glowOnHover && "hover:border-primary/50 hover:shadow-[0_0_20px_hsl(187_85%_53%/0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
};
