"use client";

import { useState } from "react";
import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mic, ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const deck = [
  "Do you work or study?",
  "What kind of music do you like?",
  "Describe a place you often visit in your city.",
];

export default function SpeakingStudioPage() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Speaking Studio"
          subtitle="Record, get transcript, then practice again with drills."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Sparkles className="h-3.5 w-3.5" /> Coach</Badge>}
        />

        <Card className="bg-white/90">
          <CardHeader className="pb-3">
            <CardTitle>Question {idx + 1} of {deck.length}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-3xl border bg-muted/30 p-4 text-sm font-semibold">
              {deck[idx]}
            </div>

            <div className="rounded-3xl border bg-white p-4 shadow-soft">
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-primary" />
                <div className="text-sm font-semibold">Recorder</div>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Add waveform + timer + playback. Upload audio to S3 in the backend integration step.
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button>Start</Button>
                <Button variant="outline">Stop</Button>
                <Button variant="secondary">Playback</Button>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIdx((v) => Math.max(0, v - 1))} disabled={idx === 0}>
                Previous
              </Button>
              <Button
                className="gap-2"
                onClick={() => {
                  if (idx + 1 >= deck.length) router.push("/speaking/feedback");
                  else setIdx((v) => v + 1);
                }}
              >
                Submit <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
