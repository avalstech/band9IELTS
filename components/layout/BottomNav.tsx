"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, PencilLine, Mic, ClipboardList, ChartLine } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/writing", label: "Writing", icon: PencilLine },
  { href: "/speaking", label: "Speaking", icon: Mic },
  { href: "/mock-tests", label: "Mock", icon: ClipboardList },
  { href: "/progress", label: "Progress", icon: ChartLine },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-5xl grid-cols-5 gap-1 px-2">
        {items.map((it) => {
          const active = pathname === it.href || pathname.startsWith(it.href + "/");
          const Icon = it.icon;

          return (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 rounded-2xl transition",
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-12 items-center justify-center rounded-3xl",
                  active ? "bg-muted ring-1 ring-border shadow-soft" : "bg-transparent"
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-[11px] font-medium">{it.label}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
