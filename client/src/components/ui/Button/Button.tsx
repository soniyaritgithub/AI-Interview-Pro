import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  loading = false,
  fullWidth = false,
  className,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        // Base
        "inline-flex items-center justify-center",
        "rounded-xl",
        "font-semibold",
        "transition-all duration-300 ease-in-out",
        "select-none",
        "whitespace-nowrap",

        // Size
        "h-12",
        "px-6",

        // Typography
        "text-sm sm:text-base",

        // Focus
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-violet-500",
        "focus-visible:ring-offset-2",

        // Disabled
        "disabled:pointer-events-none",
        "disabled:opacity-50",

        // Hover
        "hover:-translate-y-0.5",
        "active:translate-y-0",

        // Responsive
        fullWidth && "w-full",

        // Variants
        {
          "bg-violet-600 text-white shadow-lg hover:bg-violet-700 hover:shadow-xl":
            variant === "primary",

          "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100":
            variant === "secondary",

          "border border-violet-600 text-violet-600 hover:bg-violet-50":
            variant === "outline",

          "bg-transparent text-gray-700 hover:bg-gray-100":
            variant === "ghost",
        },

        // Dark Mode
        "dark:focus-visible:ring-violet-400",

        variant === "secondary" &&
          "dark:bg-zinc-900 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800",

        variant === "outline" &&
          "dark:border-violet-500 dark:text-violet-400 dark:hover:bg-violet-950/40",

        variant === "ghost" &&
          "dark:text-gray-300 dark:hover:bg-zinc-800",

        className
      )}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              opacity=".2"
            />
            <path
              d="M22 12A10 10 0 0012 2"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>

          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}