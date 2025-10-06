import { cn } from "@/lib/utils";
import React from "react";

function SectionPage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex-1 bg-[#191919] p-6 flex flex-col gap-4 rounded-2xl b-10 w-fit-content max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export default SectionPage;
