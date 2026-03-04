"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PencilLine, Clock, ArrowRight } from "lucide-react";

export default function DiagnosticWritingPage() {
  const router = useRouter();
  const [text, setText] = useState("");
  const words = useMemo(() => (text.trim() ? text.trim().split(/\s+/).length : 0), [text]);

  const prompt =
    "Task 2: Some people think governments should spend money on public services rather than the arts. Discuss both views and give your opinion.";

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Writing diagnostic"
          subtitle="One Task 2 response. We’ll give rubric based feedback."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><PencilLine className="h-3.5 w-3.5" /> Writing</Badge>}
        />

        <Card className="bg-white/90">
          <CardHeader className="pb-3">
            <CardTitle>Prompt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-3xl border bg-muted/30 p-4 text-sm">{prompt}</div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="rounded-2xl">Words: {words}</Badge>
              <Badge variant="outline" className="rounded-2xl gap-1"><Clock className="h-3.5 w-3.5" /> Timer</Badge>
            </div>

            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your essay here..."
              className="min-h-[320px]"
            />

            <Separator />

            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Minimum 120 words for stable feedback</div>
              <Button className="gap-2" disabled={words < 120} onClick={() => router.push("/diagnostic/speaking")}>
                Submit and continue <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
