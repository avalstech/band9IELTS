import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import MetricPill from "@/components/common/MetricPill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sparkles, ArrowRight } from "lucide-react";

export default function DiagnosticResultsPage() {
  const scores = [
    { skill: "Listening", band: 6.5 },
    { skill: "Reading", band: 6.0 },
    { skill: "Writing", band: 5.5 },
    { skill: "Speaking", band: 6.0 },
  ];
  const weaknesses = ["Task Response", "Coherence and Cohesion", "Sentence variety"];

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Your baseline"
          subtitle="Estimates improve as you practice. Focus on the next best actions."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Sparkles className="h-3.5 w-3.5" /> Results</Badge>}
        />

        <div className="grid gap-3 md:grid-cols-2">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Band estimates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {scores.map((s) => (
                <div key={s.skill} className="flex items-center justify-between rounded-3xl border bg-white p-3 shadow-soft">
                  <div className="text-sm font-semibold">{s.skill}</div>
                  <MetricPill label="Band" value={String(s.band)} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Top weaknesses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {weaknesses.map((w) => (
                <div key={w} className="rounded-3xl border bg-white p-3 text-sm shadow-soft">
                  {w}
                </div>
              ))}
              <Separator />
              <div className="text-xs text-muted-foreground">
                Your dashboard will prioritize these in today’s plan.
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/30">
          <CardContent className="pt-6 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Go to your daily plan</div>
              <div className="text-xs text-muted-foreground">Start with Writing and Speaking for the fastest gains.</div>
            </div>
            <Button href="/dashboard" className="gap-2">
              Dashboard <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
