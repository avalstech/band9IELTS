import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck } from "lucide-react";

export default function MockReviewPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <SectionTitle
          title="Review mistakes"
          subtitle="This is where improvement happens."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><ClipboardCheck className="h-3.5 w-3.5" /> Review</Badge>}
        />

        <Card className="bg-white/90">
          <CardHeader className="pb-3">
            <CardTitle>Mistakes list</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-3xl border bg-white p-4 shadow-soft text-sm">
                Mistake #{i + 1} with explanation and the correct answer.
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
