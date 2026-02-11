"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-surface-900",
          variant === "primary" &&
            "bg-primary-500 text-white hover:bg-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-400/30",
          variant === "secondary" &&
            "bg-accent-500 text-white hover:bg-accent-400 shadow-lg shadow-accent-500/25",
          variant === "outline" &&
            "border-2 border-primary-400 text-primary-300 hover:bg-primary-400/10",
          variant === "ghost" &&
            "text-gray-300 hover:bg-surface-400 hover:text-white",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
