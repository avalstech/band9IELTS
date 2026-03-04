"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function RadioGroup({
  value,
  onValueChange,
  children,
  className,
}: {
  value: string;
  onValueChange: (v: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("grid gap-2", className)}>{React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    // pass down group props if needed
    return React.cloneElement(child as any, { groupValue: value, onGroupChange: onValueChange });
  })}</div>;
}

export function RadioGroupItem({
  value,
  groupValue,
  onGroupChange,
}: {
  value: string;
  groupValue?: string;
  onGroupChange?: (v: string) => void;
}) {
  const checked = groupValue === value;
  return (
    <button
      type="button"
      onClick={() => onGroupChange?.(value)}
      className={cn(
        "h-5 w-5 rounded-full border shadow-soft flex items-center justify-center",
        checked ? "border-primary bg-primary" : "border-input bg-background"
      )}
      aria-pressed={checked}
    >
      <div className={cn("h-2 w-2 rounded-full", checked ? "bg-white" : "bg-transparent")} />
    </button>
  );
}
