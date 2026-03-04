import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

export default function VerifyMfaPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-md space-y-4">
        <SectionTitle
          title="Verify MFA code"
          subtitle="Enter the 6 digit code from Google Authenticator."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Verify</Badge>}
        />
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="space-y-2">
              <Label>Authentication code</Label>
              <Input inputMode="numeric" placeholder="123456" />
            </div>
            <Button className="w-full">Verify</Button>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
