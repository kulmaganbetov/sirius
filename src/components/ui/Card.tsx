import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  className,
  hover = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface-700 rounded-2xl p-6 shadow-sm border border-surface-500",
        hover &&
          "transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5 hover:-translate-y-1 hover:border-surface-400",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
