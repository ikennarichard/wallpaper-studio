import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass = "rounded-lg items-center justify-center";

  const variantClasses = {
    primary: "bg-primary-500",
    secondary: "bg-gray-200",
    ghost: "bg-transparent",
    light: 'bg-transsparent'
  };

  const sizeClasses = {
    sm: "px-3 py-2",
    md: "px-4 py-3",
    lg: "px-6 py-4",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const textColorClasses = {
    primary: "text-white",
    secondary: "text-gray-800",
    ghost: "text-gray-600",
    light: "text-custom-light",
  };

  return (
    <TouchableOpacity
      className={`${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <Text
        className={`font-semibold ${textSizeClasses[size]} ${textColorClasses[variant]}`}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
