import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "online" | "busy" | "away";
  label?: string;
  className?: string;
}

export const StatusBadge = ({ status, label, className }: StatusBadgeProps) => {
  const statusColors = {
    online: "bg-terminal",
    busy: "bg-accent",
    away: "bg-foreground-subtle",
  };

  const statusLabels = {
    online: "Available for work",
    busy: "Currently busy",
    away: "Away",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            statusColors[status]
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-2.5 w-2.5 rounded-full",
            statusColors[status]
          )}
        />
      </span>
      <span className="font-mono text-xs text-foreground-muted">
        {label || statusLabels[status]}
      </span>
    </div>
  );
};
