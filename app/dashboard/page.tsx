import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import MetricPill from "@/components/common/MetricPill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sparkles, ArrowRight, PencilLine, Mic, ClipboardList, Headphones, BookOpen } from "lucide-react";

const todayTasks = [
  { title: "Vocabulary warm up", mins: 5, href: "/progress" },
  { title: "Listening micro practice", mins: 10, href: "/diagnostic/listening" },
  { title: "Task 2 body paragraph", mins: 15, href: "/writing" },
];

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Today"
          subtitle="Do the next 3 tasks. Improve your band trend with consistency."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Sparkles className="h-3.5 w-3.5" /> Coach</Badge>}
        />

        <div className="grid gap-3 md:grid-cols-3">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Streak</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-3xl font-extrabold">6</div>
              <MetricPill label="days" value="active" />
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Estimated band</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-3xl font-extrabold">6.2</div>
                <MetricPill label="target" value="7.5" />
              </div>
              <Progress value={62} />
              <div className="text-xs text-muted-foreground">Trend based on your last 7 sessions</div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="pt-6 space-y-2">
              <div className="text-sm font-semibold">Fastest improvement path</div>
              <div className="text-xs text-muted-foreground">Daily Writing clarity + Speaking fluency.</div>
              <Button href="/writing" className="w-full gap-2">
                Start Writing <PencilLine className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/90">
          <CardHeader className="pb-3">
            <CardTitle>Today’s plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {todayTasks.map((t) => (
              <a
                key={t.title}
                href={t.href}
                className="flex items-center justify-between rounded-3xl border bg-white p-4 shadow-soft hover:bg-muted/30"
              >
                <div>
                  <div className="text-sm font-semibold">{t.title}</div>
                  <div className="text-xs text-muted-foreground">{t.mins} min</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-3 md:grid-cols-2">
          <Card className="bg-white/90">
            <CardContent className="pt-6 grid grid-cols-2 gap-2">
              <Button href="/writing" className="gap-2"><PencilLine className="h-4 w-4" /> Writing</Button>
              <Button href="/speaking" variant="secondary" className="gap-2"><Mic className="h-4 w-4" /> Speaking</Button>
              <Button href="/mock-tests" variant="outline" className="gap-2"><ClipboardList className="h-4 w-4" /> Mock</Button>
              <Button href="/diagnostic/listening" variant="outline" className="gap-2"><Headphones className="h-4 w-4" /> Listen</Button>
              <Button href="/diagnostic/reading" variant="outline" className="gap-2 col-span-2"><BookOpen className="h-4 w-4" /> Reading</Button>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="text-sm font-semibold">Coach tip</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Fewer ideas, deeper development. Depth boosts Task Response and Coherence.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
