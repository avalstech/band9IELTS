import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const v =
    variant === "default"
      ? "bg-primary text-primary-foreground"
      : variant === "secondary"
      ? "bg-secondary text-secondary-foreground"
      : "border border-input bg-background text-foreground";
  return (
    <div
      className={cn("inline-flex items-center rounded-2xl px-3 py-1 text-xs font-semibold shadow-soft", v, className)}
      {...props}
    />
  );
}
