import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sparkles, ArrowRight, PencilLine } from "lucide-react";

export default function WritingFeedbackPage() {
  const rubric = [
    { k: "Task response", v: 5.5, note: "Your position is present but not fully developed." },
    { k: "Coherence and cohesion", v: 5.0, note: "Paragraph links need clearer signposting." },
    { k: "Lexical resource", v: 6.0, note: "Good range, but some repetition." },
    { k: "Grammar", v: 5.5, note: "Try more complex sentence structures safely." },
  ];

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Writing feedback"
          subtitle="Rubric based guidance + rewrite steps to raise your band."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Sparkles className="h-3.5 w-3.5" /> Feedback</Badge>}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Estimated band</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-4xl font-extrabold">5.5</div>
              <div className="grid gap-2">
                {rubric.map((r) => (
                  <div key={r.k} className="rounded-3xl border bg-white p-4 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">{r.k}</div>
                      <Badge variant="secondary" className="rounded-2xl">{r.v}</Badge>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{r.note}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Rewrite plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-3xl border bg-muted/30 p-4 text-sm">
                1) Rewrite your introduction with a clear position.{"\n"}
                2) Add one strong example per body paragraph.{"\n"}
                3) Replace 5 general words with precise collocations.{"\n"}
                4) Fix sentence boundaries (avoid run-ons).
              </div>

              <Separator />

              <div className="grid gap-2">
                <Button className="gap-2"><PencilLine className="h-4 w-4" /> Rewrite now</Button>
                <Button variant="outline" href="/writing">Back to editor</Button>
                <Button variant="secondary" href="/dashboard" className="gap-2">
                  Save and return <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-xs text-muted-foreground">
                In the full build, “Rewrite now” opens a guided rewrite panel with side-by-side comparison.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
