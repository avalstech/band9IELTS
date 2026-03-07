"use client";

import { useMemo, useState } from "react";
import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PencilLine, Clock, ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WritingStudioPage() {
  const router = useRouter();
  const [task, setTask] = useState<"TASK_1" | "TASK_2">("TASK_2");
  const [text, setText] = useState("");

  const words = useMemo(() => (text.trim() ? text.trim().split(/\s+/).length : 0), [text]);

  const prompt2 =
    "Task 2: Some people believe that technology has made our lives more stressful. To what extent do you agree or disagree?";

  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Writing Studio"
          subtitle="Write, submit, get rubric feedback, then rewrite."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Sparkles className="h-3.5 w-3.5" /> Grammarly vibe</Badge>}
        />

        <div className="grid gap-4 md:grid-cols-[.95fr_1.05fr]">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <PencilLine className="h-4 w-4 text-primary" />
                Task
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Tabs value={task} onValueChange={(v) => setTask(v as "TASK_1" | "TASK_2")}>
                <TabsList>
                  <TabsTrigger value="TASK_1">Task 1</TabsTrigger>
                  <TabsTrigger value="TASK_2">Task 2</TabsTrigger>
                </TabsList>

                <TabsContent value="TASK_1">
                  <div className="rounded-3xl border bg-muted/30 p-4 text-sm">
                    Task 1 (Academic or General) prompt goes here in the full build.
                  </div>
                </TabsContent>

                <TabsContent value="TASK_2">
                  <div className="rounded-3xl border bg-muted/30 p-4 text-sm">{prompt2}</div>
                </TabsContent>
              </Tabs>

              <Separator />

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-2xl">Words: {words}</Badge>
                <Badge variant="outline" className="rounded-2xl gap-1"><Clock className="h-3.5 w-3.5" /> Timer</Badge>
              </div>

              <div className="text-xs text-muted-foreground">
                Goal: clear topic sentences, strong examples, and precise vocabulary.
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle>Editor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your response here..."
                className="min-h-[340px]"
              />

              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">Recommended 250+ words for Task 2</div>
                <Button
                  className="gap-2"
                  disabled={task === "TASK_2" ? words < 180 : words < 120}
                  onClick={() => router.push("/writing/feedback")}
                >
                  Submit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
