import { ReactNode } from "react";

type FormCardProps = {
  children: ReactNode;
};

export default function FormCard({
  children,
}: FormCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl">
      {children}
    </div>
  );
}