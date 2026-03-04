import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function MockResultsPage() {
  const rows = [
    { k: "Listening", v: 6.5 },
    { k: "Reading", v: 6.0 },
    { k: "Writing", v: 5.5 },
    { k: "Speaking", v: 6.0 },
  ];

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Mock results"
          subtitle="Review mistakes and save them to your Error Bank."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Sparkles className="h-3.5 w-3.5" /> Report</Badge>}
        />

        <Card className="bg-white/90">
          <CardHeader className="pb-3">
            <CardTitle>Overall band</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-4xl font-extrabold">6.0</div>
            <div className="grid gap-2 md:grid-cols-2">
              {rows.map((r) => (
                <div key={r.k} className="flex items-center justify-between rounded-3xl border bg-white p-4 shadow-soft">
                  <div className="text-sm font-semibold">{r.k}</div>
                  <Badge variant="secondary" className="rounded-2xl">{r.v}</Badge>
                </div>
              ))}
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              <Button href="/mock-tests/review?id=demo" className="gap-2">
                Review mistakes <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/mock-tests" variant="outline">Back</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
