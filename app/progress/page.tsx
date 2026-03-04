import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChartLine } from "lucide-react";

export default function ProgressPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Progress"
          subtitle="Band trend, error patterns, vocabulary growth."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><ChartLine className="h-3.5 w-3.5" /> Analytics</Badge>}
        />

        <div className="grid gap-3 md:grid-cols-3">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Writing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-extrabold">5.8</div>
              <Progress value={58} />
              <div className="text-xs text-muted-foreground">Based on last 7 submissions</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Speaking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-extrabold">6.1</div>
              <Progress value={61} />
              <div className="text-xs text-muted-foreground">Fluency improving, grammar still unstable</div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="text-sm font-semibold">Next best action</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Do 2 rewrites this week. Rewrites usually raise Coherence and Grammar faster.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Most common errors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Run-on sentences", "Weak topic sentences", "Repetition of simple words", "Article usage"].map((e) => (
                <div key={e} className="rounded-3xl border bg-white p-4 shadow-soft text-sm">{e}</div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Vocabulary bank</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["play a crucial role", "a growing concern", "it is widely believed", "from my perspective"].map((v) => (
                <div key={v} className="rounded-3xl border bg-white p-4 shadow-soft text-sm">{v}</div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
