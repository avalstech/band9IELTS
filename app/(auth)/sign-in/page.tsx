import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

export default function SignInPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-md space-y-4">
        <SectionTitle
          title="Sign in"
          subtitle="MVP placeholder. Wire to Cognito + MFA later."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><Lock className="h-3.5 w-3.5" /> Secure</Badge>}
        />

        <Card>
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">Continue</Button>
            <div className="text-xs text-muted-foreground">
              Next: MFA setup and verification screens live under /setup-mfa and /verify-mfa.
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
