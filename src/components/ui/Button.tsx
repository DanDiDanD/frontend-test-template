import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "solid" | "outline";
type ButtonColor = "primary" | "gray-medium" | "danger";

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
  },
  outline: {
    primary:
      "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    "gray-medium":
      "border border-gray-medium text-gray-medium hover:bg-gray-medium hover:text-white focus:ring-gray-medium",
    danger:
      "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-600",
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
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
