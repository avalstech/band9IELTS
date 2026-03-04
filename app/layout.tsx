import "./globals.css";
import Providers from "./providers";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "IELTS Coach",
  description: "Duolingo + Grammarly + Notion vibes for IELTS prep",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
