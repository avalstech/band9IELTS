import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardList, ArrowRight } from "lucide-react";

const modes = [
  { id: "full", title: "Full mock test", desc: "Timed sections and score report" },
  { id: "listening", title: "Listening only", desc: "Timed practice + review" },
  { id: "reading", title: "Reading only", desc: "Speed + accuracy" },
  { id: "writing", title: "Writing only", desc: "Submit Task 2 for scoring" },
  { id: "speaking", title: "Speaking simulation", desc: "Record answers + feedback" },
];

export default function MockTestsMenuPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Mock Tests"
          subtitle="Timed practice with a clear score report and review."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><ClipboardList className="h-3.5 w-3.5" /> Mock</Badge>}
        />

        <div className="grid gap-3 md:grid-cols-2">
          {modes.map((m) => (
            <Card key={m.id} className="bg-white/90">
              <CardHeader className="pb-2">
                <CardTitle>{m.title}</CardTitle>
                <CardDescription>{m.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">Review mistakes to improve faster.</div>
                <Button href={`/mock-tests/take?mode=${m.id}`} className="gap-2">
                  Start <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
