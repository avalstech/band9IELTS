"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TabsCtx = {
  value: string;
  setValue: (v: string) => void;
};

const Ctx = React.createContext<TabsCtx | null>(null);

export function Tabs({
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
  return (
    <Ctx.Provider value={{ value, setValue: onValueChange }}>
      <div className={cn("w-full", className)}>{children}</div>
    </Ctx.Provider>
  );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("inline-grid h-11 w-full grid-cols-2 rounded-2xl bg-muted p-1", className)}>{children}</div>;
}

export function TabsTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(Ctx);
  if (!ctx) return null;
  const active = ctx.value === value;
  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={cn(
        "rounded-xl px-3 text-sm font-semibold transition",
        active ? "bg-white shadow-soft ring-1 ring-border" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(Ctx);
  if (!ctx || ctx.value !== value) return null;
  return <div className={cn("mt-3", className)}>{children}</div>;
}
