import { SelectHTMLAttributes } from "react";

type SelectVariant = "solid" | "outline";
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
    primary: "bg-primary text-white focus:bg-primary/90",
    "gray-medium": "bg-gray-medium text-white focus:bg-gray-medium/90",
  },
  outline: {
    primary: "border border-primary text-primary focus:border-primary/80",
    "gray-medium":
      "border border-gray-medium text-gray-medium focus:border-gray-medium/80",
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
    "px-5 py-4 md:px-6 md:py-5 text-sm md:text-base font-bold leading-4 rounded-lg transition-colors w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";
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
