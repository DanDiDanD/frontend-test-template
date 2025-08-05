import { SelectHTMLAttributes } from "react";

type SelectVariant = "solid" | "outline" | "ghost";
type SelectColor = "primary" | "gray-medium";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  variant?: SelectVariant;
  color?: SelectColor;
  options: SelectOption[];
  placeholder?: string;
};

const selectStyles = {
  solid: {
    primary: "bg-primary text-white focus:bg-primary/90 focus:ring-primary",
    "gray-medium":
      "bg-gray-medium text-white focus:bg-gray-medium/90 focus:ring-gray-medium",
  },
  outline: {
    primary:
      "border border-primary text-primary focus:border-primary/80 focus:ring-primary",
    "gray-medium":
      "border border-gray-medium text-gray-medium focus:border-gray-medium/80 focus:ring-gray-medium",
  },
  ghost: {
    primary:
      "text-primary hover:bg-primary/10 focus:bg-primary/10 focus:ring-primary",
    "gray-medium":
      "text-gray-medium hover:bg-gray-medium/10 focus:bg-gray-medium/10 focus:ring-gray-medium",
  },
};

export default function Select({
  variant = "outline",
  color = "gray-medium",
  options,
  placeholder = "",
  disabled,
  className = "",
  ...props
}: SelectProps) {
  const baseClasses =
    "pl-4 py-4 text-lg font-normal leading-6 rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = selectStyles[variant][color];
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <select className={combinedClasses} disabled={disabled} {...props}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
