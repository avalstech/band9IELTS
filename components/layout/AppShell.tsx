"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

const HIDE_NAV_PREFIXES = ["/sign-in", "/setup-mfa", "/verify-mfa"];

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideNav = HIDE_NAV_PREFIXES.some((p) => pathname.startsWith(p));

  return (
    <div className="min-h-dvh">
      {!hideNav && <TopBar />}
      <main className={hideNav ? "" : "pb-20"}>{children}</main>
      {!hideNav && <BottomNav />}
    </div>
  );
}
