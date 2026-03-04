"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Headphones, ArrowRight } from "lucide-react";

type Q = { id: string; question: string; options: string[]; answer: number };

const questions: Q[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `L${i + 1}`,
  question: `Listening question ${i + 1} (replace with real content)`,
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 1,
}));

export default function DiagnosticListeningPage() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const q = questions[idx]!;
  const pct = Math.round(((idx + 1) / questions.length) * 100);
  const canNext = useMemo(() => selected !== null, [selected]);

  function next() {
    if (selected === null) return;
    if (selected === q.answer) setScore((s) => s + 1);
    setSelected(null);
    if (idx + 1 >= questions.length) router.push("/diagnostic/reading");
    else setIdx((v) => v + 1);
  }

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Listening diagnostic"
          subtitle="10 quick questions. You’ll review later."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Headphones className="h-3.5 w-3.5" /> Listening</Badge>}
        />

        <Card className="bg-white/90">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <span>Question {idx + 1} of {questions.length}</span>
              <span className="text-sm text-muted-foreground">Score: {score}</span>
            </CardTitle>
            <Progress value={pct} />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-3xl border bg-muted/30 p-4 text-sm text-muted-foreground">
              Audio player placeholder. Load audio URL here.
            </div>

            <div className="text-base font-semibold">{q.question}</div>

            <RadioGroup
              value={selected === null ? "" : String(selected)}
              onValueChange={(v) => setSelected(Number(v))}
              className="space-y-2"
            >
              {q.options.map((opt, i) => (
                <div key={opt} className="flex items-center gap-3 rounded-3xl border bg-white p-3 shadow-soft hover:bg-muted/30">
                  <RadioGroupItem value={String(i)} />
                  <div className="text-sm font-medium">{opt}</div>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-end">
              <Button className="gap-2" onClick={next} disabled={!canNext}>
                Next <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
