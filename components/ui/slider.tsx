"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Slider({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className,
}: {
  value: number[];
  onValueChange: (v: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}) {
  const v = value?.[0] ?? min;
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={v}
      onChange={(e) => onValueChange([Number(e.target.value)])}
      className={cn("w-full accent-blue-600", className)}
    />
  );
}
