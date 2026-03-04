import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sparkles, ArrowRight } from "lucide-react";

export default function SpeakingFeedbackPage() {
  const rubric = [
    { k: "Fluency", v: 6.0, note: "Good flow, reduce fillers." },
    { k: "Vocabulary", v: 6.0, note: "Add collocations and topic phrases." },
    { k: "Grammar", v: 5.5, note: "Use more complex sentences safely." },
    { k: "Pronunciation", v: 6.0, note: "Clear overall. Work on stress patterns." },
  ];

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Speaking feedback"
          subtitle="Transcript + key fixes + next drills."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Sparkles className="h-3.5 w-3.5" /> Feedback</Badge>}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Estimated band</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-4xl font-extrabold">6.0</div>
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
              <CardTitle>Transcript and drills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-3xl border bg-muted/30 p-4 text-sm">
                Transcript appears here with highlights for repeated words, fillers, and grammar fixes.
              </div>

              <Separator />

              <div className="rounded-3xl border bg-white p-4 text-sm shadow-soft">
                Drills{"\n"}
                1) Answer again using 2 linking phrases{"\n"}
                2) Replace 3 repeated words with synonyms{"\n"}
                3) Add one personal example
              </div>

              <div className="grid gap-2">
                <Button>Try again</Button>
                <Button variant="outline" href="/speaking">Back</Button>
                <Button variant="secondary" href="/dashboard" className="gap-2">
                  Return <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
