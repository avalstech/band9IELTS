import { Badge } from "@/components/ui/badge";

export default function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <Badge variant="secondary" className="rounded-2xl px-3 py-1 text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="ml-2 font-semibold text-foreground">{value}</span>
    </Badge>
  );
}
