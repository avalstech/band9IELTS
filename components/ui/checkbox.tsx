"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function Checkbox({
  checked,
  onCheckedChange,
  className,
}: {
  checked: boolean;
  onCheckedChange?: (v: boolean) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-5 w-5 items-center justify-center rounded-md border border-input bg-background shadow-soft",
        checked ? "bg-primary text-primary-foreground border-primary" : "text-transparent",
        className
      )}
      onClick={() => onCheckedChange?.(!checked)}
      aria-pressed={checked}
    >
      <Check className="h-4 w-4" />
    </button>
  );
}
