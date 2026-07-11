import React, { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-primary text-white hover:bg-primary-hover": variant === "primary",
            "bg-secondary text-white hover:bg-secondary-hover": variant === "secondary",
            "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700": variant === "outline",
            "bg-transparent hover:bg-gray-100 text-gray-700": variant === "ghost",
            "h-7 px-2 text-xs": size === "sm",
            "h-8 px-3 text-sm": size === "md",
            "h-9 px-4 text-sm": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
