"use client";

import { useMemo, useState } from "react";
import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sparkles, ArrowRight, CalendarDays, Target, Timer, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const bands = [5, 6, 6.5, 7, 7.5, 8, 8.5, 9];
const weaknesses = ["Listening", "Reading", "Writing", "Speaking", "Vocabulary", "Grammar", "Coherence", "Pronunciation"];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [goalBand, setGoalBand] = useState<number | null>(7.5);
  const [examDate, setExamDate] = useState("");
  const [testType, setTestType] = useState<"ACADEMIC" | "GENERAL">("ACADEMIC");
  const [dailyMinutes, setDailyMinutes] = useState(30);
  const [selectedWeaknesses, setSelectedWeaknesses] = useState<string[]>(["Writing", "Speaking"]);

  const canContinue = useMemo(() => {
    if (step === 1) return goalBand !== null;
    if (step === 2) return Boolean(examDate);
    if (step === 3) return selectedWeaknesses.length > 0;
    return true;
  }, [step, goalBand, examDate, selectedWeaknesses.length]);

  function toggleWeakness(w: string) {
    setSelectedWeaknesses((prev) => (prev.includes(w) ? prev.filter((x) => x !== w) : [...prev, w]));
  }

  function next() {
    if (!canContinue) return;
    if (step < 4) setStep(step + 1);
    else router.push("/diagnostic");
  }

  return (
    <PageContainer>
      <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-4">
          <SectionTitle
            title="Build your Band plan"
            subtitle="Duolingo fun + Grammarly feedback + Notion clarity — in one flow."
            right={
              <Badge variant="secondary" className="rounded-2xl gap-1">
                <Sparkles className="h-3.5 w-3.5" />
                Setup
              </Badge>
            }
          />

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Step {step} of 4</span>
                <Badge variant="outline" className="rounded-2xl">Blue & White</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 1 ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <Label>Goal band score</Label>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {bands.map((b) => (
                      <button
                        key={b}
                        onClick={() => setGoalBand(b)}
                        className={cn(
                          "rounded-3xl border bg-white px-3 py-3 text-sm font-extrabold shadow-soft transition hover:-translate-y-[1px]",
                          goalBand === b ? "ring-2 ring-ring" : "hover:bg-muted/40"
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We’ll adjust your daily tasks based on how many days you have left.
                  </p>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <Label>Exam date</Label>
                  </div>
                  <Input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} />

                  <Separator />

                  <Label>Test type</Label>
                  <RadioGroup value={testType} onValueChange={(v) => setTestType(v as "ACADEMIC" | "GENERAL")} className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 rounded-3xl border bg-white p-3 shadow-soft">
                      <RadioGroupItem value="ACADEMIC" />
                      <div className="leading-tight">
                        <div className="text-sm font-semibold">Academic</div>
                        <div className="text-xs text-muted-foreground">University and professional</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-3xl border bg-white p-3 shadow-soft">
                      <RadioGroupItem value="GENERAL" />
                      <div className="leading-tight">
                        <div className="text-sm font-semibold">General</div>
                        <div className="text-xs text-muted-foreground">Immigration and work</div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="space-y-3">
                  <Label>Your focus areas</Label>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                    {weaknesses.map((w) => {
                      const on = selectedWeaknesses.includes(w);
                      return (
                        <button
                          key={w}
                          onClick={() => toggleWeakness(w)}
                          className={cn(
                            "flex items-center justify-between rounded-3xl border bg-white px-4 py-3 text-sm shadow-soft transition hover:-translate-y-[1px]",
                            on ? "ring-2 ring-ring" : "hover:bg-muted/40"
                          )}
                        >
                          <span className="font-semibold">{w}</span>
                          <Checkbox checked={on} onCheckedChange={() => toggleWeakness(w)} />
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your diagnostic will validate these and update your plan.
                  </p>
                </div>
              ) : null}

              {step === 4 ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4 text-primary" />
                    <Label>Daily study time</Label>
                  </div>
                  <div className="rounded-3xl border bg-white p-4 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">Minutes per day</div>
                      <Badge variant="secondary" className="rounded-2xl">{dailyMinutes} min</Badge>
                    </div>
                    <div className="mt-4">
                      <Slider value={[dailyMinutes]} onValueChange={(v) => setDailyMinutes(v[0] ?? 30)} min={10} max={90} step={5} />
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">
                      Consistency wins. A simple daily plan done daily beats long sessions once a week.
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="flex items-center justify-between pt-2">
                <Button variant="outline" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1}>
                  Back
                </Button>
                <Button className="gap-2" onClick={next} disabled={!canContinue}>
                  {step === 4 ? "Start diagnostic" : "Continue"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle className="text-base">Plan preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-2xl">Goal {goalBand ?? "—"}</Badge>
                <Badge variant="secondary" className="rounded-2xl">{testType}</Badge>
                <Badge variant="secondary" className="rounded-2xl">{dailyMinutes} min</Badge>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="text-sm font-semibold">What you get</div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Rubric based Writing feedback
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Speaking transcript and drills
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Mock tests and progress analytics
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Next step takes about 20 to 30 minutes.
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="pt-6 text-sm text-muted-foreground">
              Design vibe: friendly cards, confident blue CTAs, calm whitespace, fast clarity.
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
