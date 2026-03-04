import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Headphones, BookOpen, PencilLine, Mic, ArrowRight } from "lucide-react";

const items = [
  { href: "/diagnostic/listening", title: "Listening", desc: "10 quick questions", icon: Headphones },
  { href: "/diagnostic/reading", title: "Reading", desc: "10 quick questions", icon: BookOpen },
  { href: "/diagnostic/writing", title: "Writing", desc: "1 Task 2 submission", icon: PencilLine },
  { href: "/diagnostic/speaking", title: "Speaking", desc: "3 recorded answers", icon: Mic },
];

export default function DiagnosticIntroPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Diagnostic"
          subtitle="Quick baseline so your plan is truly personalized."
          right={<Badge variant="secondary" className="rounded-2xl">Baseline</Badge>}
        />

        <div className="grid gap-3 md:grid-cols-2">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Card key={it.href} className="bg-white/90">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white ring-1 ring-border shadow-soft">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {it.title}
                  </CardTitle>
                  <CardDescription>{it.desc}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    Tip: don’t overthink. We just need your baseline.
                  </div>
                  <Button href={it.href} className="gap-2">
                    Start <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-muted/30">
          <CardContent className="pt-6 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">When you finish, you’ll see your baseline band.</div>
              <div className="text-xs text-muted-foreground">Then you’ll get today’s plan.</div>
            </div>
            <Button variant="outline" href="/diagnostic/results">View results</Button>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
