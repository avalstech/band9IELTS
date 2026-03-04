import PageContainer from "@/components/common/PageContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode } from "lucide-react";

export default function SetupMfaPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-md space-y-4">
        <SectionTitle
          title="Set up MFA"
          subtitle="Placeholder for Google Authenticator TOTP QR code."
          right={<Badge variant="secondary" className="rounded-2xl gap-1"><QrCode className="h-3.5 w-3.5" /> TOTP</Badge>}
        />
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="rounded-3xl border bg-muted/30 p-4 text-sm">
              QR Code area. Show secret + copy button.
            </div>
            <div className="text-xs text-muted-foreground">
              Implement with Cognito AssociateSoftwareToken + VerifySoftwareToken.
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
