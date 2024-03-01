import { Suspense } from "react";

type TILLayoutProps = {
  children: React.ReactNode;
};

export default function TILLayout({ children }: TILLayoutProps) {
  return (
    <div className="max-w-[80ch] mx-auto p-4">
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
