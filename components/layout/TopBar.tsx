"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles } from "lucide-react";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-white shadow-soft ring-1 ring-border">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">IELTS Coach</div>
            <div className="text-xs text-muted-foreground">Blue plan. Clear results.</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-2xl gap-1">
            <Sparkles className="h-3.5 w-3.5" />
            Coach Mode
          </Badge>
          <Button asChild size="sm" className="rounded-2xl">
            <Link href="/onboarding">New plan</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
