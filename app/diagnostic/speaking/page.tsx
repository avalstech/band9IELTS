"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mic, ArrowRight } from "lucide-react";

const questions = [
  "What do you usually do on weekends?",
  "Do you prefer studying alone or with others? Why?",
  "Describe a place in your city that you like.",
];

export default function DiagnosticSpeakingPage() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);

  function next() {
    if (idx + 1 >= questions.length) router.push("/diagnostic/results");
    else setIdx((v) => v + 1);
  }

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Speaking diagnostic"
          subtitle="Record 3 short answers. Get transcript and drills."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Mic className="h-3.5 w-3.5" /> Speaking</Badge>}
        />

        <Card className="bg-white/90">
          <CardHeader className="pb-3">
            <CardTitle>Question {idx + 1} of {questions.length}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-3xl border bg-muted/30 p-4 text-sm font-semibold">
              {questions[idx]}
            </div>

            <div className="rounded-3xl border bg-white p-4 shadow-soft">
              <div className="text-sm font-semibold">Recorder</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Hook AudioRecorder + waveform + upload to S3 here.
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button>Start</Button>
                <Button variant="outline">Stop</Button>
                <Button variant="secondary">Playback</Button>
              </div>
            </div>

            <Separator />

            <div className="flex justify-end">
              <Button className="gap-2" onClick={next}>
                Submit <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
