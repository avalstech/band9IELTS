import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

export default function MockTakePage({ searchParams }: { searchParams: { mode?: string } }) {
  const mode = searchParams.mode ?? "full";

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Mock test"
          subtitle={`Mode: ${mode}. This is a timed test shell.`}
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Clock className="h-3.5 w-3.5" /> Timed</Badge>}
        />

        <Card className="bg-white/90">
          <CardContent className="pt-6 space-y-3">
            <div className="rounded-3xl border bg-muted/30 p-4 text-sm">
              Render your section UI here: questions, editor, or recorder.
            </div>

            <div className="flex justify-end">
              <Button href="/mock-tests/results?id=demo" className="gap-2">
                Submit test <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
