import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonColor = "primary" | "gray-medium" | "danger" | "icon-primary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  loading?: boolean;
  children: ReactNode;
};

const buttonStyles = {
  solid: {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    "gray-medium":
      "bg-gray-medium text-white hover:bg-gray-medium/90 focus:ring-gray-medium",
    danger: "bg-red-600 text-white hover:bg-red-600/90 focus:ring-red-600",
    "icon-primary":
      "bg-icon-primary text-white hover:bg-icon-primary/90 focus:ring-icon-primary",
  },
  outline: {
    primary:
      "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    "gray-medium":
      "border border-gray-medium text-gray-medium hover:bg-gray-medium hover:text-white focus:ring-gray-medium",
    danger:
      "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-600",
    "icon-primary":
      "border border-icon-primary text-icon-primary hover:bg-icon-primary hover:text-white focus:ring-icon-primary",
  },
  ghost: {
    primary: "text-primary hover:bg-primary/10 focus:ring-primary",
    "gray-medium":
      "text-gray-medium hover:bg-gray-medium/10 focus:ring-gray-medium",
    danger: "text-red-600 hover:bg-red-600/10 focus:ring-red-600",
    "icon-primary":
      "text-icon-primary hover:bg-icon-primary/10 focus:ring-icon-primary",
  },
};

export default function Button({
  variant = "solid",
  color = "primary",
  loading = false,
  disabled,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "px-5 py-4 md:px-6 md:py-5 text-sm md:text-base font-bold leading-4 rounded-lg transition-colors w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = buttonStyles[variant][color];

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-describedby={loading ? "loading-text" : undefined}
      {...props}
    >
      {loading ? (
        <>
          <span aria-hidden="true">Loading...</span>
          <span id="loading-text" className="sr-only">
            Please wait, content is loading
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
