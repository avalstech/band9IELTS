import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-5xl px-4 py-6">{children}</div>;
}
